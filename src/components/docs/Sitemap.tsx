import React from 'react';
import { Typography } from '../ui/design-system/Typography';
import { Card } from '../ui/design-system/Card';
import { Badge } from '../ui/design-system/Badge';
import { ArrowRight, Home, Briefcase, Zap, FileText, Calendar, LayoutDashboard } from 'lucide-react';

export function Sitemap() {
  const pages = [
    {
      title: 'Home',
      path: '/',
      icon: Home,
      description: 'Storytelling & Conversion Entrance',
      primaryCTA: 'Start AI Brief (To Wizard)',
      secondaryCTA: 'Talk to Expert (To WhatsApp)'
    },
    {
      title: 'Services',
      path: '/services',
      icon: Briefcase,
      description: 'Bento Grid of Capabilities',
      primaryCTA: 'Start AI Brief (Pre-selected)',
      secondaryCTA: 'View Details'
    },
    {
      title: 'AI Brief Wizard',
      path: '/wizard',
      icon: Zap,
      description: '5-Step Interactive Intake',
      primaryCTA: 'Generate Proposal',
      secondaryCTA: 'Save for Later'
    },
    {
      title: 'Proposal Preview',
      path: '/proposal',
      icon: FileText,
      description: 'Roadmap & Pricing Output',
      primaryCTA: 'Secure Slot (To Booking)',
      secondaryCTA: 'Download PDF'
    },
    {
      title: 'Booking & Payment',
      path: '/booking',
      icon: Calendar,
      description: 'Stripe & Calendar Integration',
      primaryCTA: 'Pay & Confirm',
      secondaryCTA: 'Reschedule'
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
      description: 'Client View of Progress',
      primaryCTA: 'View Active Project',
      secondaryCTA: 'Message Team'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="space-y-4">
           <Badge variant="orange">Architecture</Badge>
           <Typography variant="h1" className="text-slate-900 dark:text-white">Site Architecture & Routing</Typography>
           <Typography variant="body" className="max-w-2xl">
             Visual map of the application flow, ensuring no dead ends and clear conversion paths.
           </Typography>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <Card key={index} variant="glass" className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <page.icon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <div className="flex flex-col">
                   <span className="font-mono text-xs text-slate-400">{page.path}</span>
                   <Typography variant="h4" className="text-slate-900 dark:text-white">{page.title}</Typography>
                </div>
              </div>
              
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                {page.description}
              </p>
              
              <div className="space-y-3 mt-auto pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium uppercase tracking-wider">Primary CTA</span>
                  <span className="text-orange-600 font-bold flex items-center gap-1">
                    {page.primaryCTA} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium uppercase tracking-wider">Secondary CTA</span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {page.secondaryCTA}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Flow Diagram (Simplified visual representation) */}
        <div className="mt-16 p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
           <Typography variant="h3" className="mb-8 text-center text-slate-900 dark:text-white">Conversion Flow</Typography>
           <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
              
              <div className="flex flex-col items-center gap-2">
                <div className="px-4 py-2 bg-slate-900 text-white rounded-lg font-bold">Home / Services</div>
                <span className="text-xs text-slate-500">Interest</span>
              </div>
              
              <ArrowRight className="text-slate-300 w-6 h-6 rotate-90 md:rotate-0" />
              
              <div className="flex flex-col items-center gap-2">
                <div className="px-4 py-2 bg-orange-500 text-white rounded-lg font-bold shadow-lg shadow-orange-500/30">AI Wizard</div>
                <span className="text-xs text-slate-500">Qualification</span>
              </div>
              
              <ArrowRight className="text-slate-300 w-6 h-6 rotate-90 md:rotate-0" />
              
              <div className="flex flex-col items-center gap-2">
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg font-bold">Proposal</div>
                <span className="text-xs text-slate-500">Value</span>
              </div>
              
              <ArrowRight className="text-slate-300 w-6 h-6 rotate-90 md:rotate-0" />
              
              <div className="flex flex-col items-center gap-2">
                <div className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 border border-emerald-200 dark:border-emerald-800 rounded-lg font-bold">Booking</div>
                <span className="text-xs text-slate-500">Conversion</span>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
}
