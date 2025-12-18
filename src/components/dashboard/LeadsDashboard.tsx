import React, { useState } from 'react';
import { Typography } from '../ui/design-system/Typography';
import { Card } from '../ui/design-system/Card';
import { Badge } from '../ui/design-system/Badge';
import { Button } from '../ui/design-system/Button';
import { EmptyState } from '../ui/design-system/SystemStates';
import { MoreHorizontal } from 'lucide-react';
import { useLeads, Lead } from '../../context/LeadContext';
import { LeadDetailView } from './LeadDetailView';

export function LeadsDashboard() {
  const { leads } = useLeads();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const getStatusBadge = (status: Lead['status']) => {
    switch (status) {
      case 'New': return <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">New</Badge>;
      case 'Proposal Sent': return <Badge variant="orange">Proposal Sent</Badge>;
      case 'Booked': return <Badge variant="success">Booked</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="h2" className="text-slate-900">Leads Dashboard</Typography>
            <Typography variant="body" className="text-slate-500">Manage incoming briefs and proposals.</Typography>
          </div>
          <Button variant="outline" size="sm">Export CSV</Button>
        </div>

        {/* Content */}
        {leads.length > 0 ? (
          <Card variant="solid" className="overflow-hidden bg-white border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Company</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Est. Value</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leads.map((lead) => (
                  <tr 
                    key={lead.id} 
                    className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                    onClick={() => setSelectedLead(lead)}
                  >
                    <td className="p-4 font-medium text-slate-900">{lead.name}</td>
                    <td className="p-4 text-slate-600">{lead.companyName}</td>
                    <td className="p-4">{getStatusBadge(lead.status)}</td>
                    <td className="p-4 text-slate-500 text-sm">{lead.date}</td>
                    <td className="p-4 font-mono text-slate-700">{lead.value}</td>
                    <td className="p-4 text-right">
                       <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors" onClick={(e) => {
                         e.stopPropagation();
                         // Future: Open action menu
                       }}>
                         <MoreHorizontal className="w-4 h-4" />
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        ) : (
          <EmptyState 
            title="No Leads Yet" 
            description="Incoming briefs will appear here once users complete the wizard."
            className="bg-white rounded-2xl border border-slate-200 shadow-sm"
          />
        )}

      </div>
      
      {/* Detail View Slide-over */}
      <LeadDetailView lead={selectedLead} onClose={() => setSelectedLead(null)} />

    </div>
  );
}
