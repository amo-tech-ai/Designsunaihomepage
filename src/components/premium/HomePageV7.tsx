import { HeroV7 } from './v7/HeroV7';
import { HowItWorksV7 } from './v7/HowItWorksV7';
import { FeaturesV7 } from './v7/FeaturesV7';
import { WorkflowsV7 } from './v7/WorkflowsV7';
import { StatsV7 } from './v7/StatsV7';
import { PricingV7 } from './v7/PricingV7';
import { TestimonialsV7 } from './v7/TestimonialsV7';
import { FAQV7 } from './v7/FAQV7';
import { WizardCTA } from '../conversion/WizardCTA';
import { FooterV7 } from './v7/FooterV7';
import { NavbarV7 } from './v7/NavbarV7';

interface HomePageV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function HomePageV7({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: HomePageV7Props) {
  return (
    <main className="min-h-screen bg-warm-white font-sans antialiased text-slate-900 selection:bg-orange-500 selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
      
      <HeroV7 
        onStartProject={() => onVersionChange?.('wizard')} 
        onTalkToExpert={onNavigateToWhatsApp} 
      />
      
      <StatsV7 />
      <HowItWorksV7 />
      <FeaturesV7 />
      <WorkflowsV7 />
      <PricingV7 />
      <TestimonialsV7 />
      <FAQV7 />
      
      {/* New High-Conversion CTA Component */}
      <WizardCTA 
        variant="section" 
        onNavigate={() => onVersionChange?.('wizard')} 
      />
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
