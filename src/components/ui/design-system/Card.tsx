import React from 'react';
import { cn } from './utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'glass' | 'solid' | 'outline';
  hoverEffect?: boolean;
  className?: string;
}

export function Card({ 
  children, 
  variant = 'glass', 
  hoverEffect = true,
  className,
  ...props 
}: CardProps) {
  
  const variants = {
    glass: "bg-white/70 backdrop-blur-md border border-slate-200/60 dark:bg-slate-900/60 dark:border-white/10",
    solid: "bg-white border border-slate-100 shadow-sm dark:bg-slate-900 dark:border-slate-800",
    outline: "bg-transparent border border-slate-200 dark:border-slate-800"
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-300",
        variants[variant],
        hoverEffect && "hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 dark:hover:border-white/20 dark:hover:shadow-orange-500/5",
        className
      )} 
      {...props}
    >
      {variant === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none opacity-50 dark:from-white/5" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
