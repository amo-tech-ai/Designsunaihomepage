/**
 * BCG-Style Related Content Footer Section
 * Dark background with white text, small cards
 * Matches BCG footer content pattern
 */

const relatedContent = [
  {
    category: 'Industry',
    title: 'E-Commerce & Digital Retail',
    description: 'AI solutions for online retail optimization',
  },
  {
    category: 'Industry',
    title: 'Luxury & Premium Brands',
    description: 'Personalization without losing brand prestige',
  },
  {
    category: 'Capability',
    title: 'Computer Vision AI',
    description: 'Virtual try-on, visual search, quality control',
  },
  {
    category: 'Capability',
    title: 'Generative AI',
    description: 'Content creation, design assistance, copywriting',
  },
];

export function BCGRelatedContent() {
  return (
    <section className="bg-[#212427] py-20">
      <div className="bcg-container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-white text-2xl font-normal mb-4">
            Related Content
          </h2>
        </div>

        {/* Related Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedContent.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group bg-white/5 border border-white/10 p-6 transition-colors duration-200 hover:bg-white/10"
              style={{ borderRadius: '0' }}
            >
              {/* Category */}
              <div className="text-xs font-semibold uppercase text-[#00A86B] mb-3" style={{ letterSpacing: '0.05em' }}>
                {item.category}
              </div>

              {/* Title */}
              <h3 className="text-base font-medium text-white mb-2 group-hover:text-[#00A86B] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/70">
                {item.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 text-[#00A86B] text-lg">→</div>
            </a>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm">
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            All Industries
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            All Capabilities
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            Case Studies
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
