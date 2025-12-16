import { HeroV6 } from './v6/HeroV6';
import { TrustedByV6 } from './v6/TrustedByV6';
import { HowItWorksV6 } from './v6/HowItWorksV6';
import { ServicesGridV6 } from './v6/ServicesGridV6';
import { TransformationV6 } from './v6/TransformationV6';
import { ResultsV6 } from './v6/ResultsV6';
import { PillarsV6 } from './v6/PillarsV6';
import { TimelineV6 } from './v6/TimelineV6';
import { PricingV6 } from './v6/PricingV6';
import { ProjectBriefV6 } from './v6/ProjectBriefV6';
import { FinalCTAV6 } from './v6/FinalCTAV6';
import { FooterV6 } from './v6/FooterV6';

interface HomePageV6Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function HomePageV6({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: HomePageV6Props) {
  return (
    <main className="min-h-screen bg-white font-sans antialiased selection:bg-[#FF6A3D] selection:text-white">
      <HeroV6 />
      <TrustedByV6 />
      <HowItWorksV6 />
      <ServicesGridV6 />
      <TransformationV6 />
      <ResultsV6 />
      <PillarsV6 />
      <TimelineV6 />
      <PricingV6 />
      <ProjectBriefV6 />
      <FinalCTAV6 />
      <FooterV6 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
