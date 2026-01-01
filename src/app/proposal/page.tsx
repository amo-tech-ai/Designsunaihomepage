'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Download, CheckCircle2, Calendar, DollarSign, Package } from 'lucide-react';

interface ProposalData {
  companyName: string;
  services: string[];
  budget: string;
  timeline: string;
  goals: string[];
}

export default function ProposalPage() {
  const router = useRouter();
  const [proposalData, setProposalData] = useState<ProposalData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch wizard data from sessionStorage
    const wizardDataString = sessionStorage.getItem('wizardData');
    
    if (!wizardDataString) {
      router.push('/wizard');
      return;
    }

    const wizardData = JSON.parse(wizardDataString);
    setProposalData(wizardData);
    setIsLoading(false);
  }, [router]);

  const handleAcceptProposal = () => {
    alert('Thank you! We will contact you shortly to get started.');
    sessionStorage.removeItem('wizardData');
    router.push('/');
  };

  const handleDownload = () => {
    alert('PDF download functionality will be implemented');
  };

  if (isLoading || !proposalData) {
    return (
      <div className="min-h-screen bg-[#FCFCFC] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-zinc-600">Loading proposal...</p>
        </div>
      </div>
    );
  }

  const phases = [
    {
      name: 'Discovery & Planning',
      duration: '2 weeks',
      status: 'Pending',
    },
    {
      name: 'Development',
      duration: '4 weeks',
      status: 'Pending',
    },
    {
      name: 'Testing & Refinement',
      duration: '2 weeks',
      status: 'Pending',
    },
    {
      name: 'Launch & Training',
      duration: '1 week',
      status: 'Pending',
    },
  ];

  const deliverables = [
    'Fully functional CRM system',
    'WhatsApp automation integration',
    'AI-powered lead scoring',
    'Team training & documentation',
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFC] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Proposal Ready
                </span>
              </div>
              <h1 className="font-['Playfair_Display'] text-5xl font-light text-black mb-2">
                Your Custom Proposal
              </h1>
              <p className="text-lg font-light text-zinc-600">
                For {proposalData.companyName}
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="
                flex items-center gap-2 px-6 py-3 rounded-full
                border border-zinc-200 text-zinc-900 text-sm font-medium
                hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-200
              "
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-100">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-indigo-500" />
                <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                  Timeline
                </p>
              </div>
              <p className="font-['Playfair_Display'] text-2xl font-light text-black">
                8-10 weeks
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-100">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-indigo-500" />
                <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                  Investment
                </p>
              </div>
              <p className="font-['Playfair_Display'] text-2xl font-light text-black">
                {proposalData.budget === '<10k' && '$8,000 - $10,000'}
                {proposalData.budget === '10k-25k' && '$15,000 - $25,000'}
                {proposalData.budget === '25k-50k' && '$25,000 - $37,500'}
                {proposalData.budget === '50k+' && '$50,000 - $75,000'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-100">
              <div className="flex items-center gap-3 mb-2">
                <Package className="w-5 h-5 text-indigo-500" />
                <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                  Deliverables
                </p>
              </div>
              <p className="font-['Playfair_Display'] text-2xl font-light text-black">
                {deliverables.length} items
              </p>
            </div>
          </div>
        </div>

        {/* Project Summary */}
        <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm mb-8">
          <h2 className="font-['Playfair_Display'] text-3xl font-light text-black mb-6">
            Project Summary
          </h2>
          <p className="text-sm font-light text-zinc-700 leading-relaxed mb-6">
            Based on your requirements, we've designed a comprehensive solution to help {proposalData.companyName} achieve
            its goals. This proposal outlines a {
              proposalData.timeline === 'urgent' ? 'fast-track' :
              proposalData.timeline === '1-2months' ? 'standard' :
              'flexible'
            } implementation approach that includes {proposalData.services.length} core service{proposalData.services.length > 1 ? 's' : ''}.
          </p>
          
          {proposalData.goals && proposalData.goals.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3">
                Your Goals
              </h3>
              <ul className="space-y-2">
                {proposalData.goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-light text-zinc-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Project Phases */}
        <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm mb-8">
          <h2 className="font-['Playfair_Display'] text-3xl font-light text-black mb-6">
            Project Phases
          </h2>
          <div className="space-y-4">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-zinc-100 hover:border-indigo-200 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="
                      w-10 h-10 rounded-full bg-zinc-900 text-white
                      flex items-center justify-center flex-shrink-0
                      font-['Playfair_Display'] text-lg
                    ">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-black mb-1">
                        {phase.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {phase.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                    {phase.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm mb-8">
          <h2 className="font-['Playfair_Display'] text-3xl font-light text-black mb-6">
            Deliverables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-light text-zinc-900">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accept Proposal */}
        <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
          <div className="text-center">
            <h2 className="font-['Playfair_Display'] text-3xl font-light text-black mb-4">
              Ready to get started?
            </h2>
            <p className="text-sm font-light text-zinc-600 mb-8 max-w-xl mx-auto">
              Accept this proposal and we'll schedule a kickoff call to begin planning your project.
            </p>
            <button
              onClick={handleAcceptProposal}
              className="
                bg-black text-white rounded-full px-8 py-4 text-sm font-medium
                hover:bg-zinc-900 transition-all duration-200 shadow-lg
                inline-flex items-center gap-2
              "
            >
              <CheckCircle2 className="w-5 h-5" />
              Accept Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
