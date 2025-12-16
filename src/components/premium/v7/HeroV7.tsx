import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Command, Database, Cpu } from 'lucide-react';

export function HeroV7() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-orange-50/50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#FF6A3D] text-sm font-bold mb-8"
        >
          <Sparkles className="w-4 h-4 fill-current" />
          <span>New: AI Workflow Builder 2.0</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]"
        >
          Turn your data into <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A3D] to-[#FF8C69]">
            custom AI tools
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Build custom AI agents that automate your workflows, analyze your data, 
          and scale your business operations without writing code.
        </motion.p>

        {/* Input / CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-md mx-auto mb-20"
        >
          <div className="flex gap-2 p-1.5 bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-200/50 focus-within:border-[#FF6A3D] focus-within:ring-4 focus-within:ring-orange-500/10 transition-all">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="flex-1 px-4 text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
            />
            <button className="px-6 py-3 bg-[#FF6A3D] text-white font-bold rounded-lg hover:bg-[#E55A2F] transition-colors whitespace-nowrap">
              Get Started
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 overflow-hidden">
            <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden aspect-[16/9] relative">
              {/* Mock UI Header */}
              <div className="absolute top-0 w-full h-12 border-b border-slate-200 bg-white flex items-center px-4 gap-4">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/50" />
                   <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/50" />
                 </div>
                 <div className="h-6 w-64 bg-slate-50 rounded-md border border-slate-100" />
              </div>

              {/* Mock UI Sidebar */}
              <div className="absolute top-12 bottom-0 left-0 w-16 border-r border-slate-200 bg-white flex flex-col items-center py-4 gap-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100" />
                 ))}
              </div>

              {/* Mock UI Content */}
              <div className="absolute top-12 left-16 right-0 bottom-0 p-8 bg-[#F8FAFC]">
                 <div className="flex justify-between items-center mb-8">
                   <div>
                     <div className="h-8 w-48 bg-white rounded-lg border border-slate-200 mb-2" />
                     <div className="h-4 w-32 bg-slate-200/50 rounded" />
                   </div>
                   <div className="h-10 w-32 bg-[#FF6A3D] rounded-lg" />
                 </div>

                 <div className="grid grid-cols-3 gap-6">
                   {[1,2,3].map(i => (
                     <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                       <div className="w-10 h-10 rounded-lg bg-orange-50 mb-4" />
                       <div className="h-4 w-24 bg-slate-100 rounded mb-2" />
                       <div className="h-3 w-full bg-slate-50 rounded mb-1" />
                       <div className="h-3 w-2/3 bg-slate-50 rounded" />
                     </div>
                   ))}
                 </div>
              </div>

              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-24 right-24 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Data Connected</div>
                  <div className="text-[10px] text-slate-500">PostgreSQL • Just now</div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 left-32 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">AI Model Training</div>
                  <div className="text-[10px] text-slate-500">98% Accuracy • Ready</div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
