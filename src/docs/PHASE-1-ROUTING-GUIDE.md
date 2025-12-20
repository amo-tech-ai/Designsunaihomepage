# Phase 1: Routing Implementation Guide

**Date:** December 20, 2025  
**Phase:** Routing Infrastructure  
**Priority:** 🔥🔥🔥 **CRITICAL BLOCKER**  
**Estimated Time:** 2 hours

---

## 🎯 OBJECTIVE

Transform the current **state-based navigation** into a **production-ready routing system** using React Router v6.

**Current Problem:**
- App uses `useState` to switch between components
- No shareable URLs
- No browser history
- Not SEO-friendly
- Not production-ready

**Solution:**
- Implement React Router v6
- URL-based navigation
- Shareable links
- SEO-optimized
- Production-ready

---

## 📋 STEP-BY-STEP IMPLEMENTATION

### Step 1: Install Dependencies (5 min)

```bash
npm install react-router-dom@6
```

**Files to create:**
- None (just installation)

---

### Step 2: Create Route Configuration (15 min)

**Create:** `/src/config/routes.tsx`

```tsx
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

// Lazy load components for code splitting
const HomePageV7 = lazy(() => import('@/components/premium/HomePageV7'));
const ServicesPageV2 = lazy(() => import('@/components/premium/v7/services/ServicesPageV2'));
const AIWebDevPageV7 = lazy(() => import('@/components/premium/v7/services/AIWebDevPageV7'));
// ... import all other pages

// Route guards
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { PublicRoute } from '@/components/auth/PublicRoute';

export const routes: RouteObject[] = [
  // PUBLIC MARKETING ROUTES
  {
    path: '/',
    element: <HomePageV7 />,
  },
  {
    path: '/services',
    element: <ServicesPageV2 />,
  },
  {
    path: '/services/:serviceSlug',
    element: <ServiceDetailPage />, // Dynamic routing
  },
  {
    path: '/pricing',
    element: <PricingPage />, // TO BE BUILT
  },
  {
    path: '/case-studies',
    element: <CaseStudiesPage />, // TO BE BUILT
  },
  {
    path: '/case-studies/:slug',
    element: <CaseStudyDetailPage />, // TO BE BUILT
  },
  {
    path: '/contact',
    element: <ContactPage />, // TO BE BUILT
  },
  {
    path: '/about',
    element: <AboutUsPage />,
  },
  {
    path: '/booking',
    element: <BookingPage />,
  },
  
  // WIZARD ROUTES
  {
    path: '/wizard',
    children: [
      { index: true, element: <BriefWizard /> },
      { path: 'processing', element: <AIProcessingScreen /> },
      { path: 'complete', element: <ProposalReadyScreen /> },
    ],
  },
  
  // PROTECTED APP ROUTES
  {
    path: '/app',
    element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
    children: [
      { index: true, element: <Navigate to="/app/dashboard" /> },
      { path: 'dashboard', element: <ProjectDashboard /> },
      { path: 'leads', element: <CRMLeadsDashboard /> },
      { path: 'leads/:id', element: <LeadProfileView /> },
      { path: 'ops', element: <AgentControlRoom /> },
      { path: 'workflows', element: <AutomationMapPage /> },
      { path: 'intelligence/upload', element: <CallIngestion /> },
      { path: 'intelligence/analysis', element: <AnalysisState /> },
      { path: 'intelligence/brief', element: <CallBrief /> },
      { path: 'intelligence/search', element: <SearchResults /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  
  // AUTH ROUTES
  {
    path: '/login',
    element: <PublicRoute><LoginPage /></PublicRoute>,
  },
  
  // 404
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
```

**Dependencies:**
- All page components must be imported
- Route guards must be created
- 404 page must be created

---

### Step 3: Create Route Guards (20 min)

**Create:** `/src/components/auth/ProtectedRoute.tsx`

```tsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-accent-500" />
        <span className="ml-3 text-lg">Loading...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login, save attempted location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
```

**Create:** `/src/components/auth/PublicRoute.tsx`

```tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface PublicRouteProps {
  children: React.ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    // Already logged in, redirect to dashboard
    return <Navigate to="/app/dashboard" replace />;
  }

  return <>{children}</>;
}
```

---

### Step 4: Create 404 Page (15 min)

**Create:** `/src/pages/NotFound.tsx`

```tsx
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-accent-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
          
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent-500 text-accent-600 rounded-lg hover:bg-accent-50 transition-colors"
          >
            <Search className="mr-2 h-5 w-5" />
            View Services
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500 mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/pricing" className="text-sm text-accent-600 hover:underline">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-sm text-accent-600 hover:underline">
              Case Studies
            </Link>
            <Link to="/about" className="text-sm text-accent-600 hover:underline">
              About
            </Link>
            <Link to="/contact" className="text-sm text-accent-600 hover:underline">
              Contact
            </Link>
            <Link to="/wizard" className="text-sm text-accent-600 hover:underline">
              Start Brief
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

### Step 5: Update App.tsx (30 min)

**Replace entire `/App.tsx`:**

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Toaster } from 'sonner@2.0.3';
import { AuthProvider } from './context/AuthContext';
import { CommandBarProvider } from './context/CommandBarContext';
import { IntelligenceProvider } from './context/IntelligenceContext';
import { LeadProvider } from './context/LeadContext';
import { GlobalChatbot } from './components/GlobalChatbot';
import { CommandBar } from './components/crm/intelligence/CommandBar';
import { Loader2 } from 'lucide-react';

// Lazy load pages
const HomePageV7 = lazy(() => import('./components/premium/HomePageV7'));
const ServicesPageV2 = lazy(() => import('./components/premium/v7/services/ServicesPageV2'));
const AboutUsPage = lazy(() => import('./components/about/AboutUsPage'));
const BookingPage = lazy(() => import('./components/booking/BookingPage'));
const BriefWizard = lazy(() => import('./components/BriefWizard'));
// ... import all other pages

// Route guards
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { PublicRoute } from './components/auth/PublicRoute';

// Loading fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-accent-500" />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CommandBarProvider>
        <IntelligenceProvider>
          <LeadProvider>
            <BrowserRouter>
              <Toaster position="top-right" />
              <CommandBar />
              <GlobalChatbot />
              
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* PUBLIC ROUTES */}
                  <Route path="/" element={<HomePageV7 />} />
                  <Route path="/services" element={<ServicesPageV2 />} />
                  <Route path="/about" element={<AboutUsPage />} />
                  <Route path="/booking" element={<BookingPage />} />
                  
                  {/* WIZARD */}
                  <Route path="/wizard" element={<BriefWizard />} />
                  <Route path="/wizard/processing" element={<AIProcessingScreen />} />
                  <Route path="/wizard/complete" element={<ProposalReadyScreen />} />
                  
                  {/* PROTECTED APP ROUTES */}
                  <Route
                    path="/app/*"
                    element={
                      <ProtectedRoute>
                        <AppRoutes />
                      </ProtectedRoute>
                    }
                  />
                  
                  {/* AUTH */}
                  <Route
                    path="/login"
                    element={
                      <PublicRoute>
                        <LoginPage />
                      </PublicRoute>
                    }
                  />
                  
                  {/* 404 */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </LeadProvider>
        </IntelligenceProvider>
      </CommandBarProvider>
    </AuthProvider>
  );
}

// Nested app routes
function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="/app/dashboard" />} />
      <Route path="dashboard" element={<ProjectDashboard />} />
      <Route path="leads" element={<CRMLeadsDashboard />} />
      <Route path="leads/:id" element={<LeadProfileView />} />
      {/* ... rest of app routes */}
    </Routes>
  );
}
```

**Changes:**
- Remove all `useState` navigation logic
- Remove SideMenu version switcher
- Replace with React Router
- Add Suspense for lazy loading
- Keep global components (Toaster, CommandBar, Chatbot)

---

### Step 6: Update Navigation Component (20 min)

**Update:** `/components/layout/Navigation.tsx` (if exists)

**Find and replace:**
```tsx
// OLD (state-based)
<button onClick={() => setCurrentVersion('services')}>
  Services
</button>

// NEW (routing)
<Link to="/services">
  Services
</Link>
```

**Example updated Navigation:**

```tsx
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-accent-600">
            Luxury AI CRM
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-accent-600'
                    : 'text-neutral-700 hover:text-accent-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/booking"
              className="px-4 py-2 text-sm font-medium text-accent-600 border-2 border-accent-500 rounded-lg hover:bg-accent-50 transition-colors"
            >
              Book a Call
            </Link>
            <Link
              to="/wizard"
              className="px-4 py-2 text-sm font-medium text-white bg-accent-500 rounded-lg hover:bg-accent-600 transition-colors"
            >
              Start Brief
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-3 text-neutral-700 hover:text-accent-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
```

---

### Step 7: Update Footer Links (10 min)

**Update:** `/components/layout/Footer.tsx`

**Replace all internal navigation:**

```tsx
// OLD
<button onClick={() => navigate('about')}>About</button>

// NEW
<Link to="/about">About</Link>
```

---

### Step 8: Add Breadcrumbs Component (15 min)

**Create:** `/src/components/ui/Breadcrumbs.tsx`

```tsx
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-6">
      <Link to="/" className="hover:text-accent-600 transition-colors">
        <Home className="h-4 w-4" />
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const label = name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

        return (
          <div key={routeTo} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="text-accent-600 font-medium">{label}</span>
            ) : (
              <Link to={routeTo} className="hover:text-accent-600 transition-colors">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
```

---

### Step 9: Add Page Meta Tags Helper (10 min)

**Create:** `/src/utils/seo.tsx`

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function useSEO({ title, description, image, url }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = `${title} | Luxury AI CRM`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogUrl) ogUrl.setAttribute('content', url || window.location.href);
    if (ogImage && image) ogImage.setAttribute('content', image);
  }, [title, description, image, url, location]);
}

// Usage in components:
// useSEO({
//   title: 'Services',
//   description: 'AI chatbots, agents, and automation solutions',
// });
```

---

## ✅ TESTING CHECKLIST

### Basic Routing
- [ ] Homepage loads at `/`
- [ ] Services page loads at `/services`
- [ ] About page loads at `/about`
- [ ] Browser back/forward buttons work
- [ ] URLs are shareable (copy/paste works)

### Protected Routes
- [ ] `/app/dashboard` redirects to `/login` when not authenticated
- [ ] After login, redirected to originally requested page
- [ ] Logged in users can access dashboard
- [ ] `/login` redirects to dashboard if already logged in

### Navigation
- [ ] All nav links use routing
- [ ] Active states work correctly
- [ ] Mobile menu works
- [ ] Footer links work
- [ ] Breadcrumbs appear on nested pages

### 404 Handling
- [ ] Invalid URLs show 404 page
- [ ] 404 page has working links back
- [ ] 404 page is styled correctly

### Performance
- [ ] Pages load quickly (lazy loading works)
- [ ] No console errors
- [ ] No broken links
- [ ] Smooth transitions

---

## 🎯 SUCCESS CRITERIA

**Routing is complete when:**
1. ✅ All existing pages accessible via URL
2. ✅ Browser navigation works (back/forward)
3. ✅ Protected routes require authentication
4. ✅ 404 page handles invalid routes
5. ✅ Navigation uses Link components
6. ✅ SEO meta tags work
7. ✅ No console errors
8. ✅ All tests pass

---

## 📝 FILES CHANGED SUMMARY

**New Files:**
- `/src/config/routes.tsx` - Route configuration
- `/src/components/auth/ProtectedRoute.tsx` - Auth guard
- `/src/components/auth/PublicRoute.tsx` - Public route guard
- `/src/pages/NotFound.tsx` - 404 page
- `/src/components/ui/Breadcrumbs.tsx` - Breadcrumbs component
- `/src/utils/seo.tsx` - SEO helper

**Modified Files:**
- `/App.tsx` - Replace state navigation with Router
- `/components/layout/Navigation.tsx` - Use Link instead of buttons
- `/components/layout/Footer.tsx` - Use Link for internal navigation
- All page components - Add SEO meta tags

---

## 🚀 NEXT PHASE

After routing is complete, move to **Phase 2: Build Missing Pages**

1. Pricing page
2. Case studies overview
3. Case study detail
4. Contact page

**Estimated time for Phase 2:** 4 hours

---

**Status:** ✅ Implementation guide complete  
**Ready to Execute:** Yes - follow steps sequentially  
**Est. Time:** 2 hours

---

*Reference this guide while implementing routing infrastructure.*
