import React, { useState } from 'react';
import { HomePageV7 } from './components/premium/HomePageV7';
import { HomePageV6 } from './components/premium/HomePageV6';
import { HomePageV5 } from './components/premium/HomePageV5';
import { HomePageV4 } from './components/premium/HomePageV4';
import { HomeV3 } from './components/HomeV3';
import { HomeV2 } from './components/HomeV2';
import { HomeV1 } from './components/HomeV1';
import { BriefWizard } from './components/BriefWizard';
import { AIProcessingScreen } from './components/AIProcessingScreen';
import { ProposalReadyScreen } from './components/ProposalReadyScreen';
import { CRMLeadsDashboard } from './components/crm/CRMLeadsDashboard';
import { LeadsDashboard } from './components/dashboard/LeadsDashboard';
import { WorkflowAutomationHub } from './components/crm/workflows/WorkflowAutomationHub';
import { LeadProvider } from './context/LeadContext';
import { SettingsPage } from './components/crm/SettingsPage';
import { WhatsAppAutomationPage } from './components/whatsapp/WhatsAppAutomationPage';
import { AboutUsPage } from './components/about/AboutUsPage';
import { BookingPage } from './components/booking/BookingPage';
import { SitemapV2 } from './components/docs/SitemapV2';
import { ProjectsPageV7 } from './components/premium/v7/ProjectsPageV7';
import { AIWebDevPageV7 } from './components/premium/v7/services/AIWebDevPageV7';
import { AIDevelopmentPageV7 } from './components/premium/v7/services/AIDevelopmentPageV7';
import { ProcessPageV2 } from './components/premium/v7/process/ProcessPageV2';
import { ServicesPageV2 } from './components/premium/v7/services/ServicesPageV2';
import { AISalesMarketingPageV7 } from './components/premium/v7/services/AISalesMarketingPageV7';
import { AIAgentsPageV7 } from './components/premium/v7/services/AIAgentsPageV7';
import { AIMVPPageV7 } from './components/premium/v7/services/AIMVPPageV7';
import { AIChatbotsPageV7 } from './components/premium/v7/services/AIChatbotsPageV7';
import { IndustryChatbotPageV7 } from './components/premium/v7/services/IndustryChatbotPageV7';
import { StyleGuideV6 } from './components/premium/v6/docs/StyleGuideV6';
import { StartupAIArchitecturePage } from './components/premium/v7/docs/StartupAIArchitecturePage';
import { InvestorSharePage } from './components/premium/v7/InvestorSharePage';
import { DeckEditorPage } from './components/premium/v7/deck/DeckEditorPage';
import { EventHubPage } from './components/premium/v7/events/EventHubPage';
import { AutomationMapPage } from './components/ops/AutomationMapPage';
import { CallIngestion } from './components/crm/intelligence/CallIngestion';
import { AnalysisState } from './components/crm/intelligence/AnalysisState';
import { CallBrief } from './components/crm/intelligence/CallBrief';
import { CommandBar } from './components/crm/intelligence/CommandBar';
import { SearchResults } from './components/crm/intelligence/SearchResults';
import { CommandBarProvider } from './context/CommandBarContext';
import { IntelligenceProvider } from './context/IntelligenceContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Toaster } from 'sonner';
import { GlobalChatbot } from './components/GlobalChatbot';
import { SideMenu } from './components/SideMenu';
import { ProjectDashboard } from './components/ProjectDashboard';
import { AdminLayout } from './components/crm/AdminLayout';
import { AgentControlRoom } from './components/ops/AgentControlRoom';
import { LoginPage } from './components/auth/LoginPage';

// Protected Route Wrapper
function ProtectedRoute({ children, fallback }: { children: React.ReactNode, fallback: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) return null; // Or a loading spinner
  if (!isAuthenticated) return <>{fallback}</>;
  
  return <>{children}</>;
}

function MainApp() {
  const [currentVersion, setCurrentVersion] = useState<'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7' | 'wizard' | 'processing' | 'proposal' | 'dashboard' | 'leads' | 'ops' | 'workflow' | 'settings' | 'whatsapp' | 'about' | 'projects' | 'ai-web-dev' | 'ai-development' | 'process' | 'services-v2' | 'ai-sales-marketing' | 'ai-agents' | 'ai-mvp' | 'ai-chatbots' | 'chatbot-saas' | 'chatbot-ecommerce' | 'chatbot-healthcare' | 'chatbot-real-estate' | 'chatbot-b2b' | 'chatbot-automotive' | 'chatbot-tourism' | 'style-guide' | 'booking' | 'sitemap' | 'startup-ai-docs' | 'share-investor' | 'deck-editor' | 'event-hub' | 'intelligence-ingest' | 'intelligence-analysis' | 'intelligence-brief' | 'intelligence-search' | 'intelligence-command'>('sitemap');

  const navigateToWizard = () => {
    setCurrentVersion('wizard');
  };

  const navigateToDashboard = () => {
    setCurrentVersion('dashboard');
  };
  
  const navigateToWhatsApp = () => {
    setCurrentVersion('whatsapp');
  };
  
  const navigateToAbout = () => {
    setCurrentVersion('about');
  };
  
  const navigateToHome = () => {
    setCurrentVersion('v7'); // Default to v7 as per new plan
  };

  const navigateToProcessing = () => {
    setCurrentVersion('processing');
  };

  const navigateToProposal = () => {
    setCurrentVersion('proposal');
  };

  const navigateToBooking = () => {
    setCurrentVersion('booking');
  };

  // Define pages where chatbot should be hidden
  const hideChatbotPages = ['wizard', 'processing', 'proposal', 'dashboard', 'leads', 'ops', 'workflow', 'deck-editor'];
  const showChatbot = !hideChatbotPages.includes(currentVersion);

  return (
    <LeadProvider>
      <Toaster position="top-right" />
      <CommandBar onSearch={() => setCurrentVersion('intelligence-search')} />
      {/* Global AI Assistant */}
      {showChatbot && <GlobalChatbot onNavigate={setCurrentVersion} />}

      {/* Side Menu */}
      <SideMenu 
        currentVersion={currentVersion}
        onVersionChange={setCurrentVersion}
      />

      {/* Render Current Version */}
      {currentVersion === 'sitemap' && <SitemapV2 onNavigate={setCurrentVersion} />}
      {currentVersion === 'startup-ai-docs' && <StartupAIArchitecturePage onVersionChange={setCurrentVersion} />}
      {currentVersion === 'share-investor' && <InvestorSharePage onNavigateToBooking={navigateToBooking} onNavigateToHome={navigateToHome} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'deck-editor' && <DeckEditorPage onNavigate={setCurrentVersion} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'event-hub' && <EventHubPage onNavigate={setCurrentVersion} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'style-guide' && <StyleGuideV6 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'booking' && <BookingPage onNavigateToHome={navigateToHome} onVersionChange={setCurrentVersion} onConfirm={navigateToDashboard} />}
      {currentVersion === 'v1' && <HomeV1 onNavigateToWizard={navigateToWizard} onNavigateToDashboard={navigateToDashboard} onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v2' && <HomeV2 onNavigateToWizard={navigateToWizard} onNavigateToDashboard={navigateToDashboard} onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v3' && <HomeV3 onNavigateToWizard={navigateToWizard} onNavigateToDashboard={navigateToDashboard} onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v4' && <HomePageV4 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v5' && <HomePageV5 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v6' && <HomePageV6 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'v7' && <HomePageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'projects' && <ProjectsPageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'ai-web-dev' && <AIWebDevPageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
      {currentVersion === 'ai-development' && <AIDevelopmentPageV7 onNavigateToWhatsApp={navigateToWhatsApp} onNavigateToAbout={navigateToAbout} onVersionChange={setCurrentVersion} />}
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
      {currentVersion === 'proposal' && <ProposalReadyScreen onViewProposal={navigateToBooking} onGoToDashboard={navigateToDashboard} />}
      
      {/* Protected Routes */}
      {currentVersion === 'dashboard' && (
        <ProtectedRoute fallback={<LoginPage onLoginSuccess={() => {}} />}>
          <ProjectDashboard onClose={navigateToHome} />
        </ProtectedRoute>
      )}
      
      {currentVersion === 'leads' && (
        <ProtectedRoute fallback={<LoginPage onLoginSuccess={() => {}} />}>
          <AdminLayout activePage="leads" onNavigate={(page) => setCurrentVersion(page)}>
            <CRMLeadsDashboard />
          </AdminLayout>
        </ProtectedRoute>
      )}
      {currentVersion === 'ops' && (
        <ProtectedRoute fallback={<LoginPage onLoginSuccess={() => {}} />}>
           <AdminLayout activePage="ops" onNavigate={(page) => setCurrentVersion(page)}>
            <AgentControlRoom />
          </AdminLayout>
        </ProtectedRoute>
      )}
      {currentVersion === 'workflow' && (
        <ProtectedRoute fallback={<LoginPage onLoginSuccess={() => {}} />}>
           <AdminLayout activePage="workflow" onNavigate={(page) => setCurrentVersion(page)}>
            <AutomationMapPage />
          </AdminLayout>
        </ProtectedRoute>
      )}
      {currentVersion === 'settings' && (
        <ProtectedRoute fallback={<LoginPage onLoginSuccess={() => {}} />}>
           <AdminLayout activePage="settings" onNavigate={(page) => setCurrentVersion(page)}>
            <SettingsPage />
          </AdminLayout>
        </ProtectedRoute>
      )}

      {/* Sales Intelligence Routes */}
      {currentVersion === 'intelligence-ingest' && (
        <ProtectedRoute fallback={<LoginPage onLoginSuccess={() => {}} />}>
           <AdminLayout activePage="leads" onNavigate={(page) => setCurrentVersion(page)}>
            <CallIngestion onUploadComplete={() => setCurrentVersion('intelligence-analysis')} />
          </AdminLayout>
        </ProtectedRoute>
      )}
      {currentVersion === 'intelligence-analysis' && (
        <ProtectedRoute fallback={<LoginPage onLoginSuccess={() => {}} />}>
           <AdminLayout activePage="leads" onNavigate={(page) => setCurrentVersion(page)}>
            <AnalysisState onComplete={() => setCurrentVersion('intelligence-brief')} />
          </AdminLayout>
        </ProtectedRoute>
      )}
      {currentVersion === 'intelligence-brief' && (
        <ProtectedRoute fallback={<LoginPage onLoginSuccess={() => {}} />}>
           <AdminLayout activePage="leads" onNavigate={(page) => setCurrentVersion(page)}>
            <CallBrief />
          </AdminLayout>
        </ProtectedRoute>
      )}
      {currentVersion === 'intelligence-search' && (
        <ProtectedRoute fallback={<LoginPage onLoginSuccess={() => {}} />}>
           <AdminLayout activePage="leads" onNavigate={(page) => setCurrentVersion(page)}>
            <SearchResults onViewBrief={() => setCurrentVersion('intelligence-brief')} />
          </AdminLayout>
        </ProtectedRoute>
      )}
      {currentVersion === 'intelligence-command' && (
         <ProtectedRoute fallback={<LoginPage onLoginSuccess={() => {}} />}>
            <AdminLayout activePage="leads" onNavigate={(page) => setCurrentVersion(page)}>
              <div className="relative h-[80vh] w-full">
                <CommandBar />
              </div>
           </AdminLayout>
         </ProtectedRoute>
      )}
      
      {currentVersion === 'whatsapp' && <WhatsAppAutomationPage />}
      {currentVersion === 'about' && <AboutUsPage />}
    </LeadProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CommandBarProvider>
        <IntelligenceProvider>
          <MainApp />
        </IntelligenceProvider>
      </CommandBarProvider>
    </AuthProvider>
  );
}