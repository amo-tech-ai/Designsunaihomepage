import { motion, useScroll } from 'motion/react';
import { useRef } from 'react';
import { EnhancedHero } from './fashion/EnhancedHero';
import { ArticleHero } from './fashion/ArticleHero';
import { ContentSections } from './fashion/ContentSections';
import { TextureSection } from './fashion/TextureSection';
import { DataVisualization } from './fashion/DataVisualization';
import { DotMatrixVisualization } from './fashion/DotMatrixVisualization';
import { FrameworkComparison } from './fashion/FrameworkComparison';
import { MobileExperience } from './fashion/MobileExperience';
import { ProcessFlowchart } from './fashion/ProcessFlowchart';
import { ScrollRevealSteps } from './fashion/ScrollRevealSteps';
import { IllustratedServiceCards } from './fashion/IllustratedServiceCards';
import { ToolsResources } from './fashion/ToolsResources';
import { ValueChainDiagram } from './fashion/ValueChainDiagram';
import { TeamProfiles } from './fashion/TeamProfiles';
import { InsightsCards } from './fashion/InsightsCards';
import { RelatedServices } from './fashion/RelatedServices';
import { CTABand } from './fashion/CTABand';
import { FooterV11 } from '../FooterV11';

export function FashionServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white">
      {/* Scroll Progress Indicator */}
      {!prefersReducedMotion && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#1A3A32] origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
      )}

      {/* Enhanced Hero with Parallax */}
      <EnhancedHero />

      {/* Article-Style Hero Section */}
      <ArticleHero />

      {/* Content Sections with Enhanced Typography */}
      <ContentSections />

      {/* Luxury Texture Section */}
      <TextureSection />

      {/* Data Visualization & Charts (EXHIBIT 1) */}
      <DataVisualization />

      {/* Dot Matrix Visualization (EXHIBIT 3) */}
      <DotMatrixVisualization />

      {/* Framework Comparison */}
      <FrameworkComparison />

      {/* Mobile Experience Showcase */}
      <MobileExperience />

      {/* Scroll-Driven Story: How We Work */}
      <ScrollRevealSteps />

      {/* Process Flowchart */}
      <ProcessFlowchart />

      {/* Illustrated Service Cards */}
      <IllustratedServiceCards />

      {/* Tools & Resources */}
      <ToolsResources />

      {/* Value Chain Diagram (EXHIBIT 2) */}
      <ValueChainDiagram />

      {/* Team Profiles */}
      <TeamProfiles />

      {/* Insights Cards */}
      <InsightsCards />

      {/* Related Services */}
      <RelatedServices />

      {/* CTA Band */}
      <CTABand />

      {/* Footer */}
      <FooterV11 />
    </div>
  );
}