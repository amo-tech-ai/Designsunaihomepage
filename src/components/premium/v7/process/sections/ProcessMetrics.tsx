import React from 'react';
import { motion } from 'motion/react';
import { Section, Container } from '../shared/ProcessShared';

export function ProcessMetrics() {
  const metrics = [
    { label: "Projects Delivered", value: 42, suffix: "+" },
    { label: "Avg ROI", value: 315, suffix: "%" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Speed to Launch", value: 8, suffix: " Weeks" },
    { label: "Uptime / Monitoring", value: 99.9, suffix: "%" },
    { label: "Support Response", value: 15, suffix: " Min" }
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
         <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Proven Track Record</h2>
           <p className="text-slate-500 text-lg">Results you can measure.</p>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
           {metrics.map((m, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
             >
                <div className="h-12 w-full mb-4 flex items-end gap-1 opacity-20">
                   {[...Array(5)].map((_, j) => (
                     <div key={j} className="bg-[#FF6A3D] w-1/5 rounded-t-sm" style={{ height: `${Math.random() * 60 + 40}%` }}></div>
                   ))}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-1">
                  {m.value}{m.suffix}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">{m.label}</div>
             </motion.div>
           ))}
         </div>
      </Container>
    </Section>
  );
}
