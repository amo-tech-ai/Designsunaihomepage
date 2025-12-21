import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  DollarSign, 
  Target, 
  CheckSquare, 
  User, 
  Download, 
  Share2, 
  ArrowLeft,
  PlayCircle,
  Clock,
  Zap,
  MoreHorizontal
} from 'lucide-react';
import { Card } from '../../ui/design-system/Card';
import { Typography } from '../../ui/design-system/Typography';
import { Badge } from '../../ui/design-system/Badge';
import { Button } from '../../ui/design-system/Button';
import { cn } from '../../ui/design-system/utils';
import { useCallAnalysis } from '../../../hooks/useCallAnalysis';
import { callAnalysisService } from '../../../services';

// Fallback Mock Data
const MOCK_CALL_DATA = {
  id: "call_123",
  leadName: "Jane Doe",
  role: "CTO",
  company: "FintechCo",
  date: "Oct 24, 2024 • 2:30 PM",
  duration: "45m 12s",
  summary: "Technical discovery call focusing on API scalability and AI agent integration. Client confirmed budget for Q3 implementation. Key blocker is current legacy CRM migration, but they are open to parallel adoption. Strong buy signal on 'Automated Enrichment' feature.",
  signals: {
    budget: "$50k - $70k",
    timeline: "Q3 2024",
    priority: "High",
    authority: "Decision Maker"
  },
  actions: [
    { id: 1, text: "Send API Documentation (v2.0)", owner: "Alex S.", date: "Today", status: "pending" },
    { id: 2, text: "Schedule Architecture Review", owner: "Sarah J.", date: "Oct 26", status: "pending" },
    { id: 3, text: "Draft Proposal with AI Add-on", owner: "Alex S.", date: "Oct 28", status: "pending" }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function CallBrief() {
  const { analysis, isAnalyzing, error } = useCallAnalysis();

  // Use real analysis data or fallback to mock
  const activeCall = analysis || MOCK_CALL_DATA;

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Navigation & Actions */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Lead
        </button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" leftIcon={<Download className="w-4 h-4" />}>Export</Button>
          <Button variant="outline" size="sm" leftIcon={<Share2 className="w-4 h-4" />}>Share</Button>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Typography variant="h2" className="font-bold text-slate-900">
                Discovery Call with {activeCall.leadName}
              </Typography>
              <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 border-indigo-100">
                Processed by AI
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {activeCall.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {activeCall.duration}
              </div>
              <div className="flex items-center gap-1.5 text-indigo-600 font-medium cursor-pointer hover:underline">
                <PlayCircle className="w-4 h-4" />
                Play Recording
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Executive Summary (Hero) */}
        <motion.div variants={itemVariants}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 p-8 shadow-xl">
             {/* Decorative */}
             <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
             
             <div className="relative z-10">
               <div className="flex items-center gap-2 mb-4 text-indigo-300 font-medium text-xs uppercase tracking-wider">
                 <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                 AI Executive Summary
               </div>
               <Typography variant="body" className="text-xl text-indigo-50 leading-relaxed font-serif antialiased">
                 "{activeCall.summary}"
               </Typography>
             </div>
          </div>
        </motion.div>

        {/* Intelligence Grid (Signals) */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SignalCard 
              icon={DollarSign} 
              label="Budget Est." 
              value={activeCall.signals.budget} 
              color="text-emerald-500"
              bg="bg-emerald-50"
            />
            <SignalCard 
              icon={Calendar} 
              label="Timeline" 
              value={activeCall.signals.timeline} 
              color="text-blue-500"
              bg="bg-blue-50"
            />
            <SignalCard 
              icon={Target} 
              label="Priority" 
              value={activeCall.signals.priority} 
              color="text-amber-500"
              bg="bg-amber-50"
            />
            <SignalCard 
              icon={User} 
              label="Authority" 
              value={activeCall.signals.authority} 
              color="text-purple-500"
              bg="bg-purple-50"
            />
          </div>
        </motion.div>

        {/* Action Items */}
        <motion.div variants={itemVariants}>
          <Card variant="solid" className="p-0 overflow-hidden border-slate-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-slate-400" />
                <Typography variant="h4" className="font-bold text-slate-900">
                  Recommended Actions
                </Typography>
              </div>
              <Button variant="ghost" size="sm">Add Action</Button>
            </div>
            
            <div className="divide-y divide-slate-50">
              {activeCall.actions.map((action) => (
                <div key={action.id} className={cn(
                  "p-4 flex items-center gap-4 transition-colors group",
                  action.status === 'completed' ? "bg-slate-50/80" : "hover:bg-slate-50/50"
                )}>
                  <div className="flex-shrink-0 pt-1">
                    <input 
                      type="checkbox" 
                      checked={action.status === 'completed'}
                      onChange={() => updateActionStatus(
                        activeCall.id, 
                        action.id, 
                        action.status === 'completed' ? 'pending' : 'completed'
                      )}
                      className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 cursor-pointer" 
                    />
                  </div>
                  <div className="flex-1">
                    <div className={cn(
                      "text-sm font-medium transition-colors",
                      action.status === 'completed' ? "text-slate-400 line-through" : "text-slate-900"
                    )}>
                      {action.text}
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                         {action.owner.split(' ')[0][0]}{action.owner.split(' ')[1] ? action.owner.split(' ')[1][0] : ''}
                       </div>
                       <span className="text-xs text-slate-500">{action.owner}</span>
                    </div>
                    <div className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      Due {action.date}
                    </div>
                    <button className="text-slate-300 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-all">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

      </motion.div>
    </div>
  );
}

function SignalCard({ icon: Icon, label, value, color, bg }: any) {
  return (
    <Card className="p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300 border-slate-200">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</span>
        <div className={cn("p-1.5 rounded-lg", bg)}>
          <Icon className={cn("w-4 h-4", color)} />
        </div>
      </div>
      <div className="font-semibold text-lg text-slate-900">{value}</div>
    </Card>
  );
}