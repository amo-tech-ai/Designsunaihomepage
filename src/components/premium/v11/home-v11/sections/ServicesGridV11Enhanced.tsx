import { motion } from 'motion/react';
import { 
  Zap, 
  Code2, 
  FileText, 
  Smartphone, 
  Wrench, 
  Gamepad2, 
  Building2, 
  Workflow, 
  Lightbulb 
} from 'lucide-react';

const services = [
  { 
    title: "AI MVP Development Services", 
    desc: "Build your AI MVP fast. We help startups create working products with AI—just 2-3 weeks.",
    icon: Zap
  },
  { 
    title: "Integrate AI into Existing Software", 
    desc: "Add AI to your current software. We make it work with what you already have. Get smart features and automation.",
    icon: Code2
  },
  { 
    title: "High-Converting Landing Pages", 
    desc: "Build landing pages that turn visitors into customers. We make pages that work well for startups and AI products.",
    icon: FileText
  },
  { 
    title: "AI-Powered App Development", 
    desc: "Build AI apps for phones and websites. We make apps for Android, iOS, and the web. Your app will be smart and easy to use.",
    icon: Smartphone
  },
  { 
    title: "Custom AI Tools Development", 
    desc: "Create custom AI tools for your business. Automate tasks and make work easier. Help your team get more done.",
    icon: Wrench
  },
  { 
    title: "Game Development", 
    desc: "Build games for phones, web, and computers. We make games that look great and run smooth.",
    icon: Gamepad2
  },
  { 
    title: "Enterprise Software", 
    desc: "Build custom business software. We make systems that handle complex tasks, scale fast, and suit for your needs.",
    icon: Building2
  },
  { 
    title: "Automation Development", 
    desc: "Automate your business tasks. We connect your tools so AI can do everything work together. Save time and money.",
    icon: Workflow
  },
  { 
    title: "AI Consulting Services", 
    desc: "Get expert help with AI. We guide you on how to use AI in your business. We help you plan and build.",
    icon: Lightbulb
  },
];

export function ServicesGridV11Enhanced() {
  return (
    <section className="py-24 bg-white relative border-b border-[#EFE9E4]">

      <div className="container mx-auto px-6 lg:px-16 relative">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-[#B45309] font-bold tracking-widest uppercase text-[10px]">
              Our Services
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-6 leading-tight"
          >
            What We Build
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#666666] leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Comprehensive AI development services including MVP creation, enterprise software solutions, 
            intelligent automation systems, and custom AI-powered tools designed to accelerate business growth.
          </motion.p>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <button className="px-6 py-3 bg-[#1A1A1A] text-white text-sm font-medium hover:bg-[#F59E0B] transition-colors duration-300">
              View All Services
            </button>
          </motion.div>
        </div>

        {/* Grid - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-[#FDFCFB] border border-[#EFE9E4] p-8 hover:shadow-lg hover:border-[#D1C7BD] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              
              {/* Top Accent Line - Calm colors only */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#FCD34D] group-hover:h-2 group-hover:bg-[#F59E0B] transition-all duration-300" />

              {/* Icon */}
              <div className="mb-6 inline-flex">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[#FEF3C7] group-hover:bg-[#F59E0B] transition-all duration-300">
                  <service.icon className="w-7 h-7 stroke-[1.5px] text-[#B45309] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base font-semibold text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#F59E0B] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#F59E0B]">
                  <path 
                    d="M5 10H15M15 10L11 6M15 10L11 14" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#888888]">
            Trusted by 50+ startups • 200+ projects delivered • 98% client satisfaction
          </p>
        </motion.div>

      </div>
    </section>
  );
}