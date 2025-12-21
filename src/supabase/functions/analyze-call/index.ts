/**
 * Edge Function: Analyze Call
 * 
 * Purpose: Analyze sales call using Gemini 2.0 Pro + Function Calling
 * 
 * Flow:
 * 1. Receive transcript (from Speech-to-Text or direct)
 * 2. Call Gemini Pro for analysis
 * 3. Use Function Calling to extract structured actions
 * 4. Calculate deal health
 * 5. Save to database
 * 6. Return analysis
 * 
 * Model: gemini-2.0-pro-exp
 * Tools: functions (action extraction)
 * Cost: ~$0.01 per call
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') || '';
const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-pro-exp:generateContent';

const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface AnalyzeCallRequest {
  transcript: string;
  leadId?: string;
  dealId?: string;
  callDate?: string;
  participants?: string[];
}

// Define function schema for action extraction
const ACTION_EXTRACTION_FUNCTION = {
  name: 'extract_actions',
  description: 'Extract structured action items from sales call',
  parameters: {
    type: 'object',
    properties: {
      actions: {
        type: 'array',
        description: 'Array of action items extracted from call',
        items: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['email', 'task', 'meeting', 'follow_up'],
              description: 'Type of action',
            },
            title: {
              type: 'string',
              description: 'Short title for the action',
            },
            description: {
              type: 'string',
              description: 'Detailed description of what needs to be done',
            },
            priority: {
              type: 'string',
              enum: ['high', 'medium', 'low'],
              description: 'Priority level',
            },
            dueDate: {
              type: 'string',
              description: 'ISO date string for due date',
            },
            aiReasoning: {
              type: 'string',
              description: 'Why this action was suggested',
            },
          },
          required: ['type', 'title', 'description', 'priority', 'aiReasoning'],
        },
      },
    },
    required: ['actions'],
  },
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, content-type',
      },
    });
  }

  try {
    const request: AnalyzeCallRequest = await req.json();

    if (!request.transcript) {
      return new Response(
        JSON.stringify({
          error: { message: 'Transcript is required', code: 'VALIDATION_ERROR' },
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 1: Analyze call with Gemini Pro
    const analysisPrompt = `
You are a sales intelligence AI analyzing a sales call transcript.

TRANSCRIPT:
${request.transcript}

Analyze this call and provide:

1. **Summary**: 2-3 sentence overview of the call
2. **Key Points**: 3-5 most important points discussed (as bullet points)
3. **Sentiment**: Overall sentiment (positive/neutral/negative) and score (0-100)
4. **Topics**: Main topics discussed (as comma-separated list)
5. **Concerns**: Any concerns or objections raised by the prospect (as bullet points)
6. **Opportunities**: Potential opportunities or positive signals (as bullet points)
7. **Competitors**: Any competitor mentions (as comma-separated list or "None")

Return as JSON with these exact keys:
{
  "summary": "string",
  "keyPoints": ["string"],
  "sentiment": "positive|neutral|negative",
  "sentimentScore": number,
  "topics": ["string"],
  "concerns": ["string"],
  "opportunities": ["string"],
  "competitors": ["string"]
}
`;

    const analysisResponse = await fetch(`${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: analysisPrompt }] }],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 2048,
        },
      }),
    });

    if (!analysisResponse.ok) {
      throw new Error(`Gemini API error: ${analysisResponse.statusText}`);
    }

    const analysisData = await analysisResponse.json();
    const analysisText = analysisData.candidates[0]?.content.parts[0]?.text || '{}';
    
    let analysis;
    try {
      const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
      analysis = JSON.parse(jsonMatch ? jsonMatch[0] : analysisText);
    } catch {
      throw new Error('Failed to parse analysis response');
    }

    // Step 2: Extract actions with Function Calling
    const actionsPrompt = `
Based on this sales call transcript, extract actionable next steps:

${request.transcript}

Consider:
- What follow-up actions were mentioned?
- What commitments were made?
- What needs to be prepared or sent?
- What meetings need to be scheduled?

Prioritize actions by:
- HIGH: Urgent commitments or time-sensitive items
- MEDIUM: Important but not urgent
- LOW: Nice-to-have follow-ups
`;

    const actionsResponse = await fetch(`${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: actionsPrompt }] }],
        tools: [{
          functionDeclarations: [ACTION_EXTRACTION_FUNCTION],
        }],
        generationConfig: {
          temperature: 0.3,
        },
      }),
    });

    const actionsData = await actionsResponse.json();
    const functionCall = actionsData.candidates[0]?.content.parts.find(
      (part: any) => part.functionCall
    );

    let actions = [];
    if (functionCall?.functionCall?.args?.actions) {
      actions = functionCall.functionCall.args.actions.map((action: any, index: number) => ({
        id: `action-${Date.now()}-${index}`,
        ...action,
        status: 'pending' as const,
      }));
    }

    // Step 3: Calculate deal health
    const dealHealth = calculateDealHealth(analysis, actions);

    // Step 4: Build final analysis
    const callAnalysis = {
      transcript: request.transcript,
      duration: estimateCallDuration(request.transcript),
      summary: analysis.summary,
      keyPoints: analysis.keyPoints || [],
      sentiment: analysis.sentiment || 'neutral',
      sentimentScore: analysis.sentimentScore || 50,
      topics: analysis.topics || [],
      concerns: analysis.concerns || [],
      opportunities: analysis.opportunities || [],
      competitors: analysis.competitors || [],
      dealHealth,
      actions,
      analyzedAt: new Date().toISOString(),
      confidence: 85,
      model: 'gemini-2.0-pro-exp',
    };

    // Step 5: Save to database
    const authHeader = req.headers.get('Authorization');
    let callId = `call-${Date.now()}`;

    if (authHeader) {
      const { data: { user } } = await supabase.auth.getUser(authHeader.replace('Bearer ', ''));
      
      if (user) {
        const { data: savedCall } = await supabase.from('calls').insert({
          user_id: user.id,
          lead_id: request.leadId,
          deal_id: request.dealId,
          call_date: request.callDate || new Date().toISOString(),
          participants: request.participants || [],
          transcript: request.transcript,
          summary: callAnalysis.summary,
          sentiment: callAnalysis.sentiment,
          sentiment_score: callAnalysis.sentimentScore,
          deal_health_score: dealHealth.score,
          created_at: new Date().toISOString(),
        }).select().single();

        if (savedCall) {
          callId = savedCall.id;

          // Save actions
          await supabase.from('call_actions').insert(
            actions.map(action => ({
              call_id: callId,
              user_id: user.id,
              type: action.type,
              title: action.title,
              description: action.description,
              priority: action.priority,
              due_date: action.dueDate,
              status: action.status,
              ai_reasoning: action.aiReasoning,
            }))
          );

          // Log AI call
          await supabase.from('ai_logs').insert({
            user_id: user.id,
            operation: 'call_analysis',
            model: 'gemini-2.0-pro-exp',
            tokens_used: (analysisText.length + actionsPrompt.length) / 4,
            cost: 0.01,
            success: true,
          });
        }
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          callId,
          analysis: callAnalysis,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

  } catch (error) {
    console.error('Call analysis error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Internal server error',
          code: 'INTERNAL_ERROR',
        },
      }),
      { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    );
  }
});

// Helper functions
function calculateDealHealth(analysis: any, actions: any[]): any {
  let score = 50; // Base score

  // Positive sentiment bonus
  if (analysis.sentiment === 'positive') {
    score += 20;
  } else if (analysis.sentiment === 'negative') {
    score -= 20;
  }

  // Sentiment score impact
  score += (analysis.sentimentScore - 50) / 5;

  // Opportunities boost
  if (analysis.opportunities?.length > 0) {
    score += analysis.opportunities.length * 5;
  }

  // Concerns penalty
  if (analysis.concerns?.length > 0) {
    score -= analysis.concerns.length * 3;
  }

  // High-priority actions indicate urgency (good or bad)
  const highPriorityActions = actions.filter(a => a.priority === 'high').length;
  if (highPriorityActions > 2) {
    score -= 5; // Too many urgent actions might indicate problems
  }

  score = Math.min(100, Math.max(0, score));

  // Determine status
  let status: 'healthy' | 'at_risk' | 'critical';
  if (score >= 70) status = 'healthy';
  else if (score >= 40) status = 'at_risk';
  else status = 'critical';

  // Build risk factors and positive signals
  const riskFactors: string[] = [];
  const positiveSignals: string[] = [];

  if (analysis.sentiment === 'negative') {
    riskFactors.push('Negative sentiment detected');
  }
  if (analysis.concerns?.length > 0) {
    riskFactors.push(`${analysis.concerns.length} concerns raised`);
  }
  if (analysis.competitors?.length > 0 && analysis.competitors[0] !== 'None') {
    riskFactors.push('Competitor mentions detected');
  }

  if (analysis.sentiment === 'positive') {
    positiveSignals.push('Positive sentiment throughout call');
  }
  if (analysis.opportunities?.length > 0) {
    positiveSignals.push(`${analysis.opportunities.length} opportunities identified`);
  }

  return {
    score: Math.round(score),
    status,
    riskFactors,
    positiveSignals,
  };
}

function estimateCallDuration(transcript: string): number {
  // Rough estimate: 150 words per minute average speaking rate
  const wordCount = transcript.split(/\s+/).length;
  return Math.round((wordCount / 150) * 60); // Return seconds
}
