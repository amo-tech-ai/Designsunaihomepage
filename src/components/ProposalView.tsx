import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Headphones, 
  Building2, 
  Layers, 
  Zap, 
  Code2, 
  Smartphone,
  Globe,
  Lock,
  Calendar,
  CreditCard,
  Edit2,
  Clock,
  Check
} from 'lucide-react';
import { Button } from './ui/design-system/Button';
import { Card } from './ui/design-system/Card';
import { Badge } from './ui/design-system/Badge';
import { Typography } from './ui/design-system/Typography';

// Mock Proposal Data
const proposalData = {
  projectTitle: "AI-Powered Customer Support Platform",
  projectType: "Enterprise Web Application",
  summary: {
    goal: {
      title: "Business Goal",
      points: ["Reduce support ticket volume by 60%", "Scale operations without hiring", "Improve CSAT scores"]
    },
    solution: {
      title: "Recommended Solution",
      points: ["AI-Powered Web Application", "Smart Personalization Engine", "Scalable Cloud Architecture"]
    },
    why: {
      title: "Why This Approach",
      points: ["Faster execution (8-10 weeks)", "Lower operational overhead", "Built for future growth"]
    }
  },
  scope: [
    { icon: Zap, label: "AI Content Generation", tag: "AI-Recommended" },
    { icon: Layers, label: "Smart Personalization" },
    { icon: Code2, label: "Analytics Dashboard" },
    { icon: Lock, label: "Secure Authentication", tag: "Enterprise" },
    { icon: Smartphone, label: "Mobile Responsive" },
    { icon: Globe, label: "Multi-language Support" }
  ],
  timeline: {
    phases: [
      { name: "Discovery & Strategy", duration: "1 week" },
      { name: "Development", duration: "5-7 weeks" },
      { name: "Testing & Handoff", duration: "1 week" }
    ],
    totalDuration: "8-10 Weeks"
  },
  investment: {
    range: "$45,000 - $65,000",
    includes: ["Design & Development", "AI Model Fine-tuning", "30 Days Support"]
  }
};

export function ProposalView() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-32 font-sans text-slate-900">
      
      <div className="max-w-5xl mx-auto px-6 pt-12">
        
        {/* 1. Header: Project Confirmation */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Typography variant="h1" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {proposalData.projectTitle}
              </Typography>
              <Badge variant="success" className="bg-emerald-50 text-emerald-700 border-emerald-100 px-3 py-1">
                <Check className="w-3 h-3 mr-1.5" />
                AI Analysis Complete
              </Badge>
            </div>
            <Typography variant="body" className="text-slate-500 text-lg">
              {proposalData.projectType}
            </Typography>
          </div>
          <Button variant="ghost" size="sm" leftIcon={<Edit2 className="w-4 h-4" />}>
            Edit details
          </Button>
        </div>

        {/* 2. AI Summary (Hero Section) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Card variant="outline" className="p-0 overflow-hidden bg-white shadow-lg shadow-slate-200/40 border-slate-200">
            <div className="bg-slate-50/50 px-8 py-4 border-b border-slate-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">AI Project Summary</span>
            </div>
            
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* Column A: Goal */}
              <div className="p-8">
                <Typography variant="h4" className="mb-6 font-bold text-slate-900">
                  {proposalData.summary.goal.title}
                </Typography>
                <ul className="space-y-4">
                  {proposalData.summary.goal.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                      <span className="text-slate-600 font-medium leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column B: Solution */}
              <div className="p-8 bg-orange-50/30">
                <Typography variant="h4" className="mb-6 font-bold text-slate-900">
                  {proposalData.summary.solution.title}
                </Typography>
                <ul className="space-y-4">
                  {proposalData.summary.solution.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                      <span className="text-slate-900 font-medium leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column C: Why */}
              <div className="p-8">
                <Typography variant="h4" className="mb-6 font-bold text-slate-900">
                  {proposalData.summary.why.title}
                </Typography>
                <ul className="space-y-4">
                  {proposalData.summary.why.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                      <span className="text-slate-600 font-medium leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* 3. Scope & Capabilities Breakdown */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Typography variant="h3" className="mb-6 font-bold text-slate-900">Scope & Capabilities</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {proposalData.scope.map((item, i) => (
              <div key={i} className="flex items-center p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 mr-4 shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{item.label}</div>
                  {item.tag && (
                    <div className="text-[10px] font-bold text-orange-600 uppercase tracking-wide mt-0.5">{item.tag}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. Timeline & Investment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Timeline */}
          <div className="md:col-span-2">
            <Typography variant="h3" className="mb-6 font-bold text-slate-900">Estimated Timeline</Typography>
            <Card variant="outline" className="p-8 bg-white">
              <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-100" />
                
                {proposalData.timeline.phases.map((phase, i) => (
                  <div key={i} className="flex items-start gap-6 relative">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-white bg-slate-900 shadow-sm z-10 shrink-0 mt-1" />
                    <div className="flex-1 flex justify-between items-start">
                      <span className="font-semibold text-slate-900">{phase.name}</span>
                      <span className="text-slate-500 text-sm font-medium">{phase.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                 <span className="text-slate-500 font-medium">Total Duration</span>
                 <span className="text-lg font-bold text-slate-900">{proposalData.timeline.totalDuration}</span>
              </div>
            </Card>
          </div>

          {/* Investment */}
          <div>
            <Typography variant="h3" className="mb-6 font-bold text-slate-900">Investment</Typography>
            <Card variant="solid" className="p-8 bg-slate-900 text-white h-[calc(100%-3rem)] flex flex-col justify-between shadow-xl shadow-slate-900/10">
              <div>
                <Typography variant="body" className="text-slate-400 text-sm uppercase tracking-wider font-bold mb-2">Estimated Range</Typography>
                <div className="text-3xl font-bold mb-6 text-white">{proposalData.investment.range}</div>
                
                <ul className="space-y-3">
                  {proposalData.investment.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-xs text-slate-500 leading-relaxed border-t border-slate-800 pt-4">
                *Final scope confirmed before commitment. No hidden fees.
              </div>
            </Card>
          </div>
        </motion.div>

        {/* 5. Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-12 pb-12">
           <div className="flex items-center gap-3">
             <ShieldCheck className="w-5 h-5 text-slate-400" />
             <span className="text-sm font-semibold text-slate-600">Secure & Private Data</span>
           </div>
           <div className="flex items-center gap-3">
             <Headphones className="w-5 h-5 text-slate-400" />
             <span className="text-sm font-semibold text-slate-600">Human + AI Support</span>
           </div>
           <div className="flex items-center gap-3">
             <Building2 className="w-5 h-5 text-slate-400" />
             <span className="text-sm font-semibold text-slate-600">Enterprise-Ready Architecture</span>
           </div>
        </div>

      </div>

      {/* 6. Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-2xl z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
           <div className="hidden md:flex items-center gap-2 text-sm text-slate-500 font-medium">
             <div className="w-20 h-1 bg-slate-100 rounded-full overflow-hidden">
               <div className="w-full h-full bg-orange-500" />
             </div>
             Step 5 of 5
           </div>

           <div className="flex items-center gap-4 w-full md:w-auto justify-end">
             <Button variant="ghost" className="text-slate-500 hover:text-slate-900">
               Edit responses
             </Button>
             <Button variant="primary" className="shadow-lg shadow-orange-500/20 px-8">
               Confirm Project & Proceed
               <ArrowRight className="w-4 h-4 ml-2" />
             </Button>
           </div>
        </div>
      </div>

    </div>
  );
}
