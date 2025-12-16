import { HeroV3 } from './v3/HeroV3';
import { TrustStrip } from './v3/TrustStrip';
import { CapabilitiesV3 } from './v3/CapabilitiesV3';
import { DataStorytelling } from './v3/DataStorytelling';
import { ThreePillarsV3 } from './v3/ThreePillarsV3';
import { RealSolutionsV3 } from './v3/RealSolutionsV3';
import { ProcessV3 } from './v3/ProcessV3';
import { PricingV3 } from './v3/PricingV3';
import { BriefBuilderV3 } from './v3/BriefBuilderV3';
import { CTAV3 } from './v3/CTAV3';
import { FooterV3 } from './v3/FooterV3';

interface HomeV3Props {
  onNavigateToWizard: () => void;
  onNavigateToDashboard?: () => void;
}

export function HomeV3({ onNavigateToWizard, onNavigateToDashboard }: HomeV3Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1 - Hero */}
      <HeroV3 onNavigateToWizard={onNavigateToWizard} />
      
      {/* Section 2 - Trust Strip */}
      <TrustStrip />
      
      {/* Section 3 - What We Build */}
      <CapabilitiesV3 />
      
      {/* Section 4 - Data Storytelling */}
      <DataStorytelling />
      
      {/* Section 5 - Three Pillars */}
      <ThreePillarsV3 />
      
      {/* Section 6 - Real Solutions */}
      <RealSolutionsV3 />
      
      {/* Section 7 - Process (8 Weeks) */}
      <ProcessV3 />
      
      {/* Section 8 - Investment Levels */}
      <PricingV3 />
      
      {/* Section 9 - AI Project Brief Builder */}
      <BriefBuilderV3 />
      
      {/* Section 10 - Final CTA */}
      <CTAV3 onNavigateToWizard={onNavigateToWizard} />
      
      {/* Section 11 - Footer */}
      <FooterV3 onNavigateToWizard={onNavigateToWizard} onNavigateToDashboard={onNavigateToDashboard} />
    </div>
  );
}