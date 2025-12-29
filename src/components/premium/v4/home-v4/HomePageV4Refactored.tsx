import {
  Hero,
  FeatureGrid,
  Metrics,
  Pillars,
  CaseStudies,
  Timeline,
  Pricing,
  ProjectBrief,
  CTA,
  Footer
} from './sections';

interface HomePageV4Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function HomePageV4Refactored({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: HomePageV4Props) {
  return (
    <main className="min-h-screen bg-white selection:bg-[#FF6B2C] selection:text-white font-sans antialiased">
      <Hero />
      <FeatureGrid />
      <Metrics />
      <Pillars />
      <CaseStudies />
      <Timeline />
      <Pricing />
      <ProjectBrief />
      <CTA />
      <Footer onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
