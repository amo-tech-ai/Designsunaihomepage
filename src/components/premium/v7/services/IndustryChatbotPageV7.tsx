import React from 'react';
import { 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Bot, 
  Zap, 
  Search, 
  Database, 
  User, 
  Clock, 
  BarChart3, 
  Users,
  ShoppingCart,
  HeartPulse,
  Building,
  Briefcase,
  FileText,
  Calendar,
  Shield,
  HelpCircle,
  Car,
  Map,
  Plane,
  Compass,
  Tag,
  CreditCard,
  Navigation
} from 'lucide-react';
import { motion } from 'motion/react';
import { NavbarV7 } from '../NavbarV7';
import { FooterV7 } from '../FooterV7';

// --- Types & Data ---

export type IndustryType = 'saas' | 'ecommerce' | 'real-estate' | 'b2b' | 'automotive' | 'tourism' | 'healthcare';

interface FlowStep {
  label: string;
  subLabel?: string;
  icon: any;
  highlight?: boolean;
}

interface IndustryData {
  id: IndustryType;
  title: string;
  subhead: string;
  flow: FlowStep[];
  values: string[];
  color: string;
  accentColor: string;
}

const INDUSTRIES: Record<IndustryType, IndustryData> = {
  saas: {
    id: 'saas',
    title: "AI Chatbot for SaaS Products",
    subhead: "Support users. Activate trials. Reduce churn.",
    flow: [
      { label: "User", subLabel: "How do I connect Slack?", icon: User },
      { label: "AI Chatbot", subLabel: "Understands Intent", icon: Bot, highlight: true },
      { label: "Knowledge", subLabel: "Pulls Integration Docs", icon: Database },
      { label: "Action", subLabel: "Integration Guide Sent", icon: Zap }
    ],
    values: ["Faster Onboarding", "Fewer Support Tickets", "Higher Activation Rate"],
    color: "text-blue-600",
    accentColor: "bg-blue-600"
  },
  ecommerce: {
    id: 'ecommerce',
    title: "AI Chatbot for E-Commerce",
    subhead: "Guide shoppers. Increase conversions. Reduce friction.",
    flow: [
      { label: "Shopper", subLabel: "Need a winter jacket", icon: ShoppingCart },
      { label: "AI Assistant", subLabel: "Clarifies Preferences", icon: Bot, highlight: true },
      { label: "Intelligence", subLabel: "Analyzes Catalog", icon: Search },
      { label: "Action", subLabel: "Added to Cart", icon: CreditCard }
    ],
    values: ["Higher Conversion", "Lower Cart Abandonment", "Better Experience"],
    color: "text-orange-600",
    accentColor: "bg-orange-600"
  },
  'real-estate': {
    id: 'real-estate',
    title: "AI Chatbot for Real Estate",
    subhead: "Qualify leads. Book viewings. Save agent time.",
    flow: [
      { label: "Visitor", subLabel: "Is it pet-friendly?", icon: User },
      { label: "AI Agent", subLabel: "Answers Instantly", icon: Bot, highlight: true },
      { label: "Property Data", subLabel: "Checks Listing Rules", icon: Building },
      { label: "Action", subLabel: "Viewing Scheduled", icon: Calendar }
    ],
    values: ["Better Qualified Leads", "Faster Responses", "Less Admin Work"],
    color: "text-indigo-600",
    accentColor: "bg-indigo-600"
  },
  b2b: {
    id: 'b2b',
    title: "AI Chatbot for B2B & Enterprise",
    subhead: "Faster intake. Smarter workflows. Cleaner pipelines.",
    flow: [
      { label: "Prospect", subLabel: "Help with pricing?", icon: Briefcase },
      { label: "AI Agent", subLabel: "Qualifies Lead", icon: Bot, highlight: true },
      { label: "CRM System", subLabel: "Updates Pipeline", icon: Database },
      { label: "Action", subLabel: "Sales Notified", icon: Bell }
    ],
    values: ["Faster Sales Cycles", "Fewer Manual Steps", "Better Data Quality"],
    color: "text-slate-800",
    accentColor: "bg-slate-800"
  },
  automotive: {
    id: 'automotive',
    title: "AI Chatbot for Automotive",
    subhead: "Guide buyers. Book test drives. Increase intent.",
    flow: [
      { label: "Buyer", subLabel: "Best family SUV?", icon: User },
      { label: "AI Assistant", subLabel: "Compares Models", icon: Car, highlight: true },
      { label: "Vehicle Data", subLabel: "Checks Inventory", icon: Database },
      { label: "Action", subLabel: "Test Drive Booked", icon: Map }
    ],
    values: ["Higher Buyer Intent", "Better Lead Qual", "More Dealership Visits"],
    color: "text-red-600",
    accentColor: "bg-red-600"
  },
  tourism: {
    id: 'tourism',
    title: "AI Chatbot for Tourism & Travel",
    subhead: "Plan experiences. Guide travelers. Increase bookings.",
    flow: [
      { label: "Traveler", subLabel: "Things to do in Medellín?", icon: Plane },
      { label: "AI Guide", subLabel: "Suggests Itinerary", icon: Compass, highlight: true },
      { label: "Local Data", subLabel: "Checks Events", icon: Map },
      { label: "Action", subLabel: "Tour Booked", icon: Ticket }
    ],
    values: ["Better Traveler CX", "Higher Booking Rates", "Multilingual Support"],
    color: "text-teal-600",
    accentColor: "bg-teal-600"
  },
  healthcare: {
     id: 'healthcare',
     title: "AI Chatbot for Healthcare",
     subhead: "Faster answers. Better patient experience.",
     flow: [
       { label: "Patient", subLabel: "Book follow-up", icon: HeartPulse },
       { label: "AI Admin", subLabel: "Checks Availability", icon: Bot, highlight: true },
       { label: "System", subLabel: "Verifies Records", icon: Shield },
       { label: "Action", subLabel: "Appointment Set", icon: Calendar }
     ],
     values: ["Reduced Admin Load", "24/7 Patient Access", "Secure Handling"],
     color: "text-emerald-600",
     accentColor: "bg-emerald-600"
  }
};

// --- Icons Helper ---
import { Bell, Ticket } from 'lucide-react';

// --- Shared Components ---

function Section({ className, children, id }: { className?: string, children: React.ReactNode, id?: string }) {
  return <section id={id} className={`py-24 ${className}`}>{children}</section>;
}

function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`container mx-auto px-6 lg:px-12 ${className}`}>{children}</div>;
}

function Button({ 
  variant = 'primary', 
  children, 
  className,
  onClick
}: { 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white', 
  children: React.ReactNode, 
  className?: string,
  onClick?: () => void
}) {
  const baseStyle = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl cursor-pointer text-sm";
  const variants = {
    primary: "bg-[#FF6A3D] text-white hover:bg-[#E55A2F] shadow-lg shadow-orange-500/20 px-8 py-4 hover:-translate-y-0.5",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-[#FF6A3D] hover:text-[#FF6A3D] px-8 py-4",
    outline: "bg-transparent border border-slate-200 text-slate-600 hover:border-[#FF6A3D] hover:text-[#FF6A3D] px-6 py-3",
    ghost: "bg-transparent text-slate-600 hover:text-[#FF6A3D] px-4 py-2",
    white: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-8 py-4"
  };

  return <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
}

// --- Demo Visual Component ---

function DemoVisual({ data }: { data: IndustryData }) {
  return (
    <div className="relative z-10 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xl w-full max-w-lg mx-auto lg:mx-0">
       <div className="absolute inset-0 bg-slate-50/50 rounded-2xl -z-10" />
       
       <div className="flex flex-col gap-6 relative">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
             <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${data.accentColor} animate-pulse`} />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Live Demo</span>
             </div>
             <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-slate-200" />
                <div className="w-2 h-2 rounded-full bg-slate-200" />
                <div className="w-2 h-2 rounded-full bg-slate-200" />
             </div>
          </div>

          {/* Flow Steps */}
          <div className="space-y-6">
             {data.flow.map((step, i) => (
               <div key={i} className="relative">
                  {/* Connector Line */}
                  {i < data.flow.length - 1 && (
                    <div className="absolute left-6 top-10 bottom-[-24px] w-0.5 bg-slate-100 -z-0">
                       <motion.div 
                         className={`absolute top-0 left-0 w-full ${data.accentColor}`}
                         initial={{ height: "0%" }}
                         animate={{ height: "100%" }}
                         transition={{ duration: 1, delay: i * 1.5, ease: "linear" }}
                       />
                    </div>
                  )}

                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 1.5 }}
                    className="flex items-center gap-4 relative z-10"
                  >
                     {/* Icon */}
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm shrink-0 transition-colors duration-500 ${
                        step.highlight 
                        ? `bg-white border-${data.accentColor.replace('bg-', '')}/30 text-${data.accentColor.replace('bg-', '')}` 
                        : 'bg-white border-slate-200 text-slate-500'
                     }`}>
                        <step.icon className="w-5 h-5" />
                     </div>

                     {/* Content */}
                     <div className={`flex-1 p-3 rounded-xl border text-sm ${
                        step.highlight
                        ? `bg-${data.accentColor.replace('bg-', '')}/5 border-${data.accentColor.replace('bg-', '')}/20`
                        : 'bg-white border-slate-100'
                     }`}>
                        <div className="font-bold text-slate-800">{step.label}</div>
                        <div className="text-slate-500 text-xs">{step.subLabel}</div>
                     </div>

                     {/* Typing Indicator (Only for Step 1 -> 2 transition essentially, but simplifying for demo effect) */}
                     {i === 1 && (
                       <motion.div 
                         className="absolute -right-2 top-0 bg-white border border-slate-100 px-2 py-1 rounded-full flex gap-0.5 shadow-sm"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: [0, 1, 0] }}
                         transition={{ delay: 1.5, duration: 1.5 }}
                       >
                          {[0, 1, 2].map(d => (
                            <div key={d} className={`w-1 h-1 rounded-full ${data.accentColor}`} />
                          ))}
                       </motion.div>
                     )}
                  </motion.div>
               </div>
             ))}
          </div>

          {/* Success Tag */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: data.flow.length * 1.5 }}
            className={`mt-2 flex items-center justify-center gap-2 p-3 rounded-xl ${data.accentColor} text-white shadow-lg`}
          >
             <Check className="w-4 h-4" />
             <span className="font-bold text-sm">Flow Completed</span>
          </motion.div>
       </div>
    </div>
  );
}

// --- Specific Page Sections ---

function IndustryHero({ data, onNavigateToWizard, onNavigateToProjects }: { data: IndustryData, onNavigateToWizard?: () => void, onNavigateToProjects?: () => void }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-slate-100 to-slate-50 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
              <span className={`w-2 h-2 rounded-full ${data.accentColor}`}></span>
              Industry Solutions
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              {data.title}
            </h1>
            
            <h2 className="text-2xl font-medium text-slate-500 mb-10">
              {data.subhead}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" onClick={onNavigateToWizard}>
                Start Your AI Brief <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" onClick={onNavigateToProjects}>
                View Projects
              </Button>
            </div>

            {/* Value Tags */}
            <div className="flex flex-wrap gap-3">
               {data.values.map((val, i) => (
                 <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 shadow-sm">
                    <Check className={`w-3.5 h-3.5 ${data.color}`} />
                    {val}
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <DemoVisual data={data} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function PerformanceMetrics() {
  const metrics = [
    { label: "Faster Response", value: "Instant", icon: Zap },
    { label: "Ticket Reduction", value: "60%", icon: ArrowRight }, 
    { label: "Conversion Lift", value: "25%", icon: BarChart3 },
    { label: "Cost Savings", value: "40%", icon: Users },
    { label: "Availability", value: "24/7", icon: Clock }
  ];

  return (
    <Section className="bg-white">
      <Container>
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Performance & ROI</h2>
            <p className="text-slate-500">Real results from day one.</p>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {metrics.map((m, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -5 }}
                 className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center"
               >
                  <div className="text-2xl font-bold text-slate-900 mb-1">{m.value}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase">{m.label}</div>
               </motion.div>
            ))}
         </div>
      </Container>
    </Section>
  );
}

function FinalCTA({ onNavigateToWizard, onNavigateToProjects }: { onNavigateToWizard?: () => void, onNavigateToProjects?: () => void }) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
       {/* Particles */}
       <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-2 h-2 bg-[#FF6A3D] rounded-full animate-ping" />
          <div className="absolute bottom-10 right-20 w-3 h-3 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: "1s" }} />
       </div>

       <Container>
         <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Add a Chatbot to Your Industry?</h2>
            <p className="text-xl text-slate-400 mb-10">Start with a clear AI brief in minutes.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button variant="primary" onClick={onNavigateToWizard}>Start Your AI Brief</Button>
               <Button variant="white" onClick={onNavigateToProjects} className="bg-transparent border-white/20 text-white hover:bg-white hover:text-slate-900">View Projects</Button>
            </div>
         </div>
       </Container>
    </section>
  );
}

// --- Main Component ---

interface IndustryChatbotPageV7Props {
  industry: IndustryType;
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function IndustryChatbotPageV7({ 
  industry, 
  onNavigateToWhatsApp, 
  onNavigateToAbout, 
  onVersionChange 
}: IndustryChatbotPageV7Props) {
  
  const data = INDUSTRIES[industry];
  const handleWizard = () => onVersionChange?.('wizard');
  const handleProjects = () => onVersionChange?.('projects');

  if (!data) return null;

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
      
      <IndustryHero data={data} onNavigateToWizard={handleWizard} onNavigateToProjects={handleProjects} />
      {/* We integrated features and flow into the Hero/Demo, so separate sections are simplified or removed to avoid redundancy if not needed, 
          but keeping Metrics and CTA. The prompt asked specifically for "Industry-Specific AI Chatbot Demos", which implies the demo is the key feature. 
      */}
      <PerformanceMetrics />
      <FinalCTA onNavigateToWizard={handleWizard} onNavigateToProjects={handleProjects} />
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
