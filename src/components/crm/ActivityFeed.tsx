import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Eye, AlertTriangle, Zap, CheckCircle2, 
  MessageSquare, FileText, Phone, Calendar, Filter, Plus, Send 
} from 'lucide-react';
import { cn } from '../ui/design-system/utils';
import { Card } from '../ui/design-system/Card';
import { Button } from '../ui/design-system/Button';

export interface Activity {
  id: string;
  type: 'email' | 'view' | 'alert' | 'success' | 'note' | 'call' | 'meeting';
  title: string;
  description?: string;
  timestamp: Date;
  isInsight?: boolean; // Highlights "AI Insights"
  metadata?: {
    duration?: string;
    sentiment?: 'positive' | 'neutral' | 'negative';
  };
}

// Mock Data Generator
const generateMockActivities = (leadId: string): Activity[] => {
  const now = new Date();
  const subMinutes = (date: Date, min: number) => new Date(date.getTime() - min * 60000);
  const subHours = (date: Date, hours: number) => new Date(date.getTime() - hours * 3600000);
  const subDays = (date: Date, days: number) => new Date(date.getTime() - days * 86400000);

  return [
    {
      id: '1',
      type: 'view',
      title: 'Proposal Viewed',
      description: 'Elena is currently viewing the "Pricing" section.',
      timestamp: subMinutes(now, 2),
      isInsight: true, // "Momentum"
      metadata: { duration: 'Viewing now' }
    },
    {
      id: '2',
      type: 'email',
      title: 'Contract Draft Sent',
      description: 'Master Services Agreement (v1) sent for review.',
      timestamp: subHours(now, 2),
    },
    {
      id: '3',
      type: 'alert',
      title: 'Competitor Mentioned',
      description: 'Asked about "Acme Corp" pricing comparison in chat.',
      timestamp: subDays(now, 1),
      isInsight: true
    },
    {
      id: '4',
      type: 'call',
      title: 'Discovery Call',
      description: 'Discussed Q3 timeline and budget constraints.',
      timestamp: subDays(now, 2),
      metadata: { duration: '45m' }
    },
    {
      id: '5',
      type: 'success',
      title: 'Wizard Completed',
      description: 'Submitted initial project requirements.',
      timestamp: subDays(now, 5),
    }
  ];
};

interface ActivityFeedProps {
  leadId: string;
}

type FilterType = 'all' | 'insight' | 'email' | 'call';

export function ActivityFeed({ leadId }: ActivityFeedProps) {
  const [activities, setActivities] = useState<Activity[]>(generateMockActivities(leadId));
  const [filter, setFilter] = useState<FilterType>('all');
  const [noteInput, setNoteInput] = useState('');
  const [isAddingNote, setIsAddingNote] = useState(false);

  const handleAddNote = () => {
    if (!noteInput.trim()) return;
    
    const newNote: Activity = {
      id: Math.random().toString(36).substr(2, 9),
      type: 'note',
      title: 'Internal Note',
      description: noteInput,
      timestamp: new Date(),
    };

    setActivities(prev => [newNote, ...prev]);
    setNoteInput('');
    setIsAddingNote(false);
  };

  const filteredActivities = activities.filter(a => {
    if (filter === 'all') return true;
    if (filter === 'insight') return a.isInsight;
    return a.type === filter;
  });

  // Group by Date Helper
  const groupedActivities = filteredActivities.reduce((groups, activity) => {
    const dateKey = activity.timestamp.toDateString();
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(activity);
    return groups;
  }, {} as Record<string, Activity[]>);

  // Sort groups by date descending
  const sortedDates = Object.keys(groupedActivities).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div className="space-y-6">
      
      {/* Controls Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
          {(['all', 'insight', 'email', 'call'] as FilterType[]).map((f) => (
             <button
               key={f}
               onClick={() => setFilter(f)}
               className={cn(
                 "px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all",
                 filter === f ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
               )}
             >
               {f === 'insight' ? 'Insights' : f}
             </button>
          ))}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsAddingNote(!isAddingNote)}
          className={cn("text-slate-500", isAddingNote && "bg-slate-100 text-slate-900")}
        >
          <Plus className="w-4 h-4 mr-1" /> Add Note
        </Button>
      </div>

      {/* Quick Add Note */}
      <AnimatePresence>
        {isAddingNote && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex gap-2 mb-4">
              <input 
                type="text" 
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                placeholder="Type a note..."
                className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-500 transition-colors"
                onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
              />
              <Button size="sm" variant="primary" onClick={handleAddNote} disabled={!noteInput.trim()}>
                <Send className="w-3 h-3" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-slate-100 ml-3.5 space-y-8 pl-8 py-2">
        {sortedDates.map((date) => (
           <div key={date} className="relative">
             {/* Date Header */}
             <div className="absolute -left-[45px] -top-2 bg-slate-50 px-1 py-0.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider rotate-[-90deg] origin-center w-20 text-center">
               {formatDateHeader(new Date(date))}
             </div>
             
             <div className="space-y-6">
               {groupedActivities[date].map((activity, index) => (
                 <ActivityItem key={activity.id} activity={activity} index={index} />
               ))}
             </div>
           </div>
        ))}

        {filteredActivities.length === 0 && (
          <div className="text-center py-8 text-slate-400 text-sm">
            No activities found for this filter.
          </div>
        )}
      </div>
    </div>
  );
}

function ActivityItem({ activity, index }: { activity: Activity; index: number }) {
  const Icon = getIcon(activity.type);
  const isInsight = activity.isInsight;

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="relative"
    >
      {/* Timeline Dot */}
      <div className={cn(
        "absolute -left-[41px] top-3 w-5 h-5 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-10",
        isInsight ? "bg-orange-100 ring-2 ring-orange-100" : "bg-slate-100 ring-1 ring-slate-50",
        activity.type === 'note' && "bg-blue-50 ring-blue-50"
      )}>
        <div className={cn(
          "w-1.5 h-1.5 rounded-full",
          isInsight ? "bg-orange-500" : activity.type === 'note' ? "bg-blue-500" : "bg-slate-400"
        )} />
      </div>

      {/* Content Card */}
      <div className={cn(
        "group rounded-xl p-3 transition-all hover:shadow-md border",
        isInsight ? "bg-orange-50/50 border-orange-100 hover:bg-orange-50" : 
        activity.type === 'note' ? "bg-blue-50/30 border-blue-100" : "bg-white border-transparent hover:border-slate-100"
      )}>
        {/* Header */}
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center gap-2">
            <Icon className={cn(
              "w-4 h-4",
              isInsight ? "text-orange-500" : 
              activity.type === 'note' ? "text-blue-500" : "text-slate-400 group-hover:text-slate-600"
            )} />
            <span className={cn(
              "text-sm font-bold",
              isInsight ? "text-orange-900" : 
              activity.type === 'note' ? "text-blue-900" : "text-slate-900"
            )}>
              {activity.title}
            </span>
          </div>
          <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
            {formatTime(activity.timestamp)}
          </span>
        </div>

        {/* Body */}
        {activity.description && (
          <p className={cn(
            "text-sm leading-snug pl-6",
            isInsight ? "text-orange-800/80" : 
            activity.type === 'note' ? "text-blue-800/80" : "text-slate-500"
          )}>
            {activity.description}
          </p>
        )}

        {/* Insight Badge */}
        {isInsight && (
          <div className="ml-6 mt-2 flex items-center gap-1.5">
             <Badge variant="outline" className="bg-white/80 border-orange-200 text-orange-700 text-[10px] h-5 px-1.5">
               <Zap className="w-3 h-3 mr-1" fill="currentColor" />
               AI Insight
             </Badge>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// --- Helpers ---

function getIcon(type: Activity['type']) {
  switch (type) {
    case 'email': return Mail;
    case 'view': return Eye;
    case 'alert': return AlertTriangle;
    case 'success': return CheckCircle2;
    case 'call': return Phone;
    case 'meeting': return Calendar;
    case 'note': return FileText;
    default: return MessageSquare;
  }
}

function formatTime(date: Date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatDateHeader(date: Date) {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) return 'Today';
  if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
  return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
}

function Badge({ children, className, variant }: any) {
    return <span className={cn("inline-flex items-center rounded-full font-medium", className)}>{children}</span>;
}
