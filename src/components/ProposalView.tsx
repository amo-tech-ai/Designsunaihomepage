import { motion } from 'motion/react';
import {
  FileText,
  Download,
  Share2,
  CheckCircle2,
  Sparkles,
  Layout,
  Shield,
  Zap,
  Box,
  Code2,
  Database,
  Brain,
  Link2,
  Clock,
  DollarSign,
  ArrowRight,
  Lightbulb,
  AlertCircle,
  Target,
  Calendar,
  Package,
} from 'lucide-react';

interface ProposalViewProps {
  standalone?: boolean;
}

// Mock proposal data (would come from API/database)
const proposalData = {
  projectName: 'AI-Powered Customer Support Platform',
  summary: 'A comprehensive customer support solution leveraging advanced AI to automate common queries, intelligently route complex issues, and provide real-time analytics. This platform will reduce support ticket volume by 60% while improving customer satisfaction scores through instant, accurate responses and seamless human handoff when needed.',
  tags: ['AI Web App', 'Automation', 'Chatbot', 'NLP', 'Analytics Dashboard'],
  timeline: '8-10 weeks',
  budget: '$45,000 - $65,000',
  lastUpdated: '2 hours ago',
  status: 'Draft',
  
  deliverables: [
    {
      icon: Layout,
      title: 'AI Web Application',
      description: 'Modern, responsive web application with intuitive interface for customers and support teams',
      features: [
        'Customer-facing chat interface with AI bot',
        'Support agent dashboard with conversation management',
        'Real-time conversation monitoring and handoff',
        'Mobile-responsive design for all devices',
        'Dark mode support',
      ],
    },
    {
      icon: Shield,
      title: 'Authentication & Security',
      description: 'Secure user authentication system with role-based access control',
      features: [
        'Email/password authentication',
        'OAuth integration (Google, Microsoft)',
        'Role-based permissions (Admin, Agent, Customer)',
        'Session management and secure tokens',
        'Two-factor authentication (optional)',
      ],
    },
    {
      icon: Brain,
      title: 'AI Chatbot Engine',
      description: 'Natural language processing powered by advanced AI models',
      features: [
        'Intent recognition and entity extraction',
        'Context-aware conversation memory',
        'Multi-turn dialogue handling',
        'Sentiment analysis for escalation triggers',
        'Continuous learning from feedback',
      ],
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automated ticket routing, tagging, and priority assignment',
      features: [
        'Smart ticket categorization and tagging',
        'Priority-based queue management',
        'Automated assignment to appropriate agents',
        'SLA tracking and alerting',
        'Custom workflow rules builder',
      ],
    },
    {
      icon: Box,
      title: 'Analytics Dashboard',
      description: 'Real-time metrics and insights for support team performance',
      features: [
        'Resolution rate and response time metrics',
        'Customer satisfaction scoring (CSAT)',
        'AI automation success rate tracking',
        'Agent performance analytics',
        'Custom reporting and data export',
      ],
    },
    {
      icon: Link2,
      title: 'Integrations',
      description: 'Connect with existing tools and platforms',
      features: [
        'CRM integration (HubSpot, Salesforce)',
        'Slack notifications for agent alerts',
        'Email ticketing system integration',
        'Webhook support for custom integrations',
        'API access for third-party tools',
      ],
    },
  ],

  timeline_phases: [
    {
      phase: 'Discovery & Planning',
      duration: '2 weeks',
      description: 'Requirements finalization, technical architecture, project kickoff',
      tasks: ['Stakeholder interviews', 'Technical specification document', 'Design system creation', 'Development environment setup'],
    },
    {
      phase: 'UI/UX Design',
      duration: '1.5 weeks',
      description: 'User interface design, prototyping, and user testing',
      tasks: ['Wireframes and mockups', 'Interactive prototypes', 'Design review sessions', 'Accessibility audit'],
    },
    {
      phase: 'AI & Backend Development',
      duration: '4 weeks',
      description: 'Core AI engine, database, authentication, and integrations',
      tasks: ['AI model training and testing', 'Database schema and APIs', 'Authentication system', 'Third-party integrations'],
    },
    {
      phase: 'Frontend Development',
      duration: '2 weeks',
      description: 'User interfaces, dashboards, and client-side features',
      tasks: ['Customer chat interface', 'Agent dashboard', 'Analytics views', 'Responsive optimization'],
    },
    {
      phase: 'Testing & Deployment',
      duration: '1.5 weeks',
      description: 'Quality assurance, bug fixes, and production launch',
      tasks: ['End-to-end testing', 'Performance optimization', 'Security audit', 'Production deployment'],
    },
  ],

  techStack: {
    frontend: [
      { name: 'React', description: 'UI framework' },
      { name: 'TypeScript', description: 'Type safety' },
      { name: 'Tailwind CSS', description: 'Styling' },
      { name: 'Vite', description: 'Build tool' },
    ],
    backend: [
      { name: 'Supabase', description: 'Database & auth' },
      { name: 'Node.js', description: 'Runtime' },
      { name: 'Edge Functions', description: 'Serverless' },
      { name: 'PostgreSQL', description: 'Database' },
    ],
    ai: [
      { name: 'OpenAI GPT-4', description: 'Language model' },
      { name: 'LangChain', description: 'AI orchestration' },
      { name: 'Pinecone', description: 'Vector database' },
      { name: 'Hugging Face', description: 'NLP models' },
    ],
    integrations: [
      { name: 'HubSpot', description: 'CRM' },
      { name: 'Slack', description: 'Notifications' },
      { name: 'Stripe', description: 'Payments' },
      { name: 'SendGrid', description: 'Email' },
    ],
  },

  aiNotes: {
    suggestions: [
      'Consider implementing a knowledge base article suggestion feature to help customers find answers before reaching out',
      'Add multilingual support from day one to expand your global customer reach',
      'Implement proactive chat triggers based on user behavior patterns',
    ],
    risks: [
      'Integration with legacy CRM system may require additional development time',
      'High initial AI training data requirements for optimal performance',
    ],
    nextSteps: [
      'Schedule kickoff call to finalize technical requirements',
      'Provide access to existing support ticket history for AI training',
      'Review and approve design system and branding guidelines',
    ],
    optionalFeatures: [
      'Voice-to-text support for audio queries',
      'Video call integration for complex support cases',
      'Advanced analytics with predictive insights',
    ],
  },
};

export function ProposalView({ standalone = false }: ProposalViewProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Draft':
        return 'bg-slate-100 text-slate-700';
      case 'In Review':
        return 'bg-orange-100 text-orange-700';
      case 'Approved':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const containerClass = standalone 
    ? "min-h-screen bg-gradient-to-br from-[#F7F9FB] via-white to-[#F7F9FB] py-12"
    : "";

  return (
    <div className={containerClass}>
      <div className={standalone ? "max-w-[1000px] mx-auto px-6" : ""}>
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            {/* Left: Title */}
            <div className="flex-1">
              <h1 className="text-[32px] text-[#202020] mb-2" style={{ fontWeight: 700 }}>
                Project Proposal
              </h1>
              <p className="text-[15px] text-[#555]">
                AI-generated proposal based on your goals & requirements.
              </p>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Status Badge */}
              <span
                className={`px-4 py-2 rounded-lg text-[14px] ${getStatusColor(proposalData.status)}`}
                style={{ fontWeight: 500 }}
              >
                {proposalData.status}
              </span>

              {/* Share Button */}
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E9EAEE] text-[#555] hover:bg-[#F7F9FB] transition-all text-[14px]">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>

              {/* Download PDF Button */}
              <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-lg transition-all text-[14px]">
                <Download className="w-4 h-4" />
                <span style={{ fontWeight: 600 }}>Download PDF</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Proposal Summary Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden mb-8"
        >
          {/* Gradient Top Border */}
          <div className="h-1 bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F]" />
          
          <div className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00334F] to-[#005578] flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-[24px] text-[#202020] mb-3" style={{ fontWeight: 700 }}>
                  {proposalData.projectName}
                </h2>

                <p className="text-[15px] text-[#555] leading-[1.7] mb-4">
                  {proposalData.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proposalData.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-[#F7F9FB] to-[#E9EAEE] text-[#00334F] text-[13px]"
                      style={{ fontWeight: 500 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E9EAEE]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#FF6A3D]" />
                    <div>
                      <p className="text-[12px] text-[#999]" style={{ fontWeight: 600 }}>
                        TIMELINE
                      </p>
                      <p className="text-[14px] text-[#202020]" style={{ fontWeight: 500 }}>
                        {proposalData.timeline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#FF6A3D]" />
                    <div>
                      <p className="text-[12px] text-[#999]" style={{ fontWeight: 600 }}>
                        BUDGET
                      </p>
                      <p className="text-[14px] text-[#202020]" style={{ fontWeight: 500 }}>
                        {proposalData.budget}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#FF6A3D]" />
                    <div>
                      <p className="text-[12px] text-[#999]" style={{ fontWeight: 600 }}>
                        LAST UPDATED
                      </p>
                      <p className="text-[14px] text-[#202020]" style={{ fontWeight: 500 }}>
                        {proposalData.lastUpdated}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scope & Deliverables Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4F] flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-[24px] text-[#202020]" style={{ fontWeight: 700 }}>
              Scope & Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proposalData.deliverables.map((deliverable, i) => {
              const Icon = deliverable.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7F9FB] to-[#E9EAEE] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#00334F]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[18px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>
                        {deliverable.title}
                      </h3>
                      <p className="text-[14px] text-[#555] leading-[1.6]">
                        {deliverable.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {deliverable.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6A3D] flex-shrink-0 mt-0.5" />
                        <span className="text-[13px] text-[#555]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-md mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00334F] to-[#005578] flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-[24px] text-[#202020]" style={{ fontWeight: 700 }}>
              Project Timeline
            </h2>
          </div>

          <div className="space-y-6">
            {proposalData.timeline_phases.map((phase, i) => (
              <div key={i} className="relative">
                {/* Connector Line */}
                {i < proposalData.timeline_phases.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6A3D]/30 to-transparent" />
                )}

                <div className="flex gap-5">
                  {/* Phase Number */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4F] flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-[16px]" style={{ fontWeight: 700 }}>
                      {i + 1}
                    </span>
                  </div>

                  {/* Phase Content */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[18px] text-[#202020]" style={{ fontWeight: 600 }}>
                        {phase.phase}
                      </h3>
                      <span className="text-[14px] text-[#FF6A3D] px-3 py-1 rounded-lg bg-[#FF6A3D]/10" style={{ fontWeight: 500 }}>
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-[14px] text-[#555] mb-3">
                      {phase.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {phase.tasks.map((task, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 rounded-md bg-[#F7F9FB] text-[#555] text-[12px]"
                        >
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-8 pt-6 border-t border-[#E9EAEE]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] text-[#999]" style={{ fontWeight: 600 }}>
                TOTAL DURATION
              </span>
              <span className="text-[14px] text-[#202020]" style={{ fontWeight: 600 }}>
                {proposalData.timeline}
              </span>
            </div>
            <div className="h-2 bg-[#F7F9FB] rounded-full overflow-hidden">
              <div className="h-full w-0 bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-md mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00334F] to-[#005578] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-[24px] text-[#202020]" style={{ fontWeight: 700 }}>
              Tech Stack Recommendations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layout className="w-5 h-5 text-[#FF6A3D]" />
                <h3 className="text-[16px] text-[#202020]" style={{ fontWeight: 600 }}>
                  Frontend
                </h3>
              </div>
              <ul className="space-y-3">
                {proposalData.techStack.frontend.map((tech, i) => (
                  <li key={i} className="p-3 rounded-lg bg-[#F7F9FB] border border-[#E9EAEE]">
                    <p className="text-[14px] text-[#202020]" style={{ fontWeight: 500 }}>
                      {tech.name}
                    </p>
                    <p className="text-[12px] text-[#999]">
                      {tech.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-[#FF6A3D]" />
                <h3 className="text-[16px] text-[#202020]" style={{ fontWeight: 600 }}>
                  Backend
                </h3>
              </div>
              <ul className="space-y-3">
                {proposalData.techStack.backend.map((tech, i) => (
                  <li key={i} className="p-3 rounded-lg bg-[#F7F9FB] border border-[#E9EAEE]">
                    <p className="text-[14px] text-[#202020]" style={{ fontWeight: 500 }}>
                      {tech.name}
                    </p>
                    <p className="text-[12px] text-[#999]">
                      {tech.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Models */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-[#FF6A3D]" />
                <h3 className="text-[16px] text-[#202020]" style={{ fontWeight: 600 }}>
                  AI Models
                </h3>
              </div>
              <ul className="space-y-3">
                {proposalData.techStack.ai.map((tech, i) => (
                  <li key={i} className="p-3 rounded-lg bg-[#F7F9FB] border border-[#E9EAEE]">
                    <p className="text-[14px] text-[#202020]" style={{ fontWeight: 500 }}>
                      {tech.name}
                    </p>
                    <p className="text-[12px] text-[#999]">
                      {tech.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Integrations */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Link2 className="w-5 h-5 text-[#FF6A3D]" />
                <h3 className="text-[16px] text-[#202020]" style={{ fontWeight: 600 }}>
                  Integrations
                </h3>
              </div>
              <ul className="space-y-3">
                {proposalData.techStack.integrations.map((tech, i) => (
                  <li key={i} className="p-3 rounded-lg bg-[#F7F9FB] border border-[#E9EAEE]">
                    <p className="text-[14px] text-[#202020]" style={{ fontWeight: 500 }}>
                      {tech.name}
                    </p>
                    <p className="text-[12px] text-[#999]">
                      {tech.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* AI Notes & Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="bg-gradient-to-br from-[#00334F]/5 to-[#FF6A3D]/5 rounded-2xl p-8 border border-[#E9EAEE] mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4F] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-[24px] text-[#202020]" style={{ fontWeight: 700 }}>
              AI Notes & Recommendations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Suggestions */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-[#FF6A3D]" />
                <h3 className="text-[16px] text-[#202020]" style={{ fontWeight: 600 }}>
                  Suggestions
                </h3>
              </div>
              <ul className="space-y-3">
                {proposalData.aiNotes.suggestions.map((suggestion, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#FF6A3D] flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#555] leading-[1.6]">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Potential Risks */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                <h3 className="text-[16px] text-[#202020]" style={{ fontWeight: 600 }}>
                  Potential Risks
                </h3>
              </div>
              <ul className="space-y-3">
                {proposalData.aiNotes.risks.map((risk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#555] leading-[1.6]">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-[#00334F]" />
                <h3 className="text-[16px] text-[#202020]" style={{ fontWeight: 600 }}>
                  Next Steps
                </h3>
              </div>
              <ul className="space-y-3">
                {proposalData.aiNotes.nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#00334F] flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#555] leading-[1.6]">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional Features */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5 text-[#555]" />
                <h3 className="text-[16px] text-[#202020]" style={{ fontWeight: 600 }}>
                  Optional Features
                </h3>
              </div>
              <ul className="space-y-3">
                {proposalData.aiNotes.optionalFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#555] flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#555] leading-[1.6]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="text-center py-8"
        >
          <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-xl transition-all text-[16px] mb-4">
            <span style={{ fontWeight: 600 }}>Start Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-[14px] text-[#555] max-w-lg mx-auto">
            Need to adjust this proposal? Use the Requirements tab to refine features or contact us to discuss changes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
