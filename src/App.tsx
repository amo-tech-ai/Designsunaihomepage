import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { LeadProvider } from './context/LeadContext';
import { CommandBarProvider } from './context/CommandBarContext';
import { IntelligenceProvider } from './context/IntelligenceContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'sonner';
import { GlobalChatbot } from './components/GlobalChatbot';
import { SideMenu } from './components/SideMenu';
import { CommandBar } from './components/crm/intelligence/CommandBar';
import { ErrorBoundary } from './components/ErrorBoundary';
import { DevModeBanner } from './components/DevModeBanner';
import { useLocation, useNavigate } from 'react-router-dom';

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="animate-pulse text-orange-500">Loading...</div>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const element = useRoutes(routes);
  
  // Define pages where chatbot should be hidden
  const hideChatbotPages = [
    '/wizard',
    '/wizard-v3',
    '/processing', 
    '/proposal',
    '/dashboard',
    '/dashboard-v3',
    '/deck-editor',
    '/app/leads',
    '/app/ops',
    '/app/workflow'
  ];
  
  const showChatbot = !hideChatbotPages.some(page => location.pathname.startsWith(page));
  
  // Map URL path to version for SideMenu
  const getCurrentVersion = () => {
    const path = location.pathname;
    if (path === '/' || path === '/v6') return 'v6'; // V6 is now default
    if (path === '/v1') return 'v1';
    if (path === '/v2') return 'v2';
    if (path === '/v3') return 'v3';
    if (path === '/v4') return 'v4';
    if (path === '/v5') return 'v5';
    if (path === '/v7') return 'v7'; // V7 moved to archive
    if (path === '/v9') return 'v9'; // V9 Editorial Luxury
    if (path === '/wizard') return 'wizard';
    if (path === '/processing') return 'processing';
    if (path === '/proposal') return 'proposal';
    if (path === '/dashboard') return 'dashboard';
    if (path === '/app/leads') return 'leads';
    if (path === '/whatsapp') return 'whatsapp';
    if (path === '/about') return 'about';
    if (path === '/style-guide') return 'style-guide';
    if (path === '/sitemap') return 'sitemap';
    if (path === '/booking') return 'booking';
    return 'v6'; // default to V6
  };
  
  return (
    <LeadProvider>
      <Toaster position="top-right" />
      <CommandBar onSearch={() => navigate('/app/intelligence/search')} />
      
      {showChatbot && <GlobalChatbot onNavigate={(path: string) => navigate(`/${path}`)} />}
      
      <SideMenu 
        currentVersion={getCurrentVersion() as any}
        onVersionChange={(version: string) => navigate(`/${version}`)}
      />
      
      {element}
    </LeadProvider>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CommandBarProvider>
          <IntelligenceProvider>
            <BrowserRouter>
              <DevModeBanner />
              <Suspense fallback={<Loading />}>
                <AppRoutes />
              </Suspense>
            </BrowserRouter>
          </IntelligenceProvider>
        </CommandBarProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}