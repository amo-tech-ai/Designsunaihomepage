'use client';

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, DollarSign, Zap } from 'lucide-react';

const METRICS = [
  {
    icon: Zap,
    value: 6,
    suffix: 'x',
    label: 'Faster Deployment',
    description: 'Launch in weeks, not months',
    color: 'emerald',
  },
  {
    icon: DollarSign,
    value: 35,
    suffix: '%',
    label: 'Cost Savings',
    description: 'Reduced development expenses',
    color: 'orange',
  },
  {
    icon: TrendingUp,
    value: 340,
    suffix: '%',
    label: 'Productivity Boost',
    description: 'Team efficiency improvement',
    color: 'emerald',
  },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl font-bold">
      {count}
      {suffix}
    </div>
  );
}

export function Metrics() {
  return (
    <section id="metrics" className="py-32 px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Metric Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4 mb-8"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Proven Results
              </span>
              <h2 className="text-5xl font-serif font-bold text-[#0A1628]">
                Metrics That Matter
              </h2>
              <p className="text-xl text-gray-600">
                Real impact measured across development speed, cost, and team productivity
              </p>
            </motion.div>

            {METRICS.map((metric, index) => {
              const Icon = metric.icon;
              const colorClass =
                metric.color === 'emerald'
                  ? 'from-emerald-500 to-emerald-600'
                  : 'from-orange-500 to-orange-600';

              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon size={28} className="text-white" strokeWidth={2} />
                    </div>

                    <div className="flex-1">
                      <div className={`bg-gradient-to-r ${colorClass} bg-clip-text text-transparent mb-2`}>
                        <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A1628] mb-1">
                        {metric.label}
                      </h3>
                      <p className="text-sm text-gray-600">{metric.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Comparison Charts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Time Comparison */}
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-[#0A1628] mb-6">
                Development Timeline
              </h3>

              <div className="space-y-6">
                {/* Traditional Dev */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      Traditional Development
                    </span>
                    <span className="text-sm font-bold text-gray-900">8 Months</span>
                  </div>
                  <div className="h-10 bg-gray-200 rounded-lg relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-gray-400 to-gray-500"
                    />
                  </div>
                </div>

                {/* Sun AI */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-emerald-700">
                      Sun AI Velocity System
                    </span>
                    <span className="text-sm font-bold text-emerald-600">8 Weeks</span>
                  </div>
                  <div className="h-10 bg-emerald-100 rounded-lg relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '25%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Velocity Growth Chart */}
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-[#0A1628] mb-6">
                Velocity Over Time
              </h3>

              <div className="flex items-end justify-between h-48 gap-2">
                {[20, 35, 50, 70, 85, 95, 100].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg"
                  />
                ))}
              </div>

              <div className="flex justify-between mt-4 text-xs text-gray-500">
                <span>Week 1</span>
                <span>Week 8</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
