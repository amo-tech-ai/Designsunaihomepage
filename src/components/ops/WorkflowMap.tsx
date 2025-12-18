import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, Search, Database, FileText, 
  MessageSquare, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { cn } from '../ui/design-system/utils';
import { Card } from '../ui/design-system/Card';

export function WorkflowMap() {
  return (
    <div className="min-h-[600px] w-full bg-slate-50/50 rounded-3xl border border-slate-200 p-8 relative overflow-hidden flex items-center justify-center">
      
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-[0.03]">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-slate-900" />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          
          {/* Node 1: Ingest */}
          <WorkflowNode 
            icon={Users} 
            label="Lead Source" 
            sub="Ingestion"
            color="bg-slate-900" 
            textColor="text-white"
            delay={0}
          />

          <ConnectionLine active={true} delay={0.5} />

          {/* Node 2: Scout */}
          <WorkflowNode 
            icon={Search} 
            label="Scout Agent" 
            sub="Enrichment"
            color="bg-blue-500" 
            textColor="text-white"
            delay={0.2}
            pulsing
          />

          <ConnectionLine active={true} delay={1.5} />

          {/* Node 3: Context */}
          <WorkflowNode 
            icon={Database} 
            label="Lead Context" 
            sub="Storage"
            color="bg-slate-100" 
            textColor="text-slate-900"
            delay={0.4}
            borderColor="border-slate-300"
          />

          <ConnectionLine active={true} delay={2.5} />

          {/* Node 4: Architect */}
          <WorkflowNode 
            icon={FileText} 
            label="Architect" 
            sub="Generation"
            color="bg-purple-500" 
            textColor="text-white"
            delay={0.6}
            pulsing
          />

          <ConnectionLine active={true} delay={3.5} />

          {/* Node 5: Closer */}
          <WorkflowNode 
            icon={MessageSquare} 
            label="Closer Agent" 
            sub="Outreach"
            color="bg-emerald-500" 
            textColor="text-white"
            delay={0.8}
            pulsing
          />

          <ConnectionLine active={true} delay={4.5} />

          {/* Node 6: Success */}
          <WorkflowNode 
            icon={CheckCircle2} 
            label="Conversion" 
            sub="Revenue"
            color="bg-slate-900" 
            textColor="text-white"
            delay={1.0}
            isEnd
          />

        </div>

        {/* Legend / Info */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm">
             <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
               <span className="text-xs font-medium text-slate-500">Active Processing</span>
             </div>
             <div className="h-4 w-px bg-slate-200" />
             <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-slate-300" />
               <span className="text-xs font-medium text-slate-500">Idle / Waiting</span>
             </div>
             <div className="h-4 w-px bg-slate-200" />
             <div className="text-xs text-slate-400">
               Avg. Pipeline Latency: <span className="font-bold text-slate-900">1.2s</span>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// --- Subcomponents ---

function WorkflowNode({ icon: Icon, label, sub, color, textColor, delay, pulsing, borderColor, isEnd }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      className="relative group z-20 flex-1 max-w-[140px]"
    >
      <div className={cn(
        "aspect-square rounded-2xl flex flex-col items-center justify-center gap-3 shadow-lg transition-all relative overflow-hidden",
        color,
        borderColor && `border-2 ${borderColor}`
      )}>
        {pulsing && (
          <div className="absolute inset-0 bg-white/20 animate-pulse-slow" />
        )}
        
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm",
          textColor
        )}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="text-center">
          <div className={cn("text-xs font-bold", textColor)}>{label}</div>
          <div className={cn("text-[10px] opacity-70 uppercase tracking-wider font-medium", textColor)}>{sub}</div>
        </div>
      </div>
      
      {!isEnd && (
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-1/2 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity">
           <ArrowRight className="w-4 h-4 text-slate-300" />
        </div>
      )}
    </motion.div>
  );
}

function ConnectionLine({ active, delay }: { active: boolean, delay: number }) {
  return (
    <div className="flex-1 h-px bg-slate-200 relative overflow-visible min-w-[40px]">
       {/* Dot animation representing data packet */}
       {active && (
         <motion.div
           className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-900 shadow-sm z-30"
           initial={{ left: "0%", opacity: 0 }}
           animate={{ 
             left: ["0%", "100%"],
             opacity: [0, 1, 1, 0]
           }}
           transition={{ 
             duration: 1.5, 
             ease: "linear",
             repeat: Infinity,
             delay: delay,
             repeatDelay: 2 // Wait before sending next packet
           }}
         />
       )}
    </div>
  );
}
