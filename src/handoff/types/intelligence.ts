// INTELLIGENCE & AI TYPE DEFINITIONS
// Generated: 2024-12-20

import type { Timestamps, Priority, SentimentScore } from './core';

// ============================================
// CALL INTELLIGENCE
// ============================================

export interface CallTranscript extends Timestamps {
  id: string;
  leadId: string;
  userId: string;
  audioUrl?: string;
  transcript: string;
  duration: number; // seconds
  participants: string[];
  summary?: string;
  sentiment: SentimentScore;
  keyPoints?: string[];
  nextSteps?: string[];
  metadata?: CallMetadata;
}

export interface CallMetadata {
  callType: 'inbound' | 'outbound';
  recordingProvider?: string;
  language?: string;
  confidence?: number;
  speakerLabels?: SpeakerLabel[];
  [key: string]: unknown;
}

export interface SpeakerLabel {
  speaker: string;
  startTime: number;
  endTime: number;
  text: string;
}

export interface AnalyzeCallRequest {
  audioUrl?: string;
  transcript?: string;
  leadId: string;
  metadata?: CallMetadata;
}

export interface AnalyzeCallResponse {
  transcriptId: string;
  summary: string;
  sentiment: SentimentScore;
  keyPoints: string[];
  nextSteps: string[];
  extractedActions: Action[];
  dealHealth?: DealHealthScore;
}

// ============================================
// ACTIONS
// ============================================

export interface Action extends Timestamps {
  id: string;
  leadId: string;
  userId: string;
  type: ActionType;
  title: string;
  description?: string;
  priority: Priority;
  dueDate?: string;
  completedAt?: string;
  sourceType: 'call' | 'email' | 'manual' | 'workflow';
  sourceId?: string;
  metadata?: ActionMetadata;
}

export type ActionType = 
  | 'send_email' 
  | 'schedule_meeting' 
  | 'create_proposal' 
  | 'follow_up' 
  | 'update_crm' 
  | 'internal_task';

export interface ActionMetadata {
  emailDraft?: string;
  meetingDuration?: number;
  proposalType?: string;
  reminderDays?: number;
  [key: string]: unknown;
}

export interface CreateActionRequest {
  leadId: string;
  type: ActionType;
  title: string;
  description?: string;
  priority: Priority;
  dueDate?: string;
  metadata?: ActionMetadata;
}

// ============================================
// POST-CALL ACTION ARCHITECT
// ============================================

export interface PostCallAnalysisRequest {
  transcriptId: string;
  leadId: string;
  context?: LeadContext;
}

export interface LeadContext {
  dealStage?: string;
  lastInteractionDate?: string;
  openActions?: number;
  dealValue?: number;
  [key: string]: unknown;
}

export interface PostCallAnalysisResponse {
  actions: PrioritizedAction[];
  emailDrafts: EmailDraft[];
  suggestedMeetingTimes: MeetingTimeSlot[];
  dealHealthUpdate?: DealHealthScore;
  insights: string[];
}

export interface PrioritizedAction {
  action: Action;
  reasoning: string;
  urgencyScore: number;
  impactScore: number;
}

export interface EmailDraft {
  to: string;
  subject: string;
  body: string;
  tone: 'formal' | 'casual' | 'friendly';
  purpose: string;
}

export interface MeetingTimeSlot {
  startTime: string;
  endTime: string;
  confidence: number;
  reasoning: string;
}

// ============================================
// DEAL HEALTH
// ============================================

export interface DealHealthScore {
  score: number; // 0-100
  status: 'healthy' | 'at_risk' | 'critical';
  factors: HealthFactor[];
  recommendations: string[];
  trend: 'improving' | 'stable' | 'declining';
  lastUpdated: string;
}

export interface HealthFactor {
  name: string;
  impact: 'positive' | 'negative' | 'neutral';
  score: number;
  description: string;
}

// ============================================
// NATURAL LANGUAGE SEARCH
// ============================================

export interface SearchQuery {
  query: string;
  filters?: SearchFilters;
  limit?: number;
  offset?: number;
}

export interface SearchFilters {
  entityType?: ('lead' | 'deal' | 'activity' | 'call')[];
  dateRange?: DateRange;
  status?: string[];
  tags?: string[];
  [key: string]: unknown;
}

export interface DateRange {
  start?: string;
  end?: string;
}

export interface SearchResult {
  id: string;
  type: 'lead' | 'deal' | 'activity' | 'call';
  title: string;
  subtitle?: string;
  score: number; // relevance 0-100
  snippet?: string;
  metadata?: Record<string, unknown>;
  url?: string;
}

export interface SearchResponse {
  query: string;
  results: SearchResult[];
  total: number;
  processingTime: number; // ms
  interpretation?: QueryInterpretation;
}

export interface QueryInterpretation {
  intent: string;
  entities: ExtractedEntity[];
  appliedFilters: SearchFilters;
}

export interface ExtractedEntity {
  type: string;
  value: string;
  confidence: number;
}

// ============================================
// AI THINKING STATES
// ============================================

export interface ThinkingState {
  isThinking: boolean;
  stage?: ThinkingStage;
  progress?: number; // 0-100
  message?: string;
}

export type ThinkingStage = 
  | 'analyzing' 
  | 'extracting' 
  | 'prioritizing' 
  | 'generating' 
  | 'finalizing';
