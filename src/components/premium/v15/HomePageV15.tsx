import { motion } from 'motion/react';
import { ArrowRight, Target, TrendingUp, Users, Rocket, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

const phases = [
  {
    number: 1,
    weeks: 'Weeks 1–2',
    title: 'Profile & Foundation',
    icon: Target,
    bullets: [
      'Startup profile + Lean Canvas',
      'Data cleanup + positioning baseline'
    ]
  },
  {
    number: 2,
    weeks: 'Weeks 3–5',
    title: 'Intelligence & Materials',
    icon: TrendingUp,
    bullets: [
      'Readiness score + key gaps',
      'Pitch deck + core documents'
    ]
  },
  {
    number: 3,
    weeks: 'Weeks 6–7',
    title: 'Fundraising Workflow',
    icon: Users,
    bullets: [
      'Investor CRM + pipeline',
      'Enrichment + lead scoring'
    ]
  },
  {
    number: 4,
    weeks: 'Week 8',
    title: 'Execution & Momentum',
    icon: Rocket,
    bullets: [
      'Follow-ups + task plan',
      'Updates + coach guidance'
    ]
  }
];

export function HomePageV15() {
  return (
    <main className="min-h-screen bg-[#fafaf8] font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#fafaf8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-white border border-[#e5e5e5] text-xs uppercase tracking-widest font-bold text-[#0d5f4e]">
                StartupAI Platform
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
              Turn your startup data into
              <br />
              <span className="text-[#0d5f4e]">investor-ready materials</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#666666] mb-12 leading-relaxed max-w-2xl mx-auto">
              A guided 8-week system that transforms your profile, intelligence, and fundraising workflow into execution momentum.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/wizard"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0d5f4e] text-white font-semibold hover:bg-[#0a4a3d] transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#e5e5e5] text-[#1a1a1a] font-semibold hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-all"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4-PHASE TIMELINE SECTION */}
      <section className="py-20 md:py-32 bg-[#f5f5f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#666666]">
                The StartupAI System
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a1a1a] mb-6 leading-[1.15] tracking-tight">
              Go from profile to investor-ready—fast.
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              One guided workflow that turns your startup data into decisions, materials, and follow-through.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            
            {/* Horizontal Timeline Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-0 right-0 mx-auto" style={{ maxWidth: '90%', left: '5%' }}>
              <div className="relative h-[2px] bg-[#e5e5e5]">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-[#0d5f4e]"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Phase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                
                return (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Timeline Dot (Desktop) */}
                    <div className="hidden md:flex absolute -top-[32px] left-1/2 -translate-x-1/2 z-20">
                      <motion.div 
                        className="w-4 h-4 rounded-full bg-[#0d5f4e] border-4 border-[#f5f5f3]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.15 }}
                      />
                    </div>

                    {/* Card */}
                    <div className="bg-white border border-[#e5e5e5] p-8 h-full transition-all duration-300 group-hover:border-[#0d5f4e] group-hover:shadow-sm group-hover:-translate-y-1">
                      
                      {/* Icon Badge */}
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-white border border-[#e5e5e5] rounded-full">
                          <Icon className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Week Label */}
                      <div className="mb-3">
                        <span className="text-xs uppercase tracking-widest font-bold text-[#0d5f4e]">
                          {phase.weeks}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4 leading-tight">
                        {phase.title}
                      </h3>

                      {/* Bullets */}
                      <ul className="space-y-3">
                        {phase.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#666666]">
                            <CheckCircle className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link
              to="/wizard"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0d5f4e] text-white font-semibold hover:bg-[#0a4a3d] transition-all"
            >
              Start Your 8-Week Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 md:py-32 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4 leading-tight tracking-tight">
              Built for serious founders
            </h2>
            <p className="text-lg text-[#666666]">
              Premium tools that match the intensity of your fundraising journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Investor Intelligence',
                description: 'Enrichment, scoring, and contact discovery for targeted outreach.'
              },
              {
                icon: Target,
                title: 'Readiness Assessment',
                description: 'Know exactly where you stand and what gaps to close before pitching.'
              },
              {
                icon: Users,
                title: 'Pipeline Management',
                description: 'Track conversations, follow-ups, and momentum in one clean CRM.'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-[#e5e5e5] p-8 hover:border-[#0d5f4e] transition-all"
                >
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0d5f4e]/5 rounded-full">
                      <Icon className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#666666] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight tracking-tight">
            Ready to accelerate your fundraise?
          </h2>
          <p className="text-xl text-[#d1d1d1] mb-10 leading-relaxed">
            Join founders who've raised with clarity, speed, and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/wizard"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0d5f4e] text-white font-semibold hover:bg-[#0a4a3d] transition-all"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold hover:border-[#0d5f4e] hover:bg-[#0d5f4e] transition-all"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}