/**
 * BCG-Style Fashion Industry Page
 * Clean, professional, consulting-grade design
 * Matches BCG.com patterns and specifications
 */

import { BCGHero } from './fashion/BCGHero';
import { BCGStatsGrid } from './fashion/BCGStatsGrid';
import { BCGServiceCards } from './fashion/BCGServiceCards';
import { BCGProcessFlow } from './fashion/BCGProcessFlow';
import { BCGTeamSection } from './fashion/BCGTeamSection';
import { BCGInsightsSection } from './fashion/BCGInsightsSection';
import { BCGRelatedContent } from './fashion/BCGRelatedContent';
import { FooterV11 } from '../FooterV11';

export function FashionServicesPageBCG() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <BCGHero />

      {/* Stats Grid (4-Column Exhibit) */}
      <BCGStatsGrid />

      {/* Service Cards (3×2 Grid) */}
      <BCGServiceCards />

      {/* Process Flow (4-Phase Timeline) */}
      <BCGProcessFlow />

      {/* Team/Consultants Section */}
      <BCGTeamSection />

      {/* Insights/Articles Section */}
      <BCGInsightsSection />

      {/* Related Content (Dark Footer Section) */}
      <BCGRelatedContent />

      {/* Site Footer */}
      <FooterV11 />
    </div>
  );
}
