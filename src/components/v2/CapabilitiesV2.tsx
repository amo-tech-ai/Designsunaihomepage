import { Box, Zap, Bot, Wrench, ShoppingBag, BarChart3, Layers, Workflow } from 'lucide-react';

export function CapabilitiesV2() {
  const capabilities = [
    { 
      icon: Box, 
      label: 'AI Applications',
      description: 'Intelligent apps with LLM-powered features'
    },
    { 
      icon: Zap, 
      label: 'Automation Systems',
      description: 'End-to-end workflow automation'
    },
    { 
      icon: Bot, 
      label: 'Custom AI Agents',
      description: 'Multi-agent systems and orchestration'
    },
    { 
      icon: Wrench, 
      label: 'Internal Tools',
      description: 'Custom dashboards and admin panels'
    },
    { 
      icon: ShoppingBag, 
      label: 'Marketplaces',
      description: 'AI-powered matching and discovery'
    },
    { 
      icon: BarChart3, 
      label: 'Dashboards & Analytics',
      description: 'Real-time data visualization'
    },
    { 
      icon: Layers, 
      label: 'API Integration',
      description: 'Connect any tool or data source'
    },
    { 
      icon: Workflow, 
      label: 'Process Automation',
      description: 'Intelligent business workflows'
    },
  ];

  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ background: 'linear-gradient(180deg, #F7F9FB 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-[48px] md:text-[56px] leading-[1.15] text-[#202020] mb-6"
            style={{ fontWeight: 600 }}
          >
            We Build AI-Powered Platforms
          </h2>
          <p className="text-[18px] text-[#555] max-w-2xl mx-auto">
            From intelligent applications to autonomous systems, we deliver end-to-end AI solutions.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-[16px] p-8 border border-[#E9EAEE] hover:border-[#00334F]/20 transition-all group cursor-pointer"
                style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F9FB] flex items-center justify-center group-hover:bg-[#00334F] transition-colors">
                    <Icon className="w-6 h-6 text-[#00334F] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 
                  className="text-[16px] text-[#202020] mb-2"
                  style={{ fontWeight: 600 }}
                >
                  {capability.label}
                </h3>
                <p className="text-[14px] text-[#555] leading-[1.5]">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
