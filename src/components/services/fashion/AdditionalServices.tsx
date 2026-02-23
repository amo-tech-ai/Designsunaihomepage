import { motion } from 'motion/react';
import { BarChart3, RefreshCw, Camera, Factory } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Catalog Intelligence',
    description: 'Clean, enrich, structure product data for AI agent shopping readiness. Tag attributes automatically.',
  },
  {
    icon: RefreshCw,
    title: 'Circular Fashion AI',
    description: 'Computer vision for garment condition assessment, resale pricing, and authentication for recommerce.',
  },
  {
    icon: Camera,
    title: 'AI Campaign Content',
    description: 'Virtual model photography, social content variants, campaign A/B testing. Save $5–20K per photoshoot.',
  },
  {
    icon: Factory,
    title: 'Supply Chain Optimization',
    description: 'LVMH-style allocation intelligence, markdown management, waste reduction across SKUs and seasons.',
  },
];

export function AdditionalServices() {
  return (
    <section className="relative bg-[#FAF8F5] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F2421]">
            Additional Fashion AI Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white border border-[#8B9D8A]/30 p-6 hover:border-[#1A3A32] transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-[#1A3A32]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#1F2421] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B7370] leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
