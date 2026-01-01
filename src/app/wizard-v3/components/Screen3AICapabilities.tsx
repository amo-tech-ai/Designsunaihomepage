'use client';

import { Check, Brain, Workflow, Zap, Database, Image, Video, FileText, TrendingUp } from 'lucide-react';

interface Screen3Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const AI_CORE_SERVICES = [
  {
    id: 'planning',
    icon: Brain,
    title: 'AI Planning & Decision Support',
    description: 'AI that analyzes information, creates plans, and recommends next actions.',
    example: 'Generate roadmaps, PRDs, execution plans, or strategies.',
  },
  {
    id: 'agents',
    icon: Workflow,
    title: 'AI Agents & Autonomous Workflows',
    description: 'Specialized AI agents that perform tasks independently.',
    example: 'Planner agent, analyst agent, operations agent.',
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'AI Automation (Hands-Off Execution)',
    description: 'AI-triggered workflows that run without manual input.',
    example: 'Lead intake → analysis → task creation.',
  },
  {
    id: 'intelligence',
    icon: Database,
    title: 'AI Knowledge & Intelligence Layer',
    description: 'AI that understands documents, data, and context.',
    example: 'Search internal knowledge, analyze reports, answer questions.',
  },
];

const GENERATIVE_AI_SERVICES = [
  {
    id: 'images',
    icon: Image,
    title: 'AI-Generated Images',
    description: 'Generate on-brand visuals automatically.',
    example: 'Product images, campaign visuals, concept art.',
  },
  {
    id: 'video',
    icon: Video,
    title: 'AI-Generated Video',
    description: 'Create short-form or presentation videos.',
    example: 'Promo clips, explainers, social content.',
  },
  {
    id: 'copy',
    icon: FileText,
    title: 'AI Copy & Messaging',
    description: 'Generate written content aligned to your brand.',
    example: 'Marketing copy, emails, captions, reports.',
  },
];

const BUSINESS_OUTCOMES = [
  'Increase revenue',
  'Reduce operational cost',
  'Save time through automation',
  'Improve customer experience',
  'Launch faster',
  'Scale without hiring',
  'Improve decision-making',
];

export default function Screen3AICapabilities({ data, updateData, onNext, onBack }: Screen3Props) {
  const selectedAIServices = data.aiServices || [];
  const selectedGenerative = data.generativeAI || [];
  const selectedOutcomes = data.businessOutcomes || [];

  const toggleAIService = (serviceId: string) => {
    const newServices = selectedAIServices.includes(serviceId)
      ? selectedAIServices.filter((s: string) => s !== serviceId)
      : [...selectedAIServices, serviceId];
    updateData({ aiServices: newServices });
  };

  const toggleGenerative = (serviceId: string) => {
    const newServices = selectedGenerative.includes(serviceId)
      ? selectedGenerative.filter((s: string) => s !== serviceId)
      : [...selectedGenerative, serviceId];
    updateData({ generativeAI: newServices });
  };

  const toggleOutcome = (outcome: string) => {
    const newOutcomes = selectedOutcomes.includes(outcome)
      ? selectedOutcomes.filter((o: string) => o !== outcome)
      : [...selectedOutcomes, outcome];
    updateData({ businessOutcomes: newOutcomes });
  };

  const totalSelections = selectedAIServices.length + selectedGenerative.length;
  const canProceed = totalSelections >= 2;
  const isRecommended = totalSelections >= 2 && totalSelections <= 5;

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      {/* Header */}
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-3">
        What should AI actively do for your business?
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-2">
        Select the AI capabilities you want us to design and build. This defines the intelligence of your system.
      </p>
      <p className="text-xs text-zinc-500 mb-8">
        Choose 2–5. You can refine later.
      </p>

      {/* Selection Counter */}
      <div className="mb-8 p-4 rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-between">
        <p className="text-sm text-zinc-700">
          <span className="font-medium">{totalSelections}</span> AI capabilities selected
        </p>
        <span className={`text-xs px-3 py-1 rounded-full transition-colors duration-200 ${
          isRecommended
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            : totalSelections < 2
            ? 'bg-zinc-100 text-zinc-500'
            : 'bg-amber-50 text-amber-700 border border-amber-200'
        }`}>
          {isRecommended
            ? '✓ Ideal range'
            : totalSelections < 2
            ? 'Select at least 2'
            : 'Consider narrowing focus'}
        </span>
      </div>

      {/* Section 1: Core AI Services */}
      <div className="mb-10">
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">
            Core AI Services
          </p>
        </div>

        <div className="grid gap-4">
          {AI_CORE_SERVICES.map((service) => {
            const isSelected = selectedAIServices.includes(service.id);
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                onClick={() => toggleAIService(service.id)}
                className={`
                  relative p-6 rounded-2xl border-2 text-left transition-all duration-200
                  ${isSelected
                    ? 'bg-indigo-50 border-indigo-500 shadow-sm'
                    : 'bg-white border-zinc-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                  }
                `}
              >
                {/* Selection Indicator */}
                <div className={`
                  absolute top-4 right-4 w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center
                  ${isSelected
                    ? 'bg-indigo-500 border-indigo-500'
                    : 'bg-white border-zinc-300'
                  }
                `}>
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>

                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200
                  ${isSelected ? 'bg-indigo-100' : 'bg-zinc-100'}
                `}>
                  <Icon className={`w-6 h-6 ${isSelected ? 'text-indigo-600' : 'text-zinc-600'}`} />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-zinc-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-600 mb-3 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-xs text-zinc-500 italic">
                  Example: {service.example}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 2: Generative AI Services */}
      <div className="mb-10">
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">
            Do you want AI to generate content?
          </p>
          <p className="text-xs text-zinc-500">
            Optional — select only if content generation is a core need.
          </p>
        </div>

        <div className="grid gap-4">
          {GENERATIVE_AI_SERVICES.map((service) => {
            const isSelected = selectedGenerative.includes(service.id);
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                onClick={() => toggleGenerative(service.id)}
                className={`
                  relative p-6 rounded-2xl border-2 text-left transition-all duration-200
                  ${isSelected
                    ? 'bg-purple-50 border-purple-500 shadow-sm'
                    : 'bg-white border-zinc-200 hover:border-purple-300 hover:bg-purple-50/50'
                  }
                `}
              >
                {/* Selection Indicator */}
                <div className={`
                  absolute top-4 right-4 w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center
                  ${isSelected
                    ? 'bg-purple-500 border-purple-500'
                    : 'bg-white border-zinc-300'
                  }
                `}>
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>

                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200
                  ${isSelected ? 'bg-purple-100' : 'bg-zinc-100'}
                `}>
                  <Icon className={`w-6 h-6 ${isSelected ? 'text-purple-600' : 'text-zinc-600'}`} />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-zinc-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-600 mb-3 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-xs text-zinc-500 italic">
                  Example: {service.example}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 3: Business Outcomes */}
      <div className="mb-8">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-zinc-400" />
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              What business outcomes matter most?
            </p>
          </div>
          <p className="text-xs text-zinc-500 ml-6">
            Select 2–3 to help us measure success.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {BUSINESS_OUTCOMES.map((outcome) => {
            const isSelected = selectedOutcomes.includes(outcome);

            return (
              <button
                key={outcome}
                onClick={() => toggleOutcome(outcome)}
                className={`
                  px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                  ${isSelected
                    ? 'bg-emerald-500 text-white border-2 border-emerald-500 shadow-sm'
                    : 'bg-white text-zinc-700 border-2 border-zinc-200 hover:border-emerald-300 hover:bg-emerald-50'
                  }
                `}
              >
                {isSelected && <span className="mr-2">✓</span>}
                {outcome}
              </button>
            );
          })}
        </div>
      </div>

      {/* Guidance Message */}
      {totalSelections > 0 && (
        <div className={`p-4 rounded-2xl border mb-8 transition-all duration-300 ${
          isRecommended
            ? 'bg-emerald-50 border-emerald-200'
            : totalSelections > 5
            ? 'bg-amber-50 border-amber-200'
            : 'bg-zinc-50 border-zinc-200'
        }`}>
          <p className={`text-sm ${
            isRecommended
              ? 'text-emerald-800'
              : totalSelections > 5
              ? 'text-amber-800'
              : 'text-zinc-700'
          }`}>
            {isRecommended
              ? '✓ Perfect! This scope will create a focused, high-impact AI system.'
              : totalSelections > 5
              ? '⚠️ Consider focusing on 2–5 core capabilities for better results.'
              : totalSelections === 1
              ? 'Add 1–4 more capabilities to build a complete AI system.'
              : 'Almost there — add a few more capabilities to complete your system.'}
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="
            text-zinc-600 hover:text-zinc-900 rounded-full px-6 py-3 h-12 
            text-sm font-medium transition-all duration-200
          "
        >
          Back
        </button>
        <div className="flex items-center gap-4">
          <p className="text-xs text-zinc-400">
            You're defining capabilities — not committing to scope yet.
          </p>
          <button
            onClick={onNext}
            disabled={!canProceed}
            className="
              bg-black text-white rounded-full px-8 py-3 h-12 
              text-sm font-medium transition-all duration-200 
              hover:bg-zinc-900 shadow-sm 
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
