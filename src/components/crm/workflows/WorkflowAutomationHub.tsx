import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Zap,
  Clock,
  Mail,
  AlertTriangle,
  TrendingUp,
  Users,
  FileText,
  Calendar,
  CheckCircle2,
  Play,
  Pause,
  Settings,
  BarChart3
} from 'lucide-react';

interface Workflow {
  id: string;
  name: string;
  description: string;
  trigger: 'time' | 'event' | 'threshold';
  status: 'active' | 'paused' | 'draft';
  runs_today: number;
  success_rate: number;
  last_run: Date;
  icon: any;
  category: 'engagement' | 'conversion' | 'retention' | 'intelligence';
  actions: string[];
}

export function WorkflowAutomationHub() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Mock workflow data
  const workflows: Workflow[] = [
    {
      id: 'ghost-detection',
      name: 'Ghost Detection & Breakup Email',
      description: 'Auto-send breakup emails to leads with no engagement in 14+ days',
      trigger: 'time',
      status: 'active',
      runs_today: 12,
      success_rate: 92,
      last_run: new Date(Date.now() - 2 * 60 * 60 * 1000),
      icon: Mail,
      category: 'engagement',
      actions: ['Check engagement', 'Generate breakup email', 'Send if approved']
    },
    {
      id: 'deal-health-alerts',
      name: 'Deal Health Alert System',
      description: 'Alert manager when deal health drops below 50',
      trigger: 'threshold',
      status: 'active',
      runs_today: 3,
      success_rate: 100,
      last_run: new Date(Date.now() - 4 * 60 * 60 * 1000),
      icon: AlertTriangle,
      category: 'intelligence',
      actions: ['Calculate health score', 'Check threshold', 'Send Slack alert', 'Generate intervention plan']
    },
    {
      id: 'contract-to-cash',
      name: 'Contract-to-Cash Acceleration',
      description: 'Auto-generate onboarding tasks and payment reminders when deal closes',
      trigger: 'event',
      status: 'active',
      runs_today: 2,
      success_rate: 95,
      last_run: new Date(Date.now() - 6 * 60 * 60 * 1000),
      icon: FileText,
      category: 'conversion',
      actions: ['Create onboarding plan', 'Send welcome email', 'Schedule kickoff', 'Send invoice']
    },
    {
      id: 'meeting-follow-up',
      name: 'Auto Meeting Follow-Up',
      description: 'Send personalized follow-up within 1 hour of meeting completion',
      trigger: 'event',
      status: 'active',
      runs_today: 8,
      success_rate: 88,
      last_run: new Date(Date.now() - 1 * 60 * 60 * 1000),
      icon: Calendar,
      category: 'engagement',
      actions: ['Extract meeting notes', 'Generate summary', 'Draft follow-up', 'Send email']
    },
    {
      id: 'upsell-detector',
      name: 'Upsell Opportunity Detector',
      description: 'Identify expansion opportunities based on usage and team growth',
      trigger: 'time',
      status: 'paused',
      runs_today: 0,
      success_rate: 85,
      last_run: new Date(Date.now() - 24 * 60 * 60 * 1000),
      icon: TrendingUp,
      category: 'retention',
      actions: ['Analyze usage data', 'Detect signals', 'Calculate ROI', 'Alert CSM']
    },
    {
      id: 'multi-threading',
      name: 'Multi-Threading Enforcer',
      description: 'Alert when deal has only 1 contact (single-threaded risk)',
      trigger: 'threshold',
      status: 'draft',
      runs_today: 0,
      success_rate: 0,
      last_run: new Date(Date.now() - 48 * 60 * 60 * 1000),
      icon: Users,
      category: 'intelligence',
      actions: ['Count contacts per deal', 'Check if single-threaded', 'Suggest additional stakeholders']
    }
  ];

  const toggleWorkflowStatus = (workflowId: string) => {
    console.log(`Toggling workflow ${workflowId}`);
    // In production: API call to update status
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: { variant: 'default', color: 'text-green-600', bg: 'bg-green-500/10' },
      paused: { variant: 'secondary', color: 'text-yellow-600', bg: 'bg-yellow-500/10' },
      draft: { variant: 'outline', color: 'text-gray-600', bg: 'bg-gray-500/10' }
    };
    const config = variants[status as keyof typeof variants];
    
    return (
      <Badge variant={config.variant as any} className={config.bg}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  const getTriggerIcon = (trigger: string) => {
    if (trigger === 'time') return <Clock className="w-4 h-4" />;
    if (trigger === 'event') return <Zap className="w-4 h-4" />;
    return <BarChart3 className="w-4 h-4" />;
  };

  const formatLastRun = (date: Date) => {
    const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
    if (hours === 0) return 'Just now';
    if (hours === 1) return '1 hour ago';
    if (hours < 24) return `${hours} hours ago`;
    return `${Math.floor(hours / 24)} days ago`;
  };

  const filteredWorkflows = selectedCategory === 'all' 
    ? workflows 
    : workflows.filter(w => w.category === selectedCategory);

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold mb-2">Workflow Automation Hub</h1>
        <p className="text-muted-foreground">
          AI-powered workflows that run automatically based on triggers
        </p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card p-4">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-2xl font-bold">{workflows.filter(w => w.status === 'active').length}</p>
              <p className="text-sm text-muted-foreground">Active Workflows</p>
            </div>
          </div>
        </Card>
        
        <Card className="glass-card p-4">
          <div className="flex items-center gap-3">
            <Play className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-2xl font-bold">{workflows.reduce((sum, w) => sum + w.runs_today, 0)}</p>
              <p className="text-sm text-muted-foreground">Runs Today</p>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-2xl font-bold">
                {Math.round(workflows.reduce((sum, w) => sum + w.success_rate, 0) / workflows.length)}%
              </p>
              <p className="text-sm text-muted-foreground">Avg Success Rate</p>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-orange-500" />
            <div>
              <p className="text-2xl font-bold">~4h</p>
              <p className="text-sm text-muted-foreground">Time Saved Today</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Category Filters */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList>
          <TabsTrigger value="all">All Workflows</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
          <TabsTrigger value="retention">Retention</TabsTrigger>
          <TabsTrigger value="intelligence">Intelligence</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedCategory} className="space-y-4 mt-6">
          {filteredWorkflows.map((workflow, index) => {
            const Icon = workflow.icon;
            
            return (
              <motion.div
                key={workflow.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="glass-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <div className={`p-3 rounded-lg ${
                        workflow.status === 'active' ? 'bg-blue-500/10' :
                        workflow.status === 'paused' ? 'bg-yellow-500/10' : 'bg-gray-500/10'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          workflow.status === 'active' ? 'text-blue-500' :
                          workflow.status === 'paused' ? 'text-yellow-500' : 'text-gray-500'
                        }`} />
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium">{workflow.name}</h3>
                          {getStatusBadge(workflow.status)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {workflow.description}
                        </p>

                        {/* Trigger & Stats */}
                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-1.5">
                            {getTriggerIcon(workflow.trigger)}
                            <span className="text-muted-foreground capitalize">{workflow.trigger}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Play className="w-4 h-4" />
                            <span className="text-muted-foreground">{workflow.runs_today} runs today</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-muted-foreground">{workflow.success_rate}% success</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span className="text-muted-foreground">{formatLastRun(workflow.last_run)}</span>
                          </div>
                        </div>

                        {/* Actions Flow */}
                        <div className="mt-4 flex items-center gap-2 flex-wrap">
                          {workflow.actions.map((action, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {action}
                              </Badge>
                              {i < workflow.actions.length - 1 && (
                                <span className="text-muted-foreground">→</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={workflow.status === 'active'}
                          onCheckedChange={() => toggleWorkflowStatus(workflow.id)}
                        />
                        <span className="text-sm text-muted-foreground">
                          {workflow.status === 'active' ? 'Active' : 'Paused'}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Performance Chart (if active) */}
                  {workflow.status === 'active' && workflow.runs_today > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span>Performance (Last 7 days)</span>
                        <span>{workflow.success_rate}% success rate</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${workflow.success_rate}%` }}
                        />
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}

          {/* Empty State */}
          {filteredWorkflows.length === 0 && (
            <div className="text-center py-12">
              <Zap className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
              <h3 className="font-medium mb-2">No workflows in this category</h3>
              <p className="text-sm text-muted-foreground">
                Create a new workflow to get started
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Create New Workflow Button */}
      <div className="flex justify-center pt-4">
        <Button size="lg">
          <Zap className="w-4 h-4 mr-2" />
          Create New Workflow
        </Button>
      </div>
    </div>
  );
}
