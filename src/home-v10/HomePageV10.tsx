import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Sparkles, Zap, Brain, BarChart3, Users, Building2, Palette, Home as HomeIcon } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function HomePageV10() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/10 rounded-full text-sm">
                <Sparkles className="w-4 h-4 text-[#FF6A3D]" />
                AI-Powered Business Systems
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl mb-6 text-[#0F172A]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The easiest way to
              <br />
              <span className="italic">build, deploy</span>, quickly
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#0F172A]/70 mb-8 max-w-2xl mx-auto"
            >
              Build AI-powered business systems that help companies grow, automate, and operate smarter. From concept to launch in weeks, not months.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="px-8 py-4 bg-[#FF6A3D] text-white rounded-lg hover:bg-[#FF5A2D] transition-colors flex items-center gap-2">
                Start Building
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-[#0F172A] rounded-lg border border-black/10 hover:border-black/20 transition-colors">
                View Process
              </button>
            </motion.div>
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: 'Projects Delivered', value: '150+' },
              { label: 'Average Build Time', value: '4-6 weeks' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'AI Features', value: '50+' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl border border-black/5">
                <div className="text-3xl mb-2 text-[#0F172A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#0F172A]/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wide text-[#FF6A3D] mb-4 block">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0F172A]" style={{ fontFamily: 'Playfair Display, serif' }}>
              How it works
            </h2>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              From initial conversation to live system in 3 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tell us what you need',
                description: 'Answer a few questions about your business, goals, and what you want to build.',
                icon: Users
              },
              {
                step: '02',
                title: 'AI builds your system',
                description: 'Our intelligent wizard designs a custom solution tailored to your industry and objectives.',
                icon: Sparkles
              },
              {
                step: '03',
                title: 'Launch and grow',
                description: 'Get your live dashboard with AI agents, automations, and insights working from day one.',
                icon: Zap
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 bg-[#FAF7F2] rounded-2xl"
              >
                <div className="text-6xl text-[#FF6A3D]/20 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 border border-black/5">
                  <item.icon className="w-6 h-6 text-[#FF6A3D]" />
                </div>
                <h3 className="text-xl mb-3 text-[#0F172A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.title}
                </h3>
                <p className="text-[#0F172A]/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wide text-[#FF6A3D] mb-4 block">
              Core Systems
            </span>
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0F172A]" style={{ fontFamily: 'Playfair Display, serif' }}>
              What we build
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'AI Dashboard & Analytics',
                description: 'Real-time business insights that show what\'s happening and what to do next.',
                features: ['Live metrics', 'AI recommendations', 'Custom reports']
              },
              {
                title: 'CRM & Sales System',
                description: 'Manage leads, customers, and deals in one place with AI-assisted follow-ups.',
                features: ['Smart pipeline', 'Auto follow-ups', 'Deal insights']
              },
              {
                title: 'AI Chatbots & Assistants',
                description: 'Smart assistants for sales, support, and internal teams that respond instantly.',
                features: ['24/7 availability', 'Natural language', 'Multi-channel']
              },
              {
                title: 'Operations & Automation',
                description: 'Automate repetitive work so your team can focus on higher-value tasks.',
                features: ['Workflow automation', 'Background tasks', 'Smart triggers']
              },
              {
                title: 'AI Content Creation',
                description: 'Generate on-brand visuals, campaigns, and messaging in minutes.',
                features: ['Brand-aligned', 'Multi-format', 'Instant generation']
              },
              {
                title: 'Decision Intelligence',
                description: 'AI that analyzes data, flags risks, and recommends next actions.',
                features: ['Risk detection', 'Smart insights', 'Action plans']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-8 bg-white rounded-2xl border border-black/5 hover:border-[#FF6A3D]/30 transition-all group"
              >
                <h3 className="text-xl mb-3 text-[#0F172A] group-hover:text-[#FF6A3D] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.title}
                </h3>
                <p className="text-[#0F172A]/70 mb-6">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#0F172A]/60">
                      <Check className="w-4 h-4 text-[#FF6A3D]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wide text-[#FF6A3D] mb-4 block">
              Who We Serve
            </span>
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0F172A]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Built for your industry
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Startups & Founders', icon: Zap },
              { name: 'Marketing Agencies', icon: BarChart3 },
              { name: 'Fashion & Lifestyle', icon: Palette },
              { name: 'Real Estate', icon: Building2 },
              { name: 'E-commerce & Retail', icon: HomeIcon },
              { name: 'Professional Services', icon: Users },
              { name: 'Media & Content', icon: Brain },
              { name: 'Travel & Hospitality', icon: HomeIcon }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 bg-[#FAF7F2] rounded-2xl text-center hover:bg-white hover:border hover:border-[#FF6A3D]/30 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center border border-black/5 group-hover:bg-[#FF6A3D] transition-all">
                  <industry.icon className="w-6 h-6 text-[#FF6A3D] group-hover:text-white transition-colors" />
                </div>
                <div className="text-sm text-[#0F172A]/80 group-hover:text-[#0F172A] transition-colors">
                  {industry.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wide text-[#FF6A3D] mb-4 block">
              AI Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0F172A]" style={{ fontFamily: 'Playfair Display, serif' }}>
              What makes it perfect
              <br />
              <span className="italic">agency search?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Zero Manual Data Entry',
                description: 'AI extracts and organizes information automatically from calls, emails, and documents.'
              },
              {
                title: 'Thinking States',
                description: 'See AI reasoning in real-time instead of generic loading spinners.'
              },
              {
                title: 'Natural Language Commands',
                description: 'Query your CRM data using plain English, no complex filters needed.'
              },
              {
                title: 'Continuous Learning',
                description: 'Systems get smarter over time by learning from your business patterns.'
              },
              {
                title: 'Calm Luxury Design',
                description: 'Executive-grade interfaces with glassmorphism and subtle animations.'
              },
              {
                title: 'Industry-Specific',
                description: 'Pre-configured templates and AI agents tailored to your market.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#FF6A3D] text-white rounded-lg flex items-center justify-center text-sm">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-[#0F172A]">
                    {feature.title}
                  </h3>
                  <p className="text-[#0F172A]/70">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wide text-[#FF6A3D] mb-4 block">
              Questions
            </span>
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0F172A]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is Sun AI?',
                a: 'Sun AI Agency builds custom AI-powered business systems that help companies grow, automate operations, and make smarter decisions. We combine strategy, design, and development into one streamlined process.'
              },
              {
                q: 'How does the build process work?',
                a: 'We start with an intelligent wizard that understands your industry and goals. Based on your answers, our system designs a custom solution with the right AI agents, automations, and dashboards. Most projects launch in 4-6 weeks.'
              },
              {
                q: 'What industries do you work with?',
                a: 'We specialize in startups, agencies, fashion brands, real estate, e-commerce, professional services, media companies, and travel businesses. Each industry gets tailored AI features and workflows.'
              },
              {
                q: 'How is this different from off-the-shelf AI tools?',
                a: 'Generic AI tools require you to adapt your business to their features. We build systems that adapt to your business, with industry-specific intelligence and seamless integrations with your existing tools.'
              },
              {
                q: 'Do I need technical knowledge?',
                a: 'No. Everything is designed in plain business language. You tell us what you need, and our AI handles the technical complexity. Your team gets a simple, beautiful interface.'
              },
              {
                q: 'How do AI agents work?',
                a: 'AI agents are specialized workers that handle specific tasks like analyzing sales calls, enriching lead data, monitoring deal health, or drafting follow-up emails. They work 24/7 and learn from your business patterns.'
              }
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-[#FAF7F2] rounded-2xl p-6 cursor-pointer hover:bg-white transition-colors"
              >
                <summary className="flex justify-between items-center list-none">
                  <span className="text-lg text-[#0F172A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {faq.q}
                  </span>
                  <span className="text-[#FF6A3D] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-[#0F172A]/70 leading-relaxed">
                  {faq.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get custom pricing
              <br />
              <span className="italic">in 5 minutes</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Answer a few questions about your business and get a tailored proposal with pricing, timeline, and features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#FF6A3D] text-white rounded-lg hover:bg-[#FF5A2D] transition-colors flex items-center justify-center gap-2">
                Start Building Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                Book a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
