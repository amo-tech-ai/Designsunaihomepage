import { Box, Zap, Bot, Wrench, ShoppingBag, BarChart3, Layers, Workflow } from 'lucide-react';

export function CapabilitiesV3() {
  const capabilities = [
    { icon: Box, label: 'AI Applications', description: 'Intelligent apps with LLM-powered features' },
    { icon: Zap, label: 'Automation Systems', description: 'End-to-end workflow automation' },
    { icon: Bot, label: 'Multi-Agent Systems', description: 'Coordinated AI agent orchestration' },
    { icon: Wrench, label: 'Custom AI Agents', description: 'Purpose-built intelligent agents' },
    { icon: Layers, label: 'Internal Tools', description: 'Custom dashboards and admin panels' },
    { icon: BarChart3, label: 'Dashboards & Analytics', description: 'Real-time data visualization' },
    { icon: ShoppingBag, label: 'Marketplaces', description: 'AI-powered matching and discovery' },
    { icon: Workflow, label: 'Autonomous Workflows', description: 'Self-managing business processes' },
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
            What We Build
          </h2>
          <p className="text-[18px] text-[#555] max-w-2xl mx-auto">
            Production-ready AI systems designed for speed, intelligence, and scale.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
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

        {/* Process Flow Diagram */}
        <div className="relative bg-white rounded-[24px] p-12 border border-[#E9EAEE]" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00334F] to-[#00334F]/80 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <div className="text-[18px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>Inputs</div>
              <p className="text-[14px] text-[#555] text-center">Data, APIs, User Context</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                <path d="M5 20 L45 20 M45 20 L35 10 M45 20 L35 30" stroke="#00334F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6A3D] to-[#ff5528] flex items-center justify-center mb-4">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <div className="text-[18px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>Agents</div>
              <p className="text-[14px] text-[#555] text-center">AI Processing, Decision Making</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                <path d="M5 20 L45 20 M45 20 L35 10 M45 20 L35 30" stroke="#FF6A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00334F] to-[#00334F]/80 flex items-center justify-center mb-4">
                <Workflow className="w-10 h-10 text-white" />
              </div>
              <div className="text-[18px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>Workflows</div>
              <p className="text-[14px] text-[#555] text-center">Automation, Orchestration</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                <path d="M5 20 L45 20 M45 20 L35 10 M45 20 L35 30" stroke="#00334F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6A3D] to-[#ff5528] flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-[18px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>Outputs</div>
              <p className="text-[14px] text-[#555] text-center">Results, Actions, Insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
