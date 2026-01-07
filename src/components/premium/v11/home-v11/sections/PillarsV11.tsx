import { motion } from 'motion/react';
import { Shield, Zap, Users } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption and role-based access controls."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Production-ready systems in 8-12 weeks with agile sprints and continuous integration."
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Senior engineers and AI specialists assigned to your project from day one to launch."
  }
];

export function PillarsV11() {
  return (
    <section className="py-32 bg-[#FDFCFB] border-b border-[#EFE9E4]">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-6">
            Why Teams Choose Sun AI
          </h2>
          <p className="text-[#666666] font-light font-serif text-lg" style={{ fontFamily: 'Lora, serif' }}>
            Three foundational pillars that set us apart from traditional agencies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-white border border-[#EFE9E4] p-8 hover:border-[#1A1A1A] transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div className="absolute top-8 right-8 text-6xl font-serif text-[#EFE9E4] group-hover:text-[#FCD34D] transition-colors">
                0{i + 1}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-block">
                  <div className="w-16 h-16 border border-[#EFE9E4] bg-[#FDFCFB] flex items-center justify-center group-hover:border-[#F59E0B] group-hover:bg-white transition-all">
                    <pillar.icon className="w-8 h-8 text-[#1A1A1A] stroke-[1.5px] group-hover:text-[#F59E0B] transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] leading-relaxed font-light font-serif" style={{ fontFamily: 'Lora, serif' }}>
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F59E0B] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
