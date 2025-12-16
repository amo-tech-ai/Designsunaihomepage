import { motion } from 'motion/react';
import { ArrowRight, Play, Database, Network, Cpu, Zap } from 'lucide-react';

export function HeroV4() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F9FA]">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#00334F]/5 to-[#FF6B2C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#00334F]/3 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#FF6B2C]" />
              <span className="text-xs font-semibold text-[#00334F] tracking-wide uppercase">Sun AI Platform 4.0</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl/tight font-bold text-[#00334F] mb-6 tracking-tight">
              Build Intelligent <br />
              <span className="bg-gradient-to-r from-[#00334F] to-[#FF6B2C] bg-clip-text text-transparent">AI Products</span> <br />
              In Weeks.
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Sun AI designs and builds production-ready AI systems that help teams move faster, automate smarter, and scale efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 rounded-full bg-[#00334F] text-white font-medium hover:bg-[#004466] transition-colors shadow-lg hover:shadow-xl hover:shadow-[#00334F]/20 flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-[#00334F] font-medium hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                Book a Strategy Call
              </button>
            </div>

            <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FF6B2C]" />
                <span>Rapid Prototyping</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-[#FF6B2C]" />
                <span>Multi-Agent Workflows</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Animated Infographic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative h-[500px] lg:h-[600px] w-full bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Central Node */}
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div 
                 className="relative z-10 w-24 h-24 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center"
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               >
                 <Cpu className="w-10 h-10 text-[#00334F]" />
                 <div className="absolute -inset-1 bg-gradient-to-r from-[#00334F] to-[#FF6B2C] opacity-20 blur-lg -z-10 rounded-full" />
               </motion.div>
            </div>

            {/* Orbiting Nodes */}
            <AnimatedNodes />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimatedNodes() {
  const nodes = [
    { icon: Database, label: "Data", x: "20%", y: "30%", delay: 0 },
    { icon: Network, label: "Agents", x: "80%", y: "30%", delay: 1 },
    { icon: Zap, label: "Actions", x: "50%", y: "80%", delay: 2 },
  ];

  return (
    <>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center z-10"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + node.delay * 0.2 }}
        >
          <node.icon className="w-6 h-6 text-[#FF6B2C]" />
          
          {/* Connection Line to Center (Simplified visually) */}
          <svg className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 overflow-visible">
            <motion.line
              x1="50%"
              y1="50%"
              x2={node.x === "20%" ? "20%" : node.x === "80%" ? "80%" : "50%"} 
              // This coordinate logic is a bit overly simple for SVG inside div, 
              // but for the sake of this component, let's just make pulsing circles around them 
              // or use absolute positioning for lines.
              // Better to just draw lines from center to relative positions.
              stroke="#00334F"
              strokeWidth="1"
              strokeDasharray="4 4"
              strokeOpacity="0.2"
            />
          </svg>
        </motion.div>
      ))}
      
      {/* Decorative Connecting Lines (Hardcoded for visual balance) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M 50% 50% L 20% 30%"
          stroke="#00334F"
          strokeWidth="2"
          strokeOpacity="0.1"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.path
          d="M 50% 50% L 80% 30%"
          stroke="#00334F"
          strokeWidth="2"
          strokeOpacity="0.1"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.0 }}
        />
        <motion.path
          d="M 50% 50% L 50% 80%"
          stroke="#00334F"
          strokeWidth="2"
          strokeOpacity="0.1"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
      </svg>
    </>
  );
}
