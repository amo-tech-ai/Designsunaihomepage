import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function InsightsGallery() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const insights = [
    {
      title: 'AI-Powered Product Recommendations',
      category: 'Machine Learning',
      preview: 'Boost conversion rates by 35% with personalized shopping experiences',
      image: 'futuristic shopping ai',
    },
    {
      title: 'Mobile-First Checkout Optimization',
      category: 'User Experience',
      preview: 'Reduce cart abandonment with streamlined mobile payment flows',
      image: 'mobile ecommerce checkout',
    },
    {
      title: 'Omnichannel Commerce Strategy',
      category: 'Business Strategy',
      preview: 'Unify customer experiences across web, mobile, and social platforms',
      image: 'multichannel retail digital',
    },
    {
      title: 'Real-Time Inventory Intelligence',
      category: 'Operations',
      preview: 'Smart stock management powered by predictive analytics',
      image: 'warehouse technology automation',
    },
  ];

  const containerVariants = prefersReducedMotion
    ? {}
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      };

  const itemVariants = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: 'easeOut',
          },
        },
      };

  return (
    <section className="relative py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          {...(prefersReducedMotion ? {} : {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 }
          })}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Explore Our Insights on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              E-Commerce
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert perspectives on digital commerce transformation and innovation
          </p>
        </motion.div>

        {/* Insights Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <motion.div
                    {...(prefersReducedMotion ? {} : {
                      whileHover: { scale: 1.05 },
                      transition: { duration: 0.4 }
                    })}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-${1500000000000 + index}?w=400&h=300&fit=crop`}
                      alt={insight.title}
                      className="w-full h-full object-cover"
                      fallbackText={insight.image}
                    />
                  </motion.div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-xs text-emerald-200">
                    {insight.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {insight.preview}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
