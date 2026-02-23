import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroV12Enhanced() {
  const [count, setCount] = useState(0);

  // Animated counter
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev < 25 ? prev + 1 : 25));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#FAFAF7] to-white overflow-hidden pt-32 pb-20 lg:pt-0 lg:pb-0 flex items-center">
      
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 -right-1/4 w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: 'radial-gradient(circle, #8FAE9E 0%, transparent 70%)'
          }}
        />
        <motion.div 
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: 'radial-gradient(circle, #C9A86A 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#8FAE9E 1px, transparent 1px), linear-gradient(90deg, #8FAE9E 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Enhanced Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            {/* Premium Badge with Glow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#8FAE9E]/10 to-[#C9A86A]/10 border border-[#8FAE9E]/20 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8FAE9E]" />
              <span className="text-[10px] font-bold text-[#1A1A1A] tracking-[0.2em] uppercase">
                AI-First Engineering
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FAE9E] animate-pulse" />
            </motion.div>

            <h1 className="font-['Playfair_Display',serif] text-6xl lg:text-7xl text-[#1E1E1E] mb-6 leading-[1.05] tracking-tight">
              Build Intelligent
              <br />
              <span className="bg-gradient-to-r from-[#8FAE9E] to-[#C9A86A] bg-clip-text text-transparent">
                AI Systems
              </span>
              <br />
              That Scale
            </h1>
            
            <p className="text-xl text-[#6B6B6B] mb-10 leading-relaxed font-['Inter',sans-serif] max-w-xl">
              Enterprise-grade AI platforms, multi-agent systems, and intelligent automation. 
              <span className="text-[#8FAE9E] font-medium"> Production-ready in weeks</span>, not months.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 mb-12">
              {['GPT-4', 'Claude', 'Custom Agents', 'Real-time AI'].map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="px-3 py-1.5 text-xs font-mono font-medium text-[#1E1E1E] bg-white/80 backdrop-blur-sm border border-[#E5E1D8] rounded-full hover:border-[#8FAE9E] hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(143, 174, 158, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-5 bg-gradient-to-r from-[#8FAE9E] to-[#8FAE9E] text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_8px_30px_rgba(143,174,158,0.2)]"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, borderColor: '#8FAE9E' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-5 border-2 border-[#E5E1D8] bg-white/50 backdrop-blur-sm text-[#1E1E1E] font-medium rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5" />
                Schedule Demo
              </motion.button>
            </div>

            {/* Social Proof - Modern */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8FAE9E] to-[#C9A86A] border-2 border-white" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1E1E1E]">Trusted by 50+ companies</p>
                <p className="text-xs text-[#8B8B8B]">Including Fortune 500 teams</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Modern Tech Visualization */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Glassmorphism Card */}
            <div className="relative w-full max-w-lg">
              
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                {/* Animated Counter */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-[#8FAE9E]" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B8B8B]">AI Platforms</span>
                    </div>
                    <div className="font-['Playfair_Display',serif] text-6xl font-medium text-[#1E1E1E] mb-2">
                      {count}+
                    </div>
                    <p className="text-sm text-[#6B6B6B]">Delivered in production</p>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-full border-2 border-[#8FAE9E]/20 border-t-[#8FAE9E] flex items-center justify-center"
                  >
                    <TrendingUp className="w-6 h-6 text-[#8FAE9E]" />
                  </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.05, borderColor: '#8FAE9E' }}
                    className="p-4 rounded-[24px] border border-[#E5E1D8] bg-gradient-to-br from-white to-[#FAFAF7] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="font-mono text-2xl font-bold text-[#1E1E1E] mb-1">6+</div>
                    <p className="text-xs text-[#8B8B8B] uppercase tracking-wider">Agent Systems</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05, borderColor: '#C9A86A' }}
                    className="p-4 rounded-[24px] border border-[#E5E1D8] bg-gradient-to-br from-white to-[#FAFAF7] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="font-mono text-2xl font-bold text-[#1E1E1E] mb-1">35%</div>
                    <p className="text-xs text-[#8B8B8B] uppercase tracking-wider">Cost Savings</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05, borderColor: '#8FAE9E' }}
                    className="p-4 rounded-[24px] border border-[#E5E1D8] bg-gradient-to-br from-white to-[#FAFAF7] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="font-mono text-2xl font-bold text-[#1E1E1E] mb-1">4wk</div>
                    <p className="text-xs text-[#8B8B8B] uppercase tracking-wider">Avg Delivery</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05, borderColor: '#C9A86A' }}
                    className="p-4 rounded-[24px] border border-[#E5E1D8] bg-gradient-to-br from-white to-[#FAFAF7] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="font-mono text-2xl font-bold text-[#1E1E1E] mb-1">99%</div>
                    <p className="text-xs text-[#8B8B8B] uppercase tracking-wider">Uptime SLA</p>
                  </motion.div>
                </div>

                {/* Live Status Indicator */}
                <div className="mt-6 pt-6 border-t border-[#E5E1D8] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8FAE9E] animate-pulse" />
                    <span className="text-xs font-mono text-[#6B6B6B]">All systems operational</span>
                  </div>
                  <span className="text-xs text-[#8B8B8B] font-mono">v2.4.1</span>
                </div>
              </motion.div>

              {/* Floating Secondary Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -right-8 -bottom-8 bg-[#1E1E1E] text-white rounded-[24px] p-6 shadow-2xl max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#8FAE9E]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B8B8B]">Live Deploy</span>
                </div>
                <p className="font-mono text-sm text-white/90 leading-relaxed">
                  <span className="text-[#8FAE9E]">$</span> git push origin main<br />
                  <span className="text-white/60">✓ Build successful</span><br />
                  <span className="text-white/60">✓ Tests passing</span><br />
                  <span className="text-[#8FAE9E]">✓ Deployed</span>
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#8FAE9E]/20 rounded-full blur-sm" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#C9A86A]/20 rounded-full blur-sm" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#E5E1D8] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#8FAE9E] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
