import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Heart,
  AlertTriangle,
  XCircle,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  Circle,
  Clock,
  DollarSign,
  Users,
  Target,
  Zap,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

interface DealHealthModalProps {
  deal: {
    id: number;
    company: string;
    contact_name: string;
    health_category: 'green' | 'yellow' | 'red';
    score: number;
    last_contact_date: Date;
    value: number;
    stage: string;
    key_risks: string[];
    positive_signals: string[];
  };
  onClose: () => void;
}

interface HealthSignal {
  category: 'engagement' | 'momentum' | 'stakeholders' | 'competitive' | 'risk';
  points: number;
  reason: string;
  positive: boolean;
}

interface ActionItem {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high';
  estimated_minutes: number;
  reasoning: string;
}

export function DealHealthModal({ deal, onClose }: DealHealthModalProps) {
  const [activeTab, setActiveTab] = useState('signals');
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);

  // Mock detailed health signals
  const signals: HealthSignal[] = [
    { category: 'engagement', points: 10, reason: 'Recent contact (2 days ago)', positive: true },
    { category: 'momentum', points: 10, reason: 'Budget confirmed', positive: true },
    { category: 'momentum', points: 5, reason: 'Next meeting scheduled', positive: true },
    { category: 'stakeholders', points: 10, reason: 'Multi-threaded (3+ contacts)', positive: true },
    { category: 'competitive', points: -10, reason: 'Evaluating Salesforce', positive: false },
  ];

  // Mock intervention actions (AI-generated)
  const [interventionActions, setInterventionActions] = useState<ActionItem[]>([]);

  const generateInterventionPlan = async () => {
    setIsGeneratingPlan(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate recovery actions based on deal health
    const actions: ActionItem[] = deal.health_category === 'red' ? [
      {
        id: 1,
        title: 'Send re-engagement email with value prop refresh',
        priority: 'high',
        estimated_minutes: 15,
        reasoning: 'No contact in 28 days - critical to re-establish connection'
      },
      {
        id: 2,
        title: 'Schedule executive alignment call',
        priority: 'high',
        estimated_minutes: 30,
        reasoning: 'Single threaded - need to expand stakeholder network'
      },
      {
        id: 3,
        title: 'Send Salesforce comparison battle card',
        priority: 'medium',
        estimated_minutes: 10,
        reasoning: 'Competitor detected - differentiate before losing deal'
      }
    ] : [
      {
        id: 1,
        title: 'Send follow-up on proposal timeline',
        priority: 'medium',
        estimated_minutes: 10,
        reasoning: '12 days since last contact - maintain momentum'
      },
      {
        id: 2,
        title: 'Share customer success story (similar industry)',
        priority: 'medium',
        estimated_minutes: 15,
        reasoning: 'Counter competitive concerns with proof points'
      }
    ];

    setInterventionActions(actions);
    setIsGeneratingPlan(false);
  };

  const getHealthIcon = (category: 'green' | 'yellow' | 'red') => {
    if (category === 'green') return <Heart className="w-6 h-6 text-green-500" />;
    if (category === 'yellow') return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
    return <XCircle className="w-6 h-6 text-red-500" />;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'engagement': return <Clock className="w-4 h-4" />;
      case 'momentum': return <TrendingUp className="w-4 h-4" />;
      case 'stakeholders': return <Users className="w-4 h-4" />;
      case 'competitive': return <Target className="w-4 h-4" />;
      case 'risk': return <AlertTriangle className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  const getPriorityBadge = (priority: 'low' | 'medium' | 'high') => {
    const variants = {
      low: 'secondary',
      medium: 'default',
      high: 'destructive'
    };
    return <Badge variant={variants[priority] as any}>{priority.toUpperCase()}</Badge>;
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            {getHealthIcon(deal.health_category)}
            <div>
              <DialogTitle>{deal.company}</DialogTitle>
              <DialogDescription>
                {deal.contact_name} • {deal.stage}
              </DialogDescription>
            </div>
            <Badge variant={
              deal.health_category === 'green' ? 'default' :
              deal.health_category === 'yellow' ? 'secondary' : 'destructive'
            } className="ml-auto">
              {deal.score}/100
            </Badge>
          </div>
        </DialogHeader>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 my-4">
          <Card className="glass-card p-3">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-xs text-muted-foreground">Value</p>
                <p className="font-semibold">${(deal.value / 1000).toFixed(0)}k</p>
              </div>
            </div>
          </Card>
          <Card className="glass-card p-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-xs text-muted-foreground">Last Contact</p>
                <p className="font-semibold">
                  {Math.floor((Date.now() - deal.last_contact_date.getTime()) / (1000 * 60 * 60 * 24))}d ago
                </p>
              </div>
            </div>
          </Card>
          <Card className="glass-card p-3">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-xs text-muted-foreground">Contacts</p>
                <p className="font-semibold">3</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="signals">Health Signals</TabsTrigger>
            <TabsTrigger value="intervention">Intervention Plan</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Health Signals Tab */}
          <TabsContent value="signals" className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Score Breakdown</h4>
              
              {signals.map((signal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className={`glass-card p-3 ${
                    signal.positive ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        signal.positive ? 'bg-green-500/10' : 'bg-red-500/10'
                      }`}>
                        {getCategoryIcon(signal.category)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium capitalize">{signal.category}</p>
                        <p className="text-xs text-muted-foreground">{signal.reason}</p>
                      </div>
                      <Badge variant={signal.positive ? 'default' : 'destructive'}>
                        {signal.points > 0 ? '+' : ''}{signal.points}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Positive Signals */}
            {deal.positive_signals.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2">Positive Momentum</h4>
                <div className="space-y-1">
                  {deal.positive_signals.map((signal, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Risks */}
            {deal.key_risks.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2">Key Risks</h4>
                <div className="space-y-1">
                  {deal.key_risks.map((risk, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span>{risk}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Intervention Plan Tab */}
          <TabsContent value="intervention" className="space-y-4">
            {interventionActions.length === 0 ? (
              <div className="text-center py-8">
                <Zap className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                <h4 className="font-medium mb-2">AI Intervention Planner</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Generate a personalized recovery plan based on this deal's health signals
                </p>
                <Button
                  onClick={generateInterventionPlan}
                  disabled={isGeneratingPlan}
                >
                  {isGeneratingPlan ? (
                    <>
                      <Zap className="w-4 h-4 mr-2 animate-pulse" />
                      Analyzing deal...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Generate Intervention Plan
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Recommended Actions</h4>
                  <Badge variant="secondary">
                    {interventionActions.length} tasks • {interventionActions.reduce((sum, a) => sum + a.estimated_minutes, 0)} min
                  </Badge>
                </div>

                {interventionActions.map((action, index) => (
                  <motion.div
                    key={action.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="glass-card p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h5 className="font-medium text-sm">{action.title}</h5>
                            {getPriorityBadge(action.priority)}
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">{action.reasoning}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{action.estimated_minutes} min</span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Create Task
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}

                <Button
                  onClick={() => {
                    console.log('Creating all intervention tasks...');
                  }}
                  className="w-full"
                >
                  Create All Tasks
                </Button>
              </div>
            )}
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Email sent: Follow-up on proposal</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Phone className="w-5 h-5 text-green-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Call: Demo walkthrough (45 min)</p>
                  <p className="text-xs text-muted-foreground">1 week ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                <Calendar className="w-5 h-5 text-purple-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Meeting: Discovery call completed</p>
                  <p className="text-xs text-muted-foreground">2 weeks ago</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer Actions */}
        <div className="flex gap-2 pt-4 border-t border-white/10">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Close
          </Button>
          <Button onClick={() => console.log('View full deal profile')} className="flex-1">
            View Full Profile
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
