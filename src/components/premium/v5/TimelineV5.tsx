import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { PenTool, Code, Puzzle, Rocket } from 'lucide-react';

const timelineSteps = [
  {
    week: "Week 1–2",
    title: "Design Sprint",
    icon: PenTool,
    color: "#FF6A3D"
  },
  {
    week: "Week 3–5",
    title: "Rapid Build",
    icon: Code,
    color: "#00A0B8"
  },
  {
    week: "Week 6–7",
    title: "Integrations",
    icon: Puzzle,
    color: "#8B5CF6"
  },
  {
    week: "Week 8",
    title: "Launch & Scale",
    icon: Rocket,
    color: "#10B981"
  }
];

export function TimelineV5() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progressHeight = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-[#0D1117] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Title & Description */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight"
            >
              8 Weeks. <br />
              <span className="text-[#FF6A3D]">Not 8 Months.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              A structured AI acceleration system designed to deliver production-ready results in record time.
            </motion.p>
          </div>

          {/* Right: Vertical Timeline */}
          <div className="lg:w-2/3 relative pl-8 lg:pl-16">
            
            {/* Timeline Line Base */}
            <div className="absolute top-0 bottom-0 left-[2px] lg:left-[2px] w-[2px] bg-[#1A1F25]" />
            
            {/* Timeline Line Active (Scroll Driven) */}
            <motion.div 
              className="absolute top-0 left-[2px] lg:left-[2px] w-[2px] bg-[#FF6A3D] origin-top"
              style={{ height: progressHeight }}
            />

            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-12"
                >
                  {/* Glowing Node */}
                  <div className="absolute top-0 left-[-26px] lg:left-[-26px] w-[56px] h-[56px] bg-[#0D1117] border-4 border-[#1A1F25] rounded-full flex items-center justify-center z-10 shadow-xl">
                    <step.icon className="w-5 h-5 text-slate-400" />
                    {/* Active State Ring */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-[#FF6A3D]"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="bg-[#161B22] p-8 rounded-2xl border border-[#232A34] hover:border-[#FF6A3D]/30 transition-colors shadow-lg group">
                    <div className="text-[#FF6A3D] font-bold uppercase tracking-wider text-sm mb-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-[#FF6A3D]" />
                       {step.week}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400">
                      Executed by senior engineers and AI specialists.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
