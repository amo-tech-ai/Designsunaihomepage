import { Link } from 'react-router';
import { 
  ArrowRight, 
  Check, 
  Brain, 
  Code, 
  Zap, 
  MessageSquare,
  Eye,
  ChevronRight,
  Star,
  TrendingUp,
  Target,
  Sparkles
} from 'lucide-react';
import { FooterV11 } from '../../FooterV11';

export function DesignSystemPreview() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-[20px] border-b border-[#E0E0DE]/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-[72px] flex items-center justify-between">
          <Link to="/sunai" className="flex items-center">
            <span className="text-[24px] font-semibold text-[#1A3A32]" style={{ fontFamily: 'Georgia, serif' }}>
              SunAI
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link
              to="/sunai/design-system"
              className="text-[14px] font-medium text-[#1F2421] hover:text-[#1A3A32] transition-colors"
            >
              Design System
            </Link>
            <Link
              to="/sunai"
              className="px-6 py-3 bg-[#1A3A32] text-[#FAF8F5] text-[14px] font-medium rounded-lg hover:bg-[#0D1F1A] transition-all duration-200"
            >
              Homepage
            </Link>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="pt-[120px] pb-[64px] px-6 md:px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full mb-6">
            <Eye className="w-4 h-4 text-[#1A3A32]" />
            <span className="text-[13px] font-medium text-[#1A3A32]">Visual Reference Guide</span>
          </div>
          
          <h1 
            className="text-[64px] leading-[1.1] text-[#1F2421] mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Design System in Action
          </h1>
          
          <p className="text-[20px] text-[#6B7370] max-w-[700px]">
            See every component, color, and pattern working together in real layouts.
            Copy, adapt, and build with confidence.
          </p>
        </div>
      </section>

      {/* Hero Pattern */}
      <section className="py-[96px] px-6 md:px-16 bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[14px] font-semibold text-[#1A3A32] uppercase tracking-wider">Pattern: Hero</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A3A32]/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#1A3A32]" />
                <span className="text-[13px] font-medium text-[#1A3A32]">AI-Powered Solutions</span>
              </div>
              
              <h2 
                className="text-[56px] leading-[1.1] text-[#1F2421] mb-6"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Build AI Systems That Actually Work
              </h2>
              
              <p className="text-[18px] text-[#6B7370] mb-8 leading-relaxed">
                From strategy to deployment in weeks, not months. Production-grade AI systems 
                built with executive clarity and engineering precision.
              </p>

              <div className="flex items-center gap-4">
                <button className="px-6 py-4 bg-[#1A3A32] text-[#FAF8F5] text-[14px] font-semibold rounded-lg hover:bg-[#0D1F1A] transition-all duration-200 hover:shadow-lg">
                  Start Building
                </button>
                <button className="px-6 py-4 border border-[#1A3A32] text-[#1A3A32] text-[14px] font-semibold rounded-lg hover:bg-[#1A3A32]/5 transition-all duration-200">
                  See Examples
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E0E0DE] p-8 shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#E8F5E9] to-[#A8C5B8] rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1A3A32] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-[#FAF8F5]" />
                  </div>
                  <p className="text-[14px] text-[#1A3A32] font-medium">Hero Visual Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#E0E0DE]">
            <p className="text-[13px] text-[#6B7370] mb-2 font-semibold">Usage Notes:</p>
            <p className="text-[14px] text-[#6B7370]">
              Two-column grid, left content-heavy. Pill badge → H1 (56-64px) → Body → CTA buttons. 
              Right side for imagery or dashboard preview. Desktop-first, stacks on mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards Pattern */}
      <section className="py-[96px] px-6 md:px-16 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[14px] font-semibold text-[#1A3A32] uppercase tracking-wider">Pattern: Feature Grid</span>
          </div>

          <div className="text-center mb-12">
            <h2 
              className="text-[48px] text-[#1F2421] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Core Capabilities
            </h2>
            <p className="text-[18px] text-[#6B7370] max-w-[600px] mx-auto">
              Everything you need to build, deploy, and scale AI systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Brain,
                title: 'AI Strategy',
                description: 'Transform business challenges into AI-powered solutions with clear ROI'
              },
              {
                icon: Code,
                title: 'Custom Development',
                description: 'Production-ready systems built with modern frameworks and best practices'
              },
              {
                icon: Zap,
                title: 'Rapid Deployment',
                description: 'Ship in weeks with our battle-tested development framework'
              },
              {
                icon: MessageSquare,
                title: 'AI Agents',
                description: 'Intelligent automation that learns and improves over time'
              },
              {
                icon: TrendingUp,
                title: 'Analytics & Insights',
                description: 'Real-time dashboards and actionable intelligence'
              },
              {
                icon: Target,
                title: 'Optimization',
                description: 'Continuous improvement driven by data and user feedback'
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="p-8 bg-white rounded-2xl border border-[#E0E0DE] hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1A3A32] group-hover:scale-110 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-[#1A3A32] group-hover:text-[#FAF8F5]" />
                </div>
                <h3 className="text-[20px] font-semibold text-[#1F2421] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  {feature.title}
                </h3>
                <p className="text-[16px] text-[#6B7370] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#E0E0DE]">
            <p className="text-[13px] text-[#6B7370] mb-2 font-semibold">Usage Notes:</p>
            <p className="text-[14px] text-[#6B7370]">
              3-column grid (responsive to 1-2 cols). Icon container with subtle hover effects. 
              Icon bg: #E8F5E9, hover: #1A3A32. Card padding: 32px (p-8). Rounded corners: 16px (rounded-2xl).
            </p>
          </div>
        </div>
      </section>

      {/* Stats / Metrics Pattern */}
      <section className="py-[96px] px-6 md:px-16 bg-[#E8F5E9]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[14px] font-semibold text-[#1A3A32] uppercase tracking-wider">Pattern: Metrics Grid</span>
          </div>

          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {[
              { number: '200+', label: 'AI Systems Deployed' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '3 Weeks', label: 'Avg. Time to Production' },
              { number: '$2.4M', label: 'Value Created (Avg)' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="text-[48px] font-semibold text-[#1F2421] mb-2"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {stat.number}
                </div>
                <p className="text-[16px] text-[#6B7370]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#E0E0DE]">
            <p className="text-[13px] text-[#6B7370] mb-2 font-semibold">Usage Notes:</p>
            <p className="text-[14px] text-[#6B7370]">
              Clean 4-column grid on light green background (#E8F5E9). Large serif numbers (48px), 
              supporting text below. Works well with alternating bg colors (white, cream, light green).
            </p>
          </div>
        </div>
      </section>

      {/* Content + Image Pattern */}
      <section className="py-[96px] px-6 md:px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[14px] font-semibold text-[#1A3A32] uppercase tracking-wider">Pattern: Content + Image</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
            <div className="bg-[#FAF8F5] rounded-2xl p-12 border border-[#E0E0DE]">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1A3A32] to-[#0D1F1A] rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-12 h-12 text-[#FAF8F5] mx-auto mb-4" />
                  <p className="text-[14px] text-[#FAF8F5]/70 font-medium">Process Visual</p>
                </div>
              </div>
            </div>

            <div>
              <h3 
                className="text-[40px] text-[#1F2421] mb-6 leading-tight"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                A Process Built for Speed and Precision
              </h3>
              
              <p className="text-[18px] text-[#6B7370] mb-8 leading-relaxed">
                Our 7-phase development model ensures every AI system ships on time, 
                on budget, and ready for production. No surprises, just results.
              </p>

              <div className="space-y-4">
                {[
                  'Discovery & Strategy Definition',
                  'Technical Architecture & Planning',
                  'Rapid Prototyping & Validation',
                  'Production Development',
                  'Testing & Quality Assurance',
                  'Deployment & Training',
                  'Monitoring & Optimization'
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#E8F5E9] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#1A3A32]" />
                    </div>
                    <span className="text-[16px] text-[#1F2421]">{step}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 inline-flex items-center gap-2 px-6 py-4 bg-[#1A3A32] text-[#FAF8F5] text-[14px] font-semibold rounded-lg hover:bg-[#0D1F1A] transition-all duration-200">
                View Full Process
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-6 bg-[#FAF8F5] rounded-xl border border-[#E0E0DE]">
            <p className="text-[13px] text-[#6B7370] mb-2 font-semibold">Usage Notes:</p>
            <p className="text-[14px] text-[#6B7370]">
              Alternating image-left / content-right layout. Image can be screenshot, diagram, or illustration. 
              Content includes H2/H3 + body + list with checkmarks. Image order reverses on alternating sections.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Pattern */}
      <section className="py-[96px] px-6 md:px-16 bg-[#1A3A32]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[14px] font-semibold text-[#A8C5B8] uppercase tracking-wider">Pattern: Testimonial</span>
          </div>

          <div className="max-w-[900px] mx-auto text-center mb-12">
            <div className="mb-8">
              <Star className="w-6 h-6 text-[#FF6B4A] inline-block mx-1" />
              <Star className="w-6 h-6 text-[#FF6B4A] inline-block mx-1" />
              <Star className="w-6 h-6 text-[#FF6B4A] inline-block mx-1" />
              <Star className="w-6 h-6 text-[#FF6B4A] inline-block mx-1" />
              <Star className="w-6 h-6 text-[#FF6B4A] inline-block mx-1" />
            </div>

            <blockquote 
              className="text-[32px] text-[#FAF8F5] mb-8 leading-relaxed"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              "SunAI transformed our business. What would have taken 6 months took 3 weeks. 
              The system they built handles 10,000+ daily users flawlessly."
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#A8C5B8] rounded-full"></div>
              <div className="text-left">
                <p className="text-[16px] font-semibold text-[#FAF8F5]">Sarah Chen</p>
                <p className="text-[14px] text-[#FAF8F5]/70">VP of Product, TechCorp</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#0D1F1A] rounded-xl border border-[#FAF8F5]/10">
            <p className="text-[13px] text-[#FAF8F5]/70 mb-2 font-semibold">Usage Notes:</p>
            <p className="text-[14px] text-[#FAF8F5]/70">
              Dark teal background (#1A3A32). Large serif quote (28-32px). Stars or logo above. 
              Avatar + attribution below. Can use carousel for multiple testimonials.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Pattern */}
      <section className="py-[96px] px-6 md:px-16 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[14px] font-semibold text-[#1A3A32] uppercase tracking-wider">Pattern: Process Timeline</span>
          </div>

          <div className="text-center mb-16">
            <h2 
              className="text-[48px] text-[#1F2421] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              How It Works
            </h2>
            <p className="text-[18px] text-[#6B7370] max-w-[600px] mx-auto">
              A proven path from idea to production
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {[
              {
                number: '01',
                title: 'Discovery Call',
                description: 'Share your vision. We ask the right questions to understand your goals, constraints, and success metrics.'
              },
              {
                number: '02',
                title: 'Strategic Proposal',
                description: 'Get a detailed roadmap with technical architecture, timeline, and pricing within 48 hours.'
              },
              {
                number: '03',
                title: 'Rapid Development',
                description: 'Weekly demos, daily updates. See your system take shape in real-time with full transparency.'
              },
              {
                number: '04',
                title: 'Launch & Support',
                description: 'Deploy with confidence. Ongoing monitoring, optimization, and support to ensure long-term success.'
              }
            ].map((step, idx) => (
              <div 
                key={idx}
                className="flex gap-8 items-start p-8 bg-white rounded-2xl border border-[#E0E0DE] hover:shadow-lg transition-shadow duration-200"
              >
                <div 
                  className="text-[40px] font-bold text-[#1A3A32]/20 flex-shrink-0"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {step.number}
                </div>
                <div className="flex-1">
                  <h4 className="text-[24px] font-semibold text-[#1F2421] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {step.title}
                  </h4>
                  <p className="text-[16px] text-[#6B7370] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-[#E0E0DE] flex-shrink-0" />
              </div>
            ))}
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#E0E0DE]">
            <p className="text-[13px] text-[#6B7370] mb-2 font-semibold">Usage Notes:</p>
            <p className="text-[14px] text-[#6B7370]">
              Vertical timeline with numbered steps. Large number (40px, 20% opacity), title (24px serif), 
              description. Cards stack vertically with consistent padding (p-8).
            </p>
          </div>
        </div>
      </section>

      {/* CTA Pattern */}
      <section className="py-[96px] px-6 md:px-16 bg-[#1A3A32]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[14px] font-semibold text-[#A8C5B8] uppercase tracking-wider">Pattern: Call to Action</span>
          </div>

          <div className="text-center mb-12">
            <h2 
              className="text-[48px] text-[#FAF8F5] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Ready to Build Your AI System?
            </h2>
            <p className="text-[18px] text-[rgba(250,248,245,0.8)] max-w-[700px] mx-auto mb-8">
              From idea → proposal → production system in weeks, not months.
              No long-term contracts, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-[#FAF8F5] text-[#1A3A32] text-[14px] font-semibold rounded-lg hover:bg-white transition-all duration-200 hover:shadow-lg">
                Start Your Project
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-[#FAF8F5] text-[14px] font-medium rounded-lg border border-[rgba(250,248,245,0.3)] hover:bg-[rgba(250,248,245,0.1)] transition-all duration-200">
                Book a Call
              </button>
            </div>
          </div>

          <div className="p-6 bg-[#0D1F1A] rounded-xl border border-[#FAF8F5]/10">
            <p className="text-[13px] text-[#FAF8F5]/70 mb-2 font-semibold">Usage Notes:</p>
            <p className="text-[14px] text-[#FAF8F5]/70">
              Dark teal background (#1A3A32). Centered layout. H2 + supporting text + dual CTA buttons 
              (primary inverted + ghost). Use above footer or between major sections.
            </p>
          </div>
        </div>
      </section>

      {/* Color Palette Reference */}
      <section className="py-[96px] px-6 md:px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[14px] font-semibold text-[#1A3A32] uppercase tracking-wider">Quick Reference: Colors</span>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              { name: 'Deep Teal', hex: '#1A3A32' },
              { name: 'Dark Teal', hex: '#0D1F1A' },
              { name: 'Sage Green', hex: '#A8C5B8' },
              { name: 'Mint Light', hex: '#E8F5E9' },
              { name: 'Cream', hex: '#FAF8F5' },
              { name: 'Warm White', hex: '#F5F3EF' },
              { name: 'Soft Gray', hex: '#E0E0DE' },
              { name: 'Primary Text', hex: '#1F2421' },
              { name: 'Secondary', hex: '#6B7370' },
              { name: 'Muted', hex: '#9B9F9D' },
              { name: 'Orange', hex: '#FF6B4A' },
              { name: 'White', hex: '#FFFFFF' }
            ].map((color) => (
              <div key={color.hex} className="text-center">
                <div 
                  className="w-full h-20 rounded-lg mb-2 border border-[#E0E0DE]"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="text-[12px] font-semibold text-[#1F2421] mb-1">{color.name}</p>
                <p className="text-[11px] font-mono text-[#6B7370]">{color.hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-[96px] px-6 md:px-16 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 
            className="text-[48px] text-[#1F2421] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Build with Confidence
          </h2>
          <p className="text-[18px] text-[#6B7370] mb-8 max-w-[600px] mx-auto">
            This design system powers our entire marketing suite. Use it freely across your projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sunai/design-system"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1A3A32] text-[#FAF8F5] text-[14px] font-semibold rounded-lg hover:bg-[#0D1F1A] transition-all duration-200 hover:shadow-lg"
            >
              View Full System
            </Link>
            <Link
              to="/sunai"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#1A3A32] text-[#1A3A32] text-[14px] font-semibold rounded-lg hover:bg-[#1A3A32]/5 transition-all duration-200"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      <FooterV11 />
    </div>
  );
}
