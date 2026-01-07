import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function TransformationV11() {
  return (
    <section className="bg-[#1A1A1A] py-24 text-white relative overflow-hidden border-b-4 border-[#F59E0B]">

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Form */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif mb-8 tracking-tight leading-tight">
              Start your AI <br />
              transformation today
            </h2>

            <div className="bg-white/5 border border-white/10 p-8 space-y-6">
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/60">What type of AI solution?</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 appearance-none text-white outline-none focus:border-[#F59E0B] transition-colors cursor-pointer font-light">
                  <option className="text-black">Custom AI Platform</option>
                  <option className="text-black">Automation System</option>
                  <option className="text-black">Multi-Agent Workflow</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/60">Timeline</label>
                  <select className="w-full bg-transparent border-b border-white/20 py-3 appearance-none text-white outline-none focus:border-[#F59E0B] transition-colors cursor-pointer font-light">
                    <option className="text-black">4-8 Weeks</option>
                    <option className="text-black">2-4 Months</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/60">Budget</label>
                  <select className="w-full bg-transparent border-b border-white/20 py-3 appearance-none text-white outline-none focus:border-[#F59E0B] transition-colors cursor-pointer font-light">
                    <option className="text-black">$15k - $30k</option>
                    <option className="text-black">$30k - $50k</option>
                    <option className="text-black">$50k+</option>
                  </select>
                </div>
              </div>

              <button className="w-full py-5 bg-[#F59E0B] hover:bg-[#FCD34D] text-[#1A1A1A] font-bold transition-all flex items-center justify-center gap-2 mt-8">
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
                className="border-l-2 border-[#F59E0B] pl-6"
              >
                <div className="text-5xl font-serif text-white mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
