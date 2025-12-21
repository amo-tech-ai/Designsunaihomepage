/**
 * Workflow Automation Service
 * 
 * Purpose: Execute AI-powered workflow automations
 * Workflows: Ghost Detection, Contract-to-Cash, Champion Autopilot
 * 
 * Real-world use case:
 * System monitors lead activity → Detects ghosting pattern
 * → Auto-generates re-engagement sequence → Executes actions
 */

import { apiClient, type ApiResponse } from './api-client';

// ============================================================================
// GHOST DETECTION WORKFLOW
// ============================================================================

export interface GhostDetectionRequest {
  leadId: string;
  checkHistory?: boolean;
}

export interface GhostDetectionResult {
  leadId: string;
  isGhosted: boolean;
  ghostProbability: number; // 0-100
  daysSinceLastContact: number;
  
  // Pattern analysis
  patterns: {
    responseRateDecline: boolean;
    messagesSentWithoutResponse: number;
    previousEngagementLevel: 'high' | 'medium' | 'low';
    currentEngagementLevel: 'none' | 'low' | 'medium' | 'high';
  };
  
  // AI recommendations
  reEngagementStrategy: {
    approach: string;
    suggestedAction: 'send_value_content' | 'call_directly' | 'wait' | 'close_lost';
    draftMessage?: string;
    reasoning: string;
  };
  
  analyzedAt: string;
}

// ============================================================================
// CONTRACT-TO-CASH WORKFLOW
// ============================================================================

export interface ContractToCashRequest {
  dealId: string;
  stage: 'contract_sent' | 'contract_signed' | 'pending_payment' | 'paid';
}

export interface ContractToCashStatus {
  dealId: string;
  currentStage: string;
  daysInStage: number;
  
  // Workflow steps
  steps: Array<{
    name: string;
    status: 'completed' | 'in_progress' | 'pending' | 'blocked';
    completedAt?: string;
    blockers?: string[];
    autoActions?: string[];
  }>;
  
  // AI predictions
  predictions: {
    expectedPaymentDate: string;
    riskOfDelay: number; // 0-100
    recommendedFollowUps: string[];
  };
  
  // Auto-actions taken
  automatedActions: Array<{
    action: string;
    executedAt: string;
    result: 'success' | 'pending' | 'failed';
  }>;
}

// ============================================================================
// CHAMPION AUTOPILOT WORKFLOW
// ============================================================================

export interface ChampionAutopilotRequest {
  leadId: string;
  enableAutoNurture?: boolean;
}

export interface ChampionAutopilotStatus {
  leadId: string;
  championName: string;
  relationshipHealth: number; // 0-100
  
  // Nurture schedule
  nurtureSchedule: Array<{
    date: string;
    action: 'send_content' | 'check_in' | 'share_case_study' | 'schedule_meeting';
    status: 'scheduled' | 'sent' | 'completed';
    content?: string;
  }>;
  
  // Engagement tracking
  engagement: {
    emailOpenRate: number;
    linkClickRate: number;
    responseRate: number;
    lastInteraction: string;
  };
  
  // AI recommendations
  nextBestAction: {
    action: string;
    timing: string;
    reasoning: string;
    priority: 'high' | 'medium' | 'low';
  };
}

// ============================================================================
// SERVICE CLASS
// ============================================================================

class WorkflowAutomationService {
  /**
   * Ghost Detection Workflow
   */
  async detectGhosting(request: GhostDetectionRequest): Promise<ApiResponse<GhostDetectionResult>> {
    if (!request.leadId) {
      return {
        success: false,
        error: {
          message: 'Lead ID is required',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    const response = await apiClient.post<GhostDetectionResult>('/workflow/ghost-detection', {
      leadId: request.leadId,
      checkHistory: request.checkHistory || false,
    });

    return response;
  }

  /**
   * Execute re-engagement for ghosted lead
   */
  async reEngageGhostedLead(leadId: string): Promise<ApiResponse<{
    emailSent: boolean;
    taskCreated: boolean;
    message: string;
  }>> {
    const response = await apiClient.post('/workflow/re-engage', {
      leadId,
    });

    return response;
  }

  /**
   * Contract-to-Cash Workflow
   */
  async getContractToCashStatus(request: ContractToCashRequest): Promise<ApiResponse<ContractToCashStatus>> {
    if (!request.dealId) {
      return {
        success: false,
        error: {
          message: 'Deal ID is required',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    const response = await apiClient.post<ContractToCashStatus>('/workflow/contract-to-cash', {
      dealId: request.dealId,
      stage: request.stage,
    });

    return response;
  }

  /**
   * Execute contract-to-cash automation
   */
  async executeContractToCash(dealId: string, action: string): Promise<ApiResponse<{
    executed: boolean;
    result: string;
  }>> {
    const response = await apiClient.post('/workflow/execute-c2c', {
      dealId,
      action,
    });

    return response;
  }

  /**
   * Champion Autopilot Workflow
   */
  async getChampionAutopilotStatus(request: ChampionAutopilotRequest): Promise<ApiResponse<ChampionAutopilotStatus>> {
    if (!request.leadId) {
      return {
        success: false,
        error: {
          message: 'Lead ID is required',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    const response = await apiClient.post<ChampionAutopilotStatus>('/workflow/champion-autopilot', {
      leadId: request.leadId,
      enableAutoNurture: request.enableAutoNurture || false,
    });

    return response;
  }

  /**
   * Execute champion nurture action
   */
  async executeChampionAction(leadId: string, actionId: string): Promise<ApiResponse<{
    executed: boolean;
    nextAction: string;
  }>> {
    const response = await apiClient.post('/workflow/execute-champion-action', {
      leadId,
      actionId,
    });

    return response;
  }

  /**
   * Get all active workflows for user
   */
  async getActiveWorkflows(): Promise<ApiResponse<{
    ghostDetection: number;
    contractToCash: number;
    championAutopilot: number;
    totalAutomatedActions: number;
  }>> {
    const response = await apiClient.get('/workflows/active');
    return response;
  }
}

export const workflowAutomationService = new WorkflowAutomationService();
