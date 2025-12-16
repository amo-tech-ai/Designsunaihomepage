import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { PenTool, Code, Puzzle, Rocket } from 'lucide-react';

const steps = [
  {
    week: "Week 1–2",
    title: "Design Sprint",
    description: "Scope, wireframes, and architectural planning.",
    icon: PenTool
  },
  {
    week: "Week 3–5",
    title: "Rapid Build",
    description: "Core development of agents, UI, and logic.",
    icon: Code
  },
  {
    week: "Week 6–7",
    title: "Integrations",
    description: "Connecting data sources, testing, and refinement.",
    icon: Puzzle
  },
  {
    week: "Week 8",
    title: "Launch & Scale",
    description: "Production deployment and handover.",
    icon: Rocket
  }
];

export function TimelineV4() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const width = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6"
          >
            8 Weeks. <span className="text-[#FF6B2C]">Not 8 Months.</span>
          </motion.h2>
          <p className="text-xl text-slate-600">
            A structured, proven process to go from idea to launch.
          </p>
        </div>

        <div className="relative">
          {/* Progress Bar Background */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 rounded-full hidden lg:block" />
          
          {/* Active Progress Bar */}
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-[#FF6B2C] -translate-y-1/2 rounded-full hidden lg:block origin-left"
            style={{ width }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-lg text-center z-10"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#00334F] text-white flex items-center justify-center mb-6 shadow-xl shadow-[#00334F]/20">
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="text-[#FF6B2C] font-bold text-sm uppercase tracking-wider mb-2">
                  {step.week}
                </div>
                <h3 className="text-xl font-bold text-[#00334F] mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
