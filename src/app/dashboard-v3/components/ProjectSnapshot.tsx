'use client';

import { Briefcase, Target, Building2, Zap } from 'lucide-react';

interface ProjectSnapshotProps {
  data: any;
}

const BUILD_TYPE_LABELS: Record<string, string> = {
  dashboard: 'AI Dashboard App',
  chatbot: 'AI Chat Assistant',
  automation: 'Automations & Workflows',
  strategy: 'Strategy & Planning System',
};

export default function ProjectSnapshot({ data }: ProjectSnapshotProps) {
  // Generate system type label
  const getSystemType = () => {
    if (!data.buildTypes || data.buildTypes.length === 0) return 'Custom System';
    if (data.buildTypes.length === 1) {
      return BUILD_TYPE_LABELS[data.buildTypes[0]] || 'Custom System';
    }
    const types = data.buildTypes.map((t: string) => BUILD_TYPE_LABELS[t]?.replace('AI ', '') || t);
    return types.slice(0, -1).join(', ') + ' with ' + types[types.length - 1];
  };

  // Generate project size label
  const getProjectSize = () => {
    const complexity = data.buildTypes?.length > 2 ? 'Medium project' : data.buildTypes?.length > 1 ? 'Small-to-medium project' : 'Small project';
    const execution = data.buildTypes?.length > 2 ? 'thoughtful execution' : 'fast execution';
    return `${complexity} — ${execution}`;
  };

  // Get primary goal
  const getPrimaryGoal = () => {
    if (data.businessOutcomes && data.businessOutcomes.length > 0) {
      const goals = data.businessOutcomes.slice(0, 2);
      return goals.join(' and ').toLowerCase();
    }
    return 'streamline operations and improve efficiency';
  };

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="font-['Playfair_Display'] text-3xl font-light text-black mb-2">
          Project Overview
        </h2>
        <p className="text-sm text-zinc-600 font-light">
          Here's what we're building together.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* System Type */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-xs uppercase tracking-wider text-indigo-600 font-medium">
              System Type
            </p>
          </div>
          <p className="text-base font-medium text-zinc-900 leading-relaxed">
            {getSystemType()}
          </p>
        </div>

        {/* Industry */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-xs uppercase tracking-wider text-emerald-600 font-medium">
              Industry
            </p>
          </div>
          <p className="text-base font-medium text-zinc-900 leading-relaxed">
            {data.industry === 'Other' ? data.industryOther : data.industry}
          </p>
        </div>

        {/* Primary Goal */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <Target className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-xs uppercase tracking-wider text-amber-600 font-medium">
              Primary Goal
            </p>
          </div>
          <p className="text-base font-medium text-zinc-900 leading-relaxed capitalize">
            {getPrimaryGoal()}
          </p>
        </div>

        {/* Project Size */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-white border border-violet-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
              <Zap className="w-5 h-5 text-violet-600" />
            </div>
            <p className="text-xs uppercase tracking-wider text-violet-600 font-medium">
              Project Size
            </p>
          </div>
          <p className="text-base font-medium text-zinc-900 leading-relaxed">
            {getProjectSize()}
          </p>
        </div>
      </div>

      {/* Helper Text */}
      <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
        <p className="text-xs text-zinc-600 leading-relaxed">
          💡 <span className="font-medium">This is a living project</span> — details can be refined anytime as your needs evolve.
        </p>
      </div>
    </div>
  );
}
