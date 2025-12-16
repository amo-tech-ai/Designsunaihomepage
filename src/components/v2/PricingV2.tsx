import { Check, Sparkles, Zap, Building } from 'lucide-react';

export function PricingV2() {
  const plans = [
    {
      icon: Sparkles,
      name: 'MVP / Proof of Concept',
      price: '$15K–$30K',
      description: 'Perfect for validating your AI concept',
      features: [
        '1–2 AI agents',
        'Basic automations',
        'Early prototype',
        'Fast iteration cycles',
        'Core feature development',
        '2-4 week timeline'
      ],
      cta: 'Start Here',
      highlighted: false,
    },
    {
      icon: Zap,
      name: 'Production Ready',
      price: '$50K–$150K',
      description: 'Full AI platform ready to scale',
      features: [
        'Multi-agent system',
        'Production workflows',
        'Full integrations',
        'Custom dashboards',
        'Performance tuning',
        'Deployment & monitoring',
        'Documentation & training',
        '6-8 week timeline'
      ],
      cta: 'Build My Product',
      highlighted: true,
    },
    {
      icon: Building,
      name: 'Enterprise',
      price: '$200K+',
      description: 'Custom AI solutions at scale',
      features: [
        'Compliance workflows',
        'Custom data pipelines',
        'Fine-tuned models',
        'Autonomous operations',
        'Enterprise integrations',
        'Dedicated support',
        'SLA guarantees'
      ],
      cta: 'Contact Team',
      highlighted: false,
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

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index}
                className={`relative rounded-[16px] p-10 transition-all ${
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
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl ${plan.highlighted ? 'bg-[#FF6A3D]' : 'bg-[#F7F9FB]'} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${plan.highlighted ? 'text-white' : 'text-[#00334F]'}`} />
                  </div>
                </div>

                {/* Header */}
                <div className="mb-8">
                  <h3 
                    className="text-[20px] text-[#202020] mb-2"
                    style={{ fontWeight: 600 }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-[14px] text-[#555] mb-4">
                    {plan.description}
                  </p>
                  <div 
                    className="text-[48px] text-[#00334F]"
                    style={{ fontWeight: 300 }}
                  >
                    {plan.price}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
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

                {/* CTA */}
                <button 
                  className={`w-full py-4 rounded-full transition-all ${
                    plan.highlighted
                      ? 'bg-[#FF6A3D] text-white hover:bg-[#ff5528] shadow-md'
                      : 'bg-white border-2 border-[#00334F] text-[#00334F] hover:bg-[#00334F] hover:text-white'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
