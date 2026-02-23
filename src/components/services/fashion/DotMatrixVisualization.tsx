import { motion } from 'motion/react';
import { useMemo } from 'react';

export function DotMatrixVisualization() {
  // Generate random data points for the scatter plot
  const dataPoints = useMemo(() => {
    const points = [];
    const categories = [
      { name: 'Virtual Try-On', color: '#ec4899', count: 35 },
      { name: 'Trend Forecasting', color: '#10b981', count: 40 },
      { name: 'Size Prediction', color: '#3b82f6', count: 32 },
      { name: 'Personal Styling', color: '#f59e0b', count: 28 },
      { name: 'Design AI', color: '#8b5cf6', count: 25 },
    ];

    categories.forEach((category, catIndex) => {
      for (let i = 0; i < category.count; i++) {
        points.push({
          x: Math.random() * 90 + 5,
          y: Math.random() * 90 + 5,
          color: category.color,
          category: category.name,
          delay: catIndex * 0.1 + i * 0.01,
        });
      }
    });

    return points;
  }, []);

  const legend = [
    { name: 'Virtual Try-On', color: '#ec4899', adoption: '62%' },
    { name: 'Trend Forecasting', color: '#10b981', adoption: '74%' },
    { name: 'Size Prediction', color: '#3b82f6', adoption: '58%' },
    { name: 'Personal Styling', color: '#f59e0b', adoption: '45%' },
    { name: 'Design AI', color: '#8b5cf6', adoption: '38%' },
  ];

  return (
    <section className="relative bg-[#FAF8F5] py-32">
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
            EXHIBIT 3
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-6">
            AI Adoption Distribution
          </h2>
          <p className="text-xl text-[#6B7370] font-light max-w-3xl">
            Fashion brands implementing AI across different use cases (n=160 companies)
          </p>
        </motion.div>

        {/* Dot Matrix */}
        <div className="bg-white border border-[#8B9D8A]/30 p-12 mb-12">
          <div className="relative w-full aspect-[16/9] bg-[#FAF8F5]/50">
            {/* Grid Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8B9D8A" strokeWidth="0.5" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Axes Labels */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-[#6B7370] font-medium">
              Implementation Complexity →
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-sm text-[#6B7370] font-medium origin-center">
              Business Impact →
            </div>

            {/* Data Points */}
            {dataPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ delay: point.delay, duration: 0.3 }}
                whileHover={{ scale: 1.5, opacity: 1, zIndex: 10 }}
                className="absolute rounded-full cursor-pointer"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  width: '12px',
                  height: '12px',
                  backgroundColor: point.color,
                }}
                title={point.category}
              />
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {legend.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-[#8B9D8A]/30 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-[#1F2421]">
                  {item.name}
                </span>
              </div>
              <div className="text-2xl font-light text-[#1A3A32]">
                {item.adoption}
              </div>
              <div className="text-xs text-[#6B7370] uppercase tracking-wider">
                Adoption Rate
              </div>
            </motion.div>
          ))}
        </div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-[#6B7370] font-light">
            Source: SunAI Fashion AI Survey 2025 (n=160 fashion brands, revenue $50M+)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
