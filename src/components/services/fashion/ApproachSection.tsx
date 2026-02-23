import { motion } from 'motion/react';

export function ApproachSection() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          {/* Decorative Green Line */}
          <div className="w-16 h-1 bg-[#1A3A32] mb-8" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1F2421] mb-8 leading-tight">
            How We Help Fashion Retailers Digitize Without Compromising the Art of Fashion
          </h2>

          <div className="space-y-6 text-lg text-[#6B7370] leading-relaxed font-light">
            <p>
              We've worked with brands at every stage — from emerging DTC labels to multi-brand retailers to luxury houses. Our approach respects the creative process while bringing data intelligence to every business decision. We believe AI should amplify the designer's vision, not replace it. It should make the stylist's intuition scalable, the buyer's instinct quantifiable, and the supply chain's waste eliminable.
            </p>

            <p>
              We combine deep fashion industry knowledge with technical AI expertise to deliver solutions that understand fabric, fit, and feeling — not just data points.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
