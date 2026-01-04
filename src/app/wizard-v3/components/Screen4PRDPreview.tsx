'use client';

import { CheckCircle2, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { useState } from 'react';

interface Screen4PRDPreviewProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const BUILD_TYPE_LABELS: Record<string, string> = {
  dashboard: 'AI Dashboard App',
  chatbot: 'AI Chat Assistant',
  automation: 'Automations & Workflows',
  strategy: 'Strategy & Planning System',
};

export default function Screen4PRDPreview({ data, updateData, onNext, onBack }: Screen4PRDPreviewProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  const [confirmed, setConfirmed] = useState(data.summaryConfirmed || false);

  const handleConfirmChange = (checked: boolean) => {
    setConfirmed(checked);
    updateData({ summaryConfirmed: checked });
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Generate PRD content
  const getPRDSections = () => {
    const sections = [];

    // Product Overview
    sections.push({
      id: 'overview',
      title: 'Product Overview',
      content: data.projectDescription || 'A custom system tailored to your business needs.',
    });

    // Target Users
    sections.push({
      id: 'users',
      title: 'Target Users',
      content: [
        data.buildTypes?.includes('dashboard') ? 'Internal team members' : null,
        'Admin users',
        data.buildTypes?.includes('chatbot') ? 'End customers or clients' : null,
      ].filter(Boolean).join('\n• '),
    });

    // Core Features
    const coreFeatures = [];
    if (data.buildTypes?.includes('dashboard')) coreFeatures.push('User dashboard with data visualization');
    if (data.buildTypes?.includes('chatbot')) coreFeatures.push('AI chat assistant for user interactions');
    if (data.buildTypes?.includes('automation')) coreFeatures.push('Automated workflows and background processes');
    if (data.buildTypes?.includes('strategy')) coreFeatures.push('AI planning and strategy tools');
    
    // Add AI Services from Screen 3
    if (data.aiServices?.includes('planning')) coreFeatures.push('AI-powered planning and decision support');
    if (data.aiServices?.includes('agents')) coreFeatures.push('Autonomous AI agents for task execution');
    if (data.aiServices?.includes('intelligence')) coreFeatures.push('Knowledge base and intelligent search');
    
    coreFeatures.push('User authentication and permissions');
    coreFeatures.push('Secure data storage and management');

    sections.push({
      id: 'features',
      title: 'Core Features',
      content: coreFeatures.join('\n• '),
    });

    // Advanced Features
    const advancedFeatures = [];
    if (data.buildTypes?.includes('chatbot') || data.buildTypes?.includes('strategy')) {
      advancedFeatures.push('AI-powered recommendations and insights');
    }
    if (data.buildTypes?.includes('automation') || data.aiServices?.includes('automation')) {
      advancedFeatures.push('Custom approval workflows');
      advancedFeatures.push('Automated notifications and alerts');
    }
    if (data.buildTypes?.includes('dashboard')) {
      advancedFeatures.push('Real-time data sync and updates');
      advancedFeatures.push('Custom reporting and analytics');
    }
    
    // Add Generative AI features
    if (data.generativeAI?.includes('images')) advancedFeatures.push('AI-generated visual content');
    if (data.generativeAI?.includes('video')) advancedFeatures.push('Automated video creation');
    if (data.generativeAI?.includes('copy')) advancedFeatures.push('AI-powered content writing');

    if (advancedFeatures.length > 0) {
      sections.push({
        id: 'advanced',
        title: 'Advanced Features',
        content: advancedFeatures.join('\n• '),
        optional: true,
      });
    }

    // Key Workflows
    const workflows = [];
    if (data.buildTypes?.includes('chatbot')) workflows.push('User input → AI processing → Action/Response');
    if (data.buildTypes?.includes('automation') || data.aiServices?.includes('automation')) workflows.push('Trigger event → Automation → Notification');
    if (data.buildTypes?.includes('strategy') || data.aiServices?.includes('planning')) workflows.push('Request → AI analysis → Strategic recommendation');
    if (data.buildTypes?.includes('dashboard')) workflows.push('Data update → Processing → Dashboard refresh');

    sections.push({
      id: 'workflows',
      title: 'Key Workflows',
      content: workflows.join('\n• '),
    });

    // Success Criteria
    const successCriteria = [];
    if (data.businessOutcomes?.includes('Increase revenue')) successCriteria.push('Measurable revenue growth');
    if (data.businessOutcomes?.includes('Reduce operational cost')) successCriteria.push('Lower operational expenses');
    if (data.businessOutcomes?.includes('Save time through automation')) successCriteria.push('Reduced manual work by 50%+');
    if (data.businessOutcomes?.includes('Improve customer experience')) successCriteria.push('Higher customer satisfaction scores');
    if (data.businessOutcomes?.includes('Launch faster')) successCriteria.push('Accelerated time-to-market');
    if (data.businessOutcomes?.includes('Scale without hiring')) successCriteria.push('Growth without proportional headcount increase');
    if (data.businessOutcomes?.includes('Improve decision-making')) successCriteria.push('Data-driven insights and recommendations');
    if (successCriteria.length === 0) successCriteria.push('Successful system deployment and adoption');

    sections.push({
      id: 'success',
      title: 'Success Criteria',
      content: successCriteria.join('\n• '),
    });

    return sections;
  };

  const prdSections = getPRDSections();

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center">
          <FileText className="w-5 h-5 text-indigo-600" />
        </div>
        <h2 className="font-['Playfair_Display'] text-3xl font-light text-black">
          Product Requirements Preview
        </h2>
      </div>
      
      <p className="text-sm text-zinc-600 mb-8 font-light">
        This is a preview of the product plan that will guide design and development.
      </p>

      {/* PRD Sections */}
      <div className="space-y-3 mb-10">
        {prdSections.map((section) => (
          <div
            key={section.id}
            className="border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-5 flex items-center justify-between hover:bg-zinc-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-zinc-900">
                  {section.title}
                </span>
                {section.optional && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                    Optional
                  </span>
                )}
              </div>
              {expandedSection === section.id ? (
                <ChevronUp className="w-5 h-5 text-zinc-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-zinc-400" />
              )}
            </button>

            {expandedSection === section.id && (
              <div className="px-5 pb-5 pt-0">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-line">
                    {section.content.startsWith('•') ? '• ' : ''}
                    {section.content}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Confirmation */}
      <div className="mb-8 p-6 rounded-2xl border-2 border-zinc-200 bg-zinc-50">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => handleConfirmChange(e.target.checked)}
              className="w-5 h-5 rounded border-2 border-zinc-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer transition-all duration-200"
            />
            {confirmed && (
              <CheckCircle2 className="w-5 h-5 text-indigo-600 absolute top-0 left-0 pointer-events-none" />
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors duration-200">
              This summary reflects what I want to build
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              You'll be able to refine details later.
            </p>
          </div>
        </label>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="
            text-zinc-600 hover:text-zinc-900 rounded-full px-6 py-3 h-12 
            text-sm font-medium transition-all duration-200
          "
        >
          Edit previous steps
        </button>
        
        <button
          onClick={onNext}
          disabled={!confirmed}
          className="
            bg-black text-white rounded-full px-8 py-3 h-12 
            text-sm font-medium transition-all duration-200 
            hover:bg-zinc-900 shadow-sm 
            disabled:opacity-40 disabled:cursor-not-allowed
            flex items-center gap-2
          "
        >
          Continue to Proposal
          {confirmed && <CheckCircle2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
