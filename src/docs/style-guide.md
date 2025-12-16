# Home Page v7 – Style Guide

This document outlines the visual design system currently implemented in Home Page v7. It reflects only existing styles, components, and patterns found in the codebase.

## A. Color Usage

### Primary Palette
Used for brand identity, actions, and highlights.

| Swatch | Hex | Tailwind Name | Usage |
| :--- | :--- | :--- | :--- |
| ![#FF6A3D](https://placehold.co/15x15/FF6A3D/FF6A3D.png) | `#FF6A3D` | Custom | Primary buttons, text highlights, active borders, particles, "Most Popular" badge |
| ![#E55A2F](https://placehold.co/15x15/E55A2F/E55A2F.png) | `#E55A2F` | Custom | Primary button hover state |
| ![#FFF7ED](https://placehold.co/15x15/FFF7ED/FFF7ED.png) | `#FFF7ED` | `orange-50` | Badge backgrounds, icon wrappers, subtle hover states |
| ![#FFEDD5](https://placehold.co/15x15/FFEDD5/FFEDD5.png) | `#FFEDD5` | `orange-100` | Badge borders, gradients |

### Neutral Palette
Used for text, backgrounds, and structure.

| Swatch | Hex | Tailwind Name | Usage |
| :--- | :--- | :--- | :--- |
| ![#0f172a](https://placehold.co/15x15/0f172a/0f172a.png) | `#0F172A` | `slate-900` | Main headings, primary text, logo text, strong nav links |
| ![#475569](https://placehold.co/15x15/475569/475569.png) | `#475569` | `slate-600` | Navigation links, pricing list items |
| ![#64748b](https://placehold.co/15x15/64748b/64748b.png) | `#64748B` | `slate-500` | Body text, descriptions, subheads |
| ![#94a3b8](https://placehold.co/15x15/94a3b8/94a3b8.png) | `#94A3B8` | `slate-400` | Muted text, footer credits, inactive icons |
| ![#e2e8f0](https://placehold.co/15x15/e2e8f0/e2e8f0.png) | `#E2E8F0` | `slate-200` | Card borders, secondary button borders |
| ![#f1f5f9](https://placehold.co/15x15/f1f5f9/f1f5f9.png) | `#F1F5F9` | `slate-100` | Dividers, footer borders |
| ![#f8fafc](https://placehold.co/15x15/f8fafc/f8fafc.png) | `#F8FAFC` | `slate-50` | Section backgrounds (Features, Pricing) |
| ![#FDFDFD](https://placehold.co/15x15/FDFDFD/FDFDFD.png) | `#FDFDFD` | Custom | Hero section background |
| ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) | `#FFFFFF` | `white` | Card backgrounds, Navbar background |

---

## B. Typography

**Font Family**: `Inter` (Sans-serif)

| Element | Size (Desktop/Mobile) | Weight | Line Height | Color | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Heading** | `text-7xl` / `text-5xl` | `font-bold` | `leading-[1.1]` | `slate-900` | Main H1 |
| **Section Heading** | `text-4xl` / `text-3xl` | `font-bold` | Default | `slate-900` | H2 headers |
| **Pricing Price** | `text-4xl` | `font-bold` | Default | `slate-900` | Pricing value |
| **Card Title** | `text-xl` (Feature) / `text-lg` (Price) | `font-bold` | Default | `slate-900` | Feature/Pricing card headers |
| **Hero Lead** | `text-xl` | `font-medium` | `leading-relaxed` | `slate-500` | Hero description |
| **Body Text** | `text-sm` | Default | `leading-relaxed` | `slate-500` | Card descriptions, lists |
| **Navigation** | `text-sm` | `font-medium` | Default | `slate-600` | Navbar links |
| **Buttons** | `text-sm` | `font-bold` | Default | White / Slate-900 | Action labels |

---

## C. Spacing & Layout

### Container
*   **Max Width**: `container mx-auto`
*   **Horizontal Padding**: `px-6 lg:px-12`

### Vertical Spacing
*   **Hero Padding**: `pt-32 pb-20` (Mobile), `lg:pt-0 lg:pb-0` (Desktop)
*   **Section Padding**: `py-24` (Standard sections), `py-20` (Footer)
*   **Navbar Height**: `h-20` (80px)

### Grid Structure
*   **Hero**: `grid lg:grid-cols-2 gap-12 lg:gap-20`
*   **Features**: `grid md:grid-cols-2 lg:grid-cols-4 gap-6`
*   **Pricing**: `grid md:grid-cols-3 gap-8`
*   **Footer**: `grid md:grid-cols-5 gap-12`

### Component Spacing
*   **Card Padding**: `p-8`
*   **List Item Spacing**: `space-y-3` or `space-y-4`

---

## D. Components

### Buttons

**1. Primary Hero Button**
*   **Background**: `#FF6A3D` (Hover: `#E55A2F`)
*   **Text**: White
*   **Shape**: `rounded-full`
*   **Padding**: `px-8 py-4`
*   **Shadow**: `hover:shadow-lg hover:shadow-orange-500/20`

**2. Secondary Hero Button**
*   **Background**: White (Hover: `orange-50`)
*   **Border**: `slate-200` (Hover: `#FF6A3D`)
*   **Text**: `slate-900` (Hover: `#FF6A3D`)
*   **Shape**: `rounded-full`
*   **Padding**: `px-8 py-4`

**3. Standard Action Button (Nav/Pricing)**
*   **Shape**: `rounded-lg` (Nav) or `rounded-xl` (Pricing)
*   **Padding**: `px-5 py-2.5` or `w-full py-3`
*   **Style**: Matches Primary or Secondary color schemes.

### Cards

**1. Feature Card**
*   **Background**: White
*   **Border**: `slate-200`
*   **Radius**: `rounded-2xl`
*   **Shadow**: `shadow-sm`
*   **Hover**: `shadow-xl`, `translate-y-1`

**2. Pricing Card (Standard)**
*   **Background**: White
*   **Border**: `slate-200`
*   **Radius**: `rounded-2xl`
*   **Hover**: `border-slate-300`

**3. Pricing Card (Pro/Highlighted)**
*   **Border**: `2px solid #FF6A3D`
*   **Shadow**: `shadow-xl`
*   **Radius**: `rounded-2xl`

### Badges / Tags

**1. Hero Pill Badge**
*   **Style**: `bg-orange-50 border border-orange-100`
*   **Text**: `#FF6A3D text-xs font-bold uppercase tracking-wide`
*   **Shape**: `rounded-full`
*   **Content**: Includes a pulsing dot.

**2. "Most Popular" Badge**
*   **Style**: `bg-[#FF6A3D]`
*   **Text**: `white text-xs font-bold uppercase`
*   **Position**: Absolute positioning on top of card.

### Navigation

**1. Desktop Navbar**
*   **Background**: `bg-white/80 backdrop-blur-md`
*   **Border**: `border-b border-slate-100`
*   **Links**: Hover transition to `#FF6A3D`.

---

## E. Iconography & Graphics

### Icons
*   **Library**: Lucide React
*   **Style**: Vector stroke (Outline)
*   **Sizes**:
    *   `w-4 h-4` (Button icons, social links)
    *   `w-5 h-5` (Checkmarks)
    *   `w-6 h-6` (Feature icons)
*   **Feature Icon Container**: `w-12 h-12 bg-orange-50 rounded-xl` flex centered.

### Graphics
*   **Hero Illustration**: Custom `HeroGlobeIllustrationV7`.
    *   Components: SVG Orbits, Particles, Central Image (`figma:asset`), Floating Lucide Icons.
    *   Animation: Motion (framer-motion) rotation and breathing.
*   **Background Decor**:
    *   Gradient Blobs: `bg-gradient-to-br from-orange-100/40` / `from-rose-50/40`.
    *   Blur: `blur-3xl`.

---

## F. Imagery

### Types
*   **Hybrid Vector/Raster**: The hero uses a raster globe image integrated into a vector SVG orbit system.
*   **Abstract Gradients**: Used for background atmosphere in the Hero section.
*   **No Photographs**: No realistic photography or UI screenshots are currently used in the design.
