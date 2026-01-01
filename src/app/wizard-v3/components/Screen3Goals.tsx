'use client';

interface Screen3Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const GOALS = [
  'Increase revenue',
  'Save time through automation',
  'Improve customer experience',
  'Launch a new product or MVP',
  'Organize internal operations',
  'Reduce manual work',
  'Improve decision-making with data',
  'Scale an existing system',
];

export default function Screen3Goals({ data, updateData, onNext, onBack }: Screen3Props) {
  const selectedGoals = data.goals || [];

  const toggleGoal = (goal: string) => {
    const newGoals = selectedGoals.includes(goal)
      ? selectedGoals.filter((g: string) => g !== goal)
      : [...selectedGoals, goal];
    updateData({ goals: newGoals });
  };

  const canProceed = selectedGoals.length > 0;
  const recommendedCount = selectedGoals.length >= 3 && selectedGoals.length <= 5;

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
        What are you trying to achieve?
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-2">
        Select the main outcomes you want from this system.
      </p>
      <p className="text-xs text-zinc-500 mb-8">
        These goals help us decide what the system should focus on.
      </p>

      {/* Goal Selection */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-zinc-700">
            Select your goals
          </p>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-3 py-1 rounded-full transition-colors duration-200 ${
              recommendedCount 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                : 'bg-zinc-50 text-zinc-500 border border-zinc-200'
            }`}>
              {selectedGoals.length} selected
            </span>
            <span className="text-xs text-zinc-400">
              (3–5 recommended)
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {GOALS.map((goal) => {
            const isSelected = selectedGoals.includes(goal);

            return (
              <button
                key={goal}
                onClick={() => toggleGoal(goal)}
                className={`
                  px-5 py-3 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    isSelected
                      ? 'bg-indigo-500 text-white border-2 border-indigo-500 shadow-sm'
                      : 'bg-white text-zinc-700 border-2 border-zinc-200 hover:border-indigo-300 hover:bg-indigo-50'
                  }
                `}
              >
                {isSelected && (
                  <span className="mr-2">✓</span>
                )}
                {goal}
              </button>
            );
          })}
        </div>
      </div>

      {/* Guidance Message */}
      {selectedGoals.length > 0 && (
        <div className={`p-4 rounded-2xl border mb-8 transition-all duration-300 ${
          recommendedCount
            ? 'bg-emerald-50 border-emerald-200'
            : selectedGoals.length > 5
            ? 'bg-amber-50 border-amber-200'
            : 'bg-zinc-50 border-zinc-200'
        }`}>
          <p className={`text-sm ${
            recommendedCount
              ? 'text-emerald-800'
              : selectedGoals.length > 5
              ? 'text-amber-800'
              : 'text-zinc-700'
          }`}>
            {recommendedCount
              ? '✓ Great! This gives us a clear focus for your system.'
              : selectedGoals.length > 5
              ? '⚠️ Consider focusing on 3–5 core goals for better results.'
              : selectedGoals.length === 1
              ? 'Consider adding 2–4 more goals to help us optimize the system.'
              : 'Add 1–3 more goals to help us optimize the system.'}
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="
            text-zinc-600 hover:text-zinc-900 rounded-full px-6 py-3 h-12 
            text-sm font-medium transition-all duration-200
          "
        >
          Back
        </button>
        <div className="flex items-center gap-4">
          <p className="text-xs text-zinc-400">Goals can be adjusted later.</p>
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
    </div>
  );
}
