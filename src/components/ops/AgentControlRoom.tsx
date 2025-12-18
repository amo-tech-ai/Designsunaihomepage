import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, Search, PenTool, MessageSquare, 
  Activity, Server, Database, Shield, 
  Terminal, Cpu, Zap, Clock, GitMerge, LayoutDashboard
} from 'lucide-react';
import { cn } from '../ui/design-system/utils';
import { Card } from '../ui/design-system/Card';
import { Badge } from '../ui/design-system/Badge';
import { Button } from '../ui/design-system/Button';
import { WorkflowMap } from './WorkflowMap';

interface AgentStatus {
  id: string;
  name: string;
  role: 'Scout' | 'Architect' | 'Closer';
  status: 'active' | 'idle' | 'processing' | 'learning';
  currentTask: string;
  efficiency: number;
  queue: number;
  icon: any;
  color: string;
}

const AGENTS: AgentStatus[] = [
  {
    id: 'agent-1',
    name: 'Scout',
    role: 'Scout',
    status: 'active',
    currentTask: 'Scraping LinkedIn for "Elena Fisher" recent activity',
    efficiency: 98,
    queue: 12,
    icon: Search,
    color: 'text-blue-500'
  },
  {
    id: 'agent-2',
    name: 'Architect',
    role: 'Architect',
    status: 'processing',
    currentTask: 'Generating Proposal v2 structure for Lead #892',
    efficiency: 94,
    queue: 4,
    icon: PenTool,
    color: 'text-purple-500'
  },
  {
    id: 'agent-3',
    name: 'Closer',
    role: 'Closer',
    status: 'idle',
    currentTask: 'Waiting for engagement signals',
    efficiency: 99,
    queue: 0,
    icon: MessageSquare,
    color: 'text-emerald-500'
  }
];

const LOGS = [
  { time: '10:42:01', source: 'Scout', message: 'Found new intent signal: "Pricing" viewed by Elena Fisher.' },
  { time: '10:42:05', source: 'System', message: 'Signal processed. Confidence score: 0.89.' },
  { time: '10:42:06', source: 'Architect', message: 'Initiating dynamic content update for Proposal #892.' },
  { time: '10:42:15', source: 'Closer', message: 'Drafting follow-up email based on pricing intent.' },
  { time: '10:43:00', source: 'System', message: 'Database backup completed successfully.' },
];

export function AgentControlRoom() {
  const [logs, setLogs] = useState(LOGS);

  // Simulate live logs
  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        time: new Date().toLocaleTimeString(),
        source: ['Scout', 'Architect', 'Closer', 'System'][Math.floor(Math.random() * 4)],
        message: `Processing task ID-${Math.floor(Math.random() * 10000)}...`
      };
      setLogs(prev => [newLog, ...prev.slice(0, 9)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <Bot className="w-8 h-8 text-slate-900" />
            Ops Control Center
          </h1>
          <p className="text-slate-500 mt-1">System Status: <span className="text-emerald-600 font-bold">Nominal</span> • Active Agents: 3</p>
        </div>
        <div className="flex gap-4">
          <MetricBadge icon={Server} label="Uptime" value="99.9%" />
          <MetricBadge icon={Database} label="Requests" value="14.2k" />
          <MetricBadge icon={Zap} label="Latency" value="24ms" />
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {AGENTS.map((agent, idx) => (
          <AgentCard key={agent.id} agent={agent} index={idx} />
        ))}
      </div>

      {/* Bottom Section: Logs & Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Live Terminal */}
        <Card className="lg:col-span-2 bg-slate-900 text-slate-200 p-0 overflow-hidden flex flex-col h-[300px]">
          <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Terminal className="w-4 h-4" />
              <span>LIVE_SYSTEM_LOGS</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
            </div>
          </div>
          <div className="p-4 font-mono text-sm overflow-hidden flex-1 relative">
            <div className="absolute inset-0 p-4 overflow-y-auto space-y-2">
              <AnimatePresence initial={false}>
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-4"
                  >
                    <span className="text-slate-500 select-none">{log.time}</span>
                    <span className={cn(
                      "font-bold w-20 shrink-0",
                      log.source === 'Scout' ? "text-blue-400" :
                      log.source === 'Architect' ? "text-purple-400" :
                      log.source === 'Closer' ? "text-emerald-400" : "text-slate-400"
                    )}>{log.source}</span>
                    <span className="text-slate-300">{log.message}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </Card>

        {/* System Health */}
        <Card className="p-6 bg-white flex flex-col justify-between">
           <div>
             <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
               <Shield className="w-5 h-5 text-slate-400" />
               Security & Limits
             </h3>
             <div className="space-y-6">
               <LimitBar label="API Rate Limit" value={45} color="bg-blue-500" />
               <LimitBar label="Token Usage (GPT-4)" value={72} color="bg-purple-500" />
               <LimitBar label="Database Connections" value={28} color="bg-emerald-500" />
             </div>
           </div>
           
           <div className="mt-8 pt-6 border-t border-slate-100">
             <div className="flex items-center justify-between mb-2">
               <span className="text-sm font-medium text-slate-500">Next Scheduled Maintenance</span>
               <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">2d 4h</span>
             </div>
             <p className="text-xs text-slate-400">
               System is running optimal. No manual intervention required.
             </p>
           </div>
        </Card>

      </div>
    </div>
  );
}

// --- Subcomponents ---

function AgentCard({ agent, index }: { agent: AgentStatus, index: number }) {
  const Icon = agent.icon;
  const isIdle = agent.status === 'idle';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="p-6 h-full relative overflow-hidden group hover:shadow-lg transition-all border-slate-200/60">
        
        {/* Status Indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
           <span className={cn(
             "w-2 h-2 rounded-full animate-pulse",
             isIdle ? "bg-slate-300" : "bg-emerald-500"
           )} />
           <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
             {agent.status}
           </span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50", agent.color)}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">{agent.name}</h3>
            <p className="text-sm text-slate-500">{agent.role} Agent</p>
          </div>
        </div>

        {/* Task */}
        <div className="mb-6 h-16">
          <div className="text-xs font-bold text-slate-400 uppercase mb-1">Current Task</div>
          <p className="text-sm font-medium text-slate-700 leading-snug">
            {isIdle ? "Waiting for new tasks..." : agent.currentTask}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div>
            <div className="text-xs text-slate-400 mb-0.5">Efficiency</div>
            <div className="text-lg font-bold text-slate-900">{agent.efficiency}%</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 mb-0.5">Queue</div>
            <div className="text-lg font-bold text-slate-900">{agent.queue}</div>
          </div>
        </div>

        {/* Decoration */}
        <div className={cn(
          "absolute bottom-0 left-0 w-full h-1",
          isIdle ? "bg-slate-200" : "bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"
        )} />

      </Card>
    </motion.div>
  );
}

function MetricBadge({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
      <Icon className="w-4 h-4 text-slate-400" />
      <span className="text-xs font-medium text-slate-500">{label}:</span>
      <span className="text-sm font-bold text-slate-900">{value}</span>
    </div>
  );
}

function LimitBar({ label, value, color }: any) {
  return (
    <div>
      <div className="flex justify-between text-xs font-medium mb-1.5">
        <span className="text-slate-600">{label}</span>
        <span className="text-slate-400">{value}%</span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1 }}
          className={cn("h-full rounded-full", color)}
        />
      </div>
    </div>
  );
}
