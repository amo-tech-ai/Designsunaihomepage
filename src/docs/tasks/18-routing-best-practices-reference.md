# Routing Best Practices Reference

**Version:** 1.0  
**Date:** December 20, 2025  
**Type:** One Source of Truth  
**Status:** ✅ Production Standards

---

## 📋 SUMMARY CARD

<table>
<tr>
<td width="50%">

### ✅ What's Included
- URL naming conventions
- Route grouping & nesting rules
- Redirect & canonical URL standards
- Dynamic route guidelines
- Error handling best practices
- SEO essentials
- Security rules
- Complete testing checklist
- Do/Don't comparison table

</td>
<td width="50%">

### 🎯 Purpose
This document serves as the **single source of truth** for all routing decisions in the application.

**Use this when:**
- Creating new routes
- Refactoring existing routes
- Reviewing pull requests
- Onboarding new developers
- Auditing URL structure
- Optimizing SEO

</td>
</tr>
</table>

---

## 🏗️ A) URL CONVENTIONS

### 1. Case & Format

| Rule | Example | Why |
|------|---------|-----|
| **Always lowercase** | `/services` ✅<br/>`/Services` ❌ | Prevents duplicate URLs, standard practice |
| **Kebab-case for multi-word** | `/case-studies` ✅<br/>`/caseStudies` ❌<br/>`/case_studies` ❌ | URL-safe, readable, standard |
| **No trailing slash** | `/pricing` ✅<br/>`/pricing/` ❌ | Canonical URL consistency |
| **ASCII characters only** | `/ai-chatbots` ✅<br/>`/ai-čatbots` ❌ | Universal compatibility |

---

### 2. Singular vs Plural

| Use Case | Rule | Example |
|----------|------|---------|
| **Collections** | Plural | `/case-studies` (list of many) |
| **Single items** | Singular | `/case-studies/:slug` (one item) |
| **Actions** | Avoid (use nouns) | `/contact` ✅ not `/contact-us` ❌ |
| **Modules** | Plural if collection | `/services` (multiple services) |
| **Pages** | Singular | `/about` (one about page) |

---

### 3. Nouns, Not Verbs

| ❌ Avoid | ✅ Use Instead | Why |
|---------|---------------|-----|
| `/get-started` | `/wizard` or `/onboarding` | URLs are destinations, not actions |
| `/contact-us` | `/contact` | Shorter, cleaner |
| `/learn-more` | `/about` or `/resources` | More standard |
| `/view-pricing` | `/pricing` | Redundant (viewing is assumed) |
| `/submit-form` | `/contact` → POST | HTTP verb handles action |

---

### 4. Hierarchy & Depth

| Depth | Example | When to Use |
|-------|---------|-------------|
| **1 level** | `/pricing` | Core pages, standalone content |
| **2 levels** | `/services/ai-chatbots` | Logical categorization |
| **3 levels** | `/services/chatbots/saas` | Sub-categorization |
| **4+ levels** | ⚠️ Avoid if possible | Only for complex hierarchies |

**Rule of Thumb:** Max 3 levels for marketing, 4-5 for apps

**Bad:**
```
/products/solutions/enterprise/ai/chatbots/industry/saas
```

**Good:**
```
/services/chatbots/saas
```

---

### 5. Special Characters

| Character | Usage | Example |
|-----------|-------|---------|
| `-` (hyphen) | ✅ Separates words | `/ai-web-dev` |
| `_` (underscore) | ❌ Never use | Avoid |
| `/` (slash) | ✅ Hierarchy | `/services/ai-chatbots` |
| `?` (query) | ✅ Filters, params | `/leads?status=hot` |
| `#` (hash) | ✅ Tabs, sections | `/leads/123#notes` |
| `&` (ampersand) | ✅ Multiple params | `/leads?status=hot&page=2` |
| `%` (encoded) | ✅ Auto-encoded | `hello%20world` (avoid in design) |

---

## 🗂️ B) ROUTE GROUPING & NESTING RULES

### 1. Logical Grouping

**Group related routes under common parent:**

```tsx
// ✅ Good: Services grouped
/services
/services/ai-web-dev
/services/ai-chatbots
/services/ai-agents

// ❌ Bad: Flat structure
/ai-web-dev
/ai-chatbots
/ai-agents
```

**Benefits:**
- Easier to navigate
- Better SEO (clear hierarchy)
- Cleaner sitemap

---

### 2. Protected Routes

**All protected routes under `/app`:**

```tsx
// ✅ Good: Clear separation
/app/dashboard        (protected)
/app/leads            (protected)
/app/settings         (protected)

// ❌ Bad: Mixed public/protected
/dashboard            (confusing - is it public?)
/leads                (hard to apply auth guard)
```

**Rule:** `/app/*` = protected, everything else = public (except `/login`)

---

### 3. Module-Based Nesting

**Nest by feature module:**

```tsx
// Intelligence Module
/app/intelligence
/app/intelligence/upload
/app/intelligence/analysis
/app/intelligence/brief
/app/intelligence/search

// Settings Module
/app/settings
/app/settings/profile
/app/settings/security
/app/settings/integrations
```

**Benefits:**
- Code splitting by module
- Clear feature boundaries
- Easier permission management

---

### 4. React Router Nesting

**Use nested routes for layouts:**

```tsx
{
  path: '/app',
  element: <AppLayoutRoute />,  // Wraps with AdminLayout
  children: [
    { index: true, element: <Navigate to="/app/dashboard" /> },
    { path: 'dashboard', element: <ProjectDashboard /> },
    { path: 'leads', element: <CRMLeadsDashboard /> },
    // Children inherit layout
  ]
}
```

**Don't nest for hierarchy alone:**
```tsx
// ❌ Bad: Over-nested
/services/category/subcategory/item/detail/section

// ✅ Good: Flatten where possible
/services/:slug
/services/:slug/:section
```

---

## 🔀 C) REDIRECT RULES

### 1. Canonical URLs

**Enforce one canonical URL per page:**

```tsx
// All these should redirect to canonical
/pricing/           → /pricing (remove trailing slash)
/PRICING            → /pricing (lowercase)
/pricing?           → /pricing (remove empty query)
/pricing#           → /pricing (remove empty hash)
```

**Implementation:**
```tsx
// Middleware to enforce canonical
function canonicalRedirect(url: string): string {
  let canonical = url.toLowerCase();          // Lowercase
  canonical = canonical.replace(/\/$/, '');   // Remove trailing slash
  canonical = canonical.replace(/\?$/, '');   // Remove empty query
  canonical = canonical.replace(/#$/, '');    // Remove empty hash
  
  if (canonical !== url) {
    throw redirect(canonical, 301);  // Permanent redirect
  }
  
  return canonical;
}
```

---

### 2. Trailing Slash Policy

**Choose one and enforce everywhere:**

**Option A: No trailing slash (Recommended)**
```
/pricing     ✅ Canonical
/pricing/    → Redirect to /pricing
```

**Option B: Always trailing slash**
```
/pricing/    ✅ Canonical
/pricing     → Redirect to /pricing/
```

**This app uses:** No trailing slash ✅

---

### 3. Legacy URLs

**Always redirect old URLs with 301:**

```tsx
// Old site structure
/old-services       → /services (301 Permanent)
/contact-us         → /contact (301 Permanent)
/products           → /services (301 Permanent)

// Changed slugs
/case-studies/old-slug  → /case-studies/new-slug (301)
```

**Never:**
- Delete old URLs without redirects (404s hurt SEO)
- Use 302 (temporary) for permanent changes
- Redirect loops (A → B → A)

---

### 4. Root Redirects

**Clear redirect strategy:**

```tsx
// Root app → dashboard
/app        → /app/dashboard (immediate)

// Root intelligence → upload
/app/intelligence  → /app/intelligence/upload (immediate)

// Homepage → homepage (no redirect needed)
/           → (stays on /)
```

---

## 🎯 D) DYNAMIC ROUTES & PARAMS

### 1. Parameter Naming

**Use descriptive, lowercase param names:**

```tsx
// ✅ Good
/services/:slug         (clear: "ai-chatbots")
/leads/:id              (clear: "123")
/case-studies/:slug     (clear: "fintech-saas")

// ❌ Bad
/services/:s            (ambiguous)
/leads/:leadId          (redundant: already in /leads)
/case-studies/:caseStudySlug  (too verbose)
```

---

### 2. ID vs Slug

**When to use each:**

| Use Case | Parameter | Example |
|----------|-----------|---------|
| **User-facing URLs** | `:slug` | `/case-studies/fintech-saas` |
| **Internal resources** | `:id` | `/app/leads/a7b8c9d0` |
| **SEO important** | `:slug` | `/blog/how-to-build-ai-chatbot` |
| **SEO doesn't matter** | `:id` | `/app/workflows/f8e7d6c5` |
| **Need uniqueness** | `:id` | (UUIDs are guaranteed unique) |
| **Need readability** | `:slug` | (Slugs are human-readable) |

**Hybrid approach:**
```
/case-studies/:id/:slug
→ /case-studies/123/fintech-saas

Benefits:
- ID for database lookup (fast)
- Slug for SEO and readability
- Can change slug without breaking ID
```

---

### 3. Optional Parameters

**Use query params, not route params:**

```tsx
// ✅ Good: Optional filters
/leads?status=hot&industry=fintech

// ❌ Bad: Optional route params
/leads/:status?/:industry?
→ Ambiguous, hard to parse
```

---

### 4. Catch-All Routes

**Use for 404 handling:**

```tsx
// React Router
{
  path: '*',
  element: <NotFoundPage />
}

// Catches:
/invalid-page       → 404
/services/fake      → 404
/app/nonexistent    → 404
```

**Best practice:**
- Place catch-all last in route config
- Log 404s for monitoring
- Provide helpful suggestions

---

## 🚨 E) ERROR HANDLING

### 1. 404 Not Found

**When to show:**
- Invalid route (`/invalid-page`)
- Valid route but missing data (`/case-studies/fake-slug`)
- Deleted resources (`/leads/deleted-id`)

**Implementation:**
```tsx
// In route loader
loader: async ({ params }) => {
  const caseStudy = await getCaseStudy(params.slug);
  
  if (!caseStudy) {
    throw new Response('Not Found', { status: 404 });
  }
  
  return { caseStudy };
}

// Error boundary
function ErrorBoundary() {
  const error = useRouteError();
  
  if (error.status === 404) {
    return <NotFoundPage />;
  }
  
  return <GenericErrorPage />;
}
```

---

### 2. Error Boundaries

**Wrap all route groups:**

```tsx
{
  path: '/app',
  element: <AppLayoutRoute />,
  errorElement: <AppErrorBoundary />,  // Catches errors in /app/*
  children: [...]
}

{
  path: '/',
  element: <MarketingLayout />,
  errorElement: <MarketingErrorBoundary />,  // Catches errors in marketing
  children: [...]
}
```

**Error boundary should:**
- Show user-friendly message
- Log error for monitoring
- Provide recovery actions (go home, try again)
- Not crash entire app

---

### 3. Loading States (Suspense)

**Show loading for async routes:**

```tsx
// Route-level suspense
<Suspense fallback={<RouteLoadingSpinner />}>
  <Outlet />
</Suspense>

// Component-level suspense
const LazyDashboard = lazy(() => import('./Dashboard'));

<Suspense fallback={<DashboardSkeleton />}>
  <LazyDashboard />
</Suspense>
```

**Best practices:**
- Show skeleton UI (not blank page)
- Timeout after 10s (show error)
- Preload critical routes

---

### 4. Validation Errors

**Handle invalid params gracefully:**

```tsx
// Validate step number
loader: ({ params }) => {
  const step = parseInt(params.step);
  
  if (isNaN(step) || step < 1 || step > 5) {
    throw redirect('/wizard/1');  // Redirect to valid step
  }
  
  return { step };
}

// Validate UUID format
loader: ({ params }) => {
  if (!isValidUUID(params.id)) {
    throw new Response('Invalid ID', { status: 400 });
  }
  
  return { id: params.id };
}
```

---

## 🔍 F) SEO ESSENTIALS

### 1. Unique Titles

**Every route must have unique `<title>`:**

```tsx
// Homepage
<title>AI Automation Agency | Build Intelligent Solutions</title>

// Services
<title>AI Services | Chatbots, Web Dev, Agents | YourBrand</title>

// Service Detail
<title>AI Chatbot Development | Build Custom Bots | YourBrand</title>
```

**Rules:**
- 50-60 characters
- Include primary keyword
- Include brand name
- No duplicates

---

### 2. Meta Descriptions

**Every route needs unique description:**

```tsx
<meta 
  name="description" 
  content="Build custom AI chatbots that increase conversions by 40%. 
           Expert development, seamless integrations, enterprise-grade." 
/>
```

**Rules:**
- 150-160 characters
- Include call-to-action
- No duplicates
- Include keywords naturally

---

### 3. Canonical URLs

**Prevent duplicate content:**

```tsx
<link rel="canonical" href="https://yoursite.com/services/ai-chatbots" />
```

**When to use:**
- Always (on every page)
- Especially for pages with query params
- For pagination (`/blog?page=2` → canonical to `/blog`)

---

### 4. Open Graph Tags

**For social sharing:**

```tsx
<meta property="og:title" content="AI Chatbot Development" />
<meta property="og:description" content="Build custom AI chatbots..." />
<meta property="og:image" content="https://yoursite.com/og-chatbots.png" />
<meta property="og:url" content="https://yoursite.com/services/ai-chatbots" />
<meta property="og:type" content="website" />
```

---

### 5. Sitemap Strategy

**Generate sitemap.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2025-12-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/services/ai-chatbots</loc>
    <lastmod>2025-12-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... -->
</urlset>
```

**Rules:**
- Include all public pages
- Exclude protected routes (`/app/*`)
- Exclude utility routes (`/sitemap`, `/login`)
- Update `lastmod` on content changes
- Submit to Google Search Console

---

### 6. Robots.txt

**Control crawling:**

```
User-agent: *
Allow: /
Disallow: /app/
Disallow: /wizard/processing
Disallow: /wizard/complete
Disallow: /login

Sitemap: https://yoursite.com/sitemap.xml
```

---

## 🔐 G) SECURITY RULES

### 1. Never Rely on UI-Only Checks

**❌ Bad:**
```tsx
// Client-side only check
{isAdmin && <Link to="/app/admin">Admin Panel</Link>}
```

**Problem:** User can still navigate to `/app/admin` directly

**✅ Good:**
```tsx
// Server-side + client-side
{isAdmin && <Link to="/app/admin">Admin Panel</Link>}

// Route guard
<ProtectedRoute requiredRole="admin">
  <AdminPanel />
</ProtectedRoute>

// + Backend API also checks role before returning data
```

---

### 2. Guard + Server Validation

**Always validate on backend:**

```tsx
// Frontend guard (UX)
function ProtectedRoute({ requiredRole }) {
  const { user } = useAuth();
  
  if (user.role !== requiredRole) {
    return <ForbiddenPage />;
  }
  
  return <Outlet />;
}

// Backend API (security)
app.get('/api/admin/data', (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  
  // Return data
});
```

---

### 3. Sensitive Data in URLs

**Never put sensitive data in URLs:**

```tsx
// ❌ Bad
/reset-password?token=abc123&email=user@example.com

// ✅ Good
/reset-password?token=abc123
(Email stored server-side, tied to token)
```

**Why:**
- URLs are logged (server, browser, analytics)
- URLs are shareable
- URLs appear in referrer headers

---

### 4. CSRF Protection

**For state-changing routes:**

```tsx
// Protected form submission
<form method="POST" action="/api/update-settings">
  <input type="hidden" name="csrf_token" value={csrfToken} />
  {/* ... */}
</form>

// Backend validates token
if (req.body.csrf_token !== req.session.csrfToken) {
  return res.status(403).json({ error: 'Invalid CSRF token' });
}
```

---

## ✅ H) TESTING CHECKLIST

### Pre-Launch Tests

**URL Structure:**
- [ ] All routes return 200 (for valid requests)
- [ ] All routes have unique titles
- [ ] All routes have unique meta descriptions
- [ ] All routes have canonical URLs
- [ ] No trailing slashes (or enforce policy)
- [ ] No uppercase in URLs
- [ ] No spaces (encoded as %20)

**Navigation:**
- [ ] All links navigate correctly
- [ ] All CTAs point to correct routes
- [ ] Breadcrumbs reflect current route
- [ ] Active nav items highlight correctly

**Browser Behavior:**
- [ ] Refresh preserves current route
- [ ] Back button goes to previous route
- [ ] Forward button works
- [ ] Bookmarking works
- [ ] Copy/paste URL works

**Deep Links:**
- [ ] Direct URL access works
- [ ] Protected routes redirect to login
- [ ] Login redirects back to intended route
- [ ] Invalid IDs show 404 or redirect
- [ ] Query params persist

**Error Handling:**
- [ ] 404 page shows for invalid routes
- [ ] Error boundaries catch route errors
- [ ] Loading states show during transitions
- [ ] Validation errors handled gracefully

**SEO:**
- [ ] All meta tags unique
- [ ] All routes in sitemap.xml
- [ ] Robots.txt configured
- [ ] Open Graph tags present
- [ ] Schema.org markup (where appropriate)

**Security:**
- [ ] Protected routes require auth
- [ ] Role checks enforced server-side
- [ ] No sensitive data in URLs
- [ ] CSRF tokens on forms

**Performance:**
- [ ] Routes load in <2s
- [ ] Lazy loading implemented
- [ ] Code splitting by route
- [ ] No unnecessary re-renders

---

## 📊 I) DO / DON'T TABLE

| # | ❌ DON'T | ✅ DO | Why |
|---|---------|-------|-----|
| 1 | `/Get-Started` | `/wizard` | Lowercase, noun |
| 2 | `/services/` | `/services` | No trailing slash |
| 3 | `/case_studies` | `/case-studies` | Kebab-case |
| 4 | `/contactUs` | `/contact` | Lowercase, no camelCase |
| 5 | `/services/ai-chatbots/learn-more` | `/services/ai-chatbots` | Avoid verb routes |
| 6 | `/app/lead` | `/app/leads` | Collections = plural |
| 7 | `/leads/123abc` | `/leads/a7b8c9d0` | Use proper IDs |
| 8 | `/services/chatbots/:industry/:company/:page` | `/services/chatbots/:industry` | Avoid over-nesting |
| 9 | `/api/users?password=123` | Use POST with body | Never sensitive data in URL |
| 10 | Rely on hidden UI for security | Use route guards + backend checks | Defense in depth |
| 11 | `/pricing?` | `/pricing` | Clean URLs |
| 12 | `/Blog/Post/How-To-Guide` | `/blog/how-to-guide` | Lowercase, flat hierarchy |
| 13 | Skip 404 page | Implement NotFoundPage | User experience |
| 14 | Hardcode routes everywhere | Use constants/config | Maintainability |
| 15 | `/leads/:id?` | `/leads` + `/leads/:id` | Explicit routes |
| 16 | Client-only auth checks | Server validation required | Security |
| 17 | `/app/settings/profile/edit/form` | `/app/settings/profile` | Avoid action routes |
| 18 | Mixed trailing slash policy | Choose one, enforce everywhere | Canonical URLs |
| 19 | `/page1`, `/page2` | `/wizard/1`, `/wizard/2` | Descriptive URLs |
| 20 | Skip error boundaries | Wrap all route groups | Prevent crashes |

---

## 📚 QUICK REFERENCE

### Route Naming Checklist

Before adding a new route, check:

- [ ] Is it lowercase?
- [ ] Is it kebab-case (multi-word)?
- [ ] Is it a noun (not verb)?
- [ ] Does it follow plural/singular rules?
- [ ] Is it under correct parent (`/app` for protected)?
- [ ] Does it need to be nested?
- [ ] Is the depth appropriate (<4 levels)?
- [ ] Does it have a unique title?
- [ ] Does it have a unique meta description?
- [ ] Is it in the sitemap?
- [ ] Does it have appropriate guards?

---

### Common Patterns

**Marketing Pages:**
```
/ (homepage)
/services (collection)
/services/:slug (detail)
/pricing (page)
/case-studies (collection)
/case-studies/:slug (detail)
/blog (collection)
/blog/:slug (detail)
```

**App Pages:**
```
/app/dashboard (overview)
/app/leads (collection)
/app/leads/:id (detail)
/app/leads/:id/:section (sub-detail)
/app/settings (hub)
/app/settings/:section (sub-page)
```

**Wizard:**
```
/wizard/:step (steps 1-5)
/wizard/processing (AI state)
/wizard/complete (success)
```

**Auth:**
```
/login (public)
/signup (public)
/forgot-password (public)
/reset-password (public)
```

**Utility:**
```
/sitemap (public)
/404 (catch-all)
* (404 handler)
```

---

## 🎯 ENFORCEMENT

### Code Review Checklist

When reviewing routing PRs, verify:

1. **URLs follow conventions** (lowercase, kebab-case, etc.)
2. **Appropriate nesting** (not too deep, logical)
3. **Guards applied correctly** (protected routes)
4. **Meta tags added** (title, description, canonical)
5. **Error handling** (404, loading, validation)
6. **Tests included** (navigation, deep links)
7. **Sitemap updated** (if public route)
8. **No security issues** (sensitive data in URLs, etc.)

---

### Linting Rules

**Enforce with ESLint:**

```js
// .eslintrc.js
module.exports = {
  rules: {
    // Enforce lowercase route paths
    'react-router/lowercase-route-paths': 'error',
    
    // No trailing slashes
    'react-router/no-trailing-slash': 'error',
    
    // Require unique page titles
    'react-helmet/unique-title': 'error',
  }
};
```

---

## 📖 ADDITIONAL RESOURCES

**Official Docs:**
- [React Router v6 Docs](https://reactrouter.com/en/main)
- [Google SEO Guidelines](https://developers.google.com/search/docs)
- [Web.dev Best Practices](https://web.dev/learn)

**Internal Docs:**
- Marketing Routes: `/docs/tasks/15-marketing-routing-plan.md`
- Dashboard Routes: `/docs/tasks/16-dashboard-app-routing-plan.md`
- Wizard Routes: `/docs/tasks/17-wizard-routing-plan.md`
- Implementation Guide: `/docs/tasks/13-phase-1-routing-implementation.md`

---

**Document Status:** ✅ Production Standards  
**Last Updated:** December 20, 2025  
**Next Review:** Quarterly  
**Owner:** Product Architecture Team

---

*This document is the single source of truth for all routing decisions. All new routes must comply with these standards.*
