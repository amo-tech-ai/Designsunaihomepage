import { motion } from 'motion/react';
import { Check, Shield, Star, Crown } from 'lucide-react';

const tiers = [
  {
    name: "MVP / POC",
    subtitle: "Proof of Concept",
    icon: Shield,
    price: "Starter",
    features: ["Single Agent Workflow", "Basic UI/UX", "Standard Integrations", "2 Weeks Support"],
    highlight: false
  },
  {
    name: "Production Ready",
    subtitle: "Most Popular",
    icon: Star,
    price: "Scale",
    features: ["Multi-Agent System", "Custom Dashboard", "Advanced Integrations", "Production Infrastructure", "Priority Support"],
    highlight: true
  },
  {
    name: "Enterprise Systems",
    subtitle: "Full Custom",
    icon: Crown,
    price: "Enterprise",
    features: ["Unlimited Agents", "On-Premise Deployment", "SLA & Compliance", "Dedicated Success Manager", "24/7 Support"],
    highlight: false
  }
];

export function PricingV5() {
  return (
    <section className="py-24 lg:py-32 bg-[#F9FAFB]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6">Investment Levels</h2>
          <p className="text-xl text-slate-600">Transparent engagement models for every stage.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 lg:p-10 rounded-[2rem] border transition-all duration-300 ${
                tier.highlight 
                  ? "bg-white border-[#FF6A3D] shadow-2xl scale-105 z-10" 
                  : "bg-white border-slate-200 hover:shadow-xl"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6A3D] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8 text-center">
                <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-6 ${
                  tier.highlight ? "bg-[#FF6A3D]/10 text-[#FF6A3D]" : "bg-slate-100 text-[#00334F]"
                }`}>
                  <tier.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#00334F] mb-1">{tier.name}</h3>
                <p className="text-sm font-medium uppercase tracking-wider text-slate-400 mb-6">{tier.subtitle}</p>
                <div className="text-3xl font-bold text-[#00334F] mb-2">{tier.price}</div>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF6A3D]" />
                    <span className="text-sm text-slate-600 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.highlight 
                  ? "bg-[#00334F] text-white hover:bg-[#004466] shadow-lg" 
                  : "bg-white border border-slate-200 text-[#00334F] hover:bg-slate-50"
              }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* Capability Bar Chart */}
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-[#00334F] mb-8 text-center">System Capability Comparison</h3>
          
          <div className="space-y-6">
            {[
              { label: "AI Reasoning Depth", v1: 30, v2: 65, v3: 100 },
              { label: "Integration Coverage", v1: 40, v2: 80, v3: 100 },
              { label: "Scalability Limit", v1: 20, v2: 70, v3: 100 },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-slate-500">
                  <span>{stat.label}</span>
                  <div className="flex gap-12 text-xs uppercase tracking-wide">
                    <span className="w-12 text-center">MVP</span>
                    <span className="w-12 text-center text-[#FF6A3D]">Pro</span>
                    <span className="w-12 text-center">Ent</span>
                  </div>
                </div>
                <div className="h-3 bg-slate-50 rounded-full flex overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} whileInView={{ width: `${stat.v1}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-slate-300"
                  />
                  <motion.div 
                    initial={{ width: 0 }} whileInView={{ width: `${stat.v2 - stat.v1}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
                    className="h-full bg-[#FF6A3D]"
                  />
                  <motion.div 
                    initial={{ width: 0 }} whileInView={{ width: `${stat.v3 - stat.v2}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-[#00334F]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
