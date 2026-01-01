'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Step2Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Goals({ data, updateData, onNext, onBack }: Step2Props) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const commonGoals = [
    'Automate lead follow-up',
    'Improve client experience',
    'Reduce manual work',
    'Scale operations',
    'Integrate communication channels',
    'Generate more revenue',
  ];

  const toggleGoal = (goal: string) => {
    const currentGoals = data.goals || [];
    if (currentGoals.includes(goal)) {
      updateData({ goals: currentGoals.filter((g: string) => g !== goal) });
    } else {
      updateData({ goals: [...currentGoals, goal] });
    }
  };

  const handleNext = async () => {
    if (data.challengesText.length > 20) {
      setIsAnalyzing(true);
      await onNext();
      setIsAnalyzing(false);
    } else {
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
        What are your goals?
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-8">
        Select all that apply or describe your specific needs below
      </p>

      {/* Goal Checkboxes */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          Select your goals
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {commonGoals.map((goal) => (
            <label
              key={goal}
              className={`
                flex items-center p-4 rounded-2xl border-2 cursor-pointer
                transition-all duration-200
                ${
                  data.goals?.includes(goal)
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-200'
                }
              `}
            >
              <input
                type="checkbox"
                checked={data.goals?.includes(goal)}
                onChange={() => toggleGoal(goal)}
                className="w-5 h-5 rounded border-zinc-300 text-indigo-500 focus:ring-indigo-500 focus:ring-2"
              />
              <span className="ml-3 text-sm font-light text-zinc-900">{goal}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Challenges Text Area */}
      <div className="mb-8">
        <label htmlFor="challenges" className="block text-sm font-medium text-zinc-700 mb-2">
          Describe your current challenges
        </label>
        <textarea
          id="challenges"
          value={data.challengesText}
          onChange={(e) => updateData({ challengesText: e.target.value })}
          className="
            w-full h-32 rounded-2xl px-6 py-4 text-sm
            border border-zinc-200 transition-all duration-200
            focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
            resize-none
          "
          placeholder="Tell us about your current pain points, manual processes, or bottlenecks..."
        />
        <p className="text-xs italic text-zinc-400 mt-1">
          AI will analyze your response to better understand your needs
        </p>
      </div>

      {/* AI Analyzing Badge */}
      {isAnalyzing && (
        <div className="mb-6 flex items-center justify-center p-4 bg-indigo-50 rounded-2xl border border-indigo-200">
          <Sparkles className="w-5 h-5 text-indigo-500 mr-2 animate-pulse" />
          <span className="text-sm font-medium text-indigo-700">
            AI analyzing your response...
          </span>
        </div>
      )}

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
          onClick={handleNext}
          disabled={isAnalyzing}
          className="
            bg-black text-white rounded-full px-6 py-3 h-12
            text-sm font-medium transition-all duration-200
            hover:bg-zinc-900 shadow-sm
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {isAnalyzing ? 'Analyzing...' : 'Next'}
        </button>
      </div>
    </div>
  );
}
