import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GitMerge, Layout, Globe, Lock, Wand2, 
  BarChart3, Users, FileText, ChevronDown, ChevronRight,
  ExternalLink, AlertTriangle, CheckCircle2, ArrowRight,
  Home, Command, Terminal
} from 'lucide-react';
import { Card } from '../ui/design-system/Card';
import { Badge } from '../ui/design-system/Badge';
import { Typography } from '../ui/design-system/Typography';
import { Button } from '../ui/design-system/Button';
import { cn } from '../ui/design-system/utils';

// --- Types ---
interface SitemapNode {
  id: string;
  label: string;
  type: 'public' | 'auth' | 'conversion' | 'admin';
  route: string;
  children?: SitemapNode[];
  description?: string;
  primaryCTA?: string;
}

// --- Data Structure ---
const sitemapData: SitemapNode = {
  id: 'root',
  label: 'Root (App.tsx)',
  type: 'public',
  route: '/',
  children: [
    {
      id: 'marketing',
      label: 'Marketing Website',
      type: 'public',
      route: 'v7',
      description: 'Main entry point for traffic',
      primaryCTA: 'Start AI Brief',
      children: [
        {
          id: 'home',
          label: 'Home V7',
          type: 'public',
          route: 'v7',
          children: [
            { id: 'projects', label: 'Projects / Case Studies', type: 'public', route: 'projects' },
            { id: 'about', label: 'About Us', type: 'public', route: 'about' },
            { id: 'process', label: 'Our Process', type: 'public', route: 'process' },
            { 
              id: 'services', 
              label: 'Services Hub', 
              type: 'public', 
              route: 'services-v2',
              children: [
                { id: 'web', label: 'AI Web Dev', type: 'public', route: 'ai-web-dev' },
                { id: 'agents', label: 'AI Agents', type: 'public', route: 'ai-agents' },
                { id: 'chatbots', label: 'Chatbots', type: 'public', route: 'ai-chatbots' },
                { id: 'marketing-svc', label: 'AI Marketing', type: 'public', route: 'ai-sales-marketing' },
              ]
            },
            { id: 'booking', label: 'Booking Page', type: 'public', route: 'booking' },
          ]
        },
      ]
    },
    {
      id: 'funnel',
      label: 'Conversion Funnel',
      type: 'conversion',
      route: 'wizard',
      description: 'High-intent user flow',
      primaryCTA: 'Generate Proposal',
      children: [
        { id: 'step1', label: 'Wizard: Overview', type: 'conversion', route: 'wizard' },
        { id: 'step2', label: 'Wizard: Services', type: 'conversion', route: 'wizard' },
        { id: 'processing', label: 'Processing State', type: 'conversion', route: 'processing' },
        { id: 'proposal', label: 'Proposal Ready', type: 'conversion', route: 'proposal' },
      ]
    },
    {
      id: 'system',
      label: 'System / Auth',
      type: 'auth',
      route: 'login',
      description: 'Protected Routes',
      children: [
        {
          id: 'architecture-docs',
          label: 'System Architecture Docs',
          type: 'public',
          route: 'startup-ai-docs',
          primaryCTA: 'View Diagram',
          description: 'Visual map of routing & AI workflows'
        },
        {
          id: 'client-dash',
          label: 'Client Dashboard',
          type: 'auth',
          route: 'dashboard',
          primaryCTA: 'View Project',
        },
        {
          id: 'admin-dash',
          label: 'Admin CRM',
          type: 'admin',
          route: 'leads',
          primaryCTA: 'Review Leads',
          children: [
            { id: 'lead-detail', label: 'Lead Detail View', type: 'admin', route: 'leads' },
            { id: 'ops-room', label: 'Ops Control Room', type: 'admin', route: 'ops', description: 'AI Agent Monitoring' },
            { id: 'workflow-map', label: 'Workflow Logic Map', type: 'admin', route: 'workflow', description: 'Visual Logic Graph' }
          ]
        }
      ]
    }
  ]
};

// --- Components ---

function SitemapHeader({ onNavigate }: { onNavigate: (v: any) => void }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-slate-900 cursor-pointer" onClick={() => onNavigate('v7')}>
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
              <Command className="w-4 h-4" />
            </div>
            <span>Sun AI <span className="text-slate-400 font-normal">Architecture</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">Map</Button>
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">Audit</Button>
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900" onClick={() => onNavigate('style-guide')}>Style Guide</Button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 hidden sm:flex gap-1 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            System Healthy
          </Badge>
          <div className="h-6 w-px bg-slate-200 mx-2" />
          <Button variant="outline" size="sm" onClick={() => onNavigate('v7')}>
            <Home className="w-4 h-4 mr-2" />
            Main Site
          </Button>
          <Button variant="primary" size="sm" onClick={() => onNavigate('dashboard')}>
            <Terminal className="w-4 h-4 mr-2" />
            Console
          </Button>
        </div>
      </div>
    </header>
  );
}

function SitemapFooter({ onNavigate }: { onNavigate: (v: any) => void }) {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 mb-4">
              <div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
                <Command className="w-3 h-3" />
              </div>
              <span>Sun AI Systems</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm">
              Architecture documentation and system status for the Sun AI platform. 
              Generated automatically by the UX Architecture Engine.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><button onClick={() => onNavigate('style-guide')} className="hover:text-orange-500 transition-colors">Design System</button></li>
              <li><button onClick={() => onNavigate('v7')} className="hover:text-orange-500 transition-colors">Public Website</button></li>
              <li><button onClick={() => onNavigate('booking')} className="hover:text-orange-500 transition-colors">Booking Flow</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Admin</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><button onClick={() => onNavigate('dashboard')} className="hover:text-orange-500 transition-colors">Client Dashboard</button></li>
              <li><button onClick={() => onNavigate('leads')} className="hover:text-orange-500 transition-colors">Lead CRM</button></li>
              <li><button onClick={() => onNavigate('login')} className="hover:text-orange-500 transition-colors">Logout / Switch</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2025 Sun AI. Internal System Documentation.
          </div>
          <div className="flex items-center gap-6">
            <span>Version 7.0.2</span>
            <span>Last Updated: Dec 17, 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NodeItem({ node, depth = 0, onNavigate }: { node: SitemapNode, depth?: number, onNavigate: (v: any) => void }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  const typeColors = {
    public: 'bg-blue-50 border-blue-200 text-blue-700',
    auth: 'bg-slate-900 border-slate-800 text-white',
    conversion: 'bg-orange-50 border-orange-200 text-orange-700',
    admin: 'bg-emerald-50 border-emerald-200 text-emerald-700'
  };

  const typeBadge = {
    public: 'Public',
    auth: 'Protected',
    conversion: 'Flow',
    admin: 'Internal'
  };

  return (
    <div className="relative">
      {/* Connector Line Vertical */}
      {depth > 0 && (
        <div className="absolute -left-6 top-0 bottom-0 w-px bg-slate-200 last:bottom-auto last:h-8" />
      )}
      
      {/* Node Card */}
      <div className="flex items-center gap-4 mb-4 relative group">
        {/* Connector Line Horizontal */}
        {depth > 0 && <div className="absolute -left-6 top-1/2 w-6 h-px bg-slate-200" />}

        <div 
          onClick={() => onNavigate(node.route)}
          className={cn(
            "relative p-4 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md min-w-[280px] flex items-center justify-between gap-4",
            typeColors[node.type]
          )}
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="bg-white/10 border-white/20 text-current text-[10px] h-5 px-1.5">
                {typeBadge[node.type]}
              </Badge>
              {node.route && <span className="text-[10px] opacity-60 font-mono">/{node.route}</span>}
            </div>
            <div className="font-bold text-sm">{node.label}</div>
            {node.description && <div className="text-[10px] opacity-80 mt-1">{node.description}</div>}
          </div>
          
          {hasChildren && (
            <button 
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
              className="p-1 hover:bg-black/5 rounded-full"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Action Button (On Hover) */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-4 top-1/2 -translate-y-1/2 z-10">
          <Button size="sm" variant="ghost" className="bg-white border shadow-sm" onClick={() => onNavigate(node.route)}>
            Visit <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>

      {/* Children Recursion */}
      <div className={cn(
        "pl-12 border-l border-slate-200 ml-6 space-y-2 transition-all overflow-hidden",
        isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        {hasChildren && node.children!.map((child) => (
          <NodeItem key={child.id} node={child} depth={depth + 1} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

function ReportSection() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Purpose Table */}
      <Card variant="outline" className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 text-slate-400" />
          <Typography variant="h3">Page Purpose Analysis</Typography>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-xs">
              <tr>
                <th className="p-3 rounded-l-lg">Page</th>
                <th className="p-3">Intent</th>
                <th className="p-3 rounded-r-lg">Primary CTA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-3 font-medium">Home V7</td>
                <td className="p-3 text-slate-500">Brand Trust</td>
                <td className="p-3 text-orange-600 font-bold">Start Brief</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Services Hub</td>
                <td className="p-3 text-slate-500">Education</td>
                <td className="p-3 text-blue-600 font-bold">View Solutions</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Wizard</td>
                <td className="p-3 text-slate-500">Data Collection</td>
                <td className="p-3 text-orange-600 font-bold">Generate Proposal</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Client Dash</td>
                <td className="p-3 text-slate-500">Retention</td>
                <td className="p-3 text-slate-900 font-bold">Approve Project</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Admin CRM</td>
                <td className="p-3 text-slate-500">Management</td>
                <td className="p-3 text-emerald-600 font-bold">Review Lead</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Flow & Optimization */}
      <div className="space-y-6">
        <Card variant="outline" className="p-6 border-emerald-100 bg-emerald-50/50">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <Typography variant="h3" className="text-emerald-900">Flow Validation</Typography>
          </div>
          <ul className="space-y-3 text-sm text-emerald-800">
             <li className="flex gap-2"><ArrowRight className="w-4 h-4 mt-0.5" /> <strong>Entry:</strong> Multiple Marketing LPs consolidate to Home V7.</li>
             <li className="flex gap-2"><ArrowRight className="w-4 h-4 mt-0.5" /> <strong>Conversion:</strong> Wizard creates 'Lead' in Context.</li>
             <li className="flex gap-2"><ArrowRight className="w-4 h-4 mt-0.5" /> <strong>Retention:</strong> Leads populate Admin Dashboard instantly.</li>
             <li className="flex gap-2"><ArrowRight className="w-4 h-4 mt-0.5" /> <strong>Safety:</strong> Auth Gate protects sensitive CRM data.</li>
          </ul>
        </Card>

        <Card variant="outline" className="p-6 border-orange-100 bg-orange-50/50">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <Typography variant="h3" className="text-orange-900">Optimization Suggestions</Typography>
          </div>
          <ul className="space-y-3 text-sm text-orange-800">
             <li className="flex gap-2">
               <span className="font-bold">1.</span> 
               <span><strong>Consolidate Industry Pages:</strong> 7+ individual chatbot industry pages could be a single dynamic template to reduce maintenance.</span>
             </li>
             <li className="flex gap-2">
               <span className="font-bold">2.</span> 
               <span><strong>Unified Dashboard:</strong> Currently "Client" and "Admin" dashboards are separate components. Consider a single "Dashboard Layout" with role-based widgets.</span>
             </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

// --- Main Export ---
interface SitemapProps {
  onNavigate: (version: any) => void;
}

export function SitemapV2({ onNavigate }: SitemapProps) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <SitemapHeader onNavigate={onNavigate} />
      
      <main className="flex-grow p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Content */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4 text-slate-400 font-medium">
               <Layout className="w-5 h-5" />
               <span>System Architecture</span>
            </div>
            <Typography variant="h1" className="mb-4">Sitemap & User Flow</Typography>
            <p className="text-xl text-slate-500 max-w-2xl">
               A live, interactive view of the application structure, navigation hierarchy, and conversion pathways.
            </p>
          </div>

          {/* Visual Map */}
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12">
               <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm overflow-x-auto">
                  <div className="min-w-[800px]">
                     <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-8">Root Hierarchy</h3>
                     {sitemapData.children!.map((child) => (
                       <NodeItem key={child.id} node={child} onNavigate={onNavigate} />
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Detailed Report */}
          <ReportSection />

        </div>
      </main>

      <SitemapFooter onNavigate={onNavigate} />
    </div>
  );
}
