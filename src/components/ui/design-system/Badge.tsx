import React from 'react';
import { cn } from './utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'orange' | 'success';
}

export function Badge({ 
  children, 
  className, 
  variant = 'default',
  ...props 
}: BadgeProps) {
  
  const variants = {
    default: "bg-slate-100 text-slate-900 border-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700",
    outline: "bg-transparent border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400",
    orange: "bg-orange-50 text-[#FF6A3D] border-orange-100 dark:bg-orange-900/20 dark:border-orange-900/50",
    success: "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-900/50"
  };

  return (
    <div 
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
