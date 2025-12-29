import React from 'react';
import { Layout, Code, Shield, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { Section, Container } from '../shared/ProcessShared';

export function ProcessTimeline() {
  const steps = [
    {
      id: 1,
      title: "Design Sprint",
      icon: Layout,
      duration: "1-2 Weeks",
      bullets: ["Strategy + Wireframes", "UI Direction"],
      progress: 25
    },
    {
      id: 2,
      title: "Rapid Build",
      icon: Code,
      duration: "3-5 Weeks",
      bullets: ["Frontend + Backend", "AI Integrations"],
      progress: 60
    },
    {
      id: 3,
      title: "Test & Integrate",
      icon: Shield,
      duration: "6-7 Weeks",
      bullets: ["QA & Security", "Performance Checks"],
      progress: 85
    },
    {
      id: 4,
      title: "Launch & Scale",
      icon: Rocket,
      duration: "Week 8",
      bullets: ["Deploy & Monitor", "Improve Conversion"],
      progress: 100
    }
  ];

  return (
    <Section className="bg-white overflow-hidden">
      <Container>
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our 8-Week Process</h2>
          <p className="text-slate-500 text-lg max-w-2xl">A predictable system for speed, quality, and outcomes.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-slate-100">
            <motion.div 
               className="h-full bg-[#FF6A3D]"
               initial={{ width: 0 }}
               whileInView={{ width: '100%' }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0">
             {steps.map((step, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="relative group"
               >
                 {/* Node */}
                 <div className="w-24 h-24 mx-auto lg:mx-0 bg-white border-4 border-slate-100 group-hover:border-[#FF6A3D] rounded-full flex items-center justify-center relative z-10 transition-colors duration-300 mb-8">
                    <span className="text-2xl font-bold text-slate-300 group-hover:text-[#FF6A3D] transition-colors">{step.id}</span>
                 </div>

                 {/* Card Content */}
                 <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 mx-4 lg:mx-4 lg:mr-8 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white rounded-lg text-[#FF6A3D] shadow-sm">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-xl text-slate-900">{step.title}</h3>
                    </div>

                    <ul className="space-y-3 mb-6 flex-1">
                      {step.bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D]" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-200">
                       <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                         <span>Typical Duration</span>
                         <span className="text-[#FF6A3D]">{step.duration}</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                         <div style={{ width: `${step.progress}%` }} className="h-full bg-[#FF6A3D]"></div>
                       </div>
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
