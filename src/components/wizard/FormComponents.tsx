import { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';

// Pill Button Selector (single or multi-select)
interface PillSelectorProps {
  options: string[];
  selected: string | string[];
  onChange: (value: string | string[]) => void;
  multiSelect?: boolean;
  maxSelections?: number;
}

export function PillSelector({
  options,
  selected,
  onChange,
  multiSelect = false,
  maxSelections,
}: PillSelectorProps) {
  const isSelected = (option: string) => {
    if (Array.isArray(selected)) {
      return selected.includes(option);
    }
    return selected === option;
  };

  const handleClick = (option: string) => {
    if (multiSelect && Array.isArray(selected)) {
      if (selected.includes(option)) {
        onChange(selected.filter((item) => item !== option));
      } else {
        if (maxSelections && selected.length >= maxSelections) {
          return;
        }
        onChange([...selected, option]);
      }
    } else {
      onChange(option);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className={`px-5 py-2.5 rounded-full transition-all ${
            isSelected(option)
              ? 'bg-[#00334F] text-white shadow-md ring-2 ring-[#00334F] ring-offset-2'
              : 'bg-white border-2 border-slate-300 text-slate-700 hover:border-[#00334F] hover:text-[#00334F]'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

// Tag Input (multi-select with visual tags)
interface TagSelectorProps {
  options: string[];
  selected: string[];
  onChange: (value: string[]) => void;
  maxSelections?: number;
}

export function TagSelector({
  options,
  selected,
  onChange,
  maxSelections,
}: TagSelectorProps) {
  const toggleTag = (tag: string) => {
    if (selected.includes(tag)) {
      onChange(selected.filter((item) => item !== tag));
    } else {
      if (maxSelections && selected.length >= maxSelections) {
        return;
      }
      onChange([...selected, tag]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => toggleTag(option)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              selected.includes(option)
                ? 'bg-[#FF6B2C] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      
      {maxSelections && (
        <p className="text-xs text-slate-500">
          Select up to {maxSelections} {selected.length > 0 && `(${selected.length} selected)`}
        </p>
      )}
    </div>
  );
}

// Service Card Selector (premium cards with icons)
interface ServiceCardProps {
  title: string;
  icon?: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export function ServiceCard({ title, icon, selected, onClick }: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={`relative p-6 rounded-2xl border-2 transition-all text-left w-full ${
        selected
          ? 'border-[#00334F] bg-[#00334F]/5 shadow-lg'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
      }`}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              selected ? 'bg-[#00334F] text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3
            className={`text-[16px] ${selected ? 'text-[#00334F]' : 'text-slate-900'}`}
            style={{ fontWeight: 600 }}
          >
            {title}
          </h3>
        </div>
        {selected && (
          <div className="w-6 h-6 rounded-full bg-[#FF6B2C] flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
    </button>
  );
}

// Budget Slider
interface BudgetSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function BudgetSlider({ value, onChange, min = 5000, max = 100000 }: BudgetSliderProps) {
  const formatCurrency = (val: number) => {
    if (val >= 100000) return '$100K+';
    return `$${(val / 1000).toFixed(0)}K`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <label className="text-slate-700">Project Budget</label>
        <div className="text-[32px] text-[#00334F]" style={{ fontWeight: 700 }}>
          {formatCurrency(value)}
        </div>
      </div>
      
      <input
        type="range"
        min={min}
        max={max}
        step={5000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer slider-thumb"
        style={{
          background: `linear-gradient(to right, #00334F 0%, #00334F ${((value - min) / (max - min)) * 100}%, #e2e8f0 ${((value - min) / (max - min)) * 100}%, #e2e8f0 100%)`,
        }}
      />
      
      <div className="flex justify-between text-xs text-slate-500">
        <span>$5K</span>
        <span>$10K</span>
        <span>$25K</span>
        <span>$50K</span>
        <span>$100K+</span>
      </div>
    </div>
  );
}

// Text Input Field
interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  required,
  multiline,
  rows = 3,
}: TextFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-slate-700">
        {label}
        {required && <span className="text-[#FF6B2C] ml-1">*</span>}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#00334F] focus:outline-none transition-colors resize-none"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#00334F] focus:outline-none transition-colors"
        />
      )}
    </div>
  );
}

// URL Input with Add More functionality
interface UrlInputProps {
  urls: string[];
  onChange: (urls: string[]) => void;
  labels: string[];
}

export function UrlInput({ urls, onChange, labels }: UrlInputProps) {
  const updateUrl = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    onChange(newUrls);
  };

  const addUrl = () => {
    onChange([...urls, '']);
  };

  const removeUrl = (index: number) => {
    onChange(urls.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {urls.map((url, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => updateUrl(index, e.target.value)}
            placeholder={labels[index] || 'Additional URL'}
            className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#00334F] focus:outline-none transition-colors"
          />
          {index >= labels.length && (
            <button
              onClick={() => removeUrl(index)}
              className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      ))}
      
      <button
        onClick={addUrl}
        className="flex items-center gap-2 text-[#00334F] hover:text-[#004060] transition-colors text-sm"
      >
        <Plus className="w-4 h-4" />
        <span>Add more links</span>
      </button>
    </div>
  );
}

// AI Insight Card
interface AiInsightCardProps {
  insights: {
    detectedIndustry: string;
    brandVoice: string;
    keyOfferings: string[];
    audienceType: string;
  } | null;
}

export function AiInsightCard({ insights }: AiInsightCardProps) {
  if (!insights) {
    return (
      <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300">
        <div className="flex items-center gap-3 mb-3 text-slate-500">
          <Sparkles className="w-5 h-5" />
          <h3 style={{ fontWeight: 600 }}>AI Analysis Preview</h3>
        </div>
        <p className="text-sm text-slate-500">
          Add your URLs above and our AI will analyze your brand automatically
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#00334F] flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-[#00334F]" style={{ fontWeight: 600 }}>
            AI Insights Detected
          </h3>
          <p className="text-sm text-slate-600">Based on URL analysis</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-xl">
          <div className="text-xs text-slate-500 mb-1">Industry</div>
          <div className="text-slate-900" style={{ fontWeight: 600 }}>
            {insights.detectedIndustry}
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl">
          <div className="text-xs text-slate-500 mb-1">Brand Voice</div>
          <div className="text-slate-900" style={{ fontWeight: 600 }}>
            {insights.brandVoice}
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl">
          <div className="text-xs text-slate-500 mb-1">Audience Type</div>
          <div className="text-slate-900" style={{ fontWeight: 600 }}>
            {insights.audienceType}
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl">
          <div className="text-xs text-slate-500 mb-1">Key Offerings</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {insights.keyOfferings.map((offering, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#00334F]/10 text-[#00334F] rounded-full text-xs"
                style={{ fontWeight: 600 }}
              >
                {offering}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Section Card wrapper
interface SectionCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
      <div className="mb-6">
        <h3 className="text-slate-900 mb-2" style={{ fontWeight: 600 }}>
          {title}
        </h3>
        {description && <p className="text-sm text-slate-600">{description}</p>}
      </div>
      {children}
    </div>
  );
}
