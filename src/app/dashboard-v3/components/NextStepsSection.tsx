'use client';

import { FileText, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NextStepsSectionProps {
  data: any;
}

export default function NextStepsSection({ data }: NextStepsSectionProps) {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: 'AI finalizes your project plan',
      description: 'Based on your goals and selected capabilities',
      status: 'complete',
    },
    {
      number: 2,
      title: 'Key features and workflows are prepared',
      description: 'Tailored to your industry and use case',
      status: 'in-progress',
    },
    {
      number: 3,
      title: 'Your team reviews and approves',
      description: 'You have full visibility and control',
      status: 'upcoming',
    },
    {
      number: 4,
      title: 'Build or execution begins',
      description: 'Development starts with clear requirements',
      status: 'upcoming',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'in-progress':
        return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      default:
        return 'bg-zinc-100 text-zinc-500 border-zinc-200';
    }
  };

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="font-['Playfair_Display'] text-3xl font-light text-black mb-2">
          What Happens Next
        </h2>
        <p className="text-sm text-zinc-600 font-light">
          Here's how your project will come to life.
        </p>
      </div>

      {/* Steps List */}
      <div className="space-y-4 mb-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`p-6 rounded-2xl border-2 transition-all duration-200 ${
              step.status === 'complete'
                ? 'bg-emerald-50 border-emerald-200'
                : step.status === 'in-progress'
                ? 'bg-indigo-50 border-indigo-200'
                : 'bg-white border-zinc-200'
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Number Badge */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-medium border-2 ${getStatusColor(
                  step.status
                )}`}
              >
                {step.status === 'complete' ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <span>{step.number}</span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-base font-medium text-zinc-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-600">{step.description}</p>
              </div>

              {/* Status Label */}
              {step.status === 'in-progress' && (
                <div className="flex-shrink-0">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium border border-indigo-200">
                    In Progress
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Primary CTA */}
        <button
          onClick={() => navigate('/wizard-v3')}
          className="flex-1 flex items-center justify-center gap-2 bg-black text-white rounded-full px-8 py-4 h-14 font-medium transition-all duration-200 hover:bg-zinc-900 shadow-sm"
        >
          <FileText className="w-5 h-5" />
          View Full Project Details
        </button>

        {/* Secondary CTA */}
        <button
          onClick={() => alert('AI Chat Assistant coming soon!')}
          className="flex-1 flex items-center justify-center gap-2 bg-white text-zinc-900 rounded-full px-8 py-4 h-14 font-medium border-2 border-zinc-200 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50"
        >
          <MessageSquare className="w-5 h-5" />
          Talk to AI About This Project
        </button>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
        <p className="text-xs text-zinc-600 leading-relaxed">
          🤝 <span className="font-medium">Questions at any stage?</span> Your project manager and AI assistant are here to help.
        </p>
      </div>
    </div>
  );
}
