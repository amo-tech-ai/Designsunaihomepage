/**
 * BCG-Style Insights Section
 * Article cards with consistent image aspect ratio, no rounded corners
 * Matches BCG content library pattern
 */

import articleImage1 from 'figma:asset/5c33adbf711e6606a4a3682023e0cea76034068a.png';
import articleImage2 from 'figma:asset/1673767e1bd348faf57bdbdfcbf0b9740304165e.png';

const insights = [
  {
    category: 'Article',
    title: 'How Gen Z and Gen Alpha are rewiring the fashion industry',
    date: 'Feb 10, 2026',
    readTime: '12 min read',
    image: articleImage1,
  },
  {
    category: 'Executive Guide',
    title: 'Scaling next-gen materials in fashion: An executive guide',
    date: 'Feb 5, 2026',
    readTime: '18 min read',
    image: articleImage2,
  },
  {
    category: 'Case Study',
    title: 'How a $2B fashion retailer reduced returns by 25% with AI virtual try-on',
    date: 'Jan 28, 2026',
    readTime: '8 min read',
    image: null, // Will use placeholder
  },
  {
    category: 'Industry Report',
    title: 'The state of AI in fashion retail: 2026 benchmark report',
    date: 'Jan 15, 2026',
    readTime: '45 min read',
    image: null, // Will use placeholder
  },
];

export function BCGInsightsSection() {
  return (
    <section className="bcg-section bg-[#F8F9FA]">
      <div className="bcg-container">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="bcg-text-section text-[#212427] mb-4">
            Our insights on the fashion industry
          </h2>
          <p className="bcg-text-body text-[#696969] max-w-3xl">
            Research, case studies, and executive guides on AI implementation in fashion retail.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <a
              key={index}
              href="#"
              className="group bg-white border border-[#E5E7EB] overflow-hidden transition-colors duration-200 hover:bg-[#F8F9FA]"
              style={{ borderRadius: '0' }}
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-[#E5E7EB] overflow-hidden">
                {insight.image ? (
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#004E89] to-[#00A86B] flex items-center justify-center">
                    <div className="text-white text-6xl font-light opacity-20">
                      {index + 1}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase text-[#00A86B]" style={{ letterSpacing: '0.05em' }}>
                    {insight.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-medium text-[#212427] mb-3 group-hover:text-[#004E89] transition-colors" style={{ lineHeight: '1.5' }}>
                  {insight.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center text-xs text-[#696969] gap-3">
                  <span>{insight.date}</span>
                  <span>·</span>
                  <span>{insight.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-12 text-center">
          <button className="bcg-btn-secondary px-8 py-3">
            See All Insights
          </button>
        </div>
      </div>
    </section>
  );
}
