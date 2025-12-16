import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Lightbulb, Code, Cable, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Design Sprint',
    description: 'We align on requirements, architecture, and user flows in an intensive 1-week sprint.',
    icon: Lightbulb,
    duration: 'Week 1',
  },
  {
    id: 2,
    title: 'Rapid Build',
    description: 'Our AI-assisted engineers build the core application components and database structure.',
    icon: Code,
    duration: 'Weeks 2-4',
  },
  {
    id: 3,
    title: 'Integrations & Testing',
    description: 'We connect 3rd party APIs, set up authentication, and run automated QA suites.',
    icon: Cable,
    duration: 'Weeks 5-7',
  },
  {
    id: 4,
    title: 'Launch & Scale',
    description: 'Production deployment, analytics setup, and handoff of full source code.',
    icon: Rocket,
    duration: 'Week 8',
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6">
              8 Weeks. Not 8 Months.
            </h2>
            <p className="text-lg text-slate-600">
              Our accelerated delivery model combines human expertise with AI efficiency to ship production-ready software in record time.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#FF6B2C] to-[#00334F] origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Side */}
                  <div className={`flex-1 text-center ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block md:hidden mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#00334F]/5 flex items-center justify-center text-[#00334F]">
                        <span className="font-bold">{step.id}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#00334F] mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white rounded-full border border-slate-100 shadow-sm" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-[#FF6B2C] to-[#FF9E7D] rounded-full flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 rounded-full border border-[#FF6B2C]/20 animate-ping" />
                  </div>

                  {/* Duration Side */}
                  <div className={`flex-1 text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00334F]/5 text-[#00334F] font-semibold text-sm">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
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
