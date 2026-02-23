import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Starter",
    price: "$15K",
    desc: "Perfect for MVPs",
    features: [
      "2-3 week delivery",
      "Core AI features",
      "Basic deployment",
      "1 month support"
    ]
  },
  {
    name: "Growth",
    price: "$35K",
    desc: "Scale your platform",
    features: [
      "4-6 week delivery",
      "Advanced AI features",
      "Full deployment",
      "3 months support",
      "Agent workflows"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For complex systems",
    features: [
      "Custom timeline",
      "Multi-agent systems",
      "Enterprise deployment",
      "Dedicated support",
      "Custom integrations"
    ]
  }
];

export function PricingV12() {
  return (
    <section className="py-24 bg-white border-b border-[#E8E8E8]">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-[#9E9E9E] uppercase tracking-widest">Pricing</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-6 mt-4">
            Investment Levels
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Fixed-price packages for predictable budgeting
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white border-2 p-8 ${
                tier.popular 
                  ? 'border-[#C4B5A6] shadow-lg' 
                  : 'border-[#E8E8E8]'
              } hover:border-[#C4B5A6] transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#C4B5A6] text-white text-xs font-bold uppercase tracking-widest">
                  Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">{tier.name}</h3>
                <div className="text-4xl font-serif text-[#1A1A1A] mb-2">{tier.price}</div>
                <p className="text-sm text-[#6B6B6B]">{tier.desc}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[#4A4A4A]">
                    <Check className="w-4 h-4 text-[#C4B5A6] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 font-bold transition-all duration-300 ${
                tier.popular
                  ? 'bg-[#C4B5A6] text-white hover:bg-[#A89886]'
                  : 'border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#C4B5A6] hover:bg-[#F8F8F8]'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
