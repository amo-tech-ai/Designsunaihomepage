import { motion } from 'motion/react';

const impactData = [
  { label: 'Virtual Try-On', value: 85, metric: '-25% Returns' },
  { label: 'Trend Forecasting', value: 80, metric: '-30% Overproduction' },
  { label: 'Personalization', value: 72, metric: '+26% AOV' },
  { label: 'Design Generation', value: 65, metric: '10x Faster Cycles' },
  { label: 'Supply Chain', value: 60, metric: '-20% Costs' },
];

export function ROIChart() {
  return (
    <section className="relative bg-[#FAF8F5] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#8B9D8A]/30 p-12"
        >
          {/* Exhibit Label */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#6B7370] uppercase mb-2">
            <div className="w-8 h-px bg-[#1A3A32]" />
            EXHIBIT 2
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-serif text-[#1F2421] mb-12">
            Fashion AI Impact by Application Area
          </h2>

          {/* Chart */}
          <div className="space-y-6">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                {/* Label and Metric */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[#1F2421]">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-[#1A3A32]">
                    {item.metric}
                  </span>
                </div>

                {/* Bar */}
                <div className="relative h-10 bg-[#FAF8F5] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1A3A32] to-[#1A3A32]/70"
                  />

                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`
                  }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Source Note */}
          <div className="mt-12 text-xs text-[#6B7370] font-light">
            Source: McKinsey State of Fashion 2026, BoF Industry Analysis, SunAI Research
          </div>
        </motion.div>
      </div>
    </section>
  );
}
