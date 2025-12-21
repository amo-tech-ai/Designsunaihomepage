/**
 * Service Layer - Centralized export
 * 
 * Import pattern:
 * import { leadEnrichmentService, callAnalysisService } from '@/services'
 */

// Base client
export { apiClient } from './api-client';
export type { ApiResponse, ApiError } from './api-client';

// Core AI services
export { leadEnrichmentService } from './lead-enrichment.service';
export { callAnalysisService } from './call-analysis.service';
export { nlSearchService } from './nl-search.service';
export { dealHealthService } from './deal-health.service';
export { emailDrafterService } from './email-drafter.service';
export { workflowAutomationService } from './workflow-automation.service';

// Re-export types
export type {
  EnrichLeadRequest,
  EnrichedLeadData,
  EnrichLeadResponse,
} from './lead-enrichment.service';

export type {
  AnalyzeCallRequest,
  CallAction,
  CallAnalysis,
  AnalyzeCallResponse,
  CallJobStatus,
} from './call-analysis.service';

export type {
  SearchQuery,
  SearchFilter,
  ParsedQuery,
  SearchResult,
  SearchResponse,
} from './nl-search.service';

export type {
  DealHealthRequest,
  DealHealthScore,
  DealHealthResponse,
} from './deal-health.service';

export type {
  EmailDraftRequest,
  EmailDraft,
  EmailDraftResponse,
} from './email-drafter.service';

export type {
  GhostDetectionRequest,
  GhostDetectionResult,
  ContractToCashRequest,
  ContractToCashStatus,
  ChampionAutopilotRequest,
  ChampionAutopilotStatus,
} from './workflow-automation.service';