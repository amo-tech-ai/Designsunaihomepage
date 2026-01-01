'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Target, Zap, Link2, Rocket } from 'lucide-react';

const TIMELINE_PHASES = [
  {
    weeks: 'Weeks 1-2',
    title: 'Strategy & Design',
    description: 'Scope, architecture, and UX planning with AI-accelerated workflows.',
    icon: Target,
  },
  {
    weeks: 'Weeks 3-5',
    title: 'Rapid Build',
    description: 'Core development and AI logic implementation with daily deployments.',
    icon: Zap,
  },
  {
    weeks: 'Weeks 6-7',
    title: 'Integrations',
    description: 'Testing and connecting APIs, data sources, and third-party services.',
    icon: Link2,
  },
  {
    weeks: 'Week 8',
    title: 'Launch & Scale',
    description: 'Final deployment, monitoring setup, and knowledge transfer.',
    icon: Rocket,
  },
];

export function VelocitySystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

  return (
    <section id="velocity" ref={containerRef} className="py-32 px-8 bg-gradient-to-b from-[#003D5C] to-[#00516D] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              The Sun AI Velocity System
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif font-bold text-white"
          >
            Build AI in{' '}
            <span className="text-orange-400">8 Weeks</span>
            . Not 8 Months.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            A proven acceleration system that takes your AI project from idea to production—fast.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-white/10 hidden lg:block">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-orange-400 to-orange-500"
            />
          </div>

          {/* Timeline Nodes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {TIMELINE_PHASES.map((phase, index) => {
              const Icon = phase.icon;

              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                  className="relative"
                >
                  {/* Icon Node */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                        <Icon size={28} className="text-white" strokeWidth={2} />
                      </div>
                      
                      {/* Pulse Ring */}
                      <motion.div
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="absolute inset-0 rounded-full border-2 border-orange-400"
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
                      {phase.weeks}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
