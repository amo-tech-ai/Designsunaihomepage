import { FooterV11 } from '../../../FooterV11';
import {
  HeroV12,
  TrustedByV12,
  HowItWorksV12,
  ServicesGridV12,
  TransformationV12,
  ResultsV12,
  PillarsV12,
  TimelineV12,
  PricingV12,
  ProjectBriefV12,
  FinalCTAV12
} from './sections';

interface HomePageV12Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function HomePageV12({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: HomePageV12Props) {
  return (
    <main className="min-h-screen bg-white font-sans antialiased selection:bg-[#C4B5A6] selection:text-white">
      <HeroV12 />
      <TrustedByV12 />
      <HowItWorksV12 />
      <ServicesGridV12 />
      <TransformationV12 />
      <ResultsV12 />
      <PillarsV12 />
      <TimelineV12 />
      <PricingV12 />
      <ProjectBriefV12 />
      <FinalCTAV12 />
      <FooterV11 />
    </main>
  );
}
