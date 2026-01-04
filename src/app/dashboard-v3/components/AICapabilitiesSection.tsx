'use client';

import { Brain, Lightbulb, Palette, Workflow, CheckCircle2 } from 'lucide-react';

interface AICapabilitiesSectionProps {
  data: any;
}

export default function AICapabilitiesSection({ data }: AICapabilitiesSectionProps) {
  const hasAIServices = data.aiServices && data.aiServices.length > 0;
  const hasGenerativeAI = data.generativeAI && data.generativeAI.length > 0;
  const hasAutomation = data.buildTypes?.includes('automation') || data.aiServices?.includes('automation');

  // Determine which capabilities to show
  const capabilities = [];

  // AI Helpers (Agents)
  if (data.aiServices?.includes('agents')) {
    capabilities.push({
      id: 'helpers',
      icon: Brain,
      color: 'indigo',
      title: 'AI Helpers Working for You',
      description: 'These AI assistants handle specific tasks so your team works faster.',
      bullets: [
        'Creates plans and next steps',
        'Reviews information and highlights insights',
        'Handles routine questions automatically',
      ],
    });
  }

  // AI Thinking & Planning
  if (data.aiServices?.includes('planning') || data.buildTypes?.includes('strategy')) {
    capabilities.push({
      id: 'planning',
      icon: Lightbulb,
      color: 'emerald',
      title: 'AI That Thinks With You',
      description: 'This AI understands your goals and helps make decisions.',
      bullets: [
        'Understands what you are trying to achieve',
        'Turns ideas into clear plans',
        'Provides strategic recommendations',
      ],
    });
  }

  // AI Content Creation
  if (hasGenerativeAI) {
    const contentBullets = [];
    if (data.generativeAI?.includes('images')) contentBullets.push('Campaign images and visual concepts');
    if (data.generativeAI?.includes('video')) contentBullets.push('Video content and animations');
    if (data.generativeAI?.includes('copy')) contentBullets.push('Marketing copy and content');
    if (contentBullets.length === 0) contentBullets.push('Creative content for your brand');

    capabilities.push({
      id: 'content',
      icon: Palette,
      color: 'pink',
      title: 'AI That Creates Content',
      description: 'This AI helps generate visuals and content for your brand.',
      bullets: contentBullets,
    });
  }

  // Automations
  if (hasAutomation) {
    capabilities.push({
      id: 'automation',
      icon: Workflow,
      color: 'amber',
      title: 'Automated Background Work',
      description: 'Some tasks can run automatically to save time.',
      bullets: [
        'Repetitive tasks handled for you',
        'Actions triggered when needed',
        'Notifications sent at the right time',
      ],
    });
  }

  // Fallback: Intelligence Layer
  if (capabilities.length === 0 || data.aiServices?.includes('intelligence')) {
    capabilities.push({
      id: 'intelligence',
      icon: Brain,
      color: 'violet',
      title: 'AI Knowledge & Intelligence',
      description: 'Smart search and information retrieval for your team.',
      bullets: [
        'Instant answers from your data',
        'Finds relevant information quickly',
        'Learns from your business context',
      ],
    });
  }

  const colorClasses: Record<string, any> = {
    indigo: {
      bg: 'from-indigo-50 to-white',
      border: 'border-indigo-100',
      iconBg: 'bg-indigo-100',
      iconText: 'text-indigo-600',
      titleText: 'text-indigo-900',
    },
    emerald: {
      bg: 'from-emerald-50 to-white',
      border: 'border-emerald-100',
      iconBg: 'bg-emerald-100',
      iconText: 'text-emerald-600',
      titleText: 'text-emerald-900',
    },
    pink: {
      bg: 'from-pink-50 to-white',
      border: 'border-pink-100',
      iconBg: 'bg-pink-100',
      iconText: 'text-pink-600',
      titleText: 'text-pink-900',
    },
    amber: {
      bg: 'from-amber-50 to-white',
      border: 'border-amber-100',
      iconBg: 'bg-amber-100',
      iconText: 'text-amber-600',
      titleText: 'text-amber-900',
    },
    violet: {
      bg: 'from-violet-50 to-white',
      border: 'border-violet-100',
      iconBg: 'bg-violet-100',
      iconText: 'text-violet-600',
      titleText: 'text-violet-900',
    },
  };

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="font-['Playfair_Display'] text-3xl font-light text-black mb-2">
          How AI Will Help Your Business
        </h2>
        <p className="text-sm text-zinc-600 font-light">
          These AI capabilities are included in your system.
        </p>
      </div>

      {/* Capabilities Cards */}
      <div className="space-y-6">
        {capabilities.map((capability) => {
          const Icon = capability.icon;
          const colors = colorClasses[capability.color];

          return (
            <div
              key={capability.id}
              className={`p-6 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border}`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${colors.iconText}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-medium ${colors.titleText} mb-2`}>
                    {capability.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>

              {/* Bullets */}
              <div className="ml-16 space-y-2">
                {capability.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${colors.iconText} flex-shrink-0 mt-0.5`} />
                    <p className="text-sm text-zinc-700">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <div className="mt-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
        <p className="text-xs text-zinc-600 leading-relaxed">
          ✨ <span className="font-medium">These capabilities work together</span> to create a system that's smarter than the sum of its parts.
        </p>
      </div>
    </div>
  );
}