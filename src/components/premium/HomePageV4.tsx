import { HeroV4 } from './v4/HeroV4';
import { FeatureGridV4 } from './v4/FeatureGridV4';
import { MetricsV4 } from './v4/MetricsV4';
import { PillarsV4 } from './v4/PillarsV4';
import { CaseStudiesV4 } from './v4/CaseStudiesV4';
import { TimelineV4 } from './v4/TimelineV4';
import { PricingV4 } from './v4/PricingV4';
import { ProjectBriefV4 } from './v4/ProjectBriefV4';
import { CTAV4 } from './v4/CTAV4';
import { FooterV4 } from './v4/FooterV4';

export function HomePageV4() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#FF6B2C] selection:text-white font-sans antialiased">
      <HeroV4 />
      <FeatureGridV4 />
      <MetricsV4 />
      <PillarsV4 />
      <CaseStudiesV4 />
      <TimelineV4 />
      <PricingV4 />
      <ProjectBriefV4 />
      <CTAV4 />
      <FooterV4 />
    </main>
  );
}
