'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ChevronDown, X, Code, LayoutDashboard, Smartphone, 
  ShoppingCart, MessageSquare, Users, FileText, Layers, Database, 
  Building, Store, Heart, GraduationCap, Briefcase, Landmark, 
  Zap, DollarSign, Rocket, Bot, Gem, BarChart3, CheckCircle2,
  Clock, Link as LinkIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Types
type AppType = 'web_app' | 'ai_app' | 'chatbot' | 'wizard' | 'dashboard' | 'workflows' | 'automations' | 'ai_agents' | 'mobile_first';
type Industry = 'real_estate' | 'travel' | 'fashion' | 'photo_video' | 'media' | 'ecommerce' | 'startups';
type Goal = 'automate_ops' | 'increase_revenue' | 'launch_faster' | 'reduce_manual' | 'improve_cx' | 'better_insights';
type Timeline = '4_weeks' | '8_weeks' | '12_weeks' | 'flexible';
type TeamSize = 'solo' | '2_to_5' | '6_to_10' | '10_plus';

interface FormData {
  appTypes: AppType[];
  industry: Industry | null;
  description: string;
  goal: Goal | null;
  successOutcome: string;
  timeline: Timeline | null;
  teamSize: TeamSize | null;
  integrations: string[];
}

const appTypeOptions = [
  { id: 'web_app', icon: '🧩', label: 'Web App' },
  { id: 'ai_app', icon: '🤖', label: 'AI App' },
  { id: 'chatbot', icon: '💬', label: 'Chatbot' },
  { id: 'wizard', icon: '🧭', label: 'Wizard' },
  { id: 'dashboard', icon: '📊', label: 'Dashboard' },
  { id: 'workflows', icon: '🔁', label: 'Workflows' },
  { id: 'automations', icon: '⚡', label: 'Automations' },
  { id: 'ai_agents', icon: '🧠', label: 'AI Agents' },
  { id: 'mobile_first', icon: '📱', label: 'Mobile-first' },
];

const industryOptions = [
  { id: 'real_estate', icon: '🏠', label: 'Real Estate' },
  { id: 'travel', icon: '✈️', label: 'Travel' },
  { id: 'fashion', icon: '👗', label: 'Fashion' },
  { id: 'photo_video', icon: '📸', label: 'Photo/Video' },
  { id: 'media', icon: '📰', label: 'Media' },
  { id: 'ecommerce', icon: '🛒', label: 'E-commerce' },
  { id: 'startups', icon: '🚀', label: 'Startups' },
];

const goalOptions = [
  { id: 'automate_ops', icon: Zap, label: 'Automate Operations' },
  { id: 'increase_revenue', icon: DollarSign, label: 'Increase Revenue' },
  { id: 'launch_faster', icon: Rocket, label: 'Launch Faster' },
  { id: 'reduce_manual', icon: Bot, label: 'Reduce Manual Work' },
  { id: 'improve_cx', icon: Gem, label: 'Improve CX' },
  { id: 'better_insights', icon: BarChart3, label: 'Better Insights' },
];

const integrationOptions = [
  'Stripe', 'Shopify', 'Salesforce', 'HubSpot', 'WhatsApp', 
  'Supabase', 'Slack', 'Custom API', 'None'
];

export function WizardStep2() {
  const [formData, setFormData] = useState<FormData>({
    appTypes: ['web_app', 'dashboard', 'automations'],
    industry: 'real_estate',
    description: 'We need a CRM that automates lead follow-up with WhatsApp and tracks conversion rates in real-time.',
    goal: 'automate_ops',
    successOutcome: 'Reduce manual follow-up time by 40% and increase response speed by 20%',
    timeline: '8_weeks',
    teamSize: '2_to_5',
    integrations: ['WhatsApp', 'Stripe', 'Supabase']
  });

  const [showIntegrations, setShowIntegrations] = useState(false);
  const [complexity, setComplexity] = useState<'low' | 'medium' | 'high'>('medium');
  const [feasibility, setFeasibility] = useState<'achievable' | 'aggressive'>('achievable');

  // Calculate complexity based on selections
  useEffect(() => {
    const appTypeCount = formData.appTypes.length;
    const integrationCount = formData.integrations.length;
    const timelineWeeks = formData.timeline === '4_weeks' ? 4 : 
                          formData.timeline === '8_weeks' ? 8 :
                          formData.timeline === '12_weeks' ? 12 : 12;
    const isSolo = formData.teamSize === 'solo';

    // Complexity calculation
    if (appTypeCount <= 2 && timelineWeeks >= 8 && !isSolo) {
      setComplexity('low');
      setFeasibility('achievable');
    } else if (appTypeCount >= 5 || integrationCount >= 5 || timelineWeeks < 4 || isSolo) {
      setComplexity('high');
      setFeasibility('aggressive');
    } else {
      setComplexity('medium');
      if (timelineWeeks <= 4) {
        setFeasibility('aggressive');
      } else {
        setFeasibility('achievable');
      }
    }
  }, [formData.appTypes, formData.integrations, formData.timeline, formData.teamSize]);

  const toggleAppType = (type: AppType) => {
    setFormData(prev => ({
      ...prev,
      appTypes: prev.appTypes.includes(type)
        ? prev.appTypes.filter(t => t !== type)
        : [...prev.appTypes, type]
    }));
  };

  const toggleIntegration = (integration: string) => {
    setFormData(prev => ({
      ...prev,
      integrations: prev.integrations.includes(integration)
        ? prev.integrations.filter(i => i !== integration)
        : [...prev.integrations, integration]
    }));
  };

  const isValid = formData.appTypes.length > 0 && 
                  formData.industry !== null && 
                  formData.goal !== null && 
                  formData.timeline !== null;

  const getTeamEstimate = () => {
    if (complexity === 'low') return '1-2 Engineers';
    if (complexity === 'medium') return '2 Engineers';
    return '3-4 Engineers';
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Section */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-slate-600">Step 2 of 4</span>
            <span className="text-xs text-slate-400">~3 minutes to complete</span>
          </div>
          <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '25%' }}
              animate={{ width: '50%' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-[660px_1fr] gap-[60px]">
          {/* Left Column - Form */}
          <div>
            {/* BLOCK A: What are you building? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                What are you building?
              </h2>

              {/* Section 1: Type of App */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Type of App
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {appTypeOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => toggleAppType(option.id as AppType)}
                      className={`
                        relative h-[100px] rounded-lg border-2 transition-all
                        flex flex-col items-center justify-center gap-2
                        ${formData.appTypes.includes(option.id as AppType)
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-slate-200 hover:border-slate-300'
                        }
                      `}
                    >
                      <span className="text-[40px]">{option.icon}</span>
                      <span className="text-sm text-slate-700">{option.label}</span>
                      {formData.appTypes.includes(option.id as AppType) && (
                        <CheckCircle2 className="absolute top-2 right-2 w-5 h-5 text-orange-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 2: Industry */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Industry
                </label>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {industryOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFormData(prev => ({ ...prev, industry: option.id as Industry }))}
                      className={`
                        flex-shrink-0 w-[100px] h-[90px] rounded-lg border-2 transition-all
                        flex flex-col items-center justify-center gap-2
                        ${formData.industry === option.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-slate-200 hover:border-slate-300'
                        }
                      `}
                    >
                      <span className="text-[32px]">{option.icon}</span>
                      <span className="text-xs text-slate-700">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 3: Project Description */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Project Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Example: A real estate CRM that automates lead follow-up with WhatsApp..."
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 resize-none"
                />
                <div className="text-xs text-slate-400 text-right mt-1">
                  {formData.description.length}/500
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-slate-200 my-10" />

            {/* BLOCK B: Goals & Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Goals & Outcomes
              </h2>

              {/* Section 4: Primary Goal */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Primary Goal
                </label>
                <div className="flex flex-wrap gap-3">
                  {goalOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setFormData(prev => ({ ...prev, goal: option.id as Goal }))}
                        className={`
                          flex items-center gap-2 px-4 h-10 rounded-full border-2 transition-all
                          ${formData.goal === option.id
                            ? 'bg-orange-500 border-orange-500 text-white'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300'
                          }
                        `}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Section 5: Success Outcome */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Success Outcome (Optional)
                </label>
                <input
                  type="text"
                  value={formData.successOutcome}
                  onChange={(e) => setFormData(prev => ({ ...prev, successOutcome: e.target.value }))}
                  placeholder="Example: Reduce manual follow-ups by 40%"
                  maxLength={120}
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
                <div className="mt-4 p-4 border border-slate-200 rounded-lg bg-slate-50">
                  <p className="text-xs font-bold text-slate-600 mb-2">Example outcomes:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 20% reduction in support tickets</li>
                    <li>• Launch MVP in 6 weeks vs 6 months</li>
                    <li>• Automate 80% of data entry tasks</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-slate-200 my-10" />

            {/* BLOCK C: Scope & Constraints */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Scope & Constraints
              </h2>

              {/* Section 6: Timeline */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Timeline
                </label>
                <div className="flex gap-3 items-center">
                  {(['4_weeks', '8_weeks', '12_weeks', 'flexible'] as Timeline[]).map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData(prev => ({ ...prev, timeline: option }))}
                      className={`
                        w-[120px] h-12 rounded-lg border-2 transition-all text-sm
                        ${formData.timeline === option
                          ? 'bg-slate-900 border-slate-900 text-white'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                        }
                      `}
                    >
                      {option === '4_weeks' ? '4 weeks' :
                       option === '8_weeks' ? '8 weeks' :
                       option === '12_weeks' ? '12 weeks' : 'Flexible'}
                    </button>
                  ))}
                  <button className="text-sm text-orange-500 hover:text-orange-600">
                    + Custom date
                  </button>
                </div>
                {formData.timeline && (
                  <div className="mt-3">
                    <span className={`
                      inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs
                      ${feasibility === 'achievable'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-orange-100 text-orange-700'
                      }
                    `}>
                      {feasibility === 'achievable' ? '✓ Achievable' : '⚠ Aggressive'}
                    </span>
                  </div>
                )}
              </div>

              {/* Section 7: Team Size */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Team Size
                </label>
                <div className="flex gap-6">
                  {(['solo', '2_to_5', '6_to_10', '10_plus'] as TeamSize[]).map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="teamSize"
                        checked={formData.teamSize === option}
                        onChange={() => setFormData(prev => ({ ...prev, teamSize: option }))}
                        className="w-5 h-5 text-orange-500 border-slate-300 focus:ring-orange-500"
                      />
                      <span className="text-sm text-slate-700">
                        {option === 'solo' ? 'Solo' :
                         option === '2_to_5' ? '2-5' :
                         option === '6_to_10' ? '6-10' : '10+'}
                      </span>
                    </label>
                  ))}
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  Helps us estimate integration complexity
                </p>
              </div>

              {/* Section 8: Integrations */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Existing Integrations
                </label>
                {formData.integrations.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.integrations.map((integration) => (
                      <span
                        key={integration}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                      >
                        {integration}
                        <button
                          onClick={() => toggleIntegration(integration)}
                          className="hover:text-slate-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                <div className="relative">
                  <button
                    onClick={() => setShowIntegrations(!showIntegrations)}
                    className="w-full h-12 px-4 rounded-lg border border-slate-200 text-slate-700 hover:border-slate-300 flex items-center justify-between"
                  >
                    <span className="text-sm">Select tools...</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${showIntegrations ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {showIntegrations && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-10 w-full mt-2 bg-white border border-slate-200 rounded-lg shadow-lg max-h-[200px] overflow-y-auto"
                      >
                        {integrationOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() => toggleIntegration(option)}
                            className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                          >
                            {option}
                            {formData.integrations.includes(option) && (
                              <CheckCircle2 className="w-4 h-4 text-orange-500" />
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Blueprint Preview (Sticky) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="sticky top-8 bg-white border border-slate-200 rounded-lg p-8">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Blueprint Preview
              </h3>
              <div className="border-t border-slate-200 pt-6 space-y-6">
                {/* Section 1: Type of App */}
                <AnimatePresence>
                  {formData.appTypes.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Type of App
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {formData.appTypes.map((type) => {
                          const option = appTypeOptions.find(o => o.id === type);
                          return (
                            <span key={type} className="text-sm text-slate-700">
                              {option?.icon} {option?.label}
                            </span>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Section 2: Industry */}
                <AnimatePresence>
                  {formData.industry && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Industry
                      </label>
                      <div className="text-sm text-slate-700">
                        {industryOptions.find(o => o.id === formData.industry)?.icon}{' '}
                        {industryOptions.find(o => o.id === formData.industry)?.label}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Section 3: Goal + Success */}
                <AnimatePresence>
                  {formData.goal && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Primary Goal
                      </label>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                        {goalOptions.find(o => o.id === formData.goal)?.label}
                      </div>
                      {formData.successOutcome && (
                        <p className="text-sm text-slate-600 italic mt-2">
                          "{formData.successOutcome}"
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Section 4: Scope & Constraints */}
                <AnimatePresence>
                  {formData.timeline && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Scope & Constraints
                      </label>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <Clock className="w-4 h-4" />
                        {formData.timeline === '4_weeks' ? '4 weeks' :
                         formData.timeline === '8_weeks' ? '8 weeks' :
                         formData.timeline === '12_weeks' ? '12 weeks' : 'Flexible'}
                        <span className="text-slate-400">•</span>
                        <Users className="w-4 h-4" />
                        {formData.teamSize === 'solo' ? 'Solo' :
                         formData.teamSize === '2_to_5' ? '2-5' :
                         formData.teamSize === '6_to_10' ? '6-10' : '10+'} people
                        <span className="text-slate-400">•</span>
                        <LinkIcon className="w-4 h-4" />
                        {formData.integrations.length} integrations
                      </div>
                      {formData.integrations.length > 0 && (
                        <div className="mt-2 text-xs text-slate-500">
                          {formData.integrations.join(', ')}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer */}
                <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Est. Complexity:{' '}
                    <span className={`
                      font-bold
                      ${complexity === 'low' ? 'text-emerald-600' :
                        complexity === 'medium' ? 'text-orange-600' : 'text-red-600'}
                    `}>
                      {complexity.charAt(0).toUpperCase() + complexity.slice(1)}
                    </span>
                  </span>
                  <span className="text-xs text-slate-500">
                    Team: <span className="font-bold text-slate-700">{getTeamEstimate()}</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 z-50">
        <div className="max-w-[1200px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-3 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={() => navigate('/wizard/step3')}
              disabled={!isValid}
              className={`
                px-8 py-4 rounded-lg transition-all duration-200
                flex items-center gap-2
                ${isValid
                  ? 'bg-slate-900 text-white hover:scale-[1.02] hover:shadow-lg cursor-pointer'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }
              `}
            >
              <span>Continue</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-24" />
    </div>
  );
}