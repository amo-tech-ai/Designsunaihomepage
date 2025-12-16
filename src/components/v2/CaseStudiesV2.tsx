import { Palette, ShoppingCart, Network } from 'lucide-react';

export function CaseStudiesV2() {
  const cases = [
    {
      icon: Palette,
      name: 'FashionOS',
      description: 'AI creative production suite',
      features: [
        'Automated brief generation',
        'Smart asset management',
        'Approval workflow automation',
        'Multi-agent collaboration'
      ],
    },
    {
      icon: ShoppingCart,
      name: 'Sun Market',
      description: 'AI-powered marketplace engine',
      features: [
        'Intelligent product matching',
        'Automated onboarding',
        'Dynamic pricing optimization',
        'Smart listing generation'
      ],
    },
    {
      icon: Network,
      name: 'AgentHub',
      description: 'Multi-agent automation workflows',
      features: [
        'Autonomous task orchestration',
        'Real-time decision making',
        'Automated reporting systems',
        'Cross-platform integrations'
      ],
    },
  ];

  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FB 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-[48px] md:text-[56px] leading-[1.15] text-[#202020] mb-6"
            style={{ fontWeight: 600 }}
          >
            Real Platforms Built by Sun AI
          </h2>
          <p className="text-[18px] text-[#555] max-w-2xl mx-auto">
            Production-ready AI systems helping teams automate, scale, and innovate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-[16px] p-10 border border-[#E9EAEE] hover:border-[#00334F]/20 transition-all group"
                style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)' }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#FF6A3D]/10 flex items-center justify-center group-hover:bg-[#FF6A3D] transition-colors">
                    <Icon className="w-7 h-7 text-[#FF6A3D] group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-[32px] text-[#202020] mb-2"
                  style={{ fontWeight: 600 }}
                >
                  {caseStudy.name}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-[#555] mb-6">
                  {caseStudy.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {caseStudy.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-[#00334F] flex-shrink-0"></div>
                      <span className="text-[14px] text-[#555]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
