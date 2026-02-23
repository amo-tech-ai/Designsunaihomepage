import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const frameworks = [
  {
    approach: 'Traditional Approach',
    methods: [
      { label: 'Manual trend research', status: 'limited' },
      { label: 'Seasonal forecasting', status: 'limited' },
      { label: 'Size charts only', status: 'limited' },
      { label: 'Basic recommendations', status: 'limited' },
      { label: 'Manual design process', status: 'limited' },
      { label: 'High return rates', status: 'negative' },
    ],
    color: 'neutral',
  },
  {
    approach: 'Our AI-First Framework',
    methods: [
      { label: 'Real-time social media scanning', status: 'positive' },
      { label: '18-month predictive forecasting', status: 'positive' },
      { label: 'AI body measurement & fit prediction', status: 'positive' },
      { label: 'Personalized AI styling agents', status: 'positive' },
      { label: 'AI-assisted design generation', status: 'positive' },
      { label: '25% lower returns', status: 'positive' },
    ],
    color: 'emerald',
  },
];

export function FrameworkComparison() {
  return (
    <section className="relative bg-white py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1A3A32] uppercase mb-6">
            <div className="w-12 h-px bg-[#1A3A32]" />
            FRAMEWORK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-6">
            Our E-Commerce Framework
          </h2>
          <p className="text-xl text-[#6B7370] font-light max-w-3xl">
            How our AI-first approach differs from traditional fashion retail methods
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {frameworks.map((framework, fIndex) => (
            <motion.div
              key={fIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: fIndex * 0.2 }}
              className={`border-2 ${
                framework.color === 'emerald' 
                  ? 'border-emerald-600 bg-emerald-50/30' 
                  : 'border-neutral-300 bg-neutral-50'
              }`}
            >
              {/* Header */}
              <div className={`p-8 ${
                framework.color === 'emerald'
                  ? 'bg-gradient-to-br from-emerald-600 to-teal-600'
                  : 'bg-neutral-200'
              }`}>
                <h3 className={`text-2xl font-medium ${
                  framework.color === 'emerald' ? 'text-white' : 'text-neutral-700'
                }`}>
                  {framework.approach}
                </h3>
              </div>

              {/* Methods List */}
              <div className="p-8 space-y-6">
                {framework.methods.map((method, mIndex) => (
                  <motion.div
                    key={mIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fIndex * 0.2 + mIndex * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      method.status === 'positive'
                        ? 'bg-emerald-100'
                        : method.status === 'negative'
                        ? 'bg-rose-100'
                        : 'bg-neutral-200'
                    }`}>
                      {method.status === 'positive' ? (
                        <Check className="w-4 h-4 text-emerald-700" strokeWidth={3} />
                      ) : method.status === 'negative' ? (
                        <X className="w-4 h-4 text-rose-700" strokeWidth={3} />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-neutral-500" />
                      )}
                    </div>

                    {/* Label */}
                    <span className="text-base text-[#1F2421] leading-relaxed">
                      {method.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-[#FAF8F5] border border-[#8B9D8A]/20"
        >
          <p className="text-base text-[#6B7370] leading-relaxed">
            <span className="font-semibold text-[#1F2421]">Key Insight:</span> Traditional fashion retail relies on historical data and intuition. Our AI-first framework processes real-time signals from millions of data points — social media, purchase patterns, street style, runway shows — to predict what customers will want before they know it themselves.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
