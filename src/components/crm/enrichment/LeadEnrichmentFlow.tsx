import React, { useState } from 'react';
import { AddLeadForm } from './AddLeadForm';
import { HydrationState } from './HydrationState';
import { DeepDossier, EnrichedLeadData } from './DeepDossier';

// Mock Data for "Jane Doe" scenario
const MOCK_ENRICHED_DATA: EnrichedLeadData = {
  name: "Jane Doe",
  role: "CTO",
  email: "jane@fintechco.com",
  company: "FintechCo",
  sunScore: 85,
  aiSummary: "Technical decision-maker at a Series A fintech. Focused on scalable payments infrastructure. Likely evaluating build vs. buy for their new crypto-gateway. Responds well to API-first documentation.",
  companySnapshot: {
    industry: "Financial Technology",
    size: "50-200",
    location: "New York, NY",
    funding: "Series A ($15M)",
    news: ["Raised $15M Series A", "Launched Crypto Gateway"]
  },
  techStack: {
    frontend: ["React", "Tailwind", "Next.js"],
    backend: ["Node.js", "PostgreSQL", "Redis"],
    infra: ["AWS", "Terraform"]
  },
  keyPeople: [
    { name: "Jane Doe", role: "CTO", linkedin: "#" },
    { name: "Alex Smith", role: "CEO", linkedin: "#" },
    { name: "Sarah Jones", role: "VP Product", linkedin: "#" }
  ]
};

interface LeadEnrichmentFlowProps {
  onClose: () => void;
  onComplete: (data: EnrichedLeadData) => void;
}

export function LeadEnrichmentFlow({ onClose, onComplete }: LeadEnrichmentFlowProps) {
  const [step, setStep] = useState<'input' | 'hydrating' | 'dossier'>('input');
  const [email, setEmail] = useState('');

  const handleStartAnalysis = (inputEmail: string) => {
    setEmail(inputEmail);
    setStep('hydrating');
  };

  const handleHydrationComplete = () => {
    setStep('dossier');
  };

  const handleSave = () => {
    onComplete(MOCK_ENRICHED_DATA);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-50/95 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-5xl">
          {step === 'input' && (
            <AddLeadForm onSubmit={handleStartAnalysis} onCancel={onClose} />
          )}
          
          {step === 'hydrating' && (
             <HydrationState onComplete={handleHydrationComplete} />
          )}

          {step === 'dossier' && (
             <DeepDossier 
               data={{...MOCK_ENRICHED_DATA, email}} // Merge email
               onClose={() => setStep('input')} 
               onSave={handleSave} 
             />
          )}
        </div>
      </div>
    </div>
  );
}
