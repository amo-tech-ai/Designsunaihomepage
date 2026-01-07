import { motion } from 'motion/react';

export function ProjectBriefV11() {
  return (
    <section className="py-32 bg-white border-b border-[#EFE9E4]">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-4">
              Start Your Project
            </h2>
            <p className="text-[#666666] font-serif text-lg" style={{ fontFamily: 'Lora, serif' }}>
              Complete this brief and receive a custom proposal within 48 hours.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FDFCFB] border border-[#EFE9E4] p-8 lg:p-12"
          >
            
            <form className="space-y-8">
              
              {/* Project Type */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#888888]">
                  Project Type *
                </label>
                <select className="w-full bg-transparent border-b border-[#D1C7BD] py-3 text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors cursor-pointer appearance-none">
                  <option>AI Application</option>
                  <option>Automation System</option>
                  <option>Multi-Agent Platform</option>
                  <option>Custom Dashboard</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#888888]">
                    Full Name *
                  </label>
                  <input 
                    type="text"
                    className="w-full bg-transparent border-b border-[#D1C7BD] py-3 text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#888888]">
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    className="w-full bg-transparent border-b border-[#D1C7BD] py-3 text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#888888]">
                  Company Name
                </label>
                <input 
                  type="text"
                  className="w-full bg-transparent border-b border-[#D1C7BD] py-3 text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors"
                  placeholder="Acme Corp"
                />
              </div>

              {/* Budget & Timeline */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#888888]">
                    Budget Range *
                  </label>
                  <select className="w-full bg-transparent border-b border-[#D1C7BD] py-3 text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors cursor-pointer appearance-none">
                    <option>$15k - $30k</option>
                    <option>$30k - $60k</option>
                    <option>$60k - $100k</option>
                    <option>$100k+</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#888888]">
                    Desired Timeline *
                  </label>
                  <select className="w-full bg-transparent border-b border-[#D1C7BD] py-3 text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors cursor-pointer appearance-none">
                    <option>4-6 Weeks</option>
                    <option>8-12 Weeks</option>
                    <option>3-6 Months</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#888888]">
                  Project Description *
                </label>
                <textarea 
                  rows={6}
                  className="w-full bg-transparent border border-[#D1C7BD] p-4 text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors resize-none"
                  placeholder="Tell us about your project goals, technical requirements, and success metrics..."
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full py-5 bg-[#1A1A1A] text-white font-bold hover:bg-[#333333] transition-all"
              >
                Submit Project Brief
              </button>

              <p className="text-xs text-[#888888] text-center font-serif" style={{ fontFamily: 'Lora, serif' }}>
                We'll review your brief and respond with a custom proposal within 48 hours.
              </p>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
