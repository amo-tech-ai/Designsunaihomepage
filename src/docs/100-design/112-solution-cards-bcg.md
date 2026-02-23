# 112 — BCG-Style Solution Cards

## 1. Overview
Premium strategy-grade card component system inspired by BCG consulting layouts. Two distinct patterns:
1. **Slide-up Overlay Cards**: Clean by default, reveal insights on hover
2. **Related Services Cards**: Asymmetric grid with split text/image layout

---

## 2. Component Architecture

### 2.1 Files Created
```
/components/premium/sunai/
├── SolutionCard.tsx              # Slide-up overlay card
├── SolutionsSection.tsx          # 3-column grid section
├── RelatedServicesCard.tsx       # Split text/image card
├── RelatedServicesSection.tsx    # Asymmetric grid section
└── SolutionCardsDemo.tsx         # Demo & documentation page
```

### 2.2 Route
- **Demo Page:** `/sunai/cards-demo`
- **Usage:** Can be imported into any page

---

## 3. Design Specifications

### 3.1 Layout
- **Desktop:** 3-column grid
- **Tablet:** 2-column grid
- **Mobile:** Single column stack
- **Card Height:** 420px (desktop), 400px (mobile)
- **Gap:** 32px (desktop), 24px (mobile)
- **Border Radius:** 8px
- **Border:** 1px solid neutral-200

### 3.2 Card States

#### Default (Idle)
- Shows only title
- Background: variant color (dark/mint/light-mint)
- No description visible
- Clean, minimal aesthetic

#### Hover/Focus
- Bottom overlay slides up (y: 100% → 0)
- Reveals description + CTA arrow
- Background dims 5% for contrast
- Card scales 1.01x for depth

### 3.3 Animation
- **Trigger:** Hover or keyboard focus
- **Duration:** 280ms
- **Easing:** Custom [0.16, 1, 0.3, 1] (smooth ease-out)
- **Motion:** Slide up from bottom
- **No bounce, no delay**

---

## 4. Color Variants

### 4.1 Dark
- **Background:** `#171717` (neutral-900)
- **Text:** White
- **Overlay:** `#262626` (neutral-800)
- **CTA:** Emerald-400

### 4.2 Mint
- **Background:** `#D1F4E0`
- **Text:** Neutral-900
- **Overlay:** White 90% opacity + backdrop blur
- **CTA:** Emerald-400

### 4.3 Light Mint
- **Background:** `#E8F9F0`
- **Text:** Neutral-900
- **Overlay:** White 90% opacity + backdrop blur
- **CTA:** Emerald-400

---

## 5. Typography

### 5.1 Title
- **Size:** 2xl (mobile) → 3xl (tablet) → 4xl (desktop)
- **Weight:** Default (from globals)
- **Tracking:** Tight
- **Leading:** Tight
- **Max Width:** 280px

### 5.2 Description
- **Size:** sm (mobile) → base (desktop)
- **Weight:** Default
- **Leading:** Relaxed
- **Color:** Neutral-700 (light variants), Neutral-200 (dark)
- **Max Width:** 400px

---

## 6. Accessibility

### 6.1 Keyboard Navigation
- ✅ Focusable via tab key
- ✅ Focus triggers same animation as hover
- ✅ Visible focus ring (2px neutral-900 + offset)
- ✅ ARIA role="article"
- ✅ ARIA label with card title

### 6.2 Touch Devices
- ✅ Tap triggers overlay reveal
- ✅ Overlay persists until tap outside
- ✅ No hover-only interactions

### 6.3 WCAG Compliance
- ✅ AA color contrast (4.5:1 minimum)
- ✅ Text remains readable in all states
- ✅ No information conveyed by color alone

---

## 7. Component Usage

### 7.1 Basic Example
```tsx
import { SolutionsSection } from './components/premium/sunai/SolutionsSection';

export function MyPage() {
  return (
    <SolutionsSection
      title="Our Solutions"
      subtitle="Strategic capabilities from our ecosystem"
      solutions={[
        {
          title: 'Solution Name',
          description: 'Brief description of the solution and its value.',
          variant: 'mint'
        }
      ]}
    />
  );
}
```

### 7.2 Individual Card
```tsx
import { SolutionCard } from './components/premium/sunai/SolutionCard';

export function MyComponent() {
  return (
    <SolutionCard
      title="BCG X"
      description="Tech build and design unit combining product, engineering, and strategy."
      variant="dark"
    />
  );
}
```

### 7.3 Related Services Section
```tsx
import { RelatedServicesSection } from './components/premium/sunai/RelatedServicesSection';

export function MyPage() {
  return (
    <RelatedServicesSection
      title="Explore Related Services"
      services={[
        {
          label: 'CAPABILITY',
          title: 'Customer Demand',
          imageUrl: '/path/to/image.jpg',
          variant: 'large'
        },
        {
          label: 'INDUSTRY',
          title: 'Retail Industry',
          imageUrl: '/path/to/image.jpg',
          variant: 'medium'
        }
      ]}
    />
  );
}
```

---

## 8. Integration with Design System

### 8.1 Aligns With
- ✅ **101 — Brand Foundations:** Calm luxury tone
- ✅ **102 — Color Palette:** Uses emerald accent + neutrals
- ✅ **103 — Typography:** Editorial hierarchy
- ✅ **104 — Spacing Grid:** Consistent 8px base
- ✅ **109 — Motion Guidelines:** 280ms smooth animations

### 8.2 Motion/React Library
- Uses `motion/react` for animations
- Leverages `whileHover` and `animate` props
- Custom easing curves for premium feel

---

## 9. Do's and Don'ts

### ✅ Do
- Use for high-level solutions/partnerships
- Maintain 3-card max per row
- Keep descriptions concise (2-3 lines)
- Use keyboard navigation
- Test on mobile devices

### ❌ Don't
- Add decorative graphics or icons to default state
- Use loud gradients or animations
- Exceed 400 characters in description
- Disable keyboard access
- Remove the overlay transition

---

## 10. Visual Reference

**Demo Page:** `/sunai/cards-demo`

**Default State:**
- Cards show only titles
- Clean, editorial layout
- Generous whitespace

**Hover State:**
- Overlay slides up
- Description appears
- CTA arrow in emerald circle
- Subtle background dim

---

## 11. Technical Notes

### 11.1 Performance
- Uses CSS transforms (GPU-accelerated)
- No layout thrashing
- Optimized for 60fps animations
- Lazy-loaded via React.lazy()

### 11.2 Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires CSS backdrop-filter support
- Graceful degradation on older browsers

---

## 12. Maintenance Checklist
□ Card heights are consistent across variants
□ Animation timing feels premium (not rushed)
□ Keyboard navigation works perfectly
□ Mobile tap interaction is reliable
□ Text contrast passes WCAG AA
□ Focus states are clearly visible
□ Description length is appropriate (2-3 lines)
□ CTA arrow is consistently positioned

---

**Last Updated:** 2026-02-04
**Design System Version:** 1.0
**Status:** ✅ Production Ready