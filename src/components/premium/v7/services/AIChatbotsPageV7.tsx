import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Bot, 
  Zap, 
  Search, 
  Database, 
  Shield, 
  User, 
  Clock, 
  BarChart3, 
  Users,
  Calendar,
  ShoppingBag,
  HelpCircle,
  Sparkles,
  ArrowRightLeft
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

function ChatbotsHero({ onNavigateToWizard, onNavigateToProjects }: { onNavigateToWizard?: () => void, onNavigateToProjects?: () => void }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50/50 to-slate-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6A3D]"></span>
              Intelligent Chatbots
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              AI Chatbots for <br/>
              <span className="text-[#FF6A3D]">Modern Businesses</span>
            </h1>
            
            <h2 className="text-2xl font-medium text-slate-700 mb-6">
              Instant answers. Real actions. Better experiences.
            </h2>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
              We build intelligent chatbots that answer questions, complete tasks, and guide users — across your website, app, and messaging channels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={onNavigateToWizard}>
                Start Your AI Brief <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" onClick={onNavigateToProjects}>
                View Chatbot Use Cases
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Animated Chatbot System Visual */}
            <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl aspect-video flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-slate-50/50 rounded-2xl -z-10" />
               
               <div className="relative w-full h-full flex items-center justify-between px-8">
                 {/* 
                    Animation Logic: 8s Loop
                    0s: User appears
                    1s: Line 1 draws
                    2s: Chatbot appears
                    3s: Line 2 draws
                    4s: Knowledge appears
                    5s: Line 3 draws
                    6s: Action appears
                    7s: Hold
                    8s: Reset
                 */}
                 
                 {/* 1. USER NODE */}
                 <div className="flex flex-col items-center gap-3 relative z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl border bg-white border-slate-200 text-slate-600 flex items-center justify-center shadow-sm relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                      transition={{ duration: 8, times: [0, 0.1, 0.9, 1], repeat: Infinity }}
                    >
                       <User className="w-8 h-8" />
                       {/* Pulse Effect */}
                       <motion.div 
                         className="absolute inset-0 rounded-2xl border-2 border-[#FF6A3D]"
                         initial={{ opacity: 0, scale: 1 }}
                         animate={{ opacity: [0, 0.5, 0], scale: [1, 1.2, 1.2] }}
                         transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatDelay: 7 }}
                       />
                    </motion.div>
                    <motion.span 
                      className="text-xs font-bold text-slate-500 uppercase tracking-wide"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 8, times: [0, 0.1, 0.9, 1], repeat: Infinity }}
                    >
                      User
                    </motion.span>
                 </div>

                 {/* LINE 1 */}
                 <div className="flex-1 h-0.5 bg-slate-100 relative mx-4 self-center -translate-y-4">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#FF6A3D]"
                      initial={{ width: "0%" }}
                      animate={{ width: ["0%", "100%", "100%", "0%"] }}
                      transition={{ duration: 8, times: [0.1, 0.25, 0.9, 1], repeat: Infinity }}
                    />
                 </div>

                 {/* 2. CHATBOT NODE */}
                 <div className="flex flex-col items-center gap-3 relative z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl border bg-orange-50 border-orange-100 text-[#FF6A3D] flex items-center justify-center shadow-sm relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1, 0.8] }}
                      transition={{ duration: 8, times: [0, 0.25, 0.35, 0.9, 1], repeat: Infinity }}
                    >
                       <Bot className="w-8 h-8" />
                       {/* Typing Dots */}
                       <div className="absolute -top-2 -right-2 flex gap-0.5 bg-white px-1.5 py-1 rounded-full border border-slate-100 shadow-sm">
                         {[0, 1, 2].map((dot) => (
                           <motion.span 
                             key={dot}
                             className="w-1 h-1 bg-[#FF6A3D] rounded-full" 
                             animate={{ opacity: [0.3, 1, 0.3] }}
                             transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.2 }}
                           />
                         ))}
                       </div>
                    </motion.div>
                    <motion.span 
                      className="text-xs font-bold text-slate-500 uppercase tracking-wide"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 1, 1, 0] }}
                      transition={{ duration: 8, times: [0, 0.25, 0.35, 0.9, 1], repeat: Infinity }}
                    >
                      AI Chatbot
                    </motion.span>
                 </div>

                 {/* LINE 2 */}
                 <div className="flex-1 h-0.5 bg-slate-100 relative mx-4 self-center -translate-y-4">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#FF6A3D]"
                      initial={{ width: "0%" }}
                      animate={{ width: ["0%", "100%", "100%", "0%"] }}
                      transition={{ duration: 8, times: [0.35, 0.5, 0.9, 1], repeat: Infinity }}
                    />
                 </div>

                 {/* 3. KNOWLEDGE NODE */}
                 <div className="flex flex-col items-center gap-3 relative z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl border bg-white border-slate-200 text-slate-600 flex items-center justify-center shadow-sm relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1, 0.8] }}
                      transition={{ duration: 8, times: [0, 0.5, 0.6, 0.9, 1], repeat: Infinity }}
                    >
                       <Database className="w-8 h-8" />
                       {/* Data Flow Dots */}
                       <motion.div 
                         className="absolute inset-0 flex items-center justify-center"
                         animate={{ opacity: [0, 1, 0] }}
                         transition={{ delay: 4.5, duration: 1, repeat: Infinity, repeatDelay: 7 }}
                       >
                          <div className="absolute w-full h-full rounded-2xl border border-blue-200 opacity-50 animate-ping" />
                       </motion.div>
                    </motion.div>
                    <motion.span 
                      className="text-xs font-bold text-slate-500 uppercase tracking-wide"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 1, 1, 0] }}
                      transition={{ duration: 8, times: [0, 0.5, 0.6, 0.9, 1], repeat: Infinity }}
                    >
                      Knowledge
                    </motion.span>
                 </div>

                 {/* LINE 3 */}
                 <div className="flex-1 h-0.5 bg-slate-100 relative mx-4 self-center -translate-y-4">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#FF6A3D]"
                      initial={{ width: "0%" }}
                      animate={{ width: ["0%", "100%", "100%", "0%"] }}
                      transition={{ duration: 8, times: [0.6, 0.75, 0.9, 1], repeat: Infinity }}
                    />
                 </div>

                 {/* 4. ACTION NODE */}
                 <div className="flex flex-col items-center gap-3 relative z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl border bg-blue-50 border-blue-100 text-blue-600 flex items-center justify-center shadow-sm relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1, 0.8] }}
                      transition={{ duration: 8, times: [0, 0.75, 0.85, 0.9, 1], repeat: Infinity }}
                    >
                       <Zap className="w-8 h-8" />
                       {/* Action Glow */}
                       <motion.div 
                         className="absolute inset-0 bg-blue-400 rounded-2xl blur-lg -z-10"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: [0, 0.5, 0] }}
                         transition={{ duration: 1, delay: 6.5, repeat: Infinity, repeatDelay: 7 }}
                       />
                    </motion.div>
                    <motion.span 
                      className="text-xs font-bold text-slate-500 uppercase tracking-wide"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 1, 1, 0] }}
                      transition={{ duration: 8, times: [0, 0.75, 0.85, 0.9, 1], repeat: Infinity }}
                    >
                      Action
                    </motion.span>
                 </div>

               </div>
            </div>
          </motion.div>
          
          {/* Mobile Hero Visual (Simplified Vertical Flow) */}
          <div className="lg:hidden flex flex-col items-center gap-4 py-8">
             <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm"><User className="w-5 h-5 text-slate-600"/></div>
                  <div className="h-8 w-0.5 bg-slate-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shadow-sm relative">
                    <Bot className="w-6 h-6 text-[#FF6A3D]"/>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF6A3D] rounded-full animate-ping" />
                  </div>
                  <div className="h-8 w-0.5 bg-slate-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm"><Database className="w-5 h-5 text-slate-600"/></div>
                  <div className="h-8 w-0.5 bg-slate-200"></div>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm"><Zap className="w-5 h-5 text-blue-600"/></div>
             </div>
             <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wide">Automated Flow</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// --- Section 2: Clarity (What they do) ---

function ChatbotsClarity() {
  const cards = [
    { icon: MessageSquare, title: "Answer Questions", desc: "Instantly respond using trusted content from your docs and FAQs." },
    { icon: Check, title: "Complete Tasks", desc: "Check orders, book meetings, and submit requests automatically." },
    { icon: ArrowRight, title: "Guide Users", desc: "Help people find exactly what they need, step by step." }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">More Than Chat — Real Work</h2>
          <p className="text-slate-500 text-lg">Automated assistance that actually helps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {cards.map((c, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-[#FF6A3D]/30 transition-all duration-300 group"
             >
                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 mb-6 group-hover:text-[#FF6A3D] group-hover:border-[#FF6A3D] transition-colors">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{c.title}</h3>
                <p className="text-slate-500 leading-relaxed">{c.desc}</p>
             </motion.div>
           ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 3: Workflow Diagram ---

function ChatbotWorkflow() {
  const steps = [
    "User Question", 
    "Understand Intent", 
    "Search Knowledge", 
    "Decide Action", 
    "Respond / Execute", 
    "Human Handoff"
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
         <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How an AI Chatbot Works</h2>
           <p className="text-slate-500 text-lg">From question to resolution.</p>
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
                        i === steps.length - 1 ? 'bg-slate-900 border-slate-900 text-white' :
                        'bg-white border-slate-200 text-slate-700 shadow-sm'
                      }`}>
                        {step}
                        {i === steps.length - 1 && <span className="block text-[10px] opacity-70 font-normal uppercase mt-1 text-center">Optional</span>}
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

function ChatbotFeatures() {
  const features = [
    { icon: MessageSquare, title: "Natural Conversations", desc: "Understands real language and context, not just keywords." },
    { icon: Database, title: "Knowledge-Based Answers", desc: "Uses your documents, FAQs, and data to provide accurate answers." },
    { icon: Zap, title: "Task Automation", desc: "Takes actions like booking, updating, and submitting forms." },
    { icon: Users, title: "Lead Capture", desc: "Qualifies visitors and captures leads automatically 24/7." },
    { icon: ArrowRightLeft, title: "Human Handoff", desc: "Escalates complex issues to human agents smoothly when needed." },
    { icon: Sparkles, title: "Multi-Channel", desc: "Deploy on Web, WhatsApp, Slack, and mobile apps instantly." }
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

function ChatbotUseCases() {
  const cases = [
    { title: "Customer Support", path: "Customer → Bot → Answer → Resolved", icon: HelpCircle },
    { title: "Sales Lead Capture", path: "Visitor → Bot → Qualification → CRM", icon: Users },
    { title: "E-commerce Assistant", path: "Shopper → Bot → Recommendation → Purchase", icon: ShoppingBag },
    { title: "Booking & Scheduling", path: "User → Bot → Calendar → Confirmed", icon: Calendar },
    { title: "Internal Team Assistant", path: "Employee → Bot → Policy Answer", icon: Shield }
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Where AI Chatbots Deliver Value</h2>
          <p className="text-slate-500 text-lg">Solving problems across the business.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
           {cases.map((c, i) => (
             <div key={i} className="flex flex-col bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#FF6A3D] transition-colors group h-full">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-[#FF6A3D] mb-4 group-hover:bg-orange-50">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">{c.title}</h3>
                
                <div className="mt-auto pt-4 border-t border-slate-100">
                   <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-[#FF6A3D]" /> {c.path}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 6: Demo Flows ---

function ChatbotDemos() {
  const demos = [
    { 
      title: "Order Status", 
      messages: [
        { sender: 'user', text: "Where is my order?" },
        { sender: 'bot', text: "Checking your account..." },
        { sender: 'bot', text: "It shipped! Arrives Tuesday.", highlight: true }
      ]
    },
    { 
      title: "Booking", 
      messages: [
        { sender: 'user', text: "Book a demo for next week." },
        { sender: 'bot', text: "Checking calendar..." },
        { sender: 'bot', text: "Booked for Mon at 2pm.", highlight: true }
      ]
    },
    { 
      title: "Recommendation", 
      messages: [
        { sender: 'user', text: "Which plan is best for me?" },
        { sender: 'bot', text: "Analyzing your usage..." },
        { sender: 'bot', text: "The Pro Plan fits best.", highlight: true }
      ]
    }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">See the Chatbot in Action</h2>
           <p className="text-slate-500 text-lg">Real interactions, simplified.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {demos.map((d, i) => (
             <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-6 text-center">{d.title}</div>
                <div className="space-y-4 flex-1">
                   {d.messages.map((m, j) => (
                     <motion.div 
                       key={j}
                       initial={{ opacity: 0, x: m.sender === 'user' ? 10 : -10 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: (i * 0.2) + (j * 0.5) }}
                       className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                     >
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                          m.sender === 'user' 
                          ? 'bg-white text-slate-700 border border-slate-100 rounded-br-none shadow-sm' 
                          : m.highlight 
                            ? 'bg-[#FF6A3D] text-white rounded-bl-none shadow-md shadow-orange-500/20' 
                            : 'bg-slate-200 text-slate-700 rounded-bl-none'
                        }`}>
                          {m.text}
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 7: Metrics ---

function ChatbotMetrics() {
  const metrics = [
    { label: "Faster Response", value: "Instant" },
    { label: "Ticket Reduction", value: "60%" },
    { label: "Conversion Lift", value: "25%" },
    { label: "Cost Savings", value: "40%" },
    { label: "CSAT Score", value: "4.8/5" },
    { label: "Availability", value: "24/7" }
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {metrics.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
              >
                 <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{m.value}</div>
                 <div className="text-xs font-bold text-[#FF6A3D] uppercase tracking-wide">{m.label}</div>
              </motion.div>
            ))}
         </div>
      </Container>
    </Section>
  );
}

// --- Section 8: Final CTA ---

function ChatbotFinalCTA({ onNavigateToWizard, onNavigateToContact }: { onNavigateToWizard?: () => void, onNavigateToContact?: () => void }) {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden text-white">
       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #FF6A3D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
       
       <Container>
         <div className="text-center relative z-10 max-w-3xl mx-auto">
           <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
             Ready to Add an <br/>
             <span className="text-[#FF6A3D]">Intelligent Chatbot?</span>
           </h2>
           <p className="text-xl text-slate-400 mb-10">
             Let your chatbot answer, act, and guide — instantly.
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

interface AIChatbotsPageV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function AIChatbotsPageV7({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: AIChatbotsPageV7Props) {
  const handleWizard = () => onVersionChange?.('wizard');
  const handleProjects = () => onVersionChange?.('projects');
  const handleContact = () => onNavigateToAbout?.();

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
      
      <ChatbotsHero onNavigateToWizard={handleWizard} onNavigateToProjects={handleProjects} />
      <ChatbotsClarity />
      <ChatbotWorkflow />
      <ChatbotFeatures />
      <ChatbotUseCases />
      <ChatbotDemos />
      <ChatbotMetrics />
      <ChatbotFinalCTA onNavigateToWizard={handleWizard} onNavigateToContact={handleContact} />
      
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
