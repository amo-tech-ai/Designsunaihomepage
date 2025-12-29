import { Footer } from '../../../Footer';
import {
  Hero,
  TrustedBy,
  HowItWorks,
  ServicesGrid,
  Transformation,
  Results,
  Pillars,
  Timeline,
  Pricing,
  ProjectBrief,
  FinalCTA
} from './sections';

interface HomePageV6Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function HomePageV6Refactored({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: HomePageV6Props) {
  return (
    <main className="min-h-screen bg-white font-sans antialiased selection:bg-[#FF6A3D] selection:text-white">
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <ServicesGrid />
      <Transformation />
      <Results />
      <Pillars />
      <Timeline />
      <Pricing />
      <ProjectBrief />
      <FinalCTA />
      <Footer />
    </main>
  );
}
