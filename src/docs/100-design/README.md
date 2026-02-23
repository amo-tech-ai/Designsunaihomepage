# Design System Documentation

## Overview
Comprehensive design system for the Luxury AI CRM with "Calm Luxury" aesthetic, glassmorphism, and Motion/React animations.

---

## 📚 Documentation Index

### Foundation
- **101** — Brand Foundations
- **102** — Color Palette
- **103** — Typography
- **104** — Spacing Grid
- **109** — Motion Guidelines

### Components
- **112** — [BCG-Style Solution Cards](/docs/100-design/112-solution-cards-bcg.md)
- **113** — [How It Works Process Section](/docs/100-design/113-how-it-works-section.md)
- **114** — [Metrics Grid Section](/docs/100-design/114-metrics-grid-section.md)
- **115** — [Solution Cards with Slide-Up Overlay](/docs/100-design/115-solution-cards-section.md)
- **116** — [AI Maturity Curve Framework Section](/docs/100-design/116-ai-maturity-section.md)
- **117** — [How It Works (Luxury Edition)](/docs/100-design/117-how-it-works-luxury.md)
- **118** — [Premium Services Page](/docs/100-design/118-premium-services-page.md)

---

## 🎨 Quick Reference

### Design Principles
1. **Calm Luxury** — Sophisticated, never flashy
2. **Editorial Rhythm** — Strategic whitespace
3. **Zero Manual Entry** — Intelligence over forms
4. **Thinking States** — Never generic loading spinners

### Color System
- **Primary:** Emerald (`#10B981`, `#D1F4E0`)
- **Neutrals:** Warm grays (`#FDFCFB`, `#F5F3EF`)
- **Accents:** Mint, sage, soft blue

### Animation Timing
- **Quick:** 150-200ms (micro-interactions)
- **Standard:** 250-300ms (cards, overlays)
- **Slow:** 400-500ms (page transitions)
- **Easing:** Custom `[0.16, 1, 0.3, 1]` for premium feel

---

## 🚀 Live Demos

### Component Demos
- [BCG-Style Solution Cards](/sunai/cards-demo)

### Pages
- [SunAI Agency V12](/sunai)

---

## 📝 Component Status

| Component | Status | Route | Docs |
|-----------|--------|-------|------|
| Solution Cards (Overlay) | ✅ Production | `/sunai/cards-demo` | [112](/docs/100-design/112-solution-cards-bcg.md) |
| Related Services Cards | ✅ Production | `/sunai/cards-demo` | [112](/docs/100-design/112-solution-cards-bcg.md) |
| How It Works Section | ✅ Production | `/sunai` | [113](/docs/100-design/113-how-it-works-section.md) |
| Metrics Grid Section | ✅ Production | `/sunai` | [114](/docs/100-design/114-metrics-grid-section.md) |
| Solution Cards with Slide-Up Overlay | ✅ Production | `/sunai/cards-demo` | [115](/docs/100-design/115-solution-cards-section.md) |
| AI Maturity Curve Framework Section | ✅ Production | `/sunai` | [116](/docs/100-design/116-ai-maturity-section.md) |
| How It Works (Luxury Edition) | ✅ Production | `/sunai` | [117](/docs/100-design/117-how-it-works-luxury.md) |
| Premium Services Page | ✅ Production | `/sunai` | [118](/docs/100-design/118-premium-services-page.md) |

---

## 🛠 Component Usage

### Import Pattern
```tsx
import { ComponentName } from './components/premium/sunai/ComponentName';
```

### Motion/React
```tsx
import { motion } from 'motion/react';

<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
>
  Content
</motion.div>
```

---

## 📋 Checklist for New Components

□ Follows calm luxury aesthetic
□ Uses design tokens from `/styles/globals.css`
□ Implements Motion/React animations
□ Keyboard accessible (WCAG AA)
□ Mobile responsive
□ Documentation created in `/docs/100-design/`
□ Demo added to showcase page
□ Component exported and routed

---

**Last Updated:** 2026-02-04  
**Design System Version:** 1.0  
**Maintained By:** AI Product Systems Architect