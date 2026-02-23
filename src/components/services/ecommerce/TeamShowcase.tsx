import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';

export function TeamShowcase() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const team = [
    {
      name: 'Sarah Chen',
      title: 'E-Commerce Strategy Lead',
      specialization: 'Digital Transformation',
      image: 'professional asian woman',
    },
    {
      name: 'Marcus Rodriguez',
      title: 'UX Design Director',
      specialization: 'Conversion Optimization',
      image: 'professional hispanic man',
    },
    {
      name: 'Emily Watson',
      title: 'Technical Architect',
      specialization: 'Platform Engineering',
      image: 'professional woman developer',
    },
    {
      name: 'David Kim',
      title: 'Analytics Specialist',
      specialization: 'Data Intelligence',
      image: 'professional asian man',
    },
  ];

  const containerVariants = prefersReducedMotion
    ? {}
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      };

  const itemVariants = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: 'easeOut',
          },
        },
      };

  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-transparent to-black/30">
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
            Meet Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              E-Commerce
            </span>
            <br />
            Consulting Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert strategists, designers, and engineers dedicated to your digital commerce success
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group"
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-500/10">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                    <motion.div
                      {...(prefersReducedMotion ? {} : {
                        whileHover: { scale: 1.05 },
                        transition: { duration: 0.4 }
                      })}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-${1600000000000 + index}?w=400&h=400&fit=crop`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        fallbackText={member.image}
                      />
                    </motion.div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A32]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Social Icons (appear on hover) */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                      <Linkedin className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-serif text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-sm text-emerald-400 mb-2">{member.title}</div>
                  <div className="text-xs text-gray-400">{member.specialization}</div>
                </div>

                {/* Decorative Element */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
