import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function FinalCTAV11() {
  return (
    <section className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Ready to build your <br />
              AI-powered future?
            </h2>
            <p className="text-xl text-white/70 font-light font-serif max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
              Join innovative teams transforming their operations with production-ready AI systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button className="px-10 py-5 bg-[#F59E0B] text-[#1A1A1A] font-bold hover:bg-[#FCD34D] transition-all flex items-center justify-center gap-3 group min-w-[240px]">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-white/20 bg-white/5 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 min-w-[240px]">
              Schedule a Call
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-3 gap-8 lg:gap-16">
              {[
                { value: "25+", label: "Projects Delivered" },
                { value: "6+", label: "Agent Systems" },
                { value: "$500M+", label: "Value Enabled" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl lg:text-5xl font-serif text-white mb-2">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-white/60 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
