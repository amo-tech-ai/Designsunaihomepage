/**
 * Deal Health Monitor Service
 * 
 * Purpose: Monitor deal health and predict outcomes using AI
 * Pattern: Poll deals → AI analysis → Health score → Recommendations
 * 
 * Real-world use case:
 * System analyzes deal activity, communication patterns, time to close
 * → Returns health score (0-100) + risk factors + recommendations
 */

import { apiClient, type ApiResponse } from './api-client';

export interface DealHealthRequest {
  dealId: string;
  includeHistory?: boolean;
}

export interface DealHealthScore {
  dealId: string;
  score: number; // 0-100
  status: 'healthy' | 'at_risk' | 'critical' | 'won' | 'lost';
  trend: 'improving' | 'stable' | 'declining';
  
  // Risk analysis
  riskFactors: Array<{
    factor: string;
    severity: 'high' | 'medium' | 'low';
    impact: number; // -30 to 0
    reasoning: string;
  }>;
  
  // Positive signals
  positiveSignals: Array<{
    signal: string;
    strength: 'strong' | 'moderate' | 'weak';
    impact: number; // 0 to +30
  }>;
  
  // AI recommendations
  recommendations: Array<{
    action: string;
    priority: 'urgent' | 'high' | 'medium' | 'low';
    expectedImpact: string;
    reasoning: string;
  }>;
  
  // Predictions
  predictions: {
    closeDate: string | null;
    winProbability: number; // 0-100
    estimatedValue: number | null;
    timeToClose: string; // e.g., "14 days"
  };
  
  // Metadata
  analyzedAt: string;
  confidence: number; // 0-100
}

export interface DealHealthResponse {
  health: DealHealthScore;
  historicalTrend?: Array<{
    date: string;
    score: number;
    status: string;
  }>;
}

class DealHealthService {
  /**
   * Get current health score for a deal
   */
  async getDealHealth(request: DealHealthRequest): Promise<ApiResponse<DealHealthResponse>> {
    if (!request.dealId) {
      return {
        success: false,
        error: {
          message: 'Deal ID is required',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    const response = await apiClient.post<DealHealthResponse>('/deal-health', {
      dealId: request.dealId,
      includeHistory: request.includeHistory || false,
    });

    return response;
  }

  /**
   * Get health scores for multiple deals (batch)
   */
  async getBatchDealHealth(dealIds: string[]): Promise<ApiResponse<DealHealthScore[]>> {
    if (dealIds.length === 0) {
      return {
        success: false,
        error: {
          message: 'No deal IDs provided',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    if (dealIds.length > 50) {
      return {
        success: false,
        error: {
          message: 'Maximum 50 deals per batch',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    const response = await apiClient.post<DealHealthScore[]>('/deal-health-batch', {
      dealIds,
    });

    return response;
  }

  /**
   * Get portfolio-wide health summary
   */
  async getPortfolioHealth(): Promise<ApiResponse<{
    totalDeals: number;
    healthy: number;
    atRisk: number;
    critical: number;
    averageScore: number;
    topRisks: string[];
  }>> {
    const response = await apiClient.get('/portfolio-health');
    return response;
  }
}

export const dealHealthService = new DealHealthService();
