'use client';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const steps = [
    { number: 1, label: 'Company' },
    { number: 2, label: 'Type' },
    { number: 3, label: 'Industry' },
    { number: 4, label: 'Features' },
    { number: 5, label: 'Goals' },
    { number: 6, label: 'Contact' },
  ];

  return (
    <div className="w-full">
      {/* Step Indicator Text */}
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-zinc-500">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      {/* Progress Circles */}
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            {/* Circle */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  border-2 transition-all duration-300
                  ${
                    step.number < currentStep
                      ? 'bg-emerald-500 border-emerald-500'
                      : step.number === currentStep
                      ? 'bg-indigo-500 border-indigo-500'
                      : 'bg-white border-zinc-200'
                  }
                `}
              >
                <span
                  className={`
                    text-xs font-bold
                    ${
                      step.number <= currentStep
                        ? 'text-white'
                        : 'text-zinc-400'
                    }
                  `}
                >
                  {step.number < currentStep ? '✓' : step.number}
                </span>
              </div>
              {/* Label - hidden on mobile */}
              <span
                className={`
                  text-xs mt-2 hidden md:block
                  ${
                    step.number <= currentStep
                      ? 'text-zinc-900 font-medium'
                      : 'text-zinc-400'
                  }
                `}
              >
                {step.label}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 bg-zinc-200 relative">
                <div
                  className={`
                    absolute inset-0 bg-emerald-500 transition-all duration-500
                    ${step.number < currentStep ? 'w-full' : 'w-0'}
                  `}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}