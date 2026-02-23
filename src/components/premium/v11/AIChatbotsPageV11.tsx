import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  MessageSquare,
  Zap,
  CheckCircle,
  Clock,
  Target,
  Database,
  Users,
  TrendingUp,
  BarChart3,
  Settings,
  Shield,
  Brain,
  Network,
  FileText,
  Gauge,
  ShieldCheck,
  ListChecks,
  SlidersHorizontal,
  Phone,
  Mail,
  Globe,
  Calendar,
  CreditCard,
  ShoppingCart,
  Home,
  Ticket,
  Laptop,
  AlertCircle,
  XCircle,
  Activity
} from 'lucide-react';
import { FooterV11 } from '../../FooterV11';

const coreCapabilities = [
  {
    icon: Clock,
    capability: '24/7 Instant Responses',
    impact: 'No missed leads or slow replies',
    tier: 'CORE'
  },
  {
    icon: Target,
    capability: 'Intent Detection',
    impact: 'Understands what users actually want',
    tier: 'CORE'
  },
  {
    icon: Database,
    capability: 'Knowledge Base Answers',
    impact: 'Accurate, consistent replies',
    tier: 'CORE'
  },
  {
    icon: Users,
    capability: 'Human Handoff',
    impact: 'Escalates only when needed',
    tier: 'CORE'
  },
  {
    icon: Globe,
    capability: 'Multi-Channel',
    impact: 'Website, WhatsApp, Email',
    tier: 'CORE'
  }
];

const advancedCapabilities = [
  {
    icon: Settings,
    capability: 'Workflow Execution',
    impact: 'Refunds, bookings, updates handled automatically',
    tier: 'ADVANCED'
  },
  {
    icon: Database,
    capability: 'CRM Sync',
    impact: 'Every conversation updates leads & contacts',
    tier: 'ADVANCED'
  },
  {
    icon: Target,
    capability: 'Lead Qualification',
    impact: 'Sales talks only to high-intent prospects',
    tier: 'ADVANCED'
  },
  {
    icon: Brain,
    capability: 'Personalization',
    impact: 'Tailored responses based on user data',
    tier: 'ADVANCED'
  },
  {
    icon: BarChart3,
    capability: 'Analytics & Insights',
    impact: 'See what customers ask and where deals drop',
    tier: 'ADVANCED'
  }
];

const chatbotTabs = [
  {
    id: 'conversation',
    name: 'Conversation',
    icon: MessageSquare,
    description: 'Live chat with memory & context'
  },
  {
    id: 'workflows',
    name: 'Workflows',
    icon: Settings,
    description: 'What actions the bot can trigger'
  },
  {
    id: 'knowledge',
    name: 'Knowledge Base',
    icon: Database,
    description: 'Documents, FAQs, SOPs (RAG-powered)'
  },
  {
    id: 'crm',
    name: 'CRM Sync',
    icon: Users,
    description: 'Contacts, leads, notes, deal updates'
  },
  {
    id: 'insights',
    name: 'Insights',
    icon: BarChart3,
    description: 'Resolution rate, conversions, saved hours'
  },
  {
    id: 'escalation',
    name: 'Escalation Rules',
    icon: AlertCircle,
    description: 'When to involve a human'
  }
];

const workflows = [
  {
    id: 'ecommerce',
    title: 'Ecommerce Support',
    userQuery: '"Where is my order?"',
    steps: [
      { label: 'Looks up order', icon: Database },
      { label: 'Confirms status', icon: CheckCircle },
      { label: 'Sends tracking link', icon: Mail },
      { label: 'Updates CRM ticket', icon: Users }
    ],
    result: 'Support tickets reduced by ~70%',
    metric: '-70%'
  },
  {
    id: 'sales',
    title: 'Sales Qualification',
    userQuery: '"I\'m interested"',
    steps: [
      { label: 'Asks qualifying questions', icon: MessageSquare },
      { label: 'Scores lead quality', icon: Gauge },
      { label: 'Books calendar slot', icon: Calendar },
      { label: 'Notifies sales rep', icon: Users }
    ],
    result: 'Faster speed-to-lead, higher close rate',
    metric: '+40%'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Concierge',
    userQuery: 'Messages business on WhatsApp',
    steps: [
      { label: 'Instant reply (24/7)', icon: Clock },
      { label: 'Answers common questions', icon: MessageSquare },
      { label: 'Routes hot leads to human', icon: Users },
      { label: 'Logs conversation in CRM', icon: Database }
    ],
    result: 'More conversations → more deals',
    metric: '+55%'
  }
];

const industries = [
  {
    id: 'ecommerce',
    name: 'Fashion / Ecommerce',
    icon: ShoppingCart,
    uses: [
      'Product questions',
      'Order tracking',
      'Cart recovery',
      'Upsells & cross-sells'
    ],
    outcome: 'More conversions with the same traffic'
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    icon: Home,
    uses: [
      'WhatsApp lead handling',
      'Property qualification',
      'Tour scheduling'
    ],
    outcome: 'Win deals faster than competitors'
  },
  {
    id: 'events',
    name: 'Events & Tourism',
    icon: Ticket,
    uses: [
      'Ticket questions',
      'Itinerary info',
      'Upsell experiences'
    ],
    outcome: 'Higher revenue per guest'
  },
  {
    id: 'saas',
    name: 'SaaS & B2B',
    icon: Laptop,
    uses: [
      'Demo booking',
      'Onboarding support',
      'Churn prevention'
    ],
    outcome: 'Better retention & pipeline health'
  }
];

const aiAgents = [
  { name: 'Orchestrator', role: 'Routes conversations & tasks', icon: Network },
  { name: 'Analyst', role: 'Understands intent & context', icon: BarChart3 },
  { name: 'Retriever (RAG)', role: 'Pulls accurate info from docs', icon: Database },
  { name: 'Ops Automation', role: 'Executes workflows', icon: Settings },
  { name: 'Scorer', role: 'Rates lead quality', icon: Gauge },
  { name: 'Controller', role: 'Applies rules & approvals', icon: ShieldCheck }
];

const geminiFeatures = [
  {
    feature: 'Gemini 3 Flash',
    benefit: 'Fast, real-time conversations',
    icon: Zap
  },
  {
    feature: 'Gemini 3 Pro',
    benefit: 'Complex reasoning & sales logic',
    icon: Brain
  },
  {
    feature: 'Structured Outputs',
    benefit: 'Reliable system actions',
    icon: ListChecks
  },
  {
    feature: 'Tool / Function Calling',
    benefit: 'Real workflow execution',
    icon: Settings
  },
  {
    feature: 'RAG',
    benefit: 'No hallucinations',
    icon: Database
  },
  {
    feature: 'Thinking Mode',
    benefit: 'Smart decisions, not scripted replies',
    icon: Brain
  }
];

const benefits = [
  {
    icon: Clock,
    title: 'Save 10–40 hours/week',
    description: 'Automate repetitive conversations'
  },
  {
    icon: TrendingUp,
    title: 'Increase conversion rates',
    description: 'Faster responses = more deals'
  },
  {
    icon: Zap,
    title: 'Faster response = higher trust',
    description: 'Always available, never slow'
  },
  {
    icon: Users,
    title: 'Scale without hiring',
    description: 'Handle 10x volume with same team'
  },
  {
    icon: BarChart3,
    title: 'Full visibility & analytics',
    description: 'Know what works, optimize what doesn\'t'
  }
];

export function AIChatbotsPageV11() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>('conversation');

  return (
    <main className="min-h-screen bg-[#FDFCFB] font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="relative bg-white text-[#1A1A1A] overflow-hidden border-b border-[#EFE9E4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT — Content */}
            <div>
              <div className="uppercase text-[#F59E0B] text-xs font-bold tracking-widest mb-6">
                AI CHATBOTS SERVICES
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                AI Chatbots That Do the Work—
                <span className="text-[#F59E0B]">Not Just Talk</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#666666] mb-8 leading-relaxed font-serif" style={{ fontFamily: 'Lora, serif' }}>
                Automate sales, support, and operations with AI chatbots that answer questions, execute workflows, qualify leads, and sync with your CRM — 24/7.
              </p>
              
              {/* Value Bullets */}
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <span className="text-[#666666]">Handle <strong className="text-[#1A1A1A]">60–80% of conversations automatically</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <span className="text-[#666666]">Respond instantly on <strong className="text-[#1A1A1A]">Website, WhatsApp, Email</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <span className="text-[#666666]">Convert visitors into <strong className="text-[#1A1A1A]">leads, bookings, and sales</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <span className="text-[#666666]">Fully connected to your <strong className="text-[#1A1A1A]">CRM, workflows, and data</strong></span>
                </li>
              </ul>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/wizard"
                  className="inline-flex items-center justify-center px-10 py-5 bg-[#F59E0B] text-[#1A1A1A] font-bold hover:bg-[#FCD34D] transition-all text-base"
                >
                  Get Your AI Chatbot Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="#workflows"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold hover:bg-[#1A1A1A] hover:text-white transition-all text-base"
                >
                  See Real Use Cases
                </a>
              </div>
            </div>
            
            {/* RIGHT — Abstract Chatbot Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <svg className="w-full h-full" viewBox="0 0 500 500">
                  <defs>
                    <radialGradient id="chatGradient">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
                      <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.8" />
                    </radialGradient>
                    
                    <filter id="chatGlow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Chat Bubbles */}
                  <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {/* User Message Bubble */}
                    <rect x="50" y="100" width="180" height="60" rx="8" fill="#FAF8F6" stroke="#EFE9E4" strokeWidth="1" />
                    <text x="140" y="135" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="500">
                      Need help with order
                    </text>
                  </motion.g>
                  
                  <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {/* Bot Response Bubble */}
                    <rect x="270" y="200" width="180" height="60" rx="8" fill="url(#chatGradient)" />
                    <text x="360" y="235" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600">
                      Here's your status ✓
                    </text>
                  </motion.g>
                  
                  <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    {/* User Message Bubble 2 */}
                    <rect x="50" y="300" width="180" height="60" rx="8" fill="#FAF8F6" stroke="#EFE9E4" strokeWidth="1" />
                    <text x="140" y="335" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="500">
                      Book a call please
                    </text>
                  </motion.g>
                  
                  <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    {/* Bot Response Bubble 2 */}
                    <rect x="270" y="400" width="180" height="60" rx="8" fill="url(#chatGradient)" />
                    <text x="360" y="435" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600">
                      Scheduled for 2pm ✓
                    </text>
                  </motion.g>
                  
                  {/* Central AI Brain */}
                  <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <circle cx="250" cy="250" r="40" fill="#1A1A1A" filter="url(#chatGlow)" />
                    <text x="250" y="262" textAnchor="middle" fontSize="32" fill="#F59E0B">🤖</text>
                  </motion.g>
                  
                  {/* Connecting Lines */}
                  <motion.line
                    x1="230" y1="130" x2="220" y2="230"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  
                  <motion.line
                    x1="270" y1="230" x2="280" y2="230"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              What This Really Solves
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Most chatbots fail. Ours are built to work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* LEFT — Common Failures */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FAF8F6] border border-[#EFE9E4] p-8 md:p-10"
            >
              <div className="w-14 h-14 bg-[#1A1A1A] flex items-center justify-center mb-6">
                <XCircle className="w-7 h-7 text-[#F59E0B]" />
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-6">
                Most Chatbots Fail Because They:
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[#666666]">
                  <div className="w-2 h-2 bg-[#999999] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Only answer FAQs</span>
                </li>
                <li className="flex items-start gap-3 text-[#666666]">
                  <div className="w-2 h-2 bg-[#999999] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Don't connect to real systems</span>
                </li>
                <li className="flex items-start gap-3 text-[#666666]">
                  <div className="w-2 h-2 bg-[#999999] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Create more work instead of saving time</span>
                </li>
              </ul>
            </motion.div>
            
            {/* RIGHT — Our Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#FFF7ED] border-2 border-[#F59E0B] p-8 md:p-10"
            >
              <div className="w-14 h-14 bg-[#F59E0B] flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-4">
                Our AI Chatbots Are Business Operators
              </h3>
              
              <p className="text-[#666666] leading-relaxed mb-6">
                They don't just chat — they <strong className="text-[#1A1A1A]">take action</strong>.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[#666666]">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>Qualify leads</span>
                </li>
                <li className="flex items-start gap-3 text-[#666666]">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>Book calls</span>
                </li>
                <li className="flex items-start gap-3 text-[#666666]">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>Update your CRM</span>
                </li>
                <li className="flex items-start gap-3 text-[#666666]">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>Trigger automations</span>
                </li>
                <li className="flex items-start gap-3 text-[#666666]">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>Escalate to humans when needed</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VS ADVANCED CAPABILITIES */}
      <section className="py-20 md:py-28 bg-[#FAF8F6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Core Capabilities
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              What your AI chatbot can do — from day one to full scale
            </p>
          </div>
          
          {/* Core Features */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-[#EFE9E4]"></div>
              <span className="px-4 py-2 bg-white border border-[#EFE9E4] text-xs font-bold tracking-widest text-[#1A1A1A]">
                CORE FEATURES
              </span>
              <div className="h-px flex-1 bg-[#EFE9E4]"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreCapabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.capability}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white border border-[#EFE9E4] p-6 hover:border-[#F59E0B] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#FAF8F6] border border-[#EFE9E4] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#1A1A1A] group-hover:text-[#F59E0B] transition-colors" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1A1A1A] mb-2 text-sm">
                          {item.capability}
                        </h4>
                        <p className="text-xs text-[#666666] leading-relaxed">
                          {item.impact}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Advanced Features */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-[#EFE9E4]"></div>
              <span className="px-4 py-2 bg-[#F59E0B] text-xs font-bold tracking-widest text-[#1A1A1A]">
                ADVANCED CAPABILITIES
              </span>
              <div className="h-px flex-1 bg-[#EFE9E4]"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedCapabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.capability}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white border-2 border-[#F59E0B] p-6 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1A1A1A] mb-2 text-sm">
                          {item.capability}
                        </h4>
                        <p className="text-xs text-[#666666] leading-relaxed">
                          {item.impact}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-TAB CHATBOT INTERFACE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Multi-Tab Chatbot Interface
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-3">
              Your chatbot is not a single chat window — it's a <strong className="text-[#1A1A1A]">system with screens</strong>.
            </p>
            <p className="text-base text-[#666666] italic">
              This makes the chatbot auditable, controllable, and enterprise-safe.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="bg-[#FAF8F6] border border-[#EFE9E4] overflow-hidden">
            <div className="flex overflow-x-auto">
              {chatbotTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[140px] px-4 py-4 border-b-2 transition-all ${
                      activeTab === tab.id
                        ? 'border-[#F59E0B] bg-white'
                        : 'border-transparent hover:bg-white/50'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Icon 
                        className={`w-5 h-5 ${
                          activeTab === tab.id ? 'text-[#F59E0B]' : 'text-[#666666]'
                        }`} 
                        strokeWidth={1.5} 
                      />
                      <span className={`text-xs font-semibold ${
                        activeTab === tab.id ? 'text-[#1A1A1A]' : 'text-[#666666]'
                      }`}>
                        {tab.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Tab Content */}
            <div className="bg-white p-8 md:p-12">
              {chatbotTabs.map((tab) => {
                const Icon = tab.icon;
                return activeTab === tab.id ? (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-2">
                          {tab.name}
                        </h3>
                        <p className="text-[#666666] leading-relaxed">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Visual Example Based on Tab */}
                    <div className="mt-6 p-6 bg-[#FAF8F6] border border-[#EFE9E4]">
                      <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-3">
                        EXAMPLE VIEW
                      </div>
                      
                      {tab.id === 'conversation' && (
                        <div className="space-y-3">
                          <div className="bg-white p-3 border border-[#EFE9E4] text-sm">
                            <strong>User:</strong> Do you ship to Brazil?
                          </div>
                          <div className="bg-[#FFF7ED] p-3 border border-[#F59E0B] text-sm">
                            <strong>Bot:</strong> Yes! We ship to Brazil. Delivery typically takes 7-10 business days.
                          </div>
                        </div>
                      )}
                      
                      {tab.id === 'workflows' && (
                        <ul className="space-y-2 text-sm text-[#666666]">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F59E0B]" />
                            Process refund request
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F59E0B]" />
                            Schedule product demo
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F59E0B]" />
                            Update customer address
                          </li>
                        </ul>
                      )}
                      
                      {tab.id === 'knowledge' && (
                        <ul className="space-y-2 text-sm text-[#666666]">
                          <li className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#F59E0B]" />
                            Product catalog (500 pages)
                          </li>
                          <li className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#F59E0B]" />
                            Shipping & returns policy
                          </li>
                          <li className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#F59E0B]" />
                            FAQs & support docs
                          </li>
                        </ul>
                      )}
                      
                      {tab.id === 'crm' && (
                        <div className="text-sm text-[#666666]">
                          <div className="mb-2"><strong>Contact:</strong> Maria Silva</div>
                          <div className="mb-2"><strong>Lead Score:</strong> 85/100</div>
                          <div><strong>Last Activity:</strong> Asked about pricing 2 mins ago</div>
                        </div>
                      )}
                      
                      {tab.id === 'insights' && (
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-[#1A1A1A]">73%</div>
                            <div className="text-xs text-[#666666]">Resolution Rate</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#1A1A1A]">+40%</div>
                            <div className="text-xs text-[#666666]">Conversions</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#1A1A1A]">28hrs</div>
                            <div className="text-xs text-[#666666]">Saved/Week</div>
                          </div>
                        </div>
                      )}
                      
                      {tab.id === 'escalation' && (
                        <ul className="space-y-2 text-sm text-[#666666]">
                          <li className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-[#F59E0B]" />
                            Escalate if refund &gt; $500
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-[#F59E0B]" />
                            Human needed for custom orders
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-[#F59E0B]" />
                            Alert if sentiment = negative
                          </li>
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* REAL-WORLD WORKFLOWS */}
      <section id="workflows" className="py-20 md:py-28 bg-[#FAF8F6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Real-World Workflows
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Not theoretical — actual business scenarios
            </p>
          </div>
          
          <div className="space-y-8">
            {workflows.map((workflow, index) => (
              <motion.div
                key={workflow.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-[#EFE9E4] p-8 md:p-10 hover:border-[#F59E0B] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-2">
                      EXAMPLE {index + 1}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-2">
                      {workflow.title}
                    </h3>
                    <p className="text-[#666666] italic">
                      User: {workflow.userQuery}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#F59E0B]">{workflow.metric}</div>
                    <div className="text-xs text-[#666666]">Impact</div>
                  </div>
                </div>
                
                {/* Workflow Steps */}
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-4">
                    BOT ACTIONS
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {workflow.steps.map((step, stepIndex) => {
                      const StepIcon = step.icon;
                      return (
                        <div key={stepIndex} className="flex items-center gap-3">
                          <div className="flex items-center gap-2 bg-[#FAF8F6] border border-[#EFE9E4] px-4 py-3">
                            <div className="w-8 h-8 bg-white border border-[#EFE9E4] flex items-center justify-center flex-shrink-0">
                              <StepIcon className="w-4 h-4 text-[#1A1A1A]" strokeWidth={1.5} />
                            </div>
                            <span className="text-sm text-[#666666]">{step.label}</span>
                          </div>
                          {stepIndex < workflow.steps.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Result */}
                <div className="flex items-start gap-3 pt-6 border-t border-[#EFE9E4]">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-1">
                      RESULT
                    </div>
                    <p className="text-[#1A1A1A] font-semibold">
                      {workflow.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY USE CASES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Industry Use Cases
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              See how AI chatbots work across different business models
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#FAF8F6] border border-[#EFE9E4] p-8 hover:border-[#F59E0B] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-white border border-[#EFE9E4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F59E0B] group-hover:border-[#F59E0B] transition-colors">
                      <Icon className="w-6 h-6 text-[#1A1A1A] group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-2">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-3">
                      COMMON USES
                    </div>
                    <ul className="space-y-2">
                      {industry.uses.map((use, useIndex) => (
                        <li key={useIndex} className="flex items-start gap-2 text-sm text-[#666666]">
                          <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-[#EFE9E4]">
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-2">
                      OUTCOME
                    </div>
                    <p className="text-[#F59E0B] font-semibold">
                      {industry.outcome}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI AGENTS BEHIND THE CHATBOT */}
      <section className="py-20 md:py-28 bg-[#FAF8F6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              AI Agents Behind the Chatbot
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Your chatbot is powered by <strong className="text-[#1A1A1A]">specialized AI agents</strong>, not a single brain
            </p>
          </div>
          
          {/* Agent Flow Diagram */}
          <div className="bg-white border border-[#EFE9E4] p-8 md:p-12">
            {/* Desktop Horizontal Flow */}
            <div className="hidden md:flex items-center justify-center gap-4 flex-wrap">
              {aiAgents.map((agent, index) => {
                const Icon = agent.icon;
                const isController = agent.name === 'Controller';
                
                return (
                  <div key={agent.name} className="flex items-center gap-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`${
                        isController
                          ? 'bg-[#FFF7ED] border-2 border-[#F59E0B]'
                          : 'bg-[#FAF8F6] border border-[#EFE9E4]'
                      } p-4 min-w-[160px]`}
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className={`w-10 h-10 ${
                          isController ? 'bg-[#F59E0B]' : 'bg-white border border-[#EFE9E4]'
                        } flex items-center justify-center`}>
                          <Icon 
                            className={`w-5 h-5 ${
                              isController ? 'text-white' : 'text-[#1A1A1A]'
                            }`} 
                            strokeWidth={1.5} 
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-[#1A1A1A] text-sm mb-1">
                            {agent.name}
                          </div>
                          <div className="text-xs text-[#666666]">
                            {agent.role}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {index < aiAgents.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-[#F59E0B]" strokeWidth={2} />
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Mobile Vertical Flow */}
            <div className="md:hidden space-y-4">
              {aiAgents.map((agent, index) => {
                const Icon = agent.icon;
                const isController = agent.name === 'Controller';
                
                return (
                  <div key={agent.name}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`${
                        isController
                          ? 'bg-[#FFF7ED] border-2 border-[#F59E0B]'
                          : 'bg-[#FAF8F6] border border-[#EFE9E4]'
                      } p-4`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 ${
                          isController ? 'bg-[#F59E0B]' : 'bg-white border border-[#EFE9E4]'
                        } flex items-center justify-center flex-shrink-0`}>
                          <Icon 
                            className={`w-5 h-5 ${
                              isController ? 'text-white' : 'text-[#1A1A1A]'
                            }`} 
                            strokeWidth={1.5} 
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-[#1A1A1A] text-sm mb-1">
                            {agent.name}
                          </div>
                          <div className="text-xs text-[#666666]">
                            {agent.role}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {index < aiAgents.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowRight className="w-5 h-5 text-[#F59E0B] rotate-90" strokeWidth={2} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            <p className="text-center text-[#666666] mt-10 italic text-sm">
              This ensures <strong className="text-[#1A1A1A]">accuracy, safety, and consistency</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* GEMINI 3 FEATURES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Powered by Gemini 3
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Enterprise-grade AI technology that actually works
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {geminiFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-[#FAF8F6] border border-[#EFE9E4] p-6 hover:border-[#F59E0B] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-[#EFE9E4] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A] mb-2 text-sm">
                        {item.feature}
                      </h4>
                      <p className="text-xs text-[#666666]">
                        {item.benefit}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="py-20 md:py-28 bg-[#FAF8F6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Business Benefits
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              The executive view — why this matters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white border border-[#EFE9E4] p-6"
                >
                  <div className="w-12 h-12 bg-[#F59E0B] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-[#666666]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              Ready to Turn Conversations Into Revenue?
            </h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed font-serif" style={{ fontFamily: 'Lora, serif' }}>
              Let's build an AI chatbot system that actually works for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/wizard"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#F59E0B] text-[#1A1A1A] font-bold hover:bg-[#FCD34D] transition-all text-lg"
              >
                Design My AI Chatbot System
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/industries"
                className="inline-flex items-center justify-center px-10 py-5 border border-white text-white font-bold hover:bg-white hover:text-[#1A1A1A] transition-all text-lg"
              >
                See Chatbot Use Cases by Industry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterV11 />
    </main>
  );
}