import { Hero } from './Hero';
import { CapabilitiesBar } from './CapabilitiesBar';
import { FeatureGrid } from './FeatureGrid';
import { CaseStudies } from './CaseStudies';
import { ThreePillars } from './ThreePillars';
import { TechStack } from './TechStack';
import { ProcessFlow } from './ProcessFlow';
import { Pricing } from './Pricing';
import { BriefGenerator } from './BriefGenerator';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';

interface HomeV1Props {
  onNavigateToWizard: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function HomeV1({ onNavigateToWizard, onNavigateToDashboard, onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: HomeV1Props) {
  return (
    <div className="min-h-screen bg-white">
      <Hero onNavigateToWizard={onNavigateToWizard} />
      <CapabilitiesBar />
      <FeatureGrid />
      <CaseStudies />
      <ThreePillars />
      <TechStack />
      <ProcessFlow />
      <Pricing />
      <BriefGenerator />
      <FinalCTA onNavigateToWizard={onNavigateToWizard} />
      <Footer />
    </div>
  );
}