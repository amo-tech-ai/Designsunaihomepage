'use client';

import { Layers, Sparkles, Brain, Zap, Database, Image, Video, FileText } from 'lucide-react';

interface LiveBlueprintProps {
  screen: number;
  data: {
    companyName?: string;
    buildTypes?: string[];
    industry?: string;
    projectDescription?: string;
    aiServices?: string[];
    generativeAI?: string[];
    businessOutcomes?: string[];
  };
}

export default function LiveBlueprint({ screen, data }: LiveBlueprintProps) {
  const hasData = data.buildTypes && data.buildTypes.length > 0;

  // Calculate complexity based on selections
  const calculateComplexity = () => {
    if (!hasData) return { label: 'Low', value: 1 };
    
    let complexity = 2;
    if (data.buildTypes?.includes('dashboard')) complexity += 1;
    if (data.buildTypes?.includes('chatbot')) complexity += 0.5;
    if (data.buildTypes?.includes('automation')) complexity += 0.5;
    if (data.buildTypes?.includes('strategy')) complexity += 0.5;
    
    if (complexity < 2.5) return { label: 'Low', value: 1 };
    if (complexity < 3.5) return { label: 'Medium', value: 2 };
    return { label: 'Medium-High', value: 3 };
  };

  const calculateTeamSize = () => {
    if (!hasData) return '1–2 people';
    const complexity = calculateComplexity().value;
    if (complexity === 1) return '1–2 people';
    if (complexity === 2) return '2–3 people';
    return '3–5 people';
  };

  const getClientExperience = () => {
    if (!hasData) return {
      label: 'Web application',
      description: 'A modern app your users will access on desktop and mobile'
    };

    const types = data.buildTypes || [];
    if (types.includes('dashboard') && types.includes('chatbot')) {
      return {
        label: 'Dashboard and chat interface for users',
        description: 'Accessible on desktop and mobile devices'
      };
    }
    if (types.includes('dashboard')) {
      return {
        label: 'Dashboard application',
        description: 'Web-based interface for users to manage data'
      };
    }
    if (types.includes('chatbot')) {
      return {
        label: 'Chat assistant interface',
        description: 'Conversational interface for user interactions'
      };
    }
    return {
      label: 'Custom interface',
      description: 'Tailored to your specific needs'
    };
  };

  const getIntelligenceLayer = () => {
    if (!hasData || !data.buildTypes) return null;

    const features = [];
    if (data.buildTypes.includes('chatbot')) {
      features.push('AI that understands input and takes actions');
    }
    if (data.buildTypes.includes('strategy')) {
      features.push('AI that generates plans and execution guidance');
    }
    if (data.buildTypes.includes('automation')) {
      features.push('AI that optimizes workflows');
    }

    if (features.length === 0) return null;

    return {
      label: 'Intelligence Layer',
      description: features.join(', ')
    };
  };

  const getAutomations = () => {
    if (!hasData || !data.buildTypes?.includes('automation')) return null;
    return {
      label: 'Automations',
      description: 'Background workflows that reduce manual work'
    };
  };

  // NEW: Get AI Agent Layer based on Screen 3 selections
  const getAIAgentLayer = () => {
    if (!data.aiServices || data.aiServices.length === 0) return null;

    const agents = [];
    if (data.aiServices.includes('planning')) agents.push('Planning Agent');
    if (data.aiServices.includes('agents')) agents.push('Task Execution Agent');
    if (data.aiServices.includes('automation')) agents.push('Automation Agent');
    if (data.aiServices.includes('intelligence')) agents.push('Analysis Agent');

    if (agents.length === 0) return null;

    return {
      label: 'AI Agent Layer',
      agents: agents,
      description: agents.length > 0 ? agents.join(', ') : null,
    };
  };

  // NEW: Get Intelligence & Reasoning
  const getIntelligenceReasoning = () => {
    if (!data.aiServices || data.aiServices.length === 0) return null;

    const capabilities = [];
    if (data.aiServices.includes('planning')) capabilities.push('Strategic planning');
    if (data.aiServices.includes('agents')) capabilities.push('Task coordination');
    if (data.aiServices.includes('intelligence')) capabilities.push('Context understanding');
    if (data.aiServices.includes('automation')) capabilities.push('Decision logic');

    if (capabilities.length === 0) return null;

    return {
      label: 'Intelligence & Reasoning',
      description: capabilities.join(', '),
    };
  };

  // NEW: Get Generative AI Capabilities
  const getGenerativeAI = () => {
    if (!data.generativeAI || data.generativeAI.length === 0) return null;

    const capabilities = [];
    if (data.generativeAI.includes('images')) capabilities.push('Image generation');
    if (data.generativeAI.includes('video')) capabilities.push('Video creation');
    if (data.generativeAI.includes('copy')) capabilities.push('Content writing');

    return {
      label: 'Generative AI',
      capabilities: capabilities,
      description: capabilities.join(', '),
    };
  };

  // NEW: Get Automation Engine
  const getAutomationEngine = () => {
    if (!data.aiServices?.includes('automation')) return null;

    return {
      label: 'Automation Engine',
      description: 'Triggers, workflows, background execution',
    };
  };

  const getPrimaryFocus = () => {
    if (!data.businessOutcomes || data.businessOutcomes.length === 0) return null;

    if (data.businessOutcomes.includes('Save time through automation')) {
      return 'Operations & automation-focused system';
    }
    if (data.businessOutcomes.includes('Increase revenue')) {
      return 'Revenue & growth-focused system';
    }
    if (data.businessOutcomes.includes('Launch a new product or MVP')) {
      return 'MVP & product launch system';
    }
    return 'Multi-purpose business system';
  };

  const getSuggestedWorkflows = () => {
    if (!data.businessOutcomes || data.businessOutcomes.length === 0) return null;

    const workflows = [];
    if (data.buildTypes?.includes('chatbot')) {
      workflows.push('User input → AI plan → task creation');
    }
    if (data.buildTypes?.includes('automation')) {
      workflows.push('Trigger → automation → notification');
    }
    if (data.buildTypes?.includes('strategy')) {
      workflows.push('Request → AI analysis → recommendation');
    }

    return workflows.length > 0 ? workflows : null;
  };

  const complexity = calculateComplexity();
  const teamSize = calculateTeamSize();
  const clientExperience = getClientExperience();
  const intelligenceLayer = getIntelligenceLayer();
  const automations = getAutomations();
  const primaryFocus = getPrimaryFocus();
  const suggestedWorkflows = getSuggestedWorkflows();
  
  // NEW: Get AI-specific sections (Screen 3+)
  const aiAgentLayer = getAIAgentLayer();
  const intelligenceReasoning = getIntelligenceReasoning();
  const generativeAI = getGenerativeAI();
  const automationEngine = getAutomationEngine();

  // On Screen 4, show finalized state
  const isFinal = screen === 4;

  return (
    <div className="bg-white rounded-[40px] p-8 border border-zinc-200 shadow-sm sticky top-24">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="w-5 h-5 text-indigo-500" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-500">
            {isFinal ? 'Final Architecture Blueprint' : 'Live Architecture Blueprint'}
          </h3>
        </div>
        {data.companyName && (
          <p className="text-sm text-zinc-600 font-light">
            {isFinal ? 'Finalized for' : 'Personalized for'} {data.companyName}
          </p>
        )}
      </div>

      {/* Client Experience */}
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
          Client Experience
        </p>
        <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
          <h4 className="text-sm font-medium text-zinc-900 mb-1">{clientExperience.label}</h4>
          <p className="text-xs text-zinc-500 leading-relaxed">{clientExperience.description}</p>
        </div>
      </div>

      {/* AI Agent Layer (Screen 3+) */}
      {(screen >= 3) && aiAgentLayer && (
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            <Brain className="w-3 h-3 inline mr-1" />
            AI Agent Layer
          </p>
          <div className="p-4 rounded-2xl bg-violet-50 border border-violet-200">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {aiAgentLayer.agents.map((agent, index) => (
                <span key={index} className="text-xs px-2 py-1 rounded-full bg-violet-100 text-violet-700 border border-violet-200">
                  {agent}
                </span>
              ))}
            </div>
            <p className="text-xs text-violet-600 leading-relaxed">
              Specialized AI agents performing tasks autonomously
            </p>
          </div>
        </div>
      )}

      {/* Intelligence & Reasoning (Screen 3+) */}
      {(screen >= 3) && intelligenceReasoning && (
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            <Sparkles className="w-3 h-3 inline mr-1" />
            Intelligence & Reasoning
          </p>
          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
            <p className="text-xs text-indigo-700 leading-relaxed">
              {intelligenceReasoning.description}
            </p>
          </div>
        </div>
      )}

      {/* Generative AI (Screen 3+) */}
      {(screen >= 3) && generativeAI && (
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            <Sparkles className="w-3 h-3 inline mr-1" />
            Generative AI
          </p>
          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {generativeAI.capabilities.map((cap, index) => (
                <span key={index} className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                  {cap}
                </span>
              ))}
            </div>
            <p className="text-xs text-purple-600 leading-relaxed">
              AI-powered content generation capabilities
            </p>
          </div>
        </div>
      )}

      {/* Automation Engine (Screen 3+) */}
      {(screen >= 3) && automationEngine && (
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            <Zap className="w-3 h-3 inline mr-1" />
            Automation Engine
          </p>
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <p className="text-xs text-emerald-700 leading-relaxed">
              {automationEngine.description}
            </p>
          </div>
        </div>
      )}

      {/* Primary Focus (only on Screen 3) */}
      {screen === 3 && primaryFocus && (
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            Primary Focus
          </p>
          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
            <p className="text-sm font-medium text-indigo-900">{primaryFocus}</p>
          </div>
        </div>
      )}

      {/* Intelligence Layer */}
      {intelligenceLayer && (
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            {screen === 3 ? 'Intelligence Usage' : 'Intelligence Layer'}
          </p>
          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-indigo-600 leading-relaxed">{intelligenceLayer.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Automations */}
      {automations && (
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            Automations
          </p>
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <p className="text-xs text-emerald-600 leading-relaxed">{automations.description}</p>
          </div>
        </div>
      )}

      {/* Suggested Workflows (only on Screen 3) */}
      {screen === 3 && suggestedWorkflows && (
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            Suggested Workflows
            <span className="text-[10px] text-zinc-400 font-normal ml-1">(Preview)</span>
          </p>
          <div className="space-y-2">
            {suggestedWorkflows.map((workflow, index) => (
              <div key={index} className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <p className="text-xs text-zinc-600 font-mono">{workflow}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* System Foundation (only if no data) */}
      {!hasData && (
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            System Foundation
          </p>
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <h4 className="text-sm font-medium text-zinc-900 mb-1">Secure data & user accounts</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Your information and users are safely stored and managed
            </p>
          </div>
        </div>
      )}

      {/* Data & Security (only if has data) */}
      {hasData && (
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            Data & Security
          </p>
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <h4 className="text-sm font-medium text-zinc-900 mb-1">
              {data.buildTypes?.includes('dashboard') 
                ? 'User accounts, permissions, and stored data'
                : 'Secure data storage'}
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Information encrypted and managed securely
            </p>
          </div>
        </div>
      )}

      {/* Project Scope */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
          Project Scope
        </p>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-600">Estimated Complexity</span>
            <span className="text-sm font-medium text-zinc-900">{complexity.label}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-600">Estimated Team Size</span>
            <span className="text-sm font-medium text-zinc-900">{teamSize}</span>
          </div>
        </div>
      </div>

      {/* Micro-copy */}
      <div className="mt-6 pt-6 border-t border-zinc-200">
        <p className="text-xs text-zinc-400 italic text-center">
          {screen === 3 
            ? 'Your goals guide how the system is optimized'
            : screen === 2 && hasData
            ? 'This blueprint updates as your system becomes clearer'
            : 'This blueprint updates as you make decisions'}
        </p>
      </div>
    </div>
  );
}