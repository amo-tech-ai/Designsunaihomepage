import React from 'react';
import { Typography } from './Typography';
import { Button } from './Button';
import { Card } from './Card';
import { Badge } from './Badge';
import { ArrowRight, ChevronRight, Play, Star, Layout, MessageSquare, BarChart3, Smartphone, Monitor, Tablet } from 'lucide-react';
import { NavbarV7 } from '../../premium/v7/NavbarV7';
import { FooterV7 } from '../../premium/v7/FooterV7';

interface StyleGuideProps {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function StyleGuide({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: StyleGuideProps) {
  
  const handleNav = (route: string) => {
    if (onVersionChange) onVersionChange(route);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans">
      <NavbarV7 
        onNavigateToWhatsApp={onNavigateToWhatsApp}
        onNavigateToAbout={onNavigateToAbout}
        onVersionChange={onVersionChange}
      />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-20">
        
        {/* Header Section */}
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded-full tracking-wide uppercase border border-orange-100">
            Style Guide v1.0
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A]">
            Sun AI Design System
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            A premium, intelligent design language for high-end AI interfaces. Focused on
            clarity, subtle interactions, and deep luxury aesthetics.
          </p>
        </div>

        <hr className="border-slate-100" />

        {/* Color Palette */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight">Color Palette</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Slate 900 */}
            <div className="space-y-3 group cursor-pointer">
              <div className="h-32 rounded-2xl bg-[#0F172A] shadow-xl shadow-slate-900/10 ring-1 ring-black/5 transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="font-bold text-lg text-slate-900">Slate 900</div>
                  <div className="text-sm text-slate-500">Primary Brand / Hero BG</div>
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase">#0F172A</div>
              </div>
            </div>

            {/* Orange 500 */}
            <div className="space-y-3 group cursor-pointer">
              <div className="h-32 rounded-2xl bg-[#FF6A3D] shadow-xl shadow-orange-500/20 ring-1 ring-orange-500/10 transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="font-bold text-lg text-slate-900">Orange 500</div>
                  <div className="text-sm text-slate-500">Primary Accent / CTAs</div>
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase">#FF6A3D</div>
              </div>
            </div>

            {/* Warm White */}
            <div className="space-y-3 group cursor-pointer">
              <div className="h-32 rounded-2xl bg-[#FDFDFD] border border-slate-200 shadow-sm transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="font-bold text-lg text-slate-900">Warm White</div>
                  <div className="text-sm text-slate-500">Light Mode Background</div>
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase">#FDFDFD</div>
              </div>
            </div>

            {/* Pure White */}
            <div className="space-y-3 group cursor-pointer">
              <div className="h-32 rounded-2xl bg-[#FFFFFF] border border-slate-200 shadow-sm transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="font-bold text-lg text-slate-900">Pure White</div>
                  <div className="text-sm text-slate-500">Card Surface</div>
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase">#FFFFFF</div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight">Typography</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Heading 1 (Manrope)</span>
                <div className="text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A]">
                  AI Systems. Designed to Convert.
                </div>
              </div>
              
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Heading 2</span>
                <div className="text-4xl font-bold tracking-tight text-[#0F172A]">
                  Intelligent Automation
                </div>
              </div>

               <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Heading 3</span>
                <div className="text-2xl font-bold tracking-tight text-[#0F172A]">
                  Strategic Implementation
                </div>
              </div>
            </div>

             <div className="space-y-12">
               <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Body (Inter)</span>
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  We design and deploy intelligent AI products, automations, and agents that grow revenue. 
                  Our approach is strategic, data-driven, and focused on tangible business outcomes.
                  Good design is invisible, but its impact is measurable.
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Caption / Label</span>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  System Status: Operational
                </div>
              </div>
             </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* System Index */}
        <section className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight">System Map & Screens</h2>
            <div className="flex gap-2">
               <Monitor className="w-5 h-5 text-slate-400" />
               <Tablet className="w-5 h-5 text-slate-400" />
               <Smartphone className="w-5 h-5 text-slate-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Marketing Pages */}
            <Card variant="outline" className="p-6 space-y-4 hover:border-orange-200 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-900"><Layout className="w-5 h-5" /></div>
                <h3 className="font-bold text-slate-900">Marketing Pages</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={() => handleNav('v7')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Home V7 (Current)</button></li>
                <li><button onClick={() => handleNav('services-v2')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Services Hub</button></li>
                <li><button onClick={() => handleNav('process')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Process / Methodology</button></li>
                <li><button onClick={() => handleNav('about')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> About Us</button></li>
              </ul>
            </Card>

            {/* Core Product Flow */}
            <Card variant="outline" className="p-6 space-y-4 hover:border-orange-200 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Star className="w-5 h-5" /></div>
                <h3 className="font-bold text-slate-900">Conversion Flow</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                 <li><button onClick={() => handleNav('wizard')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Brief Wizard</button></li>
                 <li><button onClick={() => handleNav('processing')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> AI Processing</button></li>
                 <li><button onClick={() => handleNav('proposal')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Proposal View</button></li>
                 <li><button onClick={() => handleNav('booking')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Booking & Payment</button></li>
              </ul>
            </Card>

            {/* Dashboards */}
            <Card variant="outline" className="p-6 space-y-4 hover:border-orange-200 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><BarChart3 className="w-5 h-5" /></div>
                <h3 className="font-bold text-slate-900">Dashboards</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={() => handleNav('dashboard')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Client Dashboard</button></li>
                <li><button onClick={() => handleNav('leads')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Leads CRM (Admin)</button></li>
              </ul>
            </Card>

            {/* Chatbot Screens */}
            <Card variant="outline" className="p-6 space-y-4 hover:border-orange-200 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><MessageSquare className="w-5 h-5" /></div>
                <h3 className="font-bold text-slate-900">Industry Pages</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={() => handleNav('chatbot-saas')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> SaaS Chatbots</button></li>
                <li><button onClick={() => handleNav('chatbot-ecommerce')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> E-commerce AI</button></li>
                <li><button onClick={() => handleNav('chatbot-healthcare')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Healthcare Bots</button></li>
                <li><button onClick={() => handleNav('chatbot-real-estate')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Real Estate Agents</button></li>
              </ul>
            </Card>

            {/* Legacy & Docs */}
            <Card variant="outline" className="p-6 space-y-4 hover:border-orange-200 transition-colors">
               <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600"><Layout className="w-5 h-5" /></div>
                <h3 className="font-bold text-slate-900">Legacy / Docs</h3>
              </div>
               <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={() => handleNav('sitemap')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Visual Sitemap</button></li>
                <li><button onClick={() => handleNav('v1')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> V1 Homepage (Archive)</button></li>
                <li><button onClick={() => handleNav('v6')} className="hover:text-orange-600 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> V6 Homepage (Archive)</button></li>
              </ul>
            </Card>

          </div>
        </section>

      </main>
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </div>
  );
}
