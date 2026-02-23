# How It Works - Cursor Animation Documentation

## Section Overview
- **Location:** Home Page V6
- **Section:** "How It Works"
- **Feature:** Animated Cursor Pointer

---

## Layout Structure

### Left Column (40%)
- Eyebrow: "HOW IT WORKS" (orange, uppercase)
- Headline: "The smarter way to build your startup"
- Numbered steps list:
  1. **Scope** - Start your project description
  2. **Blueprint** - Design and planning phase
  3. **Dashboard** - Project tracking interface

### Right Column (60%)
- Large interface preview mockup
- Shows "Set Your Budget & Timeline" screen
- Budget selection grid with 4 options
- Timeline options below
- "Finish" button at bottom
- Pagination dots (step indicator)

---

## Cursor Animation Specification

### Animation Purpose
Demonstrates interactive wizard flow by simulating user clicks through the interface.

### Animation Behavior

**1. Cursor Appears**
- A mouse cursor pointer appears on screen
- Position: Near interactive elements in the mockup
- Style: Standard pointer cursor icon

**2. Movement Pattern**
- Cursor moves smoothly across the interface mockup
- Travels to clickable elements (budget buttons, timeline options)
- Movement: Smooth bezier curve path (natural motion)
- Speed: Moderate pace (not too fast, easy to follow)

**3. Click Interactions**
- Cursor hovers over a budget option (e.g., "$15K-$30K")
- Pauses briefly (500-800ms)
- Simulates click with subtle scale animation
- Selected button highlights (orange border/fill)
- Cursor moves to next element

**4. Sequence Flow**
- Click budget option → Button highlights
- Move to timeline option → Click
- Move to "Finish" button → Click
- Screen transitions to next step (pagination dot changes)
- Loop repeats or advances to next interface view

**5. Timing**
- Total sequence: 6-8 seconds
- Pause on hover: 500-800ms per element
- Movement between elements: 800-1200ms
- Loop: Continuous or timed intervals

### Visual Details

**Cursor Appearance**
- Standard pointer icon (arrow)
- Color: Dark gray or black
- Size: 24px (slightly larger for visibility)
- Optional: Subtle shadow or glow for contrast

**Click Feedback**
- Cursor scales down slightly on click (0.9x)
- Quick spring back to normal size
- Duration: 150-200ms

**Element Response**
- Button scales or highlights when clicked
- Color change or border emphasis
- Smooth transition (200-300ms)

### States

**Idle State**
- Cursor gently bobs or pulses to indicate it's interactive
- Subtle opacity fade (optional)

**Moving State**
- Cursor travels along curved path
- Smooth acceleration and deceleration

**Hovering State**
- Cursor pauses over element
- Element shows hover state (subtle highlight)

**Clicking State**
- Cursor compresses slightly
- Element responds with selection visual

---

## Design Principles

### 1. Clear Demonstration
- Shows users exactly how the wizard works
- Reduces cognitive load (they see before they interact)
- Builds confidence in the flow

### 2. Natural Motion
- Cursor moves like a real user would
- Not too fast (users can follow)
- Not too slow (maintains engagement)
- Smooth curves, not straight lines

### 3. Attention Direction
- Guides viewer's eye through the interface
- Highlights key interaction points
- Shows cause and effect (click → result)

---

## Implementation Notes

### Loop Behavior
- Option 1: Continuous loop through same interactions
- Option 2: Cycle through different user scenarios
- Option 3: Play once on viewport enter, replay on re-enter

### Responsiveness
- **Desktop:** Full animation with cursor visible
- **Tablet:** Same animation, scaled proportionally
- **Mobile:** Consider auto-playing interface transitions without cursor (touch context)

### Performance
- Animate using transform properties for smooth 60fps
- Pause animation when section not in viewport
- Lightweight cursor SVG or CSS-based pointer

---

## Animation Sequence Example

1. **Scene 1: Budget Selection (3s)**
   - Cursor enters from left
   - Moves to "$15K-$30K" button
   - Hovers (500ms)
   - Clicks
   - Button highlights orange

2. **Scene 2: Timeline Selection (2s)**
   - Cursor moves down to "4-8 wks" option
   - Hovers (500ms)
   - Clicks
   - Option highlights

3. **Scene 3: Completion (2s)**
   - Cursor moves to "Finish" button
   - Hovers (500ms)
   - Clicks
   - Transition to next screen or loop reset

4. **Transition (1s)**
   - Fade out or slide to next step
   - Pagination dot updates
   - Optional: Restart from step 1 or show step 2

---

## Checklist

### Visual Elements
- [ ] Cursor icon visible and clear
- [ ] Cursor sized appropriately (24px)
- [ ] Smooth curved motion paths
- [ ] Natural acceleration/deceleration

### Interactions
- [ ] Hover states shown on elements
- [ ] Click feedback visible (scale/color)
- [ ] Elements respond to cursor actions
- [ ] Timing feels natural (not rushed)

### Flow
- [ ] Sequence makes logical sense
- [ ] User can follow the animation
- [ ] Loop is seamless (no jarring restart)
- [ ] Pagination indicators update correctly

### Performance
- [ ] Animation runs at 60fps
- [ ] No jank or stuttering
- [ ] Pauses when off-screen (performance)
- [ ] Lightweight assets

### Responsive
- [ ] Works on desktop
- [ ] Scales for tablet
- [ ] Alternative for mobile (if needed)

---

## Quick Reference

**Key Timings:**
- Hover pause: 500-800ms
- Movement: 800-1200ms
- Click feedback: 150-200ms
- Total sequence: 6-8 seconds

**Cursor Size:** 24px  
**Motion:** Bezier curves (natural)  
**Loop:** Continuous or interval-based  
**Performance:** 60fps target

---

**End of Document**
