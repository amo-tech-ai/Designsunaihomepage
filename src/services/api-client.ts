/**
 * API Client - Base HTTP client for all Edge Function calls
 * 
 * Purpose: Single source of truth for API communication
 * Pattern: Request → Validate → Execute → Handle Error
 */

interface ApiError {
  message: string;
  code: string;
  details?: unknown;
}

interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  success: boolean;
}

class ApiClient {
  private baseUrl: string;
  private authToken: string | null = null;

  constructor() {
    // Development mode - use mock mode if no env variables set
    const functionsUrl = import.meta.env?.VITE_SUPABASE_FUNCTIONS_URL;
    const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL;
    
    if (functionsUrl) {
      this.baseUrl = functionsUrl;
    } else if (supabaseUrl) {
      this.baseUrl = `${supabaseUrl}/functions/v1`;
    } else {
      // Development fallback - enables mock mode
      this.baseUrl = 'http://localhost:54321/functions/v1';
      
      // Only log once in development
      if (import.meta.env?.DEV) {
        console.info(
          '🔧 Development Mode: AI features using mock data\n' +
          '📝 To enable real AI: Create .env file with Supabase credentials\n' +
          '📖 Setup guide: /PRODUCTION-SETUP.md'
        );
      }
    }
  }

  setAuthToken(token: string) {
    this.authToken = token;
  }

  clearAuthToken() {
    this.authToken = null;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }

    return headers;
  }

  async post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: {
            message: result.error?.message || 'Request failed',
            code: result.error?.code || 'UNKNOWN_ERROR',
            details: result.error?.details,
          },
        };
      }

      return {
        success: true,
        data: result.data,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Network error',
          code: 'NETWORK_ERROR',
        },
      };
    }
  }

  async get<T>(endpoint: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
    try {
      const url = new URL(`${this.baseUrl}${endpoint}`);
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          url.searchParams.append(key, value);
        });
      }

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: this.getHeaders(),
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: {
            message: result.error?.message || 'Request failed',
            code: result.error?.code || 'UNKNOWN_ERROR',
            details: result.error?.details,
          },
        };
      }

      return {
        success: true,
        data: result.data,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Network error',
          code: 'NETWORK_ERROR',
        },
      };
    }
  }
}

// Singleton instance
export const apiClient = new ApiClient();

// Export types
export type { ApiResponse, ApiError };