import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Code, 
  Cpu, 
  Layout, 
  Zap, 
  Search, 
  MessageSquare, 
  Globe, 
  Smartphone, 
  BarChart, 
  Layers, 
  PenTool, 
  Terminal, 
  Database, 
  Bot, 
  Image as ImageIcon,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Eye
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
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost', 
  children: React.ReactNode, 
  className?: string,
  onClick?: () => void
}) {
  const baseStyle = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl cursor-pointer text-sm";
  const variants = {
    primary: "bg-[#FF6A3D] text-white hover:bg-[#E55A2F] shadow-lg shadow-orange-500/20 px-8 py-4",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-[#FF6A3D] hover:text-[#FF6A3D] px-8 py-4",
    outline: "bg-transparent border border-slate-200 text-slate-600 hover:border-[#FF6A3D] hover:text-[#FF6A3D] px-6 py-3",
    ghost: "bg-transparent text-slate-600 hover:text-[#FF6A3D] px-4 py-2"
  };

  return <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
}

// --- Section 1: Hero ---

function WebDevHero({ onNavigateToWizard, onNavigateToProjects }: { onNavigateToWizard?: () => void, onNavigateToProjects?: () => void }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FDFDFD]">
      {/* Background Decor */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.4, 0.6, 0.4] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-100/40 to-slate-100/40 rounded-full blur-3xl -z-10 pointer-events-none" 
      />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6A3D]"></span>
              AI-Powered Development
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              AI-Powered <br/>
              <span className="text-[#FF6A3D]">Web Design & Development</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
              Faster builds. Smarter interfaces. Human creativity—amplified by AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={onNavigateToWizard}>
                Start Your AI Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" onClick={onNavigateToProjects}>
                See Case Studies
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-100 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono">workflow.tsx</div>
              </div>

              {/* Abstract Workflow Visualization */}
              <div className="relative h-64 flex items-center justify-between px-4">
                 {/* Connection Line */}
                 <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10"></div>
                 
                 {/* Steps */}
                 {[
                   { icon: MessageSquare, label: 'Prompt' },
                   { icon: Layout, label: 'Design' },
                   { icon: Code, label: 'Code' },
                   { icon: RocketIcon, label: 'Deploy' }
                 ].map((step, i) => (
                   <div key={i} className="flex flex-col items-center gap-4 bg-white p-2">
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${i === 1 ? 'border-[#FF6A3D] bg-orange-50 text-[#FF6A3D] scale-110 shadow-lg shadow-orange-500/20' : 'border-slate-200 bg-white text-slate-400'}`}>
                       <step.icon className="w-5 h-5" />
                     </div>
                     <span className={`text-xs font-bold ${i === 1 ? 'text-[#FF6A3D]' : 'text-slate-400'}`}>{step.label}</span>
                   </div>
                 ))}

                 {/* Animated Dot */}
                 <motion.div 
                   animate={{ left: ['10%', '90%'] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF6A3D] rounded-full shadow-[0_0_10px_#FF6A3D]"
                 />
              </div>
            </div>
            
            {/* Background Blob behind card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-orange-100/50 transform rotate-6 scale-105 rounded-3xl -z-10 blur-xl"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Rocket Icon Helper
const RocketIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

// --- Section 3: Overview (How It Works) ---

function WebDevProcess({ onNavigateToWizard }: { onNavigateToWizard?: () => void }) {
  const steps = [
    {
      icon: MessageSquare,
      title: "Prompt Input",
      desc: "Describe your brand, goals, and target audience. Our AI analyzes your intent to establish the perfect direction."
    },
    {
      icon: Brain,
      title: "AI Understanding",
      desc: "The system interprets your requirements, matching tone, layout preferences, and functional needs automatically."
    },
    {
      icon: Layout,
      title: "Design Generation",
      desc: "We generate high-fidelity UI layouts, component systems, and style guides tailored to your brand identity."
    },
    {
      icon: Code,
      title: "Code & Optimize",
      desc: "Designs are converted into clean, production-ready code (React/Tailwind) with built-in SEO and accessibility."
    },
    {
      icon: RefreshCw,
      title: "Deploy & Learn",
      desc: "Launch instantly. Our AI tools continue to analyze user behavior to suggest improvements over time."
    }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-500 text-lg max-w-2xl">A smarter workflow that turns prompts into production-ready websites.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          {/* Left: Steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-[#FF6A3D] group-hover:border-orange-100 transition-all duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-8 flex items-center gap-6">
               <a href="#features" className="text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-[#FF6A3D] hover:border-[#FF6A3D] transition-colors">
                 See it in action
               </a>
               <Button variant="primary" className="px-6 py-3 text-xs" onClick={onNavigateToWizard}>Start Brief</Button>
            </div>
          </div>

          {/* Right: Sticky Visual */}
          <div className="hidden lg:block relative">
            <div className="sticky top-32">
              <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                   <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                   <div className="text-xs text-slate-500 font-mono ml-2">generator.ts</div>
                </div>
                <div className="font-mono text-xs sm:text-sm">
                  <div className="text-purple-400">const <span className="text-blue-400">generateSite</span> = <span className="text-purple-400">async</span> (brief) ={'>'} {'{'}</div>
                  <div className="pl-4 text-slate-400">
                    <span className="text-slate-500">// 1. Analyze intent</span><br/>
                    <span className="text-blue-400">const</span> intent = <span className="text-purple-400">await</span> ai.analyze(brief);
                  </div>
                  <div className="pl-4 mt-2 text-slate-400">
                    <span className="text-slate-500">// 2. Generate UI System</span><br/>
                    <span className="text-blue-400">const</span> design = <span className="text-purple-400">await</span> system.create(intent);
                  </div>
                  <div className="pl-4 mt-2 text-slate-400">
                     <span className="text-slate-500">// 3. Build Components</span><br/>
                     <span className="text-yellow-400">return</span> {'<'}App theme={'{'}design{'}'} /{' >'};
                  </div>
                  <div className="text-purple-400">{'}'}</div>
                </div>
                
                <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                   <div className="flex items-center gap-3 mb-2">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-xs text-green-400 font-mono uppercase">System Ready</span>
                   </div>
                   <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-[75%]"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

const Brain = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
);

const RefreshCw = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
);


// --- Section 4: Key Features ---

function WebDevFeatures({ onNavigateToWizard }: { onNavigateToWizard?: () => void }) {
  const features = [
    {
      icon: MessageSquare,
      title: "Prompt-Based Design",
      value: "Turn natural language into layout direction",
      detail: "Simply describe what you want, and we generate the structure."
    },
    {
      icon: PenTool,
      title: "Smart Copywriting",
      value: "Headlines, CTAs, SEO copy generated in your tone",
      detail: "No more Lorem Ipsum. Real, converting copy from day one."
    },
    {
      icon: Terminal,
      title: "Code Automation",
      value: "Convert designs into React/Vite or Webflow builds",
      detail: "Clean, component-based code that developers love."
    },
    {
      icon: Eye,
      title: "Visual Recognition",
      value: "Turn references/screenshots into usable components",
      detail: "Upload a screenshot, get a coded component instantly."
    },
    {
      icon: BarChart,
      title: "Optimization & Analytics",
      value: "UX insights + performance improvements",
      detail: "Built-in Core Web Vitals optimization."
    },
    {
      icon: Bot,
      title: "AI Chatbots",
      value: "On-site assistants for support + conversion",
      detail: "Embed custom trained agents in one click."
    }
  ];

  return (
    <Section id="features" className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What You Get</h2>
          <p className="text-slate-500">Everything needed to launch a modern site—faster and smarter.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-orange-50 group-hover:text-[#FF6A3D] transition-colors">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm font-bold text-[#FF6A3D] mb-3">{f.value}</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {f.detail}
              </p>
              <button onClick={onNavigateToWizard} className="text-sm font-bold text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                Start Brief <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 5: Client Inputs ---

function WebDevInputs({ onNavigateToWizard }: { onNavigateToWizard?: () => void }) {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What We Need From You</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              A few inputs so AI can generate a site that matches your brand. 
              <br/><span className="text-slate-400 text-sm">(We refine everything with a human team.)</span>
            </p>
            
            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl mb-8">
              <div className="flex gap-4">
                 <div className="shrink-0 w-10 h-10 bg-[#FF6A3D] rounded-full flex items-center justify-center text-white">
                   <ShieldCheck className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 mb-1">Human-in-the-loop</h4>
                   <p className="text-sm text-slate-600">While AI does the heavy lifting, our expert designers review every pixel to ensure quality.</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
             <h3 className="font-bold text-lg text-slate-900 mb-6">Your Checklist</h3>
             <ul className="space-y-4 mb-8">
               {[
                 'Brand story / tagline',
                 'Goals (leads, bookings, sales, authority)',
                 'Design preferences (tone, examples, palette)',
                 'Assets (logo, images, copy samples)',
                 'Page priorities (home, services, projects, blog)'
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                     <Check className="w-3 h-3" />
                   </div>
                   <span className="text-slate-600 text-sm font-medium">{item}</span>
                 </li>
               ))}
             </ul>
             <Button variant="outline" className="w-full" onClick={onNavigateToWizard}>
               Upload your brief <ArrowRight className="w-4 h-4 ml-2" />
             </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 6: Benefits ---

function WebDevBenefits() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why AI Web Dev Wins</h2>
           <p className="text-slate-500">Faster delivery without sacrificing quality.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits List */}
          <div className="space-y-6">
            {[
              { icon: Clock, label: 'Speed', text: 'Launch in days, not months' },
              { icon: Zap, label: 'Efficiency', text: 'Cut dev effort by up to 60%' },
              { icon: Layers, label: 'Consistency', text: 'Brand-aligned, reusable components' },
              { icon: RefreshCw, label: 'Scalable', text: 'Clone pages + generate variations' },
              { icon: Eye, label: 'Accessible', text: 'Contrast, SEO, and A11Y checks' },
              { icon: BarChart, label: 'Data-Driven', text: 'Improves with real user behavior' },
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="shrink-0 text-[#FF6A3D] mt-1">
                  <b.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 mr-2">{b.label}:</span>
                  <span className="text-slate-500">{b.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Metric Blocks */}
          <div className="flex flex-col gap-6 justify-center">
             <div className="bg-[#FF6A3D] text-white p-8 rounded-3xl shadow-lg shadow-orange-500/20 text-center">
               <div className="text-6xl font-bold mb-2">8</div>
               <div className="text-xl font-bold opacity-90">Weeks Typical Delivery</div>
               <p className="text-sm mt-4 opacity-80">From concept to live launch</p>
             </div>
             <div className="grid sm:grid-cols-2 gap-6">
               <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center">
                 <div className="text-3xl font-bold text-slate-900 mb-2">+300%</div>
                 <div className="text-sm text-slate-500">Conversion Lift Potential</div>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center">
                 <div className="text-3xl font-bold text-slate-900 mb-2">90+</div>
                 <div className="text-sm text-slate-500">Lighthouse Perf. Goals</div>
               </div>
             </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 7: Tools ---

function WebDevTools() {
  const stack = [
    { cat: 'Design', tools: ['Figma AI', 'Lovable'] },
    { cat: 'Build', tools: ['Vite', 'Webflow', 'Claude', 'Cursor'] },
    { cat: 'Backend', tools: ['Supabase', 'Clerk'] },
    { cat: 'Automation', tools: ['n8n', 'CrewAI'] },
    { cat: 'AI Models', tools: ['OpenAI', 'LangChain'] },
  ];

  return (
    <Section className="bg-white border-y border-slate-100">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Tools We Use</h2>
          <p className="text-slate-500">Where human taste meets AI precision.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {stack.map((group, i) => (
             <div key={i} className="flex flex-col items-center gap-3 p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{group.cat}</span>
                <div className="flex gap-2">
                   {group.tools.map((tool, j) => (
                     <span key={j} className="px-4 py-2 bg-slate-50 rounded-lg text-sm font-bold text-slate-700 border border-slate-200">
                       {tool}
                     </span>
                   ))}
                </div>
             </div>
          ))}
        </div>
        
        <div className="text-center mt-8 text-sm text-slate-400 italic">
          Stack adapts to your needs—webflow-first or code-first builds.
        </div>
      </Container>
    </Section>
  );
}

// --- Section 8: Real-World Use Cases ---

function WebDevUseCases({ onNavigateToProjects }: { onNavigateToProjects?: () => void }) {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Real-World Use Cases</h2>
          <p className="text-slate-500">Examples of how clients use AI-assisted web builds.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "E-commerce",
              desc: "Product pages + descriptions + on-site assistant",
              result: "Reduced content creation time by 60%"
            },
            {
              title: "Startups",
              desc: "Landing page from a short brief",
              result: "Launch MVP websites 5× faster"
            },
            {
              title: "Education",
              desc: "Personalized portal UI for different users",
              result: "Higher engagement with tailored journeys"
            }
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
               <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                 {/* Abstract Placeholder */}
                 <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur flex items-center justify-center">
                   <div className="w-8 h-8 rounded bg-slate-300"></div>
                 </div>
               </div>
               <div className="p-8">
                 <h3 className="font-bold text-xl text-slate-900 mb-2">{c.title}</h3>
                 <p className="text-slate-500 text-sm mb-6 h-10">{c.desc}</p>
                 <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 mb-6">
                   <p className="text-xs font-bold text-[#FF6A3D]">{c.result}</p>
                 </div>
                 <button onClick={onNavigateToProjects} className="text-sm font-bold text-slate-900 hover:text-[#FF6A3D] transition-colors">
                   View Projects →
                 </button>
               </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 9: Timeline ---

function WebDevTimeline({ onNavigateToWizard, onNavigateToProcess }: { onNavigateToWizard?: () => void, onNavigateToProcess?: () => void }) {
  const steps = ['Discovery', 'UX + Wireframes', 'UI Design System', 'Build + Integrations', 'QA + Launch', 'Optimize'];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The 8-Week Build Timeline</h2>
          <p className="text-slate-500">A clear path from discovery to launch—no chaos.</p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-0 w-full h-1 bg-slate-100 rounded-full">
            <motion.div 
               className="h-full bg-[#FF6A3D] rounded-full"
               initial={{ width: 0 }}
               whileInView={{ width: '100%' }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
             {steps.map((step, i) => (
               <div key={i} className="flex lg:flex-col items-center gap-4 lg:gap-0 lg:text-center relative">
                 {/* Circle */}
                 <div className="w-12 h-12 lg:w-12 lg:h-12 rounded-full bg-white border-4 border-slate-100 text-slate-500 font-bold flex items-center justify-center z-10 lg:mb-4 shrink-0 transition-colors duration-500 hover:border-[#FF6A3D] hover:text-[#FF6A3D]">
                   {i + 1}
                 </div>
                 {/* Vertical Line (Mobile) */}
                 {i !== steps.length - 1 && (
                   <div className="lg:hidden absolute top-12 left-6 w-1 h-full bg-slate-100 -translate-x-1/2 -z-10"></div>
                 )}
                 <span className="font-bold text-sm text-slate-900">{step}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="flex justify-center gap-4">
           <Button variant="primary" onClick={onNavigateToWizard}>Start Your AI Brief</Button>
           <Button variant="outline" onClick={onNavigateToProcess}>See Our Process</Button>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 10: Final CTA ---

function WebDevFinalCTA({ onNavigateToWizard, onNavigateToContact }: { onNavigateToWizard?: () => void, onNavigateToContact?: () => void }) {
  return (
    <section className="py-32 bg-gradient-to-b from-orange-50/50 to-white relative overflow-hidden">
       {/* Blobs */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl opacity-50 pointer-events-none" />

       <Container>
         <div className="text-center relative z-10 max-w-3xl mx-auto">
           <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
             Ready to Build Your <br/>
             <span className="text-[#FF6A3D]">Next-Gen Website?</span>
           </h2>
           <p className="text-xl text-slate-500 mb-10">
             Use our AI Brief Generator to get a scoped plan in minutes.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
             <Button variant="primary" onClick={onNavigateToWizard}>
               Start Your AI Brief
             </Button>
             <Button variant="white" onClick={onNavigateToContact} className="bg-white border border-slate-200">
               Contact Us
             </Button>
           </div>

           <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
             {['SEO + A11Y Ready', 'Responsive by Default', 'Production-Ready Handoff'].map((badge, i) => (
               <span key={i} className="flex items-center gap-2">
                 <Check className="w-4 h-4 text-[#FF6A3D]" /> {badge}
               </span>
             ))}
           </div>
         </div>
       </Container>
    </section>
  );
}

// --- Main Page Component ---

interface AIWebDevPageV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function AIWebDevPageV7({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: AIWebDevPageV7Props) {
  
  const handleWizard = () => onVersionChange?.('wizard');
  const handleProjects = () => onVersionChange?.('projects');
  const handleProcess = () => {}; // No explicit process page yet, usually anchors or same page
  const handleContact = () => onNavigateToAbout?.(); // Using About as Contact proxy based on footer logic

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
      
      <WebDevHero onNavigateToWizard={handleWizard} onNavigateToProjects={handleProjects} />
      <WebDevProcess onNavigateToWizard={handleWizard} />
      <WebDevFeatures onNavigateToWizard={handleWizard} />
      <WebDevInputs onNavigateToWizard={handleWizard} />
      <WebDevBenefits />
      <WebDevTools />
      <WebDevUseCases onNavigateToProjects={handleProjects} />
      <WebDevTimeline onNavigateToWizard={handleWizard} onNavigateToProcess={handleProcess} />
      <WebDevFinalCTA onNavigateToWizard={handleWizard} onNavigateToContact={handleContact} />
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
