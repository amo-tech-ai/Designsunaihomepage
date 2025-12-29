import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Section, Container, Button } from '../shared/ProcessShared';

interface ProcessCalculatorProps {
  onNavigateToWizard?: () => void;
}

export function ProcessCalculator({ onNavigateToWizard }: ProcessCalculatorProps) {
  const [industry, setIndustry] = useState('SaaS');
  const [complexity, setComplexity] = useState(50);
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = () => {
    setCalculated(true);
  };

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Calculate Your Timeline</h2>
          <p className="text-slate-500 text-lg">Get a rough estimate based on industry + complexity.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xl grid md:grid-cols-2">
           <div className="p-8 md:p-12 space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Industry</label>
                <select 
                  value={industry}
                  onChange={(e) => { setIndustry(e.target.value); setCalculated(false); }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-600 focus:border-[#FF6A3D] outline-none"
                >
                  {['SaaS', 'E-commerce', 'Healthcare', 'Fintech', 'Real Estate'].map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Complexity</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={complexity}
                  onChange={(e) => { setComplexity(Number(e.target.value)); setCalculated(false); }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6A3D]"
                />
                <div className="flex justify-between mt-2 text-xs text-slate-400 font-bold">
                  <span>MVP</span>
                  <span>Enterprise</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Integrations</label>
                <div className="flex flex-wrap gap-2">
                  {['Stripe', 'CRM', 'AI Model', 'Auth'].map(chip => (
                    <button key={chip} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors">
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <Button variant="primary" className="w-full" onClick={handleCalculate}>
                Calculate Timeline
              </Button>
           </div>

           <div className="bg-white p-8 md:p-12 flex flex-col justify-center border-l border-slate-200">
              {!calculated ? (
                 <div className="text-center text-slate-400">
                    <Clock className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p className="font-medium">Enter details to see estimate</p>
                 </div>
              ) : (
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="text-center"
                 >
                    <div className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">Estimated Timeline</div>
                    <div className="text-5xl font-bold text-[#FF6A3D] mb-6">4-6 Weeks</div>
                    
                    <div className="space-y-4 mb-8">
                       <div className="flex justify-between text-xs font-bold text-slate-900">
                         <span>Phase 1: Design</span>
                         <span>1 Week</span>
                       </div>
                       <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: '25%' }}
                           transition={{ duration: 1 }}
                           className="h-full bg-[#FF6A3D]"
                         />
                       </div>
                       
                       <div className="flex justify-between text-xs font-bold text-slate-900">
                         <span>Phase 2: Build</span>
                         <span>3-4 Weeks</span>
                       </div>
                       <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: '60%' }}
                           transition={{ duration: 1, delay: 0.2 }}
                           className="h-full bg-[#FF6A3D]"
                         />
                       </div>
                    </div>

                    <Button variant="outline" className="w-full" onClick={onNavigateToWizard}>Start Your AI Brief</Button>
                 </motion.div>
              )}
           </div>
        </div>
      </Container>
    </Section>
  );
}
