/**
 * Lead Enrichment Flow - Refactored with Production Service Integration
 * 
 * Pattern: UI → Hook → Service → Edge Function → AI
 * 
 * Changes from original:
 * - Replaced LeadContext mock with real service
 * - Added proper error handling
 * - Added loading states
 * - Separated concerns (presentation vs logic)
 * 
 * This component is now production-ready.
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Building2, MapPin, DollarSign, CheckCircle } from 'lucide-react';
import { Typography } from '../../ui/design-system/Typography';
import { Card } from '../../ui/design-system/Card';
import { Button } from '../../ui/design-system/Button';
import { useLeadEnrichment } from '../../../hooks/useLeadEnrichment';
import { AddLeadForm } from './AddLeadForm';
import type { EnrichedLeadData } from '../../../services';

/**
 * Main component - manages flow state
 */
export function LeadEnrichmentFlowRefactored() {
  const [step, setStep] = useState<'form' | 'enriching' | 'results'>('form');
  const [enrichedLead, setEnrichedLead] = useState<EnrichedLeadData | null>(null);

  const { enrichLead, isEnriching, error, clearError } = useLeadEnrichment();

  // Handle form submission
  const handleSubmitEmail = async (email: string) => {
    setStep('enriching');
    clearError();

    const result = await enrichLead({ email });

    if (result) {
      setEnrichedLead(result.lead);
      setStep('results');
    } else {
      // Error occurred - stay on enriching screen with error
      // User can retry or cancel
    }
  };

  // Handle retry
  const handleRetry = () => {
    setStep('form');
    clearError();
  };

  // Handle completion
  const handleComplete = () => {
    // Navigate to lead detail or leads list
    window.location.href = `/app/leads/${enrichedLead?.email}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 py-12 px-4">
      {step === 'form' && (
        <AddLeadForm 
          onSubmit={handleSubmitEmail}
          onCancel={() => window.history.back()}
        />
      )}

      {step === 'enriching' && (
        <EnrichingState 
          isEnriching={isEnriching}
          error={error}
          onRetry={handleRetry}
          onCancel={() => setStep('form')}
        />
      )}

      {step === 'results' && enrichedLead && (
        <EnrichedLeadResults 
          lead={enrichedLead}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
}

/**
 * Enriching State - Shows AI thinking with progress
 */
interface EnrichingStateProps {
  isEnriching: boolean;
  error: string | null;
  onRetry: () => void;
  onCancel: () => void;
}

function EnrichingState({ isEnriching, error, onRetry, onCancel }: EnrichingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <Card variant="solid" className="p-8 text-center bg-white/80 backdrop-blur-xl">
          {!error ? (
            <>
              {/* Thinking Animation */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <motion.div
                  className="absolute inset-0 rounded-full bg-indigo-100"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full bg-indigo-200 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-8 h-8 text-indigo-600" />
                </motion.div>
              </div>

              <Typography variant="h3" className="font-bold text-slate-900 mb-3">
                Analyzing Lead
              </Typography>
              
              <Typography variant="body" className="text-slate-500 mb-6">
                AI is searching for company insights and calculating fit score...
              </Typography>

              {/* Progress Steps */}
              <div className="space-y-3 text-left">
                <ThinkingStep 
                  label="Searching company data" 
                  isActive={true}
                  isComplete={false}
                />
                <ThinkingStep 
                  label="Analyzing industry fit" 
                  isActive={true}
                  isComplete={false}
                />
                <ThinkingStep 
                  label="Calculating score" 
                  isActive={true}
                  isComplete={false}
                />
              </div>
            </>
          ) : (
            <>
              {/* Error State */}
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              <Typography variant="h3" className="font-bold text-slate-900 mb-2">
                Enrichment Failed
              </Typography>
              
              <Typography variant="body" className="text-slate-500 mb-6">
                {error}
              </Typography>

              <div className="flex gap-3">
                <Button 
                  onClick={onRetry}
                  variant="primary"
                  className="flex-1"
                >
                  Try Again
                </Button>
                <Button 
                  onClick={onCancel}
                  variant="secondary"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </Card>
      </motion.div>
    </div>
  );
}

/**
 * Thinking Step Component
 */
interface ThinkingStepProps {
  label: string;
  isActive: boolean;
  isComplete: boolean;
}

function ThinkingStep({ label, isActive, isComplete }: ThinkingStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-50"
    >
      {isComplete ? (
        <CheckCircle className="w-4 h-4 text-green-500" />
      ) : (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full"
        />
      )}
      <Typography variant="small" className={isActive ? "text-slate-700" : "text-slate-400"}>
        {label}
      </Typography>
    </motion.div>
  );
}

/**
 * Enriched Lead Results - Shows AI-powered insights
 */
interface EnrichedLeadResultsProps {
  lead: EnrichedLeadData;
  onComplete: () => void;
}

function EnrichedLeadResults({ lead, onComplete }: EnrichedLeadResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        {/* Fit Score Header */}
        <Card variant="solid" className="p-6 mb-4 bg-white/80 backdrop-blur-xl text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="relative">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#e2e8f0"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#6366f1"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "251.2", strokeDashoffset: 251.2 }}
                  animate={{ 
                    strokeDashoffset: 251.2 - (251.2 * lead.fitScore) / 100 
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Typography variant="h2" className="font-bold text-slate-900">
                  {lead.fitScore}
                </Typography>
              </div>
            </div>

            <div className="text-left">
              <Typography variant="h3" className="font-bold text-slate-900 mb-1">
                {lead.company}
              </Typography>
              <Typography variant="small" className="text-slate-500">
                {lead.fitReasoning}
              </Typography>
            </div>
          </div>
        </Card>

        {/* Enriched Data */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <DataCard 
            icon={Building2}
            label="Company Size"
            value={lead.companySize || 'Unknown'}
          />
          <DataCard 
            icon={TrendingUp}
            label="Industry"
            value={lead.industry || 'Unknown'}
          />
          <DataCard 
            icon={DollarSign}
            label="Revenue"
            value={lead.revenue || 'Unknown'}
          />
          <DataCard 
            icon={MapPin}
            label="Location"
            value={lead.location || 'Unknown'}
          />
        </div>

        {lead.description && (
          <Card variant="solid" className="p-4 mb-6 bg-white/80 backdrop-blur-xl">
            <Typography variant="small" className="text-slate-600 font-medium mb-2">
              About
            </Typography>
            <Typography variant="body" className="text-slate-700 text-sm">
              {lead.description}
            </Typography>
          </Card>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <Button 
            onClick={onComplete}
            variant="primary"
            className="flex-1"
          >
            View Full Profile
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Data Card Component
 */
interface DataCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

function DataCard({ icon: Icon, label, value }: DataCardProps) {
  return (
    <Card variant="solid" className="p-4 bg-white/80 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <Typography variant="small" className="text-slate-500 text-xs">
            {label}
          </Typography>
          <Typography variant="body" className="text-slate-900 font-semibold">
            {value}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
