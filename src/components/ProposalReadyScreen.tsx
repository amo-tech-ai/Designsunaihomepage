import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, FileText, Calendar, ArrowRight, Sparkles, Clock, 
  DollarSign, Target, Shield, Zap, Download, MessageSquare, Layers, AlertTriangle, ChevronRight
} from 'lucide-react';
import { Button } from './ui/design-system/Button';
import { Card } from './ui/design-system/Card';
import { Badge } from './ui/design-system/Badge';
import { Typography } from './ui/design-system/Typography';
import { useLeads } from '../context/LeadContext';
import { generateProposal } from '../lib/ai-proposal-generator';

interface ProposalReadyScreenProps {
  onViewProposal?: () => void; // Used as "Book Strategy Call"
  onGoToDashboard?: () => void;
}

export function ProposalReadyScreen({ onViewProposal, onGoToDashboard }: ProposalReadyScreenProps) {
  const [showConfetti, setShowConfetti] = useState(true);
  const { leads } = useLeads();
  const currentLead = leads[leads.length - 1]; // Use the most recent lead
  
  // Generate dynamic proposal or fallback to default if no lead exists
  const proposal = currentLead ? generateProposal(currentLead) : {
    title: "Custom AI Roadmap",
    summary: "Based on your goals for automation and efficiency.",
    timeline: "4-6 weeks",
    budgetRange: "$5,000 - $10,000",
    deliverables: 5,
    phases: [
      { name: 'Discovery & Architecture', duration: 'Weeks 1-2', status: 'upcoming' },
      { name: 'Core Development', duration: 'Weeks 3-6', status: 'upcoming' },
      { name: 'Testing & Launch', duration: 'Weeks 7-8', status: 'upcoming' },
    ],
    aiInsights: {
       nextStep: "Schedule a kickoff call.",
       risks: ['Data privacy compliance required', 'Integration with legacy API needed'],
       recommendations: ['Use vector database for faster retrieval', 'Implement edge caching']
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 pb-32">
      
      {/* --- Sticky Header (Minimal) --- */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 shadow-sm">
        <div className="container mx-auto max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <div>
              <Typography variant="h5" className="text-sm">Proposal #AI-2024-882</Typography>
              <div className="text-[10px] text-slate-500 font-medium">Generated just now</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <Button variant="ghost" size="sm" leftIcon={<Download className="w-4 h-4" />}>Download PDF</Button>
             <Button variant="primary" size="sm" onClick={onViewProposal}>Book Strategy Call</Button>
          </div>
        </div>
      </header>

      {/* --- Main Document Container --- */}
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-4xl relative"
        >
           {/* Ambient Glow */}
           <div className="absolute -top-20 inset-x-0 h-64 bg-gradient-to-b from-orange-100/50 to-transparent -z-10 blur-3xl rounded-[100px]" />

           <Card variant="solid" className="bg-white shadow-xl border-slate-100 overflow-hidden min-h-[800px] flex flex-col">
              
              {/* Document Header */}
              <div className="p-12 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Sparkles className="w-64 h-64" />
                </div>

                <div className="relative z-10">
                   <Badge variant="outline" className="mb-6 border-orange-200 text-orange-600 bg-orange-50">
                     Preliminary Assessment
                   </Badge>
                   <Typography variant="h1" className="text-5xl font-serif tracking-tight text-slate-900 mb-4">
                     {proposal.title}
                   </Typography>
                   <Typography variant="body" className="text-xl text-slate-500 max-w-2xl leading-relaxed">
                     {proposal.summary}
                   </Typography>

                   {/* Quick Stats Grid */}
                   <div className="grid grid-cols-3 gap-8 mt-12 border-t border-slate-100 pt-8">
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Timeline</div>
                        <div className="text-2xl font-serif text-slate-900">{proposal.timeline}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Investment</div>
                        <div className="text-2xl font-serif text-slate-900">{proposal.budgetRange}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Deliverables</div>
                        <div className="text-2xl font-serif text-slate-900">{proposal.deliverables} Core Modules</div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Document Body */}
              <div className="p-12 space-y-12">
                
                {/* 1. Recommended Tech Stack */}
                <section>
                   <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <Layers className="w-4 h-4 text-orange-600" />
                      </div>
                      <Typography variant="h3">Recommended Architecture</Typography>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <StackCard 
                        title="Frontend Core" 
                        tech="Next.js 14 + React" 
                        desc="Server-side rendering for optimal SEO and performance." 
                      />
                      <StackCard 
                        title="AI Orchestration" 
                        tech="LangChain + OpenAI GPT-4" 
                        desc="Advanced reasoning engine with context awareness." 
                      />
                      <StackCard 
                        title="Data Layer" 
                        tech="Supabase + Vector" 
                        desc="Real-time database with semantic search capabilities." 
                      />
                      <StackCard 
                        title="Infrastructure" 
                        tech="Vercel Edge Network" 
                        desc="Global low-latency deployment with auto-scaling." 
                      />
                   </div>
                </section>

                <div className="h-px bg-slate-100" />

                {/* 2. Implementation Roadmap */}
                <section>
                   <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <Calendar className="w-4 h-4 text-orange-600" />
                      </div>
                      <Typography variant="h3">Phased Roadmap</Typography>
                   </div>

                   <div className="space-y-4">
                      {proposal.phases.map((phase, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/50">
                           <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                             {i + 1}
                           </div>
                           <div className="flex-grow">
                             <div className="font-bold text-slate-900">{phase.name}</div>
                             <div className="text-xs text-slate-500">Key Milestone: Prototype Approval</div>
                           </div>
                           <div className="text-sm font-medium text-slate-600 bg-white px-3 py-1 rounded-md border border-slate-100 shadow-sm">
                             {phase.duration}
                           </div>
                        </div>
                      ))}
                   </div>
                </section>

                <div className="h-px bg-slate-100" />

                {/* 3. Risk Assessment */}
                <section>
                   <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                      </div>
                      <Typography variant="h3">Key Risks & Mitigation</Typography>
                   </div>

                   <div className="bg-orange-50/50 rounded-xl p-6 border border-orange-100">
                      <ul className="space-y-3">
                        {(proposal.aiInsights?.risks || ['Data privacy compliance required', 'Integration with legacy systems']).map((risk, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                            {risk}
                          </li>
                        ))}
                      </ul>
                   </div>
                </section>

              </div>

              {/* Document Footer */}
              <div className="bg-slate-50 p-12 text-center border-t border-slate-100 mt-auto">
                 <Typography variant="h4" className="mb-2">Ready to move forward?</Typography>
                 <Typography variant="body" className="text-slate-500 mb-6 max-w-md mx-auto">
                   This proposal is valid for 14 days. Book a strategy call to refine the scope and begin development.
                 </Typography>
                 
                 <div className="flex items-center justify-center gap-4">
                    <Button variant="outline" onClick={() => window.print()}>
                       Print Proposal
                    </Button>
                    <Button variant="primary" onClick={onViewProposal} rightIcon={<ChevronRight className="w-4 h-4" />}>
                       Book Strategy Call
                    </Button>
                 </div>
              </div>

           </Card>
        </motion.div>
      </div>
    </div>
  );
}

function StackCard({ title, tech, desc }: { title: string, tech: string, desc: string }) {
  return (
    <div className="p-4 rounded-xl border border-slate-100 hover:border-orange-200 transition-colors group bg-white">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{title}</div>
      <div className="font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{tech}</div>
      <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
    </div>
  );
}
