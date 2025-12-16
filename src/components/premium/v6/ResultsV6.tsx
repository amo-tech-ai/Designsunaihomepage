import { motion } from 'motion/react';
import { Zap, TrendingUp, Clock } from 'lucide-react';

export function ResultsV6() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#00334F] mb-6">
            AI That Drives Measurable Results
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          
          {/* Chart 1: Time to Production */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-[#00334F] mb-8">Time to Production (Weeks)</h3>
             <div className="relative h-64 flex items-end gap-12 pl-12 border-l border-slate-100 border-b pb-4">
                
                {/* Y-Axis Labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-400 -translate-x-full pr-4 pb-4">
                  <span>30</span>
                  <span>15</span>
                  <span>0</span>
                </div>

                {/* Bar 1 */}
                <div className="flex-1 flex flex-col justify-end gap-2 group">
                   <motion.div 
                     initial={{ height: 0 }} whileInView={{ height: "80%" }} viewport={{ once: true }} transition={{ duration: 1 }}
                     className="w-full bg-slate-200 rounded-t-lg relative"
                   >
                     <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500">32w</div>
                   </motion.div>
                   <div className="text-center text-xs font-bold text-slate-400 uppercase tracking-wide">Traditional</div>
                </div>

                {/* Bar 2 */}
                <div className="flex-1 flex flex-col justify-end gap-2 group">
                   <motion.div 
                     initial={{ height: 0 }} whileInView={{ height: "20%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                     className="w-full bg-[#FF6A3D] rounded-t-lg relative shadow-lg shadow-[#FF6A3D]/20"
                   >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-[#FF6A3D]">8w</div>
                   </motion.div>
                   <div className="text-center text-xs font-bold text-[#00334F] uppercase tracking-wide">Sun AI</div>
                </div>

             </div>
          </div>

          {/* Chart 2: ROI Curve */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-[#00334F] mb-8">ROI Improvement</h3>
             <div className="relative h-64 border-l border-slate-100 border-b pl-4 pb-4 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                   {/* Grid lines */}
                   <line x1="0" y1="50" x2="400" y2="50" stroke="#f1f5f9" strokeDasharray="4 4" />
                   <line x1="0" y1="100" x2="400" y2="100" stroke="#f1f5f9" strokeDasharray="4 4" />
                   <line x1="0" y1="150" x2="400" y2="150" stroke="#f1f5f9" strokeDasharray="4 4" />

                   {/* Path */}
                   <motion.path 
                     d="M 0 180 C 100 180, 150 150, 200 100 C 250 50, 300 20, 400 10"
                     fill="none"
                     stroke="#00334F"
                     strokeWidth="3"
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5 }}
                   />
                   
                   {/* Area under curve */}
                   <motion.path
                     d="M 0 180 C 100 180, 150 150, 200 100 C 250 50, 300 20, 400 10 L 400 200 L 0 200 Z"
                     fill="url(#gradient)"
                     opacity="0.1"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 0.1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.5, duration: 1 }}
                   />
                   <defs>
                     <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="0%" stopColor="#00334F" />
                       <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                     </linearGradient>
                   </defs>
                </svg>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { value: "6x", label: "Faster Deployment", icon: Zap },
            { value: "35%", label: "Cost Efficiency", icon: TrendingUp },
            { value: "340%", label: "Productivity Lift", icon: Clock },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F0F9FF] flex items-center justify-center text-[#00334F]">
                <stat.icon className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00334F]">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
