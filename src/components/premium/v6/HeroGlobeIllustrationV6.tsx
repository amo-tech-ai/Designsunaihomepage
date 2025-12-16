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

export function HeroGlobeIllustrationV6() {
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
    <div className="relative w-full h-[700px] flex items-center justify-center select-none perspective-[1000px]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00334F]/5 to-[#FF6B2C]/5 rounded-full blur-3xl pointer-events-none" />

      <svg className="w-full h-full max-w-[800px] overflow-visible" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* 3D Sphere Gradient */}
          <radialGradient id="sphereGradient" cx="0.3" cy="0.3" r="0.8">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#00334F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00111F" stopOpacity="1" />
          </radialGradient>
          
          {/* Soft Glow for Rings */}
          <radialGradient id="ringGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="80%" stopColor="#FF6B2C" stopOpacity="0" />
            <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0.15" />
          </radialGradient>

          {/* Icon Card Shadow */}
          <filter id="cardShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00334F" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* --- Rotating Orbit System --- */}
        <g transform="translate(400, 400)">
          
          {/* Outer Orbit Ring (Dashed) */}
          <motion.circle 
            r="300" 
            stroke="#00334F" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.1"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle Tech Ring (Solid + Gradient) */}
          <motion.circle 
            r="220" 
            stroke="#00334F" strokeWidth="1.5" strokeOpacity="0.1"
            animate={{ rotate: -360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Data Ring (Fast Rotation) */}
          <motion.circle 
            r="160" 
            stroke="#0EA5E9" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="20 40"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />

          {/* Connection Lines from Center to Orbit */}
          <g stroke="#00334F" strokeWidth="1" strokeOpacity="0.1">
            {icons.map((_, i) => {
              const angle = (i * 360) / icons.length;
              return (
                <motion.line
                  key={i}
                  x1="0" y1="0" x2="220" y2="0"
                  transform={`rotate(${angle})`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ delay: 1 + i * 0.1, duration: 1.5 }}
                />
              );
            })}
          </g>

          {/* Central Globe Core */}
          <g className="filter drop-shadow-2xl">
            {/* Outer Glow Halo */}
            <motion.circle 
              r="90" 
              fill="#0EA5E9" fillOpacity="0.1"
              animate={{ r: [90, 100, 90], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* The 3D Sphere */}
            <circle r="80" fill="url(#sphereGradient)" />
            
            {/* Surface Details (Simulating Latitude/Longitude) */}
            <g opacity="0.3" stroke="white" strokeWidth="0.5" fill="none">
              <ellipse cx="0" cy="0" rx="80" ry="20" transform="rotate(20)" />
              <ellipse cx="0" cy="0" rx="80" ry="40" transform="rotate(-10)" />
              <ellipse cx="0" cy="0" rx="30" ry="80" transform="rotate(15)" />
            </g>

            {/* Core Label */}
            <text 
              y="5" 
              textAnchor="middle" 
              fill="white" 
              className="text-3xl font-bold tracking-widest font-sans drop-shadow-md"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            >
              AI
            </text>
          </g>

        </g>

        {/* --- Floating Icons (Positioned Absolute relative to SVG center) --- */}
        {icons.map((item, i) => {
          const angle = (i * 360) / icons.length;
          const rad = (angle * Math.PI) / 180;
          const radius = 300; // Orbit Radius
          const x = 400 + radius * Math.cos(rad);
          const y = 400 + radius * Math.sin(rad);

          return (
            <foreignObject 
              key={i} 
              x={x - 40} 
              y={y - 40} 
              width="80" 
              height="80"
              className="overflow-visible"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 200, damping: 18 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-20 h-20 rounded-full bg-white flex flex-col items-center justify-center relative z-10 group cursor-default"
                style={{ 
                  boxShadow: "0 10px 40px -10px rgba(0,51,79,0.15)",
                  border: "1px solid rgba(226,232,240,0.8)"
                }}
              >
                {/* Icon Container with subtle gradient bg on hover */}
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-1 group-hover:bg-[#E0F2FE] transition-colors duration-300">
                  <item.Icon className="w-5 h-5 text-[#00334F] group-hover:text-[#0284C7] transition-colors" />
                </div>
                
                {/* Label */}
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide group-hover:text-[#00334F] transition-colors">
                  {item.label}
                </span>

                {/* Active Indicator Dot */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </foreignObject>
          );
        })}

      </svg>
    </div>
  );
}
