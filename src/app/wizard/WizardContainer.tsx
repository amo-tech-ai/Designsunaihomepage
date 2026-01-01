'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from './components/ProgressBar';
import Step1Company from './components/Step1Company';
import Step2BuildType from './components/Step2BuildType';
import Step4Features from './components/Step4Features';
import Step5Goals from './components/Step5Goals';
import Step6Contact from './components/Step6Contact';
import ProcessingScreen from './components/ProcessingScreen';
import ArchitectureBlueprint from './components/ArchitectureBlueprint';

interface WizardData {
  // Step 1
  companyName: string;
  website: string;
  contactName: string;
  
  // Step 2
  buildTypes: string[];
  industry: string;
  industryOther: string;
  architecture?: {
    database_tables?: Array<{ name: string; description: string; fields_count: number }>;
    auth_type?: string;
    recommended_agents?: Array<{ name: string; purpose: string }>;
    complexity_score?: number;
    complexity_label?: string;
    estimated_weeks?: { min: number; max: number };
    team_composition?: Array<{ role: string; allocation: number }>;
    team_size?: string;
  };
  
  // Step 3 (was Step 4)
  selectedFeatures: string[];
  customRequests: string;
  
  // Step 4 (was Step 5)
  selectedGoals: string[];
  challengesText: string;
  aiInsights?: any;
  
  // Step 5 (was Step 6)
  email: string;
  phone: string;
  role: string;
  timeline: string;
  budgetRange: string;
  contactMethod: string;
}

export default function WizardContainer() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [wizardData, setWizardData] = useState<WizardData>({
    companyName: '',
    website: '',
    contactName: '',
    buildTypes: [],
    industry: '',
    industryOther: '',
    selectedFeatures: [],
    customRequests: '',
    selectedGoals: [],
    challengesText: '',
    email: '',
    phone: '',
    role: '',
    timeline: 'Flexible',
    budgetRange: '',
    contactMethod: 'Email',
  });

  const updateWizardData = (data: Partial<WizardData>) => {
    setWizardData(prev => ({ ...prev, ...data }));
    // Backup to sessionStorage
    sessionStorage.setItem('wizardData', JSON.stringify({ ...wizardData, ...data }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setIsProcessing(true);

    try {
      // Simulate proposal generation (25-35 seconds)
      await new Promise(resolve => setTimeout(resolve, 30000));

      // Store data in sessionStorage for proposal page
      sessionStorage.setItem('wizardData', JSON.stringify(wizardData));
      
      // Redirect to proposal page
      router.push('/proposal');
    } catch (error) {
      console.error('Proposal generation failed:', error);
      setIsProcessing(false);
      alert('Failed to generate proposal. Please try again.');
    }
  };

  if (isProcessing) {
    return <ProcessingScreen />;
  }

  // Show architecture from step 1 onwards (always visible on right)
  const showArchitecture = currentStep >= 1;

  return (
    <div className="min-h-screen bg-[#FCFCFC] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Progress Bar */}
        <div className="max-w-[640px] mx-auto mb-12">
          <ProgressBar currentStep={currentStep} totalSteps={5} />
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-[640px_1fr] gap-8 items-start">
          {/* Left Column - Step Content */}
          <div>
            {currentStep === 1 && (
              <Step1Company
                data={wizardData}
                updateData={updateWizardData}
                onNext={handleNext}
              />
            )}
            
            {currentStep === 2 && (
              <Step2BuildType
                data={wizardData}
                updateData={updateWizardData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            
            {currentStep === 3 && (
              <Step4Features
                data={wizardData}
                updateData={updateWizardData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            
            {currentStep === 4 && (
              <Step5Goals
                data={wizardData}
                updateData={updateWizardData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            
            {currentStep === 5 && (
              <Step6Contact
                data={wizardData}
                updateData={updateWizardData}
                onSubmit={handleSubmit}
                onBack={handleBack}
              />
            )}
          </div>

          {/* Right Column - Architecture Blueprint (Desktop Only) */}
          {showArchitecture && (
            <div className="hidden lg:block">
              <ArchitectureBlueprint
                architecture={wizardData.architecture || null}
                buildTypes={wizardData.buildTypes}
                industry={wizardData.industry}
              />
            </div>
          )}
        </div>

        {/* Mobile Architecture Blueprint (Collapsible at bottom) */}
        {showArchitecture && (
          <div className="lg:hidden mt-8 max-w-[640px] mx-auto">
            <ArchitectureBlueprint
              architecture={wizardData.architecture || null}
              buildTypes={wizardData.buildTypes}
              industry={wizardData.industry}
            />
          </div>
        )}
      </div>
    </div>
  );
}