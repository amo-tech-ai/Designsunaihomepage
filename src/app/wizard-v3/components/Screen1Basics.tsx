'use client';

import { Lock } from 'lucide-react';

interface Screen1Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
}

export default function Screen1Basics({ data, updateData, onNext }: Screen1Props) {
  const canProceed = data.fullName && data.companyName;

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
        Let's start with the basics
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-8">
        This helps us personalize the system to your business.
      </p>

      {/* Fields */}
      <div className="space-y-6 mb-8">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-zinc-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={data.fullName || ''}
            onChange={(e) => updateData({ fullName: e.target.value })}
            placeholder="Your name"
            className="
              w-full rounded-2xl px-6 py-4 text-base
              border border-zinc-200 transition-all duration-200
              focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
              placeholder:text-zinc-400
            "
            autoFocus
          />
        </div>

        {/* Company / Product Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-zinc-700 mb-2">
            Company / Product Name <span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            value={data.companyName || ''}
            onChange={(e) => updateData({ companyName: e.target.value })}
            placeholder="Company or product name"
            className="
              w-full rounded-2xl px-6 py-4 text-base
              border border-zinc-200 transition-all duration-200
              focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
              placeholder:text-zinc-400
            "
          />
        </div>

        {/* Company Website (Optional) */}
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-zinc-700 mb-2">
            Company Website <span className="text-zinc-400 font-light">(optional)</span>
          </label>
          <input
            id="website"
            type="url"
            value={data.website || ''}
            onChange={(e) => updateData({ website: e.target.value })}
            placeholder="https://yourwebsite.com"
            className="
              w-full rounded-2xl px-6 py-4 text-base
              border border-zinc-200 transition-all duration-200
              focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
              placeholder:text-zinc-400
            "
          />
          <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
            If provided, we'll use this to better understand your brand and industry. No data is stored.
          </p>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="mb-8 p-5 bg-zinc-50 rounded-2xl border border-zinc-200">
        <div className="flex items-center gap-2 mb-1">
          <Lock className="w-4 h-4 text-zinc-600" />
          <span className="text-sm font-medium text-zinc-900">Private & secure</span>
        </div>
        <p className="text-xs text-zinc-500 ml-6">
          We only analyze public information
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <p className="text-xs text-zinc-400">
          You can update this later
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
  );
}
