'use client';

interface ProgressIndicatorProps {
  currentScreen: number;
  totalScreens: number;
}

export default function ProgressIndicator({ currentScreen, totalScreens }: ProgressIndicatorProps) {
  const screens = [
    { number: 1, label: 'Basics' },
    { number: 2, label: 'Build Type' },
    { number: 3, label: 'Goals' },
  ];

  const progress = (currentScreen / totalScreens) * 100;

  return (
    <div className="w-full mb-12">
      {/* Progress Bar */}
      <div className="h-1 bg-zinc-100 w-full mb-8 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step Indicator */}
      <div className="text-center">
        <p className="text-sm font-medium text-zinc-500">
          Step {currentScreen} of {totalScreens}
        </p>
        <p className="text-xs text-zinc-400 mt-1">
          {screens[currentScreen - 1]?.label}
        </p>
      </div>
    </div>
  );
}
