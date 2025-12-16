import { motion } from 'motion/react';
import { Brain, Rocket, Workflow } from 'lucide-react';

export function PillarsV6() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#00334F] mb-6">Why Sun AI Works</h2>
          <p className="text-xl text-slate-500 font-light">
             Our proprietary methodology combines deep technical expertise with rapid deployment frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0" />

          {[
            { 
              title: "Intelligent Apps", 
              desc: "Domain-aware reasoning + adaptive agents that learn from your data.",
              icon: Brain 
            },
            { 
              title: "Launch Fast", 
              desc: "Accelerated AI delivery frameworks designed to ship in weeks.",
              icon: Rocket 
            },
            { 
              title: "Automate Everything", 
              desc: "Multi-agent automation that handles complex workflows end-to-end.",
              icon: Workflow 
            },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 text-center group"
            >
              <div className="w-24 h-24 mx-auto bg-white rounded-full border border-slate-100 shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-10 h-10 text-[#00334F]" />
              </div>
              <h3 className="text-xl font-bold text-[#00334F] mb-4">{pillar.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
