import { motion } from 'motion/react';
import { Check, User, FileText, Layout, Database, Smartphone, Globe, Cpu, ArrowRight, Home, Folder, Bot, Image as ImageIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

// --- Shared Components ---

// Export BrowserFrame to be used in the parent container
export const BrowserFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-full bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden relative ${className}`}>
    {/* Browser Chrome */}
    <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-1.5 z-20 relative">
      <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A3D]/80" />
      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
    </div>
    <div className="relative h-[400px] bg-white">
      {children}
    </div>
  </div>
);

const Pointer = ({ variants, animate }: { variants: any, animate: any }) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate={animate}
    className="absolute z-50 pointer-events-none drop-shadow-xl"
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2L26 12L16 16L12 26L6 2Z" fill="#FF6A3D" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  </motion.div>
);

// --- Screen 1: Scope Wizard ---

export function ScreenScopeContent({ isActive }: { isActive: boolean }) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setSelected("AI Product"), 1200);
      return () => clearTimeout(timer);
    } else {
      setSelected(null);
    }
  }, [isActive]);

  const pointerVariants = {
    initial: { x: 200, y: 300, opacity: 0 },
    animate: {
      opacity: [0, 1, 1, 0],
      x: [200, 110, 110, 200], 
      y: [300, 130, 130, 300],
      scale: [1, 1, 0.9, 1, 1],
      transition: { 
        duration: 3.5, 
        times: [0, 0.2, 0.4, 0.5, 1],
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="w-full h-full p-6 md:p-8 flex flex-col relative">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Project Scope Wizard</h3>
        <p className="text-sm text-slate-400">Select your project type</p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center content-start">
        {["MVP", "AI Product", "Automation", "Mobile App", "Dashboard", "CRM", "Landing Page"].map((chip) => (
          <div
            key={chip}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
              selected === chip
                ? "bg-[#FF6A3D] border-[#FF6A3D] text-white shadow-lg scale-105"
                : "bg-white border-slate-200 text-slate-600"
            }`}
          >
            {chip}
          </div>
        ))}
      </div>

      <div className="mt-auto flex justify-center">
        <button className={`px-8 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
           isActive && selected ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-400"
        }`}>
          Continue
        </button>
      </div>

      {isActive && <Pointer variants={pointerVariants} animate="animate" />}
    </div>
  );
}

// --- Screen 2: Budget & Timeline ---

export function ScreenBudgetContent({ isActive }: { isActive: boolean }) {
  const [budget, setBudget] = useState<string | null>(null);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setBudget("$15K–$30K"), 1200);
      return () => clearTimeout(timer);
    } else {
      setBudget(null);
    }
  }, [isActive]);

  const pointerVariants = {
    initial: { x: 50, y: 300, opacity: 0 },
    animate: {
      opacity: [0, 1, 1, 0],
      x: [50, 150, 150, 200],
      y: [300, 100, 100, 300],
      scale: [1, 1, 0.9, 1, 1],
      transition: { 
        duration: 3.5,
        times: [0, 0.2, 0.4, 0.5, 1],
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="w-full h-full p-6 md:p-8 flex flex-col relative">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-slate-900">Set Your Budget & Timeline</h3>
      </div>

      <div className="space-y-6 max-w-sm mx-auto w-full">
        <div className="grid grid-cols-2 gap-3">
          {["$5K–$15K", "$15K–$30K", "$30K–$50K", "$50K+"].map((b) => (
            <div key={b} className={`p-3 rounded-lg border text-center text-sm font-bold transition-all duration-300 ${
              budget === b
                ? "bg-[#FF6A3D]/10 border-[#FF6A3D] text-[#FF6A3D]"
                : "bg-slate-50 border-slate-100 text-slate-500"
            }`}>
              {b}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          {["2–4 wks", "4–8 wks", "Flexible"].map((t) => (
            <div key={t} className="flex-1 p-2 rounded-lg border border-slate-100 bg-slate-50 text-center text-xs font-medium text-slate-400">
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex justify-center">
         <button className={`px-8 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
           isActive && budget ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-400"
         }`}>
           Finish
         </button>
      </div>

      {isActive && <Pointer variants={pointerVariants} animate="animate" />}
    </div>
  );
}

// --- Screen 3: Blueprint ---

export function ScreenBlueprintContent({ isActive }: { isActive: boolean }) {
  const pointerVariants = {
    initial: { x: 300, y: 300, opacity: 0 },
    animate: {
      opacity: [0, 1, 1, 0],
      x: [300, 280, 280, 280],
      y: [300, 320, 320, 320],
      scale: [1, 1, 0.9, 1],
      transition: { 
        duration: 3, 
        times: [0, 0.5, 0.6, 1],
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div className="w-full h-full p-6 md:p-8 flex flex-col relative">
      <div className="flex justify-between items-start mb-6">
        <div>
           <h3 className="text-xl font-bold text-slate-900">Project Blueprint</h3>
           <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-bold">
             <Check className="w-3 h-3" /> Budget Approved
           </div>
        </div>
        <div className="flex -space-x-2">
           {[1,2,3].map(i => (
             <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
           ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="w-24 h-3 bg-slate-200 rounded mb-2" />
          <div className="space-y-1.5">
            <div className="w-full h-2 bg-slate-100 rounded" />
            <div className="w-5/6 h-2 bg-slate-100 rounded" />
            <div className="w-4/6 h-2 bg-slate-100 rounded" />
          </div>
        </div>
        
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="w-24 h-3 bg-slate-200 rounded mb-2" />
          <div className="space-y-1.5">
             <div className="w-full h-2 bg-slate-100 rounded" />
             <div className="w-3/4 h-2 bg-slate-100 rounded" />
          </div>
        </div>
      </div>

      <div className="mt-auto flex justify-end">
        <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#FF6A3D] transition-colors">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {isActive && <Pointer variants={pointerVariants} animate="animate" />}
    </div>
  );
}

// --- Screen 4: Dashboard ---

export function ScreenDashboardContent({ isActive }: { isActive: boolean }) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setSelectedCard(2), 1500);
      return () => clearTimeout(timer);
    } else {
      setSelectedCard(null);
    }
  }, [isActive]);

  const pointerVariants = {
    initial: { x: 300, y: 100, opacity: 0 },
    animate: {
      opacity: [0, 1, 1, 0],
      x: [300, 200, 200, 300],
      y: [100, 200, 200, 100],
      scale: [1, 1, 0.9, 1],
      transition: { 
        duration: 3.5, 
        times: [0, 0.3, 0.4, 1],
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div className="w-full h-full flex relative bg-slate-50">
      {/* Sidebar */}
      <div className="w-16 bg-white border-r border-slate-100 flex flex-col items-center py-6 gap-6 z-10">
        <div className="p-2 bg-slate-900 text-white rounded-lg shadow-lg shadow-slate-900/20"><Home className="w-4 h-4" /></div>
        <div className="p-2 text-slate-300"><Folder className="w-4 h-4" /></div>
        <div className="p-2 text-slate-300"><Bot className="w-4 h-4" /></div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8">
         <div className="flex justify-between items-center mb-6">
           <h3 className="text-lg font-bold text-slate-900">Dashboard</h3>
           <div className="w-8 h-8 rounded-full bg-[#FF6A3D] shadow-lg shadow-[#FF6A3D]/20" />
         </div>

         <div className="grid grid-cols-2 gap-4">
           {[
             { icon: FileText, label: "Proposal", color: "bg-blue-100 text-blue-600" },
             { icon: Layout, label: "Wireframes", color: "bg-orange-100 text-orange-600" },
             { icon: Database, label: "Architecture", color: "bg-purple-100 text-purple-600" },
             { icon: ImageIcon, label: "Assets", color: "bg-green-100 text-green-600" },
           ].map((item, i) => (
             <div 
               key={i} 
               className={`p-4 bg-white rounded-xl border transition-all duration-300 flex flex-col gap-3 group hover:shadow-md ${
                 selectedCard === i 
                   ? "border-[#FF6A3D] shadow-md ring-1 ring-[#FF6A3D]" 
                   : "border-slate-100"
               }`}
             >
               <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}>
                 <item.icon className="w-5 h-5" />
               </div>
               <div className="text-xs font-bold text-slate-900">{item.label}</div>
             </div>
           ))}
         </div>
      </div>

      {isActive && <Pointer variants={pointerVariants} animate="animate" />}
    </div>
  );
}
