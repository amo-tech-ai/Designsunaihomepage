# Glassmorphism — Calm Luxury

## Philosophy
**Soft transparency. Subtle depth. Elegant layering.**

Glass effects create a sense of luxury without being flashy. Use sparingly for impact.

---

## Core Glass Effect

### Standard Glass Card
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(40px);
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 16px;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
```

### Light Glass Variation
```css
background: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(30px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Dark Glass Variation (On Dark Backgrounds)
```css
background: rgba(26, 58, 50, 0.8);
backdrop-filter: blur(40px);
border: 1px solid rgba(255, 255, 255, 0.1);
color: #FAF8F5; /* Warm Ivory */
```

---

## Glass Hierarchy

### Level 1: Primary Glass (Hero Elements)
```css
background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(50px) saturate(150%);
border: 1px solid rgba(255, 255, 255, 0.4);
box-shadow: 0 12px 48px rgba(0, 0, 0, 0.1);

Use: Hero cards, featured content, primary modals
```

### Level 2: Secondary Glass (Content Cards)
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(40px);
border: 1px solid rgba(255, 255, 255, 0.3);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);

Use: Standard cards, dashboard panels, content containers
```

### Level 3: Subtle Glass (Backgrounds)
```css
background: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);

Use: Background overlays, section dividers, subtle accents
```

---

## Glassmorphism Components

### 1. Glass Navigation Header
```css
.glass-header {
  background: rgba(250, 248, 245, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(224, 224, 222, 0.5);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

Behavior:
- Appears solid at page top
- Transitions to glass on scroll
- Maintains readability over all backgrounds
```

### 2. Glass Modal
```css
.glass-modal {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(50px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.15);
}

.glass-modal-backdrop {
  background: rgba(31, 36, 33, 0.6);
  backdrop-filter: blur(8px);
}
```

### 3. Glass Card (Interactive)
```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 32px;
  transition: all 200ms ease-out;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}
```

### 4. Glass Button (Innovation Accent)
```css
.glass-button-innovation {
  background: rgba(197, 244, 103, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(197, 244, 103, 0.3);
  border-radius: 8px;
  color: #1A3A32;
  box-shadow: 0 4px 16px rgba(197, 244, 103, 0.3);
}

.glass-button-innovation:hover {
  background: rgba(197, 244, 103, 1);
  box-shadow: 0 6px 24px rgba(197, 244, 103, 0.4);
}
```

---

## Background Layers for Glass

### Recommended Backgrounds

**1. Gradient Background:**
```css
background: linear-gradient(
  135deg,
  #FAF8F5 0%,
  #F0EFEC 50%,
  #FAF8F5 100%
);

Effect: Subtle, warm, creates depth for glass
```

**2. Image Background:**
```css
background-image: url('hero-image.jpg');
background-size: cover;
background-position: center;
filter: brightness(0.9) contrast(0.9);

Effect: Photography with glass overlay creates luxury
```

**3. Textured Background:**
```css
background: #FAF8F5 url('subtle-texture.png');
background-blend-mode: multiply;
opacity: 0.03;

Effect: Adds tactile quality without being obvious
```

---

## Glass with Authority Green

### Green Tinted Glass
```css
background: rgba(26, 58, 50, 0.9);
backdrop-filter: blur(40px);
border: 1px solid rgba(197, 244, 103, 0.2);
color: #FAF8F5;
box-shadow: 0 8px 32px rgba(26, 58, 50, 0.3);

Use: AI feature highlights, premium CTAs, key announcements
```

### Green Accent Glass
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(40px);
border-left: 3px solid #1A3A32;
border-right: 1px solid rgba(255, 255, 255, 0.3);
border-top: 1px solid rgba(255, 255, 255, 0.3);
border-bottom: 1px solid rgba(255, 255, 255, 0.3);

Use: Emphasizing specific cards, callouts, featured content
```

---

## Performance Considerations

### Optimization Rules

**✓ DO:**
- [ ] Limit blur radius to 50px maximum
- [ ] Use hardware acceleration: `will-change: transform`
- [ ] Test on mid-range devices (glass is GPU-intensive)
- [ ] Provide fallback for browsers without backdrop-filter support
- [ ] Limit number of glass elements per view (5–8 max)

**✗ DON'T:**
- [ ] Stack multiple glass layers (performance hit)
- [ ] Animate backdrop-filter (extremely expensive)
- [ ] Use glass on every element (loses impact)
- [ ] Apply glass over complex, high-contrast backgrounds
- [ ] Forget to test on mobile devices

### Fallback for Unsupported Browsers
```css
.glass-card {
  /* Fallback */
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

@supports (backdrop-filter: blur(40px)) {
  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(40px);
  }
}
```

---

## Glass Variants

### 1. Frosted Glass (Heavy)
```css
background: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(60px) saturate(150%);
border: 1px solid rgba(255, 255, 255, 0.5);

Use: Modals, overlays, important UI elements
```

### 2. Clear Glass (Light)
```css
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.2);

Use: Subtle backgrounds, non-critical overlays
```

### 3. Tinted Glass (Authority)
```css
background: rgba(26, 58, 50, 0.85);
backdrop-filter: blur(40px);
border: 1px solid rgba(197, 244, 103, 0.2);

Use: Dark mode variants, premium features, AI sections
```

### 4. Accent Glass (Innovation)
```css
background: rgba(197, 244, 103, 0.15);
backdrop-filter: blur(30px);
border: 1px solid rgba(197, 244, 103, 0.3);

Use: AI indicators, innovation highlights, success states
```

---

## Animation with Glass

### Hover Transitions
```css
.glass-card {
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.85);
  transform: translateY(-4px);
  /* DON'T animate backdrop-filter */
}
```

### Entrance Animations (Motion)
```tsx
import { motion } from 'motion/react';

<motion.div
  className="glass-card"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
  {/* Content */}
</motion.div>
```

### Scroll-Based Glass
```tsx
// Header becomes glass on scroll
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

<header className={isScrolled ? 'glass-header' : 'solid-header'}>
  {/* Navigation */}
</header>
```

---

## Use Cases

### Where to Use Glass

**✓ Ideal:**
- Hero overlays on photography
- Navigation headers (on scroll)
- Modal dialogs
- Feature cards
- Premium CTAs
- AI feature indicators

**✗ Avoid:**
- Dense data tables (readability suffers)
- Form inputs (use solid backgrounds)
- Body text containers (needs contrast)
- Small UI elements (effect lost at small sizes)
- Everywhere (loses specialness)

---

## Accessibility

### Contrast Requirements
```
Text on Glass:        Ensure 4.5:1 contrast minimum
                      Test with actual background images
                      Add semi-transparent overlay if needed

Borders:              Use visible borders (rgba white/black)
                      Don't rely on glass effect alone for definition

Fallbacks:            Provide solid background alternative
                      Ensure functionality without backdrop-filter
```

### Testing
- [ ] Test with various background images
- [ ] Check text readability in all states
- [ ] Verify keyboard focus is visible on glass elements
- [ ] Test on devices with low contrast settings
- [ ] Ensure content is accessible without glass effect

---

## Implementation Examples

### CSS Custom Properties
```css
:root {
  /* Glass Backgrounds */
  --glass-primary: rgba(255, 255, 255, 0.7);
  --glass-secondary: rgba(255, 255, 255, 0.5);
  --glass-dark: rgba(26, 58, 50, 0.8);
  --glass-accent: rgba(197, 244, 103, 0.15);

  /* Blur Levels */
  --blur-heavy: blur(60px);
  --blur-medium: blur(40px);
  --blur-light: blur(20px);

  /* Glass Borders */
  --glass-border: 1px solid rgba(255, 255, 255, 0.3);
  --glass-border-strong: 1px solid rgba(255, 255, 255, 0.5);
}
```

### Utility Classes (Tailwind-style)
```css
.glass-card {
  @apply bg-white/70 backdrop-blur-[40px] 
         border border-white/30 rounded-2xl
         shadow-[0_8px_32px_rgba(0,0,0,0.08)];
}

.glass-card-hover {
  @apply hover:bg-white/85 hover:border-white/50
         hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
         transition-all duration-200;
}
```

---

## Glassmorphism Checklist

Every glass element must have:

- [ ] **Appropriate Blur:** 20px–50px based on context
- [ ] **Visible Border:** Subtle but present (rgba white)
- [ ] **Sufficient Opacity:** 0.5–0.9 background alpha
- [ ] **Contrast:** 4.5:1 minimum for text
- [ ] **Performance:** Tested on mid-range devices
- [ ] **Fallback:** Works without backdrop-filter support
- [ ] **Purpose:** Used for impact, not decoration

---

**Status:** ✓ Glassmorphism System Approved
**Last Updated:** February 2026
