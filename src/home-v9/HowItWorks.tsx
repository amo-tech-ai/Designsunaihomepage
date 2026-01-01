'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BrowserFrame } from './components/BrowserFrame';
import { Target, Lightbulb, Layout } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: 'Scope',
    description: 'Define goals, requirements, and success metrics through our intelligent briefing system.',
    icon: Target,
  },
  {
    id: 2,
    title: 'Blueprint',
    description: 'AI-generated architecture and technical specifications delivered in 48 hours.',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Dashboard',
    description: 'Real-time project visibility with automated progress tracking and deployment pipelines.',
    icon: Layout,
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const step = Math.min(Math.floor(latest * 3), 2);
      setActiveStep(step);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section id="how-it-works" ref={containerRef} className="relative bg-white">
      <div className="h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center px-8 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Panel - Sticky Content */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                      Our Methodology
                    </span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl font-serif font-bold text-[#0A1628]"
                  >
                    The smarter way to build
                  </motion.h2>
                </div>

                {/* Steps */}
                <div className="space-y-6">
                  {STEPS.map((step, index) => {
                    const isActive = activeStep === index;
                    const Icon = step.icon;

                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                        className={`p-6 rounded-2xl border-2 transition-all duration-700 cursor-pointer ${
                          isActive
                            ? 'border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-100'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-700 ${
                              isActive
                                ? 'bg-emerald-500 text-white'
                                : 'bg-gray-100 text-gray-400'
                            }`}
                          >
                            <Icon size={24} strokeWidth={2} />
                          </div>

                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-3">
                              <h3
                                className={`text-xl font-bold transition-colors duration-700 ${
                                  isActive ? 'text-[#0A1628]' : 'text-gray-400'
                                }`}
                              >
                                {step.title}
                              </h3>
                              {isActive && (
                                <span className="px-2 py-1 bg-emerald-500 text-white text-xs font-bold rounded">
                                  ACTIVE
                                </span>
                              )}
                            </div>
                            <p
                              className={`text-sm transition-colors duration-700 ${
                                isActive ? 'text-gray-700' : 'text-gray-400'
                              }`}
                            >
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Panel - Browser Frame with changing content */}
              <div className="relative">
                <BrowserFrame activeStep={activeStep} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
