import { useNavigate } from 'react-router-dom';
import { HomePageV7 } from '../../components/premium/HomePageV7';
import { HomePageV6 } from '../../components/premium/HomePageV6';
import { HomePageV5 } from '../../components/premium/HomePageV5';
import { HomePageV4 } from '../../components/premium/HomePageV4';
import { HomeV3 } from '../../components/HomeV3';
import { HomeV2 } from '../../components/HomeV2';
import { HomeV1 } from '../../components/HomeV1';
import { ProjectsPageV7 } from '../../components/premium/v7/ProjectsPageV7';
import { AIWebDevPageV7 } from '../../components/premium/v7/services/AIWebDevPageV7';
import { AIDevelopmentPageV7 } from '../../components/premium/v7/services/AIDevelopmentPageV7';
import { ProcessPageV2 } from '../../components/premium/v7/process/ProcessPageV2';
import { ServicesPageV2 } from '../../components/premium/v7/services/ServicesPageV2';
import { AISalesMarketingPageV7 } from '../../components/premium/v7/services/AISalesMarketingPageV7';
import { AIAgentsPageV7 } from '../../components/premium/v7/services/AIAgentsPageV7';
import { AIMVPPageV7 } from '../../components/premium/v7/services/AIMVPPageV7';
import { AIChatbotsPageV7 } from '../../components/premium/v7/services/AIChatbotsPageV7';
import { IndustryChatbotPageV7 } from '../../components/premium/v7/services/IndustryChatbotPageV7';
import { StyleGuideV6 } from '../../components/premium/v6/docs/StyleGuideV6';
import { StartupAIArchitecturePage } from '../../components/premium/v7/docs/StartupAIArchitecturePage';
import { InvestorSharePage } from '../../components/premium/v7/InvestorSharePage';
import { EventHubPage } from '../../components/premium/v7/events/EventHubPage';
import { SitemapV2 } from '../../components/docs/SitemapV2';
import { BookingPage } from '../../components/booking/BookingPage';

// Create common navigation handlers
function useCommonNavigation() {
  const navigate = useNavigate();
  
  return {
    onNavigateToWhatsApp: () => navigate('/whatsapp'),
    onNavigateToAbout: () => navigate('/about'),
    onNavigateToWizard: () => navigate('/wizard'),
    onNavigateToDashboard: () => navigate('/dashboard'),
    onNavigateToHome: () => navigate('/'),
    onNavigateToBooking: () => navigate('/booking'),
    onVersionChange: (version: string) => {
      const versionRoutes: Record<string, string> = {
        'v1': '/v1',
        'v2': '/v2',
        'v3': '/v3',
        'v4': '/v4',
        'v5': '/v5',
        'v6': '/v6',
        'v7': '/',
        'wizard': '/wizard',
        'dashboard': '/dashboard',
        'leads': '/app/leads',
        'ops': '/app/ops',
        'workflow': '/app/workflow',
        'settings': '/app/settings',
        'whatsapp': '/whatsapp',
        'about': '/about',
        'booking': '/booking',
        'projects': '/projects',
        'services-v2': '/services',
        'ai-web-dev': '/services/ai-web-dev',
        'ai-development': '/services/ai-development',
        'ai-sales-marketing': '/services/ai-sales-marketing',
        'ai-agents': '/services/ai-agents',
        'ai-mvp': '/services/ai-mvp',
        'ai-chatbots': '/services/ai-chatbots',
        'process': '/process',
        'sitemap': '/sitemap',
        'style-guide': '/style-guide',
        'startup-ai-docs': '/docs/startup-ai',
        'share-investor': '/share/investor',
        'event-hub': '/events',
        'deck-editor': '/deck-editor',
      };
      navigate(versionRoutes[version] || `/${version}`);
    }
  };
}

// Home Page Wrappers
export function HomePageV7Wrapper() {
  const nav = useCommonNavigation();
  return <HomePageV7 {...nav} />;
}

export function HomePageV6Wrapper() {
  const nav = useCommonNavigation();
  return <HomePageV6 {...nav} />;
}

export function HomePageV5Wrapper() {
  const nav = useCommonNavigation();
  return <HomePageV5 {...nav} />;
}

export function HomePageV4Wrapper() {
  const nav = useCommonNavigation();
  return <HomePageV4 {...nav} />;
}

export function HomeV3Wrapper() {
  const nav = useCommonNavigation();
  return <HomeV3 {...nav} />;
}

export function HomeV2Wrapper() {
  const nav = useCommonNavigation();
  return <HomeV2 {...nav} />;
}

export function HomeV1Wrapper() {
  const nav = useCommonNavigation();
  return <HomeV1 {...nav} />;
}

// Service Page Wrappers
export function ProjectsPageV7Wrapper() {
  const nav = useCommonNavigation();
  return <ProjectsPageV7 {...nav} />;
}

export function AIWebDevPageV7Wrapper() {
  const nav = useCommonNavigation();
  return <AIWebDevPageV7 {...nav} />;
}

export function AIDevelopmentPageV7Wrapper() {
  const nav = useCommonNavigation();
  return <AIDevelopmentPageV7 {...nav} />;
}

export function ProcessPageV2Wrapper() {
  const nav = useCommonNavigation();
  return <ProcessPageV2 {...nav} />;
}

export function ServicesPageV2Wrapper() {
  const nav = useCommonNavigation();
  return <ServicesPageV2 {...nav} />;
}

export function AISalesMarketingPageV7Wrapper() {
  const nav = useCommonNavigation();
  return <AISalesMarketingPageV7 {...nav} />;
}

export function AIAgentsPageV7Wrapper() {
  const nav = useCommonNavigation();
  return <AIAgentsPageV7 {...nav} />;
}

export function AIMVPPageV7Wrapper() {
  const nav = useCommonNavigation();
  return <AIMVPPageV7 {...nav} />;
}

export function AIChatbotsPageV7Wrapper() {
  const nav = useCommonNavigation();
  return <AIChatbotsPageV7 {...nav} />;
}

// Industry Chatbot Wrappers
export function IndustryChatbotSaaSWrapper() {
  const nav = useCommonNavigation();
  return <IndustryChatbotPageV7 industry="saas" {...nav} />;
}

export function IndustryChatbotEcommerceWrapper() {
  const nav = useCommonNavigation();
  return <IndustryChatbotPageV7 industry="ecommerce" {...nav} />;
}

export function IndustryChatbotHealthcareWrapper() {
  const nav = useCommonNavigation();
  return <IndustryChatbotPageV7 industry="healthcare" {...nav} />;
}

export function IndustryChatbotRealEstateWrapper() {
  const nav = useCommonNavigation();
  return <IndustryChatbotPageV7 industry="real-estate" {...nav} />;
}

export function IndustryChatbotB2BWrapper() {
  const nav = useCommonNavigation();
  return <IndustryChatbotPageV7 industry="b2b" {...nav} />;
}

export function IndustryChatbotAutomotiveWrapper() {
  const nav = useCommonNavigation();
  return <IndustryChatbotPageV7 industry="automotive" {...nav} />;
}

export function IndustryChatbotTourismWrapper() {
  const nav = useCommonNavigation();
  return <IndustryChatbotPageV7 industry="tourism" {...nav} />;
}

// Doc/Special Page Wrappers
export function StyleGuideV6Wrapper() {
  const nav = useCommonNavigation();
  return <StyleGuideV6 {...nav} />;
}

export function StartupAIArchitecturePageWrapper() {
  const nav = useCommonNavigation();
  return <StartupAIArchitecturePage onVersionChange={nav.onVersionChange} />;
}

export function InvestorSharePageWrapper() {
  const nav = useCommonNavigation();
  return <InvestorSharePage {...nav} />;
}

export function EventHubPageWrapper() {
  const nav = useCommonNavigation();
  return <EventHubPage onNavigate={nav.onVersionChange} onVersionChange={nav.onVersionChange} />;
}

export function SitemapV2Wrapper() {
  const nav = useCommonNavigation();
  return <SitemapV2 onNavigate={nav.onVersionChange} />;
}

export function BookingPageWrapper() {
  const nav = useCommonNavigation();
  return <BookingPage {...nav} onConfirm={nav.onNavigateToDashboard} />;
}
