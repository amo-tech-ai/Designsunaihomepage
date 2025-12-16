import { HeroV2 } from './v2/HeroV2';
import { LogosRow } from './v2/LogosRow';
import { CapabilitiesV2 } from './v2/CapabilitiesV2';
import { ThreePillarsV2 } from './v2/ThreePillarsV2';
import { CaseStudiesV2 } from './v2/CaseStudiesV2';
import { ProcessFlowV2 } from './v2/ProcessFlowV2';
import { PhasesSection } from './v2/PhasesSection';
import { PricingV2 } from './v2/PricingV2';
import { BriefGeneratorV2 } from './v2/BriefGeneratorV2';
import { CTABanner } from './v2/CTABanner';
import { FooterV2 } from './v2/FooterV2';

interface HomeV2Props {
  onNavigateToWizard: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function HomeV2({ onNavigateToWizard, onNavigateToDashboard, onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: HomeV2Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroV2 onNavigateToWizard={onNavigateToWizard} />
      
      {/* Trusted Logos Row */}
      <LogosRow />
      
      {/* We Build AI-Powered Platforms */}
      <CapabilitiesV2 />
      
      {/* Three Pillars of AI Success */}
      <ThreePillarsV2 />
      
      {/* Real Platforms Built by Sun AI */}
      <CaseStudiesV2 />
      
      {/* AI Process Flow (Horizontal Diagram) */}
      <ProcessFlowV2 />
      
      {/* 8 Weeks. Not 8 Months. */}
      <PhasesSection />
      
      {/* Investment Levels (Pricing) */}
      <PricingV2 />
      
      {/* Create Your AI Project Brief */}
      <BriefGeneratorV2 />
      
      {/* Final CTA Banner */}
      <CTABanner onNavigateToWizard={onNavigateToWizard} />
      
      {/* Footer */}
      <FooterV2 
        onNavigateToWizard={onNavigateToWizard} 
        onNavigateToDashboard={onNavigateToDashboard}
        onNavigateToWhatsApp={onNavigateToWhatsApp}
        onNavigateToAbout={onNavigateToAbout}
        onVersionChange={onVersionChange}
      />
    </div>
  );
}