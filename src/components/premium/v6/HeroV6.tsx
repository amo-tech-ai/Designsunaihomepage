import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { HeroGlobeIllustrationV6 } from './HeroGlobeIllustrationV6';

export function HeroV6() {
  return (
    <section className="relative min-h-[90vh] bg-[#FDFDFD] overflow-hidden pt-24 pb-20 lg:pt-0 lg:pb-0 flex items-center">
      
      {/* Background Decor (Subtle gradient mesh) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-blue-50/50 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-orange-50/30 to-transparent rounded-full blur-3xl opacity-40" />
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#00334F] text-xs font-semibold mb-8 tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D] animate-pulse" />
              Production-Ready AI
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-[#00334F] mb-8 leading-[1.1]">
              Build Intelligent <br />
              <span className="text-[#0EA5E9]">AI Products</span>, Agents <br />
              & Automation
            </h1>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-light max-w-lg">
              Sun AI designs and launches production-ready AI platforms, automation systems, and multi-agent solutions that transform how teams work and scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 rounded-full bg-[#00334F] text-white font-medium hover:bg-[#004466] hover:shadow-lg hover:shadow-[#00334F]/20 transition-all flex items-center justify-center gap-2 group min-w-[180px]">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-[#00334F] font-medium hover:border-[#00334F] hover:bg-slate-50 transition-all flex items-center justify-center gap-2 min-w-[180px]">
                <MessageSquare className="w-4 h-4" />
                Talk to an Expert
              </button>
            </div>

            {/* Trusted By / Social Proof Small */}
            <div className="pt-8 border-t border-slate-100">
               <p className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Trusted by innovative teams</p>
               <div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Placeholders for logos - simple shapes for now */}
                 <div className="h-6 w-20 bg-slate-300 rounded" />
                 <div className="h-6 w-20 bg-slate-300 rounded" />
                 <div className="h-6 w-20 bg-slate-300 rounded" />
                 <div className="h-6 w-20 bg-slate-300 rounded hidden sm:block" />
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
               <HeroGlobeIllustrationV6 />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}