# 21. How It Works Section (Editorial Luxury v8)

**Purpose:** Interactive scroll-driven section explaining the 3-step process  
**Style:** Editorial Luxury + Glassmorphism with emerald accents  
**Last Updated:** Dec 29, 2025

---

## Section Overview

### Design Philosophy
- **Interaction:** Scroll-triggered animations revealing each step
- **Layout:** Split-screen with sticky visual preview
- **Motion:** Ghost cursor simulations + cross-dissolve transitions
- **Typography:** Playfair Display (headlines) + Inter (body)
- **Color Palette:** Deep Void (#050508) + Agency Emerald (#10B981)

### User Experience Flow
1. User scrolls into "How It Works" section
2. Large headline animates in from left
3. Each step (1-3) reveals with corresponding screen preview
4. Ghost cursor simulates user interactions in preview
5. Progress dots indicate current step
6. Final CTA appears after step 3

---

## 1. Section Structure

### Container Specs
```css
.how-it-works-section {
  background: linear-gradient(180deg, #050508 0%, #0A1628 100%);
  min-height: 300vh; /* Enables scroll-driven narrative */
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}
```

### Grid Layout
```jsx
<div className="grid lg:grid-cols-2 gap-16">
  {/* Left Column: Text Content */}
  <div className="text-column">
    {/* Scrolling narrative */}
  </div>
  
  {/* Right Column: Sticky Preview */}
  <div className="preview-column lg:sticky lg:top-20">
    {/* Fixed browser frame with dynamic content */}
  </div>
</div>
```

---

## 2. Typography Hierarchy

### Section Label
```
HOW IT WORKS
```
**Specs:**
- **Font:** Inter SemiBold
- **Size:** 12px
- **Weight:** 600
- **Color:** #10B981 (Agency Emerald)
- **Letter Spacing:** 2.4px (0.2em)
- **Text Transform:** Uppercase
- **Margin Bottom:** 24px

### Main Headline
```
The smarter way to build your startup
```
**Specs:**
- **Font:** Playfair Display Bold
- **Size:** 
  - Mobile: 40px (2.5rem)
  - Desktop: 56px (3.5rem)
- **Weight:** 700
- **Color:** #FFFFFF
- **Line Height:** 1.2
- **Max Width:** 560px
- **Animation:** Fade in + slide up on scroll

### Step Numbers
```
1. 2. 3.
```
**Specs:**
- **Font:** Inter Bold
- **Size:** 48px (3rem)
- **Weight:** 700
- **Color:** 
  - Active: #10B981 (Emerald)
  - Inactive: rgba(255,255,255,0.2)
- **Transition:** 400ms cubic-bezier(0.4, 0, 0.2, 1)

### Step Titles
```
Scope, Blueprint, Dashboard
```
**Specs:**
- **Font:** Playfair Display SemiBold
- **Size:** 32px (2rem)
- **Weight:** 600
- **Color:**
  - Active: #FFFFFF
  - Inactive: rgba(255,255,255,0.3)
- **Line Height:** 1.3
- **Transition:** 400ms ease

### Step Descriptions
```
Start your project. Use AI or work with an expert...
```
**Specs:**
- **Font:** Inter Regular
- **Size:** 16px (1rem)
- **Weight:** 400
- **Color:** 
  - Active: rgba(255,255,255,0.8)
  - Inactive: rgba(255,255,255,0.3)
- **Line Height:** 1.6
- **Max Width:** 480px

---

## 3. The Three Steps (Content)

### Step 1: Scope
**Number:** 1.  
**Title:** Scope  
**Description:** "Start your project. Use AI or work with an expert to build a custom scope to share with our engineers."

**Visual:** Project Scope Wizard interface
**Duration:** First 33% of scroll (0-0.33)

---

### Step 2: Blueprint
**Number:** 2.  
**Title:** Blueprint  
**Description:** "Get a detailed technical roadmap, timeline, and transparent pricing before any code is written."

**Visual:** Blueprint/Roadmap interface with approval badge
**Duration:** Middle 33% of scroll (0.33-0.66)

---

### Step 3: Dashboard
**Number:** 3.  
**Title:** Dashboard  
**Description:** "Track progress in real-time with a dedicated client portal. Review deliverables, approve milestones, and collaborate seamlessly."

**Visual:** Client dashboard with project assets
**Duration:** Final 33% of scroll (0.66-1.0)

---

## 4. Browser Frame (Sticky Preview)

### Frame Structure
```jsx
<div className="browser-frame">
  {/* Window Chrome */}
  <div className="browser-header">
    <div className="traffic-lights">
      <span className="red"></span>
      <span className="yellow"></span>
      <span className="green"></span>
    </div>
  </div>
  
  {/* Dynamic Content Area */}
  <div className="browser-content">
    <AnimatePresence mode="wait">
      {activeScreenIndex === 0 && <ScreenScope />}
      {activeScreenIndex === 1 && <ScreenBlueprint />}
      {activeScreenIndex === 2 && <ScreenDashboard />}
    </AnimatePresence>
  </div>
</div>
```

### Frame Styling
```css
.browser-frame {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(16, 185, 129, 0.1);
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

.browser-frame:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(16, 185, 129, 0.3);
}
```

### Traffic Lights
```css
.traffic-lights {
  display: flex;
  gap: 8px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}

.traffic-lights span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.traffic-lights .red {
  background: #FF5F56;
}

.traffic-lights .yellow {
  background: #FFBD2E;
}

.traffic-lights .green {
  background: #27C93F;
}
```

---

## 5. Screen 1: Scope Wizard

### Layout
```
┌─────────────────────────────────┐
│  ○ ○ ○                          │ ← Traffic lights
├─────────────────────────────────┤
│                                 │
│   Project Scope Wizard          │
│   Select your project type      │
│                                 │
│   ┌─────┐  ┌──────────┐  ┌────┐│
│   │ MVP │  │AI Product│  │Auto││
│   └─────┘  └──────────┘  └────┘│
│                                 │
│   ┌─────────┐ ┌─────┐ ┌───────┐│
│   │Dashboard│ │ CRM │ │Landing││
│   └─────────┘ └─────┘ └───────┘│
│                                 │
│        [Continue →]             │
│                                 │
│        • ○ ○ ○                  │ ← Progress dots
└─────────────────────────────────┘
```

### Content Specs

**Title:** "Project Scope Wizard"  
**Font:** Playfair Display SemiBold, 24px, #FFFFFF

**Subtitle:** "Select your project type"  
**Font:** Inter Regular, 14px, rgba(255,255,255,0.6)

**Chips/Options:**
- MVP
- AI Product ← **Selected (Emerald accent)**
- Automation
- Mobile App
- Dashboard
- CRM
- Landing Page

### Chip Styling

**Default State:**
```css
.chip-default {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px 24px;
  font: Inter Medium, 14px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 300ms ease;
}

.chip-default:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
}
```

**Selected State (AI Product):**
```css
.chip-selected {
  background: rgba(16, 185, 129, 0.2);
  border: 2px solid #10B981;
  color: #10B981;
  font-weight: 600;
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
}
```

### Continue Button
```css
.continue-button {
  background: #0A1628;
  color: #FFFFFF;
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  padding: 12px 32px;
  font: Inter SemiBold, 14px;
  cursor: pointer;
  transition: all 300ms ease;
}

.continue-button:hover {
  background: #10B981;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
}
```

### Progress Dots
```css
.progress-dots {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
}

.progress-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 300ms ease;
}

.progress-dot.active {
  background: #10B981;
  width: 24px;
  border-radius: 4px;
}
```

---

## 6. Screen 2: Blueprint

### Layout
```
┌─────────────────────────────────┐
│  ○ ○ ○                          │
├─────────────────────────────────┤
│                                 │
│   Project Blueprint             │
│   Technical Roadmap & Timeline  │
│                                 │
│   ┌─────────────────────────┐  │
│   │  ✅ Budget Approved     │  │
│   │  $18,000 - 8 weeks      │  │
│   └─────────────────────────┘  │
│                                 │
│   Architecture Diagram          │
│   ┌─────┐    ┌──────┐          │
│   │ API │───▶│ App  │          │
│   └─────┘    └──────┘          │
│                                 │
│   Timeline: Week 1-8            │
│   ▓▓▓▓▓▓▓▓░░░░░░░░░░            │
│                                 │
└─────────────────────────────────┘
```

### Content Specs

**Title:** "Project Blueprint"  
**Font:** Playfair Display SemiBold, 24px, #FFFFFF

**Subtitle:** "Technical Roadmap & Timeline"  
**Font:** Inter Regular, 14px, rgba(255,255,255,0.6)

**Badge:** "✅ Budget Approved"  
**Styling:**
```css
.badge-approved {
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid #10B981;
  border-radius: 6px;
  padding: 8px 16px;
  color: #10B981;
  font: Inter SemiBold, 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
```

**Budget Info:** "$18,000 - 8 weeks"  
**Font:** Inter Medium, 16px, rgba(255,255,255,0.8)

### Architecture Diagram
- Simple node-edge visualization
- Nodes: Glassmorphism cards with emerald borders
- Edges: Emerald dashed lines with animated flow

### Timeline Bar
```css
.timeline-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.timeline-progress {
  height: 100%;
  background: linear-gradient(90deg, #10B981, #059669);
  width: 50%; /* 4 weeks of 8 */
  animation: progressGlow 2s ease-in-out infinite;
}

@keyframes progressGlow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

---

## 7. Screen 3: Dashboard

### Layout
```
┌─────────────────────────────────┐
│  ○ ○ ○                          │
├─────────────────────────────────┤
│  [☰]  Client Portal             │
├────┬────────────────────────────┤
│Home│  Project Assets            │
│Msg │                            │
│File│  ┌──────┐ ┌──────┐ ┌─────┐│
│Team│  │Propsl│ │Wirefrm│ │Arch││
│    │  └──────┘ └──────┘ └─────┘│
│    │                            │
│    │  ┌──────┐ ┌──────┐        │
│    │  │ MVP  │ │Deploy│        │
│    │  └──────┘ └──────┘        │
│    │                            │
│    │  Progress: 67% complete   │
│    │  ▓▓▓▓▓▓▓▓▓▓░░░░░          │
└────┴────────────────────────────┘
```

### Content Specs

**Header:** "Client Portal"  
**Font:** Playfair Display SemiBold, 20px, #FFFFFF

**Sidebar Items:**
- Home
- Messages
- Files
- Team

**Active State:**
```css
.sidebar-item.active {
  background: rgba(16, 185, 129, 0.15);
  border-left: 3px solid #10B981;
  color: #10B981;
}
```

### Asset Cards

**Card Structure:**
```jsx
<div className="asset-card">
  <div className="card-icon">📄</div>
  <h4 className="card-title">Proposal</h4>
  <p className="card-status">Approved</p>
</div>
```

**Card Styling:**
```css
.asset-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 300ms ease;
}

.asset-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(16, 185, 129, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.2);
}

.asset-card.selected {
  border: 2px solid #10B981;
  background: rgba(16, 185, 129, 0.1);
}
```

**Asset Types:**
1. **Proposal** - Status: Approved ✅
2. **Wireframes** - Status: In Review 👀
3. **Architecture** - Status: In Progress ⚡ ← **Hovered/Selected**
4. **MVP Build** - Status: Upcoming 📅
5. **Deployment** - Status: Upcoming 🚀

### Progress Bar (Bottom)
```css
.dashboard-progress {
  margin-top: 24px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.progress-label {
  font: Inter Medium, 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 67%;
  background: linear-gradient(90deg, #10B981, #059669);
  border-radius: 3px;
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}
```

---

## 8. Ghost Cursor Animation

### Cursor Component
```jsx
<motion.div
  className="ghost-cursor"
  variants={cursorVariants}
  animate={isActive ? "animate" : "hidden"}
>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M5 3l14 9-6 1-3 6-5-16z"
      fill="#10B981"
      stroke="#FFFFFF"
      strokeWidth="2"
    />
  </svg>
</motion.div>
```

### Animation Variants

**Screen 1: Click "AI Product" Chip**
```typescript
const cursorVariants = {
  hidden: { opacity: 0, scale: 0 },
  animate: {
    x: [400, 280, 280, 280, 400], // Move to chip, hold, click, move away
    y: [300, 220, 220, 220, 300],
    scale: [1, 1, 0.9, 1, 1], // Click press effect
    opacity: [0, 1, 1, 1, 0],
    transition: {
      duration: 3,
      times: [0, 0.3, 0.5, 0.7, 1],
      ease: "easeInOut"
    }
  }
};
```

**Screen 2: Point to Badge**
```typescript
const cursorVariants = {
  hidden: { opacity: 0 },
  animate: {
    x: [400, 200, 200, 400],
    y: [300, 150, 150, 300],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 2.5,
      times: [0, 0.4, 0.8, 1],
      ease: "easeInOut"
    }
  }
};
```

**Screen 3: Hover "Architecture" Card**
```typescript
const cursorVariants = {
  hidden: { opacity: 0 },
  animate: {
    x: [400, 320, 320, 400],
    y: [300, 240, 240, 300],
    scale: [1, 1.1, 1.1, 1],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 3,
      times: [0, 0.3, 0.7, 1],
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};
```

### Cursor Styling
```css
.ghost-cursor {
  position: absolute;
  pointer-events: none;
  z-index: 100;
  filter: drop-shadow(0 4px 8px rgba(16, 185, 129, 0.6));
}
```

---

## 9. Scroll-Driven State Management

### Scroll Progress Hook
```typescript
import { useScroll, useMotionValueEvent } from "motion/react";

export function HowItWorks() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress (0-1) to screen index (0-2)
    const index = Math.min(2, Math.floor(latest * 3.2));
    setActiveScreenIndex(index);
  });

  return (
    <div ref={containerRef} className="how-it-works-section">
      {/* Content */}
    </div>
  );
}
```

### Step Activation Logic
```typescript
const steps = [
  {
    number: "1.",
    title: "Scope",
    description: "Start your project. Use AI or work with an expert...",
    scrollRange: [0, 0.33]
  },
  {
    number: "2.",
    title: "Blueprint",
    description: "Get a detailed technical roadmap...",
    scrollRange: [0.33, 0.66]
  },
  {
    number: "3.",
    title: "Dashboard",
    description: "Track progress in real-time...",
    scrollRange: [0.66, 1.0]
  }
];

// Check if step is active
const isStepActive = (stepIndex: number) => {
  return activeScreenIndex === stepIndex;
};
```

---

## 10. Screen Transition Animations

### Cross-Dissolve Effect
```jsx
<AnimatePresence mode="wait">
  <motion.div
    key={activeScreenIndex}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {activeScreenIndex === 0 && <ScreenScope />}
    {activeScreenIndex === 1 && <ScreenBlueprint />}
    {activeScreenIndex === 2 && <ScreenDashboard />}
  </motion.div>
</AnimatePresence>
```

### Entrance Animations
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.screen-content > * {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.screen-content > *:nth-child(1) { animation-delay: 0.1s; }
.screen-content > *:nth-child(2) { animation-delay: 0.2s; }
.screen-content > *:nth-child(3) { animation-delay: 0.3s; }
```

---

## 11. Step Text Animations

### Active/Inactive States
```jsx
<div className={cn(
  "step-item",
  "transition-all duration-400",
  isActive 
    ? "opacity-100 translate-x-0" 
    : "opacity-30 translate-x-[-20px]"
)}>
  <motion.h3
    animate={{
      color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.3)",
      scale: isActive ? 1 : 0.95
    }}
    transition={{ duration: 0.4 }}
  >
    {step.number} {step.title}
  </motion.h3>
  
  <motion.p
    animate={{
      opacity: isActive ? 0.8 : 0.3
    }}
    transition={{ duration: 0.4 }}
  >
    {step.description}
  </motion.p>
</div>
```

### Number Highlight Effect
```css
.step-number {
  display: inline-block;
  font-size: 48px;
  font-weight: 700;
  background: linear-gradient(135deg, #10B981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.step-number::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 3px;
  background: #10B981;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-number.active::after {
  width: 40px;
}
```

---

## 12. Responsive Behavior

### Mobile Layout (< 1024px)
```jsx
<div className="how-it-works-mobile">
  {/* Stacked layout: text + image alternating */}
  {steps.map((step, index) => (
    <div key={index} className="step-mobile">
      <div className="step-text">
        <h3>{step.number} {step.title}</h3>
        <p>{step.description}</p>
      </div>
      <div className="step-image">
        <img src={step.mobileScreenshot} alt={step.title} />
      </div>
    </div>
  ))}
</div>
```

### Tablet (768px - 1024px)
- Reduce browser frame size by 20%
- Stack steps vertically with smaller gaps
- Disable sticky positioning
- Use static screenshots instead of animated screens

### Mobile (< 768px)
- Full-width cards
- Swap text/image order for visual interest
- Simplify animations (reduce motion)
- Use progressive disclosure (accordions)

---

## 13. Performance Optimizations

### Lazy Loading Screens
```typescript
const ScreenScope = lazy(() => import("./screens/ScreenScope"));
const ScreenBlueprint = lazy(() => import("./screens/ScreenBlueprint"));
const ScreenDashboard = lazy(() => import("./screens/ScreenDashboard"));

// Preload next screen
useEffect(() => {
  if (activeScreenIndex < 2) {
    // Preload next screen component
    const nextScreen = screens[activeScreenIndex + 1];
    nextScreen.preload();
  }
}, [activeScreenIndex]);
```

### Animation Throttling
```typescript
// Only animate when section is in viewport
const { ref, inView } = useInView({
  threshold: 0.1,
  triggerOnce: false
});

const shouldAnimate = inView && activeScreenIndex === screenIndex;
```

### Reduced Motion Preference
```css
@media (prefers-reduced-motion: reduce) {
  .ghost-cursor,
  .screen-transition,
  .step-animation {
    animation: none !important;
    transition: none !important;
  }
  
  .how-it-works-section {
    min-height: auto; /* Disable scroll-driven layout */
  }
}
```

---

## 14. Accessibility

### Keyboard Navigation
```jsx
<div
  role="region"
  aria-label="How It Works Process"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "ArrowDown") {
      setActiveScreenIndex((prev) => Math.min(2, prev + 1));
    } else if (e.key === "ArrowUp") {
      setActiveScreenIndex((prev) => Math.max(0, prev - 1));
    }
  }}
>
  {/* Content */}
</div>
```

### Screen Reader Support
```jsx
<div className="step-item">
  <h3>
    <span className="sr-only">Step</span>
    {step.number} {step.title}
  </h3>
  <p id={`step-${index}-description`}>
    {step.description}
  </p>
  <div
    className="preview"
    role="img"
    aria-labelledby={`step-${index}-description`}
  >
    {/* Visual content */}
  </div>
</div>
```

### Focus Management
```typescript
useEffect(() => {
  // Move focus to active step when changed
  const activeStep = document.querySelector(`[data-step="${activeScreenIndex}"]`);
  if (activeStep) {
    (activeStep as HTMLElement).focus();
  }
}, [activeScreenIndex]);
```

---

## 15. Final CTA (After Steps)

### Layout
```jsx
<motion.div
  className="how-it-works-cta"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h3>Ready to start building?</h3>
  <p>Schedule a free consultation to discuss your project.</p>
  <div className="cta-buttons">
    <Button variant="primary">Book a Call</Button>
    <Button variant="secondary">View Projects</Button>
  </div>
</motion.div>
```

### CTA Styling
```css
.how-it-works-cta {
  max-width: 600px;
  margin: 80px auto 0;
  text-align: center;
  padding: 48px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
}

.how-it-works-cta h3 {
  font: Playfair Display SemiBold, 32px;
  color: #FFFFFF;
  margin-bottom: 16px;
}

.how-it-works-cta p {
  font: Inter Regular, 16px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.cta-buttons .btn-primary {
  background: #10B981;
  color: #FFFFFF;
  border: none;
}

.cta-buttons .btn-secondary {
  background: transparent;
  color: #10B981;
  border: 1px solid #10B981;
}
```

---

## 16. Design Prompts (For AI Generation)

### Prompt 1: Section Header
```
Create a modern "How It Works" section header with:
- Dark editorial luxury background (Deep Void #050508 to Celestial Navy #0A1628 gradient)
- Small emerald label "HOW IT WORKS" (uppercase, 12px, tracked out)
- Large serif headline "The smarter way to build your startup" (Playfair Display, 56px, white)
- Subtle glassmorphism texture overlay
- Fade in from bottom animation on scroll
- Minimal, sophisticated spacing
```

### Prompt 2: Browser Frame Preview
```
Design a floating browser window frame with:
- Glassmorphism: rgba(255,255,255,0.02) background, 20px blur
- Subtle white border (8% opacity)
- Mac-style traffic lights (red, yellow, green circles)
- Dark navy content area (#0A1628)
- Emerald accent glow on hover
- Rounded corners (16px)
- Elevated shadow (0 30px 80px rgba(0,0,0,0.4))
- Sticky positioning on desktop
```

### Prompt 3: Project Scope Wizard
```
Create an interactive wizard interface showing:
- Clean white card with subtle shadow
- Title "Project Scope Wizard" (Playfair, 24px, center)
- Subtitle "Select your project type" (Inter, 14px, gray)
- 7 option chips in a 2-row grid
- "AI Product" chip selected with emerald accent (#10B981)
- Chips have glassmorphism effect
- Dark "Continue" button at bottom
- 4 progress dots below (first one active, emerald)
- Animated ghost cursor pointing at selected chip
```

### Prompt 4: Blueprint Screen
```
Design a project blueprint interface with:
- Dark background (#0A1628)
- "Project Blueprint" title (Playfair, 24px)
- Green "Budget Approved" badge with checkmark
- Budget info "$18,000 - 8 weeks" below badge
- Simple architecture diagram (2-3 nodes with connecting lines)
- Nodes are glassmorphism cards with emerald borders
- Timeline progress bar (emerald, 50% filled)
- Week labels "Week 1-8" above timeline
- Animated shimmer effect on progress bar
```

### Prompt 5: Client Dashboard
```
Create a client portal dashboard with:
- Left sidebar (navy #0A1628) with menu items
- "Home" item active with emerald left border
- Main content area showing "Project Assets" grid
- 5 asset cards: Proposal, Wireframes, Architecture, MVP, Deploy
- Cards are glassmorphism with white borders
- "Architecture" card highlighted with emerald border (hovered)
- Each card has icon, title, and status badge
- Progress bar at bottom "67% complete" with emerald fill
- Ghost cursor hovering over Architecture card
- Modern, minimal, enterprise-grade design
```

### Prompt 6: Ghost Cursor Animation
```
Animate a cursor icon with:
- Emerald colored (#10B981) pointer shape
- White stroke outline (2px)
- Drop shadow with emerald glow
- Smooth bezier curve movement (ease-in-out)
- Path: enter from top-right → move to target → pause → click (scale down 10%) → move away → fade out
- Duration: 3 seconds
- Repeat: infinite with 1s delay
- Export as motion/react animation variants
```

### Prompt 7: Step Text Reveal
```
Animate step text with:
- Steps numbered 1, 2, 3 in large serif font (48px)
- Active step: white text, 100% opacity, emerald underline
- Inactive steps: 30% opacity, gray, no underline
- Smooth transition: 400ms cubic-bezier ease
- Slide in from left when activating (20px offset)
- Description text fades in 200ms after title
- Staggered animation for multiple elements
```

---

## 17. Component File Structure

```
/components/website/HowItWorks/
├── HowItWorksSection.tsx         # Main container with scroll logic
├── StepList.tsx                  # Left column text steps
├── BrowserFrame.tsx              # Reusable browser chrome
├── screens/
│   ├── ScreenScope.tsx           # Step 1: Wizard interface
│   ├── ScreenBlueprint.tsx       # Step 2: Blueprint view
│   └── ScreenDashboard.tsx       # Step 3: Dashboard view
├── GhostCursor.tsx               # Animated cursor component
├── ProgressDots.tsx              # Step progress indicators
└── styles.css                    # Section-specific styles
```

---

## 18. Implementation Checklist

### Phase 1: Structure
- [ ] Create section container with gradient background
- [ ] Set up 2-column grid layout (responsive)
- [ ] Implement sticky positioning for preview column
- [ ] Add section label + main headline
- [ ] Create step list with numbers, titles, descriptions

### Phase 2: Browser Frame
- [ ] Build BrowserFrame component with traffic lights
- [ ] Add glassmorphism styling + emerald glow
- [ ] Implement hover effects
- [ ] Test responsive scaling

### Phase 3: Screen Content
- [ ] Design Screen 1: Scope Wizard (7 chips + progress dots)
- [ ] Design Screen 2: Blueprint (badge + diagram + timeline)
- [ ] Design Screen 3: Dashboard (sidebar + asset cards + progress)
- [ ] Add glassmorphism styling to all cards
- [ ] Implement emerald accent highlights

### Phase 4: Animations
- [ ] Set up scroll progress tracking with motion/react
- [ ] Map scroll position to activeScreenIndex state
- [ ] Implement cross-dissolve transitions between screens
- [ ] Add entrance animations for screen elements
- [ ] Create ghost cursor with motion variants
- [ ] Sync cursor animation with screen changes

### Phase 5: Interactions
- [ ] Implement chip selection animation (Screen 1)
- [ ] Add badge pulse effect (Screen 2)
- [ ] Create card hover effect (Screen 3)
- [ ] Add progress bar shimmer animation
- [ ] Test all micro-interactions

### Phase 6: Polish
- [ ] Add step text reveal animations
- [ ] Implement active/inactive state transitions
- [ ] Add emerald underline to active step number
- [ ] Create final CTA section after steps
- [ ] Add keyboard navigation support

### Phase 7: Optimization
- [ ] Lazy load screen components
- [ ] Add reduced motion media query support
- [ ] Test mobile responsive behavior
- [ ] Optimize animation performance (60fps target)
- [ ] Add screen reader accessibility labels

### Phase 8: Testing
- [ ] Test scroll-driven state changes
- [ ] Verify ghost cursor paths on all screens
- [ ] Check cross-browser compatibility
- [ ] Test on mobile/tablet devices
- [ ] Validate accessibility with NVDA/VoiceOver

---

## 19. Color Palette Reference

### Primary Colors
- **Deep Void:** `#050508` (background)
- **Celestial Navy:** `#0A1628` (secondary background)
- **Agency Emerald:** `#10B981` (accent, active states)
- **Emerald Dark:** `#059669` (gradient end)

### Neutral Colors
- **White:** `#FFFFFF`
- **White 80%:** `rgba(255,255,255,0.8)` (body text)
- **White 60%:** `rgba(255,255,255,0.6)` (subtitles)
- **White 30%:** `rgba(255,255,255,0.3)` (inactive states)
- **White 20%:** `rgba(255,255,255,0.2)` (borders)
- **White 10%:** `rgba(255,255,255,0.1)` (subtle borders)
- **White 8%:** `rgba(255,255,255,0.08)` (glass borders)
- **White 5%:** `rgba(255,255,255,0.05)` (card backgrounds)
- **White 3%:** `rgba(255,255,255,0.03)` (subtle cards)
- **White 2%:** `rgba(255,255,255,0.02)` (very subtle)

### Glass Effects
- **Backdrop Blur:** `blur(10px)` - `blur(20px)`
- **Emerald Glass:** `rgba(16,185,129,0.15)` (active cards)
- **Emerald Border:** `rgba(16,185,129,0.3)` (hover hints)

---

## 20. Typography Scale

### Display
- **Hero Headline:** Playfair Display Bold, 56px (3.5rem), 1.2 line-height
- **Step Numbers:** Inter Bold, 48px (3rem), 1.0 line-height

### Headings
- **Section Title:** Playfair Display SemiBold, 32px (2rem), 1.3 line-height
- **Card Titles:** Playfair Display SemiBold, 24px (1.5rem), 1.3 line-height
- **Subsection:** Playfair Display Medium, 20px (1.25rem), 1.4 line-height

### Body
- **Large:** Inter Regular, 18px (1.125rem), 1.6 line-height
- **Regular:** Inter Regular, 16px (1rem), 1.6 line-height
- **Small:** Inter Regular, 14px (0.875rem), 1.5 line-height
- **Tiny:** Inter Medium, 12px (0.75rem), 1.4 line-height

### Labels
- **Section Label:** Inter SemiBold, 12px, UPPERCASE, 0.2em letter-spacing
- **Button:** Inter SemiBold, 14px, 1.4 line-height
- **Badge:** Inter SemiBold, 12px, 1.4 line-height

---

**STATUS:** Complete comprehensive documentation  
**SCREENS DOCUMENTED:** 3 (Scope, Blueprint, Dashboard)  
**ANIMATIONS SPECIFIED:** 7 motion variants  
**DESIGN PROMPTS:** 7 detailed prompts  
**TOTAL SECTIONS:** 20  

**READY FOR IMPLEMENTATION** ✅
