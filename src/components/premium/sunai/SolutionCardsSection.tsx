import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface SolutionCard {
  title: string;
  description: string;
  backgroundColor?: string;
  textColor?: string;
  isDark?: boolean;
}

interface SolutionCardsSectionProps {
  title?: string;
  subtitle?: string;
  cards?: SolutionCard[];
  className?: string;
}

const defaultCards: SolutionCard[] = [
  {
    title: "BCG's Center for Growth and Innovation Analytics",
    description: "Our center helps identify the most attractive areas for innovation investment with its proprietary advanced analytics tools and data sets.",
    backgroundColor: '#E8F5E9',
    textColor: '#1F2421',
    isDark: false
  },
  {
    title: "FinTech Control Tower by BCG",
    description: "Strategic oversight and real-time monitoring of digital transformation initiatives across your entire financial ecosystem.",
    backgroundColor: '#E8F5E9',
    textColor: '#1F2421',
    isDark: false
  },
  {
    title: "BCG's i2i Innovation Benchmarking Tool",
    description: "Measure and optimize your innovation performance against industry leaders with data-driven insights and actionable recommendations.",
    backgroundColor: '#E8F5E9',
    textColor: '#1F2421',
    isDark: false
  }
];

function SolutionCard({ title, description, backgroundColor, textColor, isDark }: SolutionCard) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const showOverlay = isHovered || isFocused;

  return (
    <motion.div
      className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer group"
      style={{ backgroundColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={0}
      role="button"
      aria-label={title}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Title - Always Visible */}
      <div className="absolute inset-0 flex items-start p-8 md:p-10">
        <h3
          className="text-[28px] md:text-[32px] leading-[1.2] font-normal max-w-[85%]"
          style={{
            color: textColor,
            fontFamily: 'Georgia, serif'
          }}
        >
          {title}
        </h3>
      </div>

      {/* Slide-up Overlay */}
      <motion.div
        className="absolute inset-x-0 bottom-0 p-8 md:p-10"
        style={{
          backgroundColor: isDark ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)'
        }}
        initial={{ y: '100%' }}
        animate={{ y: showOverlay ? '0%' : '100%' }}
        transition={{
          duration: 0.28,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <p
          className="text-[16px] md:text-[17px] leading-[1.6] mb-6"
          style={{
            color: isDark ? 'rgba(250, 248, 245, 0.9)' : '#1F2421'
          }}
        >
          {description}
        </p>

        <div className="flex items-center justify-end">
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-full"
            style={{
              backgroundColor: '#C5F467'
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight
              className="w-5 h-5"
              style={{ color: '#1A3A32' }}
              strokeWidth={2.5}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle hover background dim */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: isDark ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.03)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showOverlay ? 1 : 0 }}
        transition={{ duration: 0.28 }}
      />
    </motion.div>
  );
}

export function SolutionCardsSection({
  title = 'Our Partnerships and Solutions',
  subtitle = 'We bring best-in-class consulting expertise to bear on every engagement and complement it with critical capabilities from BCG\'s broader innovation ecosystem:',
  cards = defaultCards,
  className = ''
}: SolutionCardsSectionProps) {
  return (
    <section className={`py-20 md:py-24 lg:py-28 px-6 md:px-12 lg:px-16 ${className}`}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2
            className="text-[36px] md:text-[42px] lg:text-[48px] leading-[1.15] font-normal text-[#1F2421] mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-[16px] md:text-[17px] leading-[1.6] text-[#6B7370] max-w-[900px]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <SolutionCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}