interface CTABannerProps {
  onNavigateToWizard?: () => void;
}

export function CTABanner({ onNavigateToWizard }: CTABannerProps) {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-[#E9EAEE]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Orange accent line */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-[#FF6A3D] rounded-full"></div>
        </div>

        <h2 
          className="text-[56px] md:text-[64px] leading-[1.1] text-[#202020] mb-8"
          style={{ fontWeight: 600 }}
        >
          Ready to Build Something{' '}
          <span className="relative inline-block">
            Extraordinary
            <svg 
              className="absolute -bottom-2 left-0 w-full" 
              viewBox="0 0 200 10" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path 
                d="M0,7 Q50,3 100,7 T200,7" 
                fill="none" 
                stroke="#FF6A3D" 
                strokeWidth="2"
                opacity="0.4"
              />
            </svg>
          </span>
          ?
        </h2>

        <p className="text-[20px] text-[#555] mb-12 max-w-3xl mx-auto leading-[1.7]">
          Let's design, build, and launch your AI platform—faster than you thought possible. 
          Schedule a call or create your project brief to get started.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={onNavigateToWizard}
            className="px-8 py-4 bg-[#FF6A3D] text-white rounded-full hover:bg-[#ff5528] transition-all"
            style={{ boxShadow: '0 4px 14px rgba(255, 106, 61, 0.3)', fontWeight: 600 }}
          >
            Start Your Project
          </button>
          <button 
            className="px-8 py-4 bg-white border-2 border-[#00334F] text-[#00334F] rounded-full hover:bg-[#00334F] hover:text-white transition-all"
            style={{ boxShadow: '0 2px 8px rgba(0, 51, 79, 0.08)', fontWeight: 600 }}
          >
            Book a Strategy Call
          </button>
        </div>

        {/* Trust signals */}
        <div className="mt-16 pt-12 border-t border-[#E9EAEE]">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-[32px] text-[#00334F] mb-2" style={{ fontWeight: 600 }}>
                50+
              </div>
              <p className="text-[14px] text-[#555]">AI Products Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-[32px] text-[#00334F] mb-2" style={{ fontWeight: 600 }}>
                100%
              </div>
              <p className="text-[14px] text-[#555]">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-[32px] text-[#00334F] mb-2" style={{ fontWeight: 600 }}>
                8 Weeks
              </div>
              <p className="text-[14px] text-[#555]">Average Timeline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}