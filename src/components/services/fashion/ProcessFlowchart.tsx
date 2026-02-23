import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Lightbulb, Cpu, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery & Assessment',
    description: 'We analyze your current operations, identify AI opportunities, and map them to business objectives.',
    deliverables: ['Opportunity Assessment', 'Technical Feasibility Study', 'ROI Projections'],
    duration: '2-3 weeks',
  },
  {
    number: '02',
    icon: CheckCircle2,
    title: 'Strategy & Roadmap',
    description: 'Develop a prioritized AI implementation roadmap aligned with your fashion business goals.',
    deliverables: ['AI Strategy Document', 'Implementation Roadmap', 'Resource Plan'],
    duration: '1-2 weeks',
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Build & Integration',
    description: 'Design, develop, and integrate AI solutions into your existing fashion tech stack.',
    deliverables: ['Custom AI Models', 'System Integration', 'API Development'],
    duration: '8-12 weeks',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Optimize',
    description: 'Deploy solutions to production, monitor performance, and continuously optimize for results.',
    deliverables: ['Production Deployment', 'Performance Monitoring', 'User Training'],
    duration: '2-4 weeks',
  },
  {
    number: '05',
    icon: BarChart,
    title: 'Scale & Evolve',
    description: 'Expand successful pilots, iterate based on data, and build new AI capabilities.',
    deliverables: ['Scaling Plan', 'Continuous Improvement', 'Innovation Pipeline'],
    duration: 'Ongoing',
  },
];

export function ProcessFlowchart() {
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
            METHODOLOGY
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-6">
            How We Help Fashion<br />Retailers Digitize
          </h2>
          <p className="text-xl text-[#6B7370] font-light max-w-3xl">
            A systematic approach to AI implementation that preserves the art of fashion while revolutionizing the business of fashion.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-[60px] top-20 bottom-20 w-px bg-gradient-to-b from-[#8B9D8A]/30 via-[#1A3A32] to-[#8B9D8A]/30" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  {/* Mobile/Tablet Layout */}
                  <div className="lg:hidden">
                    <div className="bg-white border border-[#8B9D8A]/30 p-8">
                      {/* Number Badge */}
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1A3A32] text-white text-xl font-light mb-6">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="mb-6">
                        <Icon className="w-10 h-10 text-[#1A3A32]" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-medium text-[#1F2421] mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-[#6B7370] leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="mb-6">
                        <div className="text-xs font-bold tracking-wider text-[#1A3A32] uppercase mb-3">
                          Key Deliverables
                        </div>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#6B7370]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#1A3A32] mt-2 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Duration */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F5] rounded-full">
                        <div className="w-2 h-2 rounded-full bg-[#1A3A32]" />
                        <span className="text-sm font-medium text-[#1F2421]">{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden lg:grid lg:grid-cols-[120px,1fr] gap-12 items-start">
                    {/* Number + Icon */}
                    <div className="flex flex-col items-center gap-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                        className="relative z-10 flex items-center justify-center w-[120px] h-[120px] rounded-full bg-[#1A3A32] text-white"
                      >
                        <div className="absolute inset-0 rounded-full bg-[#1A3A32] animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                        <div className="relative">
                          <div className="text-4xl font-light mb-2">{step.number}</div>
                        </div>
                      </motion.div>
                      
                      <Icon className="w-12 h-12 text-[#1A3A32]" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                      className="bg-white border border-[#8B9D8A]/30 p-10"
                    >
                      {/* Title */}
                      <h3 className="text-3xl font-light text-[#1F2421] mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-lg text-[#6B7370] leading-relaxed mb-8">
                        {step.description}
                      </p>

                      {/* Deliverables & Duration Grid */}
                      <div className="grid grid-cols-[1fr,auto] gap-8 items-start">
                        {/* Deliverables */}
                        <div>
                          <div className="text-xs font-bold tracking-wider text-[#1A3A32] uppercase mb-4">
                            Key Deliverables
                          </div>
                          <ul className="space-y-3">
                            {step.deliverables.map((deliverable, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.4 + i * 0.1 }}
                                className="flex items-start gap-3 text-base text-[#6B7370]"
                              >
                                <CheckCircle2 className="w-5 h-5 text-[#1A3A32] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                {deliverable}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Duration */}
                        <div className="flex flex-col items-end">
                          <div className="text-xs font-bold tracking-wider text-[#6B7370] uppercase mb-3">
                            Timeline
                          </div>
                          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FAF8F5] rounded-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#1A3A32]" />
                            <span className="text-base font-medium text-[#1F2421] whitespace-nowrap">
                              {step.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Arrow Connector (Desktop) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.6 }}
                      className="hidden lg:block absolute left-[59px] bottom-[-64px] w-0.5 h-16 bg-[#1A3A32]"
                    >
                      <ArrowRight className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-5 h-5 text-[#1A3A32] rotate-90" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1A3A32] text-white rounded-full font-medium hover:bg-[#2d5a4d] transition-all duration-300">
            Start Your AI Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
