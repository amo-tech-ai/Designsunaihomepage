import { Pencil, Hammer, Link2, Rocket } from 'lucide-react';

export function ProcessFlow() {
  const steps = [
    {
      icon: Pencil,
      title: 'Design Sprint',
      description: 'Define goals, workflows, and AI opportunities.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Hammer,
      title: 'Rapid Build',
      description: 'Prototype core features quickly and validate.',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Link2,
      title: 'Integrations + Testing',
      description: 'Connect data sources, tools, and automation.',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Rocket,
      title: 'Launch & Scale',
      description: 'Deploy, measure, and iterate.',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  const metrics = [
    { value: '8 Weeks', label: 'to Prototype' },
    { value: '100%', label: 'Project Completion' },
    { value: '340%', label: 'Faster Execution' },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] leading-[1.2] text-[#111111] mb-6" style={{ fontWeight: 400 }}>
            8 Weeks. Not 8 Months.
          </h2>
          <p className="text-[18px] leading-[1.7] text-[#6A6A6A] max-w-3xl mx-auto">
            A structured, accelerated AI delivery system proven across startups and enterprise teams.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="relative mb-20">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 border border-[rgba(0,0,0,0.08)] hover:shadow-xl transition-all">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#00334F] text-white flex items-center justify-center" style={{ fontSize: '18px', fontWeight: 600 }}>
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>
                    
                    <h3 className="text-[24px] text-[#111111] mb-3" style={{ fontWeight: 500 }}>
                      {step.title}
                    </h3>
                    
                    <p className="text-[16px] leading-[1.7] text-[#6A6A6A]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-[56px] text-[#FF6B2C] mb-2" style={{ fontWeight: 300 }}>
                {metric.value}
              </div>
              <p className="text-[16px] text-[#6A6A6A]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
