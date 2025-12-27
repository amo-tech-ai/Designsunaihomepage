# Sun AI Hero Section Design Plan

## Overview
This document outlines the design and implementation plan for the "Sun AI" V7 homepage hero section. The goal is to create a premium, minimal, and tech-forward introduction to the platform, aligning with the "Stripe/Apple" aesthetic using Slate 900 and Orange (#FF6A3D).

## Visual Hierarchy

1.  **Primary Focus**: The Headline. It must clearly state the value proposition ("The AI Agency for the Future").
2.  **Secondary Focus**: The Hero Illustration (Globe). This serves as the visual anchor, representing global connectivity, AI intelligence, and premium technology.
3.  **Tertiary Focus**: Call to Action (CTA). Clear buttons for "Start Building" or "Contact Sales".
4.  **Social Proof**: A subtle "Trusted by" bar or ticker to establish credibility immediately.

## Layout & Wireframe

### Desktop (1024px+)
-   **Split Layout**: 50/50 or 40/60 split.
    -   **Left Column**: Text content (Headline, Subhead, CTAs). Vertical alignment: Center.
    -   **Right Column**: `HeroGlobeIllustrationV7`. Large, immersive, overflowing slightly to the right to create depth.
-   **Navigation**: Top sticky header with Logo (Left), Links (Center), and Login/CTA (Right). Transparent background initially, becoming solid white/blur on scroll.

### Tablet (768px - 1023px)
-   **Vertical Stack**: Content top, Illustration bottom.
-   **Illustration**: Scaled down (0.8x) to fit within the viewport without overwhelming the text.

### Mobile (<768px)
-   **Vertical Stack**: Text first, then Illustration.
-   **Illustration**: Significantly scaled down (0.5x - 0.6x) or simplified.
-   **Text**: Center aligned for better readability on small screens.

## Typography

-   **Font Family**: Inter (sans-serif).
-   **Headline**: 
    -   Size: `text-5xl` to `text-7xl` (Responsive).
    -   Weight: `font-bold` or `font-extrabold`.
    -   Color: Slate 900 (`#0f172a`).
    -   Letter Spacing: Tight (`-0.02em`).
-   **Subheadline**:
    -   Size: `text-xl` or `text-lg`.
    -   Weight: `font-normal`.
    -   Color: Slate 500 (`#64748b`).
    -   Line Height: Relaxed.
-   **CTA Buttons**:
    -   Primary: Orange (`#FF6A3D`) background, White text. Rounded full.
    -   Secondary: Transparent/White background, Slate 900 text, Border.

## Color Palette

-   **Background**: White (`#ffffff`) or very faint Slate 50 (`#f8fafc`).
-   **Primary Brand Color**: Orange `#FF6A3D`. Used for:
    -   Primary Buttons.
    -   Illustration accents (Particles, Rings).
    -   Text highlights (gradient on "AI" or key terms).
-   **Text Colors**:
    -   Primary: Slate 900.
    -   Secondary: Slate 500.
    -   Muted: Slate 400.

## Animation Effects

1.  **Entrance Animation**:
    -   **Staggered Fade-Up**: Headline -> Subhead -> Buttons. (Duration: 0.6s, Delay: 0.1s staggering).
2.  **Continuous Animation**:
    -   **Globe Orbit**: The existing `HeroGlobeIllustrationV7` logic (Orbiting icons, rotating rings, floating particles).
    -   **Floating**: Subtle Y-axis "breathing" motion for the entire illustration container.
3.  **Interaction**:
    -   **Hover Effects**: Buttons scale slightly (1.05x). Icons in orbit glow or pause on hover (optional).
    -   **Parallax**: Slight movement of the globe against the mouse cursor (optional, low priority).

## Hero Illustration Implementation (`HeroGlobeIllustrationV7`)

The illustration has been finalized with the following characteristics:
-   **Central Element**: A large, static, flat-vector style globe image with "AI" text integrated.
    -   Asset: `figma:asset/f851eb49d9488a7fdcf4d178b6c2fbc8c2789f60.png`
    -   Size: 500x500px.
    -   Styling: No container box, blended edges, transparent background.
-   **Surrounding Elements**:
    -   Dynamic SVG orbits.
    -   Floating Lucide icons (Workflow, Bot, Database, etc.) representing platform capabilities.
    -   Animated particles and data trails.
-   **Code Location**: `/components/premium/v7/HeroGlobeIllustrationV7.tsx`

## Implementation Steps

1.  **Review `HeroV7.tsx`**: Ensure it implements the layout described above.
2.  **Integrate Navigation**: Ensure the header sits correctly above the hero.
3.  **Refine Responsive Behavior**: Test the scaling of the globe on mobile devices.
4.  **Finalize Copy**: Replace placeholder text with final "Sun AI" messaging.

## Status

-   [x] Globe Illustration Component (`HeroGlobeIllustrationV7`)
-   [ ] Full Hero Layout (`HeroV7`) - *In Progress*
-   [ ] Mobile Responsiveness - *Pending Review*
-   [ ] Text & Copy Finalization - *Pending*
