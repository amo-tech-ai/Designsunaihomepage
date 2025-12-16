import { motion } from 'motion/react';
import { Cpu, Rocket, Workflow } from 'lucide-react';

const pillars = [
  {
    icon: Cpu,
    title: 'Intelligent Apps',
    description: 'Systems that understand context and user intent.',
  },
  {
    icon: Rocket,
    title: 'Launch Fast',
    description: 'Frameworks and sprints that reduce time-to-market.',
  },
  {
    icon: Workflow,
    title: 'Automate Everything',
    description: 'Multi-agent workflows that eliminate repetitive work.',
  },
];

export function PillarsV4() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl lg:text-4xl font-bold text-[#00334F] mb-6"
          >
            Three Pillars of AI Success
          </motion.h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Curved Connector Ribbon */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 pointer-events-none -z-10">
            <svg width="100%" height="100%" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path 
                d="M0 50 C 200 50, 400 10, 600 50 C 800 90, 1000 50, 1200 50" 
                stroke="#FF6B2C" 
                strokeWidth="2" 
                strokeDasharray="6 6"
                fill="none" 
                opacity="0.2" 
              />
            </svg>
          </div>

          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-10 h-10 text-[#00334F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#00334F] mb-4">{pillar.title}</h3>
              <p className="text-slate-600">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
