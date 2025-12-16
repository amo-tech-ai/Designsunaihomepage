import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Globe, Network } from 'lucide-react';

const cases = [
  {
    title: "FashionOS",
    category: "Automation",
    description: "AI-powered creative work automation for a global fashion brand.",
    icon: ShoppingBag,
    color: "#EC4899"
  },
  {
    title: "Sun Market",
    category: "Marketplaces",
    description: "AI-driven marketplace engine matching buyers and sellers intelligently.",
    icon: Globe,
    color: "#F59E0B"
  },
  {
    title: "AgentHub",
    category: "Multi-Agent System",
    description: "Orchestration engine for coordinating specialized AI agents.",
    icon: Network,
    color: "#8B5CF6"
  }
];

export function CaseStudiesV4() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00334F] mb-4">
              Real Solutions Built by Sun AI
            </h2>
            <p className="text-slate-600 max-w-xl">
              From creative automation to complex agent orchestration, see what's possible.
            </p>
          </div>
          <button className="text-[#FF6B2C] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View all case studies <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200" />
                 <study.icon className="w-16 h-16 text-slate-300 group-hover:scale-110 transition-transform duration-500 relative z-10" />
                 <div 
                   className="absolute inset-0 opacity-10"
                   style={{ backgroundColor: study.color }}
                 />
              </div>
              
              <div className="p-8">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-opacity-10"
                  style={{ backgroundColor: `${study.color}20`, color: study.color }}
                >
                  {study.category}
                </span>
                <h3 className="text-xl font-bold text-[#00334F] mb-3">{study.title}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                  {study.description}
                </p>
                <div className="flex items-center gap-2 text-[#00334F] font-medium text-sm group-hover:gap-3 transition-all cursor-pointer">
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
