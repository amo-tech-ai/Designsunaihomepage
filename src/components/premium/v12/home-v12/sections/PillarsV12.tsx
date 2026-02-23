import { motion } from 'motion/react';
import { Shield, Zap, Code } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: "Production-Ready",
    desc: "Built for scale from day one"
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    desc: "2-3 weeks to working MVP"
  },
  {
    icon: Code,
    title: "Clean Architecture",
    desc: "Maintainable, scalable code"
  }
];

export function PillarsV12() {
  return (
    <section className="py-24 bg-white border-b border-[#E8E8E8]">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-[#9E9E9E] uppercase tracking-widest">Our Approach</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-6 mt-4">
            How We Work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#FBFBFB] border border-[#E8E8E8] p-8 hover:border-[#C4B5A6] transition-all duration-300"
            >
              <pillar.icon className="w-8 h-8 text-[#C4B5A6] mb-4" />
              <h3 className="text-xl font-serif text-[#1A1A1A] mb-3">{pillar.title}</h3>
              <p className="text-sm text-[#6B6B6B]">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
