'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProgressIndicator from './components/ProgressIndicator';
import Screen1Basics from './components/Screen1Basics';
import Screen2BuildType from './components/Screen2BuildType';
import Screen3Goals from './components/Screen3Goals';
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
  goals: string[];
}

export default function WizardV3Container() {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState(1);
  const [wizardData, setWizardData] = useState<WizardData>({
    fullName: '',
    companyName: '',
    website: '',
    buildTypes: [],
    industry: '',
    industryOther: '',
    projectDescription: '',
    goals: [],
  });

  const updateWizardData = (data: Partial<WizardData>) => {
    setWizardData(prev => ({ ...prev, ...data }));
    // Backup to sessionStorage
    sessionStorage.setItem('wizardV3Data', JSON.stringify({ ...wizardData, ...data }));
  };

  const handleNext = () => {
    if (currentScreen < 3) {
      setCurrentScreen(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Final screen - would normally submit or navigate
      console.log('Wizard completed:', wizardData);
      // For now, just show an alert
      alert('Wizard completed! Check console for data.');
      // In production, you'd navigate to next page:
      // router.push('/wizard-v3/review');
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
          <ProgressIndicator currentScreen={currentScreen} totalScreens={3} />
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-[640px_1fr] gap-8 items-start">
          {/* Left Column - Screen Content */}
          <div>
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
              <Screen3Goals
                data={wizardData}
                updateData={updateWizardData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
          </div>

          {/* Right Column - Live Blueprint (Desktop Only) */}
          <div className="hidden lg:block">
            <LiveBlueprint screen={currentScreen} data={wizardData} />
          </div>
        </div>

        {/* Mobile Blueprint (Bottom) */}
        <div className="lg:hidden mt-8 max-w-[640px] mx-auto">
          <LiveBlueprint screen={currentScreen} data={wizardData} />
        </div>
      </div>
    </div>
  );
}
