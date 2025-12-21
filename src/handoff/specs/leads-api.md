# Leads API Specification

**Version**: 1.0  
**Base URL**: `/api/leads`  
**Auth**: Required (Bearer token)

---

## Endpoints

### 1. List Leads

**GET** `/api/leads`

**Purpose**: Get paginated list of leads with optional filters

**Query Parameters**:
- `page` (number, default: 1)
- `limit` (number, default: 20, max: 100)
- `status` (string, comma-separated: "new,contacted,qualified")
- `source` (string, comma-separated)
- `scoreMin` (number, 0-100)
- `scoreMax` (number, 0-100)
- `tags` (string, comma-separated)
- `hasActivity` (boolean)
- `createdAfter` (ISO date)
- `createdBefore` (ISO date)
- `query` (string, searches name/email/company)

**Success Response** (200):
```
{
  success: true
  data: Lead[] (array of lead objects)
  pagination: {
    page: number
    limit: number
    total: number (total leads matching filters)
    totalPages: number
  }
}
```

**Logic**:
1. Verify user is authenticated
2. Build SQL query with filters
3. Apply pagination (LIMIT + OFFSET)
4. Include enrichedData if exists
5. Sort by: score DESC, createdAt DESC
6. Return leads array with pagination

---

### 2. Get Single Lead

**GET** `/api/leads/:id`

**Purpose**: Get full details of one lead including activities

**Success Response** (200):
```
{
  success: true
  data: {
    lead: Lead (full object)
    recentActivities: Activity[] (last 10)
    dealInfo: Deal (if exists)
  }
}
```

**Error Responses**:
- 404: Lead not found
- 403: User doesn't have permission

**Logic**:
1. Fetch lead by ID
2. Check user has access (owner or admin)
3. Fetch related activities (latest 10)
4. Fetch related deal (if exists)
5. Return combined data

---

### 3. Create Lead

**POST** `/api/leads`

**Purpose**: Add new lead to CRM

**Request Body**:
```
{
  name: string (required)
  email: string (required, valid email)
  phone: string (optional)
  company: string (required)
  title: string (optional)
  source: string (required, e.g., "website", "linkedin")
  tags: string[] (optional)
}
```

**Success Response** (201):
```
{
  success: true
  data: {
    lead: Lead (newly created)
    enrichmentQueued: boolean
  }
}
```

**Logic**:
1. Validate required fields
2. Check for duplicate email
3. Set status to "new"
4. Set ownerId to current user
5. Generate unique ID
6. Insert into database
7. Queue enrichment job (async)
8. Return new lead

---

### 4. Update Lead

**PUT** `/api/leads/:id`

**Purpose**: Update lead fields

**Request Body**:
```
{
  name: string (optional)
  email: string (optional)
  phone: string (optional)
  company: string (optional)
  title: string (optional)
  status: LeadStatus (optional)
  score: number (optional, 0-100)
  tags: string[] (optional)
}
```

**Success Response** (200):
```
{
  success: true
  data: Lead (updated object)
}
```

**Logic**:
1. Verify lead exists
2. Check user has permission (owner or admin)
3. Validate new values
4. If email changed, re-queue enrichment
5. Update updatedAt timestamp
6. Return updated lead

---

### 5. Delete Lead

**DELETE** `/api/leads/:id`

**Purpose**: Soft delete lead (set deletedAt)

**Success Response** (200):
```
{
  success: true
  message: "Lead deleted successfully"
}
```

**Logic**:
1. Verify lead exists
2. Check user has permission (owner or admin)
3. Set deletedAt to current timestamp (soft delete)
4. Don't return deleted leads in list queries
5. Keep in database for 90 days then hard delete (cron job)

---

### 6. Enrich Lead

**POST** `/api/leads/:id/enrich`

**Purpose**: Trigger AI enrichment for a lead

**Success Response** (202 Accepted):
```
{
  success: true
  message: "Enrichment started"
  jobId: string
}
```

**Logic**:
1. Verify lead exists
2. Check if enrichment already in progress
3. Create background job
4. Call Gemini with Search Grounding
5. Extract company data (see agents/lead-enrichment.md)
6. Update lead with enrichedData
7. Calculate score based on fit
8. Return job ID (frontend can poll for status)

---

### 7. Search Leads

**POST** `/api/leads/search`

**Purpose**: Advanced search with complex filters

**Request Body**:
```
{
  query: string (natural language or keyword)
  filters: {
    status: LeadStatus[]
    source: string[]
    scoreMin: number
    scoreMax: number
    tags: string[]
    hasActivity: boolean
    dateRange: {
      start: ISO date
      end: ISO date
    }
  }
  limit: number (default: 20)
  offset: number (default: 0)
}
```

**Success Response** (200):
```
{
  success: true
  data: Lead[]
  total: number
  interpretation: {
    parsedQuery: string
    appliedFilters: object
  }
}
```

**Logic**:
1. If query is natural language, parse with Gemini
2. Extract entities (company names, statuses, dates)
3. Convert to SQL filters
4. Combine with explicit filters
5. Execute search
6. Rank by relevance score
7. Return results

---

## Database Requirements

### leads table
- id (UUID, primary key)
- name (string)
- email (string)
- phone (string, nullable)
- company (string)
- title (string, nullable)
- status (enum: new, contacted, qualified, etc.)
- source (string)
- owner_id (UUID, foreign key to users)
- enriched_data (JSONB, nullable)
- score (integer, 0-100, nullable)
- tags (string[], array)
- custom_fields (JSONB, nullable)
- created_at (timestamp)
- updated_at (timestamp)
- deleted_at (timestamp, nullable)

**Indexes**:
- email (unique where deleted_at IS NULL)
- owner_id
- status
- score
- created_at
- tags (GIN index for array)

---

## Validation Rules

- Email: Must be valid format, max 255 chars
- Name: Required, 2-100 chars
- Company: Required, 2-100 chars
- Phone: Optional, E.164 format recommended
- Score: Must be 0-100 if provided
- Tags: Max 10 tags, each max 50 chars
- Source: Max 50 chars

---

## Business Rules

1. **Duplicate Prevention**: Same email can't exist twice (unless one is deleted)
2. **Auto-Assignment**: New leads assigned to creator unless ownerId specified
3. **Score Calculation**: Automatically calculated during enrichment based on:
   - Company size (0-30 points)
   - Industry fit (0-30 points)
   - Engagement level (0-20 points)
   - Source quality (0-20 points)
4. **Status Transitions**: Can only move forward in pipeline (except "lost"/"archived")

---

## Testing Checklist

- [ ] Can create lead with required fields
- [ ] Cannot create duplicate email
- [ ] Can list leads with pagination
- [ ] Filters work correctly (status, score, date)
- [ ] Can update lead fields
- [ ] Can soft delete lead
- [ ] Deleted leads don't appear in list
- [ ] Enrichment triggers correctly
- [ ] Score calculated on enrichment
- [ ] Search returns relevant results
- [ ] Only owner/admin can modify leads
