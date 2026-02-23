import { motion, useScroll, useMotionValueEvent, useAnimationControls } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const steps = [
  {
    id: "discovery",
    number: "1",
    title: "Strategic Discovery",
    description: "We begin with a deep analysis of your business model, customer data, and competitive landscape to identify high-impact AI opportunities."
  },
  {
    id: "design",
    number: "2",
    title: "Solution Design",
    description: "Our team designs custom AI architectures that align with your brand standards, technical infrastructure, and business objectives."
  },
  {
    id: "development",
    number: "3",
    title: "Premium Development",
    description: "We build production-grade AI systems with enterprise security, scalability, and elegant user experiences that reflect your brand."
  },
  {
    id: "deployment",
    number: "4",
    title: "Deployment & Growth",
    description: "Launch with confidence. We handle deployment, training, optimization, and ongoing support to ensure sustained ROI."
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
          fill="#1A3A32" 
          opacity="0.9"
          style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }}
        />
      </svg>
    </motion.div>
  );
}

// Click Ripple Effect
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
      className="absolute w-24 h-24 rounded-full border-2 border-[#34C759] pointer-events-none"
      style={{
        left: stepIndex === 0 ? '108px' : stepIndex === 1 ? '188px' : stepIndex === 2 ? '88px' : '168px',
        top: stepIndex === 0 ? '68px' : stepIndex === 1 ? '88px' : stepIndex === 2 ? '108px' : '78px',
      }}
    />
  );
}

export function HowItWorksLuxury() {
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
    <section className="bg-[#FAF8F5] relative border-b border-[#E0E0DE]">
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
              <div className="mb-12 border-l-2 border-[#34C759] pl-6">
                <h4 className="text-[#1A3A32] font-bold uppercase tracking-widest text-[10px] mb-4">
                  How We Work
                </h4>
                <h2 
                  className="text-4xl lg:text-5xl font-normal text-[#1F2421] leading-tight"
                  style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}
                >
                  A proven process for <br />
                  enterprise AI transformation
                </h2>
              </div>

              {/* Step List - Active step changes */}
              <div className="space-y-8 border-l border-[#E0E0DE] pl-6">
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
                        layoutId="activeMarkerLuxury"
                        className="absolute -left-[27px] top-1 w-2 h-2 bg-[#34C759] rounded-sm"
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    )}
                    
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className={`text-sm font-medium transition-colors duration-200 ${
                        activeStepIndex === i ? "text-[#1A3A32]" : "text-[#D4D4D4]"
                      }`}>
                        {step.number}.
                      </span>
                      <h3 
                        className={`text-2xl transition-colors duration-200 ${
                          activeStepIndex === i ? "text-[#1F2421]" : "text-[#D4D4D4]"
                        }`}
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className={`text-sm leading-relaxed transition-all duration-200 ${
                      activeStepIndex === i 
                        ? "text-[#6B7370] max-h-32 opacity-100" 
                        : "text-[#D4D4D4] max-h-0 opacity-0 overflow-hidden"
                    }`}>
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
                <div 
                  className="relative rounded-2xl shadow-lg overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(40px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
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
                      
                      {/* Step 1: Strategic Discovery */}
                      {activeStepIndex === 0 && (
                        <div className="space-y-5">
                          <div>
                            <h3 className="text-base font-medium text-[#1F2421] mb-1">
                              AI Opportunity Assessment
                            </h3>
                            <p className="text-xs text-[#9E9E9E]">
                              Identifying high-impact automation areas
                            </p>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="p-4 bg-white/50 rounded-lg border border-[#E0E0DE]">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-[#1F2421]">Customer Support</span>
                                <span className="text-xs text-[#34C759] font-semibold">High Impact</span>
                              </div>
                              <div className="w-full bg-[#E0E0DE] rounded-full h-1.5">
                                <div className="bg-[#34C759] h-1.5 rounded-full" style={{ width: '85%' }}></div>
                              </div>
                            </div>

                            <div className="p-4 bg-white/50 rounded-lg border border-[#E0E0DE]">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-[#1F2421]">Lead Qualification</span>
                                <span className="text-xs text-[#34C759] font-semibold">High Impact</span>
                              </div>
                              <div className="w-full bg-[#E0E0DE] rounded-full h-1.5">
                                <div className="bg-[#34C759] h-1.5 rounded-full" style={{ width: '78%' }}></div>
                              </div>
                            </div>

                            <div className="p-4 bg-white/50 rounded-lg border border-[#E0E0DE]">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-[#1F2421]">Content Generation</span>
                                <span className="text-xs text-[#6B7370] font-semibold">Medium Impact</span>
                              </div>
                              <div className="w-full bg-[#E0E0DE] rounded-full h-1.5">
                                <div className="bg-[#6B7370] h-1.5 rounded-full" style={{ width: '62%' }}></div>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2">
                            <button className="w-full px-6 py-3 bg-[#1A3A32] text-white text-sm font-medium rounded-lg hover:bg-[#152E28] transition-all duration-300">
                              Generate Full Report
                            </button>
                            <p className="text-center text-[10px] text-[#9E9E9E] mt-2">
                              Analyzed 47 workflows across 8 departments
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Solution Design */}
                      {activeStepIndex === 1 && (
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-base font-medium text-[#1F2421] mb-1">
                              AI Architecture Blueprint
                            </h3>
                            <p className="text-xs text-[#9E9E9E]">
                              Custom solution design for your infrastructure
                            </p>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="p-3 bg-white/50 rounded-lg border border-[#E0E0DE]">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-[#34C759] rounded-full"></div>
                                <span className="text-xs font-medium text-[#1F2421]">Data Layer</span>
                              </div>
                              <p className="text-[10px] text-[#6B7370] ml-4">Vector DB + Embeddings Pipeline</p>
                            </div>

                            <div className="p-3 bg-white/50 rounded-lg border border-[#E0E0DE]">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-[#34C759] rounded-full"></div>
                                <span className="text-xs font-medium text-[#1F2421]">AI Models</span>
                              </div>
                              <p className="text-[10px] text-[#6B7370] ml-4">GPT-4 + Custom Fine-tuned Models</p>
                            </div>

                            <div className="p-3 bg-white/50 rounded-lg border border-[#E0E0DE]">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-[#34C759] rounded-full"></div>
                                <span className="text-xs font-medium text-[#1F2421]">Interface</span>
                              </div>
                              <p className="text-[10px] text-[#6B7370] ml-4">React Dashboard + API Integration</p>
                            </div>

                            <div className="p-3 bg-white/50 rounded-lg border border-[#E0E0DE]">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-[#6B7370] rounded-full"></div>
                                <span className="text-xs font-medium text-[#1F2421]">Security</span>
                              </div>
                              <p className="text-[10px] text-[#6B7370] ml-4">Enterprise SSO + Data Encryption</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Premium Development */}
                      {activeStepIndex === 2 && (
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-base font-medium text-[#1F2421] mb-1">
                              Development Sprint Progress
                            </h3>
                            <p className="text-xs text-[#9E9E9E]">
                              Building your custom AI solution
                            </p>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-[#1F2421]">Data Pipeline</span>
                              <span className="text-xs font-medium text-[#34C759]">Complete</span>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-xs text-[#1F2421]">Model Training</span>
                              <span className="text-xs font-medium text-[#34C759]">Complete</span>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-xs text-[#1F2421]">UI Development</span>
                              <span className="text-xs font-medium text-[#1A3A32]">In Progress (73%)</span>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-xs text-[#1F2421]">Testing & QA</span>
                              <span className="text-xs text-[#9E9E9E]">Scheduled</span>
                            </div>

                            <div className="mt-4 p-3 bg-[#E8F5E9] rounded-lg border border-[#34C759]/20">
                              <p className="text-[10px] text-[#1A3A32] font-medium">
                                ✓ Week 6 milestone reached — Ready for beta testing
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Deployment & Growth */}
                      {activeStepIndex === 3 && (
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-base font-medium text-[#1F2421] mb-1">
                              Performance Dashboard
                            </h3>
                            <p className="text-xs text-[#9E9E9E]">
                              Real-time system metrics and ROI tracking
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-white/50 rounded-lg border border-[#E0E0DE]">
                              <div className="text-2xl font-semibold text-[#1F2421]">98.7%</div>
                              <div className="text-[10px] text-[#6B7370]">Uptime</div>
                            </div>

                            <div className="p-3 bg-white/50 rounded-lg border border-[#E0E0DE]">
                              <div className="text-2xl font-semibold text-[#34C759]">-42%</div>
                              <div className="text-[10px] text-[#6B7370]">Support Costs</div>
                            </div>

                            <div className="p-3 bg-white/50 rounded-lg border border-[#E0E0DE]">
                              <div className="text-2xl font-semibold text-[#1F2421]">12.4k</div>
                              <div className="text-[10px] text-[#6B7370]">Tasks Automated</div>
                            </div>

                            <div className="p-3 bg-white/50 rounded-lg border border-[#E0E0DE]">
                              <div className="text-2xl font-semibold text-[#34C759]">+127%</div>
                              <div className="text-[10px] text-[#6B7370]">Efficiency Gain</div>
                            </div>
                          </div>

                          <div className="pt-2">
                            <button className="w-full px-6 py-3 bg-[#1A3A32] text-white text-sm font-medium rounded-lg hover:bg-[#152E28] transition-all duration-300">
                              View Full Analytics
                            </button>
                          </div>
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
