import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
  Smartphone,
  ShoppingCart,
  CreditCard,
  TrendingUp,
  Users,
  Package,
  Zap,
  Globe,
} from 'lucide-react';

export function ToolsGrid() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const tools = [
    {
      icon: Smartphone,
      title: 'Mobile Commerce',
      description: 'Responsive shopping experiences optimized for mobile-first customers',
      color: 'emerald',
    },
    {
      icon: ShoppingCart,
      title: 'Cart Optimization',
      description: 'AI-powered cart recovery and checkout flow improvements',
      color: 'teal',
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Seamless multi-currency and payment gateway implementation',
      color: 'cyan',
    },
    {
      icon: TrendingUp,
      title: 'Growth Analytics',
      description: 'Real-time insights into customer behavior and sales trends',
      color: 'emerald',
    },
    {
      icon: Users,
      title: 'Personalization Engine',
      description: 'Dynamic product recommendations based on user preferences',
      color: 'teal',
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Smart stock tracking and automated reorder systems',
      color: 'cyan',
    },
    {
      icon: Zap,
      title: 'Performance Boost',
      description: 'Lightning-fast page loads and optimized conversion funnels',
      color: 'emerald',
    },
    {
      icon: Globe,
      title: 'Multi-Channel Sales',
      description: 'Unified commerce across web, mobile, and social platforms',
      color: 'teal',
    },
  ];

  const containerVariants = prefersReducedMotion
    ? {}
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
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
            duration: 0.6,
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
            Our E-Commerce{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Tools & Resources
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions to elevate every aspect of your digital commerce platform
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              variants={itemVariants}
              className="group"
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
                {/* Icon */}
                <motion.div
                  {...(prefersReducedMotion ? {} : {
                    whileHover: { scale: 1.1, rotate: 360 },
                    transition: { duration: 0.6, ease: 'easeOut' }
                  })}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-${tool.color}-500/20 to-${tool.color}-600/10 border border-${tool.color}-500/30 mb-4`}
                >
                  <tool.icon className={`w-7 h-7 text-${tool.color}-400`} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {tool.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
