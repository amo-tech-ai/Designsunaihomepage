import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Edit2,
  FileText,
  Flag,
  Layout,
  Link2,
  MoreVertical,
  Plus,
  Save,
  AlertCircle,
  Lightbulb,
  Sparkles,
  User,
  X,
  ChevronDown
} from 'lucide-react';

// Types duplicated from parent for independence
type PhaseStatus = 'not-started' | 'in-progress' | 'completed';
type MilestoneStatus = 'pending' | 'in-progress' | 'completed' | 'blocked';

export interface Phase {
  id: string;
  number: number;
  name: string;
  startDate: string;
  endDate: string;
  status: PhaseStatus;
  progress: number;
  icon: any;
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
  attachments?: string[];
  assignedTo?: string;
  acceptanceCriteria?: string[];
  notes?: string;
}

interface AIInsight {
  id: string;
  type: 'risk' | 'suggestion' | 'recommendation';
  title: string;
  description: string;
  icon: any;
  color: string;
}

interface PhaseDetailsPageProps {
  phase: Phase;
  allPhases: Phase[];
  onBack: () => void;
  onPhaseChange: (phase: Phase) => void;
}

// Mock data for the details view
const mockMilestones: Record<string, Milestone[]> = {
  default: [
    {
      id: 'm1',
      title: 'Initial Requirement Analysis',
      description: 'Review and analyze project requirements with the team.',
      date: '2025-12-16',
      status: 'completed',
      assignedTo: 'Product Team',
      acceptanceCriteria: ['All stakeholders interviewed', 'Requirements document signed off'],
      notes: 'Client emphasized the need for high-performance AI response times.'
    },
    {
      id: 'm2',
      title: 'Technical Feasibility Assessment',
      description: 'Assess technical feasibility of proposed features.',
      date: '2025-12-18',
      status: 'completed',
      attachments: ['feasibility-report.pdf'],
      assignedTo: 'Tech Lead',
    },
    {
      id: 'm3',
      title: 'Project Plan Finalization',
      description: 'Finalize project timeline and resource allocation.',
      date: '2025-12-20',
      status: 'in-progress',
      assignedTo: 'Project Manager',
    }
  ]
};

const mockInsights: AIInsight[] = [
  {
    id: 'i1',
    type: 'risk',
    title: 'Resource Constraint',
    description: 'Backend team availability is tight during week 3. Consider shifting non-critical tasks.',
    icon: AlertCircle,
    color: 'text-orange-600'
  },
  {
    id: 'i2',
    type: 'suggestion',
    title: 'Next Step',
    description: 'Schedule the weekly sync with the client to review the latest wireframes.',
    icon: Calendar,
    color: 'text-blue-600'
  },
  {
    id: 'i3',
    type: 'recommendation',
    title: 'Quality Assurance',
    description: 'Historical data suggests adding a buffer day for QA in this phase.',
    icon: Sparkles,
    color: 'text-purple-600'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'not-started': return 'bg-slate-100 text-slate-600';
    case 'in-progress': return 'bg-orange-100 text-orange-700';
    case 'completed': return 'bg-green-100 text-green-700';
    case 'pending': return 'bg-slate-100 text-slate-600';
    case 'blocked': return 'bg-red-100 text-red-700';
    default: return 'bg-slate-100 text-slate-600';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed': return CheckCircle2;
    case 'in-progress': return Clock;
    case 'blocked': return AlertCircle;
    default: return CheckCircle2; // Default for list
  }
};

export function PhaseDetailsPage({ phase, allPhases, onBack, onPhaseChange }: PhaseDetailsPageProps) {
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  // Settings Form State
  const [settings, setSettings] = useState({
    startDate: phase.startDate,
    endDate: phase.endDate,
    owner: 'Engineering Team',
    category: 'Development',
    dependencies: ['Phase 1']
  });

  const milestones = mockMilestones[phase.id] || mockMilestones.default;

  return (
    <div className="flex flex-col h-full bg-[#F7F9FB] overflow-hidden">
      {/* 1. Header */}
      <div className="bg-white border-b border-[#E9EAEE] px-8 py-6 flex-shrink-0">
        <div className="max-w-6xl mx-auto w-full">
          {/* Top Nav / Tabs */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar">
             {allPhases.map((p) => (
               <button
                 key={p.id}
                 onClick={() => onPhaseChange(p)}
                 className={`px-4 py-2 rounded-full text-[13px] whitespace-nowrap transition-all ${
                   p.id === phase.id 
                     ? 'bg-[#00334F] text-white shadow-md' 
                     : 'bg-[#F7F9FB] text-[#555] hover:bg-[#E9EAEE]'
                 }`}
                 style={{ fontWeight: 500 }}
               >
                 {p.name}
               </button>
             ))}
          </div>

          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                 <button 
                   onClick={onBack}
                   className="p-2 -ml-2 rounded-lg hover:bg-[#F7F9FB] text-[#999] hover:text-[#202020] transition-colors"
                 >
                   <ArrowLeft className="w-5 h-5" />
                 </button>
                 <span className={`px-2.5 py-1 rounded-md text-[12px] uppercase tracking-wide ${getStatusColor(phase.status)}`} style={{ fontWeight: 600 }}>
                   {phase.status.replace('-', ' ')}
                 </span>
              </div>
              <h1 className="text-[28px] text-[#202020] leading-tight" style={{ fontWeight: 700 }}>
                {phase.name}
              </h1>
              <div className="flex items-center gap-2 text-[14px] text-[#555]">
                <Calendar className="w-4 h-4 text-[#999]" />
                <span>{new Date(phase.startDate).toLocaleDateString()} – {new Date(phase.endDate).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all text-[14px] ${
                  isEditing 
                    ? 'bg-[#F7F9FB] text-[#202020] border border-[#E9EAEE]' 
                    : 'bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-lg'
                }`}
                style={{ fontWeight: 600 }}
              >
                {isEditing ? (
                  <>
                    <X className="w-4 h-4" />
                    Cancel Edit
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4" />
                    Edit Phase
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto w-full px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column (Main) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* 2. Phase Summary Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#E9EAEE] p-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FF6A3D] to-[#FF8A4F]" />
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-[18px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>Phase Summary</h3>
                    <p className="text-[14px] text-[#555] leading-relaxed max-w-xl">
                      This phase focuses on {phase.name.toLowerCase()} deliverables including requirements gathering, initial wireframes, and setting up the core project infrastructure.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#F7F9FB] flex items-center justify-center text-[#FF6A3D]">
                    <Layout className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex items-center gap-8 mt-6 pt-6 border-t border-[#F7F9FB]">
                  <div>
                    <div className="text-[12px] text-[#999] uppercase mb-1" style={{ fontWeight: 600 }}>Duration</div>
                    <div className="text-[15px] text-[#202020]" style={{ fontWeight: 600 }}>{phase.duration}</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-[#999] uppercase mb-1" style={{ fontWeight: 600 }}>Tasks</div>
                    <div className="text-[15px] text-[#202020]" style={{ fontWeight: 600 }}>{phase.completedTasks} / {phase.tasks} Completed</div>
                  </div>
                  <div className="flex-1 max-w-[200px]">
                    <div className="flex justify-between text-[12px] mb-1">
                      <span className="text-[#999]">Progress</span>
                      <span className="text-[#202020] font-semibold">{phase.progress}%</span>
                    </div>
                    <div className="h-2 bg-[#F7F9FB] rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF6A3D]" style={{ width: `${phase.progress}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Milestones & Tasks */}
              <div>
                <h3 className="text-[18px] text-[#202020] mb-4" style={{ fontWeight: 600 }}>Milestones & Tasks</h3>
                <div className="bg-white rounded-2xl shadow-sm border border-[#E9EAEE] overflow-hidden">
                  {milestones.map((milestone, index) => {
                    const isExpanded = expandedMilestone === milestone.id;
                    const StatusIcon = getStatusIcon(milestone.status);

                    return (
                      <div key={milestone.id} className={`border-b border-[#F7F9FB] last:border-0 ${isExpanded ? 'bg-[#FAFAFA]' : ''}`}>
                        <div 
                          className="p-5 flex items-center gap-4 cursor-pointer hover:bg-[#F7F9FB] transition-colors"
                          onClick={() => setExpandedMilestone(isExpanded ? null : milestone.id)}
                        >
                          <StatusIcon className={`w-5 h-5 flex-shrink-0 ${
                            milestone.status === 'completed' ? 'text-green-500' : 'text-slate-400'
                          }`} />
                          
                          <div className="flex-1">
                            <h4 className="text-[15px] text-[#202020] mb-1" style={{ fontWeight: 600 }}>{milestone.title}</h4>
                            <p className="text-[13px] text-[#555] line-clamp-1">{milestone.description}</p>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap ${getStatusColor(milestone.status)}`} style={{ fontWeight: 600 }}>
                              {milestone.status.replace('-', ' ')}
                            </span>
                            <div className="text-[12px] text-[#999] whitespace-nowrap">
                              {new Date(milestone.date).toLocaleDateString()}
                            </div>
                            <ChevronRight className={`w-4 h-4 text-[#CCC] transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                          </div>
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-6 pl-14 pt-0 space-y-4">
                                {/* Acceptance Criteria */}
                                {milestone.acceptanceCriteria && (
                                  <div>
                                    <div className="text-[12px] text-[#999] uppercase mb-2" style={{ fontWeight: 600 }}>Acceptance Criteria</div>
                                    <ul className="space-y-1.5">
                                      {milestone.acceptanceCriteria.map((criteria, i) => (
                                        <li key={i} className="flex items-start gap-2 text-[13px] text-[#555]">
                                          <div className="w-1.5 h-1.5 rounded-full bg-[#E9EAEE] mt-1.5" />
                                          {criteria}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                
                                <div className="grid grid-cols-2 gap-4">
                                  {milestone.assignedTo && (
                                    <div>
                                      <div className="text-[12px] text-[#999] uppercase mb-1" style={{ fontWeight: 600 }}>Assigned Team</div>
                                      <div className="flex items-center gap-2 text-[13px] text-[#202020]">
                                        <div className="w-5 h-5 rounded-full bg-[#F7F9FB] flex items-center justify-center">
                                          <User className="w-3 h-3 text-[#555]" />
                                        </div>
                                        {milestone.assignedTo}
                                      </div>
                                    </div>
                                  )}
                                  
                                  {milestone.attachments && (
                                    <div>
                                      <div className="text-[12px] text-[#999] uppercase mb-1" style={{ fontWeight: 600 }}>Attachments</div>
                                      <div className="flex flex-wrap gap-2">
                                        {milestone.attachments.map((file, i) => (
                                          <span key={i} className="inline-flex items-center gap-1 text-[12px] text-[#FF6A3D] bg-[#FFF0EB] px-2 py-1 rounded-md">
                                            <Link2 className="w-3 h-3" />
                                            {file}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                
                                {milestone.notes && (
                                  <div className="bg-[#FFFBEB] p-3 rounded-lg border border-[#FEF3C7] mt-2">
                                    <div className="text-[12px] text-[#92400E] font-medium mb-1 flex items-center gap-1">
                                      <AlertCircle className="w-3 h-3" /> Note
                                    </div>
                                    <p className="text-[13px] text-[#92400E]">{milestone.notes}</p>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                  
                  {/* Add Milestone Action */}
                  <button className="w-full py-4 text-[13px] text-[#FF6A3D] font-medium hover:bg-[#F7F9FB] transition-colors flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Milestone
                  </button>
                </div>
              </div>

              {/* 4. Settings Card (Edit Mode) */}
              {isEditing && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-sm border border-[#E9EAEE] p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-[18px] text-[#202020]" style={{ fontWeight: 600 }}>Phase Settings</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[13px] text-[#555] font-medium mb-2">Start Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
                        <input 
                          type="date" 
                          value={settings.startDate}
                          onChange={(e) => setSettings({...settings, startDate: e.target.value})}
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#202020] focus:border-[#FF6A3D] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#555] font-medium mb-2">End Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
                        <input 
                          type="date" 
                          value={settings.endDate}
                          onChange={(e) => setSettings({...settings, endDate: e.target.value})}
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#202020] focus:border-[#FF6A3D] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#555] font-medium mb-2">Phase Owner</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
                        <select 
                          value={settings.owner}
                          onChange={(e) => setSettings({...settings, owner: e.target.value})}
                          className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#202020] focus:border-[#FF6A3D] focus:outline-none appearance-none bg-white transition-colors"
                        >
                          <option>Engineering Team</option>
                          <option>Design Team</option>
                          <option>Product Team</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#555] font-medium mb-2">Category</label>
                      <div className="relative">
                        <Flag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
                        <select 
                          value={settings.category}
                          onChange={(e) => setSettings({...settings, category: e.target.value})}
                          className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#202020] focus:border-[#FF6A3D] focus:outline-none appearance-none bg-white transition-colors"
                        >
                          <option>Discovery</option>
                          <option>Design</option>
                          <option>Development</option>
                          <option>Testing</option>
                          <option>Launch</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4 border-t border-[#F7F9FB]">
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#202020] text-white hover:shadow-lg transition-all text-[14px] font-semibold">
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column (AI Insights) */}
            <div className="lg:col-span-1">
               {/* 5. AI Insights Panel */}
               <div className="bg-white rounded-2xl shadow-sm border border-[#E9EAEE] p-6 sticky top-6">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00334F] to-[#005578] flex items-center justify-center text-white shadow-md">
                     <Sparkles className="w-5 h-5" />
                   </div>
                   <div>
                     <h3 className="text-[16px] text-[#202020]" style={{ fontWeight: 600 }}>AI Insights</h3>
                     <p className="text-[12px] text-[#999]">Real-time phase analysis</p>
                   </div>
                 </div>

                 <div className="space-y-4">
                   {mockInsights.map((insight) => {
                     const Icon = insight.icon;
                     return (
                       <div key={insight.id} className="bg-[#F7F9FB] rounded-xl p-4 hover:bg-white hover:shadow-md border border-transparent hover:border-[#E9EAEE] transition-all group">
                         <div className="flex items-start gap-3">
                           <Icon className={`w-5 h-5 mt-0.5 ${insight.color}`} />
                           <div>
                             <h4 className={`text-[13px] mb-1 font-semibold ${insight.color}`}>
                               {insight.title}
                             </h4>
                             <p className="text-[13px] text-[#555] leading-relaxed">
                               {insight.description}
                             </p>
                           </div>
                         </div>
                       </div>
                     );
                   })}
                 </div>
                 
                 <div className="mt-6 pt-6 border-t border-[#E9EAEE]">
                   <button className="w-full py-2.5 rounded-lg border border-[#E9EAEE] text-[13px] text-[#555] font-medium hover:bg-[#F7F9FB] transition-colors flex items-center justify-center gap-2">
                     <Lightbulb className="w-4 h-4" />
                     View Full Analysis
                   </button>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
