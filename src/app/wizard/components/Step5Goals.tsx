'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Step5Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const INDUSTRY_GOALS: Record<string, string[]> = {
  'real-estate': [
    'Automate lead follow-up within 5 minutes',
    'Track property inquiries across channels',
    'Reduce time to schedule showings',
    'Generate market analysis reports',
    'Integrate WhatsApp for agent communication',
    'Improve lead-to-showing conversion rate',
  ],
  'fashion': [
    'Streamline photoshoot scheduling and coordination',
    'Track sample inventory and movement',
    'Automate influencer outreach and follow-ups',
    'Centralize brand asset management',
    'Monitor campaign performance in real-time',
    'Coordinate event logistics and RSVPs',
  ],
  'startups': [
    'Build investor-ready demo in 4-6 weeks',
    'Validate core product hypothesis quickly',
    'Minimize development costs',
    'Ensure scalability for future growth',
    'Integrate analytics from day one',
    'Launch with clean, modern design',
  ],
  'default': [
    'Automate repetitive tasks',
    'Improve team productivity',
    'Better data insights',
    'Scale operations',
    'Reduce manual errors',
    'Enhance customer experience',
  ],
};

export default function Step5Goals({ data, updateData, onNext, onBack }: Step5Props) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const industryGoals = INDUSTRY_GOALS[data.industry] || INDUSTRY_GOALS['default'];
  const selectedGoals = data.selectedGoals || [];

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      updateData({ 
        selectedGoals: selectedGoals.filter((g: string) => g !== goal) 
      });
    } else {
      updateData({ 
        selectedGoals: [...selectedGoals, goal] 
      });
    }
  };

  const handleNext = async () => {
    if (data.challengesText && data.challengesText.length > 20) {
      setIsAnalyzing(true);
      
      // Simulate AI Insight Extractor (2-3 seconds)
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Mock AI insights
      const mockInsights = {
        explicit_goals: selectedGoals,
        implicit_needs: ['Team capacity constraints', 'Integration with existing tools'],
        risks: ['Timeline may require phased rollout'],
        opportunities: ['AI can automate 60% of manual tasks'],
        next_step: 'Schedule discovery call',
        confidence: 0.89
      };
      
      updateData({ aiInsights: mockInsights });
      setIsAnalyzing(false);
    }
    
    onNext();
  };

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
        What are your goals?
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-8">
        Select all that apply or describe your specific needs below
      </p>

      {/* Industry-Specific Goals */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          Your goals
          <span className="ml-2 text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
            For {data.industry || 'your industry'}
          </span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {industryGoals.map((goal) => (
            <label
              key={goal}
              className={`
                flex items-center p-4 rounded-2xl border-2 cursor-pointer
                transition-all duration-200
                ${
                  selectedGoals.includes(goal)
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-200'
                }
              `}
            >
              <input
                type="checkbox"
                checked={selectedGoals.includes(goal)}
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
          What's your biggest challenge right now?
        </label>
        <textarea
          id="challenges"
          value={data.challengesText || ''}
          onChange={(e) => updateData({ challengesText: e.target.value })}
          className="
            w-full h-32 rounded-2xl px-6 py-4 text-sm
            border border-zinc-200 transition-all duration-200
            focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
            resize-none
          "
          placeholder="Describe the main problem you're trying to solve. The more specific you are, the better we can help."
          maxLength={1000}
        />
        <p className="text-xs italic text-zinc-400 mt-1">
          AI will analyze your response to identify opportunities and risks
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
          disabled={isAnalyzing}
          className="text-zinc-600 hover:text-zinc-900 rounded-full px-6 py-3 h-12 text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={isAnalyzing}
          className="bg-black text-white rounded-full px-6 py-3 h-12 text-sm font-medium transition-all duration-200 hover:bg-zinc-900 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? 'Analyzing...' : 'Continue'}
        </button>
      </div>
    </div>
  );
}
