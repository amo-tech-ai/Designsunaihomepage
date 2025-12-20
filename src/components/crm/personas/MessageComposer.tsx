import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Send, 
  RefreshCw, 
  Copy, 
  Check,
  ThumbsUp,
  ThumbsDown,
  Target,
  Gauge
} from 'lucide-react';

interface MessageComposerProps {
  leadId: number;
  leadName: string;
  persona: {
    archetype: string;
    preferences: {
      prefers_bullets: boolean;
      prefers_data: boolean;
      optimal_email_length: string;
    };
  };
  context?: {
    lastInteraction?: string;
    purpose?: string;
    keyPoints?: string[];
  };
  onSend?: (message: { subject: string; body: string }) => void;
  onClose?: () => void;
}

export function MessageComposer({
  leadId,
  leadName,
  persona,
  context,
  onSend,
  onClose
}: MessageComposerProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [matchScore, setMatchScore] = useState(0);
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null);

  const generateMessage = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation based on persona
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate persona-matched message
    if (persona.archetype === 'analytical_driver') {
      setSubject('Q1 CRM ROI: 40% faster closes');
      setBody(`Hi ${leadName},

Following up on our discussion about improving your sales process.

Key metrics from similar implementations:
• 40% reduction in sales cycle time
• 60% improvement in forecast accuracy
• $2.4M additional pipeline visibility

Next step: 15-min ROI calculator demo

Available this week?

Best,
Michael`);
      setMatchScore(94);
    } else if (persona.archetype === 'friendly_enthusiast') {
      setSubject('Loved our conversation!');
      setBody(`Hi ${leadName}!

Really enjoyed chatting with you about your sales challenges - your energy is infectious! 🎉

I've been thinking about what you shared, and I'm excited to show you how we've helped similar teams transform their workflow. 

Quick story: One of our customers (similar size to your team) went from drowning in manual data entry to closing 3 extra deals per month. Game changer!

Would love to continue our conversation. How does next week look?

Cheers,
Michael`);
      setMatchScore(89);
    } else {
      // Default professional tone
      setSubject('Following up on our conversation');
      setBody(`Hi ${leadName},

Thank you for taking the time to discuss your CRM needs.

Based on our conversation, I believe our solution would be a strong fit for your team's requirements.

Would you be available for a brief follow-up call this week to discuss next steps?

Best regards,
Michael`);
      setMatchScore(76);
    }

    setIsGenerating(false);
  };

  const regenerateMessage = () => {
    generateMessage();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFeedback = (type: 'positive' | 'negative') => {
    setFeedback(type);
    // In production: Send feedback to improve AI prompts
    console.log(`User feedback on message generation: ${type}`);
  };

  const handleSend = () => {
    if (subject && body) {
      onSend?.({ subject, body });
    }
  };

  return (
    <Card className="glass-card p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">AI Message Composer</h3>
          <p className="text-sm text-muted-foreground">
            Personalized for {leadName}'s communication style
          </p>
        </div>
        {matchScore > 0 && (
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-blue-500" />
            <div className="text-right">
              <p className="text-sm font-medium">{matchScore}%</p>
              <p className="text-xs text-muted-foreground">Persona match</p>
            </div>
          </div>
        )}
      </div>

      {/* Generate Button or Message Editor */}
      {!subject && !body ? (
        <Button
          onClick={generateMessage}
          disabled={isGenerating}
          className="w-full h-12"
        >
          {isGenerating ? (
            <>
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Crafting personalized message...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Message
            </>
          )}
        </Button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Subject Line */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Subject Line
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Enter subject..."
              />
            </div>

            {/* Message Body */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Message Body
              </label>
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={10}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                placeholder="Enter message..."
              />
            </div>

            {/* Persona Match Indicators */}
            <div className="flex flex-wrap gap-2">
              {persona.preferences.prefers_bullets && body.includes('•') && (
                <Badge variant="secondary" className="text-xs">
                  <Check className="w-3 h-3 mr-1" />
                  Uses bullet points
                </Badge>
              )}
              {persona.preferences.prefers_data && /\d+%/.test(body) && (
                <Badge variant="secondary" className="text-xs">
                  <Check className="w-3 h-3 mr-1" />
                  Includes data/metrics
                </Badge>
              )}
              {persona.preferences.optimal_email_length === 'short' && body.split(' ').length < 100 && (
                <Badge variant="secondary" className="text-xs">
                  <Check className="w-3 h-3 mr-1" />
                  Concise length
                </Badge>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={regenerateMessage}
                  disabled={isGenerating}
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isGenerating ? 'animate-spin' : ''}`} />
                  Regenerate
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSend}
                  disabled={!subject || !body}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>

            {/* AI Feedback */}
            {!feedback && (
              <div className="flex items-center justify-center gap-4 pt-2 text-sm text-muted-foreground">
                <span>Was this message helpful?</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleFeedback('positive')}
                    className="p-2 rounded-lg hover:bg-green-500/10 transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4 hover:text-green-500" />
                  </button>
                  <button
                    onClick={() => handleFeedback('negative')}
                    className="p-2 rounded-lg hover:bg-red-500/10 transition-colors"
                  >
                    <ThumbsDown className="w-4 h-4 hover:text-red-500" />
                  </button>
                </div>
              </div>
            )}

            {feedback === 'positive' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center text-sm text-green-600"
              >
                ✓ Thanks! This helps improve our AI
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Tips */}
      {subject && body && (
        <div className="mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <div className="flex items-start gap-2">
            <Target className="w-4 h-4 text-blue-500 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-medium text-blue-600">Optimization tip:</p>
              <p className="text-muted-foreground">
                {persona.archetype === 'analytical_driver' && 
                  "Consider adding one more specific metric to increase credibility."}
                {persona.archetype === 'friendly_enthusiast' && 
                  "Perfect tone! Consider adding a personal anecdote if you have one."}
                {persona.archetype === 'skeptical_researcher' && 
                  "Consider adding a case study link or customer testimonial."}
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
