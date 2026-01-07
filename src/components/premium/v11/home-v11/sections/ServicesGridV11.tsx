import { motion } from 'motion/react';
import { Bot, Zap, Cpu, Terminal, BarChart, Wrench, ShoppingBag, Layers } from 'lucide-react';

const services = [
  { 
    title: "AI Applications", 
    desc: "Intelligent apps that adapt to user context.", 
    icon: Bot 
  },
  { 
    title: "Automation Systems", 
    desc: "End-to-end workflows that run on autopilot.", 
    icon: Zap 
  },
  { 
    title: "Multi-Agent Systems", 
    desc: "Orchestrated agents solving complex logic.", 
    icon: Layers 
  },
  { 
    title: "Custom AI Agents", 
    desc: "Specialized models trained on your data.", 
    icon: Cpu 
  },
  { 
    title: "Dashboards & Analytics", 
    desc: "Real-time visibility into business performance.", 
    icon: BarChart 
  },
  { 
    title: "Internal Tools", 
    desc: "Admin panels that streamline operations.", 
    icon: Wrench 
  },
  { 
    title: "Marketplaces", 
    desc: "Platforms that match supply and demand intelligently.", 
    icon: ShoppingBag 
  },
  { 
    title: "Autonomous Workflows", 
    desc: "Self-healing processes for mission-critical tasks.", 
    icon: Terminal 
  },
];

export function ServicesGridV11() {
  return (
    <section className="py-32 bg-[#FDFCFB] relative border-b border-[#EFE9E4]">

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-2xl border-l-2 border-[#FCD34D] pl-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-[#B45309] font-bold tracking-widest uppercase text-[10px]">Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-6 leading-[1.1]"
          >
            What We Build
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#666666] font-light leading-relaxed font-serif"
            style={{ fontFamily: 'Lora, serif' }}
          >
            From custom agents to full-scale automation platforms, we engineer systems that drive measurable ROI.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white border border-[#EFE9E4] p-8 hover:border-[#1A1A1A] transition-all duration-300 cursor-pointer"
            >
              
              {/* Icon */}
              <div className="mb-8 inline-block">
                <div className="w-16 h-16 border border-[#EFE9E4] bg-[#FDFCFB] flex items-center justify-center group-hover:border-[#F59E0B] group-hover:bg-white transition-all duration-300">
                  <s.icon className="w-8 h-8 text-[#1A1A1A] stroke-[1.5px] group-hover:text-[#F59E0B] transition-colors" />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-base font-bold text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  {s.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed font-light font-serif" style={{ fontFamily: 'Lora, serif' }}>
                  {s.desc}
                </p>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F59E0B] group-hover:w-full transition-all duration-500" />

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
