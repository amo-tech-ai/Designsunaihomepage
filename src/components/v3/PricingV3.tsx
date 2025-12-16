import { Check, Sparkles, Zap, Building } from 'lucide-react';

export function PricingV3() {
  const plans = [
    {
      icon: Sparkles,
      name: 'MVP / Proof of Concept',
      features: [
        '1–3 agents',
        'Rapid prototyping',
        'Basic automations',
      ],
      capability: 30,
    },
    {
      icon: Zap,
      name: 'Production Ready',
      features: [
        'Multi-agent workflows',
        'Data pipelines',
        'Dashboards & monitoring',
        'Performance tuning',
      ],
      capability: 70,
      highlighted: true,
    },
    {
      icon: Building,
      name: 'Enterprise Systems',
      features: [
        'Compliance automation',
        'Complex orchestrations',
        'Custom infrastructure',
        'Autonomous operations',
      ],
      capability: 100,
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-[48px] md:text-[56px] leading-[1.15] text-[#202020] mb-6"
            style={{ fontWeight: 600 }}
          >
            Investment Levels
          </h2>
          <p className="text-[18px] text-[#555] max-w-2xl mx-auto">
            Flexible engagement models designed for startups to enterprise teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index}
                className={`relative rounded-[20px] p-10 transition-all ${
                  plan.highlighted 
                    ? 'bg-white border-2 border-[#FF6A3D] shadow-xl transform lg:-translate-y-4' 
                    : 'bg-white border border-[#E9EAEE]'
                }`}
                style={!plan.highlighted ? { boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' } : { boxShadow: '0 8px 24px rgba(255, 106, 61, 0.15)' }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#FF6A3D] text-white rounded-full text-[13px]" style={{ fontWeight: 600 }}>
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${plan.highlighted ? 'bg-[#FF6A3D]' : 'bg-[#F7F9FB]'} flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${plan.highlighted ? 'text-white' : 'text-[#00334F]'}`} />
                  </div>
                </div>

                {/* Header */}
                <div className="mb-8">
                  <h3 
                    className="text-[24px] text-[#202020] mb-6"
                    style={{ fontWeight: 600 }}
                  >
                    {plan.name}
                  </h3>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 rounded-full bg-[#00334F]/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-[#00334F]" />
                          </div>
                        </div>
                        <span className="text-[14px] text-[#555]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button 
                  className={`w-full py-4 rounded-full transition-all ${
                    plan.highlighted
                      ? 'bg-[#FF6A3D] text-white hover:bg-[#ff5528] shadow-md'
                      : 'bg-white border-2 border-[#00334F] text-[#00334F] hover:bg-[#00334F] hover:text-white'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        {/* Capability Comparison Strip */}
        <div className="bg-white rounded-[24px] p-10 border border-[#E9EAEE]" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
          <h3 className="text-[20px] text-[#202020] mb-8 text-center" style={{ fontWeight: 600 }}>
            Capability Scale by Tier
          </h3>
          
          <div className="space-y-6">
            {plans.map((plan, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[14px] text-[#202020]" style={{ fontWeight: 600 }}>
                    {plan.name}
                  </span>
                  <span className="text-[14px] text-[#555]">
                    {plan.capability}% Capability
                  </span>
                </div>
                <div className="relative h-3 bg-[#F7F9FB] rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${plan.capability}%`,
                      background: plan.highlighted 
                        ? 'linear-gradient(90deg, #FF6A3D 0%, #ff5528 100%)'
                        : 'linear-gradient(90deg, #00334F 0%, #004d75 100%)'
                    }}
                  >
                    {/* Animated shimmer effect */}
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        animation: 'shimmer 2s infinite'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
