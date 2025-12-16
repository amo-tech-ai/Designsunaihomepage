import { ImageWithFallback } from './figma/ImageWithFallback';
import { FileText, Target, Workflow, Users } from 'lucide-react';

export function BriefGenerator() {
  const features = [
    { icon: FileText, text: 'Describe your idea' },
    { icon: Target, text: 'Add goals & metrics' },
    { icon: Workflow, text: 'Add required automations' },
    { icon: Users, text: 'Generate a structured AI product scope' },
  ];

  return (
    <section className="bg-[#F7F7FB] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-[48px] leading-[1.2] text-[#111111]" style={{ fontWeight: 400 }}>
              Create Your Project Brief in Minutes
            </h2>

            <div className="space-y-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-[#FF6B2C]" />
                    </div>
                    <p className="text-[18px] text-[#111111] pt-2">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Users className="w-6 h-6 text-[#FF6B2C]" />
                </div>
                <p className="text-[18px] text-[#111111] pt-2">
                  Share with stakeholders
                </p>
              </div>
            </div>

            <button className="px-8 py-4 bg-[#00334F] text-white rounded-full hover:bg-[#00334F]/90 transition-all shadow-lg">
              Auto-Generate My Brief
            </button>
          </div>

          {/* Right Column - Mockup */}
          <div className="relative">
            <div 
              className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0NzU5MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Brief Generator Interface"
                className="w-full h-auto"
              />
              {/* Overlay gradient to give it a "product" feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00334F]/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Floating Accent */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FF6B2C] rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
