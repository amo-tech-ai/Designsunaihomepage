import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Heart,
  AlertTriangle,
  XCircle,
  TrendingUp,
  TrendingDown,
  MoreVertical,
  Eye,
  Zap,
  Calendar,
  DollarSign,
  Clock
} from 'lucide-react';
import { DealHealthModal } from './DealHealthModal';

// ... existing code ...

interface HealthStats {
  green_count: number;
  yellow_count: number;
  red_count: number;
  green_percentage: number;
  yellow_percentage: number;
  red_percentage: number;
  total_value: number;
  at_risk_value: number;
  trend: {
    green: number;
    yellow: number;
    red: number;
  };
}

interface DealHealthItem {
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
}

export function DealHealthDashboard() {
  const [selectedDeal, setSelectedDeal] = useState<DealHealthItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'green' | 'yellow' | 'red'>('all');
  const [sortBy, setSortBy] = useState<'score' | 'value' | 'date'>('score');

  // Mock data - in production, fetch from API
  const healthStats: HealthStats = {
    green_count: 12,
    yellow_count: 8,
    red_count: 4,
    green_percentage: 50,
    yellow_percentage: 33,
    red_percentage: 17,
    total_value: 2400000,
    at_risk_value: 680000,
    trend: {
      green: 3,
      yellow: -2,
      red: 1
    }
  };

  const deals: DealHealthItem[] = [
    {
      id: 1,
      company: 'TechCorp Inc',
      contact_name: 'Sarah Chen',
      health_category: 'green',
      score: 92,
      last_contact_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      value: 120000,
      stage: 'Negotiation',
      key_risks: [],
      positive_signals: ['Budget confirmed', 'Decision maker engaged', 'Next meeting scheduled']
    },
    {
      id: 2,
      company: 'FinanceFlow',
      contact_name: 'Michael Brown',
      health_category: 'yellow',
      score: 58,
      last_contact_date: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
      value: 85000,
      stage: 'Proposal',
      key_risks: ['No contact in 12 days', 'Competitor mentioned'],
      positive_signals: ['Demo completed', 'Proposal sent']
    },
    {
      id: 3,
      company: 'StartupXYZ',
      contact_name: 'Alex Johnson',
      health_category: 'red',
      score: 34,
      last_contact_date: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
      value: 45000,
      stage: 'Discovery',
      key_risks: ['No contact in 28 days', 'Single threaded', 'Budget concerns'],
      positive_signals: []
    },
    {
      id: 4,
      company: 'Enterprise Solutions',
      contact_name: 'Emily Davis',
      health_category: 'green',
      score: 88,
      last_contact_date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      value: 250000,
      stage: 'Negotiation',
      key_risks: [],
      positive_signals: ['Multi-threaded', 'Executive sponsor', 'Timeline confirmed']
    }
  ];

  const filteredDeals = useMemo(() => {
    let filtered = deals;
    
    if (filterCategory !== 'all') {
      filtered = filtered.filter(d => d.health_category === filterCategory);
    }

    return filtered.sort((a, b) => {
      if (sortBy === 'score') return b.score - a.score;
      if (sortBy === 'value') return b.value - a.value;
      return b.last_contact_date.getTime() - a.last_contact_date.getTime();
    });
  }, [deals, filterCategory, sortBy]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (date: Date) => {
    const days = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return '1 day ago';
    return `${days} days ago`;
  };

  const getHealthIcon = (category: 'green' | 'yellow' | 'red') => {
    if (category === 'green') return <Heart className="w-4 h-4 text-green-500" />;
    if (category === 'yellow') return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    return <XCircle className="w-4 h-4 text-red-500" />;
  };

  const getHealthBadge = (category: 'green' | 'yellow' | 'red', score: number) => {
    const variants = {
      green: 'default',
      yellow: 'secondary',
      red: 'destructive'
    };
    
    return (
      <div className="flex items-center gap-2">
        {getHealthIcon(category)}
        <Badge variant={variants[category] as any}>
          {score}/100
        </Badge>
      </div>
    );
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold mb-2">Deal Health Oracle</h1>
        <p className="text-muted-foreground">
          AI-powered health monitoring for your entire pipeline
        </p>
      </div>

      {/* Traffic Light Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glass-card p-6 border-green-500/30 bg-green-500/5">
            <div className="flex items-center justify-between mb-4">
              <Heart className="w-8 h-8 text-green-500" />
              <div className={`flex items-center gap-1 text-sm ${
                healthStats.trend.green > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {healthStats.trend.green > 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{healthStats.trend.green > 0 ? '+' : ''}{healthStats.trend.green} this week</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{healthStats.green_count}</h3>
            <p className="text-sm text-muted-foreground">Healthy Deals</p>
            <div className="mt-2">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-500"
                  style={{ width: `${healthStats.green_percentage}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {healthStats.green_percentage}% of pipeline
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass-card p-6 border-yellow-500/30 bg-yellow-500/5">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
              <div className={`flex items-center gap-1 text-sm ${
                healthStats.trend.yellow > 0 ? 'text-red-600' : 'text-green-600'
              }`}>
                {healthStats.trend.yellow > 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{healthStats.trend.yellow > 0 ? '+' : ''}{healthStats.trend.yellow} this week</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{healthStats.yellow_count}</h3>
            <p className="text-sm text-muted-foreground">At Risk</p>
            <div className="mt-2">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-500 rounded-full transition-all duration-500"
                  style={{ width: `${healthStats.yellow_percentage}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {healthStats.yellow_percentage}% of pipeline
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-card p-6 border-red-500/30 bg-red-500/5">
            <div className="flex items-center justify-between mb-4">
              <XCircle className="w-8 h-8 text-red-500" />
              <div className={`flex items-center gap-1 text-sm ${
                healthStats.trend.red > 0 ? 'text-red-600' : 'text-green-600'
              }`}>
                {healthStats.trend.red > 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{healthStats.trend.red > 0 ? '+' : ''}{healthStats.trend.red} this week</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{healthStats.red_count}</h3>
            <p className="text-sm text-muted-foreground">Critical</p>
            <div className="mt-2">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-500 rounded-full transition-all duration-500"
                  style={{ width: `${healthStats.red_percentage}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {healthStats.red_percentage}% of pipeline
              </p>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Pipeline Value Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="glass-card p-4">
          <div className="flex items-center gap-3">
            <DollarSign className="w-10 h-10 text-blue-500" />
            <div>
              <p className="text-2xl font-bold">{formatCurrency(healthStats.total_value)}</p>
              <p className="text-sm text-muted-foreground">Total Pipeline Value</p>
            </div>
          </div>
        </Card>
        <Card className="glass-card p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-10 h-10 text-orange-500" />
            <div>
              <p className="text-2xl font-bold">{formatCurrency(healthStats.at_risk_value)}</p>
              <p className="text-sm text-muted-foreground">At Risk Value (Yellow + Red)</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters & Controls */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant={filterCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterCategory('all')}
          >
            All Deals
          </Button>
          <Button
            variant={filterCategory === 'green' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterCategory('green')}
            className="border-green-500/30"
          >
            <Heart className="w-4 h-4 mr-1" />
            Healthy
          </Button>
          <Button
            variant={filterCategory === 'yellow' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterCategory('yellow')}
            className="border-yellow-500/30"
          >
            <AlertTriangle className="w-4 h-4 mr-1" />
            At Risk
          </Button>
          <Button
            variant={filterCategory === 'red' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterCategory('red')}
            className="border-red-500/30"
          >
            <XCircle className="w-4 h-4 mr-1" />
            Critical
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Sort: {sortBy === 'score' ? 'Health Score' : sortBy === 'value' ? 'Deal Value' : 'Last Contact'}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setSortBy('score')}>
              Health Score
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy('value')}>
              Deal Value
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy('date')}>
              Last Contact
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Deals Table */}
      <Card className="glass-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Health</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Last Contact</TableHead>
              <TableHead>Stage</TableHead>
              <TableHead className="text-right">Value</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDeals.map((deal, index) => (
              <motion.tr
                key={deal.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group hover:bg-white/5 cursor-pointer transition-colors"
                onClick={() => setSelectedDeal(deal)}
              >
                <TableCell>
                  <div>
                    <p className="font-medium">{deal.company}</p>
                    <p className="text-sm text-muted-foreground">{deal.contact_name}</p>
                  </div>
                </TableCell>
                <TableCell>
                  {getHealthIcon(deal.health_category)}
                </TableCell>
                <TableCell>
                  {getHealthBadge(deal.health_category, deal.score)}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {formatDate(deal.last_contact_date)}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{deal.stage}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatCurrency(deal.value)}
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDeal(deal);
                    }}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Deal Health Modal */}
      {selectedDeal && (
        <DealHealthModal
          deal={selectedDeal}
          onClose={() => setSelectedDeal(null)}
        />
      )}
    </div>
  );
}
