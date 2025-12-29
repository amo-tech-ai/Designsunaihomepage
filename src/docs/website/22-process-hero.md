# 22. Process Page - Hero Section

**Purpose:** Dynamic hero introducing the 8-week delivery cycle  
**Style:** Editorial Luxury + Animated circular timeline  
**Last Updated:** Dec 29, 2025

---

## Section Overview

### Design Philosophy
- **Visual Hierarchy:** Large headline with orange accent split ("8 Weeks. Not 8 Months.")
- **Interactive Element:** Animated circular delivery cycle with rotating progress arc
- **Data Validation:** Social proof stats (20+ projects, $2M+ GMV, 300% ROI)
- **Motion Design:** Continuous arc rotation + phase icon animations
- **Color Palette:** Deep Void (#050508) + Sunset Orange (#FF6A3D) + Navy (#0A1628)

### User Experience Flow
1. Hero section fades in on page load
2. Headline animates in (staggered: "8 Weeks" → "Not 8 Months")
3. Circular diagram appears with rotating orange arc
4. Arc animates clockwise continuously (Launch → Design → Build → Test → repeat)
5. Phase icons pulse when arc passes them
6. Stats counter up from 0
7. CTA buttons appear last

---

## 1. Layout Structure

### Container Specs
```css
.process-hero {
  background: linear-gradient(135deg, #0A1628 0%, #050508 100%);
  min-height: 100vh;
  padding: 120px 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  overflow: hidden;
}
```

### Grid Layout
```jsx
<div className="process-hero">
  {/* Left Column: Text Content */}
  <div className="hero-content">
    <Label />
    <Headline />
    <Description />
    <CTAButtons />
    <Stats />
  </div>
  
  {/* Right Column: Circular Timeline */}
  <div className="hero-visual">
    <CircularDeliveryCycle />
  </div>
</div>
```

---

## 2. Typography System

### Section Label
```
🚀 AMQ AI PROCESS
```
**Specs:**
- **Font:** Inter SemiBold
- **Size:** 11px (0.6875rem)
- **Weight:** 600
- **Color:** #FF6A3D (Sunset Orange)
- **Letter Spacing:** 2.6px (0.24em)
- **Text Transform:** Uppercase
- **Background:** rgba(255, 106, 61, 0.1) with 8px border-radius
- **Padding:** 6px 12px
- **Icon:** 🚀 Rocket emoji (12px, left side)
- **Animation:** Fade in + slide down (300ms delay)

### Main Headline (Split)
```
8 Weeks.
Not 8 Months.
```

**Line 1: "8 Weeks."**
- **Font:** Playfair Display Bold
- **Size:** 72px (4.5rem)
- **Weight:** 700
- **Color:** #FFFFFF
- **Line Height:** 1.1
- **Animation:** Fade in + slide up (0ms delay)

**Line 2: "Not 8 Months."**
- **Font:** Playfair Display Bold
- **Size:** 72px (4.5rem)
- **Weight:** 700
- **Color:** #FF6A3D (Sunset Orange)
- **Line Height:** 1.1
- **Animation:** Fade in + slide up (200ms delay)
- **Special Effect:** Text gradient shimmer on load

### Gradient Shimmer Effect
```css
.headline-orange {
  background: linear-gradient(
    90deg,
    #FF6A3D 0%,
    #FF8C5A 25%,
    #FF6A3D 50%,
    #FF8C5A 75%,
    #FF6A3D 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### Description Text
```
We move fast without cutting corners—AI acceleration + 
expert delivery for measurable results.
```

**Specs:**
- **Font:** Inter Regular
- **Size:** 18px (1.125rem)
- **Weight:** 400
- **Color:** rgba(255, 255, 255, 0.7)
- **Line Height:** 1.7 (30.6px)
- **Max Width:** 480px
- **Animation:** Fade in + slide up (400ms delay)

---

## 3. CTA Buttons

### Button Group Layout
```jsx
<div className="cta-buttons">
  <Button variant="primary">Start Your AI Brief</Button>
  <Button variant="secondary">See Success Stories</Button>
</div>
```

### Primary Button: "Start Your AI Brief"
```css
.btn-primary {
  background: #FF6A3D;
  color: #FFFFFF;
  font: Inter SemiBold, 15px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 
    0 4px 16px rgba(255, 106, 61, 0.3),
    0 0 0 1px rgba(255, 106, 61, 0.2);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background: #FF8C5A;
  transform: translateY(-2px);
  box-shadow: 
    0 8px 24px rgba(255, 106, 61, 0.5),
    0 0 0 1px rgba(255, 106, 61, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 
    0 2px 8px rgba(255, 106, 61, 0.3),
    0 0 0 1px rgba(255, 106, 61, 0.2);
}

/* Arrow icon animation */
.btn-primary svg {
  transition: transform 300ms ease;
}

.btn-primary:hover svg {
  transform: translateX(4px);
}
```

### Secondary Button: "See Success Stories"
```css
.btn-secondary {
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  font: Inter SemiBold, 15px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
  color: #FFFFFF;
  transform: translateY(-2px);
}
```

### Button Animations
```css
.cta-buttons {
  display: flex;
  gap: 16px;
  margin-top: 40px;
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 600ms backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 4. Stats Section

### Layout
```jsx
<div className="hero-stats">
  <StatItem number="20+" label="PROJECTS DELIVERED" />
  <StatItem number="$2M+" label="MONTHLY GMV" />
  <StatItem number="300%" label="AVERAGE ROI" />
</div>
```

### Stat Item Structure
```jsx
<div className="stat-item">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
  >
    <CountUp end={20} suffix="+" duration={2} />
  </motion.h3>
  <p className="stat-label">PROJECTS DELIVERED</p>
</div>
```

### Stat Styling
```css
.hero-stats {
  display: flex;
  gap: 48px;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item h3 {
  font: Inter Bold, 36px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.2;
  margin-bottom: 8px;
}

.stat-label {
  font: Inter Medium, 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1.6px;
  text-transform: uppercase;
}
```

### Counter Animation
```typescript
import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

export function CountUp({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
```

---

## 5. Circular Delivery Cycle

### SVG Structure
```jsx
<svg 
  width="500" 
  height="500" 
  viewBox="0 0 500 500"
  className="delivery-cycle"
>
  {/* Background circles */}
  <circle 
    cx="250" 
    cy="250" 
    r="200" 
    fill="none" 
    stroke="rgba(255,255,255,0.05)" 
    strokeWidth="1"
  />
  <circle 
    cx="250" 
    cy="250" 
    r="140" 
    fill="none" 
    stroke="rgba(255,255,255,0.05)" 
    strokeWidth="1"
  />
  
  {/* Animated progress arc */}
  <motion.path
    d="M 250 50 A 200 200 0 0 1 450 250"
    fill="none"
    stroke="url(#orangeGradient)"
    strokeWidth="3"
    strokeLinecap="round"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1, rotate: 360 }}
    transition={{
      pathLength: { duration: 2, ease: "easeInOut" },
      rotate: { duration: 8, ease: "linear", repeat: Infinity }
    }}
  />
  
  {/* Gradient definition */}
  <defs>
    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#FF6A3D" stopOpacity="0.3" />
      <stop offset="100%" stopColor="#FF6A3D" stopOpacity="1" />
    </linearGradient>
  </defs>
  
  {/* Center text */}
  <text x="250" y="240" textAnchor="middle" className="cycle-number">
    8 Weeks
  </text>
  <text x="250" y="265" textAnchor="middle" className="cycle-label">
    DELIVERY CYCLE
  </text>
  
  {/* Phase nodes */}
  <PhaseNode icon="🚀" label="Launch" x="250" y="50" rotation={0} />
  <PhaseNode icon="🎨" label="Design" x="450" y="250" rotation={90} />
  <PhaseNode icon="⚙️" label="Build" x="250" y="450" rotation={180} />
  <PhaseNode icon="🛡️" label="Test" x="50" y="250" rotation={270} />
</svg>
```

### Phase Node Component
```jsx
function PhaseNode({ icon, label, x, y, rotation }) {
  return (
    <g>
      {/* Node circle */}
      <motion.circle
        cx={x}
        cy={y}
        r="32"
        fill="#0A1628"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1.5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: rotation / 360 }}
        whileHover={{ scale: 1.1 }}
      />
      
      {/* Icon */}
      <text
        x={x}
        y={y + 6}
        textAnchor="middle"
        fontSize="20"
      >
        {icon}
      </text>
      
      {/* Label */}
      <text
        x={x}
        y={y + (rotation === 0 ? -50 : rotation === 180 ? 60 : 0)}
        textAnchor="middle"
        fontSize="13"
        fill="rgba(255,255,255,0.6)"
        fontFamily="Inter"
        fontWeight="500"
      >
        {label}
      </text>
    </g>
  );
}
```

### Center Text Styling
```css
.cycle-number {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  fill: #FFFFFF;
}

.cycle-label {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  fill: #FF6A3D;
  letter-spacing: 2px;
}
```

### Arc Rotation Animation
```typescript
// Continuous clockwise rotation
const arcAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 8,
    ease: "linear",
    repeat: Infinity
  }
};

// Arc grows from 0 to 90 degrees (quarter circle)
const arcDrawAnimation = {
  pathLength: [0, 0.25],
  transition: {
    duration: 2,
    ease: "easeInOut"
  }
};
```

### Phase Pulse Effect
```typescript
// When arc passes a phase node, trigger pulse
useEffect(() => {
  const rotation = arcRotation % 360;
  const phaseRotations = [0, 90, 180, 270]; // Launch, Design, Build, Test
  
  phaseRotations.forEach((phaseRot, index) => {
    if (Math.abs(rotation - phaseRot) < 5) {
      setPulsingPhase(index);
      setTimeout(() => setPulsingPhase(null), 500);
    }
  });
}, [arcRotation]);

// Pulse animation
const pulseVariants = {
  normal: { scale: 1, opacity: 1 },
  pulse: {
    scale: [1, 1.3, 1],
    opacity: [1, 0.7, 1],
    transition: { duration: 0.5 }
  }
};
```

---

## 6. Background Effects

### Gradient Background
```css
.process-hero {
  background: 
    radial-gradient(
      circle at 20% 30%, 
      rgba(255, 106, 61, 0.08) 0%, 
      transparent 40%
    ),
    radial-gradient(
      circle at 80% 70%, 
      rgba(10, 22, 40, 0.6) 0%, 
      transparent 50%
    ),
    linear-gradient(135deg, #0A1628 0%, #050508 100%);
}
```

### Floating Particles (Optional)
```jsx
<div className="particles">
  {[...Array(20)].map((_, i) => (
    <motion.div
      key={i}
      className="particle"
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  ))}
</div>
```

```css
.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 106, 61, 0.4);
  border-radius: 50%;
  pointer-events: none;
}
```

---

## 7. Entrance Animations

### Staggered Content Reveal
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};
```

```jsx
<motion.div
  className="hero-content"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.div variants={itemVariants}>
    <Label />
  </motion.div>
  <motion.div variants={itemVariants}>
    <Headline />
  </motion.div>
  <motion.div variants={itemVariants}>
    <Description />
  </motion.div>
  <motion.div variants={itemVariants}>
    <CTAButtons />
  </motion.div>
  <motion.div variants={itemVariants}>
    <Stats />
  </motion.div>
</motion.div>
```

### Circular Diagram Entrance
```typescript
const diagramVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -45
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.6
    }
  }
};
```

---

## 8. Responsive Behavior

### Desktop (1440px+)
```css
@media (min-width: 1440px) {
  .process-hero {
    padding: 140px 120px;
    gap: 120px;
  }
  
  .headline {
    font-size: 84px;
  }
  
  .delivery-cycle {
    width: 550px;
    height: 550px;
  }
}
```

### Laptop (1024px - 1440px)
```css
@media (min-width: 1024px) and (max-width: 1439px) {
  .process-hero {
    padding: 100px 60px;
    gap: 60px;
  }
  
  .headline {
    font-size: 64px;
  }
  
  .delivery-cycle {
    width: 450px;
    height: 450px;
  }
}
```

### Tablet (768px - 1024px)
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .process-hero {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 80px 40px;
    text-align: center;
  }
  
  .hero-content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .cta-buttons {
    justify-content: center;
  }
  
  .delivery-cycle {
    width: 400px;
    height: 400px;
    margin: 0 auto;
  }
  
  .hero-stats {
    justify-content: center;
  }
}
```

### Mobile (< 768px)
```css
@media (max-width: 767px) {
  .process-hero {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 60px 20px;
    min-height: auto;
  }
  
  .headline {
    font-size: 48px;
  }
  
  .description {
    font-size: 16px;
  }
  
  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .cta-buttons button {
    width: 100%;
  }
  
  .delivery-cycle {
    width: 320px;
    height: 320px;
    margin: 0 auto;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
  
  .cycle-number {
    font-size: 36px;
  }
  
  .phase-node text {
    font-size: 11px;
  }
}
```

---

## 9. Scroll Interactions

### Parallax Effect on Scroll
```typescript
import { useScroll, useTransform } from "motion/react";

export function ProcessHero() {
  const { scrollY } = useScroll();
  
  // Parallax for text content (slower)
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  
  // Parallax for circular diagram (faster)
  const diagramY = useTransform(scrollY, [0, 500], [0, 200]);
  
  // Opacity fade out
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <div className="process-hero">
      <motion.div 
        className="hero-content"
        style={{ y: textY, opacity }}
      >
        {/* Content */}
      </motion.div>
      
      <motion.div
        className="hero-visual"
        style={{ y: diagramY, opacity }}
      >
        <CircularDeliveryCycle />
      </motion.div>
    </div>
  );
}
```

### Sticky Headline Effect (Alternative)
```typescript
// Make headline sticky while diagram scrolls
const stickyVariants = {
  default: { position: "relative" },
  sticky: {
    position: "sticky",
    top: 100,
    transition: { duration: 0.3 }
  }
};

const isSticky = scrollY > 200 && scrollY < 800;
```

---

## 10. Design Prompts

### Prompt 1: Hero Section Layout
```
Create a full-width hero section for a process page with:
- Dark navy gradient background (#0A1628 to #050508, 135deg)
- Split layout: 50% text content (left), 50% visual diagram (right)
- Orange radial gradient accent in top-left (rgba(255,106,61,0.08))
- Navy radial gradient in bottom-right (rgba(10,22,40,0.6))
- Minimum height: 100vh
- Padding: 120px horizontal, 80px vertical
- Grid gap: 80px between columns
- Subtle floating particles (optional, 2px dots, orange, 20% opacity)
```

### Prompt 2: Split Headline with Orange Accent
```
Design a large two-line headline:
- Line 1: "8 Weeks." (white, Playfair Display Bold, 72px)
- Line 2: "Not 8 Months." (orange #FF6A3D, Playfair Display Bold, 72px)
- Line height: 1.1 (tight)
- Add animated gradient shimmer to orange text (3s infinite loop)
- Gradient: #FF6A3D → #FF8C5A → #FF6A3D
- Staggered entrance: Line 1 first (0ms), Line 2 after (200ms delay)
- Animation: Fade in + slide up 30px (600ms cubic-bezier ease)
- Text should feel bold, confident, and premium
```

### Prompt 3: Section Label Badge
```
Create a small label badge with:
- Text: "🚀 AMQ AI PROCESS" (uppercase)
- Background: rgba(255,106,61,0.1)
- Text color: #FF6A3D (orange)
- Font: Inter SemiBold, 11px
- Letter spacing: 2.6px (0.24em)
- Padding: 6px 12px
- Border radius: 8px
- Rocket emoji on left (12px size)
- Inline-flex layout with 8px gap
- Entrance animation: Fade in + slide down 10px (300ms delay)
```

### Prompt 4: Circular Delivery Cycle Diagram
```
Design an animated circular timeline diagram with:
- Canvas: 500x500px SVG
- Two concentric circles (outer: 400px diameter, inner: 280px diameter)
- Circle stroke: rgba(255,255,255,0.05), 1px width
- Center text: "8 Weeks" (Playfair Display Bold, 48px, white)
- Center subtitle: "DELIVERY CYCLE" (Inter SemiBold, 12px, orange #FF6A3D, tracked out)
- 4 phase nodes positioned at 0°, 90°, 180°, 270° on outer circle:
  1. Top (0°): 🚀 "Launch"
  2. Right (90°): 🎨 "Design"
  3. Bottom (180°): ⚙️ "Build"
  4. Left (270°): 🛡️ "Test"
- Each node: 64px diameter circle, navy fill (#0A1628), white border (1.5px, 15% opacity)
- Node labels: Inter Medium, 13px, rgba(255,255,255,0.6), positioned outside circle
- Animated orange arc: starts at top (Launch), sweeps 90° clockwise
- Arc styling: 3px stroke, orange gradient (#FF6A3D with opacity fade 0.3 to 1)
- Arc animation: Continuous 8s rotation, smooth linear easing
- Node pulse: When arc passes a node, scale 1 → 1.3 → 1 (500ms)
```

### Prompt 5: CTA Button Pair
```
Create two side-by-side CTA buttons:

Button 1 (Primary): "Start Your AI Brief"
- Background: #FF6A3D (orange)
- Text: white, Inter SemiBold, 15px
- Padding: 16px 32px
- Border radius: 8px
- Arrow icon on right (→, animates 4px right on hover)
- Shadow: 0 4px 16px rgba(255,106,61,0.3)
- Hover: background #FF8C5A, lift 2px, shadow increases
- Active: press down, shadow reduces

Button 2 (Secondary): "See Success Stories"
- Background: transparent
- Border: 1px solid rgba(255,255,255,0.15)
- Text: rgba(255,255,255,0.8), Inter SemiBold, 15px
- Padding: 16px 32px
- Border radius: 8px
- Hover: background rgba(255,255,255,0.05), border 30% opacity, text white, lift 2px

Both buttons:
- Display: inline-flex, gap 8px between text and icon
- Transition: all 300ms cubic-bezier(0.4,0,0.2,1)
- Entrance: Fade in + slide up 20px (600ms delay)
```

### Prompt 6: Stats Row with Counter Animation
```
Design a stats section with 3 metrics:
- Layout: Horizontal flex row, 48px gap
- Positioned below CTAs with 60px margin-top
- Bordered top: 1px solid rgba(255,255,255,0.1), 40px padding-top

Each stat item:
- Number: Inter Bold, 36px, white (e.g., "20+", "$2M+", "300%")
- Label: Inter Medium, 11px, rgba(255,255,255,0.5), uppercase, 1.6px letter-spacing
- Labels: "PROJECTS DELIVERED", "MONTHLY GMV", "AVERAGE ROI"
- Number animation: Count up from 0 to target over 2 seconds (60fps)
- Entrance: Fade in + slide up 20px (800ms delay, stagger 100ms per item)

Animation details:
- Use easing for natural acceleration
- Trigger when section enters viewport
- Only animate once (not on every scroll)
```

### Prompt 7: Animated Progress Arc
```
Create an SVG path animation for the orange arc:
- Start position: Top of circle (12 o'clock)
- Arc length: 90 degrees (quarter circle)
- Animation 1: Draw arc from 0% to 100% (2s ease-in-out)
- Animation 2: Rotate entire arc 360° continuously (8s linear, infinite)
- Gradient fill: Linear from start (30% opacity) to end (100% opacity)
- Stroke width: 3px
- Stroke cap: Round
- Glow effect: Filter drop-shadow(0 0 8px rgba(255,106,61,0.6))

SVG path calculation:
- Center: (250, 250)
- Radius: 200
- Start angle: 0° (top)
- End angle: 90° (right)
- Convert to SVG arc command: M 250 50 A 200 200 0 0 1 450 250
```

### Prompt 8: Phase Node Pulse Effect
```
Create a pulse animation for phase nodes when arc passes:
- Trigger: When rotating arc is within 5° of node position
- Animation sequence:
  1. Scale: 1 → 1.3 → 1 (500ms ease-in-out)
  2. Opacity: 1 → 0.7 → 1 (simultaneous)
  3. Border: Increase stroke width 1.5px → 2.5px → 1.5px
  4. Glow: Add orange drop-shadow during pulse (0 0 12px rgba(255,106,61,0.5))
- Duration: 500ms total
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Only one node pulses at a time (based on arc position)
```

### Prompt 9: Headline Shimmer Effect
```
Add a subtle shimmer to the orange headline "Not 8 Months.":
- Technique: Animated gradient with -webkit-background-clip: text
- Gradient: 
  - 5 color stops: #FF6A3D, #FF8C5A, #FF6A3D, #FF8C5A, #FF6A3D
  - Background-size: 200% 100%
  - Direction: 90deg (horizontal)
- Animation:
  - Name: shimmer
  - Duration: 3s
  - Easing: ease-in-out
  - Repeat: infinite
  - Keyframes: Move background-position from 0% to 100%
- Result: Continuous left-to-right shine effect on text
- Subtle and premium (not flashy)
```

### Prompt 10: Mobile Responsive Layout
```
Adapt hero section for mobile (< 768px):
- Switch to single column layout (grid-template-columns: 1fr)
- Stack order: Label → Headline → Description → Diagram → CTAs → Stats
- Reduce headline size: 72px → 48px
- Reduce diagram size: 500px → 320px
- Center-align all content
- Reduce padding: 120px → 60px vertical, 80px → 20px horizontal
- Stack CTA buttons vertically (100% width each)
- Stack stats vertically (center text, 24px gap)
- Reduce center circle text: "8 Weeks" from 48px → 36px
- Reduce phase node size: 64px → 48px diameter
- Reduce phase labels: 13px → 11px
- Maintain animations but reduce motion intensity
- Keep arc rotation but slow to 10s (easier to follow on small screen)
```

---

## 11. Accessibility

### Semantic HTML
```jsx
<section 
  className="process-hero"
  aria-label="Process Overview"
>
  <div className="hero-content">
    <span className="label" aria-label="Section: AMQ AI Process">
      🚀 AMQ AI PROCESS
    </span>
    
    <h1 className="headline">
      <span>8 Weeks.</span>
      <span className="highlight">Not 8 Months.</span>
    </h1>
    
    <p className="description">
      We move fast without cutting corners—AI acceleration + 
      expert delivery for measurable results.
    </p>
    
    {/* CTAs and Stats */}
  </div>
  
  <div 
    className="hero-visual"
    role="img"
    aria-label="Circular delivery cycle diagram showing 4 phases: Launch, Design, Build, and Test completing in 8 weeks"
  >
    <CircularDeliveryCycle />
  </div>
</section>
```

### Keyboard Navigation
```typescript
// Ensure all interactive elements are keyboard accessible
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    // Trigger button action
  }
};

// Focus visible styles
const focusStyles = {
  outline: "2px solid #FF6A3D",
  outlineOffset: "4px"
};
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .process-hero * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .delivery-cycle path {
    animation: none;
    transform: none;
  }
  
  .hero-content > * {
    opacity: 1;
    transform: none;
  }
}
```

---

## 12. Performance Optimizations

### Lazy Loading
```typescript
// Defer non-critical animations
const shouldAnimate = useInView({ threshold: 0.2, once: true });

// Preload critical fonts
<link
  rel="preload"
  href="/fonts/PlayfairDisplay-Bold.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

### GPU Acceleration
```css
.delivery-cycle,
.hero-content,
.cta-buttons {
  will-change: transform;
  transform: translateZ(0); /* Force GPU layer */
}

/* Remove will-change after animation completes */
.animation-complete {
  will-change: auto;
}
```

### SVG Optimization
```jsx
// Use CSS transforms instead of SVG transform attribute
<motion.g
  style={{ transformOrigin: "250px 250px" }}
  animate={{ rotate: 360 }}
  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
>
  {/* Arc path */}
</motion.g>
```

---

## 13. Component File Structure

```
/components/website/ProcessHero/
├── ProcessHeroSection.tsx        # Main container
├── HeroContent.tsx               # Left column text
├── CircularDeliveryCycle.tsx     # SVG diagram component
├── PhaseNode.tsx                 # Individual phase circle
├── AnimatedArc.tsx               # Rotating orange arc
├── CountUpStat.tsx               # Counter animation component
├── CTAButtons.tsx                # Button group
└── styles.css                    # Section-specific styles
```

---

## 14. Implementation Checklist

### Phase 1: Structure
- [ ] Create section container with gradient background
- [ ] Set up 2-column grid layout
- [ ] Add label badge with rocket emoji
- [ ] Create split headline (white + orange)
- [ ] Add description text
- [ ] Position stats row with divider

### Phase 2: CTA Buttons
- [ ] Build primary button with orange background
- [ ] Build secondary button with border style
- [ ] Add arrow icon to primary button
- [ ] Implement hover/active states
- [ ] Add arrow slide animation on hover
- [ ] Group buttons in flex container

### Phase 3: Stats Section
- [ ] Create stat item component
- [ ] Implement CountUp animation (0 to target)
- [ ] Add viewport detection (trigger once)
- [ ] Style numbers (36px bold) and labels (11px uppercase)
- [ ] Add top border divider
- [ ] Stagger entrance animations

### Phase 4: Circular Diagram
- [ ] Create SVG canvas (500x500)
- [ ] Draw background circles (200px + 140px radius)
- [ ] Add center text ("8 Weeks" + "DELIVERY CYCLE")
- [ ] Position 4 phase nodes (Launch, Design, Build, Test)
- [ ] Add icons and labels to each node
- [ ] Style nodes with glassmorphism

### Phase 5: Animated Arc
- [ ] Create SVG path for 90° arc
- [ ] Add orange gradient (opacity fade)
- [ ] Animate arc drawing (0 to 1 pathLength, 2s)
- [ ] Animate continuous rotation (360°, 8s infinite)
- [ ] Add stroke cap (round) and width (3px)
- [ ] Add glow drop-shadow filter

### Phase 6: Interactions
- [ ] Implement phase node pulse (when arc passes)
- [ ] Track arc rotation angle
- [ ] Trigger pulse at 0°, 90°, 180°, 270°
- [ ] Scale + opacity animation (500ms)
- [ ] Add orange glow during pulse
- [ ] Ensure only one node pulses at a time

### Phase 7: Animations
- [ ] Add shimmer effect to orange headline
- [ ] Stagger content entrance (label → headline → description → buttons → stats)
- [ ] Animate diagram entrance (scale + rotate + fade)
- [ ] Add button hover effects (lift + shadow)
- [ ] Implement scroll parallax (optional)
- [ ] Add fade-out on scroll down

### Phase 8: Responsive
- [ ] Test on 1440px+ (large desktop)
- [ ] Test on 1024px-1440px (laptop)
- [ ] Test on 768px-1024px (tablet, stacked layout)
- [ ] Test on <768px (mobile, centered, smaller diagram)
- [ ] Adjust font sizes per breakpoint
- [ ] Stack CTA buttons on mobile
- [ ] Reduce animation intensity on mobile

### Phase 9: Polish
- [ ] Add reduced motion support
- [ ] Ensure keyboard accessibility
- [ ] Add ARIA labels for screen readers
- [ ] Optimize SVG performance
- [ ] Add GPU acceleration (will-change)
- [ ] Test cross-browser compatibility

### Phase 10: Testing
- [ ] Verify all animations run at 60fps
- [ ] Test counter animation triggers correctly
- [ ] Verify arc rotation is smooth and continuous
- [ ] Check phase pulse syncs with arc position
- [ ] Test button interactions (hover/active/focus)
- [ ] Validate on Chrome, Firefox, Safari, Edge
- [ ] Test with keyboard navigation
- [ ] Test with screen reader (VoiceOver/NVDA)

---

## 15. Color Palette Reference

### Primary Colors
- **Sunset Orange:** `#FF6A3D` (accent, CTA, arc, label)
- **Sunset Orange Light:** `#FF8C5A` (hover states, gradient)
- **Deep Void:** `#050508` (background base)
- **Celestial Navy:** `#0A1628` (background gradient, node fills)

### Neutral Colors
- **White:** `#FFFFFF` (headline line 1, numbers)
- **White 80%:** `rgba(255,255,255,0.8)` (body text, secondary button)
- **White 60%:** `rgba(255,255,255,0.6)` (phase labels)
- **White 50%:** `rgba(255,255,255,0.5)` (stat labels)
- **White 30%:** `rgba(255,255,255,0.3)` (secondary button border hover)
- **White 15%:** `rgba(255,255,255,0.15)` (node borders, button borders)
- **White 10%:** `rgba(255,255,255,0.1)` (divider line, label background)
- **White 5%:** `rgba(255,255,255,0.05)` (circle strokes, button hover)

### Accent Effects
- **Orange Glow:** `rgba(255,106,61,0.3)` - `rgba(255,106,61,0.6)` (shadows, glows)
- **Orange Tint:** `rgba(255,106,61,0.1)` (label background)
- **Navy Glow:** `rgba(10,22,40,0.6)` (radial gradient accent)

---

## 16. Typography Scale

### Display
- **Hero Headline:** Playfair Display Bold, 72px (4.5rem), 1.1 line-height
- **Center Number:** Playfair Display Bold, 48px (3rem), 1.2 line-height
- **Stat Numbers:** Inter Bold, 36px (2.25rem), 1.2 line-height

### Body
- **Description:** Inter Regular, 18px (1.125rem), 1.7 line-height
- **Button Text:** Inter SemiBold, 15px (0.9375rem), 1.4 line-height
- **Phase Labels:** Inter Medium, 13px (0.8125rem), 1.4 line-height
- **Center Label:** Inter SemiBold, 12px (0.75rem), 1.2 line-height
- **Section Label:** Inter SemiBold, 11px (0.6875rem), 1.2 line-height
- **Stat Labels:** Inter Medium, 11px (0.6875rem), 1.4 line-height

---

**STATUS:** Complete hero section documentation  
**DESIGN PROMPTS:** 10 detailed prompts  
**ANIMATIONS:** 8 motion specifications  
**RESPONSIVE BREAKPOINTS:** 4  
**TOTAL SECTIONS:** 16  

**READY FOR IMPLEMENTATION** ✅
