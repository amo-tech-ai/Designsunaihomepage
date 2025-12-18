import React, { createContext, useContext, useState, ReactNode } from 'react';
import { WizardFormData } from '../lib/schemas';

// Extend the form data with system fields
export interface Lead extends WizardFormData {
  id: string;
  status: 'New' | 'Proposal Sent' | 'Booked' | 'Archived';
  date: string;
  value: string; // Formatted value
}

interface LeadContextType {
  leads: Lead[];
  addLead: (data: WizardFormData) => void;
  updateLeadStatus: (id: string, status: Lead['status']) => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [leads, setLeads] = useState<Lead[]>([
    { 
      id: '1', 
      name: 'Alice Freeman', 
      companyName: 'TechNova', 
      status: 'New', 
      date: 'Dec 12, 2025', 
      value: '$25k+',
      website: 'https://technova.io',
      services: ['AI Web App', 'Consulting'],
      goals: ['Scale Operations'],
      description: 'We need to automate our internal reporting tool.',
      budget: 25000,
      timeline: '1-2 Months'
    },
    { 
      id: '2', 
      name: 'Bob Smith', 
      companyName: 'LogiChain', 
      status: 'Proposal Sent', 
      date: 'Dec 10, 2025', 
      value: '$45k+',
      website: 'https://logichain.com',
      services: ['Workflow Automation'],
      goals: ['Save Time'],
      description: 'Logistics optimization using AI agents.',
      budget: 45000,
      timeline: '3-6 Months'
    }
  ]);

  const addLead = (data: WizardFormData) => {
    const newLead: Lead = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      status: 'New',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      value: `$${data.budget.toLocaleString()}+`
    };
    setLeads(prev => [newLead, ...prev]);
  };

  const updateLeadStatus = (id: string, status: Lead['status']) => {
    setLeads(prev => prev.map(lead => lead.id === id ? { ...lead, status } : lead));
  };

  return (
    <LeadContext.Provider value={{ leads, addLead, updateLeadStatus }}>
      {children}
    </LeadContext.Provider>
  );
}

export function useLeads() {
  const context = useContext(LeadContext);
  if (context === undefined) {
    throw new Error('useLeads must be used within a LeadProvider');
  }
  return context;
}
