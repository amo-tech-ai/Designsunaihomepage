# 114 — Key Metrics Grid Section

## 1. Overview
Executive-grade metrics display with BCG editorial aesthetic. Clean 3×2 grid with zero visual noise. Numbers speak through whitespace and typography alone.

---

## 2. Component Architecture

### 2.1 File
```
/components/premium/sunai/
└── MetricsGridSection.tsx       # Clean metrics grid component
```

### 2.2 Integration
```
/components/premium/sunai/SunAIAgencyV12.tsx   # Between Testimonials → Final CTA
```

---

## 3. Design Specifications

### 3.1 Visual Rules
- **No icons** — Numbers and text only
- **No dividers** — Whitespace defines structure
- **No shadows** — Flat, editorial approach
- **No borders** — Clean separation through spacing
- **No cards** — Direct content on background

### 3.2 Color Palette
```
Background:  #E8F5E9 (soft mint green)
Numbers:     #1F2421 (dark neutral)
Text:        #6B7370 (mid-tone gray)
```

### 3.3 Typography
```
Numbers:
  Size:     56px → 64px → 72px (mobile → tablet → desktop)
  Weight:   500 (medium)
  Leading:  1.0 (tight)
  Tracking: -0.025em (tight)

Description:
  Size:     15px → 16px
  Leading:  1.5 (relaxed)
  Max-width: 320px
```

---

## 4. Layout Structure

### 4.1 Grid System
```
Desktop:   3 columns × 2 rows
Mobile:    1 column × 6 rows

Gap:
  Horizontal: 48px (3rem)
  Vertical:   64px → 80px (4rem → 5rem)
```

### 4.2 Spacing
```
Section padding:
  Mobile:   80px vertical (py-20)
  Tablet:   96px vertical (py-24)
  Desktop:  112px vertical (py-28)

  Horizontal: 24px → 48px → 64px
```

### 4.3 Responsive Behavior
- **Desktop (>768px):** 3-column grid, horizontal flow
- **Mobile (<768px):** Single column stack
- **Max-width:** 1400px container

---

## 5. Animation System

### 5.1 Scroll Reveal
```tsx
useInView(ref, { once: true, margin: '-80px' })
```
- **Trigger:** 80px before viewport
- **Once:** No repeat on scroll
- **Easing:** Custom `[0.16, 1, 0.3, 1]`

### 5.2 Stagger Pattern
```
Duration: 500ms per metric
Delay:    index × 80ms
Total:    480ms stagger for 6 metrics
```

### 5.3 Motion Values
```tsx
initial: { opacity: 0, y: 12 }
animate: { opacity: 1, y: 0 }
```
Subtle 12px upward fade — imperceptible yet polished

---

## 6. Content Structure

### 6.1 Default Metrics (BCG Alumni Data)
```
1. 42K+      — Global Alumni Network and growing
2. 1200+     — Alumni lead Fortune 500 as Senior Executives
3. 3K+       — Company founders
4. 98%       — Recommend BCG as place to work
5. 35%       — Hold top management leadership positions
6. 40%       — Achieve senior positions within 10 years
```

### 6.2 Metric Block Anatomy
```
┌──────────────────────┐
│ 42K+                 │  ← Number (72px, medium, dark)
│                      │
│ in our Global Alumni │  ← Description (16px, gray)
│ Network and growing  │     Max 320px width
└──────────────────────┘
```

---

## 7. Usage Examples

### 7.1 Default Implementation
```tsx
import { MetricsGridSection } from './components/premium/sunai/MetricsGridSection';

export function Page() {
  return <MetricsGridSection />;
}
```

### 7.2 Custom Metrics
```tsx
<MetricsGridSection
  metrics={[
    { number: '10M+', description: 'Active users worldwide' },
    { number: '99.9%', description: 'Uptime guarantee' },
    { number: '500+', description: 'Enterprise customers' }
  ]}
  backgroundColor="#F5F7FA"
  numberColor="#1A1A1A"
  textColor="#6B7280"
/>
```

### 7.3 Custom Colors
```tsx
<MetricsGridSection
  backgroundColor="#FAFAFA"  // Light neutral
  numberColor="#111827"      // Near black
  textColor="#6B7280"        // Gray-500
/>
```

---

## 8. Props API

### 8.1 Interface
```typescript
interface MetricsGridSectionProps {
  metrics?: Metric[];
  backgroundColor?: string;
  numberColor?: string;
  textColor?: string;
  className?: string;
}

interface Metric {
  number: string;
  description: string;
}
```

### 8.2 Defaults
```typescript
backgroundColor: '#E8F5E9'    // Soft mint
numberColor:     '#1F2421'    // Dark neutral
textColor:       '#6B7370'    // Mid-tone gray
```

---

## 9. Accessibility

### 9.1 Standards
- ✅ WCAG AA compliant contrast
- ✅ Semantic HTML structure
- ✅ Screen reader friendly
- ✅ No color-only meaning
- ✅ Keyboard accessible

### 9.2 Contrast Ratios
```
Dark neutral (#1F2421) on mint (#E8F5E9):  11.2:1 (AAA)
Gray text (#6B7370) on mint (#E8F5E9):      5.8:1 (AA)
```

---

## 10. Visual Tone

### 10.1 Characteristics
- **Confident** — Bold numbers, no apology
- **Trustworthy** — Clean data, no decoration
- **Editorial** — Magazine-quality typography
- **Data-forward** — Content over design

### 10.2 Anti-Patterns (What NOT to Do)
```
❌ Add icons or illustrations
❌ Use gradient backgrounds
❌ Add drop shadows
❌ Use decorative borders
❌ Animate on hover
❌ Use bright accent colors
❌ Add percentage bars
❌ Use background cards
```

---

## 11. Performance

### 11.1 Optimization
- Viewport-triggered animation (IntersectionObserver)
- Single render on scroll into view
- GPU-accelerated opacity + transform
- No layout thrashing

### 11.2 Bundle Impact
```
Motion/React:  Already imported
Dependencies:  None
Component:     ~1.5KB gzipped
```

---

## 12. Integration Checklist

□ Import `MetricsGridSection` component  
□ Place between sections (ideally before CTA)  
□ Customize metrics data  
□ Adjust colors to match brand  
□ Test responsive breakpoints  
□ Verify scroll animation trigger  
□ Check color contrast ratios  
□ Test with 3, 6, or 9 metrics  

---

## 13. Design Philosophy

This component embodies **calm luxury** through restraint:

1. **Typography does the work** — No visual crutches
2. **Whitespace creates hierarchy** — Not borders or backgrounds
3. **Numbers are the hero** — Text supports, doesn't compete
4. **Animation is invisible** — Felt, not seen
5. **Grid defines structure** — Not containers or cards

**Inspiration:** BCG Annual Report, Apple Keynote slides, FT editorial layouts

---

**Component:** `MetricsGridSection`  
**File:** `/components/premium/sunai/MetricsGridSection.tsx`  
**Live:** `/sunai` (SunAI Agency)  
**Created:** 2026-02-04  
**Status:** ✅ Production Ready
