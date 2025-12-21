/**
 * Email Drafter Service
 * 
 * Purpose: Generate personalized email drafts using AI
 * Pattern: Context → AI generation → Draft → User edits
 * 
 * Real-world use case:
 * User clicks "Draft Follow-up" → System reads call notes, lead data
 * → Gemini generates personalized email → User reviews and sends
 */

import { apiClient, type ApiResponse } from './api-client';

export interface EmailDraftRequest {
  recipientName: string;
  recipientCompany: string;
  recipientRole?: string;
  emailType: 'follow_up' | 'introduction' | 'proposal' | 'check_in' | 'closing';
  context?: {
    callSummary?: string;
    dealValue?: number;
    nextSteps?: string[];
    concerns?: string[];
    opportunities?: string[];
  };
  tone?: 'professional' | 'casual' | 'executive' | 'technical';
  includeCallToAction?: boolean;
}

export interface EmailDraft {
  subject: string;
  body: string;
  callToAction?: string;
  suggestedSendTime?: string;
  
  // AI reasoning
  reasoning: {
    subjectRationale: string;
    toneJustification: string;
    keyPoints: string[];
  };
  
  // Alternatives
  alternativeSubjects?: string[];
  
  // Metadata
  generatedAt: string;
  wordCount: number;
  readingTime: string; // e.g., "2 min"
}

export interface EmailDraftResponse {
  draft: EmailDraft;
  confidence: number; // 0-100
  suggestions: string[];
}

class EmailDrafterService {
  /**
   * Generate email draft using AI
   */
  async generateDraft(request: EmailDraftRequest): Promise<ApiResponse<EmailDraftResponse>> {
    // Validate
    if (!request.recipientName) {
      return {
        success: false,
        error: {
          message: 'Recipient name is required',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    if (!request.recipientCompany) {
      return {
        success: false,
        error: {
          message: 'Recipient company is required',
          code: 'VALIDATION_ERROR',
        },
      };
    }

    const response = await apiClient.post<EmailDraftResponse>('/draft-email', {
      recipientName: request.recipientName,
      recipientCompany: request.recipientCompany,
      recipientRole: request.recipientRole,
      emailType: request.emailType,
      context: request.context,
      tone: request.tone || 'professional',
      includeCallToAction: request.includeCallToAction !== false,
    });

    return response;
  }

  /**
   * Refine existing draft
   */
  async refineDraft(
    draftId: string,
    refinementRequest: {
      instruction: string; // e.g., "Make it shorter", "Add urgency"
      currentBody: string;
      currentSubject: string;
    }
  ): Promise<ApiResponse<EmailDraftResponse>> {
    const response = await apiClient.post<EmailDraftResponse>('/refine-email', {
      draftId,
      instruction: refinementRequest.instruction,
      currentBody: refinementRequest.currentBody,
      currentSubject: refinementRequest.currentSubject,
    });

    return response;
  }

  /**
   * Generate multiple variations
   */
  async generateVariations(request: EmailDraftRequest): Promise<ApiResponse<EmailDraft[]>> {
    const response = await apiClient.post<EmailDraft[]>('/draft-email-variations', {
      ...request,
      variationCount: 3,
    });

    return response;
  }
}

export const emailDrafterService = new EmailDrafterService();
