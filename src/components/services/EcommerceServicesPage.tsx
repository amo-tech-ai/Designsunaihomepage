import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ShoppingCart, TrendingUp, Users, Zap, BarChart3, Package, CreditCard, Globe } from 'lucide-react';
import { EcommerceHero } from './ecommerce/EcommerceHero';
import { ApproachFramework } from './ecommerce/ApproachFramework';
import { FrameworkDiagram } from './ecommerce/FrameworkDiagram';
import { ToolsGrid } from './ecommerce/ToolsGrid';
import { DataVisualizations } from './ecommerce/DataVisualizations';
import { InsightsGallery } from './ecommerce/InsightsGallery';
import { TeamShowcase } from './ecommerce/TeamShowcase';
import { RelatedServices } from './ecommerce/RelatedServices';
import { ScrollProgress } from './ecommerce/ScrollProgress';

export function EcommerceServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-[#1A3A32] to-[#0F1F1A]">
      {/* Scroll Progress Indicator */}
      {!prefersReducedMotion && <ScrollProgress scrollYProgress={scrollYProgress} />}
      
      {/* Hero Section with Parallax */}
      <EcommerceHero />
      
      {/* Approach Framework */}
      <ApproachFramework />
      
      {/* Framework Diagram */}
      <FrameworkDiagram />
      
      {/* Tools & Resources Grid */}
      <ToolsGrid />
      
      {/* Data Visualizations */}
      <DataVisualizations />
      
      {/* Insights Gallery */}
      <InsightsGallery />
      
      {/* Team Showcase */}
      <TeamShowcase />
      
      {/* Related Services */}
      <RelatedServices />
    </div>
  );
}
