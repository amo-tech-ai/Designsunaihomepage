import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function ProjectBriefV6() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-slate-100 shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-5 h-full">
            
            {/* Left: Info */}
            <div className="md:col-span-2 bg-[#FAFAFA] p-10 flex flex-col justify-between border-r border-slate-100">
              <div>
                <h3 className="text-2xl font-bold text-[#00334F] mb-4">Create your brief</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Tell us about your project goals and we'll generate a preliminary roadmap.
                </p>
                
                {/* Progress Ring */}
                <div className="flex items-center gap-3">
                   <div className="relative w-12 h-12">
                     <svg className="w-full h-full -rotate-90">
                       <circle cx="24" cy="24" r="20" stroke="#E2E8F0" strokeWidth="4" fill="none" />
                       <circle cx="24" cy="24" r="20" stroke="#FF6A3D" strokeWidth="4" fill="none" strokeDasharray="125" strokeDashoffset="100" strokeLinecap="round" />
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">25%</div>
                   </div>
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step 1 of 4</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:col-span-3 p-10">
               <div className="space-y-6">
                 <div>
                   <label className="block text-sm font-bold text-[#00334F] mb-2">Project Goal</label>
                   <input type="text" placeholder="e.g. Automate customer support" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-[#FF6A3D] transition-colors" />
                 </div>
                 
                 <div>
                   <label className="block text-sm font-bold text-[#00334F] mb-2">Description</label>
                   <textarea rows={3} placeholder="Describe your vision..." className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-[#FF6A3D] transition-colors resize-none" />
                 </div>

                 <button className="w-full py-4 bg-[#00334F] text-white font-bold rounded-xl hover:bg-[#004466] transition-all flex items-center justify-center gap-2">
                   Next Step <ArrowRight className="w-4 h-4" />
                 </button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
