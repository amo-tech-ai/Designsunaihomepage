import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function ContentSections() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        {/* Section 1: Discovery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1A3A32] uppercase mb-6">
            <div className="w-8 h-px bg-[#1A3A32]" />
            01
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-[#1F2421] mb-8">
            Social-First Discovery Is Rewriting Fashion Marketing
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#6B7370] leading-relaxed mb-6">
              Traditional fashion marketing followed a predictable path: runway shows → fashion magazines → retail windows → purchase. Gen Z and Gen Alpha have completely inverted this model. Today, 73% of Gen Z discover new fashion brands through social media — primarily TikTok, Instagram, and YouTube — before ever visiting a brand website.
            </p>

            <p className="text-lg text-[#6B7370] leading-relaxed mb-6">
              This shift demands that fashion brands think like media companies. The most successful brands now produce dozens of pieces of social content weekly, optimized not for brand guidelines but for platform algorithms and creator aesthetics. Zara's TikTok strategy, for example, features real customers styling their purchases rather than professional models in editorial shoots.
            </p>
          </div>

          {/* Data Table */}
          <div className="my-12 bg-[#FAF8F5] border border-[#8B9D8A]/30 overflow-hidden">
            <div className="p-8">
              <h4 className="text-sm font-bold tracking-wider text-[#1A3A32] uppercase mb-6">
                Fashion Discovery Channels by Generation
              </h4>
              
              <div className="space-y-4">
                {[
                  { channel: 'Social Media', genZ: 73, millennial: 42, genX: 18 },
                  { channel: 'Search Engines', genZ: 34, millennial: 58, genX: 64 },
                  { channel: 'Brand Websites', genZ: 22, millennial: 45, genX: 52 },
                  { channel: 'Influencer Recs', genZ: 68, millennial: 38, genX: 12 },
                  { channel: 'Traditional Ads', genZ: 8, millennial: 24, genX: 41 },
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 items-center">
                    <div className="text-base text-[#1F2421] font-medium">
                      {row.channel}
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-[#1A3A32] mb-1">
                        {row.genZ}%
                      </div>
                      <div className="text-xs text-[#6B7370]">Gen Z</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-[#6B7370] mb-1">
                        {row.millennial}%
                      </div>
                      <div className="text-xs text-[#6B7370]">Millennial</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-[#6B7370] mb-1">
                        {row.genX}%
                      </div>
                      <div className="text-xs text-[#6B7370]">Gen X</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-8 py-4 bg-white border-t border-[#8B9D8A]/30">
              <p className="text-xs text-[#6B7370]">
                Source: McKinsey Consumer Fashion Survey 2025 (n=3,200 respondents, US market)
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="my-12 pl-8 border-l-4 border-[#1A3A32]">
            <Quote className="w-8 h-8 text-[#1A3A32] mb-4" />
            <p className="text-2xl font-light text-[#1F2421] leading-relaxed mb-4 italic">
              "We're not competing with other fashion brands anymore. We're competing with TikTok creators for attention."
            </p>
            <p className="text-sm text-[#6B7370]">
              — CMO, Fast Fashion Retailer (Annual Revenue: $2.8B)
            </p>
          </div>
        </motion.div>

        {/* Section 2: Authenticity */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1A3A32] uppercase mb-6">
            <div className="w-8 h-px bg-[#1A3A32]" />
            02
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-[#1F2421] mb-8">
            Authenticity Over Aspiration: The End of Traditional Luxury Marketing
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#6B7370] leading-relaxed mb-6">
              Gen Z's relationship with luxury fashion fundamentally differs from previous generations. While Millennials aspired to own luxury as status symbols, Gen Z seeks authenticity, craft, and story. They're more likely to buy vintage Hermès than new fast fashion, not because of the logo, but because of the craftsmanship and sustainability.
            </p>

            <p className="text-lg text-[#6B7370] leading-relaxed mb-6">
              This shift is forcing luxury brands to become more transparent. Brands like Gucci and Burberry now publish detailed sustainability reports, supply chain information, and material sourcing documentation — not because they're legally required to, but because Gen Z demands it. 84% of Gen Z say they'll pay more for sustainable fashion, but only if they can verify the claims.
            </p>
          </div>

          {/* Key Points Grid */}
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Craft Over Logo',
                stat: '67%',
                description: 'Gen Z prefer brands that highlight craftsmanship over prominent logos',
              },
              {
                title: 'Peer Verification',
                stat: '82%',
                description: 'Trust peer reviews more than brand marketing or influencer partnerships',
              },
              {
                title: 'Sustainability Proof',
                stat: '84%',
                description: 'Will pay premium for sustainable fashion if verified (not greenwashed)',
              },
              {
                title: 'Story Matters',
                stat: '71%',
                description: 'More likely to purchase from brands with authentic founder stories',
              },
            ].map((point, index) => (
              <div
                key={index}
                className="bg-[#FAF8F5] border border-[#8B9D8A]/30 p-8"
              >
                <div className="text-4xl font-light text-[#1A3A32] mb-3">
                  {point.stat}
                </div>
                <div className="text-lg font-medium text-[#1F2421] mb-3">
                  {point.title}
                </div>
                <p className="text-sm text-[#6B7370] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: Experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1A3A32] uppercase mb-6">
            <div className="w-8 h-px bg-[#1A3A32]" />
            03
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-[#1F2421] mb-8">
            Experience-First Commerce: Why Traditional E-Commerce Is Failing
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#6B7370] leading-relaxed mb-6">
              Gen Z expects shopping to be an experience, not a transaction. Static product pages with descriptions and size charts feel dated. They want to see products styled by real people, try them on virtually, get AI-powered recommendations that actually understand their style, and complete purchases without leaving their social apps.
            </p>

            <p className="text-lg text-[#6B7370] leading-relaxed">
              Brands that have embraced experience-first commerce see dramatic results: virtual try-on reduces returns by 25%, AI styling increases average order value by 40%, and social commerce (buy directly from Instagram/TikTok) converts 3x better than traditional e-commerce for Gen Z shoppers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
