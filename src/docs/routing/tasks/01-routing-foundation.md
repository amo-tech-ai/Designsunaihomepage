# 01 - Routing Foundation Setup

**Version:** 1.0.0  
**Status:** 🔴 Not Started  
**Priority:** P0 - Critical  
**Estimated Time:** 2 hours  
**Owner:** TBD

---

## Executive Summary

This task establishes the foundational routing infrastructure using React Router v6. It replaces the current state-based navigation system with URL-based routing, enabling shareable links, browser history, SEO, and proper deep linking. This is a blocking task—all other routing work depends on its completion.

---

## Problem This Task Solves

**Current State:**
- Application uses `useState` to control navigation
- URLs never change (always `http://localhost:5173/`)
- Cannot share links to specific pages
- Browser back/forward buttons don't work
- SEO impossible (all pages appear as one URL)
- No bookmarking capability

**Target State:**
- URL-based routing with React Router v6
- Each page has unique, shareable URL
- Browser navigation works correctly
- Deep linking supported
- Foundation for all future routing work

---

## Scope

### In Scope
- Install React Router v6
- Set up `BrowserRouter`
- Create route configuration file
- Implement layout routes (`<Outlet />` pattern)
- Replace all state-based navigation with `useNavigate()`
- Remove `currentVersion` state from App.tsx
- Set up folder structure for route components

### Out of Scope
- Building missing pages (Task 02)
- Implementing auth guards (Task 05)
- SEO meta tags (Task 07)
- Error boundaries (Task 06)
- Wizard refactoring (Task 04)

---

## Dependencies

### Prerequisites
- Node.js 18+ installed
- Package manager (npm/yarn/pnpm)
- Git for version control

### Blocks These Tasks
- Task 02: Marketing Routing
- Task 03: Dashboard Routing
- Task 04: Wizard Routing
- Task 05: Auth Routing
- Task 06: Error Handling
- Task 07: SEO Routing
- Task 08: Validation & Testing

### Blocked By
- None (first task)

---

## Step-by-Step Implementation

### Step 1: Install React Router v6 (5 minutes)

```bash
# Install React Router DOM
npm install react-router-dom@6

# Verify installation
npm list react-router-dom
# Should show: react-router-dom@6.x.x
```

**Verification:**
- Check `package.json` contains `"react-router-dom": "^6.x.x"`
- Run `npm install` to ensure clean install

**Common Issues:**
- Version conflict: Remove `package-lock.json`, run `npm install` again
- Peer dependency warnings: Safe to ignore if React 18+ installed

---

### Step 2: Create Route Configuration File (15 minutes)

Create `/src/routes/index.tsx`:

```tsx
import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Layouts
import { MarketingLayout } from '../layouts/MarketingLayout';
import { AppLayout } from '../layouts/AppLayout';

// Lazy-loaded pages (will be created in future tasks)
const HomePage = lazy(() => import('../pages/HomePage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));

export const routes: RouteObject[] = [
  // Marketing routes (public)
  {
    path: '/',
    element: <MarketingLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      // More routes will be added in Task 02
    ],
  },
  
  // App routes (protected)
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/app/dashboard" replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      // More routes will be added in Task 03
    ],
  },
  
  // Catch-all (will be enhanced in Task 06)
  {
    path: '*',
    element: <div>404 - Page Not Found</div>,
  },
];
```

**File Structure Validation:**
```
/src/
├── routes/
│   └── index.tsx          ← New file
├── layouts/               ← To be created
│   ├── MarketingLayout.tsx
│   └── AppLayout.tsx
├── pages/                 ← To be created
│   ├── HomePage.tsx
│   ├── ServicesPage.tsx
│   └── DashboardPage.tsx
└── App.tsx                ← To be modified
```

---

### Step 3: Create Layout Components (20 minutes)

Create `/src/layouts/MarketingLayout.tsx`:

```tsx
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export function MarketingLayout() {
  return (
    <div className="min-h-screen">
      {/* Header/Nav will be added here */}
      
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet /> {/* Child routes render here */}
      </Suspense>
      
      {/* Footer will be added here */}
    </div>
  );
}
```

Create `/src/layouts/AppLayout.tsx`:

```tsx
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AdminLayout } from '../components/crm/AdminLayout';

export function AppLayout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminLayout activePage="dashboard" onNavigate={() => {}}>
        <Outlet /> {/* Child routes render here */}
      </AdminLayout>
    </Suspense>
  );
}
```

**Key Concepts:**
- `<Outlet />`: Placeholder where child routes render
- `<Suspense>`: Required for lazy-loaded routes
- Layouts wrap all child routes with common UI

---

### Step 4: Update App.tsx (30 minutes)

**Before (State-Based):**
```tsx
function MainApp() {
  const [currentVersion, setCurrentVersion] = useState('v7');
  
  return (
    <>
      {currentVersion === 'v7' && <HomePageV7 />}
      {currentVersion === 'dashboard' && <ProjectDashboard />}
      {/* 40+ more conditional renders */}
    </>
  );
}
```

**After (URL-Based):**
```tsx
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'sonner@2.0.3';

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster position="top-right" />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
```

**What Changed:**
- ❌ Removed: `useState` for navigation
- ❌ Removed: All conditional renders
- ❌ Removed: Navigation callback props
- ✅ Added: `BrowserRouter` wrapper
- ✅ Added: `useRoutes` hook
- ✅ Added: Route configuration import

---

### Step 5: Create Placeholder Page Components (20 minutes)

For now, create minimal page components. Full implementations come in later tasks.

Create `/src/pages/HomePage.tsx`:

```tsx
import { useNavigate } from 'react-router-dom';
import { HomePageV7 } from '../components/premium/HomePageV7';

export default function HomePage() {
  const navigate = useNavigate();
  
  return (
    <HomePageV7 
      onNavigateToWhatsApp={() => navigate('/solutions/whatsapp')}
      onNavigateToAbout={() => navigate('/about')}
      onVersionChange={(page) => {
        // Convert old state-based nav to URL-based
        if (page === 'services-v2') navigate('/services');
        if (page === 'wizard') navigate('/wizard');
        // Add more mappings as needed
      }}
    />
  );
}
```

**Pattern to Follow:**
```tsx
// Import existing component
import { ExistingComponent } from '../components/...';
import { useNavigate } from 'react-router-dom';

export default function PageName() {
  const navigate = useNavigate();
  
  // Wrap existing component, convert callbacks to navigate()
  return (
    <ExistingComponent 
      onSomeAction={() => navigate('/target-route')}
    />
  );
}
```

**Repeat for:**
- `/src/pages/ServicesPage.tsx`
- `/src/pages/DashboardPage.tsx`
- More pages will be created in later tasks

---

### Step 6: Replace Navigation Callbacks (30 minutes)

Find all components that use state-based navigation and update them.

**Old Pattern:**
```tsx
<button onClick={() => onVersionChange('dashboard')}>
  Go to Dashboard
</button>
```

**New Pattern:**
```tsx
import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/app/dashboard')}>
      Go to Dashboard
    </button>
  );
}
```

**Files to Update:**
- All components in `/components/premium/`
- SideMenu component
- GlobalChatbot component
- Any component with `onVersionChange` prop

**Search & Replace Strategy:**
```bash
# Find all onVersionChange usages
grep -r "onVersionChange" src/components/

# Find all setCurrentVersion usages
grep -r "setCurrentVersion" src/components/
```

---

### Step 7: Test Basic Navigation (15 minutes)

**Manual Tests:**

1. **Homepage loads:**
   ```
   Navigate to http://localhost:5173/
   ✓ Page renders
   ✓ URL stays at /
   ```

2. **Navigation works:**
   ```
   Click "Services" link
   ✓ URL changes to /services
   ✓ Services page renders
   ```

3. **Browser back works:**
   ```
   Click browser back button
   ✓ Returns to /
   ✓ Homepage renders
   ```

4. **Direct URL access works:**
   ```
   Enter http://localhost:5173/services in address bar
   ✓ Services page loads directly
   ✓ No redirect to /
   ```

5. **Refresh preserves route:**
   ```
   Navigate to /services
   Press F5 (refresh)
   ✓ Still on /services
   ✓ Services page renders
   ```

**Automated Test (Optional):**
```tsx
// src/__tests__/routing.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('homepage renders on /', () => {
  window.history.pushState({}, 'Home', '/');
  render(<App />);
  expect(screen.getByText(/homepage content/i)).toBeInTheDocument();
});
```

---

## Mermaid Diagram: Global Route Architecture

```mermaid
flowchart TD
    Start([User Visits Site]) --> Browser[BrowserRouter]
    Browser --> Routes[Route Configuration]
    
    Routes --> Marketing{Marketing Layout}
    Routes --> App{App Layout}
    Routes --> CatchAll[404 Catch-All]
    
    Marketing --> Home[/ HomePage]
    Marketing --> Services[/services ServicesPage]
    Marketing --> About[/about AboutPage]
    Marketing --> MoreMarketing[... more routes<br/>Added in Task 02]
    
    App --> Dashboard[/app/dashboard DashboardPage]
    App --> Leads[/app/leads LeadsPage]
    App --> MoreApp[... more routes<br/>Added in Task 03]
    
    Home --> Outlet1[Renders in<br/>MarketingLayout Outlet]
    Services --> Outlet1
    About --> Outlet1
    
    Dashboard --> Outlet2[Renders in<br/>AppLayout Outlet]
    Leads --> Outlet2
    
    CatchAll --> NotFound[Simple 404 Message<br/>Enhanced in Task 06]
    
    style Marketing fill:#e3f2fd
    style App fill:#fff3e0
    style CatchAll fill:#ffebee
    style Outlet1 fill:#e8f5e9
    style Outlet2 fill:#fff9c4
```

---

## Anti-Patterns to Avoid

### ❌ Anti-Pattern 1: Mixing State and URL Navigation

**Wrong:**
```tsx
const [currentPage, setCurrentPage] = useState('home');

// Some links use state
<button onClick={() => setCurrentPage('about')}>About</button>

// Some links use navigate
<button onClick={() => navigate('/contact')}>Contact</button>
```

**Right:**
```tsx
// ALL navigation uses navigate()
const navigate = useNavigate();

<button onClick={() => navigate('/about')}>About</button>
<button onClick={() => navigate('/contact')}>Contact</button>
```

---

### ❌ Anti-Pattern 2: Hardcoding URLs Everywhere

**Wrong:**
```tsx
<button onClick={() => navigate('/app/dashboard')}>Dashboard</button>
<button onClick={() => navigate('/app/dashboard')}>Home</button>
<Link to="/app/dashboard">Dashboard</Link>
```

**Right:**
```tsx
// Create route constants
export const ROUTES = {
  APP_DASHBOARD: '/app/dashboard',
  APP_LEADS: '/app/leads',
  // ...
};

<button onClick={() => navigate(ROUTES.APP_DASHBOARD)}>Dashboard</button>
```

---

### ❌ Anti-Pattern 3: Not Using Layouts

**Wrong:**
```tsx
{
  path: '/about',
  element: (
    <>
      <Header />
      <AboutPage />
      <Footer />
    </>
  )
},
{
  path: '/contact',
  element: (
    <>
      <Header />  {/* Duplicated */}
      <ContactPage />
      <Footer />  {/* Duplicated */}
    </>
  )
}
```

**Right:**
```tsx
{
  path: '/',
  element: <MarketingLayout />,  // Header + Footer
  children: [
    { path: 'about', element: <AboutPage /> },
    { path: 'contact', element: <ContactPage /> },
  ]
}
```

---

### ❌ Anti-Pattern 4: Forgetting Suspense with Lazy Loading

**Wrong:**
```tsx
const HomePage = lazy(() => import('./pages/HomePage'));

// Route renders, but crashes when lazy component loads
{ path: '/', element: <HomePage /> }
```

**Right:**
```tsx
const HomePage = lazy(() => import('./pages/HomePage'));

// Wrap in Suspense (typically in layout)
{
  path: '/',
  element: (
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  )
}
```

---

### ❌ Anti-Pattern 5: Circular Route Redirects

**Wrong:**
```tsx
{ path: '/app', element: <Navigate to="/app/dashboard" /> },
{ path: '/app/dashboard', element: <Navigate to="/app" /> },
// Infinite loop!
```

**Right:**
```tsx
{ path: '/app', element: <Navigate to="/app/dashboard" replace /> },
{ path: '/app/dashboard', element: <DashboardPage /> },
```

---

## Success Criteria Checklist

**Before marking this task complete, verify:**

- [ ] React Router v6 installed (`npm list react-router-dom`)
- [ ] Route configuration file created (`/src/routes/index.tsx`)
- [ ] BrowserRouter wraps App
- [ ] At least 2 layouts created (Marketing, App)
- [ ] At least 3 pages created (Home, Services, Dashboard)
- [ ] All state-based navigation removed from App.tsx
- [ ] `useNavigate` used instead of state setters
- [ ] Manual navigation tests pass (5 tests from Step 7)
- [ ] No console errors on route changes
- [ ] Browser back/forward works
- [ ] Direct URL access works
- [ ] Refresh preserves current route

---

## Production-Ready Checklist

**Code Quality:**
- [ ] TypeScript types defined for routes
- [ ] No `any` types in route configuration
- [ ] ESLint passes with no warnings
- [ ] Prettier formatting applied

**Performance:**
- [ ] Lazy loading implemented for large pages
- [ ] Suspense fallbacks in place
- [ ] No unnecessary re-renders on navigation

**Documentation:**
- [ ] Route constants documented
- [ ] Layout usage documented
- [ ] Code comments for complex routing logic

**Git:**
- [ ] Changes committed with clear message
- [ ] Branch named `feat/routing-foundation`
- [ ] PR created with checklist

---

## Common Failure Points

### Issue 1: "Cannot read properties of undefined (reading 'pathname')"

**Cause:** `useNavigate` or `useLocation` used outside `<BrowserRouter>`

**Fix:** Ensure `BrowserRouter` wraps the component tree:
```tsx
// App.tsx
<BrowserRouter>  {/* This must be at root */}
  <YourApp />
</BrowserRouter>
```

---

### Issue 2: Routes not rendering (blank page)

**Cause:** Missing `<Outlet />` in layout component

**Fix:** Add `<Outlet />` where child routes should render:
```tsx
export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />  {/* ← Child routes render here */}
      <Footer />
    </div>
  );
}
```

---

### Issue 3: "Lazy loading failed"

**Cause:** Dynamic import path incorrect or module doesn't have default export

**Fix:** Verify export type:
```tsx
// If component uses named export
export function HomePage() { ... }

// Lazy load must destructure
const HomePage = lazy(() => 
  import('./HomePage').then(m => ({ default: m.HomePage }))
);

// OR change to default export
export default function HomePage() { ... }
```

---

### Issue 4: Flash of wrong content on route change

**Cause:** No loading state during route transition

**Fix:** Add Suspense with meaningful fallback:
```tsx
<Suspense fallback={<RouteLoadingSkeleton />}>
  <Outlet />
</Suspense>
```

---

### Issue 5: Routes work locally but not in production

**Cause:** Server not configured for SPA routing

**Fix:** Configure server to redirect all requests to `index.html`:
```nginx
# Nginx example
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Rollback / Recovery Notes

### If routing breaks during implementation:

**Option 1: Quick Revert**
```bash
git stash  # Save current work
git checkout main  # Return to working version
```

**Option 2: Isolate Issue**
```bash
# Disable new routing temporarily
// App.tsx
return <OldStateBasedApp />  // Fallback to old version
```

**Option 3: Feature Flag**
```tsx
const USE_NEW_ROUTING = process.env.REACT_APP_NEW_ROUTING === 'true';

return USE_NEW_ROUTING ? <NewRouterApp /> : <OldStateApp />;
```

### Recovery Procedure:

1. **Identify breaking commit:**
   ```bash
   git log --oneline
   git bisect start
   ```

2. **Revert specific file:**
   ```bash
   git checkout HEAD~1 src/App.tsx
   ```

3. **Deploy previous version:**
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

4. **Communicate downtime:**
   - Post in #engineering Slack
   - Update status page
   - Notify stakeholders

---

## File Tree Validation Checklist

After completing this task, your project structure should match:

```
/src/
├── routes/
│   └── index.tsx                 ✓ Created
├── layouts/
│   ├── MarketingLayout.tsx       ✓ Created
│   └── AppLayout.tsx             ✓ Created
├── pages/
│   ├── HomePage.tsx              ✓ Created
│   ├── ServicesPage.tsx          ✓ Created
│   └── DashboardPage.tsx         ✓ Created
├── components/
│   ├── premium/                  ✓ Existing (updated)
│   └── crm/                      ✓ Existing (used in layouts)
└── App.tsx                       ✓ Refactored

/package.json                     ✓ Updated (react-router-dom added)
```

**Verification Command:**
```bash
find src -name "*.tsx" | grep -E "(routes|layouts|pages)" | sort
```

**Expected Output:**
```
src/layouts/AppLayout.tsx
src/layouts/MarketingLayout.tsx
src/pages/DashboardPage.tsx
src/pages/HomePage.tsx
src/pages/ServicesPage.tsx
src/routes/index.tsx
```

---

## Next Steps

After this task is complete:

1. **Update Progress Tracker:**
   - Mark Task 01 as ✅ Complete
   - Update "Last Updated" timestamp
   - Recalculate overall completion %

2. **Proceed to:**
   - **Task 02:** Marketing Routing (build missing pages)
   - **Task 03:** Dashboard Routing (connect protected routes)

3. **Team Communication:**
   - Demo routing foundation to team
   - Share testing results
   - Document any deviations from plan

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | Dec 20, 2025 | Initial task specification | Product Architecture |

---

**This task is production-critical. Do not skip steps. Validate thoroughly before proceeding to dependent tasks.**
