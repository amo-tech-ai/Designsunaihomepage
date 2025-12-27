# Mobile Hero Optimization Plan (Sun AI)

## 🎯 Objective
Optimize the `/components/premium/v7/HeroV7.tsx` Hero section for mobile devices (390px) to improve hierarchy, performance, and conversion. This is not a redesign but a mobile-first optimization to bring key elements above the fold and simplify visual complexity.

---

## 🛠️ Implementation Strategy

This plan is broken down into sequential steps to ensure correctness and stability.

### Phase 1: Structure & Hierarchy Restructuring
**Goal:** Fix layout order, spacing, and content visibility on mobile.
**Key Actions:**
- Reorder elements: Nav -> Badge -> Headline -> Subhead -> CTAs -> Visual.
- Adjust typography sizes for mobile.
- Optimize spacing (remove excessive padding).

### Phase 2: Visual Simplification (The Globe)
**Goal:** Reduce visual noise and improve performance on mobile.
**Key Actions:**
- Create a mobile-specific variant or adaptive state for `HeroGlobeIllustrationV7`.
- Reduce orbit nodes to 3 (Analytics, Automation, AI Agents).
- Center the visual.

### Phase 3: Animation & Performance
**Goal:** Smooth, non-distracting motion that respects LCP.
**Key Actions:**
- Implement "Text first, then CTAs, then Globe" loading sequence.
- Disable heavy effects (parallax) on mobile.
- Ensure tap targets are accessible.

### Phase 4: Tablet & Responsiveness
**Goal:** Ensure smooth transition between mobile (390px) and desktop.
**Key Actions:**
- Adjust tablet layout (likely vertical stack but with more breathing room than mobile).
- Verify desktop remains unchanged.

---

## 🤖 Mega Multi-Step Prompts

Use the following prompts sequentially to execute this plan.

### Step 1: Mobile Layout & Typography
```text
I need to optimize the `HeroV7.tsx` component for mobile (390px width target).
Please refactor the existing code in `/components/premium/v7/HeroV7.tsx` to match this specific mobile structure:

1. **Container**: Use `pt-24 pb-16` for mobile (reduce from `pt-32`).
2. **Order**: Ensure the DOM order is: Badge -> Headline -> Subhead -> CTAs -> Trusted By -> Globe Visual.
3. **Typography (Mobile)**:
   - **Badge**: "Production-Ready AI", small pill, center aligned.
   - **H1**: "The AI Agency for the Future", max 2 lines, `text-4xl` on mobile, center aligned.
   - **Subhead**: Max 3 lines, `text-lg`, center aligned, 80% opacity.
4. **CTAs**:
   - Primary: "Start Your Project", full width `w-full`, height 52px.
   - Secondary: "Talk to an Expert", full width `w-full`, outline.
   - Stack them vertically with 12px gap.
5. **Desktop Preservation**: Ensure `lg:` classes preserve the current desktop side-by-side layout.

Output the full, refactored `HeroV7.tsx`.
```

### Step 2: Visual Simplification (Globe)
```text
The current `HeroGlobeIllustrationV7` is too complex for mobile. 
Please modify `/components/premium/v7/HeroGlobeIllustrationV7.tsx` (or create a wrapper in HeroV7) to handle mobile constraints:

1. **Responsiveness**: Detect mobile viewport (or use CSS media queries).
2. **Orbit Nodes**: 
   - On mobile: Show ONLY 3 nodes (Analytics, Automation, AI Agents).
   - On desktop: Keep existing complexity.
3. **Positioning**: Center the globe on mobile.
4. **Interactivity**: 
   - Add touch support for mobile nodes: Tap to show label (Analytics -> "Insights").
   - Remove hover effects on mobile.
   
Refactor the illustration component to support these props or logic.
```

### Step 3: Animation & Performance
```text
Optimize the animation sequence in `HeroV7.tsx` for Core Web Vitals (LCP) and mobile performance:

1. **Loading Sequence**:
   - Text (Badge/H1/Subhead): Fade in at 0ms (duration 300ms).
   - CTAs: Fade in at 150ms delay.
   - Globe Visual: Fade in at 350ms delay.
2. **Reduced Motion**:
   - Check `prefers-reduced-motion`.
   - On mobile, disable parallax effects on the text/background.
   - Limit the globe "breathing" animation to a very subtle scale (1.0 -> 1.02) over 8-10s.
3. **Background**:
   - Ensure the gradient blobs are not causing layout shifts or heavy repaints on mobile. Use `will-change-transform` if needed, or CSS-only animations.

Update `HeroV7.tsx` with these motion settings.
```

### Step 4: Verification & Tablet Polish
```text
Review the responsive behavior:

1. **Tablet (md)**: 
   - Ensure the layout doesn't break at 768px. 
   - If the side-by-side layout is too cramped, force the vertical stack until `lg` (1024px).
2. **Spacing**: Verify no horizontal overflow on 390px width.
3. **Tap Targets**: Ensure buttons are at least 44px high (we set 52px, which is good).

Make any final CSS adjustments to `HeroV7.tsx`.
```

---

## 📝 Checklists

### Visual Checklist
- [ ] Badge is centered and top-most.
- [ ] Headline is readable without overflow.
- [ ] Primary CTA is immediately visible (above the fold if possible).
- [ ] Globe is centered below content.
- [ ] No horizontal scrollbar.

### Performance Checklist
- [ ] LCP element (Headline) loads first.
- [ ] No layout shifts (CLS) from the globe loading.
- [ ] Animations are performant (transform/opacity only).
