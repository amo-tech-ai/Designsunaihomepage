import React from 'react';
import { motion } from 'motion/react';
import { Section, Container, Button } from '../shared/ProcessShared';

interface ProcessComparisonProps {
  onNavigateToProcess?: () => void;
}

export function ProcessComparison({ onNavigateToProcess }: ProcessComparisonProps) {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why 8 Weeks Beats 6 Months</h2>
          <p className="text-slate-500 text-lg">Our streamlined process saves time and reduces risk.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
           {/* Traditional */}
           <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-slate-600 mb-8">Traditional Agency</h3>
              <ul className="space-y-6">
                {[
                  { label: "Time to Market", val: "24-32 Weeks", bad: true },
                  { label: "Cost Efficiency", val: "Low (Hourly Bloat)", bad: true },
                  { label: "On-time Delivery", val: "Unpredictable", bad: true },
                  { label: "Feedback Cycles", val: "Slow & Manual", bad: true },
                  { label: "Risk / Rework", val: "High", bad: true }
                ].map((row, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                    <span className="text-slate-500 font-medium">{row.label}</span>
                    <span className="text-slate-700 font-bold text-right">{row.val}</span>
                  </li>
                ))}
              </ul>
           </div>

           {/* AMO AI */}
           <div className="relative p-8 rounded-2xl bg-white border-2 border-[#FF6A3D] shadow-2xl scale-105 z-10">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF6A3D] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                The AMO AI Way
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">AMO AI</h3>
              
              {/* Visual Bar Chart */}
              <div className="mb-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
                 <div className="flex items-end gap-4 h-32 justify-center">
                    <div className="w-16 bg-slate-300 rounded-t-lg h-full relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-xs font-bold text-slate-400">24w</div>
                    </div>
                    <div className="w-16 bg-[#FF6A3D] rounded-t-lg h-[33%] relative group shadow-[0_0_20px_rgba(255,106,61,0.4)]">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-xs font-bold text-[#FF6A3D]">8w</div>
                    </div>
                 </div>
                 <div className="text-center mt-2 text-xs font-bold text-slate-500 uppercase tracking-wide">Time to Market</div>
              </div>

              <ul className="space-y-6">
                {[
                  { label: "Time to Market", val: "8 Weeks Guaranteed", highlight: true },
                  { label: "Cost Efficiency", val: "High (Fixed Price)", highlight: true },
                  { label: "On-time Delivery", val: "98% Success Rate", highlight: true },
                  { label: "Feedback Cycles", val: "Real-time / AI", highlight: true },
                  { label: "Risk / Rework", val: "Near Zero", highlight: true }
                ].map((row, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <span className="text-slate-500 font-medium">{row.label}</span>
                    <span className={`font-bold text-right ${row.highlight ? 'text-[#FF6A3D]' : 'text-slate-900'}`}>{row.val}</span>
                  </li>
                ))}
              </ul>
           </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" onClick={onNavigateToProcess}>Learn More About Our Process</Button>
        </div>
      </Container>
    </Section>
  );
}
