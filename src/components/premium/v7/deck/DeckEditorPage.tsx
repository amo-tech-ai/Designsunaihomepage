import React, { useState } from 'react';
import { 
  Layout, 
  Type, 
  Image as ImageIcon, 
  MoreHorizontal, 
  ChevronLeft, 
  Download, 
  Sparkles, 
  RefreshCw, 
  Plus, 
  Grid, 
  Play 
} from 'lucide-react';
import { NavbarV7 } from '../NavbarV7';
import { Button } from '../../../ui/design-system/Button';
import { Card } from '../../../ui/design-system/Card';
import { Badge } from '../../../ui/design-system/Badge';
import { Typography } from '../../../ui/design-system/Typography';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Slide {
  id: string;
  title: string;
  type: 'Title' | 'Problem' | 'Solution' | 'Market' | 'Team' | 'Traction';
  content: string;
  notes?: string;
}

// --- Mock Data ---
const INITIAL_SLIDES: Slide[] = [
  {
    id: '1',
    title: 'Title Slide',
    type: 'Title',
    content: 'TechNova AI\nAutonomous Logistics Reporting',
    notes: 'Start strong with the vision statement.'
  },
  {
    id: '2',
    title: 'The Problem',
    type: 'Problem',
    content: 'Logistics firms spend 40% of admin time on manual reporting.\nData is fragmented across 12+ systems.',
    notes: 'Focus on the pain point intensity.'
  },
  {
    id: '3',
    title: 'The Solution',
    type: 'Solution',
    content: 'AI Agents that autonomously aggregate, analyze, and report data in real-time.',
    notes: 'Highlight the "autonomous" aspect.'
  },
  {
    id: '4',
    title: 'Market Size',
    type: 'Market',
    content: 'TAM: $50B Global Logistics Software\nSAM: $4.2B Mid-Market US',
    notes: 'Source: Gartner 2024 Report'
  },
  {
    id: '5',
    title: 'Traction',
    type: 'Traction',
    content: '$50k ARR in 2 months\n400+ Waitlist',
    notes: 'Growth chart goes here.'
  }
];

export function DeckEditorPage({ onNavigate, onVersionChange }: { onNavigate?: (page: string) => void, onVersionChange?: (v: any) => void }) {
  const [slides, setSlides] = useState<Slide[]>(INITIAL_SLIDES);
  const [activeSlideId, setActiveSlideId] = useState<string>(INITIAL_SLIDES[0].id);
  const [isGenerating, setIsGenerating] = useState(false);

  const activeSlide = slides.find(s => s.id === activeSlideId) || slides[0];

  const handleAiFix = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      // Mock update
      setSlides(prev => prev.map(s => s.id === activeSlideId ? { 
        ...s, 
        content: s.content + '\n\n(AI Enhanced: Added clearer value proposition metrics)',
        notes: 'AI: I strengthened the argument here.'
      } : s));
    }, 1500);
  };

  return (
    <div className="h-screen flex flex-col bg-[#F5F5F7] text-slate-900 font-sans overflow-hidden">
      
      {/* Top Bar */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-20 relative">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => onVersionChange?.('dashboard')} className="pl-0 text-slate-500 hover:text-slate-900">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back
          </Button>
          <div className="h-6 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <Typography variant="h4" className="text-slate-900 m-0">Pitch Deck v1</Typography>
            <Badge variant="outline" className="text-xs">Draft</Badge>
          </div>
        </div>

        <div className="flex items-center gap-3">
           <div className="flex items-center text-xs text-slate-400 mr-4">
             <CheckCircleIcon className="w-3 h-3 mr-1.5 text-emerald-500" />
             Saved just now
           </div>
           <Button variant="outline" size="sm" leftIcon={<Play className="w-4 h-4" />}>
             Present
           </Button>
           <Button variant="primary" size="sm" leftIcon={<Download className="w-4 h-4" />}>
             Export PDF
           </Button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT: Slide Sorter */}
        <aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col shrink-0">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Slides ({slides.length})</span>
            <button className="p-1 hover:bg-slate-100 rounded text-slate-500 transition-colors">
              <Grid className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                onClick={() => setActiveSlideId(slide.id)}
                className={`
                  relative group cursor-pointer transition-all duration-200
                  ${activeSlideId === slide.id ? 'ring-2 ring-orange-500 ring-offset-2 rounded-lg' : ''}
                `}
              >
                {/* Number */}
                <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 w-6 text-right">
                  {index + 1}
                </span>

                {/* Thumbnail */}
                <div className={`
                  aspect-video bg-white rounded-lg border shadow-sm p-3 overflow-hidden select-none
                  ${activeSlideId === slide.id ? 'border-orange-500/20' : 'border-slate-200 group-hover:border-orange-200'}
                `}>
                  <div className="scale-[0.4] origin-top-left w-[250%] h-[250%] pointer-events-none">
                     <h1 className="text-xl font-bold text-slate-900 mb-2">{slide.title}</h1>
                     <p className="text-sm text-slate-500 line-clamp-3">{slide.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Slide Button */}
            <button className="w-full aspect-video rounded-lg border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-200 hover:bg-orange-50/10 transition-colors gap-2">
              <Plus className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider">Add Slide</span>
            </button>
          </div>
        </aside>

        {/* CENTER: Canvas */}
        <main className="flex-1 bg-slate-100 flex items-center justify-center p-12 relative overflow-auto">
          {/* Zoom/Fit Controls Mock */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-full shadow-sm border border-slate-200 px-3 py-1.5 flex items-center gap-2 text-xs font-medium text-slate-600">
             <button className="hover:text-slate-900">-</button>
             <span>100%</span>
             <button className="hover:text-slate-900">+</button>
          </div>

          {/* The Slide */}
          <motion.div
            key={activeSlideId}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="aspect-video w-full max-w-4xl bg-white shadow-2xl rounded-sm p-16 flex flex-col relative group"
          >
             {/* Text Content */}
             <div className="flex-1">
               <Typography variant="h2" className="text-4xl font-bold text-slate-900 mb-8 outline-none focus:bg-blue-50/50 rounded transition-colors p-1 -ml-1" contentEditable suppressContentEditableWarning>
                 {activeSlide.title}
               </Typography>
               
               <div className="prose prose-lg text-slate-600 max-w-none">
                 {activeSlide.content.split('\n').map((line, i) => (
                   <p key={i} className="mb-4 outline-none focus:bg-blue-50/50 rounded transition-colors p-1 -ml-1" contentEditable suppressContentEditableWarning>
                     {line}
                   </p>
                 ))}
               </div>
             </div>

             {/* Footer Mock */}
             <div className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-end text-sm text-slate-400">
                <span>Confidential</span>
                <span>TechNova AI • 2025</span>
             </div>

             {/* Selection Highlight Mock */}
             <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 pointer-events-none transition-colors" />
          </motion.div>
        </main>

        {/* RIGHT: Inspector / AI Tools */}
        <aside className="w-80 bg-white border-l border-slate-200 flex flex-col shrink-0 z-10 shadow-xl shadow-slate-200/50">
          
          <div className="p-6 border-b border-slate-100">
             <div className="flex items-center gap-2 text-orange-600 font-bold text-sm mb-1">
               <Sparkles className="w-4 h-4" />
               AI Assistant
             </div>
             <p className="text-xs text-slate-500">
               Context aware suggestions for <strong>{activeSlide.type}</strong> slide.
             </p>
          </div>

          <div className="p-6 space-y-6 flex-1 overflow-y-auto">
            
            {/* AI Actions */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Actions</p>
              
              <Button 
                variant="outline" 
                className="w-full justify-start text-left h-auto py-3 px-4 border-orange-200 bg-orange-50 hover:bg-orange-100 text-orange-800"
                onClick={handleAiFix}
                isLoading={isGenerating}
                leftIcon={<RefreshCw className="w-4 h-4" />}
              >
                <div>
                  <span className="block text-sm font-bold">Rewrite for Impact</span>
                  <span className="block text-[10px] opacity-70 font-normal mt-0.5">Make punchier & data-driven</span>
                </div>
              </Button>

              <Button variant="ghost" className="w-full justify-start h-10 px-3 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50">
                <ImageIcon className="w-4 h-4 mr-2" />
                Generate Image
              </Button>

               <Button variant="ghost" className="w-full justify-start h-10 px-3 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50">
                <Type className="w-4 h-4 mr-2" />
                Check Grammar
              </Button>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Slide Layouts */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Layouts</p>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-video bg-slate-50 border border-slate-200 rounded hover:border-orange-500 cursor-pointer transition-colors" />
                ))}
              </div>
            </div>

             <div className="h-px bg-slate-100" />

             {/* Speaker Notes */}
             <div className="space-y-2">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Speaker Notes</p>
               <textarea 
                 className="w-full h-32 p-3 text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-lg resize-none focus:outline-none focus:border-orange-500 transition-colors"
                 value={activeSlide.notes}
                 readOnly
               />
             </div>

          </div>
        </aside>

      </div>
    </div>
  );
}

function CheckCircleIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}
