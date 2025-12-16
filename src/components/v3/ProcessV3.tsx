import { Pencil, Hammer, TestTube, Rocket } from 'lucide-react';

export function ProcessV3() {
  const steps = [
    {
      icon: Pencil,
      number: 1,
      title: 'Design Sprint',
      description: 'Requirements, system design',
      color: '#00334F',
    },
    {
      icon: Hammer,
      number: 2,
      title: 'Rapid Build',
      description: 'Agents, workflows, integrations',
      color: '#FF6A3D',
    },
    {
      icon: TestTube,
      number: 3,
      title: 'Testing + Optimization',
      description: 'Data pipelines, monitoring',
      color: '#00334F',
    },
    {
      icon: Rocket,
      number: 4,
      title: 'Launch + Scale',
      description: 'Deployment & performance tuning',
      color: '#FF6A3D',
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
            <div className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-pulse"></div>
            <span className="text-[13px] tracking-wider uppercase text-[#555]">Our Process</span>
          </div>
          
          <h2 
            className="text-[56px] md:text-[64px] leading-[1.1] text-[#202020] mb-6"
            style={{ fontWeight: 600 }}
          >
            8 Weeks. Not 8 Months.
          </h2>
          
          <p className="text-[18px] text-[#555] max-w-3xl mx-auto">
            A structured, accelerated AI delivery system used across startups and enterprise teams.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connecting SVG Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0">
            <svg className="w-full" height="4" viewBox="0 0 1200 4" preserveAspectRatio="none">
              <defs>
                <linearGradient id="processLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00334F" stopOpacity="0.2" />
                  <stop offset="25%" stopColor="#FF6A3D" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#00334F" stopOpacity="0.2" />
                  <stop offset="75%" stopColor="#FF6A3D" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00334F" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <line x1="0" y1="2" x2="1200" y2="2" stroke="url(#processLineGradient)" strokeWidth="2" />
              
              {/* Animated moving dots */}
              <circle r="3" fill="#FF6A3D" opacity="0.8">
                <animate attributeName="cx" from="0" to="1200" dur="4s" repeatCount="indefinite" />
                <animate attributeName="cy" values="2" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#00334F" opacity="0.8">
                <animate attributeName="cx" from="0" to="1200" dur="4s" begin="1s" repeatCount="indefinite" />
                <animate attributeName="cy" values="2" dur="4s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div 
                    className="bg-white rounded-[20px] p-8 border border-[#E9EAEE] hover:border-[#00334F]/20 transition-all h-full"
                    style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}
                  >
                    {/* Numbered Circle Badge */}
                    <div className="mb-6">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center relative"
                        style={{ background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)` }}
                      >
                        <span className="text-white text-[24px]" style={{ fontWeight: 600 }}>
                          {step.number}
                        </span>
                        
                        {/* Pulsing ring animation */}
                        <div 
                          className="absolute inset-0 rounded-full animate-ping opacity-20"
                          style={{ backgroundColor: step.color }}
                        ></div>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F7F9FB] flex items-center justify-center">
                        <Icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-[20px] text-[#202020] mb-2"
                      style={{ fontWeight: 600 }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-[#555] leading-[1.6]">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                        <path d="M12 5 L12 30 M12 30 L6 24 M12 30 L18 24" stroke={step.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Stats */}
        <div className="mt-20 pt-16 border-t border-[#E9EAEE]">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-[48px] text-[#00334F] mb-2" style={{ fontWeight: 300 }}>Week 1-2</div>
              <p className="text-[14px] text-[#555]">Planning & Design</p>
            </div>
            <div className="text-center">
              <div className="text-[48px] text-[#FF6A3D] mb-2" style={{ fontWeight: 300 }}>Week 3-5</div>
              <p className="text-[14px] text-[#555]">Core Development</p>
            </div>
            <div className="text-center">
              <div className="text-[48px] text-[#00334F] mb-2" style={{ fontWeight: 300 }}>Week 6-7</div>
              <p className="text-[14px] text-[#555]">Testing & Refinement</p>
            </div>
            <div className="text-center">
              <div className="text-[48px] text-[#FF6A3D] mb-2" style={{ fontWeight: 300 }}>Week 8</div>
              <p className="text-[14px] text-[#555]">Launch Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
