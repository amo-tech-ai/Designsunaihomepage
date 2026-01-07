# Home Page V10 — Sun AI Agency

## Design Overview

Version 10 follows the clean, minimal aesthetic from the reference screenshots with:

**Color Palette:**
- Background: #FAF7F2 (warm beige/cream)
- Text: #0F172A (dark slate)
- Accent: #FF6A3D (orange)
- White cards with subtle borders

**Typography:**
- Headings: Playfair Display (serif, elegant)
- Body: Inter (sans-serif, clean)

**Style Principles:**
- Lots of whitespace
- Rounded corners (2xl)
- Subtle borders (black/5 opacity)
- Hover states with color transitions
- Motion animations on scroll

## Sections

1. **Hero Section**
   - Large serif headline with italic emphasis
   - Badge with AI indicator
   - Dual CTAs (orange primary, white secondary)
   - Stats grid (4 metrics)

2. **How It Works**
   - 3-step process
   - Large numbered cards
   - Icons for each step
   - Beige background cards

3. **What We Build**
   - 6 core systems in grid
   - White cards on beige background
   - Feature checkmarks
   - Hover effects with orange accent

4. **Industries**
   - 8 industry cards
   - Icon-based design
   - Hover state transforms
   - 4-column grid (responsive)

5. **Features Grid**
   - "What makes it perfect" section
   - Numbered features (01-06)
   - Two-column layout
   - Staggered animations

6. **FAQ**
   - Accordion-style questions
   - Beige cards that turn white on hover
   - Plus icon rotates to X when open
   - Centered layout

7. **Final CTA**
   - Dark background (#0F172A)
   - Large serif headline
   - Dual CTAs
   - "Get custom pricing" message

## Components

- `HomePageV10.tsx` - Main page component
- `Header.tsx` - Fixed navigation with mobile menu
- `Footer.tsx` - Multi-column footer with social links

## Usage

```tsx
import HomePageV10 from './home-v10/HomePageV10';

function App() {
  return <HomePageV10 />;
}
```

## Key Features

- Fully responsive design
- Motion animations using motion/react
- Mobile-friendly navigation
- Accessible accordion FAQ
- Clean, business-focused copy
- Premium feel with calm aesthetic

## Color Reference

```css
Background: #FAF7F2
White: #FFFFFF
Text: #0F172A
Orange: #FF6A3D
Borders: rgba(0, 0, 0, 0.05) to rgba(0, 0, 0, 0.1)
```

## Fonts

- Playfair Display: Headings, numbers, elegant text
- Inter: Body copy, navigation, descriptions

## Animations

- Initial page load: fade-up on hero content
- Scroll-triggered: fade-in on sections
- Hover states: color transitions, scale effects
- FAQ: rotate animation on expand icons
