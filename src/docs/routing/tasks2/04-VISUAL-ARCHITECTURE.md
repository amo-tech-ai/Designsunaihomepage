# Visual Architecture Guide

**Version:** 2.0.0  
**Purpose:** Mermaid diagram library for routing architecture  
**Audience:** Visual learners, presenters, documenters

---

## 🎯 **PURPOSE**

This document contains **12 Mermaid diagrams** explaining every aspect of routing architecture visually. Use these for:

- 📖 **Learning** - Understand concepts visually
- 👥 **Presentations** - Explain to team/stakeholders
- 📚 **Documentation** - Add to project docs
- 🎓 **Onboarding** - Train new developers

---

## 📊 **DIAGRAM INDEX**

**Quick Navigation:**

1. [High-Level Overview](#diagram-1-high-level-architecture)
2. [App Component Structure](#diagram-2-app-component-structure)
3. [Layout + Outlet Pattern](#diagram-3-layout--outlet-pattern)
4. [Route Resolution Flow](#diagram-4-route-resolution-flow)
5. [Navigation Callback Flow](#diagram-5-navigation-callback-flow)
6. [Lazy Loading Process](#diagram-6-lazy-loading-process)
7. [safeLazy Helper Logic](#diagram-7-safelazy-helper-logic)
8. [Protected Route Flow](#diagram-8-protected-route-flow)
9. [User Journey Example](#diagram-9-user-journey-example)
10. [Folder Structure](#diagram-10-folder-structure)
11. [Error Handling Paths](#diagram-11-error-handling-paths)
12. [Deployment Architecture](#diagram-12-deployment-architecture)

---

## 📐 **DIAGRAM 1: High-Level Architecture**

**What it shows:** Complete routing system from browser to components

```mermaid
flowchart TD
    Browser([User Browser<br/>yoursite.com/about]) --> Server[Web Server]
    
    Server -->|SPA Fallback| HTML[index.html<br/>+ JS bundles]
    
    HTML --> React[React App Loads]
    
    React --> BR[BrowserRouter<br/>Router Context Provider]
    
    BR --> Routes[Route Configuration<br/>/routes/index.tsx]
    
    Routes --> Match{URL Matching}
    
    Match -->|/| Marketing[MarketingLayout<br/>Public Routes]
    Match -->|/app/*| AppRoutes[AppLayout<br/>Protected Routes]
    Match -->|*| NotFound[404 Page]
    
    Marketing --> Outlet1[Outlet]
    AppRoutes --> Auth{Authenticated?}
    
    Auth -->|No| Login[Redirect to /login]
    Auth -->|Yes| Outlet2[Outlet]
    
    Outlet1 --> Page1[HomePage<br/>ServicesPage<br/>PricingPage]
    Outlet2 --> Page2[DashboardPage<br/>LeadsPage<br/>SettingsPage]
    
    style BR fill:#e3f2fd
    style Routes fill:#fff9c4
    style Marketing fill:#e8f5e9
    style AppRoutes fill:#fff3e0
    style NotFound fill:#ffebee
```

**Key Concepts:**
- BrowserRouter provides routing context
- Routes defined in single config
- Layouts wrap child routes
- Outlet renders matched child
- Auth guards protected routes

---

## 📐 **DIAGRAM 2: App Component Structure**

**What it shows:** Provider hierarchy in App.tsx

```mermaid
flowchart TD
    App[App Component<br/>export default] --> HP[HelmetProvider<br/>Meta tag management]
    
    HP --> BR[BrowserRouter<br/>Routing context]
    
    BR --> Auth[AuthProvider<br/>Authentication state]
    
    Auth --> AR[AppRoutes Component<br/>useRoutes hook]
    Auth --> Toast[Toaster<br/>Notifications]
    
    AR --> Route[Matched Route]
    
    Route --> Layout[Layout Component]
    Layout --> Outlet[Outlet]
    Outlet --> Page[Page Component]
    
    style BR fill:#e3f2fd
    style AR fill:#fff9c4
    style Layout fill:#e8f5e9
    style Page fill:#fff3e0
```

**Provider Order (Critical):**
1. HelmetProvider (outermost)
2. BrowserRouter (routing context)
3. AuthProvider (app state)
4. AppRoutes (route rendering)

**Why This Order:**
- HelmetProvider manages document head
- BrowserRouter must wrap route hooks
- AuthProvider needs router context
- AppRoutes uses routing hooks

---

## 📐 **DIAGRAM 3: Layout + Outlet Pattern**

**What it shows:** How layouts wrap child routes

```mermaid
sequenceDiagram
    participant Router as React Router
    participant Layout as MarketingLayout
    participant Header as <Header />
    participant Outlet as <Outlet />
    participant Footer as <Footer />
    participant Page as AboutPage

    Router->>Layout: Render layout component
    
    Layout->>Header: Render header
    Header-->>Layout: Header JSX
    
    Layout->>Outlet: Render <Outlet />
    
    Outlet->>Router: Request child route
    Router->>Router: Match child: "about"
    Router->>Page: Render AboutPage
    
    Page-->>Outlet: AboutPage JSX
    Outlet-->>Layout: Insert at Outlet position
    
    Layout->>Footer: Render footer
    Footer-->>Layout: Footer JSX
    
    Layout-->>Router: Complete tree:<br/>Header + AboutPage + Footer
```

**Result Structure:**
```
<MarketingLayout>
  <Header />
  <main>
    <AboutPage /> ← Rendered in Outlet
  </main>
  <Footer />
</MarketingLayout>
```

---

## 📐 **DIAGRAM 4: Route Resolution Flow**

**What it shows:** How router matches URLs to components

```mermaid
flowchart TD
    Start([User navigates to /services]) --> BR[BrowserRouter<br/>Receives URL]
    
    BR --> Parse[Parse URL<br/>pathname = /services]
    
    Parse --> Config[Load Route Config<br/>/routes/index.tsx]
    
    Config --> Loop{For each route}
    
    Loop -->|Route 1: /| NoMatch1[Path doesn't match]
    Loop -->|Route 2: /services| Match[✅ Path matches!]
    Loop -->|Route 3: /app| NoMatch2[Path doesn't match]
    
    Match --> CheckLayout{Has parent layout?}
    
    CheckLayout -->|Yes| RenderLayout[Render MarketingLayout]
    CheckLayout -->|No| RenderDirect[Render component directly]
    
    RenderLayout --> FindOutlet[Find <Outlet /> in layout]
    
    FindOutlet --> RenderChild[Render ServicesPage<br/>in Outlet]
    
    RenderDirect --> Display[Display component]
    RenderChild --> Display
    
    Display --> Success[✅ Page renders]
    
    NoMatch1 --> Loop
    NoMatch2 --> Loop
    
    Loop -->|No matches| CatchAll{Catch-all (*) exists?}
    
    CatchAll -->|Yes| NotFound[Render 404 page]
    CatchAll -->|No| BlankScreen[❌ Blank screen]
    
    style Match fill:#e8f5e9
    style Success fill:#e8f5e9
    style BlankScreen fill:#ffebee
    style NotFound fill:#fff9c4
```

**Key Points:**
- Router tries each route in order
- First match wins
- Catch-all (*) must be last
- Layout routes render parent first

---

## 📐 **DIAGRAM 5: Navigation Callback Flow**

**What it shows:** How navigation works through layers

```mermaid
flowchart LR
    User([User clicks button]) --> UIComp[UI Component<br/>Button.tsx]
    
    UIComp -->|onClick callback| Wrapper[Route Wrapper<br/>ButtonRoute.tsx]
    
    Wrapper -->|useNavigate hook| Router[React Router]
    
    Router -->|navigate call| URL[Update URL]
    
    URL -->|trigger re-render| Match[Match new route]
    
    Match --> Render[Render new page]
    
    subgraph "Routing Layer"
        Wrapper
        Router
    end
    
    subgraph "UI Layer"
        UIComp
    end
    
    style UIComp fill:#e3f2fd
    style Wrapper fill:#fff9c4
    style Router fill:#e8f5e9
```

**Code Example:**

```typescript
// UI Layer (Button.tsx)
export function Button({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick}>Click</button>;
}

// Routing Layer (ButtonRoute.tsx)
export default function ButtonRoute() {
  const navigate = useNavigate(); // ← Router hook
  
  const handleClick = () => {
    navigate(ROUTES.SERVICES); // ← Navigation logic
  };
  
  return <Button onClick={handleClick} />; // ← Pass callback
}
```

**Benefits:**
- UI components testable (no router mocks)
- Routing logic centralized
- Easy to refactor routes

---

## 📐 **DIAGRAM 6: Lazy Loading Process**

**What it shows:** How code splitting and lazy loading works

```mermaid
flowchart TD
    Start([Route matches]) --> Lazy{Component lazy loaded?}
    
    Lazy -->|No| RenderDirect[Render immediately]
    
    Lazy -->|Yes| Suspense{Suspense boundary exists?}
    
    Suspense -->|No| Error1[❌ Error<br/>Suspense required]
    
    Suspense -->|Yes| ShowFallback[Show loading fallback<br/>spinner]
    
    ShowFallback --> LoadChunk[Download code chunk<br/>from server]
    
    LoadChunk --> ParseJS[Parse JavaScript]
    
    ParseJS --> CheckExport{Has export?}
    
    CheckExport -->|Default export| UseDefault[Use default]
    CheckExport -->|Named export| CheckHelper{Using safeLazy?}
    CheckExport -->|No export| Error2[❌ Error<br/>No valid export]
    
    CheckHelper -->|Yes| UseNamed[Use named export]
    CheckHelper -->|No| Error3[❌ Error<br/>Element type invalid]
    
    UseDefault --> RenderComp[Render component]
    UseNamed --> RenderComp
    RenderDirect --> RenderComp
    
    RenderComp --> Success[✅ Component displays]
    
    style ShowFallback fill:#fff9c4
    style Success fill:#e8f5e9
    style Error1,Error2,Error3 fill:#ffebee
```

**Timeline:**

```
Time 0ms:   Route matched
Time 10ms:  Suspense fallback shown
Time 200ms: Chunk downloaded
Time 250ms: JavaScript parsed
Time 300ms: Component rendered
```

---

## 📐 **DIAGRAM 7: safeLazy Helper Logic**

**What it shows:** How safeLazy handles both export types

```mermaid
flowchart TD
    Start([safeLazy called]) --> Import[Execute dynamic import<br/>await importFn]
    
    Import --> Module[Receive module object]
    
    Module --> CheckDefault{module has<br/>'default' key?}
    
    CheckDefault -->|Yes| ReturnDefault[return default<br/>export]
    
    CheckDefault -->|No| CheckNamed{exportName<br/>provided?}
    
    CheckNamed -->|Yes| HasNamed{module has<br/>exportName key?}
    CheckNamed -->|No| UseFallback[Use first export<br/>Object.values[0]]
    
    HasNamed -->|Yes| ReturnNamed[return named<br/>export]
    HasNamed -->|No| UseFallback
    
    ReturnDefault --> Success[✅ Component loads]
    ReturnNamed --> Success
    UseFallback --> Success
    
    style Success fill:#e8f5e9
```

**Usage Examples:**

```typescript
// Component with default export
export default function HomePage() { ... }
const HomePage = safeLazy(() => import('./HomePage'));

// Component with named export
export function HomePage() { ... }
const HomePage = safeLazy(() => import('./HomePage'), 'HomePage');

// Both work! safeLazy handles it.
```

---

## 📐 **DIAGRAM 8: Protected Route Flow**

**What it shows:** Authentication and redirect logic

```mermaid
sequenceDiagram
    participant User
    participant Router
    participant Protected as ProtectedRoute
    participant Auth as useAuth hook
    participant Login as LoginPage
    participant Dashboard

    User->>Router: Navigate to<br/>/app/dashboard
    
    Router->>Protected: Render ProtectedRoute
    
    Protected->>Auth: Check isAuthenticated
    Auth-->>Protected: false (not logged in)
    
    Protected->>Protected: Save intended destination<br/>state = { from: '/app/dashboard' }
    
    Protected->>Login: <Navigate to="/login"<br/>state={{ from }} />
    
    Login-->>User: Show login form
    
    User->>Login: Submit credentials
    Login->>Auth: login(email, password)
    Auth->>Auth: Validate + save token
    Auth-->>Login: Success
    
    Login->>Login: Read state.from<br/>= '/app/dashboard'
    
    Login->>Router: navigate('/app/dashboard')
    
    Router->>Protected: Render ProtectedRoute
    Protected->>Auth: Check isAuthenticated
    Auth-->>Protected: true ✅
    
    Protected->>Dashboard: Render Dashboard
    Dashboard-->>User: Show dashboard ✅
```

**Key Points:**
- Preserve intended destination in `location.state`
- After login, redirect to intended page
- Not just to a default route

---

## 📐 **DIAGRAM 9: User Journey Example**

**What it shows:** Complete user flow through the app

```mermaid
flowchart LR
    Start([User lands<br/>yoursite.com]) --> Home[Homepage<br/>/<br/>MarketingLayout]
    
    Home -->|Click Services| Services[Services Page<br/>/services]
    
    Services -->|Click AI Chatbots| Detail[Service Detail<br/>/services/ai-chatbots]
    
    Detail -->|Click Start Brief| Wizard1[Wizard Step 1<br/>/wizard/1]
    
    Wizard1 --> Wizard2[Step 2<br/>/wizard/2]
    Wizard2 --> Wizard3[Step 3<br/>/wizard/3]
    Wizard3 --> Processing[Processing<br/>/wizard/processing]
    
    Processing --> Complete[Complete<br/>/wizard/complete]
    
    Complete --> Choice{User action}
    
    Choice -->|View Dashboard| CheckAuth{Authenticated?}
    Choice -->|Book Call| Booking[Booking<br/>/booking]
    
    CheckAuth -->|No| Login[Login<br/>/login]
    CheckAuth -->|Yes| Dashboard[Dashboard<br/>/app/dashboard]
    
    Login -->|After login| Dashboard
    
    Dashboard --> Leads[Leads<br/>/app/leads]
    Leads --> LeadDetail[Lead Detail<br/>/app/leads/123]
    
    style Home fill:#e3f2fd
    style Services fill:#e3f2fd
    style Detail fill:#e3f2fd
    style Wizard1 fill:#f3e5f5
    style Wizard2 fill:#f3e5f5
    style Wizard3 fill:#f3e5f5
    style Dashboard fill:#fff3e0
    style Leads fill:#fff3e0
    style LeadDetail fill:#fff3e0
```

**URL Path Traced:**
```
/
→ /services
→ /services/ai-chatbots
→ /wizard/1
→ /wizard/2
→ /wizard/3
→ /wizard/processing
→ /wizard/complete
→ /login (if not logged in)
→ /app/dashboard
→ /app/leads
→ /app/leads/123
```

---

## 📐 **DIAGRAM 10: Folder Structure**

**What it shows:** File organization and relationships

```mermaid
flowchart TD
    Root[/src/] --> Routes[/routes/<br/>Route config + wrappers]
    Root --> Layouts[/layouts/<br/>Layout components]
    Root --> Components[/components/<br/>UI components]
    Root --> Utils[/utils/<br/>Utilities]
    Root --> Constants[/constants/<br/>Constants]
    
    Routes --> RoutesIndex[index.tsx<br/>Route configuration]
    Routes --> Marketing[marketing/<br/>Marketing route wrappers]
    Routes --> App[app/<br/>App route wrappers]
    
    Layouts --> MarketingL[MarketingLayout.tsx<br/>Public pages layout]
    Layouts --> AppL[AppLayout.tsx<br/>Protected pages layout]
    
    Utils --> SafeLazy[safeLazy.ts<br/>Lazy loading helper]
    
    Constants --> RoutesConst[routes.ts<br/>ROUTES constants]
    
    RoutesIndex -.->|imports| MarketingL
    RoutesIndex -.->|imports| AppL
    RoutesIndex -.->|imports| SafeLazy
    
    Marketing -.->|imports| Components
    App -.->|imports| Components
    
    Marketing -.->|uses| RoutesConst
    App -.->|uses| RoutesConst
    
    style Routes fill:#fff9c4
    style Layouts fill:#e8f5e9
    style Components fill:#e3f2fd
    style Utils fill:#f3e5f5
    style Constants fill:#fff3e0
```

**Dependency Flow:**
- Routes import Layouts
- Routes import Utils (safeLazy)
- Route wrappers import Components
- Everyone imports Constants (ROUTES)
- Components import nothing routing-related

---

## 📐 **DIAGRAM 11: Error Handling Paths**

**What it shows:** How errors are handled

```mermaid
flowchart TD
    Start([User Action]) --> Router[React Router]
    
    Router --> Match{Route matches?}
    
    Match -->|Yes| Render[Attempt to render]
    Match -->|No| CatchAll{Catch-all (*)?}
    
    CatchAll -->|Yes| NotFound[404 NotFoundPage]
    CatchAll -->|No| BlankScreen[❌ Blank screen]
    
    Render --> Lazy{Lazy loaded?}
    
    Lazy -->|No| RenderSync[Render immediately]
    Lazy -->|Yes| LoadChunk{Chunk loads?}
    
    LoadChunk -->|Fail| ChunkError[❌ Chunk load error<br/>Error boundary]
    LoadChunk -->|Success| ExportCheck{Valid export?}
    
    ExportCheck -->|No| ExportError[❌ Invalid export<br/>Error boundary]
    ExportCheck -->|Yes| ComponentRender{Component renders?}
    
    RenderSync --> ComponentRender
    
    ComponentRender -->|Error| RuntimeError[❌ Runtime error<br/>Error boundary]
    ComponentRender -->|Success| Success[✅ Page displays]
    
    NotFound --> Recovery[Show recovery options<br/>Go Home, Go Back]
    ChunkError --> Recovery
    ExportError --> Recovery
    RuntimeError --> Recovery
    
    Recovery --> UserAction{User chooses}
    UserAction -->|Go Home| Router
    UserAction -->|Go Back| Browser[Browser history]
    
    style Success fill:#e8f5e9
    style BlankScreen fill:#ffebee
    style NotFound fill:#fff9c4
    style ChunkError fill:#ffebee
    style ExportError fill:#ffebee
    style RuntimeError fill:#ffebee
```

**Error Recovery Strategies:**

| Error Type | Recovery |
|------------|----------|
| 404 Not Found | Show helpful 404 page |
| Chunk load fail | Retry or show error |
| Invalid export | Fix code (safeLazy) |
| Runtime error | Error boundary catches |

---

## 📐 **DIAGRAM 12: Deployment Architecture**

**What it shows:** Production deployment flow

```mermaid
flowchart TD
    User([User<br/>yoursite.com/about]) --> DNS[DNS Resolution]
    
    DNS --> Server[Web Server<br/>Vercel/Netlify/etc.]
    
    Server --> FileCheck{/about file<br/>exists?}
    
    FileCheck -->|No SPA fallback| Return404[Return 404 ❌]
    
    FileCheck -->|With SPA fallback| Rewrite[Internal rewrite to<br/>index.html]
    
    Rewrite --> ServeHTML[Serve index.html<br/>+ JS bundles]
    
    ServeHTML --> Browser[Browser]
    
    Browser --> ParseHTML[Parse HTML]
    ParseHTML --> LoadJS[Load JavaScript]
    LoadJS --> ReactInit[Initialize React]
    ReactInit --> RouterInit[Initialize Router]
    
    RouterInit --> ParseURL[Parse URL<br/>pathname = /about]
    
    ParseURL --> MatchRoute[Match route config]
    
    MatchRoute --> RenderPage[Render AboutPage ✅]
    
    Return404 --> UserSeesError[User sees 404<br/>Route never loads ❌]
    
    style Rewrite fill:#e8f5e9
    style RenderPage fill:#e8f5e9
    style Return404 fill:#ffebee
    style UserSeesError fill:#ffebee
```

**Platform Configs:**

```mermaid
flowchart LR
    Platform{Hosting Platform} --> Vercel[Vercel<br/>vercel.json]
    Platform --> Netlify[Netlify<br/>_redirects]
    Platform --> Cloudflare[Cloudflare Pages<br/>_redirects]
    Platform --> Nginx[Nginx<br/>nginx.conf]
    
    Vercel --> Config1["rewrites:<br/>  source: /*<br/>  dest: /index.html"]
    Netlify --> Config2["/*  /index.html  200"]
    Cloudflare --> Config3["/*  /index.html  200"]
    Nginx --> Config4["try_files<br/>  $uri /index.html"]
    
    style Config1,Config2,Config3,Config4 fill:#e8f5e9
```

---

## 🎯 **HOW TO USE THESE DIAGRAMS**

### **For Learning**

1. Start with Diagram 1 (High-Level Overview)
2. Then Diagram 2 (App Structure)
3. Deep dive into specific topics as needed

### **For Presentations**

1. Copy diagram markdown
2. Paste into Mermaid Live Editor (mermaid.live)
3. Export as SVG/PNG
4. Add to slides

### **For Documentation**

1. Copy diagram into markdown files
2. Add context paragraphs above/below
3. Link from README or docs

### **For Debugging**

1. Find relevant diagram
2. Trace your issue through the flow
3. Identify where the flow breaks

---

## 📝 **CUSTOMIZATION**

**To modify diagrams for your project:**

1. Copy diagram code
2. Update text labels
3. Add/remove nodes as needed
4. Adjust colors (fill:#hexcode)
5. Test in Mermaid Live Editor

**Color Scheme Used:**

- `#e3f2fd` - Light blue (primary components)
- `#fff9c4` - Yellow (processing/routing)
- `#e8f5e9` - Green (success states)
- `#fff3e0` - Orange (protected/special)
- `#ffebee` - Red (errors)
- `#f3e5f5` - Purple (wizard/flows)

---

**These diagrams are your visual guide to routing architecture. Reference them often, share them widely, and update them as your routing evolves.**
