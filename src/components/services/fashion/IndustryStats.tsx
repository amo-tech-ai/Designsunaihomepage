import { motion } from 'motion/react';
import { TrendingUp, Users, Zap, BarChart3 } from 'lucide-react';

const stats = [
  {
    value: '$275B',
    label: 'AI Profit Potential',
    source: 'McKinsey projection for fashion industry',
    icon: TrendingUp,
  },
  {
    value: '44%',
    label: 'AI Adoption Rate',
    source: 'Up from 20% in H1 2025 alone',
    icon: Users,
  },
  {
    value: '40.8%',
    label: 'Fashion AI Market CAGR',
    source: 'Fastest-growing AI vertical market',
    icon: Zap,
  },
  {
    value: '-25%',
    label: 'Return Reduction (Try-On)',
    source: 'Virtual try-on impact on return rates',
    icon: BarChart3,
  },
];

export function IndustryStats() {
  return (
    <section className="relative bg-[#FAF8F5] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#6B7370] uppercase mb-4">
            <div className="w-8 h-px bg-[#1A3A32]" />
            EXHIBIT 1
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F2421]">
            Industry Analysis — Key Stats
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="h-full bg-white border border-[#8B9D8A]/30 p-8 hover:border-[#1A3A32] transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className="w-8 h-8 text-[#1A3A32]" strokeWidth={1.5} />
                  </div>

                  {/* Value */}
                  <div className="text-5xl font-serif text-[#1A3A32] mb-3">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-semibold text-[#1F2421] mb-4 tracking-wide">
                    {stat.label}
                  </div>

                  {/* Source */}
                  <div className="text-xs text-[#6B7370] leading-relaxed font-light">
                    {stat.source}
                  </div>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1A3A32] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 bg-white border border-[#8B9D8A]/30"
        >
          <h3 className="text-lg font-semibold text-[#1F2421] mb-6">
            Additional Market Intelligence
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-[#6B7370]">
            <li className="flex items-start gap-2">
              <span className="text-[#1A3A32] mt-1">•</span>
              <span>74% of fashion brands now use AI-based forecasting (BoF/McKinsey State of Fashion 2026)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1A3A32] mt-1">•</span>
              <span>Fashion returns cost the industry $800B+ annually — AI sizing cuts returns 17-25%</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1A3A32] mt-1">•</span>
              <span>AI can reduce design cycles from 12 weeks to under 1 week</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1A3A32] mt-1">•</span>
              <span>Overproduction accounts for 10% of global CO2 — AI trend prediction reduces it 20-30%</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1A3A32] mt-1">•</span>
              <span>The global AI in fashion market is projected to reach $4.4B by 2027</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
