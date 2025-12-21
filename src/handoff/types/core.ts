// CORE TYPE DEFINITIONS
// Generated: 2024-12-20
// For Cursor AI Backend Implementation

// ============================================
// USER & AUTH
// ============================================

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'viewer';
  avatar?: string;
  createdAt: string;
  lastLoginAt: string;
}

export interface Session {
  userId: string;
  token: string;
  expiresAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  session: Session;
}

// ============================================
// COMMON
// ============================================

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  pagination?: Pagination;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

// ============================================
// TIMESTAMPS
// ============================================

export interface Timestamps {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

// ============================================
// ENUMS
// ============================================

export type LeadStatus = 
  | 'new' 
  | 'contacted' 
  | 'qualified' 
  | 'proposal' 
  | 'negotiation' 
  | 'won' 
  | 'lost' 
  | 'archived';

export type ActivityType = 
  | 'call' 
  | 'email' 
  | 'meeting' 
  | 'note' 
  | 'task' 
  | 'linkedin';

export type DealStage = 
  | 'discovery' 
  | 'demo' 
  | 'proposal' 
  | 'contract_sent' 
  | 'negotiation' 
  | 'closed_won' 
  | 'closed_lost';

export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type SentimentScore = 'positive' | 'neutral' | 'negative';
