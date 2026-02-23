# Motion & Animation

## Philosophy
**Calm. Purposeful. Never distracting.**

Animations enhance understanding, provide feedback, and create delight—without being loud or playful.

---

## Core Principles

### 1. Purposeful, Not Decorative
Every animation must serve a purpose:
- Guide attention
- Provide feedback
- Indicate state changes
- Reveal hierarchy
- Enhance comprehension

### 2. Calm & Confident
```
Speed:       Moderate (200ms–400ms, not instant or slow)
Easing:      Natural curves (ease-out, ease-in-out)
Movement:    Subtle (4px–8px translations, not dramatic)
Scale:       Gentle (0.95–1.05, not bouncy)
```

### 3. Executive-Grade Polish
No:
- Bouncing effects
- Elastic animations
- Spinning (except necessary loaders)
- Wiggling or shaking
- Confetti or celebrations

Yes:
- Smooth fades
- Subtle slides
- Gentle scales
- Elegant reveals
- Progressive disclosure

---

## Animation Library

**Primary:** Motion (Framer Motion)
```tsx
import { motion } from 'motion/react';
```

---

## Timing & Easing

### Duration Scale
```
Instant:      0ms       (immediate state changes)
Quick:        100ms     (micro-interactions, hovers)
Fast:         200ms     (UI feedback, simple transitions)
Standard:     300ms     (default animations, cards)
Moderate:     400ms     (modals, overlays)
Slow:         600ms     (page transitions, reveals)
Extra Slow:   1000ms+   (special moments, hero animations)
```

### Easing Functions
```tsx
// Recommended Easings
const easeOut = [0.4, 0, 0.2, 1];      // Default for exits
const easeIn = [0.4, 0, 1, 1];         // Subtle entrances
const easeInOut = [0.4, 0, 0.2, 1];    // Smooth transitions
const anticipate = [0.36, 0, 0.66, -0.56]; // Sophisticated

// CSS Equivalents
ease-out:      cubic-bezier(0.4, 0, 0.2, 1)
ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1)
```

### Default Transition
```tsx
const defaultTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1]
};
```

---

## Common Animations

### 1. Fade In
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
  {/* Content */}
</motion.div>
```

### 2. Slide Up (Cards, Sections)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
>
  {/* Content */}
</motion.div>
```

### 3. Scale (Buttons, Modals)
```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.15 }}
>
  Click Me
</motion.button>
```

### 4. Stagger (List Items)
```tsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### 5. Drawer/Modal (Slide from Bottom)
```tsx
<motion.div
  initial={{ y: '100%' }}
  animate={{ y: 0 }}
  exit={{ y: '100%' }}
  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
>
  {/* Modal Content */}
</motion.div>
```

---

## Component-Specific Animations

### Cards (Hover)
```tsx
<motion.div
  className="card"
  whileHover={{
    y: -4,
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)'
  }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
  {/* Card Content */}
</motion.div>
```

### Buttons (Interaction)
```tsx
<motion.button
  className="primary-button"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.15 }}
>
  {label}
</motion.button>
```

### Navigation (Header on Scroll)
```tsx
const [isScrolled, setIsScrolled] = useState(false);

<motion.header
  animate={{
    backgroundColor: isScrolled 
      ? 'rgba(250, 248, 245, 0.9)' 
      : 'rgba(250, 248, 245, 0)',
    backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)'
  }}
  transition={{ duration: 0.2 }}
>
  {/* Navigation */}
</motion.header>
```

### Tabs (Underline Indicator)
```tsx
const [activeTab, setActiveTab] = useState(0);

<div className="tabs">
  {tabs.map((tab, index) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(index)}
    >
      {tab.label}
    </button>
  ))}
  <motion.div
    className="tab-indicator"
    layoutId="activeTab"
    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
  />
</div>
```

### Modal (Entrance)
```tsx
<AnimatePresence>
  {isOpen && (
    <>
      <motion.div
        className="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Modal Content */}
      </motion.div>
    </>
  )}
</AnimatePresence>
```

---

## AI Feature Animations

### "Thinking" Indicator
```tsx
<motion.div
  className="thinking-indicator"
  animate={{
    scale: [1, 1.1, 1],
    opacity: [0.5, 1, 0.5]
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }}
>
  <div className="dot" />
</motion.div>
```

### Progressive Reveal (AI Response)
```tsx
<motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: 'auto' }}
  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
>
  {aiResponse}
</motion.div>
```

### Innovation Lime Pulse (AI Active)
```tsx
<motion.div
  className="ai-badge"
  animate={{
    boxShadow: [
      '0 0 0 0 rgba(197, 244, 103, 0.4)',
      '0 0 0 8px rgba(197, 244, 103, 0)',
    ]
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeOut'
  }}
>
  AI
</motion.div>
```

---

## Page Transitions

### Simple Fade
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Page Content */}
</motion.div>
```

### Slide Up (New Page)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
>
  {/* Page Content */}
</motion.div>
```

### Crossfade (Content Switch)
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={contentId}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {/* Dynamic Content */}
  </motion.div>
</AnimatePresence>
```

---

## Scroll Animations

### Fade In on Scroll
```tsx
import { useInView } from 'motion/react';

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
```

### Parallax (Subtle)
```tsx
import { useScroll, useTransform } from 'motion/react';

const ParallaxSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <motion.div style={{ y }}>
      {/* Content */}
    </motion.div>
  );
};
```

---

## Loading States

### Skeleton Shimmer
```tsx
<motion.div
  className="skeleton"
  animate={{
    backgroundPosition: ['200% 0', '-200% 0']
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: 'linear'
  }}
  style={{
    background: 'linear-gradient(90deg, #F0EFEC 0%, #E8E7E4 50%, #F0EFEC 100%)',
    backgroundSize: '200% 100%'
  }}
/>
```

### Spinner (Minimal)
```tsx
<motion.div
  className="spinner"
  animate={{ rotate: 360 }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: 'linear'
  }}
  style={{
    width: 24,
    height: 24,
    border: '2px solid #E0E0DE',
    borderTopColor: '#1A3A32',
    borderRadius: '50%'
  }}
/>
```

### Progress Bar
```tsx
<motion.div
  className="progress-bar"
  initial={{ width: 0 }}
  animate={{ width: `${progress}%` }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
  style={{
    height: 4,
    backgroundColor: '#1A3A32',
    borderRadius: 2
  }}
/>
```

---

## Micro-Interactions

### Button Click Ripple (Subtle)
```tsx
const [ripples, setRipples] = useState([]);

const handleClick = (e) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  setRipples([...ripples, { x, y, id: Date.now() }]);
};

<button onClick={handleClick}>
  {ripples.map((ripple) => (
    <motion.span
      key={ripple.id}
      className="ripple"
      initial={{ scale: 0, opacity: 0.5 }}
      animate={{ scale: 2, opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ left: ripple.x, top: ripple.y }}
    />
  ))}
  Click Me
</button>
```

### Checkbox Check Animation
```tsx
<motion.svg
  viewBox="0 0 20 20"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: isChecked ? 1 : 0 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
  <motion.path
    d="M5 10l3 3 7-7"
    stroke="#FAF8F5"
    strokeWidth="2"
    fill="none"
  />
</motion.svg>
```

### Toggle Switch
```tsx
<motion.div
  className="toggle-handle"
  animate={{ x: isOn ? 26 : 2 }}
  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
/>
```

---

## Performance Optimization

### Use GPU Acceleration
```tsx
// Good: transform, opacity (GPU-accelerated)
<motion.div
  animate={{ opacity: 1, transform: 'translateY(0)' }}
/>

// Avoid: width, height, top, left (triggers layout)
<motion.div
  animate={{ width: '100%' }} // DON'T
/>
```

### Will-Change Hint
```css
.animated-element {
  will-change: transform, opacity;
}

/* Remove after animation */
.animated-element.animation-done {
  will-change: auto;
}
```

### Reduce Motion (Accessibility)
```tsx
import { useReducedMotion } from 'motion/react';

const AnimatedComponent = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4 }}
    >
      {/* Content */}
    </motion.div>
  );
};
```

---

## Motion Guidelines

### ✓ DO
- [ ] Use animations to guide attention
- [ ] Keep durations under 600ms (except special cases)
- [ ] Prefer transform and opacity (GPU-accelerated)
- [ ] Test on low-end devices
- [ ] Respect `prefers-reduced-motion`
- [ ] Use easing curves for natural movement
- [ ] Animate one property at a time (when possible)

### ✗ DON'T
- [ ] Animate backdrop-filter (expensive)
- [ ] Use bouncing or elastic easing
- [ ] Animate width/height/position (layout thrashing)
- [ ] Create distracting loops
- [ ] Overuse animations (every element moving)
- [ ] Ignore reduced motion preferences
- [ ] Make users wait for animations to complete

---

## Animation Checklist

Every animation must pass:

- [ ] **Purposeful:** Serves a clear UX function
- [ ] **Performance:** 60fps on mid-range devices
- [ ] **Duration:** 100ms–600ms (standard interactions)
- [ ] **Easing:** Natural curves (ease-out, ease-in-out)
- [ ] **Accessibility:** Respects prefers-reduced-motion
- [ ] **Subtle:** Calm and confident, not flashy
- [ ] **Tested:** Works across browsers and devices

---

## CSS Custom Properties

```css
:root {
  /* Durations */
  --duration-instant: 0ms;
  --duration-quick: 100ms;
  --duration-fast: 200ms;
  --duration-standard: 300ms;
  --duration-moderate: 400ms;
  --duration-slow: 600ms;

  /* Easings */
  --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

**Status:** ✓ Motion System Approved
**Last Updated:** February 2026
