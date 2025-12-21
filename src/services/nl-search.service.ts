/**
 * Natural Language Search Service
 * 
 * Purpose: Parse natural language queries and search CRM data
 * Pattern: Query → Parse with AI → Extract Filters → Search → Rank → Return
 * 
 * Real-world use cases:
 * - "leads in fintech closing this month"
 * - "deals above $50k in negotiation stage"
 * - "calls with John from last week where sentiment was negative"
 */

import { apiClient, type ApiResponse } from './api-client';

export interface SearchQuery {
  query: string;
  context?: 'leads' | 'deals' | 'calls' | 'all';
  limit?: number;
}

export interface SearchFilter {
  field: string;
  operator: 'equals' | 'contains' | 'greater_than' | 'less_than' | 'between' | 'in';
  value: string | number | string[] | number[];
}

export interface ParsedQuery {
  intent: string; // What the user wants to do
  entityType: 'leads' | 'deals' | 'calls' | 'contacts' | 'activities';
  filters: SearchFilter[];
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  confidence: number; // 0-100
  interpretation: string; // Human-readable explanation
}

export interface SearchResult {
  id: string;
  type: 'lead' | 'deal' | 'call' | 'contact' | 'activity';
  title: string;
  subtitle?: string;
  relevanceScore: number; // 0-100
  matchedFields: string[];
  snippet: string;
  data: unknown; // Full object data
  url: string; // Deep link to detail page
}

export interface SearchResponse {
  results: SearchResult[];
  totalCount: number;
  query: string;
  parsedQuery: ParsedQuery;
  executionTime: number; // milliseconds
}

class NaturalLanguageSearchService {
  /**
   * Execute a natural language search
   * 
   * @param searchQuery - Natural language query
   * @returns Search results with parsed query
   */
  async search(searchQuery: SearchQuery): Promise<ApiResponse<SearchResponse>> {
    if (!searchQuery.query || searchQuery.query.trim().length === 0) {
      return {
        success: false,
        error: {
          message: 'Query is required',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    if (searchQuery.query.length > 500) {
      return {
        success: false,
        error: {
          message: 'Query too long. Maximum 500 characters',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    const response = await apiClient.post<SearchResponse>('/nl-search', {
      query: searchQuery.query,
      context: searchQuery.context || 'all',
      limit: searchQuery.limit || 50,
    });

    return response;
  }

  /**
   * Get search suggestions as user types
   * 
   * @param partial - Partial query
   * @returns Suggested queries
   */
  async getSuggestions(partial: string): Promise<ApiResponse<string[]>> {
    if (!partial || partial.length < 2) {
      return {
        success: true,
        data: [],
      };
    }

    const response = await apiClient.post<string[]>('/search-suggestions', {
      partial,
    });

    return response;
  }

  /**
   * Get recent searches for user
   * 
   * @param limit - Number of recent searches
   * @returns Recent search queries
   */
  async getRecentSearches(limit: number = 10): Promise<ApiResponse<string[]>> {
    const response = await apiClient.get<string[]>('/recent-searches', {
      limit: limit.toString(),
    });

    return response;
  }
}

// Singleton instance
export const nlSearchService = new NaturalLanguageSearchService();
