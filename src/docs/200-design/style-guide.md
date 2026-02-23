# SunAI Design System Style Guide

**Version:** 1.0  
**Last Updated:** 2025-02-06  
**Status:** ✅ Production Ready

---

## 1. Brand Identity

### Brand Tone
- **Calm Luxury** – Editorial sophistication meets enterprise reliability
- **Executive Grade** – Built for decision-makers with zero cognitive friction
- **Systems First** – Modular, reusable, scalable architecture

### Design Principles
1. **Breathing Space** – Generous whitespace creates focus
2. **Clear Hierarchy** – Typography and spacing guide the eye
3. **Confident Messaging** – Direct, jargon-free communication
4. **Subtle Interaction** – Hover states and transitions feel natural

---

## 2. Color System

### Primary Brand Colors
```
Deep Teal       #1A3A32     Primary brand, headers, CTAs
Dark Teal       #0D1F1A     Hover states, emphasis
Sage Green      #A8C5B8     Accents, highlights
Mint Light      #E8F5E9     Backgrounds, surfaces
```

### Neutral Palette
```
Cream Base      #FAF8F5     Primary background
Warm White      #F5F3EF     Secondary background
Soft Gray       #E0E0DE     Borders, dividers
Medium Gray     #9B9F9D     Disabled states
```

### Text Colors
```
Primary Text    #1F2421     Headlines, body copy
Secondary Text  #6B7370     Subheadings, metadata
Muted Text      #9B9F9D     Helper text, captions
```

### Accent Colors
```
Accent Orange   #FF6B4A     Links, highlights (legacy SunAI)
```

### Usage Guidelines
- **Backgrounds:** Alternate between Cream (#FAF8F5), White (#FFFFFF), and Mint Light (#E8F5E9)
- **Dark Sections:** Use Deep Teal (#1A3A32) for high-impact CTAs and hero sections
- **Borders:** Always use Soft Gray (#E0E0DE) at 1px
- **Text Hierarchy:** Primary → Secondary → Muted (never skip levels)

---

## 3. Typography

### Font Families
```css
/* Display / Headings */
font-family: 'Georgia, serif';

/* Body / UI Text */
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Font Family | Usage |
|---------|------|--------|-------------|-------------|-------|
| **H1 / Hero** | 64px | 400 | 1.1 | Georgia | Landing hero sections |
| **H2 / Section** | 48px | 400 | 1.2 | Georgia | Major section headings |
| **H3 / Subsection** | 32px | 600 | 1.3 | Georgia | Subsection titles |
| **H4 / Card Title** | 24px | 600 | 1.4 | Georgia | Card headings |
| **H5 / Small Heading** | 20px | 600 | 1.4 | Georgia | Minor headings |
| **Body Large** | 20px | 400 | 1.6 | System | Intro paragraphs |
| **Body** | 16px | 400 | 1.6 | System | Standard text |
| **Small / UI** | 14px | 500 | 1.5 | System | Buttons, labels |
| **Caption** | 13px | 400 | 1.5 | System | Helper text |
| **Micro** | 12px | 500 | 1.4 | System | Badges, tags |

### Font Weight Guidelines
- **400 (Regular):** Body text, paragraphs
- **500 (Medium):** Buttons, navigation, UI labels
- **600 (Semibold):** H3-H5, card titles, emphasis
- **700 (Bold):** Rarely used, only for high-emphasis CTAs

### Line Height Rules
- **Headings (1.1-1.4):** Tighter for visual impact
- **Body (1.6):** Comfortable reading
- **UI Text (1.5):** Balance between compact and readable

---

## 4. Spacing System

### Base Unit: 8px Grid

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| **xs** | 4px | `gap-1`, `p-1` | Icon gaps, tight spacing |
| **sm** | 8px | `gap-2`, `p-2` | Component internal |
| **md** | 16px | `gap-4`, `p-4` | Card padding, element gaps |
| **lg** | 24px | `gap-6`, `p-6` | Section internal |
| **xl** | 32px | `gap-8`, `p-8` | Component gaps |
| **2xl** | 48px | `gap-12`, `p-12` | Section gaps |
| **3xl** | 64px | `gap-16` | Major section spacing |
| **4xl** | 96px | `py-24` | Section padding (vertical) |
| **5xl** | 128px | `py-32` | Hero sections |
| **6xl** | 200px | `pt-[200px]` | Large hero top padding |

### Layout Standards

#### Max Widths
```css
/* Content Max Width (optimal reading) */
max-width: 1280px;

/* Layout Max Width (allows breathing room) */
max-width: 1440px;
```

#### Horizontal Padding
```css
/* Mobile */
px-6    /* 24px */

/* Desktop */
md:px-16    /* 64px */
```

#### Section Vertical Padding
```css
/* Standard Section */
py-24    /* 96px top/bottom */

/* Hero Section */
pt-[200px] pb-32    /* 200px top, 128px bottom */
```

#### Card Padding
```css
/* Standard Card */
p-8    /* 32px all sides */

/* Compact Card */
p-6    /* 24px all sides */
```

---

## 5. Component Library

### Buttons

#### Primary Button
```tsx
<button className="px-6 py-4 bg-[#1A3A32] text-[#FAF8F5] text-[14px] font-semibold rounded-lg hover:bg-[#0D1F1A] transition-all duration-200 hover:shadow-lg">
  Start Your AI Journey
</button>
```

#### Secondary Button
```tsx
<button className="px-6 py-4 border border-[#1A3A32] text-[#1A3A32] text-[14px] font-semibold rounded-lg hover:bg-[#1A3A32]/5 transition-all duration-200">
  Learn More
</button>
```

#### Ghost Button (Dark Background)
```tsx
<button className="px-6 py-4 text-[#FAF8F5] text-[14px] font-medium rounded-lg border border-[rgba(250,248,245,0.3)] hover:bg-[rgba(250,248,245,0.1)] transition-all duration-200">
  Book a Call
</button>
```

**Guidelines:**
- Min height: 48px (py-4 + text)
- Horizontal padding: 24px (px-6)
- Font size: 14px
- Font weight: 600 (semibold) for primary, 500 (medium) for secondary
- Border radius: 8px (rounded-lg)
- Transition: 200ms

---

### Cards

#### Feature Card (White with Border)
```tsx
<div className="p-8 bg-white rounded-2xl border border-[#E0E0DE] hover:shadow-lg transition-shadow duration-200">
  <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center mb-6">
    <Icon className="w-6 h-6 text-[#1A3A32]" />
  </div>
  <h3 className="text-[20px] font-semibold text-[#1F2421] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
    Card Title
  </h3>
  <p className="text-[16px] text-[#6B7370] leading-relaxed">
    Description text goes here
  </p>
</div>
```

#### Filled Card (Cream Background)
```tsx
<div className="p-8 bg-[#FAF8F5] rounded-2xl">
  {/* Content */}
</div>
```

**Guidelines:**
- Padding: 32px (p-8)
- Border radius: 16px (rounded-2xl)
- Border: 1px solid #E0E0DE
- Hover: Shadow lift (shadow-lg)
- Icon container: 48px × 48px, rounded-xl, bg #E8F5E9

---

### Badges & Pills

#### Primary Pill
```tsx
<span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A3A32]/10 rounded-full">
  <Icon className="w-4 h-4 text-[#1A3A32]" />
  <span className="text-[13px] font-medium text-[#1A3A32]">Label</span>
</span>
```

#### Status Badge
```tsx
<span className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] text-[#1A3A32] text-[12px] font-semibold rounded-full">
  NEW
</span>
```

#### Outline Badge
```tsx
<span className="inline-flex items-center px-3 py-1 border border-[#E0E0DE] text-[#6B7370] text-[12px] font-medium rounded-full">
  Coming Soon
</span>
```

**Guidelines:**
- Pill padding: px-4 py-2
- Badge padding: px-3 py-1
- Border radius: rounded-full
- Font size: 12-13px
- Font weight: 500-600

---

## 6. Layout Patterns

### Hero Section (Two Column)
```tsx
<section className="pt-[200px] pb-[128px] px-6 md:px-16">
  <div className="max-w-[1280px] mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      {/* Right: Visual */}
    </div>
  </div>
</section>
```

### Feature Grid (3 Columns)
```tsx
<section className="py-[96px] px-6 md:px-16 bg-[#FAF8F5]">
  <div className="max-w-[1280px] mx-auto">
    <div className="text-center mb-12">
      {/* Section Header */}
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Cards */}
    </div>
  </div>
</section>
```

### Metrics Grid (4 Columns)
```tsx
<section className="py-[96px] px-6 md:px-16 bg-[#E8F5E9]">
  <div className="max-w-[1280px] mx-auto">
    <div className="grid md:grid-cols-4 gap-12">
      {/* Stat blocks */}
    </div>
  </div>
</section>
```

### Content + Image (Alternating)
```tsx
<section className="py-[96px] px-6 md:px-16 bg-white">
  <div className="max-w-[1280px] mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Order: Image first (even sections), Content first (odd sections) */}
    </div>
  </div>
</section>
```

---

## 7. Responsive Behavior

### Breakpoints
```css
sm: 640px    /* Small tablets */
md: 768px    /* Tablets */
lg: 1024px   /* Small desktops */
xl: 1280px   /* Large desktops */
2xl: 1536px  /* Extra large */
```

### Grid Responsiveness
```css
/* Mobile → Tablet → Desktop */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Common patterns */
- Hero: Single column → Two columns (md:grid-cols-2)
- Features: 1 → 2 → 3 (md:grid-cols-2 lg:grid-cols-3)
- Stats: 2 → 4 (grid-cols-2 md:grid-cols-4)
```

### Typography Responsiveness
```css
/* Hero heading */
text-[56px] md:text-[64px]

/* Section heading */
text-[40px] md:text-[48px]

/* Body text usually stays 16px */
```

---

## 8. Animation & Interaction

### Transition Guidelines
```css
/* Standard transitions */
transition-all duration-200

/* Shadow lifts */
hover:shadow-lg

/* Background changes */
hover:bg-[#0D1F1A]

/* Transform (subtle) */
hover:-translate-y-0.5
```

### Motion Principles
1. **Subtle First** – Avoid aggressive animations
2. **200ms Standard** – Fast enough to feel responsive
3. **Easing** – Use ease-out for natural deceleration
4. **Purpose** – Every animation should communicate state change

### Common Patterns
```tsx
// Hover shadow lift
className="transition-shadow duration-200 hover:shadow-lg"

// Hover background change
className="transition-all duration-200 hover:bg-[#0D1F1A]"

// Icon rotation (expanding accordion)
className="transition-transform duration-200 group-hover:rotate-45"

// Scale on hover
className="transition-transform duration-200 hover:scale-110"
```

---

## 9. Border & Shadow System

### Borders
```css
/* Standard border */
border border-[#E0E0DE]

/* Dark section border */
border border-[#FAF8F5]/10

/* Border width always 1px */
```

### Shadows
```css
/* Card hover */
shadow-lg

/* Elevated components */
shadow-xl

/* Subtle shadow */
shadow-sm
```

### Border Radius
```css
rounded-lg     /* 8px - Buttons, badges */
rounded-xl     /* 12px - Icon containers */
rounded-2xl    /* 16px - Cards, sections */
rounded-full   /* Pills, badges */
```

---

## 10. Icon Guidelines

### Icon Library
**Primary:** Lucide React

### Icon Sizing
```tsx
// Standard icons
<Icon className="w-6 h-6" />    // 24px

// Small icons (badges, pills)
<Icon className="w-4 h-4" />    // 16px

// Large icons (hero, features)
<Icon className="w-8 h-8" />    // 32px
```

### Icon Colors
```tsx
// On light backgrounds
text-[#1A3A32]

// On dark backgrounds
text-[#FAF8F5]

// Muted icons
text-[#6B7370]

// Accent icons
text-[#FF6B4A]
```

---

## 11. Background Patterns

### Section Alternation
```
1. Hero: Dark Teal (#1A3A32)
2. Section: White (#FFFFFF)
3. Section: Cream (#FAF8F5)
4. Section: Mint Light (#E8F5E9)
5. Section: White
6. CTA: Dark Teal (#1A3A32)
```

**Rule:** Alternate between light backgrounds, use dark sparingly for impact

---

## 12. Accessibility Standards

### Color Contrast
- **Text on Cream:** Minimum AA (4.5:1) – Use Primary Text (#1F2421)
- **Text on Dark Teal:** Use Cream (#FAF8F5) for maximum contrast
- **Muted Text:** Only use on non-critical content

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-[#1A3A32] focus:ring-offset-2
```

### Interactive Elements
- Minimum touch target: 44px × 44px
- Buttons: 48px min height
- Clear hover states on all interactive elements

---

## 13. DO's and DON'Ts

### ✅ DO
- Use Georgia serif for all headings H1-H5
- Maintain 8px grid for spacing
- Alternate background colors for visual rhythm
- Use generous whitespace (96px section padding minimum)
- Keep card padding at 32px (p-8)
- Use rounded-2xl (16px) for cards
- Transition durations at 200ms
- Icon containers: 48px × 48px with rounded-xl

### ❌ DON'T
- Mix font families within same element
- Use arbitrary spacing (stick to 8px grid)
- Create sections with same background color adjacent
- Use borders heavier than 1px
- Animate without purpose
- Use font-bold (700) unless absolutely necessary
- Skip heading hierarchy (H1 → H3 without H2)
- Use colors outside the defined palette

---

## 14. Quick Reference

### Common Tailwind Classes
```css
/* Containers */
max-w-[1280px] mx-auto px-6 md:px-16

/* Section padding */
py-24 md:py-32

/* Card */
p-8 bg-white rounded-2xl border border-[#E0E0DE]

/* Button primary */
px-6 py-4 bg-[#1A3A32] text-[#FAF8F5] rounded-lg

/* Heading */
text-[48px] font-serif text-[#1F2421]

/* Body */
text-[16px] text-[#6B7370] leading-relaxed
```

---

## 15. File Organization

### Component Structure
```
/components
  /premium
    /sunai
      - DesignSystemPage.tsx      # Design system docs
      - DesignSystemPreview.tsx   # Visual reference
      - SunAIAgencyV12.tsx        # Homepage
```

### Routes
```
/sunai                          # Homepage
/sunai/design-system            # Design system documentation
/sunai/design-system/preview    # Visual reference page
```

---

## 16. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-02-06 | Initial design system extracted from SunAI Agency V12 |

---

**Maintained by:** SunAI Design Team  
**Questions?** Reference `/sunai/design-system` for interactive examples
