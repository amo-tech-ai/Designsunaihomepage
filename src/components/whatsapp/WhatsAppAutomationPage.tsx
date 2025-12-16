import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Zap, 
  BarChart3, 
  Bot, 
  Database, 
  Globe, 
  ShoppingCart, 
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Play,
  Layers,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { FooterV6 } from '../premium/v6/FooterV6';

export function WhatsAppAutomationPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-[#22C55E] selection:text-white">
      
      {/* 4) Hero Section */}
      <HeroSection />

      {/* 5) Why WhatsApp Automation Matters */}
      <MetricsSection />

      {/* 6) Core Services */}
      <ServicesSection />

      {/* 7) Real-World Use Cases */}
      <UseCasesSection />

      {/* 8) Results That Speak */}
      <ResultsSection />

      {/* 9) Process Timeline */}
      <ProcessSection />

      {/* 10) Technology Stack */}
      <TechStackSection />

      {/* 11) FAQ Section */}
      <FAQSection />

      {/* 12) Final CTA */}
      <FinalCTASection />

      <FooterV6 />
      
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#22C55E] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#22C55E] text-xs font-medium uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              WhatsApp AI Engine v2.0
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Automate, Sell <br/>
              & Support — <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#4ade80]">
                All on WhatsApp
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 max-w-lg font-light leading-relaxed">
              AI-powered WhatsApp automation for sales, support, marketing, and operations. 
              No delays. No missed messages. Just revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#22C55E] text-[#0a0a0a] font-bold rounded-full hover:bg-[#16a34a] transition-all flex items-center justify-center gap-2 group">
                Book a Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                See How It Works
              </button>
            </div>
          </motion.div>

          {/* Right: AI Assistant Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl border border-white/10 max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
               {/* Header */}
               <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                 <div className="relative">
                   <div className="w-12 h-12 rounded-full bg-[#22C55E] flex items-center justify-center text-white">
                     <Bot className="w-6 h-6" />
                   </div>
                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-900">Sun AI Assistant</h3>
                   <p className="text-xs text-slate-500">Typically replies instantly</p>
                 </div>
               </div>

               {/* Chat Area */}
               <div className="space-y-4 mb-6">
                 <div className="flex justify-start">
                   <div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm">
                     Hi! How can I help you optimize your business today? 👋
                   </div>
                 </div>
                 
                 <div className="flex justify-end">
                   <div className="bg-[#22C55E] text-[#0a0a0a] px-4 py-3 rounded-2xl rounded-tr-none max-w-[85%] text-sm font-medium shadow-sm">
                     Check my order status #4821
                   </div>
                 </div>

                 <div className="flex justify-start">
                   <div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm">
                     <p className="mb-2">Your order <span className="font-bold">#4821</span> is out for delivery! 🚚</p>
                     <div className="bg-white p-3 rounded-xl border border-slate-200 mt-2 flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <ShoppingCart className="w-5 h-5 text-slate-400" />
                        </div>
                        <div>
                          <div className="font-bold text-xs">Premium Package</div>
                          <div className="text-xs text-slate-500">$299.00 • Arriving 2pm</div>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Input Mock */}
               <div className="bg-slate-50 rounded-full px-4 py-3 flex items-center justify-between border border-slate-200">
                 <span className="text-slate-400 text-sm">Type a message...</span>
                 <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center">
                   <ArrowRight className="w-4 h-4 text-[#0a0a0a]" />
                 </div>
               </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 -right-10 w-24 h-24 bg-[#22C55E] rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  const metrics = [
    { value: "98%", label: "Open Rate", desc: "vs 20% for email - your messages actually get seen" },
    { value: "70%", label: "Faster Response", desc: "Customer engage instantly with automated connectors" },
    { value: "5-10x", label: "ROI Potential", desc: "Scale automated sales, support, and marketing workflows" },
  ];

  return (
    <section className="bg-[#0f1115] py-20 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-[#22C55E] transition-colors">{m.value}</div>
              <h3 className="text-lg font-bold text-white mb-2">{m.label}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: MessageCircle, title: "WhatsApp Automation Setup", items: ["AI replies & flows", "Smart tagging", "Multi-language flows"] },
    { icon: Bot, title: "AI Chat Agents & Copilots", items: ["Sales & Support", "Smart human handoff", "Meta verified AI", "Analytics dashboard"] },
    { icon: Database, title: "CRM & Pipeline Integration", items: ["Sync HubSpot, Salesforce", "Update via WhatsApp", "Automated lead scoring"] },
    { icon: Globe, title: "WhatsApp Marketing Campaigns", items: ["Broadcast lists", "Drip campaigns", "Green tick verification"] },
    { icon: ShoppingCart, title: "E-commerce & Payment Flows", items: ["Shopify / Woo integration", "Abandon cart recovery", "In-chat payments", "Order updates"] },
    { icon: Layers, title: "Industry Solutions", items: ["Real Estate", "Retail", "Travel", "Education"] },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">End-to-end WhatsApp solutions tailored for enterprise scale.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#22C55E]/30 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-[#0a0a0a] transition-colors">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <ul className="space-y-3 mb-6">
                {s.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center text-sm font-bold text-[#22C55E] hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real-World Use Cases</h2>
          <p className="text-slate-400">See how automation flows work in practice.</p>
        </div>

        <div className="grid gap-8">
          {/* Use Case 1 */}
          <UseCaseCard 
            title="Lead Generation Flow"
            steps={["Ad", "WhatsApp", "AI Qualifies", "CRM", "Sales"]}
            icon={Zap}
          />
          {/* Use Case 2 */}
          <UseCaseCard 
            title="E-commerce Flow"
            steps={["Inquiry", "Product", "Cart", "Payment", "Update"]}
            icon={ShoppingCart}
          />
          {/* Use Case 3 */}
          <UseCaseCard 
            title="Service Booking Flow"
            steps={["Message", "Availability", "Booking", "Calendar", "Reminder"]}
            icon={CheckCircle2}
          />
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ title, steps, icon: Icon }: any) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-4 min-w-[240px]">
        <div className="p-3 bg-[#22C55E]/10 rounded-xl text-[#22C55E]">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <div className="flex-grow flex flex-wrap items-center justify-center gap-4">
        {steps.map((step: string, i: number) => (
          <div key={i} className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium border border-white/5 hover:bg-[#22C55E] hover:text-[#0a0a0a] transition-colors cursor-default">
              {step}
            </div>
            {i !== steps.length - 1 && (
              <ArrowRight className="w-4 h-4 text-slate-600" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Results That Speak</h2>
          <p className="text-slate-500">Average improvements from AMO AI WhatsApp automation clients.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Response Time", before: "2 hours", after: "< 2 mins", change: "98%" },
            { label: "Missed Leads", before: "40%", after: "< 5%", change: "87%" },
            { label: "Conversion Rate", before: "12%", after: "38%", change: "216%" },
            { label: "Customer Satisfaction", before: "7.1", after: "9.4", change: "32%" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">{stat.label}</h4>
              <div className="flex items-end gap-2 mb-2">
                 <div className="text-3xl font-bold text-[#22C55E]">{stat.after}</div>
                 <div className="text-sm text-slate-400 line-through mb-1">{stat.before}</div>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-[#22C55E] bg-[#22C55E]/10 px-2 py-1 rounded-full">
                <Zap className="w-3 h-3" /> +{stat.change} improvement
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    "Discovery Call",
    "Workflow Blueprint",
    "Dev & Integration",
    "AI Training",
    "Launch"
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 text-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16">The Sun AI WhatsApp Process</h2>
        
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border-2 border-[#22C55E] text-[#22C55E] font-bold flex items-center justify-center mb-6 group-hover:bg-[#22C55E] group-hover:text-[#0a0a0a] transition-colors shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <button className="px-8 py-4 bg-[#22C55E] text-[#0a0a0a] font-bold rounded-full hover:bg-[#16a34a] transition-all">
            Start Your WhatsApp Project
          </button>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const techs = ["Supabase", "n8n", "CopilotKit", "CrewAI", "LangChain", "Stripe", "WhatsApp API", "Cloudinary"];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h3 className="text-slate-400 font-medium mb-8">Built on proven, scalable infrastructure</h3>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {techs.map((tech, i) => (
            <div key={i} className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-600 font-bold text-sm">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            { q: "Do you use the official WhatsApp Business API?", a: "Yes, we exclusively use the official WhatsApp Business API (via Meta BSPs) to ensure compliance, stability, and access to features like Green Tick verification." },
            { q: "Can you integrate with my CRM?", a: "Absolutely. We build custom integrations for HubSpot, Salesforce, Pipedrive, Zoho, and any other CRM with an API." },
            { q: "Is this just a chatbot?", a: "No. While we use chat interfaces, our solutions are full-stack applications connecting your database, payments, and business logic directly into WhatsApp." },
            { q: "How long does setup take?", a: "Typical implementation takes 2-4 weeks depending on complexity. Simple auto-responders can be live in days." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:bg-white/10 transition-colors">
              <AccordionTrigger className="py-6 hover:no-underline text-lg font-medium">{item.q}</AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-6 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-32 bg-[#22C55E] text-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight max-w-4xl mx-auto">
          Let’s automate your business on WhatsApp — start today.
        </h2>
        <p className="text-xl font-medium mb-12 opacity-80 max-w-2xl mx-auto">
          From faster replies to automated sales and bookings, we design and deploy your WhatsApp system end-to-end.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <button className="px-10 py-5 bg-[#0a0a0a] text-white font-bold rounded-full hover:bg-slate-900 transition-all shadow-xl">
            Book a Free Call
          </button>
          <button className="px-10 py-5 bg-white text-[#0a0a0a] font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl">
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}
