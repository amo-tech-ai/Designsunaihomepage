import { useState } from 'react';
import { SideMenu } from './components/SideMenu';
import { HomeV1 } from './components/HomeV1';
import { HomeV2 } from './components/HomeV2';
import { HomeV3 } from './components/HomeV3';
import { HomePageV4 } from './components/premium/HomePageV4';
import { HomePageV5 } from './components/premium/HomePageV5';
import { HomePageV6 } from './components/premium/HomePageV6';
import { HomePageV7 } from './components/premium/HomePageV7';
import { ProjectsPageV7 } from './components/premium/v7/ProjectsPageV7';
import { AIWebDevPageV7 } from './components/premium/v7/services/AIWebDevPageV7';
import { AIDevelopmentPageV7 } from './components/premium/v7/services/AIDevelopmentPageV7';
import { ServicesPageV2 } from './components/premium/v7/services/ServicesPageV2';
import { AISalesMarketingPageV7 } from './components/premium/v7/services/AISalesMarketingPageV7';
import { AIAgentsPageV7 } from './components/premium/v7/services/AIAgentsPageV7';
import { AIMVPPageV7 } from './components/premium/v7/services/AIMVPPageV7';
import { AIChatbotsPageV7 } from './components/premium/v7/services/AIChatbotsPageV7';
import { IndustryChatbotPageV7 } from './components/premium/v7/services/IndustryChatbotPageV7';
import { ProcessPageV2 } from './components/premium/v7/process/ProcessPageV2';
import { BriefWizard } from './components/BriefWizard';
import { AIProcessingScreen } from './components/AIProcessingScreen';
import { ProposalReadyScreen } from './components/ProposalReadyScreen';
import { ProjectDashboard } from './components/ProjectDashboard';
import { WhatsAppAutomationPage } from './components/whatsapp/WhatsAppAutomationPage';
import { AboutUsPage } from './components/about/AboutUsPage';

export default function App() {
  const [currentVersion, setCurrentVersion] = useState<'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7' | 'wizard' | 'processing' | 'proposal' | 'dashboard' | 'whatsapp' | 'about' | 'projects' | 'ai-web-dev' | 'ai-development' | 'process' | 'services-v2' | 'ai-sales-marketing' | 'ai-agents' | 'ai-mvp' | 'ai-chatbots' | 'chatbot-saas' | 'chatbot-ecommerce' | 'chatbot-healthcare' | 'chatbot-real-estate' | 'chatbot-b2b' | 'chatbot-automotive' | 'chatbot-tourism'>('v7');

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
      {currentVersion === 'v1' && <HomeV1 onNavigateToWizard={navigateToWizard} onNavigateToDashboard={navigateToDashboard} onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v2' && <HomeV2 onNavigateToWizard={navigateToWizard} onNavigateToDashboard={navigateToDashboard} onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v3' && <HomeV3 onNavigateToWizard={navigateToWizard} onNavigateToDashboard={navigateToDashboard} onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v4' && <HomePageV4 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v5' && <HomePageV5 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v6' && <HomePageV6 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v7' && <HomePageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'projects' && <ProjectsPageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'ai-web-dev' && <AIWebDevPageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'ai-development' && <ServicesPageV2 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'services-v2' && <ServicesPageV2 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'ai-sales-marketing' && <AISalesMarketingPageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'ai-agents' && <AIAgentsPageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'ai-mvp' && <AIMVPPageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'ai-chatbots' && <AIChatbotsPageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'chatbot-saas' && <IndustryChatbotPageV7 industry="saas" onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'chatbot-ecommerce' && <IndustryChatbotPageV7 industry="ecommerce" onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'chatbot-healthcare' && <IndustryChatbotPageV7 industry="healthcare" onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'chatbot-real-estate' && <IndustryChatbotPageV7 industry="real-estate" onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'chatbot-b2b' && <IndustryChatbotPageV7 industry="b2b" onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'chatbot-automotive' && <IndustryChatbotPageV7 industry="automotive" onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'chatbot-tourism' && <IndustryChatbotPageV7 industry="tourism" onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'process' && <ProcessPageV2 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'wizard' && <BriefWizard onClose={navigateToHome} onSubmit={navigateToProcessing} />}
      {currentVersion === 'processing' && <AIProcessingScreen onComplete={navigateToProposal} />}
      {currentVersion === 'proposal' && <ProposalReadyScreen onViewProposal={navigateToDashboard} onGoToDashboard={navigateToDashboard} />}
      {currentVersion === 'dashboard' && <ProjectDashboard onClose={navigateToHome} />}
      {currentVersion === 'whatsapp' && <WhatsAppAutomationPage />}
      {currentVersion === 'about' && <AboutUsPage />}
    </>
  );
}