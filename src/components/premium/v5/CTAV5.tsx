import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export function CTAV5() {
  return (
    <section className="py-32 lg:py-48 bg-white relative overflow-hidden flex items-center justify-center">
      {/* Cinematic White Space - Minimal background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F9FAFB]/50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-bold text-[#00334F] mb-12 tracking-tight leading-tight"
        >
          Ready to Build <br />
          Something <span className="text-[#FF6A3D]">Extraordinary?</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
        >
          <button className="px-10 py-5 rounded-full bg-[#00334F] text-white text-lg font-bold hover:bg-[#004466] shadow-2xl shadow-[#00334F]/20 hover:scale-105 transition-all flex items-center gap-3">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-10 py-5 rounded-full bg-white border border-slate-200 text-[#00334F] text-lg font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-3">
            <Phone className="w-5 h-5" />
            Book a Strategy Call
          </button>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 border-t border-slate-100 pt-16">
          {[
            { label: "AI Platforms Delivered", value: "50+" },
            { label: "On-Time Launch Rate", value: "100%" },
            { label: "Delivery Framework", value: "8 Weeks" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-[#00334F] mb-2">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
