/**
 * Edge Function: Enrich Lead
 * 
 * Purpose: Enrich lead data using Gemini 2.0 Flash + Search Grounding
 * 
 * Flow:
 * 1. Receive lead data (email, company, name)
 * 2. Call Gemini with Search Grounding
 * 3. Extract company information
 * 4. Calculate fit score
 * 5. Save to database
 * 6. Return enriched data
 * 
 * Model: gemini-2.0-flash-exp
 * Tools: googleSearch
 * Cost: ~$0.001 per lead
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Gemini API configuration
const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') || '';
const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

// Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface EnrichLeadRequest {
  email: string;
  company?: string;
  name?: string;
  website?: string;
}

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

serve(async (req) => {
  // CORS headers
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
    // Parse request
    const request: EnrichLeadRequest = await req.json();

    // Validate
    if (!request.email) {
      return new Response(
        JSON.stringify({
          error: { message: 'Email is required', code: 'VALIDATION_ERROR' },
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Extract company from email if not provided
    const emailDomain = request.email.split('@')[1];
    const companyToSearch = request.company || emailDomain.split('.')[0];

    // Build Gemini prompt
    const prompt = `
You are a B2B sales intelligence assistant. Find detailed information about this company:

Company: ${companyToSearch}
${request.website ? `Website: ${request.website}` : ''}
${request.name ? `Contact Name: ${request.name}` : ''}
Email Domain: ${emailDomain}

Use Google Search to find:
1. Full company name
2. Industry/vertical
3. Company size (number of employees)
4. Estimated annual revenue
5. Location (headquarters)
6. Brief description (1-2 sentences)
7. LinkedIn company URL

Return ONLY a JSON object with these exact keys:
{
  "companyName": "string",
  "industry": "string",
  "companySize": "string (e.g., '50-200', '200-500', '500-1000', '1000+')",
  "revenue": "string (e.g., '$1M-$10M', '$10M-$50M', '$50M-$100M', '$100M+')",
  "location": "string (City, Country)",
  "description": "string",
  "linkedinUrl": "string or null",
  "confidence": number (0-100, how confident you are in this data)
}

Do not include any other text, only the JSON object.
`;

    // Call Gemini with Search Grounding
    const geminiResponse = await fetch(`${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }],
        }],
        tools: [{
          googleSearch: {},
        }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!geminiResponse.ok) {
      throw new Error(`Gemini API error: ${geminiResponse.statusText}`);
    }

    const geminiData: GeminiResponse = await geminiResponse.json();
    const responseText = geminiData.candidates[0]?.content.parts[0]?.text || '{}';

    // Parse AI response
    let enrichedData;
    try {
      // Extract JSON from response (might have markdown code blocks)
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      enrichedData = JSON.parse(jsonMatch ? jsonMatch[0] : responseText);
    } catch {
      throw new Error('Failed to parse AI response');
    }

    // Calculate fit score based on company size and industry
    const fitScore = calculateFitScore(enrichedData);

    // Calculate fit reasoning
    const fitReasoning = generateFitReasoning(enrichedData, fitScore);

    // Prepare enriched lead data
    const enrichedLead = {
      email: request.email,
      name: request.name || extractNameFromEmail(request.email),
      company: enrichedData.companyName || companyToSearch,
      companySize: enrichedData.companySize,
      industry: enrichedData.industry,
      revenue: enrichedData.revenue,
      location: enrichedData.location,
      description: enrichedData.description,
      linkedinUrl: enrichedData.linkedinUrl,
      fitScore,
      fitReasoning,
      enrichedAt: new Date().toISOString(),
      dataSource: 'gemini_search' as const,
    };

    // Save to database (if authenticated)
    const authHeader = req.headers.get('Authorization');
    if (authHeader) {
      const { data: { user } } = await supabase.auth.getUser(authHeader.replace('Bearer ', ''));
      
      if (user) {
        await supabase.from('leads').insert({
          user_id: user.id,
          ...enrichedLead,
          status: 'new',
          created_at: new Date().toISOString(),
        });

        // Log AI call
        await supabase.from('ai_logs').insert({
          user_id: user.id,
          operation: 'lead_enrichment',
          model: 'gemini-2.0-flash-exp',
          tokens_used: responseText.length / 4, // Rough estimate
          cost: 0.001, // Estimate
          success: true,
          metadata: { email: request.email, company: companyToSearch },
        });
      }
    }

    // Return response
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          lead: enrichedLead,
          confidence: enrichedData.confidence || 80,
          suggestions: generateSuggestions(enrichedLead),
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
    console.error('Enrich lead error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Internal server error',
          code: 'INTERNAL_ERROR',
        },
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
});

// Helper functions
function calculateFitScore(data: any): number {
  let score = 50; // Base score

  // Company size bonus
  if (data.companySize) {
    if (data.companySize.includes('500') || data.companySize.includes('1000')) {
      score += 20; // Perfect fit
    } else if (data.companySize.includes('200')) {
      score += 15; // Good fit
    } else if (data.companySize.includes('50')) {
      score += 10; // Acceptable fit
    }
  }

  // Industry bonus (example: prioritize tech, finance, healthcare)
  if (data.industry) {
    const highValueIndustries = ['technology', 'finance', 'healthcare', 'saas', 'software'];
    const industry = data.industry.toLowerCase();
    if (highValueIndustries.some(ind => industry.includes(ind))) {
      score += 15;
    }
  }

  // Revenue bonus
  if (data.revenue) {
    if (data.revenue.includes('$100M')) {
      score += 15; // High revenue
    } else if (data.revenue.includes('$50M') || data.revenue.includes('$10M')) {
      score += 10; // Medium revenue
    }
  }

  return Math.min(100, Math.max(0, score));
}

function generateFitReasoning(data: any, score: number): string {
  const reasons: string[] = [];

  if (score >= 80) {
    reasons.push('Excellent fit based on company profile');
  } else if (score >= 60) {
    reasons.push('Good fit with some growth potential');
  } else {
    reasons.push('Moderate fit, may require qualification');
  }

  if (data.companySize?.includes('500') || data.companySize?.includes('1000')) {
    reasons.push('Enterprise-size company');
  }

  if (data.industry) {
    reasons.push(`${data.industry} industry alignment`);
  }

  if (data.revenue?.includes('$100M')) {
    reasons.push('High revenue potential');
  }

  return reasons.join(' • ');
}

function generateSuggestions(lead: any): string[] {
  const suggestions: string[] = [];

  if (lead.linkedinUrl) {
    suggestions.push('Review LinkedIn profile before outreach');
  }

  if (lead.fitScore >= 80) {
    suggestions.push('High-priority lead - reach out within 24 hours');
  } else if (lead.fitScore < 50) {
    suggestions.push('Consider additional qualification before outreach');
  }

  if (lead.industry) {
    suggestions.push(`Prepare ${lead.industry}-specific use cases`);
  }

  return suggestions;
}

function extractNameFromEmail(email: string): string {
  const localPart = email.split('@')[0];
  const parts = localPart.split(/[._-]/);
  return parts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
