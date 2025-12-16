import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface StepCardProps {
  stepNumber: string;
  title: string;
  icon: LucideIcon;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

export function StepCard({ 
  stepNumber, 
  title,
  icon: Icon, 
  description,
  gradientFrom,
  gradientTo 
}: StepCardProps) {
  return (
    <motion.div 
      className="w-full max-w-[320px] lg:w-[250px] xl:w-[300px] flex flex-col relative"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Main Card */}
      <div 
        className="flex flex-col h-full bg-white rounded-[28px] overflow-hidden transition-all duration-300 group"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Header Strip */}
        <div 
          className="relative py-5 px-6 flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          }}
        >
          {/* Glass Top Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30" />
          
          {/* Inner Glow on Hover (handled by group hover on parent usually, but here we can just do simple CSS or motion) */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />

          {/* Title */}
          <h3 className="relative z-10 text-white font-bold text-lg tracking-wide">
            {stepNumber}
          </h3>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex flex-col items-center px-6 py-8 bg-white">
          {/* Icon Wrapper */}
          <div 
            className="mb-6 relative flex items-center justify-center w-20 h-20 rounded-[24px] bg-white shadow-sm border border-slate-100/80"
            style={{
              boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.08)'
            }}
          >
            <Icon 
              className="text-[#1a1a1a]" 
              size={36} 
              strokeWidth={1.5}
            />
          </div>

          {/* Title (Inputs, Agents, etc) */}
          <h4 className="text-[#1a1a1a] font-bold text-lg mb-2">
            {title}
          </h4>

          {/* Description */}
          <p className="text-center text-[#5A5F63] text-[14px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
