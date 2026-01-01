'use client';

import { useState } from 'react';
import { 
  Rocket, 
  Briefcase, 
  Shirt, 
  Home, 
  Plane, 
  ShoppingBag, 
  Film, 
  GraduationCap, 
  Heart, 
  DollarSign, 
  Package, 
  Sparkles 
} from 'lucide-react';

interface Step3Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const INDUSTRIES = [
  {
    id: 'startups',
    name: 'Startups',
    icon: Rocket,
    typicalApps: 'MVPs, investor tools'
  },
  {
    id: 'agencies',
    name: 'Agencies & Consulting',
    icon: Briefcase,
    typicalApps: 'Client dashboards, CRMs'
  },
  {
    id: 'fashion',
    name: 'Fashion & Luxury',
    icon: Shirt,
    typicalApps: 'Brand sites, shoot management'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Home,
    typicalApps: 'Property listings, lead management'
  },
  {
    id: 'travel',
    name: 'Travel & Hospitality',
    icon: Plane,
    typicalApps: 'Bookings, tours, itineraries'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    icon: ShoppingBag,
    typicalApps: 'Product catalogs, marketing'
  },
  {
    id: 'media',
    name: 'Media & Content',
    icon: Film,
    typicalApps: 'Publishing, social platforms'
  },
  {
    id: 'education',
    name: 'Education & Coaching',
    icon: GraduationCap,
    typicalApps: 'Courses, community platforms'
  },
  {
    id: 'healthcare',
    name: 'Healthcare (Admin)',
    icon: Heart,
    typicalApps: 'Scheduling, non-clinical tools'
  },
  {
    id: 'finance',
    name: 'Finance / Fintech',
    icon: DollarSign,
    typicalApps: 'Dashboards, operations'
  },
  {
    id: 'logistics',
    name: 'Logistics & Operations',
    icon: Package,
    typicalApps: 'Internal systems, tracking'
  },
  {
    id: 'other',
    name: 'Other / Custom',
    icon: Sparkles,
    typicalApps: 'Edge cases'
  },
];

export default function Step3Industry({ data, updateData, onNext, onBack }: Step3Props) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSelect = async (industryId: string) => {
    updateData({ industry: industryId });
    
    // Simulate Architecture Generator AI
    setIsGenerating(true);
    
    // Mock AI processing (3-5 seconds)
    await new Promise(resolve => setTimeout(resolve, 3500));
    
    // Mock architecture data
    const mockArchitecture = {
      database_tables: [
        { name: 'leads', description: 'Contact information and engagement tracking', fields_count: 12 },
        { name: 'properties', description: 'Real estate listings', fields_count: 18 },
        { name: 'activities', description: 'Calls, emails, notes', fields_count: 8 },
        { name: 'deals', description: 'Pipeline and value tracking', fields_count: 15 },
        { name: 'users', description: 'Team members and roles', fields_count: 10 }
      ],
      auth_type: 'User accounts with roles',
      recommended_agents: [
        { name: 'Lead Scorer', purpose: 'Score leads 0-100 based on engagement signals' },
        { name: 'Email Drafter', purpose: 'Generate personalized follow-up emails' },
        { name: 'Market Analyzer', purpose: 'Property value insights' }
      ],
      complexity_score: 3.5,
      complexity_label: 'Medium',
      estimated_weeks: { min: 6, max: 8 },
      team_composition: [
        { role: 'Product Designer', allocation: 50 },
        { role: 'Full-Stack Developer', allocation: 100 },
        { role: 'AI Engineer', allocation: 75 }
      ]
    };
    
    updateData({ architecture: mockArchitecture });
    setIsGenerating(false);
  };

  const canProceed = !!data.industry && !isGenerating;

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
        What industry are you in?
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-8">
        This helps us tailor the architecture to your specific needs
      </p>

      {/* Generating Architecture Loading */}
      {isGenerating && (
        <div className="mb-6 flex items-center justify-center p-4 bg-indigo-50 rounded-2xl border border-indigo-200">
          <Sparkles className="w-5 h-5 text-indigo-500 mr-2 animate-pulse" />
          <span className="text-sm font-medium text-indigo-700">
            Generating your architecture blueprint...
          </span>
        </div>
      )}

      {/* Industry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {INDUSTRIES.map((industry) => {
          const Icon = industry.icon;
          const isSelected = data.industry === industry.id;
          
          return (
            <button
              key={industry.id}
              onClick={() => handleSelect(industry.id)}
              disabled={isGenerating}
              className={`
                group relative p-5 rounded-3xl border-2 text-center transition-all duration-200
                ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-300 hover:bg-zinc-50'
                }
                ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <div className={`
                w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-colors duration-200
                ${isSelected ? 'bg-indigo-500' : 'bg-zinc-100 group-hover:bg-indigo-100'}
              `}>
                <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-zinc-600 group-hover:text-indigo-600'}`} />
              </div>
              
              <h3 className={`text-sm font-medium mb-2 ${isSelected ? 'text-indigo-900' : 'text-zinc-900'}`}>
                {industry.name}
              </h3>
              
              <p className="text-xs text-zinc-400 italic leading-relaxed">
                {industry.typicalApps}
              </p>
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          disabled={isGenerating}
          className="text-zinc-600 hover:text-zinc-900 rounded-full px-6 py-3 h-12 text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="bg-black text-white rounded-full px-6 py-3 h-12 text-sm font-medium transition-all duration-200 hover:bg-zinc-900 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
