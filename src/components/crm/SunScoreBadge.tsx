import React from 'react';
import { cn } from '../ui/design-system/utils';

interface SunScoreBadgeProps {
  score: number;
}

export function SunScoreBadge({ score }: SunScoreBadgeProps) {
  let colorClass = "bg-slate-100 text-slate-600 border-slate-200";
  let ringClass = "ring-slate-100";
  
  if (score >= 80) {
    colorClass = "bg-emerald-50 text-emerald-700 border-emerald-200";
    ringClass = "ring-emerald-100";
  } else if (score >= 50) {
    colorClass = "bg-amber-50 text-amber-700 border-amber-200";
    ringClass = "ring-amber-100";
  }

  return (
    <div className="relative group/score">
       <div className={cn(
         "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 ring-4 ring-opacity-50 transition-all",
         colorClass, ringClass
       )}>
         {score}
       </div>
       
       {/* Hover Tooltip (Luxury Interaction) */}
       <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-slate-900 text-white p-3 rounded-xl shadow-xl opacity-0 group-hover/score:opacity-100 transition-all pointer-events-none z-50 scale-95 group-hover/score:scale-100 origin-bottom">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Score Analysis</div>
          <div className="space-y-1">
             {score >= 80 && <ScoreFactor label="Clear Timeline" points="+20" />}
             {score >= 50 && <ScoreFactor label="Budget Aligned" points="+15" />}
             <ScoreFactor label="Corporate Email" points="+10" />
          </div>
          <div className="w-2 h-2 bg-slate-900 absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45" />
       </div>
    </div>
  );
}

function ScoreFactor({ label, points }: { label: string, points: string }) {
  return (
    <div className="flex justify-between text-xs">
      <span className="text-slate-300">{label}</span>
      <span className="text-emerald-400 font-mono">{points}</span>
    </div>
  );
}
