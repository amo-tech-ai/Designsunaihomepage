import { motion } from 'motion/react';
import { Gem, ShoppingCart, Smile, ArrowUpRight } from 'lucide-react';

const services = [
  {
    tag: 'INDUSTRY',
    title: 'Luxury Goods',
    description: 'AI solutions for high-end brands focusing on exclusivity and craftsmanship',
    gradient: 'from-amber-600 to-yellow-600',
    icon: Gem,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
  },
  {
    tag: 'CAPABILITY',
    title: 'Retail Industry',
    description: 'End-to-end retail transformation with AI-powered operations',
    gradient: 'from-emerald-600 to-green-600',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
  },
  {
    tag: 'CAPABILITY',
    title: 'Customer Experience',
    description: 'Personalized shopping experiences powered by AI',
    gradient: 'from-blue-600 to-cyan-600',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
  },
];

export function RelatedServices() {
  return (
    <section className="relative bg-[#FAF8F5] py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1A3A32] uppercase mb-6">
            <div className="w-12 h-px bg-[#1A3A32]" />
            RELATED
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-6">
            Explore Related Services
          </h2>
          <p className="text-xl text-[#6B7370] font-light max-w-3xl">
            Comprehensive AI solutions across adjacent industries and capabilities
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[500px] bg-white border border-[#8B9D8A]/30 overflow-hidden hover:border-[#1A3A32] transition-all duration-500">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-85 transition-opacity`} />
                  
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                  }} />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-10">
                    {/* Tag */}
                    <div>
                      <span className="inline-block px-4 py-2 text-[10px] font-bold tracking-[0.15em] text-white bg-white/20 backdrop-blur-sm rounded uppercase">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <div className="mb-6">
                        <Icon className="w-16 h-16 text-white mb-6" strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="text-3xl font-light text-white mb-4 leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-base text-white/90 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                        <span>Explore</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Icon Badge (Top Right) */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                    className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}