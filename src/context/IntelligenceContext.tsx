import React, { createContext, useContext, useState, ReactNode } from 'react';

// --- Types ---

export interface ActionItem {
  id: number;
  text: string;
  owner: string;
  date: string;
  status: 'pending' | 'completed' | 'dismissed';
}

export interface CallData {
  id: string;
  leadName: string;
  role: string;
  company: string;
  date: string;
  duration: string;
  summary: string;
  signals: {
    budget: string;
    timeline: string;
    priority: string;
    authority: string;
  };
  actions: ActionItem[];
}

export interface Lead {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  budget: string;
  lastContact: string;
  matchReason?: string;
  matchScore?: number;
  avatar: string;
}

interface IntelligenceContextType {
  // State
  calls: CallData[];
  leads: Lead[];
  currentQuery: string;
  searchResults: Lead[];
  isThinking: boolean;
  selectedLeadId: number | null;
  
  // Actions
  ingestCall: (file: File) => Promise<void>;
  runSearch: (query: string) => void;
  updateActionStatus: (callId: string, actionId: number, status: 'pending' | 'completed' | 'dismissed') => void;
  getCallById: (id: string) => CallData | undefined;
  selectLead: (id: number | null) => void;
}

// --- Mock Data ---

const MOCK_CALLS: CallData[] = [
  {
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
  }
];

const MOCK_LEADS: Lead[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO",
    company: "FintechFlow",
    location: "New York, NY",
    budget: "$75k",
    lastContact: "2 days ago",
    matchReason: "Matched 'Fintech' + 'CEO' + 'NY'",
    matchScore: 98,
    avatar: "SC"
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "Founder",
    company: "BankSafe AI",
    location: "New York, NY",
    budget: "$120k",
    lastContact: "1 week ago",
    matchReason: "Matched 'Fintech' + 'NY' + High Budget",
    matchScore: 95,
    avatar: "MR"
  },
  {
    id: 3,
    name: "Jessica Wu",
    role: "CTO",
    company: "PayPulse",
    location: "Brooklyn, NY",
    budget: "$60k",
    lastContact: "3 days ago",
    matchReason: "Matched 'Fintech' + 'NY' + Budget > $50k",
    matchScore: 92,
    avatar: "JW"
  },
  {
    id: 4,
    name: "David Miller",
    role: "VP Engineering",
    company: "CryptoSecure",
    location: "New York, NY",
    budget: "$90k",
    lastContact: "Just now",
    matchReason: "Matched 'Fintech' + 'NY'",
    matchScore: 88,
    avatar: "DM"
  },
  {
    id: 5,
    name: "Robert Fox",
    role: "Head of Product",
    company: "HealthAI",
    location: "San Francisco, CA",
    budget: "$40k",
    lastContact: "1 month ago",
    matchReason: "Low Match",
    matchScore: 45,
    avatar: "RF"
  }
];

// --- Context & Provider ---

const IntelligenceContext = createContext<IntelligenceContextType | undefined>(undefined);

export function useIntelligence() {
  const context = useContext(IntelligenceContext);
  if (!context) {
    throw new Error('useIntelligence must be used within an IntelligenceProvider');
  }
  return context;
}

export function IntelligenceProvider({ children }: { children: ReactNode }) {
  const [calls, setCalls] = useState<CallData[]>(MOCK_CALLS);
  const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS);
  const [currentQuery, setCurrentQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Lead[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [selectedLeadId, setSelectedLeadId] = useState<number | null>(null);

  // Simulate ingesting a call
  const ingestCall = async (file: File) => {
    setIsThinking(true);
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const newCall: CallData = {
      id: `call_${Date.now()}`,
      leadName: "New Lead (From Recording)",
      role: "Unknown Role",
      company: "Unknown Company",
      date: new Date().toLocaleString(),
      duration: "32m 15s",
      summary: "This call was automatically processed. It appears to be a discovery call regarding enterprise licensing.",
      signals: {
        budget: "Unknown",
        timeline: "Unknown",
        priority: "Medium",
        authority: "Influencer"
      },
      actions: [
        { id: 1, text: "Identify Stakeholders", owner: "AI Agent", date: "Today", status: "pending" }
      ]
    };
    
    setCalls(prev => [newCall, ...prev]);
    setIsThinking(false);
  };

  // Run a "semantic" search
  const runSearch = (query: string) => {
    setCurrentQuery(query);
    setIsThinking(true);
    
    // Simulate API latency for semantic search
    setTimeout(() => {
      if (!query) {
        setSearchResults([]);
        setIsThinking(false);
        return;
      }
      
      const lowerQuery = query.toLowerCase();
      // Simple mock filter logic simulating "semantic" understanding
      const results = leads.filter(lead => {
        // Broad match across fields
        const textContent = `${lead.name} ${lead.role} ${lead.company} ${lead.location} ${lead.budget}`.toLowerCase();
        
        // Special logic for "Fintech" queries to show our specific mock data
        if (lowerQuery.includes('fintech') || lowerQuery.includes('ny') || lowerQuery.includes('budget')) {
          return lead.company.toLowerCase().includes('fintech') || 
                 lead.location.toLowerCase().includes('ny') || 
                 (lead.matchScore && lead.matchScore > 80);
        }
        
        return textContent.includes(lowerQuery);
      }).sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0)); // Sort by relevance
      
      setSearchResults(results);
      setIsThinking(false);
    }, 800);
  };

  const updateActionStatus = (callId: string, actionId: number, status: 'pending' | 'completed' | 'dismissed') => {
    setCalls(prevCalls => prevCalls.map(call => {
      if (call.id !== callId) return call;
      return {
        ...call,
        actions: call.actions.map(action => 
          action.id === actionId ? { ...action, status } : action
        )
      };
    }));
  };

  const getCallById = (id: string) => calls.find(c => c.id === id);

  const selectLead = (id: number | null) => {
    setSelectedLeadId(id);
  };

  return (
    <IntelligenceContext.Provider value={{
      calls,
      leads,
      currentQuery,
      searchResults,
      isThinking,
      selectedLeadId,
      ingestCall,
      runSearch,
      updateActionStatus,
      getCallById,
      selectLead
    }}>
      {children}
    </IntelligenceContext.Provider>
  );
}
