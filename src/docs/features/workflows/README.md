# Workflow Automations

## Overview

This directory contains specifications for automated workflows that connect multiple AI features into seamless end-to-end processes.

---

## Available Workflows

| # | Workflow | Status | Features Connected | Impact |
|---|----------|--------|-------------------|--------|
| 18 | [Connected Intelligence Engine](./18-connected-intelligence.md) | 🟡 35% | All features orchestrated | Foundation |
| 19 | [Ghost Detection & Intervention](./19-ghost-detection.md) | 🔴 Planned | Email tracking, Deal Health | $1.2M saved |
| 20 | [Contract-to-Cash Acceleration](./20-contract-to-cash.md) | 🔴 Planned | Contract Velocity, Billing | -12 days revenue |
| 21 | [Champion Autopilot](./21-champion-autopilot.md) | 🔴 Planned | Referral Mapper, LinkedIn | +18% renewal |
| 22 | [Multi-Threading Enforcer](./22-multi-threading.md) | 🔴 Planned | Deal Health, Org mapping | -50% single-thread risk |

---

## Workflow Architecture

```
                    TRIGGER ENGINE
                         |
            ┌────────────┼────────────┐
            │            │            │
         TIME         EVENT       CONDITION
       (scheduled)  (real-time)   (threshold)
            │            │            │
            └────────────┼────────────┘
                         |
                  WORKFLOW LOGIC
                         |
            ┌────────────┼────────────┐
            │            │            │
        ANALYZE      DECIDE        ACT
     (AI evaluate) (rules)   (create tasks)
            │            │            │
            └────────────┼────────────┘
                         |
                  NOTIFICATION
                (Slack, Email, In-app)
```

---

## Implementation Status

### ✅ Implemented (Partial)
- **18 - Connected Intelligence:** Data flows between features established

### 🟡 In Progress
- None currently

### 🔴 Planned (Next 4 Weeks)
- **19 - Ghost Detection:** January 2026
- **20 - Contract-to-Cash:** January 2026
- **21 - Champion Autopilot:** February 2026
- **22 - Multi-Threading:** February 2026

---

## Quick Reference

### How Workflows Work

1. **Trigger** - Something happens (time, event, threshold)
2. **Analyze** - AI evaluates the situation
3. **Decide** - Rules determine action needed
4. **Act** - Create tasks, send alerts, update CRM
5. **Notify** - Alert relevant people

### Common Workflow Patterns

**Time-Based:**
```
Every day at 8 AM → Check for inactive leads (>90 days) 
→ Generate re-engagement emails → Send to rep queue
```

**Event-Based:**
```
Call uploaded → Extract competitor mention → Found "Salesforce" 
→ Send battle card automatically
```

**Threshold-Based:**
```
Deal health drops below 50 → Alert manager → Generate intervention plan 
→ Create recovery tasks
```

---

*Last Updated: December 18, 2025*
