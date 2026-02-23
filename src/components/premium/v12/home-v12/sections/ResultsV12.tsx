import { motion } from 'motion/react';

export function ResultsV12() {
  return (
    <section className="py-24 bg-[#FBFBFB] border-b border-[#E8E8E8]">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-6">
            Proven Results
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Real metrics from real deployments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { metric: "25+", label: "Projects Delivered", desc: "AI platforms in production" },
            { metric: "6+", label: "Agent Systems", desc: "Multi-agent workflows" },
            { metric: "$500M+", label: "Value Enabled", desc: "For our clients" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-[#E8E8E8] p-8 text-center hover:border-[#C4B5A6] transition-all duration-300"
            >
              <div className="text-5xl font-serif text-[#1A1A1A] mb-3">{item.metric}</div>
              <div className="text-sm font-bold text-[#4A4A4A] mb-2 uppercase tracking-widest">{item.label}</div>
              <div className="text-sm text-[#6B6B6B]">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
