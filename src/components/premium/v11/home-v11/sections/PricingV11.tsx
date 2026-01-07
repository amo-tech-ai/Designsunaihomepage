import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "MVP / POC",
    price: "Starter",
    range: "$15k - $30k",
    features: [
      "Single Agent Workflow",
      "Basic UI/UX Design",
      "Standard Integrations",
      "4-6 Week Delivery",
      "Email Support"
    ],
    highlight: false
  },
  {
    name: "Production Ready",
    price: "Scale",
    range: "$30k - $60k",
    features: [
      "Multi-Agent System",
      "Custom Dashboard",
      "Advanced Integrations",
      "8-12 Week Delivery",
      "Priority Support",
      "Dedicated Team"
    ],
    highlight: true
  },
  {
    name: "Enterprise Systems",
    price: "Custom",
    range: "$60k+",
    features: [
      "Unlimited Agents",
      "On-Premise Deployment",
      "SLA & Compliance",
      "12+ Week Delivery",
      "Dedicated Team",
      "24/7 Support"
    ],
    highlight: false
  }
];

export function PricingV11() {
  return (
    <section className="py-32 bg-[#FDFCFB] border-b border-[#EFE9E4]">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-4">Investment Levels</h2>
          <p className="text-[#666666] font-serif" style={{ fontFamily: 'Lora, serif' }}>
            Transparent models for every stage of growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white border transition-all duration-300 ${
                tier.highlight 
                  ? "border-[#F59E0B] border-2 z-10" 
                  : "border-[#EFE9E4] hover:border-[#1A1A1A]"
              }`}
            >
              {tier.highlight && (
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F59E0B] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-wider">
                   Recommended
                 </div>
              )}
              
              <div className="p-8 border-b border-[#EFE9E4]">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 uppercase tracking-wide">{tier.name}</h3>
                <div className="text-3xl font-serif text-[#1A1A1A] mb-2">{tier.price}</div>
                <div className="text-xs text-[#888888] uppercase tracking-widest font-bold">{tier.range}</div>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((f, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-[#666666]">
                      <Check className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 font-bold transition-all border ${
                  tier.highlight
                    ? "bg-[#1A1A1A] text-white border-[#1A1A1A] hover:bg-[#333333]"
                    : "bg-white border-[#EFE9E4] text-[#1A1A1A] hover:border-[#1A1A1A]"
                }`}>
                  Choose Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#888888] text-sm font-serif" style={{ fontFamily: 'Lora, serif' }}>
            All plans include source code ownership, deployment support, and 30-day post-launch maintenance.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
