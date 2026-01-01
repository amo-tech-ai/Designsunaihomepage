'use client';

import { motion } from 'motion/react';
import { OrbitalSystem } from './components/OrbitalSystem';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-full border border-slate-200">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                Production-Ready AI
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight"
              >
                Build Intelligent{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  AI Products
                </span>
                ,{'\n'}
                Agents{'\n'}
                & Automation
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="text-xl text-slate-500 leading-relaxed max-w-xl"
              >
                Sun AI designs and launches production-ready AI platforms, automation systems, and multi-agent solutions that transform how teams work and scale.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/wizard/step1">
                <button className="group px-8 py-4 bg-[#0A1628] text-white rounded-full hover:bg-[#0A1628]/90 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 font-semibold">
                  <span>Start Your Project</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </Link>
              <Link to="/booking">
                <button className="group px-8 py-4 bg-white text-[#0A1628] border-2 border-slate-200 rounded-full hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 font-semibold">
                  <MessageCircle size={18} />
                  <span>Talk to an Expert</span>
                </button>
              </Link>
            </motion.div>

            {/* Trusted By Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="pt-12"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                Trusted by Innovative Teams
              </p>
              <div className="flex items-center gap-8 flex-wrap">
                {['Company A', 'Company B', 'Company C', 'Company D'].map((company, index) => (
                  <div
                    key={company}
                    className="h-8 px-6 bg-slate-100 rounded flex items-center justify-center text-slate-400 font-semibold text-sm opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Orbital System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <OrbitalSystem />
          </motion.div>
        </div>
      </div>
    </section>
  );
}