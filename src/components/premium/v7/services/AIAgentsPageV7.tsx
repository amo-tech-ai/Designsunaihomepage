import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Bot, 
  Zap, 
  Workflow, 
  Cpu, 
  Database, 
  Shield, 
  MessageSquare, 
  Settings, 
  BarChart3, 
  Layers,
  ArrowRightLeft,
  UserCheck,
  Brain,
  Terminal,
  Clock,
  AlertCircle,
  FileText
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

function AgentsHero({ onNavigateToWizard, onNavigateToProjects }: { onNavigateToWizard?: () => void, onNavigateToProjects?: () => void }) {
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
              Custom AI Agents
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Digital Workers, <br/>
              <span className="text-[#FF6A3D]">Not Chatbots</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
              AI agents that read, decide, and act across your systems — automatically. Replace manual workflows with intelligent digital workers that scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={onNavigateToWizard}>
                Start Your AI Brief <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" onClick={onNavigateToProjects}>
                View Use Cases
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Abstract Agent System Visual */}
            <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl aspect-square flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-slate-50/50 rounded-2xl -z-10" />
               
               <div className="relative w-full h-full flex items-center justify-center">
                 {/* Central Agent Node */}
                 <div className="w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full flex items-center justify-center z-20 shadow-lg shadow-slate-900/20 relative">
                    <Bot className="w-10 h-10 text-[#FF6A3D]" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                 </div>

                 {/* Flow Nodes */}
                 {[
                   { icon: MessageSquare, label: "Trigger", x: -140, y: 0, delay: 0 },
                   { icon: Database, label: "Context", x: 0, y: -140, delay: 1 },
                   { icon: Settings, label: "Tools", x: 0, y: 140, delay: 2 },
                   { icon: Check, label: "Action", x: 140, y: 0, delay: 3 }
                 ].map((node, i) => (
                   <motion.div
                      key={i}
                      className="absolute w-16 h-16 bg-white border border-slate-200 rounded-xl shadow-md flex flex-col items-center justify-center z-10"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.2 + 0.5 }}
                      style={{ 
                        transform: `translate(${node.x}px, ${node.y}px)`
                      }}
                   >
                      <node.icon className="w-5 h-5 text-slate-600 mb-1" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{node.label}</span>
                   </motion.div>
                 ))}

                 {/* Connecting Lines Animation */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <motion.path 
                      d="M 120 280 L 260 280" 
                      stroke="#e2e8f0" 
                      strokeWidth="2" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                     <motion.path 
                      d="M 280 140 L 280 260" 
                      stroke="#e2e8f0" 
                      strokeWidth="2" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                     <motion.path 
                      d="M 280 300 L 280 420" 
                      stroke="#e2e8f0" 
                      strokeWidth="2" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 2.5 }}
                    />
                     <motion.path 
                      d="M 300 280 L 440 280" 
                      stroke="#e2e8f0" 
                      strokeWidth="2" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 3.5 }}
                    />
                 </svg>
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// --- Section 2: Comparison ---

function AgentsComparison() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What Makes an AI Agent Different</h2>
          <p className="text-slate-500 text-lg">Beyond simple Q&A.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {/* Card 1: Chatbot */}
           <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 grayscale opacity-80">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-slate-500">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-700">Standard Chatbot</h3>
              </div>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3 text-slate-500">
                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400" />
                   <span>Answers questions from static data</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-500">
                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400" />
                   <span>Cannot perform actions</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-500">
                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400" />
                   <span>Conversation stops after reply</span>
                 </li>
              </ul>
           </div>

           {/* Card 2: AI Agent */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="p-8 rounded-2xl border-2 border-[#FF6A3D]/20 bg-white shadow-xl shadow-orange-500/5 relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6A3D]/5 rounded-bl-full -mr-4 -mt-4"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF6A3D]">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">AI Agent</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                 <li className="flex items-start gap-3 text-slate-700 font-medium">
                   <Check className="w-5 h-5 text-[#FF6A3D] shrink-0" />
                   <span>Understands intent & context</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-700 font-medium">
                   <Check className="w-5 h-5 text-[#FF6A3D] shrink-0" />
                   <span>Uses tools (APIs, Databases, CRMs)</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-700 font-medium">
                   <Check className="w-5 h-5 text-[#FF6A3D] shrink-0" />
                   <span>Takes independent action</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-700 font-medium">
                   <Check className="w-5 h-5 text-[#FF6A3D] shrink-0" />
                   <span>Knows when to ask a human</span>
                 </li>
              </ul>
           </motion.div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 3: Workflow Diagram ---

function AgentsWorkflow() {
  const steps = [
    "Request", 
    "Understand Intent", 
    "Check Data", 
    "Decide Action", 
    "Use Tools", 
    "Take Action", 
    "Human Review", 
    "Outcome Logged"
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
         <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How an AI Agent Works</h2>
           <p className="text-slate-500 text-lg">Reasoning, tooling, and safe execution.</p>
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
                        i === steps.length - 2 ? 'bg-orange-50 border-[#FF6A3D] text-[#FF6A3D]' :
                        i === 0 || i === steps.length - 1
                        ? 'bg-slate-900 border-slate-900 text-white'
                        : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                      }`}>
                        {step}
                        {i === steps.length - 2 && <span className="block text-[10px] opacity-70 font-normal uppercase mt-1 text-center">Optional</span>}
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

// --- Section 4: Features ---

function AgentsFeatures() {
  const features = [
    { icon: UserCheck, title: "Task-Based AI Agents", desc: "Agents that complete specific jobs from start to finish." },
    { icon: Workflow, title: "Multi-Step Automation", desc: "AI handles complex processes across multiple tools." },
    { icon: Layers, title: "System Integrations", desc: "Agents work inside your CRMs, databases, and dashboards." },
    { icon: Zap, title: "Event-Triggered Agents", desc: "Agents react instantly to real-time events (webhooks, emails)." },
    { icon: Brain, title: "Decision & Routing Logic", desc: "AI intelligently decides when to act and when to escalate." },
    { icon: Shield, title: "Human-in-the-Loop", desc: "Humans stay in control of critical actions before execution." }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Core Capabilities</h2>
           <p className="text-slate-500 text-lg">What we build.</p>
        </div>

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

function AgentsUseCases() {
  const cases = [
    { title: "Sales Automation", path: "Lead → Agent → Qualification → CRM → Sales", result: "Sales talks only to high-intent leads." },
    { title: "Customer Support", path: "Ticket → Agent → Resolve or Escalate", result: "Faster replies, fewer tickets." },
    { title: "Operations & Admin", path: "Data → Agent → Validate → Update Systems", result: "Fewer errors, cleaner ops." },
    { title: "Marketing Automation", path: "Campaign → Agent → Monitor → Adjust", result: "Better performance, less manual work." },
    { title: "Finance & Risk", path: "Transactions → Agent → Detect Anomaly", result: "Issues caught early." }
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Where AI Agents Deliver Real Value</h2>
            <p className="text-slate-500 text-lg mb-8">
               We identify high-friction workflows and replace them with intelligent, automated systems.
            </p>
            <div className="space-y-4">
              {cases.map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#FF6A3D] transition-colors group">
                   <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                   <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 p-2 rounded-lg group-hover:bg-orange-50 group-hover:text-orange-700 transition-colors mb-2">
                      <Workflow className="w-3 h-3" /> {c.path}
                   </div>
                   <div className="text-xs text-[#FF6A3D] font-bold">Result: {c.result}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
             {/* Visual Abstraction of a Agent Journey */}
             <div className="relative w-full max-w-md aspect-[4/5] bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col gap-6">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide text-center mb-4">Live Agent View</div>
                
                {[1, 2, 3, 4].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0.5, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.5 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${i === 1 ? 'bg-[#FF6A3D] text-white animate-pulse' : 'bg-white text-slate-400 border border-slate-200'}`}>
                      {i === 1 ? <Bot className="w-4 h-4" /> : <div className="w-2 h-2 bg-current rounded-full" />}
                    </div>
                    <div className="flex-1 space-y-2">
                       <div className="h-2 w-24 bg-slate-200 rounded"></div>
                       <div className="h-2 w-full bg-slate-100 rounded"></div>
                       {i === 1 && (
                         <div className="mt-2 flex gap-2">
                           <div className="h-6 w-16 bg-orange-100 rounded text-[10px] text-[#FF6A3D] flex items-center justify-center font-bold">Running</div>
                         </div>
                       )}
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 6: Metrics ---

function AgentsMetrics() {
  const metrics = [
    { label: "Time Saved", value: "85%" },
    { label: "Error Reduction", value: "99%" },
    { label: "Response Speed", value: "10x" },
    { label: "Automation Rate", value: "70%" },
    { label: "Cost Efficiency", value: "3x" },
    { label: "System Reliability", value: "99.9%" }
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

// --- Section 7: Agent Types ---

function AgentTypes() {
  const types = [
    { title: "Intake Agent", desc: "Understands requests and routes them.", icon: MessageSquare },
    { title: "Execution Agent", desc: "Takes actions in specific tools.", icon: Terminal },
    { title: "Supervisor Agent", desc: "Monitors confidence and quality.", icon: UserCheck },
    { title: "Analytics Agent", desc: "Tracks outcomes and performance.", icon: BarChart3 }
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Common AI Agent Patterns</h2>
           <p className="text-slate-500 text-lg">Modular digital workers we can deploy.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {types.map((t, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border border-slate-200 text-center hover:border-[#FF6A3D] transition-colors">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-600">
                <t.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{t.title}</h3>
              <p className="text-sm text-slate-500">{t.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 8: Final CTA ---

function AgentsFinalCTA({ onNavigateToWizard, onNavigateToContact }: { onNavigateToWizard?: () => void, onNavigateToContact?: () => void }) {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden text-white">
       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #FF6A3D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
       
       <Container>
         <div className="text-center relative z-10 max-w-3xl mx-auto">
           <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
             Ready to Let AI <br/>
             <span className="text-[#FF6A3D]">Do the Work?</span>
           </h2>
           <p className="text-xl text-slate-400 mb-10">
             Automate real workflows with intelligent agents — safely and at scale.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="primary" onClick={onNavigateToWizard}>
               Start Your AI Brief
             </Button>
             <Button variant="white" onClick={onNavigateToContact} className="bg-transparent text-white border-white/20 hover:bg-white hover:text-slate-900 hover:border-white">
               Book a Call
             </Button>
           </div>
         </div>
       </Container>
    </section>
  );
}

// --- Main Component ---

interface AIAgentsPageV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function AIAgentsPageV7({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: AIAgentsPageV7Props) {
  const handleWizard = () => onVersionChange?.('wizard');
  const handleProjects = () => onVersionChange?.('projects');
  const handleContact = () => onNavigateToAbout?.();

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
      
      <AgentsHero onNavigateToWizard={handleWizard} onNavigateToProjects={handleProjects} />
      <AgentsComparison />
      <AgentsWorkflow />
      <AgentsFeatures />
      <AgentsUseCases />
      <AgentsMetrics />
      <AgentTypes />
      <AgentsFinalCTA onNavigateToWizard={handleWizard} onNavigateToContact={handleContact} />
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
