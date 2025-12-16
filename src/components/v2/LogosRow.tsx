export function LogosRow() {
  const logos = ['ACME', 'NEXUS', 'VERTEX', 'QUANTUM', 'PULSE', 'APEX'];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 border-t border-b border-[#E9EAEE]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[13px] text-[#555] mb-10 tracking-wider uppercase">
          Trusted by innovative teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="opacity-30 hover:opacity-60 transition-opacity cursor-pointer"
            >
              <div 
                className="text-[20px] tracking-tight text-[#202020]"
                style={{ fontWeight: 600 }}
              >
                {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
