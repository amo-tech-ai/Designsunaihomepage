# Global Components Library - Complete Design System

**Document:** Reusable Components & Design Tokens  
**Usage:** All pages  
**Priority:** 🔥 P0 (Foundation)  
**Status:** Ready for design implementation

---

## 📋 Overview

This document defines all reusable components used across the Luxury AI CRM marketing site. Every component includes variants, states, specs, and usage guidelines.

**Component Categories:**
1. Design Tokens (Colors, Typography, Spacing, etc.)
2. Buttons
3. Form Inputs
4. Cards
5. Navigation
6. Footer
7. Modals
8. Loading States
9. Badges & Pills
10. Icons

---

## 🎨 Design Tokens

### Color Palette

```css
/* Primary/Accent */
--accent-50: #eff6ff;
--accent-100: #dbeafe;
--accent-200: #bfdbfe;
--accent-500: #3b82f6;  /* Primary blue */
--accent-600: #2563eb;
--accent-700: #1d4ed8;

/* Neutral/Grays */
--neutral-50: #f9fafb;
--neutral-100: #f3f4f6;
--neutral-200: #e5e7eb;
--neutral-300: #d1d5db;
--neutral-500: #6b7280;
--neutral-600: #4b5563;
--neutral-700: #374151;
--neutral-900: #111827;

/* Semantic Colors */
--success-50: #f0fdf4;
--success-500: #22c55e;
--success-600: #16a34a;

--error-50: #fef2f2;
--error-500: #ef4444;
--error-600: #dc2626;

--warning-50: #fffbeb;
--warning-500: #f59e0b;

/* Glassmorphism */
--glass-bg: rgba(255, 255, 255, 0.7);
--glass-border: rgba(255, 255, 255, 0.18);
--glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
```

### Typography

```css
/* Font Families */
--font-display: 'Editorial', 'Playfair Display', serif;
--font-sans: 'Inter', -apple-system, sans-serif;

/* Font Sizes */
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 32px;
--text-4xl: 40px;
--text-5xl: 56px;
--text-6xl: 64px;

/* Font Weights */
--weight-normal: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;

/* Line Heights */
--leading-tight: 1.1;
--leading-snug: 1.3;
--leading-normal: 1.5;
--leading-relaxed: 1.8;
```

### Spacing Scale (8px System)

```css
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-6: 48px;
--space-8: 64px;
--space-10: 80px;
--space-12: 96px;
--space-16: 128px;
```

### Border Radius

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 12px 40px rgba(0, 0, 0, 0.15);
--shadow-2xl: 0 24px 64px rgba(0, 0, 0, 0.2);
```

### Transitions

```css
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-slow: 0.3s ease;
```

---

## 🔘 Button Components

### Primary Button

**Component:** `Button/Primary`

**Default State:**
- Background: `var(--accent-500)`
- Color: White
- Height: 48px (desktop), 52px (mobile)
- Padding: 12px 24px
- Border-radius: `var(--radius-lg)`
- Font: 16px, 600 weight
- Shadow: `var(--shadow-md)`

**Hover:**
- Background: `var(--accent-600)`
- Transform: translateY(-2px)
- Shadow: `var(--shadow-lg)`

**Active/Pressed:**
- Transform: translateY(0)
- Shadow: `var(--shadow-sm)`

**Disabled:**
- Background: `var(--neutral-300)`
- Color: `var(--neutral-500)`
- Cursor: not-allowed
- Shadow: none

**Loading:**
- Background: `var(--accent-500)`
- Spinner: 20px, white
- Text: "Loading..." or hidden

**Sizes:**
- Small: Height 40px, padding 10px 20px, font 14px
- Medium: Height 48px, padding 12px 24px, font 16px (default)
- Large: Height 56px, padding 16px 32px, font 18px

### Secondary Button

**Component:** `Button/Secondary`

**Default State:**
- Background: Transparent
- Color: `var(--accent-500)`
- Border: 2px solid `var(--accent-500)`
- Height: 48px
- Padding: 12px 24px
- Border-radius: `var(--radius-lg)`

**Hover:**
- Background: `var(--accent-50)`
- Border-color: `var(--accent-600)`
- Transform: translateY(-2px)

### Ghost Button

**Component:** `Button/Ghost`

**Default State:**
- Background: Transparent
- Color: `var(--neutral-700)`
- Border: None
- Height: 48px
- Padding: 12px 16px

**Hover:**
- Background: `var(--neutral-100)`
- Color: `var(--neutral-900)`

### Icon Button

**Component:** `Button/Icon`

**Specs:**
- Width: 40px × 40px (square)
- Background: Transparent
- Icon: 20px
- Border-radius: `var(--radius-md)`
- Hover: Background `var(--neutral-100)`

**Usage:** Close buttons, menu toggles, social icons

---

## 📝 Form Components

### Text Input

**Component:** `FormInput`

**Default State:**
- Width: 100%
- Height: 56px
- Padding: 16px
- Border: 1px solid `var(--neutral-300)`
- Border-radius: `var(--radius-md)`
- Font: 16px, 400 weight
- Background: White

**Focus:**
- Border: 2px solid `var(--accent-500)`
- Box-shadow: 0 0 0 3px `var(--accent-100)`
- Outline: none

**Error:**
- Border: 2px solid `var(--error-500)`
- Box-shadow: 0 0 0 3px `var(--error-50)`
- Error message: 14px, `var(--error-600)`, below input

**Success:**
- Border: 2px solid `var(--success-500)`
- Checkmark icon: right-aligned, 20px

**Disabled:**
- Background: `var(--neutral-100)`
- Color: `var(--neutral-500)`
- Cursor: not-allowed

**Label:**
- Font: 14px, 600 weight
- Color: `var(--neutral-700)`
- Margin-bottom: 8px
- Required indicator: Red asterisk *

### Textarea

**Component:** `FormTextarea`

**Specs:**
- Same as Text Input
- Min-height: 120px
- Resize: vertical only
- Max-height: 400px

### Dropdown/Select

**Component:** `FormDropdown`

**Default State:**
- Same as Text Input
- Icon: Chevron-down (right-aligned, 20px)
- Cursor: pointer

**Open:**
- Border: 2px solid `var(--accent-500)`
- Dropdown menu appears below
- Menu: White background, shadow-lg, border-radius-md
- Max-height: 300px, scroll if needed

**Option:**
- Padding: 12px 16px
- Hover: Background `var(--accent-50)`
- Selected: Background `var(--accent-100)`, checkmark

### Checkbox

**Component:** `FormCheckbox`

**Specs:**
- Width: 20px × 20px
- Border: 2px solid `var(--neutral-400)`
- Border-radius: 4px
- Background: White

**Checked:**
- Background: `var(--accent-500)`
- Border: `var(--accent-500)`
- Checkmark: White, 14px

**Label:**
- Font: 16px, 400 weight
- Margin-left: 12px
- Cursor: pointer

### Radio Button

**Component:** `FormRadio`

**Specs:**
- Width: 20px × 20px (circle)
- Border: 2px solid `var(--neutral-400)`
- Border-radius: 50%

**Selected:**
- Border: `var(--accent-500)`
- Inner circle: 10px, `var(--accent-500)`

---

## 🃏 Card Components

### Service Card

**Component:** `Card/Service`

**Used in:** Services page, Homepage

**Structure:**
```
┌─────────────────────────┐
│  [Illustration/Icon]    │
│  (120px height)         │
├─────────────────────────┤
│  SERVICE NAME           │
│  (20px, 600 weight)     │
│                         │
│  Short description      │
│  (14px, neutral-600)    │
│                         │
│  [Learn More →]         │
└─────────────────────────┘
```

**Specs:**
- Width: 100% (flex/grid)
- Padding: 24px
- Border: 1px solid `var(--neutral-200)`
- Border-radius: `var(--radius-lg)`
- Background: White
- Shadow: `var(--shadow-sm)`

**Hover:**
- Transform: translateY(-4px)
- Shadow: `var(--shadow-lg)`
- Border: `var(--accent-200)`

### Case Study Card

**Component:** `Card/CaseStudy`

**Used in:** Case Studies page, Service detail

**Structure:**
```
┌─────────────────────────┐
│  [Hero Image]           │
│  (200px height, cover)  │
│  [Industry Badge]       │
├─────────────────────────┤
│  Title (2-line max)     │
│  [Company Logo]         │
│  +300 leads • -28%      │
│  [Read Case Study →]    │
└─────────────────────────┘
```

**Specs:**
- Aspect ratio: 3:4 overall
- Image: Gradient overlay at bottom
- Badge: Absolute top-right, 12px font
- Logo: 80px width, grayscale → color on hover

### Pricing Tier Card

**Component:** `Card/PricingTier`

**Used in:** Pricing page, Homepage

**Structure:**
```
┌─────────────────────────┐
│  [Badge: "POPULAR"]     │
│                         │
│  TIER NAME              │
│  (24px, 700 weight)     │
│                         │
│  $15k - $50k            │
│  (32px, accent color)   │
│                         │
│  For growing teams...   │
│                         │
│  ✓ Feature 1            │
│  ✓ Feature 2            │
│  ✓ Feature 3            │
│                         │
│  [Get Started →]        │
└─────────────────────────┘
```

**Popular variant:**
- Border: 2px solid `var(--accent-500)`
- Badge: Accent background, white text
- Slightly larger (scale: 1.05)

### Team Member Card

**Component:** `Card/TeamMember`

**Used in:** About page

**Structure:**
```
┌─────────────────────────┐
│  [Photo, 200×200px]     │
│  (Circle or square)     │
├─────────────────────────┤
│  NAME                   │
│  (18px, 600 weight)     │
│                         │
│  Title/Role             │
│  (14px, neutral-600)    │
│                         │
│  [LinkedIn] [Twitter]   │
└─────────────────────────┘
```

---

## 🧭 Navigation Components

### Global Navigation (Desktop)

**Component:** `GlobalNav`

**Structure:**
```
┌────────────────────────────────────────────────────────┐
│  [Logo]    Services  Pricing  Case Studies  About     │
│                                 [Book a Call] [Start]  │
└────────────────────────────────────────────────────────┘
```

**Specs:**
- Height: 80px
- Background: Transparent (default)
- Scrolled: White background, shadow-md
- Logo: 140px width
- Links: 16px, 500 weight, `var(--neutral-700)`
- Link hover: Color `var(--accent-500)`
- Buttons: Secondary + Primary

**Sticky Behavior:**
- Position: fixed top
- Z-index: 1000
- Backdrop-blur: 10px (when scrolled)

### Mobile Navigation

**Component:** `GlobalNav/Mobile`

**Hamburger Menu:**
```
┌────────────────────────┐
│  [Logo]         [☰]    │
└────────────────────────┘
```

**Expanded (Full-screen):**
```
┌────────────────────────┐
│  [Logo]         [×]    │
│                        │
│  Services              │
│  Pricing               │
│  Case Studies          │
│  About                 │
│  Contact               │
│                        │
│  [Book a Call]         │
│  [Start Brief]         │
└────────────────────────┘
```

**Specs:**
- Background: White
- Padding: 24px
- Links: 24px, 600 weight
- Spacing: 32px between links
- Animation: Slide from right (0.3s)

---

## 🦶 Footer Component

**Component:** `GlobalFooter`

**Desktop Layout:**
```
┌────────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │ COMPANY  │  │ SERVICES │  │ RESOURCES│  │CONTACT│ │
│  │          │  │          │  │          │  │       │ │
│  │ About    │  │ Chatbots │  │ Case St. │  │ Email │ │
│  │ Team     │  │ Agents   │  │ Pricing  │  │ Phone │ │
│  │ Careers  │  │ Auto...  │  │ Blog     │  │ Addr. │ │
│  └──────────┘  └──────────┘  └──────────┘  └───────┘ │
│                                                         │
│  ────────────────────────────────────────────────────  │
│                                                         │
│  © 2025 Company  |  Privacy  |  Terms  |  [Social]    │
└────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: `var(--neutral-900)`
- Color: `var(--neutral-300)`
- Padding: 64px 0 32px
- Link hover: `var(--accent-400)`

**Mobile:** Stacked columns, accordion-style

---

## 🪟 Modal Patterns

### Base Modal

**Component:** `Modal`

**Structure:**
```
┌────────────────────────────────────────────────────────┐
│  [Dark overlay, 60% opacity]                           │
│                                                         │
│    ┌──────────────────────────────────────────┐       │
│    │  MODAL TITLE              [×]            │       │
│    │  ──────────────────────────────────────  │       │
│    │                                          │       │
│    │  Modal content goes here                │       │
│    │                                          │       │
│    │  [Cancel]              [Confirm]        │       │
│    └──────────────────────────────────────────┘       │
└────────────────────────────────────────────────────────┘
```

**Specs:**
- Width: 500px max (desktop), 90vw (mobile)
- Padding: 32px
- Border-radius: `var(--radius-xl)`
- Shadow: `var(--shadow-2xl)`
- Background: White
- Animation: Scale in (0.95 → 1, 0.3s)

**Variants:**
- Confirmation modal (small)
- Form modal (medium)
- Content modal (large)

### Exit Confirmation Modal

**Component:** `Modal/ExitConfirmation`

**Used in:** Wizard, Booking

```
┌────────────────────────────────┐
│  Save your progress?           │
│                                │
│  Your brief is 75% complete.  │
│  We'll save it for 3 days.    │
│                                │
│  [Save & Exit]  [Cancel]      │
│                                │
│  [Exit Without Saving]        │
└────────────────────────────────┘
```

---

## ⏳ Loading States

### Button Loading

**Component:** `Button/Loading`

**Pattern:**
- Spinner: 20px circle
- Text: "Loading..." or removed
- Disabled: true
- Cursor: wait

### Skeleton Loading

**Component:** `Skeleton`

**Pattern:**
```
┌─────────────────────────┐
│  ████████░░░░░░░░░░     │  ← Pulsing gray rectangle
│  ██████░░░░░░░░░░       │
│  ████████████░░░░░░     │
└─────────────────────────┘
```

**Animation:** Shimmer effect (gradient moving left to right)

### Page Loading

**Component:** `LoadingScreen`

**Pattern:**
```
┌────────────────────────────────┐
│                                │
│     [Spinner, 64px]            │
│                                │
│     Loading...                 │
│                                │
└────────────────────────────────┘
```

---

## 🏷️ Badge & Pill Components

### Badge

**Component:** `Badge`

**Variants:**
- **Default:** Neutral-100 bg, neutral-700 text
- **Primary:** Accent-100 bg, accent-700 text
- **Success:** Success-100 bg, success-700 text
- **Error:** Error-100 bg, error-700 text

**Specs:**
- Padding: 4px 10px
- Border-radius: 6px
- Font: 12px, 600 weight
- Uppercase: true

### Filter Pill (Removable)

**Component:** `FilterPill`

**Structure:**
```
[ Industry: SaaS  × ]
```

**Specs:**
- Padding: 6px 12px
- Border: 1px solid accent-300
- Background: accent-50
- Border-radius: full
- Icon: 16px, clickable

---

## 🎨 Icon System

### Icon Library: Lucide React

**Common Icons:**
- Navigation: Menu, X (close), ChevronDown, ChevronRight
- Actions: Send, Download, Upload, Share
- Status: Check, AlertCircle, Info, XCircle
- UI: Search, Filter, Calendar, Clock
- Social: Linkedin, Twitter, Github

**Specs:**
- Default size: 20px
- Large: 24px
- Small: 16px
- Stroke-width: 2
- Color: Inherits from parent

**Usage:**
```jsx
import { Send, Check, Menu } from 'lucide-react';

<Send size={20} strokeWidth={2} />
```

---

## 🎬 Animation Patterns

### Fade In

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.3s ease;
}
```

### Slide Up

```css
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Scale In

```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Shimmer (Skeleton)

```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 0px,
    #f8f8f8 40px,
    #f0f0f0 80px
  );
  background-size: 1000px;
  animation: shimmer 2s infinite;
}
```

---

## ✅ Component Checklist

**Foundation:**
- [ ] Design tokens (CSS variables)
- [ ] Typography system
- [ ] Color palette
- [ ] Spacing scale

**Buttons:**
- [ ] Primary (default, hover, active, disabled, loading)
- [ ] Secondary (all states)
- [ ] Ghost (all states)
- [ ] Icon button

**Forms:**
- [ ] Text input (all states)
- [ ] Textarea
- [ ] Dropdown/Select
- [ ] Checkbox
- [ ] Radio button
- [ ] Form labels
- [ ] Error messages

**Cards:**
- [ ] Service card
- [ ] Case study card
- [ ] Pricing tier card
- [ ] Team member card
- [ ] Generic content card

**Layout:**
- [ ] Global nav (desktop)
- [ ] Global nav (mobile)
- [ ] Footer
- [ ] Container/wrapper

**Overlays:**
- [ ] Modal (base)
- [ ] Exit confirmation modal
- [ ] Success/error modal

**Feedback:**
- [ ] Loading spinner
- [ ] Skeleton loader
- [ ] Toast notification
- [ ] Error banner

**Misc:**
- [ ] Badge
- [ ] Filter pill
- [ ] Divider/separator
- [ ] Progress bar
- [ ] Avatar/photo

---

## 🎨 Figma Components Structure

**Recommended Figma organization:**

```
Components/
├── Foundation/
│   ├── Colors (swatches)
│   ├── Typography (text styles)
│   └── Icons (Lucide library)
├── Buttons/
│   ├── Primary (all states)
│   ├── Secondary (all states)
│   └── Ghost (all states)
├── Forms/
│   ├── Input (variants)
│   ├── Textarea
│   ├── Dropdown
│   └── Checkbox
├── Cards/
│   ├── Service
│   ├── CaseStudy
│   ├── Pricing
│   └── Team
├── Navigation/
│   ├── Desktop
│   └── Mobile
├── Modals/
│   └── Base (variants)
└── Feedback/
    ├── Loading
    └── Skeleton
```

**Auto-layout:** Use for all components  
**Variants:** For states (hover, focus, disabled)  
**Component properties:** For text overrides, icons

---

**Status:** ✅ Complete global component library specification  
**Next:** Implement in code or generate Figma designs using component specs  
**Integration:** Reference this doc when building any page from task docs 01-11
