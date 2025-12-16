import { useState } from 'react';
import { motion } from 'motion/react';
import { PhaseDetailsPage } from './PhaseDetailsPage';
import { InteractiveGantt, GanttTask } from './InteractiveGantt';
import {
  Calendar,
  Download,
  Edit2,
  Search,
  Users,
  Palette,
  Code,
  TestTube,
  Rocket,
  Flag,
  CheckCircle2,
  Circle,
  Clock,
  AlertCircle,
  TrendingUp,
  Lightbulb,
  FileText,
  Link2,
  ChevronRight,
  Play,
  Check,
  Zap,
} from 'lucide-react';

type PhaseStatus = 'not-started' | 'in-progress' | 'completed';
type MilestoneStatus = 'pending' | 'in-progress' | 'completed' | 'blocked';

interface Phase {
  id: string;
  number: number;
  name: string;
  startDate: string;
  endDate: string;
  status: PhaseStatus;
  progress: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  duration: string;
  tasks: number;
  completedTasks: number;
}

interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  status: MilestoneStatus;
  phase: string;
  attachments?: string[];
  dependencies?: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const phases: Phase[] = [
  {
    id: 'p1',
    number: 1,
    name: 'Discovery & Planning',
    startDate: '2025-12-15',
    endDate: '2025-12-28',
    status: 'completed',
    progress: 100,
    icon: Search,
    color: '#3B82F6',
    duration: '2 weeks',
    tasks: 8,
    completedTasks: 8,
  },
  {
    id: 'p2',
    number: 2,
    name: 'UI/UX Design',
    startDate: '2025-12-29',
    endDate: '2026-01-11',
    status: 'in-progress',
    progress: 65,
    icon: Palette,
    color: '#EC4899',
    duration: '2 weeks',
    tasks: 10,
    completedTasks: 7,
  },
  {
    id: 'p3',
    number: 3,
    name: 'Development',
    startDate: '2026-01-12',
    endDate: '2026-02-08',
    status: 'not-started',
    progress: 0,
    icon: Code,
    color: '#8B5CF6',
    duration: '4 weeks',
    tasks: 18,
    completedTasks: 0,
  },
  {
    id: 'p4',
    number: 4,
    name: 'Testing & QA',
    startDate: '2026-02-09',
    endDate: '2026-02-22',
    status: 'not-started',
    progress: 0,
    icon: TestTube,
    color: '#F59E0B',
    duration: '2 weeks',
    tasks: 12,
    completedTasks: 0,
  },
  {
    id: 'p5',
    number: 5,
    name: 'Launch & Deploy',
    startDate: '2026-02-23',
    endDate: '2026-03-01',
    status: 'not-started',
    progress: 0,
    icon: Rocket,
    color: '#10B981',
    duration: '1 week',
    tasks: 6,
    completedTasks: 0,
  },
];

const milestones: Milestone[] = [
  {
    id: 'm1',
    title: 'Project Kickoff Meeting',
    description: 'Initial stakeholder alignment, requirements review, and team introduction.',
    date: '2025-12-15',
    status: 'completed',
    phase: 'Discovery & Planning',
    icon: Users,
    attachments: ['kickoff-notes.pdf', 'requirements-v1.doc'],
  },
  {
    id: 'm2',
    title: 'Requirements Documentation Complete',
    description: 'All functional and technical requirements documented and approved by stakeholders.',
    date: '2025-12-20',
    status: 'completed',
    phase: 'Discovery & Planning',
    icon: FileText,
  },
  {
    id: 'm3',
    title: 'Technical Architecture Finalized',
    description: 'System architecture, database schema, and API specifications approved.',
    date: '2025-12-27',
    status: 'completed',
    phase: 'Discovery & Planning',
    icon: Code,
  },
  {
    id: 'm4',
    title: 'Wireframes Delivered',
    description: 'Low-fidelity wireframes for all key user flows completed and reviewed.',
    date: '2026-01-03',
    status: 'completed',
    phase: 'UI/UX Design',
    icon: Palette,
    attachments: ['wireframes-v2.fig'],
  },
  {
    id: 'm5',
    title: 'High-Fidelity Designs Complete',
    description: 'All screens designed with final UI components, colors, and branding applied.',
    date: '2026-01-08',
    status: 'in-progress',
    phase: 'UI/UX Design',
    icon: Palette,
  },
  {
    id: 'm6',
    title: 'Design System Handoff',
    description: 'Component library, style guide, and assets delivered to development team.',
    date: '2026-01-11',
    status: 'pending',
    phase: 'UI/UX Design',
    icon: Flag,
  },
  {
    id: 'm7',
    title: 'Backend API Development Complete',
    description: 'All REST endpoints, authentication, and database integrations ready.',
    date: '2026-01-25',
    status: 'pending',
    phase: 'Development',
    icon: Code,
  },
  {
    id: 'm8',
    title: 'Frontend Development Complete',
    description: 'All UI screens implemented with responsive behavior and animations.',
    date: '2026-02-01',
    status: 'pending',
    phase: 'Development',
    icon: Code,
  },
  {
    id: 'm9',
    title: 'AI Integration Complete',
    description: 'AI models integrated, tested, and optimized for production use.',
    date: '2026-02-05',
    status: 'pending',
    phase: 'Development',
    icon: Zap,
  },
  {
    id: 'm10',
    title: 'QA Testing Complete',
    description: 'All test cases executed, bugs fixed, and system ready for UAT.',
    date: '2026-02-18',
    status: 'pending',
    phase: 'Testing & QA',
    icon: TestTube,
  },
  {
    id: 'm11',
    title: 'User Acceptance Testing',
    description: 'Client testing and final approval before production deployment.',
    date: '2026-02-22',
    status: 'pending',
    phase: 'Testing & QA',
    icon: CheckCircle2,
  },
  {
    id: 'm12',
    title: 'Production Deployment',
    description: 'Application deployed to production servers and made live.',
    date: '2026-02-28',
    status: 'pending',
    phase: 'Launch & Deploy',
    icon: Rocket,
  },
];

const ganttTasks: GanttTask[] = [
  { id: 'g1', name: 'Discovery & Planning', startWeek: 0, duration: 2, category: 'discovery', status: 'completed' },
  { id: 'g2', name: 'Wireframing', startWeek: 2, duration: 1, category: 'design', status: 'completed', dependencies: ['g1'] },
  { id: 'g3', name: 'UI Design', startWeek: 3, duration: 1.5, category: 'design', status: 'in-progress', dependencies: ['g2'] },
  { id: 'g4', name: 'Backend Development', startWeek: 4, duration: 3, category: 'development', status: 'planned', dependencies: ['g1'] },
  { id: 'g5', name: 'Frontend Development', startWeek: 5, duration: 2.5, category: 'development', status: 'planned', dependencies: ['g3'] },
  { id: 'g6', name: 'AI Integration', startWeek: 6, duration: 2, category: 'development', status: 'planned', dependencies: ['g4'] },
  { id: 'g7', name: 'QA Testing', startWeek: 8, duration: 2, category: 'testing', status: 'planned', dependencies: ['g5', 'g6'] },
  { id: 'g8', name: 'Deployment', startWeek: 10, duration: 1, category: 'launch', status: 'planned', dependencies: ['g7'] },
];

const getStatusColor = (status: PhaseStatus) => {
  switch (status) {
    case 'not-started':
      return 'bg-slate-100 text-slate-600';
    case 'in-progress':
      return 'bg-orange-100 text-orange-700';
    case 'completed':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-slate-100 text-slate-600';
  }
};

const getMilestoneStatusColor = (status: MilestoneStatus) => {
  switch (status) {
    case 'pending':
      return 'border-slate-300 bg-white';
    case 'in-progress':
      return 'border-orange-500 bg-orange-50';
    case 'completed':
      return 'border-green-500 bg-green-50';
    case 'blocked':
      return 'border-red-500 bg-red-50';
    default:
      return 'border-slate-300 bg-white';
  }
};

const getMilestoneIcon = (status: MilestoneStatus) => {
  switch (status) {
    case 'pending':
      return Circle;
    case 'in-progress':
      return Clock;
    case 'completed':
      return CheckCircle2;
    case 'blocked':
      return AlertCircle;
    default:
      return Circle;
  }
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export function TimelinePage() {
  const [showGantt, setShowGantt] = useState(true);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  if (selectedPhase) {
    return (
      <PhaseDetailsPage 
        phase={selectedPhase} 
        allPhases={phases}
        onBack={() => setSelectedPhase(null)}
        onPhaseChange={setSelectedPhase}
      />
    );
  }

  return (
    <div className="flex h-full">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-[32px] text-[#202020] mb-2" style={{ fontWeight: 700 }}>
                Project Timeline
              </h1>
              <p className="text-[15px] text-[#555]">
                Track your phases, milestones, and progress.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E9EAEE] text-[#555] hover:bg-[#F7F9FB] transition-all text-[14px]">
                <Download className="w-4 h-4" />
                <span style={{ fontWeight: 500 }}>Export PDF</span>
              </button>

              <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-lg transition-all text-[14px]">
                <Edit2 className="w-4 h-4" />
                <span style={{ fontWeight: 600 }}>Edit Timeline</span>
              </button>
            </div>
          </div>
        </div>

        {/* Phase Overview Section */}
        <div className="mb-12">
          <h2 className="text-[20px] text-[#202020] mb-4" style={{ fontWeight: 600 }}>
            Project Phases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const StatusIcon = phase.status === 'completed' ? CheckCircle2 : phase.status === 'in-progress' ? Play : Circle;
              
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-[#E9EAEE] hover:shadow-md transition-all overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPhase(phase)}
                >
                  {/* Gradient Top Border */}
                  <div className="h-1" style={{ background: phase.color }} />

                  <div className="p-5">
                    {/* Icon and Number */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${phase.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: phase.color }} />
                      </div>
                      <span className="text-[12px] text-[#999]" style={{ fontWeight: 600 }}>
                        PHASE {phase.number}
                      </span>
                    </div>

                    {/* Phase Name */}
                    <h3 className="text-[16px] text-[#202020] mb-3" style={{ fontWeight: 600 }}>
                      {phase.name}
                    </h3>

                    {/* Date Range */}
                    <div className="flex items-center gap-2 text-[12px] text-[#555] mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {formatDate(phase.startDate)} - {formatDate(phase.endDate)}
                      </span>
                    </div>

                    {/* Status and Duration */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] ${getStatusColor(phase.status)}`} style={{ fontWeight: 600 }}>
                        <StatusIcon className="w-3 h-3" />
                        {phase.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                      <span className="text-[11px] text-[#999]">{phase.duration}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-2">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] text-[#555]">Progress</span>
                        <span className="text-[11px] text-[#555]" style={{ fontWeight: 600 }}>
                          {phase.completedTasks}/{phase.tasks} tasks
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-[#F7F9FB] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${phase.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: phase.color }}
                        />
                      </div>
                    </div>

                    {/* Progress Percentage */}
                    <div className="text-right">
                      <span className="text-[13px]" style={{ fontWeight: 600, color: phase.color }}>
                        {phase.progress}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Milestones Timeline Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[20px] text-[#202020]" style={{ fontWeight: 600 }}>
              Milestones & Deliverables
            </h2>
            <button
              onClick={() => setShowGantt(!showGantt)}
              className="flex items-center gap-2 text-[13px] text-[#FF6A3D] hover:text-[#ff5515] transition-colors"
              style={{ fontWeight: 500 }}
            >
              {showGantt ? 'Hide' : 'Show'} Gantt View
              <ChevronRight className={`w-4 h-4 transition-transform ${showGantt ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center Spine */}
            <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#E9EAEE] via-[#FF6A3D] to-[#E9EAEE]" />

            {/* Milestones */}
            <div className="space-y-6">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const StatusIcon = getMilestoneIcon(milestone.status);
                const statusColor = getMilestoneStatusColor(milestone.status);

                return (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Node */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full border-[3px] ${statusColor} flex items-center justify-center shadow-sm`}>
                        <StatusIcon className={`w-5 h-5 ${
                          milestone.status === 'completed' ? 'text-green-600' :
                          milestone.status === 'in-progress' ? 'text-orange-600' :
                          milestone.status === 'blocked' ? 'text-red-600' :
                          'text-slate-400'
                        }`} />
                      </div>
                    </div>

                    {/* Milestone Card */}
                    <div className="flex-1 bg-white rounded-xl border border-[#E9EAEE] p-5 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4F] flex items-center justify-center">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h3 className="text-[16px] text-[#202020] mb-1" style={{ fontWeight: 600 }}>
                              {milestone.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="text-[12px] text-[#999]">{milestone.phase}</span>
                              <span className="text-[#E9EAEE]">•</span>
                              <div className="flex items-center gap-1 text-[12px] text-[#555]">
                                <Calendar className="w-3 h-3" />
                                {formatDate(milestone.date)}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] ${getStatusColor(
                          milestone.status === 'completed' ? 'completed' :
                          milestone.status === 'in-progress' ? 'in-progress' :
                          'not-started'
                        )}`} style={{ fontWeight: 600 }}>
                          {milestone.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                      </div>

                      <p className="text-[13px] text-[#555] mb-3">
                        {milestone.description}
                      </p>

                      {/* Attachments */}
                      {milestone.attachments && milestone.attachments.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {milestone.attachments.map((attachment, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F9FB] border border-[#E9EAEE] text-[12px] text-[#555] hover:bg-white transition-colors cursor-pointer"
                            >
                              <Link2 className="w-3 h-3" />
                              {attachment}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Dependencies */}
                      {milestone.dependencies && milestone.dependencies.length > 0 && (
                        <div className="flex items-center gap-2 mt-3 text-[11px] text-[#999]">
                          <AlertCircle className="w-3 h-3" />
                          Depends on: {milestone.dependencies.join(', ')}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gantt Chart Section */}
        {showGantt && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-[20px] text-[#202020] mb-6" style={{ fontWeight: 600 }}>
              Gantt Timeline View
            </h2>

            <InteractiveGantt initialTasks={ganttTasks} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
