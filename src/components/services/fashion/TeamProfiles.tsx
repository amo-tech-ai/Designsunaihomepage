import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Sarah Chen',
    role: 'Fashion AI Practice Lead',
    bio: 'Former Head of Digital Innovation at luxury fashion house. 12 years in fashion tech.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    expertise: ['Trend Forecasting', 'Virtual Try-On', 'Design AI'],
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Machine Learning Architect',
    bio: 'Built recommendation engines for leading e-commerce platforms. PhD in Computer Vision.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    expertise: ['Computer Vision', 'Personalization', 'Size Prediction'],
  },
  {
    name: 'Emma Thompson',
    role: 'Fashion Industry Strategist',
    bio: '8 years at BCG advising fashion brands on digital transformation and AI strategy.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    expertise: ['Strategy', 'Change Management', 'ROI Analysis'],
  },
];

export function TeamProfiles() {
  return (
    <section className="relative bg-[#FAF8F5] py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#1A3A32] uppercase mb-6">
            <div className="w-12 h-px bg-[#1A3A32]" />
            EXPERTS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F2421] mb-6">
            Meet Our Luxury Goods Team
          </h2>
          <p className="text-xl text-[#6B7370] font-light max-w-3xl">
            Industry veterans who understand both the art and the business of fashion
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white border border-[#8B9D8A]/30 overflow-hidden hover:border-[#1A3A32] transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A32] via-[#1A3A32]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Social Links */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </button>
                      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                        <Mail className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Name & Role */}
                  <h3 className="text-2xl font-medium text-[#1F2421] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#1A3A32] font-medium mb-4">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-[#6B7370] leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div>
                    <div className="text-xs font-bold tracking-wider text-[#1A3A32] uppercase mb-3">
                      Expertise
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs text-[#1A3A32] bg-[#1A3A32]/5 rounded-full border border-[#1A3A32]/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-[#6B7370] mb-6">
            Want to discuss your fashion AI project with our team?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A3A32] text-white rounded-full font-medium hover:bg-[#2d5a4d] transition-colors">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
