import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Scan, Palette, ShoppingBag, BarChart, Download, ExternalLink } from 'lucide-react';

const tools = [
  {
    category: 'Virtual Try-On',
    icon: Scan,
    tools: [
      {
        name: 'DressX Virtual Wardrobe',
        description: 'Photorealistic avatar generation with fabric drape simulation across 200+ luxury brands.',
        capabilities: ['3D Body Scanning', 'Fabric Physics Engine', 'Multi-Brand Integration'],
        link: 'View Case Study',
      },
      {
        name: 'FIT:MATCH Size Prediction',
        description: 'AI-powered body measurement analysis for accurate size recommendations with 82% accuracy.',
        capabilities: ['Body ML Model', 'Brand-Specific Sizing', 'Confidence Scoring'],
        link: 'Technical Specs',
      },
    ],
  },
  {
    category: 'Trend Forecasting',
    icon: TrendingUp,
    tools: [
      {
        name: 'Heuritech Trend Engine',
        description: 'Computer vision analysis of millions of social media images to predict trends 18-24 months ahead.',
        capabilities: ['Social Media Scanning', 'Color Forecasting', 'Fabric Trend Detection'],
        link: 'View Demo',
      },
      {
        name: 'Demand Signal Processing',
        description: 'Real-time demand forecasting combining social signals, search trends, and purchase patterns.',
        capabilities: ['Multi-Source Aggregation', 'Predictive Analytics', 'SKU-Level Forecasting'],
        link: 'Implementation Guide',
      },
    ],
  },
  {
    category: 'AI Personal Styling',
    icon: Sparkles,
    tools: [
      {
        name: 'Daydream Styling Agent',
        description: 'Conversational AI agent that learns style preferences across 8,000+ brands and retailers.',
        capabilities: ['Style Profile Learning', 'Multi-Brand Search', 'Contextual Recommendations'],
        link: 'Experience Demo',
      },
      {
        name: 'Complete-the-Look Builder',
        description: 'Automated outfit merchandising that feels curated by a personal stylist.',
        capabilities: ['Cross-Category Matching', 'Style Coherence AI', 'Shoppable Looks'],
        link: 'View Examples',
      },
    ],
  },
  {
    category: 'Design Generation',
    icon: Palette,
    tools: [
      {
        name: 'AI Design Studio',
        description: 'Transform sketches and text prompts into fully rendered fashion visuals in minutes.',
        capabilities: ['Sketch-to-Render', 'Text-to-Design', 'Mood Board Generation'],
        link: 'Try It Free',
      },
      {
        name: 'Colorway Variation Engine',
        description: 'Generate 50+ colorway variations from a single design with collection cohesion checking.',
        capabilities: ['Color Theory AI', 'Collection Analysis', 'Trend Integration'],
        link: 'See Gallery',
      },
    ],
  },
];

export function ToolsResources() {
  return (
    <section className="relative bg-white py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1A3A32] uppercase mb-6">
            <div className="w-12 h-px bg-[#1A3A32]" />
            TOOLS & RESOURCES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-6">
            Our Fashion AI Tools<br />and Resources
          </h2>
          <p className="text-xl text-[#6B7370] font-light max-w-3xl">
            Production-ready tools and platforms we use to deliver results for fashion brands
          </p>
        </motion.div>

        {/* Tools Categories */}
        <div className="space-y-20">
          {tools.map((category, catIndex) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-full bg-[#1A3A32] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-light text-[#1F2421]">
                    {category.category}
                  </h3>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + toolIndex * 0.15 }}
                      className="group bg-white border border-[#8B9D8A]/30 hover:border-[#1A3A32] transition-all duration-500 p-8"
                    >
                      {/* Tool Name */}
                      <h4 className="text-xl font-medium text-[#1F2421] mb-4 group-hover:text-[#1A3A32] transition-colors">
                        {tool.name}
                      </h4>

                      {/* Description */}
                      <p className="text-base text-[#6B7370] leading-relaxed mb-6">
                        {tool.description}
                      </p>

                      {/* Capabilities */}
                      <div className="mb-6">
                        <div className="text-xs font-bold tracking-wider text-[#1A3A32] uppercase mb-3">
                          Key Capabilities
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {tool.capabilities.map((capability, capIndex) => (
                            <span
                              key={capIndex}
                              className="px-3 py-1.5 text-xs text-[#1A3A32] bg-[#1A3A32]/5 rounded border border-[#1A3A32]/20"
                            >
                              {capability}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Link */}
                      <button className="inline-flex items-center gap-2 text-sm font-medium text-[#1A3A32] hover:gap-3 transition-all">
                        {tool.link}
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-gradient-to-br from-[#1A3A32] to-[#2d5a4d] text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <Download className="w-12 h-12 mx-auto mb-6 text-white" strokeWidth={1.5} />
            
            <h3 className="text-3xl font-light mb-4">
              Download Our Complete Fashion AI Toolkit Guide
            </h3>
            
            <p className="text-lg text-white/80 mb-8">
              A comprehensive 45-page guide covering implementation strategies, ROI models, and vendor comparisons for every fashion AI use case.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1A3A32] rounded-full font-medium hover:bg-neutral-100 transition-all">
              Download Free Guide
              <Download className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
