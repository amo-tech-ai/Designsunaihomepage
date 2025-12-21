// WORKFLOW AUTOMATION TYPE DEFINITIONS
// Generated: 2024-12-20

import type { Timestamps, Priority } from './core';
import type { Action } from './intelligence';

// ============================================
// WORKFLOW
// ============================================

export interface Workflow extends Timestamps {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  triggerType: TriggerType;
  triggerConfig: TriggerConfig;
  actions: WorkflowAction[];
  conditions?: WorkflowCondition[];
  ownerId: string;
  lastRunAt?: string;
  runCount: number;
}

export type TriggerType = 
  | 'schedule' // Cron-based
  | 'event' // Deal stage change, new lead, etc.
  | 'manual' // User-initiated
  | 'webhook'; // External trigger

export interface TriggerConfig {
  schedule?: string; // Cron expression
  eventType?: string; // e.g., "deal.stage_changed"
  conditions?: Record<string, unknown>;
}

export interface WorkflowAction {
  id: string;
  type: WorkflowActionType;
  config: WorkflowActionConfig;
  order: number;
  retryOnFailure?: boolean;
  maxRetries?: number;
}

export type WorkflowActionType = 
  | 'send_email' 
  | 'create_task' 
  | 'update_field' 
  | 'send_notification' 
  | 'webhook' 
  | 'ai_analysis' 
  | 'wait';

export interface WorkflowActionConfig {
  emailTemplate?: string;
  taskTitle?: string;
  fieldName?: string;
  fieldValue?: unknown;
  webhookUrl?: string;
  aiPrompt?: string;
  waitDuration?: number; // seconds
  [key: string]: unknown;
}

export interface WorkflowCondition {
  field: string;
  operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than';
  value: unknown;
}

// ============================================
// GHOST DETECTION
// ============================================

export interface GhostDetectionConfig {
  inactivityThreshold: number; // days
  dealStages?: string[];
  excludeTags?: string[];
  notifyOwner: boolean;
  autoCreateTask: boolean;
}

export interface GhostDetectionResult {
  leadId: string;
  leadName: string;
  company: string;
  daysSinceLastActivity: number;
  lastActivityType: string;
  lastActivityDate: string;
  dealValue?: number;
  recommendedActions: Action[];
}

// ============================================
// CONTRACT TO CASH
// ============================================

export interface ContractData extends Timestamps {
  id: string;
  dealId: string;
  contractUrl: string;
  parsedData?: ParsedContractData;
  status: ContractStatus;
  paymentMilestones?: PaymentMilestone[];
}

export type ContractStatus = 
  | 'draft' 
  | 'sent' 
  | 'signed' 
  | 'executed' 
  | 'completed';

export interface ParsedContractData {
  parties: string[];
  startDate?: string;
  endDate?: string;
  totalValue: number;
  currency: string;
  paymentTerms?: string;
  keyTerms?: KeyTerm[];
  extractedAt: string;
  confidence: number;
}

export interface KeyTerm {
  category: string;
  text: string;
  importance: 'high' | 'medium' | 'low';
}

export interface PaymentMilestone {
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'sent' | 'paid' | 'overdue';
  paidAt?: string;
  invoiceUrl?: string;
}

export interface ParseContractRequest {
  contractUrl: string;
  dealId: string;
}

export interface ParseContractResponse {
  contractData: ParsedContractData;
  paymentMilestones: PaymentMilestone[];
  suggestedActions: Action[];
}

// ============================================
// CHAMPION AUTOPILOT
// ============================================

export interface Champion extends Timestamps {
  id: string;
  leadId: string;
  name: string;
  title?: string;
  email?: string;
  engagementScore: number; // 0-100
  lastInteractionDate?: string;
  influenceLevel: 'high' | 'medium' | 'low';
  sentiment: 'positive' | 'neutral' | 'negative';
  notes?: string[];
}

export interface ChampionDetectionRequest {
  transcriptId: string;
  leadId: string;
}

export interface ChampionDetectionResponse {
  champions: Champion[];
  newMentions: ChampionMention[];
  alerts: ChampionAlert[];
}

export interface ChampionMention {
  name: string;
  context: string;
  timestamp: number; // seconds in call
  influenceIndicators: string[];
}

export interface ChampionAlert {
  championId: string;
  type: 'silent' | 'negative_sentiment' | 'left_company' | 'promoted';
  message: string;
  severity: 'low' | 'medium' | 'high';
  suggestedAction?: Action;
}

// ============================================
// WORKFLOW EXECUTION
// ============================================

export interface WorkflowRun extends Timestamps {
  id: string;
  workflowId: string;
  status: WorkflowRunStatus;
  triggeredBy: 'schedule' | 'event' | 'manual';
  startedAt: string;
  completedAt?: string;
  error?: string;
  executedActions: ExecutedAction[];
}

export type WorkflowRunStatus = 
  | 'pending' 
  | 'running' 
  | 'completed' 
  | 'failed' 
  | 'cancelled';

export interface ExecutedAction {
  actionId: string;
  status: 'success' | 'failed' | 'skipped';
  startedAt: string;
  completedAt?: string;
  output?: unknown;
  error?: string;
}
