# Dashboard V2 Style Guide
## Project Intelligence Operating System

**System:** Luxury AI CRM Dashboard V2  
**Design Language:** Editorial Calm Luxury  
**Philosophy:** Intelligence Proposes, User Controls  
**Last Updated:** December 29, 2024

---

## 1. Design Principles

### 1.1 Quiet Luxury
> "The UI should feel like an executive briefing room, not a consumer app."

- **Minimalist & High-Contrast:** White/Slate backgrounds with intentional accent color (Orange #FF6A3D)
- **Premium Feel:** Subtle borders, no gradients, no glowing effects
- **Negative Space:** Generous padding and spacing create breathing room
- **Confidence:** No visual noise, spinners, or "loading" anxiety

### 1.2 Human-First AI
- **Intelligence Lives Separately:** Right panel is dedicated AI space
- **Never Hijacks:** AI never auto-executes or overlays the work area
- **Approval Required:** Every AI action requires explicit confirmation
- **Explainable:** All recommendations include reasoning and impact

### 1.3 Neural Transparency
- **Grounded Data:** Every AI suggestion cites its reasoning
- **Confidence Levels:** Success rates and metrics always visible
- **Audit Trail:** Users can see what triggered automation
- **Preview Before Execute:** Show what will change before confirming

### 1.4 Typography Hierarchy
- **Sans for System:** All dashboard text uses system sans-serif
- **Clear Hierarchy:** Headlines (text-2xl) → Subheads (text-base) → Body (text-sm) → Labels (text-xs)
- **Not Loud:** No oversized text unless it's a numerical stat
- **Consistent Weights:** Regular for body, medium for emphasis, bold for stats

---

## 2. The 3-Panel Layout System

### 2.1 Global Architecture

```
┌─────────────────────────────────────────────────────────────┐
│ TOP SUMMARY STRIP (64px, sticky)                            │
│ Global Context - Project Name, Badges, Primary Goal         │
├──────────────┬──────────────────────────────┬───────────────┤
│ LEFT PANEL   │ CENTER PANEL                 │ RIGHT PANEL   │
│ Navigation   │ Work Area (Primary)          │ Intelligence  │
│ 256px        │ Fluid (min 640px)            │ 320px         │
│ Fixed        │ Main Scroll Container        │ Collapsible   │
│              │                              │               │
│ Always       │ Tables, Cards,               │ AI Tabs:      │
│ Visible      │ Forms, Stats                 │ • Agents      │
│ on Desktop   │                              │ • Automations │
│              │ Work Happens Here            │ • Workflows   │
│              │                              │ • Journeys    │
│              │                              │ • Examples    │
└──────────────┴──────────────────────────────┴───────────────┘
```

### 2.2 Panel Specifications

#### Top Summary Strip
```tsx
// Dimensions
height: 64px (h-16)
position: sticky top-0
z-index: 50
background: white
border-bottom: 1px solid slate-200

// Layout
display: flex
justify-content: space-between
align-items: center
padding: 0 32px (px-8)

// Content Rules
- Project name (text-base, text-slate-900)
- Badge pills (px-2.5 py-1, text-xs, rounded)
- NO forms, NO deep actions, NO scrolling
- Facts only: Status, Industry, Complexity, Goal
```

#### Left Panel - Navigation
```tsx
// Dimensions
width: 256px (w-64)
min-height: calc(100vh - 4rem)
background: white
border-right: 1px solid slate-200

// Layout
display: flex
flex-direction: column
padding: 16px (p-4)
gap: 4px (space-y-1)

// Navigation Items
activeState: bg-slate-900 text-white
inactiveState: text-slate-600 hover:bg-slate-100
border-radius: 8px (rounded-lg)
padding: 10px 12px (px-3 py-2.5)
icon-size: 20px (w-5 h-5)
text-size: 14px (text-sm)

// Context Indicator (Bottom)
border-top: 1px solid slate-200
padding: 16px (p-4)
text-size: 12px (text-xs) for label
text-size: 14px (text-sm) for value
```

#### Center Panel - Work Area
```tsx
// Dimensions
width: flex-1
min-width: 640px
overflow-y: auto

// Background
background: slate-50 (#F8FAFC)

// Content Padding
padding: 32px (p-8)

// Scroll Behavior
- Only panel that scrolls vertically
- Smooth scroll
- No horizontal scroll

// Rules
- No floating AI elements
- No hidden intelligence
- All actions must be explainable
- Primary focus of the interface
```

#### Right Panel - Intelligence
```tsx
// Dimensions (Expanded)
width: 320px (w-80)
min-height: calc(100vh - 4rem)
background: white
border-left: 1px solid slate-200

// Dimensions (Collapsed)
width: 56px (w-14)
icons-only: vertical stack

// Header
height: 48px (h-12)
border-bottom: 1px solid slate-200
padding: 0 16px (px-4)
label: text-xs uppercase tracking-wider text-slate-500

// Tab Navigation
display: flex
border-bottom: 1px solid slate-200
tabs: flex-1 each
active-indicator: 2px orange underline
icon-size: 16px (w-4 h-4)
text-size: 12px (text-xs)

// Content Area
padding: 16px (p-4)
overflow-y: auto
```

### 2.3 Responsive Behavior

```tsx
// Desktop (≥1440px) - OPTIMAL
leftPanel: 256px fixed
centerPanel: fluid (grows)
rightPanel: 320px collapsible

// Desktop (≥1200px) - MINIMUM
leftPanel: 256px fixed
centerPanel: min 640px
rightPanel: 320px collapsible

// Tablet (≥1024px) - NOT YET IMPLEMENTED
leftPanel: 56px icon rail
centerPanel: full width
rightPanel: slide-in drawer

// Mobile (<768px) - NOT YET IMPLEMENTED
leftPanel: bottom navigation bar
centerPanel: full screen
rightPanel: bottom sheet
```

---

## 3. Typography System

### 3.1 Font Stack
```css
/* System Sans - Used for everything */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             Roboto, "Helvetica Neue", Arial, sans-serif;
```

### 3.2 Type Scale

| Use Case | Class | Size | Weight | Color |
|----------|-------|------|--------|-------|
| Page Headline | `text-2xl` | 24px/1.5rem | Regular | slate-900 |
| Section Title | `text-lg` | 18px/1.125rem | Regular | slate-900 |
| Body Text | `text-sm` | 14px/0.875rem | Regular | slate-600 |
| Stat Number | `text-3xl` | 30px/1.875rem | Regular | slate-900 |
| Label (Caps) | `text-xs` | 12px/0.75rem | Regular/Medium | slate-500 |
| Micro Label | `text-xs` | 12px/0.75rem | Regular | slate-500 |
| Badge Text | `text-xs` | 12px/0.75rem | Regular | Context |

### 3.3 Typography Rules

**DO:**
```tsx
// Page titles - simple and clear
<h1 className="text-2xl text-slate-900 mb-1">Blueprints</h1>
<p className="text-sm text-slate-600">Manage project blueprints</p>

// Stats - let numbers speak
<div className="text-3xl text-slate-900 mb-1">247</div>
<div className="text-xs text-emerald-600">+12% this week</div>

// Labels - subtle and uppercase
<div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
  Recommended
</div>
```

**DON'T:**
```tsx
// ❌ Oversized headlines
<h1 className="text-7xl font-bold">Dashboard</h1>

// ❌ Mixing too many weights
<div className="font-black text-3xl">247</div>

// ❌ Unnecessary emphasis
<p className="font-bold text-lg uppercase">Click here!</p>
```

---

## 4. Color System

### 4.1 Core Palette

```tsx
// Backgrounds
Base Surface:     #F8FAFC (slate-50)
Card Surface:     #FFFFFF (white)
Hover Surface:    #F1F5F9 (slate-100)
Border Default:   #E2E8F0 (slate-200)

// Text
Primary Text:     #0F172A (slate-900)
Secondary Text:   #475569 (slate-600)
Tertiary Text:    #64748B (slate-500)

// Accent (Use Sparingly)
Primary Accent:   #FF6A3D (orange-500)
Accent Hover:     #F97316 (orange-600)

// Status Colors
Success:          #10B981 (emerald-500)
Warning:          #F59E0B (orange-500)
Error:            #EF4444 (red-500)
Info:             #3B82F6 (blue-500)
```

### 4.2 Badge Color System

```tsx
// Status Badges
Active/Success:   bg-emerald-50 text-emerald-700
Warning/Review:   bg-orange-50 text-orange-700
Info/In Progress: bg-blue-50 text-blue-700
Neutral/Draft:    bg-slate-100 text-slate-700
Error/Critical:   bg-red-50 text-red-700

// Implementation
<span className="px-2.5 py-1 text-xs bg-emerald-50 text-emerald-700 rounded">
  Active
</span>
```

### 4.3 Color Usage Rules

**Accent Color (Orange) - Use For:**
- Active tab indicator (2px underline)
- Primary action buttons (hover states)
- Selected items in right panel
- Critical attention indicators
- Progress bar fills

**NEVER Use For:**
- Large background areas
- Body text
- Borders (except active states)
- Multiple elements at once

**Visual Weight Priority:**
```
Top Strip:    Light (minimal visual weight)
Left Panel:   Quiet (recedes to background)
Center Panel: Dominant (primary focus)
Right Panel:  Subtle (supportive, not loud)
```

---

## 5. Component Library

### 5.1 Stats Cards

```tsx
// Standard Stats Card
<div className="bg-white rounded-lg border border-slate-200 p-6">
  <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
    <Icon className="w-4 h-4" />
    <span>Label</span>
  </div>
  <div className="text-3xl text-slate-900 mb-1">247</div>
  <div className="text-xs text-emerald-600">+12% this week</div>
</div>

// Rules
border-radius: 8px (rounded-lg)
border: 1px solid slate-200
padding: 24px (p-6)
icon-size: 16px (w-4 h-4)
stat-size: 30px (text-3xl)
label-size: 14px (text-sm)
meta-size: 12px (text-xs)
```

### 5.2 Tables

```tsx
// Table Container
<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
  <table className="w-full">
    <thead className="bg-slate-50 border-b border-slate-200">
      <tr>
        <th className="text-left px-6 py-3 text-xs text-slate-500 uppercase tracking-wider">
          Column Name
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-200">
      <tr className="hover:bg-slate-50 transition-colors cursor-pointer">
        <td className="px-6 py-4">
          <span className="text-sm text-slate-900">Data</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

// Rules
header-bg: slate-50
header-border: 1px bottom slate-200
header-text: text-xs uppercase tracking-wider slate-500
row-hover: slate-50
cell-padding: px-6 py-4
cell-text: text-sm slate-900
divider: 1px slate-200 between rows
```

### 5.3 Buttons

```tsx
// Primary Button (Black)
<button className="h-10 px-4 bg-slate-900 text-white rounded-lg 
                   hover:bg-slate-800 transition-colors flex items-center gap-2">
  <Icon className="w-4 h-4" />
  <span>Action</span>
</button>

// Secondary Button (Border)
<button className="h-10 px-4 border border-slate-300 text-slate-700 rounded-lg 
                   hover:bg-slate-50 transition-colors">
  Action
</button>

// Success Button (Green)
<button className="h-10 px-4 bg-emerald-500 text-white rounded-lg 
                   hover:bg-emerald-600 transition-colors">
  Enable
</button>

// Danger Button (Red Border)
<button className="h-10 px-4 border border-red-300 text-red-700 rounded-lg 
                   hover:bg-red-50 transition-colors">
  Delete
</button>

// Rules
height: 40px (h-10) for standard actions
height: 36px (h-9) for inline actions
height: 32px (h-8) for compact/card actions
border-radius: 8px (rounded-lg)
padding: px-4 (16px horizontal)
icon-size: 16px (w-4 h-4)
gap: 8px (gap-2) between icon and text
```

### 5.4 Modals

```tsx
// Modal Overlay
<div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50">
  {/* Modal Content */}
  <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
    <h3 className="text-lg text-slate-900 mb-2">Confirm Action</h3>
    <p className="text-sm text-slate-600 mb-6">
      Explanation of what will happen...
    </p>
    <div className="flex gap-3">
      <button className="flex-1 h-10 bg-slate-900 text-white rounded-lg 
                         hover:bg-slate-800 transition-colors">
        Confirm
      </button>
      <button className="flex-1 h-10 border border-slate-300 text-slate-700 rounded-lg 
                         hover:bg-slate-50 transition-colors">
        Cancel
      </button>
    </div>
  </div>
</div>

// Rules
backdrop: slate-900/50 (50% opacity)
modal-bg: white
border-radius: 8px (rounded-lg)
padding: 24px (p-6)
max-width: 448px (max-w-md)
shadow: shadow-xl
title-size: text-lg
body-size: text-sm
button-layout: equal width (flex-1)
```

### 5.5 Navigation Items

```tsx
// Active Navigation Item
<Link
  to="/route"
  className="flex items-center gap-3 px-3 py-2.5 rounded-lg 
             bg-slate-900 text-white"
>
  <Icon className="w-5 h-5 flex-shrink-0" />
  <span className="text-sm">Label</span>
</Link>

// Inactive Navigation Item
<Link
  to="/route"
  className="flex items-center gap-3 px-3 py-2.5 rounded-lg 
             text-slate-600 hover:bg-slate-100 transition-colors"
>
  <Icon className="w-5 h-5 flex-shrink-0" />
  <span className="text-sm">Label</span>
</Link>

// Rules
padding: px-3 py-2.5 (12px horizontal, 10px vertical)
border-radius: 8px (rounded-lg)
icon-size: 20px (w-5 h-5)
text-size: 14px (text-sm)
gap: 12px (gap-3)
active: bg-slate-900 text-white (no border)
hover: bg-slate-100 (inactive only)
```

### 5.6 Progress Bars

```tsx
// Progress Bar
<div className="mb-4">
  <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
    <span>Progress</span>
    <span>65%</span>
  </div>
  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
    <div 
      className="h-full bg-orange-500 transition-all"
      style={{ width: '65%' }}
    />
  </div>
</div>

// Rules
container-height: 8px (h-2)
container-bg: slate-100
border-radius: rounded-full
fill-color: orange-500 (accent)
transition: transition-all
label-size: text-xs
label-spacing: mb-2
```

### 5.7 Badges & Pills

```tsx
// Status Badge
<span className="px-2.5 py-1 text-xs bg-emerald-50 text-emerald-700 rounded">
  Active
</span>

// Count Badge
<span className="px-2 py-0.5 text-xs bg-slate-100 text-slate-700 rounded">
  12
</span>

// Rules
padding: px-2.5 py-1 for text badges
padding: px-2 py-0.5 for count badges
text-size: 12px (text-xs)
border-radius: 4px (rounded)
NO border (filled background only)
```

### 5.8 Right Panel AI Cards

```tsx
// Recommendation Card (Highlighted)
<div className="p-4 bg-slate-50 rounded-lg">
  <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-2">
    Recommended
  </h4>
  <p className="text-sm text-slate-900 mb-1">
    Add Version Control Agent
  </p>
  <p className="text-xs text-slate-600 mb-3">
    Track blueprint changes and enable rollback
  </p>
  <button className="w-full h-8 px-3 bg-orange-500 text-white rounded text-xs 
                     hover:bg-orange-600 transition-colors">
    Add Agent
  </button>
</div>

// Status Card (Standard)
<div className="p-3 rounded-lg border border-slate-200">
  <h4 className="text-sm text-slate-900 mb-1">Agent Name</h4>
  <p className="text-xs text-slate-600">Status description</p>
</div>

// Status Card (Emphasized)
<div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
  <div className="flex items-start justify-between mb-2">
    <h4 className="text-sm text-slate-900">Agent Name</h4>
    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded">
      Active
    </span>
  </div>
  <p className="text-xs text-slate-600">Status with metrics</p>
</div>

// Rules
padding: p-4 for emphasized, p-3 for standard
border-radius: 8px (rounded-lg)
spacing: mb-2 between title and description
button-height: 32px (h-8) for compact cards
```

---

## 6. Spacing & Layout

### 6.1 Spacing Scale

```tsx
// Standard Spacing Values
gap-1:   4px   // Tight (icon + text inline)
gap-2:   8px   // Button icon + text
gap-3:   12px  // Navigation items
gap-4:   16px  // Card grid
gap-6:   24px  // Section spacing (default)
gap-8:   32px  // Major section breaks
gap-12:  48px  // Page-level sections

// Padding Values
p-3:     12px  // Compact cards
p-4:     16px  // Standard cards, right panel
p-6:     24px  // Stats cards, modals
p-8:     32px  // Main content area
```

### 6.2 Layout Patterns

```tsx
// Page Header
<div className="flex items-center justify-between mb-6">
  <div>
    <h1 className="text-2xl text-slate-900 mb-1">Page Title</h1>
    <p className="text-sm text-slate-600">Description</p>
  </div>
  <button>Action</button>
</div>

// Stats Grid (4 columns)
<div className="grid grid-cols-4 gap-4">
  {/* Stats cards */}
</div>

// Stats Grid (3 columns)
<div className="grid grid-cols-3 gap-4">
  {/* Stats cards */}
</div>

// Content Sections
<div className="space-y-6">
  {/* Each section has 24px vertical spacing */}
</div>

// Card Internal Spacing
<div className="space-y-3">
  {/* Items within a card use 12px spacing */}
</div>
```

### 6.3 Responsive Grid

```tsx
// 4-column responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

// 3-column responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// 2-column responsive
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
```

---

## 7. AI Intelligence Patterns

### 7.1 Right Panel Tab Configuration

```tsx
// Standard 5 Tabs
const tabs = [
  { id: "agents", label: "Agents", icon: Bot },
  { id: "automations", label: "Auto", icon: Zap },
  { id: "workflows", label: "Flows", icon: GitBranch },
  { id: "journeys", label: "Journeys", icon: Route },
  { id: "examples", label: "Examples", icon: Lightbulb },
];

// Rules
- Max 5 tabs per panel
- Max 3-6 items per tab
- Everything must be ranked
- Everything must be explainable
- Use icons + short labels (4-8 chars)
```

### 7.2 Confidence & Metrics Display

```tsx
// Success Rate with Color
<p className="text-xs text-emerald-600">
  Success rate: 94%
</p>

// Performance Improvement
<div className="text-xs text-emerald-600">
  -92% from baseline
</div>

// Warning Indicator
<div className="text-xs text-orange-600">
  Needs attention
</div>

// Count with Context
<p className="text-xs text-slate-600">
  Processing 24 leads, 18 qualified
</p>
```

### 7.3 Approval Modal Pattern

```tsx
// Required for ALL AI actions
const [confirmModal, setConfirmModal] = useState({
  show: false,
  automation: "",
  action: "enable"
});

// Modal Content Structure
<div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
  <h3 className="text-lg text-slate-900 mb-2">Confirm Action</h3>
  <p className="text-sm text-slate-600 mb-6">
    Are you sure you want to <span className="text-slate-900">{action}</span> 
    the automation "<span className="text-slate-900">{name}</span>"? 
    This will {explanation}.
  </p>
  <div className="flex gap-3">
    <button onClick={handleConfirm}>Confirm</button>
    <button onClick={handleCancel}>Cancel</button>
  </div>
</div>

// Rules
- MUST explain what will happen
- MUST show what will be affected
- MUST have explicit confirm/cancel
- MUST block execution until confirmed
- Use calm, professional language
```

---

## 8. Interaction & States

### 8.1 Hover States

```tsx
// Cards
hover:border-slate-300
transition-all

// Buttons
hover:bg-slate-800      // Primary
hover:bg-slate-50       // Secondary
hover:bg-orange-600     // Accent
transition-colors

// Table Rows
hover:bg-slate-50
transition-colors
cursor-pointer

// Navigation Items
hover:bg-slate-100
transition-colors
```

### 8.2 Active States

```tsx
// Navigation (Active Route)
bg-slate-900 text-white

// Tab (Active)
text-slate-900 border-b-2 border-orange-500

// Selected Item
bg-slate-100 border border-slate-300
```

### 8.3 Loading States

```tsx
// NO spinners - Use text instead
<div className="text-sm text-slate-600">
  Processing automations...
</div>

// Status indicator
<div className="flex items-center gap-2 text-sm text-slate-600">
  <Circle className="w-4 h-4 animate-pulse text-orange-500" />
  <span>Analyzing data...</span>
</div>
```

### 8.4 Empty States

```tsx
// Centered empty state
<div className="flex flex-col items-center justify-center py-12">
  <Icon className="w-12 h-12 text-slate-300 mb-3" />
  <h3 className="text-base text-slate-900 mb-1">No items found</h3>
  <p className="text-sm text-slate-600 mb-4">
    Get started by creating your first item
  </p>
  <button>Create New</button>
</div>
```

---

## 9. Icon System

### 9.1 Icon Library
**Source:** `lucide-react`

### 9.2 Icon Sizes

```tsx
// Navigation (Left Panel)
<Icon className="w-5 h-5" />     // 20px

// Buttons & Actions
<Icon className="w-4 h-4" />     // 16px

// Stats Card Labels
<Icon className="w-4 h-4" />     // 16px

// Right Panel Tabs
<Icon className="w-4 h-4" />     // 16px

// Empty States
<Icon className="w-12 h-12" />   // 48px
```

### 9.3 Icon Colors

```tsx
// Navigation (Inactive)
text-slate-400

// Stats Labels
text-slate-500

// Success/Active
text-emerald-500

// Warning
text-orange-500

// Error
text-red-500

// Info
text-blue-500
```

### 9.4 Standard Icons

| Use Case | Icon | Package |
|----------|------|---------|
| Dashboard | `LayoutDashboard` | lucide-react |
| Blueprints | `FileText` | lucide-react |
| Projects | `FolderKanban` | lucide-react |
| Tasks | `CheckSquare` | lucide-react |
| Automations | `Zap` | lucide-react |
| Settings | `Settings` | lucide-react |
| AI/Agent | `Bot` | lucide-react |
| Workflow | `GitBranch` | lucide-react |
| Journey | `Route` | lucide-react |
| Example | `Lightbulb` | lucide-react |
| Add/Create | `Plus` | lucide-react |
| Collapse | `ChevronRight` | lucide-react |
| Expand | `ChevronLeft` | lucide-react |

---

## 10. Motion & Animation

### 10.1 Transition Standards

```tsx
// Default Transition
transition-colors    // For color changes (hover, active)
duration-200        // Fast (200ms)

// Layout Transitions
transition-all      // For size, position changes
duration-300        // Medium (300ms)

// Hover Micro-movements
hover:-translate-y-1 transition-transform
```

### 10.2 Animation Rules

**DO:**
- Use subtle transitions for state changes
- Apply hover effects for interactive elements
- Animate panel collapse/expand
- Use pulse for loading indicators

**DON'T:**
- Use bounce or elastic easing
- Animate on initial page load
- Use multiple animations simultaneously
- Create distracting motion

---

## 11. Data Display Patterns

### 11.1 Stats Formatting

```tsx
// Large Numbers
247         // No commas for < 1000
1,247       // Commas for ≥ 1000
1.2K        // Abbreviated for ≥ 10,000
1.2M        // Abbreviated for ≥ 1,000,000

// Percentages
89%         // No decimal for whole numbers
89.5%       // One decimal for precision

// Time
2m          // Minutes
1 hour      // Hours
2 days ago  // Relative time
Dec 30      // Absolute date (short)
Dec 30, 2024 // Absolute date (full)

// Currency
$1,247      // No decimals
$1,247.50   // Decimals for cents
```

### 11.2 Metric Context

```tsx
// Always provide context
<div className="text-3xl text-slate-900 mb-1">247</div>
<div className="text-xs text-emerald-600">+12% this week</div>

// Good context examples
"+12% this week"
"-92% from baseline"
"76% conversion"
"On track"
"Needs attention"
```

### 11.3 Status Indicators

```tsx
// Use color + icon + text
<div className="flex items-center gap-2">
  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
  <span className="text-sm text-slate-900">Active</span>
</div>

// Badge version
<span className="px-2.5 py-1 text-xs bg-emerald-50 text-emerald-700 rounded">
  Active
</span>

// Status Mapping
Active/Success:     Emerald
In Progress/Info:   Blue
Warning/Review:     Orange
Error/Critical:     Red
Neutral/Draft:      Slate
```

---

## 12. Do / Don't Rules

### 12.1 Layout

**DO:**
✅ Keep work area (center panel) as primary focus  
✅ Use left nav for orientation only  
✅ Keep AI in right panel, never overlay work  
✅ Use sticky top strip for global context  
✅ Allow right panel to collapse on dense screens  

**DON'T:**
❌ Float AI elements over work area  
❌ Auto-collapse navigation  
❌ Create nested scroll containers  
❌ Hide important actions in collapsed panels  
❌ Use modals for primary workflows  

### 12.2 Color

**DO:**
✅ Use slate scale for 95% of interface  
✅ Use orange accent sparingly (tabs, buttons)  
✅ Use status colors for badges and metrics  
✅ Maintain high contrast for text  
✅ Use white cards on slate-50 background  

**DON'T:**
❌ Use orange for large areas  
❌ Mix multiple accent colors  
❌ Use low-contrast text  
❌ Create gradient backgrounds  
❌ Use decorative colors without purpose  

### 12.3 Typography

**DO:**
✅ Use consistent type scale  
✅ Maintain clear hierarchy  
✅ Use uppercase for small labels only  
✅ Keep body text at text-sm  
✅ Let numbers be large and readable  

**DON'T:**
❌ Mix font families  
❌ Use bold everywhere  
❌ Create oversized headlines  
❌ Use italic for emphasis  
❌ Uppercase long text  

### 12.4 Components

**DO:**
✅ Use consistent border radius (rounded-lg)  
✅ Apply consistent padding (p-4, p-6, p-8)  
✅ Include icons with labels  
✅ Show loading states with text  
✅ Provide confirmation for destructive actions  

**DON'T:**
❌ Mix border radius styles  
❌ Use heavy shadows  
❌ Create custom UI patterns without reason  
❌ Use spinners for loading  
❌ Allow AI to auto-execute  

### 12.5 AI Patterns

**DO:**
✅ Require approval for ALL AI actions  
✅ Explain what will happen before executing  
✅ Show confidence levels and metrics  
✅ Provide reasoning for recommendations  
✅ Keep AI suggestions in right panel  

**DON'T:**
❌ Auto-execute AI recommendations  
❌ Hide AI actions from user  
❌ Use AI without explanation  
❌ Present AI as infallible  
❌ Let AI hijack the interface  

---

## 13. Implementation Checklist

### For Every New Dashboard Page:

**Layout:**
- [ ] Uses `DashboardLayout` wrapper
- [ ] Implements `TopStrip` with project context
- [ ] Main content in center panel (p-8)
- [ ] Right panel configured (optional)
- [ ] Left nav highlights active route

**Typography:**
- [ ] Page title is text-2xl slate-900
- [ ] Description is text-sm slate-600
- [ ] Body text is text-sm
- [ ] Stats are text-3xl
- [ ] Labels are text-xs

**Colors:**
- [ ] Background is slate-50
- [ ] Cards are white with slate-200 border
- [ ] Text hierarchy uses slate scale
- [ ] Accent color used sparingly
- [ ] Status colors used appropriately

**Spacing:**
- [ ] Page padding is p-8 (32px)
- [ ] Section spacing is gap-6 (24px)
- [ ] Card padding is p-6 (24px)
- [ ] Grid gap is gap-4 (16px)

**Components:**
- [ ] Buttons follow size guidelines (h-10)
- [ ] Icons are consistent size (w-4 h-4 or w-5 h-5)
- [ ] Hover states defined
- [ ] Loading states use text
- [ ] Modals require confirmation

**Interactions:**
- [ ] All AI actions require approval
- [ ] Hover states have transitions
- [ ] Active states clearly visible
- [ ] Empty states are helpful
- [ ] Error states are clear

---

## 14. Code Examples

### Complete Page Template

```tsx
"use client";

import { DashboardLayout } from "../layout/DashboardLayout";
import { TopStrip } from "../components/TopStrip";
import { RightPanelTabs, STANDARD_AI_TABS } from "../components/RightPanelTabs";
import { Icon1, Icon2 } from "lucide-react";

export default function NewPage() {
  const topStrip = (
    <TopStrip
      projectName="Project Name"
      industry="Industry"
      status="Status"
      complexity="Complexity"
      deliveryModel="Model"
      primaryGoal="Goal"
    />
  );

  const rightPanel = (
    <RightPanelTabs
      defaultTab="agents"
      tabs={[
        {
          ...STANDARD_AI_TABS.agents,
          content: (
            <div className="space-y-3">
              {/* AI content */}
            </div>
          ),
        },
        // ... other tabs
      ]}
    />
  );

  return (
    <DashboardLayout
      topStrip={topStrip}
      rightPanel={rightPanel}
      rightPanelDefaultOpen={true}
    >
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-slate-900 mb-1">Page Title</h1>
            <p className="text-sm text-slate-600">Description</p>
          </div>
          <button className="h-10 px-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
            Action
          </button>
        </div>

        {/* Content */}
        {/* ... */}
      </div>
    </DashboardLayout>
  );
}
```

---

## 15. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 29, 2024 | Initial style guide based on Dashboard V2 implementation |

---

## 16. References

**Design System:** Editorial Calm Luxury  
**Color Palette:** Tailwind CSS Slate + Orange  
**Icons:** Lucide React  
**Framework:** React + TypeScript  
**Routing:** React Router v6  

**Related Documents:**
- `/docs/wizards/12-dashboard-v2-routes-complete.md` - Implementation tracker
- `/docs/wizards/11-dashboard-v2-footer-link.md` - Navigation integration
- Exact 3-Panel Layout Specification (user provided)

---

**🎯 Goal:** Create dashboards that feel like executive briefing tools, not consumer apps.

**✨ Result:** Users stay oriented, AI stays controlled, work stays central.
