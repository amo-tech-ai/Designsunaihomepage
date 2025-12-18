import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, Search, Database, PenTool, 
  MessageSquare, UserCheck, ArrowRight,
  Workflow, Zap, FileCheck, Mail
} from 'lucide-react';
import { cn } from '../ui/design-system/utils';
import { Card } from '../ui/design-system/Card';
import { Badge } from '../ui/design-system/Badge';

export function AutomationMapPage() {
  const [activePulse, setActivePulse] = useState(0);

  // Simulate data flowing through the system
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePulse(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <Workflow className="w-8 h-8 text-slate-900" />
            Automation Workflow Map
          </h1>
          <p className="text-slate-500 mt-1">Visualizing the logic flow from <span className="text-slate-900 font-medium">Lead Ingestion</span> to <span className="text-slate-900 font-medium">Conversion</span>.</p>
        </div>
        <Badge variant="outline" className="bg-white">
          <Zap className="w-3 h-3 mr-1 text-orange-500" />
          Live Logic Graph
        </Badge>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden flex items-center justify-center p-12">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Workflow Nodes Layer */}
        <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
          
          {/* Level 1: Ingestion */}
          <div className="flex flex-col items-center justify-center space-y-4">
             <NodeCard 
               icon={Globe} 
               label="Lead Sources" 
               sub="Web, LinkedIn, Referral"
               color="blue"
               active={activePulse === 0}
             />
             <div className="h-12 w-px bg-slate-200 relative">
               <motion.div 
                 className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500"
                 animate={{ top: activePulse === 0 ? '100%' : '0%', opacity: activePulse === 0 ? 1 : 0 }}
                 transition={{ duration: 1 }}
               />
             </div>
             <NodeCard 
               icon={Search} 
               label="Scout Agent" 
               sub="Enrichment & Qualification"
               color="blue"
               active={activePulse === 0 || activePulse === 1}
             />
          </div>

          {/* Level 2: Core Processing (Center) */}
          <div className="flex flex-col items-center justify-center">
             <div className="relative w-full flex items-center justify-center">
                {/* Horizontal Connection from Left */}
                <div className="absolute left-[-50%] right-[50%] top-1/2 h-px bg-slate-200">
                  <motion.div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-400"
                    animate={{ left: activePulse === 1 ? '100%' : '0%', opacity: activePulse === 1 ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  />
                </div>
                
                <NodeCard 
                  icon={Database} 
                  label="Lead Context" 
                  sub="Central Intelligence DB"
                  color="purple"
                  isCentral
                  active={true}
                />

                {/* Horizontal Connection to Right */}
                 <div className="absolute left-[50%] right-[-50%] top-1/2 h-px bg-slate-200">
                    <motion.div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-400"
                      animate={{ left: activePulse === 2 ? '100%' : '0%', opacity: activePulse === 2 ? 1 : 0 }}
                      transition={{ duration: 1 }}
                    />
                 </div>
             </div>

             {/* Vertical Processing Branches */}
             <div className="flex gap-8 mt-8">
                <div className="flex flex-col items-center">
                   <div className="h-8 w-px bg-slate-200" />
                   <NodeCard 
                     icon={PenTool} 
                     label="Architect" 
                     sub="Strategy Design"
                     color="purple"
                     active={activePulse === 2}
                   />
                </div>
                <div className="flex flex-col items-center">
                   <div className="h-8 w-px bg-slate-200" />
                   <NodeCard 
                     icon={MessageSquare} 
                     label="Closer" 
                     sub="Communication"
                     color="emerald"
                     active={activePulse === 2}
                   />
                </div>
             </div>
          </div>

          {/* Level 3: Output */}
          <div className="flex flex-col items-center justify-center space-y-4">
             <div className="h-12 w-px bg-slate-200 md:hidden" />
             <NodeCard 
               icon={FileCheck} 
               label="Proposal Sent" 
               sub="High-Conversion Asset"
               color="emerald"
               active={activePulse === 3}
             />
             <div className="h-8 w-px bg-slate-200 relative">
               <motion.div 
                 className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-500"
                 animate={{ top: activePulse === 3 ? '100%' : '0%', opacity: activePulse === 3 ? 1 : 0 }}
                 transition={{ duration: 1 }}
               />
             </div>
             <NodeCard 
               icon={UserCheck} 
               label="Client Signed" 
               sub="Revenue Generated"
               color="emerald"
               active={activePulse === 3}
               highlight
             />
          </div>

        </div>

        {/* Legend / Status */}
        <div className="absolute bottom-8 left-8 p-4 bg-white/90 backdrop-blur border border-slate-200 rounded-xl shadow-sm text-xs space-y-2">
           <div className="font-bold text-slate-900 mb-1">Data Flow Status</div>
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
             <span className="text-slate-600">Ingesting Leads (Active)</span>
           </div>
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
             <span className="text-slate-600">Generating Strategies</span>
           </div>
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-emerald-500" />
             <span className="text-slate-600">Conversion Ready</span>
           </div>
        </div>

      </div>
    </div>
  );
}

function NodeCard({ icon: Icon, label, sub, color, isCentral, highlight, active }: any) {
  const colorStyles = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      animate={active ? { scale: [1, 1.02, 1] } : {}}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative p-4 rounded-xl border-2 bg-white flex flex-col items-center text-center w-48 transition-all shadow-sm z-20",
        isCentral ? "w-64 py-8 shadow-lg border-purple-200" : "border-slate-100",
        highlight ? "ring-2 ring-emerald-400 ring-offset-2 border-emerald-200" : "",
        active ? "border-current shadow-md" : "",
        // @ts-ignore
        colorStyles[color] ? "" : ""
      )}
      style={{
        borderColor: active ? undefined : ''
      }}
    >
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors",
        // @ts-ignore
        colorStyles[color]
      )}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-bold text-slate-900 text-sm mb-1">{label}</h3>
      <p className="text-xs text-slate-500">{sub}</p>
      
      {/* Connector Dots for visual decoration */}
      <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white border-2 border-slate-200 rounded-full" />
      <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-white border-2 border-slate-200 rounded-full" />
    </motion.div>
  );
}
