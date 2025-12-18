import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { cn } from '../ui/design-system/utils';

export type WizardCTAVariant = 'hero' | 'inline' | 'section';

interface WizardCTAProps {
  /**
   * The visual style variant of the CTA
   * - hero: Large, prominent, centered (for top of page)
   * - inline: Medium, fits within content blocks
   * - section: Full-width container background, designed for pre-footer
   */
  variant?: WizardCTAVariant;
  
  /**
   * Function to trigger navigation to the wizard
   */
  onNavigate?: () => void;
  
  /**
   * Optional custom class names
   */
  className?: string;
  
  /**
   * Override the main text
   */
  title?: string;
  
  /**
   * Override the subtext (only for Hero/Section)
   */
  subtitle?: string;
}

export function WizardCTA({ 
  variant = 'hero', 
  onNavigate, 
  className,
  title = "Start Your AI Brief",
  subtitle = "Takes ~3 minutes • No commitment"
}: WizardCTAProps) {
  const [isHovered, setIsHovered] = useState(false);

  // --- Styles Configuration ---
  const baseButtonStyles = "relative overflow-hidden inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 outline-none focus:ring-2 focus:ring-[#FF6B2C] focus:ring-offset-2";
  
  const variantStyles = {
    hero: "text-lg px-10 py-5 rounded-full shadow-[0_4px_14px_0_rgba(0,51,79,0.3)] hover:shadow-[0_6px_20px_rgba(0,51,79,0.23)] hover:-translate-y-1 active:shadow-inner active:translate-y-0",
    inline: "text-base px-8 py-3 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
    section: "text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
  };

  const buttonClasses = cn(
    baseButtonStyles,
    "bg-[#00334F] text-white",
    variantStyles[variant === 'section' ? 'section' : variant] 
    // Note: 'section' variant uses the button style defined above, but wrapped in a container
  );

  // --- Button Component ---
  const ButtonContent = () => (
    <motion.button
      className={buttonClasses}
      onClick={onNavigate}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background Hover Effect (Subtle Orange Glow) */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-[#00334F] to-[#004a70] transition-opacity duration-300",
          isHovered ? "opacity-0" : "opacity-100"
        )} 
      />
      <div 
        className={cn(
          "absolute inset-0 bg-[#00334F] transition-opacity duration-300",
           // We use a slight gradient overlay on hover or just allow the base color to shift?
           // The prompt requested: "Slight lift + subtle glow or orange accent underline"
           // Let's implement a subtle orange bottom border/inset shadow or just relies on the ring/lift.
           // We'll stick to the lift + shadow change for elegance, maybe a very subtle orange tint gradient.
          isHovered ? "opacity-100 bg-gradient-to-t from-[#FF6B2C]/10 to-transparent" : "opacity-0"
        )} 
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {title}
        
        {/* Icon Animation */}
        <div className="relative w-5 h-5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.div
                key="spark"
                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles className="w-5 h-5 text-[#FF6B2C]" />
              </motion.div>
            ) : (
              <motion.div
                key="arrow"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                 {variant === 'hero' || variant === 'section' ? <ArrowRight className="w-5 h-5 text-white/70" /> : null}
              </motion.div>
            )}
          </AnimatePresence>
          {/* Fallback for inline if no arrow is shown initially, to keep spacing? 
              Actually, for inline we might want it tighter. 
          */}
        </div>
      </span>
    </motion.button>
  );

  // --- Render based on Variant ---

  if (variant === 'section') {
    return (
      <section className={cn("w-full py-24 bg-[#F7F9FB] border-t border-slate-100", className)}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Ready to modernize your business?
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Get a custom AI implementation roadmap, tailored to your goals and budget.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <ButtonContent />
              <div className="flex items-center gap-6 text-sm text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> 3 mins
                </span>
                <span className="flex items-center gap-1.5">
                   <ShieldCheck className="w-4 h-4" /> Free & Private
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Hero & Inline Variants
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <ButtonContent />
      
      {/* Subtext only for Hero by default */}
      {variant === 'hero' && subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm font-medium text-slate-400 flex items-center gap-2"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
