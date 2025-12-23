# 04 - HOME PAGE ENHANCEMENT ROADMAP
**Luxury AI CRM - Premium Home Page Redesign**  
**High-End UI/UX with Illustrated Cards, Animated Diagrams & Scroll Storytelling**

---

## 📑 TABLE OF CONTENTS

1. [Overview & Vision](#1-overview--vision)
2. [Page Structure (New Layout)](#2-page-structure-new-layout)
3. [Design System Enhancement](#3-design-system-enhancement)
4. [Section 1: Hero (Light Version)](#4-section-1-hero-light-version)
5. [Section 2: How It Works (Enhanced)](#5-section-2-how-it-works-enhanced)
6. [Section 3: Our Expertise (Illustrated Cards)](#6-section-3-our-expertise-illustrated-cards)
7. [Section 4: Smart Automation (Improved)](#7-section-4-smart-automation-improved)
8. [Section 5: Data Intelligence (Improved)](#8-section-5-data-intelligence-improved)
9. [Section 6: Flexible Pricing (Enhanced)](#9-section-6-flexible-pricing-enhanced)
10. [Section 7: Final CTA (Improved)](#10-section-7-final-cta-improved)
11. [Section 8: Footer (Dark)](#11-section-8-footer-dark)
12. [Animation System](#12-animation-system)
13. [Micro-Interactions](#13-micro-interactions)
14. [New Components Needed](#14-new-components-needed)
15. [Multi-Step Build Prompts](#15-multi-step-build-prompts)

---

## 1. OVERVIEW & VISION

### 1.1 Design Philosophy
**From**: Modern, tech-focused  
**To**: Luxury, premium, illustrated storytelling

**Key Principles**:
- **Illustrated Visual Cards**: 3D isometric illustrations, not flat icons
- **Animated Diagrams**: Flowcharts with animated connector lines
- **Scroll-Driven Storytelling**: Each section reveals on scroll
- **Animated Charts**: Progress bars, step indicators, AI performance metrics
- **Micro-Interactions**: Hover effects, button states, card animations
- **Premium Feel**: High-end typography, generous whitespace, elegant colors

### 1.2 Changes Summary
```diff
✅ KEEP (Enhanced):
+ Hero Section (light background version)
+ How It Works (with animated flowchart)
+ Our Expertise (illustrated cards)
+ Smart Automation (improved with diagrams)
+ Data Intelligence (improved with charts)
+ Flexible Pricing (enhanced tiers)
+ Final CTA (improved messaging)

❌ REMOVE:
- Trusted By Fast-Growing Teams
- People Love Automation (Testimonials)
- Frequently Asked Questions

🆕 NEW ELEMENTS:
+ Scroll-driven storytelling
+ Animated connector lines
+ Progress indicators
+ Illustrated isometric cards
+ Interactive flowcharts
+ Animated performance charts
+ Enhanced micro-interactions
```

### 1.3 Page Structure (New)
```
┌─────────────────────────────────────────┐
│ [1] Navigation (Sticky, Light)          │
├─────────────────────────────────────────┤
│ [2] Hero (Light BG, Orbital Animation)  │ 90vh
│     - No "Trusted By" section           │
├─────────────────────────────────────────┤
│ [3] How It Works (Animated Flowchart)   │ Light BG
│     - 4 Steps with connector lines      │
├─────────────────────────────────────────┤
│ [4] Our Expertise (Illustrated Cards)   │ Light BG
│     - 6 Services, Isometric Illustrations│
├─────────────────────────────────────────┤
│ [5] Smart Automation (Improved)         │ White BG
│     - Animated diagram overlay          │
│     - Real-time workflow visualization  │
├─────────────────────────────────────────┤
│ [6] Data Intelligence (Improved)        │ Light BG
│     - Animated performance charts       │
│     - Interactive metrics               │
├─────────────────────────────────────────┤
│ [7] Flexible Pricing (Enhanced)         │ White BG
│     - 3 Tiers, Premium styling          │
├─────────────────────────────────────────┤
│ [8] Final CTA (Improved)                │ Gradient BG
│     - Better messaging, visual elements │
├─────────────────────────────────────────┤
│ [9] Footer (Dark Background)            │ Dark Navy
│     - 4 Columns, Premium styling        │
└─────────────────────────────────────────┘
```

---

## 2. PAGE STRUCTURE (NEW LAYOUT)

### 2.1 Layout Grid
```css
/* Container System */
.container-luxury {
  max-width: 1280px;              /* Narrower for premium feel */
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 80px);
}

/* Section Spacing (More generous) */
section {
  padding: clamp(80px, 10vh, 160px) 0;
}

/* Content Width (Optimal reading) */
.content-width {
  max-width: 720px;               /* Shorter lines for readability */
  margin: 0 auto;
}
```

### 2.2 Color Palette (Enhanced)
```css
/* Primary Colors */
--luxury-navy: #001F3F;           /* Deeper navy */
--luxury-gold: #D4AF37;           /* Premium gold accent */
--luxury-orange: #FF6B35;         /* Vibrant coral orange */
--luxury-cream: #FAF8F5;          /* Warm off-white */

/* Background Colors */
--bg-light: #FAFAFA;              /* Light gray (not pure white) */
--bg-white: #FFFFFF;              /* Pure white for cards */
--bg-cream: #FAF8F5;              /* Warm cream */
--bg-dark: #0A1628;               /* Deep navy (footer) */
--bg-gradient: linear-gradient(135deg, #001F3F 0%, #003D7A 100%);

/* Text Colors */
--text-primary: #0A0F1E;          /* Almost black */
--text-secondary: #4A5568;        /* Medium gray */
--text-muted: #718096;            /* Light gray */
--text-luxury: #D4AF37;           /* Gold for premium elements */

/* Semantic Colors */
--success: #10B981;               /* Green */
--warning: #F59E0B;               /* Amber */
--error: #EF4444;                 /* Red */
--info: #3B82F6;                  /* Blue */
```

### 2.3 Typography (Enhanced)
```css
/* Heading Scale (Larger, more luxurious) */
h1 {
  font-family: 'Playfair Display', 'Manrope', serif;
  font-size: clamp(48px, 6vw, 84px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

h2 {
  font-family: 'Playfair Display', 'Manrope', serif;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h3 {
  font-family: 'Manrope', sans-serif;
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.3;
}

/* Body Scale */
body {
  font-family: 'Inter', sans-serif;
  font-size: clamp(16px, 1.2vw, 18px);
  line-height: 1.7;
  font-weight: 400;
}

.lead-text {
  font-size: clamp(18px, 1.5vw, 22px);
  line-height: 1.6;
  font-weight: 400;
  color: var(--text-secondary);
}
```

### 2.4 Elevation System (Luxury Shadows)
```css
/* Card Shadows (Subtle, elegant) */
.shadow-luxury-sm {
  box-shadow: 
    0 2px 8px rgba(0, 31, 63, 0.04),
    0 1px 2px rgba(0, 31, 63, 0.02);
}

.shadow-luxury-md {
  box-shadow: 
    0 8px 32px rgba(0, 31, 63, 0.08),
    0 2px 8px rgba(0, 31, 63, 0.04);
}

.shadow-luxury-lg {
  box-shadow: 
    0 16px 64px rgba(0, 31, 63, 0.12),
    0 4px 16px rgba(0, 31, 63, 0.06);
}

.shadow-luxury-xl {
  box-shadow: 
    0 24px 96px rgba(0, 31, 63, 0.16),
    0 8px 32px rgba(0, 31, 63, 0.08);
}

/* Hover Elevation */
.card-luxury:hover {
  box-shadow: 
    0 32px 128px rgba(0, 31, 63, 0.20),
    0 12px 48px rgba(0, 31, 63, 0.10);
}
```

---

## 3. DESIGN SYSTEM ENHANCEMENT

### 3.1 Illustration Style
**Style**: Isometric 3D illustrations  
**Palette**: Navy, Orange, Cream, Gold accents  
**Elements**: Geometric shapes, floating elements, depth  

```typescript
// Illustration Guidelines:
1. Perspective: 30° isometric angle
2. Colors: 4-color maximum per illustration
3. Shadows: Soft, subtle drop shadows
4. Details: Minimal but meaningful
5. Style: Geometric, modern, clean
6. Animation: Floating, rotating, parallax
```

### 3.2 Card Style (Enhanced)
```css
/* Luxury Card Base */
.card-luxury {
  background: white;
  border-radius: 24px;               /* Larger radius */
  padding: clamp(32px, 5vw, 48px);
  border: 1px solid rgba(0, 31, 63, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Gradient Overlay (Subtle) */
.card-luxury::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FF6B35 0%, #D4AF37 100%);
  opacity: 0;
  transition: opacity 400ms;
}

.card-luxury:hover::before {
  opacity: 1;
}

/* Illustration Container (Inside Card) */
.card-illustration {
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;
}

/* Floating Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

.card-illustration img {
  animation: float 6s ease-in-out infinite;
}
```

### 3.3 Button Styles (Premium)
```css
/* Primary Button (Luxury) */
.btn-luxury-primary {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8F5A 100%);
  color: white;
  padding: 18px 36px;
  border-radius: 16px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.01em;
  box-shadow: 
    0 8px 32px rgba(255, 107, 53, 0.3),
    0 2px 8px rgba(255, 107, 53, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Shimmer Effect */
.btn-luxury-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 600ms;
}

.btn-luxury-primary:hover::before {
  left: 100%;
}

.btn-luxury-primary:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 12px 48px rgba(255, 107, 53, 0.4),
    0 4px 16px rgba(255, 107, 53, 0.3);
}

/* Secondary Button (Outline) */
.btn-luxury-secondary {
  background: transparent;
  color: var(--luxury-navy);
  padding: 18px 36px;
  border-radius: 16px;
  border: 2px solid var(--luxury-navy);
  font-size: 17px;
  font-weight: 600;
  transition: all 400ms;
}

.btn-luxury-secondary:hover {
  background: var(--luxury-navy);
  color: white;
  transform: translateY(-2px);
}
```

---

## 4. SECTION 1: HERO (LIGHT VERSION)

### 4.1 Overview
**Change**: Dark background → Light background  
**Keep**: Orbital animation, 2-column layout, CTAs  
**Remove**: "Trusted By" section  
**Add**: Subtle pattern overlay, floating geometric shapes  

### 4.2 Layout Structure (Light)
```
┌─────────────────────────────────────────────────────────┐
│ LIGHT BACKGROUND (#FAFAFA)                              │
│                                                         │
│  ┌─────────────────────┐  ┌──────────────────────────┐ │
│  │ TEXT CONTENT        │  │  3D ORBITAL ANIMATION    │ │
│  │                     │  │  (Same as before)        │ │
│  │ [Badge: AI-Powered] │  │                          │ │
│  │                     │  │    🌐                    │ │
│  │ AI Systems.         │  │   /  \                   │ │
│  │ Built for Growth.   │  │  🔧  🔍  💬             │ │
│  │ (Navy text)         │  │   \  /                   │ │
│  │                     │  │    📊                    │ │
│  │ Subtitle...         │  │                          │ │
│  │ (Gray text)         │  │  (Light theme colors)    │ │
│  │                     │  │                          │ │
│  │ [Start Free Trial]  │  │                          │ │
│  │ [Book Demo]         │  │                          │ │
│  │                     │  │                          │ │
│  │ [Scroll Indicator]  │  │                          │ │
│  └─────────────────────┘  └──────────────────────────┘ │
│                                                         │
│ (Floating geometric shapes in background)               │
└─────────────────────────────────────────────────────────┘
```

### 4.3 Content Updates
```typescript
// New Hero Content:
{
  badge: {
    text: "AI-Powered Sales Intelligence",
    icon: <Sparkles />,
    color: "orange-gradient"
  },
  
  headline: {
    line1: "AI Systems.",
    line2: "Built for Growth.",  // Changed from "Designed to Convert"
    style: "Navy text, no gradient on line2"
  },
  
  subtitle: "Deploy intelligent AI agents, automations, and workflows that transform how your sales team works. Zero manual data entry.",
  
  ctas: [
    {
      label: "Start Free Trial",
      icon: <ArrowRight />,
      variant: "primary",
      href: "/wizard"
    },
    {
      label: "Book a Demo",
      icon: <Calendar />,
      variant: "secondary",
      href: "/booking"
    }
  ],
  
  // NEW: Scroll Indicator
  scrollIndicator: {
    text: "Discover How",
    icon: <ChevronDown />,
    animated: true
  }
}
```

### 4.4 Background Enhancements
```css
/* Light Hero Background */
.hero-light {
  background: #FAFAFA;
  position: relative;
  overflow: hidden;
}

/* Subtle Pattern Overlay */
.hero-light::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

/* Floating Geometric Shapes */
.floating-shape {
  position: absolute;
  opacity: 0.08;
  animation: float-rotate 20s infinite ease-in-out;
}

.shape-1 {
  top: 10%;
  left: 5%;
  width: 80px;
  height: 80px;
  border: 2px solid var(--luxury-navy);
  border-radius: 50%;
  animation-delay: 0s;
}

.shape-2 {
  top: 60%;
  left: 10%;
  width: 60px;
  height: 60px;
  background: var(--luxury-orange);
  transform: rotate(45deg);
  animation-delay: 2s;
}

.shape-3 {
  bottom: 20%;
  right: 8%;
  width: 100px;
  height: 100px;
  border: 2px solid var(--luxury-gold);
  border-radius: 20px;
  animation-delay: 4s;
}

@keyframes float-rotate {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(10deg); 
  }
}
```

### 4.5 Orbital Animation Updates (Light Theme)
```typescript
// Update colors for light background:
{
  rings: {
    outer: {
      stroke: "#001F3F",        // Navy (not gray)
      opacity: 0.1
    },
    middle: {
      stroke: "#FF6B35",        // Orange
      opacity: 0.15
    },
    inner: {
      stroke: "#D4AF37",        // Gold
      opacity: 0.2
    }
  },
  
  badges: {
    background: "white",        // White (not dark)
    border: "rgba(0, 31, 63, 0.15)",
    iconColor: "#001F3F",       // Navy icons
    textColor: "#4A5568",       // Gray text
    hover: {
      border: "#FF6B35",        // Orange on hover
      shadow: "0 8px 32px rgba(255, 107, 53, 0.2)"
    }
  },
  
  particles: {
    fill: "#FF6B35"             // Orange particles
  },
  
  centerImage: {
    opacity: 1.0,               // Full opacity
    filter: "drop-shadow(0 16px 48px rgba(0, 31, 63, 0.15))"
  }
}
```

---

## 5. SECTION 2: HOW IT WORKS (ENHANCED)

### 5.1 Overview
**Keep**: 4-step process  
**Add**: Animated flowchart with connector lines  
**Enhance**: Scroll-driven reveals, illustrated icons  

### 5.2 Layout Structure (Enhanced)
```
┌──────────────────────────────────────────────────────────┐
│ LIGHT BACKGROUND (#FAFAFA)                               │
│                                                          │
│            HOW IT WORKS (Overline, Gold)                 │
│        AI-First Development Process (H2, Navy)           │
│                                                          │
│  ┌─────────┐        ┌─────────┐        ┌─────────┐      │
│  │  [01]   │───────▶│  [02]   │───────▶│  [03]   │      │
│  │         │ (Animated) │         │ (Animated) │         │      │
│  │  📝     │  Line  │  🎨     │  Line  │  ⚙️      │      │
│  │ Brief   │        │ Design  │        │  Build  │      │
│  │         │        │         │        │         │      │
│  └─────────┘        └─────────┘        └─────────┘      │
│                            │                             │
│                            │ (Animated)                  │
│                            ▼                             │
│                     ┌─────────┐                          │
│                     │  [04]   │                          │
│                     │  🚀     │                          │
│                     │ Deploy  │                          │
│                     │         │                          │
│                     └─────────┘                          │
│                                                          │
│  (Progress Indicator: 25% → 50% → 75% → 100%)           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 5.3 Flowchart Layout (New)
```typescript
// Flowchart Configuration:
const flowchart = {
  layout: "L-shape",  // Steps 1-2-3 horizontal, then 4 below
  
  steps: [
    {
      id: 1,
      position: { x: 0, y: 0 },
      title: "Submit AI Brief",
      description: "Share your vision in 5-10 minutes",
      icon: "illustrated-form",
      color: "#FF6B35"
    },
    {
      id: 2,
      position: { x: 1, y: 0 },
      title: "AI Analysis",
      description: "Our AI analyzes and generates designs",
      icon: "illustrated-brain",
      color: "#D4AF37"
    },
    {
      id: 3,
      position: { x: 2, y: 0 },
      title: "Rapid Build",
      description: "AI-accelerated development (2-4 weeks)",
      icon: "illustrated-code",
      color: "#3B82F6"
    },
    {
      id: 4,
      position: { x: 1, y: 1 },
      title: "Launch & Scale",
      description: "Deploy with monitoring and support",
      icon: "illustrated-rocket",
      color: "#10B981"
    }
  ],
  
  connectors: [
    { from: 1, to: 2, type: "animated-arrow" },
    { from: 2, to: 3, type: "animated-arrow" },
    { from: 3, to: 4, type: "animated-arrow-down" }
  ]
};
```

### 5.4 Animated Connector Lines
```css
/* Connector Line Base */
.connector-line {
  stroke: var(--luxury-navy);
  stroke-width: 2;
  stroke-dasharray: 8 8;
  opacity: 0.3;
  animation: dash-flow 2s linear infinite;
}

@keyframes dash-flow {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -16; }
}

/* Animated Arrow */
.connector-arrow {
  fill: var(--luxury-orange);
  animation: arrow-pulse 2s ease-in-out infinite;
}

@keyframes arrow-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* Progress Line (Background) */
.progress-line {
  stroke: rgba(0, 31, 63, 0.1);
  stroke-width: 4;
  stroke-linecap: round;
}

/* Active Progress Line */
.progress-line-active {
  stroke: url(#gradient-progress);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: progress-draw 3s ease-in-out forwards;
}

@keyframes progress-draw {
  to { stroke-dashoffset: 0; }
}
```

### 5.5 Step Card (Enhanced)
```css
/* Step Card (Illustrated) */
.step-card-luxury {
  background: white;
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(0, 31, 63, 0.08);
  position: relative;
  transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Step Number Badge */
.step-number {
  position: absolute;
  top: -16px;
  left: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6B35 0%, #FF8F5A 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
}

/* Illustration Container */
.step-illustration {
  width: 100%;
  height: 180px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Hover Effect */
.step-card-luxury:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 24px 64px rgba(0, 31, 63, 0.15);
  border-color: var(--luxury-orange);
}

.step-card-luxury:hover .step-illustration {
  animation: float 2s ease-in-out infinite;
}
```

### 5.6 Scroll-Driven Reveal
```typescript
// Scroll Animation Configuration:
const scrollReveal = {
  step1: {
    trigger: 0.2,  // 20% in viewport
    animation: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      duration: 600
    }
  },
  connector1: {
    trigger: 0.3,
    animation: {
      initial: { strokeDashoffset: 100 },
      animate: { strokeDashoffset: 0 },
      duration: 800
    }
  },
  step2: {
    trigger: 0.4,
    animation: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      duration: 600,
      delay: 200
    }
  },
  // ... continue for all steps
};

// Implementation:
import { useInView } from 'motion/react';

<motion.div
  initial="initial"
  animate={isInView ? "animate" : "initial"}
  variants={scrollReveal.step1.animation}
>
  {/* Step 1 Card */}
</motion.div>
```

---

## 6. SECTION 3: OUR EXPERTISE (ILLUSTRATED CARDS)

### 6.1 Overview
**Keep**: Services showcase  
**Change**: Flat icons → Isometric illustrations  
**Add**: Interactive hover states, floating animations  
**Layout**: 3x2 grid with illustrated cards  

### 6.2 Layout Structure
```
┌──────────────────────────────────────────────────────────┐
│ LIGHT BACKGROUND (#FAFAFA)                               │
│                                                          │
│               OUR EXPERTISE (Gold Overline)              │
│          AI-Powered Business Solutions (H2)              │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ [Isometric]  │  │ [Isometric]  │  │ [Isometric]  │  │
│  │  AI Agents   │  │  Automation  │  │   Chatbots   │  │
│  │              │  │              │  │              │  │
│  │ Deploy intel │  │ Workflow... │  │ Intelligent │  │
│  │              │  │              │  │              │  │
│  │ [Learn More→]│  │ [Learn More→]│  │ [Learn More→]│  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ [Isometric]  │  │ [Isometric]  │  │ [Isometric]  │  │
│  │  Web Apps    │  │   CRM Dev    │  │  Analytics   │  │
│  │              │  │              │  │              │  │
│  │ Full-stack.. │  │ Custom...    │  │ Data-driven │  │
│  │              │  │              │  │              │  │
│  │ [Learn More→]│  │ [Learn More→]│  │ [Learn More→]│  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 6.3 Services Content
```typescript
const services = [
  {
    id: "ai-agents",
    title: "AI Agents",
    description: "Deploy intelligent AI agents that handle research, outreach, and follow-ups automatically.",
    illustration: "isometric-robot",  // Illustrated robot character
    color: "#FF6B35",
    link: "/services/ai-agents",
    features: [
      "Lead enrichment",
      "Call analysis", 
      "Email drafting"
    ]
  },
  {
    id: "automation",
    title: "Smart Automation",
    description: "Workflow automation that eliminates repetitive tasks and accelerates your sales cycle.",
    illustration: "isometric-workflow",  // Flowchart with gears
    color: "#D4AF37",
    link: "/services/automation",
    features: [
      "Ghost detection",
      "Contract processing",
      "Champion tracking"
    ]
  },
  {
    id: "chatbots",
    title: "AI Chatbots",
    description: "Intelligent conversational AI that qualifies leads, books meetings, and answers questions 24/7.",
    illustration: "isometric-chat",  // Chat bubbles with AI
    color: "#3B82F6",
    link: "/services/chatbots",
    features: [
      "Lead qualification",
      "Meeting scheduling",
      "24/7 support"
    ]
  },
  {
    id: "web-apps",
    title: "Web Applications",
    description: "Full-stack web applications built with AI-accelerated development for rapid deployment.",
    illustration: "isometric-browser",  // Browser window with code
    color: "#10B981",
    link: "/services/web-dev",
    features: [
      "React + TypeScript",
      "AI-powered features",
      "2-4 week delivery"
    ]
  },
  {
    id: "crm",
    title: "Custom CRM",
    description: "Tailored CRM solutions with AI intelligence built in from day one.",
    illustration: "isometric-database",  // Database with connections
    color: "#8B5CF6",
    link: "/services/crm",
    features: [
      "Lead management",
      "Deal tracking",
      "AI insights"
    ]
  },
  {
    id: "analytics",
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights with AI-powered analytics and reporting.",
    illustration: "isometric-chart",  // 3D bar chart
    color: "#EC4899",
    link: "/services/analytics",
    features: [
      "Real-time dashboards",
      "Predictive analytics",
      "Custom reports"
    ]
  }
];
```

### 6.4 Illustrated Card Style
```css
/* Service Card (Luxury) */
.service-card-luxury {
  background: white;
  border-radius: 24px;
  padding: 48px 40px;
  border: 1px solid rgba(0, 31, 63, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

/* Gradient Top Border (Revealed on Hover) */
.service-card-luxury::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, 
    var(--card-color) 0%, 
    var(--luxury-gold) 100%
  );
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card-luxury:hover::before {
  transform: scaleX(1);
}

/* Illustration Container (Large) */
.service-illustration {
  width: 100%;
  height: 240px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Illustration Image (Isometric) */
.service-illustration img {
  max-width: 200px;
  max-height: 200px;
  filter: drop-shadow(0 12px 32px rgba(0, 31, 63, 0.15));
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Floating Background Shape */
.service-illustration::before {
  content: '';
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, 
    rgba(var(--card-color-rgb), 0.1) 0%, 
    transparent 70%
  );
  transition: all 600ms;
}

/* Hover Effects */
.service-card-luxury:hover {
  transform: translateY(-12px);
  box-shadow: 0 32px 96px rgba(0, 31, 63, 0.18);
  border-color: var(--card-color);
}

.service-card-luxury:hover .service-illustration img {
  transform: scale(1.08) rotateY(5deg) rotateX(5deg);
  animation: float 3s ease-in-out infinite;
}

.service-card-luxury:hover .service-illustration::before {
  transform: scale(1.2);
  opacity: 0.8;
}

/* Title */
.service-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--luxury-navy);
  margin-bottom: 12px;
}

/* Description */
.service-description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

/* Features List */
.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
}

.service-features li {
  font-size: 14px;
  color: var(--text-muted);
  padding: 6px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.service-features li::before {
  content: '✓';
  color: var(--card-color);
  font-weight: 700;
  font-size: 16px;
}

/* Learn More Link */
.service-link {
  color: var(--card-color);
  font-size: 15px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 300ms;
}

.service-link svg {
  transition: transform 300ms;
}

.service-card-luxury:hover .service-link svg {
  transform: translateX(4px);
}
```

---

## 7. SECTION 4: SMART AUTOMATION (IMPROVED)

### 7.1 Overview
**Improvement**: Add animated workflow diagram overlay  
**Add**: Real-time workflow visualization, interactive nodes  
**Keep**: 3 workflow cards  
**Enhance**: Show data flow with animated particles  

### 7.2 Layout Structure (Improved)
```
┌──────────────────────────────────────────────────────────┐
│ WHITE BACKGROUND                                         │
│                                                          │
│          SMART AUTOMATION (Gold Overline)                │
│     Set Once, Run Forever (H2, Navy)                     │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ [ANIMATED WORKFLOW DIAGRAM - CENTER]               │  │
│  │                                                    │  │
│  │    Trigger ───▶ Process ───▶ Action ───▶ Result  │  │
│  │      [?]         [⚙️]         [✓]         [📊]    │  │
│  │       │           │            │            │      │  │
│  │     (Animated particles flowing through)          │  │
│  │                                                    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ 👻 Ghost     │  │ 📄 Contract  │  │ 🏆 Champion  │  │
│  │ Detection    │  │ to Cash      │  │ Autopilot    │  │
│  │              │  │              │  │              │  │
│  │ Auto re-eng..│  │ Extract...   │  │ Track...     │  │
│  │              │  │              │  │              │  │
│  │ [View Demo→] │  │ [View Demo→] │  │ [View Demo→] │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
│  [Interactive: Click a workflow to see it in action]    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 7.3 Animated Workflow Diagram
```typescript
// Workflow Diagram Configuration:
const workflowDiagram = {
  nodes: [
    {
      id: "trigger",
      type: "input",
      label: "Trigger Event",
      icon: <Zap />,
      color: "#FF6B35",
      position: { x: 0, y: 50 }
    },
    {
      id: "process",
      type: "processing",
      label: "AI Processing",
      icon: <Cpu />,
      color: "#D4AF37",
      position: { x: 25, y: 50 }
    },
    {
      id: "action",
      type: "action",
      label: "Execute Action",
      icon: <CheckCircle />,
      color: "#10B981",
      position: { x: 50, y: 50 }
    },
    {
      id: "result",
      type: "output",
      label: "Track Result",
      icon: <BarChart />,
      color: "#3B82F6",
      position: { x: 75, y: 50 }
    }
  ],
  
  connections: [
    { from: "trigger", to: "process", animated: true },
    { from: "process", to: "action", animated: true },
    { from: "action", to: "result", animated: true }
  ],
  
  particles: {
    count: 5,
    speed: 2,  // seconds to travel one connection
    color: "#FF6B35"
  }
};
```

### 7.4 Workflow Node Style
```css
/* Workflow Node */
.workflow-node {
  position: relative;
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 50%;
  border: 3px solid var(--node-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 31, 63, 0.12);
  cursor: pointer;
  transition: all 400ms;
}

.workflow-node:hover {
  transform: scale(1.15);
  box-shadow: 0 16px 48px rgba(0, 31, 63, 0.20);
}

/* Node Icon */
.workflow-node-icon {
  width: 40px;
  height: 40px;
  color: var(--node-color);
  margin-bottom: 8px;
}

/* Node Label */
.workflow-node-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
}

/* Pulse Animation (Active State) */
@keyframes pulse-node {
  0%, 100% { 
    box-shadow: 0 8px 32px rgba(var(--node-color-rgb), 0.3); 
  }
  50% { 
    box-shadow: 0 8px 48px rgba(var(--node-color-rgb), 0.6); 
  }
}

.workflow-node.active {
  animation: pulse-node 2s ease-in-out infinite;
}
```

### 7.5 Animated Connection Lines
```css
/* Connection Path */
.workflow-connection {
  stroke: rgba(0, 31, 63, 0.2);
  stroke-width: 2;
  fill: none;
}

/* Animated Particle on Path */
.workflow-particle {
  r: 4;
  fill: var(--luxury-orange);
  filter: drop-shadow(0 0 8px var(--luxury-orange));
}

.workflow-particle {
  animation: particle-travel 3s ease-in-out infinite;
}

@keyframes particle-travel {
  0% {
    offset-distance: 0%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 0;
  }
}

/* SVG Path Animation */
.workflow-connection-animated {
  stroke-dasharray: 8 8;
  animation: dash-flow 1s linear infinite;
}

@keyframes dash-flow {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -16; }
}
```

### 7.6 Workflow Card (Enhanced)
```css
/* Workflow Card (Luxury) */
.workflow-card-luxury {
  background: white;
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(0, 31, 63, 0.08);
  position: relative;
  transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

/* Emoji Icon (Large) */
.workflow-emoji {
  font-size: 64px;
  margin-bottom: 24px;
  display: inline-block;
  transition: transform 400ms;
}

.workflow-card-luxury:hover .workflow-emoji {
  transform: scale(1.2) rotateZ(10deg);
}

/* Status Indicator (Top Right) */
.workflow-status {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 16px var(--success);
  animation: pulse-status 2s ease-in-out infinite;
}

@keyframes pulse-status {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Metrics Row */
.workflow-metrics {
  display: flex;
  gap: 24px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 31, 63, 0.08);
}

.workflow-metric {
  flex: 1;
}

.workflow-metric-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--luxury-navy);
}

.workflow-metric-label {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 8. SECTION 5: DATA INTELLIGENCE (IMPROVED)

### 8.1 Overview
**Improvement**: Add animated performance charts  
**Add**: Real-time metrics, interactive data visualization  
**Keep**: Core message about data insights  
**Enhance**: Show live data flowing through charts  

### 8.2 Layout Structure (Improved)
```
┌──────────────────────────────────────────────────────────┐
│ LIGHT BACKGROUND (#FAFAFA)                               │
│                                                          │
│          DATA INTELLIGENCE (Gold Overline)               │
│     Transform Data Into Action (H2, Navy)                │
│                                                          │
│  ┌────────────────────┐  ┌────────────────────────────┐ │
│  │ LEFT: CONTENT      │  │ RIGHT: ANIMATED CHARTS     │ │
│  │                    │  │                            │ │
│  │ • Real-time        │  │  ┌──────────────────────┐ │ │
│  │   insights         │  │  │ [Chart 1: Line]      │ │ │
│  │                    │  │  │ Lead conversion      │ │ │
│  │ • Predictive       │  │  └──────────────────────┘ │ │
│  │   analytics        │  │                            │ │
│  │                    │  │  ┌──────────────────────┐ │ │
│  │ • Custom           │  │  │ [Chart 2: Progress]  │ │ │
│  │   dashboards       │  │  │ Deal health scores   │ │ │
│  │                    │  │  └──────────────────────┘ │ │
│  │ • AI-powered       │  │                            │ │
│  │   forecasting      │  │  ┌──────────────────────┐ │ │
│  │                    │  │  │ [Chart 3: Gauge]     │ │ │
│  │ [View Dashboard→]  │  │  │ AI accuracy: 95%     │ │ │
│  │                    │  │  └──────────────────────┘ │ │
│  └────────────────────┘  └────────────────────────────┘ │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 8.3 Animated Charts Configuration
```typescript
// Chart Configurations:
const charts = [
  {
    type: "line",
    title: "Lead Conversion Trend",
    data: [
      { month: "Jan", value: 45 },
      { month: "Feb", value: 52 },
      { month: "Mar", value: 61 },
      { month: "Apr", value: 68 },
      { month: "May", value: 78 },
      { month: "Jun", value: 85 }
    ],
    color: "#FF6B35",
    animated: true,
    animationDuration: 2000,
    animationDelay: 500
  },
  {
    type: "progress",
    title: "Deal Health Scores",
    metrics: [
      { label: "Enterprise Deals", value: 92, color: "#10B981" },
      { label: "Mid-Market", value: 78, color: "#D4AF37" },
      { label: "SMB", value: 85, color: "#3B82F6" }
    ],
    animated: true,
    animationDuration: 1500
  },
  {
    type: "gauge",
    title: "AI Accuracy",
    value: 95,
    max: 100,
    color: "#D4AF37",
    animated: true,
    animationDuration: 2000,
    showNeedle: true
  }
];
```

### 8.4 Line Chart Animation
```css
/* Chart Container */
.chart-container {
  background: white;
  border-radius: 20px;
  padding: 24px;
  border: 1px solid rgba(0, 31, 63, 0.08);
  box-shadow: 0 4px 16px rgba(0, 31, 63, 0.06);
}

/* Chart Title */
.chart-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Animated Line Path */
.chart-line-path {
  stroke: var(--chart-color);
  stroke-width: 3;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: line-draw 2s ease-out forwards;
}

@keyframes line-draw {
  to { stroke-dashoffset: 0; }
}

/* Gradient Fill Under Line */
.chart-line-fill {
  fill: url(#line-gradient);
  opacity: 0;
  animation: fill-fade-in 1s ease-out 1s forwards;
}

@keyframes fill-fade-in {
  to { opacity: 0.2; }
}

/* Data Points */
.chart-point {
  fill: var(--chart-color);
  r: 0;
  animation: point-grow 600ms ease-out forwards;
}

.chart-point:nth-child(1) { animation-delay: 500ms; }
.chart-point:nth-child(2) { animation-delay: 700ms; }
.chart-point:nth-child(3) { animation-delay: 900ms; }
.chart-point:nth-child(4) { animation-delay: 1100ms; }
.chart-point:nth-child(5) { animation-delay: 1300ms; }
.chart-point:nth-child(6) { animation-delay: 1500ms; }

@keyframes point-grow {
  to { r: 6; }
}

/* Point Hover */
.chart-point:hover {
  r: 8;
  filter: drop-shadow(0 0 8px var(--chart-color));
  cursor: pointer;
}
```

### 8.5 Progress Bar Animation
```css
/* Progress Bar Container */
.progress-bar-container {
  margin-bottom: 20px;
}

/* Progress Label */
.progress-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.progress-label-text {
  color: var(--text-primary);
  font-weight: 500;
}

.progress-label-value {
  color: var(--text-muted);
  font-weight: 600;
}

/* Progress Track */
.progress-track {
  height: 12px;
  background: rgba(0, 31, 63, 0.08);
  border-radius: 999px;
  overflow: hidden;
  position: relative;
}

/* Progress Fill (Animated) */
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, 
    var(--progress-color) 0%, 
    color-mix(in srgb, var(--progress-color) 80%, white) 100%
  );
  border-radius: 999px;
  width: 0;
  animation: progress-fill 1.5s ease-out forwards;
  position: relative;
  overflow: hidden;
}

@keyframes progress-fill {
  to { width: var(--progress-value); }
}

/* Shimmer Effect */
.progress-fill::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.4), 
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}
```

### 8.6 Gauge Chart Animation
```css
/* Gauge Container */
.gauge-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

/* Gauge Background Arc */
.gauge-bg {
  stroke: rgba(0, 31, 63, 0.08);
  stroke-width: 16;
  fill: none;
  stroke-linecap: round;
}

/* Gauge Value Arc (Animated) */
.gauge-value {
  stroke: url(#gauge-gradient);
  stroke-width: 16;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 339.29;  /* 2 * PI * 54 (radius) */
  stroke-dashoffset: 339.29;
  transform: rotate(-90deg);
  transform-origin: center;
  animation: gauge-fill 2s ease-out forwards;
}

@keyframes gauge-fill {
  to { stroke-dashoffset: var(--gauge-offset); }
}

/* Gauge Center Value */
.gauge-value-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.gauge-number {
  font-size: 48px;
  font-weight: 700;
  color: var(--luxury-navy);
  line-height: 1;
}

.gauge-unit {
  font-size: 24px;
  color: var(--text-muted);
}

.gauge-label {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 8px;
}

/* Animated Needle (Optional) */
.gauge-needle {
  stroke: var(--luxury-orange);
  stroke-width: 2;
  stroke-linecap: round;
  transform-origin: center;
  animation: needle-swing 2s ease-out forwards;
}

@keyframes needle-swing {
  0% { transform: rotate(-90deg); }
  to { transform: rotate(var(--needle-angle)); }
}
```

---

## 9. SECTION 6: FLEXIBLE PRICING (ENHANCED)

### 9.1 Overview
**Keep**: 3-tier pricing structure  
**Enhance**: Add animated feature comparison table  
**Add**: Toggle between monthly/annual billing  
**Improve**: Better visual hierarchy, luxury styling  

### 9.2 Layout Structure (Enhanced)
```
┌──────────────────────────────────────────────────────────┐
│ WHITE BACKGROUND                                         │
│                                                          │
│          FLEXIBLE PRICING (Gold Overline)                │
│     Choose Your Growth Plan (H2, Navy)                   │
│                                                          │
│           [Toggle: Monthly ⚫️ Annual]                    │
│           (Save 20% with annual billing)                 │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ STARTER      │  │ PROFESSIONAL │  │ ENTERPRISE   │  │
│  │              │  │  ⭐ Popular  │  │              │  │
│  │ $2,500       │  │  $5,000      │  │  Custom      │  │
│  │ /month       │  │  /month      │  │  Pricing     │  │
│  │              │  │              │  │              │  │
│  │ Perfect for  │  │ For growing  │  │ For large    │  │
│  │ small teams  │  │ sales teams  │  │ enterprises  │  │
│  │              │  │              │  │              │  │
│  │ ✓ Feature 1  │  │ ✓ Feature 1  │  │ ✓ Everything │  │
│  │ ✓ Feature 2  │  │ ✓ Feature 2  │  │ ✓ Unlimited  │  │
│  │ ✓ Feature 3  │  │ ✓ Feature 3  │  │ ✓ Priority   │  │
│  │ ✓ Feature 4  │  │ ✓ Feature 4  │  │ ✓ White Label│  │
│  │              │  │ ✓ Feature 5  │  │ ✓ SLA        │  │
│  │              │  │ ✓ Feature 6  │  │              │  │
│  │              │  │              │  │              │  │
│  │ [Get Started]│  │ [Get Started]│  │ [Contact Us] │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
│  [Feature Comparison Table ▼]                           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 9.3 Billing Toggle
```css
/* Billing Toggle Container */
.billing-toggle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
}

/* Toggle Label */
.billing-label {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 300ms;
}

.billing-label.active {
  color: var(--luxury-navy);
  font-weight: 600;
}

/* Toggle Switch */
.billing-toggle {
  width: 64px;
  height: 32px;
  background: rgba(0, 31, 63, 0.1);
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  transition: all 400ms;
}

.billing-toggle.annual {
  background: var(--luxury-orange);
}

/* Toggle Knob */
.billing-toggle-knob {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

.billing-toggle.annual .billing-toggle-knob {
  left: 36px;
}

/* Savings Badge */
.savings-badge {
  background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
  animation: badge-pulse 2s ease-in-out infinite;
}

@keyframes badge-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

### 9.4 Pricing Card (Luxury)
```css
/* Pricing Card Base */
.pricing-card-luxury {
  background: white;
  border-radius: 24px;
  padding: 48px;
  border: 2px solid rgba(0, 31, 63, 0.08);
  position: relative;
  transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Popular Badge (Professional Tier) */
.pricing-badge-popular {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #FF6B35 0%, #FF8F5A 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
}

/* Professional Card (Popular) */
.pricing-card-luxury.popular {
  border-color: var(--luxury-orange);
  border-width: 2px;
  transform: scale(1.05);
  box-shadow: 0 16px 64px rgba(255, 107, 53, 0.15);
  z-index: 1;
}

/* Tier Name */
.pricing-tier-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}

/* Price */
.pricing-price-container {
  margin-bottom: 8px;
}

.pricing-price {
  font-size: 56px;
  font-weight: 700;
  color: var(--luxury-navy);
  line-height: 1;
  display: inline-block;
}

.pricing-period {
  font-size: 18px;
  color: var(--text-muted);
  font-weight: 500;
}

/* Price Change Animation (Toggle) */
.pricing-price {
  animation: price-change 400ms ease-out;
}

@keyframes price-change {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Description */
.pricing-description {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(0, 31, 63, 0.08);
}

/* Features List */
.pricing-features {
  list-style: none;
  padding: 0;
  margin-bottom: auto;  /* Push CTA to bottom */
}

.pricing-feature {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  font-size: 15px;
  color: var(--text-primary);
}

.pricing-feature-icon {
  width: 20px;
  height: 20px;
  color: var(--luxury-orange);
  flex-shrink: 0;
  margin-top: 2px;
}

/* CTA Button */
.pricing-cta {
  width: 100%;
  padding: 18px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 32px;
  transition: all 400ms;
}

.pricing-cta-primary {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8F5A 100%);
  color: white;
  border: none;
  box-shadow: 0 8px 32px rgba(255, 107, 53, 0.3);
}

.pricing-cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 48px rgba(255, 107, 53, 0.4);
}

.pricing-cta-secondary {
  background: transparent;
  color: var(--luxury-navy);
  border: 2px solid rgba(0, 31, 63, 0.2);
}

.pricing-cta-secondary:hover {
  background: var(--luxury-navy);
  color: white;
  border-color: var(--luxury-navy);
}
```

### 9.5 Feature Comparison Table (Collapsible)
```css
/* Comparison Table Container */
.comparison-table-container {
  margin-top: 64px;
}

/* Toggle Button */
.comparison-toggle {
  background: transparent;
  color: var(--luxury-navy);
  border: 2px solid rgba(0, 31, 63, 0.1);
  border-radius: 16px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0 auto;
  cursor: pointer;
  transition: all 300ms;
}

.comparison-toggle:hover {
  border-color: var(--luxury-orange);
  color: var(--luxury-orange);
}

.comparison-toggle-icon {
  transition: transform 300ms;
}

.comparison-toggle.open .comparison-toggle-icon {
  transform: rotate(180deg);
}

/* Table (Collapsible) */
.comparison-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 32px;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

.comparison-table.open {
  max-height: 2000px;
  opacity: 1;
}

/* Table Header */
.comparison-table th {
  padding: 20px;
  text-align: left;
  font-weight: 600;
  color: var(--luxury-navy);
  background: rgba(0, 31, 63, 0.03);
  border-bottom: 2px solid rgba(0, 31, 63, 0.08);
}

/* Table Row */
.comparison-table td {
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 31, 63, 0.05);
}

/* Feature Name */
.comparison-feature-name {
  font-weight: 500;
  color: var(--text-primary);
}

/* Check/Cross Icons */
.comparison-check {
  color: var(--luxury-orange);
  width: 20px;
  height: 20px;
}

.comparison-cross {
  color: rgba(0, 31, 63, 0.2);
  width: 20px;
  height: 20px;
}
```

---

## 10. SECTION 7: FINAL CTA (IMPROVED)

### 10.1 Overview
**Improvement**: Better messaging, visual elements  
**Add**: Animated background, floating shapes  
**Enhance**: Stronger call-to-action, urgency elements  
**Style**: Gradient background, luxury feel  

### 10.2 Layout Structure (Improved)
```
┌──────────────────────────────────────────────────────────┐
│ GRADIENT BACKGROUND (Navy → Deep Blue)                   │
│                                                          │
│  (Floating geometric shapes, subtle animation)           │
│                                                          │
│            Transform Your Sales Team Today               │
│                  (Large H2, White)                       │
│                                                          │
│    Join 500+ companies using AI to close more deals     │
│              (Subtitle, Light Gray)                      │
│                                                          │
│         [Start Free Trial →]  [Book Demo]               │
│              (Primary)          (Secondary)              │
│                                                          │
│  ⚡ Setup in 15 min  |  ✓ No credit card  |  ✓ 14-day trial│
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │ [Trust Indicators: Stats or Logos]              │   │
│  │ "95% accuracy • 2-4 week delivery • 24/7 support"│  │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 10.3 Content Updates
```typescript
// Improved CTA Content:
{
  headline: "Transform Your Sales Team Today",
  subtitle: "Join 500+ companies using AI to close more deals, eliminate manual work, and accelerate growth.",
  
  ctas: [
    {
      label: "Start Free Trial",
      icon: <ArrowRight />,
      variant: "primary-white",  // White button on dark BG
      href: "/wizard"
    },
    {
      label: "Book a Demo",
      icon: <Calendar />,
      variant: "outline-white",
      href: "/booking"
    }
  ],
  
  features: [
    { icon: <Zap />, text: "Setup in 15 minutes" },
    { icon: <Check />, text: "No credit card required" },
    { icon: <Shield />, text: "14-day free trial" }
  ],
  
  trustIndicators: [
    { metric: "95%", label: "AI Accuracy" },
    { metric: "2-4 weeks", label: "Delivery Time" },
    { metric: "24/7", label: "Support" }
  ]
}
```

### 10.4 Background Styling (Enhanced)
```css
/* CTA Section */
.cta-section-luxury {
  background: linear-gradient(135deg, 
    #001F3F 0%, 
    #003D7A 50%,
    #001F3F 100%
  );
  padding: clamp(80px, 12vh, 160px) 0;
  position: relative;
  overflow: hidden;
}

/* Animated Background Glow */
.cta-section-luxury::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, 
    rgba(255, 107, 53, 0.15) 0%, 
    transparent 70%
  );
  animation: glow-pulse 8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes glow-pulse {
  0%, 100% { 
    transform: translate(-50%, -50%) scale(1); 
    opacity: 0.5;
  }
  50% { 
    transform: translate(-50%, -50%) scale(1.2); 
    opacity: 0.8;
  }
}

/* Floating Shapes (Luxury) */
.cta-floating-shape {
  position: absolute;
  opacity: 0.1;
  pointer-events: none;
}

.cta-shape-1 {
  top: 15%;
  left: 10%;
  width: 120px;
  height: 120px;
  border: 3px solid var(--luxury-gold);
  border-radius: 50%;
  animation: float-slow 15s ease-in-out infinite;
}

.cta-shape-2 {
  bottom: 20%;
  right: 12%;
  width: 100px;
  height: 100px;
  background: var(--luxury-orange);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: float-slow 20s ease-in-out infinite reverse;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(10deg); }
}
```

### 10.5 Content Styling
```css
/* Headline */
.cta-headline {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* Subtitle */
.cta-subtitle {
  font-size: clamp(18px, 2vw, 22px);
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 48px;
  line-height: 1.6;
}

/* CTA Buttons Container */
.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

/* Primary CTA (White on Dark) */
.cta-btn-primary-white {
  background: white;
  color: var(--luxury-navy);
  padding: 20px 40px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 12px 40px rgba(255, 255, 255, 0.2);
  transition: all 400ms;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.cta-btn-primary-white:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 56px rgba(255, 255, 255, 0.3);
  background: var(--luxury-cream);
}

/* Secondary CTA (Outline White) */
.cta-btn-outline-white {
  background: transparent;
  color: white;
  padding: 20px 40px;
  border-radius: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-weight: 600;
  transition: all 400ms;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.cta-btn-outline-white:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

/* Feature Pills */
.cta-features {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.cta-feature-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
  font-weight: 500;
}

.cta-feature-icon {
  width: 20px;
  height: 20px;
  color: var(--luxury-gold);
}

/* Trust Indicators */
.cta-trust {
  display: flex;
  gap: 48px;
  justify-content: center;
  padding: 32px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.cta-trust-item {
  text-align: center;
}

.cta-trust-metric {
  font-size: 32px;
  font-weight: 700;
  color: var(--luxury-gold);
  margin-bottom: 4px;
}

.cta-trust-label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 11. SECTION 8: FOOTER (DARK)

### 11.1 Overview
**Style**: Dark navy background  
**Layout**: 4-column grid + bottom bar  
**Enhancement**: Better visual hierarchy, luxury styling  

### 11.2 Layout Structure
```
┌──────────────────────────────────────────────────────────┐
│ DARK NAVY BACKGROUND (#0A1628)                           │
│                                                          │
│  ┌────────┐   ┌───────┐   ┌────────┐   ┌──────────┐   │
│  │ BRAND  │   │PRODUCT│   │COMPANY │   │ RESOURCES│   │
│  │        │   │       │   │        │   │          │   │
│  │ Logo   │   │Service│   │ About  │   │ Docs     │   │
│  │ Tagline│   │Feature│   │Project │   │ Blog     │   │
│  │        │   │Pricing│   │Process │   │ Support  │   │
│  │ Socials│   │       │   │Contact │   │ API      │   │
│  └────────┘   └───────┘   └────────┘   └──────────┘   │
│                                                          │
│  ────────────────────────────────────────────────────   │
│                                                          │
│  © 2025 AI Systems  |  Privacy  |  Terms  |  Sitemap   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 11.3 Footer Styling (Luxury)
```css
/* Footer Container */
.footer-luxury {
  background: #0A1628;
  color: rgba(255, 255, 255, 0.7);
  padding: 80px 0 32px;
  position: relative;
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 64px;
  max-width: 1280px;
  margin: 0 auto 64px;
  padding: 0 clamp(24px, 5vw, 80px);
}

/* Brand Column */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-logo {
  font-size: 28px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-logo-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #FF6B35 0%, #FF8F5A 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.footer-tagline {
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  max-width: 320px;
}

/* Social Icons */
.footer-social {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.footer-social-link {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 300ms;
}

.footer-social-link:hover {
  background: var(--luxury-orange);
  color: white;
  transform: translateY(-3px);
}

/* Link Columns */
.footer-column-title {
  font-size: 14px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-link {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  transition: all 300ms;
  display: inline-block;
  position: relative;
}

.footer-link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--luxury-orange);
  transition: width 300ms;
}

.footer-link:hover {
  color: white;
  transform: translateX(4px);
}

.footer-link:hover::before {
  width: 100%;
}

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: clamp(24px, 5vw, 80px);
  padding-right: clamp(24px, 5vw, 80px);
}

.footer-copyright {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.footer-bottom-links {
  display: flex;
  gap: 32px;
}

.footer-bottom-link {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  transition: color 300ms;
}

.footer-bottom-link:hover {
  color: white;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .footer-bottom-links {
    flex-direction: column;
    gap: 12px;
  }
}
```

---

## 12. ANIMATION SYSTEM

### 12.1 Scroll-Driven Storytelling
```typescript
// Scroll Animation Configuration:
const scrollAnimations = {
  // Section reveals
  sections: {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    viewport: { once: true, amount: 0.3 }
  },
  
  // Card stagger
  cardContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  
  card: {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  },
  
  // Parallax elements
  parallax: {
    slow: { y: [0, -50] },
    medium: { y: [0, -100] },
    fast: { y: [0, -150] }
  }
};

// Implementation:
import { motion, useScroll, useTransform, useInView } from 'motion/react';

const ref = useRef(null);
const isInView = useInView(ref, scrollAnimations.sections.viewport);
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], scrollAnimations.parallax.slow.y);

<motion.section
  ref={ref}
  initial="initial"
  animate={isInView ? "animate" : "initial"}
  variants={scrollAnimations.sections}
>
  {/* Content */}
</motion.section>
```

### 12.2 Performance Optimization
```typescript
// Reduce Motion Preference:
const prefersReducedMotion = useReducedMotion();

const animations = prefersReducedMotion ? {
  initial: {},
  animate: {},
  transition: { duration: 0 }
} : {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Lazy Load Animations:
const LazyAnimatedComponent = lazy(() => 
  import('./AnimatedComponent')
);

<Suspense fallback={<Skeleton />}>
  <LazyAnimatedComponent />
</Suspense>
```

---

## 13. MICRO-INTERACTIONS

### 13.1 Button Interactions
```css
/* Button Base */
.btn-luxury {
  position: relative;
  overflow: hidden;
  transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Ripple Effect */
.btn-luxury::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 600ms, height 600ms;
}

.btn-luxury:active::after {
  width: 300px;
  height: 300px;
}

/* Icon Animation */
.btn-luxury-icon {
  transition: transform 300ms;
}

.btn-luxury:hover .btn-luxury-icon {
  transform: translateX(4px);
}

/* Loading State */
.btn-luxury.loading {
  pointer-events: none;
  opacity: 0.7;
}

.btn-luxury.loading::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-top-color: white;
  border-radius: inherit;
  animation: btn-spin 800ms linear infinite;
}

@keyframes btn-spin {
  to { transform: rotate(360deg); }
}
```

### 13.2 Card Interactions
```css
/* Card Hover Lift */
.card-luxury {
  transition: 
    transform 600ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

.card-luxury:hover {
  transform: translateY(-12px) scale(1.02);
}

/* Magnetic Effect (Advanced) */
.card-magnetic {
  transition: transform 100ms ease-out;
}

/* JS: Update transform based on mouse position */
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  card.style.transform = `
    translate(${x * 0.1}px, ${y * 0.1}px) 
    translateY(-12px)
  `;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = '';
});
```

### 13.3 Input Interactions
```css
/* Input Focus State */
.input-luxury {
  border: 2px solid rgba(0, 31, 63, 0.1);
  transition: all 300ms;
}

.input-luxury:focus {
  border-color: var(--luxury-orange);
  box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1);
  outline: none;
}

/* Label Float Animation */
.input-container {
  position: relative;
}

.input-label {
  position: absolute;
  top: 16px;
  left: 16px;
  color: var(--text-muted);
  pointer-events: none;
  transition: all 300ms;
}

.input-luxury:focus + .input-label,
.input-luxury:not(:placeholder-shown) + .input-label {
  top: -10px;
  left: 12px;
  font-size: 12px;
  color: var(--luxury-orange);
  background: white;
  padding: 0 4px;
}
```

### 13.4 Scroll Indicator
```css
/* Scroll Indicator (Hero) */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  animation: scroll-bounce 2s ease-in-out infinite;
}

@keyframes scroll-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

.scroll-indicator-text {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.scroll-indicator-icon {
  width: 24px;
  height: 24px;
  color: var(--luxury-orange);
}
```

---

## 14. NEW COMPONENTS NEEDED

### 14.1 Component List
```typescript
// New Components to Create:

1. /components/premium/v7/HeroLight.tsx
   - Light background version of hero
   - Same orbital animation, updated colors
   
2. /components/premium/v7/HowItWorksFlowchart.tsx
   - Animated flowchart with connector lines
   - Scroll-driven step reveals
   
3. /components/premium/v7/ExpertiseCards.tsx
   - Illustrated service cards (isometric)
   - 6 services with hover animations
   
4. /components/premium/v7/AutomationDiagram.tsx
   - Interactive workflow diagram
   - Animated particles, node interactions
   
5. /components/premium/v7/DataCharts.tsx
   - Animated line, progress, gauge charts
   - Scroll-triggered animations
   
6. /components/premium/v7/PricingToggle.tsx
   - Monthly/Annual billing toggle
   - Smooth price transitions
   
7. /components/premium/v7/PricingComparison.tsx
   - Collapsible feature comparison table
   - Check/cross icons
   
8. /components/premium/v7/CTALuxury.tsx
   - Enhanced CTA section
   - Gradient background, floating shapes
   
9. /components/premium/v7/FooterLuxury.tsx
   - Dark footer with luxury styling
   - Better visual hierarchy
   
10. /components/ui/ScrollIndicator.tsx
    - Reusable scroll indicator
    - Bounce animation
    
11. /components/ui/IllustratedCard.tsx
    - Reusable illustrated card
    - Configurable illustration, color
    
12. /components/ui/AnimatedChart.tsx
    - Reusable chart component
    - Line, bar, gauge, progress variants
```

### 14.2 File Structure
```
components/
├── premium/
│   └── v7/
│       ├── HeroLight.tsx (NEW)
│       ├── HowItWorksFlowchart.tsx (NEW)
│       ├── ExpertiseCards.tsx (NEW)
│       ├── AutomationDiagram.tsx (NEW)
│       ├── DataCharts.tsx (NEW)
│       ├── PricingToggle.tsx (NEW)
│       ├── PricingComparison.tsx (NEW)
│       ├── CTALuxury.tsx (NEW)
│       └── FooterLuxury.tsx (NEW)
│
├── ui/
│   ├── ScrollIndicator.tsx (NEW)
│   ├── IllustratedCard.tsx (NEW)
│   ├── AnimatedChart.tsx (NEW)
│   └── ...
│
└── ...
```

---

## 15. MULTI-STEP BUILD PROMPTS

### 15.1 Phase 1: Setup & Hero (Steps 1-3)

#### **Step 1: Update Design Tokens**
```bash
# Prompt:
"Update design system for luxury home page:

1. Add new color variables to globals.css:
   --luxury-navy: #001F3F
   --luxury-gold: #D4AF37
   --luxury-orange: #FF6B35
   --luxury-cream: #FAF8F5
   --bg-light: #FAFAFA
   --bg-dark: #0A1628

2. Add new font imports (if needed):
   - Playfair Display (for luxury headings)
   - Keep Manrope and Inter

3. Update shadow utilities:
   - .shadow-luxury-sm through .shadow-luxury-xl
   - Add subtle, elegant shadows

4. Add new animation keyframes:
   - @keyframes float
   - @keyframes pulse-node
   - @keyframes shimmer
   - @keyframes dash-flow
   - @keyframes glow-pulse

5. Update container max-width to 1280px"
```

#### **Step 2: Create Light Hero Component**
```bash
# Prompt:
"Create HeroLight.tsx component in /components/premium/v7/:

Background: Light (#FAFAFA) with subtle pattern overlay
Layout: 2-column grid (same as HeroV7.tsx)
Min-height: 90vh

CHANGES FROM DARK VERSION:
1. Background: #FAFAFA (not #0F172A)
2. Text colors: Navy (#001F3F) for headlines
3. No gradient on second headline line
4. Add floating geometric shapes (3-4 shapes)
5. Add scroll indicator at bottom
6. Remove "Trusted By" section

Content:
- Badge: "AI-Powered Sales Intelligence" (orange)
- H1: "AI Systems." (navy) + "Built for Growth." (navy, no gradient)
- Subtitle: "Deploy intelligent AI agents..." (gray)
- CTA 1: "Start Free Trial" (orange gradient)
- CTA 2: "Book a Demo" (outline navy)
- Scroll Indicator: "Discover How" + chevron down icon

Orbital Animation:
- Import HeroIllustrationDark component
- Pass lightTheme={true} prop
- Update colors for light background:
  - Badges: white background, navy icons
  - Rings: navy/orange/gold strokes
  - Particles: orange

Floating Shapes:
- 3 geometric shapes (circle, square, diamond)
- Absolute positioned
- Subtle opacity (0.08)
- Slow floating animation (15-20s)

Animations:
- Stagger children (150ms delay)
- Fade + slide up (600ms)
- Scroll indicator bounce

Export as HeroLight"
```

#### **Step 3: Update Orbital Animation for Light Theme**
```bash
# Prompt:
"Update HeroIllustrationDark.tsx to support light theme:

Add new prop:
interface Props {
  lightTheme?: boolean;
}

Update colors based on lightTheme prop:

LIGHT THEME COLORS:
- Rings: navy (#001F3F) with low opacity
- Badges:
  - Background: white
  - Border: rgba(0, 31, 63, 0.15)
  - Icon color: #001F3F (navy)
  - Text color: #4A5568 (gray)
  - Hover border: #FF6B35 (orange)
  - Hover shadow: rgba(255, 107, 53, 0.2)
- Particles: #FF6B35 (orange)
- Center image: full opacity (1.0)

DARK THEME COLORS (existing):
- Keep all existing dark theme colors

Implementation:
const colors = lightTheme ? {
  rings: { outer: '#001F3F', middle: '#FF6B35', inner: '#D4AF37' },
  badges: { bg: 'white', border: 'rgba(0,31,63,0.15)', ... },
  particles: '#FF6B35'
} : {
  // existing dark colors
};

Apply colors to all SVG elements using the colors object.
Ensure smooth theme switching."
```

---

### 15.2 Phase 2: Enhanced Sections (Steps 4-7)

#### **Step 4: Create Flowchart Component (How It Works)**
```bash
# Prompt:
"Create HowItWorksFlowchart.tsx component:

Section Header:
- Overline: "HOW IT WORKS" (gold)
- Headline: "AI-First Development Process" (navy, 48px)
- Subtitle: "From brief to deploy..." (gray)

Layout: L-shaped flowchart
- Steps 1-2-3 horizontal
- Step 4 below step 2
- Animated connector lines between steps

Steps Data:
const steps = [
  { id: 1, title: "Submit AI Brief", icon: FileText, color: "#FF6B35", illustration: "illustrated-form" },
  { id: 2, title: "AI Analysis", icon: Brain, color: "#D4AF37", illustration: "illustrated-brain" },
  { id: 3, title: "Rapid Build", icon: Code, color: "#3B82F6", illustration: "illustrated-code" },
  { id: 4, title: "Launch & Scale", icon: Rocket, color: "#10B981", illustration: "illustrated-rocket" }
];

Each Step Card:
- White background, 24px border-radius
- Step number badge (floating, top-left, gradient)
- Illustration container (180px height)
- Title (24px, semibold)
- Description (16px, gray)
- Hover: lift -8px, scale 1.02

Connector Lines (SVG):
- Dashed stroke (#001F3F, opacity 0.3)
- Animated dash offset (infinite loop)
- Arrow at end (orange, pulsing)

Progress Indicator:
- Show percentage (25% → 50% → 75% → 100%)
- Animated progress line
- Gradient fill

Scroll Animation:
- Each step reveals sequentially
- Connector animates after step appears
- Use useInView from motion/react
- Stagger: 200ms between steps

Export as HowItWorksFlowchart"
```

#### **Step 5: Create Illustrated Service Cards**
```bash
# Prompt:
"Create ExpertiseCards.tsx component:

Section Header:
- Overline: "OUR EXPERTISE" (gold)
- Headline: "AI-Powered Business Solutions" (navy)
- Subtitle: "..." (gray)

Layout: 3x2 grid (6 cards)

Services:
1. AI Agents - isometric robot illustration
2. Smart Automation - flowchart with gears
3. AI Chatbots - chat bubbles with AI
4. Web Applications - browser with code
5. Custom CRM - database with connections
6. Data Intelligence - 3D bar chart

Each Card:
- White background, 24px radius
- 48px padding
- Gradient top border (4px, hidden, reveals on hover)
- Illustration (240px height, isometric style)
- Title (24px, semibold)
- Description (16px, 2-3 sentences)
- Features list (3 items, checkmarks)
- "Learn More →" link (colored, arrow animates)

Illustration:
- Use placeholder for now: <div>[Illustration: {name}]</div>
- Size: 200x200px max
- Drop shadow: soft, subtle
- Floating animation on hover (3s loop)

Colors:
- Each card has a theme color (from services data)
- Gradient border uses theme color → gold
- Icon circle uses theme color

Hover Effects:
- Lift -12px
- Scale 1.02
- Shadow increase
- Gradient border reveals
- Illustration floats
- Link arrow shifts right

Export as ExpertiseCards"
```

#### **Step 6: Create Automation Diagram**
```bash
# Prompt:
"Create AutomationDiagram.tsx component:

Section Header:
- Overline: "SMART AUTOMATION" (gold)
- Headline: "Set Once, Run Forever" (navy)

Layout: 
- Top: Animated workflow diagram (centered)
- Bottom: 3 workflow cards (grid)

Workflow Diagram (SVG):
Nodes:
1. Trigger (Zap icon, orange)
2. Process (Cpu icon, gold)
3. Action (CheckCircle icon, green)
4. Result (BarChart icon, blue)

Layout: Horizontal flow, evenly spaced
Node Size: 120px circles
Node Style:
- White background
- 3px colored border
- Icon + label
- Hover: scale 1.15, pulse shadow

Connections:
- Curved paths between nodes
- Dashed stroke with animation
- Animated particles (5 particles)
- Particle: 4px orange circle, travels path

Particle Animation:
- Start at 0%, end at 100% of path
- Fade in/out at start/end
- 3s duration, infinite loop
- Stagger particles (600ms delay)

Workflow Cards:
- 👻 Ghost Detection
- 📄 Contract to Cash
- 🏆 Champion Autopilot

Each Card:
- Large emoji icon (64px)
- Title (24px)
- Description (14px)
- Status indicator (green dot, pulsing)
- Metrics row (3 metrics)
- "View Demo →" link

Interactive:
- Click workflow card to highlight in diagram
- Diagram particles speed up when card active
- Card scales when active

Export as AutomationDiagram"
```

#### **Step 7: Create Animated Data Charts**
```bash
# Prompt:
"Create DataCharts.tsx component:

Section Header:
- Overline: "DATA INTELLIGENCE" (gold)
- Headline: "Transform Data Into Action" (navy)

Layout: 2-column
- Left: Content + features list
- Right: 3 animated charts (stacked)

Content (Left):
- 4 feature bullets (icons + text)
- "View Dashboard →" link

Charts (Right):
1. Line Chart: "Lead Conversion Trend"
   - 6 data points (Jan-Jun)
   - Orange line
   - Animated path draw (2s)
   - Points grow in (stagger 200ms)
   - Gradient fill under line

2. Progress Bars: "Deal Health Scores"
   - 3 bars (Enterprise, Mid-Market, SMB)
   - Colored (green, gold, blue)
   - Animated width (1.5s ease-out)
   - Shimmer effect

3. Gauge: "AI Accuracy"
   - Circular gauge (95%)
   - Gold gradient arc
   - Animated arc draw (2s)
   - Center number counts up
   - Optional: animated needle

Chart Container Style:
- White background
- 20px radius
- Subtle shadow
- 24px padding
- Title (14px, uppercase)

Animation Trigger:
- Use useInView
- Trigger when 40% in viewport
- Once only (don't re-animate)

Export as DataCharts

IMPORTANT: Use recharts library for line chart, custom SVG for progress and gauge."
```

---

### 15.3 Phase 3: Pricing & CTA (Steps 8-10)

#### **Step 8: Create Pricing Toggle & Enhanced Cards**
```bash
# Prompt:
"Create PricingToggle.tsx and update PricingV7.tsx:

PricingToggle Component:
- Monthly/Annual toggle switch
- State: const [annual, setAnnual] = useState(false);
- Switch style:
  - 64px width, 32px height
  - Rounded pill
  - Animated knob (24px circle)
  - Knob slides left/right
- Labels: "Monthly" and "Annual" (left/right)
- Active label: navy, bold
- Savings badge: "Save 20%" (green, pulsing)

Enhanced Pricing Card:
Keep existing structure, add:
1. Popular badge (Professional tier only)
   - Position: top, centered, -16px offset
   - Orange gradient pill
   - "MOST POPULAR" text
   - Shadow

2. Scale effect (Professional)
   - scale(1.05) always
   - Border: 2px orange
   - Z-index: 1

3. Price animation
   - When toggle switches, price fades out/in
   - Duration: 400ms
   - Keyframes: price-change

4. Annual prices:
   - Starter: $2,500/mo → $2,000/mo
   - Professional: $5,000/mo → $4,000/mo
   - Enterprise: Custom → Custom

Features:
- Move feature list to array
- Add "Most popular" badge logic
- Add hover lift (-8px)

Export PricingToggle component
Update PricingV7 to use PricingToggle"
```

#### **Step 9: Create Feature Comparison Table**
```bash
# Prompt:
"Create PricingComparison.tsx component:

Toggle Button:
- "Compare all features ▼"
- Center aligned
- Outline style
- Icon rotates 180° when open

Comparison Table:
- 3 columns: Feature, Starter, Professional, Enterprise
- Collapsible (max-height transition)
- Smooth reveal animation (600ms)

Features List:
const features = [
  { name: "Lead Enrichment", starter: "100/mo", pro: "500/mo", enterprise: "Unlimited" },
  { name: "Call Analysis", starter: "20/mo", pro: "100/mo", enterprise: "Unlimited" },
  { name: "Natural Language Search", starter: true, pro: true, enterprise: true },
  { name: "Deal Health Monitor", starter: false, pro: true, enterprise: true },
  { name: "Email Drafter", starter: true, pro: true, enterprise: true },
  { name: "Workflows", starter: false, pro: true, enterprise: true },
  { name: "Integrations", starter: false, pro: true, enterprise: true },
  { name: "Priority Support", starter: false, pro: true, enterprise: true },
  { name: "Custom AI Training", starter: false, pro: false, enterprise: true },
  { name: "White Label", starter: false, pro: false, enterprise: true },
  { name: "SLA Guarantee", starter: false, pro: false, enterprise: true }
];

Table Style:
- Header: light gray background
- Rows: alternating subtle background
- Border: subtle navy, low opacity
- Text: navy (features), gray (values)
- Icons: 
  - Checkmark (orange) for true
  - Cross (gray, low opacity) for false
  - Text for numbers/strings

Animation:
- Table max-height: 0 → 2000px
- Opacity: 0 → 1
- Duration: 600ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

State:
const [open, setOpen] = useState(false);

Export as PricingComparison"
```

#### **Step 10: Create Luxury CTA Section**
```bash
# Prompt:
"Create CTALuxury.tsx component:

Background:
- Gradient: navy → deep blue
- Animated glow (orange, pulsing, centered)
- Floating shapes (2-3 geometric shapes)
- Overflow: hidden

Content (Centered):
1. Headline: "Transform Your Sales Team Today"
   - 64px font, white, bold
   - Centered

2. Subtitle: "Join 500+ companies using AI..."
   - 22px font, light gray
   - Max-width: 700px
   - Centered

3. CTA Buttons (Row):
   - Primary: "Start Free Trial →" (white bg, navy text)
   - Secondary: "Book a Demo" (outline white)
   - Gap: 16px
   - Both: 20px padding, 18px font

4. Feature Pills (Row):
   - "⚡ Setup in 15 minutes"
   - "✓ No credit card required"
   - "✓ 14-day free trial"
   - Small text, icons, centered

5. Trust Indicators (Container):
   - 3 metrics in glass container
   - "95% Accuracy" | "2-4 weeks Delivery" | "24/7 Support"
   - Gold numbers, white labels
   - Glass background (blur, low opacity)
   - Rounded border

Floating Shapes:
- Shape 1: Circle (120px, gold border)
- Shape 2: Diamond (100px, orange fill)
- Positions: top-left, bottom-right
- Animation: float-slow (15-20s)

Animations:
- Headline: fade + slide up
- Subtitle: fade + slide up (delay 200ms)
- Buttons: fade + scale (delay 400ms)
- Pills: fade in (delay 600ms)
- Trust: fade + slide up (delay 800ms)

Glow Animation:
- Radial gradient (orange)
- Scale: 1 → 1.2
- Opacity: 0.5 → 0.8
- Duration: 8s infinite

Export as CTALuxury"
```

---

### 15.4 Phase 4: Footer & Polish (Steps 11-13)

#### **Step 11: Create Luxury Footer**
```bash
# Prompt:
"Create FooterLuxury.tsx component:

Background: Dark navy (#0A1628)
Padding: 80px top, 32px bottom

Grid Layout: 4 columns
1. Brand (2fr width)
   - Logo (icon + text)
   - Tagline (2-3 sentences)
   - Social icons (Twitter, LinkedIn, GitHub, Medium)

2. Product (1fr)
   - Title: "PRODUCT"
   - Links: Services, Features, Pricing, FAQ

3. Company (1fr)
   - Title: "COMPANY"
   - Links: About, Projects, Process, Contact

4. Resources (1fr)
   - Title: "RESOURCES"
   - Links: Documentation, Blog, Support, API, Status

Logo:
- Text: "AI Systems" (28px, bold, white)
- Icon: 36px orange gradient square, rounded
- Gap: 12px

Tagline:
- 15px, light gray
- Max-width: 320px

Social Icons:
- 44x44px rounded squares
- Transparent background
- Hover: orange background, lift -3px
- Icons: Twitter, LinkedIn, GitHub, Medium

Link Columns:
- Title: 14px, bold, white, uppercase, spacing
- Links: 15px, light gray
- Gap: 14px between links
- Hover: white color, translateX(4px), underline

Bottom Bar:
- Border-top: 1px white 10% opacity
- Padding-top: 32px
- Flex: space-between
- Copyright + Legal links (Privacy, Terms, Sitemap)

Mobile (<768px):
- Stack columns (single column)
- Center align
- Reduced gaps

Export as FooterLuxury"
```

#### **Step 12: Add Micro-Interactions**
```bash
# Prompt:
"Add micro-interactions throughout the page:

1. Button Ripple Effect:
   - Add ::after pseudo-element
   - Ripple expands on click
   - Duration: 600ms
   - Radius: 300px

2. Card Magnetic Effect:
   - Track mouse position on card
   - Subtle transform based on cursor
   - Reset on mouse leave
   - Use JavaScript event listeners

3. Input Focus States:
   - Border color change
   - Box-shadow (4px orange glow)
   - Label float up
   - Smooth transitions (300ms)

4. Scroll Indicator (Hero):
   - Create ScrollIndicator.tsx component
   - Bounce animation (2s infinite)
   - Text: "Discover How"
   - Chevron down icon
   - Clickable: smooth scroll to next section

5. Link Underline Animation:
   - ::before pseudo-element
   - Width: 0 → 100%
   - Transform-origin: left
   - Duration: 300ms

6. Progress Bar Shimmer:
   - Add ::before pseudo-element
   - Gradient overlay (white, transparent)
   - Animate left: -100% → 100%
   - Duration: 2s infinite

7. Toast Notifications:
   - Use sonner library
   - Success/Error states
   - Auto-dismiss (3s)
   - Slide in from top

Apply to:
- All buttons (ripple)
- Service cards (magnetic)
- Form inputs (focus)
- Hero section (scroll indicator)
- All links (underline)
- Progress bars (shimmer)
- Form submissions (toast)"
```

#### **Step 13: Implement Scroll-Driven Storytelling**
```bash
# Prompt:
"Implement comprehensive scroll-driven animations:

1. Section Reveals:
   - All major sections (Hero, How It Works, etc.)
   - Fade + slide up (60px)
   - Trigger: 30% in viewport
   - Duration: 800ms
   - Once only (don't repeat)

2. Card Stagger:
   - Container: staggerChildren: 0.1s
   - Child cards: scale(0.9) → scale(1)
   - Opacity: 0 → 1
   - Delay first card: 200ms

3. Chart Animations:
   - Line draw: stroke-dashoffset animation
   - Progress bars: width 0 → value%
   - Gauge: arc draw + number count-up
   - Trigger: 40% in viewport

4. Flowchart Sequence:
   - Step 1 appears (200ms delay)
   - Connector 1 animates (800ms)
   - Step 2 appears (200ms delay)
   - Connector 2 animates (800ms)
   - Continue for all steps

5. Parallax Backgrounds:
   - Floating shapes: slower scroll speed
   - Background glows: medium scroll speed
   - Use useScroll + useTransform from motion/react

6. Number Count-Up:
   - Stats section
   - CTA trust indicators
   - Gauge center value
   - Duration: 1000-2000ms
   - Easing: easeOut

7. Progress Indicator (Nav):
   - Show reading progress bar
   - Fixed top of navbar
   - 2px height, orange gradient
   - Width: 0-100% based on scroll

Implementation Pattern:
import { motion, useInView, useScroll, useTransform } from 'motion/react';

const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.3 });

<motion.section
  ref={ref}
  initial={{ opacity: 0, y: 60 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
>
  {/* Content */}
</motion.section>

Apply to all sections, cards, charts, and elements."
```

---

### 15.5 Phase 5: Routes & Integration (Steps 14-16)

#### **Step 14: Update Routes & Links**
```bash
# Prompt:
"Update routing and links throughout the site:

1. Create New Route:
   - Path: '/home-v8' or '/home-luxury'
   - Component: <HomePageV8 />
   - In routes/index.tsx

2. Create HomePageV8.tsx:
   - Import all new components:
     - HeroLight
     - HowItWorksFlowchart
     - ExpertiseCards
     - AutomationDiagram
     - DataCharts
     - PricingToggle + PricingV7
     - PricingComparison
     - CTALuxury
     - FooterLuxury
   - Assemble in correct order
   - Add NavbarV7 at top
   - Background: light (#FAFAFA)

3. Update Navigation Links:
   - Hero CTAs:
     - "Start Free Trial" → /wizard
     - "Book a Demo" → /booking
   - Expertise Cards:
     - "Learn More" → /services/[slug]
   - Automation Cards:
     - "View Demo" → /services/automation
   - Data Section:
     - "View Dashboard" → /app/leads
   - Pricing CTAs:
     - "Get Started" → /wizard
     - "Contact Us" → /booking
   - Final CTA:
     - "Start Free Trial" → /wizard
     - "Book a Demo" → /booking

4. Service Slugs:
   - ai-agents → /services/ai-agents
   - automation → /services/automation (create new)
   - chatbots → /services/ai-chatbots
   - web-apps → /services/ai-web-dev
   - crm → /services/crm (create new)
   - analytics → /services/analytics (create new)

5. Footer Links:
   - Product: /services, /#features, /#pricing, /#faq
   - Company: /about, /projects, /process, /booking
   - Resources: /docs/startup-ai, /blog, /support, /api, /status

Ensure all links:
- Use React Router <Link> component
- Have proper href values
- Open in same tab (no target="_blank" unless external)
- Have hover states"
```

#### **Step 15: Create Placeholder Service Pages**
```bash
# Prompt:
"Create 3 new service pages for new links:

1. /components/premium/v7/services/AutomationPageV7.tsx
   - Hero: "Smart Automation"
   - Features: Ghost detection, Contract-to-cash, Champion autopilot
   - How it works: 4 steps
   - Pricing: $5,000/mo
   - CTA: "Get Started"

2. /components/premium/v7/services/CRMPageV7.tsx
   - Hero: "Custom CRM Development"
   - Features: Lead management, Deal tracking, AI insights
   - Tech stack: React, Supabase, AI
   - Case studies: 2-3 examples
   - CTA: "Start Project"

3. /components/premium/v7/services/AnalyticsPageV7.tsx
   - Hero: "Data Intelligence & Analytics"
   - Features: Dashboards, Predictive analytics, Reports
   - Charts: Show examples (use DataCharts component)
   - Use cases: Sales, Marketing, Operations
   - CTA: "See Demo"

Structure for each:
- NavbarV7 (top)
- Hero section
- Features grid (3-4 features)
- How it works or Use cases
- Pricing or Demo section
- CTA section
- FooterLuxury (bottom)

Use luxury styling:
- Light backgrounds
- Illustrated cards
- Animated charts (Analytics page)
- Scroll animations

Add routes in routes/index.tsx:
{ path: '/services/automation', element: <AutomationPageV7Wrapper /> }
{ path: '/services/crm', element: <CRMPageV7Wrapper /> }
{ path: '/services/analytics', element: <AnalyticsPageV7Wrapper /> }"
```

#### **Step 16: Final Polish & Testing**
```bash
# Prompt:
"Final polish and testing checklist:

1. Accessibility:
   - Add ARIA labels to interactive elements
   - Ensure keyboard navigation (Tab, Enter, Esc)
   - Focus indicators visible (ring-2 ring-orange-500)
   - Alt text for illustrations
   - Color contrast: WCAG AA (4.5:1)
   - Screen reader testing

2. Performance:
   - Lazy load illustrations
   - Optimize animations (GPU acceleration)
   - Code splitting (React.lazy)
   - Image optimization (WebP)
   - Bundle analysis (vite-plugin-visualizer)
   - Lighthouse score >90

3. Browser Testing:
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)
   - Mobile Safari (iOS)
   - Chrome Android

4. Device Testing:
   - Desktop: 1280px, 1440px, 1920px
   - Tablet: 768px, 834px, 1024px
   - Mobile: 375px, 390px, 428px

5. Responsive:
   - All sections adapt correctly
   - Images scale properly
   - Cards stack on mobile
   - Text readable on all sizes
   - Touch targets >44px

6. Interactions:
   - All buttons clickable
   - All links work
   - Forms validate
   - Hover states work
   - Scroll smooth
   - Animations perform well

7. Content:
   - All text reviewed
   - No lorem ipsum
   - Links point to correct pages
   - Images load correctly
   - No console errors

8. Edge Cases:
   - Long text in cards
   - Missing images (fallback)
   - Slow network (loading states)
   - JavaScript disabled
   - Very wide screens (>2000px)
   - Very small screens (<320px)

Create test checklist document with all items.
Test each item systematically.
Fix any issues found.
Document any known limitations."
```

---

## 📊 SUMMARY & ROADMAP

### Changes Summary
```diff
✅ KEPT & ENHANCED:
+ Hero (light background, orbital animation)
+ How It Works (animated flowchart)
+ Our Expertise (illustrated cards)
+ Smart Automation (workflow diagram)
+ Data Intelligence (animated charts)
+ Flexible Pricing (toggle, comparison)
+ Final CTA (improved messaging)
+ Footer (dark, luxury styling)

❌ REMOVED:
- Trusted By Fast-Growing Teams
- People Love Automation (Testimonials)
- Frequently Asked Questions

🆕 ADDED:
+ Scroll-driven storytelling
+ Animated connector lines
+ Illustrated isometric cards
+ Interactive flowcharts
+ Animated performance charts
+ Micro-interactions
+ Luxury design system
+ New service pages (3)
```

### Build Timeline
- **Phase 1** (Steps 1-3): Setup & Hero - 6 hours
- **Phase 2** (Steps 4-7): Enhanced Sections - 12 hours
- **Phase 3** (Steps 8-10): Pricing & CTA - 8 hours
- **Phase 4** (Steps 11-13): Footer & Polish - 8 hours
- **Phase 5** (Steps 14-16): Routes & Testing - 6 hours
- **Total**: ~40 hours (1 week sprint)

### Component Count
- **New Components**: 14 components
- **Modified Components**: 3 components
- **New Service Pages**: 3 pages
- **Total LOC**: ~3,500 lines

### Key Features
✅ Luxury premium design  
✅ Illustrated isometric cards  
✅ Animated flowcharts & diagrams  
✅ Scroll-driven storytelling  
✅ Animated performance charts  
✅ Micro-interactions throughout  
✅ Light background theme  
✅ Responsive (mobile-first)  
✅ Accessible (WCAG AA)  
✅ Performance optimized (<3s load)  

---

**Document Status**: ✅ Complete  
**Last Updated**: December 21, 2025  
**Version**: 1.0 - Luxury Enhancement Roadmap
