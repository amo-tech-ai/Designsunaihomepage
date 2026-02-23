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
      // Reset and start animation sequence
      await cursorControls.start({ opacity: 0, scale: 0.8 });
      
      // Appear
      await cursorControls.start({ 
        opacity: 0.9, 
        scale: 1,
        transition: { duration: 0.2 }
      });

      // Move to target based on step
      if (stepIndex === 0) {
        // Move to AI Product chip
        await cursorControls.start({
          x: 120,
          y: 80,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        });
      } else if (stepIndex === 1) {
        // Move to slider
        await cursorControls.start({
          x: 200,
          y: 100,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        });
      } else if (stepIndex === 2) {
        // Move to blueprint card
        await cursorControls.start({
          x: 100,
          y: 120,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        });
      } else if (stepIndex === 3) {
        // Move to progress bar
        await cursorControls.start({
          x: 180,
          y: 90,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        });
      }

      // Hover pause
      await new Promise(resolve => setTimeout(resolve, 300));

      // Click animation (scale down)
      await cursorControls.start({
        scale: 0.95,
        transition: { duration: 0.1 }
      });

      // Scale back up
      await cursorControls.start({
        scale: 1,
        transition: { duration: 0.2 }
      });

      // Pause after click
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
      className="absolute w-24 h-24 rounded-full border-2 border-[#F59E0B] pointer-events-none"
      style={{
        left: stepIndex === 0 ? '108px' : stepIndex === 1 ? '188px' : stepIndex === 2 ? '88px' : '168px',
        top: stepIndex === 0 ? '68px' : stepIndex === 1 ? '88px' : stepIndex === 2 ? '108px' : '78px',
      }}
    />
  );
}

export function HowItWorksV11Improved() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll position to step index (0-25% = 0, 25-50% = 1, 50-75% = 2, 75-100% = 3)
    const index = Math.min(3, Math.floor(latest * 4));
    setActiveStepIndex(index);
  });

  return (
    <section className="bg-white relative border-b border-[#EFE9E4]">
      <div 
        ref={containerRef} 
        className="relative"
        style={{ height: '400vh' }} // 4 viewport heights for scroll
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Column: Sticky Text (40% width) */}
            <div className="lg:w-2/5 flex flex-col justify-center">
              
              {/* Eyebrow and Headline - Static */}
              <div className="mb-12 border-l-2 border-[#FCD34D] pl-6">
                <h4 className="text-[#B45309] font-bold uppercase tracking-widest text-[10px] mb-4">
                  How It Works
                </h4>
                <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight">
                  The smarter way to <br />
                  build your startup
                </h2>
              </div>

              {/* Step List - Active step changes */}
              <div className="space-y-8 border-l border-[#D1C7BD] pl-6">
                {steps.map((step, i) => (
                  <div 
                    key={step.id}
                    className={`transition-all duration-200 relative ${
                      activeStepIndex === i ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {/* Orange Square Marker for Active Step */}
                    {activeStepIndex === i && (
                      <motion.div 
                        layoutId="activeMarker"
                        className="absolute -left-[27px] top-1 w-2 h-2 bg-[#F59E0B] rounded-sm"
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    )}
                    
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className={`text-sm font-medium transition-colors duration-200 ${
                        activeStepIndex === i ? "text-[#1A1A1A]" : "text-[#CCCCCC]"
                      }`}>
                        {step.number}.
                      </span>
                      <h3 className={`text-2xl font-serif transition-colors duration-200 ${
                        activeStepIndex === i ? "text-[#1A1A1A]" : "text-[#CCCCCC]"
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className={`text-sm leading-relaxed transition-all duration-200 ${
                      activeStepIndex === i 
                        ? "text-[#666666] max-h-32 opacity-100" 
                        : "text-[#CCCCCC] max-h-0 opacity-0 overflow-hidden"
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
                <div className="relative bg-white border border-[#E5E5E5] rounded-2xl shadow-lg overflow-hidden">
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
                            <h3 className="text-base font-medium text-[#262626] mb-1">
                              Startup Profile Wizard
                            </h3>
                            <p className="text-xs text-[#888888]">
                              Build your investor-ready profile
                            </p>
                          </div>
                          
                          {/* Quick Inputs */}
                          <div className="space-y-3">
                            <div>
                              <label className="text-[10px] uppercase tracking-widest text-[#888888] font-bold block mb-1.5">
                                Startup Name
                              </label>
                              <input 
                                type="text" 
                                value="Acme AI" 
                                readOnly
                                className="w-full px-3 py-2 border border-[#E5E5E5] rounded-lg text-sm text-[#262626] bg-white"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] uppercase tracking-widest text-[#888888] font-bold block mb-1.5">
                                Website URL
                              </label>
                              <input 
                                type="text" 
                                value="acme.ai" 
                                readOnly
                                className="w-full px-3 py-2 border border-[#E5E5E5] rounded-lg text-sm text-[#262626] bg-white"
                              />
                            </div>
                          </div>

                          {/* Stage Chips */}
                          <div>
                            <label className="text-[10px] uppercase tracking-widest text-[#888888] font-bold block mb-1.5">
                              Stage
                            </label>
                            <div className="flex gap-2">
                              <button className="px-3 py-1.5 text-xs border border-[#D4D4D8] rounded-lg text-[#404040] bg-white">
                                Pre-seed
                              </button>
                              <button className="px-3 py-1.5 text-xs bg-[#F59E0B] text-white font-semibold rounded-lg">
                                Seed
                              </button>
                              <button className="px-3 py-1.5 text-xs border border-[#D4D4D8] rounded-lg text-[#404040] bg-white">
                                Series A
                              </button>
                            </div>
                          </div>

                          {/* Industry Chips */}
                          <div>
                            <label className="text-[10px] uppercase tracking-widest text-[#888888] font-bold block mb-1.5">
                              Industry
                            </label>
                            <div className="flex gap-2 flex-wrap">
                              <button className="px-3 py-1.5 text-xs bg-[#F59E0B] text-white font-semibold rounded-lg">
                                AI SaaS
                              </button>
                              <button className="px-3 py-1.5 text-xs border border-[#D4D4D8] rounded-lg text-[#404040] bg-white">
                                Marketplace
                              </button>
                              <button className="px-3 py-1.5 text-xs border border-[#D4D4D8] rounded-lg text-[#404040] bg-white">
                                Fintech
                              </button>
                              <button className="px-3 py-1.5 text-xs border border-[#D4D4D8] rounded-lg text-[#404040] bg-white">
                                DevTools
                              </button>
                            </div>
                          </div>

                          {/* Goal */}
                          <div>
                            <label className="text-[10px] uppercase tracking-widest text-[#888888] font-bold block mb-1.5">
                              Goal
                            </label>
                            <div className="flex gap-2 flex-wrap">
                              <button className="px-3 py-1.5 text-xs bg-[#F59E0B] text-white font-semibold rounded-lg">
                                Raise funding
                              </button>
                              <button className="px-3 py-1.5 text-xs border border-[#D4D4D8] rounded-lg text-[#404040] bg-white">
                                Get customers
                              </button>
                              <button className="px-3 py-1.5 text-xs border border-[#D4D4D8] rounded-lg text-[#404040] bg-white">
                                Validate idea
                              </button>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="pt-2">
                            <button className="w-full px-6 py-3 bg-[#1E3A8A] text-white text-sm font-medium rounded-lg hover:bg-[#1E40AF] transition-colors">
                              Analyze My Startup
                            </button>
                            <p className="text-center text-[10px] text-[#888888] mt-2">
                              Takes ~2 minutes. Uses your website + public sources.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Step 2: AI Readiness Analysis */}
                      {activeStepIndex === 1 && (
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-base font-medium text-[#262626] mb-1">
                              AI Readiness Report
                            </h3>
                            <p className="text-xs text-[#888888]">
                              What's strong, what's missing, what to do next
                            </p>
                          </div>

                          {/* Readiness Score */}
                          <div className="bg-gradient-to-br from-[#EFF6FF] to-white border border-[#93C5FD] rounded-lg p-4 text-center">
                            <div className="text-[10px] uppercase tracking-widest text-[#3B82F6] font-bold mb-2">
                              Readiness Score
                            </div>
                            <div className="text-4xl font-bold text-[#1A1A1A] mb-1">
                              74 <span className="text-xl text-[#888888]">/ 100</span>
                            </div>
                            <div className="text-xs text-[#666666]">
                              Seed-stage benchmark: 70–85
                            </div>
                          </div>

                          {/* 3 Insight Cards */}
                          <div className="space-y-2">
                            <div className="flex items-start gap-2 p-2.5 border border-[#D1FAE5] bg-[#ECFDF5] rounded-lg">
                              <div className="text-sm mt-0.5">✅</div>
                              <div className="flex-1">
                                <div className="text-xs font-semibold text-[#065F46]">Story clarity: Strong</div>
                                <div className="text-[10px] text-[#059669]">Problem + solution are clear. Keep this framing.</div>
                              </div>
                            </div>

                            <div className="flex items-start gap-2 p-2.5 border border-[#FED7AA] bg-[#FFF7ED] rounded-lg">
                              <div className="text-sm mt-0.5">⚠️</div>
                              <div className="flex-1">
                                <div className="text-xs font-semibold text-[#92400E]">Market sizing: Missing</div>
                                <div className="text-[10px] text-[#C2410C]">Add TAM/SAM/SOM + 2 citations.</div>
                              </div>
                            </div>

                            <div className="flex items-start gap-2 p-2.5 border border-[#FED7AA] bg-[#FFF7ED] rounded-lg">
                              <div className="text-sm mt-0.5">⚠️</div>
                              <div className="flex-1">
                                <div className="text-xs font-semibold text-[#92400E]">Traction proof: Weak</div>
                                <div className="text-[10px] text-[#C2410C]">Add one KPI trend + customer proof point.</div>
                              </div>
                            </div>
                          </div>

                          {/* Next Steps Mini List */}
                          <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg p-3">
                            <div className="text-[10px] uppercase tracking-widest text-[#888888] font-bold mb-2">
                              Next Steps
                            </div>
                            <div className="space-y-1 text-xs text-[#404040]">
                              <div>• Generate pitch deck + one-pager</div>
                              <div>• Create investor task plan</div>
                            </div>
                          </div>

                          {/* CTA */}
                          <button className="w-full px-6 py-2.5 bg-[#F59E0B] text-white text-sm font-medium rounded-lg hover:bg-[#EA580C] transition-colors">
                            Generate Materials
                          </button>
                        </div>
                      )}

                      {/* Step 3: Generate Materials */}
                      {activeStepIndex === 2 && (
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-base font-medium text-[#262626] mb-1">
                              Generate Investor Materials
                            </h3>
                            <p className="text-xs text-[#888888]">
                              Pick what you need right now
                            </p>
                          </div>

                          {/* Document Toggles */}
                          <div>
                            <label className="text-[10px] uppercase tracking-widest text-[#888888] font-bold block mb-2">
                              Documents
                            </label>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 p-2 border border-[#D1FAE5] bg-[#ECFDF5] rounded-lg">
                                <div className="text-sm">✅</div>
                                <span className="flex-1 text-sm font-medium text-[#065F46]">Pitch Deck (12 slides)</span>
                              </div>
                              <div className="flex items-center gap-2 p-2 border border-[#D1FAE5] bg-[#ECFDF5] rounded-lg">
                                <div className="text-sm">✅</div>
                                <span className="flex-1 text-sm font-medium text-[#065F46]">One-Pager</span>
                              </div>
                              <div className="flex items-center gap-2 p-2 border border-[#E5E5E5] bg-white rounded-lg">
                                <div className="text-sm">⬜</div>
                                <span className="flex-1 text-sm text-[#888888]">GTM Strategy</span>
                              </div>
                              <div className="flex items-center gap-2 p-2 border border-[#E5E5E5] bg-white rounded-lg">
                                <div className="text-sm">⬜</div>
                                <span className="flex-1 text-sm text-[#888888]">Market Research</span>
                              </div>
                            </div>
                          </div>

                          {/* Template Selector */}
                          <div>
                            <label className="text-[10px] uppercase tracking-widest text-[#888888] font-bold block mb-1.5">
                              Template
                            </label>
                            <div className="flex gap-2">
                              <button className="px-3 py-1.5 text-xs bg-[#F59E0B] text-white font-semibold rounded-lg">
                                YC Seed
                              </button>
                              <button className="px-3 py-1.5 text-xs border border-[#D4D4D8] rounded-lg text-[#404040] bg-white">
                                Sequoia Story
                              </button>
                              <button className="px-3 py-1.5 text-xs border border-[#D4D4D8] rounded-lg text-[#404040] bg-white">
                                Minimal Clean
                              </button>
                            </div>
                          </div>

                          {/* Quality Options */}
                          <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg p-3">
                            <div className="space-y-1.5 text-xs">
                              <div className="flex items-center gap-2">
                                <input type="checkbox" checked readOnly className="w-3 h-3" />
                                <span className="text-[#404040]">Use real market citations</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" checked readOnly className="w-3 h-3" />
                                <span className="text-[#404040]">Match all docs to the same story</span>
                              </div>
                            </div>
                          </div>

                          {/* Generation Status */}
                          <div className="bg-gradient-to-r from-[#EFF6FF] to-[#FFF7ED] border border-[#93C5FD] rounded-lg p-3">
                            <div className="text-xs font-medium text-[#1A1A1A] mb-1">
                              Generating… Slide 4/12 (Market)
                            </div>
                            <div className="text-[10px] text-[#666666]">
                              Estimated: 45 seconds
                            </div>
                            <div className="mt-2 h-1 bg-white rounded-full overflow-hidden">
                              <div className="h-1 bg-[#3B82F6] rounded-full" style={{ width: '33%' }}></div>
                            </div>
                          </div>

                          {/* CTA */}
                          <button className="w-full px-6 py-2.5 bg-[#F59E0B] text-white text-sm font-medium rounded-lg hover:bg-[#EA580C] transition-colors">
                            Open Editor
                          </button>
                        </div>
                      )}

                      {/* Step 4: Daily Execution Dashboard */}
                      {activeStepIndex === 3 && (
                        <div className="space-y-3.5">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-base font-medium text-[#262626]">
                                Today
                              </h3>
                            </div>
                            <span className="px-2 py-1 bg-[#10B981] text-white text-[9px] uppercase tracking-wide rounded-full flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                              Live Insights
                            </span>
                          </div>

                          {/* Top 3 Priorities */}
                          <div>
                            <div className="text-[10px] uppercase tracking-widest text-[#888888] font-bold mb-2">
                              Top 3 Priorities
                            </div>
                            <div className="space-y-1.5">
                              <div className="bg-[#FFF7ED] border border-[#FDBA74] rounded-lg p-2.5">
                                <div className="text-xs font-semibold text-[#92400E] mb-0.5">
                                  1. Send deck to 3 warm intros
                                </div>
                                <div className="text-[10px] text-[#C2410C]">
                                  Reason: momentum window (48 hrs).
                                </div>
                              </div>

                              <div className="bg-white border border-[#E5E5E5] rounded-lg p-2.5">
                                <div className="text-xs font-semibold text-[#262626] mb-0.5">
                                  2. Add 10 target investors
                                </div>
                                <div className="text-[10px] text-[#666666]">
                                  Filter: Seed / AI / US + LatAm.
                                </div>
                              </div>

                              <div className="bg-white border border-[#E5E5E5] rounded-lg p-2.5">
                                <div className="text-xs font-semibold text-[#262626] mb-0.5">
                                  3. Fix 2 story gaps
                                </div>
                                <div className="text-[10px] text-[#666666]">
                                  Market sizing + traction proof.
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Mini KPI Row */}
                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg p-2 text-center">
                              <div className="text-lg font-bold text-[#1A1A1A]">6</div>
                              <div className="text-[9px] uppercase tracking-wide text-[#888888]">Pipeline</div>
                            </div>
                            <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg p-2 text-center">
                              <div className="text-lg font-bold text-[#1A1A1A]">4</div>
                              <div className="text-[9px] uppercase tracking-wide text-[#888888]">Tasks Due</div>
                            </div>
                            <div className="bg-[#FFF1F2] border border-[#FECACA] rounded-lg p-2 text-center">
                              <div className="text-lg font-bold text-[#DC2626]">⚠️</div>
                              <div className="text-[9px] uppercase tracking-wide text-[#B91C1C]">Risk</div>
                            </div>
                          </div>

                          {/* Risk Detail */}
                          <div className="bg-[#FFF1F2] border border-[#FECACA] rounded-lg p-2.5">
                            <div className="text-xs font-semibold text-[#991B1B]">
                              No meeting booked this week
                            </div>
                          </div>

                          {/* Next Milestone Card */}
                          <div className="bg-[#EFF6FF] border border-[#93C5FD] rounded-lg p-3">
                            <div className="text-[10px] uppercase tracking-widest text-[#3B82F6] font-bold mb-1.5">
                              Next Milestone
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="text-base">📅</div>
                              <div>
                                <div className="text-sm font-semibold text-[#1A1A1A]">
                                  Investor Meetings Week
                                </div>
                                <div className="text-xs text-[#666666]">
                                  Book 2 calls in 5 days
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    </motion.div>
                  </div>
                </div>

                {/* Bottom Progress Indicators (Outside Card) */}
                <div className="flex gap-3 justify-center mt-8">
                  {[0, 1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className={`h-1 transition-all duration-300 ${
                        activeStepIndex === i 
                          ? "w-12 bg-[#F59E0B]" 
                          : "w-1 bg-[#D1C7BD]"
                      }`}
                    />
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}