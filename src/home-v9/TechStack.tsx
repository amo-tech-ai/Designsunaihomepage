'use client';

import { motion } from 'motion/react';
import { Code, Sparkles, Database, MessageSquare } from 'lucide-react';

const TECH_COLUMNS = [
  {
    title: 'Frontend',
    items: ['Cursor AI', 'Figma', 'React', 'Tailwind', 'TypeScript'],
  },
  {
    title: 'AI Models',
    items: ['Gemini 2.0', 'Claude 3.5', 'GPT-4o', 'Whisper', 'Vision AI'],
  },
  {
    title: 'Backend',
    items: ['Supabase', 'Vercel', 'Postgres', 'Redis', 'Webhooks'],
  },
  {
    title: 'Channels',
    items: ['WhatsApp API', 'Shopify', 'Stripe', 'SendGrid', 'Twilio'],
  },
];

const STATS = [
  { label: 'Technologies', value: '20+' },
  { label: 'Uptime SLA', value: '99.9%' },
  { label: 'API Integrations', value: '50+' },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-32 px-8 bg-[#050508] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Technology
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-serif font-bold text-white"
          >
            Built on Enterprise-Grade Infrastructure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We leverage the most advanced tools and platforms to deliver production-ready systems
          </motion.p>
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {TECH_COLUMNS.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: columnIndex * 0.1 }}
              className="space-y-4"
            >
              {/* Column Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  {columnIndex === 0 && <Code size={16} className="text-emerald-400" />}
                  {columnIndex === 1 && <Sparkles size={16} className="text-emerald-400" />}
                  {columnIndex === 2 && <Database size={16} className="text-emerald-400" />}
                  {columnIndex === 3 && <MessageSquare size={16} className="text-emerald-400" />}
                </div>
                <h3 className="font-bold text-white">{column.title}</h3>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: columnIndex * 0.1 + itemIndex * 0.05 }}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12 border-t border-white/10"
        >
          {STATS.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
