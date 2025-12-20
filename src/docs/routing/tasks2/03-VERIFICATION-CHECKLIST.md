# Routing Verification Checklist

**Version:** 2.0.0  
**Purpose:** Complete validation before deployment  
**Time Required:** 30 minutes

---

## 🎯 **HOW TO USE THIS CHECKLIST**

### **When to Run**

- ✅ After completing routing implementation
- ✅ Before deploying to staging/production
- ✅ During code review
- ✅ When debugging routing issues
- ✅ After major routing changes

### **Workflow**

```
1. Work through sections sequentially
2. Check each item thoroughly
3. Mark ✅ or ❌
4. If any ❌, fix before proceeding
5. All items must be ✅ before deployment
```

### **Scoring**

- **100% (All ✅)** → Deploy to production ✅
- **90-99%** → Fix remaining items, then deploy
- **< 90%** → Do not deploy, significant issues ❌

---

## 📦 **SECTION 1: Installation & Dependencies**

### **1.1 Package Installation**

```bash
# Run this command:
npm list react-router-dom
```

- [ ] react-router-dom@6.x.x is installed
- [ ] Version is 6.20.0 or higher
- [ ] No version conflicts in package.json
- [ ] No npm install errors

### **1.2 Required Packages**

```bash
# Verify these are in package.json:
npm list react-router-dom react-helmet-async sonner
```

- [ ] react-router-dom (routing)
- [ ] react-helmet-async (SEO)
- [ ] sonner (notifications)
- [ ] All at compatible versions

### **1.3 TypeScript Configuration**

```bash
npx tsc --noEmit
```

- [ ] TypeScript compiles with no errors
- [ ] No `any` types in routing code
- [ ] All route types properly defined

---

## 📁 **SECTION 2: Folder Structure**

### **2.1 Required Folders Exist**

```bash
# Check these folders exist:
ls -la src/routes
ls -la src/layouts
ls -la src/utils
ls -la src/constants
```

- [ ] `/src/routes/` exists
- [ ] `/src/routes/marketing/` exists
- [ ] `/src/routes/app/` exists
- [ ] `/src/layouts/` exists
- [ ] `/src/utils/` exists
- [ ] `/src/constants/` exists

### **2.2 Required Files Exist**

```bash
# Check these files exist:
ls src/routes/index.tsx
ls src/utils/safeLazy.ts
ls src/constants/routes.ts
ls src/layouts/MarketingLayout.tsx
ls src/layouts/AppLayout.tsx
```

- [ ] `/src/routes/index.tsx`
- [ ] `/src/utils/safeLazy.ts`
- [ ] `/src/constants/routes.ts`
- [ ] `/src/layouts/MarketingLayout.tsx`
- [ ] `/src/layouts/AppLayout.tsx`
- [ ] At least 2 route wrappers in `/routes/`

---

## 📝 **SECTION 3: Code Quality**

### **3.1 Import Correctness**

**Check ALL files for these patterns:**

#### **✅ Correct Imports**

```typescript
// ✅ Sonner (no version)
import { Toaster } from 'sonner';

// ✅ Explicit route import
import { routes } from './routes/index';

// ✅ Using safeLazy
import { safeLazy } from '../utils/safeLazy';
const HomePage = safeLazy(() => import('./HomePage'));
```

#### **❌ Incorrect Imports (Must Fix)**

```typescript
// ❌ Sonner with version
import { Toaster } from 'sonner@2.0.3';

// ❌ Implicit import
import { routes } from './routes';

// ❌ Direct lazy without safeLazy
const HomePage = lazy(() => import('./HomePage'));
```

**Verification:**

- [ ] No imports with `@version` suffix
- [ ] All route imports are explicit (`from './routes/index'`)
- [ ] All lazy loading uses `safeLazy` helper
- [ ] All router hooks imported from `react-router-dom`

### **3.2 Router Hooks Usage**

**Router hooks (`useNavigate`, `useLocation`, `useParams`) allowed ONLY in:**

- [ ] Files in `/src/routes/**/*.tsx`
- [ ] Files in `/src/layouts/*.tsx`
- [ ] Navigation components (sidebars, headers)

**Router hooks NOT allowed in:**

- [ ] ❌ Files in `/src/components/**/*.tsx` (verified)
- [ ] ❌ Files in `/src/hooks/**/*.ts` (verified)
- [ ] ❌ Files in `/src/utils/**/*.ts` (verified)

**Verification Command:**

```bash
# Search for router hooks in components:
grep -r "useNavigate\|useLocation\|useParams" src/components/
# Should return EMPTY (no results)
```

### **3.3 Component Exports**

- [ ] All route wrappers use `export default`
- [ ] All layouts use `export function`
- [ ] safeLazy helper uses `export function`
- [ ] Route constants use `export const`

### **3.4 TypeScript Types**

- [ ] `RouteObject[]` type used for routes
- [ ] safeLazy has generic type `<T extends ComponentType<any>>`
- [ ] Route constants use `as const`
- [ ] All props interfaces defined

---

## 🏗️ **SECTION 4: Architecture Validation**

### **4.1 App.tsx Structure**

**Verify App.tsx has this exact structure:**

```typescript
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>  {/* ← Must be here */}
        <AuthProvider>
          <AppRoutes />
          <Toaster position="top-right" />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

function AppRoutes() {
  const element = useRoutes(routes); // ← Must be inside BrowserRouter
  return element;
}
```

- [ ] `BrowserRouter` wraps entire app
- [ ] `useRoutes` called inside `BrowserRouter`
- [ ] Correct provider order: HelmetProvider → BrowserRouter → AuthProvider
- [ ] Toaster inside providers

### **4.2 Layout Components**

**Check MarketingLayout.tsx:**

- [ ] Has `<Outlet />` component
- [ ] `<Outlet />` wrapped in `<Suspense>`
- [ ] Suspense has fallback prop
- [ ] Imports `Outlet` from `react-router-dom`
- [ ] Imports `Suspense` from `react`

**Check AppLayout.tsx:**

- [ ] Has `<Outlet />` component
- [ ] `<Outlet />` wrapped in `<Suspense>`
- [ ] Uses `useLocation()` to derive active page
- [ ] Uses `useNavigate()` for navigation handler
- [ ] NOT using empty callback: `onNavigate={() => {}}` ❌
- [ ] Actually calls `navigate()` in handler ✅

### **4.3 Route Configuration**

**Check /src/routes/index.tsx:**

- [ ] Exports `routes` as `RouteObject[]`
- [ ] Marketing routes use `MarketingLayout`
- [ ] App routes use `AppLayout`
- [ ] Catch-all route (`*`) is LAST in array
- [ ] Uses `safeLazy` for lazy loading
- [ ] `/app` redirects to `/app/dashboard`

### **4.4 Route Wrappers**

**Each route wrapper should:**

- [ ] Import `useNavigate` from `react-router-dom`
- [ ] Import UI component from `../components/`
- [ ] Import `ROUTES` from `../constants/routes`
- [ ] Create navigation handlers using `navigate()`
- [ ] Pass handlers as props to UI component
- [ ] Use default export

**Example structure:**

```typescript
import { useNavigate } from 'react-router-dom';
import { Component } from '../../components/Component';
import { ROUTES } from '../../constants/routes';

export default function ComponentRoute() {
  const navigate = useNavigate();
  
  const handleAction = () => {
    navigate(ROUTES.SOME_ROUTE);
  };
  
  return <Component onAction={handleAction} />;
}
```

---

## 🧪 **SECTION 5: Functional Testing**

### **5.1 Basic Navigation**

**Start dev server:**

```bash
npm run dev
```

**Manual Tests:**

| Test # | Action | Expected Result | Pass/Fail |
|--------|--------|-----------------|-----------|
| 1 | Visit `http://localhost:5173/` | Homepage loads | [ ] |
| 2 | Check URL | Should be `/` | [ ] |
| 3 | Click any navigation link | URL changes | [ ] |
| 4 | Check page content | Content updates | [ ] |
| 5 | Click browser back | Returns to previous page | [ ] |
| 6 | Click browser forward | Goes forward | [ ] |
| 7 | Press F5 (refresh) | Stays on current route | [ ] |
| 8 | Paste `/services` in address bar | Services page loads directly | [ ] |
| 9 | Navigate to `/invalid-route` | Shows 404 page | [ ] |
| 10 | Visit `/app/dashboard` (logged in) | Dashboard loads | [ ] |

**All tests must pass (10/10)**

### **5.2 Layout Rendering**

**Check React DevTools:**

- [ ] `<BrowserRouter>` visible in component tree
- [ ] Layouts render (MarketingLayout, AppLayout)
- [ ] `<Outlet />` components present
- [ ] Child routes render inside layouts
- [ ] Header/footer appear on all marketing pages
- [ ] Sidebar appears on all app pages

### **5.3 Protected Routes**

**Test auth flow:**

| Test | Action | Expected Result | Pass/Fail |
|------|--------|-----------------|-----------|
| 1 | Log out, visit `/app/dashboard` | Redirects to `/login` | [ ] |
| 2 | After login | Redirects to `/app/dashboard` | [ ] |
| 3 | Try `/app/leads` while logged out | Redirects to `/login` | [ ] |
| 4 | After login from above | Goes to `/app/leads` (intended destination) | [ ] |

### **5.4 Lazy Loading**

**Test with Network throttling:**

```
1. Open DevTools → Network tab
2. Throttle: Slow 3G
3. Navigate to different routes
```

- [ ] Loading spinner shows during route transitions
- [ ] Chunks load successfully (check Network tab)
- [ ] No "Element type is invalid" errors
- [ ] No double loading spinners (Suspense duplication)

---

## 🚀 **SECTION 6: Production Readiness**

### **6.1 Build Verification**

```bash
npm run build
```

- [ ] Build completes successfully
- [ ] No errors during build
- [ ] No warnings about lazy loading
- [ ] Dist folder created

### **6.2 Preview Build**

```bash
npm run preview
```

- [ ] Preview server starts
- [ ] Homepage loads
- [ ] Navigation works in preview
- [ ] Refresh works in preview

### **6.3 Deployment Configuration**

**Platform-specific config exists:**

For Vercel:
- [ ] `vercel.json` exists in project root
- [ ] Contains `rewrites` config
- [ ] Committed to git

For Netlify:
- [ ] `_redirects` exists in `/public`
- [ ] Contains `/*    /index.html   200`
- [ ] Committed to git

For Cloudflare Pages:
- [ ] `_redirects` exists in `/public`
- [ ] Contains `/*    /index.html   200`
- [ ] Committed to git

### **6.4 SEO Basics**

**Check public routes:**

- [ ] Each page has unique `<title>`
- [ ] Each page has meta description
- [ ] Helmet used for meta tags
- [ ] No duplicate titles across routes

---

## 🔍 **SECTION 7: Browser Compatibility**

**Test in multiple browsers:**

| Browser | Homepage | Navigation | Back/Forward | Refresh | Pass/Fail |
|---------|----------|------------|--------------|---------|-----------|
| Chrome | [ ] | [ ] | [ ] | [ ] | [ ] |
| Firefox | [ ] | [ ] | [ ] | [ ] | [ ] |
| Safari | [ ] | [ ] | [ ] | [ ] | [ ] |
| Edge | [ ] | [ ] | [ ] | [ ] | [ ] |

**All browsers must pass all tests**

---

## ⚡ **SECTION 8: Performance**

### **8.1 Lighthouse Audit**

```bash
# Run Lighthouse in Chrome DevTools
# Or use CLI:
lighthouse http://localhost:5173 --view
```

**Targets:**

- [ ] Performance > 80
- [ ] Best Practices > 90
- [ ] SEO > 80 (marketing pages)
- [ ] No router-related errors

### **8.2 Route Transition Speed**

**Measure with DevTools Performance tab:**

- [ ] Route transitions < 300ms
- [ ] No jank during navigation
- [ ] Smooth animations
- [ ] No unnecessary re-renders

### **8.3 Bundle Size**

```bash
npm run build
# Check dist/ folder
```

- [ ] Main chunk < 200KB (gzipped)
- [ ] Route chunks lazy-loaded
- [ ] Each route chunk < 100KB

---

## 🐛 **SECTION 9: Error Handling**

### **9.1 Invalid Routes**

- [ ] `/invalid-route` shows 404
- [ ] 404 page has "Go Home" button
- [ ] 404 page has "Go Back" button
- [ ] 404 page is styled (not plain text)

### **9.2 Invalid Params**

- [ ] `/services/invalid-slug` handles gracefully
- [ ] `/app/leads/invalid-id` redirects safely
- [ ] No crashes from invalid params
- [ ] User-friendly error messages

### **9.3 Network Errors**

**Test with offline mode:**

- [ ] Offline warning shows
- [ ] No crash when offline
- [ ] Graceful degradation

---

## 📊 **SECTION 10: Code Review Standards**

### **10.1 No Anti-Patterns**

Verify NONE of these exist:

- [ ] ❌ No state-based navigation (`useState` for routes)
- [ ] ❌ No hardcoded URLs (all use `ROUTES` constants)
- [ ] ❌ No router hooks in `/components/`
- [ ] ❌ No duplicate page components
- [ ] ❌ No empty navigation callbacks
- [ ] ❌ No circular redirects
- [ ] ❌ No missing `<Outlet />`
- [ ] ❌ No duplicate Suspense boundaries

### **10.2 Best Practices Followed**

- [ ] ✅ URL is single source of truth
- [ ] ✅ Route constants used everywhere
- [ ] ✅ Layout routes with `<Outlet />`
- [ ] ✅ Lazy loading implemented
- [ ] ✅ TypeScript types complete
- [ ] ✅ JSDoc comments on utilities
- [ ] ✅ Consistent naming conventions

---

## 📋 **FINAL CHECKLIST**

### **Before Deploying to Production:**

**Critical Items (Must be 100%):**

- [ ] All Section 1 items ✅ (Installation)
- [ ] All Section 2 items ✅ (Folders)
- [ ] All Section 3 items ✅ (Code Quality)
- [ ] All Section 4 items ✅ (Architecture)
- [ ] All Section 5.1 items ✅ (Basic Navigation - 10/10)
- [ ] All Section 6 items ✅ (Production Readiness)
- [ ] No anti-patterns from Section 10.1

**Important Items (Should be > 90%):**

- [ ] Section 5.2 (Layout Rendering)
- [ ] Section 5.3 (Protected Routes)
- [ ] Section 5.4 (Lazy Loading)
- [ ] Section 7 (Browser Compatibility)
- [ ] Section 9 (Error Handling)

**Nice to Have (Should be > 80%):**

- [ ] Section 8 (Performance)
- [ ] Section 10.2 (Best Practices)

---

## 🎯 **SCORING GUIDE**

**Calculate your score:**

```
Total items checked ÷ Total items × 100 = ____%
```

**Interpretation:**

| Score | Status | Action |
|-------|--------|--------|
| 100% | ✅ Excellent | Deploy to production |
| 95-99% | ✅ Good | Fix minor issues, then deploy |
| 90-94% | ⚠️ Fair | Fix issues before deploy |
| 85-89% | ⚠️ Poor | Significant work needed |
| < 85% | ❌ Fail | Do not deploy |

---

## 🚨 **COMMON FAILURE POINTS**

If you're scoring < 90%, check these first:

1. **Sonner import** - Most common mistake
2. **AppLayout navigation** - Often has empty callbacks
3. **Missing Outlet** - Layouts without `<Outlet />`
4. **No SPA fallback** - Works locally, fails in production
5. **Router hooks in components** - Breaks separation of concerns

---

## 📝 **NOTES SECTION**

**Use this space to document:**

- Items that failed
- Issues discovered
- Fixes applied
- Date of verification
- Who performed verification

```
Date: __________
Performed by: __________
Score: _____%

Failed items:
1. 
2. 
3. 

Actions taken:
1. 
2. 
3. 

Re-verification date: __________
Final score: _____%
```

---

## ✅ **SIGN-OFF**

**I verify that:**

- [ ] All critical items are ✅
- [ ] Score is ≥ 90%
- [ ] Ready for production deployment
- [ ] Documentation updated
- [ ] Team notified

**Signature:** ________________  
**Date:** ________________

---

**This checklist is your gate to production. Do not skip items. All critical checks must pass.**
