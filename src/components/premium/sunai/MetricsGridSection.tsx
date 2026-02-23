import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface Metric {
  number: string;
  description: string;
}

interface MetricsGridSectionProps {
  metrics?: Metric[];
  backgroundColor?: string;
  numberColor?: string;
  textColor?: string;
  className?: string;
}

const defaultMetrics: Metric[] = [
  {
    number: '42K+',
    description: 'in our Global Alumni Network and growing'
  },
  {
    number: '1200+',
    description: 'Alumni lead Global Fortune 500 companies as Senior Executives'
  },
  {
    number: '3K+',
    description: 'company founders'
  },
  {
    number: '98%',
    description: 'of Alumni recommend BCG as the place to work'
  },
  {
    number: '35%',
    description: 'of Alumni hold top management leadership positions'
  },
  {
    number: '40%',
    description: 'of those who leave at A or C level achieve senior positions within 10 years of leaving BCG'
  }
];

export function MetricsGridSection({
  metrics = defaultMetrics,
  backgroundColor = '#E8F5E9',
  numberColor = '#1F2421',
  textColor = '#6B7370',
  className = ''
}: MetricsGridSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className={`
        relative
        py-20 md:py-24 lg:py-28
        px-6 md:px-12 lg:px-16
        ${className}
      `}
      style={{ backgroundColor }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-left"
            >
              {/* Number */}
              <div
                className="
                  text-[56px] md:text-[64px] lg:text-[72px]
                  font-medium
                  leading-[1.0]
                  tracking-tight
                  mb-4
                "
                style={{ color: numberColor }}
              >
                {metric.number}
              </div>

              {/* Description */}
              <p
                className="
                  text-[15px] md:text-[16px]
                  leading-[1.5]
                  max-w-[320px]
                "
                style={{ color: textColor }}
              >
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
