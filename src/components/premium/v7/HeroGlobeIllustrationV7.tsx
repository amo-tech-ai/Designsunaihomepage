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

// Sun AI Mockup/Screenshot in center of orbit - Updated to correct image
import globeImage from "figma:asset/bebfc543b5a4a848cfc04477ed1e523d0d7443a1.png";

interface HeroGlobeIllustrationV7Props {
  theme?: 'light' | 'dark';
}

export function HeroGlobeIllustrationV7({ theme = 'light' }: HeroGlobeIllustrationV7Props) {
  const shouldReduceMotion = useReducedMotion();
  const [activeMobileNode, setActiveMobileNode] = React.useState<number | null>(null);

  // Desktop: Full 8 Icon Orbit
  const desktopIcons = [
    { Icon: Workflow, label: "Integrations" },
    { Icon: Bot, label: "AI Agents" },
    { Icon: Database, label: "Data" },
    { Icon: BarChart3, label: "Analytics" },
    { Icon: Settings2, label: "Automation" },
    { Icon: MessageSquareText, label: "NLP" },
    { Icon: Cloud, label: "Cloud" },
    { Icon: Box, label: "Solutions" },
  ];

  // Mobile: Simplified 3 Node Orbit
  const mobileIcons = [
     { Icon: Bot, label: "AI Agents", sub: "AI that Takes Action", angle: 0 }, 
     { Icon: BarChart3, label: "Analytics", sub: "Insights & Performance", angle: 120 }, 
     { Icon: Settings2, label: "Automation", sub: "Workflow Automation", angle: 240 }, 
  ];

  // Theme colors
  const colors = theme === 'light' ? {
    // Rings
    ringOuter: "#CBD5E1",
    ringOuterOpacity: "0.25",
    ringMiddle: "#94A3B8",
    ringMiddleOpacity: "0.3",
    ringInner: "#FF6A3D",
    ringInnerOpacity: "0.35",
    particle: "#FF6A3D",
    particleSecondary: "#FB923C",
    trail: "#CBD5E1",
    trailOpacity: "0.2",
    // Desktop badges
    badgeBg: "rgba(255, 255, 255, 0.95)",
    badgeBorder: "rgba(15, 23, 42, 0.1)",
    badgeShadow: "0 8px 24px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
    iconBg: "#F8FAFC",
    iconHoverBg: "#F1F5F9",
    iconColor: "#64748B",
    iconHoverColor: "#FF6A3D",
    labelColor: "#64748B",
    labelHoverColor: "#FF6A3D",
    glowBg: "rgba(255, 106, 61, 0.15)",
    // Mobile
    mobileBadgeBg: "rgba(255, 255, 255, 0.95)",
    mobileBadgeBgActive: "#FFF7ED",
    mobileBorder: "#E2E8F0",
    mobileBorderActive: "#FF6A3D",
    mobileIconBg: "#F8FAFC",
    mobileIconBgActive: "rgba(255, 106, 61, 0.15)",
    mobileIconColor: "#64748B",
    mobileIconColorActive: "#FF6A3D",
    mobileLabelColor: "#64748B",
    mobileLabelColorActive: "#FF6A3D",
    mobilePopupBg: "#FFFFFF",
    mobilePopupText: "#0F172A",
    mobilePopupBorder: "#FFFFFF",
    ambientGlowOpacity: "0.06",
  } : {
    // Rings
    ringOuter: "#94A3B8",
    ringOuterOpacity: "0.12",
    ringMiddle: "#CBD5E1",
    ringMiddleOpacity: "0.18",
    ringInner: "#FF6A3D",
    ringInnerOpacity: "0.25",
    particle: "#FDBA74",
    particleSecondary: "#FF6A3D",
    trail: "#94A3B8",
    trailOpacity: "0.3",
    // Desktop badges
    badgeBg: "rgba(15, 23, 42, 0.85)",
    badgeBorder: "rgba(255, 255, 255, 0.1)",
    badgeShadow: "0 15px 40px -10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    iconBg: "#1E293B",
    iconHoverBg: "#334155",
    iconColor: "#94A3B8",
    iconHoverColor: "#FF6A3D",
    labelColor: "#64748B",
    labelHoverColor: "#FF6A3D",
    glowBg: "rgba(255, 106, 61, 0.2)",
    // Mobile
    mobileBadgeBg: "rgba(15, 23, 42, 0.85)",
    mobileBadgeBgActive: "#1E293B",
    mobileBorder: "#334155",
    mobileBorderActive: "#FF6A3D",
    mobileIconBg: "#1E293B",
    mobileIconBgActive: "rgba(255, 106, 61, 0.15)",
    mobileIconColor: "#64748B",
    mobileIconColorActive: "#FF6A3D",
    mobileLabelColor: "#64748B",
    mobileLabelColorActive: "#FF6A3D",
    mobilePopupBg: "#FFFFFF",
    mobilePopupText: "#0F172A",
    mobilePopupBorder: "#FFFFFF",
    ambientGlowOpacity: "0.08",
  };

  return (
    <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] flex items-center justify-center select-none perspective-[1000px]">
      
      {/* Background Ambient Glow (Orange) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-[#FF6A3D] blur-[100px] lg:blur-[140px] rounded-full pointer-events-none" 
        style={{ opacity: colors.ambientGlowOpacity }}
      />

      <svg className="w-full h-full max-w-[900px] overflow-visible" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* --- Dynamic Orbit System --- */}
        <g transform="translate(500, 500)">
          
          {/* Outer Dashed Ring (Slow Rotation) */}
          <motion.circle 
            r="420" 
            stroke={colors.ringOuter} 
            strokeWidth="1" 
            strokeDasharray="10 10" 
            strokeOpacity={colors.ringOuterOpacity}
            fill="none"
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle Tech Ring (Medium Rotation) */}
          <motion.circle 
            r="340" 
            stroke={colors.ringMiddle} 
            strokeWidth="1.5" 
            strokeOpacity={colors.ringMiddleOpacity}
            fill="none"
            animate={shouldReduceMotion ? {} : { rotate: -360 }}
            transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Particle Track (Static) */}
          <circle 
            r="240" 
            stroke={colors.ringInner} 
            strokeWidth="1" 
            strokeOpacity={colors.ringInnerOpacity} 
            strokeDasharray="6 6" 
            fill="none"
          />
          
          {/* Rotating Particles on Inner Track */}
          {!shouldReduceMotion && (
            <motion.g 
              animate={{ rotate: 360 }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="240" cy="0" r="3" fill={colors.particle} opacity="0.8" />
              <circle cx="-240" cy="0" r="3" fill={colors.particleSecondary} opacity="0.8" />
              <circle cx="0" cy="240" r="2.5" fill={colors.particle} opacity="0.6" />
              <circle cx="0" cy="-240" r="2.5" fill={colors.particleSecondary} opacity="0.6" />
            </motion.g>
          )}

          {/* Curved Data Trails (Connecting Orbit to Center) */}
          <g opacity={colors.trailOpacity} stroke={colors.trail} fill="none" strokeWidth="1">
             {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
               <motion.path
                 key={i}
                 d="M 340 0 Q 200 0 170 0"
                 transform={`rotate(${deg})`}
                 strokeDasharray="8 8"
                 initial={{ strokeDashoffset: 16 }}
                 animate={shouldReduceMotion ? {} : { strokeDashoffset: 0 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
             ))}
          </g>

          {/* --- Central Globe Image --- */}
          <g>
             {/* The Globe Image - Centered at 500x500 */}
             <image 
               href={globeImage} 
               x="-250" 
               y="-250" 
               width="500" 
               height="500" 
               preserveAspectRatio="xMidYMid meet"
               style={{ opacity: 0.95 }}
             />
          </g>

        </g>
        
        {/* --- Floating Icons (Desktop: 8 nodes) --- */}
        <g className="hidden lg:block">
            {desktopIcons.map((item, i) => {
              const angle = (i * 360) / desktopIcons.length;
              const rad = (angle * Math.PI) / 180;
              const radius = 420;
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
                      y: shouldReduceMotion ? 0 : [0, -10, 0]
                    }}
                    transition={{ 
                      scale: { delay: i * 0.08, type: "spring", stiffness: 200, damping: 20 },
                      opacity: { delay: i * 0.08, duration: 0.4 },
                      y: { duration: 3.5 + (i * 0.2), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 } 
                    }}
                    className="w-[90px] h-[90px] rounded-full backdrop-blur-lg flex flex-col items-center justify-center relative z-10 group cursor-default"
                    style={{ 
                      background: colors.badgeBg,
                      boxShadow: colors.badgeShadow,
                      border: `1px solid ${colors.badgeBorder}` 
                    }}
                  >
                    {/* Glow behind icon on hover */}
                    <div 
                      className="absolute inset-0 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out" 
                      style={{ background: colors.glowBg }} 
                    />
                    
                    <div 
                      className="relative w-10 h-10 rounded-full flex items-center justify-center mb-1.5 transition-all duration-300" 
                      style={{ background: colors.iconBg }}
                    >
                      <item.Icon 
                        className="w-5 h-5 group-hover:text-[#FF6A3D] transition-colors duration-300 stroke-[1.5px]" 
                        style={{ color: colors.iconColor }} 
                      />
                    </div>
                    
                    <span 
                      className="relative text-[9px] font-bold uppercase tracking-wider group-hover:text-[#FF6A3D] transition-colors duration-300" 
                      style={{ color: colors.labelColor }}
                    >
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
              const radius = 360;
              const x = 500 + radius * Math.cos(rad);
              const y = 500 + radius * Math.sin(rad);
              const isActive = activeMobileNode === i;

              return (
                <foreignObject 
                  key={i} 
                  x={x - 65} 
                  y={y - 55} 
                  width="130" 
                  height="130"
                  className="overflow-visible"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: isActive ? 1.12 : 1, 
                      opacity: 1,
                      y: shouldReduceMotion ? 0 : [0, -6, 0]
                    }}
                    transition={{ 
                      scale: { duration: 0.25, type: "spring" },
                      opacity: { delay: i * 0.1, duration: 0.4 },
                      y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 } 
                    }}
                    onClick={() => setActiveMobileNode(isActive ? null : i)}
                    className="w-[75px] h-[75px] rounded-full flex flex-col items-center justify-center relative z-10 shadow-lg mx-auto transition-all duration-300 backdrop-blur-lg cursor-pointer"
                    style={{
                      background: isActive ? colors.mobileBadgeBgActive : colors.mobileBadgeBg,
                      border: `1.5px solid ${isActive ? colors.mobileBorderActive : colors.mobileBorder}`,
                      boxShadow: isActive 
                        ? `0 12px 32px rgba(255, 106, 61, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)` 
                        : `0 8px 20px rgba(15, 23, 42, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                    }}
                  >
                    <div 
                      className="relative w-9 h-9 rounded-full flex items-center justify-center mb-1.5 transition-all duration-300"
                      style={{ background: isActive ? colors.mobileIconBgActive : colors.mobileIconBg }}
                    >
                      <item.Icon 
                        className="w-5 h-5 stroke-[1.5px] transition-colors duration-300" 
                        style={{ color: isActive ? colors.mobileIconColorActive : colors.mobileIconColor }} 
                      />
                    </div>
                    {/* Label */}
                    <span 
                      className="text-[9px] font-bold uppercase tracking-wide transition-colors duration-300" 
                      style={{ color: isActive ? colors.mobileLabelColorActive : colors.mobileLabelColor }}
                    >
                      {item.label}
                    </span>
                    
                    {/* Expanded Caption (Popup) */}
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.9 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0, 
                        y: isActive ? 0 : 5,
                        scale: isActive ? 1 : 0.9
                      }}
                      transition={{ duration: 0.2 }}
                      className={`
                        absolute top-[85px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold px-3 py-2 rounded-lg pointer-events-none shadow-lg
                        ${isActive ? 'block' : 'hidden'}
                      `}
                      style={{
                        background: colors.mobilePopupBg,
                        color: colors.mobilePopupText
                      }}
                    >
                      {item.sub}
                      <div 
                        className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent" 
                        style={{ borderBottomColor: colors.mobilePopupBorder }} 
                      />
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