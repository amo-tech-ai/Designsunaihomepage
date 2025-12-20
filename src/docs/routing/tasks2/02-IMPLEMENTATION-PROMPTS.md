# AI-Assisted Implementation Prompts

**Version:** 2.0.0  
**Target AI:** Claude Desktop, ChatGPT-4, or similar  
**Time Saved:** ~50% faster than manual implementation

---

## 🤖 **HOW TO USE THESE PROMPTS**

### **Setup (One-Time)**

1. **Open your AI assistant** (Claude Desktop, ChatGPT, etc.)
2. **Start a new conversation**
3. **Copy-paste "Context Setting Prompt"** below
4. **Then copy-paste prompts 1-15** in sequence

### **Workflow**

```
For each prompt:
1. Copy entire prompt block
2. Paste into AI
3. Review AI's response
4. Copy generated code
5. Paste into your project
6. Run verification command
7. Move to next prompt
```

### **Tips for Best Results**

- ✅ **Do** paste prompts exactly as written
- ✅ **Do** include file paths from your project
- ✅ **Do** verify AI output before proceeding
- ❌ **Don't** skip the context setting prompt
- ❌ **Don't** combine multiple prompts
- ❌ **Don't** skip verification steps

---

## 📋 **CONTEXT SETTING PROMPT**

**Copy this FIRST before any other prompts:**

```markdown
I'm implementing React Router v6 routing in a Vite + React + TypeScript application.

PROJECT CONTEXT:
- Framework: Vite + React 18 + TypeScript
- Router: React Router v6
- Existing components: Located in /src/components/
- Current state: State-based navigation (needs conversion to URL-based)

ARCHITECTURAL DECISIONS:
1. Router hooks (useNavigate, etc.) only in routing layer (/routes, /layouts)
2. UI components stay router-agnostic (callback props only)
3. Route wrappers in /routes/ compose existing components
4. Single Suspense strategy (layout-level)
5. All route paths in constants file

CRITICAL REQUIREMENTS:
- Import Sonner as: import { Toaster } from 'sonner' (NO @version)
- Use explicit imports: import { routes } from './routes/index'
- Use safeLazy helper for lazy loading
- Working navigation callbacks (not empty functions)
- Route constants for all paths

I'll be asking you to generate code for specific routing steps. Please:
1. Generate production-ready, type-safe code
2. Include JSDoc comments
3. Follow the architectural decisions above
4. Use correct import syntax
5. Avoid common routing anti-patterns

Ready to start?
```

**Wait for AI confirmation, then proceed with prompts below.**

---

## 🔧 **PROMPT 1: Create safeLazy Helper**

```markdown
Create a safeLazy helper utility for React Router lazy loading that:

1. Handles both default and named exports safely
2. Accepts an import function and optional export name
3. Returns a lazy-loaded component
4. Has full TypeScript types
5. Has JSDoc documentation

File location: /src/utils/safeLazy.ts

Requirements:
- Must work with: lazy(() => import('./Component'))
- Must work with: safeLazy(() => import('./Component'), 'Component')
- Should try default export first
- Then try named export if provided
- Fallback to first export if neither found

Generate the complete file with types and documentation.
```

**Verification:**
```bash
# File should compile
npx tsc --noEmit
```

---

## 🔧 **PROMPT 2: Create Route Constants**

```markdown
Create a route constants file that:

1. Defines all application route paths
2. Exports as const for type safety
3. Includes function helpers for dynamic routes
4. Has JSDoc documentation

File location: /src/constants/routes.ts

Include these routes:
- Marketing: /, /services, /services/:slug, /pricing, /contact
- App: /app/dashboard, /app/leads, /app/leads/:id, /app/settings
- Wizard: /wizard, /wizard/:step
- Auth: /login
- Error: /404

Format dynamic routes as functions that take parameters.

Example: SERVICE_DETAIL: (slug: string) => `/services/${slug}`

Generate the complete file.
```

**Verification:**
```typescript
// Test in another file
import { ROUTES } from './constants/routes';
const path = ROUTES.SERVICE_DETAIL('ai-chatbots'); // Should work
```

---

## 🔧 **PROMPT 3: Create MarketingLayout**

```markdown
Create a MarketingLayout component that:

1. Wraps public marketing pages
2. Has header, main content area with Outlet, footer
3. Uses Suspense around Outlet for lazy loading
4. Has a loading spinner fallback
5. Is fully responsive
6. Uses Tailwind CSS

File location: /src/layouts/MarketingLayout.tsx

Requirements:
- Import Outlet from react-router-dom
- Import Suspense from react
- Header: Simple with logo area and nav placeholder
- Main: Contains <Outlet /> wrapped in <Suspense>
- Footer: Simple copyright text
- Loading spinner: Centered, uses Tailwind animate-spin

Generate the complete component with types.
```

**Verification:**
```bash
# Component should render
npm run dev
# Visit / and check for layout structure
```

---

## 🔧 **PROMPT 4: Create AppLayout**

```markdown
Create an AppLayout component for protected app pages that:

1. Wraps authenticated dashboard pages
2. Uses existing AdminLayout component
3. Derives active page from URL using useLocation
4. Implements real navigation handler using useNavigate
5. Maps page names to route paths
6. Wraps Outlet in Suspense

File location: /src/layouts/AppLayout.tsx

Context:
- Existing component: AdminLayout from '../components/crm/AdminLayout'
- AdminLayout props: { activePage: string, onNavigate: (page: string) => void, children }
- Must use ROUTES constants from '../constants/routes'

Requirements:
- Use useLocation() to derive activePage from pathname
- Use useNavigate() for navigation handler
- Map page names: 'dashboard' → ROUTES.APP_DASHBOARD, 'leads' → ROUTES.APP_LEADS, etc.
- Wrap Outlet in Suspense with loading fallback
- Include warning log if page name has no route mapping

Generate the complete component with types.
```

**Verification:**
```typescript
// Should show correct active state based on URL
// Navigate to /app/leads and check sidebar highlights "leads"
```

---

## 🔧 **PROMPT 5: Create HomeRoute Wrapper**

```markdown
Create a route wrapper for the homepage that:

1. Wraps existing HomePageV7 component
2. Handles routing logic using useNavigate
3. Maps old state-based navigation to URL-based
4. Passes navigation callbacks as props
5. Uses ROUTES constants

File location: /src/routes/marketing/HomeRoute.tsx

Context:
- Existing component: HomePageV7 from '../../components/premium/HomePageV7'
- HomePageV7 props: { onNavigate?: (page: string) => void, onVersionChange?: (page: string) => void }
- Must convert page names to routes

Requirements:
- Use useNavigate hook
- Create handleNavigate function
- Map common page names: 'services' → ROUTES.SERVICES, 'pricing' → ROUTES.PRICING, etc.
- Support both onNavigate and onVersionChange props (legacy support)
- Default export the component

Generate the complete route wrapper with types.
```

**Verification:**
```bash
# Should navigate when clicking homepage CTAs
# Check URL changes correctly
```

---

## 🔧 **PROMPT 6: Create DashboardRoute Wrapper**

```markdown
Create a route wrapper for the dashboard that:

1. Wraps existing ProjectDashboard component
2. Handles navigation callbacks
3. Uses ROUTES constants
4. Default export

File location: /src/routes/app/DashboardRoute.tsx

Context:
- Existing component: ProjectDashboard from '../../components/ProjectDashboard'
- ProjectDashboard props: { onClose?: () => void }

Requirements:
- Use useNavigate hook
- Create handleClose that navigates to ROUTES.HOME
- Pass handleClose to ProjectDashboard
- Default export

Generate the complete route wrapper with types.
```

**Verification:**
```bash
# Dashboard should load at /app/dashboard
# Close button should navigate to homepage
```

---

## 🔧 **PROMPT 7: Create Route Configuration**

```markdown
Create the main route configuration file that:

1. Defines all application routes using RouteObject[]
2. Uses layout routes for Marketing and App sections
3. Lazy loads route wrappers using safeLazy
4. Has proper nesting with children arrays
5. Includes catch-all 404 route

File location: /src/routes/index.tsx

Requirements:
- Import RouteObject, Navigate from react-router-dom
- Import layouts: MarketingLayout, AppLayout
- Import safeLazy from ../utils/safeLazy
- Lazy load: HomeRoute, DashboardRoute (add more later)
- Structure:
  * Marketing routes: { path: '/', element: <MarketingLayout />, children: [...] }
  * App routes: { path: '/app', element: <AppLayout />, children: [...] }
  * /app index should redirect to /app/dashboard
  * Catch-all: { path: '*', element: <div>404</div> }
- Export as: export const routes: RouteObject[]

Generate the complete route configuration with types and comments.
```

**Verification:**
```typescript
// Should compile without errors
// Route array should have 3 top-level routes
```

---

## 🔧 **PROMPT 8: Update App.tsx**

```markdown
Update App.tsx to use React Router v6 with:

1. BrowserRouter wrapper
2. useRoutes hook
3. All necessary providers
4. Toaster for notifications

File location: /src/App.tsx

Requirements:
- Wrap everything in: HelmetProvider → BrowserRouter → AuthProvider
- Create AppRoutes component inside BrowserRouter that calls useRoutes(routes)
- Import { routes } from './routes/index' (explicit import)
- Import { Toaster } from 'sonner' (NO @version suffix!)
- Place Toaster inside providers

Structure:
```typescript
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
          <Toaster position="top-right" />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}
```

Generate the complete App.tsx file.
```

**Verification:**
```bash
npm run dev
# App should load without errors
# Navigate to / and /app/dashboard
```

---

## 🔧 **PROMPT 9: Create Vercel Deployment Config**

```markdown
Create a Vercel deployment configuration for SPA routing that:

1. Redirects all routes to index.html
2. Preserves the URL (no visible redirect)
3. Enables client-side routing in production

File location: /vercel.json (project root)

Requirements:
- Use rewrites (not redirects)
- Catch-all pattern: /(.*) 
- Destination: /index.html

Generate the complete vercel.json file.
```

**Verification:**
```bash
# After deploying to Vercel
# Visit yoursite.com/about directly
# Should load the about page (not 404)
```

---

## 🔧 **PROMPT 10: Create Netlify Deployment Config**

```markdown
Create a Netlify deployment configuration for SPA routing.

File location: /public/_redirects

Requirements:
- Single line: /*    /index.html   200
- Must use status code 200 (not 301)

Generate the complete _redirects file.
```

**Verification:**
```bash
# After deploying to Netlify
# Visit yoursite.com/about directly
# Should load the about page (not 404)
```

---

## 🔧 **PROMPT 11: Verification Script**

```markdown
Create a verification script that checks:

1. React Router installed
2. Required folders exist
3. Required files exist
4. No common import errors
5. TypeScript compiles

File location: /scripts/verify-routing.js

Check:
- package.json has react-router-dom@6
- Folders: /src/routes, /src/layouts exist
- Files: safeLazy.ts, routes.ts, index.tsx exist
- No imports with @version suffix
- TypeScript compilation succeeds

Generate Node.js script that can be run with: node scripts/verify-routing.js
```

**Usage:**
```bash
node scripts/verify-routing.js
```

---

## 🔧 **PROMPT 12: Fix Common Issues**

**Use this when encountering errors:**

```markdown
I'm getting this error in my React Router implementation:

[PASTE YOUR ERROR HERE]

Context:
- Using React Router v6
- Vite + React + TypeScript
- Following systematic routing implementation

Files involved:
[LIST FILES RELATED TO ERROR]

Please:
1. Identify the root cause
2. Explain why it's happening
3. Provide the exact fix
4. Show corrected code

Generate the solution.
```

---

## 🔧 **PROMPT 13: Generate Route Wrapper Template**

```markdown
Create a reusable route wrapper template that I can copy for new routes.

Requirements:
- TypeScript
- Imports: useNavigate, useParams (if needed)
- Import ROUTES constants
- Proper typing for props
- JSDoc comments
- Default export

Generate a template with placeholder comments showing where to:
- Add component import
- Add navigation handlers
- Add param handling
- Pass props to component
```

---

## 🔧 **PROMPT 14: Code Review Checklist**

```markdown
Generate a code review checklist for React Router implementation that validates:

1. Architectural decisions
2. Import correctness
3. Navigation patterns
4. Error handling
5. Type safety

Format as markdown checklist.
Include common mistakes to look for.
```

---

## 🔧 **PROMPT 15: Generate Test Cases**

```markdown
Generate manual test cases for routing implementation covering:

1. Homepage navigation
2. Direct URL access
3. Browser back/forward
4. Refresh behavior
5. 404 handling
6. Protected route redirects

Format as:
| Test Name | Steps | Expected Result | Pass/Fail |

Include at least 10 test cases.
```

---

## 🎯 **VERIFICATION PROMPTS**

### **After Each Step**

```markdown
Review this [component/config] I just created using your previous prompt.

[PASTE YOUR CODE HERE]

Check for:
1. Correct imports (especially Sonner - no @version)
2. Proper TypeScript types
3. Following architectural decisions (router hooks only in routing layer)
4. No anti-patterns
5. Production-ready code quality

Provide:
- ✅ What's correct
- ❌ What needs fixing
- 🔧 Exact fixes needed
```

---

## 🚨 **ERROR RECOVERY PROMPTS**

### **When Build Fails**

```markdown
My build is failing after implementing routing. Here's the error:

[PASTE ERROR]

Files I've created/modified:
- [LIST FILES]

Please diagnose and provide step-by-step fix.
```

### **When Navigation Doesn't Work**

```markdown
Navigation isn't working. Symptoms:
- [DESCRIBE ISSUE: e.g., "URL changes but page doesn't render"]
- [CURRENT BEHAVIOR]
- [EXPECTED BEHAVIOR]

Relevant code:
[PASTE CODE]

Please identify the issue and provide the fix.
```

### **When 404 in Production**

```markdown
Routes work locally but show 404 in production.

Platform: [Vercel/Netlify/etc.]
URL that fails: [URL]
Error message: [MESSAGE if any]

What deployment config do I need?
```

---

## 📊 **AI ASSISTANT COMPARISON**

| Feature | Claude Desktop | ChatGPT-4 | GitHub Copilot |
|---------|----------------|-----------|----------------|
| Context understanding | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Code generation | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Following patterns | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Error diagnosis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Documentation | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |

**Recommendation:** Claude Desktop for full implementation, ChatGPT-4 for debugging.

---

## 🎓 **BEST PRACTICES FOR AI-ASSISTED DEVELOPMENT**

### **Do's:**
- ✅ Start with context setting prompt
- ✅ Use prompts in sequence
- ✅ Verify each output before proceeding
- ✅ Ask for clarification if output seems wrong
- ✅ Use verification prompts liberally

### **Don'ts:**
- ❌ Skip context setting
- ❌ Combine multiple prompts
- ❌ Blindly copy-paste without review
- ❌ Skip verification steps
- ❌ Assume AI output is always correct

---

## 📈 **TIME SAVINGS ESTIMATE**

| Task | Manual | AI-Assisted | Time Saved |
|------|--------|-------------|------------|
| Setup folders | 5 min | 2 min | 60% |
| Create safeLazy | 15 min | 3 min | 80% |
| Create layouts | 30 min | 8 min | 73% |
| Create routes | 45 min | 10 min | 78% |
| Update App.tsx | 15 min | 3 min | 80% |
| Deployment config | 10 min | 2 min | 80% |
| **TOTAL** | **2 hours** | **45 min** | **62%** |

---

**These prompts are tested and validated. Follow them in sequence for best results. Always verify AI output before proceeding.**
