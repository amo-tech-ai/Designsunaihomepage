# MERMAID DIAGRAM STANDARDS

## REQUIRED DIAGRAMS

### 1. System Architecture
**When**: Every product plan  
**Shows**: Frontend, backend, AI, databases, external APIs  
**Type**: `graph TB` or `graph LR`

### 2. User Journey Flow
**When**: For each main user journey  
**Shows**: Screens, decisions, outcomes  
**Type**: `flowchart TD`

### 3. Agent Sequence
**When**: For each AI agent workflow  
**Shows**: User → UI → Orchestrator → Agents → Tools  
**Type**: `sequenceDiagram`

### 4. State Machine
**When**: Complex workflows with states  
**Shows**: States, transitions, triggers  
**Type**: `stateDiagram-v2`

### 5. Data Flow
**When**: Data processing workflows  
**Shows**: Input → Processing → Storage → Output  
**Type**: `graph LR`

---

## DIAGRAM RULES

### General
- Label every node clearly
- Use consistent naming
- Keep diagrams focused (one concept)
- Max 20 nodes per diagram
- Use colors sparingly

### Node Naming
- User-facing: "User", "Customer", "Admin"
- Systems: "Frontend", "API", "Database"
- Agents: "Orchestrator", "Agent Name"
- Actions: Verbs ("Process", "Validate", "Send")

### Arrow Labels
- Keep short (2-4 words)
- Use present tense
- Be specific ("Send email" not "Do thing")

---

## TEMPLATES

### System Architecture
```mermaid
graph TB
    User[User/Browser]
    Frontend[Frontend<br/>Figma Make]
    API[Backend API<br/>Cursor AI]
    Orchestrator[AI Orchestrator]
    Agent1[Agent 1]
    Agent2[Agent 2]
    DB[(Database)]
    External[External API]
    
    User --> Frontend
    Frontend --> API
    API --> Orchestrator
    Orchestrator --> Agent1
    Orchestrator --> Agent2
    Agent1 --> External
    Agent2 --> DB
    DB --> API
    API --> Frontend
    Frontend --> User
```

### User Journey Flow
```mermaid
flowchart TD
    Start([User Lands on Page])
    
    Start --> Screen1[Screen: Landing]
    Screen1 --> Action1{User Action}
    
    Action1 -->|Option A| PathA[Screen: Flow A]
    Action1 -->|Option B| PathB[Screen: Flow B]
    
    PathA --> AI[AI Processing]
    PathB --> Manual[Manual Entry]
    
    AI --> Result[Screen: Results]
    Manual --> Result
    
    Result --> Decision{Satisfied?}
    Decision -->|Yes| Success([Complete])
    Decision -->|No| Retry[Screen: Refine]
    Retry --> AI
```

### Agent Sequence
```mermaid
sequenceDiagram
    participant User
    participant UI as Frontend
    participant API as Backend
    participant Orch as Orchestrator
    participant Agent as AI Agent
    participant Tool as External Tool
    participant DB as Database
    
    User->>UI: Submit request
    activate UI
    UI->>API: POST /api/action
    activate API
    
    API->>Orch: Process request
    activate Orch
    Orch->>Agent: Delegate task
    activate Agent
    
    Agent->>Tool: Call API
    activate Tool
    Tool-->>Agent: Return data
    deactivate Tool
    
    Agent->>DB: Save result
    activate DB
    DB-->>Agent: Confirm
    deactivate DB
    
    Agent-->>Orch: Task complete
    deactivate Agent
    Orch-->>API: Return result
    deactivate Orch
    
    API-->>UI: Response
    deactivate API
    UI-->>User: Display result
    deactivate UI
```

### State Machine
```mermaid
stateDiagram-v2
    [*] --> Idle
    
    Idle --> Pending: User submits
    Pending --> Validating: Check input
    
    Validating --> Processing: Valid
    Validating --> Error: Invalid
    
    Processing --> AIThinking: Send to AI
    AIThinking --> Success: Complete
    AIThinking --> Retry: Timeout
    AIThinking --> Failed: Error
    
    Retry --> AIThinking: Attempt < 3
    Retry --> Failed: Max attempts
    
    Success --> Idle: Reset
    Failed --> Error: Show message
    Error --> Idle: User action
```

### Data Flow
```mermaid
graph LR
    Input[User Input] --> Validate[Validation]
    Validate --> Parse[Parse Data]
    Parse --> Enrich[AI Enrichment]
    Enrich --> Store[(Save to DB)]
    Store --> Analyze[AI Analysis]
    Analyze --> Format[Format Output]
    Format --> Display[Display to User]
    
    Validate -.->|Invalid| Error[Show Error]
    Enrich -.->|API Fail| Fallback[Use Defaults]
    Analyze -.->|Timeout| Cache[Use Cached]
```

---

## STYLING GUIDE

### Use Colors for Clarity
```mermaid
graph TB
    User[User]:::userStyle
    Frontend[Frontend]:::frontendStyle
    Backend[Backend]:::backendStyle
    AI[AI Agent]:::aiStyle
    
    classDef userStyle fill:#e1f5ff,stroke:#01579b
    classDef frontendStyle fill:#fff3e0,stroke:#e65100
    classDef backendStyle fill:#f3e5f5,stroke:#4a148c
    classDef aiStyle fill:#e8f5e9,stroke:#1b5e20
```

### Use Subgraphs for Grouping
```mermaid
graph TB
    subgraph Frontend
        UI[React UI]
        State[State Management]
    end
    
    subgraph Backend
        API[REST API]
        DB[(Database)]
    end
    
    subgraph AI System
        Orch[Orchestrator]
        Agent[Agents]
    end
    
    UI --> API
    API --> Orch
    Orch --> Agent
    Agent --> DB
```

---

## VALIDATION CHECKLIST

### Before Committing Diagram
- [ ] All nodes labeled clearly
- [ ] All arrows labeled (if needed)
- [ ] Direction makes sense (top-to-bottom or left-to-right)
- [ ] No orphan nodes
- [ ] No circular references (unless intentional)
- [ ] Fits in standard viewport (no excessive scrolling)
- [ ] Matches written specs
- [ ] Updated if specs change

---

## ANTI-PATTERNS

### ❌ Too Complex
- More than 20 nodes
- Unclear hierarchy
- Spaghetti connections

### ❌ Too Vague
- Unlabeled nodes
- Generic names ("Thing", "Stuff")
- No context

### ❌ Outdated
- Doesn't match current implementation
- Shows features not yet built
- Missing new components

---

## DIAGRAM TYPES QUICK REF

| Type | Use Case | Syntax |
|------|----------|--------|
| Graph | Architecture, data flow | `graph TB` |
| Flowchart | User journeys, decisions | `flowchart TD` |
| Sequence | API calls, agent interactions | `sequenceDiagram` |
| State | Workflow states, transitions | `stateDiagram-v2` |
| Class | Data models (rare) | `classDiagram` |
| ERD | Database schema (rare) | `erDiagram` |

---

## INTEGRATION WITH DOCS

### In Product Plans
- One diagram per major section
- Reference diagrams in text
- Keep diagrams updated with specs

### In Handoff Docs
- Include relevant diagrams
- Export as images if needed
- Version diagrams with code

### In Implementation
- Reference diagram in code comments
- Update diagram when architecture changes
- Use diagrams for PR reviews

---

**Status**: Use these standards for all diagrams
