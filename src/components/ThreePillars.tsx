import { Lightbulb, Timer, Cog } from 'lucide-react';

export function ThreePillars() {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Intelligent Apps',
      description: 'AI features and workflows built around user goals.',
    },
    {
      icon: Timer,
      title: 'Launch Fast',
      description: 'Execution frameworks that reduce time to market.',
    },
    {
      icon: Cog,
      title: 'Automate Everything',
      description: 'Everything repeatable becomes automated.',
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[48px] leading-[1.2] text-[#111111] text-center mb-20" style={{ fontWeight: 400 }}>
          Three Pillars of AI Success
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex w-20 h-20 rounded-full bg-[#F7F7FB] items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-[#00334F]" />
                </div>
                
                <h3 className="text-[32px] text-[#111111] mb-4" style={{ fontWeight: 500 }}>
                  {pillar.title}
                </h3>
                
                <p className="text-[18px] leading-[1.7] text-[#6A6A6A]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
