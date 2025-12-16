import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Plus,
  Download,
  Search,
  Filter,
  MoreVertical,
  Edit2,
  Trash2,
  X,
  ChevronRight,
  Calendar,
  User,
  FileText,
  CheckCircle2,
  Circle,
  Clock,
  AlertCircle,
  Layout,
  Brain,
  Server,
  Zap,
  Link2,
  Palette,
  Package,
  Flag,
  Play,
  Pause,
  XCircle,
  TrendingUp,
  Target,
  Sparkles,
} from 'lucide-react';

type DeliverableStatus = 'pending' | 'in-progress' | 'completed' | 'blocked';
type DeliverableCategory = 'ai' | 'ui-ux' | 'backend' | 'automation' | 'integration' | 'design-assets';

interface Deliverable {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: DeliverableCategory;
  status: DeliverableStatus;
  dueDate: string;
  owner: string;
  progress: number;
  acceptanceCriteria?: string[];
  linkedRequirements?: string[];
  linkedFiles?: string[];
  notes?: string;
  activityLog?: ActivityLogEntry[];
  createdAt: string;
}

interface ActivityLogEntry {
  id: string;
  action: string;
  user: string;
  timestamp: string;
}

// Mock data
const mockDeliverables: Deliverable[] = [
  {
    id: 'd1',
    title: 'AI Chatbot Engine',
    description: 'GPT-4 powered conversational AI with context awareness and multi-turn conversations',
    fullDescription: 'Build a comprehensive AI chatbot engine using GPT-4 API that can handle customer queries, maintain conversation context across multiple turns, and provide accurate responses based on knowledge base integration.',
    category: 'ai',
    status: 'in-progress',
    dueDate: '2026-02-05',
    owner: 'AI Team',
    progress: 60,
    acceptanceCriteria: [
      'Chatbot responds to queries within 3 seconds',
      'Maintains context for up to 10 conversation turns',
      'Integration with knowledge base is functional',
      'Fallback to human agent works correctly',
      'Response accuracy is above 85%',
    ],
    linkedRequirements: ['AI-Powered Response Generator'],
    linkedFiles: ['chatbot-spec.pdf', 'gpt4-integration-guide.md'],
    notes: 'Priority deliverable for MVP. Ensure proper error handling for API failures.',
    activityLog: [
      { id: 'a1', action: 'Status changed to In Progress', user: 'John Doe', timestamp: '2026-01-15 10:30 AM' },
      { id: 'a2', action: 'Progress updated to 60%', user: 'AI Team', timestamp: '2026-01-20 03:45 PM' },
    ],
    createdAt: '2026-01-10',
  },
  {
    id: 'd2',
    title: 'Customer Dashboard UI',
    description: 'Modern, responsive dashboard interface for customers to manage support tickets and chat history',
    fullDescription: 'Design and implement a clean, intuitive dashboard where customers can view active tickets, search history, and access account settings with full dark mode support.',
    category: 'ui-ux',
    status: 'in-progress',
    dueDate: '2026-02-01',
    owner: 'Design Team',
    progress: 75,
    acceptanceCriteria: [
      'All screens are responsive on mobile, tablet, desktop',
      'Dark mode toggle works correctly',
      'Dashboard loads in under 2 seconds',
      'Accessibility standards (WCAG 2.1 AA) met',
      'User testing completed with 90% satisfaction',
    ],
    linkedRequirements: ['Customer Dashboard UI'],
    linkedFiles: ['dashboard-mockups.fig', 'component-library.fig'],
    notes: 'Following Sun AI design system. Ensure consistency across all views.',
    activityLog: [
      { id: 'a3', action: 'Mockups approved', user: 'Client', timestamp: '2026-01-18 11:00 AM' },
      { id: 'a4', action: 'Development started', user: 'Design Team', timestamp: '2026-01-19 09:15 AM' },
    ],
    createdAt: '2026-01-08',
  },
  {
    id: 'd3',
    title: 'OAuth Authentication System',
    description: 'Secure user authentication with Google and Microsoft OAuth integration',
    fullDescription: 'Implement a comprehensive authentication system supporting email/password login and OAuth providers (Google, Microsoft) with email verification and password reset functionality.',
    category: 'backend',
    status: 'completed',
    dueDate: '2026-01-25',
    owner: 'Engineering Team',
    progress: 100,
    acceptanceCriteria: [
      'Users can sign up with email/password',
      'Google OAuth integration works',
      'Microsoft OAuth integration works',
      'Password reset via email functional',
      'Email verification required for new accounts',
    ],
    linkedRequirements: ['User Authentication with OAuth'],
    linkedFiles: ['auth-flow-diagram.pdf'],
    notes: 'Completed ahead of schedule. All tests passing.',
    activityLog: [
      { id: 'a5', action: 'Development completed', user: 'Backend Dev', timestamp: '2026-01-22 04:30 PM' },
      { id: 'a6', action: 'Status changed to Completed', user: 'Engineering Team', timestamp: '2026-01-23 10:00 AM' },
    ],
    createdAt: '2026-01-05',
  },
  {
    id: 'd4',
    title: 'HubSpot CRM Integration',
    description: 'Two-way sync integration with HubSpot CRM for customer data and support interactions',
    fullDescription: 'Build integration that automatically syncs customer data to HubSpot, logs support interactions as activities, and handles real-time updates via webhooks.',
    category: 'integration',
    status: 'pending',
    dueDate: '2026-02-15',
    owner: 'Backend Team',
    progress: 0,
    acceptanceCriteria: [
      'Customer data syncs to HubSpot in real-time',
      'Support interactions logged as activities',
      'Custom properties mapped correctly',
      'Webhooks handle updates properly',
      'Error handling and retry logic robust',
    ],
    linkedRequirements: ['HubSpot CRM Integration'],
    notes: 'Waiting for HubSpot API credentials from client.',
    activityLog: [
      { id: 'a7', action: 'Deliverable created', user: 'Project Manager', timestamp: '2026-01-12 02:00 PM' },
    ],
    createdAt: '2026-01-12',
  },
  {
    id: 'd5',
    title: 'Automated Ticket Routing',
    description: 'Smart routing system that assigns tickets to appropriate agents based on expertise and availability',
    fullDescription: 'Create an automated system that analyzes ticket content, categorizes issues, routes to qualified agents with load balancing and priority handling.',
    category: 'automation',
    status: 'completed',
    dueDate: '2026-01-20',
    owner: 'Engineering Team',
    progress: 100,
    acceptanceCriteria: [
      'Tickets categorized automatically',
      'Routing considers agent expertise',
      'High priority tickets escalated',
      'Load balanced across agents',
      'Manual re-assignment possible',
    ],
    linkedRequirements: ['Automated Ticket Routing'],
    notes: 'Successfully deployed and tested in production.',
    activityLog: [
      { id: 'a8', action: 'Development completed', user: 'Dev Team', timestamp: '2026-01-18 03:00 PM' },
      { id: 'a9', action: 'Deployed to production', user: 'DevOps', timestamp: '2026-01-20 11:00 AM' },
    ],
    createdAt: '2026-01-05',
  },
  {
    id: 'd6',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with metrics, charts, and performance insights',
    fullDescription: 'Build comprehensive analytics interface showing ticket volume, response times, CSAT scores, agent performance, and custom reports.',
    category: 'ui-ux',
    status: 'pending',
    dueDate: '2026-02-10',
    owner: 'Frontend Team',
    progress: 0,
    acceptanceCriteria: [
      'Real-time data updates every 30 seconds',
      'All charts render correctly',
      'Export to PDF/CSV works',
      'Custom date ranges supported',
      'Performance optimized for large datasets',
    ],
    linkedRequirements: ['Analytics Dashboard'],
    notes: 'Backend API endpoints ready. Starting frontend work next week.',
    activityLog: [
      { id: 'a10', action: 'Requirements finalized', user: 'Product Manager', timestamp: '2026-01-14 09:00 AM' },
    ],
    createdAt: '2026-01-14',
  },
  {
    id: 'd7',
    title: 'Brand Assets & Design System',
    description: 'Complete design system with components, logos, icons, and brand guidelines',
    fullDescription: 'Deliver comprehensive design system including component library, brand guidelines, logo variations, icon sets, and typography specifications.',
    category: 'design-assets',
    status: 'in-progress',
    dueDate: '2026-01-28',
    owner: 'Design Team',
    progress: 85,
    acceptanceCriteria: [
      'All components documented in Figma',
      'Logo variations (primary, secondary, monochrome)',
      'Icon set with 50+ icons',
      'Typography scale defined',
      'Color palette with accessibility notes',
    ],
    linkedFiles: ['design-system.fig', 'brand-guidelines.pdf'],
    notes: 'Almost complete. Final review scheduled for next week.',
    activityLog: [
      { id: 'a11', action: 'Components library created', user: 'Lead Designer', timestamp: '2026-01-16 02:30 PM' },
      { id: 'a12', action: 'Progress updated to 85%', user: 'Design Team', timestamp: '2026-01-22 04:00 PM' },
    ],
    createdAt: '2026-01-10',
  },
  {
    id: 'd8',
    title: 'AI Model Training & Optimization',
    description: 'Fine-tune AI models for domain-specific responses with optimized performance',
    fullDescription: 'Train and optimize AI models using company-specific data to improve response accuracy and reduce latency.',
    category: 'ai',
    status: 'blocked',
    dueDate: '2026-02-08',
    owner: 'AI Team',
    progress: 30,
    acceptanceCriteria: [
      'Model accuracy above 90%',
      'Response latency under 2 seconds',
      'Training data properly labeled',
      'Model deployed to staging environment',
      'A/B testing results positive',
    ],
    linkedRequirements: ['AI-Powered Response Generator'],
    notes: 'BLOCKED: Waiting for additional training data from client.',
    activityLog: [
      { id: 'a13', action: 'Initial training completed', user: 'AI Engineer', timestamp: '2026-01-17 01:00 PM' },
      { id: 'a14', action: 'Status changed to Blocked', user: 'AI Team', timestamp: '2026-01-21 10:30 AM' },
    ],
    createdAt: '2026-01-12',
  },
];

const categories = [
  { id: 'all', label: 'All Categories', icon: Layout },
  { id: 'ai', label: 'AI', icon: Brain },
  { id: 'ui-ux', label: 'UI/UX', icon: Palette },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'automation', label: 'Automation', icon: Zap },
  { id: 'integration', label: 'Integration', icon: Link2 },
  { id: 'design-assets', label: 'Design Assets', icon: Package },
];

const statuses = [
  { id: 'all', label: 'All Status' },
  { id: 'pending', label: 'Pending' },
  { id: 'in-progress', label: 'In Progress' },
  { id: 'completed', label: 'Completed' },
  { id: 'blocked', label: 'Blocked' },
];

const getCategoryIcon = (category: DeliverableCategory) => {
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
    case 'design-assets':
      return Package;
    default:
      return Layout;
  }
};

const getCategoryColor = (category: DeliverableCategory) => {
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
    case 'design-assets':
      return 'bg-slate-100 text-slate-700';
    default:
      return 'bg-slate-100 text-slate-700';
  }
};

const getStatusColor = (status: DeliverableStatus) => {
  switch (status) {
    case 'pending':
      return 'bg-slate-100 text-slate-600';
    case 'in-progress':
      return 'bg-blue-100 text-blue-700';
    case 'completed':
      return 'bg-green-100 text-green-700';
    case 'blocked':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-slate-100 text-slate-600';
  }
};

const getStatusIcon = (status: DeliverableStatus) => {
  switch (status) {
    case 'pending':
      return Circle;
    case 'in-progress':
      return Play;
    case 'completed':
      return CheckCircle2;
    case 'blocked':
      return XCircle;
    default:
      return Circle;
  }
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const getDaysUntilDue = (dueDate: string) => {
  const today = new Date();
  const due = new Date(dueDate);
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export function DeliverablesPage() {
  const [deliverables, setDeliverables] = useState<Deliverable[]>(mockDeliverables);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeliverable, setSelectedDeliverable] = useState<Deliverable | null>(null);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  // Filter deliverables
  const filteredDeliverables = deliverables.filter(d => {
    const matchesCategory = selectedCategory === 'all' || d.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || d.status === selectedStatus;
    const matchesSearch = searchQuery === '' || 
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  // Calculate stats
  const totalDeliverables = deliverables.length;
  const completedDeliverables = deliverables.filter(d => d.status === 'completed').length;
  const inProgressDeliverables = deliverables.filter(d => d.status === 'in-progress').length;
  const blockedDeliverables = deliverables.filter(d => d.status === 'blocked').length;
  const overallProgress = Math.round((deliverables.reduce((sum, d) => sum + d.progress, 0) / deliverables.length));

  // Upcoming due dates (next 7 days)
  const upcomingDeliverables = deliverables
    .filter(d => {
      const days = getDaysUntilDue(d.dueDate);
      return days >= 0 && days <= 7 && d.status !== 'completed';
    })
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

  const handleAddDeliverable = () => {
    const newDeliverable: Deliverable = {
      id: Date.now().toString(),
      title: 'New Deliverable',
      description: 'Add description...',
      category: 'backend',
      status: 'pending',
      dueDate: new Date().toISOString().split('T')[0],
      owner: 'Unassigned',
      progress: 0,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setDeliverables([newDeliverable, ...deliverables]);
  };

  const handleDeleteDeliverable = (id: string) => {
    setDeliverables(deliverables.filter(d => d.id !== id));
    setMenuOpen(null);
    if (selectedDeliverable?.id === id) {
      setSelectedDeliverable(null);
    }
  };

  const emptyState = filteredDeliverables.length === 0 && deliverables.length > 0;
  const noDeliverables = deliverables.length === 0;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-[32px] text-[#202020] mb-2" style={{ fontWeight: 700 }}>
              Deliverables
            </h1>
            <p className="text-[15px] text-[#555]">
              Track progress across all project outcomes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E9EAEE] text-[#555] hover:bg-[#F7F9FB] transition-all text-[14px]">
              <Download className="w-4 h-4" />
              <span style={{ fontWeight: 500 }}>Export Summary</span>
            </button>

            <button
              onClick={handleAddDeliverable}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-lg transition-all text-[14px]"
            >
              <Plus className="w-4 h-4" />
              <span style={{ fontWeight: 600 }}>Add Deliverable</span>
            </button>
          </div>
        </div>

        {/* Progress Summary Cards */}
        {!noDeliverables && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Total Deliverables */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] text-blue-600" style={{ fontWeight: 600 }}>
                  TOTAL DELIVERABLES
                </span>
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-[32px] text-[#202020]" style={{ fontWeight: 700 }}>
                {totalDeliverables}
              </div>
            </motion.div>

            {/* Completed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] text-green-600" style={{ fontWeight: 600 }}>
                  COMPLETED
                </span>
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-[32px] text-[#202020]" style={{ fontWeight: 700 }}>
                {completedDeliverables}
              </div>
              <div className="text-[12px] text-[#555] mt-1">
                {Math.round((completedDeliverables / totalDeliverables) * 100)}% of total
              </div>
            </motion.div>

            {/* In Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100 p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] text-orange-600" style={{ fontWeight: 600 }}>
                  IN PROGRESS
                </span>
                <Play className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-[32px] text-[#202020]" style={{ fontWeight: 700 }}>
                {inProgressDeliverables}
              </div>
            </motion.div>

            {/* Overall Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100 p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] text-purple-600" style={{ fontWeight: 600 }}>
                  OVERALL PROGRESS
                </span>
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-[32px] text-[#202020] mb-2" style={{ fontWeight: 700 }}>
                {overallProgress}%
              </div>
              <div className="w-full h-2 bg-purple-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${overallProgress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        )}

        {/* Filters Bar */}
        {!noDeliverables && (
          <div className="bg-white rounded-xl border border-[#E9EAEE] p-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-1 min-w-[240px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
                <input
                  type="text"
                  placeholder="Search deliverables..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] focus:outline-none focus:border-[#FF6A3D] transition-colors"
                />
              </div>

              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 rounded-lg border border-[#E9EAEE] text-[13px] text-[#555] focus:outline-none focus:border-[#FF6A3D] transition-colors"
                style={{ fontWeight: 500 }}
              >
                {statuses.map(status => (
                  <option key={status.id} value={status.id}>
                    {status.label}
                  </option>
                ))}
              </select>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-[#E9EAEE] text-[13px] text-[#555] focus:outline-none focus:border-[#FF6A3D] transition-colors"
                style={{ fontWeight: 500 }}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>

              {/* Clear Filters */}
              {(selectedCategory !== 'all' || selectedStatus !== 'all' || searchQuery !== '') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedStatus('all');
                    setSearchQuery('');
                  }}
                  className="px-3 py-2 rounded-lg text-[13px] text-[#FF6A3D] hover:bg-[#FFF5F0] transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {noDeliverables ? (
          // No Deliverables State
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F7F9FB] to-[#E9EAEE] flex items-center justify-center mb-6">
              <Package className="w-10 h-10 text-[#555]" />
            </div>
            <h3 className="text-[20px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>
              No deliverables yet
            </h3>
            <p className="text-[14px] text-[#555] mb-6 max-w-md">
              Deliverables will appear here once your project begins. Add your first deliverable to get started.
            </p>
            <button
              onClick={handleAddDeliverable}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-lg transition-all text-[14px]"
            >
              <Plus className="w-4 h-4" />
              <span style={{ fontWeight: 600 }}>Add Deliverable</span>
            </button>
          </div>
        ) : emptyState ? (
          // Empty Filtered Results
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-[#F7F9FB] flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-[#999]" />
            </div>
            <h3 className="text-[18px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>
              No deliverables found
            </h3>
            <p className="text-[14px] text-[#555] mb-4">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedStatus('all');
                setSearchQuery('');
              }}
              className="text-[13px] text-[#FF6A3D] hover:underline"
              style={{ fontWeight: 500 }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            {/* At-Risk Items Alert */}
            {blockedDeliverables > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 bg-red-50 border border-red-200 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] text-red-900 mb-1" style={{ fontWeight: 600 }}>
                      {blockedDeliverables} {blockedDeliverables === 1 ? 'deliverable is' : 'deliverables are'} blocked
                    </h4>
                    <p className="text-[13px] text-red-700">
                      These items need attention to keep the project on track.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Upcoming Due Dates */}
            {upcomingDeliverables.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 bg-orange-50 border border-orange-200 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-[14px] text-orange-900 mb-2" style={{ fontWeight: 600 }}>
                      {upcomingDeliverables.length} {upcomingDeliverables.length === 1 ? 'deliverable' : 'deliverables'} due in the next 7 days
                    </h4>
                    <div className="space-y-1">
                      {upcomingDeliverables.slice(0, 3).map(d => (
                        <div key={d.id} className="flex items-center gap-2 text-[12px] text-orange-700">
                          <span style={{ fontWeight: 600 }}>{d.title}</span>
                          <span className="text-orange-500">•</span>
                          <span>Due {formatDate(d.dueDate)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Deliverables List */}
            <div className="space-y-3">
              {filteredDeliverables.map((deliverable, index) => {
                const CategoryIcon = getCategoryIcon(deliverable.category);
                const StatusIcon = getStatusIcon(deliverable.status);
                const isMenuOpen = menuOpen === deliverable.id;
                const daysUntil = getDaysUntilDue(deliverable.dueDate);
                const isDueSoon = daysUntil >= 0 && daysUntil <= 3 && deliverable.status !== 'completed';

                return (
                  <motion.div
                    key={deliverable.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-xl border border-[#E5E7EB] hover:border-[#FF6A3D] hover:shadow-md transition-all cursor-pointer group"
                    onClick={() => setSelectedDeliverable(deliverable)}
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        {/* Category Icon */}
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getCategoryColor(deliverable.category)}`}>
                          <CategoryIcon className="w-5 h-5" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h3 className="text-[16px] text-[#202020] group-hover:text-[#FF6A3D] transition-colors mb-1" style={{ fontWeight: 600 }}>
                                {deliverable.title}
                              </h3>
                              <p className="text-[13px] text-[#555] line-clamp-2">
                                {deliverable.description}
                              </p>
                            </div>

                            {/* Menu */}
                            <div className="relative ml-4">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setMenuOpen(isMenuOpen ? null : deliverable.id);
                                }}
                                className="p-1 rounded-lg hover:bg-[#F7F9FB] transition-colors opacity-0 group-hover:opacity-100"
                              >
                                <MoreVertical className="w-4 h-4 text-[#555]" />
                              </button>

                              {isMenuOpen && (
                                <div
                                  className="absolute right-0 top-8 w-36 bg-white rounded-lg shadow-lg border border-[#E9EAEE] py-1 z-10"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <button
                                    onClick={() => {
                                      setSelectedDeliverable(deliverable);
                                      setMenuOpen(null);
                                    }}
                                    className="w-full flex items-center gap-2 px-4 py-2 text-[13px] text-[#555] hover:bg-[#F7F9FB] transition-colors"
                                  >
                                    <Edit2 className="w-3.5 h-3.5" />
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => handleDeleteDeliverable(deliverable.id)}
                                    className="w-full flex items-center gap-2 px-4 py-2 text-[13px] text-red-600 hover:bg-red-50 transition-colors"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                    Delete
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 flex-wrap mb-3">
                            {/* Status */}
                            <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] ${getStatusColor(deliverable.status)}`} style={{ fontWeight: 500 }}>
                              <StatusIcon className="w-3.5 h-3.5" />
                              {deliverable.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </span>

                            {/* Due Date */}
                            <span className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[12px] ${isDueSoon ? 'bg-orange-100 text-orange-700' : 'bg-[#F7F9FB] text-[#555]'}`} style={{ fontWeight: 500 }}>
                              <Calendar className="w-3.5 h-3.5" />
                              Due {formatDate(deliverable.dueDate)}
                            </span>

                            {/* Owner */}
                            <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F7F9FB] text-[#555] text-[12px]">
                              <User className="w-3.5 h-3.5" />
                              {deliverable.owner}
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="flex items-center gap-3">
                            <div className="flex-1">
                              <div className="w-full h-2 bg-[#F7F9FB] rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full transition-all duration-500"
                                  style={{
                                    width: `${deliverable.progress}%`,
                                    background: deliverable.status === 'completed' ? '#10B981' : 
                                               deliverable.status === 'blocked' ? '#EF4444' :
                                               'linear-gradient(to right, #FF6A3D, #FF8A4F)',
                                  }}
                                />
                              </div>
                            </div>
                            <span className="text-[12px] text-[#555]" style={{ fontWeight: 600 }}>
                              {deliverable.progress}%
                            </span>
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
          </>
        )}
      </div>

      {/* Detail Drawer */}
      <AnimatePresence>
        {selectedDeliverable && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setSelectedDeliverable(null)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed right-0 top-0 bottom-0 w-[640px] bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getCategoryColor(selectedDeliverable.category)}`}>
                      {(() => {
                        const Icon = getCategoryIcon(selectedDeliverable.category);
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={selectedDeliverable.title}
                        className="w-full text-[24px] text-[#202020] bg-transparent border-none outline-none mb-2"
                        style={{ fontWeight: 700 }}
                        placeholder="Deliverable title"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedDeliverable(null)}
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
                    value={selectedDeliverable.fullDescription || selectedDeliverable.description}
                    className="w-full px-4 py-3 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] resize-none focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    rows={5}
                    placeholder="Add a detailed description..."
                  />
                </div>

                {/* Acceptance Criteria */}
                {selectedDeliverable.acceptanceCriteria && (
                  <div className="mb-6">
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      ACCEPTANCE CRITERIA
                    </label>
                    <div className="space-y-2">
                      {selectedDeliverable.acceptanceCriteria.map((criteria, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FF6A3D] flex-shrink-0 mt-1" />
                          <span className="text-[13px] text-[#555]">{criteria}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Meta Fields Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Category */}
                  <div>
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      CATEGORY
                    </label>
                    <select
                      value={selectedDeliverable.category}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    >
                      <option value="ai">AI</option>
                      <option value="ui-ux">UI/UX</option>
                      <option value="backend">Backend</option>
                      <option value="automation">Automation</option>
                      <option value="integration">Integration</option>
                      <option value="design-assets">Design Assets</option>
                    </select>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      STATUS
                    </label>
                    <select
                      value={selectedDeliverable.status}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="blocked">Blocked</option>
                    </select>
                  </div>

                  {/* Due Date */}
                  <div>
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      DUE DATE
                    </label>
                    <input
                      type="date"
                      value={selectedDeliverable.dueDate}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    />
                  </div>

                  {/* Owner */}
                  <div>
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      ASSIGNED TO
                    </label>
                    <input
                      type="text"
                      value={selectedDeliverable.owner}
                      placeholder="Assign owner..."
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    />
                  </div>

                  {/* Progress */}
                  <div className="col-span-2">
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      PROGRESS: {selectedDeliverable.progress}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={selectedDeliverable.progress}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Linked Requirements */}
                {selectedDeliverable.linkedRequirements && selectedDeliverable.linkedRequirements.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      LINKED REQUIREMENTS
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedDeliverable.linkedRequirements.map((req, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-[13px] text-blue-700"
                        >
                          <Flag className="w-3 h-3" />
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Linked Files */}
                {selectedDeliverable.linkedFiles && selectedDeliverable.linkedFiles.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-[13px] text-[#999] mb-2" style={{ fontWeight: 600 }}>
                      LINKED FILES
                    </label>
                    <div className="space-y-2">
                      {selectedDeliverable.linkedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F7F9FB] border border-[#E9EAEE] hover:bg-white transition-colors cursor-pointer"
                        >
                          <FileText className="w-4 h-4 text-[#555]" />
                          <span className="text-[13px] text-[#555]">{file}</span>
                        </div>
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
                    value={selectedDeliverable.notes || ''}
                    className="w-full px-4 py-3 rounded-lg border border-[#E9EAEE] text-[14px] text-[#555] resize-none focus:outline-none focus:border-[#FF6A3D] transition-colors"
                    rows={3}
                    placeholder="Add notes or comments..."
                  />
                </div>

                {/* Activity Log */}
                {selectedDeliverable.activityLog && selectedDeliverable.activityLog.length > 0 && (
                  <div className="mb-8 pb-6 border-b border-[#E9EAEE]">
                    <label className="block text-[13px] text-[#999] mb-3" style={{ fontWeight: 600 }}>
                      ACTIVITY LOG
                    </label>
                    <div className="space-y-3">
                      {selectedDeliverable.activityLog.map(activity => (
                        <div key={activity.id} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#FF6A3D] mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-[13px] text-[#202020]" style={{ fontWeight: 500 }}>
                              {activity.action}
                            </p>
                            <p className="text-[12px] text-[#999] mt-0.5">
                              {activity.user} • {activity.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Actions */}
                <div className="flex items-center gap-3">
                  <button className="flex-1 px-5 py-3 rounded-lg bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white hover:shadow-lg transition-all text-[14px]">
                    <span style={{ fontWeight: 600 }}>Save Changes</span>
                  </button>
                  <button
                    onClick={() => setSelectedDeliverable(null)}
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
