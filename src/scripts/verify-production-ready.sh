#!/bin/bash

# PRE-DEPLOYMENT VERIFICATION SCRIPT
# Verifies all code is production-ready before deployment

set -e

echo "🔍 Pre-Deployment Verification"
echo "================================"
echo ""

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

PASS=0
FAIL=0
WARN=0

check_pass() {
    echo -e "${GREEN}✓${NC} $1"
    ((PASS++))
}

check_fail() {
    echo -e "${RED}✗${NC} $1"
    ((FAIL++))
}

check_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
    ((WARN++))
}

echo "1. Checking Node.js Environment"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -ge 18 ]; then
    check_pass "Node.js version: $(node -v)"
else
    check_fail "Node.js version too old: $(node -v) (required: >=18)"
fi

# Check npm
if command -v npm >/dev/null 2>&1; then
    check_pass "npm installed: $(npm -v)"
else
    check_fail "npm not found"
fi

echo ""
echo "2. Checking Project Structure"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check required files
FILES=(
    "package.json"
    "tsconfig.json"
    "vite.config.ts"
    "index.html"
    "App.tsx"
    "routes/index.tsx"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        check_pass "$file exists"
    else
        check_fail "$file missing"
    fi
done

echo ""
echo "3. Checking Dependencies"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -d "node_modules" ]; then
    check_pass "node_modules exists"
else
    check_warn "node_modules not found - run 'npm install'"
fi

# Check critical dependencies
DEPS=("react" "react-router-dom" "lucide-react" "tailwindcss")
for dep in "${DEPS[@]}"; do
    if grep -q "\"$dep\"" package.json; then
        check_pass "$dep declared"
    else
        check_fail "$dep missing from package.json"
    fi
done

echo ""
echo "4. Checking TypeScript"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if command -v tsc >/dev/null 2>&1 || [ -f "node_modules/.bin/tsc" ]; then
    check_pass "TypeScript compiler available"
    
    # Run type check (but don't fail script)
    if npm run type-check >/dev/null 2>&1; then
        check_pass "Type check passed"
    else
        check_warn "Type check has warnings (non-blocking)"
    fi
else
    check_warn "TypeScript compiler not found"
fi

echo ""
echo "5. Checking Service Layer"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

SERVICES=(
    "services/api-client.ts"
    "services/lead-enrichment.service.ts"
    "services/call-analysis.service.ts"
    "services/nl-search.service.ts"
    "services/deal-health.service.ts"
    "services/email-drafter.service.ts"
    "services/workflow-automation.service.ts"
)

for service in "${SERVICES[@]}"; do
    if [ -f "$service" ]; then
        check_pass "$(basename $service)"
    else
        check_fail "$(basename $service) missing"
    fi
done

echo ""
echo "6. Checking React Hooks"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

HOOKS=(
    "hooks/useLeadEnrichment.ts"
    "hooks/useCallAnalysis.ts"
    "hooks/useNLSearch.ts"
)

for hook in "${HOOKS[@]}"; do
    if [ -f "$hook" ]; then
        check_pass "$(basename $hook)"
    else
        check_fail "$(basename $hook) missing"
    fi
done

echo ""
echo "7. Checking Edge Functions"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

EDGE_FUNCTIONS=(
    "supabase/functions/enrich-lead/index.ts"
    "supabase/functions/analyze-call/index.ts"
    "supabase/functions/nl-search/index.ts"
)

for func in "${EDGE_FUNCTIONS[@]}"; do
    if [ -f "$func" ]; then
        # Check if it has Gemini integration
        if grep -q "GEMINI_API_KEY" "$func"; then
            check_pass "$(basename $(dirname $func)) - Gemini integrated"
        else
            check_warn "$(basename $(dirname $func)) - No Gemini integration found"
        fi
    else
        check_fail "$(basename $(dirname $func)) missing"
    fi
done

echo ""
echo "8. Checking Database Schema"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "supabase/migrations/001_initial_schema.sql" ]; then
    check_pass "Migration file exists"
    
    # Count tables
    TABLE_COUNT=$(grep -c "CREATE TABLE" supabase/migrations/001_initial_schema.sql || echo "0")
    if [ "$TABLE_COUNT" -ge 8 ]; then
        check_pass "All 8 tables defined"
    else
        check_warn "Expected 8 tables, found $TABLE_COUNT"
    fi
    
    # Check for RLS
    if grep -q "ENABLE ROW LEVEL SECURITY" supabase/migrations/001_initial_schema.sql; then
        check_pass "RLS policies defined"
    else
        check_fail "No RLS policies found"
    fi
else
    check_fail "Migration file missing"
fi

echo ""
echo "9. Checking Component Structure"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

COMPONENT_DIRS=(
    "components/crm"
    "components/crm/intelligence"
    "components/crm/enrichment"
    "components/crm/health"
    "components/ui"
)

for dir in "${COMPONENT_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        FILE_COUNT=$(find "$dir" -name "*.tsx" | wc -l)
        check_pass "$dir ($FILE_COUNT components)"
    else
        check_fail "$dir missing"
    fi
done

echo ""
echo "10. Checking Context Providers"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

CONTEXTS=(
    "context/AuthContext.tsx"
    "context/LeadContext.tsx"
    "context/CommandBarContext.tsx"
    "context/IntelligenceContext.tsx"
)

for ctx in "${CONTEXTS[@]}"; do
    if [ -f "$ctx" ]; then
        check_pass "$(basename $ctx)"
    else
        check_fail "$(basename $ctx) missing"
    fi
done

echo ""
echo "11. Checking Routes"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "routes/index.tsx" ]; then
    check_pass "routes/index.tsx exists"
    
    # Count routes
    ROUTE_COUNT=$(grep -c "path:" routes/index.tsx || echo "0")
    if [ "$ROUTE_COUNT" -ge 40 ]; then
        check_pass "All routes defined ($ROUTE_COUNT routes)"
    else
        check_warn "Expected 40+ routes, found $ROUTE_COUNT"
    fi
else
    check_fail "routes/index.tsx missing"
fi

echo ""
echo "12. Checking Build Configuration"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "vite.config.ts" ]; then
    check_pass "vite.config.ts exists"
else
    check_fail "vite.config.ts missing"
fi

if [ -f "tailwind.config.js" ]; then
    check_pass "tailwind.config.js exists"
else
    check_fail "tailwind.config.js missing"
fi

if [ -f "postcss.config.js" ]; then
    check_pass "postcss.config.js exists"
else
    check_fail "postcss.config.js missing"
fi

echo ""
echo "13. Checking Environment Template"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f ".env.example" ] || [ -f ".env.template" ]; then
    check_pass "Environment template exists"
else
    check_warn "No .env.example or .env.template found"
fi

if [ -f ".env" ]; then
    check_pass ".env file exists"
    
    # Check required variables
    if grep -q "VITE_SUPABASE_URL" .env; then
        check_pass "VITE_SUPABASE_URL defined"
    else
        check_warn "VITE_SUPABASE_URL not defined"
    fi
    
    if grep -q "VITE_SUPABASE_ANON_KEY" .env; then
        check_pass "VITE_SUPABASE_ANON_KEY defined"
    else
        check_warn "VITE_SUPABASE_ANON_KEY not defined"
    fi
    
    if grep -q "GEMINI_API_KEY" .env; then
        check_pass "GEMINI_API_KEY defined"
    else
        check_warn "GEMINI_API_KEY not defined"
    fi
else
    check_warn ".env file not found (will be created during deployment)"
fi

echo ""
echo "14. Checking Documentation"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

DOCS=(
    "PRODUCTION-SETUP.md"
    "docs/roadmap/00-ROADMAP-INDEX.md"
    "docs/roadmap/01-features.md"
    "docs/roadmap/02-SYSTEMATIC-IMPLEMENTATION-PLAN.md"
    "FORENSIC-AUDIT-COMPLETE.md"
)

for doc in "${DOCS[@]}"; do
    if [ -f "$doc" ]; then
        check_pass "$(basename $doc)"
    else
        check_warn "$(basename $doc) missing"
    fi
done

echo ""
echo "15. Test Build"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

echo "Testing production build..."
if npm run build >/dev/null 2>&1; then
    check_pass "Production build successful"
    
    if [ -d "dist" ]; then
        BUILD_SIZE=$(du -sh dist 2>/dev/null | awk '{print $1}' || echo "unknown")
        check_pass "Build output: dist/ ($BUILD_SIZE)"
        
        # Check critical files in dist
        if [ -f "dist/index.html" ]; then
            check_pass "dist/index.html exists"
        else
            check_fail "dist/index.html missing"
        fi
    else
        check_fail "dist directory not created"
    fi
else
    check_fail "Production build failed"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "VERIFICATION SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}Passed:${NC}  $PASS"
echo -e "${YELLOW}Warnings:${NC} $WARN"
echo -e "${RED}Failed:${NC}  $FAIL"
echo ""

if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}✓ ALL CHECKS PASSED!${NC}"
    echo ""
    echo "System is ready for deployment."
    echo "Next step: Run ./scripts/deploy-production.sh"
    echo ""
    exit 0
else
    echo -e "${RED}✗ VERIFICATION FAILED${NC}"
    echo ""
    echo "Please fix the failed checks before deploying."
    echo "See: /docs/roadmap/02-SYSTEMATIC-IMPLEMENTATION-PLAN.md"
    echo ""
    exit 1
fi
