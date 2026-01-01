'use client';

import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Headline */}
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-[#0A1628] leading-tight">
            Ready to Build Something{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Extraordinary
            </span>
            ?
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's turn your vision into production-ready AI. Schedule a strategy session
            and get your custom blueprint in 48 hours.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/wizard/step1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span className="text-lg font-semibold">Start Your Project</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.button>
            </Link>

            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-[#0A1628] text-white rounded-xl hover:bg-[#0A1628]/90 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle size={20} />
                <span className="text-lg font-semibold">Talk to Strategist</span>
              </motion.button>
            </Link>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-8 text-sm text-gray-500"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white"
                  />
                ))}
              </div>
              <span>Join 200+ companies building with Sun AI</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}