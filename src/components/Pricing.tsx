import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Proof of Concept / MVP',
      price: '$15K–$30K',
      features: [
        '1–2 agents',
        'Basic automations',
        'Early prototype',
        'Fast iteration cycles',
      ],
      cta: 'Start Here',
      highlighted: false,
    },
    {
      name: 'Production Ready',
      price: '$50K–$150K',
      features: [
        'Multi-agent system',
        'Production workflows',
        'Integrations + dashboards',
        'Deployment + performance tuning',
      ],
      cta: 'Build My Product',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$200K+',
      features: [
        'Compliance workflows',
        'Data pipelines',
        'Custom models',
        'Autonomous operations',
      ],
      cta: 'Contact Team',
      highlighted: false,
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[48px] leading-[1.2] text-[#111111] text-center mb-20" style={{ fontWeight: 400 }}>
          Investment Levels
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-10 ${
                plan.highlighted 
                  ? 'border-2 border-[#FF6B2C] shadow-2xl transform lg:-translate-y-4' 
                  : 'border border-[rgba(0,0,0,0.08)] shadow-lg'
              }`}
              style={!plan.highlighted ? { boxShadow: '0 12px 24px rgba(0,0,0,0.06)' } : {}}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#FF6B2C] text-white rounded-full text-[14px]" style={{ fontWeight: 500 }}>
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-[24px] text-[#111111] mb-4" style={{ fontWeight: 500 }}>
                  {plan.name}
                </h3>
                <div className="text-[48px] text-[#00334F] mb-2" style={{ fontWeight: 300 }}>
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00334F]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[#00334F]" />
                    </div>
                    <span className="text-[16px] text-[#6A6A6A]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-full transition-all ${
                  plan.highlighted
                    ? 'bg-[#FF6B2C] text-white hover:bg-[#ff5515] shadow-lg'
                    : 'border-2 border-[#00334F] text-[#00334F] hover:bg-[#00334F] hover:text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
