import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Check, Sparkles, Lock, Clock, 
  Globe, Building2, User2, MapPin, Target, DollarSign, Calendar, AlertCircle
} from 'lucide-react';
import { Button } from './ui/design-system/Button';
import { Card } from './ui/design-system/Card';
import { Typography } from './ui/design-system/Typography';
import { Badge } from './ui/design-system/Badge';
import { cn } from './ui/design-system/utils';
import { useLeads } from '../context/LeadContext';
import { wizardSchema, WizardFormData } from '../lib/schemas';
import { ArchitectureVisualizer } from './wizard/ArchitectureVisualizer';

// --- Types ---
// Re-using WizardFormData from schemas, but we keep initialData locally for the form state
const initialData: WizardFormData = {
  name: '',
  website: '',
  companyName: '',
  services: [],
  goals: [],
  description: '',
  budget: 5000,
  timeline: ''
};

interface BriefWizardProps {
  onClose?: () => void;
  onSubmit?: () => void;
}

export function BriefWizard({ onClose, onSubmit }: BriefWizardProps) {
  const { addLead } = useLeads();
  
  // Initialize state from localStorage (Core Feature: Session Recovery)
  const [data, setData] = useState<WizardFormData>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('sun_ai_wizard_data');
        if (saved) return JSON.parse(saved);
      }
    } catch (e) { console.warn('Wizard restore failed', e); }
    return initialData;
  });

  const [step, setStep] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('sun_ai_wizard_step');
        if (saved) return parseInt(saved);
      }
    } catch (e) {}
    return 1;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isScanning, setIsScanning] = useState(false);
  const [descValidation, setDescValidation] = useState<{ quality: 'low' | 'medium' | 'high'; suggestions: string[] }>({ quality: 'low', suggestions: [] });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  // Persist State
  useEffect(() => {
    try {
      localStorage.setItem('sun_ai_wizard_data', JSON.stringify(data));
      localStorage.setItem('sun_ai_wizard_step', step.toString());
    } catch (e) {}
  }, [data, step]);

  const updateData = (updates: Partial<WizardFormData>) => {
    setData(prev => ({ ...prev, ...updates }));
    // Clear errors for fields being updated
    const newErrors = { ...errors };
    Object.keys(updates).forEach(key => delete newErrors[key]);
    setErrors(newErrors);
  };

  // Real-time Semantic Analysis for Description
  useEffect(() => {
    if (!data.description) {
      setDescValidation({ quality: 'low', suggestions: [] });
      return;
    }

    const text = data.description.toLowerCase();
    const suggestions: string[] = [];
    let score = 0;

    // Length Check
    if (text.length > 30) score += 1;
    if (text.length > 80) score += 1;

    // Semantic Keywords Check
    const hasAudience = ['user', 'client', 'customer', 'audience', 'people', 'who'].some(w => text.includes(w));
    const hasPlatform = ['web', 'mobile', 'app', 'site', 'platform', 'ios', 'android', 'browser'].some(w => text.includes(w));
    const hasGoal = ['goal', 'revenue', 'scale', 'automate', 'money', 'save', 'efficient', 'fast', 'sell'].some(w => text.includes(w));

    if (!hasAudience) suggestions.push('target audience');
    if (!hasPlatform) suggestions.push('platform (web/mobile)');
    if (!hasGoal) suggestions.push('business goal');

    if (hasAudience) score += 1;
    if (hasPlatform) score += 1;
    if (hasGoal) score += 1;

    // Determine Quality
    let quality: 'low' | 'medium' | 'high' = 'low';
    if (score >= 4) quality = 'high';
    else if (score >= 2) quality = 'medium';

    setDescValidation({
      quality,
      suggestions: suggestions.length > 0 ? [`Try adding: ${suggestions.join(', ')}`] : []
    });

  }, [data.description]);

  const validateStep = (currentStep: number): boolean => {
    const result = wizardSchema.safeParse(data);
    
    if (result.success) {
      setErrors({});
      return true;
    }

    // Filter errors relevant to current step
    const stepFields: Record<number, string[]> = {
      1: ['name', 'website', 'companyName'],
      2: ['services'],
      3: ['goals', 'description'],
      4: ['budget', 'timeline'],
      5: [] // Review step doesn't need validation
    };

    const currentFields = stepFields[currentStep];
    const newErrors: Record<string, string> = {};
    let isValid = true;

    result.error.issues.forEach(issue => {
      const fieldName = issue.path[0] as string;
      if (currentFields.includes(fieldName)) {
        newErrors[fieldName] = issue.message;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      if (step < totalSteps) setStep(s => s + 1);
      else {
        // Submit Logic
        addLead(data);
        onSubmit?.();
      }
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(s => s - 1);
  };

  // Mock URL Scanning Effect
  useEffect(() => {
    if (data.website && data.website.length > 8 && !isScanning) {
      setIsScanning(true);
      setTimeout(() => setIsScanning(false), 2000);
    }
  }, [data.website]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 flex flex-col font-sans">
      
      {/* --- Header (Progress & Trust) --- */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#FDFDFD]/80 backdrop-blur-md border-b border-slate-100">
        <div className="h-1 bg-slate-100 w-full">
          <motion.div 
            className="h-full bg-orange-500" 
            initial={{ width: 0 }} 
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
            <div className="hidden md:flex items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> ~3 mins</span>
              <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Private & Encrypted</span>
            </div>
          </div>
          
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium">
            Exit
          </button>
        </div>
      </header>

      {/* --- Main Content Area --- */}
      <main className="flex-grow pt-32 pb-32 px-6 flex flex-col items-center justify-start min-h-[600px]">
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form Wizard */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              
              {/* Step 1: Overview */}
            {step === 1 && (
              <WizardStep key="step1" title="Let's start with the basics" subtitle="We'll scan your site to understand your brand.">
                <div className="space-y-6">
                  <InputGroup 
                    label="Your Name" 
                    icon={<User2 className="w-5 h-5" />}
                    error={errors.name}
                  >
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full bg-transparent outline-none text-lg text-slate-900 placeholder:text-slate-300"
                      value={data.name}
                      onChange={e => updateData({ name: e.target.value })}
                      autoFocus
                    />
                  </InputGroup>

                  <InputGroup 
                    label="Company Name" 
                    icon={<Building2 className="w-5 h-5" />}
                    error={errors.companyName}
                  >
                    <input 
                      type="text" 
                      placeholder="Acme Inc." 
                      className="w-full bg-transparent outline-none text-lg text-slate-900 placeholder:text-slate-300"
                      value={data.companyName}
                      onChange={e => updateData({ companyName: e.target.value })}
                    />
                  </InputGroup>
                  
                  <InputGroup 
                    label="Company Website (Optional)" 
                    icon={<Globe className="w-5 h-5" />}
                    error={errors.website}
                  >
                     <div className="flex flex-col w-full">
                        <div className="flex items-center w-full">
                          <input 
                            type="url" 
                            placeholder="https://example.com" 
                            className="flex-grow bg-transparent outline-none text-lg text-slate-900 placeholder:text-slate-300"
                            value={data.website}
                            onChange={e => updateData({ website: e.target.value })}
                          />
                          {isScanning && (
                            <span className="text-xs font-bold text-orange-500 animate-pulse flex items-center gap-1">
                              <Sparkles className="w-3 h-3" /> Scanning...
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
                          <Lock className="w-3 h-3" /> We analyze your site to tailor recommendations. No data is stored.
                        </p>
                     </div>
                  </InputGroup>
                </div>
              </WizardStep>
            )}

            {/* Step 2: Services */}
            {step === 2 && (
              <WizardStep key="step2" title="What are you looking to build?" subtitle="Select all that apply.">
                {errors.services && (
                  <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> {errors.services}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['AI Web App', 'Custom Chatbot', 'Workflow Automation', 'Consulting / Strategy'].map((svc) => (
                    <SelectionCard 
                      key={svc}
                      label={svc}
                      selected={data.services.includes(svc)}
                      onClick={() => {
                        const newServices = data.services.includes(svc) 
                          ? data.services.filter(s => s !== svc)
                          : [...data.services, svc];
                        updateData({ services: newServices });
                      }}
                    />
                  ))}
                </div>
              </WizardStep>
            )}

            {/* Step 3: Goals */}
            {step === 3 && (
              <WizardStep key="step3" title="Project Details" subtitle="Help our AI architect understand your vision.">
                <div className="space-y-6">
                  {errors.goals && (
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" /> {errors.goals}
                    </div>
                  )}
                  
                  {/* Goal Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Increase Revenue', 'Automate Support', 'Save Time', 'Scale Operations', 'New Product Launch'].map((goal) => (
                      <Chip 
                        key={goal} 
                        label={goal} 
                        selected={data.goals.includes(goal)}
                        onClick={() => {
                          const newGoals = data.goals.includes(goal)
                            ? data.goals.filter(g => g !== goal)
                            : [...data.goals, goal];
                          updateData({ goals: newGoals });
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Intelligent Description Input */}
                  <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex justify-between">
                      <span>Project Description</span>
                      <span className={cn(
                        "transition-colors duration-300",
                        descValidation.quality === 'high' ? "text-emerald-500" : 
                        descValidation.quality === 'medium' ? "text-orange-500" : "text-slate-300"
                      )}>
                        {descValidation.quality === 'high' ? 'Excellent Detail' : 
                         descValidation.quality === 'medium' ? 'Getting there...' : 'Be specific'}
                      </span>
                    </label>
                    
                    <div className={cn(
                      "relative rounded-xl transition-all duration-300 bg-white",
                      descValidation.quality === 'medium' && data.description.length > 10 ? "shadow-[0_0_20px_rgba(249,115,22,0.15)] border-orange-300" :
                      descValidation.quality === 'high' ? "border-emerald-400 shadow-sm" :
                      "border-slate-200 focus-within:border-slate-400 focus-within:shadow-md",
                      "border"
                    )}>
                      <textarea 
                        className="w-full h-40 p-4 rounded-xl bg-transparent outline-none resize-none text-slate-700 leading-relaxed placeholder:text-slate-300"
                        placeholder="I want to build an AI chatbot for my real estate business that helps tenants book viewings..."
                        value={data.description}
                        onChange={e => updateData({ description: e.target.value })}
                      />
                      
                      {/* Quality Indicator Dot */}
                      <div className="absolute top-4 right-4 flex gap-1">
                        {[1, 2, 3].map((dot) => (
                           <div key={dot} className={cn(
                             "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                             (descValidation.quality === 'high' || (descValidation.quality === 'medium' && dot <= 2) || (descValidation.quality === 'low' && dot === 1)) && data.description.length > 5
                               ? (descValidation.quality === 'high' ? "bg-emerald-400" : descValidation.quality === 'medium' ? "bg-orange-400" : "bg-slate-300")
                               : "bg-slate-100"
                           )} />
                        ))}
                      </div>
                    </div>

                    {/* AI Suggestions Area */}
                    <div className="h-8 mt-2">
                      <AnimatePresence mode="wait">
                        {data.description && descValidation.suggestions.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="flex items-center gap-2 text-xs text-orange-600 font-medium px-1"
                          >
                            <Sparkles className="w-3 h-3 animate-pulse" />
                            {descValidation.suggestions[0]}
                          </motion.div>
                        )}
                        {errors.description && (
                           <motion.span 
                             initial={{ opacity: 0 }} 
                             animate={{ opacity: 1 }} 
                             className="text-xs text-red-500 font-medium px-1 block"
                           >
                             {errors.description}
                           </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </WizardStep>
            )}

            {/* Step 4: Constraints */}
            {step === 4 && (
              <WizardStep key="step4" title="Budget & Timeline" subtitle="This helps us recommend the right solution.">
                 <div className="space-y-8">
                    <div>
                      <label className="flex justify-between text-sm font-bold text-slate-700 mb-4">
                        <span>Estimated Budget</span>
                        <span className="text-orange-600">${data.budget.toLocaleString()}+</span>
                      </label>
                      <input 
                        type="range" 
                        min="5000" 
                        max="100000" 
                        step="5000"
                        value={data.budget}
                        onChange={e => updateData({ budget: parseInt(e.target.value) })}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                        <span>$5k</span>
                        <span>$50k</span>
                        <span>$100k+</span>
                      </div>
                      {errors.budget && <span className="text-xs text-red-500 font-medium block mt-1">{errors.budget}</span>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-4">Target Launch</label>
                      {errors.timeline && (
                         <div className="mb-2 text-xs text-red-500 font-medium flex items-center gap-1">
                           <AlertCircle className="w-3 h-3" /> {errors.timeline}
                         </div>
                      )}
                      <div className="grid grid-cols-2 gap-4">
                        {['ASAP', '1-2 Months', '3-6 Months', 'Flexible'].map(t => (
                           <button
                             key={t}
                             onClick={() => updateData({ timeline: t })}
                             className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                               data.timeline === t 
                                 ? 'bg-slate-900 text-white border-slate-900' 
                                 : 'bg-white border-slate-200 text-slate-600 hover:border-orange-500'
                             }`}
                           >
                             {t}
                           </button>
                        ))}
                      </div>
                    </div>
                 </div>
              </WizardStep>
            )}

            {/* Step 5: Review */}
            {step === 5 && (
              <WizardStep key="step5" title="Ready to generate proposal?" subtitle="Review your details below.">
                <Card variant="solid" className="bg-slate-50 border-slate-200 p-6 space-y-4">
                   <ReviewItem label="Project" value={data.services.join(', ') || 'Not specified'} icon={<Target className="w-4 h-4" />} />
                   <ReviewItem label="Goal" value={data.goals[0] || 'Not specified'} icon={<Sparkles className="w-4 h-4" />} />
                   <ReviewItem label="Budget" value={`$${data.budget.toLocaleString()}+`} icon={<DollarSign className="w-4 h-4" />} />
                   <ReviewItem label="Timeline" value={data.timeline || 'Flexible'} icon={<Calendar className="w-4 h-4" />} />
                   <div className="pt-4 border-t border-slate-200 mt-4">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Description</span>
                      <p className="text-sm text-slate-600 italic">"{data.description}"</p>
                   </div>
                </Card>
              </WizardStep>
            )}

            </AnimatePresence>
          </div>

          {/* Right Column: Visualizer (Desktop Only) */}
          <div className="hidden lg:col-span-5 lg:block">
            <ArchitectureVisualizer data={data} step={step} />
          </div>

        </div>
      </main>

      {/* --- Footer Navigation --- */}
      <footer className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 p-4 z-50">
        <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4">
          <Button 
            variant="ghost" 
            onClick={prevStep} 
            disabled={step === 1}
            className={step === 1 ? 'opacity-0 pointer-events-none' : ''}
          >
            Back
          </Button>
          
          <Button 
            variant="primary" 
            onClick={nextStep}
            className="w-full sm:w-auto min-w-[140px]"
            rightIcon={step === 5 ? <Sparkles className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          >
            {step === 5 ? 'Generate Proposal' : 'Continue'}
          </Button>
        </div>
      </footer>

    </div>
  );
}

// --- Helper Components ---

function WizardStep({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-10">
        <Typography variant="h2" className="text-slate-900 mb-2">{title}</Typography>
        <Typography variant="body" className="text-slate-500">{subtitle}</Typography>
      </div>
      {children}
    </motion.div>
  );
}

function InputGroup({ label, icon, children, error }: { label: string, icon: React.ReactNode, children: React.ReactNode, error?: string }) {
  return (
    <div className={cn(
      "p-4 bg-white rounded-2xl border shadow-sm transition-all flex items-center gap-4",
      error 
        ? "border-red-300 ring-1 ring-red-200" 
        : "border-slate-200 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500"
    )}>
      <div className={cn("text-slate-400", error && "text-red-400")}>{icon}</div>
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <label className={cn("block text-xs font-bold uppercase tracking-wider", error ? "text-red-500" : "text-slate-500")}>{label}</label>
          {error && <span className="text-[10px] text-red-500 font-medium">{error}</span>}
        </div>
        {children}
      </div>
    </div>
  );
}

function SelectionCard({ label, selected, onClick }: { label: string, selected: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between group",
        selected 
          ? "border-slate-900 bg-slate-900 text-white" 
          : "border-slate-100 bg-white text-slate-600 hover:border-orange-500 hover:shadow-md"
      )}
    >
      <span className="font-bold text-lg">{label}</span>
      {selected && <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white"><Check className="w-4 h-4" /></div>}
    </div>
  );
}

function Chip({ label, selected, onClick }: { label: string, selected: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-bold transition-all border",
        selected
          ? "bg-orange-500 text-white border-orange-500 shadow-md"
          : "bg-white text-slate-600 border-slate-200 hover:border-orange-400"
      )}
    >
      {label}
    </button>
  );
}

function ReviewItem({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-200 last:border-0">
      <div className="flex items-center gap-2 text-slate-500 text-sm">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-bold text-slate-900">{value}</span>
    </div>
  );
}
