'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from './components/ProgressBar';
import Step1Company from './components/Step1Company';
import Step2Goals from './components/Step2Goals';
import Step3Services from './components/Step3Services';
import Step4Contact from './components/Step4Contact';
import ProcessingScreen from './components/ProcessingScreen';

interface WizardData {
  // Step 1
  companyName: string;
  website: string;
  
  // Step 2
  goals: string[];
  challengesText: string;
  aiExtractedGoals?: string[];
  aiExtractedRisks?: string[];
  
  // Step 3
  services: string[];
  timeline: string;
  budget: string;
  
  // Step 4
  contactName: string;
  email: string;
  phone: string;
  contactMethod: string;
}

export default function WizardContainer() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [wizardData, setWizardData] = useState<WizardData>({
    companyName: '',
    website: '',
    goals: [],
    challengesText: '',
    services: [],
    timeline: 'Flexible',
    budget: '',
    contactName: '',
    email: '',
    phone: '',
    contactMethod: 'Email',
  });

  const updateWizardData = (data: Partial<WizardData>) => {
    setWizardData(prev => ({ ...prev, ...data }));
  };

  const handleNext = async () => {
    // Step 2: Extract insights with AI
    if (currentStep === 2 && wizardData.challengesText.length > 20) {
      try {
        // Simulate AI insight extraction
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock AI extraction
        updateWizardData({
          aiExtractedGoals: ['Reduce manual work', 'Scale operations', 'Improve efficiency'],
          aiExtractedRisks: ['Team capacity constraints', 'Timeline pressure'],
        });
      } catch (error) {
        console.error('AI extraction failed:', error);
      }
    }

    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsProcessing(true);

    try {
      // Simulate proposal generation (15-30 seconds)
      await new Promise(resolve => setTimeout(resolve, 20000));

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

  return (
    <div className="min-h-screen bg-[#FCFCFC] py-12 px-6">
      <div className="max-w-[640px] mx-auto">
        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={4} />

        {/* Step Content */}
        <div className="mt-12">
          {currentStep === 1 && (
            <Step1Company
              data={wizardData}
              updateData={updateWizardData}
              onNext={handleNext}
            />
          )}
          
          {currentStep === 2 && (
            <Step2Goals
              data={wizardData}
              updateData={updateWizardData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 3 && (
            <Step3Services
              data={wizardData}
              updateData={updateWizardData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 4 && (
            <Step4Contact
              data={wizardData}
              updateData={updateWizardData}
              onSubmit={handleSubmit}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  );
}
