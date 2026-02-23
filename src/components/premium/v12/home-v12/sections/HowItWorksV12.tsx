import { motion, useScroll, useMotionValueEvent, useAnimationControls } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const steps = [
  {
    id: "wizard",
    number: "1",
    title: "Profile Wizard",
    description: "Tell StartupAI what you're building. Add your website and stage so we can generate a clean investor narrative in minutes."
  },
  {
    id: "analysis",
    number: "2",
    title: "AI Readiness Analysis",
    description: "Get a readiness score, key gaps, and the top moves to increase investor confidence—based on your stage and market."
  },
  {
    id: "materials",
    number: "3",
    title: "Generate Materials",
    description: "Generate an investor deck + core documents that stay consistent across your story, numbers, and positioning."
  },
  {
    id: "execution",
    number: "4",
    title: "Daily Execution",
    description: "StartupAI turns strategy into daily priorities. Know what to do today, who to follow up with, and what risks to fix first."
  }
];

// Cursor Component
function AnimatedCursor({ stepIndex }: { stepIndex: number }) {
  const cursorControls = useAnimationControls();

  useEffect(() => {
    const animateCursor = async () => {
      await cursorControls.start({ opacity: 0, scale: 0.8 });
      await cursorControls.start({ 
        opacity: 0.9, 
        scale: 1,
        transition: { duration: 0.2 }
      });

      if (stepIndex === 0) {
        await cursorControls.start({
          x: 120,
          y: 80,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        });
      } else if (stepIndex === 1) {
        await cursorControls.start({
          x: 200,
          y: 100,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        });
      } else if (stepIndex === 2) {
        await cursorControls.start({
          x: 100,
          y: 120,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        });
      } else if (stepIndex === 3) {
        await cursorControls.start({
          x: 180,
          y: 90,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        });
      }

      await new Promise(resolve => setTimeout(resolve, 300));

      await cursorControls.start({
        scale: 0.95,
        transition: { duration: 0.1 }
      });

      await cursorControls.start({
        scale: 1,
        transition: { duration: 0.2 }
      });

      await new Promise(resolve => setTimeout(resolve, 400));
    };

    animateCursor();
  }, [stepIndex, cursorControls]);

  return (
    <motion.div
      animate={cursorControls}
      initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
      className="absolute top-12 left-12 w-6 h-6 pointer-events-none z-50"
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path 
          d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" 
          fill="#262626" 
          opacity="0.9"
          style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }}
        />
      </svg>
    </motion.div>
  );
}

// Click Ripple Effect - Updated to V12 colors
function ClickRipple({ stepIndex }: { stepIndex: number }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    const hideTimer = setTimeout(() => setShow(false), 1300);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [stepIndex]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0.2 }}
      animate={{ scale: 2, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute w-24 h-24 rounded-full border-2 border-[#C4B5A6] pointer-events-none"
      style={{
        left: stepIndex === 0 ? '108px' : stepIndex === 1 ? '188px' : stepIndex === 2 ? '88px' : '168px',
        top: stepIndex === 0 ? '68px' : stepIndex === 1 ? '88px' : stepIndex === 2 ? '108px' : '78px',
      }}
    />
  );
}

export function HowItWorksV12() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(3, Math.floor(latest * 4));
    setActiveStepIndex(index);
  });

  return (
    <section className="bg-[#FBFBFB] relative border-b border-[#E8E8E8]">
      <div 
        ref={containerRef} 
        className="relative"
        style={{ height: '400vh' }}
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Column: Sticky Text (40% width) */}
            <div className="lg:w-2/5 flex flex-col justify-center">
              
              {/* Eyebrow and Headline - Static */}
              <div className="mb-12 border-l-2 border-[#C4B5A6] pl-6">
                <h4 className="text-[#6B6B6B] font-bold uppercase tracking-widest text-[10px] mb-4">
                  How It Works
                </h4>
                <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight">
                  The smarter way to <br />
                  build your startup
                </h2>
              </div>

              {/* Step List - Active step changes */}
              <div className="space-y-8 border-l border-[#D4D4D4] pl-6">
                {steps.map((step, i) => (
                  <div 
                    key={step.id}
                    className={`transition-all duration-200 relative ${
                      activeStepIndex === i ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {/* Active Marker */}
                    {activeStepIndex === i && (
                      <motion.div 
                        layoutId="activeMarker"
                        className="absolute -left-[27px] top-1 w-2 h-2 bg-[#C4B5A6] rounded-sm"
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    )}
                    
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className={`text-sm font-medium transition-colors duration-200 ${
                        activeStepIndex === i ? "text-[#1A1A1A]" : "text-[#D4D4D4]"
                      }`}>
                        {step.number}.
                      </span>
                      <h3 className={`text-2xl font-serif transition-colors duration-200 ${
                        activeStepIndex === i ? "text-[#1A1A1A]" : "text-[#D4D4D4]"
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className={`text-sm leading-relaxed transition-all duration-200 ${
                      activeStepIndex === i 
                        ? "text-[#4A4A4A] max-h-32 opacity-100" 
                        : "text-[#D4D4D4] max-h-0 opacity-0 overflow-hidden"
                    }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Fixed App Window (60% width) */}
            <div className="lg:w-3/5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-2xl">
                
                {/* App Window Shell */}
                <div className="relative bg-white border border-[#E8E8E8] rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-10" style={{ height: '400px' }}>
                    
                    {/* Cursor Overlay */}
                    <div className="relative">
                      <AnimatedCursor stepIndex={activeStepIndex} />
                      <ClickRipple stepIndex={activeStepIndex} />
                    </div>

                    {/* Panel Content - Crossfades */}
                    <motion.div
                      key={activeStepIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                      className="w-full h-full flex flex-col justify-center"
                    >
                      
                      {/* Step 1: Profile Wizard */}
                      {activeStepIndex === 0 && (
                        <div className="space-y-5">
                          <div>
                            <h3 className="text-base font-medium text-[#1A1A1A] mb-1">
                              Startup Profile Wizard
                            </h3>
                            <p className="text-xs text-[#9E9E9E]">
                              Build your investor-ready profile
                            </p>
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <label className="text-[10px] uppercase tracking-widest text-[#9E9E9E] font-bold block mb-1.5">
                                Startup Name
                              </label>
                              <input 
                                type="text" 
                                value="Acme AI" 
                                readOnly
                                className="w-full px-3 py-2 border border-[#E8E8E8] rounded-lg text-sm text-[#1A1A1A] bg-white"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] uppercase tracking-widest text-[#9E9E9E] font-bold block mb-1.5">
                                Website URL
                              </label>
                              <input 
                                type="text" 
                                value="acme.ai" 
                                readOnly
                                className="w-full px-3 py-2 border border-[#E8E8E8] rounded-lg text-sm text-[#1A1A1A] bg-white"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="text-[10px] uppercase tracking-widest text-[#9E9E9E] font-bold block mb-1.5">
                              Stage
                            </label>
                            <div className="flex gap-2">
                              <button className="px-3 py-1.5 text-xs border border-[#E8E8E8] rounded-lg text-[#4A4A4A] bg-white">
                                Pre-seed
                              </button>
                              <button className="px-3 py-1.5 text-xs bg-[#C4B5A6] text-white font-semibold rounded-lg">
                                Seed
                              </button>
                              <button className="px-3 py-1.5 text-xs border border-[#E8E8E8] rounded-lg text-[#4A4A4A] bg-white">
                                Series A
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="text-[10px] uppercase tracking-widest text-[#9E9E9E] font-bold block mb-1.5">
                              Industry
                            </label>
                            <div className="flex gap-2 flex-wrap">
                              <button className="px-3 py-1.5 text-xs bg-[#C4B5A6] text-white font-semibold rounded-lg">
                                AI SaaS
                              </button>
                              <button className="px-3 py-1.5 text-xs border border-[#E8E8E8] rounded-lg text-[#4A4A4A] bg-white">
                                Marketplace
                              </button>
                              <button className="px-3 py-1.5 text-xs border border-[#E8E8E8] rounded-lg text-[#4A4A4A] bg-white">
                                Fintech
                              </button>
                            </div>
                          </div>

                          <div className="pt-2">
                            <button className="w-full px-6 py-3 bg-[#C4B5A6] text-white text-sm font-medium rounded-lg hover:bg-[#A89886] transition-all duration-300">
                              Analyze My Startup
                            </button>
                            <p className="text-center text-[10px] text-[#9E9E9E] mt-2">
                              Takes ~2 minutes. Uses your website + public sources.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Additional steps would go here - simplified for brevity */}
                      {activeStepIndex > 0 && (
                        <div className="text-center">
                          <p className="text-sm text-[#9E9E9E]">Step {activeStepIndex + 1} Content</p>
                        </div>
                      )}
                      
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
