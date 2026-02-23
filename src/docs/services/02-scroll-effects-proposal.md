# E-Commerce Page - Scroll Effects & Animation Proposal

## Recommended Scroll Effect Types

### TYPE A: Entrance Animations (Scroll-Triggered Reveals)

#### A1. Fade Up
```
Trigger: Element enters viewport (20% threshold)
Animation: opacity: 0 → 1, translateY: 40px → 0
Duration: 0.8s
Easing: ease-out
Use for: Section headings, text blocks, intro cards
```

#### A2. Fade Slide (Left/Right)
```
Trigger: Element enters viewport (20% threshold)  
Animation: opacity: 0 → 1, translateX: ±60px → 0
Duration: 0.9s
Easing: cubic-bezier(0.4, 0, 0.2, 1)
Use for: Alternating content blocks, image cards
```

#### A3. Scale Fade In
```
Trigger: Element enters viewport (30% threshold)
Animation: opacity: 0 → 1, scale: 0.85 → 1
Duration: 0.7s
Easing: ease-out
Use for: Icon containers, stat cards, CTAs
```

#### A4. Stagger Children
```
Trigger: Parent enters viewport
Animation: Children animate sequentially with 0.1s delay
Duration: 0.6s per child
Easing: ease-out
Use for: Tool grids, team members, service cards
```

### TYPE B: Parallax Effects

#### B1. Background Parallax
```
Trigger: Continuous scroll
Effect: Background moves at 50% scroll speed
Range: -100px to 100px
Use for: Hero section, large background images
```

#### B2. Multi-Layer Parallax
```
Trigger: Continuous scroll
Effect: Multiple layers move at different speeds
  - Background: 0.3x speed
  - Mid-layer: 0.6x speed  
  - Foreground: 1.0x speed
Use for: Hero section depth effect
```

#### B3. Horizontal Pan on Vertical Scroll
```
Trigger: Section in viewport
Effect: Images shift horizontally as user scrolls vertically
Range: -50px to 50px
Use for: Wide images, carousel alternatives
```

### TYPE C: Progressive Data Reveals

#### C1. Chart Draw Animation
```
Trigger: Chart enters viewport
Animation: Bars grow from 0 to target height
Duration: 1.2s with spring physics
Easing: Spring (stiffness: 100, damping: 15)
Use for: Bar charts, comparison metrics
```

#### C2. Line Chart Path Drawing
```
Trigger: Chart enters viewport  
Animation: SVG path strokeDashoffset: 1 → 0
Duration: 1.5s
Easing: ease-in-out
Use for: Trend lines, growth charts
```

#### C3. Counter Animation
```
Trigger: Number enters viewport
Animation: Increment from 0 to target value
Duration: 2s
Easing: ease-out with round()
Use for: Statistics, KPIs, metrics
```

#### C4. Progress Bar Fill
```
Trigger: Bar enters viewport
Animation: Width: 0% → target%
Duration: 1s
Easing: ease-out
Use for: Skill bars, completion rates
```

### TYPE D: SVG & Diagram Animations

#### D1. Path Drawing (Lines & Connectors)
```
Trigger: Diagram enters viewport
Animation: strokeDasharray animation, sequential reveals
Duration: 0.8s per path
Delay: 0.2s between paths
Use for: Flowchart connectors, process diagrams
```

#### D2. Icon Pop-In
```
Trigger: Diagram section enters viewport
Animation: scale: 0 → 1 with bounce
Duration: 0.5s
Easing: Spring overshoot
Use for: Diagram nodes, milestone icons
```

#### D3. Morphing Shapes
```
Trigger: User scroll or hover
Animation: SVG path data morphs between states
Duration: 0.6s
Use for: Interactive diagrams, state transitions
```

### TYPE E: Hover & Micro-interactions

#### E1. Glassmorphic Card Lift
```
Trigger: Mouse enter
Animation: 
  - translateY: 0 → -8px
  - boxShadow: sm → xl
  - backdrop-blur: 8px → 12px
Duration: 0.3s
Use for: Service cards, tool cards, insight cards
```

#### E2. Magnetic Button
```
Trigger: Mouse proximity (within 100px)
Animation: Element translates toward cursor
Max distance: 12px
Easing: Spring (low damping)
Use for: Primary CTAs, navigation buttons
```

#### E3. Gradient Shift
```
Trigger: Mouse move over card
Animation: background-position shifts based on cursor
Range: -20% to 20%
Use for: Card backgrounds, hero sections
```

#### E4. Image Zoom
```
Trigger: Mouse enter
Animation: scale: 1 → 1.05, smooth clip-path
Duration: 0.4s
Use for: Insight images, team photos, gallery items
```

### TYPE F: Scroll-Driven Story Sequence

#### F1. Step Reveal Sequence
```
Trigger: Scroll position milestones
Animation: Each step fades in when previous completes
Progress: Shown in vertical timeline
Use for: Process breakdown, journey mapping
```

#### F2. Scroll Progress Bar
```
Trigger: Continuous scroll
Animation: Width increases 0-100% based on page scroll
Position: Fixed top or side
Use for: Page-level progress indicator
```

#### F3. Section Snap Scrolling
```
Trigger: Scroll threshold passed
Animation: Smooth snap to next section anchor
Duration: 0.8s
Easing: ease-in-out
Use for: Full-screen sections, chapter navigation
```

## Recommended Implementation Priority

### PHASE 1: Foundation (Essential)
1. ✓ Fade Up entrance animations (A1)
2. ✓ Background Parallax (B1)
3. ✓ Glassmorphic Card Lift (E1)
4. ✓ Scroll Progress Bar (F2)

### PHASE 2: Visual Interest (High Impact)
5. ✓ Stagger Children (A4)
6. ✓ Chart Draw Animation (C1)
7. ✓ Counter Animation (C3)
8. ✓ Path Drawing for diagrams (D1)

### PHASE 3: Polish (Enhanced UX)
9. ✓ Fade Slide alternating (A2)
10. ✓ Image Zoom on hover (E4)
11. ✓ Multi-Layer Parallax (B2)
12. ✓ Icon Pop-In (D2)

### PHASE 4: Advanced (Optional)
13. ○ Magnetic Button (E2)
14. ○ Gradient Shift (E3)
15. ○ Section Snap Scrolling (F3)
16. ○ Morphing Shapes (D3)

## Performance Budget
- **Max animations per section**: 8-10 elements
- **Intersection Observer threshold**: 0.2 (20% visible)
- **Animation duration range**: 0.3s - 1.5s
- **Stagger delay**: 0.1s - 0.15s
- **Target FPS**: 60fps (16.67ms per frame)

## Accessibility Compliance
```tsx
// All animations wrapped in motion check
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const animationProps = prefersReducedMotion
  ? { opacity: 1, y: 0 }
  : { 
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
    };
```

## Technical Stack
- **Animation**: motion/react (import from "motion/react")
- **Charts**: recharts
- **Scroll Detection**: IntersectionObserver API
- **Parallax**: CSS transforms + scroll event (debounced)
- **Icons**: lucide-react
- **Images**: ImageWithFallback component

## Next Steps: Choose Implementation Approach

### OPTION 1: Full Implementation (All Phases)
Implement all scroll effects and animations in sequence. Estimated time: 3 hours.

### OPTION 2: MVP Implementation (Phase 1-2 Only)
Focus on essential and high-impact animations. Estimated time: 1.5 hours.

### OPTION 3: Selective Implementation
Choose specific effect types from the list above. Provide section numbers.

## Approval Checklist
- [ ] Review scroll effect types (A-F)
- [ ] Approve implementation phases (1-4)
- [ ] Confirm performance budget acceptable
- [ ] Select implementation option (1, 2, or 3)
- [ ] Ready to begin Step 1: Foundation

**Status**: Awaiting approval to proceed with implementation
