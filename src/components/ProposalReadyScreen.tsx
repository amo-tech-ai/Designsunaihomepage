import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, FileText, Calendar, ArrowRight, Sparkles, Clock, 
  DollarSign, Target, Shield, Zap, Download, MessageSquare 
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
  const currentLead = leads[0]; // The most recently added lead
  
  // Generate dynamic proposal or fallback to default if no lead exists (e.g. direct access)
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
       risks: [],
       recommendations: []
    }
  };

  useEffect(() => {
    // Disable confetti/glow after a few seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white text-slate-900 pb-24">
      
      {/* --- Header --- */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <Typography variant="h5" className="hidden sm:block">Proposal #AI-2024-882</Typography>
            <Badge variant="success" className="ml-2">Ready</Badge>
          </div>
          <div className="flex items-center gap-4">
             <Button variant="ghost" size="sm" leftIcon={<Download className="w-4 h-4" />}>PDF</Button>
             <Button variant="outline" size="sm" onClick={onGoToDashboard}>Save</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- Left Column: Content (2/3) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Hero Card */}
            <div className="relative">
              {showConfetti && (
                 <motion.div 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }} 
                   exit={{ opacity: 0 }}
                   className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full pointer-events-none"
                 />
              )}
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-12 h-12 text-orange-500" />
                  </motion.div>
                  <div>
                    <Typography variant="h1" className="text-4xl md:text-5xl">{proposal.title}</Typography>
                    <Typography variant="body" className="text-slate-500 text-lg">
                      {proposal.summary}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <section className="space-y-4">
              <Typography variant="h3">Executive Summary</Typography>
              <Card variant="solid" className="p-8 bg-white space-y-4">
                <p className="font-body text-slate-600 leading-relaxed">
                  We have analyzed your requirements for <strong>{currentLead?.companyName || 'your company'}</strong>. 
                  Our strategy focuses on implementing {currentLead?.services.join(' and ') || 'custom AI solutions'} to help you achieve 
                  {currentLead?.goals.join(' and ') || 'your business goals'}.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                     <Zap className="w-5 h-5 text-orange-500 mb-2" />
                     <div className="font-bold text-slate-900">2.5x Faster</div>
                     <div className="text-xs text-slate-500">Processing Time</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                     <Shield className="w-5 h-5 text-orange-500 mb-2" />
                     <div className="font-bold text-slate-900">Enterprise</div>
                     <div className="text-xs text-slate-500">Security Grade</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                     <Target className="w-5 h-5 text-orange-500 mb-2" />
                     <div className="font-bold text-slate-900">Scalable</div>
                     <div className="text-xs text-slate-500">Architecture</div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Implementation Timeline (Gantt) */}
            <section className="space-y-4">
              <Typography variant="h3">Implementation Timeline</Typography>
              <Card variant="solid" className="p-8 bg-white overflow-hidden">
                <div className="space-y-6">
                  {proposal.phases.map((phase, index) => (
                    <div className="relative" key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-bold text-slate-900">Phase {index + 1}: {phase.name}</span>
                        <span className="text-slate-500">{phase.duration}</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          whileInView={{ width: '100%' }} 
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`h-full ${index === 0 ? 'bg-slate-900' : index === 1 ? 'bg-orange-500' : 'bg-slate-400'}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          </motion.div>

          {/* --- Right Column: Action Panel (Sticky) --- */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-24 space-y-6"
            >
              <Card variant="glass" className="p-6 border-orange-200 shadow-orange-500/5 bg-white/80">
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <Typography variant="caption" className="text-slate-500 mb-2">Estimated Investment</Typography>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-900">{proposal.budgetRange}</span>
                    <span className="text-slate-500">USD</span>
                  </div>
                  <Typography variant="body-sm" className="text-slate-400 mt-2">
                    Includes design, development, and {proposal.phases.length > 3 ? '6 months' : '3 months'} support.
                  </Typography>
                </div>

                <div className="space-y-3">
                   <Button 
                     variant="primary" 
                     className="w-full" 
                     onClick={onViewProposal} // Using this prop for the Booking action
                   >
                     Secure Design Slot
                   </Button>
                   <Button 
                     variant="outline" 
                     className="w-full"
                     leftIcon={<MessageSquare className="w-4 h-4" />}
                   >
                     Book Strategy Call
                   </Button>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <Shield className="w-3 h-3" />
                  <span>Secure 256-bit Encryption</span>
                </div>
              </Card>

              <Card variant="solid" className="p-6 bg-slate-900 text-white">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                     <Sparkles className="w-5 h-5 text-orange-500" />
                   </div>
                   <div>
                     <div className="font-bold text-sm mb-1">Why Sun AI?</div>
                     <p className="text-xs text-slate-400 leading-relaxed">
                       We don't just write code. We build intelligent systems that generate revenue from Day 1.
                     </p>
                   </div>
                 </div>
              </Card>

            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
