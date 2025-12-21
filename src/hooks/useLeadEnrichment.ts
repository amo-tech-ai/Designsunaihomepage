/**
 * useLeadEnrichment Hook
 * 
 * Purpose: Manage lead enrichment state and operations
 * Pattern: UI → Hook → Service → Edge Function → AI
 * 
 * Usage:
 * const { enrichLead, isEnriching, error } = useLeadEnrichment();
 * await enrichLead({ email: 'john@acme.com' });
 */

import { useState } from 'react';
import { leadEnrichmentService, type EnrichLeadRequest, type EnrichedLeadData } from '../services';

interface UseLeadEnrichmentResult {
  enrichLead: (request: EnrichLeadRequest) => Promise<void>;
  enrichedLead: EnrichedLeadData | null;
  isEnriching: boolean;
  error: string | null;
  clearError: () => void;
}

export function useLeadEnrichment(): UseLeadEnrichmentResult {
  const [isEnriching, setIsEnriching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enrichedLead, setEnrichedLead] = useState<EnrichedLeadData | null>(null);

  const enrichLead = async (request: EnrichLeadRequest) => {
    setIsEnriching(true);
    setError(null);
    setEnrichedLead(null);

    try {
      const response = await leadEnrichmentService.enrichLead(request);

      if (!response.success) {
        // Development mode fallback
        if (response.error?.code === 'NETWORK_ERROR') {
          console.info('💡 Using mock lead enrichment data (backend not configured)');
          
          // Mock enriched data
          setEnrichedLead({
            email: request.email,
            name: request.name || 'John Doe',
            company: request.company || 'Acme Corp',
            companySize: '100-500',
            industry: 'Technology',
            revenue: '$10M-50M',
            location: 'San Francisco, CA',
            description: 'Demo company data. Configure Supabase backend for real AI-powered lead enrichment.',
            linkedinUrl: 'https://linkedin.com/company/acme',
            fitScore: 75,
            fitReasoning: 'Demo mode - Real AI scoring requires backend configuration',
            enrichedAt: new Date().toISOString(),
            dataSource: 'manual' as const,
          });
          
          setIsEnriching(false);
          return;
        }
        
        setError(response.error?.message || 'Enrichment failed');
        return;
      }

      setEnrichedLead(response.data!.lead);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setError(message);
    } finally {
      setIsEnriching(false);
    }
  };

  const clearError = () => setError(null);

  return {
    enrichLead,
    enrichedLead,
    isEnriching,
    error,
    clearError,
  };
}