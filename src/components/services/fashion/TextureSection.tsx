import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import luxuryTexture from 'figma:asset/bdd4b2a6154b073876bf90a578dce7ff8c5530a6.png';

export function TextureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div 
            className="relative aspect-[4/3] overflow-hidden"
            style={{ y }}
          >
            <motion.img
              src={luxuryTexture}
              alt="Luxury Materials"
              className="w-full h-full object-cover"
              style={{ opacity }}
            />
            <div className="absolute inset-0 border border-[#8B9D8A]/30" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1A3A32] uppercase mb-6">
              <div className="w-12 h-px bg-[#1A3A32]" />
              APPROACH
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-[#1F2421] mb-8 leading-tight">
              Luxury Goods
            </h2>

            <div className="space-y-6 text-lg text-[#6B7370] leading-relaxed">
              <p>
                We combine deep fashion industry knowledge with technical AI expertise to deliver solutions that understand fabric, fit, and feeling — not just data points.
              </p>

              <p>
                Every implementation is designed to preserve the creative vision while amplifying business outcomes. We don't automate away the art of fashion — we use AI to give designers, buyers, and stylists superpowers.
              </p>

              <p className="text-[#1F2421] font-medium">
                From virtual try-on that reduces returns by 25% to trend forecasting that cuts overproduction by 30%, we build AI that respects what makes fashion special.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-light text-[#1A3A32] mb-2">$275B</div>
                <div className="text-sm text-[#6B7370]">AI Profit Potential in Fashion</div>
              </div>
              <div>
                <div className="text-4xl font-light text-[#1A3A32] mb-2">40.8%</div>
                <div className="text-sm text-[#6B7370]">Fashion AI Market CAGR</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
