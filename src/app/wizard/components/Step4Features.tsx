'use client';

import { CheckCircle2 } from 'lucide-react';

interface Step4Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const COMMON_FEATURES = [
  'User authentication (login/signup)',
  'Admin dashboard',
  'Mobile responsive design',
  'Email notifications',
  'File uploads',
  'Search functionality',
];

const AI_FEATURES = [
  'Chatbot / AI assistant',
  'Content generation',
  'Predictive analytics',
  'Automated workflows',
  'Data insights',
  'Smart recommendations',
];

export default function Step4Features({ data, updateData, onNext, onBack }: Step4Props) {
  const selectedFeatures = data.selectedFeatures || [];

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      updateData({ 
        selectedFeatures: selectedFeatures.filter((f: string) => f !== feature) 
      });
    } else {
      updateData({ 
        selectedFeatures: [...selectedFeatures, feature] 
      });
    }
  };

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
        What features do you need?
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-8">
        Select all that apply or describe custom requirements below
      </p>

      {/* General Features */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          General Features
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {COMMON_FEATURES.map((feature) => (
            <label
              key={feature}
              className={`
                flex items-center p-4 rounded-2xl border-2 cursor-pointer
                transition-all duration-200
                ${
                  selectedFeatures.includes(feature)
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-200'
                }
              `}
            >
              <input
                type="checkbox"
                checked={selectedFeatures.includes(feature)}
                onChange={() => toggleFeature(feature)}
                className="w-5 h-5 rounded border-zinc-300 text-indigo-500 focus:ring-indigo-500 focus:ring-2"
              />
              <span className="ml-3 text-sm font-light text-zinc-900">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      {/* AI Features */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          AI Features
          <span className="ml-2 text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
            Recommended for {data.industry || 'your industry'}
          </span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {AI_FEATURES.map((feature) => (
            <label
              key={feature}
              className={`
                flex items-center p-4 rounded-2xl border-2 cursor-pointer
                transition-all duration-200
                ${
                  selectedFeatures.includes(feature)
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-200'
                }
              `}
            >
              <input
                type="checkbox"
                checked={selectedFeatures.includes(feature)}
                onChange={() => toggleFeature(feature)}
                className="w-5 h-5 rounded border-zinc-300 text-indigo-500 focus:ring-indigo-500 focus:ring-2"
              />
              <span className="ml-3 text-sm font-light text-zinc-900">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Custom Requests */}
      <div className="mb-8">
        <label htmlFor="customRequests" className="block text-sm font-medium text-zinc-700 mb-2">
          Any specific features or integrations?
        </label>
        <textarea
          id="customRequests"
          value={data.customRequests || ''}
          onChange={(e) => updateData({ customRequests: e.target.value })}
          className="
            w-full h-24 rounded-2xl px-6 py-4 text-sm
            border border-zinc-200 transition-all duration-200
            focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
            resize-none
          "
          placeholder="E.g., Stripe payments, Zapier automation, Twilio SMS..."
          maxLength={500}
        />
        <p className="text-xs text-zinc-400 mt-1">
          Be specific — this helps us build an accurate proposal
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="text-zinc-600 hover:text-zinc-900 rounded-full px-6 py-3 h-12 text-sm font-medium transition-all duration-200"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-black text-white rounded-full px-6 py-3 h-12 text-sm font-medium transition-all duration-200 hover:bg-zinc-900 shadow-sm"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
