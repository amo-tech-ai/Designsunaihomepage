import { motion } from 'motion/react';

export function IntroductionSection() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-xl md:text-2xl text-[#1F2421] leading-relaxed mb-8 font-light">
              Fashion demands both creativity and efficiency. The best AI implementations preserve the art of fashion while revolutionizing the business of fashion — reducing waste by predicting what will sell before it's made, accelerating design cycles from weeks to hours, and delivering personalized shopping experiences that feel like having a personal stylist for every customer.
            </p>

            <p className="text-xl md:text-2xl text-[#1F2421] leading-relaxed font-light">
              The numbers are staggering. McKinsey projects <span className="font-semibold text-[#1A3A32]">$150–275 billion</span> in new operating profit potential from AI in fashion. Adoption jumped from 20% to 44% in just the first half of 2025. And 46% of fashion executives say they're preparing for AI agents to become a primary shopping channel. This isn't a future trend — it's a present-tense transformation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
