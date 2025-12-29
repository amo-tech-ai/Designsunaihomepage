# 10. Real Estate Chatbot Service Page

**Route:** `/services/chatbot/real-estate`  
**Service:** AI Chatbot for Real Estate  
**Max Lines:** 500

---

## Progress Tracker

### Design Phase
- [ ] Hero with property search demo
- [ ] Lead qualification flow
- [ ] Showing scheduler visualization
- [ ] MLS integration showcase
- [ ] Virtual tour assistant
- [ ] Lead conversion calculator

### Content Phase
- [ ] Write real estate headline
- [ ] Define 6 agent scenarios
- [ ] Create qualification questions
- [ ] List MLS/CRM integrations
- [ ] Document showing workflow
- [ ] Write pricing tiers

### Development Phase
- [ ] Build hero with property finder
- [ ] Create qualification quiz
- [ ] Build scheduler component
- [ ] Implement integration grid
- [ ] Add tour booking demo
- [ ] Create ROI calculator

---

## Color Palette

- **Primary:** `#2196f3` Blue (trust/real estate)
- **Secondary:** `#ff9800` Orange (home/warmth)
- **Accent:** `#4caf50` Green (sold/success)
- **Navy:** `#0a1628`
- **Gray:** `#4a5568`
- **Gradient:** Linear 135deg `#2196f3` to `#ff9800`

---

## Hero Section

### Headline
> "Convert Website Visitors into Qualified Leads 24/7"

### Subheadline
> "AI real estate assistant that qualifies buyers, schedules showings, and nurtures leads automatically—capturing 3.5x more leads while you focus on closing deals."

### Value Props (3 Pills)
1. **🏡 3.5x More Leads** — Never miss another inquiry
2. **📅 Auto-Schedule Showings** — Fill your calendar
3. **🎯 85% Qualification Rate** — Pre-qualified prospects only

### CTAs
- **Primary:** "Find Your Dream Home" → Opens property finder chatbot
- **Secondary:** "Calculate Lead Value" → ROI calculator

### Hero Visual
- Real estate website with chatbot
- Property search conversation
- Calendar filling with showings

---

## 6 Real Estate Use Cases

### 1. Property Search & Recommendations
- **Icon:** 🔍 Search
- **Challenge:** Buyers browse listings but never reach out
- **Solution:** AI engages visitors, recommends properties
- **Conversation Flow:**
  - Bot: "Looking to buy or sell?"
  - User: "Buy a home"
  - Bot: "Great! What's your budget range?"
  - User: "$400k-$550k"
  - Bot: "Bedrooms needed?"
  - User: "3-4"
  - Bot: "Perfect! Here are 8 homes that match..."
- **Result:** 42% of chatbot users request showing (vs 3% site avg)

---

### 2. Lead Qualification
- **Icon:** 🎯 Target
- **Challenge:** 60% of leads are tire-kickers
- **Solution:** AI qualifies before wasting agent time
- **Qualification Questions:**
  - Pre-approved for mortgage? (Y/N)
  - Timeline to purchase? (30/60/90+ days)
  - Working with another agent? (Y/N)
  - Cash buyer or financing?
  - First-time buyer?
  - Current home to sell?
- **Scoring System:**
  - Hot Lead (80-100): Pre-approved, 30-day timeline
  - Warm (50-79): Serious but 60-90 days out
  - Cold (<50): Browsing, 6+ months
- **Result:** Agents only contact 85%+ qualified leads

---

### 3. Showing Scheduler
- **Icon:** 📅 Calendar
- **Challenge:** Phone tag scheduling wastes 8 hours/week
- **Solution:** AI books showings directly to calendar
- **Workflow:**
  - User requests showing
  - Bot checks agent availability (Google Calendar)
  - Offers 3 time slots
  - User selects time
  - Confirmation sent (SMS + email)
  - Reminder 24h before
  - Add to CRM automatically
- **Result:** 5x more showings scheduled
- **Time Saved:** 12 hours/week per agent

---

### 4. Open House Assistant
- **Icon:** 🏠 House
- **Challenge:** Miss leads who attend open house
- **Solution:** QR code chatbot captures visitor info
- **Open House Flow:**
  - Visitor scans QR code
  - Chatbot greets: "Welcome! Interested in this property?"
  - Collects: Name, phone, email, feedback
  - Asks: "See similar homes?"
  - Schedules follow-up call
  - Sends property details via SMS
- **Result:** 78% visitor capture rate (was 30% with sign-in sheet)

---

### 5. Buyer/Seller Intake
- **Icon:** 📋 Clipboard
- **Challenge:** Lengthy intake forms deter leads
- **Solution:** Conversational intake (feels like chat)
- **Buyer Intake:**
  - Current living situation
  - Must-have features
  - Deal-breakers
  - Preferred neighborhoods
  - School district importance
  - Move-in timeline
- **Seller Intake:**
  - Property address
  - Reason for selling
  - Desired price
  - Timeline to list
  - Current mortgage balance
  - Recent improvements
- **Result:** 65% completion (vs 28% with forms)

---

### 6. Lead Nurture & Drip
- **Icon:** 🌱 Seedling
- **Challenge:** 80% of leads convert after 8+ touchpoints
- **Solution:** AI nurtures over weeks/months
- **Nurture Sequence:**
  - Day 1: Property recommendations
  - Day 3: Market update for area
  - Day 7: New listings matching criteria
  - Day 14: Mortgage pre-approval reminder
  - Day 21: "Still looking?" check-in
  - Day 30: Price drop alerts
  - Ongoing: New matching listings
- **Result:** 32% of nurtured leads convert (was 8%)

---

## MLS & CRM Integrations

### MLS Platforms
- **Zillow Premier Agent** — Lead import, property sync
- **Realtor.com** — Listing feed
- **MLS Grid** — National MLS data
- **Local MLS** — Regional boards (via IDX)

### Real Estate CRMs
- **Follow Up Boss** — Full integration
- **LionDesk** — Lead sync
- **kvCORE** — ISA workflows
- **BoomTown** — Lead routing
- **Wise Agent** — Contact management

### Calendar & Scheduling
- Google Calendar
- Outlook Calendar
- Calendly
- Showing Time

### Communication
- SMS (Twilio)
- Email (SendGrid)
- WhatsApp
- Slack (agent notifications)

---

## Lead Qualification Framework

### Hot Lead Criteria (80-100 points)
✅ Pre-approved for mortgage (+30 pts)  
✅ Timeline: 0-30 days (+25 pts)  
✅ Not working with another agent (+15 pts)  
✅ Specific property in mind (+10 pts)  
✅ Flexible on price (+10 pts)  
✅ Responded within 5 minutes (+10 pts)

**Action:** Immediate agent notification + call within 15 min

---

### Warm Lead Criteria (50-79 points)
⚠️ Mortgage pre-approval in progress (+20 pts)  
⚠️ Timeline: 30-90 days (+15 pts)  
⚠️ Researching neighborhoods (+10 pts)  
⚠️ First-time buyer (+10 pts)

**Action:** Schedule call within 24h + nurture sequence

---

### Cold Lead Criteria (<50 points)
❄️ No mortgage pre-approval (0 pts)  
❄️ Timeline: 90+ days or "just browsing" (+5 pts)  
❄️ Working with another agent (-10 pts)  
❄️ Unrealistic budget expectations (-5 pts)

**Action:** Long-term nurture campaign only

---

## Pricing for Real Estate

### Solo Agent — $6,000
- **Timeline:** 3 weeks
- **Includes:**
  - Website chat widget
  - Property search (MLS integration)
  - Lead qualification
  - Showing scheduler (1 agent)
  - Up to 500 conversations/month
  - 30-day support
- **Best For:** Individual agents

### Team/Brokerage — $12,000
- **Timeline:** 4-5 weeks
- **Includes:**
  - Everything in Solo
  - Multi-agent scheduling
  - Open house QR code system
  - CRM integration (Follow Up Boss, etc.)
  - Lead assignment rules
  - Up to 3,000 conversations/month
  - 60-day support
- **Best For:** Teams of 3-10 agents

### Enterprise Brokerage — $25,000+
- **Timeline:** 6-8 weeks
- **Includes:**
  - Everything in Team
  - Custom branding (white-label)
  - Multi-office support
  - Advanced analytics
  - ISA integration
  - Unlimited conversations
  - Dedicated support
- **Best For:** Brokerages, franchises

---

## Lead Value Calculator

### Inputs:
- Monthly website visitors: 5,000
- Current lead capture rate: 2%
- Avg commission per sale: $8,000
- Conversion rate (lead to sale): 8%

### With AI Chatbot:

**Lead Capture:**
- New capture rate: 7% (3.5x improvement)
- Leads/month: 350 (was 100)
- Additional leads: +250/month

**Qualification:**
- Hot leads (30%): 105 leads
- Warm leads (50%): 175 leads
- Cold leads (20%): 70 leads (nurture only)

**Conversion:**
- Hot leads converted (20%): 21 sales
- Warm leads converted (8%): 14 sales
- Total sales: 35/month (was 8)

**Revenue Impact:**
- Additional sales: +27/month
- Commission per sale: $8,000
- **Additional revenue: $216,000/month**
- **Annual impact: $2,592,000**

**Time Savings:**
- Showing scheduling: 12 hrs/week × $50/hr = $600/week
- Lead qualification: 8 hrs/week × $50/hr = $400/week
- **Total savings: $52,000/year**

**Investment:** $12,000  
**First-Year ROI:** 217x

---

## Case Study: Luxury Real Estate Team

**Team:** Prestige Properties (6 agents, luxury market)

**Before:**
- 3,800 monthly website visitors
- 76 leads/month (2% capture)
- 6 sales/month
- 18 hours/week on scheduling/admin

**After (6 months with chatbot):**
- Same traffic: 3,800 visitors
- 266 leads/month (7% capture, +250%)
- 22 sales/month (+267%)
- 4 hours/week on admin (-78%)

**Chatbot Performance:**
- 1,840 conversations/month
- 266 qualified leads
- 420 showings scheduled
- 89% lead satisfaction score

**Financial Impact:**
- Additional sales: +16/month × $12k avg = $192k/month
- **Annual commission increase: $2.3M**
- Time saved value: $73k/year
- **ROI: 191x**

---

## FAQ for Real Estate

**Q1: Does it integrate with our MLS?**
A: Yes. We connect via IDX feed or direct MLS integration (MLS Grid, local boards).

**Q2: Can it show property photos in chat?**
A: Absolutely. Displays listings with images, price, beds/baths, virtual tour links.

**Q3: What about lead distribution for teams?**
A: Custom rules: round-robin, territory-based, or by specialty (buyer/seller agent).

**Q4: Can it handle Spanish-speaking leads?**
A: Yes. Supports 95+ languages with auto-detection.

**Q5: How does showing scheduling work?**
A: Syncs with Google/Outlook Calendar. Agent sets availability, chatbot offers open slots.

**Q6: What if someone asks a complex question?**
A: Chatbot answers common questions (schools, taxes, HOA). Complex issues escalate to agent.

**Q7: Can we use it for open houses?**
A: Yes. QR code system captures visitor info and follows up automatically.

**Q8: How do we track ROI?**
A: Dashboard shows leads captured, qualified, scheduled, and closed deals attributed to chatbot.

---

## Multistep Prompts

### Prompt 1: Hero with Property Finder
> "Create hero with headline 'Convert Website Visitors into Qualified Leads 24/7', subheadline about qualifying buyers and scheduling showings, 3 value pills (3.5x More Leads, Auto-Schedule, 85% Qualified). Right side shows real estate website mockup with chatbot. Chatbot displays property search conversation with listing images (3 beds, $450k, etc.). Add calendar icon showing scheduled showings. Primary CTA 'Find Your Dream Home', secondary 'Calculate Lead Value'."

### Prompt 2: Use Case Carousel
> "Build carousel with 6 real estate use cases: Property Search, Lead Qualification, Showing Scheduler, Open House, Buyer/Seller Intake, Lead Nurture. Each slide shows icon, challenge, solution, conversation flow (4-5 messages), result metric. Add property images where relevant. Auto-advance every 7 seconds. Include 'Try This Flow' CTA per slide."

### Prompt 3: Qualification Framework
> "Design lead scoring visualization with 3 tiers: Hot (80-100 pts, green), Warm (50-79 pts, orange), Cold (<50 pts, blue). Each tier shows criteria with point values, action to take, example lead profile. Add interactive calculator: select criteria checkboxes, see score update in real-time. Display recommended agent action based on score."

### Prompt 4: Showing Scheduler Demo
> "Create step-by-step showing scheduler flow: User requests showing → Chatbot checks agent calendar → Offers 3 time slots → User selects → Confirmation sent → Reminder 24h before. Show calendar interface with available/blocked times. Animate booking process with checkmarks and confirmation message. Include SMS/email notification preview."

### Prompt 5: Integration Ecosystem
> "Build real estate integration grid with 4 categories: MLS (Zillow, Realtor.com, MLS Grid), CRM (Follow Up Boss, LionDesk, kvCORE, BoomTown), Calendar (Google, Outlook, Calendly), Communication (SMS, Email, WhatsApp). Display logos with integration status badges. Add technical details on hover. Include 'Request Integration' form."

### Prompt 6: Lead Value Calculator
> "Create interactive ROI calculator for real estate agents. Inputs: monthly visitors, current capture rate, avg commission, lead-to-sale conversion. Calculate with chatbot: new capture rate (7%), leads generated, hot/warm/cold breakdown, projected sales, revenue impact. Display monthly and annual numbers. Show time savings. Add 'Download Lead Report' button."

### Prompt 7: Case Study Results
> "Design case study for Prestige Properties luxury team (6 agents). Show before/after in comparison cards: visitors (same 3,800), leads (76 → 266/mo), sales (6 → 22/mo), admin time (18h → 4h/wk). Display chatbot stats (1,840 conversations, 420 showings). Calculate financial impact: $2.3M annual increase. Show ROI: 191x. Add team photo and testimonial."

---

## Animation Specs

### Property Search Conversation
```javascript
messages: [
  { from: 'bot', text: 'Budget range?', delay: 0 },
  { from: 'user', text: '$400k-$550k', delay: 2s },
  { from: 'bot', text: 'Bedrooms?', delay: 3s },
  { from: 'user', text: '3-4', delay: 4.5s },
  { listings: [prop1, prop2, prop3], delay: 6s }
]
listingCards: {
  stagger: 0.2s,
  animate: { y: [20,0], opacity: [0,1] },
  image: lazy load with blur-up
}
```

### Calendar Filling Animation
```javascript
// Showing scheduler visualization
calendar: {
  emptySlots: { opacity: 0.3, color: gray },
  bookingAnimation: {
    slot: { opacity: [0.3,1], color: [gray,green] },
    checkmark: { scale: [0,1.2,1], delay: 0.3s }
  },
  fillSequence: stagger 0.4s (show multiple bookings)
}
```

### Lead Score Calculator
```javascript
criteria.onChange: {
  score: count-up animation (1s),
  tier: {
    hot: { color: green, icon: fire },
    warm: { color: orange, icon: thermometer },
    cold: { color: blue, icon: snowflake }
  },
  tierBadge: { scale: [0.8,1.2,1], duration: 0.4s }
}
```

---

## SEO Metadata

- **Title:** "Real Estate Chatbot | Capture 3.5x More Leads | Auto-Schedule Showings"
- **Description:** "AI chatbot for real estate agents and teams. Qualify buyers, schedule showings, nurture leads automatically. 85% qualification rate. From $6k."
- **Keywords:** real estate chatbot, lead qualification AI, showing scheduler, MLS integration, real estate automation

---

## Success Criteria

- [ ] Hero shows property finder in action
- [ ] Use cases cover full agent workflow
- [ ] Qualification framework clear and actionable
- [ ] Showing scheduler demonstrates automation
- [ ] Integration showcase comprehensive
- [ ] Calculator proves massive ROI
- [ ] Case study shows real results
- [ ] CTAs focused on demo and calculator

---

**Total Lines:** 495  
**Status:** Industry Page Spec  
**Last Updated:** Dec 27, 2025
