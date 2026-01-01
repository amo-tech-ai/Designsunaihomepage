'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Types
type UrgencyLevel = 'low' | 'medium' | 'high' | 'critical';

interface FormData {
  budget: number;
  budgetFlexible: boolean;
  urgency: UrgencyLevel | null;
  constraints: string;
}

interface DeliverySnapshot {
  complexity: 'low' | 'medium' | 'high';
  deliveryModel: 'full_scope' | 'phased_mvp';
  phasesRecommended: number;
  riskLevel: 'low' | 'medium' | 'high';
  riskMessage: string;
  budgetFeasibility: 'aligned' | 'tight' | 'insufficient';
}

const urgencyOptions = [
  { 
    id: 'low' as UrgencyLevel, 
    icon: '🟢', 
    label: 'Low', 
    subtext: '6+ months',
    color: 'green'
  },
  { 
    id: 'medium' as UrgencyLevel, 
    icon: '🟡', 
    label: 'Medium', 
    subtext: '3-6 months',
    color: 'yellow'
  },
  { 
    id: 'high' as UrgencyLevel, 
    icon: '🟠', 
    label: 'High', 
    subtext: '1-3 months',
    color: 'orange'
  },
  { 
    id: 'critical' as UrgencyLevel, 
    icon: '🔴', 
    label: 'Critical', 
    subtext: '<1 month',
    color: 'red'
  },
];

// Sample data from previous steps (Step 2)
const previousData = {
  appTypes: ['web_app', 'dashboard', 'automations'],
  industry: 'Real Estate',
  goal: 'Automate Operations',
  successOutcome: 'Reduce manual follow-up time by 40% and increase response speed by 20%',
  timeline: '8 weeks',
  teamSize: '2-5',
  integrations: ['WhatsApp', 'Stripe', 'Supabase'],
  complexity: 'medium' as const,
  teamEstimate: '2 Engineers'
};

export default function WizardStep3() {
  const [formData, setFormData] = useState<FormData>({
    budget: 45000, // Sample data: $45,000
    budgetFlexible: false,
    urgency: 'high', // Sample data: High
    constraints: ''
  });

  const [deliverySnapshot, setDeliverySnapshot] = useState<DeliverySnapshot>({
    complexity: 'medium',
    deliveryModel: 'phased_mvp',
    phasesRecommended: 2,
    riskLevel: 'medium',
    riskMessage: 'Timeline is aggressive for selected scope',
    budgetFeasibility: 'aligned'
  });

  // Budget feasibility calculation
  const calculateBudgetFeasibility = (budget: number, urgency: UrgencyLevel | null): void => {
    // Base rate calculation
    const complexityBaseRate = {
      low: 1000,
      medium: 1500,
      high: 2000
    };

    const teamMultiplier = 1.5; // 2-5 team size
    const timelineWeeks = 8;
    
    const baseRate = complexityBaseRate[previousData.complexity];
    const minimumBudget = teamMultiplier * baseRate * timelineWeeks; // $18,000

    let budgetFeasibility: 'aligned' | 'tight' | 'insufficient';
    let deliveryModel: 'full_scope' | 'phased_mvp';
    let riskLevel: 'low' | 'medium' | 'high';
    let riskMessage: string;

    // Budget analysis
    if (budget >= minimumBudget * 2) {
      budgetFeasibility = 'aligned';
      deliveryModel = 'full_scope';
    } else if (budget >= minimumBudget) {
      budgetFeasibility = 'aligned';
      deliveryModel = 'phased_mvp';
    } else {
      budgetFeasibility = 'tight';
      deliveryModel = 'phased_mvp';
    }

    // Urgency impact on risk
    if ((urgency === 'high' || urgency === 'critical') && timelineWeeks <= 8) {
      riskLevel = 'medium';
      riskMessage = 'Timeline is aggressive for selected scope';
    } else if (urgency === 'critical') {
      riskLevel = 'high';
      riskMessage = 'Critical timeline poses high delivery risk';
    } else if (budgetFeasibility === 'tight') {
      riskLevel = 'medium';
      riskMessage = 'Budget constraints may impact scope';
    } else {
      riskLevel = 'low';
      riskMessage = 'Budget aligns with 8-week timeline';
    }

    setDeliverySnapshot({
      complexity: previousData.complexity,
      deliveryModel,
      phasesRecommended: deliveryModel === 'phased_mvp' ? 2 : 1,
      riskLevel,
      riskMessage,
      budgetFeasibility
    });
  };

  // Recalculate when budget or urgency changes
  useEffect(() => {
    calculateBudgetFeasibility(formData.budget, formData.urgency);
  }, [formData.budget, formData.urgency]);

  // Budget zone calculation
  const getBudgetZone = (budget: number): string => {
    if (budget < 15000) return 'Starter';
    if (budget < 50000) return 'Growth';
    return 'Enterprise';
  };

  // Format currency
  const formatCurrency = (value: number): string => {
    if (value >= 100000) return '$100,000+';
    return `$${value.toLocaleString()}`;
  };

  // Logarithmic slider conversion
  const budgetToSlider = (budget: number): number => {
    const min = Math.log(5000);
    const max = Math.log(100000);
    return ((Math.log(budget) - min) / (max - min)) * 100;
  };

  const sliderToBudget = (slider: number): number => {
    const min = Math.log(5000);
    const max = Math.log(100000);
    const value = Math.exp(min + (slider / 100) * (max - min));
    // Round to nearest 1000
    return Math.round(value / 1000) * 1000;
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const sliderValue = parseFloat(e.target.value);
    const budget = sliderToBudget(sliderValue);
    setFormData(prev => ({ ...prev, budget }));
  };

  const handleUrgencySelect = (urgency: UrgencyLevel): void => {
    setFormData(prev => ({ ...prev, urgency }));
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* Progress Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-slate-600">Step 3 of 4</p>
            <p className="text-xs text-slate-400">~3 minutes to complete</p>
          </div>
          <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
              initial={{ width: '50%' }}
              animate={{ width: '75%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16">
          {/* LEFT COLUMN - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Budget & Timeline
              </h1>
              <p className="text-lg text-slate-600">
                Help us align the proposal with your constraints.
              </p>
            </div>

            {/* Section 1: Budget Range */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
                Budget Range
              </label>

              {/* Current Budget Display */}
              <div className="mb-6 text-center">
                <motion.div
                  key={formData.budget}
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-5xl font-bold text-slate-900"
                >
                  {formatCurrency(formData.budget)}
                </motion.div>
                <p className="text-sm text-slate-500 mt-2">
                  {getBudgetZone(formData.budget)} tier
                </p>
              </div>

              {/* Budget Slider */}
              <div className="relative px-2 mb-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={budgetToSlider(formData.budget)}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-8
                    [&::-webkit-slider-thumb]:h-8
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:border-2
                    [&::-webkit-slider-thumb]:border-orange-500
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:transition-transform
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-moz-range-thumb]:w-8
                    [&::-moz-range-thumb]:h-8
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-white
                    [&::-moz-range-thumb]:shadow-lg
                    [&::-moz-range-thumb]:border-2
                    [&::-moz-range-thumb]:border-orange-500
                    [&::-moz-range-thumb]:cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, 
                      rgb(249 115 22) 0%, 
                      rgb(251 146 60) ${budgetToSlider(formData.budget)}%, 
                      rgb(226 232 240) ${budgetToSlider(formData.budget)}%, 
                      rgb(226 232 240) 100%)`
                  }}
                />
              </div>

              {/* Zone Markers */}
              <div className="flex justify-between text-xs text-slate-500 px-1 mb-6">
                <span>$5K<br />Starter</span>
                <span>$15K<br />Growth</span>
                <span>$50K<br />Enterprise</span>
                <span>$100K+</span>
              </div>

              {/* Flexible Budget Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.budgetFlexible}
                  onChange={(e) => setFormData(prev => ({ ...prev, budgetFlexible: e.target.checked }))}
                  className="mt-1 w-5 h-5 rounded border-slate-300 text-orange-500 
                    focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer"
                />
                <div>
                  <p className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                    Flexible budget
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    We'll provide options at different investment levels.
                  </p>
                </div>
              </label>
            </motion.div>

            {/* Section 2: Urgency Level */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
                How urgent is this project?
              </label>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {urgencyOptions.map((option) => {
                  const isSelected = formData.urgency === option.id;
                  return (
                    <motion.button
                      key={option.id}
                      type="button"
                      onClick={() => handleUrgencySelect(option.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        relative h-[120px] rounded-lg border-2 transition-all
                        flex flex-col items-center justify-center gap-2
                        ${isSelected 
                          ? 'border-orange-500 bg-orange-50 shadow-sm' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                        }
                      `}
                    >
                      <span className="text-2xl">{option.icon}</span>
                      <span className="text-lg font-bold text-slate-900">
                        {option.label}
                      </span>
                      <span className="text-sm text-slate-500">
                        {option.subtext}
                      </span>
                      {isSelected && (
                        <motion.div
                          layoutId="urgency-indicator"
                          className="absolute top-2 right-2 w-5 h-5 bg-orange-500 rounded-full 
                            flex items-center justify-center"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Section 3: Constraints (Optional) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Constraints or Special Requirements (Optional)
              </label>

              <div className="relative">
                <textarea
                  value={formData.constraints}
                  onChange={(e) => {
                    if (e.target.value.length <= 300) {
                      setFormData(prev => ({ ...prev, constraints: e.target.value }));
                    }
                  }}
                  placeholder="Examples: HIPAA compliance required, must integrate with legacy CRM, specific tech stack preferences..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 
                    text-slate-900 placeholder:text-slate-400
                    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
                    resize-none transition-all"
                />
                <div className="absolute bottom-3 right-3 text-xs text-slate-400">
                  {formData.constraints.length}/300
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Blueprint Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="sticky top-6">
              <div className="bg-white rounded-lg border border-slate-200 p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Blueprint Preview
                </h3>
                <div className="h-px bg-slate-200 mb-6" />

                {/* Collapsed Previous Sections */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">Type of App</span>
                    <span className="text-xs font-medium text-slate-500 bg-slate-200 px-2 py-1 rounded-full">
                      3 selected
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">Industry</span>
                    <span className="text-xs text-slate-700">{previousData.industry}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">Goal</span>
                    <span className="text-xs text-slate-700">{previousData.goal}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">Scope</span>
                    <span className="text-xs text-slate-700">{previousData.timeline}</span>
                  </div>
                </div>

                <div className="h-px bg-slate-200 mb-6" />

                {/* NEW: Delivery Snapshot */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${formData.budget}-${formData.urgency}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Delivery Snapshot
                    </label>

                    <div className="space-y-4">
                      {/* Complexity Badge */}
                      <div className="flex items-center gap-3">
                        <span className={`
                          px-3 py-1 rounded-full text-sm font-medium
                          ${deliverySnapshot.complexity === 'low' ? 'bg-green-100 text-green-700' : ''}
                          ${deliverySnapshot.complexity === 'medium' ? 'bg-slate-100 text-slate-700' : ''}
                          ${deliverySnapshot.complexity === 'high' ? 'bg-orange-100 text-orange-700' : ''}
                        `}>
                          {deliverySnapshot.complexity.charAt(0).toUpperCase() + deliverySnapshot.complexity.slice(1)} Complexity
                        </span>
                      </div>

                      {/* Delivery Model */}
                      <div className="flex items-start gap-3">
                        <span className="text-lg">📦</span>
                        <div className="flex-1">
                          <p className="text-base text-slate-700 font-medium">
                            {deliverySnapshot.deliveryModel === 'phased_mvp' 
                              ? 'Phased MVP recommended' 
                              : 'Full scope feasible'
                            }
                          </p>
                          <p className="text-sm text-slate-500 mt-1">
                            {deliverySnapshot.phasesRecommended} {deliverySnapshot.phasesRecommended === 1 ? 'phase' : 'phases'} for optimal delivery
                          </p>
                        </div>
                      </div>

                      {/* Risk Assessment */}
                      <div className="flex items-start gap-3">
                        {deliverySnapshot.budgetFeasibility === 'aligned' && deliverySnapshot.riskLevel === 'low' ? (
                          <>
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                            <p className="text-sm text-green-700 flex-1">
                              {deliverySnapshot.riskMessage}
                            </p>
                          </>
                        ) : (
                          <>
                            <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                            <p className="text-sm text-orange-700 flex-1">
                              {deliverySnapshot.riskMessage}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="h-px bg-slate-200 my-6" />

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">
                    Est. Complexity: <span className="font-medium text-slate-900">{previousData.complexity.charAt(0).toUpperCase() + previousData.complexity.slice(1)}</span>
                  </span>
                  <span className="text-slate-600">
                    Team: <span className="font-medium text-slate-900">{previousData.teamEstimate}</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Sticky CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 shadow-lg z-50">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            to="/wizard/step2"
            className="flex items-center gap-2 px-6 py-3 text-slate-600 hover:text-slate-900 
              transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </Link>

          <Link
            to="/wizard/step4"
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg
              hover:bg-slate-800 transition-all hover:scale-105 hover:shadow-lg
              group"
          >
            <span className="font-medium">Continue</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}