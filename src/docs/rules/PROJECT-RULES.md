# PROJECT RULES

## 1. DOCUMENTATION RULES
- **ONE truth per topic** - No duplicate docs
- **Checklists over essays** - Use [ ] not paragraphs
- **Progress trackers only** - Numbers, not narratives
- **Update existing** - Don't create new

## 2. CODE RULES
- **Relative imports** - Use `../` not `@/`
- **react-hook-form@7.55.0** - Only package with version
- **Wrappers for navigation** - Route components get props via wrappers
- **No @version syntax** - Fixed, never use again

## 3. ROUTING RULES
- All pages need navigation props → Create wrapper
- Protected routes → Wrap in `<ProtectedRoute>`
- Admin pages → Wrap in `<AdminLayoutWrapper>`
- Auth redirects → Use `location.state.from`

## 4. VALIDATION RULES
Before claiming "done":
1. Run build: `npm run build`
2. Check imports: No errors in console
3. Test critical flows: All user journeys work
4. Check file structure: Organized properly

## 5. FILE ORGANIZATION
```
/docs/
  /rules/ ← This file
  /routing/
    progress-tracker.md ← ONE tracker
  /features/ ← Feature specs only
```

## 6. ANTI-PATTERNS (NEVER DO)
- ❌ Multiple summary docs
- ❌ Repeating same info
- ❌ Long narratives
- ❌ "Executive summaries"
- ❌ Import path aliases (@/)
- ❌ Unused imports

## 7. BEST PRACTICES (ALWAYS DO)
- ✅ Checklist format
- ✅ One source of truth
- ✅ Update existing docs
- ✅ Test before claiming done
- ✅ Relative imports
- ✅ Wrappers for routes
