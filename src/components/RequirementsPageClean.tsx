import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Plus,
  MoreVertical,
  Edit2,
  Copy,
  Trash2,
  X,
  ChevronRight,
  User,
  Calendar,
  FileText,
  CheckCircle2,
  Circle,
  Clock,
  Flag,
  Layout,
  Brain,
  Server,
  Zap,
  Link2,
  Palette,
  Package,
} from 'lucide-react';

type RequirementStatus = 'planned' | 'in-progress' | 'completed';
type RequirementPriority = 'low' | 'medium' | 'high';
type RequirementCategory = 'ai' | 'ui-ux' | 'backend' | 'automation' | 'integration' | 'custom';

interface Requirement {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  acceptanceCriteria?: string[];
  status: RequirementStatus;
  priority: RequirementPriority;
  category: RequirementCategory;
  owner?: string;
  relatedDeliverables?: string[];
  notes?: string;
  createdAt: string;
}

import { AISuggestionsSidebar } from './AISuggestionsSidebar';

// Mock data
const mockRequirements: Requirement[] = [
  {
    id: '1',
    title: 'User Authentication with OAuth',
    description: 'Implement secure user authentication supporting Google and Microsoft OAuth providers',
    fullDescription: 'Build a comprehensive authentication system that supports email/password login as well as OAuth integration with Google and Microsoft. Include password reset functionality and email verification.',
    acceptanceCriteria: [
      'Users can sign up with email and password',
      'Users can log in with Google OAuth',
      'Users can log in with Microsoft OAuth',
      'Password reset via email works correctly',
      'Email verification is required for new accounts',
    ],
    status: 'in-progress',
    priority: 'high',
    category: 'backend',
    owner: 'Engineering Team',
    relatedDeliverables: ['Authentication System', 'User Management'],
    notes: 'Priority for MVP launch. Ensure GDPR compliance.',
    createdAt: '2025-12-01',
  },
  {
    id: '2',
    title: 'AI-Powered Response Generator',
    description: 'Create an AI engine that generates contextual responses for customer support queries',
    fullDescription: 'Develop an AI system using GPT-4 that can understand customer queries, retrieve relevant context from knowledge base, and generate accurate, helpful responses.',
    acceptanceCriteria: [
      'AI can parse customer queries accurately',
      'System retrieves relevant context from knowledge base',
      'Responses are accurate and helpful',
      'Response time is under 3 seconds',
      'AI confidence score is displayed',
    ],
    status: 'planned',
    priority: 'high',
    category: 'ai',
    owner: 'AI Team',
    relatedDeliverables: ['AI Chatbot Engine'],
    notes: 'Requires training data from existing support tickets.',
    createdAt: '2025-12-02',
  },
  {
    id: '3',
    title: 'Customer Dashboard UI',
    description: 'Design and implement a modern, intuitive dashboard for customers to track support tickets',
    fullDescription: 'Create a responsive dashboard interface where customers can view their support tickets, chat history, and account settings. Include dark mode support.',
    acceptanceCriteria: [
      'Dashboard displays all active tickets',
      'Users can search and filter tickets',
      'Chat history is easily accessible',
      'Interface is responsive on all devices',
      'Dark mode toggle works correctly',
    ],
    status: 'in-progress',
    priority: 'medium',
    category: 'ui-ux',
    owner: 'Design Team',
    relatedDeliverables: ['AI Web Application'],
    notes: 'Follow Sun AI design system guidelines.',
    createdAt: '2025-12-03',
  },
  {
    id: '4',
    title: 'HubSpot CRM Integration',
    description: 'Integrate with HubSpot CRM to sync customer data and support interactions',
    fullDescription: 'Build a two-way sync integration with HubSpot CRM that automatically creates/updates contacts, logs support interactions, and syncs custom properties.',
    acceptanceCriteria: [
      'Customer data syncs to HubSpot in real-time',
      'Support interactions are logged as activities',
      'Custom properties are mapped correctly',
      'Webhooks handle real-time updates',
      'Error handling and retry logic is robust',
    ],
    status: 'planned',
    priority: 'medium',
    category: 'integration',
    owner: 'Backend Team',
    relatedDeliverables: ['Integrations'],
    notes: 'Need HubSpot API credentials from client.',
    createdAt: '2025-12-04',
  },
  {
    id: '5',
    title: 'Automated Ticket Routing',
    description: 'Implement smart routing system that assigns tickets to appropriate agents based on expertise',
    fullDescription: 'Create an automated system that analyzes ticket content, categorizes the issue, and routes to the most qualified agent. Include load balancing and priority handling.',
    acceptanceCriteria: [
      'Tickets are categorized automatically',
      'Routing considers agent expertise and availability',
      'High priority tickets are escalated correctly',
      'Load is balanced across available agents',
      'Manual re-assignment is possible',
    ],
    status: 'completed',
    priority: 'high',
    category: 'automation',
    owner: 'Engineering Team',
    relatedDeliverables: ['Workflow Automation'],
    notes: 'Successfully deployed and tested.',
    createdAt: '2025-11-28',
  },
];

const categories = [
  { id: 'all', label: 'All', icon: Layout },
  { id: 'ai', label: 'AI Features', icon: Brain },
  { id: 'ui-ux', label: 'UI/UX', icon: Palette },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'automation', label: 'Automation', icon: Zap },
  { id: 'integration', label: 'Integrations', icon: Link2 },
  { id: 'custom', label: 'Custom', icon: Package },
];

const getCategoryIcon = (category: RequirementCategory) => {
  switch (category) {
    case 'ai':
      return Brain;
    case 'ui-ux':
      return Palette;
    case 'backend':
      return Server;
    case 'automation':
      return Zap;
    case 'integration':
      return Link2;
    case 'custom':
      return Package;
    default:
      return Layout;
  }
};

const getCategoryColor = (category: RequirementCategory) => {
  switch (category) {
    case 'ai':
      return 'bg-purple-100 text-purple-700';
    case 'ui-ux':
      return 'bg-pink-100 text-pink-700';
    case 'backend':
      return 'bg-blue-100 text-blue-700';
    case 'automation':
      return 'bg-orange-100 text-orange-700';
    case 'integration':
      return 'bg-green-100 text-green-700';
    case 'custom':
      return 'bg-slate-100 text-slate-700';
    default:
      return 'bg-slate-100 text-slate-700';
  }
};

const getStatusColor = (status: RequirementStatus) => {
  switch (status) {
    case 'planned':
      return 'bg-slate-100 text-slate-700';
    case 'in-progress':
      return 'bg-orange-100 text-orange-700';
    case 'completed':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-slate-100 text-slate-700';
  }
};

const getStatusIcon = (status: RequirementStatus) => {
  switch (status) {
    case 'planned':
      return Circle;
    case 'in-progress':
      return Clock;
    case 'completed':
      return CheckCircle2;
    default:
      return Circle;
  }
};

const getPriorityColor = (priority: RequirementPriority) => {
  switch (priority) {
    case 'low':
      return 'text-slate-500';
    case 'medium':
      return 'text-orange-500';
    case 'high':
      return 'text-red-500';
    default:
      return 'text-slate-500';
  }
};

export function RequirementsPageClean() {
  const [requirements, setRequirements] = useState<Requirement[]>(mockRequirements);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRequirement, setSelectedRequirement] = useState<Requirement | null>(null);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const filteredRequirements = selectedCategory === 'all'
    ? requirements
    : requirements.filter(req => req.category === selectedCategory);

  const handleAddRequirement = () => {
    // In real app, this would open a modal/form
    const newReq: Requirement = {
      id: Date.now().toString(),
      title: 'New Requirement',
      description: 'Add description...',
      status: 'planned',
      priority: 'medium',
      category: 'custom',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setRequirements([newReq, ...requirements]);
  };

  const handleDeleteRequirement = (id: string) => {
    setRequirements(requirements.filter(req => req.id !== id));
    setMenuOpen(null);
    if (selectedRequirement?.id === id) {
      setSelectedRequirement(null);
    }
  };

  const handleDuplicateRequirement = (req: Requirement) => {
    const duplicated: Requirement = {
      ...req,
      id: Date.now().toString(),
      title: `${req.title} (Copy)`,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setRequirements([duplicated, ...requirements]);
    setMenuOpen(null);
  };

  const handleAddSuggestion = (suggestion: any) => {
    const newReq: Requirement = {
      id: Date.now().toString(),
      title: suggestion.title,
      description: suggestion.benefit,
      status: 'planned',
      priority: 'medium',
      category: suggestion.category || 'custom',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setRequirements([newReq, ...requirements]);
  };

  const emptyState = filteredRequirements.length === 0;

  return (
    <div className="flex h-full">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pr-0">
        <div className="p-0 h-full flex flex-col">
           {/* Header Container with Padding */}
           <div className="px-0 pb-8">
             {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-[32px] text-[#202020] mb-2" style={{ fontWeight: 700 }}>
                Requirements
              </h1>
              <p className="text-[15px] text-[#555]">
                Add and organize features, workflows, and project needs.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleAddRequirement}
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-lg transition-all text-[14px]"
              >
                <Plus className="w-4 h-4" />
                <span style={{ fontWeight: 600 }}>Add Requirement</span>
              </button>
            </div>
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white shadow-md'
                      : 'bg-white border border-[#E9EAEE] text-[#555] hover:bg-[#F7F9FB]'
                  }`}
                  style={{ fontWeight: isActive ? 600 : 500 }}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
        </div>

        {/* Requirements List or Empty State */}
        {emptyState ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F7F9FB] to-[#E9EAEE] flex items-center justify-center mb-6">
              <FileText className="w-10 h-10 text-[#555]" />
            </div>
            <h3 className="text-[20px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>
              No requirements added yet
            </h3>
            <p className="text-[14px] text-[#555] mb-6 max-w-md">
              Add your first requirement to get started.
            </p>
            <button
              onClick={handleAddRequirement}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-lg transition-all text-[14px]"
            >
              <Plus className="w-4 h-4" />
              <span style={{ fontWeight: 600 }}>Add Requirement</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredRequirements.map((req, index) => {
              const CategoryIcon = getCategoryIcon(req.category);
              const StatusIcon = getStatusIcon(req.status);
              const isMenuOpen = menuOpen === req.id;

              return (
                <motion.div
                  key={req.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-[#E5E7EB] hover:border-[#FF6A3D] hover:shadow-md transition-all cursor-pointer group"
                  onClick={() => setSelectedRequirement(req)}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      {/* Category Icon */}
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getCategoryColor(req.category)}`}>
                        <CategoryIcon className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-[16px] text-[#202020] group-hover:text-[#FF6A3D] transition-colors" style={{ fontWeight: 600 }}>
                            {req.title}
                          </h3>

                          {/* Menu */}
                          <div className="relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setMenuOpen(isMenuOpen ? null : req.id);
                              }}
                              className="p-1 rounded-lg hover:bg-[#F7F9FB] transition-colors opacity-0 group-hover:opacity-100"
                            >
                              <MoreVertical className="w-4 h-4 text-[#555]" />
                            </button>

                            {isMenuOpen && (
                              <div
                                className="absolute right-0 top-8 w-40 bg-white rounded-lg shadow-lg border border-[#E9EAEE] py-1 z-10"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <button
                                  onClick={() => {
                                    setSelectedRequirement(req);
                                    setMenuOpen(null);
                                  }}
                                  className="w-full flex items-center gap-2 px-4 py-2 text-[13px] text-[#555] hover:bg-[#F7F9FB] transition-colors"
                                >
                                  <Edit2 className="w-3.5 h-3.5" />
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDuplicateRequirement(req)}
                                  className="w-full flex items-center gap-2 px-4 py-2 text-[13px] text-[#555] hover:bg-[#F7F9FB] transition-colors"
                                >
                                  <Copy className="w-3.5 h-3.5" />
                                  Duplicate
                                </button>
                                <button
                                  onClick={() => handleDeleteRequirement(req.id)}
                                  className="w-full flex items-center gap-2 px-4 py-2 text-[13px] text-red-600 hover:bg-red-50 transition-colors"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>

                        <p className="text-[13px] text-[#555] mb-3 line-clamp-2">
                          {req.description}
                        </p>

                        <div className="flex items-center gap-2 flex-wrap">
                          {/* Status */}
                          <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] ${getStatusColor(req.status)}`} style={{ fontWeight: 500 }}>
                            <StatusIcon className="w-3.5 h-3.5" />
                            {req.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </span>

                          {/* Priority */}
                          <span className={`flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F7F9FB] text-[12px] ${getPriorityColor(req.priority)}`} style={{ fontWeight: 500 }}>
                            <Flag className="w-3.5 h-3.5" />
                            {req.priority.charAt(0).toUpperCase() + req.priority.slice(1)}
                          </span>

                          {/* Owner */}
                          {req.owner && (
                            <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F7F9FB] text-[#555] text-[12px]">
                              <User className="w-3.5 h-3.5" />
                              {req.owner}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Arrow */}
                      <ChevronRight className="w-5 h-5 text-[#999] group-hover:text-[#FF6A3D] transition-colors flex-shrink-0 mt-2" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
        </div>
      </div>

      {/* Right Sidebar */}
      <AISuggestionsSidebar onAddSuggestion={handleAddSuggestion} />

      {/* Detail Drawer */}
      <AnimatePresence>
        {selectedRequirement && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setSelectedRequirement(null)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed right-0 top-0 bottom-0 w-[600px] bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getCategoryColor(selectedRequirement.category)}`}>
                      {(() => {
                        const Icon = getCategoryIcon(selectedRequirement.category);
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={selectedRequirement.title}
                        className="w-full text-[24px] text-[#202020] bg-transparent border-none outline-none mb-2"
                        style={{ fontWeight: 700 }}
                        placeholder="Requirement title"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedRequirement(null)}
                    className="p-2 rounded-lg hover:bg-[#F7F9FB] transition-colors"
                  >
                    <X className="w-5 h-5 text-[#555]" />
                  </button>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                    DESCRIPTION
                  </label>
                  <textarea
                    value={selectedRequirement.fullDescription || selectedRequirement.description}
                    className="w-full px-4 py-3 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] resize-none focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    rows={4}
                    placeholder="Add a detailed description..."
                  />
                </div>

                {/* Acceptance Criteria */}
                <div className="mb-6">
                  <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                    ACCEPTANCE CRITERIA
                  </label>
                  <div className="space-y-2">
                    {selectedRequirement.acceptanceCriteria?.map((criteria, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6A3D] flex-shrink-0 mt-1" />
                        <span className="text-[13px] text-[#555]">{criteria}</span>
                      </div>
                    ))}
                    <button className="flex items-center gap-2 text-[13px] text-[#FF6A3D] hover:text-[#ff5515] transition-colors mt-2">
                      <Plus className="w-3.5 h-3.5" />
                      Add criteria
                    </button>
                  </div>
                </div>

                {/* Meta Fields Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Category */}
                  <div>
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      CATEGORY
                    </label>
                    <select
                      value={selectedRequirement.category}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    >
                      <option value="ai">AI Features</option>
                      <option value="ui-ux">UI/UX</option>
                      <option value="backend">Backend</option>
                      <option value="automation">Automation</option>
                      <option value="integration">Integration</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>

                  {/* Priority */}
                  <div>
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      PRIORITY
                    </label>
                    <select
                      value={selectedRequirement.priority}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      STATUS
                    </label>
                    <select
                      value={selectedRequirement.status}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    >
                      <option value="planned">Planned</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  {/* Owner */}
                  <div>
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      OWNER
                    </label>
                    <input
                      type="text"
                      value={selectedRequirement.owner || ''}
                      placeholder="Assign owner..."
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    />
                  </div>
                </div>

                {/* Related Deliverables */}
                {selectedRequirement.relatedDeliverables && selectedRequirement.relatedDeliverables.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      RELATED DELIVERABLES
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedRequirement.relatedDeliverables.map((deliverable, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 rounded-lg bg-[#F7F9FB] border border-[#E9EAEE] text-[13px] text-[#555]"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes */}
                <div className="mb-6">
                  <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                    NOTES
                  </label>
                  <textarea
                    value={selectedRequirement.notes || ''}
                    className="w-full px-4 py-3 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] resize-none focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    rows={3}
                    placeholder="Add notes or comments..."
                  />
                </div>

                {/* Created Date */}
                <div className="mb-8 pb-6 border-b border-[#E9EAEE]">
                  <div className="flex items-center gap-2 text-[12px] text-[#999]">
                    <Calendar className="w-4 h-4" />
                    Created on {new Date(selectedRequirement.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center gap-3">
                  <button className="flex-1 px-5 py-3 rounded-lg bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-lg transition-all text-[14px]">
                    <span style={{ fontWeight: 600 }}>Save Changes</span>
                  </button>
                  <button
                    onClick={() => setSelectedRequirement(null)}
                    className="px-5 py-3 rounded-lg bg-white border border-[#E9EAEE] text-[#555] hover:bg-[#F7F9FB] transition-all text-[14px]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
