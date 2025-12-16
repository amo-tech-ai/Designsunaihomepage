import { motion } from 'motion/react';

export function HeroIllustrationV6() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none select-none perspective-[1000px]">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#00334F]/5 to-[#FF6B2C]/5 rounded-full blur-3xl" />
      
      <svg className="w-full h-full max-w-[700px] overflow-visible" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="coreGradient" x1="400" y1="300" x2="400" y2="500" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#004E75" />
            <stop offset="100%" stopColor="#002133" />
          </linearGradient>
          <linearGradient id="orbGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF8C69" />
            <stop offset="100%" stopColor="#FF6B2C" />
          </linearGradient>
          <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#00334F" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00334F" stopOpacity="0" />
          </radialGradient>
          <filter id="glass" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          </filter>
        </defs>

        {/* --- Background Orbits --- */}
        <g className="opacity-20">
          <motion.circle 
            cx="400" cy="400" r="250" 
            stroke="#00334F" strokeWidth="1" strokeDasharray="4 4" 
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "400px 400px" }}
          />
          <motion.circle 
            cx="400" cy="400" r="350" 
            stroke="#00334F" strokeWidth="1" strokeOpacity="0.5"
            animate={{ rotate: -360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "400px 400px" }}
          />
        </g>

        {/* --- Connectivity Lines (Curved) --- */}
        <g stroke="#00334F" strokeWidth="1.5" strokeOpacity="0.15" fill="none">
          {/* Top Left */}
          <motion.path d="M400 400 C 400 300, 250 300, 200 250" 
             initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }} />
          {/* Top Right */}
          <motion.path d="M400 400 C 400 300, 550 300, 600 250" 
             initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.7 }} />
          {/* Bottom Left */}
          <motion.path d="M400 400 C 400 500, 250 500, 200 550" 
             initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.9 }} />
          {/* Bottom Right */}
          <motion.path d="M400 400 C 400 500, 550 500, 600 550" 
             initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.1 }} />
           {/* Direct Horizontal */}
           <motion.path d="M400 400 L 150 400" 
             initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.3 }} />
           <motion.path d="M400 400 L 650 400" 
             initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.3 }} />
        </g>

        {/* --- Moving Data Packets --- */}
        <g>
           <motion.circle r="3" fill="#FF6B2C">
             <motion.animateMotion 
               path="M400 400 C 400 300, 250 300, 200 250"
               dur="4s" repeatCount="indefinite"
             />
           </motion.circle>
           <motion.circle r="3" fill="#00334F">
             <motion.animateMotion 
               path="M600 250 C 550 300, 400 300, 400 400"
               dur="5s" repeatCount="indefinite"
             />
           </motion.circle>
           <motion.circle r="3" fill="#00334F">
             <motion.animateMotion 
               path="M200 550 C 250 500, 400 500, 400 400"
               dur="6s" repeatCount="indefinite"
             />
           </motion.circle>
        </g>

        {/* --- Central Intelligence Core --- */}
        <g transform="translate(400, 400)">
          {/* Outer Glow Ring */}
          <motion.circle 
            r="80" 
            fill="url(#glow)" 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Main Sphere */}
          <motion.circle 
            r="60" 
            fill="url(#coreGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="drop-shadow-2xl"
          />
          
          {/* Inner Light Ring */}
          <circle r="45" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
          
          {/* Core Symbol (Abstract Brain/Circuit) */}
          <motion.g 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
             <circle r="25" stroke="white" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 4" />
             <path d="M0 -30 L0 30 M-30 0 L30 0" stroke="white" strokeOpacity="0.1" />
          </motion.g>

          {/* Floating Icon */}
          <motion.circle 
            r="12" fill="#FF6B2C" 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </g>

        {/* --- Satellite Nodes (Glassmorphism Cards) --- */}
        
        {/* Node 1: Analytics (Top Left) */}
        <FloatingNode x={200} y={250} delay={0}>
          <rect x="-30" y="-30" width="60" height="60" rx="16" fill="white" fillOpacity="0.8" stroke="#E2E8F0" strokeWidth="1" />
          <path d="M-10 10 L-4 0 L4 8 L10 -6" stroke="#00334F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="-10" cy="10" r="2" fill="#00334F" />
          <circle cx="10" cy="-6" r="2" fill="#FF6B2C" />
        </FloatingNode>

        {/* Node 2: Database (Top Right) */}
        <FloatingNode x={600} y={250} delay={1}>
          <circle r="35" fill="white" fillOpacity="0.8" stroke="#E2E8F0" strokeWidth="1" />
          <g transform="scale(0.8)">
            <path d="M-12 -8 C-12 -12, 12 -12, 12 -8 C12 -4, -12 -4, -12 -8 Z" stroke="#00334F" strokeWidth="2" />
            <path d="M-12 0 C-12 4, 12 4, 12 0" stroke="#00334F" strokeWidth="2" fill="none" />
            <path d="M-12 8 C-12 12, 12 12, 12 8" stroke="#00334F" strokeWidth="2" fill="none" />
            <line x1="-12" y1="-8" x2="-12" y2="8" stroke="#00334F" strokeWidth="2" />
            <line x1="12" y1="-8" x2="12" y2="8" stroke="#00334F" strokeWidth="2" />
          </g>
        </FloatingNode>

        {/* Node 3: Mobile/Device (Bottom Left) */}
        <FloatingNode x={200} y={550} delay={0.5}>
          <rect x="-24" y="-36" width="48" height="72" rx="8" fill="white" fillOpacity="0.8" stroke="#E2E8F0" strokeWidth="1" />
          <rect x="-16" y="-28" width="32" height="48" rx="2" fill="#F1F5F9" />
          <circle cx="0" cy="28" r="3" fill="#00334F" opacity="0.5" />
        </FloatingNode>

        {/* Node 4: Agent/Bot (Bottom Right) */}
        <FloatingNode x={600} y={550} delay={1.5}>
          <path d="M0 -30 L26 -15 L26 15 L0 30 L-26 15 L-26 -15 Z" fill="white" fillOpacity="0.8" stroke="#E2E8F0" strokeWidth="1" />
          <circle r="12" fill="#E0F2FE" />
          <path d="M-6 0 L0 6 L6 -6" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </FloatingNode>
        
        {/* Node 5: Pure Data (Far Left) */}
        <FloatingNode x={150} y={400} delay={2}>
           <circle r="20" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
           <rect x="-8" y="-8" width="6" height="6" rx="1" fill="#FF6B2C" />
           <rect x="2" y="-8" width="6" height="6" rx="1" fill="#00334F" opacity="0.5" />
           <rect x="-8" y="2" width="6" height="6" rx="1" fill="#00334F" opacity="0.5" />
           <rect x="2" y="2" width="6" height="6" rx="1" fill="#00334F" />
        </FloatingNode>

        {/* Node 6: Cloud (Far Right) */}
        <FloatingNode x={650} y={400} delay={2.5}>
           <rect x="-25" y="-25" width="50" height="50" rx="12" fill="white" stroke="#E2E8F0" />
           <path d="M-8 0 L8 0 M0 -8 L0 8" stroke="#FF6B2C" strokeWidth="3" strokeLinecap="round" />
        </FloatingNode>

      </svg>
    </div>
  );
}

function FloatingNode({ x, y, delay, children }: { x: number, y: number, delay: number, children: React.ReactNode }) {
  return (
    <motion.g 
      initial={{ x, y, opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [y, y - 10, y],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { type: "spring", delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 } // Floating effect
      }}
    >
      <motion.g whileHover={{ scale: 1.1 }}>
        {/* Drop Shadow Simulation */}
        <ellipse cx="0" cy="40" rx="20" ry="6" fill="#000000" opacity="0.05" />
        {children}
      </motion.g>
    </motion.g>
  );
}
