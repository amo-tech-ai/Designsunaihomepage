# How It Works Section — Production Files

## 📍 Current Production Implementation

### Version: **V12 (Latest — Home Page)**

The **How It Works** section on the home page uses a scroll-driven sticky layout that showcases 4 steps with an animated cursor interaction in an app window preview.

---

## 🗂 Production Files

### Main Component
```
📁 /components/premium/v12/home-v12/sections/
├── HowItWorksV12.tsx          # Main component (341 lines)
└── index.ts                    # Export barrel file
```

### Integration
```
📁 /components/premium/v12/home-v12/
└── HomePageV12.tsx             # Page that imports HowItWorksV12
```

---

## 📋 Component Details

### File: `/components/premium/v12/home-v12/sections/HowItWorksV12.tsx`

**Type:** Scroll-driven sticky section with animated cursor  
**Lines of Code:** 341  
**Dependencies:**
- `motion/react` (scroll tracking, animations)
- `react` (hooks: useRef, useState, useEffect)

**Key Features:**
1. ✅ 400vh scroll container (4 steps × 100vh)
2. ✅ Sticky layout with left text + right app window
3. ✅ Animated cursor that moves between UI elements
4. ✅ Click ripple effect on interaction points
5. ✅ Crossfade transitions between step content
6. ✅ Active step indicator with animated marker

---

## 🎨 Visual Design

### Layout Structure
```
┌──────────────────────────────────────────────────────┐
│  STICKY CONTAINER (100vh, fixed during scroll)      │
├───────────────────┬──────────────────────────────────┤
│ LEFT (40%)        │ RIGHT (60%)                      │
│                   │                                  │
│ [Eyebrow]         │  ┌────────────────────────────┐ │
│ HOW IT WORKS      │  │ App Window                 │ │
│                   │  │                            │ │
│ [Headline]        │  │  [Animated Cursor]         │ │
│ The smarter way   │  │  [Click Ripple]            │ │
│ to build your     │  │                            │ │
│ startup           │  │  Step 1: Profile Wizard    │ │
│                   │  │  - Input fields            │ │
│ [Steps List]      │  │  - Buttons                 │ │
│ 1. Profile Wizard │  │  - CTA                     │ │
│ 2. AI Analysis    │  │                            │ │
│ 3. Materials      │  └────────────────────────────┘ │
│ 4. Execution      │                                  │
└───────────────────┴──────────────────────────────────┘
```

### Color Palette (V12 Neutral Theme)
```
Background:     #FBFBFB (light warm gray)
Border:         #E8E8E8 (subtle divider)
Accent:         #C4B5A6 (warm beige)
Text Primary:   #1A1A1A (near black)
Text Muted:     #9E9E9E (medium gray)
Inactive:       #D4D4D4 (light gray)
```

---

## 🎬 Animation System

### 1. Scroll Progress Tracking
```tsx
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end end"]
});

// Maps scroll to step index (0-3)
useMotionValueEvent(scrollYProgress, "change", (latest) => {
  const index = Math.min(3, Math.floor(latest * 4));
  setActiveStepIndex(index);
});
```

### 2. Animated Cursor Component
**Purpose:** Simulates user interaction within the app window

**Behavior:**
- Fades in on step change
- Moves to different coordinates per step
- Click animation (scale down/up)
- 600ms smooth movement with cubic-bezier easing

**Coordinates by Step:**
```
Step 0 (Wizard):    x: 120, y: 80
Step 1 (Analysis):  x: 200, y: 100
Step 2 (Materials): x: 100, y: 120
Step 3 (Execution): x: 180, y: 90
```

### 3. Click Ripple Effect
**Purpose:** Visual feedback for cursor "clicks"

**Timing:**
- Appears 1000ms after step change
- Fades out after 300ms
- Scales from 0 → 2×
- Border color: `#C4B5A6`

### 4. Content Crossfade
```tsx
<motion.div
  key={activeStepIndex}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
>
  {/* Step content */}
</motion.div>
```

### 5. Active Marker Animation
```tsx
<motion.div 
  layoutId="activeMarker"
  className="absolute -left-[27px] top-1 w-2 h-2 bg-[#C4B5A6] rounded-sm"
  transition={{ duration: 0.2, ease: "easeOut" }}
/>
```

---

## 📊 Step Content

### Steps Array
```typescript
const steps = [
  {
    id: "wizard",
    number: "1",
    title: "Profile Wizard",
    description: "Tell StartupAI what you're building. Add your website..."
  },
  {
    id: "analysis",
    number: "2",
    title: "AI Readiness Analysis",
    description: "Get a readiness score, key gaps, and top moves..."
  },
  {
    id: "materials",
    number: "3",
    title: "Generate Materials",
    description: "Generate an investor deck + core documents..."
  },
  {
    id: "execution",
    number: "4",
    title: "Daily Execution",
    description: "StartupAI turns strategy into daily priorities..."
  }
];
```

### Step 1: Profile Wizard UI
**Elements:**
- ✅ Startup Name input (text: "Acme AI")
- ✅ Website URL input (text: "acme.ai")
- ✅ Stage selector (Pre-seed | **Seed** | Series A)
- ✅ Industry pills (**AI SaaS** | Marketplace | Fintech)
- ✅ CTA button: "Analyze My Startup"
- ✅ Helper text: "Takes ~2 minutes..."

**Note:** Steps 2-4 show simplified placeholder content (can be expanded)

---

## 🎯 Interaction Flow

```
User Action                →  Visual Response
──────────────────────────────────────────────────────
Scroll down 25%            →  Step 1 activates
                           →  Cursor fades in at (120, 80)
                           →  Click ripple appears
                           →  Left sidebar highlights step 1

Scroll down 50%            →  Step 2 activates
                           →  Cursor moves to (200, 100)
                           →  Content crossfades
                           →  Active marker slides down

Scroll down 75%            →  Step 3 activates
                           →  Cursor moves to (100, 120)

Scroll down 100%           →  Step 4 activates
                           →  Cursor moves to (180, 90)
```

---

## 📐 Responsive Behavior

### Desktop (≥1024px)
- Two-column layout (40% / 60%)
- Sticky scroll effect active
- App window max-width: 2xl (672px)
- Cursor animation enabled

### Tablet (768px - 1023px)
- Stacked layout (still side-by-side if space allows)
- Reduced padding

### Mobile (<768px)
- Full stack (steps above, app window below)
- Cursor animation may be disabled for performance
- **Note:** V12 currently optimized for desktop

---

## 🔗 Integration Example

### In HomePageV12.tsx:
```tsx
import { HowItWorksV12 } from './sections';

export default function HomePageV12() {
  return (
    <>
      <HeroV12 />
      <TrustedByV12 />
      <HowItWorksV12 />  {/* ← This section */}
      <ServicesGridV12 />
      {/* ... other sections */}
    </>
  );
}
```

---

## 🚀 Usage in Routes

### Current Route:
```
/home-v12  →  Uses HowItWorksV12
```

### Future Routes:
```
/          →  Will use HowItWorksV12 (when V12 becomes default)
```

---

## 📚 Related Components

### Other "How It Works" Implementations (Legacy)

| Version | File | Style | Status |
|---------|------|-------|--------|
| V11 | `/components/premium/v11/home-v11/sections/HowItWorksV11.tsx` | Sticky scroll, gradient | Legacy |
| V11 Improved | `/components/premium/v11/home-v11/sections/HowItWorksV11Improved.tsx` | Enhanced V11 | Legacy |
| V7 | `/components/premium/v7/HowItWorksV7.tsx` | Card-based grid | Legacy |
| V6 | `/components/premium/v6/HowItWorksV6.tsx` | Sticky sidebar | Legacy |
| V5 | `/components/premium/v5/HowItWorksV5.tsx` | Split layout | Legacy |

### SunAI Agency Version
```
/components/premium/sunai/HowItWorksSection.tsx
```
- **Purpose:** BCG-style process section for agency page
- **Style:** 3-step horizontal flow with numbers
- **Not the same as home page version**

---

## 🛠 Customization Guide

### Change Number of Steps
```tsx
// In HowItWorksV12.tsx

// 1. Update scroll height
style={{ height: '500vh' }}  // 5 steps

// 2. Update step calculation
const index = Math.min(4, Math.floor(latest * 5));  // Max 4 (0-4)

// 3. Add step to array
const steps = [
  // ... existing steps
  {
    id: "newstep",
    number: "5",
    title: "New Step",
    description: "Description here"
  }
];

// 4. Add cursor position
else if (stepIndex === 4) {
  await cursorControls.start({
    x: 150,
    y: 110,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  });
}
```

### Change Colors
```tsx
// V12 uses neutral beige theme
// To change to emerald:

border-[#C4B5A6]  →  border-emerald-500
bg-[#C4B5A6]      →  bg-emerald-500
text-[#C4B5A6]    →  text-emerald-500
```

### Add Step Content
```tsx
{/* Step 2: AI Analysis */}
{activeStepIndex === 1 && (
  <div className="space-y-4">
    <h3 className="text-lg font-medium text-[#1A1A1A]">
      AI Readiness Score
    </h3>
    {/* Add your UI here */}
  </div>
)}
```

---

## ⚡ Performance Notes

### Optimization Features:
- ✅ GPU-accelerated transforms (motion.div)
- ✅ Efficient scroll tracking (no layout thrashing)
- ✅ Minimal re-renders (local state only)
- ✅ Crossfade prevents DOM thrashing

### Bundle Size:
```
HowItWorksV12.tsx:  ~8KB gzipped
motion/react:       ~30KB (shared across app)
```

---

## ✅ Production Checklist

□ Component renders without errors  
□ Scroll tracking works (0 → 100% = steps 1 → 4)  
□ Cursor animates smoothly between steps  
□ Click ripples appear on schedule  
□ Active marker slides between steps  
□ Content crossfades without flicker  
□ Responsive layout works on mobile  
□ Accessibility: keyboard scroll works  
□ Performance: 60fps scroll on mid-range devices  

---

## 🎓 Design Reference

**Inspiration:** Modern SaaS product tours (Figma, Notion, Linear)

**Key Principles:**
1. **Show, don't tell** — Animated app window instead of static screenshots
2. **Progressive disclosure** — One step at a time
3. **Contextual cursor** — Guides eye to relevant UI elements
4. **Sticky persistence** — Content stays visible during scroll
5. **Smooth transitions** — Crossfades and eased movements

---

## 📞 Support

**Questions?**
- Review `/components/premium/v12/home-v12/sections/HowItWorksV12.tsx`
- Check V11 versions for alternative implementations
- See Motion/React docs for animation API

**Issues?**
- Cursor not animating: Check `useEffect` dependencies
- Steps not changing: Verify scroll progress calculation
- Content not crossfading: Check `activeStepIndex` state

---

**Component:** `HowItWorksV12`  
**File:** `/components/premium/v12/home-v12/sections/HowItWorksV12.tsx`  
**Version:** V12 (Latest)  
**Status:** ✅ Production Ready  
**Last Updated:** 2026-02-04  
**Lines of Code:** 341
