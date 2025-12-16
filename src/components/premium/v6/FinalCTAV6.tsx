import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function FinalCTAV6() {
  return (
    <section className="py-32 bg-[#0D1117] text-white relative overflow-hidden text-center">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-[#00334F] opacity-20 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-semibold mb-6 tracking-tight"
        >
          Ready to Build <br />
          Something Extraordinary?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 mb-10 max-w-xl mx-auto"
        >
          Let’s design, build, and scale your AI systems — starting today.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="px-8 py-4 bg-[#FF6A3D] text-white font-bold rounded-full hover:bg-[#FF8C69] transition-all flex items-center justify-center gap-2">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all">
            Talk to a Strategist
          </button>
        </motion.div>

        <div className="flex justify-center gap-12 border-t border-white/10 pt-12 max-w-3xl mx-auto">
          {[
            { val: "50+", lbl: "Projects" },
            { val: "100%", lbl: "Success Rate" },
            { val: "8 Weeks", lbl: "Avg Delivery" },
          ].map((s, i) => (
             <div key={i} className="text-center">
               <div className="text-2xl font-bold text-white mb-1">{s.val}</div>
               <div className="text-xs text-slate-500 uppercase tracking-widest">{s.lbl}</div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
