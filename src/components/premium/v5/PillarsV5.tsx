import { motion } from 'motion/react';
import { Sparkles, Rocket, Bot } from 'lucide-react';

const pillars = [
  {
    icon: Sparkles,
    title: 'Intelligent Apps',
    description: 'Understand context and user intent to deliver personalized experiences.',
  },
  {
    icon: Rocket,
    title: 'Launch Fast',
    description: 'Reduce time-to-market with structured sprints and pre-built modules.',
  },
  {
    icon: Bot,
    title: 'Automate Everything',
    description: 'Multi-agent workflows that eliminate manual work and human error.',
  },
];

export function PillarsV5() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl lg:text-5xl font-bold text-[#00334F] mb-6"
          >
            Three Pillars of AI Success
          </motion.h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Ribbon Graphic */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-full pointer-events-none -z-10">
            <svg width="100%" height="200" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <motion.path 
                d="M 100 50 C 400 150, 800 -50, 1100 50" 
                stroke="#FF6A3D" 
                strokeWidth="2" 
                fill="none" 
                opacity="0.1" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
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
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                <pillar.icon className="w-10 h-10 text-[#00334F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#00334F] mb-4">{pillar.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
