interface CTAV3Props {
  onNavigateToWizard?: () => void;
}

export function CTAV3({ onNavigateToWizard }: CTAV3Props) {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-[#E9EAEE]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Animated accent elements */}
        <div className="flex justify-center mb-12 gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-[#00334F] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>

        <h2 
          className="text-[56px] md:text-[64px] leading-[1.1] text-[#202020] mb-8"
          style={{ fontWeight: 600 }}
        >
          Ready to Build Something{' '}
          <span className="relative inline-block">
            Extraordinary
            <svg 
              className="absolute -bottom-3 left-0 w-full" 
              viewBox="0 0 300 12" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6A3D" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#FF6A3D" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FF6A3D" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path 
                d="M5,8 Q75,3 150,8 T295,8" 
                fill="none" 
                stroke="url(#underlineGradient)" 
                strokeWidth="3"
                strokeLinecap="round"
              >
                <animate 
                  attributeName="d" 
                  values="M5,8 Q75,3 150,8 T295,8;M5,8 Q75,12 150,8 T295,8;M5,8 Q75,3 150,8 T295,8" 
                  dur="3s" 
                  repeatCount="indefinite" 
                />
              </path>
            </svg>
          </span>
          ?
        </h2>

        <p className="text-[20px] text-[#555] mb-12 max-w-3xl mx-auto leading-[1.7]">
          Let's design, build, and launch your AI platform—faster than you thought possible.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            onClick={onNavigateToWizard}
            className="px-8 py-4 bg-[#FF6A3D] text-white rounded-full hover:bg-[#ff5528] transition-all relative overflow-hidden group"
            style={{ boxShadow: '0 4px 14px rgba(255, 106, 61, 0.3)', fontWeight: 600 }}
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </button>
          <button 
            className="px-8 py-4 bg-white border-2 border-[#00334F] text-[#00334F] rounded-full hover:bg-[#00334F] hover:text-white transition-all"
            style={{ boxShadow: '0 2px 8px rgba(0, 51, 79, 0.08)', fontWeight: 600 }}
          >
            Book a Strategy Call
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-[#E9EAEE] to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00334F]/5 to-transparent rounded-2xl"></div>
            <div className="relative text-center p-8">
              <div className="text-[48px] text-[#00334F] mb-2" style={{ fontWeight: 300 }}>
                50+
              </div>
              <p className="text-[14px] text-[#555]">AI Products Delivered</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A3D]/5 to-transparent rounded-2xl"></div>
            <div className="relative text-center p-8">
              <div className="text-[48px] text-[#FF6A3D] mb-2" style={{ fontWeight: 300 }}>
                100%
              </div>
              <p className="text-[14px] text-[#555]">Client Satisfaction</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00334F]/5 to-transparent rounded-2xl"></div>
            <div className="relative text-center p-8">
              <div className="text-[48px] text-[#00334F] mb-2" style={{ fontWeight: 300 }}>
                8
              </div>
              <p className="text-[14px] text-[#555]">Weeks Average Timeline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}