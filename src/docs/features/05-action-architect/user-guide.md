# Post-Call Action Architect - User Guide

## Quick Start (30 Seconds)

1. **Upload Call** → Click "Upload Call" or drag & drop recording
2. **AI Analyzes** → Wait 10-15 seconds while AI processes
3. **Review Brief** → See extracted budget, timeline, competitors
4. **Approve Actions** → Check boxes to approve suggested tasks
5. **Done** → All data saved to CRM automatically

**Time Saved:** 15+ minutes per call

---

## Step-by-Step Guide

### Step 1: Upload Your Call Recording

**Where to Find It:**
- Main dashboard → "Upload Call" button
- Lead profile page → "Calls" tab → "Upload New"
- Quick action menu (⌘+U)

**Supported Formats:**
- MP3, WAV, M4A, OGG
- Up to 500MB file size
- Up to 2 hours duration

**How to Upload:**

**Option A: Drag & Drop**
1. Open the upload modal
2. Drag your recording file from desktop
3. Drop it in the highlighted area
4. File uploads automatically

**Option B: Click to Browse**
1. Click "Choose File" button
2. Browse your computer
3. Select recording file
4. Click "Open"

**Option C: Paste URL** (if using Gong/Chorus)
1. Copy recording URL from Gong
2. Paste into "Or paste recording URL" field
3. Click "Import"

### Step 2: Add Call Context (Optional)

While uploading, you can add:
- **Call Date** (defaults to today)
- **Call Type** (discovery, demo, negotiation, follow-up)
- **Participants** (auto-filled if on lead profile)

**Why Add Context?**
- Helps AI understand the stage of the deal
- Improves action item relevance
- Makes calls searchable later

### Step 3: Wait for AI Analysis

**What Happens:**
1. File uploads (2-5 seconds)
2. AI transcribes audio (6-10 seconds)
3. AI extracts signals (3-5 seconds)
4. Brief is generated

**You'll See:**
```
┌─────────────────────────────────────┐
│  🎙️ Analyzing Your Call...         │
│                                     │
│  ✓ Uploaded successfully            │
│  🔄 Transcribing audio... 65%       │
│  ⏳ Extracting signals...           │
│  ⏳ Generating action items...      │
│                                     │
│  Estimated time: 8 seconds          │
└─────────────────────────────────────┘
```

**No Spinners!**
Just calm text updates. You'll see what the AI is doing at each step.

### Step 4: Review the Call Brief

**The Brief Includes:**

**📝 Summary** (2-3 sentences)
```
Discovery call with Sarah Chen (CEO, FintechFlow) to discuss 
CRM needs. Sarah confirmed $75k budget and Q3 timeline...
```

**💰 Budget**
```
$75,000
Confidence: 94%
Quote: "We have about seventy-five thousand budgeted"
```

**📅 Timeline**
```
Q3 2024
Urgency: High
Quote: "Need to launch before end of third quarter"
```

**🏢 Competitors Mentioned**
```
• Salesforce (evaluating - demo next week)
• HubSpot (rejected - too complex)
```

**😫 Pain Points**
```
1. Manual data entry (10 hours/week)
   Severity: High
   Quote: "Reps spend half a day just entering data"

2. Lost deals due to lack of follow-up
   Severity: High
   Quote: "We've lost deals because reps forgot to follow up"
```

**👥 Decision Process**
```
Final Decision Maker: CEO (Sarah Chen)
Approval Steps:
  • CFO sign-off on budget
  • Security review
  • Board notification (deals >$50k)
Stakeholders: CTO, VP Sales, CFO
```

**✅ What's Accurate?**
- Green checkmark = High confidence (>90%)
- Yellow icon = Medium confidence (70-90%)
- Question mark = Low confidence (<70%) - review manually

### Step 5: Review Action Items

**AI generates 2-5 tasks based on call commitments:**

```
┌─────────────────────────────────────────────────────┐
│  📋 Suggested Action Items (4)                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [ ] Send API documentation (v2.0) to Sarah        │
│      Priority: High | Due: Today 5 PM              │
│      "Sarah specifically requested API docs..."     │
│                                                     │
│  [ ] Schedule architecture review with CTO          │
│      Priority: High | Due: Next week               │
│      "Sarah's CTO needs technical deep-dive..."     │
│                                                     │
│  [ ] Draft pricing proposal with AI add-on         │
│      Priority: Medium | Due: Dec 28                │
│      "Create proposal for $75k + AI module..."      │
│                                                     │
│  [ ] Send Salesforce comparison battle card        │
│      Priority: High | Due: Tomorrow 5 PM           │
│      "They're demoing Salesforce next week..."      │
│                                                     │
└─────────────────────────────────────────────────────┘

[✓ Approve All] [Edit] [Dismiss]
```

**For Each Action:**
- **Title:** Clear, specific task
- **Priority:** High (urgent), Medium (standard), Low (nice-to-have)
- **Due Date:** Realistic deadline based on urgency
- **Description:** Why this matters (context from call)

### Step 6: Approve, Edit, or Dismiss Actions

**Option A: Approve All (Most Common)**
- Click "✓ Approve All"
- All tasks created in CRM
- Assigned to you automatically
- Show up in your task list

**Option B: Approve Selectively**
- Click checkbox next to each task you want
- Click "Approve Selected"
- Only checked tasks created

**Option C: Edit an Action**
- Click "Edit" on any task
- Change title, due date, priority, or owner
- Click "Save"

**Option D: Dismiss an Action**
- Click "Dismiss" on task
- Provide reason (optional): "Already done", "Not relevant", "Duplicate"
- Task won't be created

**What Happens After Approval:**
```
✅ 4 tasks created successfully

Tasks added to:
• Your task list (shows in sidebar)
• Lead activity timeline
• CRM calendar (due dates marked)
• Daily digest email (sent 8 AM tomorrow)
```

### Step 7: Lead Record Auto-Updated

**Without You Typing Anything:**

**Before Call:**
```
Lead: Sarah Chen
Company: FintechFlow
Budget: (not set)
Timeline: (not set)
Competitors: []
Last Activity: Email sent 3 days ago
```

**After Call (Auto-Updated):**
```
Lead: Sarah Chen
Company: FintechFlow
Budget: $75,000 ✨ NEW
Timeline: Q3 2024 ✨ NEW
Competitors: ["Salesforce", "HubSpot"] ✨ NEW
Last Activity: Discovery call today ✨ NEW
Next Step: Send API docs (Due: Today) ✨ NEW
```

**Zero Manual Data Entry** ✅

---

## Tips & Best Practices

### Recording Quality Tips

**For Best Results:**
✅ Record in quiet environment (minimal background noise)
✅ Use headset mic (better than laptop mic)
✅ Speak clearly and at normal pace
✅ Keep mic close to mouth (6-12 inches)

**Avoid:**
❌ Recording in loud coffee shops
❌ Using phone speaker (use headphones)
❌ Talking over each other (pause between speakers)
❌ Recording through bad internet connection (record locally)

**Quality Impact on Accuracy:**
- Excellent quality: 95%+ accuracy
- Good quality: 90-95% accuracy
- Fair quality: 85-90% accuracy
- Poor quality: <80% accuracy (may need manual review)

### When to Upload

**Best Times:**
- **Immediately after call** (while fresh in memory)
- **End of day** (batch upload 3-5 calls)
- **Before weekend** (clear your queue)

**Why Upload Quickly:**
- Action items get assigned with correct due dates
- Lead record stays up-to-date
- Manager can review deals in real-time

### Review Before Approving

**Quick Checklist:**
- [ ] Budget amount seems right?
- [ ] Timeline matches what you heard?
- [ ] Competitors accurate?
- [ ] Action items make sense?
- [ ] Due dates realistic?

**Takes 30 Seconds**

**If Something Looks Wrong:**
1. Click "Edit" on that section
2. Correct the value
3. Click "Save"
4. AI learns from your corrections (gets better over time!)

### What If AI Missed Something?

**No Problem!**

**Option 1: Add Manually**
- Click "Add Action Item" button
- Fill in details
- Click "Create"

**Option 2: Edit the Brief**
- Click "Edit Brief" button
- Add missing information
- Click "Save"

**Option 3: Provide Feedback**
- Click "AI Missed Something?" link
- Describe what was missed
- Our team reviews and improves prompts

**Your Feedback Makes the AI Smarter** 🧠

---

## Advanced Features

### Search Past Calls

**Find Calls by:**
- Prospect name
- Company name
- Topics discussed
- Competitors mentioned
- Date range

**Example Searches:**
- "Calls mentioning Salesforce"
- "Discovery calls this month"
- "Calls with budget over $100k"
- "Calls where timeline is Q1"

**How to Search:**
1. Press ⌘+K (Cmd+K)
2. Type your query
3. See results instantly

### Compare Calls

**See How Deals Progress:**
1. Open lead profile
2. Go to "Calls" tab
3. See all calls in timeline
4. Click "Compare Calls" button
5. See how budget/timeline changed over time

**Example:**
```
Call 1 (Nov 15): Budget "maybe $50k", Timeline "TBD"
Call 2 (Dec 1):  Budget "$75k confirmed", Timeline "Q3 2024"
Call 3 (Dec 15): Budget "$75k + $25k for add-ons", Timeline "June 2024"

📈 Trend: Deal growing, timeline accelerating
```

### Export Call Briefs

**Share with Team:**
1. Open call brief
2. Click "Export" button
3. Choose format:
   - PDF (for emails)
   - Google Doc (for collaboration)
   - Slack message (for quick shares)

**Use Cases:**
- Send brief to manager before deal review
- Share with solution engineer before demo
- Add to proposal as "recap of our conversation"

### Batch Upload

**Upload Multiple Calls at Once:**
1. Click "Batch Upload"
2. Drag folder of recordings
3. AI processes in order
4. You'll get email when all done

**Great For:**
- Uploading week's worth of calls
- Importing historical calls
- Team lead uploading team's calls

---

## Troubleshooting

### "Processing Failed" Error

**Cause:** Audio file corrupted or format not supported

**Fix:**
1. Try re-downloading the recording
2. Convert to MP3 (use CloudConvert.com)
3. Upload again

### "Transcription Incomplete" Warning

**Cause:** Audio quality too low

**Fix:**
1. Review transcript (click "View Transcript")
2. Manually fill in gaps (click "Edit Transcript")
3. Click "Re-analyze" to re-extract signals

### "Low Confidence" Badge on Budget/Timeline

**Cause:** Information mentioned vaguely or unclearly

**What to Do:**
1. Listen to call again (click "Play Recording")
2. Confirm if budget/timeline was actually discussed
3. Edit manually if AI got it wrong
4. Click "This is Correct" if AI was right (helps training)

### Action Items Seem Irrelevant

**Cause:** AI misunderstood call context

**Fix:**
1. Dismiss irrelevant actions
2. Provide feedback: "Why dismiss? → Not relevant to this call"
3. Add correct actions manually
4. AI learns from your edits

### Processing Taking >30 Seconds

**Cause:** Long recording (>1 hour) or API slowdown

**What to Do:**
- Wait patiently (processing will complete)
- You'll get email notification when done
- Can close tab and come back later

**If Stuck >5 Minutes:**
- Refresh page
- If still stuck, contact support (we'll investigate)

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Upload call | ⌘+U |
| Approve all actions | ⌘+Enter |
| Dismiss all actions | ⌘+Delete |
| Edit brief | E |
| Play recording | Space |
| Search calls | ⌘+K |
| Next call | →  |
| Previous call | ← |

---

## Mobile App

**Upload calls from your phone:**

1. Open mobile app
2. Tap "Upload Call"
3. Options:
   - Record now (starts recording)
   - Choose from files
   - Import from cloud (Dropbox, Google Drive)

**Same Features as Desktop:**
- AI analysis (same 10-15 seconds)
- Review brief on phone
- Approve actions with tap
- Swipe to dismiss

**Perfect For:**
- Uploading right after in-person meeting
- Recording coffee shop sales calls
- Quick reviews while commuting

---

## FAQs

**Q: Can AI analyze calls in other languages?**
A: Currently English only. Spanish, French coming Q1 2026.

**Q: What if prospect says budget is confidential?**
A: AI will note "Budget: Confidential (not disclosed)" and skip extraction.

**Q: Does AI hear every word perfectly?**
A: 92% accuracy on average. Quality improves with better recording quality.

**Q: Can I delete a call brief?**
A: Yes. Click "Delete" on brief. Warning: This also deletes action items.

**Q: Who can see my call briefs?**
A: Only your team (same org). Your manager can see all team briefs.

**Q: Is my data secure?**
A: Yes. Encrypted at rest (AES-256), encrypted in transit (TLS 1.3). SOC 2 compliant.

**Q: How long are recordings stored?**
A: 90 days by default. Enterprise plans: unlimited storage.

**Q: Can I re-analyze a call if AI made mistakes?**
A: Yes! Click "Re-analyze" button. Uses updated AI prompts (we improve monthly).

---

## Getting Help

**In-App Help:**
- Click "?" icon → Search help docs
- Click "Chat with Support" → Live chat (M-F 9-5 PT)

**Video Tutorials:**
- [YouTube: Upload Your First Call](link) (2 min)
- [YouTube: Understanding Call Briefs](link) (3 min)
- [YouTube: Action Item Best Practices](link) (4 min)

**Team Training:**
- Request onboarding session (free for teams 5+)
- Weekly webinar: Thursdays 2 PM PT
- Self-paced course: academy.luxurycrm.com

---

*Last Updated: December 18, 2025*
