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
  } | null;
  appType?: string;
  industry?: string;
}

export default function ArchitectureBlueprint({ 
  architecture, 
  appType, 
  industry 
}: ArchitectureBlueprintProps) {
  if (!architecture) {
    return null;
  }

  const getComplexityColor = (score: number = 0) => {
    if (score < 2) return 'bg-emerald-500';
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
          {appType && industry && (
            <p className="text-sm text-zinc-600 font-light">
              {appType.replace('-', ' ')} for {industry}
            </p>
          )}
        </div>
      </div>

      {/* Client Layer */}
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
          Client Layer
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded bg-black flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              <span className="text-sm font-medium text-zinc-900">Next.js 14</span>
            </div>
            <p className="text-xs text-zinc-500">React framework</p>
          </div>
          <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded bg-zinc-700 flex items-center justify-center">
                <span className="text-white text-xs">📱</span>
              </div>
              <span className="text-sm font-medium text-zinc-900">Responsive</span>
            </div>
            <p className="text-xs text-zinc-500">Mobile first</p>
          </div>
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

      {/* Infrastructure */}
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
          Infrastructure
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-2 mb-1">
              <Database className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-900">Supabase</span>
            </div>
            <p className="text-xs text-emerald-600">PostgreSQL + Auth</p>
          </div>
          <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="flex items-center gap-2 mb-1">
              <Layers className="w-4 h-4 text-zinc-600" />
              <span className="text-sm font-medium text-zinc-900">Edge Functions</span>
            </div>
            <p className="text-xs text-zinc-500">Serverless APIs</p>
          </div>
        </div>
      </div>

      {/* Complexity */}
      {architecture.complexity_score && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Est. Complexity
            </p>
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
      {architecture.team_composition && architecture.team_composition.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Est. Team Size
            </p>
            <span className="text-sm font-medium text-zinc-900">
              {architecture.team_composition.length} {architecture.team_composition.length === 1 ? 'Engineer' : 'Engineers'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {architecture.team_composition.map((member, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center"
                title={`${member.role} (${member.allocation}%)`}
              >
                <Users className="w-4 h-4 text-zinc-600" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
