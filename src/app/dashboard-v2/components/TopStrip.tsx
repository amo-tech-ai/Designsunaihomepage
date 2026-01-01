"use client";

interface TopStripProps {
  projectName: string;
  industry: string;
  status: string;
  complexity: string;
  deliveryModel: string;
  primaryGoal: string;
}

export function TopStrip({
  projectName,
  industry,
  status,
  complexity,
  deliveryModel,
  primaryGoal,
}: TopStripProps) {
  return (
    <div className="h-full px-12 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <h1 className="text-base font-light text-black" style={{ fontFamily: 'var(--font-heading)' }}>
          {projectName}
        </h1>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-gray-50 text-gray-600 rounded-full">
            {industry}
          </span>
          <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-emerald-50 text-emerald-600 rounded-full">
            {status}
          </span>
          <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-amber-50 text-amber-600 rounded-full">
            {complexity}
          </span>
          <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-indigo-50 text-indigo-600 rounded-full">
            {deliveryModel}
          </span>
        </div>
      </div>
      <div className="text-sm font-light text-zinc-600">{primaryGoal}</div>
    </div>
  );
}