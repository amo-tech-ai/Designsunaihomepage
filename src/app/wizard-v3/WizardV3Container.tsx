'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from './components/ProgressIndicator';
import Screen1Basics from './components/Screen1Basics';
import Screen2BuildType from './components/Screen2BuildType';
import Screen3AICapabilities from './components/Screen3AICapabilities';
import Screen4SystemSummary from './components/Screen4SystemSummary';
import Screen4PRDPreview from './components/Screen4PRDPreview';
import LiveBlueprint from './components/LiveBlueprint';

interface WizardData {
  // Screen 1
  fullName: string;
  companyName: string;
  website: string;
  
  // Screen 2
  buildTypes: string[];
  industry: string;
  industryOther: string;
  projectDescription: string;
  
  // Screen 3
  aiServices: string[];
  generativeAI: string[];
  businessOutcomes: string[];
  
  // Screen 4
  summaryConfirmed: boolean;
}

export default function WizardV3Container() {
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState(1);
  const [wizardData, setWizardData] = useState<WizardData>({
    fullName: '',
    companyName: '',
    website: '',
    buildTypes: [],
    industry: '',
    industryOther: '',
    projectDescription: '',
    aiServices: [],
    generativeAI: [],
    businessOutcomes: [],
    summaryConfirmed: false,
  });

  const updateWizardData = (data: Partial<WizardData>) => {
    setWizardData(prev => ({ ...prev, ...data }));
    // Backup to sessionStorage
    sessionStorage.setItem('wizardV3Data', JSON.stringify({ ...wizardData, ...data }));
  };

  const handleNext = () => {
    if (currentScreen < 4) {
      setCurrentScreen(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Final screen - navigate to Client Dashboard
      console.log('Wizard completed:', wizardData);
      navigate('/dashboard-v3');
    }
  };

  const handleBack = () => {
    if (currentScreen > 1) {
      setCurrentScreen(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Progress Indicator */}
        <div className="max-w-[640px] mx-auto">
          <ProgressIndicator currentScreen={currentScreen} totalScreens={4} />
        </div>

        {/* Main Content - Two Column Layout */}
        <div className={`grid ${currentScreen === 4 ? 'lg:grid-cols-[400px_1fr_380px]' : 'lg:grid-cols-[640px_1fr]'} gap-8 items-start`}>
          {/* Left Column - Screen Content */}
          <div className={currentScreen === 4 ? '' : 'lg:col-span-1'}>
            {currentScreen === 1 && (
              <Screen1Basics
                data={wizardData}
                updateData={updateWizardData}
                onNext={handleNext}
              />
            )}
            
            {currentScreen === 2 && (
              <Screen2BuildType
                data={wizardData}
                updateData={updateWizardData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            
            {currentScreen === 3 && (
              <Screen3AICapabilities
                data={wizardData}
                updateData={updateWizardData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            
            {currentScreen === 4 && (
              <Screen4SystemSummary data={wizardData} />
            )}
          </div>

          {/* Middle Column - PRD Preview (Screen 4 only) */}
          {currentScreen === 4 && (
            <div className="hidden lg:block">
              <Screen4PRDPreview
                data={wizardData}
                updateData={updateWizardData}
                onNext={handleNext}
                onBack={handleBack}
              />
            </div>
          )}

          {/* Right Column - Live Blueprint (Desktop Only) */}
          <div className={`hidden lg:block ${currentScreen === 4 ? '' : ''}`}>
            <LiveBlueprint screen={currentScreen} data={wizardData} />
          </div>
        </div>

        {/* Mobile View - Screen 4 PRD */}
        {currentScreen === 4 && (
          <div className="lg:hidden mt-8 max-w-[640px] mx-auto">
            <Screen4PRDPreview
              data={wizardData}
              updateData={updateWizardData}
              onNext={handleNext}
              onBack={handleBack}
            />
          </div>
        )}
      </div>
    </div>
  );
}