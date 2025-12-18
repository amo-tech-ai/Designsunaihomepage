import React from 'react';
import { cn } from '../../utils';
import { Loader2 } from 'lucide-react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function PrimaryButton({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  ...props 
}: PrimaryButtonProps) {
  
  const variants = {
    primary: "bg-[#FF6A3D] text-white hover:bg-[#E55A2F] shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 border-transparent",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 border-transparent",
    outline: "bg-transparent border border-slate-200 text-slate-900 hover:border-[#FF6A3D] hover:text-[#FF6A3D] hover:bg-orange-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5",
    ghost: "bg-transparent text-slate-600 hover:text-[#FF6A3D] hover:bg-orange-50/50 dark:text-slate-400 dark:hover:text-white"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-[52px] px-8 text-base",
    lg: "h-14 px-10 text-lg"
  };

  return (
    <button 
      className={cn(
        "relative inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:pointer-events-none gap-2",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-1" />}
      {!isLoading && leftIcon && <span className="mr-1">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-1">{rightIcon}</span>}
    </button>
  );
}
