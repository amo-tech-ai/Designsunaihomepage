import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Search, Palette, Rocket } from 'lucide-react';

export function ApproachFramework() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const phases = [
    {
      icon: Search,
      title: 'Discover',
      description: 'Deep dive into your market, competitors, and customer behavior patterns.',
      color: 'emerald',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Craft intuitive user experiences optimized for conversion and engagement.',
      color: 'teal',
    },
    {
      icon: Rocket,
      title: 'Deploy',
      description: 'Launch and scale with AI-powered optimization and continuous improvement.',
      color: 'cyan',
    },
  ];

  const containerVariants = prefersReducedMotion
    ? {}
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
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
          className="text-center mb-24"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Our Approach to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              E-Commerce
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A systematic three-phase methodology designed to transform your digital commerce presence
          </p>
        </motion.div>

        {/* Framework Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connecting Line (hidden on mobile, shown on desktop between cards) */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent transform -translate-y-1/2 z-0" />
              )}

              {/* Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
                {/* Icon */}
                <motion.div
                  {...(prefersReducedMotion ? {} : {
                    whileHover: { scale: 1.1, rotate: 5 },
                    transition: { duration: 0.3 }
                  })}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-${phase.color}-500/20 to-${phase.color}-600/10 border border-${phase.color}-500/30 mb-6`}
                >
                  <phase.icon className={`w-8 h-8 text-${phase.color}-400`} />
                </motion.div>

                {/* Phase Number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/5">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif text-white mb-4">{phase.title}</h3>
                <p className="text-gray-400 leading-relaxed">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          {...(prefersReducedMotion ? {} : {
            initial: { scaleX: 0 },
            whileInView: { scaleX: 1 },
            viewport: { once: true },
            transition: { duration: 1.2, delay: 0.6 }
          })}
          className="mt-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
        />
      </div>
    </section>
  );
}
