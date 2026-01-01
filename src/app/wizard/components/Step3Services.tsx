'use client';

import { useState } from 'react';

interface Step3Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Services({ data, updateData, onNext, onBack }: Step3Props) {
  const [errors, setErrors] = useState<{ services?: string; budget?: string }>({});

  const services = [
    { id: 'crm', label: 'CRM System' },
    { id: 'whatsapp', label: 'WhatsApp Automation' },
    { id: 'ai', label: 'AI Integration' },
    { id: 'website', label: 'Website Development' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'automation', label: 'Business Automation' },
  ];

  const timelines = [
    { value: 'urgent', label: 'Urgent (1-2 weeks)' },
    { value: '1-2months', label: '1-2 months' },
    { value: 'flexible', label: 'Flexible (3+ months)' },
  ];

  const budgets = [
    { value: '<10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: '$50,000+' },
  ];

  const toggleService = (serviceId: string) => {
    const currentServices = data.services || [];
    if (currentServices.includes(serviceId)) {
      updateData({ services: currentServices.filter((s: string) => s !== serviceId) });
    } else {
      updateData({ services: [...currentServices, serviceId] });
    }
  };

  const validateAndNext = () => {
    const newErrors: typeof errors = {};

    if (!data.services || data.services.length === 0) {
      newErrors.services = 'Please select at least one service';
    }

    if (!data.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
        What services do you need?
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-8">
        Select the services and provide project details
      </p>

      {/* Services */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          Select services <span className="text-rose-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service) => (
            <label
              key={service.id}
              className={`
                flex items-center p-4 rounded-2xl border-2 cursor-pointer
                transition-all duration-200
                ${
                  data.services?.includes(service.id)
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-200'
                }
              `}
            >
              <input
                type="checkbox"
                checked={data.services?.includes(service.id)}
                onChange={() => toggleService(service.id)}
                className="w-5 h-5 rounded border-zinc-300 text-indigo-500 focus:ring-indigo-500 focus:ring-2"
              />
              <span className="ml-3 text-sm font-light text-zinc-900">{service.label}</span>
            </label>
          ))}
        </div>
        {errors.services && (
          <p className="text-xs text-rose-600 mt-2">{errors.services}</p>
        )}
      </div>

      {/* Timeline */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          Project timeline
        </label>
        <div className="space-y-2">
          {timelines.map((option) => (
            <label
              key={option.value}
              className={`
                flex items-center p-4 rounded-2xl border cursor-pointer
                transition-all duration-200
                ${
                  data.timeline === option.value
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-200'
                }
              `}
            >
              <input
                type="radio"
                name="timeline"
                value={option.value}
                checked={data.timeline === option.value}
                onChange={(e) => updateData({ timeline: e.target.value })}
                className="w-5 h-5 border-zinc-300 text-indigo-500 focus:ring-indigo-500"
              />
              <span className="ml-3 text-sm font-light text-zinc-900">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          Budget range <span className="text-rose-500">*</span>
        </label>
        <div className="space-y-2">
          {budgets.map((option) => (
            <label
              key={option.value}
              className={`
                flex items-center p-4 rounded-2xl border cursor-pointer
                transition-all duration-200
                ${
                  data.budget === option.value
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-200'
                }
              `}
            >
              <input
                type="radio"
                name="budget"
                value={option.value}
                checked={data.budget === option.value}
                onChange={(e) => updateData({ budget: e.target.value })}
                className="w-5 h-5 border-zinc-300 text-indigo-500 focus:ring-indigo-500"
              />
              <span className="ml-3 text-sm font-light text-zinc-900">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.budget && (
          <p className="text-xs text-rose-600 mt-2">{errors.budget}</p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="
            text-zinc-600 hover:text-zinc-900 rounded-full px-6 py-3 h-12
            text-sm font-medium transition-all duration-200
          "
        >
          Back
        </button>
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
