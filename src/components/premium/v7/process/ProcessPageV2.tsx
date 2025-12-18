import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  BarChart3, 
  Clock, 
  Zap, 
  Shield, 
  Database,
  Rocket,
  Layout,
  Code,
  Search,
  CheckCircle,
  TrendingUp,
  Activity,
  MessageSquare,
  Users
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

function ProcessHero({ onNavigateToWizard, onNavigateToProjects }: { onNavigateToWizard?: () => void, onNavigateToProjects?: () => void }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF6A3D]/20 to-slate-900/0 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#FF6A3D] text-xs font-bold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-pulse"></span>
              AMO AI Process
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              8 Weeks. <br/>
              <span className="text-[#FF6A3D]">Not 8 Months.</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
              We move fast without cutting corners—AI acceleration + expert delivery for measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" onClick={onNavigateToWizard}>
                Start Your AI Brief <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:border-[#FF6A3D] hover:text-[#FF6A3D]" onClick={onNavigateToProjects}>
                See Success Stories
              </Button>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-800 pt-8">
              {[
                { label: 'Projects Delivered', value: '20+' },
                { label: 'Monthly GMV', value: '$2M+' },
                { label: 'Average ROI', value: '300%' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Circular Progress Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[500px] h-[500px]">
               {/* Rings */}
               <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full rotate-[-90deg]">
                 <circle cx="250" cy="250" r="240" fill="none" stroke="#1e293b" strokeWidth="2" />
                 <motion.circle 
                   cx="250" cy="250" r="240" 
                   fill="none" 
                   stroke="#FF6A3D" 
                   strokeWidth="4"
                   strokeDasharray="1507" // 2 * pi * 240
                   strokeDashoffset="1507"
                   animate={{ strokeDashoffset: [1507, 0] }}
                   transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                 />
               </svg>

               {/* Inner Content */}
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                 <div className="w-64 h-64 rounded-full bg-slate-800/50 backdrop-blur border border-slate-700 flex flex-col items-center justify-center p-8 relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-dashed border-slate-600 opacity-30"
                    />
                    <div className="text-4xl font-bold text-white mb-2">8 Weeks</div>
                    <div className="text-sm text-[#FF6A3D] font-bold uppercase tracking-wider">Delivery Cycle</div>
                 </div>
               </div>

               {/* Orbiting Nodes */}
               {[
                 { icon: Layout, label: 'Design', angle: 0 },
                 { icon: Code, label: 'Build', angle: 90 },
                 { icon: Shield, label: 'Test', angle: 180 },
                 { icon: Rocket, label: 'Launch', angle: 270 }
               ].map((node, i) => (
                 <motion.div
                    key={i}
                    className="absolute w-16 h-16 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 z-10"
                    style={{ 
                      top: '50%', 
                      left: '50%',
                      marginTop: -32,
                      marginLeft: -32,
                    }}
                    animate={{ 
                      x: 240 * Math.cos(node.angle * Math.PI / 180),
                      y: 240 * Math.sin(node.angle * Math.PI / 180),
                    }}
                 >
                    <node.icon className="w-6 h-6" />
                    <div className="absolute top-full mt-2 text-xs font-bold text-slate-500 whitespace-nowrap">{node.label}</div>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// --- Section 2: Horizontal Timeline ---

function ProcessTimeline() {
  const steps = [
    {
      id: 1,
      title: "Design Sprint",
      icon: Layout,
      duration: "1-2 Weeks",
      bullets: ["Strategy + Wireframes", "UI Direction"],
      progress: 25
    },
    {
      id: 2,
      title: "Rapid Build",
      icon: Code,
      duration: "3-5 Weeks",
      bullets: ["Frontend + Backend", "AI Integrations"],
      progress: 60
    },
    {
      id: 3,
      title: "Test & Integrate",
      icon: Shield,
      duration: "6-7 Weeks",
      bullets: ["QA & Security", "Performance Checks"],
      progress: 85
    },
    {
      id: 4,
      title: "Launch & Scale",
      icon: Rocket,
      duration: "Week 8",
      bullets: ["Deploy & Monitor", "Improve Conversion"],
      progress: 100
    }
  ];

  return (
    <Section className="bg-white overflow-hidden">
      <Container>
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our 8-Week Process</h2>
          <p className="text-slate-500 text-lg max-w-2xl">A predictable system for speed, quality, and outcomes.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-slate-100">
            <motion.div 
               className="h-full bg-[#FF6A3D]"
               initial={{ width: 0 }}
               whileInView={{ width: '100%' }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0">
             {steps.map((step, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.2 }}
                 className="relative group"
               >
                 {/* Node */}
                 <div className="w-24 h-24 mx-auto lg:mx-0 bg-white border-4 border-slate-100 group-hover:border-[#FF6A3D] rounded-full flex items-center justify-center relative z-10 transition-colors duration-300 mb-8">
                    <span className="text-2xl font-bold text-slate-300 group-hover:text-[#FF6A3D] transition-colors">{step.id}</span>
                 </div>

                 {/* Card Content */}
                 <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 mx-4 lg:mx-4 lg:mr-8 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white rounded-lg text-[#FF6A3D] shadow-sm">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-xl text-slate-900">{step.title}</h3>
                    </div>

                    <ul className="space-y-3 mb-6 flex-1">
                      {step.bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D]" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-200">
                       <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                         <span>Typical Duration</span>
                         <span className="text-[#FF6A3D]">{step.duration}</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                         <div style={{ width: `${step.progress}%` }} className="h-full bg-[#FF6A3D]"></div>
                       </div>
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 3: Flowchart ---

function ProcessFlowchart() {
  const nodes = [
    "Client Brief", "AI Planning", "UX/Wireframes", "Build Sprint", 
    "AI Integration", "QA/Testing", "Launch", "Optimization"
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
         <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wide mb-6">
              <Users className="w-3 h-3" /> Human-in-the-loop
           </div>
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">From Brief to Launch</h2>
           <p className="text-slate-500 text-lg">A clear workflow where AI acceleration meets expert oversight.</p>
         </div>

         <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {nodes.map((node, i) => (
                <React.Fragment key={i}>
                   <div className="relative group">
                      <div className={`px-6 py-4 rounded-xl border-2 font-bold text-sm transition-all duration-300 ${
                        i % 2 === 0 ? 'bg-white border-slate-200 text-slate-900 shadow-sm' : 'bg-[#FF6A3D] border-[#FF6A3D] text-white shadow-lg shadow-orange-500/20'
                      }`}>
                        {node}
                      </div>
                   </div>
                   {i < nodes.length - 1 && (
                     <div className="flex items-center text-slate-300">
                       <ArrowRight className="w-5 h-5" />
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

// --- Section 4: Comparison ---

function ProcessComparison({ onNavigateToProcess }: { onNavigateToProcess?: () => void }) {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why 8 Weeks Beats 6 Months</h2>
          <p className="text-slate-500 text-lg">Our streamlined process saves time and reduces risk.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
           {/* Traditional */}
           <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-slate-600 mb-8">Traditional Agency</h3>
              <ul className="space-y-6">
                {[
                  { label: "Time to Market", val: "24-32 Weeks", bad: true },
                  { label: "Cost Efficiency", val: "Low (Hourly Bloat)", bad: true },
                  { label: "On-time Delivery", val: "Unpredictable", bad: true },
                  { label: "Feedback Cycles", val: "Slow & Manual", bad: true },
                  { label: "Risk / Rework", val: "High", bad: true }
                ].map((row, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                    <span className="text-slate-500 font-medium">{row.label}</span>
                    <span className="text-slate-700 font-bold text-right">{row.val}</span>
                  </li>
                ))}
              </ul>
           </div>

           {/* AMO AI */}
           <div className="relative p-8 rounded-2xl bg-white border-2 border-[#FF6A3D] shadow-2xl scale-105 z-10">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF6A3D] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                The AMO AI Way
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">AMO AI</h3>
              
              {/* Visual Bar Chart */}
              <div className="mb-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
                 <div className="flex items-end gap-4 h-32 justify-center">
                    <div className="w-16 bg-slate-300 rounded-t-lg h-full relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-xs font-bold text-slate-400">24w</div>
                    </div>
                    <div className="w-16 bg-[#FF6A3D] rounded-t-lg h-[33%] relative group shadow-[0_0_20px_rgba(255,106,61,0.4)]">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-xs font-bold text-[#FF6A3D]">8w</div>
                    </div>
                 </div>
                 <div className="text-center mt-2 text-xs font-bold text-slate-500 uppercase tracking-wide">Time to Market</div>
              </div>

              <ul className="space-y-6">
                {[
                  { label: "Time to Market", val: "8 Weeks Guaranteed", highlight: true },
                  { label: "Cost Efficiency", val: "High (Fixed Price)", highlight: true },
                  { label: "On-time Delivery", val: "98% Success Rate", highlight: true },
                  { label: "Feedback Cycles", val: "Real-time / AI", highlight: true },
                  { label: "Risk / Rework", val: "Near Zero", highlight: true }
                ].map((row, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <span className="text-slate-500 font-medium">{row.label}</span>
                    <span className={`font-bold text-right ${row.highlight ? 'text-[#FF6A3D]' : 'text-slate-900'}`}>{row.val}</span>
                  </li>
                ))}
              </ul>
           </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" onClick={onNavigateToProcess}>Learn More About Our Process</Button>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 5: Metrics ---

function ProcessMetrics() {
  const metrics = [
    { label: "Projects Delivered", value: 42, suffix: "+" },
    { label: "Avg ROI", value: 315, suffix: "%" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Speed to Launch", value: 8, suffix: " Weeks" },
    { label: "Uptime / Monitoring", value: 99.9, suffix: "%" },
    { label: "Support Response", value: 15, suffix: " Min" }
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
         <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Proven Track Record</h2>
           <p className="text-slate-500 text-lg">Results you can measure.</p>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
           {metrics.map((m, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
             >
                <div className="h-12 w-full mb-4 flex items-end gap-1 opacity-20">
                   {[...Array(5)].map((_, j) => (
                     <div key={j} className="bg-[#FF6A3D] w-1/5 rounded-t-sm" style={{ height: `${Math.random() * 60 + 40}%` }}></div>
                   ))}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-1">
                  {m.value}{m.suffix}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">{m.label}</div>
             </motion.div>
           ))}
         </div>
      </Container>
    </Section>
  );
}

// --- Section 6: Timeline Calculator ---

function ProcessCalculator({ onNavigateToWizard }: { onNavigateToWizard?: () => void }) {
  const [industry, setIndustry] = useState('SaaS');
  const [complexity, setComplexity] = useState(50);
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = () => {
    setCalculated(true);
  };

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Calculate Your Timeline</h2>
          <p className="text-slate-500 text-lg">Get a rough estimate based on industry + complexity.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xl grid md:grid-cols-2">
           <div className="p-8 md:p-12 space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Industry</label>
                <select 
                  value={industry}
                  onChange={(e) => { setIndustry(e.target.value); setCalculated(false); }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-600 focus:border-[#FF6A3D] outline-none"
                >
                  {['SaaS', 'E-commerce', 'Healthcare', 'Fintech', 'Real Estate'].map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Complexity</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={complexity}
                  onChange={(e) => { setComplexity(Number(e.target.value)); setCalculated(false); }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6A3D]"
                />
                <div className="flex justify-between mt-2 text-xs text-slate-400 font-bold">
                  <span>MVP</span>
                  <span>Enterprise</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Integrations</label>
                <div className="flex flex-wrap gap-2">
                  {['Stripe', 'CRM', 'AI Model', 'Auth'].map(chip => (
                    <button key={chip} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors">
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <Button variant="primary" className="w-full" onClick={handleCalculate}>
                Calculate Timeline
              </Button>
           </div>

           <div className="bg-white p-8 md:p-12 flex flex-col justify-center border-l border-slate-200">
              {!calculated ? (
                 <div className="text-center text-slate-400">
                    <Clock className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p className="font-medium">Enter details to see estimate</p>
                 </div>
              ) : (
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="text-center"
                 >
                    <div className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">Estimated Timeline</div>
                    <div className="text-5xl font-bold text-[#FF6A3D] mb-6">4-6 Weeks</div>
                    
                    <div className="space-y-4 mb-8">
                       <div className="flex justify-between text-xs font-bold text-slate-900">
                         <span>Phase 1: Design</span>
                         <span>1 Week</span>
                       </div>
                       <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: '25%' }}
                           transition={{ duration: 1 }}
                           className="h-full bg-[#FF6A3D]"
                         />
                       </div>
                       
                       <div className="flex justify-between text-xs font-bold text-slate-900">
                         <span>Phase 2: Build</span>
                         <span>3-4 Weeks</span>
                       </div>
                       <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: '60%' }}
                           transition={{ duration: 1, delay: 0.2 }}
                           className="h-full bg-[#FF6A3D]"
                         />
                       </div>
                    </div>

                    <Button variant="outline" className="w-full" onClick={onNavigateToWizard}>Start Your AI Brief</Button>
                 </motion.div>
              )}
           </div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 7: Final CTA ---

function ProcessFinalCTA({ onNavigateToWizard, onNavigateToContact }: { onNavigateToWizard?: () => void, onNavigateToContact?: () => void }) {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden text-white">
       {/* Particles */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
       
       <Container>
         <div className="text-center relative z-10 max-w-3xl mx-auto">
           <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
             Ready to Launch in <br/>
             <span className="text-[#FF6A3D]">8 Weeks?</span>
           </h2>
           <p className="text-xl text-slate-400 mb-10">
             Get a scoped plan in minutes and start building immediately.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="primary" onClick={onNavigateToWizard}>
               Start Your AI Brief
             </Button>
             <Button variant="white" onClick={onNavigateToContact} className="bg-transparent text-white border-white/20 hover:bg-white hover:text-slate-900 hover:border-white">
               Contact Us
             </Button>
           </div>
         </div>
       </Container>
    </section>
  );
}

// --- Main Page Component ---

interface ProcessPageV2Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function ProcessPageV2({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: ProcessPageV2Props) {
  const handleWizard = () => onVersionChange?.('wizard');
  const handleProjects = () => onVersionChange?.('projects');
  const handleProcess = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleContact = () => onNavigateToAbout?.();

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
      
      <ProcessHero onNavigateToWizard={handleWizard} onNavigateToProjects={handleProjects} />
      <ProcessTimeline />
      <ProcessFlowchart />
      <ProcessComparison onNavigateToProcess={handleProcess} />
      <ProcessMetrics />
      <ProcessCalculator onNavigateToWizard={handleWizard} />
      <ProcessFinalCTA onNavigateToWizard={handleWizard} onNavigateToContact={handleContact} />
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
