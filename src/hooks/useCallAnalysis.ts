/**
 * useCallAnalysis Hook
 * 
 * Purpose: Manage call analysis with job polling
 * Pattern: Upload → Poll → Complete
 * 
 * Usage:
 * const { analyzeCall, isAnalyzing, progress, analysis } = useCallAnalysis();
 * await analyzeCall(audioFile);
 */

import { useState, useEffect, useCallback } from 'react';
import { 
  callAnalysisService, 
  type AnalyzeCallRequest,
  type CallAnalysis,
  type CallJobStatus 
} from '../services';

interface UseCallAnalysisResult {
  analyzeCall: (file: File, metadata?: Omit<AnalyzeCallRequest, 'audioFileUrl' | 'transcript'>) => Promise<void>;
  analyzeTranscript: (request: AnalyzeCallRequest) => Promise<void>;
  isAnalyzing: boolean;
  progress: number; // 0-100
  currentStep: string;
  analysis: CallAnalysis | null;
  error: string | null;
  clearError: () => void;
}

const POLL_INTERVAL = 2000; // 2 seconds

export function useCallAnalysis(): UseCallAnalysisResult {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [analysis, setAnalysis] = useState<CallAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);

  // Poll job status
  const pollJobStatus = useCallback(async (id: string) => {
    try {
      const response = await callAnalysisService.getJobStatus(id);

      if (!response.success) {
        setError(response.error?.message || 'Status check failed');
        setIsAnalyzing(false);
        setJobId(null);
        return;
      }

      const status = response.data!;
      setProgress(status.progress);
      setCurrentStep(status.currentStep);

      if (status.status === 'completed') {
        // Fetch full analysis
        const analysisResponse = await callAnalysisService.getCallAnalysis(id);
        
        if (analysisResponse.success && analysisResponse.data) {
          setAnalysis(analysisResponse.data.analysis);
        }

        setIsAnalyzing(false);
        setJobId(null);
        setProgress(100);
      } else if (status.status === 'failed') {
        setError(status.error || 'Analysis failed');
        setIsAnalyzing(false);
        setJobId(null);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Polling error';
      setError(message);
      setIsAnalyzing(false);
      setJobId(null);
    }
  }, []);

  // Poll effect
  useEffect(() => {
    if (!jobId || !isAnalyzing) return;

    const interval = setInterval(() => {
      pollJobStatus(jobId);
    }, POLL_INTERVAL);

    // Poll immediately
    pollJobStatus(jobId);

    return () => clearInterval(interval);
  }, [jobId, isAnalyzing, pollJobStatus]);

  const analyzeCall = async (
    file: File,
    metadata?: Omit<AnalyzeCallRequest, 'audioFileUrl' | 'transcript'>
  ) => {
    setIsAnalyzing(true);
    setError(null);
    setProgress(0);
    setCurrentStep('Uploading...');
    setAnalysis(null);

    try {
      const response = await callAnalysisService.uploadAndAnalyzeCall(file, metadata || {});

      if (!response.success) {
        // Development mode fallback - show mock data
        if (response.error?.code === 'NETWORK_ERROR') {
          console.info('💡 Using mock call analysis data (backend not configured)');
          
          // Simulate progress
          setCurrentStep('Transcribing audio...');
          setProgress(33);
          
          await new Promise(resolve => setTimeout(resolve, 1000));
          setCurrentStep('Analyzing conversation...');
          setProgress(66);
          
          await new Promise(resolve => setTimeout(resolve, 1000));
          setCurrentStep('Generating insights...');
          setProgress(100);
          
          // Mock analysis data
          setAnalysis({
            id: 'mock_' + Date.now(),
            callDate: new Date().toISOString(),
            duration: 1800,
            participants: ['You', file.name.split('.')[0]],
            summary: `Demo analysis for ${file.name}. This is mock data to show the UI. Configure Supabase backend for real AI-powered call analysis.`,
            keyPoints: [
              'Demo mode - showing sample data',
              'Real AI analysis requires backend setup',
              'Follow /PRODUCTION-SETUP.md for configuration',
            ],
            sentiment: 'neutral' as const,
            sentimentScore: 50,
            dealHealthScore: 75,
            actions: [
              {
                id: 'mock_1',
                type: 'email' as const,
                title: 'Enable Real AI Analysis',
                description: 'Set up Supabase backend to unlock AI-powered call analysis with Gemini',
                priority: 'high' as const,
                assignee: 'You',
                dueDate: new Date().toISOString(),
                status: 'pending' as const,
                aiReasoning: 'Backend configuration required for production features',
              },
            ],
            analyzedAt: new Date().toISOString(),
          });
          
          setIsAnalyzing(false);
          return;
        }
        
        setError(response.error?.message || 'Upload failed');
        setIsAnalyzing(false);
        return;
      }

      // Start polling
      setJobId(response.data!.jobId);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setError(message);
      setIsAnalyzing(false);
    }
  };

  const analyzeTranscript = async (request: AnalyzeCallRequest) => {
    setIsAnalyzing(true);
    setError(null);
    setProgress(0);
    setCurrentStep('Analyzing transcript...');
    setAnalysis(null);

    try {
      const response = await callAnalysisService.analyzeFromTranscript(request);

      if (!response.success) {
        setError(response.error?.message || 'Analysis failed');
        return;
      }

      setAnalysis(response.data!.analysis);
      setProgress(100);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setError(message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearError = () => setError(null);

  return {
    analyzeCall,
    analyzeTranscript,
    isAnalyzing,
    progress,
    currentStep,
    analysis,
    error,
    clearError,
  };
}