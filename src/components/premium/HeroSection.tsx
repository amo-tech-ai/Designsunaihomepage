import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Shield, Phone } from 'lucide-react';

export function HeroSection({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA]">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingParticles />
        <GradientOrbs />
      </div>

      {/* Signal Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <SignalLines />
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00334F]/5 to-[#FF6B2C]/5 border border-[#00334F]/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#FF6B2C]" />
              <span className="text-sm text-[#00334F] tracking-wide">Premium AI Agency Platform</span>
            </motion.div>
            
            {/* Heading */}
            <h1 className="mb-8 tracking-tight">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block text-[#00334F]"
              >
                Turn Ideas Into AI-Powered Applications in Weeks
              </motion.span>
            </h1>
            
            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-slate-600 mb-10 leading-relaxed max-w-xl"
              style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
            >
              Sun AI builds intelligent products, agents, and automation systems that help teams innovate faster and operate smarter.
            </motion.p>

            {/* Feature Bullets */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col gap-4 mb-12"
            >
              {[
                { icon: Zap, text: 'Ship production-ready AI products in 4-6 weeks' },
                { icon: Shield, text: 'Enterprise-grade security and compliance built-in' },
                { icon: Sparkles, text: 'Full source code ownership with white-glove support' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#00334F] to-[#004d73] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                    <item.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#00334F] tracking-wide" style={{ fontSize: '1rem' }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={onStart}
                className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-[#00334F] to-[#004d73] text-white overflow-hidden shadow-2xl hover:shadow-[#00334F]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2C] to-[#FF9E7D] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center justify-center gap-3 text-lg tracking-wide">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                </span>
              </button>
              
              <button className="group px-10 py-5 rounded-full bg-white border-2 border-[#00334F]/10 text-[#00334F] shadow-lg hover:shadow-xl hover:border-[#00334F]/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                <span className="flex items-center justify-center gap-3 text-lg tracking-wide">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
                  Book a Strategy Call
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Illustrated Hero Module */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[600px] w-full flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00334F]/5 to-[#FF6B2C]/5 rounded-3xl blur-3xl" />
            <CinematicVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Cinematic AI Visualization
function CinematicVisualization() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Outer Rings with Rotation */}
        <motion.circle 
          cx="350" 
          cy="350" 
          r="280" 
          stroke="url(#gradient1)" 
          strokeWidth="1.5" 
          strokeOpacity="0.3"
          strokeDasharray="8 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "350px 350px" }}
        />
        
        <motion.circle 
          cx="350" 
          cy="350" 
          r="220" 
          stroke="#00334F" 
          strokeWidth="1" 
          strokeOpacity="0.15"
          strokeDasharray="4 4"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "350px 350px" }}
        />

        {/* Signal Lines - Flowing from center */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const radians = (angle * Math.PI) / 180;
          const x1 = 350 + Math.cos(radians) * 80;
          const y1 = 350 + Math.sin(radians) * 80;
          const x2 = 350 + Math.cos(radians) * 250;
          const y2 = 350 + Math.sin(radians) * 250;
          
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FF6B2C"
              strokeWidth="1.5"
              strokeOpacity="0"
              initial={{ strokeOpacity: 0 }}
              animate={{ 
                strokeOpacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Central Core with Glow */}
        <defs>
          <linearGradient id="gradient1" x1="350" y1="70" x2="350" y2="630">
            <stop offset="0%" stopColor="#00334F" />
            <stop offset="50%" stopColor="#FF6B2C" />
            <stop offset="100%" stopColor="#00334F" />
          </linearGradient>
          
          <linearGradient id="gradient2" x1="300" y1="300" x2="400" y2="400">
            <stop offset="0%" stopColor="#FF6B2C" />
            <stop offset="100%" stopColor="#FF9E7D" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Central Orb */}
        <motion.g
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <circle cx="350" cy="350" r="60" fill="url(#gradient2)" filter="url(#glow)" opacity="0.9" />
          <circle cx="350" cy="350" r="60" stroke="white" strokeWidth="3" strokeOpacity="0.4" fill="none" />
          <circle cx="350" cy="350" r="45" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" />
        </motion.g>

        {/* Floating Nodes with Wave Motion */}
        {[
          { x: 150, y: 200, delay: 0, size: 12 },
          { x: 550, y: 200, delay: 0.8, size: 10 },
          { x: 150, y: 500, delay: 1.6, size: 14 },
          { x: 550, y: 500, delay: 2.4, size: 11 },
          { x: 350, y: 120, delay: 1.2, size: 13 },
          { x: 350, y: 580, delay: 2, size: 12 },
          { x: 100, y: 350, delay: 0.4, size: 10 },
          { x: 600, y: 350, delay: 1.4, size: 11 },
        ].map((node, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 1],
              scale: [0, 1.2, 1, 1],
              y: [0, -8, 0, -8, 0],
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: node.delay },
              scale: { duration: 0.8, delay: node.delay },
              y: { 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: node.delay 
              }
            }}
          >
            <circle 
              cx={node.x} 
              cy={node.y} 
              r={node.size} 
              fill="white" 
              filter="url(#softGlow)"
              stroke="#00334F" 
              strokeWidth="2.5" 
            />
            <circle 
              cx={node.x} 
              cy={node.y} 
              r={node.size + 8} 
              stroke="#FF6B2C" 
              strokeOpacity="0.25" 
              strokeWidth="1.5" 
              fill="none"
            />
            <motion.circle 
              cx={node.x} 
              cy={node.y} 
              r={node.size + 16} 
              stroke="#FF6B2C" 
              strokeOpacity="0"
              strokeWidth="1" 
              fill="none"
              animate={{ 
                r: [node.size + 16, node.size + 24],
                strokeOpacity: [0.3, 0] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: node.delay + i * 0.2 
              }}
            />
          </motion.g>
        ))}

        {/* Connecting Network */}
        <motion.path
          d="M 350 120 L 350 350 M 350 350 L 150 200 M 350 350 L 550 200 M 350 350 L 150 500 M 350 350 L 550 500"
          stroke="#00334F"
          strokeWidth="1"
          strokeOpacity="0"
          initial={{ strokeOpacity: 0 }}
          animate={{ strokeOpacity: [0, 0.1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

// Floating Particles Background
function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-[#00334F]/20 to-[#FF6B2C]/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

// Gradient Orbs
function GradientOrbs() {
  return (
    <>
      {/* Top Left Orb */}
      <motion.div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0,51,79,0.15) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Bottom Right Orb */}
      <motion.div 
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,44,0.12) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Center Orb */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0,51,79,0.08) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

// Signal Lines
function SignalLines() {
  return (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00334F" stopOpacity="0" />
          <stop offset="50%" stopColor="#00334F" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00334F" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {[...Array(8)].map((_, i) => (
        <motion.path
          key={i}
          d={`M ${i * 200} 0 Q ${i * 200 + 100} ${200 + i * 50} ${i * 200 + 200} ${400 + i * 30}`}
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
