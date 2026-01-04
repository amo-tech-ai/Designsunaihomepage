import type { RouteObject } from 'react-router-dom';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { AdminLayoutWrapper } from './wrappers/AdminLayoutWrapper';
import { BriefWizardWrapper, AIProcessingScreenWrapper, ProposalReadyScreenWrapper, WizardStep1Wrapper, WizardStep2Wrapper, WizardStep3Wrapper, WizardStep4Wrapper } from './wrappers/WizardFlowWrappers';
import { CallIngestionWrapper, AnalysisStateWrapper, SearchResultsWrapper } from './wrappers/IntelligenceWrappers';
import { ProjectDashboardWrapper, DeckEditorWrapper } from './wrappers/DashboardWrapper';
import { LoginPageWrapper } from './wrappers/AuthWrapper';
import {
  HomePageV7Wrapper,
  HomePageV6Wrapper,
  HomePageV5Wrapper,
  HomePageV4Wrapper,
  HomeV3Wrapper,
  HomeV2Wrapper,
  HomeV1Wrapper,
  HomePageV9Wrapper,
  ProjectsPageV7Wrapper,
  AIWebDevPageV7Wrapper,
  AIDevelopmentPageV7Wrapper,
  ProcessPageV2Wrapper,
  ServicesPageV2Wrapper,
  AISalesMarketingPageV7Wrapper,
  AIAgentsPageV7Wrapper,
  AIMVPPageV7Wrapper,
  AIChatbotsPageV7Wrapper,
  IndustryChatbotSaaSWrapper,
  IndustryChatbotEcommerceWrapper,
  IndustryChatbotHealthcareWrapper,
  IndustryChatbotRealEstateWrapper,
  IndustryChatbotB2BWrapper,
  IndustryChatbotAutomotiveWrapper,
  IndustryChatbotTourismWrapper,
  StyleGuideV6Wrapper,
  StartupAIArchitecturePageWrapper,
  InvestorSharePageWrapper,
  EventHubPageWrapper,
  SitemapV2Wrapper,
  BookingPageWrapper
} from './wrappers/MarketingPageWrappers';

// Lazy load simple components (no props needed)
import { lazy } from 'react';
const WhatsAppAutomationPage = lazy(() => import('../components/whatsapp/WhatsAppAutomationPage').then(m => ({ default: m.WhatsAppAutomationPage })));
const AboutUsPage = lazy(() => import('../components/about/AboutUsPage').then(m => ({ default: m.AboutUsPage })));
const CRMLeadsDashboard = lazy(() => import('../components/crm/CRMLeadsDashboard').then(m => ({ default: m.CRMLeadsDashboard })));
const SettingsPage = lazy(() => import('../components/crm/SettingsPage').then(m => ({ default: m.SettingsPage })));
const AutomationMapPage = lazy(() => import('../components/ops/AutomationMapPage').then(m => ({ default: m.AutomationMapPage })));
const AgentControlRoom = lazy(() => import('../components/ops/AgentControlRoom').then(m => ({ default: m.AgentControlRoom })));
const CallBrief = lazy(() => import('../components/crm/intelligence/CallBrief').then(m => ({ default: m.CallBrief })));
const PrivacyPage = lazy(() => import('../components/legal/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('../components/legal/TermsPage').then(m => ({ default: m.TermsPage })));
const NotFound = lazy(() => import('../components/NotFound'));
const ProjectIntelligenceDashboard = lazy(() => import('../app/dashboard-v2/page'));
const MainDashboard = lazy(() => import('../app/dashboard-v2/main/page'));
const BlueprintsPage = lazy(() => import('../app/dashboard-v2/blueprints/page'));
const ProjectsPage = lazy(() => import('../app/dashboard-v2/projects/page'));
const TasksPage = lazy(() => import('../app/dashboard-v2/tasks/page'));
const AutomationsPage = lazy(() => import('../app/dashboard-v2/automations/page'));
const SettingsPageV2 = lazy(() => import('../app/dashboard-v2/settings/page'));
const WizardV3 = lazy(() => import('../app/wizard-v3/page'));
const DashboardV3 = lazy(() => import('../app/dashboard-v3/page'));

export const routes: RouteObject[] = [
  // Public Routes - Marketing
  { path: '/', element: <HomePageV6Wrapper /> }, // V6 is now default homepage
  { path: '/v1', element: <HomeV1Wrapper /> },
  { path: '/v2', element: <HomeV2Wrapper /> },
  { path: '/v3', element: <HomeV3Wrapper /> },
  { path: '/v4', element: <HomePageV4Wrapper /> },
  { path: '/v5', element: <HomePageV5Wrapper /> },
  { path: '/v6', element: <HomePageV6Wrapper /> }, // Same as / for consistency
  { path: '/v7', element: <HomePageV7Wrapper /> }, // V7 moved to archive
  { path: '/v9', element: <HomePageV9Wrapper /> }, // V9 is the latest version
  { path: '/projects', element: <ProjectsPageV7Wrapper /> },
  { path: '/process', element: <ProcessPageV2Wrapper /> },
  { path: '/services', element: <ServicesPageV2Wrapper /> },
  { path: '/services/ai-web-dev', element: <AIWebDevPageV7Wrapper /> },
  { path: '/services/ai-development', element: <AIDevelopmentPageV7Wrapper /> },
  { path: '/services/ai-sales-marketing', element: <AISalesMarketingPageV7Wrapper /> },
  { path: '/services/ai-agents', element: <AIAgentsPageV7Wrapper /> },
  { path: '/services/ai-mvp', element: <AIMVPPageV7Wrapper /> },
  { path: '/services/ai-chatbots', element: <AIChatbotsPageV7Wrapper /> },
  { path: '/services/chatbot/saas', element: <IndustryChatbotSaaSWrapper /> },
  { path: '/services/chatbot/ecommerce', element: <IndustryChatbotEcommerceWrapper /> },
  { path: '/services/chatbot/healthcare', element: <IndustryChatbotHealthcareWrapper /> },
  { path: '/services/chatbot/real-estate', element: <IndustryChatbotRealEstateWrapper /> },
  { path: '/services/chatbot/b2b', element: <IndustryChatbotB2BWrapper /> },
  { path: '/services/chatbot/automotive', element: <IndustryChatbotAutomotiveWrapper /> },
  { path: '/services/chatbot/tourism', element: <IndustryChatbotTourismWrapper /> },
  { path: '/about', element: <AboutUsPage /> },
  { path: '/whatsapp', element: <WhatsAppAutomationPage /> },
  { path: '/booking', element: <BookingPageWrapper /> },
  { path: '/sitemap', element: <SitemapV2Wrapper /> },
  { path: '/style-guide', element: <StyleGuideV6Wrapper /> },
  { path: '/docs/startup-ai', element: <StartupAIArchitecturePageWrapper /> },
  { path: '/share/investor', element: <InvestorSharePageWrapper /> },
  { path: '/events', element: <EventHubPageWrapper /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  
  // Wizard Flow
  { path: '/wizard', element: <BriefWizardWrapper /> },
  { path: '/wizard/step1', element: <WizardStep1Wrapper /> },
  { path: '/wizard/step2', element: <WizardStep2Wrapper /> },
  { path: '/wizard/step3', element: <WizardStep3Wrapper /> },
  { path: '/wizard/step4', element: <WizardStep4Wrapper /> },
  { path: '/processing', element: <AIProcessingScreenWrapper /> },
  { path: '/proposal', element: <ProposalReadyScreenWrapper /> },
  { path: '/dashboard-v2', element: <ProjectIntelligenceDashboard /> },
  { path: '/dashboard-v2/main', element: <MainDashboard /> },
  { path: '/dashboard-v2/blueprints', element: <BlueprintsPage /> },
  { path: '/dashboard-v2/projects', element: <ProjectsPage /> },
  { path: '/dashboard-v2/tasks', element: <TasksPage /> },
  { path: '/dashboard-v2/automations', element: <AutomationsPage /> },
  { path: '/dashboard-v2/settings', element: <SettingsPageV2 /> },
  { path: '/wizard-v3', element: <WizardV3 /> },
  { path: '/dashboard-v3', element: <DashboardV3 /> },
  
  // Auth
  { path: '/login', element: <LoginPageWrapper /> },
  
  // Protected Routes - Dashboard
  {
    path: '/dashboard',
    element: <ProtectedRoute><ProjectDashboardWrapper /></ProtectedRoute>
  },
  {
    path: '/deck-editor',
    element: <ProtectedRoute><DeckEditorWrapper /></ProtectedRoute>
  },
  
  // Protected Routes - CRM/Admin
  {
    path: '/app/leads',
    element: <ProtectedRoute><AdminLayoutWrapper activePage="leads"><CRMLeadsDashboard /></AdminLayoutWrapper></ProtectedRoute>
  },
  {
    path: '/app/ops',
    element: <ProtectedRoute><AdminLayoutWrapper activePage="ops"><AgentControlRoom /></AdminLayoutWrapper></ProtectedRoute>
  },
  {
    path: '/app/workflow',
    element: <ProtectedRoute><AdminLayoutWrapper activePage="workflow"><AutomationMapPage /></AdminLayoutWrapper></ProtectedRoute>
  },
  {
    path: '/app/settings',
    element: <ProtectedRoute><AdminLayoutWrapper activePage="settings"><SettingsPage /></AdminLayoutWrapper></ProtectedRoute>
  },
  
  // Protected Routes - Sales Intelligence
  {
    path: '/app/intelligence/ingest',
    element: <ProtectedRoute><AdminLayoutWrapper activePage="leads"><CallIngestionWrapper /></AdminLayoutWrapper></ProtectedRoute>
  },
  {
    path: '/app/intelligence/analysis',
    element: <ProtectedRoute><AdminLayoutWrapper activePage="leads"><AnalysisStateWrapper /></AdminLayoutWrapper></ProtectedRoute>
  },
  {
    path: '/app/intelligence/brief',
    element: <ProtectedRoute><AdminLayoutWrapper activePage="leads"><CallBrief /></AdminLayoutWrapper></ProtectedRoute>
  },
  {
    path: '/app/intelligence/search',
    element: <ProtectedRoute><AdminLayoutWrapper activePage="leads"><SearchResultsWrapper /></AdminLayoutWrapper></ProtectedRoute>
  },
  
  // 404
  { path: '*', element: <NotFound /> }
];