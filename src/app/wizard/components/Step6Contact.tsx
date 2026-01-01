'use client';

interface Step6Props {
  data: any;
  updateData: (data: any) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const TIMELINES = [
  { value: 'Urgent', label: 'Urgent (Start in 1-2 weeks)' },
  { value: 'Soon', label: 'Soon (Start in 1-2 months)' },
  { value: 'Flexible', label: 'Flexible (Start in 3+ months)' },
  { value: 'Exploring', label: 'Exploring options (Not ready to commit)' },
];

const BUDGET_RANGES = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  'Not sure / Need estimate',
];

const CONTACT_METHODS = [
  'Email',
  'Phone',
  'WhatsApp',
  'Video call',
];

export default function Step6Contact({ data, updateData, onSubmit, onBack }: Step6Props) {
  const canSubmit = 
    data.contactName && 
    data.email && 
    data.timeline && 
    data.budgetRange;

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
        Almost there!
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-8">
        Just a few details so we can send you the proposal
      </p>

      {/* Contact Information */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          Contact Information
        </label>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              value={data.contactName || ''}
              onChange={(e) => updateData({ contactName: e.target.value })}
              placeholder="Full Name *"
              className="
                w-full rounded-2xl px-6 py-4 text-sm
                border border-zinc-200 transition-all duration-200
                focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
              "
            />
          </div>
          
          <div>
            <input
              type="email"
              value={data.email || ''}
              onChange={(e) => updateData({ email: e.target.value })}
              placeholder="Email *"
              className="
                w-full rounded-2xl px-6 py-4 text-sm
                border border-zinc-200 transition-all duration-200
                focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
              "
            />
          </div>
          
          <div>
            <input
              type="tel"
              value={data.phone || ''}
              onChange={(e) => updateData({ phone: e.target.value })}
              placeholder="Phone (optional)"
              className="
                w-full rounded-2xl px-6 py-4 text-sm
                border border-zinc-200 transition-all duration-200
                focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
              "
            />
          </div>
          
          <div>
            <input
              type="text"
              value={data.role || ''}
              onChange={(e) => updateData({ role: e.target.value })}
              placeholder="Role/Title (optional)"
              className="
                w-full rounded-2xl px-6 py-4 text-sm
                border border-zinc-200 transition-all duration-200
                focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
              "
            />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          When would you like to start? *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {TIMELINES.map((timeline) => (
            <label
              key={timeline.value}
              className={`
                flex items-center p-4 rounded-2xl border-2 cursor-pointer
                transition-all duration-200
                ${
                  data.timeline === timeline.value
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-200'
                }
              `}
            >
              <input
                type="radio"
                name="timeline"
                checked={data.timeline === timeline.value}
                onChange={() => updateData({ timeline: timeline.value })}
                className="w-5 h-5 border-zinc-300 text-indigo-500 focus:ring-indigo-500 focus:ring-2"
              />
              <span className="ml-3 text-sm font-light text-zinc-900">{timeline.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          Budget Range *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {BUDGET_RANGES.map((budget) => (
            <label
              key={budget}
              className={`
                flex items-center p-4 rounded-2xl border-2 cursor-pointer
                transition-all duration-200
                ${
                  data.budgetRange === budget
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-200'
                }
              `}
            >
              <input
                type="radio"
                name="budget"
                checked={data.budgetRange === budget}
                onChange={() => updateData({ budgetRange: budget })}
                className="w-5 h-5 border-zinc-300 text-indigo-500 focus:ring-indigo-500 focus:ring-2"
              />
              <span className="ml-3 text-sm font-light text-zinc-900">{budget}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preferred Contact Method */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          Preferred Contact Method
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CONTACT_METHODS.map((method) => (
            <label
              key={method}
              className={`
                flex items-center justify-center p-3 rounded-2xl border-2 cursor-pointer
                transition-all duration-200
                ${
                  data.contactMethod === method
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-200'
                }
              `}
            >
              <input
                type="radio"
                name="contactMethod"
                checked={data.contactMethod === method}
                onChange={() => updateData({ contactMethod: method })}
                className="sr-only"
              />
              <span className="text-sm font-light text-zinc-900">{method}</span>
            </label>
          ))}
        </div>
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
          onClick={onSubmit}
          disabled={!canSubmit || (data.email && !isValidEmail(data.email))}
          className="bg-black text-white rounded-full px-8 py-3 h-12 text-sm font-medium transition-all duration-200 hover:bg-zinc-900 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate Proposal →
        </button>
      </div>
    </div>
  );
}
