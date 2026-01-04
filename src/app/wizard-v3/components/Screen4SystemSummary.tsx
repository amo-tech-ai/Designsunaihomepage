'use client';

interface Screen4SystemSummaryProps {
  data: any;
}

const BUILD_TYPE_LABELS: Record<string, string> = {
  dashboard: 'AI Dashboard App',
  chatbot: 'AI Chat Assistant',
  automation: 'Automations & Workflows',
  strategy: 'Strategy & Planning System',
};

export default function Screen4SystemSummary({ data }: Screen4SystemSummaryProps) {
  // Generate system type label
  const getSystemType = () => {
    if (!data.buildTypes || data.buildTypes.length === 0) return 'Custom System';
    if (data.buildTypes.length === 1) {
      return BUILD_TYPE_LABELS[data.buildTypes[0]] || 'Custom System';
    }
    const types = data.buildTypes.map((t: string) => BUILD_TYPE_LABELS[t]?.replace('AI ', '') || t);
    return types.slice(0, -1).join(', ') + ' with ' + types[types.length - 1];
  };

  // Generate scope summary
  const getScopeSummary = () => {
    const complexity = data.buildTypes?.length > 2 ? 'medium-to-high' : data.buildTypes?.length > 1 ? 'medium' : 'low-to-medium';
    const teamSize = data.buildTypes?.length > 2 ? '3–5' : data.buildTypes?.length > 1 ? '2–3' : '1–2';
    
    return `This is a ${complexity}-complexity system designed for a small team (${teamSize} people), with ${
      data.buildTypes?.includes('chatbot') || data.buildTypes?.includes('strategy') 
        ? 'AI-assisted planning and' 
        : ''
    }${data.buildTypes?.includes('automation') ? ' automated workflows' : ' custom features'}.`;
  };

  return (
    <div className="bg-white rounded-[40px] p-8 border border-zinc-200 shadow-sm h-fit sticky top-24">
      <h2 className="font-['Playfair_Display'] text-3xl font-light text-black mb-6">
        Here's what we're building
      </h2>

      {/* Section 1: System Overview */}
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
          System Overview
        </p>
        
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <p className="text-xs text-zinc-500 mb-1">System Type</p>
            <p className="text-sm font-medium text-zinc-900">{getSystemType()}</p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <p className="text-xs text-zinc-500 mb-1">Industry</p>
            <p className="text-sm font-medium text-zinc-900">
              {data.industry === 'Other' ? data.industryOther : data.industry}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <p className="text-xs text-zinc-500 mb-1">Primary Use</p>
            <p className="text-sm font-medium text-zinc-900 leading-relaxed">
              {data.projectDescription?.substring(0, 120)}
              {data.projectDescription?.length > 120 ? '...' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Key Goals */}
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
          Key Goals
        </p>
        <div className="flex flex-wrap gap-2">
          {data.businessOutcomes?.map((goal: string) => (
            <span
              key={goal}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200"
            >
              {goal}
            </span>
          ))}
        </div>
      </div>

      {/* Section 3: Scope Snapshot */}
      <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
          Scope Snapshot
        </p>
        <p className="text-sm text-indigo-900 leading-relaxed">
          {getScopeSummary()}
        </p>
      </div>
    </div>
  );
}
