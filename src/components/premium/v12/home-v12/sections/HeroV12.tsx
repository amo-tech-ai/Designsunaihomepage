import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function HeroV12() {
  return (
    <section className="relative min-h-[90vh] bg-white overflow-hidden pt-32 pb-20 lg:pt-0 lg:pb-0 flex items-center border-b border-[#E8E8E8]">
      
      {/* Minimal Background Grid - Subtle Editorial Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#E8E8E8 1px, transparent 1px), linear-gradient(90deg, #E8E8E8 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E8E8] bg-[#FAFAF9] text-[#6B6B6B] text-[10px] font-bold mb-8 tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 bg-[#C4B5A6] animate-pulse" />
              Production-Ready AI Systems
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-8 leading-[1.1] tracking-tight">
              Build Intelligent <br />
              AI Products, Agents <br />
              & Automation
            </h1>
            
            <p className="text-xl text-[#4A4A4A] mb-12 leading-relaxed font-light max-w-lg font-serif" style={{ fontFamily: 'Lora, serif' }}>
              Sun AI designs and launches production-ready AI platforms, automation systems, and multi-agent solutions that transform how teams work and scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="px-8 py-5 bg-[#C4B5A6] text-white font-medium hover:bg-[#A89886] transition-all duration-300 flex items-center justify-center gap-3 group min-w-[200px]">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-5 border border-[#E8E8E8] bg-white text-[#1A1A1A] font-medium hover:border-[#D4D4D4] hover:bg-[#F8F8F8] transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]">
                <MessageSquare className="w-4 h-4" />
                Talk to an Expert
              </button>
            </div>

            {/* Trusted By - Minimal */}
            <div className="pt-8 border-t border-[#E8E8E8]">
               <p className="text-[10px] font-bold text-[#9E9E9E] mb-4 uppercase tracking-widest">Trusted by innovative teams</p>
               <div className="flex gap-8 items-center">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="h-4 w-20 border border-[#E8E8E8] bg-[#FAFAF9]" />
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Right Side: Editorial Data Visualization */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md aspect-square border border-[#E8E8E8] bg-white p-12 relative">
              {/* Architectural Data Display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-8">
                  <div className="border-l-2 border-[#C4B5A6] pl-6 text-left">
                    <div className="text-5xl font-serif text-[#1A1A1A] mb-2">25+</div>
                    <div className="text-xs uppercase tracking-widest text-[#9E9E9E] font-bold">AI Platforms Delivered</div>
                  </div>
                  
                  <div className="border-l-2 border-[#C4B5A6] pl-6 text-left">
                    <div className="text-5xl font-serif text-[#1A1A1A] mb-2">6+</div>
                    <div className="text-xs uppercase tracking-widest text-[#9E9E9E] font-bold">Agent Systems</div>
                  </div>
                  
                  <div className="border-l-2 border-[#C4B5A6] pl-6 text-left">
                    <div className="text-5xl font-serif text-[#1A1A1A] mb-2">35%</div>
                    <div className="text-xs uppercase tracking-widest text-[#9E9E9E] font-bold">Avg Cost Savings</div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#E8E8E8]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#E8E8E8]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#E8E8E8]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#E8E8E8]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
