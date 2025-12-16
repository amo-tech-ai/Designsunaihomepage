import { Box, Zap, Bot, Wrench, ShoppingBag, BarChart3 } from 'lucide-react';

export function CapabilitiesBar() {
  const capabilities = [
    { icon: Box, label: 'AI Applications' },
    { icon: Zap, label: 'Automation Systems' },
    { icon: Bot, label: 'Custom AI Agents' },
    { icon: Wrench, label: 'Internal Tools' },
    { icon: ShoppingBag, label: 'Marketplaces' },
    { icon: BarChart3, label: 'Dashboards & Analytics' },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(135deg, #00334F 0%, #0E0E11 100%)'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] leading-[1.2] text-white mb-6" style={{ fontWeight: 400 }}>
            We Build AI-Powered Platforms
          </h2>
          <p className="text-[18px] leading-[1.7] text-white/80 max-w-3xl mx-auto">
            From intelligent apps to fully autonomous systems, we deliver end-to-end AI products designed for growth.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:shadow-2xl transition-all hover:-translate-y-1"
                style={{ boxShadow: '0 12px 24px rgba(0,0,0,0.12)' }}
              >
                <div className="w-12 h-12 rounded-full bg-[#F7F7FB] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#00334F]" />
                </div>
                <p className="text-[14px] text-[#111111]">
                  {capability.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-[16px] leading-[1.7] text-white/70 max-w-4xl mx-auto">
            A scalable execution system supported by senior engineers, AI strategists, and specialized agent workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
