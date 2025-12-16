import { motion } from 'motion/react';
import { 
  Compass, 
  Zap, 
  Link2, 
  Rocket, 
} from 'lucide-react';

const phases = [
  {
    weeks: "Weeks 1–2",
    title: "Strategy & Design",
    desc: "Scope, architecture, and UX",
    icon: Compass,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  },
  {
    weeks: "Weeks 3–5",
    title: "Rapid Build",
    desc: "Core development and AI logic",
    icon: Zap,
    color: "text-amber-300",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20"
  },
  {
    weeks: "Weeks 6–7",
    title: "Integrations",
    desc: "Testing and connecting APIs",
    icon: Link2,
    color: "text-blue-300",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    weeks: "Week 8",
    title: "Launch & Scale",
    desc: "Deployment and handoff",
    icon: Rocket,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  }
];

export function TimelineV6() {
  return (
    <section className="py-24 lg:py-32 bg-[#00334F] relative overflow-hidden">
      
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 1. Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-orange-400 tracking-wide uppercase">The Sun AI Velocity System</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Build AI in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">8 Weeks</span>. <br className="hidden md:block" />
            Not 8 Months.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-light"
          >
            A proven acceleration system that takes your AI project from idea to production — fast.
          </motion.p>
        </div>

        {/* 2. Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500/30 via-amber-500/30 to-blue-500/30 w-[90%] mx-auto z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Milestone Circle */}
                <div className={`w-14 h-14 rounded-full bg-[#00334F] border-2 ${phase.border.replace('bg-', 'border-')} flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300`}>
                  <phase.icon className={`w-6 h-6 ${phase.color}`} />
                  {/* Glow effect behind circle */}
                  <div className={`absolute inset-0 rounded-full blur-md opacity-20 ${phase.bg.replace('/10', '/40')}`} />
                </div>

                {/* Content Card */}
                <div className="w-full bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group-hover:border-white/10">
                  <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${phase.color}`}>
                    {phase.weeks}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {phase.desc}
                  </p>
                </div>

                {/* Mobile Connector Line (Vertical) */}
                {i !== phases.length - 1 && (
                  <div className="lg:hidden absolute top-14 bottom-0 left-1/2 w-[2px] bg-white/10 -z-10 h-[calc(100%+2rem)]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
