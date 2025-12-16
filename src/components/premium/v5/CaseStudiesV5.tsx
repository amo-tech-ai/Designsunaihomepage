import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Globe, Network } from 'lucide-react';

const cases = [
  {
    title: "FashionOS",
    tag: "Creative Automation",
    description: "AI creative production platform transforming how brands generate assets.",
    icon: ShoppingBag,
  },
  {
    title: "Sun Market",
    tag: "Marketplace Engine",
    description: "AI-powered marketplace automation for intelligent matching.",
    icon: Globe,
  },
  {
    title: "AgentHub",
    tag: "Multi-Agent System",
    description: "Orchestration engine for coordinating complex autonomous workflows.",
    icon: Network,
  }
];

export function CaseStudiesV5() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0D1117] to-[#1A1F25] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FF6A3D] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              Real Platforms Built by Sun AI
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Enterprise-grade systems delivering tangible value.
            </p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#FF6A3D] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#FF6A3D]/20 transition-all duration-300"
            >
              {/* Card Header Illustration Area */}
              <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                 <study.icon className="w-16 h-16 text-slate-300 group-hover:text-[#FF6A3D] group-hover:scale-110 transition-all duration-500" />
                 
                 {/* Spotlight Effect on Hover */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#00334F]/5 text-[#00334F] mb-4 uppercase tracking-wide">
                  {study.tag}
                </span>
                <h3 className="text-2xl font-bold text-[#0D1117] mb-3">{study.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {study.description}
                </p>
                <button className="w-full py-3 rounded-xl border border-slate-200 text-[#00334F] font-semibold hover:bg-[#00334F] hover:text-white hover:border-[#00334F] transition-all flex items-center justify-center gap-2">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
