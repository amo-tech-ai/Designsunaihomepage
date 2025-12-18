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
  Server,
  Users,
  MousePointer2,
  Lock,
  Smartphone,
  CheckCircle2,
  Rocket
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

function ServicesHero({ onNavigateToWizard, onNavigateToProjects }: { onNavigateToWizard?: () => void, onNavigateToProjects?: () => void }) {
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
              AI Development
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
                View Projects
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Abstract AI System Visual */}
            <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl aspect-square flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-slate-50/50 rounded-2xl -z-10" />
               
               <div className="relative w-full h-full flex items-center justify-center">
                 {/* Center AI Node */}
                 <motion.div 
                    animate={{ boxShadow: ["0 0 0 0px rgba(255, 106, 61, 0.2)", "0 0 0 20px rgba(255, 106, 61, 0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full flex items-center justify-center z-20 relative"
                 >
                    <Brain className="w-10 h-10 text-[#FF6A3D]" />
                 </motion.div>

                 {/* Orbiting Nodes */}
                 {[
                   { icon: Users, label: 'User', angle: 0, dist: 140 },
                   { icon: Database, label: 'Data', angle: 120, dist: 140 },
                   { icon: Zap, label: 'Action', angle: 240, dist: 140 }
                 ].map((node, i) => (
                   <motion.div
                      key={i}
                      className="absolute w-16 h-16 bg-white border border-slate-200 rounded-xl shadow-md flex flex-col items-center justify-center z-10"
                      initial={{ x: 0, y: 0 }}
                      animate={{ 
                        x: node.dist * Math.cos(node.angle * Math.PI / 180),
                        y: node.dist * Math.sin(node.angle * Math.PI / 180)
                      }}
                   >
                      <node.icon className="w-5 h-5 text-slate-600 mb-1" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{node.label}</span>
                   </motion.div>
                 ))}

                 {/* Connecting Lines */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <circle cx="50%" cy="50%" r="140" stroke="#e2e8f0" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                    {[0, 120, 240].map((angle, i) => (
                      <line 
                        key={i}
                        x1="50%" y1="50%"
                        x2={50 + 35 * Math.cos(angle * Math.PI / 180) + "%"}
                        y2={50 + 35 * Math.sin(angle * Math.PI / 180) + "%"}
                        stroke="#e2e8f0"
                        strokeWidth="2"
                      />
                    ))}
                 </svg>
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// --- Section 2: Visual Process Timeline ---

function ServicesTimeline() {
  const steps = [
    { title: "Discover", desc: "Define workflows & KPIs" },
    { title: "Design", desc: "UX, flows, AI logic" },
    { title: "Build", desc: "Frontend, backend, API" },
    { title: "Integrate AI", desc: "Agents, search, auto" },
    { title: "Test", desc: "Accuracy, safety, speed" },
    { title: "Launch", desc: "Monitor and scale" }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How We Build AI in Weeks</h2>
          <p className="text-slate-500 text-lg">A streamlined path from concept to production.</p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative py-10">
           {/* Line */}
           <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2">
              <motion.div 
                className="h-full bg-[#FF6A3D]" 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
           </div>

           <div className="grid grid-cols-6 gap-4 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                   <div className="w-4 h-4 rounded-full bg-white border-4 border-slate-200 group-hover:border-[#FF6A3D] transition-colors mb-6 shadow-sm"></div>
                   <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                   <p className="text-xs text-slate-500">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8 pl-8 border-l-2 border-slate-100 relative">
           {steps.map((step, i) => (
             <div key={i} className="relative">
                <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#FF6A3D]"></div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
             </div>
           ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 3: Flowchart ---

function ServicesFlowchart() {
  const nodes = [
    "Client Brief", "AI Planning", "UX & Wireframes", "Development", 
    "AI Orchestration", "QA & Guardrails", "Launch", "Optimization"
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
         <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wide mb-6">
              <Users className="w-3 h-3" /> Human-in-the-Loop
           </div>
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">From Brief to Intelligent Product</h2>
           <p className="text-slate-500 text-lg">Rigorous engineering meets adaptive AI.</p>
         </div>

         <div className="max-w-6xl mx-auto overflow-x-auto pb-8">
            <div className="flex justify-center min-w-max gap-4">
              {nodes.map((node, i) => (
                <React.Fragment key={i}>
                   <div className="relative group">
                      <div className={`px-5 py-3 rounded-lg border-2 font-bold text-sm transition-all duration-300 ${
                        i === 0 || i === nodes.length - 1
                        ? 'bg-slate-900 border-slate-900 text-white'
                        : 'bg-white border-slate-200 text-slate-700 shadow-sm group-hover:border-[#FF6A3D]'
                      }`}>
                        {node}
                      </div>
                   </div>
                   {i < nodes.length - 1 && (
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

// --- Section 4: Features ---

function ServicesFeatures() {
  const features = [
    { icon: MessageSquare, title: "Natural-Language Interfaces", desc: "Chat that understands context, intent, and nuance." },
    { icon: Search, title: "AI Search & Retrieval", desc: "Connect LLMs to your data for accurate, cited answers." },
    { icon: Sparkles, title: "Personalization Engines", desc: "Adapt content and suggestions to user behavior in real-time." },
    { icon: Bot, title: "AI Agents & Automations", desc: "Autonomous workers that execute multi-step workflows." },
    { icon: Terminal, title: "AI Content Generation", desc: "Create SEO articles, summaries, and reports instantly." },
    { icon: Users, title: "CX Assistants", desc: "24/7 support that resolves 60% of tickets automatically." }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-100 hover:border-[#FF6A3D]/30 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF6A3D] mb-6 group-hover:scale-110 transition-transform">
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

// --- Section 5: Use Cases ---

function ServicesUseCases() {
  const cases = [
    { title: "Sales & Marketing Co-Pilot", path: "Visitor → AI Qualify → CRM Update → Proposal Gen" },
    { title: "Support Automation", path: "Question → Knowledge Base → Answer → Escalation" },
    { title: "Internal Knowledge Search", path: "Employee Query → Vector DB → Cited Answer" },
    { title: "E-commerce Guidance", path: "Browse → Style Match → Recommendation → Purchase" },
    { title: "Operational Dashboard", path: "Raw Data → AI Analysis → Insight → Decision" }
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Where AI Delivers Immediate Value</h2>
            <p className="text-slate-500 text-lg mb-8">
               We identify high-friction workflows and replace them with intelligent, automated systems.
            </p>
            <div className="space-y-4">
              {cases.map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#FF6A3D] transition-colors group">
                   <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                   <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 p-2 rounded-lg group-hover:bg-orange-50 group-hover:text-orange-700 transition-colors">
                      <Workflow className="w-3 h-3" /> {c.path}
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
             {/* Visual Abstraction of a User Journey */}
             <div className="relative w-full max-w-md aspect-[4/5] bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col gap-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide text-center mb-4">Live System View</div>
                {[1, 2, 3, 4].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.5 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 1 ? 'bg-[#FF6A3D] text-white' : 'bg-white text-slate-400 border border-slate-200'}`}>
                      {i === 1 ? <Bot className="w-4 h-4" /> : <div className="w-2 h-2 bg-current rounded-full" />}
                    </div>
                    <div className="flex-1 space-y-2">
                       <div className="h-2 w-24 bg-slate-200 rounded"></div>
                       <div className="h-2 w-full bg-slate-100 rounded"></div>
                    </div>
                  </motion.div>
                ))}
                {/* Connecting Line */}
                <div className="absolute top-20 left-[48px] bottom-20 w-0.5 bg-slate-200 -z-10"></div>
             </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 6: Metrics ---

function ServicesMetrics() {
  const metrics = [
    { label: "Conversion Rate", value: "+35%" },
    { label: "Speed to Market", value: "3x" },
    { label: "Response Accuracy", value: "99%" },
    { label: "CSAT Score", value: "4.8/5" },
    { label: "ROI (Year 1)", value: "300%" },
    { label: "System Uptime", value: "99.9%" }
  ];

  return (
    <Section className="bg-white">
      <Container>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                 <div className="text-4xl font-bold text-slate-900 mb-2">{m.value}</div>
                 <div className="text-xs font-bold text-[#FF6A3D] uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
         </div>
      </Container>
    </Section>
  );
}

// --- Section 7: Estimator ---

function ServicesEstimator({ onNavigateToWizard }: { onNavigateToWizard?: () => void }) {
  const [complexity, setComplexity] = useState(50);
  const [integrations, setIntegrations] = useState(2);

  const weeks = Math.round(4 + (complexity / 100) * 4 + integrations * 0.5);

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Estimate Your AI Project Timeline</h2>
          <p className="text-slate-500">Get a rough idea of how fast we can move.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden grid md:grid-cols-2">
           <div className="p-10 space-y-8 border-b md:border-b-0 md:border-r border-slate-100">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Project Complexity</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={complexity}
                  onChange={(e) => setComplexity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6A3D]"
                />
                <div className="flex justify-between mt-2 text-xs text-slate-400 font-bold">
                  <span>Standard MVP</span>
                  <span>Enterprise Platform</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Key Integrations</label>
                <div className="flex gap-2">
                   {[1, 2, 3, 4].map(n => (
                     <button 
                       key={n}
                       onClick={() => setIntegrations(n)}
                       className={`w-10 h-10 rounded-lg font-bold transition-all ${integrations === n ? 'bg-[#FF6A3D] text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                     >
                       {n}
                     </button>
                   ))}
                </div>
                <p className="text-xs text-slate-400 mt-2">e.g. CRM, Database, Payment Gateway, API</p>
              </div>

              <Button variant="primary" className="w-full" onClick={onNavigateToWizard}>
                Get My Detailed Plan
              </Button>
           </div>

           <div className="p-10 bg-slate-50/50 flex flex-col justify-center items-center text-center">
              <div className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">Estimated Timeline</div>
              <div className="text-6xl font-bold text-slate-900 mb-6">{weeks} Weeks</div>
              
              <div className="w-full max-w-xs space-y-3">
                 <div className="flex justify-between text-xs font-bold text-slate-500">
                   <span>Design</span>
                   <span>Build</span>
                   <span>Launch</span>
                 </div>
                 <div className="h-3 bg-slate-200 rounded-full overflow-hidden flex">
                    <div className="h-full bg-slate-400 w-[20%]"></div>
                    <div className="h-full bg-[#FF6A3D] w-[60%] animate-pulse"></div>
                    <div className="h-full bg-slate-300 w-[20%]"></div>
                 </div>
              </div>
           </div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 8: Final CTA ---

function ServicesFinalCTA({ onNavigateToWizard, onNavigateToContact }: { onNavigateToWizard?: () => void, onNavigateToContact?: () => void }) {
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

interface ServicesPageV2Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function ServicesPageV2({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: ServicesPageV2Props) {
  const handleWizard = () => onVersionChange?.('wizard');
  const handleProjects = () => onVersionChange?.('projects');
  const handleContact = () => onNavigateToAbout?.();

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
      
      <ServicesHero onNavigateToWizard={handleWizard} onNavigateToProjects={handleProjects} />
      <ServicesTimeline />
      <ServicesFlowchart />
      <ServicesFeatures />
      <ServicesUseCases />
      <ServicesMetrics />
      <ServicesEstimator onNavigateToWizard={handleWizard} />
      <ServicesFinalCTA onNavigateToWizard={handleWizard} onNavigateToContact={handleContact} />
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
