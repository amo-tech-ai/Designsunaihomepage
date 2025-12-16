import { motion } from 'motion/react';
import { 
  Workflow, 
  Box, 
  Database, 
  Bot, 
  Settings2, 
  BarChart3, 
  MessageSquareText, 
  Cloud 
} from 'lucide-react';

export function HeroGlobeIllustrationV7() {
  const icons = [
    { Icon: Workflow, label: "Integrations" },
    { Icon: Box, label: "Solutions" },
    { Icon: Database, label: "Data" },
    { Icon: Bot, label: "AI Agents" },
    { Icon: Settings2, label: "Automation" },
    { Icon: BarChart3, label: "Analytics" },
    { Icon: MessageSquareText, label: "NLP" },
    { Icon: Cloud, label: "Cloud" },
  ];

  return (
    <div className="relative w-full h-[900px] flex items-center justify-center select-none perspective-[1000px]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00334F] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

      <svg className="w-full h-full max-w-[1000px] overflow-visible" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Main Sphere Gradient (Deep Navy to Teal to Highlight) */}
          <radialGradient id="sphereMain" cx="0.4" cy="0.4" r="0.7">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" /> {/* Ice Blue Highlight */}
            <stop offset="25%" stopColor="#0EA5E9" stopOpacity="0.9" /> {/* Teal */}
            <stop offset="60%" stopColor="#0369A1" stopOpacity="0.95" /> {/* Ocean */}
            <stop offset="100%" stopColor="#0C4A6E" stopOpacity="1" /> {/* Deep Navy */}
          </radialGradient>
          
          {/* Text Gradient (Cyan -> Purple/Blue as per image) */}
          <linearGradient id="textGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A5F3FC" /> {/* Light Cyan */}
            <stop offset="50%" stopColor="#38BDF8" /> {/* Sky Blue */}
            <stop offset="100%" stopColor="#818CF8" /> {/* Indigo/Purple */}
          </linearGradient>

          {/* Reflection Gradient */}
          <linearGradient id="reflection" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* --- Dynamic Orbit System --- */}
        <g transform="translate(500, 500)">
          
          {/* Outer Dashed Ring (Slow) */}
          <motion.circle 
            r="420" 
            stroke="#00334F" strokeWidth="1" strokeDasharray="8 8" strokeOpacity="0.08"
            animate={{ rotate: 360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle Tech Ring (Medium) */}
          <motion.circle 
            r="330" 
            stroke="#00334F" strokeWidth="1.5" strokeOpacity="0.1"
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Particle Track */}
          <circle r="230" stroke="#0EA5E9" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
          
          {/* Rotating Particles */}
          <g>
            {[0, 120, 240].map((deg, i) => (
              <motion.circle
                key={i}
                r="3" fill="#0EA5E9"
                animate={{ rotate: [deg, deg + 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ offsetPath: "path('M 0 -230 A 230 230 0 1 1 0 230 A 230 230 0 1 1 0 -230')" }} 
              />
            ))}
             {/* Simple Rotation for particles */}
             <motion.g animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
               <circle cx="230" cy="0" r="3" fill="#38BDF8" />
               <circle cx="-230" cy="0" r="3" fill="#38BDF8" />
             </motion.g>
          </g>

          {/* Curved Data Trails (Connecting Orbit to Center) */}
          <g opacity="0.15" stroke="#00334F" fill="none">
             {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
               <motion.path
                 key={i}
                 d="M 320 0 Q 180 0 160 0"
                 transform={`rotate(${deg})`}
                 initial={{ strokeDasharray: "10 10", strokeDashoffset: 20 }}
                 animate={{ strokeDashoffset: 0 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
             ))}
          </g>

          {/* --- Central Premium Globe (Enlarged) --- */}
          <g className="filter drop-shadow-2xl">
             {/* Back Glow */}
             <motion.circle 
               r="170" fill="#0EA5E9" fillOpacity="0.15" blur="20"
               animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             />

             {/* Main Body (Radius Increased to 160) */}
             <circle r="160" fill="url(#sphereMain)" />
             
             {/* Tech Grid Overlay (Rotating with globe) */}
             <motion.g 
               animate={{ rotate: 360 }} 
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               opacity="0.2"
             >
               <circle r="158" stroke="white" strokeWidth="0.5" strokeDasharray="20 10" />
               <path d="M-160 0 L160 0 M0 -160 L0 160" stroke="white" strokeWidth="0.5" />
               <circle r="110" stroke="white" strokeWidth="0.5" />
               <circle r="60" stroke="white" strokeWidth="0.5" />
             </motion.g>

             {/* Specular Highlight (Reflection) */}
             <ellipse cx="-50" cy="-50" rx="80" ry="40" transform="rotate(-45)" fill="url(#reflection)" />
             
             {/* Inner Core Text - ENLARGED AI */}
             <motion.g
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
             >
                <text 
                  x="0" 
                  y="15" 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  className="font-bold tracking-widest pointer-events-none select-none"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "140px",
                    fill: "url(#textGradient)",
                    filter: "drop-shadow(0 0 15px rgba(56, 189, 248, 0.5))"
                  }}
                >
                  AI
                </text>
                
                {/* Subtle pulse behind text */}
                <motion.circle 
                  r="80" fill="white"
                  animate={{ opacity: [0, 0.1, 0], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="blur-xl pointer-events-none"
                />
             </motion.g>
          </g>

        </g>

        {/* --- Floating Icons --- */}
        {icons.map((item, i) => {
          const angle = (i * 360) / icons.length;
          const rad = (angle * Math.PI) / 180;
          const radius = 420; // Expanded Orbit
          const x = 500 + radius * Math.cos(rad);
          const y = 500 + radius * Math.sin(rad);

          return (
            <foreignObject 
              key={i} 
              x={x - 45} 
              y={y - 45} 
              width="90" 
              height="90"
              className="overflow-visible"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: [0, -8, 0] // Breathing animation
                }}
                transition={{ 
                  scale: { delay: i * 0.1, type: "spring" },
                  y: { duration: 3 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 } 
                }}
                className="w-[90px] h-[90px] rounded-full bg-white flex flex-col items-center justify-center relative z-10 group cursor-default"
                style={{ 
                  boxShadow: "0 15px 40px -10px rgba(0,51,79,0.12), inset 0 0 0 1px rgba(255,255,255,1)",
                  border: "1px solid rgba(226,232,240,0.8)"
                }}
              >
                {/* Glow behind icon */}
                <div className="absolute inset-0 rounded-full bg-blue-50/50 scale-0 group-hover:scale-100 transition-transform duration-500" />
                
                <div className="relative w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-1 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                  <item.Icon className="w-5 h-5 text-[#00334F] group-hover:text-[#0EA5E9] transition-colors stroke-[1.5px]" />
                </div>
                
                <span className="relative text-[10px] font-semibold text-slate-500 uppercase tracking-wide group-hover:text-[#00334F] transition-colors">
                  {item.label}
                </span>
              </motion.div>
            </foreignObject>
          );
        })}

      </svg>
    </div>
  );
}
