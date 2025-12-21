#!/bin/bash

# POST-DEPLOYMENT INTEGRATION TESTING SCRIPT
# Tests all deployed features end-to-end

set -e

echo "🧪 Post-Deployment Integration Tests"
echo "======================================"
echo ""

# Load environment variables
if [ -f ".env" ]; then
    export $(cat .env | grep -v '^#' | xargs)
else
    echo "❌ .env file not found"
    exit 1
fi

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PASS=0
FAIL=0

test_pass() {
    echo -e "${GREEN}✓${NC} $1"
    ((PASS++))
}

test_fail() {
    echo -e "${RED}✗${NC} $1"
    ((FAIL++))
}

test_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

# Check if jq is installed for JSON parsing
if ! command -v jq >/dev/null 2>&1; then
    echo "Installing jq for JSON parsing..."
    if command -v apt-get >/dev/null 2>&1; then
        sudo apt-get install -y jq
    elif command -v brew >/dev/null 2>&1; then
        brew install jq
    else
        echo "⚠️  jq not available - JSON responses will be raw"
    fi
fi

echo "1. Testing Supabase Connection"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Test database connection
test_info "Checking database connection..."
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$VITE_SUPABASE_URL/rest/v1/" -H "apikey: $VITE_SUPABASE_ANON_KEY")

if [ "$RESPONSE" = "200" ]; then
    test_pass "Supabase API reachable (HTTP $RESPONSE)"
else
    test_fail "Supabase API not reachable (HTTP $RESPONSE)"
fi

# Test table access
test_info "Checking table access (leads)..."
RESPONSE=$(curl -s "$VITE_SUPABASE_URL/rest/v1/leads?limit=1" \
    -H "apikey: $VITE_SUPABASE_ANON_KEY" \
    -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY")

if echo "$RESPONSE" | grep -q "^\["; then
    test_pass "Leads table accessible"
else
    test_fail "Leads table not accessible"
fi

echo ""
echo "2. Testing Edge Function: enrich-lead"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

test_info "Testing lead enrichment with test@stripe.com..."

ENRICH_RESPONSE=$(curl -s -X POST "$VITE_SUPABASE_URL/functions/v1/enrich-lead" \
    -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY" \
    -H "Content-Type: application/json" \
    -d '{"email":"test@stripe.com"}')

echo "Response: $ENRICH_RESPONSE" | head -c 200
echo ""

if echo "$ENRICH_RESPONSE" | grep -q '"success"'; then
    if echo "$ENRICH_RESPONSE" | grep -q '"company"'; then
        test_pass "Lead enrichment working (company data returned)"
        
        # Extract fit score if available
        if command -v jq >/dev/null 2>&1; then
            FIT_SCORE=$(echo "$ENRICH_RESPONSE" | jq -r '.data.fitScore // empty')
            if [ -n "$FIT_SCORE" ]; then
                test_pass "Fit score calculated: $FIT_SCORE/100"
            fi
        fi
    else
        test_fail "Lead enrichment returned success but no company data"
    fi
else
    test_fail "Lead enrichment failed or returned error"
fi

echo ""
echo "3. Testing Edge Function: analyze-call"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

test_info "Testing call analysis with sample transcript..."

CALL_TRANSCRIPT="Hi Sarah, thanks for taking the time today. We're looking to implement a CRM for our sales team of about 20 people. Our budget is around 75 thousand dollars and we need it deployed by March. We're currently using spreadsheets and it's not working well. Can you help?"

CALL_RESPONSE=$(curl -s -X POST "$VITE_SUPABASE_URL/functions/v1/analyze-call" \
    -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"transcript\":\"$CALL_TRANSCRIPT\"}")

echo "Response: $CALL_RESPONSE" | head -c 200
echo ""

if echo "$CALL_RESPONSE" | grep -q '"success"'; then
    if echo "$CALL_RESPONSE" | grep -q '"summary"'; then
        test_pass "Call analysis working (summary generated)"
        
        if echo "$CALL_RESPONSE" | grep -q '"actions"'; then
            test_pass "Actions extracted from call"
            
            if command -v jq >/dev/null 2>&1; then
                ACTION_COUNT=$(echo "$CALL_RESPONSE" | jq '.data.actions | length')
                test_pass "Action count: $ACTION_COUNT"
            fi
        fi
        
        if echo "$CALL_RESPONSE" | grep -q '"sentiment"'; then
            if command -v jq >/dev/null 2>&1; then
                SENTIMENT=$(echo "$CALL_RESPONSE" | jq -r '.data.sentiment')
                test_pass "Sentiment detected: $SENTIMENT"
            else
                test_pass "Sentiment analysis included"
            fi
        fi
    else
        test_fail "Call analysis returned success but no summary"
    fi
else
    test_fail "Call analysis failed or returned error"
fi

echo ""
echo "4. Testing Edge Function: nl-search"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

test_info "Testing natural language search..."

SEARCH_RESPONSE=$(curl -s -X POST "$VITE_SUPABASE_URL/functions/v1/nl-search" \
    -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY" \
    -H "Content-Type: application/json" \
    -d '{"query":"leads in technology"}')

echo "Response: $SEARCH_RESPONSE" | head -c 200
echo ""

if echo "$SEARCH_RESPONSE" | grep -q '"success"'; then
    if echo "$SEARCH_RESPONSE" | grep -q '"results"' || echo "$SEARCH_RESPONSE" | grep -q '"interpretation"'; then
        test_pass "Natural language search working"
        
        if command -v jq >/dev/null 2>&1; then
            RESULT_COUNT=$(echo "$SEARCH_RESPONSE" | jq '.data.results | length // 0')
            test_pass "Results returned: $RESULT_COUNT"
        fi
    else
        test_fail "Search returned success but no results"
    fi
else
    test_fail "Natural language search failed"
fi

echo ""
echo "5. Testing Database Persistence"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

test_info "Creating test lead..."

TEST_LEAD=$(cat <<EOF
{
    "email": "test-$(date +%s)@testcompany.com",
    "company": "Test Company",
    "fit_score": 85,
    "enriched_data": {"test": true}
}
EOF
)

INSERT_RESPONSE=$(curl -s -X POST "$VITE_SUPABASE_URL/rest/v1/leads" \
    -H "apikey: $VITE_SUPABASE_ANON_KEY" \
    -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY" \
    -H "Content-Type: application/json" \
    -H "Prefer: return=representation" \
    -d "$TEST_LEAD")

if echo "$INSERT_RESPONSE" | grep -q '"email"'; then
    test_pass "Test lead created in database"
    
    if command -v jq >/dev/null 2>&1; then
        LEAD_ID=$(echo "$INSERT_RESPONSE" | jq -r '.[0].id')
        test_pass "Lead ID: $LEAD_ID"
        
        # Verify we can read it back
        READ_RESPONSE=$(curl -s "$VITE_SUPABASE_URL/rest/v1/leads?id=eq.$LEAD_ID" \
            -H "apikey: $VITE_SUPABASE_ANON_KEY" \
            -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY")
        
        if echo "$READ_RESPONSE" | grep -q "$LEAD_ID"; then
            test_pass "Lead retrieved successfully"
        else
            test_fail "Could not retrieve created lead"
        fi
    fi
else
    test_fail "Failed to create test lead"
fi

echo ""
echo "6. Testing AI Logs Tracking"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

test_info "Checking ai_logs table..."

LOGS_RESPONSE=$(curl -s "$VITE_SUPABASE_URL/rest/v1/ai_logs?limit=5&order=created_at.desc" \
    -H "apikey: $VITE_SUPABASE_ANON_KEY" \
    -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY")

if echo "$LOGS_RESPONSE" | grep -q "^\["; then
    test_pass "AI logs table accessible"
    
    if command -v jq >/dev/null 2>&1; then
        LOG_COUNT=$(echo "$LOGS_RESPONSE" | jq '. | length')
        test_pass "Recent AI operations logged: $LOG_COUNT"
        
        if [ "$LOG_COUNT" -gt 0 ]; then
            LATEST_OPERATION=$(echo "$LOGS_RESPONSE" | jq -r '.[0].operation')
            test_pass "Latest operation: $LATEST_OPERATION"
        fi
    fi
else
    test_fail "AI logs table not accessible"
fi

echo ""
echo "7. Testing Frontend Accessibility"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -n "$FRONTEND_URL" ]; then
    test_info "Testing frontend at: $FRONTEND_URL"
    
    FRONTEND_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$FRONTEND_URL")
    
    if [ "$FRONTEND_RESPONSE" = "200" ]; then
        test_pass "Frontend accessible (HTTP $FRONTEND_RESPONSE)"
    else
        test_fail "Frontend not accessible (HTTP $FRONTEND_RESPONSE)"
    fi
else
    test_info "FRONTEND_URL not set - skipping frontend test"
fi

echo ""
echo "8. Performance Benchmarks"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

test_info "Testing API response times..."

# Test enrich-lead latency
START=$(date +%s%N)
curl -s -X POST "$VITE_SUPABASE_URL/functions/v1/enrich-lead" \
    -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY" \
    -H "Content-Type: application/json" \
    -d '{"email":"perf-test@example.com"}' > /dev/null
END=$(date +%s%N)
LATENCY=$(( (END - START) / 1000000 ))

if [ $LATENCY -lt 5000 ]; then
    test_pass "Lead enrichment latency: ${LATENCY}ms (target: <5000ms)"
elif [ $LATENCY -lt 10000 ]; then
    echo -e "${YELLOW}⚠${NC} Lead enrichment latency: ${LATENCY}ms (acceptable but slow)"
else
    test_fail "Lead enrichment latency: ${LATENCY}ms (target: <5000ms)"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "TEST SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}Passed:${NC} $PASS"
echo -e "${RED}Failed:${NC} $FAIL"
echo ""

if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}✓ ALL INTEGRATION TESTS PASSED!${NC}"
    echo ""
    echo "System is fully operational."
    echo ""
    echo "Next steps:"
    echo "1. Monitor AI costs: SELECT SUM(cost) FROM ai_logs"
    echo "2. Check error logs: SELECT * FROM ai_logs WHERE success = false"
    echo "3. Test with real users"
    echo ""
    exit 0
else
    echo -e "${RED}✗ SOME TESTS FAILED${NC}"
    echo ""
    echo "Please investigate the failed tests."
    echo "Check Supabase logs: https://app.supabase.com/project/_/logs"
    echo ""
    exit 1
fi
