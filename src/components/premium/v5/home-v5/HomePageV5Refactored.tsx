import {
  Hero,
  FeatureGrid,
  HowItWorks,
  CaseStudies,
  Metrics,
  Pillars,
  Timeline,
  Pricing,
  ProjectBrief,
  CTA,
  Footer
} from './sections';

interface HomePageV5Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function HomePageV5Refactored({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: HomePageV5Props) {
  return (
    <main className="min-h-screen bg-white selection:bg-[#FF6A3D] selection:text-white font-sans antialiased">
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <CaseStudies /> {/* Dark Section #1 */}
      <Metrics />
      <Pillars />
      <Timeline />    {/* Dark Section #2 */}
      <Pricing />
      <ProjectBrief />
      <CTA />
      <Footer onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />      {/* Dark Section #3 */}
    </main>
  );
}
