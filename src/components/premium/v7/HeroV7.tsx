import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, MessageSquare, Zap, Shield, Globe2, Layers } from 'lucide-react';
import { HeroIllustrationDark } from './HeroIllustrationDark';
import { Button } from '../../ui/design-system/Button';
import { Badge } from '../../ui/design-system/Badge';

interface HeroV7Props {
  onStartProject?: () => void;
  onTalkToExpert?: () => void;
}

export function HeroV7({ onStartProject, onTalkToExpert }: HeroV7Props) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const globeVariants = {
    hidden: { opacity: 0, scale: 0.9, x: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-slate-900 overflow-hidden pt-24 pb-16 md:pt-32 lg:pt-0 lg:pb-0 flex items-center">
      
      {/* Background Decor (Subtle gradient mesh) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-[100px] opacity-40 will-change-transform" />
        <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-[100px] opacity-30 will-change-transform" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Content Block */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left order-1"
          >
            {/* Tagline / Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="orange" className="px-3 py-1 text-xs uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D] animate-pulse mr-2" />
                Production-Ready AI
              </Badge>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 lg:mb-8 leading-[1.1]">
              AI Systems. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Designed to Convert.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="font-body text-lg lg:text-xl text-slate-400 mb-8 lg:mb-10 leading-relaxed font-medium max-w-lg opacity-90">
              We design and deploy intelligent AI products, automations, and agents that grow revenue.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 mb-12 lg:mb-16">
              <Button 
                onClick={onStartProject}
                variant="primary"
                size="md"
                className="w-full sm:w-auto min-w-[180px]"
                rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              >
                Start AI Brief
              </Button>
              <Button 
                onClick={onTalkToExpert}
                variant="outline"
                size="md"
                className="w-full sm:w-auto min-w-[180px] border-slate-700 text-white hover:border-[#FF6A3D] hover:bg-white/5"
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                Talk to an Expert
              </Button>
            </motion.div>

            {/* Trusted By - Hidden on Mobile */}
            <motion.div variants={itemVariants} className="hidden lg:block pt-8 border-t border-white/10 w-full">
               <p className="text-xs font-semibold text-slate-500 mb-6 uppercase tracking-widest text-left">Trusted by innovative teams</p>
               <div className="flex flex-wrap gap-8 opacity-40 hover:opacity-100 transition-all duration-500">
                 <div className="flex items-center gap-2 group cursor-default">
                   <Zap className="w-5 h-5 text-white" />
                   <span className="font-bold text-white text-lg tracking-tight">Vortex</span>
                 </div>
                 <div className="flex items-center gap-2 group cursor-default">
                   <Shield className="w-5 h-5 text-white" />
                   <span className="font-bold text-white text-lg tracking-tight">Guardian</span>
                 </div>
                 <div className="flex items-center gap-2 group cursor-default">
                   <Globe2 className="w-5 h-5 text-white" />
                   <span className="font-bold text-white text-lg tracking-tight">Orbit</span>
                 </div>
                 <div className="flex items-center gap-2 group hidden sm:flex cursor-default">
                   <Layers className="w-5 h-5 text-white" />
                   <span className="font-bold text-white text-lg tracking-tight">Stack</span>
                 </div>
               </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Premium AI Globe Illustration (Dark Mode) */}
          <motion.div 
            variants={globeVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full flex justify-center lg:justify-end order-2"
          >
             {/* Mobile: Centered, Simplified. Desktop: Right aligned, Larger */}
             <div className="scale-[0.8] sm:scale-100 lg:scale-[1.1] origin-center lg:origin-right">
               <HeroIllustrationDark />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
