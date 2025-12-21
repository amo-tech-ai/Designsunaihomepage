# PRODUCTION SETUP - ACTION CHECKLIST

**Status**: Ready for deployment  
**Time to complete**: 2-3 hours

---

## ✅ COMPLETED (Code)

- [x] Service layer (6 services)
- [x] React hooks (3 hooks)
- [x] Edge Functions (3 functions)
- [x] Database schema
- [x] Component integration (3 components updated)
- [x] Tests (26 test cases)

---

## 🔥 NEXT ACTIONS (Sequential Order)

### STEP 1: Supabase Project Setup (30 min)

```bash
# 1. Install Supabase CLI
npm install -g supabase

# 2. Login to Supabase
supabase login

# 3. Create new project (or link existing)
supabase init

# 4. Link to remote project
supabase link --project-ref YOUR_PROJECT_REF
```

**Get your project ref from**: https://app.supabase.com/projects

---

### STEP 2: Database Deployment (10 min)

```bash
# Run migration
supabase db push

# Verify tables created
supabase db diff
```

**Verify in Supabase Dashboard**:
- Go to Database → Tables
- Should see: leads, deals, calls, call_actions, email_drafts, workflows, ai_logs, search_history

---

### STEP 3: Environment Variables (5 min)

Create `/env` file:

```env
# Supabase
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_key_here

# Gemini AI
GEMINI_API_KEY=your_gemini_key_here
```

**Get Gemini API key**: https://ai.google.dev/

---

### STEP 4: Deploy Edge Functions (15 min)

```bash
# Deploy all Edge Functions
supabase functions deploy enrich-lead
supabase functions deploy analyze-call
supabase functions deploy nl-search

# Set secrets
supabase secrets set GEMINI_API_KEY=your_key_here
```

**Test Edge Functions**:
```bash
curl -X POST https://YOUR_PROJECT.supabase.co/functions/v1/enrich-lead \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

---

### STEP 5: Frontend Configuration (5 min)

Update `apiClient` base URL if needed:

```typescript
// /services/api-client.ts
constructor() {
  this.baseUrl = 'https://YOUR_PROJECT.supabase.co/functions/v1';
}
```

---

### STEP 6: Test Integration (30 min)

**Test 1: Lead Enrichment**
1. Navigate to `/app/leads`
2. Click "Add Lead"
3. Enter: `john@acmecorp.com`
4. Click "Start Analysis"
5. Verify: Enriched data appears

**Test 2: Call Analysis**
1. Navigate to `/app/intelligence`
2. Upload test audio file (or paste transcript)
3. Verify: Analysis appears with actions

**Test 3: Natural Language Search**
1. Press `Cmd+K`
2. Type: "leads in technology"
3. Verify: Results appear

---

### STEP 7: Deploy Frontend (10 min)

```bash
# Build production
npm run build

# Deploy (example: Vercel)
vercel --prod
```

---

## 📊 VERIFICATION CHECKLIST

### Database
- [ ] All 8 tables created
- [ ] RLS policies active
- [ ] Triggers working

### Edge Functions
- [ ] `enrich-lead` deployed and responding
- [ ] `analyze-call` deployed and responding
- [ ] `nl-search` deployed and responding
- [ ] Secrets configured

### Frontend
- [ ] Environment variables set
- [ ] Build succeeds
- [ ] Services connect to Edge Functions

### Integration
- [ ] Lead enrichment works end-to-end
- [ ] Call analysis works end-to-end
- [ ] Search works end-to-end
- [ ] No console errors

---

## 🐛 TROUBLESHOOTING

### "Authentication required" error
**Fix**: Set auth token after login
```typescript
import { apiClient } from '@/services';
apiClient.setAuthToken(userToken);
```

### Edge Function CORS error
**Fix**: Check CORS headers in Edge Functions
```typescript
headers: {
  'Access-Control-Allow-Origin': '*',
  ...
}
```

### "Network error" in services
**Fix**: Check base URL in api-client.ts matches your Supabase project

### Gemini API errors
**Fix**: 
1. Verify API key is correct
2. Check quota: https://ai.google.dev/
3. Ensure model names match: `gemini-2.0-flash-exp`, `gemini-2.0-pro-exp`

---

## 📈 MONITORING SETUP (Optional but Recommended)

### Error Tracking
```bash
npm install @sentry/react
```

### Usage Analytics
- Track AI operations in `ai_logs` table
- Monitor costs with query:
```sql
SELECT 
  operation,
  COUNT(*) as calls,
  SUM(cost) as total_cost
FROM ai_logs
WHERE created_at > NOW() - INTERVAL '30 days'
GROUP BY operation;
```

---

## 🎯 SUCCESS CRITERIA

**System is production-ready when**:
- ✅ All 3 Edge Functions respond
- ✅ Database queries work
- ✅ Frontend connects successfully
- ✅ At least one AI feature works end-to-end
- ✅ No authentication errors
- ✅ No CORS errors

---

## 📞 NEXT STEPS AFTER LAUNCH

1. **Monitor AI costs** (first week)
2. **Collect user feedback** on AI quality
3. **Tune prompts** based on results
4. **Implement remaining 6 Edge Functions**:
   - Deal health monitor
   - Email drafter
   - Ghost detection
   - Contract-to-cash
   - Champion autopilot
   - Batch enrichment

---

## 🚀 QUICK START COMMAND

```bash
# All-in-one setup (paste into terminal)
supabase link --project-ref YOUR_PROJECT_REF && \
supabase db push && \
supabase functions deploy enrich-lead && \
supabase functions deploy analyze-call && \
supabase functions deploy nl-search && \
supabase secrets set GEMINI_API_KEY=YOUR_KEY && \
npm run dev
```

---

**Time to production**: 2-3 hours from start to functional system
