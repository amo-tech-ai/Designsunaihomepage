import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Users, ShoppingBag, BarChart3, Target } from 'lucide-react';

export function FrameworkDiagram() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          {...(prefersReducedMotion ? {} : {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 }
          })}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            E-Commerce{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Framework
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive system connecting customer experience, digital operations, and measurable outcomes
          </p>
        </motion.div>

        {/* Diagram */}
        <div ref={ref} className="relative">
          {/* Top Level - Customer Experience */}
          <motion.div
            {...(prefersReducedMotion ? {} : {
              initial: { opacity: 0, y: -40 },
              animate: inView ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8, delay: 0.2 }
            })}
            className="flex justify-center mb-12"
          >
            <div className="backdrop-blur-xl bg-emerald-500/10 border-2 border-emerald-500/40 rounded-3xl px-12 py-6">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="text-xs text-emerald-300 uppercase tracking-wider mb-1">Foundation</div>
                  <div className="text-2xl font-serif text-white">Customer Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connecting Line from top to middle */}
          <motion.div
            {...(prefersReducedMotion ? {} : {
              initial: { scaleY: 0 },
              animate: inView ? { scaleY: 1 } : {},
              transition: { duration: 0.6, delay: 0.6 }
            })}
            className="w-0.5 h-16 bg-gradient-to-b from-emerald-500/60 to-teal-500/60 mx-auto origin-top"
          />

          {/* Middle Level - Two Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative">
            {/* Horizontal connector between pillars */}
            <div className="hidden md:block absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-teal-500/50 to-cyan-500/50 transform -translate-x-1/2 -translate-y-1/2 z-0" />

            {/* Digital Commerce */}
            <motion.div
              {...(prefersReducedMotion ? {} : {
                initial: { opacity: 0, x: -40 },
                animate: inView ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.8 }
              })}
              className="flex justify-center"
            >
              <div className="backdrop-blur-xl bg-teal-500/10 border-2 border-teal-500/40 rounded-3xl px-10 py-6 hover:bg-teal-500/15 transition-colors">
                <div className="flex items-center gap-4">
                  <ShoppingBag className="w-7 h-7 text-teal-400" />
                  <div>
                    <div className="text-xs text-teal-300 uppercase tracking-wider mb-1">Pillar 1</div>
                    <div className="text-xl font-serif text-white">Digital Commerce</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Analytics & AI */}
            <motion.div
              {...(prefersReducedMotion ? {} : {
                initial: { opacity: 0, x: 40 },
                animate: inView ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.8 }
              })}
              className="flex justify-center"
            >
              <div className="backdrop-blur-xl bg-cyan-500/10 border-2 border-cyan-500/40 rounded-3xl px-10 py-6 hover:bg-cyan-500/15 transition-colors">
                <div className="flex items-center gap-4">
                  <BarChart3 className="w-7 h-7 text-cyan-400" />
                  <div>
                    <div className="text-xs text-cyan-300 uppercase tracking-wider mb-1">Pillar 2</div>
                    <div className="text-xl font-serif text-white">Analytics & AI</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connecting Lines from middle to bottom */}
          <div className="flex justify-center gap-32 mb-12">
            <motion.div
              {...(prefersReducedMotion ? {} : {
                initial: { scaleY: 0 },
                animate: inView ? { scaleY: 1 } : {},
                transition: { duration: 0.6, delay: 1.2 }
              })}
              className="w-0.5 h-16 bg-gradient-to-b from-teal-500/60 to-emerald-500/60 origin-top"
            />
            <motion.div
              {...(prefersReducedMotion ? {} : {
                initial: { scaleY: 0 },
                animate: inView ? { scaleY: 1 } : {},
                transition: { duration: 0.6, delay: 1.2 }
              })}
              className="w-0.5 h-16 bg-gradient-to-b from-cyan-500/60 to-emerald-500/60 origin-top"
            />
          </div>

          {/* Bottom Level - Outcomes */}
          <motion.div
            {...(prefersReducedMotion ? {} : {
              initial: { opacity: 0, y: 40 },
              animate: inView ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8, delay: 1.4 }
            })}
            className="flex justify-center"
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-2 border-emerald-400/50 rounded-3xl px-16 py-8 shadow-2xl shadow-emerald-500/10">
              <div className="flex items-center gap-4">
                <Target className="w-10 h-10 text-emerald-300" />
                <div>
                  <div className="text-xs text-emerald-200 uppercase tracking-wider mb-1">Result</div>
                  <div className="text-3xl font-serif text-white">Measurable Outcomes</div>
                  <div className="text-sm text-emerald-200 mt-2">Revenue Growth • Customer Loyalty • Market Leadership</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Background Glow Effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
