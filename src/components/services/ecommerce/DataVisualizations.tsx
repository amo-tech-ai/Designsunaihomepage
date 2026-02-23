import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { AnimatedCounter } from './AnimatedCounter';

export function DataVisualizations() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Bar chart data - Market Performance
  const barData = [
    { name: 'Conversion Rate', value: 85, color: '#10b981' },
    { name: 'Customer Retention', value: 92, color: '#14b8a6' },
    { name: 'Page Speed', value: 68, color: '#06b6d4' },
    { name: 'Mobile Engagement', value: 88, color: '#10b981' },
  ];

  // Line chart data - Growth Trends
  const lineData = [
    { month: 'Jan', revenue: 45, orders: 30 },
    { month: 'Feb', revenue: 52, orders: 38 },
    { month: 'Mar', revenue: 48, orders: 35 },
    { month: 'Apr', revenue: 65, orders: 48 },
    { month: 'May', revenue: 78, orders: 62 },
    { month: 'Jun', revenue: 92, orders: 78 },
  ];

  // Stats for counter animation
  const stats = [
    { value: 2400, label: 'Orders per Month', suffix: '+' },
    { value: 98, label: 'Customer Satisfaction', suffix: '%' },
    { value: 350, label: 'Products Managed', suffix: '+' },
    { value: 45, label: 'Time Saved', suffix: '%' },
  ];

  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-black/30 to-transparent">
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
            Data-Driven{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Performance
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real metrics from our e-commerce implementations showing measurable business impact
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {/* Animated Stats Grid */}
          <motion.div
            {...(prefersReducedMotion ? {} : {
              initial: { opacity: 0, y: 40 },
              animate: inView ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 }
            })}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  {inView ? (
                    <AnimatedCounter
                      target={stat.value}
                      duration={2000}
                      delay={index * 100}
                      suffix={stat.suffix}
                    />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bar Chart - Market Performance */}
            <motion.div
              {...(prefersReducedMotion ? {} : {
                initial: { opacity: 0, x: -40 },
                animate: inView ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.2 }
              })}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-serif text-white mb-6">Market Performance Metrics</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
                  <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '12px',
                      color: '#fff',
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="#10b981"
                    radius={[8, 8, 0, 0]}
                    animationDuration={prefersReducedMotion ? 0 : 1200}
                    animationBegin={0}
                  />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Line Chart - Growth Trends */}
            <motion.div
              {...(prefersReducedMotion ? {} : {
                initial: { opacity: 0, x: 40 },
                animate: inView ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.4 }
              })}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-serif text-white mb-6">Growth Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="month" stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
                  <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(20, 184, 166, 0.3)',
                      borderRadius: '12px',
                      color: '#fff',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#14b8a6"
                    strokeWidth={3}
                    dot={{ fill: '#14b8a6', r: 4 }}
                    animationDuration={prefersReducedMotion ? 0 : 1500}
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    dot={{ fill: '#06b6d4', r: 4 }}
                    animationDuration={prefersReducedMotion ? 0 : 1500}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
