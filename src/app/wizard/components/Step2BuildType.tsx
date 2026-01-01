'use client';

import { useState } from 'react';
import { LayoutDashboard, MessageSquare, Workflow, FileText, Sparkles } from 'lucide-react';

interface Step2Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const BUILD_TYPES = [
  {
    id: 'dashboard',
    name: 'AI Dashboard App',
    description: 'A logged-in app with pages, data, and AI features',
    icon: LayoutDashboard,
  },
  {
    id: 'chatbot',
    name: 'AI Chat Assistant',
    description: 'A conversational assistant that answers questions and takes actions',
    icon: MessageSquare,
  },
  {
    id: 'automation',
    name: 'Automations & Workflows',
    description: 'Background processes that run automatically',
    icon: Workflow,
  },
  {
    id: 'strategy',
    name: 'Strategy & Planning System',
    description: 'Plans, PRDs, audits, and execution guidance',
    icon: FileText,
  },
];

const INDUSTRIES = [
  'Startups',
  'Agencies & Consulting',
  'Fashion & Luxury',
  'Real Estate',
  'Travel & Hospitality',
  'E-commerce & Retail',
  'Media & Creators',
  'Education / Coaching',
  'Other',
];

export default function Step2BuildType({ data, updateData, onNext, onBack }: Step2Props) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(data.industry === 'Other');

  const selectedBuildTypes = data.buildTypes || [];

  const toggleBuildType = (typeId: string) => {
    const newTypes = selectedBuildTypes.includes(typeId)
      ? selectedBuildTypes.filter((t: string) => t !== typeId)
      : [...selectedBuildTypes, typeId];
    updateData({ buildTypes: newTypes });
  };

  const handleIndustrySelect = async (industry: string) => {
    if (industry === 'Other') {
      setShowOtherInput(true);
      updateData({ industry });
    } else {
      setShowOtherInput(false);
      updateData({ industry, industryOther: '' });
      
      // Simulate Architecture Generator AI
      if (selectedBuildTypes.length > 0) {
        setIsGenerating(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Generate architecture based on selections
        const architecture = generateArchitecture(selectedBuildTypes, industry);
        updateData({ architecture });
        setIsGenerating(false);
      }
    }
  };

  const canProceed = selectedBuildTypes.length > 0 && data.industry && !isGenerating;

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      {/* Section 1: Type of Build */}
      <div className="mb-10">
        <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
          What are you looking to build?
        </h2>
        <p className="text-sm font-light text-zinc-600 mb-6">
          Choose what best describes the system you want. You can select more than one.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BUILD_TYPES.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedBuildTypes.includes(type.id);

            return (
              <button
                key={type.id}
                onClick={() => toggleBuildType(type.id)}
                className={`
                  group relative p-6 rounded-3xl border-2 text-left transition-all duration-200
                  ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-zinc-200 hover:border-indigo-300 hover:bg-zinc-50'
                  }
                `}
              >
                <div
                  className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-200
                    ${isSelected ? 'bg-indigo-500' : 'bg-zinc-100 group-hover:bg-indigo-100'}
                  `}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isSelected ? 'text-white' : 'text-zinc-600 group-hover:text-indigo-600'
                    }`}
                  />
                </div>

                <h3
                  className={`text-base font-medium mb-2 ${
                    isSelected ? 'text-indigo-900' : 'text-zinc-900'
                  }`}
                >
                  {type.name}
                </h3>

                <p className="text-xs text-zinc-500 leading-relaxed">{type.description}</p>

                {/* Checkbox indicator */}
                {isSelected && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-200 my-10"></div>

      {/* Section 2: Industry */}
      <div className="mb-8">
        <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
          Which industry is this for?
        </h2>
        <p className="text-sm font-light text-zinc-600 mb-6">
          This helps us tailor workflows and AI recommendations
        </p>

        {/* Generating Architecture Loading */}
        {isGenerating && (
          <div className="mb-6 flex items-center justify-center p-4 bg-indigo-50 rounded-2xl border border-indigo-200">
            <Sparkles className="w-5 h-5 text-indigo-500 mr-2 animate-pulse" />
            <span className="text-sm font-medium text-indigo-700">
              Generating your architecture blueprint...
            </span>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {INDUSTRIES.map((industry) => {
            const isSelected = data.industry === industry;

            return (
              <button
                key={industry}
                onClick={() => handleIndustrySelect(industry)}
                disabled={isGenerating}
                className={`
                  p-4 rounded-2xl border-2 text-sm font-medium text-center transition-all duration-200
                  ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                      : 'border-zinc-200 text-zinc-700 hover:border-indigo-300 hover:bg-zinc-50'
                  }
                  ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {industry}
              </button>
            );
          })}
        </div>

        {/* Other Industry Input */}
        {showOtherInput && (
          <div className="mt-4">
            <input
              type="text"
              value={data.industryOther || ''}
              onChange={(e) => updateData({ industryOther: e.target.value })}
              placeholder="Please specify your industry"
              className="
                w-full rounded-2xl px-6 py-4 text-sm
                border border-zinc-200 transition-all duration-200
                focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
              "
            />
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          disabled={isGenerating}
          className="text-zinc-600 hover:text-zinc-900 rounded-full px-6 py-3 h-12 text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <div className="flex items-center gap-4">
          <p className="text-xs text-zinc-400">You can change this later</p>
          <button
            onClick={onNext}
            disabled={!canProceed}
            className="bg-black text-white rounded-full px-8 py-3 h-12 text-sm font-medium transition-all duration-200 hover:bg-zinc-900 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper function to generate architecture based on selections
function generateArchitecture(buildTypes: string[], industry: string) {
  const hasDashboard = buildTypes.includes('dashboard');
  const hasChatbot = buildTypes.includes('chatbot');
  const hasAutomation = buildTypes.includes('automation');
  const hasStrategy = buildTypes.includes('strategy');

  const tables = [];
  const agents = [];
  let complexity = 2;

  // Add tables based on build types
  if (hasDashboard) {
    tables.push(
      { name: 'users', description: 'User accounts and permissions', fields_count: 10 },
      { name: 'data', description: 'Core business data', fields_count: 15 }
    );
    complexity += 1;
  }

  if (hasChatbot) {
    tables.push(
      { name: 'conversations', description: 'Chat history and context', fields_count: 8 }
    );
    agents.push({
      name: 'Chat Assistant',
      purpose: 'Answers questions and takes actions based on conversation',
    });
    complexity += 0.5;
  }

  if (hasAutomation) {
    tables.push({ name: 'workflows', description: 'Automated process definitions', fields_count: 12 });
    agents.push({
      name: 'Workflow Engine',
      purpose: 'Executes automated tasks in the background',
    });
    complexity += 0.5;
  }

  if (hasStrategy) {
    agents.push({
      name: 'Strategy Planner',
      purpose: 'Generates plans, PRDs, and execution roadmaps',
    });
    complexity += 0.5;
  }

  // Industry-specific adjustments
  if (industry === 'Real Estate') {
    tables.push({ name: 'properties', description: 'Property listings and details', fields_count: 18 });
  } else if (industry === 'E-commerce & Retail') {
    tables.push({ name: 'products', description: 'Product catalog', fields_count: 20 });
  }

  const complexityLabel =
    complexity < 2.5 ? 'Low' : complexity < 3.5 ? 'Medium' : complexity < 4.5 ? 'Medium-High' : 'High';

  const teamSize = complexity < 3 ? '1–2 people' : complexity < 4 ? '2–3 people' : '3–4 people';

  return {
    database_tables: tables.slice(0, 5), // Max 5 tables to show
    auth_type: hasDashboard ? 'User accounts with roles' : 'No authentication needed',
    recommended_agents: agents,
    complexity_score: complexity,
    complexity_label: complexityLabel,
    estimated_weeks: {
      min: Math.ceil(complexity * 2),
      max: Math.ceil(complexity * 3),
    },
    team_composition: [
      { role: 'Product Designer', allocation: 50 },
      { role: 'Full-Stack Developer', allocation: 100 },
      ...(agents.length > 0 ? [{ role: 'AI Engineer', allocation: 75 }] : []),
    ],
    team_size: teamSize,
  };
}
