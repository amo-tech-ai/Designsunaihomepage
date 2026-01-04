'use client';

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import ProjectSnapshot from './components/ProjectSnapshot';
import AICapabilitiesSection from './components/AICapabilitiesSection';
import NextStepsSection from './components/NextStepsSection';
import AIAssistantPanel from './components/AIAssistantPanel';

export default function DashboardV3Page() {
  const [wizardData, setWizardData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load wizard data from sessionStorage
    const savedData = sessionStorage.getItem('wizardV3Data');
    if (savedData) {
      setWizardData(JSON.parse(savedData));
    }
    
    // Simulate entry animation delay
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  if (isLoading || !wizardData) {
    return (
      <div className="min-h-screen bg-[#FCFCFC] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Sparkles className="w-6 h-6 text-indigo-600" />
          </div>
          <p className="text-sm text-zinc-500">Preparing your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCFCFC] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Entry Transition Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-medium text-indigo-900">
              Personalized for {wizardData.companyName}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-['Playfair_Display'] text-5xl font-light text-black mb-4">
            Your Project Is Ready
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            This dashboard shows what we're building and how AI will support your business.
          </p>
        </div>

        {/* Main Layout: 2 columns on desktop */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Left Column: Main Content */}
          <div className="space-y-8">
            {/* 1. Project Snapshot */}
            <ProjectSnapshot data={wizardData} />

            {/* 2. What AI Is Doing For You */}
            <AICapabilitiesSection data={wizardData} />

            {/* 3. What Happens Next */}
            <NextStepsSection data={wizardData} />
          </div>

          {/* Right Column: AI Assistant Panel (Desktop only) */}
          <div className="hidden lg:block">
            <AIAssistantPanel data={wizardData} />
          </div>
        </div>

        {/* Mobile: AI Assistant Panel */}
        <div className="lg:hidden mt-8">
          <AIAssistantPanel data={wizardData} />
        </div>
      </div>
    </div>
  );
}
