# How It Works Section Plan & Implementation (Version 6)

## Overview
The "How It Works" section in Home Page V6 is designed to demystify the engagement process for potential clients. Instead of a static list of steps, it uses an interactive, scroll-driven storytelling approach. As the user scrolls through the narrative on the left, the "screen" on the right dynamically updates to show a simulation of the actual platform experience at each stage.

## UI/UX Layout Strategy

### 1. Split Screen & Sticky Positioning
- **Layout**: A 2-column grid (`flex-col lg:flex-row`).
- **Left Column (Narrative)**: Contains the text steps (Scope, Blueprint, Dashboard). This column scrolls naturally.
- **Right Column (Visuals)**: Uses `lg:sticky lg:top-0` to remain fixed in the viewport while the user scrolls the text. This keeps the visual context anchored.
- **Height**: The container has a `min-h-[300vh]` to ensure enough scroll distance for a comfortable pacing of the 4 distinct stages.

### 2. Scroll-Driven Navigation
- **Mechanism**: We use `framer-motion`'s `useScroll` hook to track the progress of the container.
- **Mapping**: The `scrollYProgress` (0 to 1) is mapped to an integer index (0-3).
  ```typescript
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(3, Math.floor(latest * 4));
    setActiveScreenIndex(index);
  });
  ```
- **Feedback**: As the index changes, the corresponding text step highlights (`opacity-100`, `text-[#00334F]`), and the screen on the right transitions.

## Screen Content & Content Strategy

The right-hand column features a `BrowserFrame` component that acts as a window into the "Sun AI" platform. Each step demonstrates a specific part of the user journey:

### Step 1: Scope (Screen 0)
- **Concept**: "Self-service scoping."
- **UI**: A "Wizard" interface with selectable chips (e.g., "AI Product", "MVP").
- **Animation**: A simulated mouse cursor moves to click the "AI Product" chip, which then turns orange (`#FF6A3D`) and scales up.

### Step 2: Scope/Budget (Screen 1)
- **Concept**: "Transparent pricing."
- **UI**: A budget selection grid.
- **Animation**: The cursor moves to select "$15K–$30K", demonstrating the ease of setting constraints.

### Step 3: Blueprint (Screen 2)
- **Concept**: "Technical roadmap."
- **UI**: A schematic view showing a "Project Blueprint" with a "Budget Approved" badge.
- **Animation**: Elements fade in to suggest the generation of a plan.

### Step 4: Dashboard (Screen 3)
- **Concept**: "Real-time collaboration."
- **UI**: A client portal dashboard with a sidebar and asset grid (Proposal, Wireframes, etc.).
- **Animation**: The cursor hovers over the "Architecture" card, highlighting it with an orange border.

## Animation & Transition Details

### 1. Simulated User Interaction (The "Ghost Cursor")
- **Component**: `<Pointer />` (an SVG cursor).
- **Behavior**: Each screen component (`ScreenScopeContent`, etc.) contains a `Pointer` with specific `variants` for its movement path.
- **Trigger**: The animation runs only when `isActive` is true.
- **Pathing**: The cursor follows a defined `x` / `y` path using keyframes to simulate natural movement (move -> pause -> click -> move away).
  ```typescript
  animate: {
    x: [200, 110, 110, 200], // Move to target, hold, move away
    scale: [1, 1, 0.9, 1],   // "Click" press effect
    opacity: [0, 1, 1, 0]    // Fade in/out
  }
  ```

### 2. Cross-Dissolve Transitions
- **Wrapper**: An `<AnimatePresence>` component wraps the screen content.
- **Effect**: As `activeScreenIndex` changes, the old screen fades out (`opacity: 0`) while the new one fades in (`opacity: 1`), creating a smooth, seamless transition inside the browser frame.

### 3. Micro-Interactions
- **State Delays**: `setTimeout` is used inside `useEffect` to sync the UI state change (e.g., a button turning blue) with the "click" moment of the ghost cursor animation.
- **Hover Effects**: The browser frame itself has a `hover:shadow-xl` effect to feel tactile.

## Technical Structure

- `components/premium/v6/HowItWorksV6.tsx`: 
  - Manages the scroll state and high-level layout.
  - Renders the sticky text column.
  - Renders the `BrowserFrame` and conditionally renders the active screen content.

- `components/premium/v6/HowItWorksScreensV6.tsx`:
  - `BrowserFrame`: Reusable window chrome (circles, border, shadow).
  - `ScreenScopeContent`, `ScreenBudgetContent`, etc.: Individual components for each slide.
  - `Pointer`: The reusable cursor component.

## Copy & Typography
- **Headlines**: Uses a "Display" font weight (implied semibold/bold) for impact.
- **Colors**:
  - **Active Text**: `#00334F` (Brand Navy)
  - **Inactive Text**: `text-slate-300` (Subtle fade)
  - **Accents**: `#FF6A3D` (Brand Orange) for the "How It Works" label and active progress dots.
