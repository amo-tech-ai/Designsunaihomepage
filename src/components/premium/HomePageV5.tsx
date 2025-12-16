import { HeroV5 } from './v5/HeroV5';
import { FeatureGridV5 } from './v5/FeatureGridV5';
import { HowItWorksV5 } from './v5/HowItWorksV5';
import { CaseStudiesV5 } from './v5/CaseStudiesV5';
import { MetricsV5 } from './v5/MetricsV5';
import { PillarsV5 } from './v5/PillarsV5';
import { TimelineV5 } from './v5/TimelineV5';
import { PricingV5 } from './v5/PricingV5';
import { ProjectBriefV5 } from './v5/ProjectBriefV5';
import { CTAV5 } from './v5/CTAV5';
import { FooterV5 } from './v5/FooterV5';

interface HomePageV5Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function HomePageV5({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: HomePageV5Props) {
  return (
    <main className="min-h-screen bg-white selection:bg-[#FF6A3D] selection:text-white font-sans antialiased">
      <HeroV5 />
      <FeatureGridV5 />
      <HowItWorksV5 />
      <CaseStudiesV5 /> {/* Dark Section #1 */}
      <MetricsV5 />
      <PillarsV5 />
      <TimelineV5 />    {/* Dark Section #2 */}
      <PricingV5 />
      <ProjectBriefV5 />
      <CTAV5 />
      <FooterV5 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />      {/* Dark Section #3 */}
    </main>
  );
}
