import { motion } from 'motion/react';
import { Scan, TrendingUp, Sparkles, Palette, ShoppingBag, Ruler, ArrowUpRight } from 'lucide-react';

const services = [
  {
    badge: { text: 'HIGH DEMAND', color: 'from-emerald-600 to-teal-500' },
    icon: Scan,
    title: 'AI Virtual Try-On',
    tagline: 'See the garment before you buy',
    description: 'Customer uploads a selfie → sees themselves wearing any garment with accurate fit visualization, fabric drape simulation, and AI-powered size recommendations.',
    features: ['Selfie Avatar', 'Fabric Simulation', 'Size AI', 'Multi-Brand'],
    metric: { label: 'Return Rate Reduction', value: '-25%', trend: '+17%' },
    example: 'DressX creates photorealistic avatars — customers try on garments across 200+ luxury brands. Returns reduced 17-25% in pilots.',
    buildCost: '$40K–$120K',
    timeToROI: '6–12 months',
    color: 'emerald',
  },
  {
    badge: { text: 'STRATEGIC', color: 'from-orange-600 to-amber-500' },
    icon: TrendingUp,
    title: 'AI Trend Forecasting',
    tagline: 'Predict what sells 18 months ahead',
    description: 'Scans millions of social media images, runway footage, and street style → predicts colors, fabrics, prints, and silhouettes before they peak.',
    features: ['Social Scanning', '18–24mo Ahead', 'Demand Signals', 'Color Prediction'],
    metric: { label: 'Overproduction Reduction', value: '-30%', trend: '+22%' },
    example: 'Heuritech analyzes millions of images to predict demand by color and fabric. 74% of fashion brands now use AI forecasting.',
    buildCost: '$25K–$80K',
    timeToROI: '3–6 months',
    color: 'orange',
  },
  {
    badge: { text: 'AI AGENTS', color: 'from-blue-600 to-indigo-500' },
    icon: Sparkles,
    title: 'AI Personal Stylist',
    tagline: 'A true stylist, not a recommendation engine',
    description: 'An evolving AI agent that learns body shape, style preferences, occasion needs, and lifestyle context across 8,000+ brands.',
    features: ['Style Passport', '8,000+ Brands', 'Multimodal', 'Evolving Memory'],
    metric: { label: 'Recommendation Accuracy', value: '99.8%', trend: '+12%' },
    example: 'Daydream launched agentic shopping across 8,000 brands. Crescendo AI achieved 99.8% accuracy. These agents style, not filter.',
    buildCost: '$25K–$80K',
    timeToROI: '3–6 months',
    color: 'blue',
  },
  {
    badge: { text: 'CREATIVE AI', color: 'from-purple-600 to-violet-500' },
    icon: Palette,
    title: 'AI Design Generation',
    tagline: 'Accelerate the creative process',
    description: 'Designers upload sketches or type prompts → AI generates rendered fashion visuals, mood boards, colorway variations, and collection cohesion checks.',
    features: ['Sketch-to-Render', 'Text-to-Design', 'Mood Boards', 'Collection Check'],
    metric: { label: 'Design Cycle Speedup', value: '10x', trend: '+400%' },
    example: 'What took weeks now takes hours. AI generates 50+ design variations from a single sketch. Designers curate rather than create from scratch.',
    buildCost: '$20K–$60K',
    timeToROI: '2–4 months',
    color: 'purple',
  },
  {
    badge: { text: 'HIGH AOV', color: 'from-rose-600 to-pink-500' },
    icon: ShoppingBag,
    title: 'Complete-the-Look Builder',
    tagline: 'Turn browsers into outfit buyers',
    description: 'Automatically merchandises complete outfits around any single product. Shoppable looks generated at scale that feel curated by a stylist.',
    features: ['Outfit Builder', 'Cross-Category', 'Shoppable', 'Style-Matched'],
    metric: { label: 'AOV Lift', value: '+26%', trend: '+18%' },
    example: 'FINDMINE auto-merchandises outfits for major retailers. Customers purchase 2.5x more items per session. AOV increases of 26% are typical.',
    buildCost: '$15K–$50K',
    timeToROI: '3–6 months',
    color: 'rose',
  },
  {
    badge: { text: 'COST SAVER', color: 'from-amber-600 to-yellow-500' },
    icon: Ruler,
    title: 'AI Size & Fit Prediction',
    tagline: 'Eliminate the #1 reason for returns',
    description: 'Analyzes body measurements, brand-specific sizing curves, and fit preferences → recommends exact size with confidence score.',
    features: ['Body ML', 'Brand-Specific', 'Confidence Score', 'Fit Preference'],
    metric: { label: 'Size Returns Down', value: '-22%', trend: '+14%' },
    example: 'AI predicts purchase intent with 75–82% accuracy. Size-related returns cost $15–$30 each in processing alone.',
    buildCost: '$20K–$60K',
    timeToROI: '3–6 months',
    color: 'amber',
  },
];

export function IllustratedServiceCards() {
  return (
    <section className="relative bg-white py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1A3A32] uppercase mb-6">
            <div className="w-12 h-px bg-[#1A3A32]" />
            SOLUTIONS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-6">
            Our Fashion AI Services
          </h2>
          <p className="text-xl text-[#6B7370] font-light max-w-3xl">
            Production-ready AI solutions that preserve creativity while revolutionizing operations
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="h-full bg-white border border-[#8B9D8A]/30 hover:border-[#1A3A32] transition-all duration-500 overflow-hidden flex flex-col">
                  {/* Gradient Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${service.badge.color} overflow-hidden`}>
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                      }} />
                    </div>

                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 100 }}
                        className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                      </motion.div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white bg-black/20 backdrop-blur-sm rounded uppercase">
                        {service.badge.text}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-8">
                    {/* Title & Tagline */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-medium text-[#1F2421] mb-2 group-hover:text-[#1A3A32] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#6B7370] italic">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#6B7370] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs text-[#1A3A32] bg-[#1A3A32]/5 rounded-full border border-[#1A3A32]/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Metric Card */}
                    <div className="bg-[#FAF8F5] border border-[#8B9D8A]/20 p-6 mb-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-xs text-[#6B7370] mb-2 uppercase tracking-wider">
                            {service.metric.label}
                          </div>
                          <div className="text-4xl font-light text-[#1A3A32]">
                            {service.metric.value}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-600">
                          <ArrowUpRight className="w-4 h-4" />
                          <span className="text-sm font-medium">{service.metric.trend}</span>
                        </div>
                      </div>
                    </div>

                    {/* Example */}
                    <div className="mb-6">
                      <div className="text-xs font-bold tracking-wider text-[#1A3A32] uppercase mb-2">
                        Real-World Example
                      </div>
                      <p className="text-sm text-[#6B7370] leading-relaxed">
                        {service.example}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-6 border-t border-[#8B9D8A]/20">
                      <div className="flex items-center justify-between text-xs text-[#6B7370]">
                        <div>
                          <span className="font-semibold text-[#1F2421]">Build:</span> {service.buildCost}
                        </div>
                        <div>
                          <span className="font-semibold text-[#1F2421]">ROI:</span> {service.timeToROI}
                        </div>
                      </div>
                    </div>

                    {/* Hover CTA */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: 'auto' }}
                      className="overflow-hidden"
                    >
                      <button className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-[#1A3A32] text-white rounded font-medium hover:bg-[#2d5a4d] transition-colors">
                        Learn More
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </motion.div>
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
