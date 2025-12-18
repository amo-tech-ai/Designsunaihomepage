import React from 'react';
import { cn } from '../../utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  lightMode?: boolean; 
}

export function SectionHeading({ 
  title, 
  subtitle, 
  kicker, 
  align = 'center', 
  className,
  lightMode = false
}: SectionHeadingProps) {
  
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={cn("flex flex-col gap-4 mb-12 lg:mb-16 max-w-3xl", alignClasses[align], className)}>
      {kicker && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#FF6A3D] text-xs font-bold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D] animate-pulse" />
          {kicker}
        </div>
      )}
      
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-heading leading-[1.2]",
        lightMode ? "text-slate-900" : "text-slate-900 dark:text-white"
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-lg text-slate-500 leading-relaxed font-body max-w-2xl dark:text-slate-400",
          align === 'center' && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
