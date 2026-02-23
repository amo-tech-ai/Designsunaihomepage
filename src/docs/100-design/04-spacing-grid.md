# Spacing & Grid System

## Philosophy
**Generous whitespace. Intentional layout. Information breathes.**

Wide margins, vertical rhythm, grid-based precision. Layouts feel crafted, not dense.

---

## Spacing Scale

### Base-8 System
```
0.5x → 4px   (Micro spacing: borders, tight gaps)
1x   → 8px   (Minimal spacing: icon padding)
1.5x → 12px  (Compact spacing: list items)
2x   → 16px  (Standard spacing: component padding)
3x   → 24px  (Comfortable spacing: section gaps)
4x   → 32px  (Generous spacing: card padding)
6x   → 48px  (Section spacing: content blocks)
8x   → 64px  (Large spacing: major sections)
12x  → 96px  (Extra large: page sections)
16x  → 128px (Hero spacing: top-level divisions)
```

### Naming Convention
```css
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-6:  24px
--space-8:  32px
--space-12: 48px
--space-16: 64px
--space-24: 96px
--space-32: 128px
```

---

## Grid System

### Desktop Grid (1200px+)
```
Columns: 12
Gutter: 24px
Margin: 64px (left/right)
Max Width: 1440px
```

### Tablet Grid (768–1199px)
```
Columns: 12
Gutter: 20px
Margin: 48px (left/right)
Max Width: 100%
```

### Mobile Grid (<768px)
```
Columns: 4
Gutter: 16px
Margin: 24px (left/right)
Max Width: 100%
```

---

## Layout Patterns

### 1. Hero Section
```
Padding Top:    128px (desktop) / 96px (mobile)
Padding Bottom: 128px (desktop) / 96px (mobile)
Content Width:  8 columns (of 12)
Alignment:      Center or left-aligned
```

### 2. Content Section
```
Padding Top:    96px (desktop) / 64px (mobile)
Padding Bottom: 96px (desktop) / 64px (mobile)
Content Width:  10 columns (of 12)
Gap Between:    48px (desktop) / 32px (mobile)
```

### 3. Card Grid
```
Grid Columns:   3 (desktop) / 2 (tablet) / 1 (mobile)
Gap:           24px (desktop) / 20px (tablet) / 16px (mobile)
Card Padding:  32px (desktop) / 24px (mobile)
```

### 4. Split Layout (50/50)
```
Columns:       6 + 6 (desktop) / 12 (mobile, stacked)
Gap:          48px (desktop) / 32px (mobile)
Alignment:    Vertical center (desktop)
```

### 5. Sidebar Layout
```
Main Content:  8 columns
Sidebar:       4 columns
Gap:          32px
Min Height:   Match or independent scroll
```

---

## Container Widths

### Max Width Containers
```
Extra Wide: 1440px (hero sections, full-bleed images)
Wide:       1280px (default content, most sections)
Standard:   1120px (text-heavy content)
Narrow:     960px  (forms, focused content)
Reading:    720px  (articles, long-form text)
```

### Responsive Behavior
```
Desktop (1200px+):   Use max-width + 64px margins
Tablet (768–1199px): Use max-width + 48px margins
Mobile (<768px):     100% width + 24px margins
```

---

## Vertical Rhythm

### Page-Level Spacing
```
Between hero and first section:  96px (desktop) / 64px (mobile)
Between major sections:          96px (desktop) / 64px (mobile)
Between related sections:        64px (desktop) / 48px (mobile)
```

### Component-Level Spacing
```
Between heading and content:     16px
Between paragraphs:             16px
Between form fields:            20px
Between cards in a grid:        24px
Between list items:             12px
```

### Micro-Level Spacing
```
Button padding:        12px 24px
Input padding:         12px 16px
Card padding:          32px (desktop) / 24px (mobile)
Badge padding:         4px 8px
Icon + text gap:       8px
```

---

## Alignment Rules

### Horizontal Alignment
- [ ] Left-align body text (never justify)
- [ ] Center-align headlines (optional, context-dependent)
- [ ] Right-align numerical data in tables
- [ ] Maintain consistent alignment within components

### Vertical Alignment
- [ ] Baseline-align text with icons
- [ ] Center-align split layouts on desktop
- [ ] Top-align cards in grids
- [ ] Use flexbox/grid for consistent spacing

---

## Responsive Spacing

### Breakpoint Scale Adjustments

**Desktop → Tablet:**
```
Hero padding:    128px → 96px
Section padding: 96px → 80px
Card padding:    32px → 24px
Grid gaps:       24px → 20px
```

**Tablet → Mobile:**
```
Hero padding:    96px → 64px
Section padding: 80px → 64px
Card padding:    24px → 20px
Grid gaps:       20px → 16px
Margins:         48px → 24px
```

### Spacing Strategy
1. Reduce outer spacing more than inner spacing
2. Maintain readable padding on cards/components
3. Collapse horizontal layouts to vertical stacks
4. Keep comfortable tap targets (44px min)

---

## Component Spacing Patterns

### Button Groups
```
Gap between buttons:  12px
Stack on mobile:     100% width + 12px vertical gap
```

### Form Fields
```
Label → Input:       8px
Input → Helper text: 8px
Field → Field:       20px
```

### Cards
```
Padding:             32px (desktop) / 24px (mobile)
Image → Content:     24px
Title → Body:        12px
Body → CTA:          24px
```

### Navigation
```
Logo → Menu items:   48px
Between menu items:  32px (desktop) / 24px (mobile)
Dropdown padding:    8px
```

### Data Tables
```
Row padding:         16px (vertical)
Cell padding:        12px (horizontal)
Row gap:            1px (border)
```

---

## Glassmorphism Spacing

### Glass Card Padding
```
Default:  32px (all sides)
Compact:  24px (all sides)
Dense:    16px (all sides)

Internal gaps: 16px–24px
```

### Glass Modals
```
Padding:       48px (desktop) / 32px (mobile)
Max Width:     600px (standard) / 800px (wide)
Border:        1px glass border
Backdrop blur: 20px
```

---

## Usage Rules

### ✓ DO
- [ ] Use the spacing scale consistently
- [ ] Add generous whitespace around key content
- [ ] Maintain vertical rhythm across sections
- [ ] Align to the 12-column grid
- [ ] Test responsive behavior at all breakpoints

### ✗ DON'T
- [ ] Use arbitrary spacing values (stick to scale)
- [ ] Overcrowd layouts with too much content
- [ ] Ignore grid alignment
- [ ] Use different spacing for similar components
- [ ] Forget to test mobile spacing

---

## Layout Checklist

Every page must pass:

- [ ] **Grid Alignment:** All content aligns to 12-column grid
- [ ] **Breathing Room:** Generous whitespace around key elements
- [ ] **Vertical Rhythm:** Consistent spacing between sections
- [ ] **Responsive:** Layout adapts gracefully to all screen sizes
- [ ] **Hierarchy:** Clear visual separation between content levels

---

## CSS Custom Properties

```css
/* Spacing Scale */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
--space-32: 128px;

/* Container Widths */
--container-xl: 1440px;
--container-lg: 1280px;
--container-md: 1120px;
--container-sm: 960px;
--container-xs: 720px;

/* Margins */
--margin-desktop: 64px;
--margin-tablet: 48px;
--margin-mobile: 24px;

/* Grid */
--grid-columns: 12;
--grid-gutter: 24px;
```

---

**Status:** ✓ Grid System Approved
**Last Updated:** February 2026
