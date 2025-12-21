# RULES INDEX

All project rules in one place. Read before starting any task.

---

## CORE RULES

### 1. PROJECT-RULES.md
- Documentation standards
- Code practices
- Import rules
- File organization
- Anti-patterns to avoid

### 2. ROUTING_AND_STRUCTURE.md ⭐
- Directory structure (500 lines, beginner-friendly)
- Routing patterns with examples
- Layout rules
- Screen states (loading, empty, error)
- AI + routing integration
- Complete route map examples
- Mermaid routing diagram

### 3. FRONTEND-BACKEND-WIRING.md ⭐ NEW
- How UI connects to backend safely
- Auth, validation, error handling
- Edge Functions integration
- AI wiring rules (Gemini models & tools)
- Request/response contracts
- 3 workflow levels (simple, medium, complex)
- 3 real-world examples with flows
- Production checklist with acceptance tests
- Mermaid sequence diagram

### 4. DIRECTORY-ROUTING.md (DETAILED)
- Extended directory structure reference
- Comprehensive routing patterns
- Advanced validation checklists

### 5. VALIDATION-SYSTEM.md
- Auto-check commands
- Manual test flows
- Deployment checklist
- Troubleshooting

---

## AI SYSTEM RULES

### 6. AGENTS.md ⭐
- Complete AI agent system architecture
- UI ↔ AI ↔ Backend flow
- Gemini model strategy (Flash, Pro, Thinking)
- All AI tools explained (Search, Maps, RAG, etc.)
- Workflows & real-world examples
- Edge Functions integration
- Mermaid diagrams

### 7. AI-AGENTS-RULES.md
- Agent design principles
- Orchestration patterns
- Tool integration
- Prompt engineering
- Safety & testing

---

## SPECIALIZED RULES

### 8. FIGMA-CURSOR-HANDOFF.md
- Division of responsibilities
- Handoff package structure
- Integration points
- Common issues
- Communication protocol

### 9. MERMAID-DIAGRAM-STANDARDS.md
- Required diagram types
- Templates & syntax
- Styling guide
- Validation checklist

---

## QUICK START

### For New Features ⭐
1. Read: **ROUTING_AND_STRUCTURE.md** (directory + routes)
2. Read: **FRONTEND-BACKEND-WIRING.md** (API integration)
3. Read: PROJECT-RULES.md (coding standards)
4. Create route → screen → feature → Edge Function
5. Validate with checklist

### For Backend Integration ⭐
1. Read: **FRONTEND-BACKEND-WIRING.md** (complete guide)
2. Read: AGENTS.md (AI system)
3. Implement Edge Functions following patterns
4. Test with acceptance tests
5. Validate production checklist

### For Directory Questions
- Quick reference: **ROUTING_AND_STRUCTURE.md** (500 lines)
- Deep dive: DIRECTORY-ROUTING.md (comprehensive)

### For AI Development
1. Read: **AGENTS.md** (understand the system)
2. Read: **FRONTEND-BACKEND-WIRING.md** (AI wiring rules)
3. Read: AI-AGENTS-RULES.md (design patterns)
4. Use agent structure template
5. Validate with checklist

### For Product Planning
1. Read: PROJECT-RULES.md
2. Use: /docs/templates/PRODUCT-PLAN-TEMPLATE.md
3. Reference: MERMAID-DIAGRAM-STANDARDS.md

### For Implementation
1. Read: FIGMA-CURSOR-HANDOFF.md
2. Figma Make: Build frontend
3. Cursor AI: Build backend
4. Test: Use VALIDATION-SYSTEM.md

---

## ENFORCEMENT

### Before Every Commit
- [ ] Follows PROJECT-RULES.md
- [ ] Follows ROUTING_AND_STRUCTURE.md
- [ ] Validated per VALIDATION-SYSTEM.md
- [ ] Documentation updated

### Before Every Screen
- [ ] Route defined in /routes/
- [ ] Screen has loading state
- [ ] Screen has empty state
- [ ] Screen has error state
- [ ] Layout applied correctly
- [ ] No blank screens

### Before Every Edge Function ⭐
- [ ] Follows FRONTEND-BACKEND-WIRING.md
- [ ] Auth validation implemented
- [ ] Input schema validation
- [ ] Error handling (user + developer messages)
- [ ] Logging added
- [ ] Idempotency key used (if mutation)
- [ ] AI calls logged

### Before Every AI Agent
- [ ] Follows AGENTS.md system architecture
- [ ] Uses correct Gemini model (Flash/Pro/Thinking)
- [ ] Has Edge Function validation
- [ ] Explainable outputs
- [ ] User can override
- [ ] Lives in /ai/agents/
- [ ] Audit log created

### Before Every Handoff
- [ ] Follows FIGMA-CURSOR-HANDOFF.md
- [ ] Includes all required specs
- [ ] Types exported

### Before Every Deploy
- [ ] All tests pass
- [ ] No anti-patterns
- [ ] Production checklist complete (FRONTEND-BACKEND-WIRING.md)
- [ ] Deep links work
- [ ] Navigation works
- [ ] Security boundaries enforced
- [ ] Logs configured

---

**Status**: All rules current as of 2024-12-20  
**Total Rules**: 9 documents  
**New**: FRONTEND-BACKEND-WIRING.md ⭐