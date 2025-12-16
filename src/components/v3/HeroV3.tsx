interface HeroV3Props {
  onNavigateToWizard?: () => void;
}

export function HeroV3({ onNavigateToWizard }: HeroV3Props) {
  return (
    <section className="relative bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            {/* Orange accent dot */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-pulse"></div>
              <span className="text-[13px] tracking-wider uppercase text-[#555]">AI Platform Development</span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] text-[#202020] tracking-tight"
              style={{ fontWeight: 600 }}
            >
              Build Intelligent AI Products, Agents & Automation—In Weeks, Not Months.
            </h1>

            {/* Subtext */}
            <p className="text-[18px] leading-[1.75] text-[#555] max-w-xl">
              Sun AI builds production-ready systems that help teams launch faster, automate work, and scale intelligently.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#00334F]"></div>
                <p className="text-[16px] text-[#202020]">Rapid AI prototyping & product foundations</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#00334F]"></div>
                <p className="text-[16px] text-[#202020]">Custom multi-agent workflows</p>
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

          {/* Right Column - Animated Data Visualization */}
          <div className="relative h-[500px]">
            {/* SVG Network Visualization */}
            <svg className="w-full h-full" viewBox="0 0 500 500">
              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00334F" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#FF6A3D" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00334F" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#FF6A3D" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00334F" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Connecting Lines */}
              <g className="opacity-30">
                <line x1="100" y1="100" x2="250" y2="150" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="250" y1="150" x2="400" y2="100" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="100" y1="250" x2="250" y2="250" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="250" y1="250" x2="400" y2="250" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="100" y1="400" x2="250" y2="350" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="250" y1="350" x2="400" y2="400" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="250" y1="150" x2="250" y2="250" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="250" y1="250" x2="250" y2="350" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </line>
              </g>

              {/* Nodes - Outer circles */}
              <circle cx="100" cy="100" r="30" fill="url(#nodeGradient)" opacity="0.3">
                <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="100" r="30" fill="url(#nodeGradient)" opacity="0.3">
                <animate attributeName="r" values="30;35;30" dur="2s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="250" r="35" fill="url(#nodeGradient)" opacity="0.3">
                <animate attributeName="r" values="35;40;35" dur="2s" begin="1s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="250" r="35" fill="url(#nodeGradient)" opacity="0.3">
                <animate attributeName="r" values="35;40;35" dur="2s" begin="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="400" r="30" fill="url(#nodeGradient)" opacity="0.3">
                <animate attributeName="r" values="30;35;30" dur="2s" begin="0.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="400" r="30" fill="url(#nodeGradient)" opacity="0.3">
                <animate attributeName="r" values="30;35;30" dur="2s" begin="1.2s" repeatCount="indefinite" />
              </circle>

              {/* Center Hub */}
              <circle cx="250" cy="250" r="50" fill="url(#nodeGradient)" opacity="0.4">
                <animate attributeName="r" values="50;55;50" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Inner nodes - solid dots */}
              <circle cx="100" cy="100" r="8" fill="#00334F" opacity="0.6" />
              <circle cx="400" cy="100" r="8" fill="#00334F" opacity="0.6" />
              <circle cx="100" cy="250" r="10" fill="#FF6A3D" opacity="0.7" />
              <circle cx="400" cy="250" r="10" fill="#FF6A3D" opacity="0.7" />
              <circle cx="100" cy="400" r="8" fill="#00334F" opacity="0.6" />
              <circle cx="400" cy="400" r="8" fill="#00334F" opacity="0.6" />
              <circle cx="250" cy="250" r="12" fill="#FF6A3D" opacity="0.8">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Moving particles */}
              <circle r="3" fill="#FF6A3D" opacity="0.6">
                <animateMotion dur="4s" repeatCount="indefinite" path="M100,100 Q150,125 250,150 T400,100" />
              </circle>
              <circle r="3" fill="#00334F" opacity="0.6">
                <animateMotion dur="5s" repeatCount="indefinite" path="M100,250 L250,250 L400,250" />
              </circle>
              <circle r="3" fill="#FF6A3D" opacity="0.6">
                <animateMotion dur="4.5s" repeatCount="indefinite" path="M100,400 Q150,375 250,350 T400,400" />
              </circle>
            </svg>

            {/* Subtle glow accents */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#FF6A3D] opacity-[0.05] blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-[#00334F] opacity-[0.04] blur-3xl rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}