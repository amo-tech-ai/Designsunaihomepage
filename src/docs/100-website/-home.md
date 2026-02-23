# HOME PAGE STYLE GUIDE
**Sun AI Agency | V11 Calm Luxury Editorial**

---

## DESIGN PHILOSOPHY

**Core Principles:**
- Calm luxury editorial aesthetic
- Generous whitespace (never cramped)
- Large, confident typography# HOW IT WORKS — DESIGN PROMPTS (V6)

**Purpose:** Copy-paste prompts for designers to recreate the scroll-driven "How It Works" section  
**Reference:** https://spruce-ahead-69656011.figma.site/v6  
**Design System:** Calm Luxury aesthetic, glassmorphism, orange accent (#F97316)

---

## 1. Master Section Prompt

```
Design a scroll-driven storytelling section titled "HOW IT WORKS" with the following specifications:

LAYOUT:
- Create a two-column layout using a 40/60 split (left/right)
- Total scroll height: approximately 4 viewport heights
- Left column: sticky positioning, anchored to top 10vh
- Right column: fixed positioning, pinned to viewport center-right
- Section background: neutral-50 (#FAFAFA)
- Container max-width: 1440px, centered

LEFT COLUMN CONTENT (Sticky):
- Eyebrow text: "HOW IT WORKS" 
  - Color: orange-600 (#F97316)
  - Size: 12px
  - Weight: 600
  - Transform: uppercase
  - Letter spacing: 0.05em
  
- Headline: "The smarter way to build your startup"
  - Color: neutral-900
  - Size: 48px (desktop), 36px (tablet)
  - Weight: 600
  - Line height: 1.2
  - This text remains static across all scroll states

- Step list (vertical, 32px spacing between items):
  1. Scope
  2. Budget
  3. Blueprint
  4. Dashboard
  
  Each step includes:
  - Step number (e.g., "1.") in medium gray
  - Step title (e.g., "Scope") in bold
  - Description paragraph (14px, line-height 1.6, neutral-600)
  - Orange square accent marker (8px × 8px, rounded corners) appears next to active step
  
  Active state: Bold text, full opacity, orange marker visible
  Inactive state: Regular weight, 40% opacity, no marker

RIGHT COLUMN CONTENT (Fixed):
- Single app window container (560px × 400px)
- White background (#FFFFFF)
- Border: 1px solid neutral-200
- Border radius: 16px
- Shadow: subtle (0px 8px 24px rgba(0,0,0,0.08))
- Padding: 40px
- Content crossfades between 4 states based on scroll position

SCROLL BEHAVIOR:
- Divide section into 4 equal segments (0-25%, 25-50%, 50-75%, 75-100%)
- Each segment activates one step in sequence
- When scroll reaches segment threshold, trigger:
  1. Left column step emphasis changes
  2. Right panel content crossfades to new state
  3. Cursor animation choreography begins

VISUAL TONE:
- Calm, premium, executive-grade aesthetic
- Minimal animation (no bounce, no aggressive easing)
- Generous white space
- High contrast for readability
- Professional, trustworthy, modern
```

**Wireframe: Master Layout**

```
┌─────────────────────────────────────────────────────────────┐
│                     [4 viewport heights]                     │
│                                                               │
│  ┌──────────────────┐        ┌─────────────────────────┐   │
│  │   STICKY LEFT    │        │    FIXED RIGHT PANEL    │   │
│  │   (40% width)    │        │     (60% width)         │   │
│  │                  │        │                         │   │
│  │  HOW IT WORKS    │        │  ┌───────────────────┐ │   │
│  │  [orange]        │        │  │                   │ │   │
│  │                  │        │  │   APP WINDOW      │ │   │
│  │  The smarter way │        │  │   560×400px       │ │   │
│  │  to build your   │        │  │                   │ │   │
│  │  startup         │        │  │   [Crossfading    │ │   │
│  │  [48px, static]  │        │  │    content based  │ │   │
│  │                  │        │  │    on scroll]     │ │   │
│  │  1. Scope [●]    │        │  │                   │ │   │
│  │     [bold]       │        │  │   + Cursor        │ │   │
│  │     Description  │        │  │     overlay       │ │   │
│  │                  │        │  │                   │ │   │
│  │  2. Budget       │        │  └───────────────────┘ │   │
│  │     [gray 40%]   │        │                         │   │
│  │                  │        │   [Progress dots]       │   │
│  │  3. Blueprint    │        └─────────────────────────┘   │
│  │     [gray 40%]   │                                       │
│  │                  │                                       │
│  │  4. Dashboard    │                                       │
│  │     [gray 40%]   │                                       │
│  │                  │                                       │
│  └──────────────────┘                                       │
│                                                               │
│                    [Scroll continues down]                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Step-Level Design Prompts

### Prompt A — Scope / Project Wizard

```
Design the FIRST step of the "How It Works" section (active when scroll is 0-25%).

LEFT COLUMN BEHAVIOR:
- Step 1 title "Scope" is bold (weight: 600), full opacity
- Orange square marker (8×8px) appears to the left of "1."
- Description text below reads:
  "Start your project. Use AI or work with an expert to build a custom scope to share with our engineers."
  (14px, neutral-600, line-height 1.6)
- Steps 2, 3, 4 remain visible but grayed out (40% opacity, regular weight)

RIGHT PANEL UI ELEMENTS:
Create a card titled "Project Scope Wizard" with:

Header section:
- Title: "Project Scope Wizard" (16px, medium weight, neutral-900)
- Subtitle: "Define your project type" (12px, neutral-500)

Chip grid (2 rows × 4 columns, 12px gap):
Row 1: MVP | AI Product | Automation | Mobile App
Row 2: Dashboard | CRM | Landing Page | [empty]

Chip specifications:
- Default state: white background, neutral-700 text, 1px neutral-300 border
- Selected state: orange-500 (#F97316) background, white text
- Size: auto-width with 16px horizontal padding, 36px height
- Border radius: 8px
- Font: 14px, medium weight

Pre-selected chip: "AI Product" (orange fill, white text)

Continue button:
- Position: bottom-center of card
- Label: "Continue"
- Style: dark blue (#1E3A8A) background, white text
- Size: 120px × 44px
- Border radius: 8px

Progress dots:
- 4 dots total, 8px diameter each
- Dot 1: orange-500 (active)
- Dots 2, 3, 4: neutral-300 (inactive)
- Position: centered below button, 8px spacing

CURSOR BEHAVIOR:
When this step becomes active:
1. Cursor fades in at screen center (200ms)
2. Cursor moves to "AI Product" chip using curved bezier path (600ms)
3. Cursor hovers over chip (300ms pause)
4. Cursor clicks with ripple effect (orange glow, 300ms)
5. Chip highlights in orange
6. Cursor pauses (400ms)

TRANSITION TO NEXT STEP:
When scroll reaches 25% threshold:
- Current card content fades out (opacity 1 → 0, 400ms)
- Step 1 text de-emphasizes (bold → regular, full → 40% opacity)
- Step 2 text emphasizes (regular → bold, 40% → full opacity)
- Budget state fades in (opacity 0 → 1, 400ms)
```

**Wireframe: Scope Step**

```
RIGHT PANEL (560×400px):
┌─────────────────────────────────────────┐
│                                         │
│  Project Scope Wizard                   │
│  Define your project type               │
│  [12px gray subtitle]                   │
│                                         │
│  ┌─────┐ ┌────────────┐ ┌──────────┐  │
│  │ MVP │ │ AI Product │ │Automation│  │
│  └─────┘ └────────────┘ └──────────┘  │
│           [ORANGE FILL]                 │
│                                         │
│  ┌─────┐ ┌──────────┐ ┌──────────┐    │
│  │Mobile│ │Dashboard │ │   CRM    │    │
│  │ App  │ └──────────┘ └──────────┘    │
│  └─────┘                                │
│                                         │
│  ┌────────────┐ ┌───────────────────┐  │
│  │Landing Page│ │                   │  │
│  └────────────┘ └───────────────────┘  │
│                                         │
│           ┌──────────┐                  │
│           │ Continue │                  │
│           └──────────┘                  │
│           [Dark blue]                   │
│                                         │
│             ● ○ ○ ○                     │
│         [Progress dots]                 │
│                                         │
│         [Cursor hovering over           │
│          "AI Product" chip]             │
└─────────────────────────────────────────┘
```

---

### Prompt B — Budget & Timeline

```
Design the SECOND step of the "How It Works" section (active when scroll is 25-50%).

LEFT COLUMN BEHAVIOR:
- Step 2 title "Budget" is now bold (weight: 600), full opacity
- Orange square marker (8×8px) appears to the left of "2."
- Description text below reads:
  "Set your budget and timeline. Get instant estimates based on project scope and team availability."
  (14px, neutral-600, line-height 1.6)
- Steps 1, 3, 4 remain visible but grayed out (40% opacity, regular weight)

RIGHT PANEL UI ELEMENTS:
Create a card titled "Budget & Timeline" with:

Header section:
- Title: "Budget & Timeline" (16px, medium weight, neutral-900)
- Subtitle: "Configure your project parameters" (12px, neutral-500)

Budget selector:
- Label: "BUDGET RANGE" (10px, uppercase, neutral-500, letter-spacing 0.05em)
- Slider component:
  - Min: $10,000 | Max: $100,000
  - Current selection: $30,000 - $50,000 (displayed prominently, 24px bold)
  - Track: neutral-200
  - Active track: orange-500
  - Thumb: white circle with orange border, 16px diameter
  - Range display shown above slider

Timeline selector:
- Label: "PROJECT TIMELINE" (10px, uppercase, neutral-500)
- Chip options (horizontal row, single-select):
  - 4 Weeks | 8 Weeks | 12 Weeks | 16+ Weeks
  - Selected: "8-12 Weeks" (orange background, white text)
  - Default: white background, neutral border

Estimated cost display:
- Card section at bottom with light orange background (#FFF7ED)
- Icon: calculator or dollar sign (orange)
- Text: "Estimated Cost: $40,000" (18px, semi-bold)
- Subtext: "Based on 10-week timeline" (12px, neutral-600)

CURSOR BEHAVIOR:
When this step becomes active:
1. Cursor appears near slider (200ms fade in)
2. Cursor moves to slider thumb (600ms, curved path)
3. Cursor "drags" slider from left to middle position (800ms)
4. Slider updates to show $30K-$50K range
5. Cursor pauses (300ms)
6. Cursor moves to "8-12 Weeks" chip (500ms)
7. Cursor clicks chip (ripple effect, 300ms)
8. Chip changes to orange fill
9. Estimated cost updates with subtle highlight animation

TRANSITION TO NEXT STEP:
When scroll reaches 50% threshold:
- Budget card fades out (400ms)
- Step 2 text de-emphasizes
- Step 3 text emphasizes
- Blueprint state fades in (400ms)
```

**Wireframe: Budget Step**

```
RIGHT PANEL (560×400px):
┌─────────────────────────────────────────┐
│                                         │
│  Budget & Timeline                      │
│  Configure your project parameters      │
│  [12px gray subtitle]                   │
│                                         │
│  BUDGET RANGE                           │
│                                         │
│      $30,000 - $50,000                  │
│      [24px bold, center]                │
│                                         │
│  $10K ═══════●═══════════ $100K        │
│       [orange]│[gray]                   │
│              [slider thumb]             │
│                                         │
│  PROJECT TIMELINE                       │
│                                         │
│  ┌─────┐ ┌──────────┐ ┌──────┐ ┌────┐ │
│  │4 Wks│ │ 8-12 Wks │ │12 Wks│ │16+ │ │
│  └─────┘ └──────────┘ └──────┘ └────┘ │
│          [ORANGE FILL]                  │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 💰 Estimated Cost: $40,000      │   │
│  │    Based on 10-week timeline    │   │
│  └─────────────────────────────────┘   │
│  [Light orange bg #FFF7ED]              │
│                                         │
│             ○ ● ○ ○                     │
│         [Progress dots]                 │
│                                         │
│         [Cursor on slider thumb]        │
└─────────────────────────────────────────┘
```

---

### Prompt C — Project Blueprint

```
Design the THIRD step of the "How It Works" section (active when scroll is 50-75%).

LEFT COLUMN BEHAVIOR:
- Step 3 title "Blueprint" is now bold (weight: 600), full opacity
- Orange square marker (8×8px) appears to the left of "3."
- Description text below reads:
  "Receive a detailed technical blueprint with architecture, timeline, milestones, and deliverables."
  (14px, neutral-600, line-height 1.6)
- Steps 1, 2, 4 remain visible but grayed out (40% opacity, regular weight)

RIGHT PANEL UI ELEMENTS:
Create a card titled "Project Blueprint" with:

Header section:
- Title: "Project Blueprint" (16px, medium weight, neutral-900)
- Subtitle: "Your technical roadmap" (12px, neutral-500)

Blueprint preview section:
Display a mini technical architecture diagram or component list:

Component cards (stacked vertically, 8px gap):
Each card includes:
- Icon (left): relevant tech icon (database, API, frontend symbols)
- Component name: "User Authentication System" (14px, semi-bold)
- Status badge: "Ready for review" (12px, orange background, white text, pill shape)
- Checkbox: checked (orange checkmark)

Example cards:
1. ✓ Database Schema Design [Ready for review]
2. ✓ API Architecture [Ready for review]
3. ✓ Frontend Component Library [In progress]
4. ○ Deployment Pipeline [Not started]

Deliverables section (bottom):
- Label: "DELIVERABLES" (10px, uppercase, neutral-500)
- List items with checkmarks:
  ✓ System architecture diagram
  ✓ Technical documentation
  ✓ Week-by-week timeline
  ✓ Risk analysis & mitigation plan

CTA button:
- Label: "View Full Blueprint"
- Style: orange-500 background, white text
- Size: 160px × 44px, full-width at bottom

CURSOR BEHAVIOR:
When this step becomes active:
1. Cursor fades in near top component card (200ms)
2. Cursor moves to first card "Database Schema Design" (600ms)
3. Cursor hovers, card highlights with subtle shadow lift (300ms)
4. Cursor clicks card (ripple effect)
5. Card expands slightly or shows checkmark animation
6. Cursor moves down to second card (500ms)
7. Repeats hover interaction (300ms)
8. Cursor settles on "View Full Blueprint" button (400ms pause)

TRANSITION TO NEXT STEP:
When scroll reaches 75% threshold:
- Blueprint card fades out (400ms)
- Step 3 text de-emphasizes
- Step 4 text emphasizes
- Dashboard state fades in (400ms)
```

**Wireframe: Blueprint Step**

```
RIGHT PANEL (560×400px):
┌─────────────────────────────────────────┐
│                                         │
│  Project Blueprint                      │
│  Your technical roadmap                 │
│  [12px gray subtitle]                   │
│                                         │
│  ┌────────────────────────────────┐    │
│  │ ✓ 🗄  Database Schema Design   │    │
│  │      [Ready for review]        │    │
│  └────────────────────────────────┘    │
│  [Highlighted with cursor hover]        │
│                                         │
│  ┌────────────────────────────────┐    │
│  │ ✓ 🔌 API Architecture          │    │
│  │      [Ready for review]        │    │
│  └────────────────────────────────┘    │
│                                         │
│  ┌────────────────────────────────┐    │
│  │ ✓ 🎨 Frontend Component Library│    │
│  │      [In progress]             │    │
│  └────────────────────────────────┘    │
│                                         │
│  ┌────────────────────────────────┐    │
│  │ ○ 🚀 Deployment Pipeline       │    │
│  │      [Not started]             │    │
│  └────────────────────────────────┘    │
│                                         │
│  DELIVERABLES                           │
│  ✓ System architecture diagram          │
│  ✓ Technical documentation              │
│  ✓ Week-by-week timeline                │
│                                         │
│  ┌──────────────────────────────┐      │
│  │   View Full Blueprint        │      │
│  └──────────────────────────────┘      │
│  [Orange button]                        │
│                                         │
│             ○ ○ ● ○                     │
│         [Progress dots]                 │
└─────────────────────────────────────────┘
```

---

### Prompt D — Dashboard

```
Design the FOURTH step of the "How It Works" section (active when scroll is 75-100%).

LEFT COLUMN BEHAVIOR:
- Step 4 title "Dashboard" is now bold (weight: 600), full opacity
- Orange square marker (8×8px) appears to the left of "4."
- Description text below reads:
  "Track progress in real-time. Review deliverables, communicate with your team, and monitor milestones."
  (14px, neutral-600, line-height 1.6)
- Steps 1, 2, 3 remain visible but grayed out (40% opacity, regular weight)

RIGHT PANEL UI ELEMENTS:
Create a card showing a live project dashboard mockup:

Header section:
- Title: "Project Dashboard" (16px, medium weight, neutral-900)
- Badge: "LIVE UPDATES" (10px, uppercase, green-500 background with pulsing dot animation)

Progress section:
- Label: "CURRENT PROGRESS" (10px, uppercase, neutral-500)
- Week indicator: "Week 3 of 8" (14px, semi-bold)
- Progress bar:
  - Total width: full card width
  - Filled portion: 60% (orange-500)
  - Unfilled: neutral-200
  - Height: 8px, rounded ends
  - Percentage label: "60%" (12px, right-aligned above bar)

Recent activity feed:
- Label: "RECENT ACTIVITY" (10px, uppercase, neutral-500)
- Activity items (stacked, 4px gap):
  1. ✓ Database schema approved [green checkmark, 12px]
     "2 hours ago" [gray subtext]
  2. ✓ API endpoints deployed [green checkmark]
     "5 hours ago"
  3. ⏱ Frontend in review [orange clock icon]
     "Just now"

Each activity item:
- Icon (left): status-specific (green check, orange clock, blue info)
- Text: 13px, neutral-800
- Timestamp: 11px, neutral-500, below main text

Next milestone card:
- Background: light blue (#EFF6FF)
- Border: 1px blue-200
- Padding: 16px
- Label: "NEXT MILESTONE" (10px, uppercase, blue-600)
- Title: "User Testing" (14px, semi-bold)
- Due date: "Due in 3 days" (12px, with small calendar icon)

CURSOR BEHAVIOR:
When this step becomes active:
1. Cursor fades in near progress bar (200ms)
2. Cursor moves to progress bar (600ms, curved path)
3. Cursor hovers over 60% mark on progress bar (300ms)
4. Progress bar highlights or shows tooltip with details
5. Cursor moves down to first activity item "Database schema approved" (500ms)
6. Cursor hovers, item highlights (300ms)
7. Cursor moves to "Next Milestone" card (600ms)
8. Cursor hovers, card lifts slightly with shadow (300ms)
9. Cursor fades out (400ms)

TRANSITION BEHAVIOR:
This is the final step. When scroll reaches 100%:
- Dashboard remains visible
- Optionally: loop back to Step 1 if user scrolls back up
- Or: transition to next website section (CTA or features)
```

**Wireframe: Dashboard Step**

```
RIGHT PANEL (560×400px):
┌─────────────────────────────────────────┐
│                                         │
│  Project Dashboard   🟢 LIVE UPDATES    │
│  [title]            [pulsing badge]     │
│                                         │
│  CURRENT PROGRESS                       │
│                              60%        │
│  Week 3 of 8                            │
│  ████████████░░░░░░░░░                  │
│  [orange]   [gray]                      │
│                                         │
│  RECENT ACTIVITY                        │
│                                         │
│  ✓ Database schema approved             │
│    2 hours ago                          │
│    [green check, gray timestamp]        │
│                                         │
│  ✓ API endpoints deployed               │
│    5 hours ago                          │
│                                         │
│  ⏱ Frontend in review                   │
│    Just now                             │
│    [orange clock icon]                  │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ NEXT MILESTONE                  │   │
│  │                                 │   │
│  │ 📅 User Testing                 │   │
│  │    Due in 3 days                │   │
│  └─────────────────────────────────┘   │
│  [Light blue bg #EFF6FF]                │
│                                         │
│             ○ ○ ○ ●                     │
│         [Progress dots]                 │
│                                         │
│         [Cursor on progress bar]        │
└─────────────────────────────────────────┘
```

---

## 3. Motion & Scroll Prompts

### Scroll Segmentation Prompt

```
Design the scroll-to-step mapping system:

SCROLL ZONES:
Divide the total section height (~4 viewports) into 4 equal zones:
- Zone 1: 0% - 25% scroll → Activate Step 1 (Scope)
- Zone 2: 25% - 50% scroll → Activate Step 2 (Budget)
- Zone 3: 50% - 75% scroll → Activate Step 3 (Blueprint)
- Zone 4: 75% - 100% scroll → Activate Step 4 (Dashboard)

THRESHOLD BEHAVIOR:
When user scrolls past a threshold (e.g., crosses 25% mark):
- Trigger state change instantly (no delay)
- Update left column emphasis within 200ms
- Begin right panel crossfade within 0-400ms
- Start cursor animation after panel settles (600ms from threshold)

VISUAL INDICATORS:
- No visual scroll progress bar
- Progress is shown via:
  1. Active step emphasis (left column)
  2. Progress dots (right panel, bottom)
  3. Cursor presence (indicates active interaction)

SCROLL SMOOTHNESS:
- Section should feel "heavy" (not too fast to scroll)
- Each step should be viewable for ~2-3 seconds of natural scroll
- No snap points (user has full control)
- Scroll should feel 1:1 responsive (no lag)

EDGE CASES:
- If user scrolls quickly, skip intermediate states (jump directly to target state)
- If user scrolls backward, reverse state changes smoothly
- First load: Start at Step 1, 0% scroll position
```

---

### Crossfade vs Slide Transitions Prompt

```
Design the panel content transition system:

PRIMARY TRANSITION TYPE: Crossfade
- Use opacity-based crossfade for all panel content changes
- Do NOT use horizontal slides, vertical slides, or scale transitions
- Reason: Maintains focus on content, feels calm and premium

CROSSFADE SPECIFICATIONS:
- Duration: 400ms
- Easing: ease-in-out (or cubic-bezier(0.4, 0.0, 0.2, 1))
- Overlap: None (sequential, not simultaneous)

SEQUENCE:
1. Outgoing content fades out (opacity 1 → 0, 400ms)
2. Wait for fade-out to complete
3. Swap content in DOM
4. Incoming content fades in (opacity 0 → 1, 400ms)
   
Total transition time: ~400ms (fades can overlap slightly for smoothness)

EXCEPTIONS (Elements that DON'T crossfade):
- Progress dots: update color instantly (no fade)
- Card shell/container: remains static (only inner content fades)
- Cursor: has independent animation timeline

DEPTH & LAYERING:
- Outgoing content: z-index 1
- Incoming content: z-index 2 (fades in on top)
- Cursor overlay: z-index 10 (always on top)

TRANSITION STATES:
- Idle: Content fully visible (opacity: 1)
- Fading out: Content reducing opacity (opacity: 1 → 0)
- Transitioning: Content swapped, not visible (opacity: 0)
- Fading in: Content appearing (opacity: 0 → 1)
- Active: Content fully visible (opacity: 1)
```

---

### Cursor Movement & Click Feedback Prompt

```
Design the animated cursor system that guides users through each step:

CURSOR APPEARANCE:
- Visual: Custom pointer hand icon or arrow cursor graphic
- Size: 24px × 24px
- Color: Dark neutral (#262626) with subtle drop shadow
- Style: Slightly translucent (90% opacity)
- Always rendered above all other content (z-index: 100)

CURSOR LIFECYCLE:
1. Hidden (default state when not in use)
2. Fade in (200ms, ease-out)
3. Move to target (600-800ms, curved bezier path)
4. Hover (300ms pause, possible scale to 1.1x)
5. Click (300ms ripple animation)
6. Pause (400ms settle time)
7. Move to next target or fade out (200ms)

MOVEMENT SPECIFICATIONS:
- Path style: Curved, never straight lines (use bezier curves)
- Speed: Moderate, human-like (not robotic)
- Duration: 600ms for short distances, 800ms for long distances
- Easing: ease-out or cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Motion blur: Optional subtle trail effect (3-5px opacity fade)

CLICK ANIMATION:
When cursor "clicks" a target element:

Ripple effect:
- Origin: Cursor center point
- Shape: Circular
- Color: Orange (#F97316) at 20% opacity
- Animation: Scale from 0 to 2x element size
- Duration: 300ms
- Easing: ease-out

Target element feedback:
- Scale: 0.98x for 100ms (slight press down)
- Then: Scale back to 1x
- Or: Background color shifts to active state
- Or: Border highlight appears

HOVER STATE:
When cursor reaches target but hasn't clicked yet:
- Cursor may scale to 1.1x (subtle grow)
- Target element may lift (2px shadow increase)
- Duration: 300ms pause before click

CURSOR PER STEP:
- Step 1: Click "AI Product" chip
- Step 2: Drag slider thumb, click "8-12 Weeks" chip
- Step 3: Hover over blueprint cards (2-3 items)
- Step 4: Hover over progress bar, then hover over activity item

ACCESSIBILITY:
- Cursor is purely decorative (does not interfere with real mouse)
- Cursor animations pause if user hovers over panel (optional)
- Cursor is hidden on mobile (touch devices)
```

---

### Progress Indicator Behavior Prompt

```
Design the progress dot system at the bottom of the right panel:

VISUAL SPECIFICATIONS:
- Total dots: 4 (one per step)
- Alignment: Horizontal row, centered at bottom of card
- Spacing: 8px gap between dots

DOT STATES:
Active dot:
- Diameter: 10px
- Color: Orange (#F97316)
- Fill: Solid
- Optional: Subtle glow or shadow

Inactive dot:
- Diameter: 8px (slightly smaller)
- Color: Neutral-300 (#D4D4D8)
- Fill: Solid or outlined (ring only)

STATE TRANSITIONS:
When step changes:
- Active dot shrinks to 8px and changes to neutral (200ms)
- Next dot grows to 10px and changes to orange (200ms)
- Easing: ease-in-out
- Can happen simultaneously (smooth handoff)

POSITIONING:
- Fixed position: 24px from bottom of card
- Centered horizontally
- Does not scroll with card content
- Sits below all interactive elements (CTA buttons, etc.)

INTERACTION (Optional):
- Dots are NOT clickable in this design
- They serve as passive progress indicators only
- Cursor does not interact with dots

ALTERNATIVE DESIGN (if preferred):
Instead of circular dots, consider:
- Horizontal progress bar (1-4 segments)
- Step counter text "1/4", "2/4", etc.
- Numbered pills with current step highlighted

But PRIMARY design is: Simple circular dots as specified above.
```

---

## 4. Component Prompts

### App Window Shell Prompt

```
Design a reusable "App Window" container component used across all 4 steps:

CONTAINER SPECIFICATIONS:
- Dimensions: 560px width × 400px height (fixed)
- Background: White (#FFFFFF)
- Border: 1px solid neutral-200 (#E5E5E5)
- Border radius: 16px (smooth, generous rounding)
- Shadow: 0px 8px 24px rgba(0, 0, 0, 0.08) (soft, elevated)
- Padding: 40px (inner content spacing)

INNER STRUCTURE:
The shell contains a flexible content area that holds:
- Header section (title + subtitle)
- Body section (step-specific UI)
- Footer section (CTA button or progress dots)

STATES:
Default state:
- Full opacity, static position
- No hover effects (shell itself is non-interactive)

During transition:
- Shell remains visible
- Only inner content crossfades
- Border and shadow stay consistent

POSITIONING:
- Fixed to viewport (does not scroll)
- Centered vertically and horizontally within right column (60% section)
- Maintains aspect ratio on all screen sizes (until mobile breakpoint)

REUSABILITY:
This exact shell is used for:
- Step 1: Project Wizard
- Step 2: Budget Selector
- Step 3: Blueprint Preview
- Step 4: Dashboard Mockup

Only the inner content changes; shell remains identical.

ACCESSIBILITY:
- Shell has role="region" 
- Shell may have aria-label="Interactive product preview"
- Shell may have aria-live="polite" to announce content changes
```

---

### Cursor + Click Ripple Component Prompt

```
Design a custom animated cursor component with click feedback:

CURSOR VISUAL:
- Icon: Pointer hand (standard cursor arrow shape, or custom finger pointer)
- Size: 24px × 24px
- Style: Flat design, no gradients
- Color: Neutral-800 (#262626) or pure black
- Shadow: 0px 2px 4px rgba(0,0,0,0.2) (subtle depth)
- Opacity: 90% (slightly translucent)

CURSOR STATES:
1. Hidden (opacity: 0, display: none)
2. Idle (opacity: 0.9, static position)
3. Moving (opacity: 0.9, transitioning transform)
4. Hovering (opacity: 1, scale: 1.1x)
5. Clicking (opacity: 1, scale: 0.95x for 100ms)

CLICK RIPPLE DESIGN:
When cursor clicks:
- Create circular ripple emanating from cursor center
- Ripple color: Orange (#F97316)
- Ripple opacity: 20% at start, fades to 0%
- Ripple scale: 0 → 2x (relative to target element size)
- Ripple duration: 300ms
- Ripple easing: ease-out

Visual representation:
```
Frame 0ms:   ●              (cursor at rest)
Frame 100ms: ●◯             (ripple starts)
Frame 200ms: ● ◯            (ripple expands, fades)
Frame 300ms: ●  ◯           (ripple disappears)
```

RIPPLE VARIATIONS:
- Small elements (chips): Ripple max 48px diameter
- Large elements (cards): Ripple max 96px diameter
- Ripple color may match target element's accent color (e.g., orange for orange chips)

REUSABILITY:
- One cursor instance used across all 4 steps
- Cursor repositions and animates based on active step
- Ripple effect is triggered programmatically on click events

TECHNICAL NOTES:
- Cursor is absolutely positioned within right panel
- Cursor coordinates calculated based on target element position
- Cursor animates using transform: translate(x, y) for performance
```

**Wireframe: Cursor States**

```
STATE 1: Idle
   ↖  [24×24px pointer]
   
STATE 2: Moving (with motion trail)
   ↖ ⤴ ⤴ ⤴ [curved path, optional trail]
   
STATE 3: Hovering (scaled up)
     ↖  [scale: 1.1x]
   ┌─────┐
   │CHIP │  [target element]
   └─────┘
   
STATE 4: Clicking (ripple)
     ●   [cursor]
   ◯◯◯◯  [orange ripple expanding]
   ┌─────┐
   │CHIP │
   └─────┘
```

---

### Progress Dots Component Prompt

```
Design a progress indicator using circular dots (used in right panel footer):

LAYOUT:
- Horizontal row of 4 dots
- Centered alignment
- 8px spacing between dots
- Total width: ~58px (10px + 8px + 8px + 8px + 10px + gaps)

DOT SPECIFICATIONS:
Active dot:
- Shape: Circle
- Diameter: 10px
- Fill color: Orange-500 (#F97316)
- Border: None
- Opacity: 100%
- Optional: 2px orange glow (box-shadow: 0 0 4px rgba(249, 115, 22, 0.5))

Inactive dot:
- Shape: Circle
- Diameter: 8px
- Fill color: Neutral-300 (#D4D4D8)
- Border: None
- Opacity: 100%

TRANSITION BEHAVIOR:
When active dot changes (e.g., from dot 1 to dot 2):
- Current active dot (1): Shrinks 10px → 8px, color shifts to neutral (200ms)
- Next active dot (2): Grows 8px → 10px, color shifts to orange (200ms)
- Easing: ease-in-out
- Both transitions happen simultaneously (smooth handoff)

STATES PER STEP:
- Step 1 (Scope): Dot 1 active
- Step 2 (Budget): Dot 2 active
- Step 3 (Blueprint): Dot 3 active
- Step 4 (Dashboard): Dot 4 active

POSITIONING:
- Fixed at bottom of app window card
- 24px from bottom edge
- Horizontally centered
- Above any footer content (like CTA buttons)

ACCESSIBILITY:
- Dots are non-interactive (visual only)
- Dots have aria-hidden="true" (progress communicated via other means)
- Screen readers announce step changes via left column text

REUSABILITY:
- Same dot component used in all 4 panel states
- Only the active index changes (1-4)
```

**Wireframe: Progress Dots**

```
Step 1 Active:
   ● ○ ○ ○
  [10][8][8][8]
 [orange][gray][gray][gray]

Step 2 Active:
   ○ ● ○ ○
  [8][10][8][8]

Step 3 Active:
   ○ ○ ● ○
  [8][8][10][8]

Step 4 Active:
   ○ ○ ○ ●
  [8][8][8][10]
```

---

### Cards, Chips, Tiles Component Prompt

```
Design reusable UI element components used within the app window:

---

CHIP COMPONENT (used in Step 1, Step 2)

Visual design:
- Shape: Rounded rectangle (pill-like)
- Height: 36px
- Padding: 12px horizontal
- Border radius: 8px
- Font: 14px, medium weight (500)
- Text transform: None (sentence case)

States:
Default (unselected):
- Background: White (#FFFFFF)
- Text color: Neutral-700 (#404040)
- Border: 1px solid neutral-300 (#D4D4D8)

Hover (desktop only):
- Background: Neutral-50 (#FAFAFA)
- Border: 1px solid neutral-400
- Cursor: pointer

Selected (active):
- Background: Orange-500 (#F97316)
- Text color: White (#FFFFFF)
- Border: None
- Font weight: 600 (semi-bold)

Usage:
- Step 1: Project type chips (MVP, AI Product, etc.)
- Step 2: Timeline chips (4 Weeks, 8 Weeks, etc.)

---

CARD COMPONENT (used in Step 3)

Visual design:
- Shape: Rectangle with rounded corners
- Padding: 16px
- Border radius: 8px
- Border: 1px solid neutral-200 (#E5E5E5)
- Background: White (#FFFFFF)

Layout:
- Horizontal: Icon (left) | Text content (center) | Badge (right)
- Vertical spacing: 8px between stacked cards

States:
Default:
- Border: 1px neutral-200
- Shadow: None

Hover:
- Border: 1px neutral-300
- Shadow: 0px 2px 8px rgba(0,0,0,0.06) (slight lift)
- Transform: translateY(-2px) (subtle rise)
- Transition: 200ms ease-out

Active/Selected:
- Border: 2px orange-500 (thicker border, orange accent)
- Background: Orange-50 (#FFF7ED) (light orange tint)

Content structure:
- Icon (24×24px, left-aligned, neutral-600 color)
- Title (14px, semi-bold, neutral-900)
- Status badge (12px, pill shape, right-aligned)
- Checkbox (orange checkmark if completed)

Usage:
- Step 3: Blueprint component cards

---

STATUS BADGE COMPONENT

Visual design:
- Shape: Pill (fully rounded ends)
- Height: 24px
- Padding: 6px horizontal
- Font: 11px, medium weight, uppercase or sentence case

States:
"Ready for review":
- Background: Orange-500 (#F97316)
- Text: White
- Icon: None or small checkmark

"In progress":
- Background: Blue-500 (#3B82F6)
- Text: White
- Icon: Clock or spinner

"Not started":
- Background: Neutral-200 (#E5E5E5)
- Text: Neutral-700
- Icon: Circle outline

Usage:
- Step 3: Status labels on blueprint cards
- Step 4: Activity feed item indicators

---

ACTIVITY ITEM COMPONENT (used in Step 4)

Visual design:
- Layout: Horizontal (icon | text | timestamp)
- Height: Auto (text wraps if needed)
- Padding: 8px vertical
- Border bottom: 1px solid neutral-100 (optional separator)

Structure:
- Icon (left, 16×16px): Status-specific (✓ green check, ⏱ orange clock, etc.)
- Text (center, 13px, neutral-800): Activity description
- Timestamp (right or below, 11px, neutral-500): Relative time (e.g., "2 hours ago")

States:
Default:
- Opacity: 100%
- Background: Transparent

Hover:
- Background: Neutral-50 (#FAFAFA)
- Cursor: pointer (if clickable)

Usage:
- Step 4: Recent activity feed
```

**Wireframe: Chip Component**

```
DEFAULT:
┌─────────────┐
│  AI Product │
└─────────────┘
[white bg, gray border, dark text]

HOVER:
┌─────────────┐
│  AI Product │
└─────────────┘
[light gray bg, darker border]

SELECTED:
┌─────────────┐
│  AI Product │
└─────────────┘
[orange bg, white text, no border]
```

**Wireframe: Card Component**

```
DEFAULT:
┌────────────────────────────────┐
│ 🗄  Database Schema Design     │
│     [Ready for review]      ✓ │
└────────────────────────────────┘
[white bg, light border]

HOVER:
┌────────────────────────────────┐
│ 🗄  Database Schema Design     │
│     [Ready for review]      ✓ │
└────────────────────────────────┘
[lifted with shadow, slightly moved up]

SELECTED:
┌────────────────────────────────┐
│ 🗄  Database Schema Design     │
│     [Ready for review]      ✓ │
└────────────────────────────────┘
[orange border, light orange bg tint]
```

---

## 5. Mobile Adaptation Prompts

### Mobile Layout Prompt (<768px)

```
Adapt the "How It Works" section for mobile devices (viewport width < 768px):

LAYOUT TRANSFORMATION:
- Remove two-column layout
- Switch to single-column vertical stack
- Remove all sticky and fixed positioning
- Scroll becomes linear (top to bottom)

CONTENT ORDER:
1. Eyebrow: "HOW IT WORKS" (orange, centered)
2. Headline: "The smarter way to build your startup" (32px, centered)
3. Step-by-step sections (4 discrete sections):

Each step section contains:
- Step number + title (e.g., "1. Scope") (20px, bold)
- Step description (14px, neutral-600, line-height 1.6)
- App window mockup (full width, reduced height: 320px)
- Spacer (40px margin-bottom before next step)

WHAT STAYS:
- All 4 steps remain visible
- Step content (text descriptions)
- App window UI mockups
- Progress dots within each card
- Color scheme and typography

WHAT CHANGES:
- Sticky left column → becomes scrolling content
- Fixed right panel → becomes scrolling content
- Steps are discrete sections (not overlapping)
- Each step is fully visible at once (no scroll-triggered reveals)

WHAT IS REMOVED:
- Cursor animations (completely hidden on touch devices)
- Click ripple effects
- Scroll-triggered state changes
- Parallax or pinned effects
- All motion choreography

APP WINDOW ADAPTATIONS:
- Width: 100% (with 16px side margins)
- Height: 320px (reduced from 400px)
- Padding: 24px (reduced from 40px)
- Font sizes: -2px from desktop (e.g., 14px → 12px)
- Chips: May wrap to multiple rows if needed
- Buttons: Full width or centered

INTERACTION CHANGES:
- Progress dots: May become tappable to navigate steps (optional)
- Swipe gestures: Optional horizontal swipe between steps
- Auto-advance: Optional 6-8 second timer per step (like carousel)
- Or: Simple scroll (most common approach)

VISUAL HIERARCHY:
- Use ample white space between steps (48-64px)
- Maintain contrast and readability
- Step numbers remain visible and bold
- Orange accent colors remain prominent

ACCESSIBILITY:
- Ensure tap targets are min 44×44px
- Maintain text contrast ratios (WCAG AA)
- Support zoom up to 200% without breaking layout
- Preserve semantic heading structure (h2 for steps)
```

**Wireframe: Mobile Layout**

```
┌─────────────────────┐
│                     │
│   HOW IT WORKS      │
│   [orange, center]  │
│                     │
│  The smarter way    │
│  to build your      │
│  startup            │
│  [32px, center]     │
│                     │
├─────────────────────┤
│                     │
│  1. Scope           │
│  [20px, bold]       │
│                     │
│  Start your project.│
│  Use AI or work with│
│  an expert...       │
│  [14px description] │
│                     │
│  ┌───────────────┐  │
│  │               │  │
│  │ Project Scope │  │
│  │ Wizard        │  │
│  │               │  │
│  │ [Chip grid]   │  │
│  │               │  │
│  │ [Continue btn]│  │
│  │               │  │
│  │   ● ○ ○ ○     │  │
│  └───────────────┘  │
│  [Full width card]  │
│                     │
├─────────────────────┤
│                     │
│  2. Budget          │
│  [20px, bold]       │
│                     │
│  Set your budget... │
│  [description]      │
│                     │
│  ┌───────────────┐  │
│  │ Budget &      │  │
│  │ Timeline      │  │
│  │               │  │
│  │ [Slider]      │  │
│  │               │  │
│  │   ○ ● ○ ○     │  │
│  └───────────────┘  │
│                     │
├─────────────────────┤
│                     │
│  3. Blueprint       │
│  4. Dashboard       │
│  [Same pattern]     │
│                     │
└─────────────────────┘
```

---

### Mobile Simplification Prompt

```
Define what gets simplified or removed on mobile to preserve performance and usability:

COMPLEXITY REDUCTION:

1. REMOVE: Cursor system
   - All cursor movement animations
   - Click ripple effects
   - Hover states triggered by cursor
   Reason: Touch devices don't have hover; cursor is confusing

2. REMOVE: Scroll-triggered reveals
   - No crossfade transitions based on scroll position
   - No parallax effects
   - No sticky positioning
   Reason: Mobile scroll is finger-driven; these effects cause jank

3. SIMPLIFY: App window mockups
   - Reduce height from 400px → 320px
   - Reduce padding from 40px → 24px
   - Simplify shadows (lighter, less blur)
   - Remove hover effects on buttons/cards
   Reason: Smaller screens need tighter spacing

4. SIMPLIFY: Typography
   - Headline: 48px → 32px
   - Step titles: 24px → 20px
   - Body text: 14px → 13px
   - Reduce line-height slightly (1.6 → 1.5)
   Reason: Smaller viewports require smaller text

5. PRESERVE: Content hierarchy
   - All 4 steps remain visible
   - Step order stays the same (Scope → Budget → Blueprint → Dashboard)
   - Orange accent colors remain
   - Progress dots remain (within each card)
   Reason: Content narrative must stay intact

6. PRESERVE: Visual tone
   - Calm luxury aesthetic
   - Generous white space (relative to screen size)
   - Clean, modern UI
   - Professional feel
   Reason: Brand consistency across devices

PERFORMANCE OPTIMIZATIONS:
- Lazy-load images or mockups below fold
- Remove GPU-intensive animations
- Use simpler easing functions (ease-in-out only)
- Reduce shadow complexity (fewer layers)

USER EXPERIENCE:
- Linear scroll (top to bottom, no tricks)
- Fast, responsive interactions
- No janky transitions
- Touch-friendly tap targets (min 44×44px)
- Clear visual separation between steps
```

---

### Mobile Interaction Prompt

```
Define mobile-specific interactions that replace desktop scroll choreography:

NAVIGATION OPTIONS (choose one approach):

Option 1: Simple Scroll (Recommended)
- Users scroll naturally from top to bottom
- Each step is a discrete section (~1 viewport tall)
- No special interactions needed
- Simplest, most accessible approach

Option 2: Swipe Carousel
- Steps become horizontally swipeable (like Instagram stories)
- Progress dots become tappable navigation
- Swipe left/right to advance steps
- Snap to each step (one step visible at a time)
- Best for: Guided, narrative-driven experiences

Option 3: Tap-to-Expand
- Steps start collapsed (showing only title)
- Tap step to expand and reveal app mockup
- Accordion-style interaction
- Best for: Content-heavy sections

RECOMMENDED: Option 1 (Simple Scroll)
Reason: Most familiar, accessible, performant

IF USING SIMPLE SCROLL:
- Each step section has:
  - Step number + title (visible immediately)
  - Description text (visible immediately)
  - App window mockup (visible immediately, no reveal)
  - 48px spacing to next step

- No animations between steps
- No crossfades or transitions
- User scrolls at their own pace
- All content is visible without interaction

IF USING SWIPE CAROUSEL:
- Container: overflow-x: scroll, snap-scroll
- Each step: 100vw width, snap-align: start
- Progress dots: tappable to jump to step
- Swipe gesture: smooth horizontal pan
- Optional: Auto-advance timer (6-8 seconds per step)

TOUCH INTERACTIONS:
- All buttons: Large tap targets (min 44×44px)
- Chips: Increase padding to 14px vertical (from 12px)
- Cards: Tap to expand or view details (optional)
- No hover states (use :active states instead)

SCROLL BEHAVIOR:
- Smooth scroll (scroll-behavior: smooth)
- No snap points (unless using carousel)
- Preserve browser scroll momentum
- No JavaScript scroll hijacking

ACCESSIBILITY:
- Support keyboard navigation (for Bluetooth keyboards)
- Ensure screen readers announce each step
- Provide skip links if section is very long
- Respect prefers-reduced-motion (no auto-advance)
```

---

## SUCCESS CRITERIA CHECKLIST

Use this checklist to validate that all design prompts have been followed:

### Master Section
- [ ] Two-column layout (40/60 split) created
- [ ] Scroll height is ~4 viewports
- [ ] Left column is sticky (top: 10vh)
- [ ] Right panel is fixed (pinned to viewport)
- [ ] Calm luxury aesthetic applied

### Step Content
- [ ] All 4 steps designed (Scope, Budget, Blueprint, Dashboard)
- [ ] Each step has correct left column text
- [ ] Each step has correct right panel UI
- [ ] Active/inactive states clearly differentiated
- [ ] Orange accent markers appear on active steps

### Motion System
- [ ] Scroll zones mapped (0-25%, 25-50%, 50-75%, 75-100%)
- [ ] Crossfade transitions are 400ms, ease-in-out
- [ ] Cursor appears, moves, hovers, clicks per step
- [ ] Progress dots update on state change
- [ ] Timing feels calm and premium (not rushed)

### Components
- [ ] App window shell is reusable across steps
- [ ] Cursor + ripple component designed
- [ ] Progress dots component designed
- [ ] Chips, cards, badges follow consistent style
- [ ] All states (default, hover, active) defined

### Mobile Adaptation
- [ ] Single-column layout for <768px
- [ ] Cursor animations removed on mobile
- [ ] Scroll is linear and simple
- [ ] Content hierarchy preserved
- [ ] Touch-friendly tap targets (44×44px)

### Polish
- [ ] Typography is consistent
- [ ] Color palette uses Calm Luxury system
- [ ] Spacing is generous and balanced
- [ ] Shadows are subtle and premium
- [ ] All copy matches specifications exactly

---

**END OF PROMPT DOCUMENT**

A designer should now be able to recreate the entire "How It Works" section in Figma, Sketch, or any design tool using only these prompts—without needing to see the original reference.

- Neutral palette with warm orange accent
- No hype, no buzzwords, no "futuristic AI" visuals
- Systems-first messaging (not feature lists)

**Typography Hierarchy:**
- H1: 48-72px (hero headlines)
- H2: 36-48px (section headlines)
- H3: 24-32px (subsection titles)
- Body: 16-20px (paragraphs)
- Small: 14-16px (supporting text)

**Color System:**
- Background: #FDFCFB (warm white)
- Primary text: #171717 (neutral-900)
- Secondary text: #525252 (neutral-600)
- Accent: #F97316 (orange-500)
- Borders: #E5E5E5 (neutral-200)

**Spacing:**
- Section padding: 80-120px vertical
- Container max-width: 1400px
- Grid gaps: 24-32px
- Component padding: 32-48px

---

## SECTION 1 — HERO (Above Fold)

### Purpose
Instant clarity on who we are and what we do. No confusion.

### Layout
**Two-column layout (50/50 split on desktop)**

**Left column:**
- Small eyebrow badge: "AI Systems Agency" or "Build → Launch → Scale"
- H1 headline (3-5 words max)
- Subheadline (1-2 sentences, outcome-focused)
- Supporting line (1 sentence, context/proof)
- Primary CTA button (orange, prominent)
- Secondary CTA button (outlined, neutral)

**Right column:**
- Clean product visual OR
- Dashboard mockup OR
- Flow diagram OR
- Metrics visualization
- Must feel real, not decorative
- Subtle shadow, border treatment

### Visual Hierarchy
1. Headline (largest, boldest)
2. Visual (right side anchor)
3. Subheadline (clear, readable)
4. CTAs (orange draws the eye)
5. Supporting text (smallest)

### Mobile Behavior
- Stack vertically
- Visual moves below headline
- CTAs go full-width
- Reduce padding to 40-60px

### Example Content Structure
```
[Badge] AI Systems Agency

Build Production AI Systems 
That Actually Ship

From brief to launch in weeks. No experiments,
no prototypes. Real systems, real results.

Trusted by 50+ startups and scale-ups

[Start Project] [View Process]

[VISUAL: Dashboard or system diagram]
```

---

## SECTION 2 — SOCIAL PROOF / TRUST BAR

### Purpose
Immediate credibility without interrupting flow.

### Layout
**Single row, centered, subtle**

**Option A — Logo Bar:**
- 5-7 client logos in grayscale
- Equal spacing
- Headline: "Trusted by modern teams" (small, neutral)
- Logos: 100-120px width
- Subtle opacity (60-70%)

**Option B — Metric Bar:**
- 3-4 key metrics in cards
- Example: "50+ Projects Shipped" | "4.9★ Average" | "$2M+ Revenue Impact"
- Clean cards with soft borders
- Icons optional (avoid if too decorative)

**Option C — Single Statement:**
- One powerful testimonial quote
- Client name + company
- Centered, large text (24-28px)
- Minimal styling

### Spacing
- 40-60px vertical padding
- Sits between hero and next major section
- Background: subtle neutral-50 or white

---

## SECTION 3 — VALUE PROPOSITION (The Problem/Solution)

### Purpose
Clarify what we do and why it matters.

### Layout
**Full-width section, centered content**

**Structure:**
- Section headline (H2): "Why AI Projects Fail (And How We Fix It)"
- Optional subheadline (1 sentence)
- 3-4 columns grid

**Each column:**
- Icon or number (minimal, not decorative)
- Problem statement (bold, 1 sentence)
- How we solve it (2-3 sentences)
- Optional: Small "→ Learn more" link

### Design Treatment
- White background
- Soft borders around cards (optional)
- Hover effect: subtle shadow + border color change
- Keep cards equal height

### Content Tone
- Problem: Direct, honest, relatable
- Solution: Confident, specific, outcome-focused
- Avoid: Hype, vague claims, buzzwords

### Example Card
```
[Icon: X or Alert]

Problem: "AI projects drag on for months"

Solution: We use a fixed 7-phase framework
that ships production systems in 4-8 weeks.
No scope creep, no endless iterations.

→ See our process
```

---

## SECTION 4 — SERVICES/SOLUTIONS GRID

### Purpose
Show what we actually build (concrete deliverables).

### Layout
**3-column grid (2 on tablet, 1 on mobile)**

**Each service card:**
- Service icon (top left, 48-56px, colored background)
- Service name (H3, bold)
- 2-sentence description (what it is + outcome)
- Link button: "View Service →"

### Card Design
- Background: gradient from neutral-50 to white
- Border: 2px solid neutral-200
- Padding: 32-40px
- Border-radius: 16-20px
- Hover: border color → orange-300, shadow increase
- Transition: smooth (200-300ms)

### Service Examples
1. AI Chatbots (blue icon)
2. AI Agents (purple icon)
3. Sales CRM (green icon)
4. AI Web Design (indigo icon)
5. MVP Builder (orange icon)
6. App Development (red icon)

### Spacing
- 24-32px gap between cards
- 80-100px section padding

---

## SECTION 5 — HOW IT WORKS (Process)

### Purpose
Remove uncertainty. Show the path from brief → launch.

### Layout
**Horizontal timeline (desktop) / Vertical (mobile)**

**Structure:**
- Section headline (H2): "From Brief to Production in 6 Weeks"
- Subheadline: "No experiments. Production-ready systems only."
- Timeline with 5-6 steps

**Each step:**
- Step number in circle (48px, orange if active)
- Step name (H4, bold)
- 1-sentence description
- Arrow between steps (→)

### Visual Treatment
- Timeline bar connects all circles (horizontal line, neutral-200)
- Active/completed steps: orange-500
- Upcoming steps: neutral-300
- Background: neutral-50 or white
- Optional: subtle illustration per step

### Timeline Steps Example
```
1. Discovery
   Understand goals & requirements

→

2. System Design
   AI architecture & UX flows

→

3. Build
   Development & AI training

→

4. Integration
   Connect to your stack

→

5. QA
   Testing & refinement

→

6. Launch
   Deploy & monitor
```

---

## SECTION 6 — CASE STUDY SHOWCASE

### Purpose
Proof through real work. Show, don't just tell.

### Layout
**Large featured cards (1-2 visible, horizontal scroll or grid)**

**Each case study card:**
- Hero image (product screenshot or dashboard, 16:9 ratio)
- Client industry badge (small, top-left overlay)
- Project headline (H3)
- 2-3 key outcomes with icons:
  - Example: "+42% conversion" | "70% faster support" | "$200K saved"
- "View Case Study →" link

### Card Design
- Border: 2px neutral-200
- Border-radius: 20px
- Shadow: subtle on hover
- Image: fills top 50% of card
- Content: 32px padding below image

### Background
- White or neutral-50
- 100-120px section padding

### Optional Variation
- Carousel/slider for multiple case studies
- "View All Projects →" CTA at section bottom

---

## SECTION 7 — SOCIAL PROOF / TESTIMONIALS

### Purpose
Build trust through client voices.

### Layout
**3-column grid (stacked on mobile)**

**Each testimonial card:**
- Quote text (18-20px, leading-relaxed)
- Client name (bold)
- Title + Company (neutral-600)
- Optional: Client photo (48px circle, top or left)
- Star rating (optional, only if 5★)

### Design Treatment
- Background: white
- Border: 1px neutral-200
- Border-radius: 16px
- Padding: 32-40px
- Quote marks: optional (avoid if feels cliché)

### Content Guidelines
- Real quotes only (never fabricate)
- Focus on outcomes, not feelings
- Keep to 2-4 sentences max
- Avoid generic praise ("Great to work with!")

### Example Testimonial
```
"We shipped our AI chatbot in 4 weeks. It's
handling 60% of support tickets and our
activation rate is up 28%."

— Sarah Chen
Head of Product, Acme SaaS
```

---

## SECTION 8 — INDUSTRIES WE SERVE

### Purpose
Help visitors self-identify and find relevant solutions.

### Layout
**2-column or 3-column grid**

**Each industry card:**
- Industry icon (minimal, 40-48px)
- Industry name (H4)
- 1-sentence value proposition
- "View Solutions →" link to industry page

### Industries
1. SaaS (rocket icon)
2. E-commerce (shopping cart icon)
3. Real Estate (building icon)
4. B2B Services (briefcase icon)
5. Healthcare (heart icon)
6. Automotive (car icon)

### Visual Treatment
- Soft colored backgrounds per industry
- Example: SaaS = blue-50, E-commerce = purple-50
- Border: 1px matching color (blue-100, purple-100)
- Hover: background darkens slightly

---

## SECTION 9 — FINAL CTA (Conversion Focus)

### Purpose
Last chance to convert. Make it easy and clear.

### Layout
**Full-width section, centered content, dark background**

**Structure:**
- Background: neutral-900 (dark) or gradient
- Headline (H2, white): "Ready to Build a Real AI System?"
- Subheadline (neutral-400): "From idea → proposal → production in weeks"
- Two CTAs:
  - Primary: "Start Project" (orange-500, large)
  - Secondary: "Book a Call" (white border, white text)
- Supporting text: "No pitch. Just a real conversation."

### Design Treatment
- 100-140px vertical padding
- Max-width: 800px (centered)
- CTAs: large (px-10 py-5)
- Text: center-aligned
- Optional: Subtle pattern background

### Trust Elements
- Below CTAs: "Trusted by 50+ companies"
- Or: "4.9★ average rating"
- Small, neutral-400 color

---

## SECTION 10 — FOOTER (FooterV11)

### Purpose
Complete sitemap, secondary conversions, legal, social.

### Layout (Already defined in FooterV11 component)
**Three-tier structure:**

**A. CTA Strip (dark background)**
- Headline + subheadline
- Dual CTAs (Start Project + Book Call)

**B. Main Footer (5 columns)**
1. Company (About, Process, Case Studies, Booking, Support)
2. Solutions (All services listed)
3. Industries (SaaS, E-commerce, Real Estate, B2B, etc.)
4. Project Flow (Wizard, Processing, Proposal, Dashboard)
5. Resources (Guides, Pricing, FAQs, WhatsApp, Contact)

**C. Bottom Meta Bar**
- Copyright
- Privacy, Terms, Security links
- Social icons (Twitter, LinkedIn, GitHub, Email)

---

## RESPONSIVE BEHAVIOR

### Desktop (1024px+)
- Two-column layouts for hero
- Three-column grids for services/case studies
- Horizontal timelines
- Full navigation

### Tablet (768-1023px)
- Two-column grids where possible
- Reduce heading sizes by 10-15%
- Adjust padding (60-80px sections)
- Stack hero columns on smaller tablets

### Mobile (< 768px)
- All single column
- Full-width buttons
- Reduce section padding to 40-60px
- Font sizes: H1 = 32-40px, H2 = 28-32px
- Sticky CTA bar at bottom (optional)

---

## ANIMATION & INTERACTION

### Scroll Animations
- Fade in on scroll (subtle, 300-400ms)
- Slide up 20-30px on reveal
- Stagger child elements (100ms delay)
- Use Intersection Observer

### Hover States
- Buttons: shadow increase + slight lift (-2px translateY)
- Cards: border color change + shadow
- Links: color transition (200ms)
- Icons: subtle scale (1.05) or rotate

### Loading States
- Skeleton screens for dynamic content
- No spinners (use "Thinking..." with pulse)
- Smooth transitions between states

### Micro-interactions
- Button press: slight scale down (0.98)
- Success states: check icon + green flash
- Form focus: orange border glow
- Disabled states: reduced opacity (0.5)

---

## CONTENT GUIDELINES

### Headlines
- 3-7 words maximum
- No questions (use statements)
- Outcome-focused, not feature-focused
- Examples:
  - ✅ "Build Production AI Systems That Ship"
  - ❌ "Do You Need AI For Your Business?"

### Body Copy
- Short paragraphs (2-3 sentences max)
- Bullet points for lists
- Active voice always
- Avoid: "We believe", "We think", "Revolutionary", "Cutting-edge"

### CTAs
- Action-oriented verbs
- Clear outcome
- Examples:
  - "Start Project" (not "Learn More")
  - "Book Strategy Call" (not "Contact Us")
  - "View Case Study" (not "Read More")

### Tone
- Confident but not arrogant
- Direct but not aggressive
- Smart but not pretentious
- Calm but not boring

---

## QUALITY CHECKLIST

Before launch, verify:

**Visual:**
- [ ] Consistent spacing throughout
- [ ] Typography hierarchy clear
- [ ] All images optimized (WebP)
- [ ] Hover states work smoothly
- [ ] Mobile responsive on all sections
- [ ] No horizontal scroll on any device

**Content:**
- [ ] No placeholder text ("Lorem ipsum")
- [ ] All links work
- [ ] CTAs clear and action-oriented
- [ ] No typos or grammar errors
- [ ] Consistent voice and tone

**Performance:**
- [ ] Page loads in < 2 seconds
- [ ] Smooth scroll animations
- [ ] No layout shift (CLS)
- [ ] Lazy loading images below fold

**Conversion:**
- [ ] Multiple clear CTAs
- [ ] Primary conversion path obvious
- [ ] Trust elements present (social proof)
- [ ] Easy to understand what we do
- [ ] Clear next steps

---

## OPTIONAL ENHANCEMENTS

### Advanced Features
- Cursor-follow micro-animations
- Parallax on hero visual (subtle)
- Video background (muted, subtle)
- Interactive system diagrams
- Chatbot in bottom-right (after 10s)

### Personalization
- Industry-specific headlines (if referred)
- Geolocation-based social proof
- Time-based CTAs ("Book call this week")
- Return visitor detection (hide hero, show projects)

### A/B Test Ideas
- Headline variations (problem vs. solution focused)
- CTA text ("Start Project" vs. "Get Started")
- Hero visual (product vs. diagram vs. metrics)
- Social proof placement (top vs. middle)
- Number of service cards (3 vs. 6)

---

## MAINTENANCE

### Monthly
- Update case study metrics
- Refresh testimonials
- Check all links
- Review analytics for drop-off points

### Quarterly
- New case study showcase
- Industry trend updates
- CTA performance review
- Content relevance audit

### Annually
- Full design refresh evaluation
- Rebrand if needed
- Technology stack review
- Competitive analysis

---

**END OF STYLE GUIDE**

*This is a living document. Update as design system evolves.*
