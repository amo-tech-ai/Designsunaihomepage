import React from 'react';
import { NavbarV7 } from '../NavbarV7';
import { FooterV7 } from '../FooterV7';
import { ProcessHero } from './sections/ProcessHero';
import { ProcessTimeline } from './sections/ProcessTimeline';
import { ProcessFlowchart } from './sections/ProcessFlowchart';
import { ProcessComparison } from './sections/ProcessComparison';
import { ProcessMetrics } from './sections/ProcessMetrics';
import { ProcessCalculator } from './sections/ProcessCalculator';
import { ProcessFinalCTA } from './sections/ProcessFinalCTA';

interface ProcessPageV2Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function ProcessPageV2Refactored({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: ProcessPageV2Props) {
  const handleWizard = () => onVersionChange?.('wizard');
  const handleProjects = () => onVersionChange?.('projects');
  const handleProcess = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleContact = () => onNavigateToAbout?.();

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
      
      <ProcessHero onNavigateToWizard={handleWizard} onNavigateToProjects={handleProjects} />
      <ProcessTimeline />
      <ProcessFlowchart />
      <ProcessComparison onNavigateToProcess={handleProcess} />
      <ProcessMetrics />
      <ProcessCalculator onNavigateToWizard={handleWizard} />
      <ProcessFinalCTA onNavigateToWizard={handleWizard} onNavigateToContact={handleContact} />
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
