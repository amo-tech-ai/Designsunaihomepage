import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface SolutionCardProps {
  title: string;
  description: string;
  variant?: 'dark' | 'mint' | 'light-mint';
  className?: string;
}

export function SolutionCard({ 
  title, 
  description, 
  variant = 'mint',
  className = '' 
}: SolutionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isActive = isHovered || isFocused;

  // Background colors for variants
  const backgrounds = {
    dark: 'bg-neutral-900',
    mint: 'bg-[#D1F4E0]',
    'light-mint': 'bg-[#E8F9F0]'
  };

  const textColors = {
    dark: 'text-white',
    mint: 'text-neutral-900',
    'light-mint': 'text-neutral-900'
  };

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-lg
        h-[400px] md:h-[420px]
        border border-neutral-200
        cursor-pointer
        focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-900 focus-within:ring-offset-2
        ${backgrounds[variant]}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={0}
      role="article"
      aria-label={title}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background dim overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 0.05 : 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />

      {/* Main content area */}
      <div className="relative h-full flex flex-col justify-between p-8 md:p-10 z-[2]">
        {/* Title - always visible */}
        <h3 className={`
          text-2xl md:text-3xl lg:text-4xl
          leading-tight
          tracking-tight
          max-w-[280px]
          ${textColors[variant]}
        `}>
          {title}
        </h3>

        {/* Slide-up overlay */}
        <motion.div
          className={`
            absolute bottom-0 left-0 right-0
            p-8 md:p-10
            ${variant === 'dark' ? 'bg-neutral-800' : 'bg-white/90'}
            backdrop-blur-sm
            z-[3]
          `}
          initial={{ y: '100%' }}
          animate={{ y: isActive ? 0 : '100%' }}
          transition={{ 
            duration: 0.28, 
            ease: [0.16, 1, 0.3, 1] // Custom ease-out
          }}
        >
          {/* Description */}
          <p className={`
            text-sm md:text-base
            leading-relaxed
            mb-6
            max-w-[400px]
            ${variant === 'dark' ? 'text-neutral-200' : 'text-neutral-700'}
          `}>
            {description}
          </p>

          {/* CTA indicator */}
          <div className="flex items-center gap-2">
            <motion.div
              className={`
                w-10 h-10 rounded-full
                flex items-center justify-center
                ${variant === 'dark' ? 'bg-emerald-400' : 'bg-emerald-400'}
              `}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 text-neutral-900" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
