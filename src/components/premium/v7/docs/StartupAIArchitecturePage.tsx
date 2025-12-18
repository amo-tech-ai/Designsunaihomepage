import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Layout, 
  Zap, 
  MessageSquare, 
  Presentation, 
  Calendar, 
  Share2, 
  Cpu, 
  Database, 
  Search, 
  Code, 
  Globe, 
  CheckCircle2, 
  Play, 
  ChevronDown 
} from 'lucide-react';
import { NavbarV7 } from '../NavbarV7';
import { FooterV7 } from '../FooterV7';
import { Button } from '../../../ui/design-system/Button';
import { Card } from '../../../ui/design-system/Card';
import { Badge } from '../../../ui/design-system/Badge';
import { Typography } from '../../../ui/design-system/Typography';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type WorkflowId = 'founder' | 'event' | 'investor' | null;

export function StartupAIArchitecturePage({ onNavigate, onVersionChange }: { onNavigate?: (page: string) => void, onVersionChange?: (v: any) => void }) {
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowId>(null);

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <NavbarV7 onVersionChange={onVersionChange} />
      
      {/* =========================================================================
          SCREEN 1: Product Architecture & Routing
      ========================================================================= */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 border-slate-200 text-slate-500">System Architecture v1.0</Badge>
          <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Product Architecture & Routing
          </Typography>
          <p className="text-xl text-slate-500 leading-relaxed">
            Visual map of the StartupAI flow — from onboarding to investor-ready assets, with no dead ends.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          
          {/* Card 1: Home */}
          <RouteCard 
            route="/" 
            title="Home" 
            purpose="Storytelling + Entry" 
            icon={<Layout className="w-5 h-5" />}
            primaryCTA="Start Smart Intake →"
            secondaryCTA="Watch Demo"
            onClick={() => onVersionChange?.('v7')}
          />

          {/* Card 2: Wizard */}
          <RouteCard 
            route="/wizard" 
            title="Smart Wizard" 
            purpose="URL → Autofill → Strategy Review" 
            icon={<Zap className="w-5 h-5" />}
            primaryCTA="Run Smart Autofill →"
            secondaryCTA="Skip + Manual"
            onClick={() => onVersionChange?.('wizard')}
          />

          {/* Card 3: Dashboard */}
          <RouteCard 
            route="/dashboard" 
            title="Mission Control" 
            purpose="Tasks, runway, next best action" 
            icon={<Cpu className="w-5 h-5" />}
            primaryCTA="Ask Assistant →"
            secondaryCTA="View Tasks"
            onClick={() => onVersionChange?.('dashboard')}
          />

          {/* Card 4: Deck */}
          <RouteCard 
            route="/deck" 
            title="Deck Editor" 
            purpose="Build + refine investor deck" 
            icon={<Presentation className="w-5 h-5" />}
            primaryCTA="Export PDF →"
            secondaryCTA="Fix This Slide"
            onClick={() => onVersionChange?.('deck-editor')}
          />

          {/* Card 5: Events */}
          <RouteCard 
            route="/events" 
            title="Event Hub" 
            purpose="Plan events + logistics automation" 
            icon={<Calendar className="w-5 h-5" />}
            primaryCTA="Plan Event →"
            secondaryCTA="View Workback Plan"
            onClick={() => onVersionChange?.('event-hub')}
          />

          {/* Card 6: Share */}
          <RouteCard 
            route="/share/inv-8821x" 
            title="Secure Share Link" 
            purpose="Read-only investor summary + meeting CTA" 
            icon={<Share2 className="w-5 h-5" />}
            primaryCTA="View Snapshot →"
            secondaryCTA="Download PDF"
            onClick={() => onVersionChange?.('share-investor')}
          />

        </div>

        {/* Bottom Flow Strip */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
             <div className="h-6 w-1 bg-orange-500 rounded-full"></div>
             <h3 className="text-lg font-bold text-slate-900">Core Journey</h3>
          </div>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              <FlowNode label="Interest" title="Home / Services" isStart />
              <FlowNode label="Capture" title="AI Wizard" />
              <FlowNode label="Action" title="Proposal / Dash" />
              <FlowNode label="Asset" title="Deck / Event" />
              <FlowNode label="Decision" title="Booking / Payment" isEnd />
            </div>
          </div>
        </div>

        {/* Page Footer Navigation */}
        <div className="flex justify-center gap-8 mt-12 text-sm font-medium text-slate-500">
          <button onClick={() => scrollToSection('workflows')} className="hover:text-orange-500 transition-colors flex items-center gap-2">
            View Workflow Map <ChevronDown className="w-4 h-4" />
          </button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-slate-900 transition-colors">
            Back to Top
          </button>
          <button onClick={() => onVersionChange?.('wizard')} className="hover:text-slate-900 transition-colors">
            Open Wizard
          </button>
        </div>

      </section>

      <div className="h-px bg-slate-100 w-full" />

      {/* =========================================================================
          SCREEN 2: How It Works (Workflows + AI Automation Map)
      ========================================================================= */}
      <section id="workflows" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
        
        <div className="mb-16">
          <Typography variant="h2" className="text-4xl font-bold text-slate-900 mb-4">How StartupAI Works</Typography>
          <p className="text-xl text-slate-500 max-w-2xl">
            AI agents + Gemini tools orchestrate research, drafting, and action — across your startup workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 h-full">
          
          {/* LEFT: Visual Flowchart (Node Diagram) - Cols 7 */}
          <div className="xl:col-span-7 bg-slate-50/50 rounded-3xl border border-slate-200/60 p-8 lg:p-12 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
              style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative z-10 space-y-16 flex flex-col items-center">
              
              {/* 1. User Intent */}
              <SystemNode 
                title="User Intent" 
                icon={<MessageSquare className="w-5 h-5" />} 
                type="input"
                active={!!activeWorkflow}
              />

              <div className="h-12 w-0.5 bg-slate-300 relative">
                 <ArrowRight className="absolute -bottom-3 -left-[7px] w-4 h-4 text-slate-300 rotate-90" />
              </div>

              {/* 2. Orchestrator */}
              <SystemNode 
                title="Orchestrator (Edge)" 
                icon={<Cpu className="w-5 h-5" />} 
                type="logic"
                active={!!activeWorkflow}
                description="Routes request to correct model"
              />

              <div className="h-12 w-0.5 bg-slate-300 relative">
                <ArrowRight className="absolute -bottom-3 -left-[7px] w-4 h-4 text-slate-300 rotate-90" />
              </div>

              {/* 3. Models Layer */}
              <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
                <SystemNode 
                  title="Gemini Flash" 
                  badge="Fast"
                  type="model"
                  active={activeWorkflow === 'event' || activeWorkflow === 'investor'}
                  className={activeWorkflow === 'founder' ? 'opacity-40' : ''}
                />
                <SystemNode 
                  title="Gemini Pro + Thinking" 
                  badge="Deep"
                  type="model"
                  active={activeWorkflow === 'founder' || activeWorkflow === 'event'}
                  className={activeWorkflow === 'investor' ? 'opacity-40' : ''}
                />
              </div>

              <div className="h-12 w-0.5 bg-slate-300 relative">
                <ArrowRight className="absolute -bottom-3 -left-[7px] w-4 h-4 text-slate-300 rotate-90" />
              </div>

              {/* 4. Tools Layer */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm w-full max-w-2xl">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">Available Tools</div>
                <div className="flex flex-wrap justify-center gap-3">
                  <ToolBadge icon={<Search className="w-3 h-3" />} label="Search Grounding" active={activeWorkflow === 'founder' || activeWorkflow === 'event'} />
                  <ToolBadge icon={<Globe className="w-3 h-3" />} label="URL Context" active={activeWorkflow === 'founder'} />
                  <ToolBadge icon={<Code className="w-3 h-3" />} label="Code Execution" active={activeWorkflow === 'founder'} />
                  <ToolBadge icon={<Database className="w-3 h-3" />} label="Supabase Read/Write" active={true} />
                  <ToolBadge icon={<Layout className="w-3 h-3" />} label="Structured Output" active={true} />
                </div>
              </div>

              <div className="h-12 w-0.5 bg-slate-300 relative">
                <ArrowRight className="absolute -bottom-3 -left-[7px] w-4 h-4 text-slate-300 rotate-90" />
              </div>

              {/* 5. Output Modules */}
              <div className="grid grid-cols-4 gap-4 w-full">
                <OutputNode label="Tasks" active={activeWorkflow === 'founder' || activeWorkflow === 'event'} />
                <OutputNode label="Deck Slides" active={activeWorkflow === 'founder'} />
                <OutputNode label="Event Plan" active={activeWorkflow === 'event'} />
                <OutputNode label="Share Summary" active={activeWorkflow === 'investor'} />
              </div>

            </div>
          </div>

          {/* RIGHT: Workflow Cards (3) - Cols 5 */}
          <div className="xl:col-span-5 space-y-6">
            <Typography variant="h4" className="mb-6 text-slate-400 font-medium">Select a workflow to visualize path:</Typography>
            
            <WorkflowCard 
              id="founder"
              title="Zero-to-One Founder"
              useCase="Founder pastes landing page URL → gets profile + deck."
              active={activeWorkflow === 'founder'}
              onClick={() => setActiveWorkflow(activeWorkflow === 'founder' ? null : 'founder')}
              tags={['Pro', 'Thinking', 'URL Context', 'Search']}
              output="Profile fields + 10-slide deck"
            />

            <WorkflowCard 
              id="event"
              title="Event-to-Lead Loop"
              useCase="Plan a NYC launch event with conflict detection."
              active={activeWorkflow === 'event'}
              onClick={() => setActiveWorkflow(activeWorkflow === 'event' ? null : 'event')}
              tags={['Pro', 'Search', 'Flash', 'Image Tool']}
              output="Event entity + 15 tasks + banner"
            />

            <WorkflowCard 
              id="investor"
              title="Investor Read-Only Summary"
              useCase="Investor opens link → 30-second decision."
              active={activeWorkflow === 'investor'}
              onClick={() => setActiveWorkflow(activeWorkflow === 'investor' ? null : 'investor')}
              tags={['Flash', 'Structured Output']}
              output="3-bullet summary + meeting CTA"
            />

            {/* Run Example Button */}
            <div className="pt-8 border-t border-slate-100 mt-8">
               <Button className="w-full h-14 text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/10">
                 <Play className="w-5 h-5 mr-2" /> Run Interactive Demo
               </Button>
               <p className="text-center text-xs text-slate-400 mt-3">
                 Requires live API key. Currently in visualization mode.
               </p>
            </div>
          </div>

        </div>
      </section>

      <FooterV7 onVersionChange={onVersionChange} />
    </div>
  );
}

// --- Sub-Components ---

function RouteCard({ 
  route, title, purpose, icon, primaryCTA, secondaryCTA, onClick 
}: { 
  route: string; title: string; purpose: string; icon: React.ReactNode; primaryCTA: string; secondaryCTA: string; onClick?: () => void 
}) {
  return (
    <Card variant="solid" className="p-8 group hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 flex flex-col h-full bg-white">
      <div className="mb-6 flex justify-between items-start">
        <div className="p-3 bg-slate-50 rounded-xl text-slate-900 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
          {icon}
        </div>
        <span className="font-mono text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded">{route}</span>
      </div>
      
      <div className="mb-8 flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors cursor-pointer" onClick={onClick}>{title}</h3>
        <p className="text-slate-500 text-sm">{purpose}</p>
      </div>
      
      <div className="space-y-3 pt-6 border-t border-slate-50">
        <button 
          onClick={onClick}
          className="w-full flex items-center justify-between text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors group/btn text-left"
        >
          {primaryCTA}
          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
        </button>
        <button className="w-full text-left text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors">
          {secondaryCTA}
        </button>
      </div>
    </Card>
  );
}

function FlowNode({ label, title, isStart, isEnd }: { label: string; title: string; isStart?: boolean; isEnd?: boolean }) {
  return (
    <div className="flex flex-col items-center text-center relative z-10 group">
      <div className={`
        w-full py-4 px-2 rounded-xl border mb-3 transition-all duration-300
        ${isStart ? 'bg-slate-900 border-slate-900 text-white' : ''}
        ${isEnd ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : ''}
        ${!isStart && !isEnd ? 'bg-white border-slate-200 text-slate-900 group-hover:border-orange-300 group-hover:shadow-md' : ''}
      `}>
        <span className="font-bold text-sm block truncate">{title}</span>
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</span>
    </div>
  );
}

function SystemNode({ 
  title, icon, type, active, description, badge, className 
}: { 
  title: string; icon?: React.ReactNode; type?: 'input' | 'logic' | 'model'; active?: boolean; description?: string; badge?: string; className?: string 
}) {
  return (
    <motion.div 
      initial={false}
      animate={{ 
        scale: active ? 1.05 : 1,
        borderColor: active ? '#F97316' : '#E2E8F0',
        boxShadow: active ? '0 10px 30px -5px rgba(249, 115, 22, 0.15)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }}
      className={`
        bg-white rounded-2xl border border-slate-200 p-6 flex items-center gap-4 w-full max-w-md relative transition-colors duration-300
        ${className}
      `}
    >
      {badge && (
        <span className="absolute -top-3 -right-3 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          {badge}
        </span>
      )}
      <div className={`
        w-10 h-10 rounded-full flex items-center justify-center shrink-0
        ${active ? 'bg-orange-100 text-orange-600' : 'bg-slate-50 text-slate-500'}
      `}>
        {icon || <Layout className="w-5 h-5" />}
      </div>
      <div>
        <h4 className={`font-bold ${active ? 'text-orange-900' : 'text-slate-900'}`}>{title}</h4>
        {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
      </div>
    </motion.div>
  );
}

function ToolBadge({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`
      flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-300
      ${active 
        ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm' 
        : 'bg-white border-slate-100 text-slate-500 opacity-50'
      }
    `}>
      {icon}
      {label}
    </div>
  );
}

function OutputNode({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`
      py-3 px-2 rounded-lg border text-center text-xs font-bold transition-all duration-300
      ${active 
        ? 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm scale-105' 
        : 'bg-white border-slate-100 text-slate-400 opacity-50'
      }
    `}>
      {label}
    </div>
  );
}

function WorkflowCard({ 
  id, title, useCase, active, onClick, tags, output 
}: { 
  id: string; title: string; useCase: string; active: boolean; onClick: () => void; tags: string[]; output: string 
}) {
  return (
    <div 
      onClick={onClick}
      className={`
        p-6 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden group
        ${active 
          ? 'bg-white border-orange-500 shadow-xl shadow-orange-500/10 ring-1 ring-orange-500' 
          : 'bg-white border-slate-200 hover:border-orange-200 hover:shadow-lg'
        }
      `}
    >
      {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />}
      
      <div className="flex justify-between items-start mb-3">
        <h3 className={`font-bold text-lg ${active ? 'text-slate-900' : 'text-slate-700'}`}>{title}</h3>
        {active && <CheckCircle2 className="w-5 h-5 text-orange-500" />}
      </div>
      
      <p className="text-slate-500 text-sm mb-4 leading-relaxed">{useCase}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      <div className={`
        text-xs font-medium pt-3 border-t flex items-center gap-2
        ${active ? 'border-orange-100 text-orange-700' : 'border-slate-50 text-slate-400'}
      `}>
        <ArrowRight className="w-3 h-3" />
        Output: {output}
      </div>
    </div>
  );
}
