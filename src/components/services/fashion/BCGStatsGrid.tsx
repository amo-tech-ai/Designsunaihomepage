/**
 * BCG-Style Stats Grid (4-Column)
 * Sharp corners, thin borders, green stat numbers
 * Matches BCG Exhibit pattern
 */

const stats = [
  {
    value: '44%',
    label: 'of fashion brands use AI',
    source: 'Up from 20% in 2023',
    sublabel: 'AI Adoption Rate',
  },
  {
    value: '$275B',
    label: 'potential profit impact',
    source: 'McKinsey analysis',
    sublabel: 'Industry Value',
  },
  {
    value: '73%',
    label: 'of Gen Z discover via social',
    source: 'Primary discovery channel',
    sublabel: 'Social Commerce',
  },
  {
    value: '40.8%',
    label: 'CAGR for fashion AI market',
    source: '2024-2030 projection',
    sublabel: 'Market Growth',
  },
];

export function BCGStatsGrid() {
  return (
    <section className="bcg-section bg-white">
      <div className="bcg-container">
        {/* Section Header */}
        <div className="mb-12">
          <div className="bcg-exhibit-label">EXHIBIT 1</div>
          <h2 className="bcg-text-section text-[#212427] mb-4">
            The AI transformation of fashion retail
          </h2>
          <p className="bcg-text-body text-[#696969] max-w-3xl">
            Fashion brands are rapidly adopting AI across the value chain—from design and forecasting 
            to personalization and supply chain optimization.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E7EB]" style={{ border: '1px solid #E5E7EB' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 flex flex-col"
            >
              {/* Stat Number */}
              <div className="bcg-stat-number mb-3" style={{ color: '#00A86B' }}>
                {stat.value}
              </div>

              {/* Sublabel */}
              <div className="text-sm font-semibold text-[#212427] mb-2 uppercase" style={{ letterSpacing: '0.05em' }}>
                {stat.sublabel}
              </div>

              {/* Description */}
              <div className="text-sm text-[#696969] mb-4 flex-1" style={{ lineHeight: '1.5' }}>
                {stat.label}
              </div>

              {/* Source */}
              <div className="bcg-source-note border-t border-[#E5E7EB] pt-3">
                {stat.source}
              </div>
            </div>
          ))}
        </div>

        {/* Source Note */}
        <div className="mt-6">
          <p className="bcg-source-note">
            Source: McKinsey Fashion AI Report 2025; Industry surveys 2024-2025
          </p>
        </div>
      </div>
    </section>
  );
}
