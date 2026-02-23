import { motion } from 'motion/react';
import { Cpu, Globe, Database, Network, Cloud, Shield } from 'lucide-react';

export function TrustedByV12() {
  return (
    <section className="py-12 border-b border-[#E8E8E8] bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <span className="text-[10px] font-bold text-[#9E9E9E] uppercase tracking-widest whitespace-nowrap">
            Trusted by teams building the future of AI
          </span>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {[Cpu, Globe, Database, Network, Cloud, Shield].map((Icon, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 border border-[#E8E8E8] px-4 py-2 bg-white hover:border-[#C4B5A6] hover:bg-[#F8F8F8] transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-[#4A4A4A]" />
                <span className="font-medium text-[#1A1A1A] text-sm">Partner</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
