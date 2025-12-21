# VALIDATION SYSTEM

## AUTO-CHECK COMMANDS

```bash
# 1. Build check
npm run build
# ✅ Must succeed with no errors

# 2. Import check
grep -r "from '@/" routes/ components/
# ✅ Should return empty (no @/ aliases)

# 3. Type check
npx tsc --noEmit
# ✅ Must succeed with no errors

# 4. Unused imports check
grep -r "^import.*lazy.*from" routes/index.tsx
# ✅ Verify all are actually used

# 5. Wrapper check
ls routes/wrappers/*.tsx | wc -l
# ✅ Should be 6 files
```

## MANUAL VALIDATION

### Test Flow 1: Marketing
1. Open http://localhost:5173
2. Click "Services" in navbar
3. Click any service
4. Click footer "About Us"
5. **PASS**: All pages load, URLs change

### Test Flow 2: Wizard
1. Navigate to /wizard
2. Fill form, submit
3. Watch /processing
4. Watch /proposal
5. **PASS**: Auto-advances, no errors

### Test Flow 3: Auth
1. Go to /dashboard (logged out)
2. See /login
3. Enter: admin@test.com / admin123
4. **PASS**: Redirects to /dashboard

### Test Flow 4: Navigation
1. Click any link
2. Press browser back button
3. Press browser forward button
4. Refresh page
5. **PASS**: All work correctly

### Test Flow 5: Errors
1. Go to /invalid-route-xyz
2. **PASS**: See 404 NotFound page

## CHECKLIST BEFORE DEPLOY

- [ ] All 5 auto-checks pass
- [ ] All 5 manual flows pass
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Build succeeds

## IF TESTS FAIL

### Build fails
- Check import paths (must be relative)
- Check for circular dependencies
- Check TypeScript errors

### Navigation fails
- Check wrapper exists for route
- Check props being passed
- Check useNavigate() implementation

### Auth fails
- Check AuthContext is wrapping routes
- Check ProtectedRoute logic
- Check login redirect logic

### 404 not showing
- Check wildcard route: `{ path: '*', element: <NotFound /> }`
- Check it's LAST in routes array

## VALIDATION FREQUENCY

- **Before every commit**: Run auto-checks
- **Before PR**: Run all manual flows
- **Before deploy**: Full validation
- **After deploy**: Smoke test in production
