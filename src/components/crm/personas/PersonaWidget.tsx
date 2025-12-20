import { useState } from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Heart, 
  Shield, 
  Clock, 
  Users,
  Mail,
  Sparkles,
  TrendingUp
} from 'lucide-react';

// ... existing code ...

interface PersonaData {
  archetype: 'analytical_driver' | 'friendly_enthusiast' | 'skeptical_researcher' | 'busy_executive' | 'collaborative_team_player';
  confidence_score: number;
  preferences: {
    prefers_bullets: boolean;
    prefers_data: boolean;
    prefers_stories: boolean;
    optimal_email_length: 'short' | 'medium' | 'long';
    response_speed: 'fast' | 'medium' | 'slow';
    best_send_time: string;
  };
  communication_style: {
    tone: string;
    avoid: string[];
    include: string[];
  };
  last_analyzed: Date;
}

interface PersonaWidgetProps {
  leadId: number;
  leadName: string;
  onDraftMessage?: () => void;
}

const ARCHETYPE_CONFIG = {
  analytical_driver: {
    icon: BarChart3,
    color: 'blue',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-600',
    label: 'Analytical Driver',
    description: 'Data-driven, prefers bullets & ROI',
    emoji: '📊'
  },
  friendly_enthusiast: {
    icon: Heart,
    color: 'green',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-600',
    label: 'Friendly Enthusiast',
    description: 'Relationship-focused, warm tone',
    emoji: '🤝'
  },
  skeptical_researcher: {
    icon: Shield,
    color: 'purple',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-600',
    label: 'Skeptical Researcher',
    description: 'Evidence-based, needs proof points',
    emoji: '🔍'
  },
  busy_executive: {
    icon: Clock,
    color: 'orange',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    textColor: 'text-orange-600',
    label: 'Busy Executive',
    description: 'Time-sensitive, TL;DR style',
    emoji: '⚡'
  },
  collaborative_team_player: {
    icon: Users,
    color: 'pink',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    textColor: 'text-pink-600',
    label: 'Collaborative Team Player',
    description: 'Inclusive, team-oriented',
    emoji: '👥'
  }
};

export function PersonaWidget({ leadId, leadName, onDraftMessage }: PersonaWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Mock data - in production, fetch from API
  const persona: PersonaData = {
    archetype: 'analytical_driver',
    confidence_score: 0.94,
    preferences: {
      prefers_bullets: true,
      prefers_data: true,
      prefers_stories: false,
      optimal_email_length: 'short',
      response_speed: 'fast',
      best_send_time: '7-9am'
    },
    communication_style: {
      tone: 'professional, direct',
      avoid: ['fluff', 'long paragraphs', 'vague claims'],
      include: ['specific numbers', 'bullet points', 'clear CTAs']
    },
    last_analyzed: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
  };

  const config = ARCHETYPE_CONFIG[persona.archetype];
  const Icon = config.icon;
  const confidencePercent = Math.round(persona.confidence_score * 100);

  const handleDraftMessage = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsGenerating(false);
    onDraftMessage?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className={`glass-card p-4 border ${config.borderColor} ${config.bgColor}`}>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${config.bgColor}`}>
              <Icon className={`w-5 h-5 ${config.textColor}`} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-sm">{config.label}</h3>
              <p className="text-xs text-muted-foreground">{config.description}</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {confidencePercent}% match
          </Badge>
        </div>

        {/* Quick Tips */}
        <div className="space-y-2 mb-4">
          <h4 className="text-xs font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Communication Tips:
          </h4>
          <ul className="text-xs space-y-1 text-muted-foreground">
            {persona.preferences.prefers_bullets && (
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Use bullet points</span>
              </li>
            )}
            {persona.preferences.prefers_data && (
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Include specific numbers & ROI</span>
              </li>
            )}
            {persona.preferences.response_speed === 'fast' && (
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Keep emails short (&lt;100 words)</span>
              </li>
            )}
            <li className="flex items-start gap-2">
              <Mail className="w-3 h-3 mt-0.5" />
              <span>Best send time: {persona.preferences.best_send_time}</span>
            </li>
          </ul>
        </div>

        {/* Expandable Details */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3 mb-4 pb-4 border-b border-white/10"
          >
            <div>
              <p className="text-xs font-medium mb-1">Tone:</p>
              <p className="text-xs text-muted-foreground">{persona.communication_style.tone}</p>
            </div>
            
            <div>
              <p className="text-xs font-medium mb-1">Avoid:</p>
              <div className="flex flex-wrap gap-1">
                {persona.communication_style.avoid.map((item, i) => (
                  <Badge key={i} variant="destructive" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium mb-1">Include:</p>
              <div className="flex flex-wrap gap-1">
                {persona.communication_style.include.map((item, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                Last analyzed: {persona.last_analyzed.toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            onClick={handleDraftMessage}
            disabled={isGenerating}
            className="flex-1 h-9 text-xs"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-3 h-3 mr-1 animate-pulse" />
                Generating...
              </>
            ) : (
              <>
                <Mail className="w-3 h-3 mr-1" />
                Draft Message in Their Style
              </>
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-9 px-3"
          >
            {isExpanded ? 'Less' : 'More'}
          </Button>
        </div>

        {/* Performance Indicator */}
        <div className="mt-3 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Predicted response rate:</span>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span className="font-medium text-green-600">78%</span>
              <span className="text-muted-foreground">(+23% vs generic)</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
