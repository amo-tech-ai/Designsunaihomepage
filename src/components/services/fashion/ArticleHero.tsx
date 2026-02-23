import { motion } from 'motion/react';
import genZImage from 'figma:asset/5c33adbf711e6606a4a3682023e0cea76034068a.png';

export function ArticleHero() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-[#6B7370] mb-8"
        >
          <span>Industries</span>
          <span className="mx-2">›</span>
          <span>Fashion</span>
          <span className="mx-2">›</span>
          <span className="text-[#1F2421]">Gen Z & Gen Alpha Market Insights</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-8 leading-tight"
        >
          How Gen Z and Gen Alpha Are Rewiring the Fashion Industry
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-6 mb-12 text-sm text-[#6B7370]"
        >
          <span>February 10, 2026</span>
          <span>•</span>
          <span>12 min read</span>
          <span>•</span>
          <span className="text-[#1A3A32] font-medium">Fashion Industry Insights</span>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative aspect-[16/9] overflow-hidden border border-[#8B9D8A]/30 mb-12"
        >
          <img
            src={genZImage}
            alt="Gen Z Fashion"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Lead Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-xl md:text-2xl text-[#1F2421] leading-relaxed font-light mb-8">
            The fashion industry is experiencing its most significant transformation in decades — driven not by technology alone, but by generational shifts in how consumers discover, evaluate, and purchase fashion. Gen Z (born 1997-2012) and Gen Alpha (born 2013+) represent 40% of global consumers and wield unprecedented influence over fashion trends, brand perception, and industry innovation.
          </p>

          <p className="text-lg text-[#6B7370] leading-relaxed mb-8">
            This isn't just about younger consumers having different preferences. It's about fundamental changes in how fashion is discovered (social-first vs. search-first), how purchases are made (mobile-native vs. desktop), how authenticity is judged (peer-verified vs. brand-claimed), and how value is defined (sustainability + experience vs. logo + status).
          </p>

          <p className="text-lg text-[#6B7370] leading-relaxed">
            For fashion brands, understanding these shifts isn't optional — it's existential. Companies that adapt will thrive. Those that don't will become irrelevant. The data tells a clear story: brands that successfully engage Gen Z and Gen Alpha see 2.5x higher customer lifetime value, 40% better retention rates, and significantly stronger organic social reach.
          </p>
        </motion.div>

        {/* Key Stats Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="my-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '40%', label: 'of Global Consumers', sublabel: 'Gen Z + Alpha' },
            { value: '2.5x', label: 'Higher CLV', sublabel: 'vs. Millennials' },
            { value: '73%', label: 'Social Discovery', sublabel: 'Primary Channel' },
            { value: '84%', label: 'Want Sustainability', sublabel: 'Not Greenwashing' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#FAF8F5] border border-[#8B9D8A]/30 p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-light text-[#1A3A32] mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[#1F2421] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#6B7370]">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
