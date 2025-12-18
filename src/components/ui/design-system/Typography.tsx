import React from 'react';
import { cn } from './utils';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-sm' | 'caption';
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Typography({ 
  variant = 'body', 
  children, 
  className, 
  as,
  ...props 
}: TypographyProps) {
  
  const variants = {
    h1: "font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]",
    h2: "font-heading text-3xl md:text-4xl font-bold tracking-tight leading-[1.2]",
    h3: "font-heading text-2xl md:text-3xl font-bold tracking-tight leading-[1.2]",
    h4: "font-heading text-xl md:text-2xl font-bold tracking-tight leading-[1.3]",
    h5: "font-heading text-lg md:text-xl font-bold tracking-tight leading-[1.4]",
    h6: "font-heading text-base md:text-lg font-bold tracking-tight leading-[1.4]",
    body: "font-body text-base leading-relaxed text-slate-600 dark:text-slate-300",
    "body-sm": "font-body text-sm leading-relaxed text-slate-600 dark:text-slate-300",
    caption: "font-body text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium"
  };

  const Component = as || (variant.startsWith('h') ? variant : 'p') as React.ElementType;

  return (
    <Component 
      className={cn(variants[variant], className)} 
      {...props}
    >
      {children}
    </Component>
  );
}
