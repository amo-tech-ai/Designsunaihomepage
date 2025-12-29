# 23. Our 8-Week Process Section

**Purpose:** Interactive timeline showcasing the 4-phase delivery process  
**Style:** Editorial Luxury with horizontal step cards + connecting timeline  
**Last Updated:** Dec 29, 2025

---

## Section Overview

### Design Philosophy
- **Layout:** Horizontal timeline with 4 connected phase cards
- **Interaction:** Scroll-triggered card reveals with staggered animations
- **Visual Flow:** Connected dots and lines showing progression (1→2→3→4)
- **Typography:** Playfair Display (headlines) + Inter (body)
- **Color Palette:** Deep Void (#050508) + Sunset Orange (#FF6A3D) + Navy (#0A1628)

### User Experience Flow
1. Section fades in with headline and subtitle
2. Horizontal timeline appears with 4 numbered dots
3. Connecting lines draw from left to right
4. Cards reveal sequentially on scroll (1 → 2 → 3 → 4)
5. Each card has icon, title, checklist items, and duration badge
6. Hover effects highlight individual cards
7. Mobile: Cards stack vertically with vertical timeline

---

## 1. Section Structure

### Container Specs
```css
.process-section {
  background: linear-gradient(180deg, #050508 0%, #0A1628 100%);
  padding: 120px 80px;
  position: relative;
  overflow: hidden;
}

.process-container {
  max-width: 1440px;
  margin: 0 auto;
}
```

### Layout Grid
```jsx
<section className="process-section">
  <div className="process-container">
    {/* Header */}
    <div className="section-header">
      <h2>Our 8-Week Process</h2>
      <p>A predictable system for speed, quality, and outcomes.</p>
    </div>
    
    {/* Timeline */}
    <div className="timeline-wrapper">
      <HorizontalTimeline />
    </div>
    
    {/* Phase Cards */}
    <div className="phase-cards">
      <PhaseCard phase={1} />
      <PhaseCard phase={2} />
      <PhaseCard phase={3} />
      <PhaseCard phase={4} />
    </div>
  </div>
</section>
```

---

## 2. Typography System

### Section Headline
```
Our 8-Week Process
```
**Specs:**
- **Font:** Playfair Display Bold
- **Size:** 48px (3rem)
- **Weight:** 700
- **Color:** #FFFFFF
- **Line Height:** 1.2
- **Text Align:** Center
- **Animation:** Fade in + slide up (600ms delay)

### Subtitle
```
A predictable system for speed, quality, and outcomes.
```
**Specs:**
- **Font:** Inter Regular
- **Size:** 18px (1.125rem)
- **Weight:** 400
- **Color:** rgba(255, 255, 255, 0.6)
- **Line Height:** 1.6
- **Text Align:** Center
- **Max Width:** 600px
- **Margin:** 0 auto
- **Animation:** Fade in + slide up (800ms delay)

### Phase Card Title
```
Design Sprint, Rapid Build, etc.
```
**Specs:**
- **Font:** Playfair Display SemiBold
- **Size:** 24px (1.5rem)
- **Weight:** 600
- **Color:** #FFFFFF
- **Line Height:** 1.3
- **Margin Bottom:** 16px

### Checklist Items
```
• Strategy + Wireframes
• UI Direction
```
**Specs:**
- **Font:** Inter Regular
- **Size:** 14px (0.875rem)
- **Weight:** 400
- **Color:** rgba(255, 255, 255, 0.7)
- **Line Height:** 1.8 (25.2px)
- **Bullet:** Orange dot (•) with 8px gap

### Duration Label
```
Typical Duration
```
**Specs:**
- **Font:** Inter Medium
- **Size:** 11px (0.6875rem)
- **Weight:** 500
- **Color:** rgba(255, 255, 255, 0.5)
- **Letter Spacing:** 1.4px (0.13em)
- **Text Transform:** Uppercase

### Duration Value
```
1-2 Weeks, 3-5 Weeks, etc.
```
**Specs:**
- **Font:** Inter SemiBold
- **Size:** 13px (0.8125rem)
- **Weight:** 600
- **Color:** #FF6A3D (Sunset Orange)
- **Line Height:** 1.4

---

## 3. Horizontal Timeline

### Timeline Structure
```jsx
<div className="horizontal-timeline">
  {/* Timeline Base Line */}
  <div className="timeline-line" />
  
  {/* Timeline Dots */}
  <div className="timeline-dots">
    <TimelineDot number={1} active={true} />
    <TimelineDot number={2} active={true} />
    <TimelineDot number={3} active={true} />
    <TimelineDot number={4} active={true} />
  </div>
</div>
```

### Timeline Line
```css
.timeline-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-50%);
}

/* Animated progress line */
.timeline-line::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, #FF6A3D, #FF8C5A);
  animation: drawLine 2s ease-in-out forwards;
  animation-delay: 1s;
}

@keyframes drawLine {
  to { width: 100%; }
}
```

### Timeline Dots
```css
.timeline-dots {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.timeline-dot {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #0A1628;
  border: 2px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font: Inter SemiBold, 16px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-dot.active {
  background: #FF6A3D;
  border-color: #FF6A3D;
  color: #FFFFFF;
  box-shadow: 
    0 0 0 4px rgba(255, 106, 61, 0.2),
    0 4px 12px rgba(255, 106, 61, 0.4);
}

/* Sequential activation animation */
.timeline-dot:nth-child(1) { animation-delay: 1.2s; }
.timeline-dot:nth-child(2) { animation-delay: 1.4s; }
.timeline-dot:nth-child(3) { animation-delay: 1.6s; }
.timeline-dot:nth-child(4) { animation-delay: 1.8s; }

@keyframes dotActivate {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.timeline-dot {
  animation: dotActivate 0.5s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}
```

---

## 4. Phase Cards

### Card Layout (4-Column Grid)
```css
.phase-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 60px;
}
```

### Card Structure
```jsx
<motion.div 
  className="phase-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ 
    duration: 0.6, 
    delay: phaseIndex * 0.15,
    ease: [0.4, 0, 0.2, 1]
  }}
>
  {/* Card Header */}
  <div className="card-header">
    <div className="phase-icon">{icon}</div>
    <h3 className="phase-title">{title}</h3>
  </div>
  
  {/* Checklist */}
  <ul className="phase-checklist">
    {tasks.map(task => (
      <li key={task}>
        <span className="bullet">•</span>
        {task}
      </li>
    ))}
  </ul>
  
  {/* Duration Badge */}
  <div className="duration-badge">
    <span className="duration-label">Typical Duration</span>
    <span className="duration-value">{duration}</span>
    <div className="duration-bar">
      <div className="duration-fill" style={{ width: `${fillPercent}%` }} />
    </div>
  </div>
</motion.div>
```

### Card Styling
```css
.phase-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 32px;
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* Hover effect */
.phase-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 106, 61, 0.3);
  transform: translateY(-8px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 106, 61, 0.2);
}

/* Orange accent glow on top edge (subtle) */
.phase-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #FF6A3D, transparent);
  opacity: 0;
  transition: opacity 400ms ease;
}

.phase-card:hover::before {
  opacity: 1;
}
```

---

## 5. Phase Card Content

### Phase 1: Design Sprint
**Icon:** 🎨 (Design/Paint Palette)  
**Title:** Design Sprint  
**Tasks:**
- Strategy + Wireframes
- UI Direction

**Duration:** 1-2 Weeks  
**Timeline Fill:** 25% (2 weeks of 8)

---

### Phase 2: Rapid Build
**Icon:** ⚡ (Lightning Bolt)  
**Title:** Rapid Build  
**Tasks:**
- Frontend + Backend
- AI Integrations

**Duration:** 3-5 Weeks  
**Timeline Fill:** 37.5% (3 weeks of 8)

---

### Phase 3: Test & Integrate
**Icon:** 🛡️ (Shield)  
**Title:** Test & Integrate  
**Tasks:**
- QA & Security
- Performance Checks

**Duration:** 6-7 Weeks  
**Timeline Fill:** 25% (2 weeks of 8)

---

### Phase 4: Launch & Scale
**Icon:** 🚀 (Rocket)  
**Title:** Launch & Scale  
**Tasks:**
- Deploy & Monitor
- Improve Conversion

**Duration:** Week 8  
**Timeline Fill:** 12.5% (1 week of 8)

---

## 6. Card Components

### Phase Icon
```css
.phase-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 106, 61, 0.1);
  border: 1px solid rgba(255, 106, 61, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
  transition: all 300ms ease;
}

.phase-card:hover .phase-icon {
  background: rgba(255, 106, 61, 0.2);
  border-color: rgba(255, 106, 61, 0.4);
  transform: scale(1.1) rotate(5deg);
}
```

### Checklist
```css
.phase-checklist {
  list-style: none;
  padding: 0;
  margin: 24px 0;
}

.phase-checklist li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 12px;
  font: Inter Regular, 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
}

.phase-checklist .bullet {
  color: #FF6A3D;
  font-size: 16px;
  line-height: 1.4;
  flex-shrink: 0;
}

/* Stagger animation for checklist items */
.phase-card:hover .phase-checklist li {
  animation: checklistPop 0.3s ease backwards;
}

.phase-card:hover .phase-checklist li:nth-child(1) { animation-delay: 0.1s; }
.phase-card:hover .phase-checklist li:nth-child(2) { animation-delay: 0.2s; }
.phase-card:hover .phase-checklist li:nth-child(3) { animation-delay: 0.3s; }

@keyframes checklistPop {
  0% { transform: translateX(-4px); opacity: 0.5; }
  100% { transform: translateX(0); opacity: 1; }
}
```

### Duration Badge
```css
.duration-badge {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.duration-label {
  display: block;
  font: Inter Medium, 11px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.duration-value {
  display: block;
  font: Inter SemiBold, 13px;
  color: #FF6A3D;
  margin-bottom: 12px;
}

/* Duration progress bar */
.duration-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
}

.duration-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF6A3D, #FF8C5A);
  border-radius: 2px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
  transform-origin: left;
}

/* Animate fill on card entrance */
.phase-card.in-view .duration-fill {
  animation: fillBar 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.8s backwards;
}

@keyframes fillBar {
  from {
    width: 0 !important;
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

---

## 7. Scroll Animations

### Sequential Card Reveal
```typescript
import { motion } from "motion/react";
import { useInView } from "motion/react";

export function PhaseCards() {
  const phases = [
    { id: 1, title: "Design Sprint", ... },
    { id: 2, title: "Rapid Build", ... },
    { id: 3, title: "Test & Integrate", ... },
    { id: 4, title: "Launch & Scale", ... }
  ];

  return (
    <div className="phase-cards">
      {phases.map((phase, index) => (
        <motion.div
          key={phase.id}
          className="phase-card"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1 
          }}
          viewport={{ 
            once: true, 
            amount: 0.3 
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.15, // Stagger by 150ms
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          {/* Card content */}
        </motion.div>
      ))}
    </div>
  );
}
```

### Timeline Draw Animation
```typescript
export function HorizontalTimeline() {
  const [lineProgress, setLineProgress] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      // Animate line from 0% to 100%
      const timer = setTimeout(() => {
        setLineProgress(100);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div ref={ref} className="horizontal-timeline">
      <div className="timeline-line">
        <motion.div
          className="timeline-progress"
          initial={{ width: "0%" }}
          animate={{ width: inView ? "100%" : "0%" }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      {/* Dots activate sequentially after line draws */}
      {[1, 2, 3, 4].map((num, i) => (
        <motion.div
          key={num}
          className="timeline-dot"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: inView ? 1 : 0,
            opacity: inView ? 1 : 0
          }}
          transition={{
            duration: 0.5,
            delay: 1.2 + (i * 0.2),
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          {num}
        </motion.div>
      ))}
    </div>
  );
}
```

### Hover Micro-Interactions
```typescript
export function PhaseCard({ phase }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="phase-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Icon rotates on hover */}
      <motion.div
        className="phase-icon"
        animate={{
          rotate: isHovered ? 5 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        {phase.icon}
      </motion.div>
      
      {/* Content */}
    </motion.div>
  );
}
```

---

## 8. Responsive Behavior

### Desktop (1024px+)
```css
@media (min-width: 1024px) {
  .phase-cards {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  
  .horizontal-timeline {
    display: flex;
  }
  
  .phase-card {
    min-height: 380px;
  }
}
```

### Tablet (768px - 1024px)
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .phase-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .horizontal-timeline {
    display: none; /* Show vertical timeline instead */
  }
  
  .vertical-timeline {
    display: block;
  }
}
```

### Mobile (< 768px)
```css
@media (max-width: 767px) {
  .process-section {
    padding: 80px 20px;
  }
  
  .section-header h2 {
    font-size: 36px;
  }
  
  .section-header p {
    font-size: 16px;
  }
  
  .phase-cards {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .phase-card {
    padding: 24px;
  }
  
  .horizontal-timeline {
    display: none;
  }
  
  /* Vertical timeline for mobile */
  .vertical-timeline {
    display: block;
    position: absolute;
    left: 40px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(255, 255, 255, 0.1);
  }
  
  .vertical-timeline::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: linear-gradient(180deg, #FF6A3D, #FF8C5A);
    animation: drawVerticalLine 2s ease-in-out forwards;
  }
  
  @keyframes drawVerticalLine {
    to { height: 100%; }
  }
  
  /* Position dots vertically */
  .timeline-dot {
    position: absolute;
    left: -23px; /* Center on line */
  }
  
  .timeline-dot:nth-child(1) { top: 0; }
  .timeline-dot:nth-child(2) { top: 33.33%; }
  .timeline-dot:nth-child(3) { top: 66.66%; }
  .timeline-dot:nth-child(4) { top: 100%; }
}
```

---

## 9. Design Prompts

### Prompt 1: Section Header
```
Create a centered section header with:
- Background: Dark gradient (#050508 to #0A1628, 180deg)
- Main headline: "Our 8-Week Process" (Playfair Display Bold, 48px, white)
- Subtitle: "A predictable system for speed, quality, and outcomes." (Inter Regular, 18px, 60% white opacity)
- Center-aligned text
- Headline animates in: fade + slide up (600ms delay)
- Subtitle animates in: fade + slide up (800ms delay)
- Max width 600px for subtitle
- Spacing: 80px padding vertical, 60px margin-bottom
```

### Prompt 2: Horizontal Timeline with Animated Line
```
Design a horizontal timeline connector with:
- Base line: 100% width, 2px height, rgba(255,255,255,0.1)
- Animated progress line on top: orange gradient (#FF6A3D to #FF8C5A)
- Progress line animates from 0% to 100% width (2s ease-in-out, 1s delay)
- 4 numbered dots positioned along timeline (evenly spaced)
- Each dot: 48px diameter circle, navy fill (#0A1628), white border (15% opacity)
- Active state: orange background (#FF6A3D), white text, outer ring (4px, 20% orange)
- Dots activate sequentially: 1st at 1.2s, 2nd at 1.4s, 3rd at 1.6s, 4th at 1.8s
- Activation animation: scale from 0 to 1.2 to 1 (500ms cubic-bezier)
- Numbers inside dots: Inter SemiBold, 16px, white when active, gray when inactive
```

### Prompt 3: Phase Card - Design Sprint (Card 1)
```
Create a glassmorphism card for Phase 1 with:
- Background: rgba(255,255,255,0.02), 20px blur
- Border: 1px rgba(255,255,255,0.08)
- Border radius: 16px
- Padding: 32px
- Min height: 380px

Content:
- Icon: 🎨 (48px, inside rounded square badge)
- Icon badge: rgba(255,106,61,0.1) background, orange border (0.2 opacity), 12px radius
- Title: "Design Sprint" (Playfair Display SemiBold, 24px, white)
- Checklist:
  - "Strategy + Wireframes" (Inter Regular, 14px, 70% white)
  - "UI Direction" (Inter Regular, 14px, 70% white)
  - Orange bullet points (• 16px)
- Duration section at bottom:
  - Top border: 1px rgba(255,255,255,0.08)
  - Label: "TYPICAL DURATION" (Inter Medium, 11px, uppercase, tracked, 50% white)
  - Value: "1-2 Weeks" (Inter SemiBold, 13px, orange #FF6A3D)
  - Progress bar: 4px height, 25% filled with orange gradient

Hover state:
- Lift 8px upward
- Border color: rgba(255,106,61,0.3)
- Background: rgba(255,255,255,0.04)
- Orange accent line appears on top edge
- Icon rotates 5deg and scales to 1.1
- Shadow: 0 20px 60px rgba(0,0,0,0.3)
- Transition: 400ms cubic-bezier(0.4,0,0.2,1)

Entrance animation:
- Fade in + slide up 40px (600ms, 0ms delay)
```

### Prompt 4: Phase Card - Rapid Build (Card 2)
```
Create a glassmorphism card for Phase 2 with:
- Same base styling as Card 1

Content:
- Icon: ⚡ (lightning bolt, 48px)
- Icon badge: Same orange tint style
- Title: "Rapid Build" (Playfair Display SemiBold, 24px, white)
- Checklist:
  - "Frontend + Backend"
  - "AI Integrations"
  - Orange bullets (• 16px)
- Duration:
  - Label: "TYPICAL DURATION"
  - Value: "3-5 Weeks" (orange)
  - Progress bar: 37.5% filled

Hover: Same as Card 1
Entrance animation: Fade + slide up (600ms, 150ms delay for stagger)
```

### Prompt 5: Phase Card - Test & Integrate (Card 3)
```
Create a glassmorphism card for Phase 3 with:
- Same base styling as Card 1

Content:
- Icon: 🛡️ (shield, 48px)
- Icon badge: Same orange tint style
- Title: "Test & Integrate" (Playfair Display SemiBold, 24px, white)
- Checklist:
  - "QA & Security"
  - "Performance Checks"
  - Orange bullets (• 16px)
- Duration:
  - Label: "TYPICAL DURATION"
  - Value: "6-7 Weeks" (orange)
  - Progress bar: 25% filled

Hover: Same as Card 1
Entrance animation: Fade + slide up (600ms, 300ms delay)
```

### Prompt 6: Phase Card - Launch & Scale (Card 4)
```
Create a glassmorphism card for Phase 4 with:
- Same base styling as Card 1

Content:
- Icon: 🚀 (rocket, 48px)
- Icon badge: Same orange tint style
- Title: "Launch & Scale" (Playfair Display SemiBold, 24px, white)
- Checklist:
  - "Deploy & Monitor"
  - "Improve Conversion"
  - Orange bullets (• 16px)
- Duration:
  - Label: "TYPICAL DURATION"
  - Value: "Week 8" (orange)
  - Progress bar: 12.5% filled

Hover: Same as Card 1
Entrance animation: Fade + slide up (600ms, 450ms delay)

Special: This is the final card, so add extra visual emphasis:
- Slightly brighter hover glow
- Icon has extra rotation (8deg vs 5deg)
```

### Prompt 7: Progress Bar Animation
```
Animate the duration progress bars with:
- Initial state: width 0%, opacity 0
- Final state: width varies by card (25%, 37.5%, 25%, 12.5%), opacity 1
- Animation: 1.2s cubic-bezier(0.4,0,0.2,1) ease
- Delay: 0.8s (starts after card appears)
- Transform origin: left
- Gradient fill: #FF6A3D to #FF8C5A (90deg)
- Bar background: rgba(255,255,255,0.08)
- Bar height: 4px, border-radius 2px
- Shimmer effect on fill (optional): subtle light sweep from left to right
```

### Prompt 8: Checklist Hover Animation
```
Create a staggered checklist reveal on card hover:
- Trigger: Mouse enters card
- Animation: Each list item slides in from left (4px) with opacity 0.5 to 1
- Duration: 300ms ease
- Stagger: 100ms between items
- Item 1 delay: 100ms
- Item 2 delay: 200ms
- Item 3 delay: 300ms (if exists)
- Transform: translateX(-4px) to translateX(0)
- Subtle and smooth, not jarring
```

### Prompt 9: Mobile Vertical Timeline
```
Design a vertical timeline for mobile (<768px) with:
- Vertical line: 2px width, positioned at left side (40px from edge)
- Line height: 100% of cards container height
- Line background: rgba(255,255,255,0.1)
- Animated progress overlay: orange gradient draws from top to bottom (2s)
- 4 dots positioned along line at 0%, 33%, 66%, 100% height
- Each dot: 48px diameter, same styling as horizontal version
- Dots are absolutely positioned, centered on line
- Cards stack vertically to the right of timeline
- Card entrance: Each card fades in when its corresponding dot activates
```

### Prompt 10: Icon Badge Styling
```
Style the icon container badge with:
- Size: 48x48px square
- Border radius: 12px
- Background: rgba(255,106,61,0.1) (10% orange tint)
- Border: 1px solid rgba(255,106,61,0.2) (20% orange)
- Icon: Centered emoji (24px font-size)
- Margin bottom: 20px
- Transition: all 300ms ease

Hover state (when card is hovered):
- Background: rgba(255,106,61,0.2) (20% orange tint)
- Border: rgba(255,106,61,0.4) (40% orange)
- Transform: scale(1.1) rotate(5deg)
- Glow: 0 4px 16px rgba(255,106,61,0.3)

Animation feels playful but premium
```

---

## 10. Accessibility

### Semantic HTML
```jsx
<section 
  className="process-section"
  aria-labelledby="process-heading"
>
  <h2 id="process-heading">Our 8-Week Process</h2>
  <p className="subtitle">
    A predictable system for speed, quality, and outcomes.
  </p>
  
  {/* Timeline with proper ARIA */}
  <div 
    className="horizontal-timeline"
    role="presentation"
    aria-label="Process timeline showing 4 phases"
  >
    {/* Timeline content */}
  </div>
  
  {/* Cards as articles */}
  <div className="phase-cards">
    {phases.map((phase, i) => (
      <article
        key={phase.id}
        className="phase-card"
        aria-labelledby={`phase-${i}-title`}
      >
        <h3 id={`phase-${i}-title`}>{phase.title}</h3>
        {/* Card content */}
      </article>
    ))}
  </div>
</section>
```

### Keyboard Navigation
```typescript
// Ensure cards are keyboard accessible (optional if not interactive)
<div
  className="phase-card"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      // Optional: Expand card or navigate
    }
  }}
>
  {/* Content */}
</div>
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .phase-card,
  .timeline-line::after,
  .timeline-dot,
  .duration-fill {
    animation: none !important;
    transition: none !important;
  }
  
  .phase-card {
    opacity: 1;
    transform: none;
  }
  
  .timeline-line::after {
    width: 100%;
  }
  
  .timeline-dot {
    transform: scale(1);
    opacity: 1;
  }
}
```

---

## 11. Performance Optimizations

### Viewport Detection
```typescript
import { useInView } from "motion/react";

export function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true, // Only animate once
    amount: 0.2 // Trigger when 20% visible
  });

  return (
    <section ref={ref} className="process-section">
      {/* Only start animations when in view */}
      {inView && <TimelineAnimation />}
      {/* Cards */}
    </section>
  );
}
```

### GPU Acceleration
```css
.phase-card,
.timeline-line,
.timeline-dot {
  will-change: transform, opacity;
  transform: translateZ(0); /* Create GPU layer */
}

/* Remove will-change after animation */
.phase-card.animation-complete {
  will-change: auto;
}
```

### Lazy Load Icons
```typescript
// Use dynamic imports for heavy icon components
const PhaseIcon = lazy(() => import("./PhaseIcon"));

// Or use emoji (zero bytes, native rendering)
const icons = ["🎨", "⚡", "🛡️", "🚀"];
```

---

## 12. Component File Structure

```
/components/website/Process8Week/
├── Process8WeekSection.tsx       # Main container
├── SectionHeader.tsx             # Headline + subtitle
├── HorizontalTimeline.tsx        # Desktop timeline with dots
├── VerticalTimeline.tsx          # Mobile timeline
├── PhaseCards.tsx                # Grid wrapper
├── PhaseCard.tsx                 # Individual card component
├── PhaseIcon.tsx                 # Icon badge
├── PhaseChecklist.tsx            # Bullet list
├── DurationBadge.tsx             # Duration label + progress bar
└── styles.css                    # Section styles
```

---

## 13. Implementation Checklist

### Phase 1: Structure
- [ ] Create section container with gradient background
- [ ] Add section header (headline + subtitle)
- [ ] Set up 4-column grid for phase cards
- [ ] Create horizontal timeline container
- [ ] Add mobile vertical timeline (hidden on desktop)

### Phase 2: Timeline
- [ ] Build horizontal timeline line component
- [ ] Add animated orange progress overlay (0-100%, 2s)
- [ ] Create 4 numbered dots (48px circles)
- [ ] Position dots evenly across timeline
- [ ] Implement sequential dot activation (stagger 200ms)
- [ ] Add active state styling (orange background, white text, outer ring)

### Phase 3: Phase Cards
- [ ] Build PhaseCard component with glassmorphism
- [ ] Add phase icon with badge styling
- [ ] Create phase title (Playfair SemiBold, 24px)
- [ ] Build checklist with orange bullets
- [ ] Add duration badge (label + value + progress bar)
- [ ] Implement card hover state (lift, border glow, icon rotate)

### Phase 4: Content
- [ ] Add Phase 1 content (Design Sprint, 🎨, 1-2 weeks, 25% bar)
- [ ] Add Phase 2 content (Rapid Build, ⚡, 3-5 weeks, 37.5% bar)
- [ ] Add Phase 3 content (Test & Integrate, 🛡️, 6-7 weeks, 25% bar)
- [ ] Add Phase 4 content (Launch & Scale, 🚀, Week 8, 12.5% bar)

### Phase 5: Animations
- [ ] Implement timeline line draw animation (2s from left)
- [ ] Add dot activation sequence (scale 0 → 1.2 → 1)
- [ ] Create card entrance animation (fade + slide up, stagger 150ms)
- [ ] Add progress bar fill animation (width 0 → target%, 1.2s, 0.8s delay)
- [ ] Implement icon hover animation (scale 1.1, rotate 5deg)
- [ ] Add checklist item stagger on hover (100ms delay each)

### Phase 6: Responsive
- [ ] Test desktop layout (1024px+, 4 columns)
- [ ] Test tablet layout (768-1024px, 2 columns)
- [ ] Test mobile layout (<768px, 1 column)
- [ ] Implement vertical timeline for mobile
- [ ] Adjust font sizes per breakpoint
- [ ] Reduce card padding on mobile

### Phase 7: Polish
- [ ] Add reduced motion support
- [ ] Ensure semantic HTML (section, article, headings)
- [ ] Add ARIA labels for timeline
- [ ] Implement keyboard navigation (if needed)
- [ ] Add focus visible states
- [ ] Optimize GPU acceleration (will-change)

### Phase 8: Testing
- [ ] Verify timeline animation runs smoothly (60fps)
- [ ] Check card entrance stagger timing
- [ ] Test hover interactions on all cards
- [ ] Validate progress bar animations
- [ ] Test scroll-triggered viewport detection
- [ ] Check cross-browser compatibility
- [ ] Test with screen readers
- [ ] Verify mobile vertical timeline

---

## 14. Color Palette Reference

### Primary Colors
- **Sunset Orange:** `#FF6A3D` (timeline, accents, duration values)
- **Sunset Orange Light:** `#FF8C5A` (gradient end, hover states)
- **Deep Void:** `#050508` (background base)
- **Celestial Navy:** `#0A1628` (background gradient, dots, icon badges)

### Neutral Colors
- **White:** `#FFFFFF` (headlines, active text)
- **White 70%:** `rgba(255,255,255,0.7)` (checklist items)
- **White 60%:** `rgba(255,255,255,0.6)` (subtitle)
- **White 50%:** `rgba(255,255,255,0.5)` (duration labels)
- **White 15%:** `rgba(255,255,255,0.15)` (dot borders)
- **White 10%:** `rgba(255,255,255,0.1)` (timeline line)
- **White 8%:** `rgba(255,255,255,0.08)` (card borders, duration bar bg, dividers)
- **White 4%:** `rgba(255,255,255,0.04)` (card hover background)
- **White 2%:** `rgba(255,255,255,0.02)` (card default background)

### Accent Effects
- **Orange 40%:** `rgba(255,106,61,0.4)` (hover border, icon badge border)
- **Orange 30%:** `rgba(255,106,61,0.3)` (shadow, hover hint)
- **Orange 20%:** `rgba(255,106,61,0.2)` (icon badge border, dot outer ring)
- **Orange 10%:** `rgba(255,106,61,0.1)` (icon badge background)

---

## 15. Typography Scale

### Headings
- **Section Headline:** Playfair Display Bold, 48px (3rem), 1.2 line-height
- **Phase Title:** Playfair Display SemiBold, 24px (1.5rem), 1.3 line-height

### Body
- **Subtitle:** Inter Regular, 18px (1.125rem), 1.6 line-height
- **Checklist Items:** Inter Regular, 14px (0.875rem), 1.8 line-height
- **Timeline Dots:** Inter SemiBold, 16px (1rem), 1.0 line-height
- **Duration Value:** Inter SemiBold, 13px (0.8125rem), 1.4 line-height
- **Duration Label:** Inter Medium, 11px (0.6875rem), 1.2 line-height, uppercase, 1.4px tracking

---

**STATUS:** Complete 8-week process section documentation  
**CARDS:** 4 phase cards with full specs  
**DESIGN PROMPTS:** 10 detailed prompts  
**ANIMATIONS:** 7 motion specifications  
**RESPONSIVE BREAKPOINTS:** 3  
**TOTAL SECTIONS:** 15  

**READY FOR IMPLEMENTATION** ✅
