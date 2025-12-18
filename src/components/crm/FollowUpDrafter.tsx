import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Send, Copy, RefreshCw, Wand2, ChevronDown, Check, Mail } from 'lucide-react';
import { Button } from '../ui/design-system/Button';
import { Typography } from '../ui/design-system/Typography';
import { Badge } from '../ui/design-system/Badge';
import { cn } from '../ui/design-system/utils';

interface FollowUpDrafterProps {
  leadName: string;
  companyName: string;
  lastInteraction?: string;
  onClose: () => void;
  onSend: () => void;
}

type Tone = 'Professional' | 'Casual' | 'Urgent';
type Scenario = 'Post-Discovery' | 'Proposal Bump' | 'Check-in' | 'Meeting Request';

const TEMPLATES: Record<Scenario, Record<Tone, { subject: string; body: string }>> = {
  'Post-Discovery': {
    'Professional': {
      subject: "Reflecting on our conversation regarding {company}",
      body: "Hi {name},\n\nThank you for taking the time to speak with me today. It was a pleasure learning more about {company}'s vision.\n\nBased on our discussion, I'm confident we can help you achieve your goals. I'm currently outlining the next steps and will have a formal proposal over to you by tomorrow.\n\nBest regards,"
    },
    'Casual': {
      subject: "Great chat! / {company}",
      body: "Hey {name},\n\nLoved our chat earlier. really excited about what {company} is building.\n\nI'll shoot over that proposal we talked about tomorrow. Let me know if anything else pops up in the meantime!\n\nCheers,"
    },
    'Urgent': {
      subject: "Next steps for {company}",
      body: "Hi {name},\n\nThanks for the call. To keep our momentum going and hit that Q3 target we discussed, I'll prioritize your proposal and send it over tomorrow morning.\n\nLet's keep moving,\n"
    }
  },
  'Proposal Bump': {
    'Professional': {
      subject: "Following up on our proposal for {company}",
      body: "Hi {name},\n\nI wanted to circle back on the proposal I sent last week. Have you had a chance to review it with the team?\n\nI'm happy to jump on a quick call to address any questions or refine the scope if needed.\n\nBest,"
    },
    'Casual': {
      subject: "Any thoughts? / {company}",
      body: "Hey {name},\n\nJust floating this to the top of your inbox. Had a chance to peek at the proposal yet?\n\nNo rush, just wanted to see if you needed anything from me.\n\nBest,"
    },
    'Urgent': {
      subject: "Timeline for {company} project",
      body: "Hi {name},\n\nChecking in on the proposal. To ensure we can secure the resources for your desired start date, we'd need to finalize things by Friday.\n\nLet me know where you stand.\n\nBest,"
    }
  },
  'Check-in': {
    'Professional': {
      subject: "Checking in / {company}",
      body: "Hi {name},\n\nIt's been a little while since we last spoke. I was thinking about {company} and wanted to see how things are progressing with your initiatives.\n\nIs this project still a priority for this quarter?\n\nRegards,"
    },
    'Casual': {
      subject: "Thinking of {company}",
      body: "Hey {name},\n\nLong time no chat! How's everything going at {company}?\n\nSaw some cool news about your industry recently and thought of you. Hope you're well!\n\nCheers,"
    },
    'Urgent': {
      subject: "Updates on {company} project?",
      body: "Hi {name},\n\nAre we still moving forward? I have some availability opening up next month and wanted to give you first right of refusal before I book it out.\n\nLet me know,\n"
    }
  },
  'Meeting Request': {
    'Professional': {
      subject: "Meeting request: {company} strategy",
      body: "Hi {name},\n\nI'd love to schedule a brief time to discuss how we can support {company}'s upcoming goals. Do you have 15 minutes this week?\n\nBest,"
    },
    'Casual': {
      subject: "Quick chat?",
      body: "Hey {name},\n\nDo you have 10 mins this week to catch up? I have some ideas for {company} that I'd love to run by you.\n\nBest,"
    },
    'Urgent': {
      subject: "Time sensitive: {company} strategy",
      body: "Hi {name},\n\nWe have a window of opportunity to execute on this strategy before the quarter ends. Can we speak tomorrow to align?\n\nBest,"
    }
  }
};

export function FollowUpDrafter({ leadName, companyName, onClose, onSend }: FollowUpDrafterProps) {
  const [scenario, setScenario] = useState<Scenario>('Post-Discovery');
  const [tone, setTone] = useState<Tone>('Professional');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // "AI" Generation Effect
  useEffect(() => {
    setIsGenerating(true);
    const timer = setTimeout(() => {
      const template = TEMPLATES[scenario][tone];
      setSubject(template.subject.replace(/{company}/g, companyName).replace(/{name}/g, leadName));
      setBody(template.body.replace(/{company}/g, companyName).replace(/{name}/g, leadName.split(' ')[0]));
      setIsGenerating(false);
    }, 600); // Fake delay for "thinking" feel

    return () => clearTimeout(timer);
  }, [scenario, tone, leadName, companyName]);

  const handleCopy = () => {
    navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
            <Wand2 className="w-4 h-4" />
          </div>
          <div>
            <Typography variant="h4" className="text-base font-bold">AI Follow-Up Assistant</Typography>
            <div className="text-xs text-slate-500">Drafting for {leadName}</div>
          </div>
        </div>
        <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {/* Controls */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Context / Scenario</label>
            <div className="relative">
              <select 
                value={scenario}
                onChange={(e) => setScenario(e.target.value as Scenario)}
                className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer"
              >
                {Object.keys(TEMPLATES).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tone</label>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              {(['Professional', 'Casual', 'Urgent'] as Tone[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={cn(
                    "flex-1 py-1.5 text-xs font-bold rounded-md transition-all",
                    tone === t ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="relative">
           {isGenerating && (
             <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
               <div className="flex items-center gap-2 text-orange-600 font-medium text-sm animate-pulse">
                 <RefreshCw className="w-4 h-4 animate-spin" /> Generating draft...
               </div>
             </div>
           )}
           
           <div className="space-y-4">
             <div>
               <label className="text-xs font-bold text-slate-400 mb-1 block">Subject Line</label>
               <input 
                 type="text" 
                 value={subject}
                 onChange={(e) => setSubject(e.target.value)}
                 className="w-full px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-slate-300 transition-colors"
               />
             </div>
             <div>
               <label className="text-xs font-bold text-slate-400 mb-1 block">Email Body</label>
               <textarea 
                 value={body}
                 onChange={(e) => setBody(e.target.value)}
                 className="w-full h-64 px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg text-sm leading-relaxed text-slate-800 resize-none focus:outline-none focus:bg-white focus:border-slate-300 transition-colors font-sans"
               />
             </div>
           </div>
        </div>

      </div>

      {/* Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={handleCopy} leftIcon={copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}>
          {copied ? "Copied!" : "Copy Text"}
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onClose}>
            Discard
          </Button>
          <Button variant="primary" size="sm" onClick={onSend} leftIcon={<Send className="w-4 h-4" />}>
            Send Email
          </Button>
        </div>
      </div>
    </div>
  );
}
