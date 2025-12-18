import React from 'react';
import { cn } from './utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  ...props 
}: ButtonProps) {
  
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-[#E55A2F] shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 border-transparent hover:-translate-y-0.5",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 border-transparent hover:-translate-y-0.5",
    outline: "bg-transparent border border-slate-200 text-slate-900 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5",
    ghost: "bg-transparent text-slate-600 hover:text-orange-500 hover:bg-orange-50/50 dark:text-slate-400 dark:hover:text-white"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm rounded-lg",
    md: "h-[52px] px-8 text-base rounded-xl",
    lg: "h-14 px-10 text-lg rounded-2xl"
  };

  return (
    <button 
      className={cn(
        "relative inline-flex items-center justify-center font-bold transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:pointer-events-none gap-2",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && leftIcon && <span>{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}
