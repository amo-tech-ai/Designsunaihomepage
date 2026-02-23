import { motion } from 'motion/react';
import { Smartphone, Zap, MessageCircle, Sparkles } from 'lucide-react';
import ecommerceImage from 'figma:asset/28a0b8b27dea51fd1b082bd974341714b4d74b22.png';

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    description: 'Gen Z expects seamless mobile shopping with one-tap checkout and instant visual search.',
    stat: '89%',
    statLabel: 'Shop on Mobile',
  },
  {
    icon: MessageCircle,
    title: 'Conversational Commerce',
    description: 'AI chat assistants that understand style preferences and make personalized recommendations.',
    stat: '3.2x',
    statLabel: 'Higher Conversion',
  },
  {
    icon: Sparkles,
    title: 'Virtual Try-On',
    description: 'AR-powered try-on experiences that let customers see products on themselves before buying.',
    stat: '-25%',
    statLabel: 'Return Rate',
  },
  {
    icon: Zap,
    title: 'Social Shopping',
    description: 'Buy directly from social posts without leaving the app — TikTok Shop, Instagram Checkout.',
    stat: '73%',
    statLabel: 'Prefer Social Buy',
  },
];

export function MobileExperience() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
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
            MOBILE COMMERCE
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-6">
            The Mobile-First<br />Fashion Experience
          </h2>
          <p className="text-xl text-[#6B7370] font-light max-w-3xl">
            89% of Gen Z fashion purchases start on mobile. Here's what that means for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-30" />

            {/* Phone Container */}
            <div className="relative z-10 max-w-[400px] mx-auto">
              {/* Phone Frame */}
              <div className="relative bg-neutral-900 rounded-[3rem] p-4 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-900 rounded-full z-20" />

                {/* Screen */}
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                  <img
                    src={ecommerceImage}
                    alt="Mobile Shopping Experience"
                    className="w-full h-full object-cover"
                  />

                  {/* Floating UI Elements */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-8 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-neutral-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-neutral-900">
                          AI Stylist Active
                        </div>
                        <div className="text-xs text-neutral-500">
                          Finding perfect matches...
                        </div>
                      </div>
                    </div>
                    <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 2 }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group"
                >
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#1A3A32] group-hover:bg-[#2d5a4d] transition-colors flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-[#1F2421] mb-3 group-hover:text-[#1A3A32] transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-base text-[#6B7370] leading-relaxed mb-4">
                        {feature.description}
                      </p>

                      {/* Stat */}
                      <div className="inline-flex items-baseline gap-3 bg-[#FAF8F5] px-4 py-2 rounded-full border border-[#8B9D8A]/20">
                        <span className="text-2xl font-light text-[#1A3A32]">
                          {feature.stat}
                        </span>
                        <span className="text-sm text-[#6B7370]">
                          {feature.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-[#6B7370] mb-6">
            Ready to build a mobile-first fashion experience?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A3A32] text-white rounded-full font-medium hover:bg-[#2d5a4d] transition-colors">
            See Mobile Commerce Demo
            <Smartphone className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
