# 🎨 Sun AI — Multistep UI/UX Design Language Prompts

**Purpose:** This document provides a sequential, step-by-step prompt library for generating the complete Sun AI interface. Use these prompts one at a time to ensure high-fidelity, premium results.

**Aesthetic Goal:** "Premium, Intelligent, Luxury Tech."
**Key Visuals:** Slate 900 backgrounds (Hero/Bento), Warm White backgrounds (Content), Orange-500 accents, glassmorphism, and scroll-driven storytelling.

---

## 🏗️ Phase 1: Foundation & Structure

### STEP 1 — Global Style Guide (Foundation)
**Goal:** Establish visual consistency, hierarchy, and the "Luxury" aesthetic.

> **Prompt:**
> "Create a comprehensive **Global UI/UX Style Guide** for 'Sun AI', a premium AI agency platform.
>
> **Brand Attributes:**
> -   **Premium & Luxury:** High-end feel, subtle details.
> -   **Intelligent:** Data-driven, precise.
> -   **Calm & Trustworthy:** No clutter, confident whitespace.
>
> **Design Tokens:**
> -   **Colors:**
>     -   *Primary:* `Slate-900` (#0F172A) for high-impact backgrounds.
>     -   *Background:* `Warm White` (#FDFDFD) for content areas.
>     -   *Accent:* `Orange-500` (#FF6A3D) strictly for primary CTAs.
>     -   *Borders:* Subtle `slate-200` or `white/10` for glass effects.
> -   **Typography:**
>     -   *Headings:* `Manrope` (Modern, bold, tight tracking).
>     -   *Body:* `Inter` (Clean, readable, relaxed spacing).
> -   **Surfaces:**
>     -   *Glassmorphism:* Subtle backdrop blur (12px), white/5 or black/5 opacity.
>     -   *Shadows:* Soft, diffused shadows (`shadow-lg`, `shadow-xl`).
>     -   *Corners:* `rounded-2xl` or `rounded-3xl` for modern feel.
>
> **Deliverables:**
> -   Color palette with usage rules (Light vs Dark mode).
> -   Typography scale (H1-H6, Body, Caption).
> -   Button variants (Primary, Secondary, Ghost).
> -   Card base styles (Glass, Solid, Outline)."

---

### STEP 2 — Page Architecture & Routes
**Goal:** Define the navigation structure and ensure no dead ends.

> **Prompt:**
> "Design the **Page Architecture and Routing System** for the application.
>
> **Core Pages:**
> 1.  **Home** (`/`): Storytelling and conversion entrance.
> 2.  **Services** (`/services`): Bento grid of capabilities.
> 3.  **AI Brief Wizard** (`/wizard`): 5-step interactive intake form.
> 4.  **Proposal Preview** (`/proposal`): Generated roadmap and pricing.
> 5.  **Booking & Payment** (`/booking`): Stripe/Calendar integration.
> 6.  **Dashboard** (`/dashboard`): Client view of progress.
>
> **Routing Rules:**
> -   **No Dead Ends:** Every screen must have a clear primary action.
> -   **Sticky Nav:** Global navigation bar present on all marketing pages.
> -   **Wizard Mode:** Minimized navigation (Logo + Exit only) inside the Wizard to prevent drop-off.
>
> **Deliverables:**
> -   Sitemap visualization.
> -   Primary and Secondary CTA definitions for each page."

---

## 🚀 Phase 2: Marketing & Conversion (The Flow)

### STEP 3 — Hero Section (First Impression)
**Goal:** Explain value in 5 seconds with a high-impact dark mode design.

> **Prompt:**
> "Design a **Premium Hero Section** for the Home page.
>
> **Visual Context:** Dark Mode (`bg-slate-900`).
>
> **Layout:**
> -   **Desktop:** Split screen. Text Left (40%), Visual Right (60%).
> -   **Mobile:** Stacked. Text top, Visual bottom.
>
> **Content:**
> -   **Headline:** 'AI Systems. Designed to Convert.' (Large, Manrope, Tight tracking).
> -   **Subtext:** 'We design and deploy intelligent AI products, automations, and agents that grow revenue.'
> -   **CTAs:**
>     1.  *Primary:* 'Start AI Brief' (Orange-500, Pulse effect).
>     2.  *Secondary:* 'Talk to an Expert' (Glass outline).
>
> **Visual:**
> -   **Illustration:** A 3D/Abstract representation of a 'Digital Brain' or 'Neural Network'. *No generic stock photos.*
> -   **Motion:** Text staggers in on load. Background has a slow, breathing mesh gradient.
>
> **Constraint:** Primary CTA must be visible 'above the fold' on mobile (iPhone SE, 390px)."

---

### STEP 4 — “How It Works” Section (Storytelling)
**Goal:** Explain the process visually using scroll-driven animation.

> **Prompt:**
> "Design a **'How It Works' Section** focused on scroll-driven storytelling.
>
> **Visual Context:** Light Mode (`bg-[#FDFDFD]`).
>
> **The 5-Step Process:**
> 1.  **Brief:** Tell us about your business.
> 2.  **Analysis:** AI evaluates opportunities.
> 3.  **Proposal:** Clear scope & pricing.
> 4.  **Booking:** Schedule strategy session.
> 5.  **Launch:** Build & deploy.
>
> **Layout:**
> -   **Desktop:** Horizontal timeline. As user scrolls, an animated 'circuit line' fills from left to right, activating cards.
> -   **Mobile:** Vertical timeline with a guide line on the left.
>
> **Card Design:**
> -   Clean white cards with `shadow-md`.
> -   Large icon + Step Number (01, 02...).
> -   Title + Short description.
>
> **Motion:**
> -   Step reveals on scroll (Fade + Slide Up).
> -   Connector lines animate progressively."

---

### STEP 5 — Services Section (Bento Grid)
**Goal:** Showcase capabilities clearly.

> **Prompt:**
> "Design a **Services Section** using a 'Bento Grid' layout.
>
> **Visual Context:** Dark Mode (`bg-slate-900`).
>
> **Layout:**
> -   **Desktop:** A mixed-size grid (2x2, 1x2, 2x1) creating a masonry feel.
> -   **Mobile:** Stacked cards with consistent height.
>
> **Content:**
> 1.  **AI Web Apps:** 'Intelligent platforms built to scale.'
> 2.  **AI Chatbots:** '24/7 assistants that convert.'
> 3.  **Automations:** 'Remove manual work.'
> 4.  **Consulting:** 'Strategy & execution.'
>
> **Interaction:**
> -   **Clickable:** Entire card is a link to `/wizard` (pre-selecting that service).
> -   **Hover:** Card lifts, border glows slightly, internal icon animates.
>
> **Visuals:**
> -   Dark glass cards (`bg-white/5`).
> -   Abstract visualizations for each service (e.g., Code snippet for Web Apps, Chat bubble for Chatbots)."

---

## 🪄 Phase 3: The Wizard & Application

### STEP 6 — AI Brief Wizard (Core UX)
**Goal:** Convert interest into qualified leads via a frictionless form.

> **Prompt:**
> "Design the **AI Brief Wizard**, a 5-step interactive form.
>
> **Visual Context:** Light Mode. Clean, focused, distraction-free.
>
> **Steps:**
> 1.  **Overview:** Name + Website URL.
> 2.  **Services:** Select from grid (Web App, Chatbot, etc.).
> 3.  **Goals:** Text input with 'chip' suggestions.
> 4.  **Constraints:** Budget (Slider) & Timeline (Date Picker).
> 5.  **Review:** Summary card.
>
> **UX Features:**
> -   **Progress Bar:** Top of screen, visual indicator of completion.
> -   **Trust Indicators:** '~3 mins to complete', 'Private & Encrypted'.
> -   **Navigation:** Fixed 'Back' and 'Next' buttons at bottom (Mobile optimized).
> -   **Interaction:** Smooth slide transitions between steps."

---

### STEP 7 — Processing / Loading Screen
**Goal:** Reassure users while the "AI" works.

> **Prompt:**
> "Design a **Processing / Loading Screen** that appears after Wizard submission.
>
> **Tone:** Calm, Professional, Reassuring.
>
> **Elements:**
> -   **Status Message:** 'Generating Your Proposal...'
> -   **Subtext:** 'Our AI is analyzing your inputs and building your roadmap.'
> -   **Visual:** A subtle, pulsing circular loader or 'scanning' animation.
> -   **Checklist:** A list of items fading in: 'Analyzing URL...', 'Matching Services...', 'Calculating Timeline...'.
>
> **Goal:** Keep the user engaged for 3-5 seconds without frustration."

---

### STEP 8 — Proposal Preview Page
**Goal:** Show value and prompt action (Conversion).

> **Prompt:**
> "Design the **Proposal Preview Page**.
>
> **Layout:**
> -   **Left (Content):** Detailed breakdown of the proposed solution.
>     -   *Summary:* 'Your Custom AI Roadmap'.
>     -   *Timeline:* Visual Gantt chart.
>     -   *Tech Stack:* Icons of tools used.
> -   **Right (Action Panel):** Sticky sidebar (Desktop) or Bottom Sheet (Mobile).
>
> **Action Panel:**
> -   **Title:** 'Secure Design Slot'.
> -   **Pricing:** Clear cost breakdown.
> -   **Primary CTA:** 'Book Strategy Call' or 'Pay Deposit' (Stripe).
> -   **Secondary CTA:** 'Download PDF'.
>
> **Visual:** High-value presentation. Clean typography, data visualization for the timeline."

---

### STEP 9 — Booking & Payment Screens
**Goal:** Remove friction from the transaction.

> **Prompt:**
> "Design the **Booking and Payment Screens**.
>
> **Booking View:**
> -   Integrated Calendar interface.
> -   Clear time slot selection.
> -   Timezone detector.
>
> **Payment View:**
> -   Clean, trustworthy checkout.
> -   Order summary recap (Service, Price).
> -   Secure badge icons.
> -   Confirmation state ('Success' checkmark).
>
> **Focus:** Trust and Simplicity. No distractions."

---

## 🧩 Phase 4: Interactions & Polish

### STEP 10 — AI Chatbot (Floating Assistant)
**Goal:** Assist users anywhere without blocking content.

> **Prompt:**
> "Design the **Floating AI Chatbot** interface.
>
> **Trigger:**
> -   Small, floating action button (FAB) in bottom-right.
> -   Icon: Sparkle or Message bubble.
>
> **Open State:**
> -   Slide-over drawer (Right side) or Pop-over card.
> -   **Header:** 'Sun AI Assistant'.
> -   **Body:** Chat interface.
> -   **Quick Actions:** 'Explain Steps', 'Suggest Services', 'Book Call'.
>
> **Tone:** Private consultant. Minimal, non-intrusive."

---

### STEP 11 — Motion & Micro-Interactions
**Goal:** Apply premium polish to the entire system.

> **Prompt:**
> "Apply a comprehensive **Motion System** to the existing designs.
>
> **Rules:**
> -   **Hover:** Elements lift (translate-y -4px) and shadow deepens.
> -   **Scroll:** Sections fade in and slide up (20px). Stagger children elements.
> -   **Transitions:** Smooth page transitions (opacity cross-fade).
> -   **Feedback:** Buttons scale down slightly (0.98) on click.
>
> **Accessibility:**
> -   **Reduced Motion:** If enabled, disable all transforms. Use Opacity fades only.
>
> **Timing:**
> -   Use 'ease-out' for entrances.
> -   Duration: Fast (200ms) for micro-interactions, Slow (500-700ms) for layout entrances."

---

## 📝 Appendix A: Exact Copy Library

**Home — Hero**
- **Headline:** AI Systems. Designed to Convert.
- **Subtext:** We design and deploy intelligent AI products, automations, and agents that grow revenue.
- **CTA Primary:** Start AI Brief
- **CTA Secondary:** Talk to an Expert

**Home — How It Works**
- **Title:** How Sun AI Works
- **Intro:** From idea to revenue — powered by intelligent systems.
- **Step 1:** AI Brief – Tell us about your business and goals.
- **Step 2:** Analysis – AI evaluates opportunities and requirements.
- **Step 3:** Proposal – Clear scope, timeline, and pricing.
- **Step 4:** Booking – Schedule your strategy session.
- **Step 5:** Launch – We build, deploy, and optimize.

**Services**
- **Title:** What We Build
- **Subtext:** AI solutions designed for real business impact.
- **Cards:**
    - AI Web Applications – Intelligent platforms built to scale.
    - AI Chatbots – 24/7 assistants that convert and support.
    - Automations – Remove manual work with smart workflows.
    - Consulting – Strategy, architecture, and execution.

**Wizard**
- **Title:** Start Your AI Brief
- **Helper:** Takes about 3 minutes. Your information is private.
- **Buttons:** Back / Next / Generate Proposal

---

## 📱 Appendix B: Mobile-Only Layout Rules

**General Mobile Rules (Viewport < 768px):**
1.  **Single Column:** All grids collapse to 1 column.
2.  **Order:** Text first, Visuals second.
3.  **Touch Targets:** Minimum 44px height for all interactive elements.
4.  **Sticky CTAs:** Primary actions often fixed to bottom of screen.

**Specific Sections:**
-   **Hero:** Headline max 2 lines. CTA visible without scrolling.
-   **How It Works:** Vertical stack. Guide line on left.
-   **Wizard:** Progress bar fixed top. Navigation fixed bottom.
-   **Services:** Full-width cards. One service per row.

---

## 🎨 Appendix C: Figma Component Naming

**Structure:** `Category / Component / Variant`

-   `Page / Home`
-   `Page / Services`
-   `Page / Wizard`
-   `Button / Primary`
-   `Button / Secondary`
-   `Button / Ghost`
-   `Card / Glass`
-   `Card / Service`
-   `Input / Text`
-   `Input / Select`
-   `Section / Hero`
-   `Section / HowItWorks`
-   `Modal / Processing`
-   `Drawer / Chatbot`
