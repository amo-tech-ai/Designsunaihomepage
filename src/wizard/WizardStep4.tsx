'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Edit2, Info, Sparkles, Save, 
  X, CheckCircle2, AlertTriangle, Lock 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Sample data from all previous steps
const wizardData = {
  // Step 1: Identity & Context
  name: 'Jordan Lee',
  company: 'Sun AI Agency',
  website: 'https://sunaiv8.vercel.app',
  email: 'jordan@sunai.com',
  
  // Step 2: Project Definition
  appTypes: [
    { icon: '🧩', label: 'Web App' },
    { icon: '📊', label: 'Dashboard' },
    { icon: '⚡', label: 'Automations' }
  ],
  industry: { icon: '🏠', label: 'Real Estate' },
  description: 'We need a CRM that automates lead follow-up with WhatsApp and tracks conversion rates in real-time.',
  goal: { icon: '⚡', label: 'Automate Operations' },
  successOutcome: 'Reduce manual follow-up time by 40% and increase response speed by 20%',
  timeline: { value: '8 weeks', achievable: true },
  teamSize: '2-5 people',
  integrations: ['WhatsApp', 'Stripe', 'Supabase'],
  
  // Step 3: Budget & Urgency
  budget: 45000,
  budgetFlexible: false,
  urgency: { icon: '🟠', label: 'High', subtext: '1-3 months' },
  
  // Calculated fields
  complexity: 'medium' as const,
  teamEstimate: '2 Engineers',
  deliveryModel: 'Phased MVP recommended',
  riskMessage: 'Timeline is aggressive for selected scope'
};

export default function WizardStep4() {
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [email, setEmail] = useState(wizardData.email);
  const [sendUpdates, setSendUpdates] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleGenerateBlueprint = () => {
    // Navigate to processing screen
    navigate('/processing?job=mock-job-id');
  };

  const handleSaveForLater = () => {
    setShowSaveModal(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call to save draft and send magic link
    console.log('Saving draft for:', email, 'Updates:', sendUpdates);
    
    // Show success toast
    setShowToast(true);
    setShowSaveModal(false);
    
    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  const formatCurrency = (value: number): string => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* Progress Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-slate-600">Step 4 of 4</p>
            <p className="text-xs text-slate-400">~1 minute to review</p>
          </div>
          <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
              initial={{ width: '75%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
          {/* LEFT COLUMN - Review Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Review Your Project
              </h1>
              <p className="text-lg text-slate-600">
                Confirm details before we generate your custom blueprint.
              </p>
            </div>

            {/* Summary Card */}
            <div className="bg-white rounded-lg border border-slate-200 p-8 mb-10">
              <div className="space-y-6">
                {/* Section 1: Type of App */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-700 mb-2">Type of App</h3>
                    <div className="flex flex-wrap gap-3">
                      {wizardData.appTypes.map((type, idx) => (
                        <span key={idx} className="text-sm text-slate-700">
                          {type.icon} {type.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/wizard/step2"
                    className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 
                      hover:underline transition-all group mt-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Link>
                </div>
                <div className="h-px bg-slate-200" />

                {/* Section 2: Industry */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-700 mb-2">Industry</h3>
                    <p className="text-sm text-slate-700">
                      {wizardData.industry.icon} {wizardData.industry.label}
                    </p>
                  </div>
                  <Link
                    to="/wizard/step2"
                    className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 
                      hover:underline transition-all group mt-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Link>
                </div>
                <div className="h-px bg-slate-200" />

                {/* Section 3: Project Description */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-700 mb-2">Project Description</h3>
                    <blockquote className="border-l-4 border-orange-500 pl-4 italic text-slate-600">
                      "{wizardData.description}"
                    </blockquote>
                  </div>
                  <Link
                    to="/wizard/step2"
                    className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 
                      hover:underline transition-all group mt-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Link>
                </div>
                <div className="h-px bg-slate-200" />

                {/* Section 4: Primary Goal */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-700 mb-2">Primary Goal</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 
                      rounded-full text-sm mb-2">
                      {wizardData.goal.icon} {wizardData.goal.label}
                    </div>
                    <p className="text-sm text-slate-500 mt-2">
                      Success: {wizardData.successOutcome}
                    </p>
                  </div>
                  <Link
                    to="/wizard/step2"
                    className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 
                      hover:underline transition-all group mt-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Link>
                </div>
                <div className="h-px bg-slate-200" />

                {/* Section 5: Timeline */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-700 mb-2">Target Timeline</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-700">{wizardData.timeline.value}</span>
                      <span className={`
                        inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs
                        ${wizardData.timeline.achievable 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-orange-100 text-orange-700'
                        }
                      `}>
                        {wizardData.timeline.achievable ? '✓ Achievable' : '⚠ Aggressive'}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/wizard/step2"
                    className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 
                      hover:underline transition-all group mt-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Link>
                </div>
                <div className="h-px bg-slate-200" />

                {/* Section 6: Team Size */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-700 mb-2">Team Size</h3>
                    <p className="text-sm text-slate-700">{wizardData.teamSize}</p>
                  </div>
                  <Link
                    to="/wizard/step2"
                    className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 
                      hover:underline transition-all group mt-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Link>
                </div>
                <div className="h-px bg-slate-200" />

                {/* Section 7: Integrations */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-700 mb-2">Integrations</h3>
                    <div className="flex flex-wrap gap-2">
                      {wizardData.integrations.map((integration) => (
                        <span
                          key={integration}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/wizard/step2"
                    className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 
                      hover:underline transition-all group mt-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Link>
                </div>
                <div className="h-px bg-slate-200" />

                {/* Section 8: Budget */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-700 mb-2">Budget Range</h3>
                    <p className="text-sm text-slate-700">{formatCurrency(wizardData.budget)}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {wizardData.budgetFlexible ? '(Flexible budget selected)' : '(Flexible budget not selected)'}
                    </p>
                  </div>
                  <Link
                    to="/wizard/step3"
                    className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 
                      hover:underline transition-all group mt-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Link>
                </div>
                <div className="h-px bg-slate-200" />

                {/* Section 9: Urgency */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-700 mb-2">Urgency</h3>
                    <p className="text-sm text-slate-700">
                      {wizardData.urgency.icon} {wizardData.urgency.label} ({wizardData.urgency.subtext})
                    </p>
                  </div>
                  <Link
                    to="/wizard/step3"
                    className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 
                      hover:underline transition-all group mt-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Link>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Info className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-2">What happens next</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    We'll use AI to generate your custom architecture blueprint and proposal. This takes about 10 seconds. 
                    You'll be able to review, download, and request changes before accepting.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action */}
            <motion.button
              onClick={handleGenerateBlueprint}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-16 bg-orange-500 text-white rounded-lg flex items-center justify-center gap-3
                hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl group"
            >
              <span className="text-xl font-semibold">Generate My Blueprint</span>
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </motion.button>

            {/* Secondary Action */}
            <button
              onClick={handleSaveForLater}
              className="w-full h-12 mt-4 border border-slate-200 text-slate-700 rounded-lg 
                flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            >
              <Save className="w-4 h-4" />
              <span className="font-medium">Save & Continue Later</span>
            </button>
          </motion.div>

          {/* RIGHT COLUMN - Blueprint Preview (Locked) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="sticky top-6">
              <div className="bg-white rounded-lg border border-slate-200 p-8">
                {/* Lock Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
                    <Lock className="w-4 h-4 text-slate-600" />
                    <span className="text-sm font-medium text-slate-700">Locked for generation</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Ready to generate proposal. Estimates only — final pricing in proposal.
                  </p>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Blueprint Preview
                </h3>
                <div className="h-px bg-slate-200 mb-6" />

                {/* Collapsed Previous Sections */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">Type of App</span>
                    <span className="text-xs font-medium text-slate-500 bg-slate-200 px-2 py-1 rounded-full">
                      3 selected
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">Industry</span>
                    <span className="text-xs text-slate-700">{wizardData.industry.label}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">Goal</span>
                    <span className="text-xs text-slate-700">{wizardData.goal.label}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">Scope</span>
                    <span className="text-xs text-slate-700">{wizardData.timeline.value}</span>
                  </div>
                </div>

                <div className="h-px bg-slate-200 mb-6" />

                {/* Delivery Snapshot (Expanded) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Delivery Snapshot
                  </label>

                  <div className="space-y-4">
                    {/* Complexity Badge */}
                    <div className="flex items-center gap-3">
                      <span className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${wizardData.complexity === 'low' ? 'bg-green-100 text-green-700' : ''}
                        ${wizardData.complexity === 'medium' ? 'bg-slate-100 text-slate-700' : ''}
                        ${wizardData.complexity === 'high' ? 'bg-orange-100 text-orange-700' : ''}
                      `}>
                        {wizardData.complexity.charAt(0).toUpperCase() + wizardData.complexity.slice(1)} Complexity
                      </span>
                    </div>

                    {/* Delivery Model */}
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📦</span>
                      <div className="flex-1">
                        <p className="text-base text-slate-700 font-medium">
                          {wizardData.deliveryModel}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          2 phases for optimal delivery
                        </p>
                      </div>
                    </div>

                    {/* Risk Assessment */}
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <p className="text-sm text-orange-700 flex-1">
                        {wizardData.riskMessage}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-200 my-6" />

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">
                    Est. Complexity: <span className="font-medium text-slate-900">
                      {wizardData.complexity.charAt(0).toUpperCase() + wizardData.complexity.slice(1)}
                    </span>
                  </span>
                  <span className="text-slate-600">
                    Team: <span className="font-medium text-slate-900">{wizardData.teamEstimate}</span>
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
            to="/wizard/step3"
            className="flex items-center gap-2 px-6 py-3 text-slate-600 hover:text-slate-900 
              transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </Link>

          <button
            onClick={handleGenerateBlueprint}
            className="flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg
              hover:bg-orange-600 transition-all hover:scale-105 hover:shadow-lg group"
          >
            <span className="font-medium text-lg">Generate My Blueprint</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>

      {/* Save & Continue Later Modal */}
      <AnimatePresence>
        {showSaveModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSaveModal(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">Save Your Progress</h2>
                  <button
                    onClick={() => setShowSaveModal(false)}
                    className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center 
                      transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-500" />
                  </button>
                </div>

                {/* Content */}
                <form onSubmit={handleEmailSubmit}>
                  <p className="text-sm text-slate-600 mb-6">
                    Enter your email and we'll send you a magic link to continue where you left off.
                  </p>

                  {/* Email Input */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full h-12 px-4 rounded-lg border border-slate-200 text-slate-900 
                        placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 
                        focus:border-transparent"
                    />
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group mb-6">
                    <input
                      type="checkbox"
                      checked={sendUpdates}
                      onChange={(e) => setSendUpdates(e.target.checked)}
                      className="mt-0.5 w-5 h-5 rounded border-slate-300 text-orange-500 
                        focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer"
                    />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                      Send me occasional updates about AI products
                    </span>
                  </label>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-12 bg-orange-500 text-white rounded-lg font-medium
                      hover:bg-orange-600 transition-all hover:shadow-lg"
                  >
                    Email Me a Link
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 z-50"
          >
            <div className="bg-emerald-500 text-white px-6 py-4 rounded-lg shadow-xl 
              flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Check your inbox!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Named export for compatibility
export { WizardStep4 };
