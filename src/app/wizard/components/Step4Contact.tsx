'use client';

import { useState } from 'react';

interface Step4Props {
  data: any;
  updateData: (data: any) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export default function Step4Contact({ data, updateData, onSubmit, onBack }: Step4Props) {
  const [errors, setErrors] = useState<{ 
    contactName?: string; 
    email?: string; 
  }>({});

  const contactMethods = [
    { value: 'Email', label: 'Email' },
    { value: 'Phone', label: 'Phone' },
    { value: 'WhatsApp', label: 'WhatsApp' },
  ];

  const isValidEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validateAndSubmit = () => {
    const newErrors: typeof errors = {};

    if (!data.contactName || data.contactName.trim().length === 0) {
      newErrors.contactName = 'Name is required';
    }

    if (!data.email || data.email.trim().length === 0) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit();
    }
  };

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
        How can we reach you?
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-8">
        We'll send your personalized proposal to this email
      </p>

      {/* Contact Name */}
      <div className="mb-6">
        <label htmlFor="contactName" className="block text-sm font-medium text-zinc-700 mb-2">
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="contactName"
          type="text"
          value={data.contactName}
          onChange={(e) => updateData({ contactName: e.target.value })}
          className={`
            w-full h-14 rounded-2xl px-6 text-sm
            border transition-all duration-200
            focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
            ${errors.contactName ? 'border-rose-500' : 'border-zinc-200'}
          `}
          placeholder="John Doe"
        />
        {errors.contactName && (
          <p className="text-xs text-rose-600 mt-1">{errors.contactName}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
          Email Address <span className="text-rose-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          className={`
            w-full h-14 rounded-2xl px-6 text-sm
            border transition-all duration-200
            focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
            ${errors.email ? 'border-rose-500' : 'border-zinc-200'}
          `}
          placeholder="john@acmecorp.com"
        />
        {errors.email && (
          <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => updateData({ phone: e.target.value })}
          className="
            w-full h-14 rounded-2xl px-6 text-sm
            border border-zinc-200 transition-all duration-200
            focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
          "
          placeholder="+1 (555) 123-4567"
        />
        <p className="text-xs italic text-zinc-400 mt-1">Optional</p>
      </div>

      {/* Contact Method */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          Preferred contact method
        </label>
        <div className="space-y-2">
          {contactMethods.map((method) => (
            <label
              key={method.value}
              className={`
                flex items-center p-4 rounded-2xl border cursor-pointer
                transition-all duration-200
                ${
                  data.contactMethod === method.value
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-200'
                }
              `}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method.value}
                checked={data.contactMethod === method.value}
                onChange={(e) => updateData({ contactMethod: e.target.value })}
                className="w-5 h-5 border-zinc-300 text-indigo-500 focus:ring-indigo-500"
              />
              <span className="ml-3 text-sm font-light text-zinc-900">{method.label}</span>
            </label>
          ))}
        </div>
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
          onClick={validateAndSubmit}
          className="
            bg-black text-white rounded-full px-6 py-3 h-12
            text-sm font-medium transition-all duration-200
            hover:bg-zinc-900 shadow-sm
          "
        >
          Generate Proposal
        </button>
      </div>
    </div>
  );
}
