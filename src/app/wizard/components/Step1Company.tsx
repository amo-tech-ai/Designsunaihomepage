'use client';

import { useState } from 'react';

interface Step1Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
}

export default function Step1Company({ data, updateData, onNext }: Step1Props) {
  const [errors, setErrors] = useState<{ companyName?: string; website?: string }>({});

  const validateAndNext = () => {
    const newErrors: typeof errors = {};

    if (!data.companyName || data.companyName.trim().length === 0) {
      newErrors.companyName = 'Company name is required';
    }

    if (data.website && !isValidUrl(data.website)) {
      newErrors.website = 'Please enter a valid URL (e.g., acmecorp.com)';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
  };

  const isValidUrl = (url: string) => {
    const pattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?(\.[a-zA-Z]{2,})+$/;
    return pattern.test(url) || url.includes('.');
  };

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
        Tell us about your company
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-8">
        We'll use this information to personalize your proposal
      </p>

      {/* Company Name */}
      <div className="mb-6">
        <label htmlFor="companyName" className="block text-sm font-medium text-zinc-700 mb-2">
          Company Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="companyName"
          type="text"
          value={data.companyName}
          onChange={(e) => updateData({ companyName: e.target.value })}
          className={`
            w-full h-14 rounded-2xl px-6 text-sm
            border transition-all duration-200
            focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
            ${errors.companyName ? 'border-rose-500' : 'border-zinc-200'}
          `}
          placeholder="Acme Corporation"
          autoFocus
        />
        {errors.companyName && (
          <p className="text-xs text-rose-600 mt-1">{errors.companyName}</p>
        )}
      </div>

      {/* Website */}
      <div className="mb-8">
        <label htmlFor="website" className="block text-sm font-medium text-zinc-700 mb-2">
          Website
        </label>
        <input
          id="website"
          type="text"
          value={data.website}
          onChange={(e) => updateData({ website: e.target.value })}
          className={`
            w-full h-14 rounded-2xl px-6 text-sm
            border transition-all duration-200
            focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
            ${errors.website ? 'border-rose-500' : 'border-zinc-200'}
          `}
          placeholder="acmecorp.com"
        />
        {errors.website && (
          <p className="text-xs text-rose-600 mt-1">{errors.website}</p>
        )}
        <p className="text-xs italic text-zinc-400 mt-1">
          Enter your company website (e.g., acmecorp.com)
        </p>
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
        <button
          onClick={validateAndNext}
          className="
            bg-black text-white rounded-full px-6 py-3 h-12
            text-sm font-medium transition-all duration-200
            hover:bg-zinc-900 shadow-sm
          "
        >
          Next
        </button>
      </div>
    </div>
  );
}
