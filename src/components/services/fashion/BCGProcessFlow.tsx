/**
 * BCG-Style Process Flow (Horizontal Timeline)
 * Numbered circles with green accent, arrows between phases
 * Matches BCG methodology visualization pattern
 */

const phases = [
  {
    number: 1,
    title: 'Discovery & Assessment',
    duration: '2-3 weeks',
    deliverables: [
      'Current state analysis',
      'AI readiness assessment',
      'Data infrastructure audit',
      'Competitive benchmarking',
    ],
  },
  {
    number: 2,
    title: 'Strategy & Roadmap',
    duration: '3-4 weeks',
    deliverables: [
      'AI opportunity prioritization',
      'Business case & ROI models',
      'Technology selection',
      '18-month implementation plan',
    ],
  },
  {
    number: 3,
    title: 'Build & Integration',
    duration: '12-20 weeks',
    deliverables: [
      'AI model development',
      'System integration',
      'User testing & refinement',
      'Staff training programs',
    ],
  },
  {
    number: 4,
    title: 'Launch & Optimize',
    duration: '4-6 weeks',
    deliverables: [
      'Phased rollout',
      'Performance monitoring',
      'A/B testing & optimization',
      'Success metrics tracking',
    ],
  },
];

export function BCGProcessFlow() {
  return (
    <section className="bcg-section bg-[#F8F9FA]">
      <div className="bcg-container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="bcg-exhibit-label">OUR APPROACH</div>
          <h2 className="bcg-text-section text-[#212427] mb-4">
            How we work with fashion brands
          </h2>
          <p className="bcg-text-body text-[#696969] max-w-3xl">
            A proven four-phase methodology that takes fashion retailers from AI strategy to 
            production-ready implementation in 5-8 months.
          </p>
        </div>

        {/* Process Flow - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-10 left-0 right-0 h-px bg-[#E5E7EB]" style={{ width: 'calc(100% - 80px)', marginLeft: '40px' }} />

            {/* Phases Grid */}
            <div className="grid grid-cols-4 gap-6">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Numbered Circle */}
                  <div className="relative z-10 mb-6 flex items-center">
                    <div className="bcg-numbered-circle text-lg bg-[#00A86B] shadow-lg">
                      {phase.number}
                    </div>
                    
                    {/* Arrow */}
                    {index < phases.length - 1 && (
                      <div className="ml-4 text-[#00A86B] text-2xl font-light">→</div>
                    )}
                  </div>

                  {/* Phase Card */}
                  <div className="bg-white border border-[#E5E7EB] p-6">
                    {/* Title */}
                    <h3 className="text-lg font-medium text-[#212427] mb-3">
                      {phase.title}
                    </h3>

                    {/* Accent Line */}
                    <div className="w-12 h-[3px] bg-[#00A86B] mb-4" />

                    {/* Deliverables */}
                    <ul className="space-y-2 mb-6">
                      {phase.deliverables.map((deliverable, dIndex) => (
                        <li key={dIndex} className="text-sm text-[#696969] flex items-start">
                          <span className="mr-2 text-[#00A86B]">•</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Duration */}
                    <div className="pt-4 border-t border-[#E5E7EB]">
                      <div className="text-xs uppercase text-[#696969] mb-1" style={{ letterSpacing: '0.05em' }}>
                        Duration
                      </div>
                      <div className="text-sm font-medium text-[#212427]">
                        {phase.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Flow - Mobile */}
        <div className="lg:hidden space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Vertical Line */}
              {index < phases.length - 1 && (
                <div className="absolute left-5 top-14 bottom-0 w-px bg-[#E5E7EB]" style={{ height: 'calc(100% + 32px)' }} />
              )}

              {/* Numbered Circle */}
              <div className="flex items-start gap-4 mb-4">
                <div className="bcg-numbered-circle bg-[#00A86B] shadow-lg relative z-10">
                  {phase.number}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#212427]">
                    {phase.title}
                  </h3>
                  <div className="text-sm text-[#696969] mt-1">
                    {phase.duration}
                  </div>
                </div>
              </div>

              {/* Phase Card */}
              <div className="ml-14 bg-white border border-[#E5E7EB] p-6">
                <ul className="space-y-2">
                  {phase.deliverables.map((deliverable, dIndex) => (
                    <li key={dIndex} className="text-sm text-[#696969] flex items-start">
                      <span className="mr-2 text-[#00A86B]">•</span>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 bg-white border border-[#E5E7EB]">
          <p className="text-sm text-[#696969]">
            <span className="font-semibold text-[#212427]">Typical engagement:</span> 5-8 months from strategy to production launch, 
            with ongoing optimization support. ROI typically realized within 3-6 months post-launch.
          </p>
        </div>
      </div>
    </section>
  );
}
