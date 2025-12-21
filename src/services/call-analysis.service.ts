/**
 * Call Analysis Service
 * 
 * Purpose: Analyze sales call recordings using AI
 * Pattern: Upload → Transcribe → Analyze → Extract Actions → Return
 * 
 * Real-world use case:
 * User uploads 30-min sales call → System transcribes → Extracts sentiment, next steps, deal health
 */

import { apiClient, type ApiResponse } from './api-client';

export interface AnalyzeCallRequest {
  audioFileUrl?: string; // URL if already uploaded
  transcript?: string; // Or provide transcript directly
  leadId?: string;
  dealId?: string;
  callDate?: string;
  participants?: string[];
}

export interface CallAction {
  id: string;
  type: 'email' | 'task' | 'meeting' | 'follow_up';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  dueDate?: string;
  assignee?: string;
  status: 'pending' | 'completed' | 'dismissed';
  aiReasoning: string; // Why AI suggested this action
}

export interface CallAnalysis {
  // Transcript
  transcript: string;
  duration: number; // seconds
  
  // AI Analysis
  summary: string;
  keyPoints: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
  sentimentScore: number; // 0-100
  
  // Extracted entities
  topics: string[];
  concerns: string[];
  opportunities: string[];
  competitors?: string[];
  
  // Deal health
  dealHealth: {
    score: number; // 0-100
    status: 'healthy' | 'at_risk' | 'critical';
    riskFactors: string[];
    positiveSignals: string[];
  };
  
  // AI-generated actions
  actions: CallAction[];
  
  // Metadata
  analyzedAt: string;
  confidence: number; // 0-100
  model: string; // e.g., "gemini-2.0-pro"
}

export interface AnalyzeCallResponse {
  callId: string;
  analysis: CallAnalysis;
}

export interface CallJobStatus {
  jobId: string;
  status: 'queued' | 'processing' | 'completed' | 'failed';
  progress: number; // 0-100
  currentStep: string;
  estimatedTimeRemaining?: number; // seconds
  error?: string;
}

class CallAnalysisService {
  /**
   * Upload and analyze a call recording
   * 
   * @param file - Audio file (mp3, wav, m4a)
   * @param request - Additional call metadata
   * @returns Job ID for polling status
   */
  async uploadAndAnalyzeCall(
    file: File,
    request: Omit<AnalyzeCallRequest, 'audioFileUrl' | 'transcript'>
  ): Promise<ApiResponse<{ jobId: string }>> {
    // Validate file
    const validTypes = ['audio/mp3', 'audio/wav', 'audio/m4a', 'audio/mpeg'];
    if (!validTypes.includes(file.type)) {
      return {
        success: false,
        error: {
          message: 'Invalid file type. Supported: mp3, wav, m4a',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    // Max 500MB
    const maxSize = 500 * 1024 * 1024;
    if (file.size > maxSize) {
      return {
        success: false,
        error: {
          message: 'File too large. Maximum 500MB',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    // Upload file to storage first
    const formData = new FormData();
    formData.append('file', file);
    formData.append('metadata', JSON.stringify(request));

    try {
      const response = await fetch(`${apiClient['baseUrl']}/upload-call`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiClient['authToken']}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: {
            message: result.error?.message || 'Upload failed',
            code: result.error?.code || 'UPLOAD_ERROR',
          },
        };
      }

      return {
        success: true,
        data: { jobId: result.jobId },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Network error',
          code: 'NETWORK_ERROR',
        },
      };
    }
  }

  /**
   * Analyze a call from existing transcript
   * 
   * @param request - Transcript and metadata
   * @returns Analysis results
   */
  async analyzeFromTranscript(request: AnalyzeCallRequest): Promise<ApiResponse<AnalyzeCallResponse>> {
    if (!request.transcript) {
      return {
        success: false,
        error: {
          message: 'Transcript is required',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    const response = await apiClient.post<AnalyzeCallResponse>('/analyze-call', request);
    return response;
  }

  /**
   * Get status of call analysis job
   * 
   * @param jobId - Job ID returned from upload
   * @returns Job status
   */
  async getJobStatus(jobId: string): Promise<ApiResponse<CallJobStatus>> {
    const response = await apiClient.get<CallJobStatus>(`/call-job-status/${jobId}`);
    return response;
  }

  /**
   * Get completed call analysis
   * 
   * @param callId - Call ID
   * @returns Call analysis
   */
  async getCallAnalysis(callId: string): Promise<ApiResponse<AnalyzeCallResponse>> {
    const response = await apiClient.get<AnalyzeCallResponse>(`/call-analysis/${callId}`);
    return response;
  }

  /**
   * Update action status
   * 
   * @param callId - Call ID
   * @param actionId - Action ID
   * @param status - New status
   */
  async updateActionStatus(
    callId: string,
    actionId: string,
    status: 'pending' | 'completed' | 'dismissed'
  ): Promise<ApiResponse<void>> {
    const response = await apiClient.post<void>('/update-call-action', {
      callId,
      actionId,
      status,
    });
    return response;
  }
}

// Singleton instance
export const callAnalysisService = new CallAnalysisService();
