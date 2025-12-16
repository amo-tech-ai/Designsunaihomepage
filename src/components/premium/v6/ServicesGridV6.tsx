import { motion } from 'motion/react';
import { 
  Wrench, 
  ShoppingBag, 
  Zap,
  ArrowUpRight
} from 'lucide-react';

// Custom Lucide-style Icon: Mobile App with Grid
const MobileAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Smartphone Body */}
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    {/* Top Speaker Dot */}
    <path d="M12 5h.01" />
    {/* Main Screen / Image Area */}
    <rect x="8" y="8" width="8" height="5" rx="1" />
    {/* Abstract Image (Mountain Peak) inside Screen */}
    <path d="M9.5 11l1.5-1.5 2.5 2.5" />
    {/* App Grid: Row 1 */}
    <rect x="8" y="15" width="2.5" height="2.5" rx="0.5" />
    <rect x="13.5" y="15" width="2.5" height="2.5" rx="0.5" />
    {/* App Grid: Row 2 */}
    <rect x="8" y="18.5" width="2.5" height="2.5" rx="0.5" />
    <rect x="13.5" y="18.5" width="2.5" height="2.5" rx="0.5" />
  </svg>
);

// Custom Icon: Automation (Gear with Checkmark + Recycling Arrows) - Refined
const AutomationIconRefined = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
     {/* Outer Recycle Arrows */}
    <path d="M21 10c0-4-3-7-7-7-1.5 0-3 .5-4.5 1.5L7 7" />
    <path d="M7 3v4h4" />
    
    <path d="M3 14c0 4 3 7 7 7 1.5 0 3-.5 4.5-1.5L17 17" />
    <path d="M17 21v-4h-4" />
    
    {/* Central Gear */}
    <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    <path d="M12 7v1" />
    <path d="M12 16v1" />
    <path d="M16.5 12h-1" />
    <path d="M8.5 12h-1" />
    <path d="m15.2 9.2-.7.7" />
    <path d="m9.5 14.9-.7.7" />
    <path d="m15.2 14.8-.7-.7" />
    <path d="m9.5 9.1-.7-.7" />
    
    {/* Checkmark */}
    <path d="m10.5 12 1 1 2.5-2.5" />
  </svg>
);

// Custom Icon: Multi-Agent (3 Stacked Rounded Diamonds) - Refined
const MultiAgentIconRefined = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Top Layer - Rounded Diamond */}
    <path d="M12 3c.6 0 1.1.2 1.5.5l7 4c.6.4.6 1 0 1.4l-7 4c-.4.2-.9.2-1.3 0l-7-4c-.6-.4-.6-1 0-1.4l7-4A2.5 2.5 0 0 1 12 3z" />
    
    {/* Middle Layer */}
    <path d="M2.5 10l7.8 4.5c.9.5 2.5.5 3.4 0l7.8-4.5" />
    
    {/* Bottom Layer */}
    <path d="M2.5 15l7.8 4.5c.9.5 2.5.5 3.4 0l7.8-4.5" />
  </svg>
);

// Custom Icon: Custom AI Agents (Lightbulb with AI Chip)
const CustomAgentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Lightbulb Outline */}
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-7 7c0 2 1 3.5 2 5.5C8 16.5 8 17 8 18h8c0-1 0-1.5 1-3.5 1-2 2-3.5 2-5.5a7 7 0 0 0-7-7z" />
    
    {/* Chip Body (Centered) */}
    <rect x="9.5" y="7" width="5" height="5" rx="1" />
    
    {/* Chip Pins */}
    {/* Top Pins */}
    <path d="M10.5 7V5.5" />
    <path d="M13.5 7V5.5" />
    {/* Bottom Pins */}
    <path d="M10.5 12v1.5" />
    <path d="M13.5 12v1.5" />
    {/* Left Pins */}
    <path d="M9.5 8.5H8" />
    <path d="M9.5 10.5H8" />
    {/* Right Pins */}
    <path d="M14.5 8.5h1.5" />
    <path d="M14.5 10.5h1.5" />
  </svg>
);

// Custom Icon: Analytics (Bar Chart + Line Growth)
const AnalyticsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Axes */}
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    
    {/* Bars (Rising) */}
    <path d="M7 17v-4" />
    <path d="M12 17v-8" />
    <path d="M17 17v-6" />
    
    {/* Line Growth Chart */}
    <path d="m7 11 5-5 5 2 4-5" />
    
    {/* Data Points on Line */}
    <circle cx="7" cy="11" r="1.5" />
    <circle cx="12" cy="6" r="1.5" />
    <circle cx="17" cy="8" r="1.5" />
    <circle cx="21" cy="3" r="1.5" />
  </svg>
);

const services = [
  { 
    title: "AI Applications", 
    desc: "Intelligent apps that adapt to user context.", 
    icon: MobileAppIcon 
  },
  { 
    title: "Automation Systems", 
    desc: "End-to-end workflows that run on autopilot.", 
    icon: AutomationIconRefined 
  },
  { 
    title: "Multi-Agent Systems", 
    desc: "Orchestrated agents solving complex logic.", 
    icon: MultiAgentIconRefined 
  },
  { 
    title: "Custom AI Agents", 
    desc: "Specialized models trained on your data.", 
    icon: CustomAgentIcon 
  },
  { 
    title: "Dashboards & Analytics", 
    desc: "Real-time visibility into business performance.", 
    icon: AnalyticsIcon 
  },
  { 
    title: "Internal Tools", 
    desc: "Admin panels that streamline operations.", 
    icon: Wrench 
  },
  { 
    title: "Marketplaces", 
    desc: "Platforms that match supply and demand intelligently.", 
    icon: ShoppingBag 
  },
  { 
    title: "Autonomous Workflows", 
    desc: "Self-healing processes for mission-critical tasks.", 
    icon: Zap 
  },
];

export function ServicesGridV6() {
  return (
    <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-[2px] bg-[#00334F] opacity-20" />
            <span className="text-[#00334F] font-semibold tracking-widest uppercase text-xs">Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6 leading-[1.1]"
          >
            What We Build
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 font-light leading-relaxed"
          >
            From custom agents to full-scale automation platforms, we engineer systems that drive measurable ROI.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-[24px] p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-100 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient Overlay (Subtle) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Premium Icon Container */}
              <div className="relative mb-8 inline-block">
                {/* Outer Ring (Animates) */}
                <div className="absolute inset-0 rounded-2xl border border-blue-100 rotate-0 group-hover:rotate-45 scale-90 group-hover:scale-110 transition-all duration-500" />
                
                {/* Inner Glass Container */}
                <div className="relative w-28 h-28 bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:border-blue-200 group-hover:shadow-lg group-hover:shadow-blue-900/5 transition-all duration-300">
                  <s.icon className="w-16 h-16 text-[#00334F] stroke-[1px] group-hover:text-[#0EA5E9] transition-colors" />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-[#00334F] mb-3 group-hover:text-[#0EA5E9] transition-colors flex items-center justify-between">
                  {s.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-[15px] text-slate-500 leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
