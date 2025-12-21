/**
 * Lead Enrichment Service
 * 
 * Purpose: Enrich lead data using AI (Gemini + Search Grounding)
 * Pattern: Request → AI Analysis → Validation → Return
 * 
 * Real-world use case:
 * User adds "john@acmecorp.com" → System finds company size, industry, revenue → Returns fit score
 */

import { apiClient, type ApiResponse } from './api-client';

export interface EnrichLeadRequest {
  email: string;
  company?: string;
  name?: string;
  website?: string;
}

export interface EnrichedLeadData {
  // Original data
  email: string;
  name: string;
  company: string;
  
  // Enriched data (from AI)
  companySize?: string;
  industry?: string;
  revenue?: string;
  location?: string;
  description?: string;
  linkedinUrl?: string;
  
  // AI scoring
  fitScore: number; // 0-100
  fitReasoning: string;
  
  // Metadata
  enrichedAt: string;
  dataSource: 'gemini_search' | 'manual';
}

export interface EnrichLeadResponse {
  lead: EnrichedLeadData;
  confidence: number; // 0-100
  suggestions: string[];
}

class LeadEnrichmentService {
  /**
   * Enrich a single lead using AI
   * 
   * @param request - Lead data to enrich
   * @returns Enriched lead data with AI insights
   */
  async enrichLead(request: EnrichLeadRequest): Promise<ApiResponse<EnrichLeadResponse>> {
    // Validate input
    if (!request.email) {
      return {
        success: false,
        error: {
          message: 'Email is required',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    // Call Edge Function
    const response = await apiClient.post<EnrichLeadResponse>('/enrich-lead', {
      email: request.email,
      company: request.company,
      name: request.name,
      website: request.website,
    });

    return response;
  }

  /**
   * Batch enrich multiple leads
   * 
   * @param leads - Array of leads to enrich
   * @returns Array of enriched leads
   */
  async enrichLeadsBatch(leads: EnrichLeadRequest[]): Promise<ApiResponse<EnrichLeadResponse[]>> {
    if (leads.length === 0) {
      return {
        success: false,
        error: {
          message: 'No leads provided',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    if (leads.length > 100) {
      return {
        success: false,
        error: {
          message: 'Maximum 100 leads per batch',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    const response = await apiClient.post<EnrichLeadResponse[]>('/enrich-leads-batch', {
      leads,
    });

    return response;
  }
}

// Singleton instance
export const leadEnrichmentService = new LeadEnrichmentService();
