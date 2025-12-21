/**
 * useNaturalLanguageSearch Hook
 * 
 * Purpose: Manage NL search with debouncing and suggestions
 * Pattern: Type → Debounce → Parse → Search → Display
 * 
 * Usage:
 * const { search, results, isSearching, interpretation } = useNLSearch();
 * search('leads in fintech closing this month');
 */

import { useState, useEffect, useCallback } from 'react';
import { nlSearchService, type SearchQuery, type SearchResult, type ParsedQuery, type SearchFilter } from '../services';

interface UseNLSearchResult {
  search: (query: string, filters?: any) => Promise<void>;
  results: SearchResult[];
  isSearching: boolean;
  interpretation: string | null;
  parsedQuery: ParsedQuery | null;
  error: string | null;
  clearResults: () => void;
  clearError: () => void;
}

const DEBOUNCE_DELAY = 300; // milliseconds

export function useNLSearch(): UseNLSearchResult {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [interpretation, setInterpretation] = useState<string | null>(null);
  const [parsedQuery, setParsedQuery] = useState<ParsedQuery | null>(null);
  const [error, setError] = useState<string | null>(null);

  const search = async (query: string, filters?: SearchFilter) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    setError(null);

    try {
      const response = await nlSearchService.search({
        query,
        filters,
      });

      if (!response.success) {
        // Development mode fallback
        if (response.error?.code === 'NETWORK_ERROR') {
          console.info('💡 Using mock search results (backend not configured)');
          
          // Mock search results
          setResults([
            {
              id: 'mock_1',
              type: 'lead' as const,
              title: 'Demo Lead Result',
              subtitle: 'Technology Company',
              snippet: `Showing demo results for "${query}". Configure Supabase backend for real AI-powered natural language search.`,
              relevanceScore: 85,
              metadata: {
                email: 'demo@example.com',
                fitScore: 75,
              },
            },
          ]);
          
          setParsedQuery({
            originalQuery: query,
            intent: 'search',
            entities: [],
            filters: {},
            confidence: 0,
          });
          
          setInterpretation(`Demo search mode. Real AI interpretation requires backend setup.`);
          
          setIsSearching(false);
          return;
        }
        
        setError(response.error?.message || 'Search failed');
        setResults([]);
        return;
      }

      const data = response.data!;
      setResults(data.results);
      setInterpretation(data.parsedQuery.interpretation);
      setParsedQuery(data.parsedQuery);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setError(message);
      setResults([]);
      setInterpretation(null);
      setParsedQuery(null);
    } finally {
      setIsSearching(false);
    }
  };

  const clearResults = () => {
    setResults([]);
    setInterpretation(null);
    setParsedQuery(null);
  };

  const clearError = () => setError(null);

  return {
    search,
    results,
    isSearching,
    interpretation,
    parsedQuery,
    error,
    clearResults,
    clearError,
  };
}