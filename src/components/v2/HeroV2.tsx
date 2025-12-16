import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HeroV2Props {
  onNavigateToWizard?: () => void;
}

export function HeroV2({ onNavigateToWizard }: HeroV2Props) {
  return (
    <section className="relative bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }}></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            {/* Orange accent dot */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
              <span className="text-[13px] tracking-wider uppercase text-[#555]">AI Platform Development</span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] text-[#202020] tracking-tight"
              style={{ fontWeight: 600 }}
            >
              Build Intelligent AI Products, Agents & Operations—In Weeks, Not Months.
            </h1>

            {/* Subtext */}
            <p className="text-[18px] leading-[1.75] text-[#555] max-w-xl">
              Sun AI builds production-ready AI products, custom agents, and automation systems that help teams move faster, scale smarter, and unlock new capabilities.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#00334F]"></div>
                <p className="text-[16px] text-[#202020]">Rapid AI prototyping + product design</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#00334F]"></div>
                <p className="text-[16px] text-[#202020]">Custom agents & automated workflows</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#00334F]"></div>
                <p className="text-[16px] text-[#202020]">Full-stack engineering for production</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={onNavigateToWizard}
                className="px-8 py-4 bg-[#FF6A3D] text-white rounded-full hover:bg-[#ff5528] transition-all"
                style={{ boxShadow: '0 4px 14px rgba(255, 106, 61, 0.3)' }}
              >
                Start Your AI Project
              </button>
              <button 
                className="px-8 py-4 bg-white border-2 border-[#00334F] text-[#00334F] rounded-full hover:bg-[#00334F] hover:text-white transition-all"
                style={{ boxShadow: '0 2px 8px rgba(0, 51, 79, 0.08)' }}
              >
                Book a Strategy Call
              </button>
            </div>
          </div>

          {/* Right Column - Image Frame */}
          <div className="relative">
            {/* Rounded corner frame */}
            <div 
              className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-[#F7F7F9] to-white border border-[#E9EAEE]"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="aspect-[4/5] p-8">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1761044590816-5180b35e99eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5JTIwZ3JhZGllbnR8ZW58MXx8fHwxNzY0NzY5NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="AI Technology Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Subtle glow accent */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#FF6A3D] opacity-[0.06] blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#00334F] opacity-[0.04] blur-3xl rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}