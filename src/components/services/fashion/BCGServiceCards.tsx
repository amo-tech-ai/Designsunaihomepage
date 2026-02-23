/**
 * BCG-Style Service Cards (3×2 Grid)
 * Sharp corners, thin borders, numbered, badges, green ROI values
 * Matches BCG service offering pattern
 */

const services = [
  {
    number: '01',
    badge: 'HIGH DEMAND',
    badgeColor: '#00A86B',
    title: 'AI virtual try-on and size prediction',
    description: 'Reduce returns by 25% with photorealistic virtual try-on powered by computer vision and AI body measurement.',
    tags: ['Computer Vision', '3D Rendering', 'Size ML Model'],
    roiMetric: '+26% AOV',
    buildCost: '$150K–$400K',
    roiTime: '4–8 months',
  },
  {
    number: '02',
    badge: '2026 TREND',
    badgeColor: '#1D4ED8',
    title: 'AI trend forecasting and demand planning',
    description: 'Predict fashion trends 18-24 months ahead using social media analysis, runway data, and purchase pattern AI.',
    tags: ['Social Listening', 'Predictive Analytics', 'Demand Forecasting'],
    roiMetric: '-30% waste',
    buildCost: '$200K–$500K',
    roiTime: '6–12 months',
  },
  {
    number: '03',
    badge: 'QUICK WIN',
    badgeColor: '#D97706',
    title: 'AI personal styling agents',
    description: 'Conversational AI that learns customer preferences and recommends personalized outfits across your entire catalog.',
    tags: ['NLP', 'Recommendation Engine', 'Style Transfer'],
    roiMetric: '+40% conversion',
    buildCost: '$120K–$300K',
    roiTime: '3–6 months',
  },
  {
    number: '04',
    badge: 'STRATEGIC',
    badgeColor: '#7C3AED',
    title: 'AI-assisted design generation',
    description: 'Transform sketches into production-ready designs and generate 50+ colorway variations in minutes with generative AI.',
    tags: ['Generative AI', 'Style Transfer', 'Colorway Engine'],
    roiMetric: '10x faster',
    buildCost: '$180K–$450K',
    roiTime: '5–9 months',
  },
  {
    number: '05',
    badge: 'HIGH DEMAND',
    badgeColor: '#00A86B',
    title: 'Complete-the-look AI merchandising',
    description: 'Automatically generate shoppable outfit combinations that feel hand-curated by a personal stylist.',
    tags: ['Style Matching', 'Cross-Sell AI', 'Visual Coherence'],
    roiMetric: '+35% basket size',
    buildCost: '$100K–$250K',
    roiTime: '3–7 months',
  },
  {
    number: '06',
    badge: 'EMERGING',
    badgeColor: '#DC2626',
    title: 'AI supply chain optimization',
    description: 'Reduce overstock and stockouts with demand forecasting, dynamic pricing, and intelligent inventory allocation.',
    tags: ['Demand Planning', 'Dynamic Pricing', 'Inventory AI'],
    roiMetric: '-20% costs',
    buildCost: '$250K–$600K',
    roiTime: '8–14 months',
  },
];

export function BCGServiceCards() {
  return (
    <section className="bcg-section bg-white">
      <div className="bcg-container">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="bcg-text-section text-[#212427] mb-4">
            How we help fashion retailers harness AI without compromising creativity
          </h2>
          <p className="bcg-text-body text-[#696969] max-w-3xl">
            Six AI capabilities we build for fashion brands—from virtual try-on to trend forecasting—
            each with proven ROI and implementation roadmaps.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-[#E5E7EB] p-8 transition-colors duration-200 hover:bg-[#F8F9FA] relative overflow-hidden"
              style={{ borderRadius: '0' }}
            >
              {/* Large Faded Number in Corner */}
              <div className="absolute top-4 right-6 text-[120px] font-light leading-none text-[#E5E7EB] select-none pointer-events-none" style={{ fontFamily: 'Georgia, serif' }}>
                {service.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Badge */}
                <div className="mb-4">
                  <span 
                    className="inline-block px-3 py-1 text-xs font-bold uppercase text-white"
                    style={{ 
                      backgroundColor: service.badgeColor,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#212427] mb-3" style={{ lineHeight: '1.4' }}>
                  {service.title}
                </h3>

                {/* Green Accent Line */}
                <div className="bcg-accent-line mb-4" />

                {/* Description */}
                <p className="text-sm text-[#696969] mb-6" style={{ lineHeight: '1.6' }}>
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 text-xs text-[#696969]">
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>
                      {tag}
                      {tagIndex < service.tags.length - 1 && <span className="mx-2">·</span>}
                    </span>
                  ))}
                </div>

                {/* ROI Metric */}
                <div className="mb-4">
                  <div className="text-xs text-[#696969] uppercase mb-1" style={{ letterSpacing: '0.05em' }}>
                    ROI Impact
                  </div>
                  <div className="text-2xl font-light" style={{ color: '#00A86B' }}>
                    {service.roiMetric}
                  </div>
                </div>

                {/* Build Info */}
                <div className="pt-4 border-t border-[#E5E7EB] flex justify-between items-center text-xs text-[#696969]">
                  <span>Build: {service.buildCost}</span>
                  <span>ROI: {service.roiTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bcg-btn-primary px-8 py-4">
            Download Full AI Implementation Guide
          </button>
          <p className="mt-4 text-sm text-[#696969]">
            45-page roadmap with vendor comparisons, build vs. buy analysis, and ROI models
          </p>
        </div>
      </div>
    </section>
  );
}
