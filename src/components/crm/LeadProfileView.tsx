import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Mail, MapPin, Building2, Linkedin, Globe, 
  Zap, Clock, Wallet, Shield, CheckCircle2, AlertTriangle, 
  Sparkles, FileText, MoreHorizontal, Video, X,
  Target, TrendingUp, Newspaper, Database, Code2
} from 'lucide-react';
import { Lead } from '../../context/LeadContext';
import { Typography } from '../ui/design-system/Typography';
import { Badge } from '../ui/design-system/Badge';
import { Button } from '../ui/design-system/Button';
import { Card } from '../ui/design-system/Card';
import { cn } from '../ui/design-system/utils';
import { IntegratedScheduler } from './IntegratedScheduler';
import { ActivityFeed } from './ActivityFeed';
import { ProposalMonitor } from './ProposalMonitor';
import { ContractGenerator } from './ContractGenerator';
import { NegotiationAssistant } from './NegotiationAssistant';
import { FollowUpDrafter } from './FollowUpDrafter';

interface EnhancedLead extends Lead {
  role?: string;
  industry?: string;
  sunScore?: number;
  lastActive?: string;
  avatarUrl?: string;
}

interface LeadProfileViewProps {
  lead: EnhancedLead;
  onBack: () => void;
  onGenerateProposal: () => void;
}

export function LeadProfileView({ lead, onBack, onGenerateProposal }: LeadProfileViewProps) {
  // Ensure we have enhanced data defaults if missing
  const score = lead.sunScore || 75;
  const role = lead.role || "Executive";
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [isDrafterOpen, setIsDrafterOpen] = useState(false);
  const [isNegotiationOpen, setIsNegotiationOpen] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isMonitorOpen, setIsMonitorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'signals' | 'intel'>('intel');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-slate-50 pb-20 relative"
    >
      {/* Scheduler Modal */}
      <AnimatePresence>
        {isMonitorOpen && (
          <ProposalMonitor 
            leadName={lead.name}
            proposalTitle="AI Web App Proposal v2"
            onClose={() => setIsMonitorOpen(false)}
          />
        )}

        {isContractOpen && (
           <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 bg-slate-50 overflow-auto"
           >
             <ContractGenerator 
               lead={lead} 
               onBack={() => setIsContractOpen(false)}
               onSend={() => {
                 // Mock send action
                 setIsContractOpen(false);
               }}
             />
           </motion.div>
        )}

        {isNegotiationOpen && (
          <NegotiationAssistant 
            lead={lead} 
            isOpen={isNegotiationOpen} 
            onClose={() => setIsNegotiationOpen(false)} 
          />
        )}
        
        {isDrafterOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-2xl relative"
            >
              <FollowUpDrafter 
                leadName={lead.name}
                companyName={lead.companyName}
                onClose={() => setIsDrafterOpen(false)}
                onSend={() => {
                   // Mock send action
                   setIsDrafterOpen(false);
                }}
              />
            </motion.div>
          </motion.div>
        )}

        {isSchedulerOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md relative"
            >
              <IntegratedScheduler 
                leadName={lead.name}
                onClose={() => setIsSchedulerOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-500 hover:text-slate-900 transition-colors gap-2 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setIsNegotiationOpen(true)} className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Co-Pilot
            </Button>
            <div className="h-4 w-px bg-slate-200" />
            <Button variant="outline" size="sm" leftIcon={<Mail className="w-4 h-4" />} onClick={() => setIsDrafterOpen(true)}>
              Draft Follow-up
            </Button>
            <Button variant="outline" size="sm" leftIcon={<Video className="w-4 h-4" />} onClick={() => setIsSchedulerOpen(true)}>
              Schedule Call
            </Button>
            <Button variant="primary" size="sm" onClick={onGenerateProposal} leftIcon={<Sparkles className="w-4 h-4" />}>
              Generate Proposal
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMonitorOpen(true)} className="text-slate-500 hover:text-slate-900">
               <TrendingUp className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsContractOpen(true)} className="text-slate-500 hover:text-slate-900">
               <FileText className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        
        {/* Profile Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-3xl font-bold text-slate-500 border-4 border-white shadow-lg">
              {lead.name.charAt(0)}
            </div>
            <div>
              <Typography variant="h2" className="text-slate-900 mb-1">{lead.name}</Typography>
              <div className="flex items-center gap-3 text-slate-500 mb-4">
                <span className="font-medium text-slate-700">{role}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {lead.companyName}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>{lead.industry || 'Tech'}</span>
              </div>
              <div className="flex gap-2">
                <StatusPill status={lead.status} />
                <Badge variant="outline" className="text-slate-500 border-slate-200 bg-white">
                  Last active: {lead.lastActive || '2h ago'}
                </Badge>
              </div>
            </div>
          </div>

          {/* Sun Score Ring */}
          <div className="relative group cursor-help">
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold border-4",
                score >= 80 ? "border-emerald-100 bg-emerald-50 text-emerald-700" :
                score >= 50 ? "border-amber-100 bg-amber-50 text-amber-700" :
                "border-slate-100 bg-slate-50 text-slate-600"
              )}>
                {score}
              </div>
              <span className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Sun Score</span>
            </div>
          </div>
        </div>

        {/* AI Summary Card (The Insight) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card variant="solid" className="bg-white border-orange-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-600" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">AI Intelligence Summary</span>
              </div>
              <div className="flex gap-6 items-start">
                <p className="text-slate-700 leading-relaxed text-lg flex-1">
                  <span className="font-semibold text-slate-900">High-intent lead.</span> CEO of {lead.companyName} looking for {lead.services?.[0] || 'AI Solutions'}. 
                  Timeline is set for <span className="font-medium text-emerald-700">Q3 Launch</span> with a healthy budget range of <span className="font-medium text-emerald-700">${lead.budget.toLocaleString()}</span>. 
                  <br/>
                  <span className="text-slate-500 text-base mt-2 block">
                    Suggested approach: Focus on security architecture and scalability to address enterprise concerns.
                  </span>
                </p>
                
                {/* Quick Actions based on Insight */}
                <div className="flex flex-col gap-2 min-w-[200px]">
                   <Button variant="ghost" size="sm" className="justify-start text-slate-600 hover:text-orange-600 hover:bg-orange-50">
                     <FileText className="w-4 h-4 mr-2" /> View Wizard Answers
                   </Button>
                   <Button variant="ghost" size="sm" className="justify-start text-slate-600 hover:text-orange-600 hover:bg-orange-50">
                     <Globe className="w-4 h-4 mr-2" /> Visit Website
                   </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Col: Fact Sheet */}
          <div className="space-y-6">
            <SectionHeader title="Contact Snapshot" />
            <Card className="p-5 space-y-4 bg-white">
              <InfoRow icon={Mail} label="Email" value={lead.email} copyable />
              <InfoRow icon={MapPin} label="Location" value="San Francisco, CA" />
              <InfoRow icon={Building2} label="Company Size" value="50-200 employees" />
              <InfoRow icon={Linkedin} label="LinkedIn" value="view profile" link="#" />
              <InfoRow icon={Globe} label="Website" value="company.com" link="#" />
            </Card>

            <SectionHeader title="Engagement" />
            <Card className="p-5 space-y-4 bg-white">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Wizard Completed</span>
                <span className="text-slate-900 font-medium">{lead.date}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Proposal Viewed</span>
                <span className="text-slate-400 italic">Not yet</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Last Touch</span>
                <span className="text-slate-900 font-medium">{lead.lastActive || 'Today'}</span>
              </div>
            </Card>
          </div>

          {/* Right Col: Signals & Analysis */}
          <div className="md:col-span-2 space-y-6">
            
            <div className="flex items-center gap-4 border-b border-slate-200 pb-2 mb-4">
              <button 
                onClick={() => setActiveTab('intel')}
                className={cn(
                  "text-sm font-bold pb-2 transition-colors relative",
                  activeTab === 'intel' ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                )}
              >
                Intelligence Profile
                {activeTab === 'intel' && <motion.div layoutId="tab" className="absolute bottom-[-9px] left-0 right-0 h-0.5 bg-slate-900" />}
              </button>
              <button 
                onClick={() => setActiveTab('signals')}
                className={cn(
                  "text-sm font-bold pb-2 transition-colors relative",
                  activeTab === 'signals' ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                )}
              >
                Project Signals
                {activeTab === 'signals' && <motion.div layoutId="tab" className="absolute bottom-[-9px] left-0 right-0 h-0.5 bg-slate-900" />}
              </button>
            </div>

            {activeTab === 'intel' ? (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                 {/* Tech Stack */}
                 <div className="grid grid-cols-2 gap-4">
                   <Card className="p-4 bg-white">
                     <div className="flex items-center gap-2 mb-3">
                       <Code2 className="w-4 h-4 text-slate-400" />
                       <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Tech Stack Detected</span>
                     </div>
                     <div className="flex flex-wrap gap-2">
                        {['React', 'AWS', 'Node.js', 'Salesforce'].map(tech => (
                          <Badge key={tech} variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
                             {tech}
                          </Badge>
                        ))}
                     </div>
                   </Card>
                   
                   <Card className="p-4 bg-white">
                     <div className="flex items-center gap-2 mb-3">
                       <Target className="w-4 h-4 text-slate-400" />
                       <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Market Position</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold text-slate-900">Leader</div>
                        <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Top 5%</span>
                     </div>
                     <div className="text-xs text-slate-400 mt-1">In {lead.industry || 'Tech'} Sector</div>
                   </Card>
                 </div>

                 {/* News Feed */}
                 <div>
                    <SectionHeader title="Relevant News & Events" />
                    <div className="space-y-3">
                      <NewsItem 
                        source="TechCrunch" 
                        date="2 days ago" 
                        title={`${lead.companyName} announces new AI initiative for Q3.`} 
                      />
                      <NewsItem 
                        source="LinkedIn" 
                        date="1 week ago" 
                        title="New VP of Engineering hired from Google." 
                      />
                    </div>
                 </div>

                 {/* Competitor Watch */}
                 <div>
                    <SectionHeader title="Competitor Watch" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <CompetitorCard name="Acme Corp" status="Growing" />
                      <CompetitorCard name="Global Dynamics" status="Stable" />
                    </div>
                 </div>

              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <SignalCard 
                    icon={Clock} 
                    label="Urgency" 
                    value={lead.timeline || "High"} 
                    subtext="Target: Q3 Launch"
                    color="emerald"
                  />
                  <SignalCard 
                    icon={Wallet} 
                    label="Budget Confidence" 
                    value="Medium-High" 
                    subtext="Self-funded startup"
                    color="amber"
                  />
                  <SignalCard 
                    icon={Zap} 
                    label="Tech Maturity" 
                    value="Advanced" 
                    subtext="Uses AWS, React, Python"
                    color="blue"
                  />
                </div>

                <SectionHeader title="Key Requirements" />
                <Card className="p-6 bg-white">
                  <div className="flex flex-wrap gap-2 mb-4">
                      {lead.services?.map(s => (
                        <Badge key={s} variant="outline" className="bg-slate-50">{s}</Badge>
                      ))}
                      {lead.goals?.map(g => (
                        <Badge key={g} variant="outline" className="bg-slate-50 border-dashed">{g}</Badge>
                      ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "{lead.description || 'Client did not provide a description.'}"
                  </p>
                </Card>
              </motion.div>
            )}
            
            {/* Recent Activity (Always Visible) */}
            <div className="pt-6 border-t border-slate-100">
              <SectionHeader title="Recent Activity" />
              <div className="mt-4">
                 <ActivityFeed leadId={lead.id} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}

// --- Subcomponents ---

function SectionHeader({ title }: { title: string }) {
  return (
    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 pl-1">
      {title}
    </h3>
  );
}

function StatusPill({ status }: { status: string }) {
  const styles = {
    'New': 'bg-blue-50 text-blue-700 border-blue-200',
    'Proposal Sent': 'bg-purple-50 text-purple-700 border-purple-200',
    'Booked': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Archived': 'bg-slate-100 text-slate-500 border-slate-200',
  };
  const defaultStyle = 'bg-slate-50 text-slate-700 border-slate-200';
  
  return (
    <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-bold border", styles[status as keyof typeof styles] || defaultStyle)}>
      {status}
    </span>
  );
}

function InfoRow({ icon: Icon, label, value, link, copyable }: any) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="text-xs text-slate-400 font-medium">{label}</div>
        {link ? (
          <a href={link} className="text-sm font-medium text-blue-600 hover:underline truncate block">
            {value}
          </a>
        ) : (
          <div className="text-sm font-medium text-slate-900 truncate">{value}</div>
        )}
      </div>
    </div>
  );
}

function SignalCard({ icon: Icon, label, value, subtext, color }: any) {
  const colors = {
    emerald: "text-emerald-600 bg-emerald-50",
    amber: "text-amber-600 bg-amber-50",
    blue: "text-blue-600 bg-blue-50",
    slate: "text-slate-600 bg-slate-50",
  };
  const theme = colors[color as keyof typeof colors] || colors.slate;

  return (
    <Card className="p-4 bg-white flex flex-col items-start gap-2 hover:shadow-md transition-shadow">
      <div className={cn("p-2 rounded-lg mb-1", theme)}>
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</div>
        <div className="font-bold text-slate-900 text-lg">{value}</div>
        <div className="text-xs text-slate-500">{subtext}</div>
      </div>
    </Card>
  );
}

function NewsItem({ source, date, title }: { source: string, date: string, title: string }) {
  return (
    <Card className="p-3 bg-white flex gap-3 hover:shadow-md transition-all cursor-pointer group">
      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
        <Newspaper className="w-4 h-4 text-slate-500" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[10px] font-bold uppercase text-slate-400">{source}</span>
          <span className="text-[10px] text-slate-300">•</span>
          <span className="text-[10px] text-slate-400">{date}</span>
        </div>
        <div className="text-sm font-medium text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
          {title}
        </div>
      </div>
    </Card>
  );
}

function CompetitorCard({ name, status }: { name: string, status: string }) {
  return (
    <div className="p-3 border border-slate-200 rounded-lg bg-slate-50/50 flex items-center justify-between">
       <span className="text-sm font-medium text-slate-700">{name}</span>
       <Badge variant="outline" className="bg-white text-[10px] h-5 px-1.5 text-slate-500">
         {status}
       </Badge>
    </div>
  );
}
