import { Check } from 'lucide-react';

export function PricingV7() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block w-2 h-2 rounded-full bg-[#FF6A3D] mb-4"></div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Flexible pricing</h2>
          <p className="text-slate-500">Start for free, scale as you grow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
            <h3 className="font-bold text-lg mb-2">Free</h3>
            <div className="text-4xl font-bold mb-6">$0<span className="text-sm font-normal text-slate-500">/mo</span></div>
            <p className="text-sm text-slate-500 mb-8">Perfect for testing the waters.</p>
            <button className="w-full py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors mb-8">
              Get Started
            </button>
            <ul className="space-y-4 text-sm text-slate-600">
              {['2 Active Agents', '1,000 runs/month', 'Community Support'].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="w-5 h-5 text-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tier */}
          <div className="bg-white p-8 rounded-2xl border-2 border-[#FF6A3D] relative shadow-xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6A3D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </div>
            <h3 className="font-bold text-lg mb-2">Pro</h3>
            <div className="text-4xl font-bold mb-6">$49<span className="text-sm font-normal text-slate-500">/mo</span></div>
            <p className="text-sm text-slate-500 mb-8">For growing teams and startups.</p>
            <button className="w-full py-3 bg-[#FF6A3D] text-white rounded-xl font-bold hover:bg-[#E55A2F] transition-colors mb-8 shadow-lg shadow-orange-500/20">
              Get Started
            </button>
            <ul className="space-y-4 text-sm text-slate-600">
              {['Unlimited Agents', '50,000 runs/month', 'Priority Support', 'API Access'].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="w-5 h-5 text-[#FF6A3D]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
            <h3 className="font-bold text-lg mb-2">Enterprise</h3>
            <div className="text-4xl font-bold mb-6">Custom</div>
            <p className="text-sm text-slate-500 mb-8">For large-scale deployments.</p>
            <button className="w-full py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors mb-8">
              Contact Sales
            </button>
            <ul className="space-y-4 text-sm text-slate-600">
              {['Unlimited Everything', 'Dedicated Success Manager', 'SLA', 'On-premise Deployment'].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="w-5 h-5 text-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
