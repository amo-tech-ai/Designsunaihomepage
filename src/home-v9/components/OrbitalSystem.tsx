'use client';

import { motion } from 'motion/react';
import { Brain, Cloud, Database, Sparkles, Zap, Target, Lock, Globe } from 'lucide-react';
import { useState } from 'react';

const ORBIT_ITEMS = [
  { icon: Brain, label: 'NLP', color: '#10B981' },
  { icon: Cloud, label: 'Cloud', color: '#FF6B2C' },
  { icon: Database, label: 'Data', color: '#10B981' },
  { icon: Sparkles, label: 'AI', color: '#FF6B2C' },
  { icon: Zap, label: 'Speed', color: '#10B981' },
  { icon: Target, label: 'Vision', color: '#FF6B2C' },
  { icon: Lock, label: 'Security', color: '#10B981' },
  { icon: Globe, label: 'Scale', color: '#FF6B2C' },
];

export function OrbitalSystem() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Center Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
          }}
          className="relative w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 shadow-2xl shadow-emerald-500/30"
        >
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 opacity-50 blur-xl" />
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles size={48} className="text-white" strokeWidth={1.5} />
          </div>

          {/* Pulse rings */}
          <motion.div
            animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full border-2 border-emerald-400"
          />
          <motion.div
            animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 1 }}
            className="absolute inset-0 rounded-full border-2 border-emerald-400"
          />
        </motion.div>
      </div>

      {/* Orbit Track */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full rounded-full border border-dashed border-gray-300" />
      </div>

      {/* Orbiting Items */}
      <motion.div
        animate={isPaused ? {} : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {ORBIT_ITEMS.map((item, index) => {
          const angle = (360 / ORBIT_ITEMS.length) * index;
          const radius = 45; // percentage

          return (
            <motion.div
              key={item.label}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}%)`,
              }}
            >
              <motion.div
                animate={isPaused ? {} : { rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                whileHover={{ scale: 1.2 }}
                className="group cursor-pointer"
              >
                <div
                  className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-xl"
                  style={{
                    borderColor: item.color,
                    borderWidth: '2px',
                  }}
                >
                  <item.icon size={24} style={{ color: item.color }} strokeWidth={2} />
                </div>
                
                {/* Label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-emerald-100 via-transparent to-transparent opacity-30 blur-3xl -z-10" />
    </div>
  );
}
