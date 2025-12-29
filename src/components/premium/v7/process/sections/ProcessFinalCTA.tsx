import React from 'react';
import { Container, Button } from '../shared/ProcessShared';

interface ProcessFinalCTAProps {
  onNavigateToWizard?: () => void;
  onNavigateToContact?: () => void;
}

export function ProcessFinalCTA({ onNavigateToWizard, onNavigateToContact }: ProcessFinalCTAProps) {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden text-white">
       {/* Particles */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
       
       <Container>
         <div className="text-center relative z-10 max-w-3xl mx-auto">
           <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
             Ready to Launch in <br/>
             <span className="text-[#FF6A3D]">8 Weeks?</span>
           </h2>
           <p className="text-xl text-slate-400 mb-10">
             Get a scoped plan in minutes and start building immediately.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="primary" onClick={onNavigateToWizard}>
               Start Your AI Brief
             </Button>
             <Button variant="white" onClick={onNavigateToContact} className="bg-transparent text-white border-white/20 hover:bg-white hover:text-slate-900 hover:border-white">
               Contact Us
             </Button>
           </div>
         </div>
       </Container>
    </section>
  );
}
