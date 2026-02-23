import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import img from 'figma:asset/2700990878192c26a605233f9254557c2f6ba981.png';

export function FashionHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src={img}
          alt="Fashion industry AI"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3A32]/80 via-[#1A3A32]/60 to-white" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-32 text-center"
      >
        {/* Breadcrumb */}
        <div className="text-sm text-white/70 mb-6 font-light tracking-wide">
          Industries › Fashion
        </div>

        {/* Industry Tag */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-8">
          <span className="text-xs font-semibold tracking-widest text-white uppercase">
            Fashion Industry
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
          Fashion Industry
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
          Amidst the rising opportunity of AI in e-commerce, production, and supply chains, fashion industry leaders are rethinking customer experience, sustainability, and creative processes — bringing AI into decisions that shape every collection, every season, every customer interaction.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1A3A32] rounded-full font-semibold hover:bg-white/90 transition-colors"
        >
          Explore Fashion AI Solutions →
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
