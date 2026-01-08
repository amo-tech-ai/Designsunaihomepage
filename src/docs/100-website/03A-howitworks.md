# HOW IT WORKS — TRANSITIONS & ANIMATIONS

**Purpose:** Define screen change mechanics, scroll triggers, and animation choreography  
**Focus:** Auto-advance, manual navigation, scroll-based activation

---

## TRANSITION MECHANICS

### Auto-Advance System
**Timer Duration:** 5 seconds per screen  
**Loop Behavior:** Screen 3 → Screen 1 (infinite)  
**Pause Trigger:** Mouse hover over card area  
**Resume Trigger:** Mouse leaves card area

**Transition Sequence:**
1. Display current screen (5 seconds)
2. Fade out current screen (300ms)
3. Update active step indicator (instant)
4. Fade in new screen (300ms)
5. Slide new card from right (400ms)
6. Restart timer

---

## SCROLL ACTIVATION

### Trigger Point
**Viewport Position:** Section enters viewport at 30% from bottom  
**Behavior:** Animations trigger once per page load  
**Repeat:** No repeat on scroll up/down

### Initial State (Before Scroll)
- All content: Opacity 0
- All content: TranslateY 40px
- No animations running

### Activated State (After Scroll)
- Eyebrow fades in first (200ms delay)
- Headline fades in second (300ms delay)
- Steps list fades in third (400ms delay)
- Card slides in from right (500ms delay)
- Auto-advance timer starts after card animation completes

---

## SCREEN 1 → SCREEN 2 TRANSITION

### Step 1: Fade Out (300ms)
- Current card (Scope): Opacity 1 → 0
- Current card: TranslateX 0 → -20px (subtle left drift)
- Easing: ease-in

### Step 2: State Update (Instant)
- Step 01 indicator: Orange → Gray, Bold → Regular
- Step 02 indicator: Gray → Orange, Regular → Bold
- Dot 1: Orange/Large → Gray/Small
- Dot 2: Gray/Small → Orange/Large

### Step 3: Fade In (300ms)
- New card (Blueprint): Opacity 0 → 1
- New card: TranslateX 40px → 0 (slide from right)
- Easing: ease-out

### Step 4: Timer Reset
- Restart 5-second countdown
- Monitor for hover pause

---

## SCREEN 2 → SCREEN 3 TRANSITION

### Step 1: Fade Out (300ms)
- Blueprint card: Opacity 1 → 0
- Blueprint card: TranslateX 0 → -20px

### Step 2: State Update (Instant)
- Step 02: Orange → Gray
- Step 03: Gray → Orange
- Dot 2: Orange/Large → Gray/Small
- Dot 3: Gray/Small → Orange/Large

### Step 3: Fade In (300ms)
- Dashboard card: Opacity 0 → 1
- Dashboard card: TranslateX 40px → 0

### Step 4: Timer Reset
- Restart 5-second countdown

---

## SCREEN 3 → SCREEN 1 TRANSITION (LOOP)

### Step 1: Fade Out (300ms)
- Dashboard card: Opacity 1 → 0
- Dashboard card: TranslateX 0 → -20px

### Step 2: State Update (Instant)
- Step 03: Orange → Gray
- Step 01: Gray → Orange
- Dot 3: Orange/Large → Gray/Small
- Dot 1: Gray/Small → Orange/Large

### Step 3: Fade In (300ms)
- Scope card: Opacity 0 → 1
- Scope card: TranslateX 40px → 0

### Step 4: Loop Continues
- No end state, infinite loop

---

## MANUAL NAVIGATION (DOT CLICKS)

### User Clicks Dot 2 (While on Screen 1)
**Immediate Actions:**
1. Pause auto-advance timer
2. Fade out current card (200ms, faster than auto)
3. Update step indicators instantly
4. Fade in target card (200ms)
5. Restart auto-advance timer from clicked screen

### User Clicks Dot 1 (While on Screen 3)
**Backward Navigation:**
1. Same fade-out sequence (200ms)
2. Card slides from LEFT instead of right (reverses direction)
3. TranslateX starts at -40px → 0
4. All other mechanics identical

### User Clicks Current Dot
**No Action:**
- Ignore click
- No animation
- Timer continues

---

## HOVER PAUSE BEHAVIOR

### Mouse Enters Card Area
1. Freeze timer at current position
2. No visual change to card
3. Show subtle indicator (optional): "Paused" badge fades in
4. Transitions currently in progress complete normally

### Mouse Leaves Card Area
1. Resume timer from frozen position
2. Hide pause indicator (if shown)
3. Continue normal auto-advance

### During Transition
- If user hovers during transition, pause after transition completes
- Don't interrupt mid-animation

---

## KEYBOARD NAVIGATION

### Right Arrow Key
- Advance to next screen (same as auto-advance)
- Reset timer
- Focus remains on section

### Left Arrow Key
- Go to previous screen
- Card slides from left (TranslateX -40px → 0)
- Reset timer

### Tab Key
- Cycle through pagination dots
- Highlight focused dot with orange ring
- Focus ring: 2px solid orange-500, 4px offset

### Enter/Space on Focused Dot
- Activate that screen
- Same behavior as click

---

## MOBILE SWIPE GESTURES

### Swipe Left (Touch)
- Advance to next screen
- Card exits to left (TranslateX 0 → -100%)
- New card enters from right (TranslateX 100% → 0)
- Faster animation: 250ms (feels more responsive)

### Swipe Right (Touch)
- Go to previous screen
- Card exits to right (TranslateX 0 → 100%)
- New card enters from left (TranslateX -100% → 0)

### Swipe Threshold
- Minimum swipe distance: 50px
- Velocity threshold: 0.3px/ms
- If below threshold: snap back to current screen (elastic animation)

---

## ANIMATION EASING FUNCTIONS

### Fade Out
- Easing: `ease-in`
- Curve: Starts slow, ends fast
- Duration: 300ms

### Fade In
- Easing: `ease-out`
- Curve: Starts fast, ends slow
- Duration: 300ms

### Slide In
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Curve: Smooth deceleration with slight overshoot
- Duration: 400ms

### Elastic Snap Back (Failed Swipe)
- Easing: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- Curve: Bounces back
- Duration: 500ms

---

## PERFORMANCE OPTIMIZATION

### GPU Acceleration
- Use `transform` properties only (translateX, opacity)
- Avoid animating: width, height, margin, padding
- Enable: `will-change: transform, opacity` on cards

### Reduced Motion
- Check user preference: `prefers-reduced-motion`
- If enabled: Disable auto-advance, instant transitions (100ms), no slide effects
- Keep manual navigation functional

### Animation Frame Timing
- Auto-advance uses `requestAnimationFrame` for smooth 60fps
- Pause/resume doesn't cause jank
- Timer runs independently of render cycle

---

## PROMPTS

### PROMPT 1 — AUTO-ADVANCE TIMER
Create a 5-second auto-advance timer that cycles through 3 screens infinitely (Scope → Blueprint → Dashboard → Scope). After displaying each screen for 5 seconds, trigger a transition to the next screen. The timer should be visible to the system but not to users. Reset the timer whenever a manual navigation occurs (dot click, arrow key, swipe). Pause the timer when user hovers over the card area, resume when hover ends.

### PROMPT 2 — SCREEN TRANSITION CHOREOGRAPHY
When transitioning between screens, execute this sequence: First, fade out the current card over 300ms while sliding it 20px to the left (opacity 1→0, translateX 0→-20px, ease-in). Immediately update the step indicators and pagination dots (active step changes from gray to orange, becomes bold; previous step becomes gray and regular weight). Then fade in the new card over 300ms while sliding it from 40px right to center (opacity 0→1, translateX 40px→0, ease-out). The entire transition should feel smooth and take 600ms total.

### PROMPT 3 — SCROLL-TRIGGERED ACTIVATION
When the How It Works section enters the viewport (30% from bottom), trigger the initial animations in sequence: Eyebrow appears first with 200ms delay (fade in from opacity 0 to 1, translateY 20px to 0). Headline appears at 300ms delay with same animation. Steps list appears at 400ms delay. Card slides in from right at 500ms delay (translateX 60px to 0, opacity 0 to 1, duration 500ms). After all animations complete, start the auto-advance timer. This sequence only happens once per page load.

### PROMPT 4 — MANUAL NAVIGATION MECHANICS
When user clicks a pagination dot, immediately check which screen is currently active and which screen was clicked. If clicking a forward dot (higher number), fade out current card and slide it left, then fade in new card sliding from right. If clicking a backward dot (lower number), reverse the direction: card exits right, new card enters from left. For keyboard navigation, right arrow advances forward (right-to-left motion), left arrow goes backward (left-to-right motion). Both should feel instant (200ms transitions) and reset the auto-advance timer.

### PROMPT 5 — HOVER PAUSE SYSTEM
Track mouse position over the card container area. When mouse enters, freeze the auto-advance timer at its current position without resetting it to zero. Keep the screen displayed indefinitely while hovering. When mouse leaves the card area, resume the timer from where it paused (e.g., if it was paused at 3.2 seconds, resume counting from 3.2 to 5.0). If a transition is currently in progress when hover occurs, allow the transition to complete first, then pause. Don't interrupt mid-animation.

### PROMPT 6 — MOBILE SWIPE GESTURES
On touch devices, detect horizontal swipe gestures on the card area. When user swipes left (finger moves left across screen), transition to next screen with faster animations (250ms). Card exits to left (translateX 0 to -100%), new card enters from right (translateX 100% to 0). When user swipes right, reverse the direction. Set a minimum swipe distance of 50px and velocity of 0.3px/ms to trigger navigation. If swipe doesn't meet threshold, animate the card back to center with elastic easing over 500ms. Swipes should feel more responsive than auto-advance.

### PROMPT 7 — STEP INDICATOR SYNCHRONIZATION
Keep the left sidebar step indicators perfectly synchronized with the active screen. When Screen 1 (Scope) is active, Step 01 displays an orange square marker (8px, rounded), bold text, and full opacity. Steps 02 and 03 display gray text at 40% opacity with regular weight. When transitioning to Screen 2, instantly swap these states: Step 01 becomes gray/40%/regular, Step 02 becomes orange/bold/100%. The same pattern applies to Screen 3. This state change happens instantly (0ms) during the transition, between fade-out and fade-in animations.

### PROMPT 8 — PAGINATION DOT BEHAVIOR
Display 3 pagination dots below the cards. The active dot is orange (orange-500), 12px diameter, with full opacity. Inactive dots are gray (neutral-300), 8px diameter, 50% opacity. When transitioning screens, animate the dot sizes and colors smoothly over 200ms (ease-in-out). Clicking a dot navigates to that screen immediately. On keyboard focus, add a 2px orange ring around the dot with 4px offset. Dots should be large enough for touch targets on mobile (minimum 44px tap area with invisible padding).

---

## SUCCESS CRITERIA

### Functional Requirements
- [ ] Auto-advance cycles every 5 seconds
- [ ] Infinite loop works (Screen 3 → Screen 1)
- [ ] Hover over card pauses timer
- [ ] Mouse leave resumes timer from paused position
- [ ] Dot clicks navigate to correct screen
- [ ] Arrow keys navigate (right=next, left=previous)
- [ ] Swipe left/right works on mobile
- [ ] Failed swipes snap back elastically
- [ ] Scroll into view triggers initial animations
- [ ] Initial animations only play once

### Visual Requirements
- [ ] Screen transitions are smooth (no jank)
- [ ] Cards slide from right on forward navigation
- [ ] Cards slide from left on backward navigation
- [ ] Step indicators sync with active screen
- [ ] Pagination dots sync with active screen
- [ ] Active step is orange/bold
- [ ] Inactive steps are gray/regular
- [ ] Active dot is larger and orange
- [ ] Transitions complete in 600ms
- [ ] Mobile swipes complete in 250ms

### Performance Requirements
- [ ] Animations run at 60fps
- [ ] No layout shift during transitions
- [ ] GPU acceleration enabled (transform/opacity only)
- [ ] Reduced motion preference respected
- [ ] Timer uses requestAnimationFrame
- [ ] No memory leaks from timer
- [ ] Smooth on mobile devices (iOS Safari, Android Chrome)

### Accessibility Requirements
- [ ] Keyboard navigation works (arrows, tab, enter)
- [ ] Focus states visible (orange ring)
- [ ] Screen reader announces screen changes
- [ ] Pause button available (or hover pause is sufficient)
- [ ] Reduced motion disables auto-advance
- [ ] ARIA live region announces active screen
- [ ] All controls have ARIA labels

### User Experience Requirements
- [ ] Transitions feel natural, not jarring
- [ ] Auto-advance timing feels right (not too fast/slow)
- [ ] Hover pause is intuitive
- [ ] Manual navigation feels instant
- [ ] Swipe gestures feel responsive
- [ ] Direction of slide matches expectation
- [ ] No confusion about which screen is active
- [ ] Clear visual feedback on all interactions

### Edge Cases Handled
- [ ] User clicks same dot twice (ignored)
- [ ] User hovers during transition (pause after complete)
- [ ] User swipes quickly multiple times (debounced)
- [ ] User leaves page and returns (timer resets)
- [ ] User navigates with keyboard while auto-advancing (timer resets)
- [ ] User resizes window during transition (no break)
- [ ] User switches tabs (pause timer, resume on return)
- [ ] Initial scroll trigger works on page reload

---

## TIMING REFERENCE TABLE

| Event | Duration | Delay | Easing |
|-------|----------|-------|--------|
| Auto-advance display | 5000ms | 0ms | - |
| Card fade out | 300ms | 0ms | ease-in |
| Card fade in | 300ms | 300ms | ease-out |
| Card slide in | 400ms | 300ms | cubic-bezier |
| Manual nav fade | 200ms | 0ms | ease-in-out |
| Mobile swipe | 250ms | 0ms | ease-out |
| Elastic snap back | 500ms | 0ms | cubic-bezier |
| Dot size change | 200ms | 0ms | ease-in-out |
| Scroll: Eyebrow | 300ms | 200ms | ease-out |
| Scroll: Headline | 300ms | 300ms | ease-out |
| Scroll: Steps | 300ms | 400ms | ease-out |
| Scroll: Card | 500ms | 500ms | cubic-bezier |

---

**END OF DOCUMENT**
