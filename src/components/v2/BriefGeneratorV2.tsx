import { ImageWithFallback } from '../figma/ImageWithFallback';
import { FileText, Target, Workflow, Users, Sparkles } from 'lucide-react';

export function BriefGeneratorV2() {
  const features = [
    { icon: FileText, text: 'Describe your AI product idea' },
    { icon: Target, text: 'Set goals & success metrics' },
    { icon: Workflow, text: 'Define required automations' },
    { icon: Users, text: 'Add team & stakeholder context' },
    { icon: Sparkles, text: 'Generate structured product scope' },
  ];

  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FB 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
              <span className="text-[13px] tracking-wider uppercase text-[#555]">AI Brief Generator</span>
            </div>

            <h2 
              className="text-[48px] md:text-[56px] leading-[1.15] text-[#202020]"
              style={{ fontWeight: 600 }}
            >
              Create Your AI Project Brief in Minutes
            </h2>

            <p className="text-[18px] text-[#555] leading-[1.7]">
              Our guided brief generator helps you articulate your vision, define requirements, and get accurate project estimates—all before your first call.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-[#E9EAEE] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00334F]" />
                    </div>
                    <p className="text-[16px] text-[#202020] pt-2">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <button 
              className="px-8 py-4 bg-[#00334F] text-white rounded-full hover:bg-[#00334F]/90 transition-all"
              style={{ boxShadow: '0 4px 14px rgba(0, 51, 79, 0.2)', fontWeight: 600 }}
            >
              Start Your Brief
            </button>
          </div>

          {/* Right Column - Form Preview */}
          <div className="relative">
            <div 
              className="relative rounded-[24px] overflow-hidden bg-white border border-[#E9EAEE]"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)' }}
            >
              <div className="p-8">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB1aSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ3Njk3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Brief Generator Interface"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-[#E9EAEE]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-[24px] text-[#00334F]" style={{ fontWeight: 600 }}>5 min</div>
                    <div className="text-[12px] text-[#555]">Avg. time</div>
                  </div>
                  <div>
                    <div className="text-[24px] text-[#00334F]" style={{ fontWeight: 600 }}>100%</div>
                    <div className="text-[12px] text-[#555]">Free</div>
                  </div>
                  <div>
                    <div className="text-[24px] text-[#00334F]" style={{ fontWeight: 600 }}>24h</div>
                    <div className="text-[12px] text-[#555]">Response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Glow */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FF6A3D] opacity-[0.06] blur-3xl rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
