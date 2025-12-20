import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Search, Database, BrainCircuit, Globe, Zap } from 'lucide-react';
import { Card } from '../../ui/design-system/Card';
import { Typography } from '../../ui/design-system/Typography';
import { cn } from '../../ui/design-system/utils';

interface HydrationStateProps {
  onComplete?: () => void;
  minDuration?: number; // Minimum time to show this state (ms)
}

const STEPS = [
  { 
    id: 'public_data',
    text: "Analyzing public data...", 
    subtext: "Scanning LinkedIn, Company Site, News",
    icon: Globe, 
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  { 
    id: 'signals',
    text: "Identifying company signals...", 
    subtext: "Funding, Tech Stack, Growth Trends",
    icon: Database, 
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  { 
    id: 'synthesis',
    text: "Synthesizing profile...", 
    subtext: "Generating Executive Summary & Sun Score",
    icon: BrainCircuit, 
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
];

export function HydrationState({ onComplete, minDuration = 6000 }: HydrationStateProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  useEffect(() => {
    // Calculate duration per step based on total minDuration
    const stepDuration = minDuration / STEPS.length;
    
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev >= STEPS.length - 1) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 1000); // Small pause at the end
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [minDuration, onComplete]);

  const currentStep = STEPS[currentStepIndex];
  const Icon = currentStep.icon;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <Card variant="solid" className="p-10 shadow-2xl border-white/50 bg-white/90 backdrop-blur-xl overflow-hidden relative">
          
          {/* Shimmer Effect Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ 
                x: ['-100%', '200%'],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5, 
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Animated Icon Container */}
            <div className="mb-8 relative">
              {/* Pulsing Background Ring */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={cn("absolute inset-0 rounded-full", currentStep.bg)}
              />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.4 }}
                  className={cn("w-20 h-20 rounded-2xl flex items-center justify-center shadow-inner", currentStep.bg)}
                >
                  <Icon className={cn("w-10 h-10", currentStep.color)} />
                </motion.div>
              </AnimatePresence>

              {/* Sparkle decoration */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute -top-2 -right-2 text-yellow-400"
              >
                <Sparkles className="w-5 h-5 fill-yellow-100" />
              </motion.div>
            </div>

            {/* Progressive Text */}
            <div className="h-24 w-full"> {/* Fixed height to prevent layout shift */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Typography variant="h3" className="font-bold text-slate-900 mb-2 tracking-tight">
                    {currentStep.text}
                  </Typography>
                  <Typography variant="body" className="text-slate-400 text-sm font-medium">
                    {currentStep.subtext}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-6">
              {STEPS.map((step, idx) => (
                <motion.div
                  key={step.id}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    idx === currentStepIndex ? "w-8 bg-indigo-500" : 
                    idx < currentStepIndex ? "w-2 bg-indigo-200" : "w-2 bg-slate-100"
                  )}
                />
              ))}
            </div>

          </div>
        </Card>
      </motion.div>
    </div>
  );
}
