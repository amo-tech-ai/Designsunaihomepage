import { motion } from 'motion/react';

const phases = [
  { phase: "Discovery", duration: "1 week", desc: "Understanding your needs" },
  { phase: "Design", duration: "1 week", desc: "Architecture & UI/UX" },
  { phase: "Development", duration: "2-3 weeks", desc: "Building your MVP" },
  { phase: "Deployment", duration: "3 days", desc: "Launch & monitoring" }
];

export function TimelineV12() {
  return (
    <section className="py-24 bg-[#FBFBFB] border-b border-[#E8E8E8]">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-[#9E9E9E] uppercase tracking-widest">Timeline</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-6 mt-4">
            From Idea to Production
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 pb-12 border-l-2 border-[#E8E8E8] last:border-l-0 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] bg-[#C4B5A6] rounded-full" />
              <div className="bg-white border border-[#E8E8E8] p-6 hover:border-[#C4B5A6] transition-colors duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-serif text-[#1A1A1A]">{phase.phase}</h3>
                  <span className="text-sm font-bold text-[#9E9E9E] uppercase tracking-widest">{phase.duration}</span>
                </div>
                <p className="text-sm text-[#6B6B6B]">{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
