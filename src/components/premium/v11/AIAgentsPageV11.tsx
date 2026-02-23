import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Brain,
  TrendingUp,
  FileText,
  Settings,
  BarChart3,
  Network,
  CheckCircle,
  Shield,
  Eye,
  FileCheck,
  Lock,
  Zap,
  Users,
  Target,
  ListChecks,
  Database,
  FileUp,
  SlidersHorizontal,
  Gauge,
  ShieldCheck
} from 'lucide-react';
import { FooterV11 } from '../../FooterV11';

const agentTypes = [
  {
    id: 'orchestrator',
    name: 'Orchestrator Agent',
    icon: Network,
    description: 'Routes tasks, coordinates agents, and controls execution order.',
    outcome: 'Nothing breaks. Nothing duplicates.',
    route: '/services/ai-agents/orchestrator',
    tier: 'ENTERPRISE',
    tierColor: 'bg-[#1A1A1A] text-white'
  },
  {
    id: 'planner',
    name: 'Planner Agent',
    icon: ListChecks,
    description: 'Turns goals into structured plans, tasks, and timelines.',
    outcome: 'Clear execution instead of chaos.',
    route: '/services/ai-agents/planner',
    tier: 'ADVANCED',
    tierColor: 'bg-[#F59E0B] text-[#1A1A1A]'
  },
  {
    id: 'analyst',
    name: 'Analyst Agent',
    icon: BarChart3,
    description: 'Analyzes risks, patterns, performance, and opportunities.',
    outcome: 'Better decisions, fewer surprises.',
    route: '/services/ai-agents/analyst',
    tier: 'ADVANCED',
    tierColor: 'bg-[#F59E0B] text-[#1A1A1A]'
  },
  {
    id: 'ops',
    name: 'Ops Automation Agent',
    icon: Settings,
    description: 'Runs triggers, alerts, schedules, and internal workflows.',
    outcome: 'Hours saved every week.',
    route: '/services/ai-agents/ops',
    tier: 'CORE',
    tierColor: 'bg-white border border-[#EFE9E4] text-[#1A1A1A]'
  },
  {
    id: 'content',
    name: 'Content & Comms Agent',
    icon: FileText,
    description: 'Creates messages, emails, WhatsApp replies, posts, and campaigns.',
    outcome: 'Consistent communication without burnout.',
    route: '/services/ai-agents/content',
    tier: 'CORE',
    tierColor: 'bg-white border border-[#EFE9E4] text-[#1A1A1A]'
  },
  {
    id: 'retriever',
    name: 'Retriever Agent (RAG)',
    icon: Database,
    description: 'Searches and understands documents, SOPs, contracts, and knowledge bases.',
    outcome: 'Answers based on your data — not guesses.',
    route: '/services/ai-agents/retriever',
    tier: 'ADVANCED',
    tierColor: 'bg-[#F59E0B] text-[#1A1A1A]'
  },
  {
    id: 'extractor',
    name: 'Extractor Agent',
    icon: FileUp,
    description: 'Extracts structured data from PDFs, forms, invoices, and uploads.',
    outcome: 'No more manual data entry.',
    route: '/services/ai-agents/extractor',
    tier: 'ADVANCED',
    tierColor: 'bg-[#F59E0B] text-[#1A1A1A]'
  },
  {
    id: 'optimizer',
    name: 'Optimizer Agent',
    icon: SlidersHorizontal,
    description: 'Optimizes timelines, budgets, resources, and execution order.',
    outcome: 'Faster delivery with fewer resources.',
    route: '/services/ai-agents/optimizer',
    tier: 'ADVANCED',
    tierColor: 'bg-[#F59E0B] text-[#1A1A1A]'
  },
  {
    id: 'scorer',
    name: 'Scorer Agent',
    icon: Gauge,
    description: 'Scores health, ROI, quality, readiness, and performance.',
    outcome: 'Know what\'s working — instantly.',
    route: '/services/ai-agents/scorer',
    tier: 'ADVANCED',
    tierColor: 'bg-[#F59E0B] text-[#1A1A1A]'
  },
  {
    id: 'controller',
    name: 'Controller Agent (Approval Gate)',
    icon: ShieldCheck,
    description: 'Requires human approval before sensitive actions execute.',
    outcome: 'AI automation with full control.',
    route: '/services/ai-agents/controller',
    tier: 'ENTERPRISE',
    tierColor: 'bg-[#1A1A1A] text-white'
  }
];

const useCases = [
  {
    industry: 'Real Estate',
    problem: 'Leads arrive at night and go cold',
    agentUsed: 'WhatsApp Sales Agent',
    result: 'Instant replies, qualified leads, booked showings',
    metric: '+40% conversion'
  },
  {
    industry: 'Fashion E-commerce',
    problem: 'Customers ask the same questions repeatedly',
    agentUsed: 'Support & Sales Agent',
    result: 'Higher conversion, less support load',
    metric: '-60% support tickets'
  },
  {
    industry: 'SaaS',
    problem: 'Leads forget demo calls',
    agentUsed: 'Sales + CRM Agent',
    result: 'Higher show-up rates',
    metric: '+55% show rate'
  }
];

const tiers = [
  {
    name: 'Core',
    includes: 'Sales, Content, Ops',
    bestFor: 'Small teams',
    price: 'Starting point'
  },
  {
    name: 'Advanced',
    includes: 'Core + Planner, Optimizer, Scorer',
    bestFor: 'Growing businesses',
    price: 'Scale tier'
  },
  {
    name: 'Enterprise',
    includes: 'Advanced + Orchestrator + Approval Gates',
    bestFor: 'Complex organizations',
    price: 'Full system'
  }
];

const trustFeatures = [
  {
    icon: Shield,
    title: 'Human approval gates',
    description: 'Critical actions require your approval'
  },
  {
    icon: Eye,
    title: 'Explainable actions',
    description: 'See exactly why agents made each decision'
  },
  {
    icon: FileCheck,
    title: 'Full activity logs',
    description: 'Complete audit trail of all agent behavior'
  },
  {
    icon: Lock,
    title: 'No black-box automation',
    description: 'You maintain full control and visibility'
  }
];

export function AIAgentsPageV11() {
  const [selectedUseCase, setSelectedUseCase] = useState<number>(0);

  return (
    <main className="min-h-screen bg-[#FDFCFB] font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#1A1A1A] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT — Content */}
            <div>
              <div className="uppercase text-[#F59E0B] text-xs font-bold tracking-widest mb-6">
                AI AGENTS SERVICES
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                AI Agents That Work Like a Team—
                <span className="text-[#F59E0B]">Not a Chatbot</span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed font-serif" style={{ fontFamily: 'Lora, serif' }}>
                AI agents are autonomous digital workers that execute tasks, make decisions, and coordinate work across your business—without hiring.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/wizard"
                  className="inline-flex items-center justify-center px-10 py-5 bg-[#F59E0B] text-[#1A1A1A] font-bold hover:bg-[#FCD34D] transition-all text-base"
                >
                  See Which Agents You Need
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="#use-cases"
                  className="inline-flex items-center justify-center px-10 py-5 border border-white text-white font-bold hover:bg-white hover:text-[#1A1A1A] transition-all text-base"
                >
                  View Real Use Cases
                </a>
              </div>
            </div>
            
            {/* RIGHT — Abstract Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                {/* AI Agents Hub & Spoke Diagram */}
                <svg className="w-full h-full" viewBox="0 0 500 500">
                  <defs>
                    {/* Gradient for central hub */}
                    <radialGradient id="hubGradient">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
                      <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.8" />
                    </radialGradient>
                    
                    {/* Glow effect */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Connecting Lines (Hub to Agents) */}
                  {/* Sales Agent Line */}
                  <motion.line
                    x1="250" y1="250" x2="380" y2="120"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                  
                  {/* Content Agent Line */}
                  <motion.line
                    x1="250" y1="250" x2="120" y2="120"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  
                  {/* Analytics Agent Line */}
                  <motion.line
                    x1="250" y1="250" x2="120" y2="380"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                  />
                  
                  {/* Ops Agent Line */}
                  <motion.line
                    x1="250" y1="250" x2="380" y2="380"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                  />
                  
                  {/* Circular orbit path */}
                  <motion.circle
                    cx="250" cy="250" r="150"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.15"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                  
                  {/* Data flow particles (rotating dots) */}
                  <motion.circle
                    cx="250" cy="100" r="3"
                    fill="#FCD34D"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0],
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ transformOrigin: '250px 250px' }}
                  />
                  
                  <motion.circle
                    cx="400" cy="250" r="3"
                    fill="#FCD34D"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0],
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1
                    }}
                    style={{ transformOrigin: '250px 250px' }}
                  />
                  
                  <motion.circle
                    cx="250" cy="400" r="3"
                    fill="#FCD34D"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0],
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 2
                    }}
                    style={{ transformOrigin: '250px 250px' }}
                  />
                  
                  <motion.circle
                    cx="100" cy="250" r="3"
                    fill="#FCD34D"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0],
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 3
                    }}
                    style={{ transformOrigin: '250px 250px' }}
                  />
                  
                  {/* Agent Nodes */}
                  
                  {/* Sales Agent - Top Right */}
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <circle cx="380" cy="120" r="28" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" />
                    <text x="380" y="126" textAnchor="middle" fontSize="24" fill="#F59E0B">💼</text>
                    <text x="380" y="95" textAnchor="middle" fontSize="10" fill="#FFFFFF" fontWeight="600">SALES</text>
                  </motion.g>
                  
                  {/* Content Agent - Top Left */}
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <circle cx="120" cy="120" r="28" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" />
                    <text x="120" y="126" textAnchor="middle" fontSize="24" fill="#F59E0B">️</text>
                    <text x="120" y="95" textAnchor="middle" fontSize="10" fill="#FFFFFF" fontWeight="600">CONTENT</text>
                  </motion.g>
                  
                  {/* Analytics Agent - Bottom Left */}
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    <circle cx="120" cy="380" r="28" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" />
                    <text x="120" y="386" textAnchor="middle" fontSize="24" fill="#F59E0B">📊</text>
                    <text x="120" y="415" textAnchor="middle" fontSize="10" fill="#FFFFFF" fontWeight="600">ANALYTICS</text>
                  </motion.g>
                  
                  {/* Ops Agent - Bottom Right */}
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    <circle cx="380" cy="380" r="28" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" />
                    <text x="380" y="386" textAnchor="middle" fontSize="24" fill="#F59E0B">⚙️</text>
                    <text x="380" y="415" textAnchor="middle" fontSize="10" fill="#FFFFFF" fontWeight="600">OPS</text>
                  </motion.g>
                  
                  {/* Central Orchestrator Hub */}
                  <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {/* Outer pulse ring */}
                    <motion.circle
                      cx="250" cy="250" r="50"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="2"
                      opacity="0.3"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ transformOrigin: '250px 250px' }}
                    />
                    
                    {/* Main hub circle */}
                    <circle 
                      cx="250" 
                      cy="250" 
                      r="45" 
                      fill="url(#hubGradient)" 
                      filter="url(#glow)"
                    />
                    
                    {/* Hub icon */}
                    <text x="250" y="260" textAnchor="middle" fontSize="36" fill="#1A1A1A">🧠</text>
                  </motion.g>
                  
                  {/* Hub label */}
                  <motion.text
                    x="250"
                    y="310"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#FFFFFF"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    ORCHESTRATOR
                  </motion.text>
                  
                  {/* Coordinate flow arrows (curved paths) */}
                  {/* Arrow from Sales to Ops */}
                  <motion.path
                    d="M 380 140 Q 400 250 380 360"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.2"
                    strokeDasharray="3,3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
                  />
                  
                  {/* Arrow from Content to Analytics */}
                  <motion.path
                    d="M 120 140 Q 100 250 120 360"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.2"
                    strokeDasharray="3,3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 3, repeat: Infinity, repeatDelay: 3 }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS AN AI AGENT — DEFINITION CARDS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Definition Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FAF8F6] border border-[#EFE9E4] p-8 md:p-10"
            >
              <div className="w-14 h-14 bg-[#F59E0B] flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-4">
                What Is an AI Agent?
              </h3>
              
              <p className="text-[#666666] leading-relaxed mb-4">
                An AI agent is a specialized system designed to perform a specific role in your business—like sales follow-ups, content creation, reporting, or operations—automatically and continuously.
              </p>
              
              <p className="font-serif text-lg text-[#1A1A1A] font-semibold italic">
                Think digital employee, not chatbot.
              </p>
            </motion.div>
            
            {/* Definition Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#FAF8F6] border border-[#EFE9E4] p-8 md:p-10"
            >
              <div className="w-14 h-14 bg-[#1A1A1A] flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[#F59E0B]" />
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-4">
                How They're Different
              </h3>
              
              <p className="text-[#666666] leading-relaxed mb-4">
                Unlike simple chatbots, agents can plan, execute multi-step workflows, make context-aware decisions, and coordinate with other agents to complete complex business processes.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[#666666] text-sm">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>Autonomous decision-making</span>
                </li>
                <li className="flex items-start gap-2 text-[#666666] text-sm">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>Multi-step task execution</span>
                </li>
                <li className="flex items-start gap-2 text-[#666666] text-sm">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>Cross-system coordination</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI AGENT TYPES — CORE SERVICES GRID */}
      <section className="py-20 md:py-28 bg-[#FAF8F6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              AI Agent Types
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-2">
              Each AI agent specializes in a specific business function.
            </p>
            <p className="text-base text-[#666666] leading-relaxed">
              Together, they form a coordinated system that replaces manual work — not people.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {agentTypes.map((agent, index) => {
              const IconComponent = agent.icon;
              
              return (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white border border-[#EFE9E4] p-8 hover:border-[#F59E0B] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                >
                  {/* Header with Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#1A1A1A] group-hover:text-[#F59E0B] transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold tracking-widest ${agent.tierColor}`}>
                      {agent.tier}
                    </span>
                  </div>
                  
                  {/* Agent Name */}
                  <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-3">
                    {agent.name}
                  </h3>
                  
                  {/* What it does */}
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-2">
                      WHAT IT DOES
                    </div>
                    <p className="text-[#666666] text-sm leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                  
                  {/* Outcome */}
                  <div className="mb-6 flex-grow">
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-2">
                      OUTCOME
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#F59E0B] text-lg">●</span>
                      <span className="text-[#F59E0B] font-semibold text-sm leading-relaxed">
                        {agent.outcome}
                      </span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to={agent.route}
                    className="inline-flex items-center text-sm font-bold text-[#1A1A1A] hover:text-[#F59E0B] transition-colors group/link mt-auto"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
          
          {/* How Agents Work Together - Enterprise Diagram */}
          <div className="mt-20">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-4 text-center">
              How Agents Work Together
            </h3>
            <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto">
              Agents operate as a coordinated system with clear phases, handoffs, and human control gates.
            </p>
            
            <div className="bg-white border border-[#EFE9E4] p-8 md:p-12 overflow-x-auto">
              {/* Desktop Flow Diagram */}
              <div className="hidden lg:block min-w-[900px]">
                <div className="grid grid-cols-3 gap-8">
                  
                  {/* PHASE 1: PLANNING & COORDINATION */}
                  <div className="relative">
                    {/* Phase Label */}
                    <div className="mb-6">
                      <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-1">
                        PHASE 1
                      </div>
                      <div className="font-serif text-lg font-semibold text-[#1A1A1A]">
                        Plan & Coordinate
                      </div>
                    </div>
                    
                    {/* Phase Container */}
                    <div className="bg-[#FAF8F6] border-2 border-[#EFE9E4] p-6 relative">
                      {/* Planner */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-white border border-[#EFE9E4] flex items-center justify-center flex-shrink-0">
                            <ListChecks className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className="font-semibold text-[#1A1A1A] text-sm">Planner</div>
                            <div className="text-xs text-[#666666]">Defines goals & tasks</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow Down */}
                      <div className="flex justify-center mb-6">
                        <div className="w-0.5 h-6 bg-[#F59E0B]"></div>
                      </div>
                      
                      {/* Orchestrator */}
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                            <Network className="w-5 h-5 text-[#F59E0B]" strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className="font-semibold text-[#1A1A1A] text-sm">Orchestrator</div>
                            <div className="text-xs text-[#666666]">Routes & selects agents</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow Right to Next Phase */}
                      <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-[#F59E0B]" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  
                  {/* PHASE 2: ANALYZE & DECIDE */}
                  <div className="relative">
                    {/* Phase Label */}
                    <div className="mb-6">
                      <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-1">
                        PHASE 2
                      </div>
                      <div className="font-serif text-lg font-semibold text-[#1A1A1A]">
                        Analyze & Decide
                      </div>
                    </div>
                    
                    {/* Phase Container */}
                    <div className="bg-[#FAF8F6] border-2 border-[#EFE9E4] p-6 relative">
                      {/* Analyst */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-white border border-[#EFE9E4] flex items-center justify-center flex-shrink-0">
                            <BarChart3 className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className="font-semibold text-[#1A1A1A] text-sm">Analyst</div>
                            <div className="text-xs text-[#666666]">Research & validation</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow Down */}
                      <div className="flex justify-center mb-6">
                        <div className="w-0.5 h-6 bg-[#F59E0B]"></div>
                      </div>
                      
                      {/* Scorer */}
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white border border-[#EFE9E4] flex items-center justify-center flex-shrink-0">
                            <Gauge className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className="font-semibold text-[#1A1A1A] text-sm">Scorer</div>
                            <div className="text-xs text-[#666666]">Metrics & confidence</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Feedback Loop (Optional - Dotted Arrow) */}
                      <svg className="absolute -left-4 top-8 w-8 h-16" viewBox="0 0 32 64">
                        <path
                          d="M 28 32 C 8 32, 8 8, 28 8"
                          stroke="#F59E0B"
                          strokeWidth="1.5"
                          strokeDasharray="3,3"
                          fill="none"
                          opacity="0.4"
                        />
                        <polygon points="28,5 32,8 28,11" fill="#F59E0B" opacity="0.4" />
                      </svg>
                      
                      {/* Arrow Right to Next Phase */}
                      <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-[#F59E0B]" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  
                  {/* PHASE 3: CONTROL & EXECUTE */}
                  <div className="relative">
                    {/* Phase Label */}
                    <div className="mb-6">
                      <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-1">
                        PHASE 3
                      </div>
                      <div className="font-serif text-lg font-semibold text-[#1A1A1A]">
                        Control & Execute
                      </div>
                    </div>
                    
                    {/* Phase Container */}
                    <div className="bg-[#FAF8F6] border-2 border-[#EFE9E4] p-6 relative">
                      {/* Controller - Special Gate Styling */}
                      <div className="mb-6">
                        <div className="bg-[#FFF7ED] border-2 border-[#F59E0B] p-3 rounded-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                              <ShieldCheck className="w-5 h-5 text-white" strokeWidth={1.5} />
                            </div>
                            <div>
                              <div className="font-semibold text-[#1A1A1A] text-sm">Controller</div>
                              <div className="text-xs text-[#666666]">Rules & approvals</div>
                            </div>
                          </div>
                          
                          {/* Human Oversight Connection */}
                          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#F59E0B]/30">
                            <Users className="w-4 h-4 text-[#F59E0B]" strokeWidth={1.5} />
                            <div className="text-xs text-[#666666]">
                              Human oversight (when required)
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow Down */}
                      <div className="flex justify-center mb-6">
                        <div className="w-0.5 h-6 bg-[#F59E0B]"></div>
                      </div>
                      
                      {/* Execute */}
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                            <Zap className="w-5 h-5 text-[#F59E0B]" strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className="font-semibold text-[#1A1A1A] text-sm">Execute</div>
                            <div className="text-xs text-[#666666]">Actions & automation</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="mt-8 pt-6 border-t border-[#EFE9E4] flex items-center justify-center gap-8 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-0.5 bg-[#F59E0B]"></div>
                    <span className="text-[#666666]">Primary Flow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-0.5 border-t border-dashed border-[#F59E0B]"></div>
                    <span className="text-[#666666]">Feedback Loop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#F59E0B]" strokeWidth={1.5} />
                    <span className="text-[#666666]">Control Gate</span>
                  </div>
                </div>
              </div>
              
              {/* Tablet/Mobile Vertical Flow */}
              <div className="lg:hidden space-y-8">
                {/* Phase 1 */}
                <div>
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-1">
                      PHASE 1
                    </div>
                    <div className="font-serif text-lg font-semibold text-[#1A1A1A]">
                      Plan & Coordinate
                    </div>
                  </div>
                  <div className="bg-[#FAF8F6] border-2 border-[#EFE9E4] p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white border border-[#EFE9E4] flex items-center justify-center">
                        <ListChecks className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-semibold text-[#1A1A1A]">Planner</div>
                        <div className="text-xs text-[#666666]">Defines goals & tasks</div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-[#F59E0B]"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center">
                        <Network className="w-5 h-5 text-[#F59E0B]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-semibold text-[#1A1A1A]">Orchestrator</div>
                        <div className="text-xs text-[#666666]">Routes & selects agents</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-[#F59E0B] rotate-90" strokeWidth={2} />
                </div>
                
                {/* Phase 2 */}
                <div>
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-1">
                      PHASE 2
                    </div>
                    <div className="font-serif text-lg font-semibold text-[#1A1A1A]">
                      Analyze & Decide
                    </div>
                  </div>
                  <div className="bg-[#FAF8F6] border-2 border-[#EFE9E4] p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white border border-[#EFE9E4] flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-semibold text-[#1A1A1A]">Analyst</div>
                        <div className="text-xs text-[#666666]">Research & validation</div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-[#F59E0B]"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white border border-[#EFE9E4] flex items-center justify-center">
                        <Gauge className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-semibold text-[#1A1A1A]">Scorer</div>
                        <div className="text-xs text-[#666666]">Metrics & confidence</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-[#F59E0B] rotate-90" strokeWidth={2} />
                </div>
                
                {/* Phase 3 */}
                <div>
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-1">
                      PHASE 3
                    </div>
                    <div className="font-serif text-lg font-semibold text-[#1A1A1A]">
                      Control & Execute
                    </div>
                  </div>
                  <div className="bg-[#FAF8F6] border-2 border-[#EFE9E4] p-6 space-y-4">
                    <div className="bg-[#FFF7ED] border-2 border-[#F59E0B] p-4 rounded-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#F59E0B] flex items-center justify-center">
                          <ShieldCheck className="w-5 h-5 text-white" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="font-semibold text-[#1A1A1A]">Controller</div>
                          <div className="text-xs text-[#666666]">Rules & approvals</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-3 border-t border-[#F59E0B]/30">
                        <Users className="w-4 h-4 text-[#F59E0B]" strokeWidth={1.5} />
                        <div className="text-xs text-[#666666]">
                          Human oversight (when required)
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-[#F59E0B]"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center">
                        <Zap className="w-5 h-5 text-[#F59E0B]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-semibold text-[#1A1A1A]">Execute</div>
                        <div className="text-xs text-[#666666]">Actions & automation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Caption */}
              <p className="text-center text-[#666666] mt-10 italic text-sm">
                Agents don't act alone. They operate as a coordinated system with human control where it matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL-WORLD USE CASES */}
      <section id="use-cases" className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Real-World Use Cases
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              See how businesses use AI agents to solve actual problems
            </p>
          </div>
          
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border-l-4 ${selectedUseCase === index ? 'border-[#F59E0B] bg-[#FFF7ED]' : 'border-[#EFE9E4] bg-[#FDFCFB]'} p-8 transition-all duration-300 cursor-pointer hover:border-[#F59E0B]`}
                onClick={() => setSelectedUseCase(index)}
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-2">
                      INDUSTRY
                    </div>
                    <div className="font-semibold text-[#1A1A1A]">
                      {useCase.industry}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-2">
                      PROBLEM
                    </div>
                    <div className="text-[#666666] text-sm">
                      {useCase.problem}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-2">
                      AGENT USED
                    </div>
                    <div className="text-[#F59E0B] font-semibold text-sm">
                      {useCase.agentUsed}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#999999] font-bold mb-2">
                      RESULT
                    </div>
                    <div className="text-[#666666] text-sm mb-2">
                      {useCase.result}
                    </div>
                    <div className="text-2xl font-bold text-[#1A1A1A]">
                      {useCase.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VS ADVANCED AGENTS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Agent Tiers
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Start with what you need, expand as you grow
            </p>
          </div>
          
          <div className="bg-white border border-[#EFE9E4] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1A1A1A] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Tier</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Includes</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Best For</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE9E4]">
                  {tiers.map((tier, index) => (
                    <tr key={index} className="hover:bg-[#FDFCFB] transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#1A1A1A]">{tier.name}</td>
                      <td className="px-6 py-4 text-[#666666] text-sm">{tier.includes}</td>
                      <td className="px-6 py-4 text-[#666666] text-sm">{tier.bestFor}</td>
                      <td className="px-6 py-4 text-[#F59E0B] font-semibold text-sm">{tier.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & SAFETY */}
      <section className="py-20 md:py-28 bg-[#FAF8F6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Trust & Safety
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              You maintain full control and visibility
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-[#EFE9E4] p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#FAF8F6] border border-[#EFE9E4] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#666666]">
                      {feature.description}
                    </p>
                  </div>
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
              Build Your AI Agent Team
            </h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed font-serif" style={{ fontFamily: 'Lora, serif' }}>
              You don't need all agents. We recommend only what unlocks growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/wizard"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#F59E0B] text-[#1A1A1A] font-bold hover:bg-[#FCD34D] transition-all text-lg"
              >
                Build My AI Strategy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/wizard"
                className="inline-flex items-center justify-center px-10 py-5 border border-white text-white font-bold hover:bg-white hover:text-[#1A1A1A] transition-all text-lg"
              >
                See Recommended Agents
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