import { motion } from 'motion/react';
import { Scan, TrendingUp, Sparkles, Palette, ShoppingBag, Ruler } from 'lucide-react';

const services = [
  {
    badge: { text: 'HIGH DEMAND', color: 'bg-emerald-500' },
    icon: Scan,
    title: 'AI Virtual Try-On',
    description: 'Customer uploads a selfie → sees themselves wearing any garment with accurate fit visualization, fabric drape simulation, and AI-powered size recommendations. Works across brands, categories, and body types. Reduces the single biggest cost in fashion: returns.',
    features: ['Selfie Avatar', 'Fabric Simulation', 'Size AI', 'Multi-Brand', 'Body Inclusive'],
    metric: { label: 'Return Rate Reduction', value: '-25%' },
    example: 'DressX Agent creates photorealistic avatars from selfies — customers can try on garments across 200+ luxury brands and 1M+ products. Returns reduced 17-25% in pilots. Google\'s virtual try-on now supports all body types from XXS to 4XL.',
    buildCost: '$40K–$120K',
    timeToROI: '6–12 months',
  },
  {
    badge: { text: 'STRATEGIC', color: 'bg-orange-500' },
    icon: TrendingUp,
    title: 'AI Trend Forecasting',
    description: 'Scans millions of social media images, runway show footage, street style photography, and search data → predicts colors, fabrics, prints, and silhouettes 18–24 months before they peak. Transforms buying decisions from gut feeling to data-backed confidence.',
    features: ['Social Scanning', '18–24mo Ahead', 'Demand Signals', 'Color Prediction'],
    metric: { label: 'Overproduction Reduction', value: '-30%' },
    example: 'Heuritech analyzes millions of images from social media and streets to predict demand by color, fabric, and print. 74% of fashion brands now use AI-based demand forecasting. This directly attacks overproduction — fashion\'s biggest environmental and financial waste.',
    buildCost: '$25K–$80K',
    timeToROI: '3–6 months',
  },
  {
    badge: { text: 'AI AGENTS', color: 'bg-blue-500' },
    icon: Sparkles,
    title: 'AI Personal Stylist',
    description: 'An evolving AI agent that learns body shape, style preferences, occasion needs, and lifestyle context. Not a recommendation engine — a true personal stylist that remembers, anticipates, and improves across every interaction. Works across 8,000+ brands.',
    features: ['Style Passport', '8,000+ Brands', 'Multimodal', 'Evolving Memory'],
    metric: { label: 'Recommendation Accuracy', value: '99.8%' },
    example: 'Daydream launched agentic chat-based shopping across 8,000 brands + 200 retailers. Crescendo AI achieved 99.8% accuracy in fashion recommendations. These agents don\'t just filter — they style.',
    buildCost: '$25K–$80K',
    timeToROI: '3–6 months',
  },
  {
    badge: { text: 'CREATIVE AI', color: 'bg-purple-500' },
    icon: Palette,
    title: 'AI Design Generation',
    description: 'Designers upload rough hand-drawn sketches or type text prompts → AI generates fully rendered fashion visuals, mood boards, colorway variations, and collection cohesion checks. Accelerates the creative process without replacing the creative vision.',
    features: ['Sketch-to-Render', 'Text-to-Design', 'Mood Boards', 'Collection Check'],
    metric: { label: 'Design Cycle Speedup', value: '10x' },
    example: 'What used to take design teams weeks — rendering concepts, creating variations, testing colorways — now takes hours. AI generates 50+ design variations from a single sketch. Designers curate and refine rather than create from scratch every time.',
    buildCost: '$20K–$60K',
    timeToROI: '2–4 months',
  },
  {
    badge: { text: 'HIGH AOV', color: 'bg-emerald-500' },
    icon: ShoppingBag,
    title: 'Complete-the-Look Builder',
    description: 'Automatically merchandises complete outfits around any single product. Customer views a blazer → AI presents the perfect shirt, trousers, shoes, and accessories that match. Shoppable looks generated at scale that feel curated by a stylist, not an algorithm.',
    features: ['Outfit Builder', 'Cross-Category', 'Shoppable', 'Style-Matched'],
    metric: { label: 'Average Order Value Lift', value: '+26%' },
    example: 'FINDMINE auto-merchandises outfits around single products for major fashion retailers. Customers who engage with complete-the-look features purchase 2.5x more items per session. AOV increases of 26% are typical.',
    buildCost: '$15K–$50K',
    timeToROI: '3–6 months',
  },
  {
    badge: { text: 'COST SAVER', color: 'bg-orange-500' },
    icon: Ruler,
    title: 'AI Size & Fit Prediction',
    description: 'Analyzes body measurements (from photos or previous purchases), brand-specific sizing curves, and fit preference data → recommends exact size with a confidence score. Eliminates the #1 reason for fashion returns: wrong size.',
    features: ['Body ML', 'Brand-Specific', 'Confidence Score', 'Fit Preference'],
    metric: { label: 'Size-Related Returns Down', value: '-22%' },
    example: 'AI predicts purchase intent with 75–82% accuracy in the first 40 seconds of a session. Size-related returns are fashion\'s costliest problem — each return costs $15–$30 in processing alone, before considering lost lifetime value.',
    buildCost: '$20K–$60K',
    timeToROI: '3–6 months',
  },
];

export function ServiceCards() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#6B7370] uppercase mb-4">
            <div className="w-8 h-px bg-[#1A3A32]" />
            SOLUTIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F2421]">
            Our Fashion AI Services
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="h-full bg-white border border-[#8B9D8A]/30 hover:border-[#1A3A32] transition-all duration-300 flex flex-col">
                  {/* Header */}
                  <div className="p-8 border-b border-[#8B9D8A]/30">
                    {/* Badge & Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <span className={`inline-block px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase ${service.badge.color} rounded`}>
                        {service.badge.text}
                      </span>
                      <Icon className="w-6 h-6 text-[#1A3A32]" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#1F2421] mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#6B7370] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="p-8 border-b border-[#8B9D8A]/30">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs text-[#1A3A32] bg-[#1A3A32]/5 rounded-full border border-[#1A3A32]/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="p-8 bg-[#FAF8F5] border-b border-[#8B9D8A]/30">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#6B7370] uppercase tracking-wide">
                        {service.metric.label}
                      </span>
                      <span className="text-3xl font-serif text-[#1A3A32]">
                        {service.metric.value}
                      </span>
                    </div>
                  </div>

                  {/* Example */}
                  <div className="p-8 border-b border-[#8B9D8A]/30 flex-grow">
                    <div className="text-xs font-semibold text-[#1A3A32] uppercase tracking-wide mb-3">
                      Real-World Example
                    </div>
                    <p className="text-sm text-[#6B7370] leading-relaxed font-light">
                      {service.example}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="p-8 bg-white">
                    <div className="flex items-center justify-between text-xs text-[#6B7370]">
                      <div>
                        <span className="font-semibold">Build Cost:</span> {service.buildCost}
                      </div>
                      <div>
                        <span className="font-semibold">Time to ROI:</span> {service.timeToROI}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}