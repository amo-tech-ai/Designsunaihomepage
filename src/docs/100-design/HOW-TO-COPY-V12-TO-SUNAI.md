# How to Copy V12 Components to SunAI Agency

## Quick Reference Guide

This document explains how to adapt Home V12 components for the luxury SunAI Agency page.

---

## ✅ Completed Example: HowItWorksV12 → HowItWorksLuxury

### What We Did
```
Source:      /components/premium/v12/home-v12/sections/HowItWorksV12.tsx
Adapted to:  /components/premium/sunai/HowItWorksLuxury.tsx
Result:      Luxury scroll-driven process section with SunAI branding
```

---

## 🎨 Step-by-Step Adaptation Process

### Step 1: Copy the Component
```bash
# Copy base file
cp /components/premium/v12/home-v12/sections/ComponentName.tsx \
   /components/premium/sunai/ComponentNameLuxury.tsx
```

### Step 2: Update Color Palette
**Find & Replace these colors:**

| V12 Color | SunAI Luxury | Purpose |
|-----------|--------------|---------|
| `#FBFBFB` | `#FAF8F5` | Background (warm cream) |
| `#E8E8E8` | `#E0E0DE` | Borders |
| `#C4B5A6` | `#34C759` | Accent (green) |
| `#1A1A1A` | `#1F2421` | Primary text |
| `#4A4A4A` | `#6B7370` | Secondary text |
| `#9E9E9E` | `#9E9E9E` | Tertiary (same) |
| `#262626` | `#1A3A32` | Dark elements (brand green) |

### Step 3: Update Typography
**Add Georgia serif for headlines:**

```tsx
// Before (V12)
<h2 className="text-4xl lg:text-5xl font-serif">

// After (SunAI)
<h2 
  className="text-4xl lg:text-5xl font-normal"
  style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}
>
```

### Step 4: Update Glassmorphism
**Enhance glass effects:**

```tsx
// Before (V12)
style={{
  background: 'white',
  border: '1px solid #E8E8E8'
}}

// After (SunAI)
style={{
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(40px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
}}
```

### Step 5: Update Content
**Change text to enterprise/agency focus:**

```tsx
// Before (V12 — Startup focused)
{
  title: "Profile Wizard",
  description: "Tell StartupAI what you're building..."
}

// After (SunAI — Agency focused)
{
  title: "Strategic Discovery",
  description: "We begin with a deep analysis of your business model..."
}
```

### Step 6: Update Motion layoutId
**Prevent conflicts with V12:**

```tsx
// Before
<motion.div layoutId="activeMarker" />

// After
<motion.div layoutId="activeMarkerLuxury" />
```

### Step 7: Import into SunAI Page
```tsx
// In /components/premium/sunai/SunAIAgencyV12.tsx

import { HowItWorksLuxury } from './HowItWorksLuxury';

// Add after hero section
<HeroSection />
<HowItWorksLuxury />
<AIMaturitySection />
```

---

## 🎯 Visual Design Changes Summary

### Color Theme
```
V12:     Neutral beige/gray (calm, minimal)
SunAI:   Warm green/cream (luxury, organic)
```

### Typography
```
V12:     Mixed serif (headlines only)
SunAI:   Georgia serif (all headlines), more editorial
```

### Glassmorphism
```
V12:     Subtle (light blur, simple borders)
SunAI:   Enhanced (40px blur, layered opacity, soft shadows)
```

### Content Depth
```
V12:     Simple forms, minimal UI
SunAI:   Rich dashboards, data visualizations, executive metrics
```

### Accent Color
```
V12:     Warm beige (#C4B5A6) — neutral sophistication
SunAI:   Vibrant green (#34C759) — growth, innovation
```

---

## 📋 Adaptation Checklist

When copying any V12 component to SunAI:

### Colors
- [ ] Replace `#FBFBFB` → `#FAF8F5` (background)
- [ ] Replace `#E8E8E8` → `#E0E0DE` (borders)
- [ ] Replace `#C4B5A6` → `#34C759` (accent)
- [ ] Replace `#1A1A1A` → `#1F2421` (primary text)
- [ ] Replace `#4A4A4A` → `#6B7370` (secondary text)
- [ ] Replace `#262626` → `#1A3A32` (dark elements)

### Typography
- [ ] Add Georgia serif to all h2/h3 elements
- [ ] Use `fontFamily: 'Georgia, "Playfair Display", serif'`
- [ ] Keep sans-serif for body text

### Glassmorphism
- [ ] Update white backgrounds to `rgba(255,255,255,0.7)`
- [ ] Add `backdropFilter: 'blur(40px)'`
- [ ] Add soft box-shadows
- [ ] Use transparent borders where appropriate

### Content
- [ ] Rewrite from startup → enterprise/agency focus
- [ ] Change feature names to service names
- [ ] Update descriptions for C-level audience
- [ ] Enhance preview UI with richer data

### Motion
- [ ] Update all `layoutId` values (add "Luxury" suffix)
- [ ] Keep animation timings (already premium)
- [ ] Maintain easing curves

### Integration
- [ ] Import in `SunAIAgencyV12.tsx`
- [ ] Place in correct page section
- [ ] Test scroll behavior
- [ ] Verify responsive layout

---

## 🔄 Other V12 Components to Adapt

### High Priority

**1. ServicesGridV12 → ServicesGridLuxury**
- Change: Product features → Agency services
- Location: After hero or capabilities section

**2. ResultsV12 → ResultsLuxury**
- Change: Startup metrics → Client results/case studies
- Location: Mid-page, before testimonials

**3. PricingV12 → PricingLuxury**
- Change: SaaS tiers → Consulting packages
- Location: Before final CTA

### Medium Priority

**4. TimelineV12 → TimelineLuxury**
- Change: Product roadmap → Project timeline
- Use case: Case study pages

**5. PillarsV12 → PillarsLuxury**
- Change: Product pillars → Agency values
- Location: About section

### Low Priority

**6. TransformationV12 → TransformationLuxury**
- Already has similar section (before/after)
- May not need adaptation

---

## 🎨 SunAI Design Tokens

### Color Palette
```css
/* Primary */
--sunai-dark-green: #1A3A32;
--sunai-green: #34C759;
--sunai-light-green: #E8F5E9;
--sunai-lime: #C5F467;

/* Neutrals */
--sunai-cream: #FAF8F5;
--sunai-warm-gray: #E0E0DE;
--sunai-charcoal: #1F2421;
--sunai-medium-gray: #6B7370;
--sunai-light-gray: #9E9E9E;

/* Glassmorphism */
--glass-white: rgba(255, 255, 255, 0.7);
--glass-border: rgba(255, 255, 255, 0.3);
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
```

### Typography Scale
```css
/* Headlines (Georgia serif) */
--text-hero: 64px;
--text-h2: 48px;
--text-h3: 36px;
--text-h4: 24px;

/* Body (Sans-serif) */
--text-large: 18px;
--text-base: 16px;
--text-small: 14px;
--text-xs: 12px;
```

### Spacing
```css
--spacing-section: 96px;  /* py-24 */
--spacing-card: 24px;     /* p-6 */
--spacing-gap: 48px;      /* gap-12 */
```

---

## 🚀 Quick Copy Template

```tsx
// 1. Copy file
cp /components/premium/v12/home-v12/sections/OriginalComponent.tsx \
   /components/premium/sunai/OriginalComponentLuxury.tsx

// 2. Find & Replace colors
// 3. Add Georgia serif
// 4. Enhance glassmorphism
// 5. Update content
// 6. Change layoutId
// 7. Import in SunAI page

import { OriginalComponentLuxury } from './OriginalComponentLuxury';

<HeroSection />
<OriginalComponentLuxury />
<NextSection />
```

---

## 📚 Documentation Pattern

After creating luxury version, document it:

```markdown
/docs/100-design/[NUMBER]-component-name-luxury.md

Structure:
1. Overview
2. Component Architecture
3. Design Philosophy
4. Changes from V12
5. Color System
6. Typography
7. Animation System
8. Integration Steps
9. Props API
10. Comparison Table
```

---

## ⚡ Performance Notes

### Keep from V12
- Motion/React animations ✅
- GPU transforms ✅
- Scroll optimizations ✅
- Lazy loading ✅

### Add for SunAI
- Enhanced blur effects (may reduce FPS on low-end devices)
- Richer preview content (more DOM nodes)
- Larger images (lazy load with placeholders)

**Solution:** Add performance mode that reduces blur/shadows on slower devices.

---

## 🎓 Design Philosophy Comparison

| Aspect | V12 (Home) | SunAI (Agency) |
|--------|-----------|----------------|
| **Audience** | Founders, startups | C-level, enterprise |
| **Tone** | Innovative, fast | Authoritative, premium |
| **Color** | Neutral calm | Luxury organic |
| **Typography** | Modern minimal | Editorial serif |
| **Content** | Product features | Service offerings |
| **Visuals** | Clean mockups | Rich dashboards |
| **CTAs** | "Try it free" | "Schedule consultation" |
| **Proof points** | User counts | Client logos, case studies |

---

## ✅ Migration Status

| Component | V12 Source | SunAI Luxury | Status | Docs |
|-----------|-----------|--------------|--------|------|
| HowItWorks | ✅ HowItWorksV12.tsx | ✅ HowItWorksLuxury.tsx | ✅ Complete | [117](/docs/100-design/117-how-it-works-luxury.md) |
| ServicesGrid | ✅ ServicesGridV12.tsx | ⏳ Pending | Not started | — |
| Results | ✅ ResultsV12.tsx | ⏳ Pending | Not started | — |
| Pricing | ✅ PricingV12.tsx | ⏳ Pending | Not started | — |
| Timeline | ✅ TimelineV12.tsx | ⏳ Pending | Not started | — |

---

## 🔗 Related Files

```
Source Components:
/components/premium/v12/home-v12/sections/
├── HowItWorksV12.tsx
├── ServicesGridV12.tsx
├── ResultsV12.tsx
├── PricingV12.tsx
└── TimelineV12.tsx

Luxury Adaptations:
/components/premium/sunai/
├── HowItWorksLuxury.tsx ✅
├── ServicesGridLuxury.tsx ⏳
├── ResultsLuxury.tsx ⏳
└── PricingLuxury.tsx ⏳

Integration:
/components/premium/sunai/SunAIAgencyV12.tsx

Documentation:
/docs/100-design/
├── HOW-IT-WORKS-PRODUCTION-FILES.md
├── 117-how-it-works-luxury.md
└── HOW-TO-COPY-V12-TO-SUNAI.md (this file)
```

---

**Guide:** How to Copy V12 to SunAI  
**Example:** HowItWorksV12 → HowItWorksLuxury  
**Status:** ✅ Template established  
**Created:** 2026-02-04
