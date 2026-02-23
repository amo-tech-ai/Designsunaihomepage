import { motion } from 'motion/react';
import { TrendingUp, Target, Zap, DollarSign } from 'lucide-react';

const insights = [
  {
    label: 'AI Adoption Jump',
    value: '20% → 44%',
    period: 'H1 2025',
    icon: TrendingUp,
    color: 'from-emerald-600 to-teal-500',
  },
  {
    label: 'Return Rate Reduction',
    value: '-25%',
    period: 'With AI Try-On',
    icon: Target,
    color: 'from-rose-600 to-pink-500',
  },
  {
    label: 'Market CAGR',
    value: '40.8%',
    period: '2024-2030',
    icon: Zap,
    color: 'from-violet-600 to-purple-500',
  },
  {
    label: 'Operating Profit Potential',
    value: '$275B',
    period: 'McKinsey 2026',
    icon: DollarSign,
    color: 'from-amber-600 to-orange-500',
  },
];

const adoptionData = [
  { quarter: 'Q1 2024', rate: 20, label: 'Early Adopters' },
  { quarter: 'Q2 2024', rate: 28, label: 'Growing Interest' },
  { quarter: 'Q3 2024', rate: 35, label: 'Acceleration' },
  { quarter: 'Q4 2024', rate: 38, label: 'Mainstream' },
  { quarter: 'Q1 2025', rate: 44, label: 'Mass Adoption' },
];

const useCases = [
  { use: 'Virtual Try-On', adoption: 62, impact: 'High' },
  { use: 'Trend Forecasting', adoption: 74, impact: 'High' },
  { use: 'Size Prediction', adoption: 58, impact: 'High' },
  { use: 'Personal Styling', adoption: 45, impact: 'Medium' },
  { use: 'Design Generation', adoption: 38, impact: 'Medium' },
  { use: 'Supply Chain AI', adoption: 52, impact: 'High' },
];

export function DataVisualization() {
  return (
    <section className="relative bg-[#FAF8F5] py-32">
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
            EXHIBIT 1
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-6">
            The Fashion AI Landscape
          </h2>
          <p className="text-xl text-[#6B7370] font-light max-w-3xl">
            Data-driven insights into AI transformation across the fashion industry
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative bg-white border border-[#8B9D8A]/20 hover:border-transparent transition-colors duration-500 p-8 h-full">
                  <Icon className="w-8 h-8 text-[#1A3A32] mb-6 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  
                  <div className="text-5xl font-light text-[#1F2421] mb-3 group-hover:text-white transition-colors duration-500">
                    {insight.value}
                  </div>
                  
                  <div className="text-sm font-medium text-[#1F2421] mb-2 group-hover:text-white/90 transition-colors duration-500">
                    {insight.label}
                  </div>
                  
                  <div className="text-xs text-[#6B7370] font-light group-hover:text-white/70 transition-colors duration-500">
                    {insight.period}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Adoption Timeline Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#8B9D8A]/20 p-12 mb-20"
        >
          <h3 className="text-2xl font-light text-[#1F2421] mb-3">
            Fashion AI Adoption Timeline
          </h3>
          <p className="text-sm text-[#6B7370] mb-12">
            Percentage of fashion companies actively using AI solutions
          </p>

          <div className="space-y-6">
            {adoptionData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6"
              >
                <div className="w-24 text-sm font-medium text-[#6B7370]">
                  {data.quarter}
                </div>
                <div className="flex-1 relative">
                  <div className="h-12 bg-[#FAF8F5] relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${data.rate}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1A3A32] to-emerald-700"
                    />
                    <div className="absolute inset-0 flex items-center px-4">
                      <span className="text-sm font-medium text-white relative z-10">
                        {data.rate}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-32 text-sm text-[#6B7370]">
                  {data.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Case Adoption Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#8B9D8A]/20 p-12"
        >
          <h3 className="text-2xl font-light text-[#1F2421] mb-3">
            AI Use Case Adoption & Impact
          </h3>
          <p className="text-sm text-[#6B7370] mb-12">
            Current adoption rates across key fashion AI applications
          </p>

          {/* Table Header */}
          <div className="grid grid-cols-[2fr,1fr,1fr] gap-6 pb-4 border-b border-[#8B9D8A]/30 mb-6">
            <div className="text-xs font-bold tracking-wider text-[#6B7370] uppercase">
              Use Case
            </div>
            <div className="text-xs font-bold tracking-wider text-[#6B7370] uppercase text-center">
              Adoption Rate
            </div>
            <div className="text-xs font-bold tracking-wider text-[#6B7370] uppercase text-center">
              Business Impact
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="grid grid-cols-[2fr,1fr,1fr] gap-6 items-center"
              >
                <div className="text-base font-medium text-[#1F2421]">
                  {useCase.use}
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-[120px] h-2 bg-[#FAF8F5] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${useCase.adoption}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + 0.3, duration: 0.8 }}
                      className="h-full bg-[#1A3A32]"
                    />
                  </div>
                  <span className="ml-3 text-sm font-medium text-[#1F2421]">
                    {useCase.adoption}%
                  </span>
                </div>
                <div className="flex justify-center">
                  <span className={`inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${
                    useCase.impact === 'High' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {useCase.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Source Note */}
          <div className="mt-12 pt-6 border-t border-[#8B9D8A]/20">
            <p className="text-xs text-[#6B7370] font-light">
              Source: McKinsey State of Fashion 2026, BoF Industry Analysis, SunAI Research (February 2026)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
