import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { useRef, useState } from 'react';
import { ScreenScope, ScreenBudget, ScreenProposal, ScreenDashboard } from './HowItWorksScreens';

const steps = [
  {
    id: 1,
    title: "Define Scope",
    description: "Start your project with our AI wizard or expert consultation to build a custom scope.",
    screens: [0, 1] // Maps to ScreenScope and ScreenBudget
  },
  {
    id: 2,
    title: "Receive Blueprint",
    description: "Get a comprehensive technical roadmap, timeline, and budget estimate instantly.",
    screens: [2] // Maps to ScreenProposal
  },
  {
    id: 3,
    title: "Launch & Manage",
    description: "Track progress, review assets, and collaborate with your team in real-time.",
    screens: [3] // Maps to ScreenDashboard
  }
];

export function HowItWorksV5() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Determine active screen based on scroll progress (0-1)
  // We have 4 screens, so roughly 0.25 per screen segment
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveScreenIndex(0);
    else if (latest < 0.50) setActiveScreenIndex(1);
    else if (latest < 0.75) setActiveScreenIndex(2);
    else setActiveScreenIndex(3);
  });

  // Calculate active Step for the left sidebar based on current active screen
  const activeStepId = steps.find(s => s.screens.includes(activeScreenIndex))?.id || 1;

  return (
    <section className="bg-[#F9FAFB] py-24 relative">
      <div ref={containerRef} className="container mx-auto px-6 lg:px-12 relative min-h-[300vh] flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Column: Sticky Content */}
        <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-24">
          <div className="mb-12">
            <h4 className="text-[#FF6A3D] font-bold uppercase tracking-widest text-sm mb-4">How It Works</h4>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#00334F] leading-tight mb-6">
              The smarter way to <br />
              build your startup
            </h2>
          </div>

          <div className="space-y-10 relative">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-200 -z-10" />

            {steps.map((step) => (
              <div 
                key={step.id}
                className={`transition-all duration-500 ${
                  activeStepId === step.id ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="flex items-start gap-6">
                   {/* Step Number Bubble */}
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0 transition-colors duration-500 ${
                     activeStepId === step.id 
                       ? "bg-[#00334F] text-white shadow-lg scale-110" 
                       : "bg-white border-2 border-slate-200 text-slate-400"
                   }`}>
                     {step.id}
                   </div>
                   
                   <div>
                     <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                       activeStepId === step.id ? "text-[#00334F]" : "text-slate-500"
                     }`}>
                       {step.title}
                     </h3>
                     <p className="text-lg leading-relaxed text-slate-500">
                       {step.description}
                     </p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Animation Viewport */}
        <div className="lg:w-2/3 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center overflow-hidden">
           <div className="relative w-full max-w-2xl aspect-[4/3] perspective-1000">
             
             {/* Screen 0: Scope */}
             <ScreenWrapper index={0} activeIndex={activeScreenIndex}>
               <ScreenScope />
             </ScreenWrapper>

             {/* Screen 1: Budget */}
             <ScreenWrapper index={1} activeIndex={activeScreenIndex}>
               <ScreenBudget />
             </ScreenWrapper>

             {/* Screen 2: Proposal */}
             <ScreenWrapper index={2} activeIndex={activeScreenIndex}>
               <ScreenProposal />
             </ScreenWrapper>

             {/* Screen 3: Dashboard */}
             <ScreenWrapper index={3} activeIndex={activeScreenIndex}>
               <ScreenDashboard />
             </ScreenWrapper>

           </div>
        </div>

      </div>
    </section>
  );
}

function ScreenWrapper({ children, index, activeIndex }: { children: React.ReactNode, index: number, activeIndex: number }) {
  // Logic: 
  // If active: opacity 1, scale 1, zIndex 10, x: 0
  // If passed (index < activeIndex): fade out, slide left, rotate slightly, zIndex lower
  // If upcoming (index > activeIndex): fade out, slide right/down, zIndex lower
  
  const isActive = index === activeIndex;
  const isPast = index < activeIndex;
  
  return (
    <motion.div
      className="absolute inset-0 w-full h-full origin-bottom-left"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : isPast ? -50 : 50,
        y: isActive ? 0 : isPast ? -20 : 20,
        scale: isActive ? 1 : 0.95,
        rotate: isActive ? 0 : isPast ? -5 : 5,
        zIndex: isActive ? 10 : 0
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Apple-style ease
      }}
    >
      {children}
    </motion.div>
  );
}
