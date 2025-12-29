import React from 'react';
import { ArrowRight, Layout, Code, Shield, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { Container, Button } from '../shared/ProcessShared';

interface ProcessHeroProps {
  onNavigateToWizard?: () => void;
  onNavigateToProjects?: () => void;
}

export function ProcessHero({ onNavigateToWizard, onNavigateToProjects }: ProcessHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF6A3D]/20 to-slate-900/0 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#FF6A3D] text-xs font-bold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-pulse"></span>
              AMO AI Process
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              8 Weeks. <br/>
              <span className="text-[#FF6A3D]">Not 8 Months.</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
              We move fast without cutting corners—AI acceleration + expert delivery for measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" onClick={onNavigateToWizard}>
                Start Your AI Brief <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:border-[#FF6A3D] hover:text-[#FF6A3D]" onClick={onNavigateToProjects}>
                See Success Stories
              </Button>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-800 pt-8">
              {[
                { label: 'Projects Delivered', value: '20+' },
                { label: 'Monthly GMV', value: '$2M+' },
                { label: 'Average ROI', value: '300%' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Circular Progress Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[500px] h-[500px]">
               {/* Rings */}
               <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full rotate-[-90deg]">
                 <circle cx="250" cy="250" r="240" fill="none" stroke="#1e293b" strokeWidth="2" />
                 <motion.circle 
                   cx="250" cy="250" r="240" 
                   fill="none" 
                   stroke="#FF6A3D" 
                   strokeWidth="4"
                   strokeDasharray="1507" // 2 * pi * 240
                   strokeDashoffset="1507"
                   animate={{ strokeDashoffset: [1507, 0] }}
                   transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                 />
               </svg>

               {/* Inner Content */}
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                 <div className="w-64 h-64 rounded-full bg-slate-800/50 backdrop-blur border border-slate-700 flex flex-col items-center justify-center p-8 relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-dashed border-slate-600 opacity-30"
                    />
                    <div className="text-4xl font-bold text-white mb-2">8 Weeks</div>
                    <div className="text-sm text-[#FF6A3D] font-bold uppercase tracking-wider">Delivery Cycle</div>
                 </div>
               </div>

               {/* Orbiting Nodes */}
               {[
                 { icon: Layout, label: 'Design', angle: 0 },
                 { icon: Code, label: 'Build', angle: 90 },
                 { icon: Shield, label: 'Test', angle: 180 },
                 { icon: Rocket, label: 'Launch', angle: 270 }
               ].map((node, i) => (
                 <motion.div
                    key={i}
                    className="absolute w-16 h-16 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 z-10"
                    style={{ 
                      top: '50%', 
                      left: '50%',
                      marginTop: -32,
                      marginLeft: -32,
                    }}
                    animate={{ 
                      x: 240 * Math.cos(node.angle * Math.PI / 180),
                      y: 240 * Math.sin(node.angle * Math.PI / 180),
                    }}
                 >
                    <node.icon className="w-6 h-6" />
                    <div className="absolute top-full mt-2 text-xs font-bold text-slate-500 whitespace-nowrap">{node.label}</div>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
