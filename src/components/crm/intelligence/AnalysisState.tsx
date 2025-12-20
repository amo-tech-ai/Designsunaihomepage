import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, BrainCircuit, ListTodo, CheckCircle2 } from 'lucide-react';
import { Typography } from '../../ui/design-system/Typography';

interface AnalysisStateProps {
  onComplete: () => void;
}

const STEPS = [
  { text: "Transcribing conversation...", icon: Sparkles, color: "text-amber-500" },
  { text: "Identifying scope and budget...", icon: BrainCircuit, color: "text-indigo-500" },
  { text: "Extracting action items...", icon: ListTodo, color: "text-emerald-500" },
  { text: "Finalizing intelligence brief...", icon: CheckCircle2, color: "text-blue-500" }
];

export function AnalysisState({ onComplete }: AnalysisStateProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < STEPS.length) {
      const timeout = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1500); // 1.5s per step
      return () => clearTimeout(timeout);
    } else {
      // Complete
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentStep, onComplete]);

  const step = STEPS[Math.min(currentStep, STEPS.length - 1)];
  const Icon = step.icon;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full relative overflow-hidden">
      {/* Background Pulse */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[500px] h-[500px] rounded-full bg-indigo-500 blur-[100px]"
        />
      </div>

      <div className="z-10 text-center">
        <div className="mb-8 relative">
           <div className="w-24 h-24 bg-white/50 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl mx-auto border border-white/60">
             <motion.div
               key={currentStep}
               initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
               animate={{ scale: 1, opacity: 1, rotate: 0 }}
               exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
               transition={{ type: "spring", stiffness: 200, damping: 20 }}
             >
                <Icon className={`w-10 h-10 ${step.color}`} />
             </motion.div>
           </div>
           
           {/* Ring Animation */}
           <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-2 rounded-[32px] border border-dashed border-indigo-200" 
           />
        </div>

        <div className="h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center"
            >
              <Typography variant="h3" className="font-medium text-slate-800 tracking-tight">
                {step.text}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex gap-2 justify-center mt-6">
           {STEPS.map((_, i) => (
             <motion.div
               key={i}
               className={`w-2 h-2 rounded-full transition-colors duration-500 ${i <= currentStep ? 'bg-indigo-600' : 'bg-slate-200'}`}
             />
           ))}
        </div>
      </div>
    </div>
  );
}
