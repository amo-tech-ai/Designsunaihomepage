import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock Credentials for Demo
const MOCK_CREDS = {
  email: 'admin@sun.ai',
  pass: 'demo123'
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for persisted session on mount
  useEffect(() => {
    // DEV MODE: Auto-login to disable auth temporarily
    const devUser: User = {
      id: 'dev-admin',
      email: 'dev@sun.ai',
      name: 'Developer Mode',
      role: 'admin'
    };
    setUser(devUser);
    setIsLoading(false);

    /* 
    const stored = localStorage.getItem('sun_ai_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        localStorage.removeItem('sun_ai_user');
      }
    }
    setIsLoading(false);
    */
  }, []);

  const login = async (email: string, pass: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (email.toLowerCase() === MOCK_CREDS.email && pass === MOCK_CREDS.pass) {
      const newUser: User = {
        id: 'admin-1',
        email: email,
        name: 'Admin User',
        role: 'admin'
      };
      setUser(newUser);
      localStorage.setItem('sun_ai_user', JSON.stringify(newUser));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sun_ai_user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      logout,
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
