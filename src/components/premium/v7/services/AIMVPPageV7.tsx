import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Lightbulb, 
  Rocket, 
  Users, 
  BarChart3, 
  Zap, 
  Target, 
  Layers, 
  Shield, 
  Workflow, 
  Search, 
  MessageSquare, 
  Briefcase,
  X,
  Play
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
    primary: "bg-[#FF6A3D] text-white hover:bg-[#E55A2F] shadow-lg shadow-orange-500/20 px-8 py-4 hover:-translate-y-0.5",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-[#FF6A3D] hover:text-[#FF6A3D] px-8 py-4",
    outline: "bg-transparent border border-slate-200 text-slate-600 hover:border-[#FF6A3D] hover:text-[#FF6A3D] px-6 py-3",
    ghost: "bg-transparent text-slate-600 hover:text-[#FF6A3D] px-4 py-2",
    white: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-8 py-4"
  };

  return <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
}

// --- Section 1: Hero ---

function MVPHero({ onNavigateToWizard, onNavigateToProjects }: { onNavigateToWizard?: () => void, onNavigateToProjects?: () => void }) {
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
              AI MVP Development
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              AI MVP <br/>
              <span className="text-[#FF6A3D]">Development</span>
            </h1>
            
            <h2 className="text-2xl font-medium text-slate-700 mb-6">
              Turn AI ideas into working products — fast.
            </h2>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
              We build real, usable AI MVPs in weeks so you can validate ideas, prove value, and scale with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={onNavigateToWizard}>
                Start Your AI Brief <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" onClick={onNavigateToProjects}>
                View MVP Examples
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* "Idea to Insight" System Animation */}
            <div className="relative z-10 bg-white p-12 rounded-2xl border border-slate-200 shadow-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-slate-50/50 rounded-2xl -z-10" />
               
               {/* Nodes */}
               <div className="flex justify-between items-center w-full max-w-lg relative z-20">
                 {[
                   { icon: Lightbulb, label: "Idea", delay: 0 },
                   { icon: Rocket, label: "MVP", delay: 2 },
                   { icon: Users, label: "Users", delay: 4 },
                   { icon: BarChart3, label: "Insights", delay: 6 }
                 ].map((node, i) => (
                   <div key={i} className="flex flex-col items-center gap-4 relative">
                      <motion.div 
                        initial={{ opacity: 0.5, scale: 0.9, borderColor: "#e2e8f0" }}
                        animate={{ 
                          opacity: [0.5, 1, 1, 0.5], 
                          scale: [0.9, 1.1, 1, 0.9],
                          borderColor: ["#e2e8f0", "#FF6A3D", "#FF6A3D", "#e2e8f0"],
                          backgroundColor: ["#ffffff", "#fff7ed", "#fff7ed", "#ffffff"]
                        }}
                        transition={{ 
                          duration: 2, 
                          delay: node.delay, 
                          repeat: Infinity, 
                          repeatDelay: 6 
                        }}
                        className="w-20 h-20 rounded-full border-2 bg-white flex items-center justify-center shadow-sm z-10"
                      >
                        <node.icon className="w-8 h-8 text-slate-600" />
                      </motion.div>
                      <span className="text-sm font-bold text-slate-500">{node.label}</span>
                   </div>
                 ))}
                 
                 {/* Connecting Lines */}
                 <div className="absolute top-10 left-0 w-full h-0.5 bg-slate-100 -z-10">
                    <motion.div 
                      className="h-full bg-[#FF6A3D]"
                      initial={{ width: "0%" }}
                      animate={{ width: ["0%", "33%", "66%", "100%", "100%", "0%"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                    />
                 </div>
               </div>
            </div>
          </motion.div>
          
          {/* Mobile Hero Visual (Simplified) */}
          <div className="lg:hidden flex flex-col items-center gap-4 py-8">
             <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center"><Lightbulb className="w-5 h-5 text-slate-600"/></div>
                  <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center"><Rocket className="w-6 h-6 text-[#FF6A3D]"/></div>
                  <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center"><Users className="w-5 h-5 text-slate-600"/></div>
                  <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center"><BarChart3 className="w-5 h-5 text-slate-600"/></div>
             </div>
             <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wide">Idea to Insight</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// --- Section 2: What is an MVP? ---

function MVPComparison() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What an AI MVP Really Is</h2>
          <p className="text-slate-500 text-lg">Don't confuse a prototype with a product.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {/* Card 1: Not an MVP */}
           <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 grayscale opacity-70">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-slate-500">
                  <X className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-700">Not an MVP</h3>
              </div>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3 text-slate-500">
                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400" />
                   <span>Just slides & mockups</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-500">
                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400" />
                   <span>Fake or hardcoded data</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-500">
                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400" />
                   <span>No real users involved</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-500">
                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400" />
                   <span>Zero proof of value</span>
                 </li>
              </ul>
           </div>

           {/* Card 2: AI MVP */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="p-8 rounded-2xl border-2 border-[#FF6A3D]/20 bg-white shadow-xl shadow-orange-500/5 relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6A3D]/5 rounded-bl-full -mr-4 -mt-4"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF6A3D]">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Real AI MVP</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                 <li className="flex items-start gap-3 text-slate-700 font-medium">
                   <Check className="w-5 h-5 text-[#FF6A3D] shrink-0" />
                   <span>Real users using the app</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-700 font-medium">
                   <Check className="w-5 h-5 text-[#FF6A3D] shrink-0" />
                   <span>Real data & logic</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-700 font-medium">
                   <Check className="w-5 h-5 text-[#FF6A3D] shrink-0" />
                   <span>One core workflow solved</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-700 font-medium">
                   <Check className="w-5 h-5 text-[#FF6A3D] shrink-0" />
                   <span>Measurable results & feedback</span>
                 </li>
              </ul>
           </motion.div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 3: Features ---

function MVPFeatures() {
  const features = [
    { icon: Rocket, title: "Working AI Product", desc: "A real app users can interact with, not a prototype." },
    { icon: Target, title: "Single Focused Use Case", desc: "One core workflow that proves value immediately." },
    { icon: Layers, title: "Real Data & Integrations", desc: "Connected to live systems and real information." },
    { icon: Zap, title: "Production-Ready", desc: "Built on a solid foundation to scale after validation." },
    { icon: Shield, title: "Human-in-the-Loop", desc: "Critical AI actions are reviewed where it matters." },
    { icon: BarChart3, title: "Metrics Tracking", desc: "Built-in analytics to measure usage and accuracy." }
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What We Build</h2>
           <p className="text-slate-500 text-lg">Core components of a successful MVP.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#FF6A3D]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#FF6A3D] mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 4: Workflow ---

function MVPWorkflow() {
  const steps = [
    "Problem", 
    "Define Scope", 
    "UX & Wireframes", 
    "Build AI Product", 
    "Test With Users", 
    "Measure Results", 
    "Decide: Scale / Pivot"
  ];

  return (
    <Section className="bg-white">
      <Container>
         <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">From Idea to Working AI MVP</h2>
           <p className="text-slate-500 text-lg">A structured path to validation.</p>
         </div>

         <div className="max-w-6xl mx-auto overflow-x-auto pb-12">
            <div className="flex justify-center min-w-max gap-4 px-4">
              {steps.map((step, i) => (
                <React.Fragment key={i}>
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="relative group"
                   >
                      <div className={`px-5 py-3 rounded-lg border-2 font-bold text-sm transition-all duration-300 ${
                        i === steps.length - 1
                        ? 'bg-[#FF6A3D] border-[#FF6A3D] text-white'
                        : i === 0 
                        ? 'bg-slate-900 border-slate-900 text-white'
                        : 'bg-white border-slate-200 text-slate-700 shadow-sm group-hover:border-[#FF6A3D]'
                      }`}>
                        {step}
                      </div>
                   </motion.div>
                   {i < steps.length - 1 && (
                     <div className="flex items-center text-slate-300">
                       <ArrowRight className="w-4 h-4" />
                     </div>
                   )}
                </React.Fragment>
              ))}
            </div>
         </div>
      </Container>
    </Section>
  );
}

// --- Section 5: Use Cases ---

function MVPUseCases() {
  const cases = [
    { title: "Startup Idea Validation", path: "Idea → AI MVP → User Feedback → Investor Readiness", icon: Lightbulb },
    { title: "Sales Automation MVP", path: "Leads → AI Qualification → CRM → Conversion", icon: Target },
    { title: "Support Automation MVP", path: "Tickets → AI Resolution → Escalation (if needed)", icon: MessageSquare },
    { title: "Internal Ops MVP", path: "Manual Process → AI Agent → Time Saved", icon: Briefcase },
    { title: "Knowledge Search MVP", path: "Docs → AI Search → Instant Answers", icon: Search }
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Common AI MVPs We Build</h2>
          <p className="text-slate-500 text-lg">Proving value across different domains.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
           {cases.map((c, i) => (
             <div key={i} className="flex flex-col bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#FF6A3D] transition-colors group h-full">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-[#FF6A3D] mb-4 group-hover:bg-orange-50">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">{c.title}</h3>
                
                <div className="mt-auto pt-4 border-t border-slate-100">
                   <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <Workflow className="w-3 h-3 text-slate-400" /> {c.path}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 6: Metrics ---

function MVPMetrics() {
  const metrics = [
    { label: "Time to Launch", value: "4-6", suffix: " Weeks" },
    { label: "User Adoption", value: "High", suffix: "" },
    { label: "Validation Speed", value: "2x", suffix: " Faster" },
    { label: "Cost Reduction", value: "40%", suffix: "" },
    { label: "System Accuracy", value: "95%", suffix: "" },
    { label: "Time Saved", value: "80%", suffix: "" }
  ];

  return (
    <Section className="bg-white">
      <Container>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {metrics.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
              >
                 <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{m.value}{m.suffix}</div>
                 <div className="text-xs font-bold text-[#FF6A3D] uppercase tracking-wide">{m.label}</div>
              </motion.div>
            ))}
         </div>
      </Container>
    </Section>
  );
}

// --- Section 7: How Clients Use ---

function MVPUsage() {
  const steps = [
    { title: "Validate Idea", desc: "Test if the market actually wants it." },
    { title: "Get Real Feedback", desc: "Learn from actual user behavior." },
    { title: "Prove ROI", desc: "Show data to stakeholders or investors." },
    { title: "Scale Confidence", desc: "Invest more only when it works." }
  ];

  return (
    <Section className="bg-slate-50 border-t border-slate-200">
      <Container>
         <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">How Most Clients Use AI MVPs</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
               {steps.map((step, i) => (
                 <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 font-bold flex items-center justify-center mx-auto mb-3">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm">{step.title}</h3>
                    <p className="text-xs text-slate-500">{step.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </Container>
    </Section>
  );
}

// --- Section 8: Final CTA ---

function MVPFinalCTA({ onNavigateToWizard, onNavigateToContact }: { onNavigateToWizard?: () => void, onNavigateToContact?: () => void }) {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden text-white">
       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #FF6A3D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
       
       <Container>
         <div className="text-center relative z-10 max-w-3xl mx-auto">
           <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
             Ready to Test Your <br/>
             <span className="text-[#FF6A3D]">AI Idea?</span>
           </h2>
           <p className="text-xl text-slate-400 mb-10">
             Build a real AI MVP and learn what works — fast.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="primary" onClick={onNavigateToWizard}>
               Start Your AI Brief
             </Button>
             <Button variant="white" onClick={onNavigateToContact} className="bg-transparent text-white border-white/20 hover:bg-white hover:text-slate-900 hover:border-white">
               Book a Scoping Call
             </Button>
           </div>
         </div>
       </Container>
    </section>
  );
}

// --- Main Component ---

interface AIMVPPageV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function AIMVPPageV7({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: AIMVPPageV7Props) {
  const handleWizard = () => onVersionChange?.('wizard');
  const handleProjects = () => onVersionChange?.('projects');
  const handleContact = () => onNavigateToAbout?.();

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
      
      <MVPHero onNavigateToWizard={handleWizard} onNavigateToProjects={handleProjects} />
      <MVPComparison />
      <MVPFeatures />
      <MVPWorkflow />
      <MVPUseCases />
      <MVPMetrics />
      <MVPUsage />
      <MVPFinalCTA onNavigateToWizard={handleWizard} onNavigateToContact={handleContact} />
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
