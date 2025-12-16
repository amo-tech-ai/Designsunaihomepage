import { motion } from 'motion/react';
import { 
  Sparkles, 
  Workflow, 
  Network, 
  BarChart3, 
  Wrench, 
  ShoppingCart, 
  Bot,
  Zap
} from 'lucide-react';

const capabilities = [
  {
    id: 'ai-applications',
    title: 'AI Applications',
    description: 'Intelligent products powered by advanced language models and machine learning',
    icon: Sparkles,
    gradient: 'from-[#00334F]/5 to-[#FF6B2C]/5',
    iconGradient: 'from-[#00334F] to-[#004d73]',
    accentColor: '#FF6B2C',
  },
  {
    id: 'automation',
    title: 'Automation Systems',
    description: 'End-to-end workflow automation that eliminates manual tasks and errors',
    icon: Zap,
    gradient: 'from-[#FF6B2C]/5 to-[#00334F]/5',
    iconGradient: 'from-[#FF6B2C] to-[#FF9E7D]',
    accentColor: '#00334F',
  },
  {
    id: 'multi-agent',
    title: 'Multi-Agent Workflows',
    description: 'Coordinated AI agents working together to solve complex business problems',
    icon: Network,
    gradient: 'from-[#00334F]/5 to-[#FF6B2C]/5',
    iconGradient: 'from-[#00334F] to-[#004d73]',
    accentColor: '#FF6B2C',
  },
  {
    id: 'dashboards',
    title: 'Dashboards & Analytics',
    description: 'Real-time data visualization and insights that drive informed decisions',
    icon: BarChart3,
    gradient: 'from-[#FF6B2C]/5 to-[#00334F]/5',
    iconGradient: 'from-[#FF6B2C] to-[#FF9E7D]',
    accentColor: '#00334F',
  },
  {
    id: 'internal-tools',
    title: 'Internal Tools',
    description: 'Custom-built solutions that streamline operations and boost productivity',
    icon: Wrench,
    gradient: 'from-[#00334F]/5 to-[#FF6B2C]/5',
    iconGradient: 'from-[#00334F] to-[#004d73]',
    accentColor: '#FF6B2C',
  },
  {
    id: 'marketplaces',
    title: 'Marketplaces',
    description: 'Scalable platforms connecting buyers and sellers with intelligent matching',
    icon: ShoppingCart,
    gradient: 'from-[#FF6B2C]/5 to-[#00334F]/5',
    iconGradient: 'from-[#FF6B2C] to-[#FF9E7D]',
    accentColor: '#00334F',
  },
  {
    id: 'autonomous',
    title: 'Autonomous Operations',
    description: 'Self-managing systems that adapt and optimize without human intervention',
    icon: Bot,
    gradient: 'from-[#00334F]/5 to-[#FF6B2C]/5',
    iconGradient: 'from-[#00334F] to-[#004d73]',
    accentColor: '#FF6B2C',
  },
  {
    id: 'workflows',
    title: 'Enterprise Workflows',
    description: 'Mission-critical processes automated with enterprise-grade reliability',
    icon: Workflow,
    gradient: 'from-[#FF6B2C]/5 to-[#00334F]/5',
    iconGradient: 'from-[#FF6B2C] to-[#FF9E7D]',
    accentColor: '#00334F',
  },
];

export function CapabilitiesGrid() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-[#00334F]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#FF6B2C]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00334F]/5 border border-[#00334F]/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#FF6B2C]" />
            <span className="text-sm text-[#00334F] tracking-wide">
              Platform Capabilities
            </span>
          </div>

          <h2 className="text-[#00334F] mb-6 tracking-tight">
            Build Anything With AI
          </h2>

          <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1.125rem' }}>
            From intelligent applications to autonomous systems, our platform delivers enterprise-grade solutions that transform how teams work and scale.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.id}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ 
  capability, 
  index 
}: { 
  capability: typeof capabilities[0]; 
  index: number;
}) {
  const Icon = capability.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Card Container */}
      <div className={`
        relative h-full p-8 rounded-2xl 
        bg-gradient-to-br ${capability.gradient}
        border border-slate-200/50
        backdrop-blur-sm
        transition-all duration-500
        group-hover:border-[#00334F]/20
        group-hover:shadow-2xl
        group-hover:shadow-[#00334F]/5
        overflow-hidden
      `}>
        {/* Hover Glow Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${capability.accentColor}15, transparent 70%)`
          }}
        />

        {/* Abstract Background Illustration */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-all duration-700">
          <AbstractPattern color={capability.accentColor} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon Container */}
          <motion.div 
            className={`
              inline-flex items-center justify-center
              w-14 h-14 rounded-xl mb-6
              bg-gradient-to-br ${capability.iconGradient}
              shadow-lg
              transition-all duration-500
              group-hover:shadow-xl
              group-hover:scale-110
            `}
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
            
            {/* Icon Pulse Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100"
              style={{ borderColor: capability.accentColor }}
              animate={{
                scale: [1, 1.3],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.div>

          {/* Title */}
          <h3 
            className="text-[#00334F] mb-3 tracking-tight transition-colors duration-300"
            style={{ fontSize: '1.25rem' }}
          >
            {capability.title}
          </h3>

          {/* Description */}
          <p 
            className="text-slate-600 leading-relaxed"
            style={{ fontSize: '0.9375rem' }}
          >
            {capability.description}
          </p>

          {/* Decorative Line */}
          <motion.div 
            className="mt-6 h-1 rounded-full bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, ${capability.accentColor}, transparent)`
            }}
            initial={{ width: 0 }}
            whileInView={{ width: '40%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.08 + 0.3 }}
          />
        </div>

        {/* Corner Accent */}
        <div 
          className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 100% 100%, ${capability.accentColor}10, transparent 70%)`
          }}
        />
      </div>

      {/* Outer Glow on Hover */}
      <div 
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
        style={{
          background: `linear-gradient(135deg, ${capability.accentColor}15, transparent)`
        }}
      />
    </motion.div>
  );
}

// Abstract Pattern Component
function AbstractPattern({ color }: { color: string }) {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="50"
        cy="20"
        r="3"
        fill={color}
        fillOpacity="0.15"
        animate={{
          r: [3, 5, 3],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.circle
        cx="70"
        cy="35"
        r="2"
        fill={color}
        fillOpacity="0.2"
        animate={{
          r: [2, 4, 2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.circle
        cx="85"
        cy="15"
        r="1.5"
        fill={color}
        fillOpacity="0.25"
        animate={{
          r: [1.5, 3, 1.5],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.path
        d="M 50 20 Q 60 25 70 35"
        stroke={color}
        strokeWidth="0.5"
        strokeOpacity="0.1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.path
        d="M 70 35 L 85 15"
        stroke={color}
        strokeWidth="0.5"
        strokeOpacity="0.15"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />
      
      {/* Geometric shapes */}
      <motion.rect
        x="60"
        y="10"
        width="4"
        height="4"
        fill={color}
        fillOpacity="0.1"
        animate={{
          rotate: [0, 90, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: '62px 12px' }}
      />
    </svg>
  );
}
