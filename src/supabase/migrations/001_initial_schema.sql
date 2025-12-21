-- Luxury AI CRM - Database Schema
-- Complete production-ready schema for all 9 AI features

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- LEADS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Basic info
  email TEXT NOT NULL,
  name TEXT,
  company TEXT,
  role TEXT,
  phone TEXT,
  website TEXT,
  
  -- Enriched data (from AI)
  company_size TEXT,
  industry TEXT,
  revenue TEXT,
  location TEXT,
  description TEXT,
  linkedin_url TEXT,
  
  -- AI scoring
  fit_score INTEGER CHECK (fit_score >= 0 AND fit_score <= 100),
  fit_reasoning TEXT,
  
  -- Status
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won', 'lost')),
  
  -- Metadata
  enriched_at TIMESTAMPTZ,
  data_source TEXT CHECK (data_source IN ('gemini_search', 'manual', 'import')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Indexes
  UNIQUE(user_id, email)
);

CREATE INDEX idx_leads_user_id ON leads(user_id);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_fit_score ON leads(fit_score DESC);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- ============================================================================
-- DEALS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS deals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  
  -- Deal info
  title TEXT NOT NULL,
  value DECIMAL(12, 2),
  currency TEXT DEFAULT 'USD',
  stage TEXT DEFAULT 'discovery' CHECK (stage IN ('discovery', 'demo', 'proposal', 'negotiation', 'contract', 'closed_won', 'closed_lost')),
  probability INTEGER CHECK (probability >= 0 AND probability <= 100),
  
  -- Timeline
  expected_close_date DATE,
  actual_close_date DATE,
  
  -- Health (from AI)
  health_score INTEGER CHECK (health_score >= 0 AND health_score <= 100),
  health_status TEXT CHECK (health_status IN ('healthy', 'at_risk', 'critical', 'won', 'lost')),
  health_trend TEXT CHECK (health_trend IN ('improving', 'stable', 'declining')),
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_deals_user_id ON deals(user_id);
CREATE INDEX idx_deals_lead_id ON deals(lead_id);
CREATE INDEX idx_deals_stage ON deals(stage);
CREATE INDEX idx_deals_health_status ON deals(health_status);
CREATE INDEX idx_deals_close_date ON deals(expected_close_date);

-- ============================================================================
-- CALLS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS calls (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
  deal_id UUID REFERENCES deals(id) ON DELETE SET NULL,
  
  -- Call info
  call_date TIMESTAMPTZ NOT NULL,
  duration INTEGER, -- seconds
  participants TEXT[],
  
  -- Transcript
  transcript TEXT,
  summary TEXT,
  
  -- AI analysis
  sentiment TEXT CHECK (sentiment IN ('positive', 'neutral', 'negative')),
  sentiment_score INTEGER CHECK (sentiment_score >= 0 AND sentiment_score <= 100),
  
  -- Deal health impact
  deal_health_score INTEGER CHECK (deal_health_score >= 0 AND deal_health_score <= 100),
  
  -- Storage
  audio_file_url TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_calls_user_id ON calls(user_id);
CREATE INDEX idx_calls_lead_id ON calls(lead_id);
CREATE INDEX idx_calls_deal_id ON calls(deal_id);
CREATE INDEX idx_calls_date ON calls(call_date DESC);
CREATE INDEX idx_calls_sentiment ON calls(sentiment);

-- ============================================================================
-- CALL ACTIONS TABLE (Post-Call Action Architect)
-- ============================================================================
CREATE TABLE IF NOT EXISTS call_actions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  call_id UUID NOT NULL REFERENCES calls(id) ON DELETE CASCADE,
  
  -- Action details
  type TEXT NOT NULL CHECK (type IN ('email', 'task', 'meeting', 'follow_up')),
  title TEXT NOT NULL,
  description TEXT,
  priority TEXT NOT NULL CHECK (priority IN ('high', 'medium', 'low')),
  
  -- Assignment
  assignee TEXT,
  due_date TIMESTAMPTZ,
  
  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'dismissed')),
  
  -- AI reasoning
  ai_reasoning TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

CREATE INDEX idx_call_actions_call_id ON call_actions(call_id);
CREATE INDEX idx_call_actions_user_id ON call_actions(user_id);
CREATE INDEX idx_call_actions_status ON call_actions(status);
CREATE INDEX idx_call_actions_due_date ON call_actions(due_date);

-- ============================================================================
-- EMAIL DRAFTS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS email_drafts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  
  -- Email details
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  email_type TEXT NOT NULL CHECK (email_type IN ('follow_up', 'introduction', 'proposal', 'check_in', 'closing')),
  tone TEXT DEFAULT 'professional',
  
  -- Status
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'archived')),
  sent_at TIMESTAMPTZ,
  
  -- AI metadata
  ai_generated BOOLEAN DEFAULT TRUE,
  confidence INTEGER CHECK (confidence >= 0 AND confidence <= 100),
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_email_drafts_user_id ON email_drafts(user_id);
CREATE INDEX idx_email_drafts_lead_id ON email_drafts(lead_id);
CREATE INDEX idx_email_drafts_status ON email_drafts(status);

-- ============================================================================
-- WORKFLOWS TABLE (Automation tracking)
-- ============================================================================
CREATE TABLE IF NOT EXISTS workflows (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  deal_id UUID REFERENCES deals(id) ON DELETE CASCADE,
  
  -- Workflow details
  workflow_type TEXT NOT NULL CHECK (workflow_type IN ('ghost_detection', 'contract_to_cash', 'champion_autopilot')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused', 'cancelled')),
  
  -- Workflow data (JSONB for flexibility)
  workflow_data JSONB,
  
  -- Results
  result TEXT,
  completed_at TIMESTAMPTZ,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_workflows_user_id ON workflows(user_id);
CREATE INDEX idx_workflows_type ON workflows(workflow_type);
CREATE INDEX idx_workflows_status ON workflows(status);

-- ============================================================================
-- AI LOGS TABLE (Audit trail)
-- ============================================================================
CREATE TABLE IF NOT EXISTS ai_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Operation details
  operation TEXT NOT NULL CHECK (operation IN (
    'lead_enrichment',
    'call_analysis',
    'nl_search',
    'deal_health',
    'email_draft',
    'ghost_detection',
    'contract_to_cash',
    'champion_autopilot'
  )),
  model TEXT NOT NULL, -- e.g., 'gemini-2.0-flash-exp'
  
  -- Usage
  tokens_used INTEGER,
  cost DECIMAL(10, 6),
  
  -- Results
  success BOOLEAN DEFAULT TRUE,
  error_message TEXT,
  
  -- Context (JSONB)
  metadata JSONB,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_ai_logs_user_id ON ai_logs(user_id);
CREATE INDEX idx_ai_logs_operation ON ai_logs(operation);
CREATE INDEX idx_ai_logs_created_at ON ai_logs(created_at DESC);

-- ============================================================================
-- SEARCH HISTORY TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS search_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Search details
  query TEXT NOT NULL,
  entity_type TEXT CHECK (entity_type IN ('leads', 'deals', 'calls', 'contacts', 'activities')),
  results_count INTEGER,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_search_history_user_id ON search_history(user_id);
CREATE INDEX idx_search_history_created_at ON search_history(created_at DESC);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE calls ENABLE ROW LEVEL SECURITY;
ALTER TABLE call_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_drafts ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflows ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_history ENABLE ROW LEVEL SECURITY;

-- Leads policies
CREATE POLICY "Users can view own leads" ON leads FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own leads" ON leads FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own leads" ON leads FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own leads" ON leads FOR DELETE USING (auth.uid() = user_id);

-- Deals policies
CREATE POLICY "Users can view own deals" ON deals FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own deals" ON deals FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own deals" ON deals FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own deals" ON deals FOR DELETE USING (auth.uid() = user_id);

-- Calls policies
CREATE POLICY "Users can view own calls" ON calls FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own calls" ON calls FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own calls" ON calls FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own calls" ON calls FOR DELETE USING (auth.uid() = user_id);

-- Call actions policies
CREATE POLICY "Users can view own call actions" ON call_actions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own call actions" ON call_actions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own call actions" ON call_actions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own call actions" ON call_actions FOR DELETE USING (auth.uid() = user_id);

-- Email drafts policies
CREATE POLICY "Users can view own email drafts" ON email_drafts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own email drafts" ON email_drafts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own email drafts" ON email_drafts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own email drafts" ON email_drafts FOR DELETE USING (auth.uid() = user_id);

-- Workflows policies
CREATE POLICY "Users can view own workflows" ON workflows FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own workflows" ON workflows FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own workflows" ON workflows FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own workflows" ON workflows FOR DELETE USING (auth.uid() = user_id);

-- AI logs policies
CREATE POLICY "Users can view own AI logs" ON ai_logs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own AI logs" ON ai_logs FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Search history policies
CREATE POLICY "Users can view own search history" ON search_history FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own search history" ON search_history FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- TRIGGERS FOR updated_at
-- ============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_deals_updated_at BEFORE UPDATE ON deals FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_calls_updated_at BEFORE UPDATE ON calls FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_call_actions_updated_at BEFORE UPDATE ON call_actions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_email_drafts_updated_at BEFORE UPDATE ON email_drafts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_workflows_updated_at BEFORE UPDATE ON workflows FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- INITIAL DATA (Optional)
-- ============================================================================

-- Create sample data for development (commented out for production)
-- INSERT INTO leads (user_id, email, name, company, ...) VALUES (...);
