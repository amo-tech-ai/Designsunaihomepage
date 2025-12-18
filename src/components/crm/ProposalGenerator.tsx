import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Wand2, Download, Send, Save, 
  CheckCircle2, AlertCircle, FileText, DollarSign, Calendar, Sparkles
} from 'lucide-react';
import { Typography } from '../ui/design-system/Typography';
import { Button } from '../ui/design-system/Button';
import { Card } from '../ui/design-system/Card';
import { Badge } from '../ui/design-system/Badge';
import { cn } from '../ui/design-system/utils';
import { Lead } from '../../context/LeadContext';
import { toast } from 'sonner@2.0.3';

interface ProposalGeneratorProps {
  lead: Lead;
  onBack: () => void;
  onSend: () => void;
}

interface ProposalData {
  title: string;
  executiveSummary: string;
  scope: string[];
  budgetMin: number;
  budgetMax: number;
  timelineWeeks: number;
  includeMaintenance: boolean;
}

const DEFAULT_SCOPE = [
  'Discovery & Strategy Phase',
  'UI/UX Design System',
  'Frontend Development (React/Next.js)',
  'Backend Infrastructure (Supabase)',
  'AI Model Integration',
  'QA & Testing',
];

export function ProposalGenerator({ lead, onBack, onSend }: ProposalGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('summary');
  
  const [data, setData] = useState<ProposalData>({
    title: `AI Transformation Project for ${lead.companyName}`,
    executiveSummary: '',
    scope: [],
    budgetMin: lead.budget || 20000,
    budgetMax: (lead.budget || 20000) * 1.5,
    timelineWeeks: 8,
    includeMaintenance: true,
  });

  // Simulate AI Generation
  const handleAIGenerate = () => {
    setIsGenerating(true);
    toast.info("AI Architect Active", { description: "Analyzing lead profile and industry standards..." });
    
    // Simulate thinking time
    setTimeout(() => {
      setData(prev => ({
        ...prev,
        executiveSummary: `We propose a comprehensive AI-driven solution to elevate ${lead.companyName}'s digital presence. By leveraging Sun AI's "Luxury Tech" architecture, we will build a scalable, secure, and highly interactive platform tailored to your specific needs.\n\nOur approach focuses on three core pillars: Aesthetic Excellence, Intelligent Automation, and Enterprise-Grade Security.`,
        scope: [
          'Discovery & Strategy Phase',
          'UI/UX Design System (Luxury Tech Aesthetic)',
          'Frontend Development (React/Next.js)',
          'Custom AI Chatbot Integration',
          'Real-time Analytics Dashboard',
          'Post-Launch Support (30 Days)'
        ],
        budgetMin: lead.budget || 30000,
        budgetMax: (lead.budget || 30000) * 1.25,
        timelineWeeks: 10
      }));
      setIsGenerating(false);
      toast.success("Proposal Generated", { description: "Draft has been updated with AI suggestions." });
    }, 1500);
  };

  const handleSaveDraft = () => {
    toast.success("Draft Saved", { description: "Your changes have been saved to the cloud." });
  };

  const toggleScopeItem = (item: string) => {
    if (data.scope.includes(item)) {
      setData(prev => ({ ...prev, scope: prev.scope.filter(i => i !== item) }));
    } else {
      setData(prev => ({ ...prev, scope: [...prev.scope, item] }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <Typography variant="h4" className="text-slate-900 font-bold">New Proposal</Typography>
              <div className="text-xs text-slate-500 flex items-center gap-2">
                Drafting for <span className="font-medium text-slate-900">{lead.companyName}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                Last saved: Just now
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={handleSaveDraft} leftIcon={<Save className="w-4 h-4" />}>Save Draft</Button>
            <Button variant="outline" size="sm" leftIcon={<Download className="w-4 h-4" />}>Preview PDF</Button>
            <Button variant="primary" size="sm" onClick={onSend} leftIcon={<Send className="w-4 h-4" />}>Send Proposal</Button>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8">
        
        {/* LEFT PANEL: Controls & Inputs */}
        <div className="lg:col-span-4 space-y-8 h-fit lg:sticky lg:top-28">
          
          {/* AI Action Card */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Wand2 className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <Typography variant="h5" className="text-white mb-2 font-bold">AI Architect</Typography>
              <p className="text-slate-300 text-sm mb-4">
                Auto-fill this proposal based on {lead.name}'s wizard responses and industry standards.
              </p>
              <Button 
                variant="outline" 
                className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40"
                onClick={handleAIGenerate}
                isLoading={isGenerating}
                leftIcon={<Sparkles className="w-4 h-4 text-orange-400" />}
              >
                {isGenerating ? 'Analyzing...' : 'Auto-Generate Proposal'}
              </Button>
            </div>
          </Card>

          {/* Form Controls */}
          <div className="space-y-6">
            
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Project Title</label>
              <input 
                type="text" 
                value={data.title}
                onChange={(e) => setData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none text-sm font-medium transition-all"
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Scope & Deliverables</label>
              <div className="space-y-2">
                {DEFAULT_SCOPE.map((item) => (
                  <label key={item} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-slate-300 transition-all">
                    <div className={cn(
                      "w-5 h-5 rounded-md border flex items-center justify-center transition-colors",
                      data.scope.includes(item) ? "bg-orange-500 border-orange-500" : "border-slate-300 bg-slate-50"
                    )}>
                      {data.scope.includes(item) && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={data.scope.includes(item)}
                      onChange={() => toggleScopeItem(item)}
                    />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Investment Range</label>
              <Card className="p-4 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-500 text-xs">Range</span>
                  <span className="font-mono text-sm font-bold text-slate-900">
                    ${(data.budgetMin / 1000).toFixed(0)}k - ${(data.budgetMax / 1000).toFixed(0)}k
                  </span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="100000" 
                  step="5000"
                  value={data.budgetMin}
                  onChange={(e) => setData(prev => ({ ...prev, budgetMin: parseInt(e.target.value) }))}
                  className="w-full accent-slate-900"
                />
              </Card>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Timeline</label>
              <Card className="p-4 bg-white flex items-center justify-between">
                 <span className="text-sm font-medium text-slate-600">Project Duration</span>
                 <div className="flex items-center gap-2">
                   <button onClick={() => setData(prev => ({...prev, timelineWeeks: Math.max(1, prev.timelineWeeks - 1)}))} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center">-</button>
                   <span className="font-mono font-bold w-8 text-center">{data.timelineWeeks}</span>
                   <button onClick={() => setData(prev => ({...prev, timelineWeeks: prev.timelineWeeks + 1}))} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center">+</button>
                   <span className="text-xs text-slate-500 ml-1">Weeks</span>
                 </div>
              </Card>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL: Live Preview (The Document) */}
        <div className="lg:col-span-8">
           <div className="bg-slate-200 p-8 rounded-xl overflow-auto h-[calc(100vh-140px)] shadow-inner">
              
              {/* A4 Page Container */}
              <motion.div 
                layout
                className="bg-white w-full max-w-[794px] mx-auto min-h-[1123px] shadow-2xl p-16 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Proposal Header */}
                <div className="flex justify-between items-start mb-16 border-b border-slate-100 pb-8">
                   <div>
                     <div className="flex items-center gap-2 mb-4">
                       <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">S</div>
                       <span className="font-bold text-xl tracking-tight text-slate-900">SUN AI</span>
                     </div>
                     <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Premium Digital Agency</div>
                   </div>
                   <div className="text-right">
                     <div className="text-sm font-medium text-slate-900">Proposal For</div>
                     <div className="text-xl font-serif text-slate-900 mt-1">{lead.companyName}</div>
                     <div className="text-sm text-slate-500 mt-1">{new Date().toLocaleDateString()}</div>
                   </div>
                </div>

                {/* Proposal Title */}
                <div className="mb-12">
                   <h1 className="text-4xl font-serif text-slate-900 leading-tight mb-4">
                     {data.title}
                   </h1>
                   <div className="h-1 w-20 bg-orange-500"></div>
                </div>

                {/* Executive Summary */}
                <div className="mb-12">
                   <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Executive Summary</h2>
                   {data.executiveSummary ? (
                     <p className="text-slate-700 leading-relaxed whitespace-pre-wrap font-serif text-lg">
                       {data.executiveSummary}
                     </p>
                   ) : (
                     <div className="h-24 bg-slate-50 border-2 border-dashed border-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                       Click "Auto-Generate Proposal" to draft summary...
                     </div>
                   )}
                </div>

                {/* Scope of Work */}
                <div className="mb-12">
                   <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Scope of Work</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {data.scope.length > 0 ? (
                       data.scope.map((item, i) => (
                         <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                           <div className="mt-1 w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                           <span className="text-slate-700 font-medium">{item}</span>
                         </div>
                       ))
                     ) : (
                        <div className="col-span-2 text-slate-400 italic text-sm">No scope items selected.</div>
                     )}
                   </div>
                </div>

                {/* Investment & Timeline */}
                <div className="grid grid-cols-2 gap-8 mb-16 pt-8 border-t border-slate-100">
                   <div>
                     <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Estimated Investment</h2>
                     <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-slate-900">${(data.budgetMin / 1000).toFixed(0)}k</span>
                        <span className="text-slate-400 text-lg">-</span>
                        <span className="text-3xl font-bold text-slate-900">${(data.budgetMax / 1000).toFixed(0)}k</span>
                     </div>
                     <p className="text-xs text-slate-500 mt-2">Includes technical discovery, design, development, and deployment.</p>
                   </div>
                   <div>
                     <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Estimated Timeline</h2>
                     <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-slate-900">{data.timelineWeeks}</span>
                        <span className="text-lg text-slate-600">Weeks</span>
                     </div>
                     <p className="text-xs text-slate-500 mt-2">Timeline begins upon contract signature and deposit.</p>
                   </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-16 left-16 right-16 pt-8 border-t border-slate-100 flex justify-between items-end text-xs text-slate-400">
                   <div>
                     <div>Sun AI Agency</div>
                     <div>San Francisco, CA</div>
                   </div>
                   <div className="text-right">
                     Page 1 of 1
                   </div>
                </div>

              </motion.div>
           </div>
        </div>

      </div>
    </div>
  );
}
