'use client';

import { motion } from 'motion/react';
import {
  Brain,
  MessageSquare,
  Workflow,
  BarChart3,
  ShoppingCart,
  FileText,
  Users,
  Zap,
} from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Brain,
    title: 'AI Agents',
    description: 'Autonomous systems that reason, decide, and execute complex workflows.',
  },
  {
    icon: MessageSquare,
    title: 'NLP Systems',
    description: 'Natural language processing for intelligent conversation and analysis.',
  },
  {
    icon: Workflow,
    title: 'Automation',
    description: 'End-to-end process automation with intelligent decision trees.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Real-time data intelligence with predictive modeling capabilities.',
  },
  {
    icon: ShoppingCart,
    title: 'Commerce AI',
    description: 'Smart recommendation engines and personalized shopping experiences.',
  },
  {
    icon: FileText,
    title: 'Document AI',
    description: 'Intelligent document processing, extraction, and generation.',
  },
  {
    icon: Users,
    title: 'CRM Intelligence',
    description: 'AI-powered customer relationship management and engagement.',
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'Seamless connectivity with existing tools and platforms.',
  },
];

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-serif font-bold text-[#0A1628]"
          >
            What We Build
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Production-ready AI systems that integrate seamlessly with your business
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 cursor-pointer"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl flex items-center justify-center group-hover:from-emerald-100 group-hover:to-emerald-200 transition-all duration-300">
                  <Icon
                    size={28}
                    className="text-emerald-600 group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#0A1628] mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
