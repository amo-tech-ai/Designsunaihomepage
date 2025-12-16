import { useState } from 'react';
import { SideMenu } from './components/SideMenu';
import { HomeV1 } from './components/HomeV1';
import { HomeV2 } from './components/HomeV2';
import { HomeV3 } from './components/HomeV3';
import { HomePageV4 } from './components/premium/HomePageV4';
import { HomePageV5 } from './components/premium/HomePageV5';
import { HomePageV6 } from './components/premium/HomePageV6';
import { HomePageV7 } from './components/premium/HomePageV7';
import { BriefWizard } from './components/BriefWizard';
import { AIProcessingScreen } from './components/AIProcessingScreen';
import { ProposalReadyScreen } from './components/ProposalReadyScreen';
import { ProjectDashboard } from './components/ProjectDashboard';
import { WhatsAppAutomationPage } from './components/whatsapp/WhatsAppAutomationPage';
import { AboutUsPage } from './components/about/AboutUsPage';

export default function App() {
  const [currentVersion, setCurrentVersion] = useState<'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7' | 'wizard' | 'processing' | 'proposal' | 'dashboard' | 'whatsapp' | 'about'>('v7');

  const navigateToWizard = () => {
    setCurrentVersion('wizard');
  };

  const navigateToProcessing = () => {
    setCurrentVersion('processing');
  };

  const navigateToProposal = () => {
    setCurrentVersion('proposal');
  };

  const navigateToDashboard = () => {
    setCurrentVersion('dashboard');
  };

  const navigateToHome = () => {
    setCurrentVersion('v6');
  };

  const navigateToWhatsApp = () => {
    setCurrentVersion('whatsapp');
  };

  const navigateToAbout = () => {
    setCurrentVersion('about');
  };

  return (
    <>
      {/* Side Menu */}
      <SideMenu 
        currentVersion={currentVersion}
        onVersionChange={setCurrentVersion}
      />

      {/* Render Current Version */}
      {currentVersion === 'v1' && <HomeV1 onNavigateToWizard={navigateToWizard} onNavigateToDashboard={navigateToDashboard} />}
      {currentVersion === 'v2' && <HomeV2 onNavigateToWizard={navigateToWizard} onNavigateToDashboard={navigateToDashboard} />}
      {currentVersion === 'v3' && <HomeV3 onNavigateToWizard={navigateToWizard} onNavigateToDashboard={navigateToDashboard} />}
      {currentVersion === 'v4' && <HomePageV4 />}
      {currentVersion === 'v5' && <HomePageV5 />}
      {currentVersion === 'v6' && <HomePageV6 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} />}
      {currentVersion === 'v7' && <HomePageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} />}
      {currentVersion === 'wizard' && <BriefWizard onClose={navigateToHome} onSubmit={navigateToProcessing} />}
      {currentVersion === 'processing' && <AIProcessingScreen onComplete={navigateToProposal} />}
      {currentVersion === 'proposal' && <ProposalReadyScreen onViewProposal={navigateToDashboard} onGoToDashboard={navigateToDashboard} />}
      {currentVersion === 'dashboard' && <ProjectDashboard onClose={navigateToHome} />}
      {currentVersion === 'whatsapp' && <WhatsAppAutomationPage />}
      {currentVersion === 'about' && <AboutUsPage />}
    </>
  );
}