import { Lightbulb, Timer, Cog } from 'lucide-react';

export function ThreePillarsV3() {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Intelligent Apps',
      description: 'AI features and workflows aligned to business goals',
    },
    {
      icon: Timer,
      title: 'Launch Fast',
      description: 'Execution frameworks that reduce time-to-market',
    },
    {
      icon: Cog,
      title: 'Automate Everything',
      description: 'Everything repeatable becomes fully automated',
    },
  ];

  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FB 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-[48px] md:text-[56px] leading-[1.15] text-[#202020] text-center mb-20"
          style={{ fontWeight: 600 }}
        >
          Three Pillars of AI Success
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-[16px] p-10 border border-[#E9EAEE] hover:border-[#00334F]/20 transition-all"
                style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00334F] to-[#00334F]/80 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 
                  className="text-[28px] text-[#202020] mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {pillar.title}
                </h3>

                <p className="text-[16px] text-[#555] leading-[1.7]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process Ribbon */}
        <div className="relative bg-white rounded-[20px] p-12 border border-[#E9EAEE]" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-16 h-16 rounded-full bg-[#00334F] text-white flex items-center justify-center mb-4 text-[24px]" style={{ fontWeight: 600 }}>
                1
              </div>
              <div className="text-[16px] text-[#202020] text-center" style={{ fontWeight: 600 }}>
                Intelligent Apps
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
                <defs>
                  <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00334F" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FF6A3D" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <path d="M5 12 L65 12 M65 12 L55 6 M65 12 L55 18" stroke="url(#arrowGradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle r="2" fill="#FF6A3D" opacity="0.6">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M5,12 L65,12" />
                </circle>
              </svg>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-16 h-16 rounded-full bg-[#FF6A3D] text-white flex items-center justify-center mb-4 text-[24px]" style={{ fontWeight: 600 }}>
                2
              </div>
              <div className="text-[16px] text-[#202020] text-center" style={{ fontWeight: 600 }}>
                Launch Fast
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
                <defs>
                  <linearGradient id="arrowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6A3D" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#00334F" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path d="M5 12 L65 12 M65 12 L55 6 M65 12 L55 18" stroke="url(#arrowGradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle r="2" fill="#00334F" opacity="0.6">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M5,12 L65,12" begin="0.5s" />
                </circle>
              </svg>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-16 h-16 rounded-full bg-[#00334F] text-white flex items-center justify-center mb-4 text-[24px]" style={{ fontWeight: 600 }}>
                3
              </div>
              <div className="text-[16px] text-[#202020] text-center" style={{ fontWeight: 600 }}>
                Automate Everything
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
