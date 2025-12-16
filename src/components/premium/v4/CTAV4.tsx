import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export function CTAV4() {
  return (
    <section className="py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8F9FA]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-bold text-[#00334F] mb-8 tracking-tight"
        >
          Ready to Build <br />
          Something <span className="text-[#FF6B2C]">Extraordinary?</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          <button className="px-10 py-5 rounded-full bg-[#00334F] text-white text-lg font-bold hover:bg-[#004466] shadow-xl hover:shadow-[#00334F]/20 transition-all flex items-center gap-3 group">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 rounded-full bg-white border border-slate-200 text-[#00334F] text-lg font-bold hover:bg-slate-50 shadow-md hover:shadow-lg transition-all flex items-center gap-3">
            <Phone className="w-5 h-5" />
            Book a Strategy Call
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-slate-100 pt-16">
          {[
            { label: "AI Platforms Built", value: "50+" },
            { label: "Delivery Rate", value: "100%" },
            { label: "Build Process", value: "8 Weeks" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <div className="text-4xl font-bold text-[#00334F] mb-2">{stat.value}</div>
              <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
