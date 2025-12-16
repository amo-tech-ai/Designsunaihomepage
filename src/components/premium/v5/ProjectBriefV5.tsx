import { motion } from 'motion/react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function ProjectBriefV5() {
  const [activeField, setActiveField] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Intro */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A3D]/10 text-[#FF6A3D] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3" />
              Interactive Builder
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6">
              Create Your <br />
              <span className="text-[#FF6A3D]">AI Project Brief</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-md">
              Complete the form to receive an instant preliminary roadmap and technology recommendation.
            </p>

            {/* Progress Ring */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                 <svg className="w-full h-full transform -rotate-90">
                   <circle cx="32" cy="32" r="28" stroke="#F1F5F9" strokeWidth="4" fill="none" />
                   <motion.circle 
                     cx="32" cy="32" r="28" 
                     stroke="#FF6A3D" strokeWidth="4" fill="none" 
                     strokeDasharray="175"
                     strokeDashoffset="140" // 20% complete
                     strokeLinecap="round"
                   />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#00334F]">
                   20%
                 </div>
              </div>
              <span className="text-sm font-medium text-slate-500">Brief Completion</span>
            </div>
          </div>

          {/* Right: Interactive Form Cards */}
          <div className="relative">
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10" />

            <div className="space-y-4">
              {[
                { label: "Project Type", placeholder: "Select type..." },
                { label: "Primary Use Case", placeholder: "Describe usage..." },
                { label: "Target Timeline", placeholder: "Select timeline..." },
                { label: "Team Composition", placeholder: "Engineers needed..." }
              ].map((field, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onHoverStart={() => setActiveField(i)}
                  onHoverEnd={() => setActiveField(null)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    activeField === i 
                      ? "bg-white border-[#FF6A3D] shadow-lg scale-[1.02]" 
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{field.label}</div>
                      <div className="text-[#00334F] font-medium">{field.placeholder}</div>
                    </div>
                    {activeField === i && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <div className="w-8 h-8 rounded-full bg-[#FF6A3D]/10 flex items-center justify-center text-[#FF6A3D]">
                           <ArrowRight className="w-4 h-4" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="mt-8 w-full py-4 rounded-xl bg-[#00334F] text-white font-bold hover:bg-[#004466] shadow-xl shadow-[#00334F]/10 transition-all flex items-center justify-center gap-2">
              Start Building Brief
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
