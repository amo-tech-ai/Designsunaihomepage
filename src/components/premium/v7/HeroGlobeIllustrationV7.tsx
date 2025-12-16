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

// Use the globe asset provided by the user
import globeImage from "figma:asset/f851eb49d9488a7fdcf4d178b6c2fbc8c2789f60.png";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6A3D] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <svg className="w-full h-full max-w-[1000px] overflow-visible" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* --- Dynamic Orbit System --- */}
        <g transform="translate(500, 500)">
          
          {/* Outer Dashed Ring (Slow) */}
          <motion.circle 
            r="420" 
            stroke="#94A3B8" strokeWidth="1" strokeDasharray="8 8" strokeOpacity="0.15"
            animate={{ rotate: 360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle Tech Ring (Medium) */}
          <motion.circle 
            r="330" 
            stroke="#CBD5E1" strokeWidth="1.5" strokeOpacity="0.2"
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Particle Track */}
          <circle r="230" stroke="#FF6A3D" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
          
          {/* Rotating Particles */}
          <g>
            {[0, 120, 240].map((deg, i) => (
              <motion.circle
                key={i}
                r="3" fill="#FF6A3D"
                animate={{ rotate: [deg, deg + 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ offsetPath: "path('M 0 -230 A 230 230 0 1 1 0 230 A 230 230 0 1 1 0 -230')" }} 
              />
            ))}
             {/* Simple Rotation for particles */}
             <motion.g animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
               <circle cx="230" cy="0" r="3" fill="#FDBA74" />
               <circle cx="-230" cy="0" r="3" fill="#FDBA74" />
             </motion.g>
          </g>

          {/* Curved Data Trails (Connecting Orbit to Center) */}
          <g opacity="0.15" stroke="#94A3B8" fill="none">
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

          {/* --- Central Globe Image Replacement --- */}
          {/* No box, no shadow, just the image centered and blended if needed */}
          <g>
             {/* The Globe Image */}
             {/* Centered at 0,0 relative to the group (translate(500,500)) */}
             {/* Image size 500x500 to be large and prominent */}
             <image 
               href={globeImage} 
               x="-250" 
               y="-250" 
               width="500" 
               height="500" 
               preserveAspectRatio="xMidYMid meet"
             />
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
                  boxShadow: "0 15px 40px -10px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,1)",
                  border: "1px solid rgba(203, 213, 225, 0.8)" // Slate-300
                }}
              >
                {/* Glow behind icon */}
                <div className="absolute inset-0 rounded-full bg-orange-50/80 scale-0 group-hover:scale-100 transition-transform duration-500" />
                
                <div className="relative w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-1 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                  <item.Icon className="w-5 h-5 text-slate-500 group-hover:text-[#FF6A3D] transition-colors stroke-[1.5px]" />
                </div>
                
                <span className="relative text-[10px] font-bold text-slate-400 uppercase tracking-wide group-hover:text-[#FF6A3D] transition-colors">
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
