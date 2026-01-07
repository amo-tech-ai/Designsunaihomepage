import { motion } from 'motion/react';

const phases = [
  {
    phase: "01",
    title: "Discovery",
    duration: "Week 1",
    description: "Deep-dive into your business requirements, technical constraints, and success metrics."
  },
  {
    phase: "02",
    title: "Architecture",
    duration: "Week 2",
    description: "System design, data modeling, and infrastructure planning with your stakeholders."
  },
  {
    phase: "03",
    title: "Development",
    duration: "Week 3-8",
    description: "Agile sprints with weekly demos, continuous integration, and iterative feedback."
  },
  {
    phase: "04",
    title: "Testing",
    duration: "Week 9-10",
    description: "Comprehensive QA, security audits, performance optimization, and user acceptance."
  },
  {
    phase: "05",
    title: "Launch",
    duration: "Week 11-12",
    description: "Production deployment, monitoring setup, team training, and handoff documentation."
  }
];

export function TimelineV11() {
  return (
    <section className="py-32 bg-white border-b border-[#EFE9E4]">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="mb-20 border-l-2 border-[#FCD34D] pl-6 max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-4">
            Our Process
          </h2>
          <p className="text-[#666666] font-light font-serif text-lg" style={{ fontFamily: 'Lora, serif' }}>
            A systematic 12-week framework that delivers production-ready AI systems.
          </p>
        </div>

        <div className="relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-[1px] bg-[#D1C7BD]" />

          <div className="space-y-16">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-16 lg:pl-24"
              >
                
                {/* Phase Number Indicator */}
                <div className="absolute left-0 lg:left-8 top-0 w-10 h-10 -ml-5 bg-white border-2 border-[#1A1A1A] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#1A1A1A] font-mono">{phase.phase}</span>
                </div>

                {/* Content */}
                <div className="bg-[#FDFCFB] border border-[#EFE9E4] p-8 hover:border-[#1A1A1A] transition-colors">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2 md:mb-0">
                      {phase.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-[#B45309] font-bold">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-[#666666] font-light leading-relaxed font-serif" style={{ fontFamily: 'Lora, serif' }}>
                    {phase.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-[#1A1A1A] text-white"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="text-2xl font-serif mb-2">Total Duration</h4>
              <p className="text-white/60 text-sm font-serif" style={{ fontFamily: 'Lora, serif' }}>
                Average project timeline from kickoff to production launch
              </p>
            </div>
            <div className="text-5xl font-serif border-l-2 border-[#F59E0B] pl-6">
              12 weeks
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
