import { motion } from 'motion/react';
import { Check, Shield, Zap, Database } from 'lucide-react';

const tiers = [
  {
    name: "MVP / POC",
    subtitle: "Proof of Concept",
    description: "Basic agents, prototype, quick validation.",
    price: "Starter",
    features: ["Single Agent Workflow", "Basic UI/UX", "Standard Integrations", "2 Weeks Support"],
    highlight: false
  },
  {
    name: "Production Ready",
    subtitle: "Most Popular",
    description: "Full workflows, integrations, dashboards.",
    price: "Scale",
    features: ["Multi-Agent System", "Custom Dashboard", "Advanced Integrations", "Production Infrastructure", "Priority Support"],
    highlight: true
  },
  {
    name: "Enterprise",
    subtitle: "Full Custom",
    description: "Custom agents, compliance, large-scale automation.",
    price: "Custom",
    features: ["Unlimited Agents", "On-Premise Deployment", "SLA & Compliance", "Dedicated Success Manager", "24/7 Support"],
    highlight: false
  }
];

export function PricingV4() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6">Investment Levels</h2>
          <p className="text-xl text-slate-600">Transparent engagement models for every stage.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 lg:p-10 rounded-3xl border transition-all duration-300 ${
                tier.highlight 
                  ? "bg-[#00334F] border-[#00334F] text-white shadow-2xl scale-105 z-10" 
                  : "bg-white border-slate-200 text-[#00334F] hover:shadow-xl"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6B2C] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? "text-white" : "text-[#00334F]"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm font-medium uppercase tracking-wider mb-6 ${tier.highlight ? "text-[#FF6B2C]" : "text-slate-400"}`}>
                  {tier.subtitle}
                </p>
                <div className={`text-4xl font-bold mb-2 ${tier.highlight ? "text-white" : "text-[#00334F]"}`}>
                  {tier.price}
                </div>
                <p className={`text-sm ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
                  {tier.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${tier.highlight ? "text-[#FF6B2C]" : "text-[#00334F]"}`} />
                    <span className={`text-sm ${tier.highlight ? "text-slate-200" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.highlight 
                  ? "bg-[#FF6B2C] text-white hover:bg-[#FF855F] shadow-lg hover:shadow-[#FF6B2C]/30" 
                  : "bg-slate-100 text-[#00334F] hover:bg-slate-200"
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* Capability Comparison (Simplified as requested) */}
        <div className="mt-20 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
           <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                 <Shield className="text-[#00334F]" /> 
                 <span className="font-bold text-[#00334F]">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-3">
                 <Database className="text-[#00334F]" /> 
                 <span className="font-bold text-[#00334F]">Full Data Ownership</span>
              </div>
              <div className="flex items-center gap-3">
                 <Zap className="text-[#00334F]" /> 
                 <span className="font-bold text-[#00334F]">99.9% Uptime</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
