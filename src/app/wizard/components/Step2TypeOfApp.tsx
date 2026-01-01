'use client';

import { 
  Globe, 
  LayoutDashboard, 
  Bot, 
  Workflow, 
  Store, 
  Calendar, 
  Briefcase, 
  Rocket, 
  ShoppingCart 
} from 'lucide-react';

interface Step2Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const APP_TYPES = [
  {
    id: 'website',
    name: 'Website',
    description: 'Informational site with pages',
    icon: Globe,
    commonFor: 'Marketing sites, brand presence'
  },
  {
    id: 'web-app',
    name: 'Web App / Dashboard',
    description: 'Logged-in tool with data management',
    icon: LayoutDashboard,
    commonFor: 'CRM, admin panels, analytics'
  },
  {
    id: 'chatbot',
    name: 'AI Assistant / Chatbot',
    description: 'Conversational interface',
    icon: Bot,
    commonFor: 'Support bots, internal AI helpers'
  },
  {
    id: 'automation',
    name: 'Automation System',
    description: 'Background workflows without UI',
    icon: Workflow,
    commonFor: 'Lead routing, report generation'
  },
  {
    id: 'marketplace',
    name: 'Marketplace',
    description: 'Two-sided platform (buyers/sellers)',
    icon: Store,
    commonFor: 'Service marketplace, product listings'
  },
  {
    id: 'booking',
    name: 'Booking / Scheduling',
    description: 'Appointment and calendar management',
    icon: Calendar,
    commonFor: 'Events, rentals, consultations'
  },
  {
    id: 'internal-tool',
    name: 'Internal Tool',
    description: 'Team-only business software',
    icon: Briefcase,
    commonFor: 'Operations, finance, HR tools'
  },
  {
    id: 'mvp',
    name: 'MVP / Startup App',
    description: 'First version for investors/users',
    icon: Rocket,
    commonFor: 'Startup demos, proof of concept'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Online store with payments',
    icon: ShoppingCart,
    commonFor: 'Product sales, subscriptions'
  },
];

export default function Step2TypeOfApp({ data, updateData, onNext, onBack }: Step2Props) {
  const handleSelect = (typeId: string) => {
    updateData({ appType: typeId });
  };

  const canProceed = !!data.appType;

  return (
    <div className="bg-white rounded-[40px] p-10 border border-zinc-200 shadow-sm">
      <h2 className="font-['Playfair_Display'] text-4xl font-light text-black mb-4">
        What are you building?
      </h2>
      <p className="text-sm font-light text-zinc-600 mb-8">
        Select the type that best describes your project
      </p>

      {/* App Type Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {APP_TYPES.map((type) => {
          const Icon = type.icon;
          const isSelected = data.appType === type.id;
          
          return (
            <button
              key={type.id}
              onClick={() => handleSelect(type.id)}
              className={`
                group relative p-6 rounded-3xl border-2 text-left transition-all duration-200
                ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-zinc-200 hover:border-indigo-300 hover:bg-zinc-50'
                }
              `}
            >
              <div className={`
                w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-200
                ${isSelected ? 'bg-indigo-500' : 'bg-zinc-100 group-hover:bg-indigo-100'}
              `}>
                <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-zinc-600 group-hover:text-indigo-600'}`} />
              </div>
              
              <h3 className={`text-base font-medium mb-2 ${isSelected ? 'text-indigo-900' : 'text-zinc-900'}`}>
                {type.name}
              </h3>
              
              <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
                {type.description}
              </p>
              
              <p className="text-xs text-zinc-400 italic">
                {type.commonFor}
              </p>
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="text-zinc-600 hover:text-zinc-900 rounded-full px-6 py-3 h-12 text-sm font-medium transition-all duration-200"
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
