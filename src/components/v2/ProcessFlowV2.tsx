import { Pencil, Hammer, Link2, Rocket } from 'lucide-react';

export function ProcessFlowV2() {
  const steps = [
    {
      icon: Pencil,
      number: '01',
      title: 'Design Sprint',
      points: [
        'Define goals & workflows',
        'Identify AI opportunities',
        'Map user journeys'
      ],
    },
    {
      icon: Hammer,
      number: '02',
      title: 'Rapid Build',
      points: [
        'Prototype core features',
        'Validate with real data',
        'Iterate quickly'
      ],
    },
    {
      icon: Link2,
      number: '03',
      title: 'Integrations & Testing',
      points: [
        'Connect data sources',
        'API integrations',
        'Performance testing'
      ],
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Launch & Scale',
      points: [
        'Deploy to production',
        'Monitor & measure',
        'Continuous optimization'
      ],
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            className="text-[48px] md:text-[56px] leading-[1.15] text-[#202020] mb-6"
            style={{ fontWeight: 600 }}
          >
            Structured AI Delivery Process
          </h2>
          <p className="text-[18px] text-[#555] max-w-2xl mx-auto">
            A proven framework that takes you from concept to production in weeks.
          </p>
        </div>

        {/* Flow Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E9EAEE] via-[#00334F]/20 to-[#E9EAEE] hidden lg:block"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div 
                    className="bg-white rounded-[16px] p-8 border border-[#E9EAEE] hover:border-[#00334F]/20 transition-all h-full"
                    style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#00334F] text-white flex items-center justify-center" style={{ fontSize: '14px', fontWeight: 600 }}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#F7F9FB] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#00334F]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-[20px] text-[#202020] mb-4"
                      style={{ fontWeight: 600 }}
                    >
                      {step.title}
                    </h3>

                    {/* Points */}
                    <ul className="space-y-2">
                      {step.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2">
                          <div className="mt-2 w-1 h-1 rounded-full bg-[#FF6A3D] flex-shrink-0"></div>
                          <span className="text-[14px] text-[#555]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
