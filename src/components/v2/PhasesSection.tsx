import { Target, Code, Puzzle, Gauge } from 'lucide-react';

export function PhasesSection() {
  const phases = [
    {
      icon: Target,
      phase: 'Phase 1',
      title: 'Strategy & Architecture',
      description: 'Define technical requirements, choose AI models, and design system architecture.',
      duration: '1-2 weeks',
    },
    {
      icon: Code,
      phase: 'Phase 2',
      title: 'Build the Core',
      description: 'Develop core AI features, implement LLM workflows, and create foundational components.',
      duration: '2-4 weeks',
    },
    {
      icon: Puzzle,
      phase: 'Phase 3',
      title: 'Integrations & Refinements',
      description: 'Connect external tools, refine AI responses, and optimize user experience.',
      duration: '2-3 weeks',
    },
    {
      icon: Gauge,
      phase: 'Phase 4',
      title: 'Performance + Deployment',
      description: 'Load testing, security review, production deployment, and monitoring setup.',
      duration: '1-2 weeks',
    },
  ];

  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ background: 'linear-gradient(180deg, #F7F9FB 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
            <span className="text-[13px] tracking-wider uppercase text-[#555]">Our Timeline</span>
          </div>
          
          <h2 
            className="text-[56px] md:text-[64px] leading-[1.1] text-[#202020] mb-6"
            style={{ fontWeight: 600 }}
          >
            8 Weeks. Not 8 Months.
          </h2>
          
          <p className="text-[18px] text-[#555] max-w-3xl mx-auto">
            A structured, accelerated delivery system that gets your AI product to market faster than traditional development cycles.
          </p>
        </div>

        {/* Phase Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-[16px] p-8 border border-[#E9EAEE] hover:border-[#00334F]/20 transition-all"
                style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-[#F7F9FB] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#00334F]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[13px] text-[#FF6A3D] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                        {phase.phase}
                      </span>
                      <div className="flex-1 h-px bg-[#E9EAEE]"></div>
                      <span className="text-[13px] text-[#555]">{phase.duration}</span>
                    </div>

                    <h3 
                      className="text-[24px] text-[#202020] mb-3"
                      style={{ fontWeight: 600 }}
                    >
                      {phase.title}
                    </h3>

                    <p className="text-[16px] text-[#555] leading-[1.7]">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#E9EAEE]">
          <div className="text-center">
            <div 
              className="text-[56px] text-[#00334F] mb-2"
              style={{ fontWeight: 300 }}
            >
              8
            </div>
            <p className="text-[16px] text-[#555]">Weeks to Production</p>
          </div>
          <div className="text-center">
            <div 
              className="text-[56px] text-[#00334F] mb-2"
              style={{ fontWeight: 300 }}
            >
              100%
            </div>
            <p className="text-[16px] text-[#555]">On-Time Delivery</p>
          </div>
          <div className="text-center">
            <div 
              className="text-[56px] text-[#00334F] mb-2"
              style={{ fontWeight: 300 }}
            >
              340%
            </div>
            <p className="text-[16px] text-[#555]">Faster Than Traditional</p>
          </div>
        </div>
      </div>
    </section>
  );
}
