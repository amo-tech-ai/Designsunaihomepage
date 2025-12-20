import React from 'react';
import { NavbarV7 } from './NavbarV7';
import { FooterV7 } from './FooterV7';
import { Button } from '../../ui/design-system/Button';
import { Card } from '../../ui/design-system/Card';
import { Badge } from '../../ui/design-system/Badge';
import { Typography } from '../../ui/design-system/Typography';
import { 
  Download, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Globe, 
  Users, 
  Target 
} from 'lucide-react';

interface InvestorSharePageProps {
  onNavigateToBooking?: () => void;
  onNavigateToHome?: () => void;
  onVersionChange?: (version: any) => void;
}

export function InvestorSharePage({ onNavigateToBooking, onNavigateToHome, onVersionChange }: InvestorSharePageProps) {
  
  // Mock Data mimicking what the AI would generate for a "Founder" workflow
  const data = {
    company: "TechNova AI",
    valuation: "$12M (Cap)",
    ask: "$1.5M Seed",
    summary: "TechNova is automating the $50B logistics reporting market using autonomous AI agents. We reduce reporting time by 95% for mid-market logistics firms.",
    highlights: [
      "Waitlist of 400+ mid-market logistics companies",
      "$50k ARR in closed beta (2 months)",
      "Founding team from Uber Freight and Google Brain"
    ],
    market: {
      tam: "$50B",
      sam: "$4.2B",
      som: "$150M"
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToBooking} onNavigateToAbout={() => onVersionChange?.('about')} onVersionChange={onVersionChange} />
      
      {/* Hero / Header */}
      <header className="pt-32 pb-12 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-2" />
                  Live Deal
                </Badge>
                <span className="text-xs font-mono text-slate-400">ID: #INV-8821X</span>
              </div>
              <Typography variant="h1" className="text-4xl md:text-5xl mb-4 text-slate-900">
                {data.company} Investor Snapshot
              </Typography>
              <div className="flex items-center gap-4 text-slate-500">
                <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> San Francisco, CA</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 12 Employees</span>
                <span className="flex items-center gap-1.5"><Target className="w-4 h-4" /> Series Seed</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 min-w-[200px]">
              <Button variant="primary" onClick={onNavigateToBooking} rightIcon={<Calendar className="w-4 h-4" />}>
                Book Founder Meeting
              </Button>
              <Button variant="outline" rightIcon={<Download className="w-4 h-4" />}>
                Download Deck (PDF)
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        
        {/* Executive Summary */}
        <section>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Typography variant="h3" className="text-slate-900">Executive Summary</Typography>
              <p className="text-lg text-slate-600 leading-relaxed">
                {data.summary}
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Traction Highlights
                </h4>
                <ul className="space-y-3">
                  {data.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Metrics Card */}
            <div className="md:col-span-1">
              <Card variant="solid" className="p-6 space-y-6 h-full border-slate-200 shadow-xl shadow-slate-900/5">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Target Raise</div>
                  <div className="text-3xl font-bold text-slate-900">{data.ask}</div>
                </div>
                <div className="h-px bg-slate-100" />
                 <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Valuation Cap</div>
                  <div className="text-3xl font-bold text-slate-900">{data.valuation}</div>
                </div>
                 <div className="h-px bg-slate-100" />
                 <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Runway</div>
                  <div className="text-3xl font-bold text-slate-900">18 Months</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section>
          <Typography variant="h3" className="text-slate-900 mb-8">Market Opportunity</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="outline" className="p-6 text-center hover:border-orange-200 transition-colors bg-white">
              <div className="text-4xl font-bold text-slate-900 mb-2">{data.market.tam}</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">TAM (Total Addressable)</div>
              <p className="text-xs text-slate-400 mt-2">Global Logistics Reporting Software</p>
            </Card>
            <Card variant="outline" className="p-6 text-center hover:border-orange-200 transition-colors bg-white">
              <div className="text-4xl font-bold text-slate-900 mb-2">{data.market.sam}</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">SAM (Serviceable)</div>
              <p className="text-xs text-slate-400 mt-2">Mid-Market US Firms</p>
            </Card>
             <Card variant="outline" className="p-6 text-center hover:border-orange-200 transition-colors bg-white">
              <div className="text-4xl font-bold text-slate-900 mb-2">{data.market.som}</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">SOM (Obtainable)</div>
              <p className="text-xs text-slate-400 mt-2">Target for Year 1-2</p>
            </Card>
          </div>
        </section>

        {/* Security & Disclaimer */}
        <div className="bg-slate-50 rounded-xl p-6 flex gap-4 items-start border border-slate-100">
          <ShieldCheck className="w-6 h-6 text-slate-400 shrink-0" />
          <div className="text-xs text-slate-500 leading-relaxed">
            <strong className="block text-slate-700 mb-1">Confidential Investor Material</strong>
            This document is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. All information presented herein is proprietary and confidential. Access is monitored.
          </div>
        </div>

      </main>

      <FooterV7 onNavigateToAbout={() => onVersionChange?.('about')} onVersionChange={onVersionChange} />
    </div>
  );
}
