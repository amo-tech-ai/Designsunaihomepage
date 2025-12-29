# 16. Booking & Scheduling Page

**Route:** `/booking`  
**Purpose:** Schedule consultation calls  
**Max Lines:** 400

---

## Progress Tracker

### Design Phase
- [ ] Hero with value proposition
- [ ] Service selector cards
- [ ] Calendar integration UI
- [ ] Brief wizard (multi-step form)
- [ ] Confirmation flow
- [ ] Prep checklist

### Content Phase
- [ ] Write booking headline
- [ ] Define service types
- [ ] Create form questions
- [ ] Write confirmation copy
- [ ] Document prep steps

### Development Phase
- [ ] Build hero section
- [ ] Create service cards
- [ ] Integrate Calendly/Cal.com
- [ ] Build brief wizard
- [ ] Add confirmation page
- [ ] Implement email notifications

---

## Color Palette

- **Primary:** `#667eea` Purple
- **Secondary:** `#4caf50` Green (success)
- **Accent:** `#ff9800` Orange (CTA)
- **Gradient:** Linear 135deg `#667eea` to `#4caf50`

---

## Hero Section

### Headline
> "Book Your Free AI Strategy Call — Let's Build Something Incredible"

### Subheadline
> "30-minute consultation to discuss your project, explore solutions, and create a custom roadmap. No sales pressure, just expert guidance."

### Value Props (3 Pills)
1. **💬 100% Free** — No obligation
2. **⏱️ 30 Minutes** — Quick & focused
3. **🎯 Custom Roadmap** — Actionable plan

### CTAs
- **Primary:** "Schedule Now" → Scroll to calendar
- **Secondary:** "See Our Process" → `/process`

### Hero Visual
- Calendar with available slots
- Animated booking flow preview
- Video thumbnail (optional team intro)

---

## Booking Options (3 Cards)

### Option 1: Quick Chat (15 min)
- **Best For:** Simple questions, quick validation
- **What We'll Cover:**
  - Discuss high-level idea
  - Answer technical questions
  - Recommend next steps
  - Share ballpark pricing
- **Format:** Phone or video call
- **Availability:** Same-day or next-day
- **CTA:** "Book 15-Min Call"

---

### Option 2: Strategy Session (30 min) — RECOMMENDED
- **Best For:** Serious projects, detailed planning
- **What We'll Cover:**
  - Deep-dive into requirements
  - Technical feasibility assessment
  - Custom roadmap & timeline
  - Detailed pricing proposal
  - Answer all questions
- **Format:** Video call (Zoom/Meet)
- **Availability:** Within 48 hours
- **CTA:** "Book Strategy Call"

---

### Option 3: Workshop (60 min)
- **Best For:** Complex projects, team alignment
- **What We'll Cover:**
  - Requirements workshop
  - Stakeholder alignment
  - Architecture planning
  - Budget & resource planning
  - Proposal draft
- **Format:** Video call with screen share
- **Availability:** Scheduled 3-5 days out
- **CTA:** "Schedule Workshop"

---

## Calendar Scheduling Interface

### Calendar Integration
- **Platform:** Calendly or Cal.com
- **Sync:** Google Calendar, Outlook
- **Timezone:** Auto-detect user timezone
- **Availability:** Mon-Fri, 9am-6pm ET (adjusts to user's timezone)

### Booking Flow
1. Select booking type (15/30/60 min)
2. Choose date from calendar
3. Pick available time slot
4. Enter contact info (name, email, phone)
5. Answer 3-5 brief questions
6. Confirm booking
7. Receive confirmation email + calendar invite

---

## Brief Wizard (Pre-Call Questions)

### Step 1: About You
- **Full Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Company Name** (optional)
- **Your Role** (dropdown: Founder, CTO, Marketing, Product, Other)

---

### Step 2: Project Type
**What are you looking to build?** (select all that apply)
- [ ] AI Web Application
- [ ] AI Chatbot
- [ ] Multi-Agent System
- [ ] AI Integration (existing app)
- [ ] MVP (new product)
- [ ] Sales/Marketing Automation
- [ ] Other: ___________

---

### Step 3: Project Details
**Tell us about your project** (textarea, 500 chars)
- What problem are you solving?
- Who are your users?
- What's your vision?

**Timeline** (dropdown)
- ASAP (within 4 weeks)
- 1-2 months
- 3-6 months
- Exploring (6+ months)

**Budget Range** (dropdown)
- $10k-$25k
- $25k-$50k
- $50k-$100k
- $100k+
- Not sure yet

---

### Step 4: Goals & Expectations
**What's your primary goal?** (radio buttons)
- Launch MVP to validate idea
- Replace manual processes with AI
- Increase revenue/conversions
- Reduce costs/headcount
- Stay competitive
- Other: ___________

**Current Status** (checkbox)
- We have designs/mockups
- We have technical specs
- We've tried building this before
- We have existing users/customers
- Starting from scratch

---

### Step 5: Discovery Questions
**How did you hear about us?** (dropdown)
- Google search
- Social media (LinkedIn, Twitter)
- Referral from: ___________
- Portfolio/case study
- Other: ___________

**Anything else we should know?** (textarea, optional)

---

## Confirmation Flow

### Booking Confirmed Page

**Headline:** "You're All Set! 🎉"

**Details:**
- ✅ **Confirmed:** [Date] at [Time] ([Timezone])
- 📧 **Confirmation sent to:** [Email]
- 📅 **Calendar invite:** Check your email
- ⏱️ **Duration:** [15/30/60] minutes
- 🎥 **Meeting link:** [Zoom/Meet link] (sent via email)

**What Happens Next:**
1. Check your email for calendar invite
2. Add to your calendar
3. Review prep checklist below (optional)
4. We'll send reminder 24h before
5. Join call at scheduled time

**CTAs:**
- "Add to Google Calendar"
- "Add to Outlook"
- "Download .ics File"

---

## Pre-Call Prep Checklist

### To Get the Most from Your Call

**Before the Call:**
- [ ] Review our [portfolio](/projects) for inspiration
- [ ] Prepare 3-5 questions you want answered
- [ ] Have rough budget/timeline in mind
- [ ] Identify key stakeholders who should be involved
- [ ] Gather any relevant docs (wireframes, specs, data)

**Optional Homework:**
- [ ] List 3 competitors or inspiration apps
- [ ] Write down your top 3 must-have features
- [ ] Sketch rough user flow or workflow
- [ ] Identify biggest technical concerns

**During the Call:**
- [ ] Have pen/paper ready for notes
- [ ] Be in quiet space with good internet
- [ ] Share screen if helpful
- [ ] Ask questions—no question is too basic

---

## Reschedule/Cancel Options

### Need to Change Your Appointment?

**Reschedule:**
- Click link in confirmation email
- Select new date/time
- We'll update calendar invite

**Cancel:**
- Click cancel link in email
- No penalty, no questions asked
- Rebook anytime

**Emergency Contact:**
- Email: hello@luxuryai.com
- Response time: <2 hours during business hours

---

## Frequently Asked Questions

**Q1: Is the consultation really free?**
A: Yes, 100% free. No credit card required. No obligation to hire us.

**Q2: What if I'm not sure what I need?**
A: Perfect! That's exactly what the call is for. We'll help you figure it out.

**Q3: Do I need technical knowledge?**
A: Not at all. We explain everything in plain English.

**Q4: Will you try to sell me something?**
A: No high-pressure sales. We'll give honest advice, even if we're not the right fit.

**Q5: Can I bring my team?**
A: Absolutely! Invite anyone relevant (CTO, product manager, co-founder).

**Q6: What if I need more time?**
A: Just let us know during the call. We can extend or schedule a follow-up.

**Q7: Do you sign NDAs?**
A: Yes, if needed. Just mention it when booking.

**Q8: What timezone are you in?**
A: We're based in ET (Eastern Time) but serve clients globally. Calendar auto-adjusts to your timezone.

---

## Multistep Prompts

### Prompt 1: Hero with Calendar Preview
> "Create hero with headline 'Book Your Free AI Strategy Call', subheadline about 30-min consultation, 3 value pills (100% Free, 30 Minutes, Custom Roadmap). Right side shows calendar widget preview with available time slots (Calendly-style). Add optional team intro video thumbnail with play button. Animate calendar slots fading in (stagger 0.1s). Primary CTA 'Schedule Now' scrolls to booking section."

### Prompt 2: Booking Options Cards
> "Build 3 booking option cards: Quick Chat (15min), Strategy Session (30min, RECOMMENDED badge), Workshop (60min). Each card shows: duration, 'Best For' statement, 'What We'll Cover' (4-5 bullets), format type, availability estimate, CTA button. Middle card (Strategy) elevated with gradient border and pulse animation. Hover effect: lift 8px, shadow increase. CTAs open calendar modal."

### Prompt 3: Calendar Booking Interface
> "Design calendar booking UI: left shows month calendar with available dates (green dots on available days, gray for unavailable), right shows time slots for selected date (9am-6pm in 30-min increments). User clicks date → time slots load with fade-in animation. Clicking slot shows confirmation modal with date/time, timezone selector, 'Confirm' button. Display user's detected timezone at top."

### Prompt 4: Brief Wizard Multi-Step Form
> "Create 5-step wizard form: (1) About You (name, email, role), (2) Project Type (checkboxes), (3) Project Details (textarea + dropdowns for timeline/budget), (4) Goals (radio buttons + checkboxes), (5) Discovery (how heard, additional notes). Show progress bar at top (0-100%). Each step has 'Next' button. Step transitions: slide-out left, slide-in right (400ms). Include 'Back' button and step indicators (dots). Final step shows 'Complete Booking' CTA."

### Prompt 5: Confirmation Page
> "Design confirmation page with success state: large checkmark animation (draw SVG path, 1s), headline 'You're All Set! 🎉', booking details card (date, time, timezone, duration, meeting link), 'What Happens Next' numbered list (5 steps), calendar export buttons (Google, Outlook, .ics), prep checklist (expandable accordion). Add confetti animation on page load (3s duration). Include 'Reschedule' and 'Cancel' links at bottom."

### Prompt 6: Prep Checklist Accordion
> "Build prep checklist with 3 sections: Before the Call (5 items), Optional Homework (4 items), During the Call (4 items). Each section is expandable accordion. Items have checkboxes that animate on click: checkmark draws, item text strikes through, subtle green highlight. Progress bar shows completion (0-13 items). Add 'Download Checklist PDF' button. Sections open with slide-down animation (300ms)."

---

## Animation Specs

### Calendar Slots Fade-In
```javascript
timeSlots: {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { stagger: 0.05, duration: 0.3 }
  }
}

// Selected slot highlight
slot.onClick: {
  backgroundColor: '#667eea',
  color: 'white',
  scale: [1, 1.05, 1],
  duration: 300
}
```

### Wizard Step Transition
```javascript
stepChange: {
  currentStep: { 
    opacity: [1,0],
    x: [0,-50],
    duration: 300
  },
  nextStep: {
    opacity: [0,1],
    x: [50,0],
    delay: 150,
    duration: 400
  },
  progressBar: {
    width: '+20%', // 5 steps = 20% each
    duration: 500
  }
}
```

### Confirmation Success Animation
```javascript
onLoad: {
  confetti: {
    particles: 100,
    colors: ['#667eea', '#4caf50', '#ff9800'],
    duration: 3000,
    spread: 180
  },
  checkmark: {
    strokeDashoffset: [1,0],
    duration: 1000,
    stroke: '#4caf50',
    strokeWidth: 3
  },
  detailsCard: {
    opacity: [0,1],
    y: [20,0],
    delay: 800,
    duration: 500
  }
}
```

### Booking Option Card Hover
```javascript
card.onHover: {
  y: -8,
  boxShadow: '0 12px 32px rgba(102,126,234,0.3)',
  button: {
    scale: 1.05,
    backgroundColor: darken(10%)
  },
  duration: 300
}

// Recommended badge pulse
recommendedBadge: {
  scale: [1, 1.1, 1],
  opacity: [1, 0.8, 1],
  loop: true,
  duration: 2000
}
```

### Checklist Item Check
```javascript
checkbox.onClick: {
  checkmark: {
    strokeDashoffset: [1,0],
    duration: 400,
    stroke: '#4caf50'
  },
  text: {
    textDecoration: 'line-through',
    color: '#9e9e9e'
  },
  row: {
    backgroundColor: 'rgba(76,175,80,0.1)'
  },
  progressBar: {
    width: '+7.69%', // 1/13 items
    duration: 300
  }
}
```

---

## Email Notifications

### Confirmation Email (to user)
**Subject:** Your AI Strategy Call is Confirmed 🎉

**Body:**
- Confirmation message
- Date, time, timezone
- Meeting link (Zoom/Meet)
- Calendar attachment (.ics)
- Prep checklist
- Contact info for questions

---

### Reminder Email (24h before)
**Subject:** Reminder: Your AI Strategy Call Tomorrow

**Body:**
- Friendly reminder
- Meeting details
- Meeting link
- "Looking forward to it!"

---

### Internal Notification (to team)
**Subject:** New Booking: [Client Name] - [Date/Time]

**Body:**
- Client details
- Project type
- Timeline & budget
- Brief answers
- Link to calendar event

---

## SEO Metadata

- **Title:** "Book Free AI Consultation | 30-Min Strategy Call | No Obligation"
- **Description:** "Schedule your free AI strategy call. Discuss your project, get expert guidance, receive custom roadmap. No sales pressure. Book now."
- **Keywords:** AI consultation, free strategy call, AI project booking, schedule AI meeting

---

## Success Criteria

- [ ] Booking process simple (<3 minutes)
- [ ] Calendar shows accurate availability
- [ ] Confirmation email sends immediately
- [ ] Prep checklist helps set expectations
- [ ] Reschedule/cancel easy to find
- [ ] Mobile-friendly booking flow
- [ ] Timezone detection accurate

---

**Total Lines:** 395  
**Status:** Booking Page Spec  
**Last Updated:** Dec 27, 2025
