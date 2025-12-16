import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Bot, Code, Zap, MessageSquare, Sparkles, Users, Wrench, Edit2, Clock, DollarSign } from 'lucide-react';
import {
  PillSelector,
  TagSelector,
  ServiceCard,
  TextField,
  UrlInput,
  AiInsightCard,
  SectionCard,
  BudgetSlider,
} from './wizard/FormComponents';

// Form data interface
interface BriefFormData {
  // Screen 1
  websiteUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  additionalUrls: string[];
  companyName: string;
  about: string;
  industries: string[];
  location: string;
  teamSize: string;
  
  // Screen 2
  selectedServices: string[];
  integrations: string[];
  
  // Screen 3
  mainGoals: string[];
  idealOutcome: string;
  problemSolved: string;
  keyFeatures: string;
  targetUsers: string[];
  
  // Screen 4
  technicalRequirements: string[];
  budget: number;
  timeline: string;
  
  // AI Insights (generated)
  aiInsights: {
    detectedIndustry: string;
    brandVoice: string;
    keyOfferings: string[];
    audienceType: string;
  } | null;
}

const initialFormData: BriefFormData = {
  websiteUrl: '',
  linkedinUrl: '',
  instagramUrl: '',
  additionalUrls: [],
  companyName: '',
  about: '',
  industries: [],
  location: '',
  teamSize: '',
  selectedServices: [],
  integrations: [],
  mainGoals: [],
  idealOutcome: '',
  problemSolved: '',
  keyFeatures: '',
  targetUsers: [],
  technicalRequirements: [],
  budget: 25000,
  timeline: '',
  aiInsights: null,
};

interface BriefWizardProps {
  onClose?: () => void;
  onSubmit?: () => void;
}

export function BriefWizard({ onClose, onSubmit }: BriefWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BriefFormData>(initialFormData);

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const updateFormData = (updates: Partial<BriefFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToStep = (step: number) => {
    if (step <= currentStep || step === 1) {
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getStepTitle = () => {
    const titles = [
      'Company Overview',
      'Select AI Services',
      'Project Goals',
      'Requirements & Budget',
      'Review & Generate',
    ];
    return titles[currentStep - 1];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-slate-900">Sun AI Brief Wizard</h1>
              <p className="text-slate-600 mt-1 text-sm sm:text-base">
                Step {currentStep} of {totalSteps}: {getStepTitle()}
              </p>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="text-slate-500 hover:text-slate-700 transition-colors px-3 py-2 text-sm sm:text-base"
              >
                Close
              </button>
            )}
          </div>
          
          {/* Progress bar */}
          <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00334F] to-[#FF6B2C] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Step indicators */}
          <div className="flex justify-between mt-4 gap-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`flex items-center gap-1 sm:gap-2 ${
                  step < currentStep
                    ? 'text-[#00334F]'
                    : step === currentStep
                    ? 'text-[#FF6B2C]'
                    : 'text-slate-400'
                }`}
              >
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm transition-all ${
                    step < currentStep
                      ? 'bg-[#00334F] text-white'
                      : step === currentStep
                      ? 'bg-[#FF6B2C] text-white ring-4 ring-orange-100'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {step < currentStep ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : step}
                </div>
                <span className="text-[10px] sm:text-xs hidden md:inline">
                  {step === 1 && 'Overview'}
                  {step === 2 && 'Services'}
                  {step === 3 && 'Goals'}
                  {step === 4 && 'Budget'}
                  {step === 5 && 'Review'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {currentStep === 1 && (
          <Screen1 formData={formData} updateFormData={updateFormData} />
        )}
        {currentStep === 2 && (
          <Screen2 formData={formData} updateFormData={updateFormData} />
        )}
        {currentStep === 3 && (
          <Screen3 formData={formData} updateFormData={updateFormData} />
        )}
        {currentStep === 4 && (
          <Screen4 formData={formData} updateFormData={updateFormData} />
        )}
        {currentStep === 5 && (
          <Screen5 formData={formData} updateFormData={updateFormData} goToStep={goToStep} />
        )}
      </div>

      {/* Navigation */}
      <div className="sticky bottom-0 bg-white border-t border-slate-200 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all text-sm sm:text-base ${
              currentStep === 1
                ? 'text-slate-400 cursor-not-allowed'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="text-xs sm:text-sm text-slate-500">
            {currentStep} / {totalSteps}
          </div>

          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#00334F] to-[#00334F] hover:from-[#004060] hover:to-[#004060] text-white transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                // Generate proposal logic here
                console.log('Generate Proposal', formData);
                onSubmit?.();
              }}
              className="flex items-center gap-2 px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#FF6B2C] to-[#FF8A4F] text-white transition-all shadow-md hover:shadow-lg hover:scale-105 text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Generate AI Proposal</span>
              <span className="sm:hidden">Generate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Placeholder screen components (to be implemented next)
function Screen1({ formData, updateFormData }: { formData: BriefFormData; updateFormData: (data: Partial<BriefFormData>) => void }) {
  const handleUrlChange = (urls: string[]) => {
    updateFormData({
      websiteUrl: urls[0] || '',
      linkedinUrl: urls[1] || '',
      instagramUrl: urls[2] || '',
      additionalUrls: urls.slice(3),
    });
    
    // Mock AI analysis when URLs are provided
    if (urls[0] && urls[0].length > 10) {
      setTimeout(() => {
        updateFormData({
          aiInsights: {
            detectedIndustry: 'Technology & AI Services',
            brandVoice: 'Professional, Modern, Innovative',
            keyOfferings: ['AI Development', 'Automation', 'Consulting'],
            audienceType: 'B2B Enterprise & Startups',
          },
        });
      }, 500);
    }
  };

  const urls = [
    formData.websiteUrl,
    formData.linkedinUrl,
    formData.instagramUrl,
    ...formData.additionalUrls,
  ];

  const industryOptions = [
    'Technology',
    'Healthcare',
    'Finance',
    'E-commerce',
    'Education',
    'Marketing',
    'Manufacturing',
    'Real Estate',
    'Other',
  ];

  return (
    <div className="space-y-6">
      {/* Section A - URLs */}
      <SectionCard
        title="URL Context Search"
        description="Sun AI will analyze your brand tone, industry, messaging, products, and social presence automatically."
      >
        <UrlInput
          urls={urls}
          onChange={handleUrlChange}
          labels={['Website URL', 'LinkedIn URL', 'Instagram URL']}
        />
      </SectionCard>

      {/* Section C - AI Insights (moved up for better flow) */}
      <AiInsightCard insights={formData.aiInsights} />

      {/* Section B - Company Details */}
      <SectionCard title="Company Details">
        <div className="space-y-6">
          <TextField
            label="Company Name"
            value={formData.companyName}
            onChange={(value) => updateFormData({ companyName: value })}
            placeholder="Enter your company name"
            required
          />

          <TextField
            label="Short About"
            value={formData.about}
            onChange={(value) => updateFormData({ about: value })}
            placeholder="Describe your company in 1-2 sentences"
            multiline
            rows={3}
          />

          <div>
            <label className="block text-slate-700 mb-3">
              Industry <span className="text-slate-400 text-sm">(select all that apply)</span>
            </label>
            <TagSelector
              options={industryOptions}
              selected={formData.industries}
              onChange={(value) => updateFormData({ industries: value })}
            />
          </div>

          <TextField
            label="Location"
            value={formData.location}
            onChange={(value) => updateFormData({ location: value })}
            placeholder="City, Country"
          />

          <div>
            <label className="block text-slate-700 mb-3">Team Size</label>
            <PillSelector
              options={['Solo', '2-5', '6-15', '16-50', '50+']}
              selected={formData.teamSize}
              onChange={(value) => updateFormData({ teamSize: value as string })}
            />
          </div>
        </div>
      </SectionCard>
    </div>
  );
}

function Screen2({ formData, updateFormData }: { formData: BriefFormData; updateFormData: (data: Partial<BriefFormData>) => void }) {
  const services = [
    { title: 'AI Web App Development', icon: <Code className="w-6 h-6" /> },
    { title: 'AI Chatbot / Virtual Assistant', icon: <MessageSquare className="w-6 h-6" /> },
    { title: 'Business Automation', icon: <Zap className="w-6 h-6" /> },
    { title: 'AI Social Media Marketing', icon: <Sparkles className="w-6 h-6" /> },
    { title: 'AI Content Creation', icon: <Bot className="w-6 h-6" /> },
    { title: 'Custom AI Project', icon: <Wrench className="w-6 h-6" /> },
  ];

  const integrationOptions = [
    'Webflow',
    'Shopify',
    'HubSpot',
    'Notion',
    'Stripe',
    'Slack',
    'Zapier',
    'Custom API',
  ];

  const toggleService = (service: string) => {
    const current = formData.selectedServices;
    if (current.includes(service)) {
      updateFormData({ selectedServices: current.filter((s) => s !== service) });
    } else {
      if (current.length < 3) {
        updateFormData({ selectedServices: [...current, service] });
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Section A - Primary Service Selection */}
      <SectionCard
        title="Select AI Services"
        description="Choose up to 3 primary services you need (you can select multiple)"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              selected={formData.selectedServices.includes(service.title)}
              onClick={() => toggleService(service.title)}
            />
          ))}
        </div>
        
        {formData.selectedServices.length > 0 && (
          <p className="text-sm text-slate-500 mt-4">
            {formData.selectedServices.length} of 3 selected
          </p>
        )}
      </SectionCard>

      {/* Section B - Integration Targets */}
      <SectionCard
        title="Integration Targets"
        description="Select any platforms or tools you need to integrate with (optional)"
      >
        <TagSelector
          options={integrationOptions}
          selected={formData.integrations}
          onChange={(value) => updateFormData({ integrations: value })}
        />
      </SectionCard>
    </div>
  );
}

function Screen3({ formData, updateFormData }: { formData: BriefFormData; updateFormData: (data: Partial<BriefFormData>) => void }) {
  const goalOptions = [
    'Automate workflows',
    'Improve customer support',
    'Increase revenue',
    'Replace manual processes',
    'Build internal AI tools',
    'Create marketing content',
    'Launch new AI product',
  ];

  const userOptions = [
    'Customers',
    'Employees',
    'Partners',
    'Internal teams',
    'Support team',
    'Developers / Engineers',
  ];

  return (
    <div className="space-y-6">
      {/* Section A - Main Goals */}
      <SectionCard
        title="Main Goals"
        description="What are you trying to achieve? (select up to 3)"
      >
        <TagSelector
          options={goalOptions}
          selected={formData.mainGoals}
          onChange={(value) => updateFormData({ mainGoals: value })}
          maxSelections={3}
        />
      </SectionCard>

      {/* Section B - Narrative Inputs */}
      <SectionCard title="Project Purpose">
        <div className="space-y-6">
          <TextField
            label="Describe your ideal outcome"
            value={formData.idealOutcome}
            onChange={(value) => updateFormData({ idealOutcome: value })}
            placeholder="What does success look like for this project?"
            multiline
            rows={4}
            required
          />

          <TextField
            label="What problem does this solve?"
            value={formData.problemSolved}
            onChange={(value) => updateFormData({ problemSolved: value })}
            placeholder="Describe the main challenge or pain point"
            multiline
            rows={4}
            required
          />

          <TextField
            label="Key features you already know you need"
            value={formData.keyFeatures}
            onChange={(value) => updateFormData({ keyFeatures: value })}
            placeholder="List any specific features or capabilities (optional)"
            multiline
            rows={3}
          />
        </div>
      </SectionCard>

      {/* Section C - Target Users */}
      <SectionCard
        title="Who will use this?"
        description="Select all user types that apply"
      >
        <TagSelector
          options={userOptions}
          selected={formData.targetUsers}
          onChange={(value) => updateFormData({ targetUsers: value })}
        />
      </SectionCard>
    </div>
  );
}

function Screen4({ formData, updateFormData }: { formData: BriefFormData; updateFormData: (data: Partial<BriefFormData>) => void }) {
  const requirementOptions = [
    'AI chat',
    'Dashboard',
    'Automation workflows',
    'CRM automation',
    'Analytics',
    'API integrations',
    'Payments',
    'Authentication',
    'Admin panel',
    'Multi-user roles',
  ];

  const timelineOptions = ['ASAP', '1-2 months', '3-6 months', 'Exploring'];

  const getUrgencyTag = () => {
    if (formData.timeline === 'ASAP') return { text: 'High Priority', color: 'bg-red-100 text-red-700' };
    if (formData.timeline === '1-2 months') return { text: 'Medium Priority', color: 'bg-orange-100 text-orange-700' };
    if (formData.timeline === '3-6 months' || formData.timeline === 'Exploring') return { text: 'Flexible Timeline', color: 'bg-blue-100 text-blue-700' };
    return null;
  };

  const urgency = getUrgencyTag();

  return (
    <div className="space-y-6">
      {/* Section A - Technical Requirements */}
      <SectionCard
        title="Technical & Functional Requirements"
        description="Select all capabilities your project needs"
      >
        <TagSelector
          options={requirementOptions}
          selected={formData.technicalRequirements}
          onChange={(value) => updateFormData({ technicalRequirements: value })}
        />
      </SectionCard>

      {/* Section B - Budget Slider */}
      <SectionCard title="Budget Range">
        <BudgetSlider
          value={formData.budget}
          onChange={(value) => updateFormData({ budget: value })}
        />
      </SectionCard>

      {/* Section C - Timeline */}
      <SectionCard title="Project Timeline">
        <PillSelector
          options={timelineOptions}
          selected={formData.timeline}
          onChange={(value) => updateFormData({ timeline: value as string })}
        />
        
        {/* Section D - Urgency Indicator */}
        {urgency && (
          <div className="mt-6 flex items-center gap-3">
            <Clock className="w-5 h-5 text-slate-400" />
            <span className={`px-4 py-2 rounded-full text-sm ${urgency.color}`} style={{ fontWeight: 600 }}>
              {urgency.text}
            </span>
          </div>
        )}
      </SectionCard>
    </div>
  );
}

function Screen5({ formData, updateFormData, goToStep }: { formData: BriefFormData; updateFormData: (data: Partial<BriefFormData>) => void; goToStep: (step: number) => void }) {
  const formatCurrency = (val: number) => {
    if (val >= 100000) return '$100K+';
    return `$${(val / 1000).toFixed(0)}K`;
  };

  return (
    <div className="space-y-6">
      {/* Company Overview */}
      <SectionCard title="Company Overview">
        <div className="space-y-4">
          <div>
            <div className="text-sm text-slate-500">Company Name</div>
            <div className="text-slate-900 mt-1" style={{ fontWeight: 600 }}>
              {formData.companyName || 'Not provided'}
            </div>
          </div>
          
          <div>
            <div className="text-sm text-slate-500">About</div>
            <div className="text-slate-900 mt-1">
              {formData.about || 'Not provided'}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-slate-500">Location</div>
              <div className="text-slate-900 mt-1">
                {formData.location || 'Not provided'}
              </div>
            </div>
            
            <div>
              <div className="text-sm text-slate-500">Team Size</div>
              <div className="text-slate-900 mt-1">
                {formData.teamSize || 'Not provided'}
              </div>
            </div>
          </div>

          {formData.industries.length > 0 && (
            <div>
              <div className="text-sm text-slate-500 mb-2">Industries</div>
              <div className="flex flex-wrap gap-2">
                {formData.industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionCard>

      {/* AI Insights */}
      {formData.aiInsights && (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-[#00334F]" />
            <h3 className="text-[#00334F]" style={{ fontWeight: 600 }}>
              AI-Detected Insights
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-slate-600">Industry: </span>
              <span className="text-slate-900" style={{ fontWeight: 600 }}>
                {formData.aiInsights.detectedIndustry}
              </span>
            </div>
            <div>
              <span className="text-slate-600">Voice: </span>
              <span className="text-slate-900" style={{ fontWeight: 600 }}>
                {formData.aiInsights.brandVoice}
              </span>
            </div>
            <div>
              <span className="text-slate-600">Audience: </span>
              <span className="text-slate-900" style={{ fontWeight: 600 }}>
                {formData.aiInsights.audienceType}
              </span>
            </div>
            <div>
              <span className="text-slate-600">Offerings: </span>
              <span className="text-slate-900" style={{ fontWeight: 600 }}>
                {formData.aiInsights.keyOfferings.join(', ')}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Services Selected */}
      {formData.selectedServices.length > 0 && (
        <SectionCard title="AI Services Selected">
          <div className="flex flex-wrap gap-2">
            {formData.selectedServices.map((service) => (
              <span
                key={service}
                className="px-4 py-2 bg-[#00334F] text-white rounded-lg text-sm"
                style={{ fontWeight: 600 }}
              >
                {service}
              </span>
            ))}
          </div>
          
          {formData.integrations.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="text-sm text-slate-500 mb-2">Integrations</div>
              <div className="flex flex-wrap gap-2">
                {formData.integrations.map((integration) => (
                  <span
                    key={integration}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          )}
        </SectionCard>
      )}

      {/* Goals & Purpose */}
      <SectionCard title="Project Goals & Purpose">
        {formData.mainGoals.length > 0 && (
          <div className="mb-4">
            <div className="text-sm text-slate-500 mb-2">Main Goals</div>
            <div className="flex flex-wrap gap-2">
              {formData.mainGoals.map((goal) => (
                <span
                  key={goal}
                  className="px-3 py-1 bg-[#FF6B2C] text-white rounded-lg text-sm"
                  style={{ fontWeight: 600 }}
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        )}

        {formData.idealOutcome && (
          <div className="mb-4">
            <div className="text-sm text-slate-500">Ideal Outcome</div>
            <div className="text-slate-900 mt-1">{formData.idealOutcome}</div>
          </div>
        )}

        {formData.problemSolved && (
          <div className="mb-4">
            <div className="text-sm text-slate-500">Problem to Solve</div>
            <div className="text-slate-900 mt-1">{formData.problemSolved}</div>
          </div>
        )}

        {formData.targetUsers.length > 0 && (
          <div>
            <div className="text-sm text-slate-500 mb-2">Target Users</div>
            <div className="flex flex-wrap gap-2">
              {formData.targetUsers.map((user) => (
                <span
                  key={user}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs"
                >
                  {user}
                </span>
              ))}
            </div>
          </div>
        )}
      </SectionCard>

      {/* Requirements & Budget */}
      <SectionCard title="Requirements & Budget">
        {formData.technicalRequirements.length > 0 && (
          <div className="mb-4">
            <div className="text-sm text-slate-500 mb-2">Technical Requirements</div>
            <div className="flex flex-wrap gap-2">
              {formData.technicalRequirements.map((req) => (
                <span
                  key={req}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="text-sm text-slate-500 mb-1">Budget</div>
            <div className="text-[#00334F] text-[24px]" style={{ fontWeight: 700 }}>
              {formatCurrency(formData.budget)}
            </div>
          </div>

          {formData.timeline && (
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="text-sm text-slate-500 mb-1">Timeline</div>
              <div className="text-[#00334F] text-[24px]" style={{ fontWeight: 700 }}>
                {formData.timeline}
              </div>
            </div>
          )}
        </div>
      </SectionCard>

      {/* Footer */}
      <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border-2 border-slate-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#FF6B2C] flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-slate-900 mb-2" style={{ fontWeight: 600 }}>
              Ready to Generate Your Proposal
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              AI will generate a detailed proposal including scope, deliverables, timeline, tech stack, and project plan tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}