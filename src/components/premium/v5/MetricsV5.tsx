import { motion } from 'motion/react';
import { Zap, TrendingUp, Clock, ArrowUpRight } from 'lucide-react';

export function MetricsV5() {
  return (
    <section className="py-24 lg:py-32 bg-[#F6F7F9]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6"
          >
            AI That Delivers <br />
            <span className="text-[#FF6A3D]">Measurable Impact</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Charts & Graphs */}
          <div className="space-y-8">
            {/* Chart 1: Time to Production */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-[#00334F]">Time to Production</h3>
                <span className="text-sm text-slate-400">Weeks</span>
              </div>
              
              <div className="space-y-6">
                 <div>
                   <div className="flex justify-between text-sm mb-2 text-slate-500">
                     <span>Traditional Development</span>
                     <span>32 Weeks</span>
                   </div>
                   <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-slate-300 rounded-full"
                      />
                   </div>
                 </div>

                 <div>
                   <div className="flex justify-between text-sm mb-2 text-[#00334F] font-semibold">
                     <span>Sun AI Platform</span>
                     <span className="text-[#FF6A3D]">8 Weeks</span>
                   </div>
                   <div className="h-3 bg-[#FF6A3D]/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "25%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-[#FF6A3D] rounded-full"
                      />
                   </div>
                 </div>
              </div>
            </motion.div>

            {/* Chart 2: AI Reliability Curve */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200"
            >
               <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-[#00334F]">System Reliability</h3>
                 <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                   <ArrowUpRight className="w-3 h-3" /> +99.9%
                 </span>
               </div>
               
               <div className="h-32 flex items-end gap-1">
                 {[40, 45, 60, 55, 70, 85, 80, 95, 100].map((h, i) => (
                   <motion.div
                     key={i}
                     initial={{ height: "10%" }}
                     whileInView={{ height: `${h}%` }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                     className="flex-1 bg-gradient-to-t from-[#00334F] to-[#005577] rounded-t opacity-90"
                   />
                 ))}
               </div>
            </motion.div>
          </div>

          {/* Right: Metric Cards */}
          <div className="space-y-6">
            {[
              { label: "Faster Deployment", value: "6x", desc: "Compared to traditional agencies", icon: Zap },
              { label: "Cost Efficiency", value: "35%", desc: "Reduction in development costs", icon: TrendingUp },
              { label: "Productivity Lift", value: "340%", desc: "Through automated workflows", icon: Clock },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F0F9FF] flex items-center justify-center shrink-0">
                  <stat.icon className="w-8 h-8 text-[#00334F]" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00334F] mb-1">{stat.value}</div>
                  <div className="text-[#FF6A3D] font-bold text-sm uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-slate-400 text-sm">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
