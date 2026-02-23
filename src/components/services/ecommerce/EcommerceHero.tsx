import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ShoppingCart, ArrowDown } from 'lucide-react';
import img from 'figma:asset/28a0b8b27dea51fd1b082bd974341714b4d74b22.png';

export function EcommerceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effect - background moves slower than content
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const fadeUpVariants = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: 'easeOut' }
      };

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: prefersReducedMotion ? '0%' : backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A32]/90 via-[#0F1F1A]/80 to-black/90 z-10" />
        <ImageWithFallback
          src={img}
          alt="E-Commerce Excellence"
          className="w-full h-full object-cover"
          fallbackText="E-Commerce"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 max-w-6xl mx-auto px-8 text-center"
        style={{ opacity: prefersReducedMotion ? 1 : contentOpacity }}
      >
        {/* Icon Badge */}
        <motion.div
          {...(prefersReducedMotion ? {} : {
            initial: { scale: 0 },
            animate: { scale: 1 },
            transition: { duration: 0.5, ease: 'backOut' }
          })}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-xl border border-emerald-500/30 mb-8"
        >
          <ShoppingCart className="w-10 h-10 text-emerald-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUpVariants}
          className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
        >
          E-Commerce
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            Excellence
          </span>
        </motion.h1>

        <motion.p
          {...(prefersReducedMotion ? {} : {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2 }
          })}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Transform digital commerce with AI-driven insights, seamless customer experiences, and data-powered growth strategies.
        </motion.p>

        {/* Glassmorphic Intro Card */}
        <motion.div
          {...(prefersReducedMotion ? {} : {
            initial: { opacity: 0, y: 60, scale: 0.9 },
            animate: { opacity: 1, y: 0, scale: 1 },
            transition: { duration: 0.9, delay: 0.4, ease: 'easeOut' }
          })}
          className="inline-block max-w-2xl mx-auto"
        >
          <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">3.5x</div>
                <div className="text-sm text-gray-300">Average ROI increase within 6 months</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">92%</div>
                <div className="text-sm text-gray-300">Customer satisfaction across platforms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300 mb-2">45%</div>
                <div className="text-sm text-gray-300">Reduction in cart abandonment</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          {...(prefersReducedMotion ? {} : {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1, duration: 0.5 }
          })}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : {
              y: [0, 12, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <ArrowDown className="w-8 h-8 text-emerald-400/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
