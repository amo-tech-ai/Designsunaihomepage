import { Lightbulb, Timer, Cog } from 'lucide-react';

export function ThreePillarsV2() {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Intelligent Apps',
      description: 'AI features and workflows designed around user goals',
      details: ['Context-aware AI systems', 'Custom LLM workflows', 'RAG & embeddings'],
    },
    {
      icon: Timer,
      title: 'Launch Fast',
      description: 'Execution frameworks that reduce time-to-market',
      details: ['Rapid prototyping', 'Structured sprints', 'Real-world validation'],
    },
    {
      icon: Cog,
      title: 'Automate Everything',
      description: 'Automation systems that remove repeatable work',
      details: ['Workflow automation', 'Multi-agent systems', 'Process optimization'],
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-[48px] md:text-[56px] leading-[1.15] text-[#202020] text-center mb-20"
          style={{ fontWeight: 600 }}
        >
          Three Pillars of AI Success
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-[16px] p-10 border border-[#E9EAEE] hover:border-[#00334F]/20 transition-all"
                style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)' }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00334F] to-[#00334F]/80 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-[28px] text-[#202020] mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-[#555] mb-6 leading-[1.7]">
                  {pillar.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {pillar.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-[14px] text-[#555]">
                      <div className="w-1 h-1 rounded-full bg-[#FF6A3D]"></div>
                      {detail}
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
