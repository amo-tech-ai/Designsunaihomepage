import { motion } from 'motion/react';
import { useState } from 'react';

const frameworks = [
  {
    id: 'audit',
    title: 'Brand & Style Audit',
    steps: [
      {
        number: '①',
        title: 'Visual DNA\nMapping',
        description: 'Catalog structure, sizing, brand identity',
      },
      {
        number: '②',
        title: 'Customer\nJourney',
        description: 'Discovery, try-on, purchase, returns path mapped',
      },
      {
        number: '③',
        title: 'Data\nReadiness',
        description: 'Product attributes, images, measurements assessed',
      },
      {
        number: '④',
        title: 'AI\nOpportunity',
        description: 'Prioritized use cases ranked by ROI and feasibility',
      },
    ],
  },
  {
    id: 'implementation',
    title: 'AI Implementation',
    steps: [
      {
        number: '①',
        title: 'Computer\nVision',
        description: 'Train models on your garments, fabrics',
      },
      {
        number: '②',
        title: 'Catalog &\nPLM',
        description: 'Product data enrichment + lifecycle management integration',
      },
      {
        number: '③',
        title: 'Storefront\nDeploy',
        description: 'Virtual try-on + AI stylist on digital channels',
      },
      {
        number: '④',
        title: 'Trend\nEngine',
        description: 'Social scanning + demand prediction activated',
      },
    ],
  },
  {
    id: 'measure',
    title: 'Measure & Scale',
    steps: [
      {
        number: 'RETURNS',
        title: 'RETURNS\nTRACKING',
        description: 'Size-related returns measured pre/post AI',
      },
      {
        number: 'REVENUE',
        title: 'REVENUE\nIMPACT',
        description: 'AOV, CVR, CLV attribution by AI feature',
      },
      {
        number: 'WASTE',
        title: 'WASTE\nREDUCTION',
        description: 'Overproduction and markdown metrics tracked',
      },
      {
        number: 'EXPAND',
        title: 'EXPAND\n& EVOLVE',
        description: 'New categories, markets, channels added',
      },
    ],
  },
];

export function FrameworkTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-[#FAF8F5] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#6B7370] uppercase mb-4">
            <div className="w-8 h-px bg-[#1A3A32]" />
            FRAMEWORK
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F2421]">
            Our Systematic Approach to Fashion AI
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-12 border-b border-[#8B9D8A]/30">
          {frameworks.map((framework, index) => (
            <button
              key={framework.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-4 font-semibold text-sm tracking-wide transition-all ${
                activeTab === index
                  ? 'text-[#1A3A32] border-b-2 border-[#1A3A32]'
                  : 'text-[#6B7370] hover:text-[#1A3A32]'
              }`}
            >
              {framework.title}
            </button>
          ))}
        </div>

        {/* Framework Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-[#8B9D8A]/30 p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {frameworks[activeTab].steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Box */}
                <div className="border border-[#1A3A32] p-6 min-h-[240px] flex flex-col">
                  {/* Number */}
                  <div className="text-sm font-semibold text-[#1A3A32] mb-4 text-center">
                    {step.number}
                  </div>

                  {/* Title */}
                  <div className="text-base font-semibold text-[#1F2421] mb-4 text-center whitespace-pre-line flex-grow flex items-center justify-center">
                    {step.title}
                  </div>

                  {/* Description */}
                  <div className="text-xs text-[#6B7370] leading-relaxed text-center font-light border-t border-[#8B9D8A]/30 pt-4">
                    {step.description}
                  </div>
                </div>

                {/* Arrow */}
                {index < frameworks[activeTab].steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-[#1A3A32]">
                      <path d="M6 4 L10 8 L6 12" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
