import { motion } from 'motion/react';
import { TrendingUp, Clock, Zap } from 'lucide-react';

export function MetricsV4() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text & KPIs */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-8"
            >
              AI That Drives <br />
              <span className="text-[#FF6B2C]">Measurable Results</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-12"
            >
              Stop experimenting and start scaling. Our systems are engineered for ROI, speed, and reliability.
            </motion.p>

            <div className="space-y-6">
              {[
                { label: "Faster Deployment", value: "6x", icon: Zap },
                { label: "Cost Savings", value: "35%", icon: TrendingUp },
                { label: "Productivity Lift", value: "340%", icon: Clock },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00334F]/5 to-[#FF6B2C]/5 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-[#00334F]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00334F]">{stat.value}</div>
                    <div className="text-slate-500 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Chart Visualization */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-[#00334F]/5 to-transparent rounded-3xl transform rotate-3 scale-105" />
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100"
             >
               <h3 className="text-lg font-bold text-[#00334F] mb-8">Performance vs. Traditional Development</h3>
               
               {/* Animated Chart Bars */}
               <div className="space-y-8">
                 <div>
                   <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
                     <span>Traditional Dev</span>
                     <span>8 Months</span>
                   </div>
                   <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
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
                   <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
                     <span className="text-[#FF6B2C]">Sun AI Platform</span>
                     <span className="text-[#FF6B2C]">8 Weeks</span>
                   </div>
                   <div className="h-4 bg-[#FF6B2C]/10 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: "25%" }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.5, ease: "easeOut" }}
                       className="h-full bg-[#FF6B2C] rounded-full"
                     />
                   </div>
                 </div>
               </div>

               {/* Growth Curve */}
               <div className="mt-12 pt-8 border-t border-slate-100">
                 <div className="h-48 relative flex items-end gap-2">
                   {[30, 45, 60, 50, 75, 90, 100].map((h, i) => (
                     <motion.div
                       key={i}
                       initial={{ height: 0 }}
                       whileInView={{ height: `${h}%` }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                       className="flex-1 bg-gradient-to-t from-[#00334F] to-[#006080] rounded-t-lg opacity-80"
                     />
                   ))}
                 </div>
                 <div className="text-center text-sm font-medium text-slate-400 mt-4">Project Velocity Over Time</div>
               </div>

             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
