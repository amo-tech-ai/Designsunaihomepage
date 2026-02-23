# Process Hero Section - Wireframe & Animation Design

## Document Info
- **Page:** Process Page (/process)
- **Section:** Hero Only
- **Status:** V12 Production Ready
- **Reference Image:** Available

---

## Layout Wireframe

### Desktop Structure (2-Column Split)

```
┌───────────────────────────────────────────────────────────────┐
│ [Dark Navy Background: #1A1A1A]                               │
│                                                                │
│ ┌─────────────────────────┐  ┌──────────────────────────────┐│
│ │ LEFT CONTENT (40%)      │  │ RIGHT DIAGRAM (60%)          ││
│ │                         │  │                              ││
│ │ [🔸 AMO AI PROCESS]     │  │         ┌─────────┐          ││
│ │                         │  │       ╱ 🚀Launch  ╲         ││
│ │ 8 Weeks.                │  │     ╱               ╲       ││
│ │ Not 8 Months.           │  │    │    8 Weeks     │       ││
│ │                         │  │ 🛡️ │   DELIVERY     │ 📱     ││
│ │ We move fast without... │  │Test│     CYCLE      │Design ││
│ │                         │  │    │                │       ││
│ │ [Start Your AI Brief]   │  │     ╲               ╱       ││
│ │ [See Success Stories]   │  │       ╲  💻Build   ╱         ││
│ │                         │  │         └─────────┘          ││
│ │ ─────────────────────   │  │                              ││
│ │ 20+    $2M+    300%     │  │  [Orange Arc Rotating]       ││
│ │ PROJECTS  GMV   ROI     │  │                              ││
│ └─────────────────────────┘  └──────────────────────────────┘│
└───────────────────────────────────────────────────────────────┘
```

### Mobile Structure (Stacked)

```
┌─────────────────────────────┐
│ [Dark Navy: #1A1A1A]        │
│                              │
│ [🔸 AMO AI PROCESS]         │
│                              │
│ 8 Weeks.                     │
│ Not 8 Months.                │
│                              │
│ Description text...          │
│                              │
│ [Start Your AI Brief]        │
│ [See Success Stories]        │
│                              │
│     ┌────────────┐           │
│    │  8 Weeks   │           │
│  🚀│  DELIVERY  │📱         │
│    │   CYCLE    │           │
│  🛡️│            │💻         │
│     └────────────┘           │
│                              │
│      20+    $2M+    300%     │
│    PROJECTS  GMV   ROI       │
└─────────────────────────────┘
```

---

## Content Specifications

### 1. Eyebrow Label
- Text: "AMO AI PROCESS"
- Color: Orange (#F59E0B)
- Size: 12px
- Style: Uppercase, bold, tracking-widest
- Icon: Small star or sparkle (optional)

### 2. Headline (2 Lines)
- **Line 1:** "8 Weeks."
  - Color: White
  - Font: Playfair Display (serif)
  - Size: 60-72px desktop, 48px mobile
  - Weight: Bold (700)

- **Line 2:** "Not 8 Months."
  - Color: Orange (#F59E0B)
  - Same font and size as Line 1
  - Weight: Bold (700)

### 3. Description
- Text: "We move fast without cutting corners—AI acceleration + expert delivery for measurable results."
- Color: Light gray (#D1D5DB)
- Font: Lora (serif)
- Size: 18-20px desktop, 16px mobile
- Line height: 1.6
- Max width: 500px

### 4. Primary CTA
- Text: "Start Your AI Brief"
- Icon: Arrow right
- Background: Orange (#F59E0B)
- Text color: Dark (#1A1A1A)
- Size: 16px bold
- Padding: 20px vertical, 40px horizontal
- Corners: Square (no border radius)

### 5. Secondary CTA
- Text: "See Success Stories"
- Background: Transparent
- Border: 1px solid white
- Text color: White
- Size: 16px bold
- Padding: 20px vertical, 40px horizontal
- Corners: Square

### 6. Stats Row (3 Columns)
- **Column 1:** "20+" / "PROJECTS DELIVERED"
- **Column 2:** "$2M+" / "MONTHLY GMV"
- **Column 3:** "300%" / "AVERAGE ROI"

**Styling:**
- Number: 36-48px, bold, white
- Label: 11px, uppercase, tracking-widest, gray (#9CA3AF)
- Divider: Thin horizontal line above stats (#374151)

---

## Circular Diagram Specifications

### Center Circle
- **Diameter:** 280px (desktop), 200px (mobile)
- **Border:** 2px solid dark gray (#374151)
- **Background:** Transparent

**Center Text:**
- "8 Weeks" - 48px bold white
- "DELIVERY CYCLE" - 12px uppercase orange (#F59E0B)

### Outer Ring
- **Diameter:** 400px (desktop), 280px (mobile)
- **Radius:** 180px (desktop), 120px (mobile)
- **Stroke:** 2px solid dark gray (#374151)
- **Fill:** None (transparent)

### 4 Icons Positioned Around Circle

**Icon Specifications:**
- Container: 48px circle
- Background: Dark (#1A1A1A)
- Border: 2px solid gray (#374151)
- Icon size: 24px
- Color: White (inactive), Orange (active)

**Positions (Clock-based):**
1. **Launch** - 1:30 position (45°)
   - Icon: Rocket
   - Label: "Launch" (below icon)

2. **Design** - 3:00 position (90°)
   - Icon: Layout/Frame
   - Label: "Design" (right of icon)

3. **Build** - 7:30 position (225°)
   - Icon: Code brackets
   - Label: "Build" (below icon)

4. **Test** - 9:00 position (270°)
   - Icon: Shield/Checkmark
   - Label: "Test" (left of icon)

**Label Styling:**
- Font: 12px, medium weight
- Color: Gray (#9CA3AF) inactive, Orange active
- Position: 8px away from icon container

---

## Animation Design Prompts

### Animation 1: Orange Arc Rotation

**Visual Description:**
- A glowing orange arc (90° length) travels clockwise around the outer circle
- The arc is the same color as the accent orange (#F59E0B)
- Width: 3px, slightly thicker than the gray circle
- Glow effect: Subtle shadow/blur (optional)

**Motion Behavior:**
- Starts at 12:00 position (top)
- Rotates clockwise continuously
- Completes full 360° rotation every 8 seconds
- Movement: Smooth and constant (linear easing)
- Never stops - infinite loop

**Keyframes (Conceptual):**
1. 0 seconds - Arc at top (0°)
2. 2 seconds - Arc at right (90°)
3. 4 seconds - Arc at bottom (180°)
4. 6 seconds - Arc at left (270°)
5. 8 seconds - Arc back at top (360° = 0°)
6. Loop repeats

**Visual Reference:**
Think of a progress indicator or loading arc that continuously sweeps around the circle, like a radar scanner or clock hand.

---

### Animation 2: Icon Pulse When Arc Passes

**Trigger Condition:**
When the orange arc reaches/passes an icon's position (within 20-30° range)

**Visual Changes:**
1. Icon container scales up slightly (grows larger)
2. Border changes from gray to orange
3. Icon color changes from white to orange
4. Subtle glow appears around the container (orange shadow)
5. Label text changes from gray to orange

**Motion Behavior:**
- Scale: Normal size → 1.15x larger → back to normal
- Duration: 400 milliseconds (fast but noticeable)
- Easing: Smooth bounce (ease-out)
- Timing: Activates when arc is ±15° from icon position

**After Arc Passes:**
- Icon returns to normal state after 1 second
- All colors revert to gray/white
- Scale returns to 1.0
- Glow fades out

**Visual Reference:**
Like a ripple effect or heartbeat pulse - the icon "reacts" to the arc passing by, as if the arc is activating each station.

---

### Animation 3: Hero Section Entrance (On Page Load)

**Sequence (Staggered Fade-In):**

1. **Eyebrow label appears first**
   - Fade in from 0 to 100% opacity
   - Duration: 500ms
   - Delay: 0ms

2. **Headline lines fade in**
   - "8 Weeks." then "Not 8 Months."
   - Fade in + slight upward slide (20px)
   - Duration: 600ms each
   - Delay: Line 1 at 200ms, Line 2 at 400ms

3. **Description text**
   - Fade in
   - Duration: 500ms
   - Delay: 600ms

4. **CTA buttons**
   - Fade in together
   - Duration: 400ms
   - Delay: 800ms

5. **Circular diagram**
   - Fade in entire diagram
   - Duration: 800ms
   - Delay: 400ms (starts slightly before text CTAs)

6. **Arc rotation begins**
   - Starts only after diagram is fully visible
   - Delay: 1200ms total (after diagram fade completes)

7. **Stats row**
   - Fade in
   - Optional: Numbers count up from 0
   - Duration: 600ms
   - Delay: 1000ms

**Visual Reference:**
Elements appear in reading order (top to bottom, left to right), creating a smooth storytelling flow. Nothing feels rushed or jarring.

---

### Animation 4: Button Hover States

**Primary Button (Orange):**
- Default: Solid orange background
- Hover: Background lightens to #FCD34D
- Arrow icon slides 4px to the right
- Transition: 200ms smooth

**Secondary Button (Border):**
- Default: Transparent with white border
- Hover: White background fills in, text turns dark
- Transition: 200ms smooth
- Optional: Scale up to 1.02x

**Visual Reference:**
Subtle but responsive - users feel the interface responding to their actions without overwhelming motion.

---

## Responsive Breakpoints

### Desktop (≥1024px)
- Two-column layout (40% content, 60% diagram)
- Circular diagram: 400px diameter
- Headline: 72px
- Stats: Horizontal 3-column row

### Tablet (768-1023px)
- Two-column maintained but narrower
- Circular diagram: 320px diameter
- Headline: 60px
- Stats: Horizontal 3-column (tighter spacing)

### Mobile (<768px)
- Single column, stacked vertically
- Content comes first, diagram below
- Circular diagram: 280px diameter, centered
- Headline: 48px
- Stats: Vertical stack or 3-column grid
- CTAs: Full width, stacked

---

## Color Palette

### Primary Colors
- Dark background: #1A1A1A (or #1E293B for navy)
- Accent orange: #F59E0B
- Light orange (hover): #FCD34D

### Text Colors
- Headline: #FFFFFF (white)
- Body text: #D1D5DB (light gray)
- Labels: #9CA3AF (medium gray)
- Accent text: #F59E0B (orange)

### UI Elements
- Circle stroke: #374151 (dark gray)
- Icon inactive: #FFFFFF (white)
- Icon active: #F59E0B (orange)
- Border gray: #374151

---

## Design Principles

### 1. Motion Purpose
- Arc rotation = Continuous progress/delivery cycle
- Icon pulses = Phase activation/milestone moments
- Entrance animations = Professional polish, not distraction
- Hover states = Responsive feedback

### 2. Visual Hierarchy
- Headline dominates (largest, boldest)
- Orange color draws eye to "Not 8 Months" and diagram
- CTAs clearly actionable (high contrast)
- Stats provide credibility without competing

### 3. Calm Luxury Aesthetic
- Generous whitespace (not cramped)
- Minimal color palette (dark, white, orange)
- Square corners (no rounded buttons/cards)
- Serif fonts for elegance (Playfair)
- Subtle animations (refined, not flashy)

---

## Implementation Checklist

### Structure
- [ ] Dark background section
- [ ] Two-column grid (desktop)
- [ ] Single column stack (mobile)
- [ ] Content left, diagram right
- [ ] Stats row at bottom

### Content Elements
- [ ] Eyebrow label styled
- [ ] Two-line headline (white + orange)
- [ ] Description text
- [ ] Two CTA buttons (orange + border)
- [ ] Stats (3 columns)

### Circular Diagram
- [ ] Center circle with text
- [ ] Outer circle (thin stroke)
- [ ] 4 icons positioned correctly
- [ ] Icon labels placed
- [ ] Icons have hover states

### Animations
- [ ] Orange arc rotates smoothly (8s loop)
- [ ] Icons pulse when arc passes
- [ ] Icon colors change (gray → orange)
- [ ] Border highlights on active icons
- [ ] Entrance sequence on page load
- [ ] Button hover effects

### Responsive
- [ ] Desktop layout works (2-column)
- [ ] Tablet layout scales properly
- [ ] Mobile switches to stacked
- [ ] Diagram resizes appropriately
- [ ] Touch-friendly buttons (44px min)

### Polish
- [ ] No layout shift during load
- [ ] Animations run at 60fps
- [ ] Smooth transitions (no jank)
- [ ] Colors match design system
- [ ] Typography hierarchy clear

---

## Animation Timing Summary

| Element | Duration | Delay | Easing |
|---------|----------|-------|--------|
| Eyebrow | 500ms | 0ms | Ease-out |
| Headline L1 | 600ms | 200ms | Ease-out |
| Headline L2 | 600ms | 400ms | Ease-out |
| Description | 500ms | 600ms | Ease-out |
| CTAs | 400ms | 800ms | Ease-out |
| Diagram | 800ms | 400ms | Ease-out |
| Arc starts | — | 1200ms | Linear (continuous) |
| Stats | 600ms | 1000ms | Ease-out |

**Arc Rotation:**
- Duration: 8 seconds per full rotation
- Loop: Infinite
- Easing: Linear (constant speed)

**Icon Pulse:**
- Duration: 400ms
- Trigger: When arc is ±15° from icon
- Easing: Ease-out
- Reset: 1 second after arc passes

---

## Quick Reference

**Key Measurements:**
- Hero padding: 120px vertical (desktop), 80px (mobile)
- Content max width: 500px
- Diagram desktop: 400px diameter
- Diagram mobile: 280px diameter
- Icon containers: 48px
- Icon size: 24px
- Arc width: 3px
- Circle stroke: 2px

**Key Colors:**
- Dark: #1A1A1A
- Orange: #F59E0B
- White: #FFFFFF
- Gray text: #D1D5DB
- Gray UI: #374151

**Key Fonts:**
- Headlines: Playfair Display (serif)
- Body: Lora (serif)
- UI/Labels: Inter (sans-serif)

---

**End of Document**
