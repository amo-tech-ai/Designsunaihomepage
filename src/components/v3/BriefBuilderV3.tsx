import { FileText, Target, Users, Zap, CheckCircle2 } from 'lucide-react';

export function BriefBuilderV3() {
  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FB 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-pulse"></div>
            <span className="text-[13px] tracking-wider uppercase text-[#555]">Project Brief Generator</span>
          </div>
          
          <h2 
            className="text-[48px] md:text-[56px] leading-[1.15] text-[#202020] mb-6"
            style={{ fontWeight: 600 }}
          >
            Create Your AI Project Brief
          </h2>
          
          <p className="text-[18px] text-[#555] max-w-2xl mx-auto">
            Answer a few structured questions to generate a comprehensive project scope and timeline.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2 bg-white rounded-[24px] p-10 border border-[#E9EAEE]" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
            {/* Form Fields */}
            <div className="space-y-6">
              {/* Project Name */}
              <div>
                <label className="flex items-center gap-2 text-[14px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>
                  <FileText className="w-4 h-4 text-[#00334F]" />
                  Project Name
                </label>
                <input 
                  type="text"
                  placeholder="e.g., AI Customer Support Assistant"
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F9FB] border border-[#E9EAEE] text-[#202020] placeholder-[#555]/40 focus:outline-none focus:border-[#00334F] transition-colors"
                />
              </div>

              {/* Project Goal */}
              <div>
                <label className="flex items-center gap-2 text-[14px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>
                  <Target className="w-4 h-4 text-[#00334F]" />
                  Primary Goal
                </label>
                <textarea 
                  placeholder="What do you want to achieve with AI?"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F9FB] border border-[#E9EAEE] text-[#202020] placeholder-[#555]/40 focus:outline-none focus:border-[#00334F] transition-colors resize-none"
                />
              </div>

              {/* AI Capabilities */}
              <div>
                <label className="flex items-center gap-2 text-[14px] text-[#202020] mb-3" style={{ fontWeight: 600 }}>
                  <Zap className="w-4 h-4 text-[#00334F]" />
                  Required AI Capabilities
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Natural Language Processing', 'Multi-Agent System', 'Data Analysis', 'Workflow Automation', 'Content Generation', 'Custom Integrations'].map((capability, index) => (
                    <label key={index} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F7F9FB] border border-[#E9EAEE] cursor-pointer hover:border-[#00334F]/20 transition-colors group">
                      <input type="checkbox" className="w-4 h-4 rounded border-[#E9EAEE] text-[#00334F]" />
                      <span className="text-[13px] text-[#555] group-hover:text-[#202020]">{capability}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Team Size */}
              <div>
                <label className="flex items-center gap-2 text-[14px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>
                  <Users className="w-4 h-4 text-[#00334F]" />
                  Team Size
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#F7F9FB] border border-[#E9EAEE] text-[#202020] focus:outline-none focus:border-[#00334F] transition-colors">
                  <option>Select team size</option>
                  <option>1-10 people</option>
                  <option>11-50 people</option>
                  <option>51-200 people</option>
                  <option>200+ people</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="text-[14px] text-[#202020] mb-3 block" style={{ fontWeight: 600 }}>
                  Desired Timeline
                </label>
                <div className="flex gap-3">
                  {['ASAP', '4-6 weeks', '8-12 weeks', 'Flexible'].map((timeline, index) => (
                    <button 
                      key={index}
                      className="flex-1 px-4 py-3 rounded-xl bg-[#F7F9FB] border border-[#E9EAEE] text-[13px] text-[#555] hover:border-[#00334F] hover:bg-white hover:text-[#00334F] transition-colors"
                      style={{ fontWeight: 500 }}
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button 
                className="w-full py-4 bg-[#FF6A3D] text-white rounded-full hover:bg-[#ff5528] transition-all mt-8"
                style={{ boxShadow: '0 4px 14px rgba(255, 106, 61, 0.3)', fontWeight: 600 }}
              >
                Generate Project Brief
              </button>
            </div>
          </div>

          {/* Side Summary Card */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-white rounded-[20px] p-8 border border-[#E9EAEE]" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
              <h3 className="text-[18px] text-[#202020] mb-6" style={{ fontWeight: 600 }}>
                Project Completeness
              </h3>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] text-[#555]">Brief Progress</span>
                  <span className="text-[13px] text-[#00334F]" style={{ fontWeight: 600 }}>65%</span>
                </div>
                <div className="relative h-2 bg-[#F7F9FB] rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{ 
                      width: '65%',
                      background: 'linear-gradient(90deg, #00334F 0%, #FF6A3D 100%)'
                    }}
                  >
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                        animation: 'shimmer 2s infinite'
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3">
                {[
                  { label: 'Project details', completed: true },
                  { label: 'AI capabilities', completed: true },
                  { label: 'Team context', completed: false },
                  { label: 'Timeline preferences', completed: false },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.completed ? 'bg-[#00334F]' : 'bg-[#E9EAEE]'}`}>
                      {item.completed && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>
                    <span className={`text-[14px] ${item.completed ? 'text-[#202020]' : 'text-[#555]'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-[#00334F] to-[#00334F]/90 rounded-[20px] p-8 text-white">
              <div className="text-center mb-6">
                <div className="text-[48px] mb-2" style={{ fontWeight: 300 }}>5 min</div>
                <p className="text-[14px] opacity-80">Average completion time</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-[24px]" style={{ fontWeight: 600 }}>100%</div>
                  <p className="text-[12px] opacity-70">Free</p>
                </div>
                <div className="text-center">
                  <div className="text-[24px]" style={{ fontWeight: 600 }}>24h</div>
                  <p className="text-[12px] opacity-70">Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
