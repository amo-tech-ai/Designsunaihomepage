import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Search, Filter, ArrowUpRight, MoreHorizontal, Clock, 
  Building2, List, LayoutGrid
} from 'lucide-react';
import { useLeads, Lead } from '../../context/LeadContext';
import { Typography } from '../ui/design-system/Typography';
import { Badge } from '../ui/design-system/Badge';
import { Card } from '../ui/design-system/Card';
import { Button } from '../ui/design-system/Button';
import { cn } from '../ui/design-system/utils';
import { LeadProfileView } from './LeadProfileView';
import { ProposalGenerator } from './ProposalGenerator';
import { PipelineHealth } from './PipelineHealth';
import { LeadEnrichmentFlow } from './enrichment/LeadEnrichmentFlow';
import { SunScoreBadge } from './SunScoreBadge';

// --- Types & Mock Data Generators ---

interface EnhancedLead extends Lead {
  role: string;
  industry: string;
  sunScore: number;
  lastActive: string;
  avatarUrl?: string;
}

const ROLES = ['CEO', 'Founder', 'CTO', 'VP Sales', 'Product Lead'];
const INDUSTRIES = ['Fintech', 'SaaS', 'Healthcare', 'E-commerce', 'Real Estate'];

// Deterministic mock data enhancement based on Lead ID
const enhanceLead = (lead: Lead): EnhancedLead => {
  const hash = lead.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  return {
    ...lead,
    role: ROLES[hash % ROLES.length],
    industry: INDUSTRIES[hash % INDUSTRIES.length],
    sunScore: 40 + (hash % 60), // Score between 40 and 99
    lastActive: `${(hash % 24) + 1}h ago`,
    avatarUrl: undefined 
  };
};

export function CRMLeadsDashboard() {
  const { leads, addLead } = useLeads();
  const [filter, setFilter] = useState<'all' | 'hot' | 'warm' | 'cold'>('all');
  const [search, setSearch] = useState('');
  const [selectedLead, setSelectedLead] = useState<EnhancedLead | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'detail' | 'proposal' | 'pipeline'>('list');
  const [showAddLead, setShowAddLead] = useState(false);

  // Transform and Filter Leads
  const enhancedLeads = useMemo(() => {
    // If no leads exist, provide high-quality mock data for the "Demo Experience"
    const sourceLeads = leads.length > 0 ? leads : MOCK_DEMO_LEADS;

    let processed = sourceLeads.map(enhanceLead);

    if (filter === 'hot') processed = processed.filter(l => l.sunScore >= 80);
    if (filter === 'warm') processed = processed.filter(l => l.sunScore >= 50 && l.sunScore < 80);
    if (filter === 'cold') processed = processed.filter(l => l.sunScore < 50);

    if (search) {
      const q = search.toLowerCase();
      processed = processed.filter(l => 
        l.name.toLowerCase().includes(q) || 
        l.companyName.toLowerCase().includes(q)
      );
    }

    return processed.sort((a, b) => b.sunScore - a.sunScore); // Sort by Score default
  }, [leads, filter, search]);

  // Handle detailed view navigation
  if (selectedLead && viewMode === 'detail') {
    return (
      <LeadProfileView 
        lead={selectedLead} 
        onBack={() => { setSelectedLead(null); setViewMode('list'); }}
        onGenerateProposal={() => setViewMode('proposal')}
      />
    );
  }

  if (selectedLead && viewMode === 'proposal') {
    return (
      <ProposalGenerator 
        lead={selectedLead}
        onBack={() => setViewMode('detail')}
        onSend={() => {
           // Future: trigger actual send logic
           alert('Proposal Sent!');
           setViewMode('detail');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Add Lead Flow Overlay */}
      {showAddLead && (
        <LeadEnrichmentFlow 
          onClose={() => setShowAddLead(false)}
          onComplete={(data) => {
            // Add the new lead to context
            addLead({
              name: data.name,
              email: data.email,
              companyName: data.company,
              status: 'New',
              services: [],
              goals: [],
              budget: 0,
              timeline: 'Flexible',
              description: data.aiSummary,
              value: 'Potential',
              date: new Date().toISOString()
            });
            setShowAddLead(false);
          }}
        />
      )}

      {/* Sticky Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
               <button 
                 onClick={() => setViewMode('list')}
                 className={cn(
                   "p-2 rounded-lg transition-colors", 
                   viewMode === 'list' ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-slate-600"
                 )}
               >
                 <List className="w-5 h-5" />
               </button>
               <button 
                 onClick={() => setViewMode('pipeline')}
                 className={cn(
                   "p-2 rounded-lg transition-colors", 
                   viewMode === 'pipeline' ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-slate-600"
                 )}
               >
                 <LayoutGrid className="w-5 h-5" />
               </button>
               <div className="h-6 w-px bg-slate-200 mx-2" />
               <Typography variant="h4" className="font-bold tracking-tight">
                 {viewMode === 'pipeline' ? 'Pipeline Health' : 'Leads'}
               </Typography>
            </div>
            
            {/* Search */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-slate-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search companies..." 
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 bg-slate-100 rounded-lg text-sm font-medium outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all w-64"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              {(['all', 'hot', 'warm', 'cold'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-bold capitalize transition-all",
                    filter === f ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {f === 'all' ? 'All Leads' : f}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
             <Button variant="outline" size="sm" leftIcon={<Filter className="w-4 h-4" />}>
               Filters
             </Button>
             <Button 
               variant="primary" 
               size="sm" 
               leftIcon={<ArrowUpRight className="w-4 h-4" />}
               onClick={() => setShowAddLead(true)}
             >
               Add Lead
             </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        
        {viewMode === 'pipeline' ? (
          <PipelineHealth 
             leads={enhancedLeads} 
             onViewLead={(lead) => { setSelectedLead(lead as EnhancedLead); setViewMode('detail'); }} 
          />
        ) : (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-6 mb-8">
               <StatCard label="Total Pipeline" value="$1.2M" trend="+12%" />
               <StatCard label="Avg Sun Score" value="78" trend="+4pts" />
               <StatCard label="Proposals Sent" value="14" trend="Active" />
               <StatCard label="Closing Rate" value="24%" trend="High" positive />
            </div>

            {/* Table Card */}
            <Card variant="solid" className="bg-white border-slate-200 overflow-visible">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <th className="px-6 py-5">Name / Role</th>
                    <th className="px-6 py-5">Company</th>
                    <th className="px-6 py-5">Timeline</th>
                    <th className="px-6 py-5">Budget</th>
                    <th className="px-6 py-5">Activity</th>
                    <th className="px-6 py-5 text-center">Sun Score</th>
                    <th className="px-6 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {enhancedLeads.map((lead) => (
                    <LeadRow key={lead.id} lead={lead} onClick={() => { setSelectedLead(lead); setViewMode('detail'); }} />
                  ))}
                </tbody>
              </table>
              
              {enhancedLeads.length === 0 && (
                <div className="p-12 text-center text-slate-500">
                   No leads found matching your filters.
                </div>
              )}
            </Card>
          </>
        )}

      </main>
    </div>
  );
}

// --- Components ---

function LeadRow({ lead, onClick }: { lead: EnhancedLead, onClick: () => void }) {
  return (
    <motion.tr 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="group hover:bg-slate-50/80 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
              {lead.name.charAt(0)}
           </div>
           <div>
             <div className="font-bold text-slate-900 text-sm">{lead.name}</div>
             <div className="text-xs text-slate-500">{lead.role}</div>
           </div>
        </div>
      </td>
      <td className="px-6 py-4">
         <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-700">{lead.companyName}</span>
         </div>
         <div className="text-[10px] text-slate-400 ml-6">{lead.industry}</div>
      </td>
      <td className="px-6 py-4">
         <Badge variant="outline" className="bg-white">{lead.timeline || 'Flexible'}</Badge>
      </td>
      <td className="px-6 py-4 font-mono text-sm text-slate-600">
         ${lead.budget.toLocaleString()}
      </td>
      <td className="px-6 py-4">
         <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock className="w-3 h-3" />
            {lead.lastActive}
         </div>
      </td>
      <td className="px-6 py-4 flex justify-center">
         <SunScoreBadge score={lead.sunScore} />
      </td>
      <td className="px-6 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
         <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg border border-transparent hover:border-slate-200 text-slate-400 hover:text-slate-600">
            <MoreHorizontal className="w-4 h-4" />
         </button>
      </td>
    </motion.tr>
  );
}

function StatCard({ label, value, trend, positive }: { label: string, value: string, trend: string, positive?: boolean }) {
  return (
    <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
       <div className="text-xs font-medium text-slate-500 mb-1">{label}</div>
       <div className="flex items-end justify-between">
          <div className="text-2xl font-bold text-slate-900">{value}</div>
          <div className={cn("text-xs font-bold px-1.5 py-0.5 rounded-md", positive ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-600")}>
             {trend}
          </div>
       </div>
    </div>
  );
}

// Mock Data for Demo
const MOCK_DEMO_LEADS: Lead[] = [
  { id: '1', name: 'Elena V.', companyName: 'FinTech Global', email: 'elena@fintech.com', status: 'New', services: ['AI Web App'], goals: ['Scale'], budget: 50000, timeline: 'ASAP', description: 'Chatbot for banking', date: '2024-05-20', value: '$50k' },
  { id: '2', name: 'Marcus Chen', companyName: 'Nexus Health', email: 'm.chen@nexus.com', status: 'Proposal Sent', services: ['Custom Chatbot'], goals: ['Automate'], budget: 25000, timeline: '1-2 Months', description: 'Patient triage system', date: '2024-05-19', value: '$25k' },
  { id: '3', name: 'Sarah Miller', companyName: 'Urban Real Estate', email: 'sarah@urbanre.com', status: 'New', services: ['Automation'], goals: ['Save Time'], budget: 10000, timeline: 'Flexible', description: 'Lead qualification', date: '2024-05-18', value: '$10k' },
  { id: '4', name: 'David Ross', companyName: 'Ross Logistics', email: 'dross@logistics.io', status: 'Booked', services: ['Consulting'], goals: ['Revenue'], budget: 5000, timeline: 'ASAP', description: 'AI Strategy', date: '2024-05-15', value: '$5k' },
];
