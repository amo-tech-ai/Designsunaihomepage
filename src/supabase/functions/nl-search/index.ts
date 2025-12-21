/**
 * Edge Function: Natural Language Search
 * 
 * Purpose: Parse natural language queries and search CRM database
 * 
 * Flow:
 * 1. Receive NL query
 * 2. Call Gemini Flash to parse query
 * 3. Use Function Calling to extract filters
 * 4. Build and execute database query
 * 5. Rank results
 * 6. Return results with interpretation
 * 
 * Model: gemini-2.0-flash-exp
 * Tools: functions (filter extraction)
 * Cost: ~$0.0001 per query
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') || '';
const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface SearchRequest {
  query: string;
  context?: 'leads' | 'deals' | 'calls' | 'all';
  limit?: number;
}

// Function schema for filter extraction
const FILTER_EXTRACTION_FUNCTION = {
  name: 'extract_search_filters',
  description: 'Extract structured search filters from natural language query',
  parameters: {
    type: 'object',
    properties: {
      intent: {
        type: 'string',
        description: 'What the user wants to find or do',
      },
      entityType: {
        type: 'string',
        enum: ['leads', 'deals', 'calls', 'contacts', 'activities'],
        description: 'Type of entity being searched',
      },
      filters: {
        type: 'array',
        description: 'Array of filter conditions',
        items: {
          type: 'object',
          properties: {
            field: {
              type: 'string',
              description: 'Database field name (e.g., industry, status, close_date)',
            },
            operator: {
              type: 'string',
              enum: ['equals', 'contains', 'greater_than', 'less_than', 'between', 'in'],
              description: 'Comparison operator',
            },
            value: {
              description: 'Value to compare against (string, number, or array)',
            },
          },
          required: ['field', 'operator', 'value'],
        },
      },
      sortBy: {
        type: 'string',
        description: 'Field to sort results by',
      },
      sortOrder: {
        type: 'string',
        enum: ['asc', 'desc'],
        description: 'Sort direction',
      },
      interpretation: {
        type: 'string',
        description: 'Human-readable explanation of what was understood',
      },
    },
    required: ['intent', 'entityType', 'filters', 'interpretation'],
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
    const startTime = Date.now();
    const request: SearchRequest = await req.json();

    if (!request.query || request.query.trim().length === 0) {
      return new Response(
        JSON.stringify({
          error: { message: 'Query is required', code: 'VALIDATION_ERROR' },
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 1: Parse query with Gemini
    const parsePrompt = `
You are a CRM search assistant. Parse this natural language query into structured filters:

Query: "${request.query}"
${request.context ? `Context: User is searching in ${request.context}` : ''}

Database schema:
- leads: { id, company, industry, status, fit_score, company_size, revenue, location, created_at }
- deals: { id, title, value, stage, close_date, probability, lead_id, created_at }
- calls: { id, call_date, sentiment, sentiment_score, deal_health_score, lead_id, created_at }

Examples:
- "leads in fintech closing this month" → entityType: deals, filters: [industry=fintech, close_date between this month]
- "deals above $50k in negotiation" → entityType: deals, filters: [value > 50000, stage=negotiation]
- "calls with negative sentiment from last week" → entityType: calls, filters: [sentiment=negative, call_date in last week]

Extract structured filters from the query.
`;

    const parseResponse = await fetch(`${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: parsePrompt }] }],
        tools: [{
          functionDeclarations: [FILTER_EXTRACTION_FUNCTION],
        }],
        generationConfig: {
          temperature: 0.2,
        },
      }),
    });

    if (!parseResponse.ok) {
      throw new Error(`Gemini API error: ${parseResponse.statusText}`);
    }

    const parseData = await parseResponse.json();
    const functionCall = parseData.candidates[0]?.content.parts.find(
      (part: any) => part.functionCall
    );

    if (!functionCall?.functionCall?.args) {
      throw new Error('Failed to parse query');
    }

    const parsedQuery = functionCall.functionCall.args;
    
    // Step 2: Get user from auth
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({
          error: { message: 'Authentication required', code: 'AUTH_REQUIRED' },
        }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data: { user } } = await supabase.auth.getUser(authHeader.replace('Bearer ', ''));
    if (!user) {
      return new Response(
        JSON.stringify({
          error: { message: 'Invalid authentication', code: 'AUTH_INVALID' },
        }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 3: Build and execute database query
    const results = await executeSearch(
      supabase,
      user.id,
      parsedQuery.entityType,
      parsedQuery.filters,
      {
        sortBy: parsedQuery.sortBy,
        sortOrder: parsedQuery.sortOrder || 'desc',
        limit: request.limit || 50,
      }
    );

    // Step 4: Format results
    const formattedResults = results.map((item: any) => formatSearchResult(item, parsedQuery.entityType));

    // Step 5: Log search
    await supabase.from('search_history').insert({
      user_id: user.id,
      query: request.query,
      entity_type: parsedQuery.entityType,
      results_count: formattedResults.length,
      created_at: new Date().toISOString(),
    });

    const executionTime = Date.now() - startTime;

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          results: formattedResults,
          totalCount: formattedResults.length,
          query: request.query,
          parsedQuery: {
            intent: parsedQuery.intent,
            entityType: parsedQuery.entityType,
            filters: parsedQuery.filters,
            sortBy: parsedQuery.sortBy,
            sortOrder: parsedQuery.sortOrder,
            confidence: 90,
            interpretation: parsedQuery.interpretation,
          },
          executionTime,
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
    console.error('Search error:', error);

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

// Helper function to execute search
async function executeSearch(
  supabase: any,
  userId: string,
  entityType: string,
  filters: any[],
  options: any
) {
  let query = supabase.from(entityType).select('*').eq('user_id', userId);

  // Apply filters
  for (const filter of filters) {
    const { field, operator, value } = filter;

    switch (operator) {
      case 'equals':
        query = query.eq(field, value);
        break;
      case 'contains':
        query = query.ilike(field, `%${value}%`);
        break;
      case 'greater_than':
        query = query.gt(field, value);
        break;
      case 'less_than':
        query = query.lt(field, value);
        break;
      case 'in':
        query = query.in(field, Array.isArray(value) ? value : [value]);
        break;
      case 'between':
        // Assuming value is [start, end]
        if (Array.isArray(value) && value.length === 2) {
          query = query.gte(field, value[0]).lte(field, value[1]);
        }
        break;
    }
  }

  // Apply sorting
  if (options.sortBy) {
    query = query.order(options.sortBy, { ascending: options.sortOrder === 'asc' });
  }

  // Apply limit
  query = query.limit(options.limit);

  const { data, error } = await query;

  if (error) {
    throw new Error(`Database query error: ${error.message}`);
  }

  return data || [];
}

// Helper function to format search results
function formatSearchResult(item: any, entityType: string): any {
  const baseResult = {
    id: item.id,
    type: entityType.slice(0, -1) as any, // Remove trailing 's'
    relevanceScore: 100, // TODO: Implement actual relevance scoring
    matchedFields: [], // TODO: Track which fields matched
    data: item,
  };

  switch (entityType) {
    case 'leads':
      return {
        ...baseResult,
        title: item.company || 'Unknown Company',
        subtitle: `${item.industry || 'Unknown Industry'} • ${item.status}`,
        snippet: item.description || '',
        url: `/app/leads/${item.id}`,
      };
    
    case 'deals':
      return {
        ...baseResult,
        title: item.title || 'Untitled Deal',
        subtitle: `$${item.value?.toLocaleString() || '0'} • ${item.stage}`,
        snippet: `Close date: ${item.close_date || 'Not set'}`,
        url: `/app/deals/${item.id}`,
      };
    
    case 'calls':
      return {
        ...baseResult,
        title: `Call on ${new Date(item.call_date).toLocaleDateString()}`,
        subtitle: `${item.sentiment} sentiment • Health: ${item.deal_health_score}/100`,
        snippet: item.summary || '',
        url: `/app/calls/${item.id}`,
      };
    
    default:
      return baseResult;
  }
}
