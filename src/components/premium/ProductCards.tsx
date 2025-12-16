import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const products = [
  {
    title: 'FashionOS',
    description: 'AI-driven supply chain automation for global fashion retailers.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    tags: ['Automation', 'Retail', 'AI Agents'],
  },
  {
    title: 'Sun Market',
    description: 'Decentralized B2B marketplace with autonomous negotiation agents.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Marketplace', 'Web3', 'Finance'],
  },
  {
    title: 'AgentHub',
    description: 'Internal tooling platform for managing multi-agent workflows.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['DevTools', 'SaaS', 'Workflow'],
  },
];

export function ProductCards() {
  return (
    <section className="py-32 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#FF6B2C] font-semibold tracking-wider text-sm uppercase mb-2 block">Case Studies</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00334F]">
              Built with Sun AI
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[#00334F] font-medium hover:text-[#FF6B2C] transition-colors group">
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Area */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#00334F]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#00334F] text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#00334F]">{product.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-[#FF6B2C]" />
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="h-1 w-0 bg-[#FF6B2C] group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
