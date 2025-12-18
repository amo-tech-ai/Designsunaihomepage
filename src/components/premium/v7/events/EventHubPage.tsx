import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { NavbarV7 } from '../NavbarV7';
import { Button } from '../../../ui/design-system/Button';
import { Card } from '../../../ui/design-system/Card';
import { Badge } from '../../../ui/design-system/Badge';
import { Typography } from '../../../ui/design-system/Typography';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  status: 'Planning' | 'Confirmed' | 'Completed';
  attendees: number;
  tasksCompleted: number;
  totalTasks: number;
  aiInsights?: string[];
}

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'NYC Tech Week Launch',
    date: 'Oct 15, 2025',
    location: 'SoHo Loft, NYC',
    status: 'Planning',
    attendees: 150,
    tasksCompleted: 4,
    totalTasks: 12,
    aiInsights: ['Conflict: Overlaps with TechCrunch Disrupt', 'Venue deposit due in 2 days']
  },
  {
    id: '2',
    title: 'Series A Investor Dinner',
    date: 'Nov 02, 2025',
    location: 'The Battery, SF',
    status: 'Confirmed',
    attendees: 12,
    tasksCompleted: 8,
    totalTasks: 8,
  },
  {
    id: '3',
    title: 'Product Demo Day',
    date: 'Dec 10, 2025',
    location: 'Virtual',
    status: 'Planning',
    attendees: 500,
    tasksCompleted: 1,
    totalTasks: 20,
    aiInsights: ['Suggested speaker: Sarah Guo unavailable']
  }
];

export function EventHubPage({ onNavigate, onVersionChange }: { onNavigate?: (page: string) => void, onVersionChange?: (v: any) => void }) {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Past'>('Upcoming');

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans">
      <NavbarV7 onVersionChange={onVersionChange} />
      
      <main className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Button variant="ghost" size="sm" onClick={() => onVersionChange?.('dashboard')} className="pl-0 text-slate-500 h-auto p-0 hover:bg-transparent hover:text-slate-900">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Dashboard
              </Button>
            </div>
            <Typography variant="h1" className="text-4xl text-slate-900">Event Hub</Typography>
            <Typography variant="body" className="text-slate-500 mt-2">
              Automate logistics, guest lists, and run-of-show with AI.
            </Typography>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" leftIcon={<Calendar className="w-4 h-4" />}>
              Sync Calendar
            </Button>
            <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
              Plan New Event
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <Card variant="solid" className="p-6 bg-slate-900 text-white border-slate-800">
             <div className="flex items-center gap-2 mb-4 text-orange-500">
               <Sparkles className="w-5 h-5" />
               <span className="font-bold text-sm uppercase tracking-wider">AI Assistant</span>
             </div>
             <p className="text-lg font-medium leading-relaxed">
               "I found a scheduling conflict for the NYC Launch. TechCrunch Disrupt is the same week. Suggest moving to Oct 22?"
             </p>
             <div className="mt-6 flex gap-3">
               <button className="text-sm font-bold text-white hover:text-orange-400 transition-colors">Accept Move</button>
               <button className="text-sm font-bold text-slate-500 hover:text-white transition-colors">Dismiss</button>
             </div>
           </Card>

           <Card variant="outline" className="p-6 bg-white flex flex-col justify-between">
             <div>
               <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Total Budget</div>
               <div className="text-4xl font-bold text-slate-900">$45,000</div>
             </div>
             <div className="mt-4 text-sm text-slate-500">
               <span className="text-emerald-600 font-bold">12% under</span> projected spend
             </div>
           </Card>

           <Card variant="outline" className="p-6 bg-white flex flex-col justify-between">
             <div>
               <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Upcoming Guests</div>
               <div className="text-4xl font-bold text-slate-900">662</div>
             </div>
             <div className="mt-4 flex -space-x-2 overflow-hidden">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200" />
               ))}
               <div className="h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">+657</div>
             </div>
           </Card>
        </div>

        {/* Filters & Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-1">
          <div className="flex gap-6">
            <button 
              onClick={() => setActiveTab('Upcoming')}
              className={`pb-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'Upcoming' ? 'border-orange-500 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            >
              Upcoming
            </button>
            <button 
               onClick={() => setActiveTab('Past')}
               className={`pb-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'Past' ? 'border-orange-500 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            >
              Past
            </button>
          </div>
          
          <div className="flex items-center gap-2 mb-2 md:mb-0">
             <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
               <input 
                 type="text" 
                 placeholder="Search events..." 
                 className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 transition-all w-64"
               />
             </div>
             <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500">
               <Filter className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {MOCK_EVENTS.map(event => (
            <Card key={event.id} variant="outline" className="p-6 bg-white hover:border-orange-200 transition-colors group cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Left: Date Box & Info */}
                <div className="flex items-start gap-6">
                  {/* Date Box */}
                  <div className="flex flex-col items-center justify-center w-16 h-16 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 shrink-0">
                    <span className="text-xs font-bold uppercase text-slate-500">{event.date.split(' ')[0]}</span>
                    <span className="text-xl font-bold">{event.date.split(' ')[1].replace(',', '')}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {event.location}</span>
                      <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {event.attendees} Guests</span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className={`w-4 h-4 ${event.tasksCompleted === event.totalTasks ? 'text-emerald-500' : 'text-slate-400'}`} />
                        {event.tasksCompleted}/{event.totalTasks} Tasks
                      </span>
                    </div>
                    
                    {/* AI Insights Inline */}
                    {event.aiInsights && event.aiInsights.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {event.aiInsights.map((insight, i) => (
                          <Badge key={i} variant="outline" className="bg-orange-50 text-orange-700 border-orange-100 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {insight}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4 self-start md:self-center">
                   <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                     event.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-700' : 
                     event.status === 'Planning' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-500'
                   }`}>
                     {event.status}
                   </div>
                   <Button variant="ghost" size="sm" className="hidden md:flex">
                     Manage
                     <ArrowRight className="w-4 h-4 ml-2" />
                   </Button>
                </div>

              </div>
            </Card>
          ))}
        </div>

      </main>
    </div>
  );
}
