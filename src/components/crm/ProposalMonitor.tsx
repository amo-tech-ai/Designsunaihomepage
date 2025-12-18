import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, Clock, MousePointer, AlertTriangle, 
  CheckCircle2, X, ChevronRight, BarChart3,
  Calendar, ArrowUpRight
} from 'lucide-react';
import { cn } from '../ui/design-system/utils';
import { Card } from '../ui/design-system/Card';
import { Button } from '../ui/design-system/Button';
import { Badge } from '../ui/design-system/Badge';

interface ProposalMonitorProps {
  leadName: string;
  proposalTitle: string;
  onClose: () => void;
}

interface SectionMetric {
  id: string;
  name: string;
  timeSpent: number; // in seconds
  clicks: number;
  lastViewed: Date;
  status: 'hot' | 'warm' | 'cold';
}

interface Session {
  id: string;
  timestamp: Date;
  device: string;
  location: string;
  duration: string;
}

// Mock Data
const MOCK_SECTIONS: SectionMetric[] = [
  { id: '1', name: 'Executive Summary', timeSpent: 45, clicks: 0, lastViewed: new Date(), status: 'cold' },
  { id: '2', name: 'Scope of Work', timeSpent: 320, clicks: 2, lastViewed: new Date(), status: 'warm' },
  { id: '3', name: 'Pricing & Investment', timeSpent: 840, clicks: 12, lastViewed: new Date(), status: 'hot' },
  { id: '4', name: 'Case Studies', timeSpent: 180, clicks: 3, lastViewed: new Date(), status: 'warm' },
  { id: '5', name: 'Terms & Conditions', timeSpent: 120, clicks: 1, lastViewed: new Date(), status: 'cold' },
];

const MOCK_SESSIONS: Session[] = [
  { id: '1', timestamp: new Date(), device: 'Desktop (Chrome)', location: 'San Francisco, US', duration: 'Active Now' },
  { id: '2', timestamp: new Date(Date.now() - 86400000), device: 'Mobile (iPhone)', location: 'San Francisco, US', duration: '5m 23s' },
  { id: '3', timestamp: new Date(Date.now() - 172800000), device: 'Desktop (Chrome)', location: 'San Francisco, US', duration: '12m 45s' },
];

export function ProposalMonitor({ leadName, proposalTitle, onClose }: ProposalMonitorProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'sessions'>('overview');
  const [isSimulating, setIsSimulating] = useState(false);

  // Calculate Engagement Score (0-100)
  const totalTime = MOCK_SECTIONS.reduce((acc, curr) => acc + curr.timeSpent, 0);
  const engagementScore = Math.min(100, Math.round((totalTime / 600) * 10)); // Arbitrary formula

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-bold text-slate-900">Proposal Analytics</h2>
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                Live Tracking
              </Badge>
            </div>
            <p className="text-sm text-slate-500">Monitoring: <span className="font-medium text-slate-700">{proposalTitle}</span> for {leadName}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5 text-slate-400" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-6 bg-slate-50/30">
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <MetricCard 
              label="Engagement Score" 
              value={engagementScore} 
              suffix="/ 100"
              icon={BarChart3} 
              trend="+12%"
              trendUp={true}
            />
            <MetricCard 
              label="Total Views" 
              value={14} 
              icon={Eye} 
            />
            <MetricCard 
              label="Avg. Time on Page" 
              value="8m 12s" 
              icon={Clock} 
            />
            <MetricCard 
              label="Top Section" 
              value="Pricing" 
              icon={MousePointer}
              highlight
            />
          </div>

          {/* Visualization Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Heatmap / Section Breakdown */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Section Engagement</h3>
                <div className="flex gap-2">
                   <LegendItem color="bg-rose-500" label="Hot (>5m)" />
                   <LegendItem color="bg-orange-400" label="Warm (2-5m)" />
                   <LegendItem color="bg-slate-300" label="Cold (<2m)" />
                </div>
              </div>

              <div className="space-y-4">
                {MOCK_SECTIONS.map((section, idx) => (
                  <SectionBar key={section.id} section={section} index={idx} totalTime={totalTime} />
                ))}
              </div>

              {/* Insight Box */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 bg-orange-50 border border-orange-100 rounded-xl p-4 flex gap-4 items-start"
              >
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600 shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Pricing Scrutiny Detected</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The client has revisited the <strong>Pricing & Investment</strong> section 12 times and spent 60% of their total session time there. This indicates high intent but potentially price sensitivity.
                  </p>
                  <Button size="sm" variant="ghost" className="mt-2 text-orange-700 hover:bg-orange-100 -ml-2 h-8">
                    View Pricing Strategy Tips
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right: Session Log */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Recent Sessions</h3>
              <div className="space-y-3">
                {MOCK_SESSIONS.map((session, idx) => (
                  <SessionCard key={session.id} session={session} index={idx} />
                ))}
              </div>

              <Card className="p-4 bg-slate-900 text-white mt-auto">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                     <ArrowUpRight className="w-5 h-5" />
                   </div>
                   <div>
                     <div className="text-xs text-slate-400 uppercase font-bold">Next Step</div>
                     <div className="font-medium">Follow Up</div>
                   </div>
                 </div>
                 <p className="text-sm text-slate-300 mb-3">
                   Engagement is peaking. Recommend sending a check-in email now.
                 </p>
                 <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 border-none">
                   Draft Email
                 </Button>
              </Card>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

// --- Subcomponents ---

function MetricCard({ label, value, suffix, icon: Icon, trend, trendUp, highlight }: any) {
  return (
    <Card className={cn(
      "p-4 bg-white border-slate-100 relative overflow-hidden",
      highlight && "bg-slate-900 text-white border-slate-900"
    )}>
      <div className="flex justify-between items-start mb-2">
        <span className={cn(
          "text-xs font-bold uppercase tracking-wider",
          highlight ? "text-slate-400" : "text-slate-400"
        )}>{label}</span>
        <Icon className={cn(
          "w-4 h-4",
          highlight ? "text-slate-400" : "text-slate-300"
        )} />
      </div>
      <div className="flex items-baseline gap-1">
        <span className={cn(
          "text-2xl font-bold",
          highlight ? "text-white" : "text-slate-900"
        )}>{value}</span>
        {suffix && <span className="text-xs text-slate-400 font-medium">{suffix}</span>}
      </div>
      {trend && (
        <div className={cn(
          "text-xs font-bold mt-1",
          trendUp ? "text-emerald-500" : "text-rose-500"
        )}>
          {trend} <span className="text-slate-300 font-normal">vs last week</span>
        </div>
      )}
    </Card>
  );
}

function SectionBar({ section, index, totalTime }: { section: SectionMetric, index: number, totalTime: number }) {
  const percentage = (section.timeSpent / totalTime) * 100;
  
  const getColor = (status: string) => {
    switch(status) {
      case 'hot': return 'bg-rose-500';
      case 'warm': return 'bg-orange-400';
      default: return 'bg-slate-300';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
          {index + 1}. {section.name}
        </span>
        <span className="text-slate-500 font-medium">
          {Math.floor(section.timeSpent / 60)}m {section.timeSpent % 60}s
        </span>
      </div>
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn("h-full rounded-full", getColor(section.status))}
        />
      </div>
    </motion.div>
  );
}

function SessionCard({ session, index }: { session: Session, index: number }) {
  const isActive = session.duration === 'Active Now';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "p-3 rounded-xl border flex items-center justify-between",
        isActive ? "bg-emerald-50/50 border-emerald-100" : "bg-white border-slate-100"
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          isActive ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"
        )}>
          {isActive ? <Eye className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">
            {isActive ? 'Viewing Now' : session.timestamp.toLocaleDateString()}
          </div>
          <div className="text-[10px] text-slate-500">
            {session.device} • {session.location}
          </div>
        </div>
      </div>
      <div className={cn(
        "text-xs font-bold px-2 py-1 rounded-full",
        isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
      )}>
        {session.duration}
      </div>
    </motion.div>
  );
}

function LegendItem({ color, label }: { color: string, label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className={cn("w-2 h-2 rounded-full", color)} />
      <span className="text-[10px] font-bold text-slate-400 uppercase">{label}</span>
    </div>
  );
}
