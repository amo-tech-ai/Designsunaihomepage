import { motion } from 'motion/react';

export function ProjectBriefV12() {
  return (
    <section className="py-24 bg-[#FBFBFB] border-b border-[#E8E8E8]">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-6">
              Start Your Project
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Tell us about your vision
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[#E8E8E8] p-8"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-[#E8E8E8] bg-white text-[#1A1A1A] focus:outline-none focus:border-[#C4B5A6] transition-colors"
                  placeholder="My AI Project"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-[#E8E8E8] bg-white text-[#1A1A1A] focus:outline-none focus:border-[#C4B5A6] transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E8E8E8] bg-white text-[#1A1A1A] focus:outline-none focus:border-[#C4B5A6] transition-colors resize-none"
                  placeholder="Describe what you want to build..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#C4B5A6] text-white font-bold hover:bg-[#A89886] transition-all duration-300"
              >
                Submit Project Brief
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
