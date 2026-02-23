/**
 * BCG-Style Hero Section
 * Full-bleed hero with static image (no parallax), dark overlay, breadcrumb
 * Matches BCG.com design patterns
 */

import fashionHeroImage from 'figma:asset/a177f00b99671ca3b2d8960d25930b39cb4acbef.png';

export function BCGHero() {
  return (
    <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-[#212427]">
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0">
        <img
          src={fashionHeroImage}
          alt="Fashion Industry"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full bcg-container flex flex-col justify-center">
        {/* Breadcrumb */}
        <nav className="bcg-breadcrumb mb-6">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="bcg-breadcrumb-separator text-white/60">›</span>
          <a href="/industries" className="hover:text-white transition-colors">Industries</a>
          <span className="bcg-breadcrumb-separator text-white/60">›</span>
          <span className="text-white font-medium">Fashion</span>
        </nav>

        {/* Hero Title */}
        <h1 className="text-white mb-6" style={{
          fontSize: 'clamp(38px, 5vw, 52px)',
          lineHeight: '1.2',
          fontWeight: '400',
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          maxWidth: '900px',
        }}>
          Fashion Industry
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 mb-12" style={{
          fontSize: '18px',
          lineHeight: '1.6',
          maxWidth: '700px',
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}>
          Transforming fashion retail through AI-powered personalization, virtual try-on, 
          trend forecasting, and intelligent supply chain optimization.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bcg-btn-primary px-8 py-4 text-base font-medium">
            Explore Solutions
          </button>
          <button className="bcg-btn-secondary px-8 py-4 text-base font-medium bg-white/10 border-white/30 text-white hover:bg-white/20">
            Book a Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
}
