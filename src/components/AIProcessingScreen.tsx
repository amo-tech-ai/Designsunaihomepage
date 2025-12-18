import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Cpu, Search, BrainCircuit, Check, Layers, ArrowRight } from 'lucide-react';
import { Typography } from './ui/design-system/Typography';

interface AIProcessingScreenProps {
  onComplete?: () => void;
}

// Updated steps with "Confidence" copy
const steps = [
  {
    id: 1,
    icon: Globe,
    title: 'Context ingestion complete',
    description: 'Ingesting URL parameters and session state...',
    duration: 1200,
  },
  {
    id: 2,
    icon: Cpu,
    title: 'Agents deployed and synchronized',
    description: 'Routing task to Gemini Pro Vision...',
    duration: 1500,
  },
  {
    id: 3,
    icon: Search,
    title: 'Market data verified',
    description: 'Verifying market data and competitor benchmarks...',
    duration: 1800,
  },
  {
    id: 4,
    icon: BrainCircuit,
    title: 'Synthesizing solution architecture',
    description: 'Synthesizing features, budget, and timeline...',
    duration: 2000,
  },
  {
    id: 5,
    icon: Layers, // Changed icon to Layers for generic asset generation
    title: 'Finalizing proposal assets',
    description: 'Writing to Supabase & creating proposal JSON...',
    duration: 1200,
  },
];

export function AIProcessingScreen({ onComplete }: AIProcessingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= steps.length) {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 800);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, steps[currentStep].duration);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  const progress = Math.min(((currentStep) / steps.length) * 100, 100);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Background Ambience - Subtle Depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[1200px] h-[1200px] bg-blue-100/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-orange-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-2xl relative z-10">
        
        {/* Hero Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-16 mx-auto bg-slate-900 rounded-2xl shadow-2xl shadow-slate-900/20 flex items-center justify-center mb-8 relative"
          >
             {/* Breathing Glow */}
             <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-2xl bg-blue-500 blur-xl opacity-40" 
             />
             <Cpu className="w-8 h-8 text-white" />
          </motion.div>

          <Typography variant="h2" className="text-slate-900 mb-2 tracking-tight font-medium">
            Architecting Solution
          </Typography>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-medium uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            AI Agent Workflow Active
          </div>
        </div>

        {/* Glass Card Container */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl rounded-[20px] shadow-2xl shadow-slate-200/50 border border-white/50 overflow-hidden relative"
        >
          {/* Top Progress Rail */}
          <div className="h-1 bg-slate-100 w-full absolute top-0 left-0 right-0 z-20">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut", duration: 1 }}
            />
          </div>

          <div className="p-1 pt-1"> 
             {/* Window Controls Mockup (Subtle) */}
             <div className="flex items-center gap-1.5 px-6 py-4 border-b border-slate-100/50">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="ml-auto text-[10px] font-mono text-slate-400 opacity-60">agent-core.ts — running</div>
             </div>

             <div className="p-2 space-y-1 max-h-[500px] overflow-hidden">
               {steps.map((step, index) => {
                 const isCompleted = index < currentStep;
                 const isActive = index === currentStep;
                 const isPending = index > currentStep;

                 return (
                   <motion.div
                     key={step.id}
                     initial={false}
                     animate={{ 
                       opacity: isPending ? 0.4 : 1, 
                     }}
                     className={`
                       group relative p-4 rounded-xl flex items-center gap-5 transition-all duration-500
                       ${isActive ? 'bg-amber-50/50' : 'bg-transparent'}
                     `}
                   >
                     {/* Left: Status Icon */}
                     <div className={`
                       w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500
                       ${isCompleted ? 'bg-slate-100 border-transparent text-slate-600' : isActive ? 'bg-amber-100 border-amber-200 text-amber-600' : 'bg-transparent border-slate-200 text-slate-300'}
                     `}>
                       <AnimatePresence mode="wait">
                         {isCompleted ? (
                           <motion.div
                             key="check"
                             initial={{ opacity: 0, scale: 0.5 }}
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{ duration: 0.2 }}
                           >
                             <Check className="w-4 h-4" />
                           </motion.div>
                         ) : isActive ? (
                           <motion.div
                             key="dot"
                             animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                             transition={{ duration: 2, repeat: Infinity }}
                           >
                             <div className="w-2.5 h-2.5 rounded-full bg-current" />
                           </motion.div>
                         ) : (
                           <div className="w-2.5 h-2.5 rounded-full border border-current" />
                         )}
                       </AnimatePresence>
                     </div>
                     
                     {/* Middle: Content */}
                     <div className="flex-1 min-w-0">
                       <div className={`text-[15px] font-medium transition-colors duration-300 ${isActive ? 'text-slate-900' : isCompleted ? 'text-slate-700' : 'text-slate-400'}`}>
                         {step.title}
                       </div>
                       <div className="text-[13px] text-slate-400 font-normal truncate mt-0.5">
                         {step.description}
                       </div>
                     </div>

                     {/* Right: Status Pill */}
                     <div className="shrink-0">
                        {isCompleted && (
                          <div className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-wider uppercase">
                            Done
                          </div>
                        )}
                        {isActive && (
                          <div className="px-2.5 py-1 rounded-full bg-white border border-amber-100 text-amber-600 shadow-sm text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            Running
                          </div>
                        )}
                        {isPending && (
                          <div className="px-2.5 py-1 rounded-full border border-slate-100 text-slate-300 text-[10px] font-bold tracking-wider uppercase">
                            Queued
                          </div>
                        )}
                     </div>

                     {/* Active Row Highlight Bar */}
                     {isActive && (
                       <motion.div 
                         layoutId="active-row-indicator"
                         className="absolute left-0 top-3 bottom-3 w-1 bg-amber-400 rounded-r-full"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                       />
                     )}

                   </motion.div>
                 );
               })}
             </div>
          </div>
        </motion.div>
        
        {/* Footer Link (Optional Enhancement) */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-8"
        >
            <button className="text-slate-400 hover:text-slate-600 text-sm flex items-center justify-center gap-2 mx-auto transition-colors group">
                View execution details
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
        </motion.div>

      </div>
    </div>
  );
}
