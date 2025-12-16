import { ImageWithFallback } from './figma/ImageWithFallback';
import { Circle } from 'lucide-react';

interface HeroProps {
  onNavigateToWizard?: () => void;
}

export function Hero({ onNavigateToWizard }: HeroProps) {
  return (
    <section className="bg-white py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Small Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7F7FB] border border-[rgba(0,0,0,0.06)]">
              <Circle className="w-2 h-2 fill-[#00334F] text-[#00334F]" />
              <span className="text-[13px] text-[#6A6A6A] tracking-wide">
                AI Products • Agents • Automations
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[64px] md:text-[72px] leading-[1.05] text-[#111111] tracking-tight" style={{ fontWeight: 300 }}>
              Build Intelligent AI Products, Agents, and Automations—In Weeks, Not Months.
            </h1>
            
            {/* Subheadline */}
            <p className="text-[18px] leading-[1.7] text-[#6A6A6A] max-w-xl">
              Sun AI designs and builds production-ready AI systems that help teams move faster, automate work, and scale efficiently.
            </p>

            {/* Value Bullets */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6B2C]"></div>
                <p className="text-[16px] text-[#111111]">Rapid AI product design & prototyping</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6B2C]"></div>
                <p className="text-[16px] text-[#111111]">Custom agents + automated workflows</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6B2C]"></div>
                <p className="text-[16px] text-[#111111]">Full-stack engineering for production</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button 
                onClick={onNavigateToWizard}
                className="px-8 py-4 bg-[#FF6B2C] text-white rounded-full hover:bg-[#ff5515] transition-all shadow-lg hover:shadow-xl"
              >
                Start Your AI Project
              </button>
              <button className="px-8 py-4 border-2 border-[#00334F] text-[#00334F] rounded-full hover:bg-[#00334F] hover:text-white transition-all">
                Book a Strategy Call
              </button>
            </div>
          </div>

          {/* Right Column - Premium AI Visual */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] bg-gradient-radial from-[#00334F]/5 via-[#00334F]/2 to-transparent rounded-full blur-3xl"></div>
            </div>
            
            {/* Card Frame with Visual */}
            <div className="relative">
              <div 
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#F7F7FB] to-white border border-[rgba(0,0,0,0.06)] p-12"
                style={{ boxShadow: '0 20px 60px rgba(0,51,79,0.08)' }}
              >
                <div className="relative aspect-square">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1636412911203-4065623b94fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGdsYXNzJTIwc3BoZXJlJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzY0NzY5Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="AI Neural Network"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Subtle accent orbs */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#FF6B2C] rounded-full opacity-8 blur-2xl"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#00334F] rounded-full opacity-8 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Brand Logos Row */}
        <div className="mt-24 pt-12 border-t border-[rgba(0,0,0,0.08)]">
          <p className="text-center text-[13px] text-[#8C8C8C] mb-8 uppercase tracking-wide">
            Trusted by innovative teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            <div className="h-8 px-8 flex items-center justify-center bg-[#111111] text-white rounded text-[14px]">BRAND</div>
            <div className="h-8 px-8 flex items-center justify-center bg-[#111111] text-white rounded text-[14px]">BRAND</div>
            <div className="h-8 px-8 flex items-center justify-center bg-[#111111] text-white rounded text-[14px]">BRAND</div>
            <div className="h-8 px-8 flex items-center justify-center bg-[#111111] text-white rounded text-[14px]">BRAND</div>
            <div className="h-8 px-8 flex items-center justify-center bg-[#111111] text-white rounded text-[14px]">BRAND</div>
          </div>
        </div>
      </div>
    </section>
  );
}