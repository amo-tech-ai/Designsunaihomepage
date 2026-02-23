# BCG Fashion Page - Quick Reference Guide

**URL:** `/industries/fashion`  
**Status:** ✅ Production Ready  
**Style:** BCG Consulting Design

---

## 🎨 Design Tokens (Quick Copy)

### Colors

```css
--bcg-primary: #004E89;      /* Navy blue - headers */
--bcg-accent: #00A86B;       /* Green - stats, CTAs */
--bcg-text-primary: #212427; /* Body text */
--bcg-text-secondary: #696969; /* Muted text */
--bcg-border: #E5E7EB;       /* Borders */
--bcg-surface: #F8F9FA;      /* Card backgrounds */
```

### Typography

```css
--bcg-text-hero: 52px;       /* H1 */
--bcg-text-section: 38px;    /* H2 */
--bcg-text-body: 16px;       /* Paragraphs */
--bcg-text-caption: 13px;    /* Labels */
```

### Spacing

```css
--bcg-section-gap: 96px;     /* Desktop sections */
--bcg-card-padding: 32px;    /* Card padding */
```

---

## 📐 Component Specs

### 1. Hero Section

```tsx
<BCGHero />
```

- Height: 600px (desktop), 700px (large)
- Image: Full-bleed with dark overlay
- Breadcrumb: `Home › Industries › Fashion`
- Title: 52px, white, Helvetica Neue
- CTAs: Two buttons (primary + secondary)

### 2. Stats Grid

```tsx
<BCGStatsGrid />
```

- Layout: 4 columns (responsive to 2, 1)
- Label: "EXHIBIT 1" (uppercase, 13px)
- Stat number: 48px, green (#00A86B)
- Border: 1px solid #E5E7EB
- Corners: Sharp (0px)

### 3. Service Cards

```tsx
<BCGServiceCards />
```

- Layout: 3×2 grid (6 cards)
- Numbers: Large faded (01-06) in corner
- Badge: Colored pill (HIGH DEMAND, etc.)
- Accent line: 48px × 3px green
- ROI: Large green text
- Hover: Background #F8F9FA only

### 4. Process Flow

```tsx
<BCGProcessFlow />
```

- Phases: 4 horizontal (desktop), vertical (mobile)
- Circles: 40px, green, numbered
- Arrows: Between phases
- Cards: White with grey borders
- Duration: At bottom of each phase

### 5. Team Section

```tsx
<BCGTeamSection />
```

- Layout: 4 columns
- Avatars: 80px circular
- Style: Minimal, no hover effects
- Content: Name, role, specialty, credentials

### 6. Insights Section

```tsx
<BCGInsightsSection />
```

- Layout: 4 columns
- Images: 4:3 aspect ratio
- Corners: Sharp (0px)
- Badge: Green, uppercase
- Meta: Date + read time

### 7. Related Content

```tsx
<BCGRelatedContent />
```

- Background: #212427 (dark)
- Text: White
- Layout: 4 columns
- Cards: Small, minimal
- Borders: White/10% opacity

---

## 🚀 Common Tasks

### Change a Stat

```tsx
// File: BCGStatsGrid.tsx

const stats = [
  {
    value: '44%',              // ← Change this
    label: 'of fashion brands use AI',
    source: 'Up from 20% in 2023',
    sublabel: 'AI Adoption Rate',
  },
];
```

### Add a Service

```tsx
// File: BCGServiceCards.tsx

const services = [
  // ... existing services
  {
    number: '07',              // Next number
    badge: 'NEW',
    badgeColor: '#10B981',
    title: 'Your service title',
    description: 'Your description',
    tags: ['Tag1', 'Tag2'],
    roiMetric: '+X%',
    buildCost: '$XXK–$XXK',
    roiTime: 'X–X months',
  },
];
```

### Update Process Phase

```tsx
// File: BCGProcessFlow.tsx

const phases = [
  {
    number: 1,
    title: 'Phase Name',      // ← Change this
    duration: '2-3 weeks',     // ← Or this
    deliverables: [
      'Deliverable 1',         // ← Or these
      'Deliverable 2',
    ],
  },
];
```

### Change Hero Image

```tsx
// File: BCGHero.tsx

import fashionHeroImage from 'figma:asset/YOUR_IMAGE_ID.png';
```

---

## 🎯 BCG Rules (Critical)

### DO ✅

- Use sharp corners (0px border-radius)
- Use green (#00A86B) for stats/CTAs
- Use Helvetica Neue font stack
- Lead with data (stats, metrics)
- Keep animations minimal (200ms transitions)
- Use EXHIBIT labels for data
- Show credentials/sources
- Include ROI metrics

### DON'T ❌

- No rounded corners (no border-radius)
- No parallax effects
- No scale/transform animations
- No glassmorphism
- No gradients on cards
- No vague claims
- No hype language
- No motion on load

---

## 🔧 Utility Classes

### From `/styles/bcg-tokens.css`:

```css
.bcg-card               /* Standard card with border */
.bcg-stat-number        /* Large green stat */
.bcg-accent-line        /* 48×3px green line */
.bcg-numbered-circle    /* Circular numbered badge */
.bcg-container          /* Max-width wrapper */
.bcg-section            /* Section spacing */
.bcg-text-hero          /* 52px headline */
.bcg-text-section       /* 38px section title */
.bcg-text-body          /* 16px body text */
.bcg-text-caption       /* 13px caption */
.bcg-btn-primary        /* Primary button */
.bcg-btn-secondary      /* Secondary button */
```

---

## 📱 Responsive Breakpoints

```css
Mobile:  < 768px   → 1 column
Tablet:  768-1023px → 2 columns
Desktop: 1024px+   → 4 columns
```

### Grid Adjustments

- **Stats:** 4-col → 2-col → 1-col
- **Services:** 3-col → 2-col → 1-col
- **Process:** Horizontal → Vertical
- **Team:** 4-col → 2-col → 1-col
- **Insights:** 4-col → 2-col → 1-col

---

## 🐛 Troubleshooting

### Issue: Rounded corners appearing

**Fix:** Ensure no Tailwind radius classes:
```tsx
// Wrong:
className="rounded-lg"

// Correct:
style={{ borderRadius: '0' }}
```

### Issue: Wrong colors showing

**Fix:** Check you're using BCG tokens:
```tsx
// Wrong:
className="text-[#1A3A32]"

// Correct:
className="text-[#00A86B]"
// or
style={{ color: 'var(--bcg-accent)' }}
```

### Issue: Animations too heavy

**Fix:** Remove motion effects:
```tsx
// Wrong:
initial={{ scale: 0.8 }}
whileHover={{ scale: 1.1 }}

// Correct:
className="hover:bg-[#F8F9FA] transition-colors duration-200"
```

### Issue: Typography inconsistent

**Fix:** Use BCG typography classes:
```tsx
// Wrong:
className="text-4xl font-bold"

// Correct:
className="bcg-text-section"
// or
style={{ fontSize: '38px', fontWeight: '400' }}
```

---

## 📊 Key Metrics to Track

### Page Performance

- Lighthouse score: Target > 90
- LCP (Largest Contentful Paint): Target < 2.5s
- CLS (Cumulative Layout Shift): Target < 0.1

### User Engagement

- Bounce rate: Target < 40%
- Time on page: Target > 2 minutes
- Scroll depth: Target 70%+ reach bottom
- CTA clicks: Track all button interactions

### Content Effectiveness

- Service card click-through rate
- Download button engagement
- Consultation booking rate
- Insights article views

---

## 🔗 Related Files

```
Design Tokens:     /styles/bcg-tokens.css
Main Page:         /components/services/FashionServicesPageBCG.tsx
Components:        /components/services/fashion/BCG*.tsx
Documentation:     /docs/services/fashion/
Route:             /routes/wrappers/MarketingPageWrappers.tsx
```

---

## 🆘 Support

### Need Help?

1. Check `/docs/services/fashion/BCG_IMPLEMENTATION_COMPLETE.md` for full details
2. Review `/docs/services/fashion/BCG_VALIDATION_TEST.md` for testing
3. Reference BCG Design Style Guide in root docs
4. Compare with BCG.com screenshots

### Common Questions

**Q: Can I add animations?**  
A: Only subtle transitions (200ms, background/color only)

**Q: Can I round corners?**  
A: No, BCG uses sharp corners (0px) throughout

**Q: What font should I use?**  
A: Helvetica Neue → Helvetica → Arial fallback

**Q: How do I add a new section?**  
A: Create component, follow BCG patterns, add to main page

---

**Quick Start:** Visit `/industries/fashion` to see live implementation  
**Last Updated:** February 11, 2026  
**Version:** 1.0.0
