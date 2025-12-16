import { motion } from 'motion/react';
import { Cpu, Globe, Database, Network, Cloud, Shield } from 'lucide-react';

export function TrustedByV6() {
  return (
    <section className="py-12 border-y border-slate-100 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <span className="text-sm font-medium text-slate-400 uppercase tracking-widest whitespace-nowrap">
          Trusted by teams building the future of AI
        </span>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {[Cpu, Globe, Database, Network, Cloud, Shield].map((Icon, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Icon className="w-6 h-6 text-[#00334F]" />
              <span className="font-bold text-[#00334F]">Partner</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
