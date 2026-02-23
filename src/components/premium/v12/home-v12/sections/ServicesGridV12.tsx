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

export function ServicesGridV12() {
  return (
    <section className="py-24 bg-white relative border-b border-[#E8E8E8]">

      <div className="container mx-auto px-6 lg:px-16 relative">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-[#6B6B6B] font-bold tracking-widest uppercase text-[10px]">
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
            className="text-lg text-[#4A4A4A] leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Comprehensive AI development services including MVP creation, enterprise software solutions, 
            intelligent automation systems, and custom AI-powered tools designed to accelerate business growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white border border-[#E8E8E8] p-8 hover:border-[#C4B5A6] hover:bg-[#F8F8F8] transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 border border-[#E8E8E8] group-hover:border-[#C4B5A6] transition-colors duration-300">
                <service.icon className="w-5 h-5 text-[#4A4A4A] group-hover:text-[#C4B5A6] transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-[#1A1A1A] mb-3 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                {service.desc}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C4B5A6] group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
