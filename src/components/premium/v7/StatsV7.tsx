export function StatsV7() {
  const logos = [
    "Stripe", "Intercom", "Dropbox", "Slack", "Zoom", "Shopify"
  ];

  return (
    <section className="py-10 border-b border-slate-100 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by fast-growing teams
        </p>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <span key={i} className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <div className="w-6 h-6 bg-slate-200 rounded-full" /> {/* Placeholder Icon */}
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
