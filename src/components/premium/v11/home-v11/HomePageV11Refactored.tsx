import { FooterV11 } from '../../../FooterV11';
import {
  HeroV11,
  TrustedByV11,
  HowItWorksV11,
  ServicesGridV11,
  TransformationV11,
  ResultsV11,
  PillarsV11,
  TimelineV11,
  PricingV11,
  ProjectBriefV11,
  FinalCTAV11
} from './sections';

interface HomePageV11Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function HomePageV11Refactored({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: HomePageV11Props) {
  return (
    <main className="min-h-screen bg-[#FDFCFB] font-sans antialiased selection:bg-[#F59E0B] selection:text-white">
      <HeroV11 />
      <TrustedByV11 />
      <HowItWorksV11 />
      <ServicesGridV11 />
      <TransformationV11 />
      <ResultsV11 />
      <PillarsV11 />
      <TimelineV11 />
      <PricingV11 />
      <ProjectBriefV11 />
      <FinalCTAV11 />
      <FooterV11 />
    </main>
  );
}