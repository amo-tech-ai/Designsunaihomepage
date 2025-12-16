import { motion } from 'motion/react';
import { 
  BrainCircuit, 
  Settings2, 
  BarChart3, 
  MessageSquareCode, 
  Cloud, 
  Workflow, 
  Box, 
  Database 
} from 'lucide-react';

export function HeroCircularIllustrationV6() {
  const icons = [
    { Icon: BrainCircuit, label: "AI Agents" },
    { Icon: Settings2, label: "Automation" },
    { Icon: BarChart3, label: "Analytics" },
    { Icon: MessageSquareCode, label: "NLP" },
    { Icon: Cloud, label: "Cloud" },
    { Icon: Workflow, label: "Integrations" },
    { Icon: Box, label: "Solutions" },
    { Icon: Database, label: "Data" },
  ];

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00334F] opacity-[0.03] blur-3xl rounded-full" />
      
      <svg className="w-full h-full max-w-[800px] overflow-visible" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="coreGradient" x1="400" y1="320" x2="400" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#004E75" />
            <stop offset="100%" stopColor="#002133" />
          </linearGradient>
          <radialGradient id="ringGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="60%" stopColor="#FF6B2C" stopOpacity="0" />
            <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* --- Rotating Outer Rings --- */}
        <g className="origin-center">
          {/* Large Outer Dashed Ring */}
          <motion.circle 
            cx="400" cy="400" r="320" 
            stroke="#00334F" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "400px 400px" }}
          />
          
          {/* Middle Tech Ring */}
          <motion.circle 
            cx="400" cy="400" r="240" 
            stroke="#00334F" strokeWidth="1" strokeOpacity="0.15"
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "400px 400px" }}
          />

          {/* Decorative arcs on middle ring */}
          <motion.path
            d="M 400 160 A 240 240 0 0 1 640 400"
            stroke="#FF6B2C" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round"
            fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "400px 400px" }}
          />
        </g>

        {/* --- Connection Lines (Static) --- */}
        <g stroke="#00334F" strokeWidth="1" strokeOpacity="0.1">
           {icons.map((_, i) => {
             const angle = (i * 360) / icons.length;
             const rad = (angle * Math.PI) / 180;
             const x = 400 + 240 * Math.cos(rad);
             const y = 400 + 240 * Math.sin(rad);
             return <line key={i} x1="400" y1="400" x2={x} y2={y} />;
           })}
        </g>

        {/* --- Central Intelligence Core --- */}
        <g transform="translate(400, 400)">
          {/* Pulse Effect */}
          <motion.circle 
            r="80" 
            fill="#00334F" 
            animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Core Circle */}
          <circle r="70" fill="url(#coreGradient)" className="drop-shadow-2xl" />
          
          {/* Inner Rim */}
          <circle r="60" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
          
          {/* Animated Inner Ring */}
          <motion.circle 
            r="50" 
            stroke="#FF6B2C" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="60 40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Text Emblem */}
          <text 
            x="0" y="8" 
            textAnchor="middle" 
            fill="white" 
            className="text-4xl font-bold tracking-widest font-sans"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
          >
            AI
          </text>
          <text 
            x="0" y="28" 
            textAnchor="middle" 
            fill="white" fillOpacity="0.6"
            className="text-[10px] uppercase tracking-[0.2em] font-medium"
          >
            Engine
          </text>
        </g>

        {/* --- Orbiting Icons --- */}
        {icons.map((item, i) => {
          const angle = (i * 360) / icons.length;
          const rad = (angle * Math.PI) / 180;
          const radius = 240; // Distance from center
          const x = 400 + radius * Math.cos(rad);
          const y = 400 + radius * Math.sin(rad);

          return (
            <foreignObject 
              key={i} 
              x={x - 32} 
              y={y - 32} 
              width="64" 
              height="64"
              className="overflow-visible"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_-4px_rgba(0,51,79,0.1)] border border-slate-100 flex flex-col items-center justify-center gap-1 group hover:border-[#FF6A3D] hover:scale-110 transition-all duration-300 cursor-default relative z-10"
              >
                <item.Icon className="w-6 h-6 text-[#00334F] group-hover:text-[#FF6A3D] transition-colors" />
              </motion.div>
              
              {/* Label (Outside) */}
              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.8 + i * 0.1 }}
                 className={`absolute w-32 text-center text-xs font-semibold text-slate-500 pointer-events-none
                   ${y > 400 ? 'top-16 left-1/2 -translate-x-1/2' : 'bottom-16 left-1/2 -translate-x-1/2'}
                 `}
              >
                {item.label}
              </motion.div>
            </foreignObject>
          );
        })}

      </svg>
    </div>
  );
}
