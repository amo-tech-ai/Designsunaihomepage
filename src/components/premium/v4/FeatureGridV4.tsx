import { motion } from 'motion/react';
import { Bot, BarChart3, Globe, Layers, Layout, Shield, Cpu, Zap } from 'lucide-react';

const features = [
  {
    title: "AI Applications",
    description: "Intelligent features powered by LLMs and adaptive reasoning.",
    icon: Cpu,
    color: "#00334F"
  },
  {
    title: "Automation Systems",
    description: "End-to-end workflow automation for ops, sales, support, and more.",
    icon: Zap,
    color: "#FF6B2C"
  },
  {
    title: "Multi-Agent Systems",
    description: "Coordinated agents performing reasoning, planning, and actions.",
    icon: Bot,
    color: "#00A0B8"
  },
  {
    title: "Custom AI Agents",
    description: "Purpose-built intelligent agents tailored to business workflows.",
    icon: Shield,
    color: "#6B7280"
  },
  {
    title: "Internal Tools",
    description: "Dashboards and internal platforms that unify data + AI.",
    icon: Layout,
    color: "#8B5CF6"
  },
  {
    title: "Dashboards & Analytics",
    description: "Real-time visualizations, metrics, and automated insights.",
    icon: BarChart3,
    color: "#10B981"
  },
  {
    title: "Marketplaces",
    description: "AI-powered matching, discovery, and intelligent onboarding.",
    icon: Globe,
    color: "#F59E0B"
  },
  {
    title: "Autonomous Workflows",
    description: "Self-managing systems that replace manual processes.",
    icon: Layers,
    color: "#EC4899"
  },
];

export function FeatureGridV4() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6"
          >
            What We Build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Production-grade AI systems, tailored to your specific needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-[#00334F]/5 transition-all duration-300"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={28} style={{ color: feature.color }} />
              </div>
              
              <h3 className="text-xl font-bold text-[#00334F] mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
