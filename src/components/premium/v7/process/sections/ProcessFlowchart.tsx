import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { Section, Container } from '../shared/ProcessShared';

export function ProcessFlowchart() {
  const nodes = [
    "Client Brief", "AI Planning", "UX/Wireframes", "Build Sprint", 
    "AI Integration", "QA/Testing", "Launch", "Optimization"
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
         <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wide mb-6">
              <Users className="w-3 h-3" /> Human-in-the-loop
           </div>
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">From Brief to Launch</h2>
           <p className="text-slate-500 text-lg">A clear workflow where AI acceleration meets expert oversight.</p>
         </div>

         <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {nodes.map((node, i) => (
                <React.Fragment key={i}>
                   <div className="relative group">
                      <div className={`px-6 py-4 rounded-xl border-2 font-bold text-sm transition-all duration-300 ${
                        i % 2 === 0 ? 'bg-white border-slate-200 text-slate-900 shadow-sm' : 'bg-[#FF6A3D] border-[#FF6A3D] text-white shadow-lg shadow-orange-500/20'
                      }`}>
                        {node}
                      </div>
                   </div>
                   {i < nodes.length - 1 && (
                     <div className="flex items-center text-slate-300">
                       <ArrowRight className="w-5 h-5" />
                     </div>
                   )}
                </React.Fragment>
              ))}
            </div>
         </div>
      </Container>
    </Section>
  );
}
