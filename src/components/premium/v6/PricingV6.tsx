import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "MVP / POC",
    price: "Starter",
    features: ["Single Agent Workflow", "Basic UI/UX", "Standard Integrations"],
    highlight: false
  },
  {
    name: "Production Ready",
    price: "Scale",
    features: ["Multi-Agent System", "Custom Dashboard", "Advanced Integrations", "Priority Support"],
    highlight: true
  },
  {
    name: "Enterprise Systems",
    price: "Custom",
    features: ["Unlimited Agents", "On-Premise Deployment", "SLA & Compliance", "Dedicated Team"],
    highlight: false
  }
];

export function PricingV6() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#00334F] mb-4">Investment Levels</h2>
          <p className="text-slate-500">Transparent models for every stage of growth.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl border transition-all duration-300 ${
                tier.highlight 
                  ? "bg-white border-[#FF6A3D] shadow-xl relative scale-105 z-10" 
                  : "bg-white border-slate-200 hover:shadow-lg"
              }`}
            >
              {tier.highlight && (
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6A3D] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                   Most Popular
                 </div>
              )}
              
              <h3 className="text-xl font-bold text-[#00334F] mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-[#00334F] mb-8">{tier.price}</div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((f, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-[#FF6A3D] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.highlight
                  ? "bg-[#00334F] text-white hover:bg-[#004466]"
                  : "bg-white border border-slate-200 text-[#00334F] hover:bg-slate-50"
              }`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
