'use client';

import { Sparkles, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';

interface AIAssistantPanelProps {
  data: any;
}

export default function AIAssistantPanel({ data }: AIAssistantPanelProps) {
  // Generate personalized suggestions based on wizard data
  const getSuggestedNextStep = () => {
    if (data.buildTypes?.includes('chatbot')) {
      return 'Define the top 5 questions your customers ask most often. This will help train your AI assistant.';
    }
    if (data.buildTypes?.includes('automation')) {
      return 'List the 3 most time-consuming manual tasks in your workflow. We will automate them first.';
    }
    if (data.buildTypes?.includes('strategy')) {
      return 'Share your current strategy documents. The AI will analyze them and suggest improvements.';
    }
    return 'Schedule a kickoff call to review the project plan and answer any questions.';
  };

  const getPotentialRisk = () => {
    if (data.buildTypes?.length > 2) {
      return 'Building multiple systems at once can extend timelines. Consider phasing the work.';
    }
    if (data.generativeAI?.length > 2) {
      return 'Creative AI requires careful brand guidelines. Let us define your visual standards early.';
    }
    if (data.aiServices?.includes('agents')) {
      return 'AI agents need clear tasks and boundaries. We will define exactly what they can and cannot do.';
    }
    return 'Every AI project needs good data. We will help you organize what you have.';
  };

  const getHelpfulTip = () => {
    if (data.industry === 'Fashion & Luxury') {
      return 'Luxury brands benefit most from AI that maintains exclusivity while scaling personal touches.';
    }
    if (data.industry === 'Startups') {
      return 'Start with one AI feature that delivers immediate value, then expand as you learn.';
    }
    if (data.businessOutcomes?.includes('Save time through automation')) {
      return 'The best automations are invisible — they should feel like magic, not like robots.';
    }
    return 'Think of AI as a team member. Give it clear instructions and feedback, and it will improve.';
  };

  return (
    <div className="bg-white rounded-[40px] p-8 border border-zinc-200 shadow-sm sticky top-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-['Playfair_Display'] text-2xl font-light text-black">
          AI Project Assistant
        </h3>
      </div>

      {/* Suggested Next Step */}
      <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-indigo-600 font-medium mb-1">
              Suggested Next Step
            </p>
          </div>
        </div>
        <p className="text-sm text-zinc-700 leading-relaxed ml-11">
          {getSuggestedNextStep()}
        </p>
      </div>

      {/* Potential Risk */}
      <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-amber-600 font-medium mb-1">
              Be Aware Of
            </p>
          </div>
        </div>
        <p className="text-sm text-zinc-700 leading-relaxed ml-11">
          {getPotentialRisk()}
        </p>
      </div>

      {/* Helpful Tip */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-emerald-600 font-medium mb-1">
              Helpful Tip
            </p>
          </div>
        </div>
        <p className="text-sm text-zinc-700 leading-relaxed ml-11">
          {getHelpfulTip()}
        </p>
      </div>

      {/* Quick Action */}
      <div className="mt-6 pt-6 border-t border-zinc-200">
        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full px-6 py-3 h-12 text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
          <Sparkles className="w-4 h-4" />
          Ask AI a Question
        </button>
      </div>
    </div>
  );
}