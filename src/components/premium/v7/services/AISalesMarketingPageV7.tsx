import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Target, 
  Bot, 
  Send, 
  Database, 
  BarChart3, 
  Users, 
  Zap, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Workflow, 
  Mail,
  UserCheck,
  RefreshCw,
  FileText,
  Globe,
  Megaphone,
  Brain,
  CheckCircle,
  Layout
} from 'lucide-react';
import { motion } from 'motion/react';
import { NavbarV7 } from '../NavbarV7';
import { FooterV7 } from '../FooterV7';

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
    primary: "bg-[#FF6A3D] text-white hover:bg-[#E55A2F] shadow-lg shadow-orange-500/20 px-8 py-4",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-[#FF6A3D] hover:text-[#FF6A3D] px-8 py-4",
    outline: "bg-transparent border border-slate-200 text-slate-600 hover:border-[#FF6A3D] hover:text-[#FF6A3D] px-6 py-3",
    ghost: "bg-transparent text-slate-600 hover:text-[#FF6A3D] px-4 py-2",
    white: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-8 py-4"
  };

  return <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
}

// --- Section 1: Hero ---

function SalesHero({ onNavigateToWizard, onNavigateToProjects }: { onNavigateToWizard?: () => void, onNavigateToProjects?: () => void }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-100/40 to-slate-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6A3D]"></span>
              AI-Powered CRM
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Smarter Sales. <br/>
              <span className="text-[#FF6A3D]">Faster Growth.</span>
            </h1>
            
            <h2 className="text-xl font-medium text-slate-700 mb-4">
              AI-powered CRM systems that capture, qualify, and convert leads automatically.
            </h2>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
              Replace manual follow-ups with intelligent automation that works 24/7 inside your sales pipeline.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={onNavigateToWizard}>
                Start Your AI Brief <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" onClick={onNavigateToProjects}>
                View CRM Use Cases
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* AI SALES ENGINE VISUAL */}
            <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl aspect-video flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-slate-50/50 rounded-2xl -z-10" />
               
               <div className="relative w-full h-full flex items-center justify-between px-4">
                 
                 {/* COLUMN 1: LEAD SOURCES */}
                 <div className="flex flex-col justify-center gap-6 relative z-10">
                    {[
                      { icon: Globe, label: "Website", delay: 0 },
                      { icon: Megaphone, label: "Ads", delay: 0.2 },
                      { icon: MessageSquare, label: "Chatbot", delay: 0.4 }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <motion.div 
                           className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-500 flex items-center justify-center shadow-sm relative"
                           initial={{ borderColor: "#e2e8f0" }}
                           animate={{ borderColor: ["#e2e8f0", "#FF6A3D", "#e2e8f0"] }}
                           transition={{ duration: 3, delay: item.delay, repeat: Infinity, repeatDelay: 5 }}
                         >
                            <item.icon className="w-5 h-5" />
                            {/* Pulse Dot */}
                            <motion.div 
                              className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF6A3D] rounded-full"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
                              transition={{ duration: 2, delay: item.delay, repeat: Infinity, repeatDelay: 6 }}
                            />
                         </motion.div>
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wide hidden xl:block">{item.label}</span>
                      </div>
                    ))}
                 </div>

                 {/* CONNECTOR LINES 1 (Sources -> Brain) */}
                 <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <svg className="w-full h-full">
                       {/* Paths would ideally be calculated, but simplified here with approximate coordinates relative to container */}
                       <motion.path 
                         d="M 100 120 C 180 120, 180 200, 260 200" 
                         fill="none" stroke="#e2e8f0" strokeWidth="2"
                         vectorEffect="non-scaling-stroke"
                       />
                       <motion.path 
                         d="M 100 200 C 180 200, 180 200, 260 200" 
                         fill="none" stroke="#e2e8f0" strokeWidth="2"
                         vectorEffect="non-scaling-stroke"
                       />
                       <motion.path 
                         d="M 100 280 C 180 280, 180 200, 260 200" 
                         fill="none" stroke="#e2e8f0" strokeWidth="2"
                         vectorEffect="non-scaling-stroke"
                       />

                       {/* Animated Tracers */}
                       {[0, 1, 2].map((i) => (
                         <motion.path 
                           key={i}
                           d={`M 100 ${120 + i*80} C 180 ${120 + i*80}, 180 200, 260 200`}
                           fill="none" stroke="#FF6A3D" strokeWidth="2"
                           initial={{ pathLength: 0 }}
                           animate={{ pathLength: [0, 1, 0] }}
                           transition={{ duration: 2, delay: 1 + i*0.2, repeat: Infinity, repeatDelay: 6 }}
                         />
                       ))}
                    </svg>
                 </div>

                 {/* COLUMN 2: AI BRAIN */}
                 <div className="relative z-10 flex flex-col items-center justify-center">
                    <motion.div 
                      className="w-28 h-28 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center shadow-2xl relative"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                       <Brain className="w-12 h-12 text-[#FF6A3D]" />
                       
                       {/* Orbiting Elements */}
                       <motion.div 
                         className="absolute inset-0 border border-white/10 rounded-full"
                         animate={{ rotate: 360 }}
                         transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                       >
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-[#FF6A3D] rounded-full" />
                       </motion.div>

                       {/* Internal Glow */}
                       <motion.div 
                         className="absolute inset-0 bg-[#FF6A3D]/20 rounded-full blur-xl"
                         animate={{ opacity: [0.2, 0.6, 0.2] }}
                         transition={{ duration: 2, repeat: Infinity }}
                       />
                    </motion.div>
                    <div className="mt-4 text-center">
                       <div className="text-sm font-bold text-slate-800">AI CRM Brain</div>
                       <div className="text-[10px] font-medium text-slate-400">Scoring • Routing • Logic</div>
                    </div>
                 </div>

                 {/* CONNECTOR LINES 2 (Brain -> Actions) */}
                 <div className="absolute top-0 right-0 w-full h-full pointer-events-none rotate-180">
                    <svg className="w-full h-full">
                       <motion.path 
                         d="M 100 120 C 180 120, 180 200, 260 200" 
                         fill="none" stroke="#e2e8f0" strokeWidth="2"
                         vectorEffect="non-scaling-stroke"
                       />
                       <motion.path 
                         d="M 100 200 C 180 200, 180 200, 260 200" 
                         fill="none" stroke="#e2e8f0" strokeWidth="2"
                         vectorEffect="non-scaling-stroke"
                       />
                       <motion.path 
                         d="M 100 280 C 180 280, 180 200, 260 200" 
                         fill="none" stroke="#e2e8f0" strokeWidth="2"
                         vectorEffect="non-scaling-stroke"
                       />

                       {/* Animated Tracers (Reverse flow visually) */}
                       {[0, 1, 2].map((i) => (
                         <motion.path 
                           key={i}
                           d={`M 100 ${120 + i*80} C 180 ${120 + i*80}, 180 200, 260 200`}
                           fill="none" stroke="#FF6A3D" strokeWidth="2"
                           initial={{ pathLength: 0 }}
                           animate={{ pathLength: [0, 1, 0] }}
                           transition={{ duration: 2, delay: 3 + i*0.2, repeat: Infinity, repeatDelay: 6 }}
                         />
                       ))}
                    </svg>
                 </div>

                 {/* COLUMN 3: ACTIONS */}
                 <div className="flex flex-col justify-center gap-6 relative z-10">
                    {[
                      { icon: Target, label: "Qualify", delay: 4 },
                      { icon: Mail, label: "Email Sent", delay: 4.2 },
                      { icon: DollarSign, label: "Deal Created", delay: 4.4 }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 justify-end">
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wide hidden xl:block text-right">{item.label}</span>
                         <motion.div 
                           className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-500 flex items-center justify-center shadow-sm relative overflow-hidden"
                           animate={{ 
                             borderColor: ["#e2e8f0", "#10b981", "#e2e8f0"],
                             color: ["#64748b", "#10b981", "#64748b"]
                           }}
                           transition={{ duration: 3, delay: item.delay, repeat: Infinity, repeatDelay: 5 }}
                         >
                            <item.icon className="w-5 h-5" />
                            <motion.div 
                               className="absolute inset-0 bg-green-50"
                               initial={{ opacity: 0 }}
                               animate={{ opacity: [0, 1, 0] }}
                               transition={{ duration: 2, delay: item.delay, repeat: Infinity, repeatDelay: 6 }}
                            />
                         </motion.div>
                      </div>
                    ))}
                 </div>

               </div>
            </div>
          </motion.div>
          
          {/* Mobile Hero Visual (Vertical Flow) */}
          <div className="lg:hidden flex flex-col items-center gap-4 py-8">
             <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm"><Globe className="w-4 h-4 text-slate-500"/></div>
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm"><Megaphone className="w-4 h-4 text-slate-500"/></div>
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm"><MessageSquare className="w-4 h-4 text-slate-500"/></div>
             </div>
             
             <div className="h-8 w-0.5 bg-slate-200 relative overflow-hidden">
                <motion.div 
                   className="absolute top-0 left-0 w-full bg-[#FF6A3D]"
                   initial={{ height: "0%" }}
                   animate={{ height: "100%" }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                />
             </div>

             <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-[#FF6A3D] shadow-lg relative">
                <Brain className="w-8 h-8" />
                <div className="absolute inset-0 border border-[#FF6A3D]/30 rounded-full animate-ping" />
             </div>

             <div className="h-8 w-0.5 bg-slate-200 relative overflow-hidden">
                <motion.div 
                   className="absolute top-0 left-0 w-full bg-[#FF6A3D]"
                   initial={{ height: "0%" }}
                   animate={{ height: "100%" }}
                   transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
                />
             </div>

             <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shadow-sm"><CheckCircle className="w-4 h-4"/></div>
                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shadow-sm"><Mail className="w-4 h-4"/></div>
                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shadow-sm"><DollarSign className="w-4 h-4"/></div>
             </div>
             <p className="text-xs font-bold text-slate-400 mt-4 uppercase tracking-wide">Automated Sales Pipeline</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// --- Section 2: Core Features ---

function SalesFeatures() {
  const features = [
    { icon: MessageSquare, title: "AI Lead Capture", desc: "AI chat, forms, and widgets that capture leads 24/7 automatically." },
    { icon: Target, title: "Intelligent Lead Scoring", desc: "Rank leads based on intent, behavior, and data signals instantly." },
    { icon: Bot, title: "AI Sales Copilot", desc: "Assists reps with summaries, follow-ups, and next-step suggestions." },
    { icon: Send, title: "Automated Outreach", desc: "Personalized emails and messages triggered by user behavior." },
    { icon: Database, title: "CRM Automation", desc: "Auto-updates records, logs conversations, and moves deals in your CRM." },
    { icon: BarChart3, title: "Marketing Insights", desc: "Analyzes campaigns to explain what drives conversion and revenue." }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What We Build</h2>
          <p className="text-slate-500 text-lg">Core capabilities that drive modern sales engines.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-100 hover:border-[#FF6A3D]/30 hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <f.icon className="w-24 h-24 text-[#FF6A3D] -rotate-12" />
              </div>
              
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF6A3D] mb-6 relative z-10 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm relative z-10">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 3: Sales Flow ---

function SalesFlow() {
  const steps = [
    { label: "Visitor", icon: Users },
    { label: "AI Chat / Form", icon: MessageSquare },
    { label: "Lead Scoring", icon: Target },
    { label: "CRM Update", icon: Database },
    { label: "Outreach", icon: Send },
    { label: "Sales Action", icon: UserCheck },
    { label: "Closed Deal", icon: DollarSign }
  ];

  return (
    <Section className="bg-slate-50 overflow-hidden">
      <Container>
         <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">From Visitor to Closed Deal — Automatically</h2>
           <p className="text-slate-500 text-lg">A seamless flow that ensures no lead is left behind.</p>
         </div>

         <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden lg:block">
               <motion.div 
                 className="h-full bg-[#FF6A3D]"
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 2, ease: "easeInOut" }}
               />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
               {steps.map((step, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.2 }}
                   className="flex flex-col items-center justify-center"
                 >
                    <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center mb-4 transition-all duration-300 ${
                       i === steps.length - 1 ? 'bg-[#FF6A3D] border-[#FF6A3D] text-white shadow-lg' : 'bg-white border-slate-200 text-slate-500 hover:border-[#FF6A3D] hover:text-[#FF6A3D]'
                    }`}>
                       <step.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-600 text-center">{step.label}</span>
                 </motion.div>
               ))}
            </div>
         </div>
      </Container>
    </Section>
  );
}

// --- Section 4: Use Cases ---

function SalesUseCases() {
  const cases = [
    { 
      title: "B2B Lead Qualification", 
      problem: "Sales wastes time on unqualified leads.",
      solution: "AI qualifies leads before sales sees them.",
      result: "High-intent focus only.",
      icon: Target
    },
    { 
      title: "E-commerce Recovery", 
      problem: "Abandoned carts lose revenue.",
      solution: "AI follows up with personalized offers.",
      result: "Higher recovery rates.",
      icon: RefreshCw
    },
    { 
      title: "SaaS Demo Booking", 
      problem: "Slow response times kill conversions.",
      solution: "AI books demos instantly.",
      result: "Faster pipeline growth.",
      icon: Clock
    },
    { 
      title: "Proposal Automation", 
      problem: "Manual proposals slow deals.",
      solution: "AI generates scoped proposals.",
      result: "Faster close times.",
      icon: FileText
    }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Real-World Use Cases</h2>
          <p className="text-slate-500 text-lg">Solving specific sales problems with intelligence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {cases.map((c, i) => (
             <div key={i} className="flex flex-col bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#FF6A3D] transition-colors group h-full">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#FF6A3D] shadow-sm mb-4">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{c.title}</h3>
                
                <div className="space-y-4 mb-4 flex-1">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Problem</span>
                    <p className="text-sm text-slate-600">{c.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">AI Solution</span>
                    <p className="text-sm text-slate-600">{c.solution}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 mt-auto">
                   <div className="flex items-center gap-2 text-[#FF6A3D] text-sm font-bold">
                     <CheckCircle2 className="w-4 h-4" /> {c.result}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </Container>
    </Section>
  );
}

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
);

// --- Section 5: Metrics ---

function SalesMetrics() {
  const metrics = [
    { label: "Lead Response Speed", value: "< 5s", suffix: "" },
    { label: "Conversion Lift", value: "+25", suffix: "%" },
    { label: "Cost Per Lead", value: "-40", suffix: "%" },
    { label: "Sales Cycle Time", value: "-30", suffix: "%" },
    { label: "CRM Accuracy", value: "99", suffix: "%" },
    { label: "Revenue Impact", value: "3x", suffix: " ROI" }
  ];

  return (
    <Section className="bg-slate-900 text-white">
      <Container>
         <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Results You Can Measure</h2>
            <p className="text-slate-400">Transforming sales efficiency with data.</p>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {metrics.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center hover:bg-slate-750 transition-colors"
              >
                 <div className="text-4xl lg:text-5xl font-bold text-[#FF6A3D] mb-2">{m.value}{m.suffix}</div>
                 <div className="text-sm font-bold text-slate-400 uppercase tracking-wide">{m.label}</div>
              </motion.div>
            ))}
         </div>
      </Container>
    </Section>
  );
}

// --- Section 6: Integrations ---

function SalesIntegrations() {
  return (
    <Section className="bg-white border-b border-slate-100">
      <Container>
         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Works With Your Stack</h3>
               <p className="text-slate-500">
                 Seamless integration with major CRMs, marketing platforms, and messaging tools. No rip and replace required.
               </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-end opacity-60">
               {['Salesforce', 'HubSpot', 'Pipedrive', 'Slack', 'Intercom', 'Stripe'].map((tool, i) => (
                 <div key={i} className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-500 font-bold text-sm">
                   {tool}
                 </div>
               ))}
            </div>
         </div>
      </Container>
    </Section>
  );
}

// --- Section 7: Estimator ---

function SalesEstimator({ onNavigateToWizard }: { onNavigateToWizard?: () => void }) {
  const [leads, setLeads] = useState(500);
  const [teamSize, setTeamSize] = useState(5);
  
  // Simple playful calculation logic
  const hoursSaved = Math.round(leads * 0.5); // 30 mins per lead saved
  const revenueLift = Math.round(leads * 0.1 * 500); // 10% lift * $500 avg deal (arbitrary)

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Estimate Your Automation Impact</h2>
          <p className="text-slate-500">See the potential ROI of AI-driven sales.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden grid md:grid-cols-2">
           <div className="p-10 space-y-8 border-b md:border-b-0 md:border-r border-slate-100">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Monthly Leads: {leads}</label>
                <input 
                  type="range" 
                  min="100" 
                  max="5000" 
                  step="50"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6A3D]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Sales Team Size: {teamSize}</label>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6A3D]"
                />
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                 <h4 className="font-bold text-[#FF6A3D] mb-2">Did You Know?</h4>
                 <p className="text-sm text-slate-600">
                   Companies that automate lead management see a 10% or greater increase in revenue in 6-9 months.
                 </p>
              </div>
           </div>

           <div className="p-10 flex flex-col justify-center text-center bg-slate-50/50">
              <div className="mb-8">
                 <div className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Monthly Hours Saved</div>
                 <div className="text-5xl font-bold text-slate-900">{hoursSaved.toLocaleString()}h</div>
              </div>
              
              <div className="mb-8">
                 <div className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Potential Monthly Revenue Lift</div>
                 <div className="text-5xl font-bold text-[#FF6A3D]">+${revenueLift.toLocaleString()}</div>
              </div>

              <Button variant="primary" className="w-full" onClick={onNavigateToWizard}>
                Get My AI Sales Plan
              </Button>
           </div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 8: Final CTA ---

function SalesFinalCTA({ onNavigateToWizard, onNavigateToContact }: { onNavigateToWizard?: () => void, onNavigateToContact?: () => void }) {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden text-white">
       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #FF6A3D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
       
       <Container>
         <div className="text-center relative z-10 max-w-3xl mx-auto">
           <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
             Ready to Turn Your CRM Into a <br/>
             <span className="text-[#FF6A3D]">Sales Machine?</span>
           </h2>
           <p className="text-xl text-slate-400 mb-10">
             Let AI handle the busy work. Your team closes the deals.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="primary" onClick={onNavigateToWizard}>
               Start Your AI Brief
             </Button>
             <Button variant="white" onClick={onNavigateToContact} className="bg-transparent text-white border-white/20 hover:bg-white hover:text-slate-900 hover:border-white">
               Book a Sales Automation Call
             </Button>
           </div>
         </div>
       </Container>
    </section>
  );
}

// --- Main Component ---

interface AISalesMarketingPageV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function AISalesMarketingPageV7({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: AISalesMarketingPageV7Props) {
  const handleWizard = () => onVersionChange?.('wizard');
  const handleProjects = () => onVersionChange?.('projects');
  const handleContact = () => onNavigateToAbout?.();

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} />
      
      <SalesHero onNavigateToWizard={handleWizard} onNavigateToProjects={handleProjects} />
      <SalesFeatures />
      <SalesFlow />
      <SalesUseCases />
      <SalesMetrics />
      <SalesIntegrations />
      <SalesEstimator onNavigateToWizard={handleWizard} />
      <SalesFinalCTA onNavigateToWizard={handleWizard} onNavigateToContact={handleContact} />
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
