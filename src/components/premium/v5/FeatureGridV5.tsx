import { motion } from 'motion/react';
import { Cpu, Zap, Network, Layout, ShoppingCart, Activity, Shield, Layers } from 'lucide-react';

const features = [
  {
    title: "AI Applications",
    description: "Intelligent apps powered by LLMs, agents, and contextual data.",
    icon: Cpu,
    color: "#00334F"
  },
  {
    title: "Automation Systems",
    description: "End-to-end workflow automation for ops, sales, and support.",
    icon: Zap,
    color: "#FF6A3D"
  },
  {
    title: "Custom AI Agents",
    description: "Multi-agent logic, reasoning, and decision automation.",
    icon: Network,
    color: "#00A0B8"
  },
  {
    title: "Dashboards & Analytics",
    description: "Real-time data and intelligent insights.",
    icon: Activity,
    color: "#10B981"
  },
  {
    title: "Internal Tools",
    description: "Custom ops dashboards and admin systems.",
    icon: Layout,
    color: "#8B5CF6"
  },
  {
    title: "Marketplaces",
    description: "AI-enhanced discovery, recommendation, and onboarding.",
    icon: ShoppingCart,
    color: "#F59E0B"
  },
  {
    title: "Multi-Agent Systems",
    description: "Coordinated agent orchestration.",
    icon: Layers,
    color: "#EC4899"
  },
  {
    title: "Autonomous Workflows",
    description: "Self-managing processes and task automation.",
    icon: Shield,
    color: "#6B7280"
  },
];

export function FeatureGridV5() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-[#00334F] mb-6"
          >
            We Design and Launch <br />
            <span className="text-[#FF6A3D]">AI-Powered Platforms</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            From discovery to deployment, we build AI systems engineered for scale and predictable outcomes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 group"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                style={{ backgroundColor: `${feature.color}10` }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              
              <h3 className="text-lg font-bold text-[#00334F] mb-2">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
