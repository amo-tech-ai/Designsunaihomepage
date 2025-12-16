import { motion } from 'motion/react';
import { 
  Layout, 
  Smartphone, 
  Database, 
  Globe, 
  ShoppingCart, 
  Zap, 
  Shield, 
  Users 
} from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'SaaS Platforms',
    description: 'Scalable, multi-tenant architectures built for growth.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native-feel cross-platform experiences for iOS and Android.',
  },
  {
    icon: Database,
    title: 'Internal Tools',
    description: 'Custom dashboards and admin panels to streamline operations.',
  },
  {
    icon: Globe,
    title: 'Web Portals',
    description: 'High-performance customer facing portals and landing pages.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Modern headless commerce solutions with seamless checkout.',
  },
  {
    icon: Zap,
    title: 'AI Integrations',
    description: 'Embed LLMs and predictive models directly into your workflows.',
  },
  {
    icon: Shield,
    title: 'FinTech',
    description: 'Secure, compliant financial technology applications.',
  },
  {
    icon: Users,
    title: 'Marketplaces',
    description: 'Two-sided platforms connecting buyers and sellers efficiently.',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#00334F] mb-4">
            What We Build
          </h2>
          <p className="text-slate-600 text-lg">
            From MVPs to enterprise-grade platforms, our AI-driven engine delivers high-quality code for any use case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#FF6B2C]/20 transition-all cursor-default relative overflow-hidden"
              >
                {/* Micro-accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-slate-50 to-white rounded-bl-full -mr-8 -mt-8 group-hover:from-[#FF6B2C]/5 transition-colors" />

                <div className="w-12 h-12 rounded-xl bg-[#00334F]/5 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2C] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#00334F] group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-[#00334F] mb-2 group-hover:text-[#FF6B2C] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
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
