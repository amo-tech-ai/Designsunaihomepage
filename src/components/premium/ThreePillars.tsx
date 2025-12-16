import { motion } from 'motion/react';
import { Cpu, Rocket, Workflow } from 'lucide-react';

const pillars = [
  {
    icon: Cpu,
    title: 'Intelligent Apps',
    description: 'Leverage LLMs and predictive models to build software that thinks, adapts, and learns from user behavior.',
  },
  {
    icon: Rocket,
    title: 'Launch Fast',
    description: 'Bypass months of boilerplate coding. Our AI engine generates production-ready foundations in days.',
  },
  {
    icon: Workflow,
    title: 'Automate Everything',
    description: 'From testing to deployment, autonomous agents handle the repetitive tasks so you can focus on innovation.',
  },
];

export function ThreePillars() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#pillargradient)" fillOpacity="0.1" />
          <defs>
            <linearGradient id="pillargradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF6B2C" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#00334F] mb-6 leading-tight">
            The Three Pillars of <br />
            <span className="text-[#FF6B2C]">AI Success</span>
          </h2>
          <p className="text-slate-600 text-xl">
            A cohesive strategy combining speed, intelligence, and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Curved Ribbon) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] -z-10">
             <div className="w-full border-t border-dashed border-[#FF6B2C]/30" />
          </div>

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all text-center group"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#F8F9FA] to-white border border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-10 h-10 text-[#00334F] group-hover:text-[#FF6B2C] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[#00334F] mb-4">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
