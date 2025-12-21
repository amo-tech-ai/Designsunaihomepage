// LEAD MANAGEMENT TYPE DEFINITIONS
// Generated: 2024-12-20

import type { Timestamps, LeadStatus, ActivityType, DealStage, Priority, SentimentScore } from './core';

// ============================================
// LEAD
// ============================================

export interface Lead extends Timestamps {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company: string;
  title?: string;
  status: LeadStatus;
  source: string;
  ownerId: string;
  enrichedData?: EnrichedCompanyData;
  score?: number; // 0-100
  tags?: string[];
  customFields?: Record<string, unknown>;
}

export interface EnrichedCompanyData {
  companySize?: string;
  industry?: string;
  revenue?: string;
  location?: string;
  website?: string;
  description?: string;
  linkedinUrl?: string;
  employeeCount?: number;
  fundingStage?: string;
  techStack?: string[];
  enrichedAt: string;
  confidence: number; // 0-100
}

export interface CreateLeadRequest {
  name: string;
  email: string;
  phone?: string;
  company: string;
  title?: string;
  source: string;
  tags?: string[];
}

export interface UpdateLeadRequest {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  title?: string;
  status?: LeadStatus;
  score?: number;
  tags?: string[];
}

export interface LeadSearchFilters {
  status?: LeadStatus[];
  source?: string[];
  scoreMin?: number;
  scoreMax?: number;
  tags?: string[];
  hasActivity?: boolean;
  createdAfter?: string;
  createdBefore?: string;
  query?: string;
}

// ============================================
// ACTIVITY
// ============================================

export interface Activity extends Timestamps {
  id: string;
  leadId: string;
  userId: string;
  type: ActivityType;
  title: string;
  description?: string;
  metadata?: ActivityMetadata;
  scheduledAt?: string;
  completedAt?: string;
}

export interface ActivityMetadata {
  duration?: number; // minutes
  sentiment?: SentimentScore;
  callRecordingUrl?: string;
  transcriptId?: string;
  emailSubject?: string;
  linkedinUrl?: string;
  [key: string]: unknown;
}

export interface CreateActivityRequest {
  leadId: string;
  type: ActivityType;
  title: string;
  description?: string;
  metadata?: ActivityMetadata;
  scheduledAt?: string;
}

// ============================================
// DEAL
// ============================================

export interface Deal extends Timestamps {
  id: string;
  leadId: string;
  ownerId: string;
  name: string;
  value: number; // USD
  stage: DealStage;
  probability: number; // 0-100
  expectedCloseDate?: string;
  actualCloseDate?: string;
  lostReason?: string;
  notes?: string;
}

export interface CreateDealRequest {
  leadId: string;
  name: string;
  value: number;
  stage: DealStage;
  probability: number;
  expectedCloseDate?: string;
}

export interface UpdateDealRequest {
  name?: string;
  value?: number;
  stage?: DealStage;
  probability?: number;
  expectedCloseDate?: string;
  notes?: string;
}

// ============================================
// PIPELINE
// ============================================

export interface PipelineMetrics {
  totalDeals: number;
  totalValue: number;
  averageDealSize: number;
  averageSalesCycle: number; // days
  conversionRate: number; // percentage
  stageDistribution: StageDistribution[];
}

export interface StageDistribution {
  stage: DealStage;
  count: number;
  value: number;
  averageDaysInStage: number;
}
