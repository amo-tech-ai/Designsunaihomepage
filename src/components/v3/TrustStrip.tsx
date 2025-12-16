export function TrustStrip() {
  const companies = ['ACME CORP', 'NEXUS AI', 'VERTEX', 'QUANTUM', 'PULSE TECH', 'APEX LABS'];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 border-t border-b border-[#E9EAEE]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[13px] text-[#555] mb-10 tracking-wider uppercase opacity-60">
          Trusted by innovative teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="opacity-25 hover:opacity-50 transition-opacity cursor-pointer animate-fadeIn"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <div 
                className="text-[16px] tracking-tight text-[#202020] uppercase"
                style={{ fontWeight: 500, letterSpacing: '0.05em' }}
              >
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 0.25;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
