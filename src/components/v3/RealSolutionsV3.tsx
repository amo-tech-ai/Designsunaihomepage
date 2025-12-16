import { Palette, ShoppingCart, Network } from 'lucide-react';

export function RealSolutionsV3() {
  const solutions = [
    {
      icon: Palette,
      name: 'FashionOS',
      description: 'AI creative automation workflows',
      benefits: [
        'Automated brief generation from campaign goals',
        'AI-powered asset recommendations',
        'Intelligent approval workflows'
      ],
      techTag: 'Multi-Agent System',
    },
    {
      icon: ShoppingCart,
      name: 'Sun Market',
      description: 'Marketplace engine with agent-driven matching',
      benefits: [
        'Smart product-buyer matching algorithms',
        'Automated seller onboarding flows',
        'Dynamic pricing optimization'
      ],
      techTag: 'LLM Workflows',
    },
    {
      icon: Network,
      name: 'AgentHub',
      description: 'Multi-agent orchestration for internal operations',
      benefits: [
        'Coordinated task delegation across agents',
        'Real-time decision making pipelines',
        'Automated reporting and analytics'
      ],
      techTag: 'Agent Orchestration',
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-[48px] md:text-[56px] leading-[1.15] text-[#202020] mb-6"
            style={{ fontWeight: 600 }}
          >
            Real Solutions Built by Sun AI
          </h2>
          <p className="text-[18px] text-[#555] max-w-2xl mx-auto">
            Production systems helping teams automate, scale, and innovate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-[20px] p-10 border border-[#E9EAEE] hover:border-[#00334F]/20 transition-all group relative overflow-hidden"
                style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)' }}
              >
                {/* Background gradient decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6A3D]/5 to-transparent rounded-full blur-2xl"></div>
                
                {/* Tech Tag */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 bg-[#F7F9FB] border border-[#E9EAEE] rounded-full text-[11px] text-[#00334F] uppercase tracking-wide" style={{ fontWeight: 600 }}>
                    {solution.techTag}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 rounded-xl bg-[#FF6A3D]/10 flex items-center justify-center group-hover:bg-[#FF6A3D] transition-colors">
                    <Icon className="w-7 h-7 text-[#FF6A3D] group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-[32px] text-[#202020] mb-2"
                  style={{ fontWeight: 600 }}
                >
                  {solution.name}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-[#555] mb-6">
                  {solution.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-[#00334F] flex-shrink-0"></div>
                      <span className="text-[14px] text-[#555]">{benefit}</span>
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
