import { useState, useMemo } from 'react';
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
import { useLeads } from '../context/LeadContext';
import { generateProposal } from '../lib/ai-proposal-generator';
import { Button } from './ui/design-system/Button';
import { Card } from './ui/design-system/Card';
import { Badge } from './ui/design-system/Badge';
import { Typography } from './ui/design-system/Typography';

interface ProjectDashboardProps {
  onClose?: () => void;
}

export function ProjectDashboard({ onClose }: ProjectDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const { leads } = useLeads();
  const currentLead = leads[0]; // Get the most recent lead

  // Generate dynamic project data based on the lead
  const projectData = useMemo(() => {
    if (!currentLead) return null;
    
    const proposal = generateProposal(currentLead);
    
    return {
      title: proposal.title,
      status: currentLead.status,
      createdDate: currentLead.date,
      company: {
        name: currentLead.companyName,
        website: currentLead.website || 'Not specified',
        linkedin: '#', // Placeholder
        teamSize: 'Unknown', // Not collected in wizard
        industry: 'Unknown', // Not collected in wizard
      },
      summary: proposal.summary,
      goals: currentLead.goals,
      keyFeatures: currentLead.services,
      proposal: {
        timeline: proposal.timeline,
        budget: proposal.budgetRange,
        deliverablesCount: proposal.deliverables,
        phases: proposal.phases,
        generatedDeliverables: proposal.generatedDeliverables
      },
      aiNotes: proposal.aiInsights,
      stats: {
        requirements: 0,
        files: 0,
        messages: 0,
      },
    };
  }, [currentLead]);

  const [projectStatus, setProjectStatus] = useState(projectData?.status || 'Draft');

  if (!projectData) return null; // Or a loading/empty state

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
        return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'In Progress':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Review':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-5">
          <div className="flex items-start justify-between gap-4 mb-6">
            {/* Left: Project Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <Typography variant="h2" className="text-2xl font-bold truncate">
                  {projectData.title}
                </Typography>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-1 text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                <span>Created {projectData.createdDate}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 mx-1" />
                <Badge variant="success" className="h-5 text-[10px] px-2 py-0">AI Proposal Ready</Badge>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Status Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${getStatusColor(projectStatus)}`}
                >
                  <span>{projectStatus}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showStatusDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowStatusDropdown(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-20">
                      {statusOptions.map((status) => (
                        <button
                          key={status}
                          onClick={() => {
                            setProjectStatus(status);
                            setShowStatusDropdown(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Share Button */}
              <Button variant="outline" size="sm" className="h-9" leftIcon={<Share2 className="w-4 h-4" />}>
                <span className="hidden sm:inline">Share</span>
              </Button>

              {/* Start Project Button */}
              <Button variant="primary" size="sm" className="h-9 shadow-lg shadow-orange-500/20" leftIcon={<Play className="w-4 h-4" />}>
                <span className="hidden sm:inline">Start Project</span>
                <span className="sm:hidden">Start</span>
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 overflow-x-auto pb-1 -mb-px scrollbar-hide border-b border-transparent">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-t-lg transition-all whitespace-nowrap text-sm font-medium ${
                    isActive
                      ? 'text-orange-600 bg-orange-50/50'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-orange-500' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {activeTab === 'overview' && <OverviewTab data={projectData} />}
            {activeTab === 'proposal' && <ProposalTab />}
            {activeTab === 'requirements' && <RequirementsTab />}
            {activeTab === 'timeline' && <TimelineTab />}
            {activeTab === 'deliverables' && <DeliverablesTab data={projectData.proposal.generatedDeliverables} />}
            {activeTab === 'files' && <FilesTab />}
            {activeTab === 'chat' && <ChatTab />}
          </div>

          {/* Sidebar */}
          {activeTab !== 'timeline' && (
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <Sidebar data={projectData} />
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ data }: { data: any }) {
  return (
    <div className="space-y-6">
      {/* Project Summary Card */}
      <Card variant="solid" className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-900/20">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <Typography variant="h3" className="mb-2">Project Summary</Typography>
            <p className="text-slate-600 leading-relaxed text-base mb-6">
              {data.summary}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Goals */}
              <div>
                <Typography variant="caption" className="text-slate-400 mb-3">Core Objectives</Typography>
                <ul className="space-y-3">
                  {data.goals.map((goal: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                         <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div>
                <Typography variant="caption" className="text-slate-400 mb-3">Key Features</Typography>
                <div className="flex flex-wrap gap-2">
                  {data.keyFeatures.map((feature: string, i: number) => (
                    <Badge key={i} variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Proposal Snapshot */}
      <Card variant="outline" className="p-8 bg-white">
        <div className="flex items-center justify-between mb-6">
          <Typography variant="h3">Proposal Snapshot</Typography>
          <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
            Open Full Proposal <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Timeline */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-colors group">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-slate-400 group-hover:text-orange-500" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Timeline</span>
            </div>
            <p className="text-2xl font-bold text-slate-900">
              {data.proposal.timeline}
            </p>
          </div>

          {/* Budget */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-colors group">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-slate-400 group-hover:text-orange-500" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Budget</span>
            </div>
            <p className="text-2xl font-bold text-slate-900">
              {data.proposal.budget}
            </p>
          </div>

          {/* Deliverables */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-colors group">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-4 h-4 text-slate-400 group-hover:text-orange-500" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Deliverables</span>
            </div>
            <p className="text-2xl font-bold text-slate-900">
              {data.proposal.deliverablesCount} items
            </p>
          </div>
        </div>
      </Card>

      {/* Timeline & Milestones */}
      <Card variant="solid" className="p-8">
        <Typography variant="h3" className="mb-6">Timeline & Milestones</Typography>

        <div className="space-y-0">
          {data.proposal.phases.map((phase: any, i: number) => (
            <div key={i} className="relative pl-8 pb-8 last:pb-0">
              {/* Connector Line */}
              {i < data.proposal.phases.length - 1 && (
                <div className="absolute left-[11px] top-3 bottom-0 w-px bg-slate-200" />
              )}

              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shadow-sm z-10">
                {i + 1}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {phase.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {phase.duration}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit text-[10px] uppercase tracking-wider bg-slate-100 text-slate-500">
                  {phase.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card variant="outline" className="p-8 border-slate-200">
        <Typography variant="h3" className="mb-6">Quick Actions</Typography>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ActionButton icon={Plus} label="Add Requirement" />
          <ActionButton icon={Upload} label="Upload File" />
          <ActionButton icon={Sparkles} label="Ask AI Assistant" highlight />
          <ActionButton icon={Edit2} label="Edit Project Info" />
        </div>
      </Card>
    </div>
  );
}

function ActionButton({ icon: Icon, label, highlight }: { icon: any, label: string, highlight?: boolean }) {
  return (
    <button className={`
      flex flex-col items-center gap-3 p-6 rounded-xl border transition-all group
      ${highlight 
        ? 'bg-orange-50 border-orange-100 hover:border-orange-300 hover:shadow-md hover:shadow-orange-500/10' 
        : 'bg-slate-50 border-slate-100 hover:border-slate-300 hover:bg-white hover:shadow-sm'
      }
    `}>
      <div className={`
        w-10 h-10 rounded-lg flex items-center justify-center transition-all
        ${highlight ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-white text-slate-400 group-hover:text-slate-900 border border-slate-200'}
      `}>
        <Icon className="w-5 h-5" />
      </div>
      <span className={`text-xs font-bold text-center ${highlight ? 'text-orange-700' : 'text-slate-600'}`}>
        {label}
      </span>
    </button>
  );
}

// Empty State Component
function EmptyState({ icon: Icon, title, description, actionLabel }: { icon: any; title: string; description: string; actionLabel: string }) {
  return (
    <div className="bg-white rounded-2xl p-16 shadow-sm border border-slate-200 text-center flex flex-col items-center">
      <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-slate-300" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
        {description}
      </p>
      <Button variant="primary">
        {actionLabel}
      </Button>
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

function DeliverablesTab({ data }: { data: any[] }) {
  return (
    <DeliverablesPage data={data} />
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
function Sidebar({ data }: { data: any }) {
  return (
    <div className="space-y-6">
      {/* Project Metadata Card */}
      <Card variant="outline" className="p-6 bg-white">
        <Typography variant="h4" className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
          Metadata
        </Typography>

        <div className="space-y-4">
          <MetaItem icon={Building2} label="COMPANY" value={data.company.name} />
          <MetaItem 
            icon={Globe} 
            label="WEBSITE" 
            value={data.company.website} 
            href={data.company.website}
            className="text-orange-600 hover:underline"
          />
          <MetaItem icon={Users} label="TEAM SIZE" value={data.company.teamSize} />
          <MetaItem icon={Target} label="INDUSTRY" value={data.company.industry} />
        </div>
      </Card>

      {/* AI Notes Card */}
      <Card variant="solid" className="p-6 bg-slate-900 text-white border-slate-800">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-orange-500" />
          <h3 className="font-bold text-base">
            AI Assistant Notes
          </h3>
        </div>

        <div className="space-y-6">
          {/* Next Step */}
          <div className="space-y-2">
             <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
               <Lightbulb className="w-3 h-3" /> Next Best Action
             </div>
             <p className="text-sm text-slate-300 leading-relaxed">
               {data.aiNotes.nextStep}
             </p>
          </div>

          <div className="h-px bg-white/10" />

          {/* Risks */}
          {data.aiNotes.risks.length > 0 && (
            <div className="space-y-2">
               <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                 <AlertCircle className="w-3 h-3" /> Risk Analysis
               </div>
               <ul className="space-y-2">
                {data.aiNotes.risks.map((risk: string, i: number) => (
                  <li key={i} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

function MetaItem({ icon: Icon, label, value, href, className }: { icon: any, label: string, value: string, href?: string, className?: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <Icon className="w-3 h-3 text-slate-400" />
        <span className="text-[10px] font-bold text-slate-400">{label}</span>
      </div>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`text-sm font-medium block truncate ${className}`}>
          {value}
        </a>
      ) : (
        <p className="text-sm font-medium text-slate-900 pl-5">
          {value}
        </p>
      )}
    </div>
  );
}
