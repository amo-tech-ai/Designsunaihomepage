import { useState } from 'react';
import { motion } from 'motion/react';
import {
  LayoutDashboard,
  FileText,
  ListChecks,
  FolderOpen,
  MessageSquare,
  ChevronDown,
  Calendar,
  DollarSign,
  Target,
  Plus,
  Upload,
  Sparkles,
  Edit2,
  Share2,
  Play,
  Globe,
  Users,
  Building2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Clock,
  Package,
  X,
} from 'lucide-react';
import { ProposalView } from './ProposalView';
import { RequirementsPageClean } from './RequirementsPageClean';
import { TimelinePage } from './TimelinePage';
import { DeliverablesPage } from './DeliverablesPage';

interface ProjectDashboardProps {
  onClose?: () => void;
}

// Mock project data (would come from form submission)
const projectData = {
  title: 'AI-Powered Customer Support Platform',
  status: 'Draft',
  createdDate: 'today',
  company: {
    name: 'TechCorp Inc.',
    website: 'https://techcorp.com',
    linkedin: 'https://linkedin.com/company/techcorp',
    teamSize: '16-50',
    industry: 'Technology & SaaS',
  },
  summary: 'A complete AI customer support solution with intelligent routing, automated responses, and real-time analytics designed to reduce support ticket volume by 60% while improving customer satisfaction scores.',
  goals: [
    'Automate 60% of common support queries',
    'Reduce average response time from 4 hours to 5 minutes',
    'Improve customer satisfaction score to 4.5+/5',
  ],
  keyFeatures: [
    'AI Chat Bot with natural language processing',
    'Knowledge Base with semantic search',
    'Analytics Dashboard with real-time metrics',
    'CRM Integration (HubSpot, Salesforce)',
    'Multi-language support',
  ],
  proposal: {
    timeline: '8-10 weeks',
    budget: '$45,000 - $65,000',
    deliverablesCount: 12,
    phases: [
      { name: 'Discovery & Planning', duration: '2 weeks', status: 'upcoming' },
      { name: 'Design & Development', duration: '5 weeks', status: 'upcoming' },
      { name: 'Testing & Launch', duration: '2 weeks', status: 'upcoming' },
    ],
  },
  aiNotes: {
    nextStep: 'Schedule a kickoff call to align on project scope and timeline',
    risks: ['Integration complexity with legacy CRM system may require additional time'],
    recommendations: ['Consider adding Slack integration for internal team notifications', 'Plan for user training sessions during launch phase'],
  },
  stats: {
    requirements: 0,
    files: 0,
    messages: 0,
  },
};

type TabType = 'overview' | 'proposal' | 'requirements' | 'timeline' | 'deliverables' | 'files' | 'chat';

export function ProjectDashboard({ onClose }: ProjectDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [projectStatus, setProjectStatus] = useState(projectData.status);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: LayoutDashboard },
    { id: 'proposal' as TabType, label: 'Proposal', icon: FileText },
    { id: 'requirements' as TabType, label: 'Requirements', icon: ListChecks },
    { id: 'timeline' as TabType, label: 'Timeline', icon: Calendar },
    { id: 'deliverables' as TabType, label: 'Deliverables', icon: Package },
    { id: 'files' as TabType, label: 'Files', icon: FolderOpen },
    { id: 'chat' as TabType, label: 'AI Chat', icon: MessageSquare },
  ];

  const statusOptions = ['Draft', 'In Progress', 'Review', 'Completed'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Draft':
        return 'bg-slate-100 text-slate-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      case 'Review':
        return 'bg-orange-100 text-orange-700';
      case 'Completed':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F9FB] via-white to-[#F7F9FB]">
      {/* Header */}
      <header className="bg-white border-b border-[#E9EAEE] sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-6 py-5">
          <div className="flex items-start justify-between gap-4 mb-4">
            {/* Left: Project Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h1 
                  className="text-[28px] text-[#202020] truncate"
                  style={{ fontWeight: 600 }}
                >
                  {projectData.title}
                </h1>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-1 text-[#999] hover:text-[#202020] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[14px] text-[#999]">
                Created {projectData.createdDate} · AI Proposal Ready
              </p>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Status Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${getStatusColor(projectStatus)}`}
                  style={{ fontWeight: 500 }}
                >
                  <span className="text-[14px]">{projectStatus}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showStatusDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowStatusDropdown(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#E9EAEE] py-2 z-20">
                      {statusOptions.map((status) => (
                        <button
                          key={status}
                          onClick={() => {
                            setProjectStatus(status);
                            setShowStatusDropdown(false);
                          }}
                          className="w-full px-4 py-2 text-left text-[14px] text-[#202020] hover:bg-[#F7F9FB] transition-colors"
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Share Button */}
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E9EAEE] text-[#555] hover:bg-[#F7F9FB] transition-all text-[14px]">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>

              {/* Start Project Button */}
              <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-lg transition-all text-[14px]">
                <Play className="w-4 h-4" />
                <span className="hidden sm:inline" style={{ fontWeight: 600 }}>Start Project</span>
                <span className="sm:hidden" style={{ fontWeight: 600 }}>Start</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 -mb-px scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-t-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-b from-[#FF6A3D]/10 to-transparent text-[#FF6A3D]'
                      : 'text-[#555] hover:bg-[#F7F9FB]'
                  }`}
                  style={{ fontWeight: isActive ? 600 : 500 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-[14px]">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'proposal' && <ProposalTab />}
            {activeTab === 'requirements' && <RequirementsTab />}
            {activeTab === 'timeline' && <TimelineTab />}
            {activeTab === 'deliverables' && <DeliverablesTab />}
            {activeTab === 'files' && <FilesTab />}
            {activeTab === 'chat' && <ChatTab />}
          </div>

          {/* Sidebar */}
          {activeTab !== 'timeline' && (
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <Sidebar />
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Project Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl p-8 shadow-md"
      >
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00334F] to-[#005578] flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-[20px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>
              Project Summary
            </h2>
            <p className="text-[15px] text-[#555] leading-[1.7] mb-6">
              {projectData.summary}
            </p>

            {/* Goals */}
            <div className="mb-6">
              <h3 className="text-[14px] text-[#999] mb-3" style={{ fontWeight: 600 }}>
                Project Goals
              </h3>
              <ul className="space-y-2">
                {projectData.goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A3D] flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] text-[#555]">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-[14px] text-[#999] mb-3" style={{ fontWeight: 600 }}>
                Key Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectData.keyFeatures.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#F7F9FB] text-[#00334F] text-[13px]"
                    style={{ fontWeight: 500 }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Proposal Snapshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-2xl p-8 shadow-md"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[20px] text-[#202020]" style={{ fontWeight: 600 }}>
            Proposal Snapshot
          </h2>
          <button className="text-[14px] text-[#FF6A3D] hover:text-[#FF8A4F] transition-colors flex items-center gap-1">
            <span style={{ fontWeight: 500 }}>Open Full Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Timeline */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-[#F7F9FB] to-white border border-[#E9EAEE]">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-[#FF6A3D]" />
              <span className="text-[13px] text-[#999]" style={{ fontWeight: 600 }}>
                Timeline
              </span>
            </div>
            <p className="text-[22px] text-[#00334F]" style={{ fontWeight: 700 }}>
              {projectData.proposal.timeline}
            </p>
          </div>

          {/* Budget */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-[#F7F9FB] to-white border border-[#E9EAEE]">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-[#FF6A3D]" />
              <span className="text-[13px] text-[#999]" style={{ fontWeight: 600 }}>
                Budget
              </span>
            </div>
            <p className="text-[22px] text-[#00334F]" style={{ fontWeight: 700 }}>
              {projectData.proposal.budget}
            </p>
          </div>

          {/* Deliverables */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-[#F7F9FB] to-white border border-[#E9EAEE]">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-[#FF6A3D]" />
              <span className="text-[13px] text-[#999]" style={{ fontWeight: 600 }}>
                Deliverables
              </span>
            </div>
            <p className="text-[22px] text-[#00334F]" style={{ fontWeight: 700 }}>
              {projectData.proposal.deliverablesCount} items
            </p>
          </div>
        </div>
      </motion.div>

      {/* Timeline & Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white rounded-2xl p-8 shadow-md"
      >
        <h2 className="text-[20px] text-[#202020] mb-6" style={{ fontWeight: 600 }}>
          Timeline & Milestones
        </h2>

        <div className="space-y-4">
          {projectData.proposal.phases.map((phase, i) => (
            <div key={i} className="relative">
              {/* Connector Line */}
              {i < projectData.proposal.phases.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-[#E9EAEE]" />
              )}

              <div className="flex items-start gap-4">
                {/* Phase Number */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4F] flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-[14px]" style={{ fontWeight: 600 }}>
                    {i + 1}
                  </span>
                </div>

                {/* Phase Content */}
                <div className="flex-1 pb-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-[16px] text-[#202020]" style={{ fontWeight: 600 }}>
                      {phase.name}
                    </h3>
                    <span className="text-[13px] text-[#999]">{phase.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#999]" />
                    <span className="text-[13px] text-[#999] capitalize">
                      {phase.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white rounded-2xl p-8 shadow-md"
      >
        <h2 className="text-[20px] text-[#202020] mb-6" style={{ fontWeight: 600 }}>
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[#F7F9FB] hover:bg-gradient-to-br hover:from-[#FF6A3D]/10 hover:to-[#FF8A4F]/10 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-gradient-to-br group-hover:from-[#FF6A3D] group-hover:to-[#FF8A4F] flex items-center justify-center transition-all shadow-sm">
              <Plus className="w-6 h-6 text-[#555] group-hover:text-white transition-colors" />
            </div>
            <span className="text-[13px] text-[#555] text-center" style={{ fontWeight: 500 }}>
              Add Requirement
            </span>
          </button>

          <button className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[#F7F9FB] hover:bg-gradient-to-br hover:from-[#FF6A3D]/10 hover:to-[#FF8A4F]/10 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-gradient-to-br group-hover:from-[#FF6A3D] group-hover:to-[#FF8A4F] flex items-center justify-center transition-all shadow-sm">
              <Upload className="w-6 h-6 text-[#555] group-hover:text-white transition-colors" />
            </div>
            <span className="text-[13px] text-[#555] text-center" style={{ fontWeight: 500 }}>
              Upload File
            </span>
          </button>

          <button className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[#F7F9FB] hover:bg-gradient-to-br hover:from-[#FF6A3D]/10 hover:to-[#FF8A4F]/10 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-gradient-to-br group-hover:from-[#FF6A3D] group-hover:to-[#FF8A4F] flex items-center justify-center transition-all shadow-sm">
              <Sparkles className="w-6 h-6 text-[#555] group-hover:text-white transition-colors" />
            </div>
            <span className="text-[13px] text-[#555] text-center" style={{ fontWeight: 500 }}>
              Ask AI
            </span>
          </button>

          <button className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[#F7F9FB] hover:bg-gradient-to-br hover:from-[#FF6A3D]/10 hover:to-[#FF8A4F]/10 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-gradient-to-br group-hover:from-[#FF6A3D] group-hover:to-[#FF8A4F] flex items-center justify-center transition-all shadow-sm">
              <Edit2 className="w-6 h-6 text-[#555] group-hover:text-white transition-colors" />
            </div>
            <span className="text-[13px] text-[#555] text-center" style={{ fontWeight: 500 }}>
              Edit Project Info
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// Empty State Component
function EmptyState({ icon: Icon, title, description, actionLabel }: { icon: any; title: string; description: string; actionLabel: string }) {
  return (
    <div className="bg-white rounded-2xl p-12 shadow-md text-center">
      <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F7F9FB] to-[#E9EAEE] items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-[#999]" />
      </div>
      <h3 className="text-[18px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>
        {title}
      </h3>
      <p className="text-[14px] text-[#555] mb-6 max-w-md mx-auto">
        {description}
      </p>
      <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-lg transition-all text-[14px]" style={{ fontWeight: 600 }}>
        {actionLabel}
      </button>
    </div>
  );
}

// Placeholder Tabs
function ProposalTab() {
  return (
    <ProposalView />
  );
}

function RequirementsTab() {
  return (
    <RequirementsPageClean />
  );
}

function TimelineTab() {
  return (
    <TimelinePage />
  );
}

function DeliverablesTab() {
  return (
    <DeliverablesPage />
  );
}

function FilesTab() {
  return (
    <EmptyState
      icon={FolderOpen}
      title="No Files Uploaded"
      description="Upload brand assets, documents, designs, or any files related to this project."
      actionLabel="Upload File"
    />
  );
}

function ChatTab() {
  return (
    <EmptyState
      icon={MessageSquare}
      title="No Messages Yet"
      description="Ask Sun AI anything about this project. Get suggestions, clarifications, or help with planning."
      actionLabel="Start Conversation"
    />
  );
}

// Sidebar Component
function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Project Metadata Card */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-[16px] text-[#202020] mb-4" style={{ fontWeight: 600 }}>
          Project Metadata
        </h3>

        <div className="space-y-4">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-[#999]" />
              <span className="text-[12px] text-[#999]" style={{ fontWeight: 600 }}>
                COMPANY
              </span>
            </div>
            <p className="text-[14px] text-[#202020] pl-6" style={{ fontWeight: 500 }}>
              {projectData.company.name}
            </p>
          </div>

          {/* Website */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-[#999]" />
              <span className="text-[12px] text-[#999]" style={{ fontWeight: 600 }}>
                WEBSITE
              </span>
            </div>
            <a
              href={projectData.company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#FF6A3D] hover:text-[#FF8A4F] pl-6 block truncate"
            >
              {projectData.company.website}
            </a>
          </div>

          {/* Team Size */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-[#999]" />
              <span className="text-[12px] text-[#999]" style={{ fontWeight: 600 }}>
                TEAM SIZE
              </span>
            </div>
            <p className="text-[14px] text-[#202020] pl-6">
              {projectData.company.teamSize}
            </p>
          </div>

          {/* Industry */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-[#999]" />
              <span className="text-[12px] text-[#999]" style={{ fontWeight: 600 }}>
                INDUSTRY
              </span>
            </div>
            <p className="text-[14px] text-[#202020] pl-6">
              {projectData.company.industry}
            </p>
          </div>
        </div>
      </div>

      {/* AI Notes Card */}
      <div className="bg-gradient-to-br from-[#00334F]/5 to-[#FF6A3D]/5 rounded-2xl p-6 border border-[#E9EAEE]">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#FF6A3D]" />
          <h3 className="text-[16px] text-[#202020]" style={{ fontWeight: 600 }}>
            AI Insights
          </h3>
        </div>

        <div className="space-y-4">
          {/* Next Step */}
          <div className="p-4 bg-white rounded-xl">
            <div className="flex items-start gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-[#FF6A3D] flex-shrink-0 mt-0.5" />
              <span className="text-[12px] text-[#999]" style={{ fontWeight: 600 }}>
                NEXT STEP
              </span>
            </div>
            <p className="text-[13px] text-[#555] leading-[1.6]">
              {projectData.aiNotes.nextStep}
            </p>
          </div>

          {/* Risks */}
          {projectData.aiNotes.risks.length > 0 && (
            <div className="p-4 bg-white rounded-xl">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-[12px] text-[#999]" style={{ fontWeight: 600 }}>
                  POTENTIAL RISKS
                </span>
              </div>
              <ul className="space-y-2">
                {projectData.aiNotes.risks.map((risk, i) => (
                  <li key={i} className="text-[13px] text-[#555] leading-[1.6]">
                    • {risk}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          {projectData.aiNotes.recommendations.length > 0 && (
            <div className="p-4 bg-white rounded-xl">
              <div className="flex items-start gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#00334F] flex-shrink-0 mt-0.5" />
                <span className="text-[12px] text-[#999]" style={{ fontWeight: 600 }}>
                  RECOMMENDATIONS
                </span>
              </div>
              <ul className="space-y-2">
                {projectData.aiNotes.recommendations.map((rec, i) => (
                  <li key={i} className="text-[13px] text-[#555] leading-[1.6]">
                    • {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}