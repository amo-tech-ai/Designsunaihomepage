interface FinalCTAProps {
  onNavigateToWizard?: () => void;
}

export function FinalCTA({ onNavigateToWizard }: FinalCTAProps) {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Dark Gradient Background */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(135deg, #00334F 0%, #0E0E11 100%)'
        }}
      ></div>

      {/* Accent Glows */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#FF6B2C] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#00334F] rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-[56px] leading-[1.1] text-white mb-8" style={{ fontWeight: 300 }}>
          Ready to Build Something Extraordinary?
        </h2>
        
        <p className="text-[20px] leading-[1.7] text-white/80 mb-12 max-w-2xl mx-auto">
          Let's design, build, and launch your AI platform—faster than you thought possible.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-[#FF6B2C] text-white rounded-full hover:bg-[#ff5515] transition-all shadow-xl hover:shadow-2xl">
            Schedule a Strategy Call
          </button>
          <button 
            onClick={onNavigateToWizard}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all border border-white/20"
          >
            Write Your Project Brief
          </button>
        </div>
      </div>
    </section>
  );
}