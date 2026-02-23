import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Eye, Brain, Zap, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Eye,
    number: '01',
    title: 'We See the Opportunity',
    description: 'Most fashion brands are sitting on mountains of untapped data — customer preferences, purchase patterns, seasonal trends, inventory movements. We identify where AI can create immediate value.',
    insights: [
      'Average fashion brand wastes 30% of inventory on overproduction',
      'Returns cost $800B+ annually across the industry',
      '75% of customers abandon carts due to size uncertainty',
    ],
  },
  {
    icon: Brain,
    number: '02',
    title: 'We Build the Solution',
    description: 'Our team of fashion AI specialists designs and develops custom solutions that integrate seamlessly with your existing systems — from Shopify to SAP to proprietary platforms.',
    capabilities: [
      'Computer vision for fit analysis and virtual try-on',
      'Predictive models for trend forecasting',
      'Recommendation engines that understand style',
      'Natural language agents for customer support',
    ],
  },
  {
    icon: Zap,
    number: '03',
    title: 'We Deploy at Scale',
    description: 'AI that works in a lab is worthless. We build for production from day one — with monitoring, optimization, and continuous improvement built in.',
    metrics: [
      '99.9% uptime across all deployments',
      'Sub-200ms response times for customer-facing AI',
      'Handles 100K+ requests per day per client',
      'Real-time model updates without downtime',
    ],
  },
  {
    icon: Rocket,
    number: '04',
    title: 'We Measure the Impact',
    description: 'Every AI solution we build comes with clear KPIs and measurement frameworks. You see the ROI in weeks, not quarters.',
    outcomes: [
      '-25% return rates with AI sizing and try-on',
      '-30% overproduction with demand forecasting',
      '+26% average order value with outfit recommendations',
      '+40% conversion with personalized styling',
    ],
  },
];

export function ScrollRevealSteps() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-neutral-900 py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white/60 uppercase mb-6">
            <div className="w-12 h-px bg-white/40" />
            HOW WE WORK
            <div className="w-12 h-px bg-white/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            From Insight to Impact
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            A proven methodology for implementing AI in fashion businesses
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-48">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <StepCard
                key={index}
                step={step}
                icon={Icon}
                index={index}
                isEven={isEven}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepCard({ 
  step, 
  icon: Icon, 
  index, 
  isEven 
}: { 
  step: typeof steps[0]; 
  icon: any; 
  index: number;
  isEven: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    isEven ? [-100, 0, 0, 100] : [100, 0, 0, -100]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity, scale }}
      className="relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-12 items-start">
        {/* Number + Icon */}
        <div className="flex flex-col items-center gap-6">
          {/* Number Circle */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center"
            >
              <span className="text-5xl font-light text-white">{step.number}</span>
            </motion.div>

            {/* Pulse Animation */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-2 border-white/30"
            />
          </div>

          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 lg:p-12">
          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-white/70 leading-relaxed mb-8">
            {step.description}
          </p>

          {/* Insights/Capabilities/Metrics/Outcomes */}
          {'insights' in step && (
            <div className="space-y-4">
              <div className="text-xs font-bold tracking-wider text-white/50 uppercase">
                Key Insights
              </div>
              <ul className="space-y-3">
                {step.insights.map((insight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 flex-shrink-0" />
                    {insight}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {'capabilities' in step && (
            <div className="space-y-4">
              <div className="text-xs font-bold tracking-wider text-white/50 uppercase">
                Core Capabilities
              </div>
              <ul className="space-y-3">
                {step.capabilities.map((capability, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                    {capability}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {'metrics' in step && (
            <div className="space-y-4">
              <div className="text-xs font-bold tracking-wider text-white/50 uppercase">
                Production Metrics
              </div>
              <ul className="space-y-3">
                {step.metrics.map((metric, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-shrink-0" />
                    {metric}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {'outcomes' in step && (
            <div className="space-y-4">
              <div className="text-xs font-bold tracking-wider text-white/50 uppercase">
                Typical Outcomes
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {step.outcomes.map((outcome, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded"
                  >
                    <div className="text-2xl font-light text-white mb-1">
                      {outcome.split(' ')[0]}
                    </div>
                    <div className="text-sm text-white/70">
                      {outcome.split(' ').slice(1).join(' ')}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
