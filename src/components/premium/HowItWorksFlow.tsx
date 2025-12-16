import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FileText, Layers, Code, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 'define',
    number: '01',
    title: 'Define',
    icon: FileText,
    items: ['Scope & requirements', 'Data analysis', 'Success metrics'],
    color: '#FF6B2C',
    gradient: 'from-[#FF6B2C] to-[#FF9E7D]',
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    icon: Layers,
    items: ['Systems architecture', 'Process flows', 'Integration mapping'],
    color: '#00334F',
    gradient: 'from-[#00334F] to-[#004d73]',
  },
  {
    id: 'build',
    number: '03',
    title: 'Build',
    icon: Code,
    items: ['AI agents & models', 'Workflow automation', 'API integrations'],
    color: '#FF6B2C',
    gradient: 'from-[#FF6B2C] to-[#FF9E7D]',
  },
  {
    id: 'launch',
    number: '04',
    title: 'Launch',
    icon: Rocket,
    items: ['Testing & QA', 'Performance tuning', 'Production deployment'],
    color: '#00334F',
    gradient: 'from-[#00334F] to-[#004d73]',
  },
];

export function HowItWorksFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00334F]/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-[#FF6B2C]/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00334F]/5 border border-[#00334F]/10 mb-6">
            <Rocket className="w-4 h-4 text-[#FF6B2C]" />
            <span className="text-sm text-[#00334F] tracking-wide">
              Our Process
            </span>
          </div>

          <h2 className="text-[#00334F] mb-6 tracking-tight">
            How It Works
          </h2>

          <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1.125rem' }}>
            From initial discovery to production deployment, our streamlined process ensures your AI solution is delivered on time and exceeds expectations.
          </p>
        </motion.div>

        {/* Desktop Flow Diagram */}
        <div className="hidden lg:block relative">
          {/* Connector Lines SVG */}
          <div className="absolute top-20 left-0 w-full h-1 pointer-events-none">
            <svg 
              className="w-full h-40" 
              viewBox="0 0 1200 160" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00334F" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#FF6B2C" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00334F" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Main connecting line */}
              <motion.path
                d="M 150 80 L 450 80 M 550 80 L 850 80 M 950 80 L 1050 80"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Animated dots traveling along path */}
              {[0, 1, 2].map((i) => (
                <motion.circle
                  key={i}
                  r="4"
                  fill="#FF6B2C"
                  initial={{ opacity: 0 }}
                  animate={{
                    offsetDistance: ['0%', '100%'],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1.3,
                    ease: "linear",
                  }}
                  style={{
                    offsetPath: 'path("M 150 80 L 450 80 M 550 80 L 850 80 M 950 80 L 1050 80")',
                  }}
                >
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    begin={`${i * 1.3}s`}
                  >
                    <mpath href="#flowPath" />
                  </animateMotion>
                </motion.circle>
              ))}
              
              {/* Hidden path for animation */}
              <path 
                id="flowPath" 
                d="M 150 80 L 1050 80" 
                fill="none" 
                stroke="none"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                index={index}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Flow */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <div key={step.id}>
              <ProcessStep
                step={step}
                index={index}
                scrollProgress={scrollYProgress}
              />
              
              {/* Vertical Connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: 48, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-0.5 bg-gradient-to-b from-[#00334F]/20 via-[#FF6B2C]/30 to-[#00334F]/20"
                    style={{ borderRadius: '2px' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ 
  step, 
  index,
  scrollProgress 
}: { 
  step: typeof steps[0]; 
  index: number;
  scrollProgress: any;
}) {
  const Icon = step.icon;
  const nodeRef = useRef<HTMLDivElement>(null);

  // Calculate when this step should activate based on scroll
  const stepProgress = useTransform(
    scrollProgress,
    [0.2 + (index * 0.15), 0.4 + (index * 0.15)],
    [0, 1]
  );

  const opacity = useTransform(stepProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(stepProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{ opacity, scale }}
      className="relative"
    >
      {/* Step Card */}
      <div className="relative bg-white rounded-2xl border border-slate-200/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
        {/* Hover gradient overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${step.color}05, transparent)`
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Premium Icon Container */}
          <div className="relative inline-flex mb-8">
            {/* Outer decorative ring */}
            <motion.div
              className="absolute inset-0 rounded-3xl border border-slate-200/40"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: '88px',
                height: '88px',
                left: '-8px',
                top: '-8px',
              }}
            />

            {/* Main icon container with luxury styling */}
            <motion.div 
              className="relative inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Backdrop gradient layer */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} blur-xl opacity-50`}
                style={{ transform: 'scale(1.1)' }}
              />
              
              {/* Main icon box */}
              <div 
                className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl overflow-hidden`}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                />

                {/* Geometric pattern overlay */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-10"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <circle cx="40" cy="40" r="30" stroke="white" strokeWidth="0.5" />
                  <circle cx="40" cy="40" r="20" stroke="white" strokeWidth="0.5" />
                  <line x1="10" y1="40" x2="70" y2="40" stroke="white" strokeWidth="0.5" />
                  <line x1="40" y1="10" x2="40" y2="70" stroke="white" strokeWidth="0.5" />
                </svg>

                {/* Icon */}
                <Icon className="w-9 h-9 text-white relative z-10" strokeWidth={2.5} />

                {/* Inner glow */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%)`,
                  }}
                />
              </div>
              
              {/* Animated orbital rings */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-white/40"
                style={{ width: '80px', height: '80px' }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: index * 0.3,
                }}
              />
              
              <motion.div
                className="absolute inset-0 rounded-2xl border"
                style={{ 
                  borderColor: step.color,
                  width: '80px',
                  height: '80px',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: index * 0.3 + 0.5,
                }}
              />

              {/* Floating particles around icon */}
              {[0, 120, 240].map((angle, i) => {
                const radians = (angle * Math.PI) / 180;
                const x = Math.cos(radians) * 50;
                const y = Math.sin(radians) * 50;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: step.color,
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: [0, x, 0],
                      y: [0, y, 0],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4 + index * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </motion.div>
          </div>

          {/* Step Number */}
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="text-5xl opacity-10 tracking-tighter"
              style={{ color: step.color }}
            >
              {step.number}
            </span>
          </div>

          {/* Title */}
          <h3 
            className="text-[#00334F] mb-4 tracking-tight"
            style={{ fontSize: '1.5rem' }}
          >
            {step.title}
          </h3>

          {/* Items List */}
          <ul className="space-y-3">
            {step.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 + i * 0.1 + 0.3 
                }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 
                  className="w-5 h-5 flex-shrink-0 mt-0.5" 
                  style={{ color: step.color }}
                  strokeWidth={2.5}
                />
                <span className="text-slate-600" style={{ fontSize: '0.9375rem' }}>
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Corner decoration */}
        <div 
          className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 100% 100%, ${step.color}08, transparent 70%)`
          }}
        />
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="mt-4 h-1 rounded-full bg-gradient-to-r"
        style={{
          backgroundImage: `linear-gradient(to right, ${step.color}, transparent)`
        }}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
      />
    </motion.div>
  );
}