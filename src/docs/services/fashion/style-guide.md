# BCG-Style Fashion Services Page — Color Palette & Visual System

## Overview
This document outlines the color palette, typography, and visual design system used for the Fashion AI Services page, inspired by BCG (Boston Consulting Group) design aesthetics.

---

## Color Palette

### Primary Colors

#### 1. Authority Green (Deep Teal)
```
HEX: #1A3A32
RGB: 26, 58, 50
HSL: 162, 38%, 16%

Usage:
- Primary headlines
- CTA buttons and interactive elements
- Borders and accents
- Data visualization bars
- Framework diagrams
```

#### 2. Charcoal (Near-Black)
```
HEX: #1F2421
RGB: 31, 36, 33
HSL: 150, 7%, 13%

Usage:
- Body text
- Section titles
- Card headings
```

#### 3. Medium Grey
```
HEX: #6B7370
RGB: 107, 115, 112
HSL: 160, 4%, 44%

Usage:
- Secondary text
- Captions and labels
- Metadata
- Subheadings
```

---

### Background Colors

#### 4. Pure White
```
HEX: #FFFFFF
RGB: 255, 255, 255

Usage:
- Section backgrounds
- Card surfaces
- Content areas
```

#### 5. Warm Ivory
```
HEX: #FAF8F5
RGB: 250, 248, 245
HSL: 36, 50%, 97%

Usage:
- Alternating section backgrounds
- Subtle contrast areas
- Exhibit boxes
```

---

### Accent Colors (Badges & Categories)

#### 6. Emerald Green
```
HEX: #10b981
RGB: 16, 185, 129

Usage:
- "HIGH DEMAND" badge
- "HIGH AOV" badge
- Success states
```

#### 7. Orange
```
HEX: #f97316
RGB: 249, 115, 22

Usage:
- "STRATEGIC" badge
- "COST SAVER" badge
- Warning states
```

#### 8. Blue
```
HEX: #3b82f6
RGB: 59, 130, 246

Usage:
- "AI AGENTS" badge
- Information states
```

#### 9. Purple
```
HEX: #8b5cf6
RGB: 139, 92, 246

Usage:
- "CREATIVE AI" badge
- Innovation indicators
```

---

### Fashion Industry-Specific Accents

#### 10. Rose/Pink (Fashion Theme)
```
Rose 600: #e11d48
Pink 500: #ec4899

Usage:
- Insights gradient cards
- Fashion-specific sections
- Hero overlays
```

#### 11. Soft Sage (Borders & Dividers)
```
HEX: #8B9D8A
RGB: 139, 157, 138
HSL: 118, 10%, 58%
Opacity: 30% for borders

Usage:
- Card borders
- Section dividers
- Subtle accents
```

---

## Typography

### Font Families

#### Serif (Headlines & Exhibit Numbers)
```css
font-family: Georgia, 'Times New Roman', serif;

Usage:
- Page titles (h1, h2)
- Section headings
- Exhibit labels
- Large statistics/numbers
- Value chain stage names
```

#### Sans-Serif (Body & UI)
```css
font-family: system-ui, -apple-system, sans-serif;

Usage:
- Body text
- Descriptions
- Labels
- UI elements
- Buttons
```

### Font Sizes

```css
/* Headlines */
h1: 4rem (64px) md: 5rem (80px) lg: 6rem (96px)
h2: 2rem (32px) md: 2.5rem (40px) lg: 3rem (48px)
h3: 1.25rem (20px)

/* Body Text */
Large body: 1.25rem (20px) md: 1.5rem (24px)
Regular body: 1.125rem (18px)
Small body: 0.875rem (14px)

/* UI Elements */
Labels: 0.75rem (12px) uppercase tracking-widest
Badges: 0.625rem (10px) uppercase font-bold
```

---

## Component Styles

### 1. Exhibit Boxes (BCG-Style)

```tsx
<div className="bg-white border border-[#8B9D8A]/30 p-12">
  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#6B7370] uppercase mb-2">
    <div className="w-8 h-px bg-[#1A3A32]" />
    EXHIBIT 1
  </div>
  <h2 className="text-2xl md:text-3xl font-serif text-[#1F2421] mb-12">
    Title
  </h2>
  {/* Content */}
</div>
```

**Key Features:**
- Thin borders (#8B9D8A at 30% opacity)
- "EXHIBIT N" label with horizontal line
- Serif typography for titles
- Generous padding (p-12)

---

### 2. Service Cards

```tsx
<div className="bg-white border border-[#8B9D8A]/30 hover:border-[#1A3A32] transition-all">
  {/* Badge */}
  <span className="bg-emerald-500 text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
    HIGH DEMAND
  </span>
  
  {/* Content sections with borders */}
  <div className="border-b border-[#8B9D8A]/30">
    {/* Section content */}
  </div>
</div>
```

**Key Features:**
- White background with sage borders
- Hover state: border changes to #1A3A32
- Multiple sections separated by borders
- Color-coded badges

---

### 3. Framework Diagrams (Tabbed)

```tsx
{/* Tabs */}
<div className="border-b border-[#8B9D8A]/30">
  <button className={activeTab ? "border-b-2 border-[#1A3A32]" : ""}>
    Tab Label
  </button>
</div>

{/* Flow boxes */}
<div className="border border-[#1A3A32] p-6">
  <div className="text-sm font-semibold text-[#1A3A32]">①</div>
  <div className="font-semibold text-[#1F2421]">Title</div>
  <div className="text-xs text-[#6B7370]">Description</div>
</div>
```

**Key Features:**
- Tabbed navigation with active state
- Grid of bordered boxes
- Arrows between steps
- Numbered or labeled steps

---

### 4. Stats Cards

```tsx
<div className="bg-white border border-[#8B9D8A]/30 p-8 hover:border-[#1A3A32]">
  <Icon className="w-8 h-8 text-[#1A3A32]" />
  <div className="text-5xl font-serif text-[#1A3A32]">$275B</div>
  <div className="text-sm font-semibold text-[#1F2421]">Label</div>
  <div className="text-xs text-[#6B7370]">Source context</div>
</div>
```

**Key Features:**
- Large serif numbers in Authority Green
- Icon + value + label + context structure
- Hover effect on border
- Bottom decorative line on hover

---

### 5. Chart Bars

```tsx
<div className="relative h-10 bg-[#FAF8F5]">
  <motion.div
    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1A3A32] to-[#1A3A32]/70"
    style={{ width: `${percentage}%` }}
  />
  {/* Pattern overlay */}
  <div className="absolute inset-0 opacity-10" style={{
    backgroundImage: `repeating-linear-gradient(45deg, ...)`
  }} />
</div>
```

**Key Features:**
- Gradient fill (Authority Green)
- Diagonal stripe pattern overlay
- Animated width reveal
- Label and metric on sides

---

### 6. Value Chain Diagram

```tsx
<div className="border-2 border-[#1A3A32] bg-white p-6 min-h-[320px]">
  <div className="text-sm font-bold text-[#1A3A32]">STAGE NAME</div>
  <div className="w-full h-px bg-[#8B9D8A]/30" />
  <div className="space-y-3">
    {solutions.map(solution => (
      <div className="text-xs text-[#6B7370]">{solution}</div>
    ))}
  </div>
  <div className="w-full h-px bg-[#8B9D8A]/30" />
  <div className="text-lg font-serif text-[#1A3A32]">Impact</div>
</div>
```

**Key Features:**
- Thicker borders (2px) in Authority Green
- Horizontal dividers
- Stage → Solutions → Impact structure
- Arrows between stages

---

## Design Principles

### 1. **Consulting Aesthetic**
- Clean, professional layout
- Generous white space
- Data-driven visualizations
- BCG-style exhibits and frameworks

### 2. **Color Restraint**
- Primary: Authority Green (#1A3A32)
- Accents used sparingly (badges only)
- Neutral greys for hierarchy
- White/ivory backgrounds

### 3. **Typography Hierarchy**
- Serif for authority (headlines, numbers)
- Sans-serif for readability (body, UI)
- Uppercase labels with tracking
- Clear size differentiation

### 4. **Interactive Elements**
- Subtle hover states (border color change)
- Motion animations (parallax, reveals)
- Respects prefers-reduced-motion
- Smooth transitions (300ms)

### 5. **Responsive Design**
- Mobile-first approach
- Grid systems (4-col → 2-col → 1-col)
- Stacked layouts on mobile
- Touch-friendly targets (44px min)

---

## Accessibility

### Contrast Ratios (WCAG AA)
✓ Authority Green (#1A3A32) on White: 12.6:1  
✓ Charcoal (#1F2421) on White: 16.5:1  
✓ Medium Grey (#6B7370) on White: 4.8:1  

### Best Practices
- All interactive elements have focus states
- Icons paired with text labels
- Semantic HTML structure
- ARIA labels where needed
- Skip links for keyboard navigation

---

## Usage Examples

### Page Section Structure
```
1. Hero (full-screen, parallax image, dark overlay)
2. Introduction (max-w-4xl, centered, large text)
3. Stats (4-column grid, Exhibit 1)
4. Approach (narrative section, green accent line)
5. Framework (tabbed, flowchart boxes)
6. Services (3x2 grid, detailed cards)
7. Chart (Exhibit 2, horizontal bars)
8. Value Chain (6-column horizontal flow)
9. Additional Services (4-column grid, minimal cards)
10. Insights (4-column grid, gradient cards)
11. Related Services (3-column grid, large cards)
12. CTA Band (dark green background, centered)
```

---

## File Structure

```
/components/services/
  FashionServicesPage.tsx           (Main page)
  fashion/
    FashionHero.tsx
    IntroductionSection.tsx
    IndustryStats.tsx
    ApproachSection.tsx
    FrameworkTabs.tsx
    ServiceCards.tsx
    ROIChart.tsx
    ValueChainDiagram.tsx
    AdditionalServices.tsx
    InsightsCards.tsx
    RelatedServices.tsx
    CTABand.tsx
```

---

## Routes

- Main page: `/industries/fashion`
- Footer link: Industries › Fashion
- Sitemap inclusion: Yes

---

**Status:** ✅ Complete  
**Last Updated:** February 10, 2026  
**Design System Version:** BCG-Inspired Calm Luxury  
**Color Palette Source:** SunAI Authority Green + BCG Consulting Aesthetics
