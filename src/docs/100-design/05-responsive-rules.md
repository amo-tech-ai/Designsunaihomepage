# Responsive Design Rules

## Philosophy
**Mobile-first logic. Graceful scaling. Maintain rhythm across devices.**

Designed for decision-makers on any device. Every breakpoint feels intentional.

---

## Breakpoints

### Standard Breakpoints
```css
/* Mobile First Approach */
--breakpoint-sm:  640px   /* Large mobile */
--breakpoint-md:  768px   /* Tablet portrait */
--breakpoint-lg:  1024px  /* Tablet landscape / small laptop */
--breakpoint-xl:  1280px  /* Desktop */
--breakpoint-2xl: 1536px  /* Large desktop */
```

### Usage in Media Queries
```css
/* Mobile (default) */
.container { padding: 24px; }

/* Tablet and up */
@media (min-width: 768px) {
  .container { padding: 48px; }
}

/* Desktop and up */
@media (min-width: 1280px) {
  .container { padding: 64px; }
}
```

---

## Layout Transformations

### Grid Columns
```
Desktop (1280px+):  12 columns
Tablet (768–1279px): 8 columns (or 12 with smaller gutters)
Mobile (<768px):    4 columns
```

### Common Patterns

**3-Column → 2-Column → 1-Column**
```
Desktop: 3 cards across (4 columns each)
Tablet:  2 cards across (6 columns each)
Mobile:  1 card stacked (12 columns)
```

**Sidebar Layout**
```
Desktop: 8 columns (main) + 4 columns (sidebar)
Tablet:  12 columns (main) + 12 columns (sidebar, below)
Mobile:  Stacked, sidebar moves below or hidden in drawer
```

**50/50 Split**
```
Desktop: 6 + 6 columns
Tablet:  6 + 6 columns (might reduce padding)
Mobile:  12 + 12 columns (stacked)
```

---

## Typography Scaling

### Headlines
```
Display (Hero):
  Desktop:  64px / 1.1 line-height
  Tablet:   48px / 1.1
  Mobile:   36px / 1.2

H1:
  Desktop:  48px / 1.2
  Tablet:   40px / 1.2
  Mobile:   32px / 1.3

H2:
  Desktop:  36px / 1.3
  Tablet:   32px / 1.3
  Mobile:   28px / 1.3
```

### Body Text
```
Body Large:  18px (all devices)
Body:        16px (all devices)
Body Small:  14px (all devices)

Note: Body text should NOT scale down on mobile
```

### Scaling Strategy
- Large headlines scale down significantly (up to -28px)
- Body text remains constant (16px minimum)
- UI text may scale slightly (14px → 12px)
- Line-height increases slightly on mobile for readability

---

## Spacing Adjustments

### Vertical Spacing
```
Section Padding:
  Desktop:  128px (hero) / 96px (content)
  Tablet:   96px (hero) / 80px (content)
  Mobile:   64px (hero) / 48px (content)

Between Sections:
  Desktop:  96px
  Tablet:   80px
  Mobile:   64px

Component Padding:
  Desktop:  32px
  Tablet:   24px
  Mobile:   20px
```

### Horizontal Spacing
```
Page Margins:
  Desktop:  64px
  Tablet:   48px
  Mobile:   24px

Grid Gutters:
  Desktop:  24px
  Tablet:   20px
  Mobile:   16px
```

---

## Component Behavior

### Navigation
```
Desktop:  Horizontal menu, full logo
Tablet:   Horizontal menu, might condense
Mobile:   Hamburger menu, icon-only logo
```

### Buttons
```
Desktop:  Inline buttons, min-width auto
Tablet:   Inline or stacked (context-dependent)
Mobile:   Full-width buttons (primary actions)
          Stack button groups vertically
```

### Forms
```
Desktop:  Multi-column layouts (2–3 columns)
Tablet:   2 columns or single column
Mobile:   Single column, full-width inputs
          Larger tap targets (44px min)
```

### Cards
```
Desktop:  Grid layout (3–4 columns)
Tablet:   2 columns
Mobile:   Stacked (1 column)
          Maintain card padding: 24px–20px
```

### Data Tables
```
Desktop:  Full table with all columns
Tablet:   Hide less critical columns
Mobile:   Card-based layout OR horizontal scroll
          Consider mobile-specific table design
```

### Modals
```
Desktop:  Centered, max-width 600px–800px
Tablet:   Centered, slight margin reduction
Mobile:   Full-screen or bottom-sheet style
          Add close button in header
```

---

## Image Handling

### Hero Images
```
Desktop:  Full-width or contained (1440px max)
Tablet:   Full-width, might crop differently
Mobile:   Full-width, vertical crop preferred
          Use art direction for focal points
```

### Aspect Ratios
```
Desktop:  16:9 or 3:2 (landscape)
Tablet:   4:3 or 1:1 (more square)
Mobile:   1:1 or 4:5 (portrait-friendly)
```

### Responsive Images
```html
<img
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw,
         (max-width: 1280px) 50vw,
         600px"
  src="image-800.jpg"
  alt="Description"
/>
```

---

## Interaction Patterns

### Touch Targets (Mobile)
```
Minimum Size:     44px × 44px
Comfortable Size: 48px × 48px
Gap Between:      8px minimum
```

### Hover States
```
Desktop:  Show on :hover
Tablet:   Show on :hover (if mouse) or :active
Mobile:   No hover states, use :active
```

### Scrolling
```
Desktop:  Standard scroll, fixed headers optional
Tablet:   Standard scroll
Mobile:   Momentum scrolling, fixed headers recommended
          Avoid horizontal scroll (except carousels)
```

---

## Performance Considerations

### Image Optimization
- [ ] Serve appropriately sized images per device
- [ ] Use WebP with fallbacks
- [ ] Lazy-load below-the-fold images
- [ ] Optimize hero images for LCP

### Loading Strategies
- [ ] Critical CSS inline for above-the-fold
- [ ] Defer non-critical JavaScript
- [ ] Prioritize mobile performance
- [ ] Test on slow 3G connections

---

## Responsive Checklist

Every page must pass on each device:

### Mobile (<768px)
- [ ] All text is readable (16px minimum body)
- [ ] Tap targets are 44px minimum
- [ ] No horizontal scrolling
- [ ] Images load quickly and crop well
- [ ] Forms are easy to fill out
- [ ] Navigation is accessible

### Tablet (768–1279px)
- [ ] Layout uses available space efficiently
- [ ] Typography scales appropriately
- [ ] Cards/grids adapt to 2-column layouts
- [ ] Touch and mouse inputs both work
- [ ] Images maintain quality

### Desktop (1280px+)
- [ ] Content doesn't stretch too wide (1440px max)
- [ ] Generous whitespace maintained
- [ ] Multi-column layouts work well
- [ ] Hover states are clear
- [ ] Large images are high-quality

---

## Testing Strategy

### Device Testing
```
Priority Devices:
1. iPhone 13/14/15 (390px width)
2. iPad (768px width)
3. MacBook Pro 14" (1440px width)
4. Desktop 1920px width

Test at:
- 360px (small mobile)
- 768px (tablet breakpoint)
- 1280px (desktop breakpoint)
- 1920px (large desktop)
```

### Browser Testing
```
Chrome (primary)
Safari (iOS/macOS)
Firefox
Edge
```

---

## Common Patterns

### Stack on Mobile
```css
.grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: stacked */
  gap: 16px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
    gap: 20px;
  }
}

@media (min-width: 1280px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
    gap: 24px;
  }
}
```

### Hide on Mobile
```css
.desktop-only {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-only {
    display: block;
  }
}
```

### Full-Width on Mobile
```css
.button {
  width: 100%; /* Mobile: full-width */
}

@media (min-width: 768px) {
  .button {
    width: auto; /* Tablet/Desktop: auto width */
  }
}
```

---

## Glassmorphism Responsive Behavior

### Glass Cards
```
Desktop:  Normal glass effect (blur: 40px)
Tablet:   Normal glass effect (blur: 30px)
Mobile:   Reduced glass effect (blur: 20px) for performance
          Consider solid backgrounds on low-end devices
```

### Performance Note
Test glassmorphism on mid-range devices. Consider fallback to subtle shadows if performance degrades.

---

**Status:** ✓ Responsive System Approved
**Last Updated:** February 2026
