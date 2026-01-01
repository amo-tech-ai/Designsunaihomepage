'use client';

import { Database, Brain, Users, Layers } from 'lucide-react';

interface ArchitectureBlueprintProps {
  architecture: {
    database_tables?: Array<{ name: string; description: string; fields_count: number }>;
    auth_type?: string;
    recommended_agents?: Array<{ name: string; purpose: string }>;
    complexity_score?: number;
    complexity_label?: string;
    estimated_weeks?: { min: number; max: number };
    team_composition?: Array<{ role: string; allocation: number }>;
    team_size?: string;
  } | null;
  appType?: string;
  industry?: string;
  buildTypes?: string[];
}

export default function ArchitectureBlueprint({ 
  architecture, 
  appType, 
  industry,
  buildTypes 
}: ArchitectureBlueprintProps) {
  // Show initial state if no architecture generated yet
  const showInitialState = !architecture;

  const getComplexityColor = (score: number = 0) => {
    if (score < 2.5) return 'bg-emerald-500';
    if (score < 4) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const getComplexityWidth = (score: number = 0) => {
    return `${(score / 5) * 100}%`;
  };

  return (
    <div className="bg-white rounded-[40px] p-8 border border-zinc-200 shadow-sm sticky top-24">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-indigo-500" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-500">
              Live Architecture Blueprint
            </h3>
          </div>
          {buildTypes && buildTypes.length > 0 && industry && (
            <p className="text-sm text-zinc-600 font-light">
              Personalized for your business
            </p>
          )}
        </div>
      </div>

      {showInitialState ? (
        /* Initial State */
        <>
          {/* Client Experience */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Client Experience
            </p>
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="text-sm font-medium text-zinc-900 mb-1">Web application</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                A modern app your users will access on desktop and mobile
              </p>
            </div>
          </div>

          {/* System Foundation */}
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

          {/* Project Scope */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Project Scope
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-600">Estimated Complexity</span>
                <span className="text-sm font-medium text-zinc-900">Low</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-600">Estimated Team Size</span>
                <span className="text-sm font-medium text-zinc-900">1–2 people</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Dynamic State */
        <>
          {/* Client Experience */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Client Experience
            </p>
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="text-sm font-medium text-zinc-900 mb-1">
                {buildTypes?.includes('dashboard') && buildTypes?.includes('chatbot')
                  ? 'Dashboard & chat experience for users'
                  : buildTypes?.includes('dashboard')
                  ? 'Dashboard application'
                  : buildTypes?.includes('chatbot')
                  ? 'Chat assistant interface'
                  : 'Custom interface'}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Accessible on desktop and mobile devices
              </p>
            </div>
          </div>

          {/* Intelligence Layer */}
          {architecture.recommended_agents && architecture.recommended_agents.length > 0 && (
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                Intelligence Layer
              </p>
              <div className="space-y-2">
                {architecture.recommended_agents.map((agent, index) => (
                  <div key={index} className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Brain className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-900">{agent.name}</span>
                    </div>
                    <p className="text-xs text-indigo-600 leading-relaxed">{agent.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Automations */}
          {buildTypes?.includes('automation') && (
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                Automations
              </p>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <h4 className="text-sm font-medium text-emerald-900 mb-1">
                  Background workflows
                </h4>
                <p className="text-xs text-emerald-600 leading-relaxed">
                  Automated tasks that save time and reduce manual work
                </p>
              </div>
            </div>
          )}

          {/* Data & Security */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Data & Security
            </p>
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="text-sm font-medium text-zinc-900 mb-1">
                {architecture.auth_type || 'Secure data storage'}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {architecture.database_tables && architecture.database_tables.length > 0
                  ? `${architecture.database_tables.length} data tables managed securely`
                  : 'Information stored with encryption'}
              </p>
            </div>
          </div>

          {/* Project Scope */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Project Scope
            </p>
            <div className="space-y-4">
              {/* Complexity */}
              {architecture.complexity_score && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-600">Estimated Complexity</span>
                    <span className="text-sm font-medium text-zinc-900">
                      {architecture.complexity_label}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getComplexityColor(architecture.complexity_score)} transition-all duration-500`}
                      style={{ width: getComplexityWidth(architecture.complexity_score) }}
                    />
                  </div>
                </div>
              )}

              {/* Team Size */}
              {architecture.team_size && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600">Estimated Team Size</span>
                  <span className="text-sm font-medium text-zinc-900">{architecture.team_size}</span>
                </div>
              )}
            </div>
          </div>

          {/* Micro-copy */}
          <div className="mt-6 pt-6 border-t border-zinc-200">
            <p className="text-xs text-zinc-400 italic text-center">
              This is a living blueprint — it updates as you make decisions
            </p>
          </div>
        </>
      )}
    </div>
  );
}