import { motion } from 'motion/react';
import { Palette, Package, Factory, Truck, ShoppingCart, RefreshCw, ArrowRight } from 'lucide-react';

const valueChain = [
  {
    stage: 'DESIGN',
    icon: Palette,
    solutions: ['AI Design Generation', 'Mood Boards', 'Colorway Variants'],
    impact: '10x Faster',
    color: 'from-purple-600 to-violet-500',
  },
  {
    stage: 'SOURCE',
    icon: Package,
    solutions: ['Trend Forecast', 'Supplier Matching', 'Sustainability'],
    impact: '-30% Waste',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    stage: 'PRODUCE',
    icon: Factory,
    solutions: ['Demand Planning', 'Quality Control', 'Waste Reduction'],
    impact: '-20% Costs',
    color: 'from-emerald-600 to-teal-500',
  },
  {
    stage: 'DISTRIBUTE',
    icon: Truck,
    solutions: ['Inventory Optimization', 'Route Optimization', 'Demand Forecast'],
    impact: '-15% Logistics',
    color: 'from-amber-600 to-orange-500',
  },
  {
    stage: 'SELL',
    icon: ShoppingCart,
    solutions: ['Virtual Try-On', 'Personal Stylist', 'Complete the Look'],
    impact: '+26% AOV',
    color: 'from-rose-600 to-pink-500',
  },
  {
    stage: 'POST-SALE',
    icon: RefreshCw,
    solutions: ['Size Predict', 'Returns Management', 'Resale Pricing'],
    impact: '-25% Returns',
    color: 'from-indigo-600 to-purple-500',
  },
];

export function ValueChainDiagram() {
  return (
    <section className="relative bg-[#FAF8F5] py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1A3A32] uppercase mb-6">
            <div className="w-12 h-px bg-[#1A3A32]" />
            EXHIBIT 2
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-6">
            Fashion Value Chain
          </h2>
          <p className="text-xl text-[#6B7370] font-light max-w-3xl">
            Where AI creates value across the entire fashion business lifecycle
          </p>
        </motion.div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-px bg-[#8B9D8A]/30 z-0" />

          <div className="grid grid-cols-6 gap-6">
            {valueChain.map((stage, index) => {
              const Icon = stage.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative z-10"
                >
                  {/* Stage Card */}
                  <div className="bg-white border border-[#8B9D8A]/30 hover:border-[#1A3A32] transition-all duration-500 overflow-hidden group">
                    {/* Icon Header */}
                    <div className={`relative h-32 bg-gradient-to-br ${stage.color} flex items-center justify-center`}>
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                        className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </motion.div>

                      {/* Arrow Connector */}
                      {index < valueChain.length - 1 && (
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                          <ArrowRight className="w-8 h-8 text-[#8B9D8A]" strokeWidth={2} />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Stage Name */}
                      <div className="text-sm font-bold text-[#1A3A32] mb-4 text-center tracking-wider">
                        {stage.stage}
                      </div>

                      {/* Solutions */}
                      <div className="space-y-2.5 mb-6">
                        {stage.solutions.map((solution, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.4 + i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1 h-1 rounded-full bg-[#1A3A32] mt-1.5 flex-shrink-0" />
                            <div className="text-xs text-[#6B7370] leading-relaxed">
                              {solution}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Impact Badge */}
                      <div className={`bg-gradient-to-br ${stage.color} p-4 text-center`}>
                        <div className="text-2xl font-light text-white mb-1">
                          {stage.impact}
                        </div>
                        <div className="text-[10px] text-white/80 uppercase tracking-wider font-medium">
                          Impact
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Flow */}
        <div className="lg:hidden space-y-8">
          {valueChain.map((stage, index) => {
            const Icon = stage.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white border border-[#8B9D8A]/30">
                  <div className="grid grid-cols-[auto,1fr] gap-6 p-6">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="text-base font-bold text-[#1A3A32] mb-3">
                        {stage.stage}
                      </div>
                      <div className="space-y-2 mb-4">
                        {stage.solutions.map((solution, i) => (
                          <div key={i} className="text-sm text-[#6B7370]">
                            • {solution}
                          </div>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F5] rounded-full">
                        <span className="text-sm font-medium text-[#1A3A32]">
                          {stage.impact}
                        </span>
                        <span className="text-xs text-[#6B7370]">Impact</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector */}
                {index < valueChain.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-[#8B9D8A] rotate-90" strokeWidth={2} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Source Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-[#6B7370] font-light">
            Impact metrics based on SunAI client deployments and industry benchmarks (2024-2026)
          </p>
        </motion.div>
      </div>
    </section>
  );
}