import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
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

// Use the correct globe asset provided by the user
import globeImage from "figma:asset/3fe5efdbb1ca08a49fe60ad32328c8af6e37c23e.png";

interface HeroIllustrationDarkProps {
  lightTheme?: boolean;
}

export function HeroIllustrationDark({ lightTheme = false }: HeroIllustrationDarkProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeMobileNode, setActiveMobileNode] = React.useState<number | null>(null);

  // Desktop: Full 8 Icon Orbit
  const desktopIcons = [
    { Icon: Workflow, label: "Integrations" },
    { Icon: Box, label: "Solutions" },
    { Icon: Database, label: "Data" },
    { Icon: Bot, label: "AI Agents" },
    { Icon: Settings2, label: "Automation" },
    { Icon: BarChart3, label: "Analytics" },
    { Icon: MessageSquareText, label: "NLP" },
    { Icon: Cloud, label: "Cloud" },
  ];

  // Mobile: Simplified 3 Node Orbit
  const mobileIcons = [
     { Icon: BarChart3, label: "Analytics", sub: "Insights & Performance", angle: 270 }, 
     { Icon: Settings2, label: "Automation", sub: "Workflow Automation", angle: 180 }, 
     { Icon: Bot, label: "AI Agents", sub: "AI that Takes Action", angle: 60 }, 
  ];

  // Theme colors
  const colors = lightTheme ? {
    ringOuter: "#CBD5E1",
    ringOuterOpacity: "0.2",
    ringMiddle: "#94A3B8",
    ringMiddleOpacity: "0.25",
    ringInner: "#FF6A3D",
    ringInnerOpacity: "0.3",
    particle: "#FF6A3D",
    trail: "#CBD5E1",
    trailOpacity: "0.2",
    badgeBg: "rgba(255, 255, 255, 0.9)",
    badgeBorder: "rgba(0, 31, 63, 0.15)",
    badgeShadow: "0 8px 32px rgba(0, 31, 63, 0.12)",
    iconBg: "#F1F5F9",
    iconHoverBg: "#E2E8F0",
    iconColor: "#64748B",
    iconHoverColor: "#FF6A3D",
    labelColor: "#64748B",
    labelHoverColor: "#FF6A3D",
    glowBg: "rgba(255, 106, 61, 0.1)",
    // Mobile
    mobileBadgeBg: "rgba(255, 255, 255, 0.9)",
    mobileBadgeBgActive: "#FFF7ED",
    mobileBorder: "#E2E8F0",
    mobileBorderActive: "#FF6A3D",
    mobileIconBg: "#F1F5F9",
    mobileIconBgActive: "rgba(255, 106, 61, 0.1)",
    mobileIconColor: "#64748B",
    mobileIconColorActive: "#FF6A3D",
    mobileLabelColor: "#64748B",
    mobileLabelColorActive: "#FF6A3D",
    mobilePopupBg: "#FFFFFF",
    mobilePopupText: "#0F172A",
    mobilePopupBorder: "#FFFFFF",
  } : {
    ringOuter: "#94A3B8",
    ringOuterOpacity: "0.1",
    ringMiddle: "#CBD5E1",
    ringMiddleOpacity: "0.15",
    ringInner: "#FF6A3D",
    ringInnerOpacity: "0.2",
    particle: "#FDBA74",
    trail: "#94A3B8",
    trailOpacity: "0.3",
    badgeBg: "rgba(15, 23, 42, 0.8)",
    badgeBorder: "rgba(255, 255, 255, 0.1)",
    badgeShadow: "0 15px 40px -10px rgba(0,0,0,0.3)",
    iconBg: "#1E293B",
    iconHoverBg: "#334155",
    iconColor: "#94A3B8",
    iconHoverColor: "#FF6A3D",
    labelColor: "#64748B",
    labelHoverColor: "#FF6A3D",
    glowBg: "rgba(255, 106, 61, 0.2)",
    // Mobile
    mobileBadgeBg: "rgba(15, 23, 42, 0.8)",
    mobileBadgeBgActive: "#1E293B",
    mobileBorder: "#334155",
    mobileBorderActive: "#FF6A3D",
    mobileIconBg: "#1E293B",
    mobileIconBgActive: "rgba(255, 106, 61, 0.1)",
    mobileIconColor: "#64748B",
    mobileIconColorActive: "#FF6A3D",
    mobileLabelColor: "#64748B",
    mobileLabelColorActive: "#FF6A3D",
    mobilePopupBg: "#FFFFFF",
    mobilePopupText: "#0F172A",
    mobilePopupBorder: "#FFFFFF",
  };

  return (
    <div className="relative w-full h-[600px] sm:h-[800px] lg:h-[900px] flex items-center justify-center select-none perspective-[1000px]">
      
      {/* Background Ambient Glow (Orange) */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-[#FF6A3D] blur-[80px] lg:blur-[120px] rounded-full pointer-events-none ${lightTheme ? 'opacity-[0.06]' : 'opacity-[0.08]'}`} />

      <svg className="w-full h-full max-w-[1000px] overflow-visible" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* --- Dynamic Orbit System --- */}
        <g transform="translate(500, 500)">
          
          {/* Outer Dashed Ring (Slow) */}
          <motion.circle 
            r="420" 
            stroke={colors.ringOuter} strokeWidth="1" strokeDasharray="8 8" strokeOpacity={colors.ringOuterOpacity}
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle Tech Ring (Medium) */}
          <motion.circle 
            r="330" 
            stroke={colors.ringMiddle} strokeWidth="1.5" strokeOpacity={colors.ringMiddleOpacity}
            animate={shouldReduceMotion ? {} : { rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Particle Track */}
          <circle r="230" stroke={colors.ringInner} strokeWidth="1" strokeOpacity={colors.ringInnerOpacity} strokeDasharray="4 4" />
          
          {/* Rotating Particles */}
          <g>
            {!shouldReduceMotion && [0, 120, 240].map((deg, i) => (
              <motion.circle
                key={i}
                r="3" fill={colors.particle}
                animate={{ rotate: [deg, deg + 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ offsetPath: "path('M 0 -230 A 230 230 0 1 1 0 230 A 230 230 0 1 1 0 -230')" }} 
              />
            ))}
             {/* Simple Rotation for particles */}
             {!shouldReduceMotion && (
               <motion.g animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                 <circle cx="230" cy="0" r="3" fill={colors.particle} />
                 <circle cx="-230" cy="0" r="3" fill={colors.particle} />
               </motion.g>
             )}
          </g>

          {/* Curved Data Trails (Connecting Orbit to Center) */}
          <g opacity={colors.trailOpacity} stroke={colors.trail} fill="none">
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

          {/* --- Central Globe Image --- */}
          <g>
             {/* The Globe Image - Centered */}
             <image 
               href={globeImage} 
               x="-250" 
               y="-250" 
               width="500" 
               height="500" 
               preserveAspectRatio="xMidYMid meet"
               style={{ opacity: 0.9 }}
             />
          </g>

        </g>
        
        {/* --- Floating Icons (Desktop: 8 nodes) --- */}
        <g className="hidden lg:block">
            {desktopIcons.map((item, i) => {
              const angle = (i * 360) / desktopIcons.length;
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
                    className="w-[90px] h-[90px] rounded-full backdrop-blur-md flex flex-col items-center justify-center relative z-10 group cursor-default"
                    style={{ 
                      background: colors.badgeBg,
                      boxShadow: colors.badgeShadow,
                      border: `1px solid ${colors.badgeBorder}` 
                    }}
                  >
                    {/* Glow behind icon */}
                    <div className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" style={{ background: colors.glowBg }} />
                    
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center mb-1 group-hover:brightness-95 transition-all duration-300" style={{ background: colors.iconBg }}>
                      <item.Icon className="w-5 h-5 group-hover:text-[#FF6A3D] transition-colors stroke-[1.5px]" style={{ color: colors.iconColor }} />
                    </div>
                    
                    <span className="relative text-[10px] font-bold uppercase tracking-wide group-hover:text-[#FF6A3D] transition-colors" style={{ color: colors.labelColor }}>
                      {item.label}
                    </span>
                  </motion.div>
                </foreignObject>
              );
            })}
        </g>

        {/* --- Floating Icons (Mobile: 3 nodes) --- */}
        <g className="lg:hidden">
            {mobileIcons.map((item, i) => {
              const rad = (item.angle * Math.PI) / 180;
              const radius = 380; // Slightly smaller orbit for mobile
              const x = 500 + radius * Math.cos(rad);
              const y = 500 + radius * Math.sin(rad);
              const isActive = activeMobileNode === i;

              return (
                <foreignObject 
                  key={i} 
                  x={x - 60} 
                  y={y - 50} 
                  width="120" 
                  height="120"
                  className="overflow-visible"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: isActive ? 1.1 : 1, 
                      opacity: 1,
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      scale: { duration: 0.2 },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i } 
                    }}
                    onClick={() => setActiveMobileNode(isActive ? null : i)}
                    className="w-[70px] h-[70px] rounded-full flex flex-col items-center justify-center relative z-10 shadow-lg mx-auto transition-all duration-300 backdrop-blur-md"
                    style={{
                      background: isActive ? colors.mobileBadgeBgActive : colors.mobileBadgeBg,
                      border: `1px solid ${isActive ? colors.mobileBorderActive : colors.mobileBorder}`
                    }}
                  >
                    <div className="relative w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-colors duration-300"
                      style={{ background: isActive ? colors.mobileIconBgActive : colors.mobileIconBg }}
                    >
                      <item.Icon className="w-4 h-4 stroke-[1.5px] transition-colors duration-300" style={{ color: isActive ? colors.mobileIconColorActive : colors.mobileIconColor }} />
                    </div>
                    {/* Label */}
                    <span className="text-[8px] font-bold uppercase tracking-wide transition-colors duration-300" style={{ color: isActive ? colors.mobileLabelColorActive : colors.mobileLabelColor }}>
                      {item.label}
                    </span>
                    
                    {/* Expanded Caption (Popup) */}
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 5 }}
                      className={`
                        absolute top-[80px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium px-3 py-1.5 rounded-lg pointer-events-none
                        ${isActive ? 'block' : 'hidden'}
                      `}
                      style={{
                        background: colors.mobilePopupBg,
                        color: colors.mobilePopupText
                      }}
                    >
                      {item.sub}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent" style={{ borderBottomColor: colors.mobilePopupBorder }} />
                    </motion.div>
                  </motion.div>
                </foreignObject>
              );
            })}
        </g>

      </svg>
    </div>
  );
}