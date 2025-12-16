import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Code, 
  Cpu, 
  Database, 
  Zap, 
  MessageSquare, 
  Globe, 
  BarChart, 
  Layers, 
  Terminal, 
  Bot, 
  Clock,
  Shield,
  Search,
  Brain,
  Sparkles,
  Workflow,
  LineChart,
  GitBranch,
  Server
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

function AIDevHero({ onNavigateToWizard, onNavigateToProjects }: { onNavigateToWizard?: () => void, onNavigateToProjects?: () => void }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-100/40 to-slate-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6A3D]"></span>
              Intelligent Applications
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              AI Development for <br/>
              <span className="text-[#FF6A3D]">Web Applications</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
              Build intelligent assistants, search, and automations that move real business KPIs. From brief to launch in weeks—not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={onNavigateToWizard}>
                Start Your AI Brief <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" onClick={onNavigateToProjects}>
                View Case Studies
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Abstract System Diagram */}
            <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl aspect-square flex items-center justify-center">
               <div className="absolute inset-0 bg-slate-50/50 rounded-2xl -z-10" />
               
               <div className="relative w-full h-full">
                 {/* Nodes */}
                 {[
                   { icon: MessageSquare, label: 'User', x: '10%', y: '50%' },
                   { icon: Brain, label: 'AI Logic', x: '50%', y: '50%' },
                   { icon: Database, label: 'Data', x: '50%', y: '85%' },
                   { icon: Zap, label: 'Action', x: '90%', y: '50%' }
                 ].map((node, i) => (
                   <motion.div 
                     key={i}
                     className="absolute w-20 h-20 bg-white border border-slate-100 rounded-xl shadow-lg flex flex-col items-center justify-center z-20"
                     style={{ left: node.x, top: node.y, marginLeft: -40, marginTop: -40 }}
                     whileHover={{ scale: 1.05 }}
                   >
                     <node.icon className={`w-6 h-6 mb-2 ${i === 1 ? 'text-[#FF6A3D]' : 'text-slate-400'}`} />
                     <span className="text-xs font-bold text-slate-600">{node.label}</span>
                   </motion.div>
                 ))}

                 {/* Animated Connectors */}
                 <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                   {/* User -> AI */}
                   <path d="M 80 250 L 210 250" stroke="#e2e8f0" strokeWidth="2" />
                   <motion.circle r="3" fill="#FF6A3D">
                     <animateMotion dur="2s" repeatCount="indefinite" path="M 80 250 L 210 250" />
                   </motion.circle>

                   {/* AI -> Data */}
                   <path d="M 250 290 L 250 385" stroke="#e2e8f0" strokeWidth="2" />
                   <motion.circle r="3" fill="#FF6A3D">
                     <animateMotion dur="2s" repeatCount="indefinite" path="M 250 290 L 250 385" />
                   </motion.circle>

                   {/* AI -> Action */}
                   <path d="M 290 250 L 410 250" stroke="#e2e8f0" strokeWidth="2" />
                   <motion.circle r="3" fill="#FF6A3D">
                     <animateMotion dur="2s" repeatCount="indefinite" path="M 290 250 L 410 250" />
                   </motion.circle>
                 </svg>
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// --- Section 2: What We Build ---

function AIDevFeatures() {
  const features = [
    { icon: MessageSquare, title: "Natural-Language Interfaces", desc: "Chat interfaces that understand context and intent, not just keywords." },
    { icon: Database, title: "Retrieval-Augmented Apps", desc: "Connect LLMs to your private data securely for accurate answers." },
    { icon: Sparkles, title: "Personalization Engines", desc: "Dynamic content and recommendations based on user behavior." },
    { icon: Bot, title: "AI Agents & Automations", desc: "Autonomous agents that perform complex tasks across your systems." },
    { icon: Terminal, title: "AI Content Services", desc: "Generate SEO-optimized content, summaries, and reports on the fly." },
    { icon: Users, title: "CX Assistants", desc: "24/7 support bots that resolve issues and escalate when needed." }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What We Build</h2>
          <p className="text-slate-500 text-lg">Core capabilities that drive modern AI applications.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-slate-100 hover:border-[#FF6A3D]/30 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF6A3D] mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

const Users = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

// --- Section 3: Use Cases ---

function AIDevUseCases() {
  const cases = [
    { title: "Sales & Marketing Co-Pilots", kpi: "+40% Lead Qual" },
    { title: "Support & Service Automation", kpi: "-60% Ticket Vol" },
    { title: "Knowledge Operations", kpi: "10x Faster Search" },
    { title: "E-commerce Intelligence", kpi: "+25% AOV" },
    { title: "Risk & Decision Dashboards", kpi: "Real-time Alerts" }
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Where It Pays</h2>
            <p className="text-slate-500 text-lg mb-8">
              We focus on high-impact areas where AI delivers immediate ROI. 
              No science experiments—just solved business problems.
            </p>
            <div className="relative h-64 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex items-center justify-center">
               {/* Mini Flow Visual */}
               <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                  <div className="px-3 py-2 bg-slate-50 rounded border border-slate-100">User Input</div>
                  <ArrowRight className="w-4 h-4" />
                  <div className="px-3 py-2 bg-orange-50 text-[#FF6A3D] rounded border border-orange-100">AI Processing</div>
                  <ArrowRight className="w-4 h-4" />
                  <div className="px-3 py-2 bg-slate-50 rounded border border-slate-100">Business Result</div>
               </div>
            </div>
          </div>

          <div className="space-y-4">
             {cases.map((c, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="flex items-center justify-between p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-[#FF6A3D] transition-colors group"
               >
                 <span className="font-bold text-slate-700 group-hover:text-slate-900">{c.title}</span>
                 <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100">{c.kpi}</span>
               </motion.div>
             ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 4: ROI ---

function AIDevROI() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { label: 'Faster Time to Value', val: '8w', sub: 'vs 8 months avg' },
             { label: 'Operational Efficiency', val: '60%', sub: 'cost reduction' },
             { label: 'Scalable Impact', val: '∞', sub: 'automated growth' }
           ].map((stat, i) => (
             <div key={i} className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
               <div className="text-5xl font-bold text-slate-900 mb-2">{stat.val}</div>
               <div className="text-sm font-bold text-[#FF6A3D] uppercase tracking-wide mb-1">{stat.label}</div>
               <div className="text-xs text-slate-400">{stat.sub}</div>
             </div>
           ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 5: Real-World Patterns ---

function AIDevPatterns() {
  const patterns = [
    { title: "AI Help Center", desc: "Instant answers from your docs.", icon: Search },
    { title: "Proposal Builder", desc: "Generate sales assets in seconds.", icon: Sparkles },
    { title: "Product Advisor", desc: "Guide users to the right choice.", icon: MessageSquare }
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Real-World Patterns</h2>
          <p className="text-slate-500">Proven implementation patterns we deploy for clients.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {patterns.map((p, i) => (
             <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="h-40 bg-slate-100 flex items-center justify-center p-8">
                   <div className="w-full h-full bg-white rounded-lg shadow-sm flex flex-col p-4 gap-2 opacity-60">
                      <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
                      <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                      <div className="mt-auto h-8 bg-blue-50 rounded flex items-center justify-center text-blue-400">
                        <p.icon className="w-4 h-4" />
                      </div>
                   </div>
                </div>
                <div className="p-8">
                   <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                   <p className="text-slate-500 text-sm">{p.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 6: Inputs ---

function AIDevInputs({ onNavigateToWizard }: { onNavigateToWizard?: () => void }) {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">What We Need From You</h2>
             <p className="text-slate-500 text-lg mb-8">
               We handle the heavy lifting, but we need your domain expertise to ground the AI in reality.
             </p>
             <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-2">The Outcome</h4>
                <p className="text-slate-600 text-sm">
                  We transform these inputs into production-ready architecture, UX flows, AI logic, and scalable systems.
                </p>
             </div>
           </div>

           <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="font-bold text-slate-900 mb-6">Project Checklist</h3>
              <ul className="space-y-4">
                {[
                  "Top workflows to improve",
                  "Data locations & access rules",
                  "Compliance or security needs",
                  "Success KPIs",
                  "Brand voice & tone"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-8" onClick={onNavigateToWizard}>
                Submit Via Brief Generator
              </Button>
           </div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 7: Blueprint ---

function AIDevBlueprint() {
  const steps = [
    "Discovery & KPIs", "Data & Permissions", "Prototype", "Human Review", "Production Hardening", "Launch"
  ];

  return (
    <Section className="bg-slate-900 text-white overflow-hidden">
      <Container>
         <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold mb-4">Delivery Blueprint</h2>
           <p className="text-slate-400">Our structured path to production.</p>
         </div>

         <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden lg:block"></div>
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative z-10">
               {steps.map((step, i) => (
                 <div key={i} className="flex lg:flex-col items-center gap-4 lg:gap-6 group">
                    <div className="w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-[#FF6A3D] group-hover:scale-125 transition-all"></div>
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{step}</span>
                 </div>
               ))}
            </div>
         </div>
      </Container>
    </Section>
  );
}

// --- Section 8: Stack ---

function AIDevStack() {
  const categories = [
    { name: "AI & Orchestration", tools: "OpenAI · Anthropic · LangChain" },
    { name: "Retrieval & Data", tools: "Pinecone · Supabase · Redis" },
    { name: "Web Platform", tools: "React · Next.js · Node.js" },
    { name: "Quality", tools: "Jest · Playwright · HumanLoop" }
  ];

  return (
    <Section className="bg-white border-y border-slate-100">
      <Container>
         <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Recommended Stack</h2>
            <p className="text-slate-500">Enterprise-grade technologies we trust.</p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl text-center border border-slate-100">
                 <h4 className="font-bold text-slate-900 mb-2">{c.name}</h4>
                 <p className="text-xs text-slate-500 font-medium">{c.tools}</p>
              </div>
            ))}
         </div>
      </Container>
    </Section>
  );
}

// --- Section 9: Advanced ---

function AIDevAdvanced() {
  return (
    <Section className="bg-slate-50">
      <Container>
         <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Advanced Capabilities</h3>
              <p className="text-slate-500">Ready for complexity when you are.</p>
            </div>
            <div className="flex flex-wrap gap-4">
               {["Smart Agent Handoffs", "Embedded Widgets", "Proactive Triggers"].map((cap, i) => (
                 <div key={i} className="px-4 py-2 bg-slate-50 rounded-lg text-sm font-bold text-slate-700 border border-slate-200 flex items-center gap-2">
                   <Zap className="w-4 h-4 text-[#FF6A3D]" /> {cap}
                 </div>
               ))}
            </div>
         </div>
      </Container>
    </Section>
  );
}

// --- Section 10: Final CTA ---

function AIDevFinalCTA({ onNavigateToWizard, onNavigateToContact }: { onNavigateToWizard?: () => void, onNavigateToContact?: () => void }) {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden text-white">
       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #FF6A3D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
       
       <Container>
         <div className="text-center relative z-10 max-w-3xl mx-auto">
           <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
             Ready to Build AI That <br/>
             <span className="text-[#FF6A3D]">Actually Works?</span>
           </h2>
           <p className="text-xl text-slate-400 mb-10">
             Turn real workflows into intelligent systems — fast.
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

// --- Main Page Component ---

interface AIDevelopmentPageV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function AIDevelopmentPageV7({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: AIDevelopmentPageV7Props) {
  const handleWizard = () => onVersionChange?.('wizard');
  const handleProjects = () => onVersionChange?.('projects');
  const handleContact = () => onNavigateToAbout?.();

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} />
      
      <AIDevHero onNavigateToWizard={handleWizard} onNavigateToProjects={handleProjects} />
      <AIDevFeatures />
      <AIDevUseCases />
      <AIDevROI />
      <AIDevPatterns />
      <AIDevInputs onNavigateToWizard={handleWizard} />
      <AIDevBlueprint />
      <AIDevStack />
      <AIDevAdvanced />
      <AIDevFinalCTA onNavigateToWizard={handleWizard} onNavigateToContact={handleContact} />
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
