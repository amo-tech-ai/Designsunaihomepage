import { Palette, ShoppingCart, Network } from 'lucide-react';

export function CaseStudies() {
  const cases = [
    {
      icon: Palette,
      name: 'FashionOS',
      description: 'An AI creative production suite automating briefs, edits, and approval workflows.',
    },
    {
      icon: ShoppingCart,
      name: 'Sun Market',
      description: 'AI-powered marketplace engine with automated onboarding, listing, and matching.',
    },
    {
      icon: Network,
      name: 'AgentHub',
      description: 'Autonomous multi-agent system for operations, reporting, and real-time decision workflows.',
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Dark Gradient Background */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(135deg, #00334F 0%, #1a1a1f 100%)'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-[48px] leading-[1.2] text-white text-center mb-16" style={{ fontWeight: 400 }}>
          Real Platforms Built by Sun AI
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <div 
                key={index}
                className="relative rounded-2xl p-10 overflow-hidden group hover:-translate-y-2 transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
                  boxShadow: '0 16px 32px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Accent Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B2C] rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-[#FF6B2C]/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#FF6B2C]" />
                  </div>
                  
                  <h3 className="text-[32px] text-white mb-4" style={{ fontWeight: 500 }}>
                    {caseStudy.name}
                  </h3>
                  
                  <p className="text-[16px] leading-[1.7] text-white/70">
                    {caseStudy.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
