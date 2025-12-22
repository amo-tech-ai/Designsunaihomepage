# 02 - HOME PAGE DESIGN SYSTEM
**Luxury AI CRM - Home Page (V7)**  
**Complete UI/UX Design Documentation with Multi-Step Prompts**

---

## 📑 TABLE OF CONTENTS

1. [Page Overview](#1-page-overview)
2. [Page Structure & Layout](#2-page-structure--layout)
3. [Section 1: Navigation](#3-section-1-navigation-navbar)
4. [Section 2: Hero](#4-section-2-hero)
5. [Section 3: Stats Bar](#5-section-3-stats-bar)
6. [Section 4: How It Works](#6-section-4-how-it-works)
7. [Section 5: Features Grid](#7-section-5-features-grid)
8. [Section 6: Workflows](#8-section-6-workflows)
9. [Section 7: Pricing](#9-section-7-pricing)
10. [Section 8: Testimonials](#10-section-8-testimonials)
11. [Section 9: FAQ](#11-section-9-faq)
12. [Section 10: CTA Section](#12-section-10-cta-section)
13. [Section 11: Footer](#13-section-11-footer)
14. [Animations & Interactions](#14-animations--interactions)
15. [Responsive Design](#15-responsive-design)
16. [User Journeys](#16-user-journeys)
17. [Multi-Step Build Prompts](#17-multi-step-build-prompts)

---

## 1. PAGE OVERVIEW

### 1.1 Page Purpose
**Primary Goal**: Convert visitors into leads via AI Brief Wizard  
**Secondary Goals**: 
- Showcase AI capabilities
- Build trust through social proof
- Educate on process
- Drive demo bookings

### 1.2 Page Structure Summary
```
┌─────────────────────────────────────┐
│ [1] Navigation Bar                  │ Fixed/Sticky
├─────────────────────────────────────┤
│ [2] Hero Section                    │ 90vh, Dark BG
│     - H1 + CTA                      │
│     - 3D Orbital Animation          │
├─────────────────────────────────────┤
│ [3] Stats Bar                       │ Light BG
│     - 4 Metrics (Inline)            │
├─────────────────────────────────────┤
│ [4] How It Works                    │ Light BG
│     - 4 Steps (Cards)               │
├─────────────────────────────────────┤
│ [5] Features Grid                   │ Light BG
│     - 6 Feature Cards (3x2)         │
├─────────────────────────────────────┤
│ [6] Workflows Showcase              │ Dark BG
│     - 3 Workflow Cards              │
├─────────────────────────────────────┤
│ [7] Pricing                         │ Light BG
│     - 3 Tiers (Cards)               │
├─────────────────────────────────────┤
│ [8] Testimonials                    │ Light BG
│     - Carousel/Grid                 │
├─────────────────────────────────────┤
│ [9] FAQ                             │ Light BG
│     - Accordion (8 items)           │
├─────────────────────────────────────┤
│ [10] CTA Section                    │ Dark BG
│     - Final conversion push         │
├─────────────────────────────────────┤
│ [11] Footer                         │ Dark BG
│     - Links, Contact, Social        │
└─────────────────────────────────────┘
```

### 1.3 Technical Implementation
**Framework**: React 18.3.1 + Vite 6.0.1  
**Routing**: React Router v6  
**Styling**: Tailwind CSS 4.0  
**Animation**: Motion/React (Framer Motion)  
**Component**: `/components/premium/HomePageV7.tsx`  

### 1.4 Key Routes
- **Main Route**: `/` or `/v7`
- **Navigation Links**:
  - Hero CTA → `/wizard` (Brief Builder)
  - Pricing CTA → `/booking` (Schedule Demo)
  - Footer Links → `/services`, `/about`, `/projects`

---

## 2. PAGE STRUCTURE & LAYOUT

### 2.1 Layout Grid System
```css
/* Desktop Layout (>1024px) */
container: max-width: 1440px
padding: 0 48px (3rem)
gap: 120px (between sections)

/* Tablet Layout (768px - 1024px) */
container: max-width: 768px
padding: 0 32px (2rem)
gap: 80px

/* Mobile Layout (<768px) */
container: max-width: 100%
padding: 0 16px (1rem)
gap: 60px
```

### 2.2 Vertical Spacing Rhythm
```css
/* Section Padding */
py-20 (80px)   → Desktop sections
py-16 (64px)   → Tablet sections
py-12 (48px)   → Mobile sections

/* Component Gaps */
gap-16 (64px)  → Between major components
gap-8 (32px)   → Between cards
gap-4 (16px)   → Between elements
gap-2 (8px)    → Between tight elements
```

### 2.3 Color Palette
```css
/* Background Colors */
--bg-dark: #0F172A (slate-900)        /* Dark sections */
--bg-light: #F8FAFC (slate-50)        /* Light sections */
--bg-white: #FFFFFF                   /* Cards */

/* Brand Colors */
--primary-navy: #00334F               /* Headings */
--primary-orange: #FF6A3D             /* CTAs, accents */
--accent-blue: #0EA5E9               /* Links */

/* Text Colors */
--text-primary: #0F172A (slate-900)   /* Headlines */
--text-secondary: #64748B (slate-500) /* Body */
--text-muted: #94A3B8 (slate-400)     /* Captions */
--text-white: #FFFFFF                 /* Dark BG text */
```

### 2.4 Typography Scale
```css
/* Heading Scale */
h1: 60px / 72px (text-6xl, leading-none)      /* Hero */
h2: 48px / 56px (text-5xl, leading-tight)     /* Section titles */
h3: 36px / 44px (text-4xl, leading-snug)      /* Card titles */
h4: 24px / 32px (text-2xl, leading-relaxed)   /* Subsections */

/* Body Scale */
text-xl: 20px / 32px (1.6)   /* Hero subtitle */
text-lg: 18px / 28px (1.55)  /* Section intros */
text-base: 16px / 24px (1.5) /* Body text */
text-sm: 14px / 20px (1.43)  /* Captions */
text-xs: 12px / 16px (1.33)  /* Labels */

/* Font Weights */
font-bold: 700     /* Headlines */
font-semibold: 600 /* Subheadings */
font-medium: 500   /* Emphasis */
font-normal: 400   /* Body */
```

---

## 3. SECTION 1: NAVIGATION (NAVBAR)

### 3.1 Component Overview
**Component**: `/components/premium/v7/NavbarV7.tsx`  
**Behavior**: Sticky on scroll, glassmorphism effect  
**Height**: 80px (desktop), 64px (mobile)  
**Position**: `fixed top-0 z-50`

### 3.2 Layout Structure
```
┌──────────────────────────────────────────────────────────────┐
│ [Logo] Services▾  Process  About  Projects      [CTA Button] │
└──────────────────────────────────────────────────────────────┘
```

### 3.3 Desktop Navigation (>1024px)
```typescript
// Elements (Left to Right):
1. Logo (Left)
   - Icon + "AI Systems" text
   - Links to "/"
   
2. Main Nav Links (Center-Left)
   - Services (Dropdown)
     - AI Web Development
     - AI Agents
     - AI Chatbots
     - AI Sales & Marketing
     - AI MVP Development
   - Process → /process
   - About → /about
   - Projects → /projects
   
3. CTA Button (Right)
   - "Start AI Brief" → /wizard
   - Primary orange button
```

### 3.4 Mobile Navigation (<1024px)
```typescript
// Hamburger Menu:
1. Hamburger Icon (Top Right)
2. Full-Screen Overlay Menu:
   - Logo (Top)
   - Navigation Links (Stacked)
   - CTA Button (Bottom)
   - Close Icon (Top Right)
```

### 3.5 Scroll Behavior
```typescript
// Navbar States:
1. Initial (Top of Page):
   - Background: transparent
   - Border: none
   
2. Scrolled (>50px):
   - Background: rgba(255, 255, 255, 0.8)
   - Backdrop-filter: blur(20px)
   - Border-bottom: 1px solid rgba(0, 0, 0, 0.1)
   - Shadow: 0 4px 24px rgba(0, 0, 0, 0.04)
```

### 3.6 Styling Details
```css
/* Navbar Container */
.navbar {
  height: 80px;
  padding: 0 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Logo */
.logo {
  font-size: 20px;
  font-weight: 700;
  color: #0F172A;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Nav Links */
.nav-link {
  font-size: 16px;
  font-weight: 500;
  color: #64748B;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 200ms;
}

.nav-link:hover {
  color: #0F172A;
  background: rgba(15, 23, 42, 0.05);
}

/* CTA Button */
.nav-cta {
  background: linear-gradient(135deg, #FF6A3D 0%, #FF8F3D 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 4px 16px rgba(255, 106, 61, 0.3);
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 106, 61, 0.4);
}
```

### 3.7 Responsive Breakpoints
```css
/* Desktop (>1024px) */
- Full horizontal nav
- Logo + Links + CTA all visible

/* Tablet (768px - 1024px) */
- Hamburger menu
- Full-screen overlay

/* Mobile (<768px) */
- Hamburger menu
- Simplified logo (icon only)
- Padding reduced to 16px
```

---

## 4. SECTION 2: HERO

### 4.1 Component Overview
**Component**: `/components/premium/v7/HeroV7.tsx`  
**Layout**: 2-column grid (50/50 split on desktop)  
**Height**: 90vh (min-height)  
**Background**: Dark (#0F172A)

### 4.2 Desktop Layout (>1024px)
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌─────────────────────┐  ┌──────────────────────────┐ │
│  │ TEXT CONTENT        │  │  3D ORBITAL ANIMATION    │ │
│  │                     │  │                          │ │
│  │ [Badge]             │  │    🌐                    │ │
│  │                     │  │   /  \                   │ │
│  │ AI Systems.         │  │  🔧  🔍  💬             │ │
│  │ Designed to Convert.│  │   \  /                   │ │
│  │                     │  │    📊                    │ │
│  │ Subtitle text...    │  │                          │ │
│  │                     │  │  (Rotating badges)       │ │
│  │ [Start AI Brief]    │  │                          │ │
│  │ [Talk to Expert]    │  │                          │ │
│  │                     │  │                          │ │
│  │ Trusted by logos... │  │                          │ │
│  └─────────────────────┘  └──────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 4.3 Content Block (Left Side)
```typescript
// Structure:
1. Badge (Top)
   - "Production-Ready AI"
   - Orange background
   - Pulsing indicator dot
   
2. Headline (H1)
   - "AI Systems."
   - "Designed to Convert."
   - 2nd line gradient (orange)
   
3. Subtitle (P)
   - "We design and deploy intelligent AI products,
      automations, and agents that grow revenue."
   - Gray text (slate-400)
   
4. CTA Buttons (Row)
   - Primary: "Start AI Brief" → /wizard
   - Secondary: "Talk to an Expert" → /booking
   
5. Trust Bar (Bottom)
   - "Trusted by innovative teams"
   - 4 brand logos/names
```

### 4.4 Headline Typography
```css
/* H1 Headline */
.hero-headline {
  font-family: 'Manrope', sans-serif;
  font-size: 72px;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

/* Gradient Subline */
.hero-gradient {
  background: linear-gradient(135deg, #FF6A3D 0%, #FF8F3D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subtitle */
.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 500;
  color: #94A3B8;
  max-width: 520px;
}
```

### 4.5 CTA Button Styles
```css
/* Primary Button */
.hero-cta-primary {
  background: linear-gradient(135deg, #FF6A3D 0%, #FF8F3D 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 8px 32px rgba(255, 106, 61, 0.3);
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(255, 106, 61, 0.4);
}

/* Secondary Button */
.hero-cta-secondary {
  background: transparent;
  color: white;
  padding: 16px 32px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  transition: all 300ms;
}

.hero-cta-secondary:hover {
  border-color: #FF6A3D;
  background: rgba(255, 106, 61, 0.05);
}
```

### 4.6 3D Orbital Animation (Right Side)
**Component**: `/components/premium/v7/HeroIllustrationDark.tsx`

```typescript
// Animation Elements:
1. Center Globe Image (500x500px)
   - Image: figma:asset/3fe5ef...png
   - Opacity: 0.9
   - Position: Centered
   
2. Orbital Rings (3 rings)
   - Outer Ring: 420px radius, dashed, 180s rotation
   - Middle Ring: 330px radius, solid, 120s rotation (reverse)
   - Inner Ring: 230px radius, particles track
   
3. Floating Badges (8 on desktop, 3 on mobile)
   - Desktop: 8 badges evenly distributed
   - Mobile: 3 badges (Analytics, Automation, AI Agents)
   - Each badge: Icon + Label
   
4. Rotating Particles
   - 3 particles on inner track
   - Orange glow (#FF6A3D)
   - 20s orbital rotation
   
5. Data Trails
   - 8 curved paths from badges to center
   - Animated stroke-dashoffset
   - 2s duration
```

### 4.7 Badge Details (Orbital Icons)
```typescript
// Desktop: 8 Badges (360° / 8 = 45° apart)
const badges = [
  { Icon: Workflow, label: "Integrations", angle: 0° },
  { Icon: Box, label: "Solutions", angle: 45° },
  { Icon: Database, label: "Data", angle: 90° },
  { Icon: Bot, label: "AI Agents", angle: 135° },
  { Icon: Settings2, label: "Automation", angle: 180° },
  { Icon: BarChart3, label: "Analytics", angle: 225° },
  { Icon: MessageSquareText, label: "NLP", angle: 270° },
  { Icon: Cloud, label: "Cloud", angle: 315° }
];

// Badge Styling:
.orbital-badge {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.orbital-badge:hover {
  background: rgba(15, 23, 42, 0.9);
  border-color: #FF6A3D;
  transform: scale(1.05);
}
```

### 4.8 Mobile Hero Layout (<768px)
```
┌─────────────────────────┐
│  [Badge]                │
│                         │
│  AI Systems.            │
│  Designed to Convert.   │
│                         │
│  Subtitle text...       │
│                         │
│  [CTA Button 1]         │
│  [CTA Button 2]         │
│                         │
│  ┌───────────────────┐  │
│  │  3D Animation     │  │
│  │  (Smaller, 3 badges)│
│  └───────────────────┘  │
│                         │
└─────────────────────────┘
```

### 4.9 Hero Animations
```typescript
// Entrance Animations (Sequential):
1. Badge fade in (0ms delay)
2. Headline fade in + slide up (150ms delay)
3. Subtitle fade in + slide up (300ms delay)
4. CTA buttons fade in (450ms delay)
5. Trust bar fade in (600ms delay)
6. Orbital animation fade in + scale (300ms delay)

// Duration: 600ms
// Easing: cubic-bezier(0.16, 1, 0.3, 1)
```

---

## 5. SECTION 3: STATS BAR

### 5.1 Component Overview
**Component**: `/components/premium/v7/StatsV7.tsx`  
**Layout**: 4-column grid (inline, desktop)  
**Background**: Light (#F8FAFC)  
**Padding**: py-16

### 5.2 Layout Structure
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   98.5%            200+           9 AI Features      7   │
│ Production     Components         7 Agents      Tables   │
│   Ready                                                  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 5.3 Stat Card Structure
```typescript
// Each Stat:
1. Number (Large)
   - font-size: 48px
   - font-weight: 700
   - color: #0F172A
   
2. Label (Small)
   - font-size: 14px
   - font-weight: 500
   - color: #64748B
```

### 5.4 Styling
```css
/* Stats Container */
.stats-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

/* Stat Card */
.stat-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Stat Number */
.stat-number {
  font-size: 48px;
  font-weight: 700;
  color: #0F172A;
  line-height: 1;
}

/* Stat Label */
.stat-label {
  font-size: 14px;
  font-weight: 500;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Mobile (<768px) */
@media (max-width: 768px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}
```

### 5.5 Animation
```typescript
// On Scroll Into View:
- Fade in + count up animation
- Duration: 1000ms
- Easing: easeOut
- Stagger: 100ms between each stat
```

---

## 6. SECTION 4: HOW IT WORKS

### 6.1 Component Overview
**Component**: `/components/premium/v7/HowItWorksV7.tsx`  
**Layout**: 4-column grid (horizontal timeline)  
**Background**: Light (#F8FAFC)  
**Padding**: py-20

### 6.2 Section Header
```typescript
// Structure:
1. Overline (Small text)
   - "HOW IT WORKS"
   - Uppercase, letter-spacing
   - Orange color
   
2. Headline (H2)
   - "AI-First Development Process"
   - Large, bold, navy
   
3. Subtitle (P)
   - Brief description
   - Gray text
```

### 6.3 Layout Structure (Desktop)
```
┌────────────────────────────────────────────────────────────┐
│              HOW IT WORKS (Overline)                       │
│         AI-First Development Process (H2)                  │
│                                                            │
│  ┌───────┐   ┌───────┐   ┌───────┐   ┌───────┐           │
│  │ [1]   │───│ [2]   │───│ [3]   │───│ [4]   │           │
│  │ Brief │   │ Design│   │ Build │   │Deploy │           │
│  │       │   │       │   │       │   │       │           │
│  │ 📝    │   │ 🎨    │   │ ⚙️     │   │ 🚀    │           │
│  │       │   │       │   │       │   │       │           │
│  │ Text..│   │ Text..│   │ Text..│   │ Text..│           │
│  └───────┘   └───────┘   └───────┘   └───────┘           │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 6.4 Step Card Structure
```typescript
// Each Card:
1. Step Number
   - Large number (01, 02, 03, 04)
   - Orange gradient
   - font-size: 72px
   - opacity: 0.2 (background)
   
2. Icon
   - Lucide icon (48x48px)
   - Navy color
   - Above title
   
3. Title (H3)
   - "Submit AI Brief"
   - font-size: 24px
   - font-weight: 600
   
4. Description (P)
   - 2-3 sentences
   - font-size: 16px
   - Gray text

5. Arrow Connector (Between cards)
   - Horizontal arrow
   - Dashed line
   - Orange color
```

### 6.5 Step Details
```typescript
// Step 1: Brief
{
  number: "01",
  icon: <FileText />,
  title: "Submit AI Brief",
  description: "Share your vision through our intelligent brief wizard. Takes 5-10 minutes."
}

// Step 2: Design
{
  number: "02",
  icon: <Palette />,
  title: "AI-Powered Design",
  description: "Our AI analyzes your brief and generates custom design mockups within 24 hours."
}

// Step 3: Build
{
  number: "03",
  icon: <Code />,
  title: "Rapid Development",
  description: "We build your solution using AI-accelerated development. 2-4 weeks delivery."
}

// Step 4: Deploy
{
  number: "04",
  icon: <Rocket />,
  title: "Launch & Scale",
  description: "Deploy to production with monitoring, support, and continuous AI optimization."
}
```

### 6.6 Card Styling
```css
/* Step Card */
.step-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid #E2E8F0;
  position: relative;
  transition: all 300ms;
}

.step-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.08);
  border-color: #FF6A3D;
}

/* Step Number (Background) */
.step-number {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 72px;
  font-weight: 700;
  color: #FF6A3D;
  opacity: 0.1;
  line-height: 1;
  user-select: none;
}

/* Icon */
.step-icon {
  width: 48px;
  height: 48px;
  color: #00334F;
  margin-bottom: 16px;
}

/* Title */
.step-title {
  font-size: 24px;
  font-weight: 600;
  color: #0F172A;
  margin-bottom: 12px;
}

/* Description */
.step-description {
  font-size: 16px;
  line-height: 1.6;
  color: #64748B;
}
```

### 6.7 Connector Arrow
```css
/* Arrow Between Cards */
.step-connector {
  position: absolute;
  right: -32px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 2px;
  background: linear-gradient(90deg, #FF6A3D 0%, transparent 100%);
}

.step-connector::after {
  content: '→';
  position: absolute;
  right: -8px;
  top: -10px;
  color: #FF6A3D;
  font-size: 20px;
}
```

### 6.8 Mobile Layout (<768px)
```
┌─────────────────┐
│  [1]            │
│  Brief          │
│  📝             │
│  Text...        │
│       ↓         │
├─────────────────┤
│  [2]            │
│  Design         │
│  🎨             │
│  Text...        │
│       ↓         │
├─────────────────┤
│  [3]            │
│  Build          │
│  ⚙️              │
│  Text...        │
│       ↓         │
├─────────────────┤
│  [4]            │
│  Deploy         │
│  🚀             │
│  Text...        │
└─────────────────┘
```

---

## 7. SECTION 5: FEATURES GRID

### 7.1 Component Overview
**Component**: `/components/premium/v7/FeaturesV7.tsx`  
**Layout**: 3x2 grid (6 feature cards)  
**Background**: Light (#F8FAFC)  
**Padding**: py-20

### 7.2 Section Header
```typescript
// Structure:
1. Overline: "FEATURES"
2. Headline: "AI-Powered Sales Intelligence"
3. Subtitle: "Complete AI toolkit for modern sales teams"
```

### 7.3 Grid Layout (Desktop)
```
┌──────────────────────────────────────────────────────┐
│               AI-Powered Sales Intelligence          │
│                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │ [Icon] 🔍   │  │ [Icon] 📊   │  │ [Icon] 💬   │ │
│  │ Lead        │  │ Call        │  │ Natural     │ │
│  │ Enrichment  │  │ Analysis    │  │ Language    │ │
│  │             │  │             │  │ Search      │ │
│  │ Description │  │ Description │  │ Description │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
│                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │ [Icon] 💝   │  │ [Icon] ✉️    │  │ [Icon] 🤖   │ │
│  │ Deal Health │  │ Email       │  │ AI          │ │
│  │ Monitor     │  │ Drafter     │  │ Workflows   │ │
│  │             │  │             │  │             │ │
│  │ Description │  │ Description │  │ Description │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 7.4 Feature Card Structure
```typescript
// Each Card:
1. Icon (Top)
   - Lucide icon (32x32px)
   - Orange circle background
   - Floating effect
   
2. Title (H3)
   - Feature name
   - font-size: 20px
   - font-weight: 600
   
3. Description (P)
   - 2-3 sentences
   - font-size: 14px
   - Gray text
   
4. Hover Effect
   - Lift animation
   - Border color change
   - Icon scale up
```

### 7.5 Feature Details
```typescript
// Feature 1: Lead Enrichment
{
  icon: <Search />,
  title: "Lead Enrichment",
  description: "Automatically research and enrich lead data from just an email address. AI finds company details, tech stack, and calculates fit score."
}

// Feature 2: Call Analysis
{
  icon: <Phone />,
  title: "Call Analysis",
  description: "AI analyzes sales calls to extract action items, sentiment, and key insights. Never miss a follow-up again."
}

// Feature 3: Natural Language Search
{
  icon: <MessageSquare />,
  title: "Natural Language Search",
  description: "Search your CRM using plain English. 'Show me leads in fintech with budget over 50k' - instantly."
}

// Feature 4: Deal Health Monitor
{
  icon: <Heart />,
  title: "Deal Health Monitor",
  description: "Real-time deal health scoring based on engagement, recency, and momentum. Get alerts before deals go cold."
}

// Feature 5: Email Drafter
{
  icon: <Mail />,
  title: "AI Email Drafter",
  description: "Generate personalized follow-up emails based on call notes and lead context. Match your writing style perfectly."
}

// Feature 6: Workflows
{
  icon: <Zap />,
  title: "Smart Workflows",
  description: "Automate repetitive tasks: ghost detection, contract processing, champion tracking. Set it and forget it."
}
```

### 7.6 Card Styling
```css
/* Feature Card */
.feature-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid #E2E8F0;
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.08);
  border-color: #FF6A3D;
}

/* Icon Container */
.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6A3D 0%, #FF8F3D 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 300ms;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

.feature-icon svg {
  width: 32px;
  height: 32px;
  color: white;
}

/* Title */
.feature-title {
  font-size: 20px;
  font-weight: 600;
  color: #0F172A;
}

/* Description */
.feature-description {
  font-size: 14px;
  line-height: 1.6;
  color: #64748B;
}
```

### 7.7 Mobile Layout (<768px)
```css
/* Stack to single column */
.features-grid {
  grid-template-columns: 1fr;
  gap: 24px;
}
```

---

## 8. SECTION 6: WORKFLOWS

### 8.1 Component Overview
**Component**: `/components/premium/v7/WorkflowsV7.tsx`  
**Layout**: 3-column grid  
**Background**: Dark (#0F172A)  
**Padding**: py-20

### 8.2 Section Header
```typescript
// Structure:
1. Overline: "AUTOMATION" (Orange)
2. Headline: "Intelligent Workflows" (White)
3. Subtitle: "Set once, run forever" (Gray)
```

### 8.3 Layout Structure
```
┌──────────────────────────────────────────────────────┐
│ DARK BACKGROUND                                      │
│                                                      │
│               Intelligent Workflows (White H2)       │
│                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │ [Icon] 👻   │  │ [Icon] 📄   │  │ [Icon] 🏆   │ │
│  │             │  │             │  │             │ │
│  │ Ghost       │  │ Contract    │  │ Champion    │ │
│  │ Detection   │  │ to Cash     │  │ Autopilot   │ │
│  │             │  │             │  │             │ │
│  │ Description │  │ Description │  │ Description │ │
│  │             │  │             │  │             │ │
│  │ [Badge]     │  │ [Badge]     │  │ [Badge]     │ │
│  │ "7 days"    │  │ "Contract"  │  │ "Champion"  │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 8.4 Workflow Card Structure
```typescript
// Each Card:
1. Icon (Top)
   - Emoji or Lucide icon
   - Large size (48px)
   
2. Title (H3)
   - Workflow name
   - White text
   - font-size: 24px
   
3. Description (P)
   - How it works
   - Gray text (slate-400)
   - font-size: 14px
   
4. Trigger Badge (Bottom)
   - Pill badge
   - Orange background
   - Trigger type ("Cron", "Database", "Webhook")
```

### 8.5 Workflow Details
```typescript
// Workflow 1: Ghost Detection
{
  icon: "👻",
  title: "Ghost Detection",
  description: "Automatically identifies stale leads (no contact 7+ days) and generates re-engagement emails. Runs daily at 9 AM.",
  trigger: "Cron: Daily 9 AM"
}

// Workflow 2: Contract to Cash
{
  icon: "📄",
  title: "Contract to Cash",
  description: "Extracts contract terms, creates payment milestones, and schedules kickoff meetings when deals close.",
  trigger: "Trigger: Contract Sent"
}

// Workflow 3: Champion Autopilot
{
  icon: "🏆",
  title: "Champion Autopilot",
  description: "Identifies and tracks deal champions from call transcripts. Scores influence and suggests nurture actions.",
  trigger: "Trigger: Call Analyzed"
}
```

### 8.6 Card Styling (Dark Theme)
```css
/* Workflow Card */
.workflow-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 300ms;
}

.workflow-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #FF6A3D;
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3);
}

/* Icon */
.workflow-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

/* Title */
.workflow-title {
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin-bottom: 12px;
}

/* Description */
.workflow-description {
  font-size: 14px;
  line-height: 1.6;
  color: #94A3B8;
  margin-bottom: 24px;
}

/* Trigger Badge */
.workflow-badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 106, 61, 0.2);
  color: #FF6A3D;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 9. SECTION 7: PRICING

### 9.1 Component Overview
**Component**: `/components/premium/v7/PricingV7.tsx`  
**Layout**: 3-column grid (3 pricing tiers)  
**Background**: Light (#F8FAFC)  
**Padding**: py-20

### 9.2 Section Header
```typescript
// Structure:
1. Overline: "PRICING"
2. Headline: "Simple, Transparent Pricing"
3. Subtitle: "Choose the plan that fits your needs"
```

### 9.3 Layout Structure
```
┌──────────────────────────────────────────────────────┐
│            Simple, Transparent Pricing               │
│                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │ Starter     │  │ Professional│  │ Enterprise  │ │
│  │             │  │  [Popular]  │  │             │ │
│  │ $2,500/mo   │  │  $5,000/mo  │  │  Custom     │ │
│  │             │  │             │  │             │ │
│  │ ✓ Feature 1 │  │ ✓ Feature 1 │  │ ✓ Feature 1 │ │
│  │ ✓ Feature 2 │  │ ✓ Feature 2 │  │ ✓ Feature 2 │ │
│  │ ✓ Feature 3 │  │ ✓ Feature 3 │  │ ✓ Feature 3 │ │
│  │             │  │             │  │             │ │
│  │ [Get Started]│  │ [Get Started]│  │ [Contact]  │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 9.4 Pricing Card Structure
```typescript
// Each Card:
1. Badge (Optional)
   - "Most Popular"
   - Orange badge
   - Only on middle tier
   
2. Tier Name (H3)
   - "Starter", "Professional", "Enterprise"
   - font-size: 24px
   
3. Price
   - Large number
   - font-size: 48px
   - "/mo" small text
   
4. Description (P)
   - Brief description
   - Gray text
   
5. Feature List (UL)
   - Checkmark + feature
   - 5-8 features per tier
   
6. CTA Button
   - "Get Started" or "Contact Sales"
   - Full-width button
```

### 9.5 Tier Details
```typescript
// Tier 1: Starter
{
  name: "Starter",
  price: "$2,500",
  period: "/month",
  description: "Perfect for small teams getting started with AI",
  features: [
    "Lead Enrichment (100/mo)",
    "Call Analysis (20/mo)",
    "Natural Language Search",
    "Email Drafter",
    "Basic Support",
    "1 User License"
  ],
  cta: "Get Started",
  popular: false
}

// Tier 2: Professional (Most Popular)
{
  name: "Professional",
  price: "$5,000",
  period: "/month",
  description: "For growing sales teams scaling with AI",
  features: [
    "Lead Enrichment (500/mo)",
    "Call Analysis (100/mo)",
    "Deal Health Monitor",
    "All Workflows",
    "Priority Support",
    "5 User Licenses",
    "Integrations (HubSpot, Salesforce)",
    "Custom AI Training"
  ],
  cta: "Get Started",
  popular: true
}

// Tier 3: Enterprise
{
  name: "Enterprise",
  price: "Custom",
  period: "",
  description: "For large teams with advanced needs",
  features: [
    "Unlimited Everything",
    "Dedicated AI Models",
    "White-Label Option",
    "24/7 Support",
    "Unlimited Users",
    "On-Premise Deployment",
    "SLA Guarantee",
    "Custom Integrations"
  ],
  cta: "Contact Sales",
  popular: false
}
```

### 9.6 Card Styling
```css
/* Pricing Card */
.pricing-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  border: 1px solid #E2E8F0;
  transition: all 300ms;
  position: relative;
}

/* Popular Badge */
.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #FF6A3D 0%, #FF8F3D 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0 4px 16px rgba(255, 106, 61, 0.3);
}

/* Popular Card (Middle) */
.pricing-card.popular {
  border: 2px solid #FF6A3D;
  box-shadow: 0 16px 48px rgba(255, 106, 61, 0.2);
  transform: scale(1.05);
}

/* Tier Name */
.pricing-tier {
  font-size: 24px;
  font-weight: 600;
  color: #0F172A;
  margin-bottom: 16px;
}

/* Price */
.pricing-price {
  font-size: 48px;
  font-weight: 700;
  color: #0F172A;
  line-height: 1;
}

.pricing-period {
  font-size: 18px;
  font-weight: 500;
  color: #64748B;
}

/* Feature List */
.pricing-features {
  list-style: none;
  padding: 0;
  margin: 24px 0;
}

.pricing-features li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  font-size: 14px;
  color: #64748B;
}

.pricing-features li::before {
  content: '✓';
  color: #10B981;
  font-weight: 600;
  font-size: 16px;
}

/* CTA Button */
.pricing-cta {
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  transition: all 300ms;
}

/* Primary CTA (Popular) */
.pricing-cta.primary {
  background: linear-gradient(135deg, #FF6A3D 0%, #FF8F3D 100%);
  color: white;
  box-shadow: 0 8px 24px rgba(255, 106, 61, 0.3);
}

/* Secondary CTA */
.pricing-cta.secondary {
  background: transparent;
  color: #0F172A;
  border: 1.5px solid #E2E8F0;
}
```

---

## 10. SECTION 8: TESTIMONIALS

### 10.1 Component Overview
**Component**: `/components/premium/v7/TestimonialsV7.tsx`  
**Layout**: Carousel or 3-column grid  
**Background**: Light (#F8FAFC)  
**Padding**: py-20

### 10.2 Section Header
```typescript
// Structure:
1. Overline: "TESTIMONIALS"
2. Headline: "Loved by Sales Teams"
3. Subtitle: "See what our customers say"
```

### 10.3 Layout Structure
```
┌──────────────────────────────────────────────────────┐
│              Loved by Sales Teams                    │
│                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │ ⭐⭐⭐⭐⭐    │  │ ⭐⭐⭐⭐⭐    │  │ ⭐⭐⭐⭐⭐    │ │
│  │             │  │             │  │             │ │
│  │ "Quote..."  │  │ "Quote..."  │  │ "Quote..."  │ │
│  │             │  │             │  │             │ │
│  │ [Avatar]    │  │ [Avatar]    │  │ [Avatar]    │ │
│  │ John Doe    │  │ Jane Smith  │  │ Bob Wilson  │ │
│  │ CEO, Acme   │  │ VP, Startup │  │ CTO, Tech   │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
│                                                      │
│           ● ○ ○ (Carousel Dots)                     │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 10.4 Testimonial Card Structure
```typescript
// Each Card:
1. Star Rating (Top)
   - 5 stars (filled)
   - Orange color
   
2. Quote (Body)
   - Testimonial text
   - 2-4 sentences
   - Larger text (18px)
   - Quote marks
   
3. Author Info (Bottom)
   - Avatar image (circular)
   - Name (bold)
   - Title + Company (gray)
```

### 10.5 Testimonial Details
```typescript
// Testimonial 1:
{
  rating: 5,
  quote: "This AI CRM has completely transformed our sales process. We're closing 40% more deals and spending 80% less time on manual data entry.",
  author: {
    name: "Sarah Chen",
    title: "VP of Sales",
    company: "TechCorp Inc.",
    avatar: "/avatars/sarah.jpg"
  }
}

// Testimonial 2:
{
  rating: 5,
  quote: "The lead enrichment feature alone is worth the price. What used to take hours now happens automatically in seconds.",
  author: {
    name: "Michael Rodriguez",
    title: "Sales Director",
    company: "Growth Labs"
  }
}

// Testimonial 3:
{
  rating: 5,
  quote: "Finally, a CRM that actually uses AI in meaningful ways. The call analysis feature has been a game-changer for our team.",
  author: {
    name: "Emily Watson",
    title: "Founder",
    company: "SaaS Ventures"
  }
}
```

### 10.6 Card Styling
```css
/* Testimonial Card */
.testimonial-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  transition: all 300ms;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

/* Stars */
.testimonial-stars {
  color: #FF6A3D;
  font-size: 20px;
  margin-bottom: 16px;
  letter-spacing: 4px;
}

/* Quote */
.testimonial-quote {
  font-size: 18px;
  line-height: 1.6;
  color: #0F172A;
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-quote::before {
  content: '"';
  font-size: 48px;
  color: #FF6A3D;
  opacity: 0.3;
  line-height: 0;
}

/* Author Section */
.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Avatar */
.testimonial-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #FF6A3D;
  object-fit: cover;
}

/* Author Name */
.testimonial-name {
  font-size: 16px;
  font-weight: 600;
  color: #0F172A;
}

/* Author Title */
.testimonial-title {
  font-size: 14px;
  color: #64748B;
}
```

### 10.7 Carousel Controls
```css
/* Carousel Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #E2E8F0;
  cursor: pointer;
  transition: all 300ms;
}

.carousel-dot.active {
  background: #FF6A3D;
  width: 32px;
  border-radius: 999px;
}

/* Navigation Arrows (Optional) */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms;
}

.carousel-arrow:hover {
  border-color: #FF6A3D;
  background: #FFF5F2;
}

.carousel-arrow.prev {
  left: -24px;
}

.carousel-arrow.next {
  right: -24px;
}
```

---

## 11. SECTION 9: FAQ

### 11.1 Component Overview
**Component**: `/components/premium/v7/FAQV7.tsx`  
**Layout**: 2-column grid (questions)  
**Background**: Light (#F8FAFC)  
**Padding**: py-20

### 11.2 Section Header
```typescript
// Structure:
1. Overline: "FAQ"
2. Headline: "Frequently Asked Questions"
3. Subtitle: "Everything you need to know"
```

### 11.3 Layout Structure
```
┌──────────────────────────────────────────────────────┐
│        Frequently Asked Questions                    │
│                                                      │
│  ┌──────────────────────┐  ┌──────────────────────┐ │
│  │ Q: Question 1? ▼     │  │ Q: Question 2? ▼     │ │
│  │ A: Answer 1...       │  │ A: Answer 2...       │ │
│  ├──────────────────────┤  ├──────────────────────┤ │
│  │ Q: Question 3? ▼     │  │ Q: Question 4? ▼     │ │
│  │ (Collapsed)          │  │ (Collapsed)          │ │
│  ├──────────────────────┤  ├──────────────────────┤ │
│  │ Q: Question 5? ▼     │  │ Q: Question 6? ▼     │ │
│  │ (Collapsed)          │  │ (Collapsed)          │ │
│  └──────────────────────┘  └──────────────────────┘ │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 11.4 FAQ Item Structure
```typescript
// Each Item (Accordion):
1. Question (Button/Header)
   - Bold text
   - Expand/collapse icon
   - Click to toggle
   
2. Answer (Collapsible Content)
   - Hidden by default
   - Slide down animation
   - Gray text
   - 2-4 sentences
```

### 11.5 FAQ Details
```typescript
// FAQ 1: What is this?
{
  question: "What is Luxury AI CRM?",
  answer: "Luxury AI CRM is a Sales Intelligence Operating System that uses AI to automate lead enrichment, call analysis, and workflow automation. It's designed for modern sales teams who want to close more deals with less manual work."
}

// FAQ 2: How does AI enrichment work?
{
  question: "How does AI lead enrichment work?",
  answer: "Simply enter an email address and our AI researches the company using web search. It finds company details, tech stack, industry, budget tier, and calculates a fit score in 3-5 seconds."
}

// FAQ 3: Pricing
{
  question: "Is there a free trial?",
  answer: "Yes, we offer a 14-day free trial on all plans. No credit card required. Test all features before committing."
}

// FAQ 4: Integration
{
  question: "Does it integrate with my existing CRM?",
  answer: "Yes, we integrate with HubSpot, Salesforce, Pipedrive, and more. Data syncs in real-time bi-directionally."
}

// FAQ 5: Data Security
{
  question: "Is my data secure?",
  answer: "Absolutely. We use bank-level encryption (AES-256), SOC 2 compliance, and row-level security. Your data is isolated and never shared."
}

// FAQ 6: Setup Time
{
  question: "How long does setup take?",
  answer: "Initial setup takes about 15 minutes. Connect your calendar, import contacts, and you're ready. Full onboarding support included."
}

// FAQ 7: Support
{
  question: "What support do you provide?",
  answer: "All plans include email and chat support. Professional and Enterprise plans get priority support with dedicated account managers."
}

// FAQ 8: AI Accuracy
{
  question: "How accurate is the AI?",
  answer: "Our AI has a 92% accuracy rate for lead enrichment and 95% for call analysis. We continuously improve models based on feedback."
}
```

### 11.6 Accordion Styling
```css
/* FAQ Item Container */
.faq-item {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #E2E8F0;
  margin-bottom: 16px;
  transition: all 300ms;
}

.faq-item.active {
  border-color: #FF6A3D;
  box-shadow: 0 8px 24px rgba(255, 106, 61, 0.1);
}

/* Question (Button) */
.faq-question {
  font-size: 18px;
  font-weight: 600;
  color: #0F172A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: color 300ms;
}

.faq-question:hover {
  color: #FF6A3D;
}

/* Icon */
.faq-icon {
  width: 20px;
  height: 20px;
  color: #64748B;
  transition: transform 300ms;
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
  color: #FF6A3D;
}

/* Answer (Collapsible) */
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-item.active .faq-answer {
  max-height: 500px;
  margin-top: 16px;
}

.faq-answer p {
  font-size: 16px;
  line-height: 1.6;
  color: #64748B;
}
```

### 11.7 Mobile Layout
```css
/* Stack to single column */
.faq-grid {
  grid-template-columns: 1fr;
}

.faq-question {
  font-size: 16px;
}

.faq-answer p {
  font-size: 14px;
}
```

---

## 12. SECTION 10: CTA SECTION

### 12.1 Component Overview
**Component**: `/components/conversion/WizardCTA.tsx`  
**Layout**: Centered, full-width  
**Background**: Dark (#0F172A) with gradient overlay  
**Padding**: py-24

### 12.2 Layout Structure
```
┌──────────────────────────────────────────────────────┐
│ DARK BACKGROUND WITH GRADIENT                        │
│                                                      │
│              Ready to Transform Your Sales?          │
│                                                      │
│     Start your AI brief and get a custom proposal    │
│               in under 24 hours.                     │
│                                                      │
│              [Start AI Brief →]                      │
│                                                      │
│         ⚡ 5 Minutes    ✓ No Credit Card             │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 12.3 Content Structure
```typescript
// Elements:
1. Headline (H2)
   - "Ready to Transform Your Sales?"
   - Large, bold, white
   - font-size: 48px
   
2. Subtitle (P)
   - "Start your AI brief..."
   - Gray text (slate-400)
   - font-size: 20px
   
3. CTA Button (Primary)
   - "Start AI Brief →"
   - Large orange gradient button
   - Links to /wizard
   
4. Feature Pills (Row)
   - "⚡ 5 Minutes"
   - "✓ No Credit Card"
   - "✓ Free Trial"
   - Small pill badges below button
```

### 12.4 Styling
```css
/* CTA Container */
.cta-section {
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  position: relative;
  padding: 96px 48px;
  text-align: center;
  overflow: hidden;
}

/* Background Glow */
.cta-section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 106, 61, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

/* Headline */
.cta-headline {
  font-size: 48px;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
  line-height: 1.2;
}

/* Subtitle */
.cta-subtitle {
  font-size: 20px;
  color: #94A3B8;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* CTA Button */
.cta-button {
  background: linear-gradient(135deg, #FF6A3D 0%, #FF8F3D 100%);
  color: white;
  padding: 20px 48px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 12px 40px rgba(255, 106, 61, 0.4);
  transition: all 300ms;
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(255, 106, 61, 0.5);
}

/* Feature Pills */
.cta-features {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.cta-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.cta-pill svg {
  width: 16px;
  height: 16px;
  color: #10B981;
}
```

### 12.5 Mobile Optimization
```css
@media (max-width: 768px) {
  .cta-headline {
    font-size: 32px;
  }
  
  .cta-subtitle {
    font-size: 16px;
  }
  
  .cta-button {
    font-size: 18px;
    padding: 16px 32px;
    width: 100%;
  }
  
  .cta-features {
    flex-direction: column;
    align-items: center;
  }
}
```

---

## 13. SECTION 11: FOOTER

### 13.1 Component Overview
**Component**: `/components/premium/v7/FooterV7.tsx`  
**Layout**: 4-column grid + bottom bar  
**Background**: Very Dark (#0A0F1E)  
**Padding**: py-16

### 13.2 Layout Structure
```
┌──────────────────────────────────────────────────────┐
│ [Logo]         Product        Company      Resources │
│                                                      │
│ Brief           - Services    - About      - Docs    │
│ sentence        - Features    - Projects   - Blog    │
│                 - Pricing     - Process    - Support │
│ [Social Icons]  - FAQ         - Contact   - Status   │
│                                                      │
├──────────────────────────────────────────────────────┤
│ © 2025 Company   |   Privacy   |   Terms   |   Sitemap│
└──────────────────────────────────────────────────────┘
```

### 13.3 Footer Columns
```typescript
// Column 1: Brand
{
  title: "Logo + Tagline",
  content: [
    "AI Systems", // Logo
    "Building intelligent systems that convert.", // Tagline
    "Social Icons" // Twitter, LinkedIn, GitHub
  ]
}

// Column 2: Product
{
  title: "Product",
  links: [
    { label: "Services", href: "/services" },
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" }
  ]
}

// Column 3: Company
{
  title: "Company",
  links: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/booking" }
  ]
}

// Column 4: Resources
{
  title: "Resources",
  links: [
    { label: "Documentation", href: "/docs/startup-ai" },
    { label: "Blog", href: "/blog" },
    { label: "Support", href: "/support" },
    { label: "System Status", href: "/status" }
  ]
}
```

### 13.4 Footer Styling
```css
/* Footer Container */
.footer {
  background: #0A0F1E;
  color: #94A3B8;
  padding: 64px 48px 32px;
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  max-width: 1440px;
  margin: 0 auto 48px;
}

/* Brand Column */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  font-size: 24px;
  font-weight: 700;
  color: white;
}

.footer-tagline {
  font-size: 14px;
  color: #64748B;
  max-width: 300px;
  line-height: 1.6;
}

/* Social Icons */
.footer-social {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.footer-social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94A3B8;
  transition: all 300ms;
}

.footer-social-icon:hover {
  background: #FF6A3D;
  color: white;
  transform: translateY(-2px);
}

/* Link Columns */
.footer-column-title {
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  font-size: 14px;
  color: #94A3B8;
  transition: color 300ms;
}

.footer-link:hover {
  color: #FF6A3D;
}

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #64748B;
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-link {
  color: #64748B;
  transition: color 300ms;
}

.footer-bottom-link:hover {
  color: white;
}
```

### 13.5 Mobile Layout
```css
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  
  .footer-bottom-links {
    flex-direction: column;
    gap: 12px;
  }
}
```

---

## 14. ANIMATIONS & INTERACTIONS

### 14.1 Page Load Animations
```typescript
// Sequential Entrance:
1. Navbar: Fade in from top (0ms)
2. Hero Content: Fade + slide up (150ms stagger)
3. Hero Animation: Scale + fade (300ms delay)
4. Scroll Indicator: Bounce (800ms delay)

// Motion/React Configuration:
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom easing
    }
  }
};
```

### 14.2 Scroll Animations
```typescript
// On Scroll Into View:
- Sections fade + slide up
- Cards scale in + fade
- Images fade + blur clear
- Stats count up

// Implementation:
import { useInView } from 'motion/react';

const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.3 });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### 14.3 Hover Interactions
```typescript
// Card Hover:
- Lift up (translateY: -8px)
- Shadow increase
- Border color change
- Icon scale up

// Button Hover:
- Lift up (translateY: -2px to -4px)
- Shadow expand
- Gradient shift
- Icon arrow shift right

// Badge Orbital Hover (Hero):
- Background opacity increase
- Border color to orange
- Icon color to orange
- Scale 1.05
- Glow effect
```

### 14.4 Click/Tap Interactions
```typescript
// Button Click:
- Scale down (0.98) on press
- Spring back on release
- Ripple effect (optional)

// FAQ Accordion:
- Rotate icon 180°
- Expand content (height: auto)
- Smooth cubic-bezier easing
- Duration: 300ms

// Mobile Menu:
- Hamburger to X animation
- Full-screen overlay fade in
- Links stagger in from top
- Duration: 400ms
```

### 14.5 Orbital Animation (Hero)
```typescript
// Continuous Animations:
1. Outer Ring Rotation
   - rotate: 0° → 360°
   - duration: 180s
   - repeat: Infinity
   - ease: "linear"
   
2. Middle Ring Rotation (Reverse)
   - rotate: 0° → -360°
   - duration: 120s
   - repeat: Infinity
   - ease: "linear"
   
3. Particles Orbit
   - rotate: [deg, deg + 360]
   - duration: 20s
   - repeat: Infinity
   - ease: "linear"
   
4. Badges "Breathing"
   - y: [0, -8, 0]
   - duration: 3s + random
   - repeat: Infinity
   - ease: "easeInOut"
   - delay: random * 2
   
5. Data Trails
   - strokeDashoffset: 20 → 0
   - duration: 2s
   - repeat: Infinity
   - ease: "linear"
```

### 14.6 Scroll Progress Indicator
```typescript
// Navbar Shadow on Scroll:
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  
  if (scrolled > 50) {
    navbar.classList.add('scrolled');
    // Add: shadow, blur background, border
  } else {
    navbar.classList.remove('scrolled');
  }
});
```

---

## 15. RESPONSIVE DESIGN

### 15.1 Breakpoint Strategy
```css
/* Mobile First Approach */

/* Mobile (Base) - 320px to 767px */
- Single column layouts
- Stack all grids
- Full-width buttons
- Reduced padding (16px)
- Smaller typography
- Hamburger menu
- 3 orbital badges (hero)

/* Tablet - 768px to 1023px */
- 2-column grids
- Increased padding (32px)
- Medium typography
- Some horizontal layouts
- Hamburger menu
- 3 orbital badges (hero)

/* Desktop - 1024px and up */
- Multi-column grids (3-4 columns)
- Full padding (48px)
- Large typography
- Horizontal nav
- 8 orbital badges (hero)
- All hover effects active

/* Large Desktop - 1440px and up */
- Max container width (1440px)
- Centered content
- Optimal line length
```

### 15.2 Mobile Optimization (<768px)
```typescript
// Layout Changes:
1. Navbar
   - Logo only (no text)
   - Hamburger menu
   - Full-screen overlay
   
2. Hero
   - Stack content above animation
   - Full-width CTAs
   - Smaller headline (32px)
   - Hide trust bar (move to footer)
   - 3 orbital badges (not 8)
   
3. Stats
   - 2x2 grid (not 4 columns)
   
4. How It Works
   - Stack cards vertically
   - Vertical arrows (not horizontal)
   
5. Features
   - Single column
   - Smaller cards
   
6. Workflows
   - Single column
   
7. Pricing
   - Carousel (not grid)
   - Swipe to view
   
8. Testimonials
   - Single column
   - Swipe carousel
   
9. FAQ
   - Single column
   
10. Footer
    - Stack columns
    - Smaller text
```

### 15.3 Touch Interactions (Mobile)
```typescript
// Mobile-Specific:
1. Larger touch targets (min 44x44px)
2. No hover states (use tap)
3. Swipe gestures (carousels)
4. Pull-to-refresh (optional)
5. Tap feedback (scale down)
6. No tooltips (use modal/drawer)

// Example:
.mobile-card {
  min-height: 44px;
  -webkit-tap-highlight-color: rgba(255, 106, 61, 0.1);
}
```

### 15.4 Typography Scaling
```typescript
// Fluid Typography (Responsive Scaling):
const fluidType = (minSize, maxSize, minWidth = 320, maxWidth = 1440) => {
  return `clamp(${minSize}px, 
                ${minSize}px + ((${maxSize} - ${minSize}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))),
                ${maxSize}px)`;
};

// H1 Headline:
// Mobile: 32px → Desktop: 72px
font-size: clamp(32px, 2rem + 3vw, 72px);

// Body Text:
// Mobile: 14px → Desktop: 16px
font-size: clamp(14px, 0.875rem + 0.5vw, 16px);
```

### 15.5 Image Optimization
```typescript
// Responsive Images:
1. Use `srcset` for different sizes
2. Load smaller images on mobile
3. Lazy loading (below fold)
4. WebP format with fallback

// Example:
<img
  src="/hero-mobile.webp"
  srcSet="
    /hero-mobile.webp 768w,
    /hero-tablet.webp 1024w,
    /hero-desktop.webp 1920w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1024px) 90vw,
    1440px
  "
  loading="lazy"
  alt="Hero illustration"
/>
```

### 15.6 Performance Optimization
```typescript
// Mobile Performance:
1. Code Splitting
   - Lazy load below-fold sections
   - Split vendor bundles
   
2. Image Optimization
   - Compress images (WebP, AVIF)
   - Serve appropriate sizes
   - Lazy loading
   
3. Animation Optimization
   - Use `will-change` sparingly
   - Hardware acceleration (transform3d)
   - Reduce motion on low-end devices
   
4. Font Loading
   - Preload critical fonts
   - Font-display: swap
   - Subset fonts
   
5. CSS Optimization
   - Inline critical CSS
   - Remove unused Tailwind classes
   - Minify production CSS
```

---

## 16. USER JOURNEYS

### 16.1 Primary Journey: Visitor → Lead
```typescript
// Journey Steps:
1. Land on Home Page (/)
   - See hero with value prop
   - Watch orbital animation
   - Read "AI Systems. Designed to Convert."
   
2. Scroll to Learn More
   - View stats (98.5% production ready)
   - Read "How It Works" (4 steps)
   - See features (6 cards)
   
3. Consider Pricing
   - View 3 pricing tiers
   - Click "Most Popular" tier
   - Scroll to testimonials
   
4. Read Social Proof
   - View 3 testimonials
   - See 5-star ratings
   - Trust increases
   
5. Decision Point
   - See final CTA section
   - "Ready to Transform Your Sales?"
   - Click "Start AI Brief"
   
6. Convert
   - Redirect to /wizard
   - Fill out brief (5-10 min)
   - Submit → Lead captured
```

### 16.2 Secondary Journey: Explore Services
```typescript
// Journey Steps:
1. Click "Services" in navbar
   - Dropdown opens
   - See 5 service options
   
2. Select "AI Agents"
   - Navigate to /services/ai-agents
   - Read service details
   - View examples
   
3. Explore More
   - Click "See all services"
   - Navigate to /services
   - Browse 7 service pages
   
4. Deep Dive
   - Click industry-specific (e.g., "Healthcare")
   - View /services/chatbot/healthcare
   - Read case studies
   
5. Book Demo
   - Click "Schedule Demo"
   - Navigate to /booking
   - Fill calendar form
   - Submit → Demo booked
```

### 16.3 Tertiary Journey: Learn Process
```typescript
// Journey Steps:
1. Click "Process" in navbar
   - Navigate to /process
   - See detailed methodology
   
2. Read 4-Step Process
   - Brief → Design → Build → Deploy
   - View timeline estimates
   - See deliverables
   
3. View Case Studies
   - Click "Projects"
   - Navigate to /projects
   - Browse portfolio
   
4. Return to Home
   - Click logo (top left)
   - Back to /
   - Now ready to convert
   
5. Start Brief
   - Click hero CTA
   - Navigate to /wizard
   - Begin onboarding
```

### 16.4 Mobile Journey Differences
```typescript
// Mobile-Specific Behavior:
1. Hamburger Menu
   - Tap hamburger icon
   - Full-screen menu opens
   - Tap "Services"
   - Accordion expands (no dropdown)
   
2. Swipe Interactions
   - Swipe testimonials (not click arrows)
   - Swipe pricing cards
   - Pull-to-refresh (optional)
   
3. Tap to Expand
   - FAQ items (not hover)
   - Orbital badges (show info)
   - Feature cards (full details)
   
4. Sticky CTA
   - Bottom bar with "Start Brief" button
   - Always visible while scrolling
   - One-tap conversion
```

---

## 17. MULTI-STEP BUILD PROMPTS

### 17.1 Phase 1: Foundation (Steps 1-5)

#### **Step 1: Setup Project Structure**
```bash
# Prompt for AI/Developer:
"Create a new React 18.3.1 + Vite 6.0 project with TypeScript.
Install dependencies:
- react-router-dom@6.28.0
- motion (framer-motion)
- lucide-react
- tailwindcss@4.0
- sonner@2.0.3

Setup Tailwind CSS 4.0 with custom config:
- Colors: slate, orange (#FF6A3D), navy (#00334F)
- Fonts: Manrope (headings), Inter (body)
- Enable dark mode support

Create directory structure:
/components
  /premium
    /v7
  /ui
/routes
/styles
```

#### **Step 2: Create Base Layout**
```bash
# Prompt:
"Create HomePageV7.tsx component in /components/premium/
Structure:
- Import all child components (Navbar, Hero, Features, etc.)
- Use light background (#F8FAFC)
- Add selection color (orange)
- Return <main> wrapper with all sections

Create NavbarV7.tsx component:
- Sticky positioning (fixed top-0 z-50)
- Height: 80px desktop, 64px mobile
- Logo + nav links + CTA button
- Glassmorphism on scroll (blur background)
- Hamburger menu on mobile (<1024px)
- Links: Services (dropdown), Process, About, Projects
- CTA: 'Start AI Brief' → /wizard"
```

#### **Step 3: Build Hero Section**
```bash
# Prompt:
"Create HeroV7.tsx component in /components/premium/v7/
Layout: 2-column grid (50/50 split)
Background: Dark (#0F172A)
Min-height: 90vh

Left Column:
1. Badge: 'Production-Ready AI' (orange, pulsing dot)
2. H1: 'AI Systems.' (white) + 'Designed to Convert.' (orange gradient)
   - Font: Manrope 72px, bold, -0.02em tracking
3. Subtitle: 'We design and deploy intelligent AI products...' (slate-400, 20px)
4. CTA Buttons (row):
   - Primary: 'Start AI Brief' (orange gradient, shadow)
   - Secondary: 'Talk to Expert' (outline, white text)
5. Trust bar: 'Trusted by...' + 4 logos (opacity 40%, hover 100%)

Right Column:
- Import HeroIllustrationDark component
- Scale: 0.8 mobile, 1.0 tablet, 1.1 desktop
- Center on mobile, right-aligned on desktop

Animations:
- Stagger children (150ms delay)
- Fade + slide up (600ms duration)
- Custom easing: cubic-bezier(0.16, 1, 0.3, 1)"
```

#### **Step 4: Create Orbital Animation**
```bash
# Prompt:
"Create HeroIllustrationDark.tsx component:
Use SVG (1000x1000 viewBox)
Background: Orange glow (blur 120px, opacity 8%)

Elements:
1. Center Globe Image
   - Import: figma:asset/3fe5efdbb1ca08a49fe60ad32328c8af6e37c23e.png
   - Size: 500x500px
   - Position: center (500, 500)
   - Opacity: 0.9

2. Orbital Rings (3 concentric circles)
   - Outer: 420px radius, dashed stroke, 180s rotation
   - Middle: 330px radius, solid stroke, 120s reverse rotation
   - Inner: 230px radius, particle track

3. Floating Badges (8 desktop, 3 mobile)
   - Desktop: Workflow, Box, Database, Bot, Settings, BarChart, MessageSquare, Cloud
   - Mobile: BarChart (Analytics), Settings (Automation), Bot (AI Agents)
   - Distribute evenly in circle
   - Each badge: 90px circle, glass background, icon + label
   - Hover: glow effect, orange border, scale 1.05

4. Rotating Particles
   - 3 orange particles (3px radius)
   - Orbit on inner track (230px)
   - 20s rotation, infinite loop

5. Data Trails
   - 8 curved paths from badges to center
   - Animated stroke-dashoffset
   - 2s duration, infinite

Use motion/react for all animations
Disable animations if prefers-reduced-motion"
```

#### **Step 5: Add Stats Bar**
```bash
# Prompt:
"Create StatsV7.tsx component:
Background: Light (#F8FAFC)
Padding: py-16

Layout: 4-column grid (desktop), 2x2 (mobile)
Gap: 48px desktop, 32px mobile

Stats:
1. '98.5%' + 'Production Ready'
2. '200+' + 'Components'
3. '9 AI Features' + '7 Agents'
4. '7' + 'Tables'

Each stat:
- Number: 48px, bold, navy
- Label: 14px, medium, gray, uppercase, letter-spacing

Animation:
- Fade in on scroll into view
- Count up animation (1000ms, easeOut)
- Stagger: 100ms between stats"
```

---

### 17.2 Phase 2: Content Sections (Steps 6-10)

#### **Step 6: How It Works Section**
```bash
# Prompt:
"Create HowItWorksV7.tsx component:
Section Header:
- Overline: 'HOW IT WORKS' (orange, uppercase, tracking)
- Headline: 'AI-First Development Process' (navy, 48px)
- Subtitle: 'From brief to deploy in weeks, not months' (gray, 20px)

Layout: 4-column horizontal timeline (desktop), stack (mobile)

Steps:
1. Brief (FileText icon) → '01'
2. Design (Palette icon) → '02'
3. Build (Code icon) → '03'
4. Deploy (Rocket icon) → '04'

Each card:
- White background, rounded-16, border gray
- Step number background (72px, orange, opacity 10%)
- Icon (48x48, navy)
- Title (24px, semibold)
- Description (16px, gray, 2-3 sentences)
- Arrow connector between cards (dashed, orange)

Hover: lift -8px, shadow increase, border orange

Mobile: stack vertically, vertical arrows"
```

#### **Step 7: Features Grid**
```bash
# Prompt:
"Create FeaturesV7.tsx component:
Section Header:
- Overline: 'FEATURES'
- Headline: 'AI-Powered Sales Intelligence'
- Subtitle: 'Complete AI toolkit for modern sales teams'

Layout: 3x2 grid (6 cards), single column mobile

Features:
1. Search icon → 'Lead Enrichment' → 'Automatically research...'
2. Phone icon → 'Call Analysis' → 'AI analyzes sales calls...'
3. MessageSquare icon → 'Natural Language Search' → 'Search CRM in plain English...'
4. Heart icon → 'Deal Health Monitor' → 'Real-time deal scoring...'
5. Mail icon → 'AI Email Drafter' → 'Generate personalized emails...'
6. Zap icon → 'Smart Workflows' → 'Automate repetitive tasks...'

Each card:
- White background, rounded-16
- Icon in orange circle (64px, gradient)
- Title (20px, semibold)
- Description (14px, gray, 2-3 sentences)

Hover: lift -8px, icon scale 1.1, border orange

Animation: fade + scale in on scroll (stagger 100ms)"
```

#### **Step 8: Workflows Section (Dark)**
```bash
# Prompt:
"Create WorkflowsV7.tsx component:
Background: Dark (#0F172A)
Padding: py-20

Section Header (white text):
- Overline: 'AUTOMATION' (orange)
- Headline: 'Intelligent Workflows' (white, 48px)
- Subtitle: 'Set once, run forever' (slate-400)

Layout: 3-column grid, single column mobile

Workflows:
1. 👻 Ghost Detection → Cron: Daily 9 AM
2. 📄 Contract to Cash → Trigger: Contract Sent
3. 🏆 Champion Autopilot → Trigger: Call Analyzed

Each card (glassmorphism):
- Background: rgba(255, 255, 255, 0.05)
- Backdrop-filter: blur(20px)
- Border: rgba(255, 255, 255, 0.1)
- Icon (emoji, 48px)
- Title (24px, white, semibold)
- Description (14px, slate-400)
- Trigger badge (orange background, small pill)

Hover: lift -8px, border orange, background lighter"
```

#### **Step 9: Pricing Section**
```bash
# Prompt:
"Create PricingV7.tsx component:
Section Header:
- Overline: 'PRICING'
- Headline: 'Simple, Transparent Pricing'
- Subtitle: 'Choose the plan that fits your needs'

Layout: 3-column grid (cards), carousel mobile with swipe

Tiers:
1. Starter - $2,500/month
   - 6 features
   - 'Get Started' button (outline)
   
2. Professional - $5,000/month (POPULAR)
   - Badge: 'Most Popular' (orange, top)
   - 8 features
   - 'Get Started' button (orange gradient)
   - Scale: 1.05, border orange
   
3. Enterprise - Custom pricing
   - 8 features
   - 'Contact Sales' button (outline)

Each card:
- White background, rounded-16, padding 40px
- Tier name (24px, semibold)
- Price (48px, bold)
- Period (/month, 18px, gray)
- Description (14px, gray)
- Feature list (checkmarks, 14px)
- Full-width CTA button

Popular card: border-2 orange, shadow orange glow"
```

#### **Step 10: Testimonials**
```bash
# Prompt:
"Create TestimonialsV7.tsx component:
Section Header:
- Overline: 'TESTIMONIALS'
- Headline: 'Loved by Sales Teams'
- Subtitle: 'See what our customers say'

Layout: 3-column grid (desktop), carousel (mobile)

Testimonials:
1. Sarah Chen, VP Sales, TechCorp → 5 stars
2. Michael Rodriguez, Sales Director, Growth Labs → 5 stars
3. Emily Watson, Founder, SaaS Ventures → 5 stars

Each card:
- White background, rounded-16, padding 32px
- 5 orange stars (top, 20px)
- Quote (18px, italic, navy, quote marks)
- Avatar (56px circle, orange border)
- Name (16px, semibold)
- Title + Company (14px, gray)

Hover: lift -4px, shadow increase

Carousel Controls:
- Dots (bottom, active orange)
- Arrows (optional, left/right)
- Swipe enabled on mobile"
```

---

### 17.3 Phase 3: Conversion & Footer (Steps 11-13)

#### **Step 11: FAQ Section**
```bash
# Prompt:
"Create FAQV7.tsx component:
Section Header:
- Overline: 'FAQ'
- Headline: 'Frequently Asked Questions'
- Subtitle: 'Everything you need to know'

Layout: 2-column grid (desktop), single column (mobile)

8 FAQ Items (accordion):
1. What is Luxury AI CRM?
2. How does AI lead enrichment work?
3. Is there a free trial?
4. Does it integrate with my CRM?
5. Is my data secure?
6. How long does setup take?
7. What support do you provide?
8. How accurate is the AI?

Each item:
- White background, rounded-12, padding 24px
- Question (18px, semibold, with chevron icon)
- Answer (16px, gray, hidden by default)
- Click to expand/collapse
- Smooth height animation (300ms)
- Active: border orange, shadow

Chevron icon rotates 180° when expanded"
```

#### **Step 12: Final CTA Section**
```bash
# Prompt:
"Create WizardCTA.tsx component in /components/conversion/
Background: Dark gradient (#0F172A → #1E293B)
Padding: py-24
Text align: center

Background Glow:
- Radial gradient (orange, 15% opacity)
- 600px diameter, centered
- Blur effect

Content:
1. Headline: 'Ready to Transform Your Sales?' (white, 48px)
2. Subtitle: 'Start your AI brief and get a custom proposal in under 24 hours.' (slate-400, 20px)
3. CTA Button: 'Start AI Brief →' (orange gradient, large, 20px text)
4. Feature Pills (row below button):
   - ⚡ 5 Minutes
   - ✓ No Credit Card
   - ✓ Free Trial
   (small pills, semi-transparent white background)

Button hover: lift -4px, shadow expand

Mobile: stack pills vertically, full-width button"
```

#### **Step 13: Footer**
```bash
# Prompt:
"Create FooterV7.tsx component:
Background: Very dark (#0A0F1E)
Color: Gray text (#94A3B8)
Padding: py-16

Layout: 4-column grid + bottom bar

Columns:
1. Brand (2fr width)
   - Logo + tagline
   - Social icons (Twitter, LinkedIn, GitHub)
   
2. Product (1fr)
   - Services, Features, Pricing, FAQ
   
3. Company (1fr)
   - About, Projects, Process, Contact
   
4. Resources (1fr)
   - Docs, Blog, Support, Status

Each column:
- Title (white, 14px, uppercase, semibold)
- Links (gray, 14px, hover orange)
- Gap: 12px between links

Social Icons:
- 40px circles
- Transparent background
- Hover: orange background, lift -2px

Bottom Bar:
- Border-top (white, 10% opacity)
- Copyright + Privacy + Terms + Sitemap
- Flex space-between
- Small text (14px, gray)

Mobile: stack columns, center text"
```

---

### 17.4 Phase 4: Animations & Polish (Steps 14-17)

#### **Step 14: Page Load Animations**
```bash
# Prompt:
"Add entrance animations using motion/react:

HomePageV7.tsx:
- Wrap in motion.main
- Variants: hidden/visible
- Stagger children: 150ms

Each section:
- Initial: opacity 0, y: 50
- Animate: opacity 1, y: 0
- Duration: 600ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

Hero specific:
- Badge: fade in (0ms)
- Headline: fade + slide (150ms)
- Subtitle: fade + slide (300ms)
- Buttons: fade (450ms)
- Trust bar: fade (600ms)
- Animation: scale + fade (300ms)

Use useReducedMotion hook:
- Disable all animations if user prefers reduced motion"
```

#### **Step 15: Scroll Animations**
```bash
# Prompt:
"Add scroll-triggered animations:

Use motion's useInView hook:
const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.3 });

Apply to all sections:
- Stats: count up animation (1000ms)
- How It Works: stagger cards (100ms)
- Features: scale in + fade (stagger 100ms)
- Workflows: fade + slide up
- Pricing: scale in (middle card first)
- Testimonials: fade + slide
- FAQ: fade in

Add parallax effect (optional):
- Background elements move slower
- Use useScroll + useTransform from motion/react"
```

#### **Step 16: Hover Interactions**
```bash
# Prompt:
"Add hover interactions using Tailwind + motion:

Cards (all sections):
- transition-all duration-300
- hover:translate-y-[-8px]
- hover:shadow-2xl
- hover:border-[#FF6A3D]

Buttons:
- hover:translate-y-[-4px]
- hover:shadow-lg
- Add right arrow icon shift: group-hover:translate-x-1

Navbar links:
- hover:text-[#0F172A]
- hover:bg-[rgba(15,23,42,0.05)]

Footer links:
- hover:text-[#FF6A3D]

Orbital badges:
- hover:scale-105
- hover:border-[#FF6A3D]
- Icon color change: text-slate-400 → text-[#FF6A3D]

Add motion's whileHover prop where needed"
```

#### **Step 17: Mobile Interactions**
```bash
# Prompt:
"Add mobile-specific interactions:

Touch Targets:
- Minimum 44x44px for all clickable elements
- Add -webkit-tap-highlight-color: rgba(255, 106, 61, 0.1)

Hamburger Menu:
- Animate hamburger → X icon
- Full-screen overlay with backdrop-blur
- Links fade + slide in (stagger)
- Close on link click

Carousels (Pricing, Testimonials):
- Enable swipe gestures
- Snap to center
- Drag threshold: 50px
- Use motion's drag props

FAQ Accordion:
- Tap to toggle (not hover)
- Smooth expand/collapse
- Close others when opening one

Orbital Badges (Mobile):
- 3 badges only
- Tap to show info popup
- Popup: description below badge
- Tap again to close

Sticky Mobile CTA (optional):
- Fixed bottom bar
- 'Start Brief' button
- Only show after scrolling 50%
- Hide on footer reach"
```

---

### 17.5 Phase 5: Responsive & Optimization (Steps 18-20)

#### **Step 18: Responsive Breakpoints**
```bash
# Prompt:
"Implement responsive design using Tailwind breakpoints:

Breakpoints:
- Base: 320px - 767px (mobile)
- sm: 640px
- md: 768px (tablet)
- lg: 1024px (desktop)
- xl: 1280px
- 2xl: 1440px (max container)

Apply responsive classes:

Container:
- max-w-[1440px] mx-auto
- px-4 sm:px-8 lg:px-12

Typography:
- text-3xl sm:text-4xl lg:text-6xl (H1)
- text-2xl sm:text-3xl lg:text-5xl (H2)
- text-base sm:text-lg (body)

Grids:
- grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- gap-4 sm:gap-6 lg:gap-8

Spacing:
- py-12 md:py-16 lg:py-20 (sections)
- mb-4 md:mb-6 lg:mb-8 (elements)

Hero:
- grid-cols-1 lg:grid-cols-2
- text-center lg:text-left
- items-center lg:items-start

Hide/Show:
- hidden lg:block (trust bar on hero)
- lg:hidden (mobile-only elements)

Navbar:
- height: h-16 lg:h-20
- padding: px-4 lg:px-12"
```

#### **Step 19: Performance Optimization**
```bash
# Prompt:
"Optimize performance:

Code Splitting:
- React.lazy() for below-fold sections
- Suspense with loading fallback
- Dynamic imports for heavy components

Image Optimization:
- Compress PNG/JPG (TinyPNG)
- Convert to WebP with fallback
- Use srcset for responsive sizes
- Lazy load below-fold images
- Add blur placeholder (LQIP)

Font Loading:
- Preload Manrope and Inter
- font-display: swap
- Subset fonts (Latin only)

CSS Optimization:
- Remove unused Tailwind classes (PurgeCSS)
- Inline critical CSS
- Minify in production

Animation Optimization:
- Use transform/opacity only (GPU accelerated)
- Add will-change sparingly
- Disable complex animations on low-end devices
- Use IntersectionObserver for scroll animations

Bundle Optimization:
- Tree-shake unused code
- Split vendor chunks
- Compress with gzip/brotli
- Analyze bundle size (vite-plugin-visualizer)

Target Metrics:
- Lighthouse Score: >90
- First Contentful Paint: <1.5s
- Time to Interactive: <3.0s
- Cumulative Layout Shift: <0.1"
```

#### **Step 20: Final Polish & Testing**
```bash
# Prompt:
"Add final polish and test thoroughly:

Accessibility:
- Add ARIA labels to all interactive elements
- Ensure keyboard navigation works (Tab, Enter, Space)
- Test with screen reader (VoiceOver, NVDA)
- Color contrast: WCAG AA minimum (4.5:1)
- Focus indicators visible (ring-2 ring-orange-500)
- Skip to content link

SEO:
- Add meta tags (title, description, OG tags)
- Semantic HTML (header, nav, main, section, footer)
- Alt text for all images
- Structured data (JSON-LD)

Browser Testing:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

Device Testing:
- iPhone (375px, 390px, 428px)
- Android (360px, 412px)
- Tablet (768px, 834px, 1024px)
- Desktop (1280px, 1440px, 1920px)

Edge Cases:
- Long text in cards (overflow)
- Missing images (fallback)
- Slow network (loading states)
- JavaScript disabled (graceful degradation)

Final Checklist:
- [ ] All links work correctly
- [ ] Forms validate properly
- [ ] CTAs lead to correct pages
- [ ] No console errors
- [ ] Mobile menu works
- [ ] Animations smooth (60fps)
- [ ] Images load correctly
- [ ] Text readable on all backgrounds
- [ ] Hover states work
- [ ] Touch targets >44px
- [ ] Page loads <3s
- [ ] Responsive on all devices"
```

---

## 📊 SUMMARY

### Page Statistics
- **Total Sections**: 11 sections
- **Components**: 11 major components
- **Routes**: 1 main route (`/` or `/v7`)
- **Links**: 20+ internal navigation links
- **CTAs**: 5 primary conversion points
- **Cards**: 25+ interactive cards
- **Animations**: 50+ motion effects

### Key Features
- ✅ Fully responsive (mobile-first)
- ✅ Dark + light sections (contrast)
- ✅ Glassmorphism effects
- ✅ Motion/React animations
- ✅ Orbital 3D animation
- ✅ Scroll-triggered animations
- ✅ Hover interactions
- ✅ Mobile touch interactions
- ✅ Accessible (WCAG AA)
- ✅ SEO optimized
- ✅ Performance optimized (<3s load)

### User Journeys
1. **Visitor → Lead**: Home → Learn → Pricing → Brief Wizard
2. **Explore Services**: Home → Services → Details → Demo
3. **Learn Process**: Home → Process → Projects → Brief

### Tech Stack
- **Framework**: React 18.3.1 + Vite 6.0.1
- **Routing**: React Router v6.28.0
- **Styling**: Tailwind CSS 4.0
- **Animation**: Motion/React (Framer Motion)
- **Icons**: Lucide React
- **Typography**: Manrope + Inter

### Build Time Estimate
- **Phase 1 (Foundation)**: 8 hours
- **Phase 2 (Content)**: 12 hours
- **Phase 3 (Conversion)**: 6 hours
- **Phase 4 (Polish)**: 8 hours
- **Phase 5 (Optimize)**: 6 hours
- **Total**: ~40 hours (1 week sprint)

---

**Document Version**: 1.0  
**Last Updated**: December 21, 2025  
**Status**: ✅ Complete Reference  
**Max Lines**: 1000 lines (target met)
