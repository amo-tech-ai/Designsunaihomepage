'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const PARTNER_LOGOS = [
  { name: 'Vogue', width: 120 },
  { name: 'LVMH', width: 100 },
  { name: 'Tesla', width: 110 },
  { name: 'Shopify', width: 130 },
  { name: 'Stripe', width: 100 },
  { name: 'Meta', width: 90 },
  { name: 'Apple', width: 80 },
  { name: 'Google', width: 120 },
];

export function Partners() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 px-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Trusted By Industry Leaders
          </span>
        </motion.div>

        {/* Logo Ticker */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={{
              x: isHovered ? 0 : [0, -1200],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
            className="flex gap-16 items-center"
          >
            {/* First set */}
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                key={`${logo.name}-1-${index}`}
                className="flex-shrink-0 opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                style={{ width: logo.width }}
              >
                <div className="h-12 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                key={`${logo.name}-2-${index}`}
                className="flex-shrink-0 opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                style={{ width: logo.width }}
              >
                <div className="h-12 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
