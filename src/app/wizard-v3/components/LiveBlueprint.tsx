'use client';

import { Layers, Sparkles } from 'lucide-react';

interface LiveBlueprintProps {
  screen: number;
  data: {
    companyName?: string;
    buildTypes?: string[];
    industry?: string;
    projectDescription?: string;
    goals?: string[];
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

  const getPrimaryFocus = () => {
    if (!data.goals || data.goals.length === 0) return null;

    if (data.goals.includes('Save time through automation')) {
      return 'Operations & automation-focused system';
    }
    if (data.goals.includes('Increase revenue')) {
      return 'Revenue & growth-focused system';
    }
    if (data.goals.includes('Launch a new product or MVP')) {
      return 'MVP & product launch system';
    }
    return 'Multi-purpose business system';
  };

  const getSuggestedWorkflows = () => {
    if (!data.goals || data.goals.length === 0) return null;

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

  return (
    <div className="bg-white rounded-[40px] p-8 border border-zinc-200 shadow-sm sticky top-24">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="w-5 h-5 text-indigo-500" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-500">
            Live Architecture Blueprint
          </h3>
        </div>
        {data.companyName && (
          <p className="text-sm text-zinc-600 font-light">
            Personalized for {data.companyName}
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
