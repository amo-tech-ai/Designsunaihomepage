import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

export function RelatedServices() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const services = [
    {
      icon: TrendingUp,
      title: 'Marketing & Sales Intelligence',
      description: 'AI-powered customer insights and automated lead nurturing systems',
      image: 'marketing analytics dashboard',
      link: '/services/ai-sales-marketing',
    },
    {
      icon: Sparkles,
      title: 'Digital Transformation',
      description: 'End-to-end modernization of your digital infrastructure and processes',
      image: 'digital transformation technology',
      link: '/services/ai-development',
    },
  ];

  const itemVariants = prefersReducedMotion
    ? { opacity: 1, x: 0 }
    : {
        hidden: { opacity: 0, x: -40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
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
            Explore{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Related Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions to elevate your entire digital ecosystem
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              custom={index}
              className="group cursor-pointer"
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 h-full">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A32]/90 via-[#1A3A32]/40 to-transparent z-10" />
                  <motion.div
                    {...(prefersReducedMotion ? {} : {
                      whileHover: { scale: 1.05 },
                      transition: { duration: 0.6 }
                    })}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-${1550000000000 + index}?w=800&h=400&fit=crop`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      fallbackText={service.image}
                    />
                  </motion.div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-6 left-6 z-20 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 backdrop-blur-xl border border-emerald-500/40">
                    <service.icon className="w-8 h-8 text-emerald-300" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-3 text-emerald-400 font-medium group-hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          {...(prefersReducedMotion ? {} : {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8, delay: 0.4 }
          })}
          className="mt-16 text-center"
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
            View All Services
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
