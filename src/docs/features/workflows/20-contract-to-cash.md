# Workflow: Contract-to-Cash Acceleration

**Status:** 🔴 Planned (January 2026)  
**Impact:** -12 days time-to-revenue  
**Connects:** Contract Velocity Engine, Billing integration, Onboarding

---

## Problem Statement

After a deal is won, it takes an average of 18 days to receive first payment. This is due to:
- Slow onboarding kickoff (3-5 days to schedule)
- Payment reminders sent manually (often forgotten)
- Overdue invoices escalated too late

**Target:** Reduce to 6 days (67% improvement)

---

## Workflow Trigger

**Event:** Deal stage changed to "Won"

```sql
-- Trigger on deal closure
CREATE OR REPLACE FUNCTION trigger_contract_to_cash()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.stage = 'Won' AND OLD.stage != 'Won' THEN
    -- Trigger onboarding workflow
    PERFORM pg_notify('deal_won', json_build_object(
      'lead_id', NEW.id,
      'contract_value', NEW.budget,
      'customer_name', NEW.company
    )::text);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_deal_won
  AFTER UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION trigger_contract_to_cash();
```

---

## Workflow Steps

### Step 1: Auto-Generate Onboarding Plan (Day 0)

**Trigger:** Deal marked "Won"  
**Action:** Create 10-task onboarding checklist

```typescript
async function generateOnboardingPlan(leadId: string) {
  const tasks = [
    {
      title: 'Send welcome email + account setup instructions',
      owner: 'CSM',
      due_hours: 2,
      priority: 'high'
    },
    {
      title: 'Schedule kickoff call within 48 hours',
      owner: 'CSM',
      due_hours: 4,
      priority: 'high'
    },
    {
      title: 'Create customer workspace in CRM',
      owner: 'Operations',
      due_hours: 24,
      priority: 'medium'
    },
    {
      title: 'Send invoice for first payment',
      owner: 'Finance',
      due_hours: 24,
      priority: 'high'
    },
    {
      title: 'Grant system access credentials',
      owner: 'IT',
      due_hours: 48,
      priority: 'high'
    },
    // ... 5 more tasks
  ];
  
  for (const task of tasks) {
    await supabase.from('onboarding_tasks').insert({
      lead_id: leadId,
      title: task.title,
      owner: task.owner,
      due_date: new Date(Date.now() + task.due_hours * 3600000),
      priority: task.priority
    });
  }
  
  // Notify CSM team
  await slack.send({
    channel: '#customer-success',
    text: `🎉 New customer: ${lead.company} ($${lead.budget})\nOnboarding plan created: 10 tasks assigned`
  });
}
```

### Step 2: Payment Reminder (Day 2, before invoice due)

**Trigger:** Invoice due_date - 48 hours  
**Action:** Auto-send friendly payment reminder

```typescript
// Scheduled job runs daily at 9 AM
async function sendPaymentReminders() {
  const { data: invoices } = await supabase
    .from('invoices')
    .select('*, lead:leads(*)')
    .eq('status', 'sent')
    .gte('due_date', new Date(Date.now() + 48 * 3600000))
    .lte('due_date', new Date(Date.now() + 49 * 3600000));
  
  for (const invoice of invoices) {
    await sendEmail({
      to: invoice.lead.billing_email,
      subject: `Friendly reminder: Invoice ${invoice.number} due in 2 days`,
      body: `
        Hi ${invoice.lead.contact_name},
        
        Hope onboarding is going smoothly!
        
        Quick reminder: Invoice ${invoice.number} for $${invoice.amount} 
        is due on ${format(invoice.due_date, 'MMM dd')}.
        
        Payment link: ${invoice.payment_url}
        
        Questions? Reply to this email or call us at...
        
        Thanks!
        ${invoice.csm_name}
      `
    });
    
    // Log reminder sent
    await supabase.from('payment_reminders').insert({
      invoice_id: invoice.id,
      sent_at: new Date(),
      type: 'pre_due'
    });
  }
}
```

### Step 3: Overdue Escalation (Day 1 after due)

**Trigger:** Invoice overdue by 1+ days  
**Action:** Escalate to finance + CSM

```typescript
// Scheduled job runs daily at 10 AM
async function escalateOverdueInvoices() {
  const { data: overdueInvoices } = await supabase
    .from('invoices')
    .select('*, lead:leads(*)')
    .eq('status', 'sent')
    .lt('due_date', new Date());
  
  for (const invoice of overdueInvoices) {
    const daysOverdue = getDaysSince(invoice.due_date);
    
    // Day 1-3: Friendly reminder
    if (daysOverdue <= 3) {
      await sendEmail({
        to: invoice.lead.billing_email,
        cc: invoice.csm_email,
        subject: `Invoice ${invoice.number} is past due`,
        body: `
          Hi ${invoice.lead.contact_name},
          
          Just checking in—invoice ${invoice.number} was due on 
          ${format(invoice.due_date, 'MMM dd')}.
          
          If you've already sent payment, please ignore this!
          
          Otherwise, here's the payment link: ${invoice.payment_url}
          
          Let me know if there are any issues.
          
          Best,
          ${invoice.csm_name}
        `
      });
    }
    
    // Day 4-7: Escalate to manager
    else if (daysOverdue <= 7) {
      await slack.send({
        channel: '#finance-escalations',
        text: `⚠️ Overdue Invoice Alert
        
        Customer: ${invoice.lead.company}
        Invoice: ${invoice.number} ($${invoice.amount})
        Days Overdue: ${daysOverdue}
        CSM: ${invoice.csm_name}
        
        Action: Manager should call customer`
      });
    }
    
    // Day 8+: Executive escalation
    else {
      await slack.send({
        channel: '#exec-escalations',
        text: `🚨 CRITICAL: Invoice ${invoice.number} overdue ${daysOverdue} days
        
        Customer: ${invoice.lead.company} ($${invoice.amount})
        Risk: Account may churn
        
        @vp-sales @cfo immediate action needed`
      });
    }
  }
}
```

### Step 4: Payment Received Celebration 🎉

**Trigger:** Invoice marked "Paid"  
**Action:** Celebrate + unlock system access

```typescript
async function handlePaymentReceived(invoiceId: string) {
  const { data: invoice } = await supabase
    .from('invoices')
    .select('*, lead:leads(*)')
    .eq('id', invoiceId)
    .single();
  
  // Calculate time-to-revenue
  const daysToPay = getDaysSince(invoice.lead.won_date);
  
  // Celebrate in Slack
  await slack.send({
    channel: '#wins',
    text: `💰 Payment Received!
    
    Customer: ${invoice.lead.company}
    Amount: $${invoice.amount}
    Time to Revenue: ${daysToPay} days
    CSM: ${invoice.csm_name}
    
    ${daysToPay < 7 ? '🏆 Under 7 days!' : ''}`
  });
  
  // Grant full system access
  await grantFullAccess(invoice.lead.id);
  
  // Send thank you + next steps
  await sendEmail({
    to: invoice.lead.contact_email,
    subject: `Payment received—you're all set!`,
    body: `
      Hi ${invoice.lead.contact_name},
      
      Great news—payment received! Your full account is now active.
      
      Next steps:
      1. Complete setup: ${setup_url}
      2. Join kickoff call: ${calendar_link}
      3. Access training: ${training_url}
      
      Your CSM ${invoice.csm_name} will reach out shortly.
      
      Welcome aboard!
    `
  });
}
```

---

## Database Schema

```sql
CREATE TABLE onboarding_tasks (
  id UUID PRIMARY KEY,
  lead_id UUID REFERENCES leads(id),
  title TEXT NOT NULL,
  owner TEXT, -- 'CSM', 'Finance', 'IT', 'Operations'
  due_date TIMESTAMP NOT NULL,
  priority TEXT CHECK (priority IN ('low', 'medium', 'high')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'blocked')),
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  lead_id UUID REFERENCES leads(id),
  number TEXT UNIQUE, -- 'INV-2024-0042'
  amount DECIMAL(10,2),
  due_date DATE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'paid', 'overdue', 'cancelled')),
  payment_url TEXT,
  sent_at TIMESTAMP,
  paid_at TIMESTAMP,
  csm_email TEXT,
  billing_email TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE payment_reminders (
  id UUID PRIMARY KEY,
  invoice_id UUID REFERENCES invoices(id),
  type TEXT CHECK (type IN ('pre_due', 'overdue_day1', 'overdue_day4', 'overdue_day8')),
  sent_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_invoices_due ON invoices(status, due_date) WHERE status IN ('sent', 'overdue');
CREATE INDEX idx_onboarding_owner ON onboarding_tasks(owner, status, due_date);
```

---

## Success Metrics

| Metric | Baseline | Target | Tracking |
|--------|----------|--------|----------|
| Time to first payment | 18 days | 6 days | Invoice created → paid dates |
| Payment reminder sent automatically | 20% | 100% | payment_reminders table |
| Overdue invoices escalated | 40% | 100% | Slack alerts sent count |
| Onboarding tasks completed on time | 60% | 90% | onboarding_tasks.completed_at vs due_date |

---

## Real-World Example

```
SCENARIO: FintechFlow deal closes ($75k ARR)

Day 0 (Dec 18 - Deal Won):
9:00 AM - Deal marked "Won" in CRM
9:01 AM - Onboarding plan auto-generated (10 tasks)
9:02 AM - Welcome email sent to Sarah Chen
9:05 AM - Kickoff call scheduled (Dec 20, 2 PM)
10:00 AM - Invoice sent ($75k, due Dec 25)
2:00 PM - Account workspace created

Day 2 (Dec 20):
2:00 PM - Kickoff call happens (task marked complete)
4:00 PM - System access credentials sent

Day 5 (Dec 23 - 48h before due):
9:00 AM - Payment reminder sent to Sarah
         "Hi Sarah, friendly reminder: Invoice due Dec 25"

Day 7 (Dec 25 - Due Date):
No payment received yet ⏳

Day 8 (Dec 26 - 1 day overdue):
10:00 AM - Overdue notice sent to Sarah
           CC'd to CSM Michael
           "Just checking in—invoice was due yesterday"

Day 9 (Dec 27):
11:30 AM - Payment received! 💰
11:31 AM - Slack notification: "💰 Payment Received! 9 days to revenue"
11:32 AM - Full system access granted
11:35 AM - Thank you email sent

RESULT: 9 days from won → paid (vs 18-day average)
        50% improvement, zero manual reminders
```

---

## Implementation Plan

**Week 1:** Database schema + trigger setup  
**Week 2:** Onboarding task generator + payment reminders  
**Week 3:** Overdue escalation logic + Slack integration  
**Week 4:** Testing + launch with 5 new customers  

**Launch:** January 2026

---

*Last Updated: December 18, 2025*
