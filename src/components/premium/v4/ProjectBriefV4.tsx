import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function ProjectBriefV4() {
  const [step, setStep] = useState(1);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6">
              Create Your <br />
              <span className="text-[#FF6B2C]">AI Project Brief</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Tell us about your goals, and our system will generate a preliminary roadmap and cost estimate.
            </p>
            
            <div className="space-y-8">
               {[
                 { title: "Define Goals", active: step >= 1 },
                 { title: "Select Features", active: step >= 2 },
                 { title: "Team & Timeline", active: step >= 3 },
               ].map((s, i) => (
                 <div key={i} className="flex items-center gap-4">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                     s.active ? "border-[#FF6B2C] bg-[#FF6B2C] text-white" : "border-slate-200 text-slate-300"
                   }`}>
                     {s.active ? <CheckCircle2 className="w-6 h-6" /> : i + 1}
                   </div>
                   <div className={`text-lg font-bold ${s.active ? "text-[#00334F]" : "text-slate-300"}`}>
                     {s.title}
                   </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00334F] to-[#FF6B2C]" />
              
              <div className="mb-8">
                <label className="block text-sm font-bold text-[#00334F] mb-3">What are you building?</label>
                <div className="grid grid-cols-2 gap-3">
                  {["AI Agent", "SaaS Platform", "Internal Tool", "Automation"].map((opt) => (
                    <button key={opt} className="px-4 py-3 rounded-xl border border-slate-200 text-slate-600 hover:border-[#FF6B2C] hover:text-[#FF6B2C] hover:bg-[#FF6B2C]/5 transition-all text-sm font-medium text-left">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-[#00334F] mb-3">Project Description</label>
                <textarea 
                  className="w-full h-32 rounded-xl border border-slate-200 p-4 text-slate-600 focus:outline-none focus:border-[#FF6B2C] transition-colors resize-none"
                  placeholder="Describe your vision..."
                />
              </div>

              <button className="w-full py-4 rounded-xl bg-[#00334F] text-white font-bold hover:bg-[#004466] transition-colors flex items-center justify-center gap-2">
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
