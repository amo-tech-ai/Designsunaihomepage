import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, AlertCircle, Clock, CheckCircle2, 
  MoreHorizontal, ArrowRight, DollarSign, Activity
} from 'lucide-react';
import { Lead } from '../../context/LeadContext';
import { Typography } from '../ui/design-system/Typography';
import { Card } from '../ui/design-system/Card';
import { Badge } from '../ui/design-system/Badge';
import { Button } from '../ui/design-system/Button';
import { cn } from '../ui/design-system/utils';

interface PipelineHealthProps {
  leads: Lead[];
  onViewLead: (lead: Lead) => void;
}

// Helper to categorize leads based on "Health" rather than just Stage
const getHealthCategory = (lead: Lead, score: number) => {
  // Mock logic: 
  // High score (>75) = Likely to Close
  // Low score (<50) or long inactivity = At Risk
  // Middle = Developing
  if (score >= 80) return 'likely';
  if (score < 50) return 'risk';
  return 'developing';
};

export function PipelineHealth({ leads, onViewLead }: PipelineHealthProps) {
  // Enhanced mock data processing for the view
  const processedDeals = leads.map(lead => {
    // Generate a consistent pseudo-random score if not present
    const hash = lead.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const score = 40 + (hash % 60);
    
    return {
      ...lead,
      score,
      health: getHealthCategory(lead, score),
      dealValue: lead.budget || 10000,
      velocity: (hash % 100), // Mock velocity metric 0-100
      daysInStage: (hash % 14) + 2, // Mock days
    };
  });

  const likelyDeals = processedDeals.filter(d => d.health === 'likely');
  const riskDeals = processedDeals.filter(d => d.health === 'risk');
  const developingDeals = processedDeals.filter(d => d.health === 'developing');

  const totalPipeline = processedDeals.reduce((sum, d) => sum + d.dealValue, 0);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Pipeline Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard 
          title="Likely to Close" 
          count={likelyDeals.length} 
          value={likelyDeals.reduce((a,b) => a + b.dealValue, 0)} 
          color="emerald"
          icon={CheckCircle2}
        />
        <SummaryCard 
          title="Developing" 
          count={developingDeals.length} 
          value={developingDeals.reduce((a,b) => a + b.dealValue, 0)} 
          color="blue"
          icon={TrendingUp}
        />
        <SummaryCard 
          title="At Risk" 
          count={riskDeals.length} 
          value={riskDeals.reduce((a,b) => a + b.dealValue, 0)} 
          color="amber"
          icon={AlertCircle}
        />
      </div>

      {/* Main Health Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Likely to Close */}
        <section className="space-y-4">
          <SectionHeader title="Likely to Close" count={likelyDeals.length} color="text-emerald-600" />
          <div className="space-y-3">
            {likelyDeals.map(deal => (
              <DealCard key={deal.id} deal={deal} onClick={() => onViewLead(deal)} variant="success" />
            ))}
            {likelyDeals.length === 0 && <EmptyState />}
          </div>
        </section>

        {/* Developing */}
        <section className="space-y-4">
          <SectionHeader title="Developing" count={developingDeals.length} color="text-slate-600" />
          <div className="space-y-3">
            {developingDeals.map(deal => (
              <DealCard key={deal.id} deal={deal} onClick={() => onViewLead(deal)} variant="neutral" />
            ))}
             {developingDeals.length === 0 && <EmptyState />}
          </div>
        </section>

         {/* At Risk */}
         <section className="space-y-4">
          <SectionHeader title="At Risk" count={riskDeals.length} color="text-amber-600" />
          <div className="space-y-3">
            {riskDeals.map(deal => (
              <DealCard key={deal.id} deal={deal} onClick={() => onViewLead(deal)} variant="warning" />
            ))}
             {riskDeals.length === 0 && <EmptyState />}
          </div>
        </section>

      </div>
    </div>
  );
}

// --- Subcomponents ---

function SummaryCard({ title, count, value, color, icon: Icon }: any) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
    blue: "bg-slate-50 border-slate-100 text-slate-700",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
  };
  const iconColors = {
    emerald: "text-emerald-500",
    blue: "text-blue-500",
    amber: "text-amber-500",
  };

  return (
    <div className={cn("p-6 rounded-xl border flex items-center justify-between", colors[color as keyof typeof colors])}>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">{title}</div>
        <div className="text-2xl font-bold">${(value / 1000).toFixed(1)}k</div>
        <div className="text-xs opacity-70 mt-1">{count} active deals</div>
      </div>
      <div className={cn("w-10 h-10 rounded-full bg-white flex items-center justify-center", iconColors[color as keyof typeof iconColors])}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
}

function SectionHeader({ title, count, color }: { title: string, count: number, color: string }) {
  return (
    <div className="flex items-center justify-between px-1">
       <h3 className={cn("text-sm font-bold uppercase tracking-wider", color)}>{title}</h3>
       <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">{count}</span>
    </div>
  );
}

function DealCard({ deal, onClick, variant }: { deal: any, onClick: () => void, variant: 'success' | 'warning' | 'neutral' }) {
  const isRisk = variant === 'warning';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      onClick={onClick}
      className={cn(
        "group p-4 bg-white rounded-xl border shadow-sm cursor-pointer transition-all hover:shadow-md relative overflow-hidden",
        variant === 'success' ? "border-emerald-100 hover:border-emerald-200" :
        variant === 'warning' ? "border-amber-100 hover:border-amber-200" :
        "border-slate-100 hover:border-slate-200"
      )}
    >
      {/* Sidebar Accent */}
      <div className={cn(
        "absolute left-0 top-0 bottom-0 w-1",
        variant === 'success' ? "bg-emerald-500" :
        variant === 'warning' ? "bg-amber-500" :
        "bg-slate-300"
      )} />

      <div className="pl-3">
        <div className="flex justify-between items-start mb-2">
          <div>
             <div className="font-bold text-slate-900 text-sm leading-tight">{deal.companyName}</div>
             <div className="text-xs text-slate-500">{deal.name}</div>
          </div>
          <Badge variant="secondary" className="bg-slate-50 font-mono text-slate-700 border-slate-100">
            ${(deal.dealValue / 1000).toFixed(0)}k
          </Badge>
        </div>
        
        {/* Momentum / Health Indicators */}
        <div className="flex items-center gap-4 mt-3">
           
           {/* Micro-chart: Momentum */}
           <div className="flex-1">
             <div className="flex justify-between text-[10px] text-slate-400 mb-1">
               <span>Momentum</span>
               <span className={cn("font-bold", deal.velocity > 70 ? "text-emerald-500" : "text-slate-500")}>
                 {deal.velocity > 70 ? "High" : "Steady"}
               </span>
             </div>
             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
               <div 
                 className={cn("h-full rounded-full", 
                   variant === 'success' ? "bg-emerald-500" : 
                   variant === 'warning' ? "bg-amber-400" : "bg-slate-400"
                 )} 
                 style={{ width: `${deal.velocity}%` }} 
               />
             </div>
           </div>

           {/* Days in Stage */}
           <div className="text-right min-w-[60px]">
             <div className="text-[10px] text-slate-400 mb-0.5">Stalled</div>
             <div className={cn(
               "text-xs font-medium flex items-center justify-end gap-1", 
               deal.daysInStage > 10 ? "text-amber-600" : "text-slate-600"
             )}>
                <Clock className="w-3 h-3" /> {deal.daysInStage}d
             </div>
           </div>
        </div>

        {/* Action Required (Only for Risk) */}
        {isRisk && (
           <div className="mt-3 pt-3 border-t border-slate-50 flex items-center gap-2 text-xs text-amber-700 font-medium">
             <AlertCircle className="w-3.5 h-3.5" />
             Needs Follow-up
           </div>
        )}
      </div>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <div className="p-6 border-2 border-dashed border-slate-100 rounded-xl flex flex-col items-center justify-center text-center">
      <div className="text-sm text-slate-400">No deals in this category</div>
    </div>
  );
}
