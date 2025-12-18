import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, DollarSign, Globe, Building2, Mail, ExternalLink, Target, Clock, FileText } from 'lucide-react';
import { Button } from '../ui/design-system/Button';
import { Typography } from '../ui/design-system/Typography';
import { Badge } from '../ui/design-system/Badge';
import { Lead } from '../../context/LeadContext';

interface LeadDetailViewProps {
  lead: Lead | null;
  onClose: () => void;
}

export function LeadDetailView({ lead, onClose }: LeadDetailViewProps) {
  return (
    <AnimatePresence>
      {lead && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50"
          />

          {/* Slide-over Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/50">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant={lead.status === 'New' ? 'default' : 'orange'}>{lead.status}</Badge>
                  <span className="text-xs text-slate-400 font-mono">{lead.id}</span>
                </div>
                <Typography variant="h3" className="text-slate-900">{lead.name}</Typography>
                <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                  <Building2 className="w-4 h-4" />
                  {lead.companyName}
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Budget</div>
                  <div className="text-xl font-bold text-slate-900 flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    {lead.budget.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Timeline</div>
                  <div className="text-xl font-bold text-slate-900 flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    {lead.timeline}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
                  <FileText className="w-4 h-4 text-slate-400" />
                  Project Brief
                </h4>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 text-sm leading-relaxed">
                  "{lead.description}"
                </div>
              </div>

              {/* Goals & Services */}
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
                    <Target className="w-4 h-4 text-slate-400" />
                    Goals
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {lead.goals.map(goal => (
                      <span key={goal} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm text-slate-600">
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
                    <Target className="w-4 h-4 text-slate-400" />
                    Services
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {lead.services.map(svc => (
                      <span key={svc} className="px-3 py-1 bg-slate-900 text-white border border-slate-900 rounded-lg text-sm">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              {lead.website && (
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
                    <Globe className="w-4 h-4 text-slate-400" />
                    Website
                  </h4>
                  <a 
                    href={lead.website} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline text-sm"
                  >
                    {lead.website}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-4">
              <Button variant="outline" className="flex-1" onClick={onClose}>Close</Button>
              <Button variant="primary" className="flex-1">Create Proposal</Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
