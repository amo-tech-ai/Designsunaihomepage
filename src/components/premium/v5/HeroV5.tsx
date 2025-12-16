import { motion } from 'motion/react';
import { ArrowRight, Phone, CheckCircle, Network, Cpu, Zap, Activity } from 'lucide-react';

export function HeroV5() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FDFDFD]">
      {/* Background Subtle Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#FF6A3D]/5 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-[#00334F]/3 to-transparent rounded-full blur-3xl" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10 pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl lg:text-6xl/tight font-bold text-[#00334F] mb-6 tracking-tight">
              Turn Ideas Into <br />
              <span className="text-[#FF6A3D]">AI-Powered Applications</span> <br />
              in Weeks
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              AI products, custom agents, and intelligent systems designed for speed, quality, and measurable outcomes.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "AI product design & prototyping",
                "Custom agents + automated workflows",
                "Full-stack engineering to production"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FF6A3D]/10 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-[#FF6A3D]" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-xl bg-[#00334F] text-white font-semibold hover:bg-[#004466] transition-colors shadow-lg hover:shadow-xl hover:shadow-[#00334F]/20 flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-[#00334F] font-semibold hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Book a Call
              </button>
            </div>
          </motion.div>

          {/* Right Column: Animated Schematic Infographic */}
          <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center">
            <SchematicDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function SchematicDiagram() {
  return (
    <div className="relative w-full h-full">
      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-32 h-32 bg-white rounded-full shadow-[0_0_40px_rgba(0,51,79,0.08)] border border-slate-100 flex items-center justify-center relative z-20"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-[#00334F] to-[#004d73] rounded-full flex items-center justify-center">
            <Cpu className="w-10 h-10 text-white" />
          </div>
          
          {/* Ripple Effect */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-[#FF6A3D]/30"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5 + i * 0.3, opacity: 0 }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 0.8, 
                ease: "easeOut" 
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Satellite Nodes */}
      <SatelliteNode icon={Network} label="Agents" angle={0} delay={0.2} />
      <SatelliteNode icon={Zap} label="Automation" angle={120} delay={0.4} />
      <SatelliteNode icon={Activity} label="Analytics" angle={240} delay={0.6} />

      {/* Connecting Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <motion.path
          d="M 50% 50% L 80% 50%"
          stroke="#00334F" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"
        />
        <motion.path
          d="M 50% 50% L 35% 80%" 
          // Approximate coordinates for 120deg and 240deg roughly
          stroke="#00334F" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"
        />
        <motion.path
          d="M 50% 50% L 35% 20%"
          stroke="#00334F" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"
        />
      </svg>
    </div>
  );
}

function SatelliteNode({ icon: Icon, label, angle, delay }: { icon: any, label: string, angle: number, delay: number }) {
  // Simple positioning logic based on angle
  // 0 deg = right, 90 = bottom (in CSS trig terms, let's just use absolute % for simplicity)
  // Actually, let's use a fixed radius calculation or hardcoded positions for better reliability in this snippet
  
  const positions: Record<number, string> = {
    0: "top-1/2 right-[5%] -translate-y-1/2",
    120: "bottom-[15%] left-[20%]",
    240: "top-[15%] left-[20%]"
  };

  const posClass = positions[angle] || "top-0 left-0";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      className={`absolute ${posClass} z-20 flex flex-col items-center gap-3`}
    >
      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
        <Icon className="w-7 h-7 text-[#FF6A3D]" />
      </div>
      <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#00334F] border border-slate-100 shadow-sm">
        {label}
      </span>
    </motion.div>
  );
}
