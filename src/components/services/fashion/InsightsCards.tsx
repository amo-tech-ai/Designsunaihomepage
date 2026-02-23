import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    gradient: 'from-rose-600 to-pink-500',
    tag: 'FASHION',
    date: 'February 2026',
    headline: 'Virtual Try-On Is Fashion\'s Biggest Opportunity in 2026',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
  },
  {
    gradient: 'from-emerald-700 to-teal-600',
    tag: 'SUSTAINABILITY',
    date: 'January 2026',
    headline: 'AI Is Finally Making Sustainable Fashion Profitable',
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&h=600&fit=crop',
  },
  {
    gradient: 'from-purple-700 to-violet-600',
    tag: 'AI AGENTS',
    date: 'January 2026',
    headline: 'AI Shopping Agents Will Change How Fashion Is Sold',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop',
  },
  {
    gradient: 'from-orange-600 to-amber-600',
    tag: 'STRATEGY',
    date: 'December 2025',
    headline: 'Increasing Market Share by Revamping Operations',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop',
  },
];

export function InsightsCards() {
  return (
    <section className="relative bg-white py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1A3A32] uppercase mb-6">
            <div className="w-12 h-px bg-[#1A3A32]" />
            INSIGHTS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-6">
            Explore Our Insights on<br />Fashion AI
          </h2>
          <p className="text-xl text-[#6B7370] font-light max-w-3xl">
            Latest research and analysis from our fashion AI practice
          </p>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="h-full bg-white border border-[#8B9D8A]/30 overflow-hidden hover:border-[#1A3A32] transition-all duration-500">
                {/* Image with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.headline}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                  }} />
                  
                  {/* Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white bg-black/30 backdrop-blur-sm rounded uppercase">
                      {insight.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Date */}
                  <div className="text-xs text-[#6B7370] mb-4 font-light tracking-wide uppercase">
                    {insight.date}
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl font-medium text-[#1F2421] leading-tight mb-6 group-hover:text-[#1A3A32] transition-colors">
                    {insight.headline}
                  </h3>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-sm font-medium text-[#1A3A32] group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1A3A32] text-white rounded-full font-medium hover:bg-[#2d5a4d] transition-all duration-300">
            See All Insights
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}