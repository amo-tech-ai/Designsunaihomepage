import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import genZImage from 'figma:asset/7d34efc5eb721679fa59d6194067e85320188d1f.png';

export function CTABand() {
  return (
    <section className="relative bg-neutral-900 py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={genZImage}
          alt="Fashion AI"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/90" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white/60 uppercase mb-6">
              <div className="w-12 h-px bg-white/40" />
              GET STARTED
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
              Ready to bring AI into<br />your fashion business?
            </h2>

            {/* Body */}
            <p className="text-lg md:text-xl text-white/70 mb-10 font-light leading-relaxed">
              Get a personalized fashion AI readiness assessment — including virtual try-on, trend forecasting, and styling opportunities specific to your brand.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-12">
              {[
                'Free 45-minute assessment call',
                'Custom AI opportunity analysis',
                'ROI projections for your business',
                'No-obligation consultation',
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" strokeWidth={2} />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-all"
              >
                Book Your Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: '$275B', label: 'AI Profit Opportunity', sublabel: 'McKinsey 2026' },
              { value: '40.8%', label: 'Market Growth Rate', sublabel: 'CAGR 2024-2030' },
              { value: '-25%', label: 'Return Reduction', sublabel: 'With AI Try-On' },
              { value: '10x', label: 'Design Faster', sublabel: 'AI Generation' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl font-light text-white mb-3">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white/90 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-white/60">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}