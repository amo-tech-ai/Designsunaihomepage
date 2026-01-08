import { lazy } from 'react';

// Home Pages
const HomePageV7 = lazy(() => import('../../components/premium/HomePageV7').then(m => ({ default: m.HomePageV7 })));
const HomePageV11 = lazy(() => import('../../components/premium/v11/home-v11/HomePageV11Refactored').then(m => ({ default: m.HomePageV11Refactored })));
const HomePageV6 = lazy(() => import('../../components/premium/v6/home-v6/HomePageV6Refactored').then(m => ({ default: m.HomePageV6Refactored })));
const HomePageV5 = lazy(() => import('../../components/premium/v5/home-v5/HomePageV5Refactored').then(m => ({ default: m.HomePageV5Refactored })));
const HomePageV4 = lazy(() => import('../../components/premium/v4/home-v4/HomePageV4Refactored').then(m => ({ default: m.HomePageV4Refactored })));
const HomeV3 = lazy(() => import('../../components/HomeV3').then(m => ({ default: m.HomeV3 })));
const HomeV2 = lazy(() => import('../../components/HomeV2').then(m => ({ default: m.HomeV2 })));
const HomeV1 = lazy(() => import('../../components/HomeV1').then(m => ({ default: m.HomeV1 })));
const HomePageV9 = lazy(() => import('../../home-v9/HomeV9'));
const HomePageV10 = lazy(() => import('../../home-v10/HomePageV10'));

// Service Pages
const ProjectsPageV7 = lazy(() => import('../../components/premium/v7/ProjectsPageV7').then(m => ({ default: m.ProjectsPageV7 })));
const AIWebDevPageV7 = lazy(() => import('../../components/premium/v7/services/AIWebDevPageV7').then(m => ({ default: m.AIWebDevPageV7 })));
const AIDevelopmentPageV7 = lazy(() => import('../../components/premium/v7/services/AIDevelopmentPageV7').then(m => ({ default: m.AIDevelopmentPageV7 })));
const ProcessPageV2 = lazy(() => import('../../components/premium/v7/process/ProcessPageV2Refactored').then(m => ({ default: m.ProcessPageV2Refactored })));
const ProcessPageV11 = lazy(() => import('../../components/premium/v11/ProcessPageV11').then(m => ({ default: m.ProcessPageV11 })));
const ProcessPageV12 = lazy(() => import('../../components/premium/v11/ProcessPageV12').then(m => ({ default: m.ProcessPageV12 })));
const ServicesPageV2 = lazy(() => import('../../components/premium/v7/services/ServicesPageV2').then(m => ({ default: m.ServicesPageV2 })));
const AISalesMarketingPageV7 = lazy(() => import('../../components/premium/v7/services/AISalesMarketingPageV7').then(m => ({ default: m.AISalesMarketingPageV7 })));
const AIAgentsPageV7 = lazy(() => import('../../components/premium/v7/services/AIAgentsPageV7').then(m => ({ default: m.AIAgentsPageV7 })));
const AIMVPPageV7 = lazy(() => import('../../components/premium/v7/services/AIMVPPageV7').then(m => ({ default: m.AIMVPPageV7 })));
const AIChatbotsPageV7 = lazy(() => import('../../components/premium/v7/services/AIChatbotsPageV7').then(m => ({ default: m.AIChatbotsPageV7 })));
const IndustryChatbotSaaS = lazy(() => import('../../components/premium/v7/services/IndustryChatbotPageV7').then(m => ({ default: m.IndustryChatbotPageV7 })));
const IndustryChatbotEcommerce = lazy(() => import('../../components/premium/v7/services/IndustryChatbotPageV7').then(m => ({ default: m.IndustryChatbotPageV7 })));
const IndustryChatbotHealthcare = lazy(() => import('../../components/premium/v7/services/IndustryChatbotPageV7').then(m => ({ default: m.IndustryChatbotPageV7 })));
const IndustryChatbotRealEstate = lazy(() => import('../../components/premium/v7/services/IndustryChatbotPageV7').then(m => ({ default: m.IndustryChatbotPageV7 })));
const IndustryChatbotB2B = lazy(() => import('../../components/premium/v7/services/IndustryChatbotPageV7').then(m => ({ default: m.IndustryChatbotPageV7 })));
const IndustryChatbotAutomotive = lazy(() => import('../../components/premium/v7/services/IndustryChatbotPageV7').then(m => ({ default: m.IndustryChatbotPageV7 })));
const IndustryChatbotTourism = lazy(() => import('../../components/premium/v7/services/IndustryChatbotPageV7').then(m => ({ default: m.IndustryChatbotPageV7 })));

// Industry Pages
const SaaSIndustryPage = lazy(() => import('../../components/industries/SaaSIndustryPage').then(m => ({ default: m.SaaSIndustryPage })));
const EcommerceIndustryPage = lazy(() => import('../../components/industries/EcommerceIndustryPage').then(m => ({ default: m.EcommerceIndustryPage })));

// Docs & Resources
const StyleGuideV6 = lazy(() => import('../../components/premium/v6/docs/StyleGuideV6').then(m => ({ default: m.StyleGuideV6 })));
const StartupAIArchitecturePage = lazy(() => import('../../components/premium/v7/docs/StartupAIArchitecturePage').then(m => ({ default: m.StartupAIArchitecturePage })));
const InvestorSharePage = lazy(() => import('../../components/premium/v7/InvestorSharePage').then(m => ({ default: m.InvestorSharePage })));
const EventHubPage = lazy(() => import('../../components/premium/v7/events/EventHubPage').then(m => ({ default: m.EventHubPage })));
const SitemapV2 = lazy(() => import('../../components/docs/SitemapV2').then(m => ({ default: m.SitemapV2 })));
const BookingPage = lazy(() => import('../../components/booking/BookingPage').then(m => ({ default: m.BookingPage })));

// Wrapper Components
export const HomePageV7Wrapper = () => <HomePageV7 />;
export const HomePageV11Wrapper = () => <HomePageV11 />;
export const HomePageV6Wrapper = () => <HomePageV6 />;
export const HomePageV5Wrapper = () => <HomePageV5 />;
export const HomePageV4Wrapper = () => <HomePageV4 />;
export const HomeV3Wrapper = () => <HomeV3 />;
export const HomeV2Wrapper = () => <HomeV2 />;
export const HomeV1Wrapper = () => <HomeV1 />;
export const HomePageV9Wrapper = () => <HomePageV9 />;
export const HomePageV10Wrapper = () => <HomePageV10 />;
export const ProjectsPageV7Wrapper = () => <ProjectsPageV7 />;
export const AIWebDevPageV7Wrapper = () => <AIWebDevPageV7 />;
export const AIDevelopmentPageV7Wrapper = () => <AIDevelopmentPageV7 />;
export const ProcessPageV2Wrapper = () => <ProcessPageV2 />;
export const ProcessPageV11Wrapper = () => <ProcessPageV11 />;
export const ProcessPageV12Wrapper = () => <ProcessPageV12 />;
export const ServicesPageV2Wrapper = () => <ServicesPageV2 />;
export const AISalesMarketingPageV7Wrapper = () => <AISalesMarketingPageV7 />;
export const AIAgentsPageV7Wrapper = () => <AIAgentsPageV7 />;
export const AIMVPPageV7Wrapper = () => <AIMVPPageV7 />;
export const AIChatbotsPageV7Wrapper = () => <AIChatbotsPageV7 />;
export const IndustryChatbotSaaSWrapper = () => <IndustryChatbotSaaS industry="saas" />;
export const IndustryChatbotEcommerceWrapper = () => <IndustryChatbotEcommerce industry="ecommerce" />;
export const IndustryChatbotHealthcareWrapper = () => <IndustryChatbotHealthcare industry="healthcare" />;
export const IndustryChatbotRealEstateWrapper = () => <IndustryChatbotRealEstate industry="real-estate" />;
export const IndustryChatbotB2BWrapper = () => <IndustryChatbotB2B industry="b2b" />;
export const IndustryChatbotAutomotiveWrapper = () => <IndustryChatbotAutomotive industry="automotive" />;
export const IndustryChatbotTourismWrapper = () => <IndustryChatbotTourism industry="tourism" />;
export const StyleGuideV6Wrapper = () => <StyleGuideV6 />;
export const StartupAIArchitecturePageWrapper = () => <StartupAIArchitecturePage />;
export const InvestorSharePageWrapper = () => <InvestorSharePage />;
export const EventHubPageWrapper = () => <EventHubPage />;
export const SitemapV2Wrapper = () => <SitemapV2 />;
export const BookingPageWrapper = () => <BookingPage />;
export const SaaSIndustryPageWrapper = () => <SaaSIndustryPage />;
export const EcommerceIndustryPageWrapper = () => <EcommerceIndustryPage />;