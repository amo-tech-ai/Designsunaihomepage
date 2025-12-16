import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function TransformationV6() {
  return (
    <section className="bg-[#00334F] py-24 text-white relative overflow-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6A3D] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Form */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-8 tracking-tight">
              Start your AI <br />
              transformation today
            </h2>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl space-y-6">
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/60">What type of AI solution?</label>
                <div className="relative">
                  <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 appearance-none text-white outline-none focus:border-[#FF6A3D] transition-colors cursor-pointer">
                    <option>Custom AI Platform</option>
                    <option>Automation System</option>
                    <option>Multi-Agent Workflow</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/60">Timeline</label>
                  <div className="relative">
                    <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 appearance-none text-white outline-none focus:border-[#FF6A3D] transition-colors cursor-pointer">
                      <option>4-8 Weeks</option>
                      <option>2-4 Months</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/60">Budget</label>
                  <div className="relative">
                     <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 appearance-none text-white outline-none focus:border-[#FF6A3D] transition-colors cursor-pointer">
                      <option>$15k - $30k</option>
                      <option>$30k - $50k</option>
                      <option>$50k+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-[#FF6A3D] hover:bg-[#FF8C69] text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {[
              { value: "25+", label: "AI Platforms Delivered" },
              { value: "6+", label: "Agent Systems Deployed" },
              { value: "35%", label: "Avg Cost Savings" },
              { value: "$500M+", label: "Enabled Value" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium uppercase tracking-wider text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
