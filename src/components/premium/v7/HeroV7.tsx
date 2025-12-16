import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Zap, Shield, Globe2, Layers } from 'lucide-react';
import { HeroGlobeIllustrationV7 } from './HeroGlobeIllustrationV7';

export function HeroV7() {
  return (
    <section className="relative min-h-[90vh] bg-[#FDFDFD] overflow-hidden pt-32 pb-20 lg:pt-0 lg:pb-0 flex items-center">
      
      {/* Background Decor (Subtle gradient mesh) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-rose-50/40 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            {/* Tagline / Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#FF6A3D] text-xs font-bold mb-8 tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D] animate-pulse" />
              Production-Ready AI
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              The AI Agency <br />
              <span className="text-[#FF6A3D]">for the Future</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium max-w-lg">
              Sun AI designs and launches intelligent platforms, automation systems, and multi-agent solutions that scale with your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="px-8 py-4 rounded-full bg-[#FF6A3D] text-white font-bold hover:bg-[#E55A2F] hover:shadow-lg hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2 group min-w-[180px]">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-900 font-bold hover:border-[#FF6A3D] hover:text-[#FF6A3D] hover:bg-orange-50 transition-all flex items-center justify-center gap-2 min-w-[180px]">
                <MessageSquare className="w-4 h-4" />
                Talk to an Expert
              </button>
            </div>

            {/* Trusted By / Social Proof */}
            <div className="pt-8 border-t border-slate-100">
               <p className="text-xs font-semibold text-slate-400 mb-6 uppercase tracking-widest">Trusted by innovative teams</p>
               <div className="flex flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Fake Logos using Icons + Text for a premium feel */}
                 <div className="flex items-center gap-2 group">
                   <Zap className="w-5 h-5 text-slate-900 group-hover:text-[#FF6A3D] transition-colors" />
                   <span className="font-bold text-slate-700 text-lg tracking-tight">Vortex</span>
                 </div>
                 <div className="flex items-center gap-2 group">
                   <Shield className="w-5 h-5 text-slate-900 group-hover:text-[#FF6A3D] transition-colors" />
                   <span className="font-bold text-slate-700 text-lg tracking-tight">Guardian</span>
                 </div>
                 <div className="flex items-center gap-2 group">
                   <Globe2 className="w-5 h-5 text-slate-900 group-hover:text-[#FF6A3D] transition-colors" />
                   <span className="font-bold text-slate-700 text-lg tracking-tight">Orbit</span>
                 </div>
                 <div className="flex items-center gap-2 group hidden sm:flex">
                   <Layers className="w-5 h-5 text-slate-900 group-hover:text-[#FF6A3D] transition-colors" />
                   <span className="font-bold text-slate-700 text-lg tracking-tight">Stack</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Premium AI Globe Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
             {/* Scale down slightly on mobile to fit */}
             <div className="scale-[0.8] sm:scale-100 lg:scale-[1.1] origin-center lg:origin-right">
               <HeroGlobeIllustrationV7 />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
