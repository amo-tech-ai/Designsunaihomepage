import { HeroV7 } from './v7/HeroV7';
import { FeaturesV7 } from './v7/FeaturesV7';
import { WorkflowsV7 } from './v7/WorkflowsV7';
import { StatsV7 } from './v7/StatsV7';
import { PricingV7 } from './v7/PricingV7';
import { TestimonialsV7 } from './v7/TestimonialsV7';
import { FAQV7 } from './v7/FAQV7';
import { FinalCTAV7 } from './v7/FinalCTAV7';
import { FooterV7 } from './v7/FooterV7';
import { NavbarV7 } from './v7/NavbarV7';

interface HomePageV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
}

export function HomePageV7({ onNavigateToWhatsApp, onNavigateToAbout }: HomePageV7Props) {
  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} />
      <HeroV7 />
      <StatsV7 />
      <FeaturesV7 />
      <WorkflowsV7 />
      <PricingV7 />
      <TestimonialsV7 />
      <FAQV7 />
      <FinalCTAV7 />
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} />
    </main>
  );
}
