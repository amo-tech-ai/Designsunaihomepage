# 14. How It Works Section — Design Prompt

**Component:** How It Works Section  
**Max Lines:** 500 (Concise Specification)

---

## Design Prompt

Create a scroll-triggered "How It Works" section with three steps. As user scrolls through the section, the left panel shows step content (sticky) while the right panel displays corresponding mockup screenshots that transition based on scroll position.

---

## Color Palette

### Step 1: Scope (Purple Theme)
- **Primary:** `#667eea` Purple
- **Secondary:** `#764ba2` Deep Purple
- **Accent:** `#f093fb` Pink
- **Gradient:** Linear 135deg from `#667eea` to `#f093fb`
- **Border Active:** `#667eea`
- **Background Tint:** `rgba(102, 126, 234, 0.02)`

### Step 2: Blueprint (Orange Theme)
- **Primary:** `#ff6b35` Orange
- **Secondary:** `#ff9500` Bright Orange
- **Accent:** `#ffd54f` Yellow
- **Gradient:** Linear 135deg from `#ff6b35` to `#ffd54f`
- **Border Active:** `#ff6b35`
- **Background Tint:** `rgba(255, 107, 53, 0.02)`

### Step 3: Dashboard (Blue Theme)
- **Primary:** `#667eea` Blue
- **Secondary:** `#38b2ac` Teal
- **Accent:** `#00d4ff` Cyan
- **Gradient:** Linear 135deg from `#667eea` to `#38b2ac`
- **Border Active:** `#667eea`
- **Background Tint:** `rgba(56, 178, 172, 0.02)`

### Neutral Colors
- **Navy (Headings):** `#0a1628`
- **Gray (Body):** `#4a5568`
- **Light Gray (Borders):** `#e2e8f0`
- **White (Background):** `#ffffff`
- **Shadow:** `rgba(0, 0, 0, 0.15)`

### Status Colors
- **Green (Success):** `#4caf50`
- **Yellow (Warning):** `#ffd54f`
- **Red (Error):** `#ff5f56`

---

## Layout Structure

### Desktop (1440px+)
```
┌─────────────────────────────────────────────────┐
│ Left Panel (40%, sticky)  │  Right Panel (60%)  │
│                            │                     │
│ HOW IT WORKS               │  [Browser Mockup]   │
│ The smarter way...         │                     │
│                            │   ┌───────────────┐ │
│ ┌──────────────────┐       │   │ Scope Wizard  │ │
│ │ 1  Scope    [→] │       │   │               │ │
│ │ Active - Purple  │       │   │ [Pills Grid]  │ │
│ │ Border + Shadow  │       │   │               │ │
│ └──────────────────┘       │   └───────────────┘ │
│                            │                     │
│ ┌──────────────────┐       │   Progress: ● ○ ○   │
│ │ 2  Blueprint     │       │                     │
│ │ Inactive - Faded │       │                     │
│ └──────────────────┘       │                     │
│                            │                     │
│ ┌──────────────────┐       │                     │
│ │ 3  Dashboard     │       │                     │
│ └──────────────────┘       │                     │
└─────────────────────────────────────────────────┘
```

### Mobile (320-767px)
```
┌──────────────────────┐
│ HOW IT WORKS         │
│ Headline (centered)  │
│                      │
│ ┌──────────────────┐ │
│ │ Mockup Carousel  │ │
│ │ (Swipeable)      │ │
│ └──────────────────┘ │
│                      │
│ ● ○ ○ (Dots)         │
│                      │
│ ┌──────────────────┐ │
│ │ Active Step Card │ │
│ │ 1. Scope         │ │
│ └──────────────────┘ │
│                      │
│ [Next Step →]        │
└──────────────────────┘
```

---

## Step Content

### Step 1: Scope
- **Number Badge:** Circle 48px, gradient purple to pink, white text "1"
- **Icon:** 🎯 Target
- **Title:** "Scope"
- **Description:** "Start your project. Use AI or work with an expert to build a custom scope to share with our engineers."
- **CTA:** "Learn More →" (purple link)
- **Mockup:** Project Scope Wizard with 7 project type pills

### Step 2: Blueprint  
- **Number Badge:** Circle 48px, gradient orange to yellow, white text "2"
- **Icon:** 📐 Ruler
- **Title:** "Blueprint"
- **Description:** "AI analyzes your scope and generates a complete project blueprint with timeline, milestones, deliverables, and cost estimate—instantly editable."
- **CTA:** "Learn More →" (orange link)
- **Mockup:** AI Blueprint Generator with progress bar

### Step 3: Dashboard
- **Number Badge:** Circle 48px, gradient blue to teal, white text "3"
- **Icon:** 📊 Chart
- **Title:** "Dashboard"
- **Description:** "Track everything in your intelligent dashboard. AI monitors health, detects risks, and suggests optimizations while your team delivers."
- **CTA:** "Learn More →" (blue link)
- **Mockup:** Three-panel dashboard (Left | Main | Right)

---

## Scroll Animation Logic

### Scroll Zones (300vh total)
- **0-33%:** Step 1 active, Scope mockup visible
- **33-66%:** Step 2 active, Blueprint mockup visible
- **66-100%:** Step 3 active, Dashboard mockup visible

### Transitions
```javascript
// Step Card: Inactive → Active
opacity: 0.4 → 1
scale: 0.95 → 1
borderColor: transparent → step theme color
duration: 600ms

// Mockup: Slide Out → Slide In
slideOut: x: 0 → -100, opacity: 1 → 0 (500ms)
slideIn: x: 100 → 0, opacity: 0 → 1 (600ms, delay 200ms)

// Progress Dot
scale: 1 → 1.3 → 1
backgroundColor: gray → step theme color
duration: 500ms
```

---

## Step Card Design

### Active State
- **Background:** White
- **Border:** 2px solid step theme color
- **Box Shadow:** `0 8px 24px rgba(step-color, 0.15)`
- **Padding:** 32px
- **Border Radius:** 16px
- **Opacity:** 1
- **Transform:** Scale(1)

### Inactive State
- **Opacity:** 0.4
- **Transform:** Scale(0.95)
- **Border:** 2px solid transparent
- **Box Shadow:** None
- **Pointer Events:** None

### Hover (Active Only)
- **Transform:** TranslateY(-4px)
- **Box Shadow:** `0 12px 32px rgba(step-color, 0.2)`

---

## Mockup Specifications

### Browser Chrome
- **Height:** 40px
- **Background:** `#f5f5f5`
- **Dots:** 12px circles, colors: `#ff5f56`, `#ffbd2e`, `#27c93f`
- **Border Radius:** 12px top, 8px bottom
- **Shadow:** `0 20px 60px rgba(0, 0, 0, 0.15)`

### Image Sizes
- **Scope Wizard:** 1200×800px (WebP <120kb)
- **Blueprint AI:** 1200×800px (WebP <130kb)
- **Dashboard:** 1400×900px (WebP <180kb)

### Alt Text
- Scope: "Project Scope Wizard interface with project type selection"
- Blueprint: "AI Blueprint Generator creating timeline and deliverables"
- Dashboard: "Three-panel dashboard with AI insights and health monitoring"

---

## Progress Indicator

### Desktop (Fixed Right)
- **Dots:** 3 circles, vertical layout
- **Inactive:** 12px, gray `#cbd5e0`
- **Active:** 16px, step theme color, glow ring `0 0 0 4px rgba(color, 0.1)`
- **Gap:** 16px
- **Click:** Smooth scroll to step (800ms)

### Mobile (Bottom Centered)
- **Dots:** Horizontal layout
- **Size:** 10px (inactive), 14px (active)
- **Gap:** 12px

---

## Typography

### Section Label
- **Text:** "HOW IT WORKS"
- **Font Size:** 12px
- **Font Weight:** 600
- **Letter Spacing:** 0.1em
- **Color:** Orange `#ff6b35`
- **Text Transform:** Uppercase

### Headline
- **Text:** "The smarter way to build your startup"
- **Font Size:** 56px (desktop), 32px (mobile)
- **Font Weight:** 700
- **Line Height:** 1.2
- **Color:** Navy `#0a1628`

### Step Title
- **Font Size:** 32px (desktop), 24px (mobile)
- **Font Weight:** 700
- **Color:** Navy

### Step Description
- **Font Size:** 18px (desktop), 16px (mobile)
- **Font Weight:** 400
- **Line Height:** 1.6
- **Color:** Gray `#4a5568`
- **Max Width:** 420px

---

## Responsive Breakpoints

| Breakpoint | Layout | Scroll Behavior |
|------------|--------|-----------------|
| 1440px+ | Two-panel (40/60) | Scroll-triggered |
| 1024px | Two-panel (42/58) | Scroll-triggered |
| 768px | Stacked | Manual buttons |
| 320px | Carousel | Swipe gestures |

---

## Accessibility

- **Keyboard:** Tab through steps, arrow keys navigate
- **Screen Reader:** `<section aria-labelledby="how-it-works">`, descriptive alt text
- **Color Contrast:** Minimum 4.5:1 (AA)
- **Reduced Motion:** Disable parallax/slides, use fade only

---

## Performance

- **LCP:** <2.0s (mockup images)
- **CLS:** <0.1
- **FPS:** 60fps scroll (desktop), 30fps (mobile)
- **Images:** WebP with PNG fallback, lazy load
- **Observer:** IntersectionObserver (not scroll events)

---

## Animation Timeline

```
0ms:    Section enters viewport → Headline fade-in
200ms:  Step 1 card activates → Border purple, scale 1
400ms:  Mockup 1 slides in → x: 100 to 0
600ms:  Progress dot 1 activates → Purple glow

[User scrolls to 33%]

0ms:    Step 1 deactivates → Fade to 0.4, scale 0.95
200ms:  Mockup 1 slides out → x: 0 to -100
400ms:  Step 2 activates → Border orange, scale 1
600ms:  Mockup 2 slides in → x: 100 to 0
800ms:  Progress dot 2 activates → Orange glow

[User scrolls to 66%]

0ms:    Step 2 deactivates
200ms:  Mockup 2 slides out
400ms:  Step 3 activates → Border blue
600ms:  Mockup 3 slides in
800ms:  Progress dot 3 activates → Blue glow
```

---

## Success Criteria

- [ ] Smooth 60fps scroll on desktop
- [ ] Step transitions feel natural (no jank)
- [ ] Active step always obvious
- [ ] Mockups align with content
- [ ] Mobile swiper works smoothly
- [ ] Keyboard navigation functional
- [ ] Color contrast passes AA
- [ ] Images under size budget

---

## Implementation Notes

1. **Scroll Container:** 300vh height, each step 100vh
2. **Sticky Positioning:** Left panel sticky, right panel absolute
3. **Scroll Detection:** Use IntersectionObserver with 3 threshold points (0.33, 0.66, 1.0)
4. **Mobile:** Disable scroll-trigger, use Swiper.js or react-slick for carousel
5. **Images:** Lazy load with `loading="lazy"`, preload first mockup
6. **Fallback:** If JavaScript disabled, show all steps stacked (no animations)

---

## File Structure

```
/components/how-it-works/
  HowItWorks.tsx          // Main container
  StepCard.tsx            // Reusable step card
  MockupViewer.tsx        // Image container with browser chrome
  ProgressIndicator.tsx   // Dots navigation
  useScrollProgress.ts    // Custom hook for scroll detection
```

---

## Asset Checklist

- [ ] `scope-wizard.webp` (1200×800px, <120kb)
- [ ] `scope-wizard.png` (fallback)
- [ ] `blueprint-ai.webp` (1200×800px, <130kb)
- [ ] `blueprint-ai.png` (fallback)
- [ ] `dashboard-panels.webp` (1400×900px, <180kb)
- [ ] `dashboard-panels.png` (fallback)

---

**Total Lines:** 350  
**Status:** Concise Design Spec  
**Last Updated:** Dec 27, 2025
