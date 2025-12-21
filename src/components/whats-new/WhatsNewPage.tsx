import React from 'react';
import { ArrowRight, Sparkles, Brain, Search, Heart, Mail, Ghost, FileCheck, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Feature {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  category: string;
  badge: string;
  link: string;
  isProtected: boolean;
}

const features: Feature[] = [
  {
    id: '1',
    icon: Sparkles,
    title: 'Lead Enrichment',
    description: 'AI-powered company research that automatically enriches leads with company data, tech stack analysis, and fit scoring in seconds. Transform email addresses into actionable intelligence.',
    category: 'Core AI',
    badge: 'Live',
    link: '/app/leads',
    isProtected: true
  },
  {
    id: '2',
    icon: Brain,
    title: 'Post-Call Action Architect',
    description: 'Analyze sales call transcripts and automatically extract action items, budget, timeline, sentiment, and next steps. Save 15+ minutes per call with intelligent conversation analysis.',
    category: 'Core AI',
    badge: 'Live',
    link: '/app/intelligence/ingest',
    isProtected: true
  },
  {
    id: '3',
    icon: Search,
    title: 'Natural Language Search',
    description: 'Search your CRM using plain English. Type "leads in fintech with budget over 50k" and get instant, filtered results with match explanations. Accessible anywhere with Cmd+K.',
    category: 'Core AI',
    badge: 'Live',
    link: '/app/intelligence/search',
    isProtected: true
  },
  {
    id: '4',
    icon: Heart,
    title: 'Deal Health Monitor',
    description: 'Real-time deal health scoring (0-100) with AI-powered risk detection. Track engagement metrics, identify at-risk deals, and get automated recommendations to keep deals on track.',
    category: 'Advanced AI',
    badge: 'Live',
    link: '/app/leads',
    isProtected: true
  },
  {
    id: '5',
    icon: Mail,
    title: 'AI Email Drafter',
    description: 'Generate personalized follow-up emails that match your writing style. Choose from scenarios like Post-Discovery, Budget Approval, or Break-up emails. AI learns from your past communications.',
    category: 'Advanced AI',
    badge: 'Live',
    link: '/app/leads',
    isProtected: true
  },
  {
    id: '6',
    icon: Ghost,
    title: 'Ghost Detection Workflow',
    description: 'Automatically identify and re-engage cold leads that have gone silent. Runs daily at 9 AM, scoring leads for re-engagement potential and drafting personalized outreach messages.',
    category: 'Automation',
    badge: 'Live',
    link: '/app/workflow',
    isProtected: true
  },
  {
    id: '7',
    icon: FileCheck,
    title: 'Contract-to-Cash Workflow',
    description: 'Automate payment milestone tracking from contract signature to final payment. AI parses contracts, extracts terms, and creates automated follow-ups for each payment milestone.',
    category: 'Automation',
    badge: 'Live',
    link: '/app/workflow',
    isProtected: true
  },
  {
    id: '8',
    icon: Users,
    title: 'Champion Autopilot',
    description: 'Automatically detect and track champions (internal advocates) from sales call mentions. Monitor engagement, track influence, and get alerts when champion relationships need attention.',
    category: 'Automation',
    badge: 'Live',
    link: '/app/workflow',
    isProtected: true
  },
  {
    id: '9',
    icon: Lightbulb,
    title: 'AI Suggestions Panel',
    description: 'Smart, context-aware recommendations that surface the right actions at the right time. From follow-ups to at-risk deals, get AI-powered insights in real-time as you work.',
    category: 'Intelligence',
    badge: 'Live',
    link: '/app/leads',
    isProtected: true
  }
];

export function WhatsNewPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#FAFAF9]">
      {/* Header */}
      <header className="border-b border-[#1A1A1B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="text-xl font-semibold text-[#D4A574]">
              Luxury AI CRM
            </Link>
            <nav className="flex gap-6">
              <Link to="/" className="text-sm text-[#FAFAF9]/70 hover:text-[#FAFAF9] transition-colors">
                Home
              </Link>
              <Link to="/app/leads" className="text-sm text-[#FAFAF9]/70 hover:text-[#FAFAF9] transition-colors">
                Dashboard
              </Link>
              <Link to="/about" className="text-sm text-[#FAFAF9]/70 hover:text-[#FAFAF9] transition-colors">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#1A1A1B]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/5 via-transparent to-[#D4A574]/5" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#D4A574]/10 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#D4A574]" />
              <span className="text-sm text-[#D4A574]">Latest Release: December 2025</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
              What's New in{' '}
              <span className="bg-gradient-to-r from-[#D4A574] to-[#F5E6D3] bg-clip-text text-transparent">
                Sales Intelligence OS
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-[#FAFAF9]/70 leading-relaxed">
              Discover the latest AI-powered features designed to transform your sales workflow. 
              From intelligent lead enrichment to automated workflows, every feature is built to save time and increase win rates.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-[#1A1A1B] bg-[#0D0D0E]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4A574]">9</div>
              <div className="mt-2 text-sm text-[#FAFAF9]/60">AI Features</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4A574]">15+</div>
              <div className="mt-2 text-sm text-[#FAFAF9]/60">Hours Saved per Week</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4A574]">92%</div>
              <div className="mt-2 text-sm text-[#FAFAF9]/60">AI Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category: Core AI */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">Core AI Features</h2>
              <p className="mt-2 text-[#FAFAF9]/60">
                Foundational intelligence that powers your sales process
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features
                .filter(f => f.category === 'Core AI')
                .map(feature => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
          </div>

          {/* Category: Advanced AI */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">Advanced AI Features</h2>
              <p className="mt-2 text-[#FAFAF9]/60">
                Next-level automation for deal management and communication
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {features
                .filter(f => f.category === 'Advanced AI')
                .map(feature => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
          </div>

          {/* Category: Automation */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">Workflow Automation</h2>
              <p className="mt-2 text-[#FAFAF9]/60">
                Set-it-and-forget-it workflows that run on autopilot
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features
                .filter(f => f.category === 'Automation')
                .map(feature => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
          </div>

          {/* Category: Intelligence */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold">AI Intelligence</h2>
              <p className="mt-2 text-[#FAFAF9]/60">
                Real-time insights and recommendations
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {features
                .filter(f => f.category === 'Intelligence')
                .map(feature => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#1A1A1B] bg-[#0D0D0E]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#D4A574]/20 via-[#D4A574]/10 to-transparent p-12 backdrop-blur-sm">
            <div className="relative z-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Ready to Experience AI-Powered Sales?
              </h2>
              <p className="mb-8 text-lg text-[#FAFAF9]/70">
                Start using all 9 AI features today. No credit card required.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/app/leads"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D4A574] px-8 py-3 font-semibold text-[#0A0A0B] transition-all hover:bg-[#F5E6D3] hover:shadow-lg hover:shadow-[#D4A574]/20"
                >
                  Go to Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#D4A574]/30 bg-[#D4A574]/10 px-8 py-3 font-semibold text-[#D4A574] backdrop-blur-sm transition-all hover:bg-[#D4A574]/20"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A1B]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-[#FAFAF9]/40">
            <p>© 2025 Luxury AI CRM. Built with calm luxury and AI precision.</p>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#D4A574] transition-colors">Home</Link>
              {' · '}
              <Link to="/about" className="hover:text-[#D4A574] transition-colors">About</Link>
              {' · '}
              <Link to="/whats-new" className="hover:text-[#D4A574] transition-colors">What's New</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <Link
      to={feature.link}
      className="group relative overflow-hidden rounded-xl border border-[#1A1A1B] bg-[#0D0D0E]/50 p-6 backdrop-blur-sm transition-all hover:border-[#D4A574]/30 hover:bg-[#0D0D0E] hover:shadow-xl hover:shadow-[#D4A574]/5"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/0 to-[#D4A574]/0 transition-all group-hover:from-[#D4A574]/5 group-hover:to-transparent" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D4A574]/10 backdrop-blur-sm">
            <Icon className="h-6 w-6 text-[#D4A574]" />
          </div>
          <span className="rounded-full bg-[#D4A574]/20 px-3 py-1 text-xs font-semibold text-[#D4A574]">
            {feature.badge}
          </span>
        </div>

        {/* Content */}
        <h3 className="mb-2 text-xl font-semibold group-hover:text-[#D4A574] transition-colors">
          {feature.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-[#FAFAF9]/60">
          {feature.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#FAFAF9]/40">{feature.category}</span>
          <div className="flex items-center gap-1 text-sm font-semibold text-[#D4A574] opacity-0 transition-opacity group-hover:opacity-100">
            View Feature
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Protected badge */}
        {feature.isProtected && (
          <div className="mt-4 flex items-center gap-1 text-xs text-[#FAFAF9]/40">
            <div className="h-1.5 w-1.5 rounded-full bg-[#D4A574]/60" />
            Login required
          </div>
        )}
      </div>
    </Link>
  );
}
