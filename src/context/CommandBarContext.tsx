import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CommandBarContextType {
  isOpen: boolean;
  openCommandBar: () => void;
  closeCommandBar: () => void;
  toggleCommandBar: () => void;
}

const CommandBarContext = createContext<CommandBarContextType | undefined>(undefined);

export function useCommandBar() {
  const context = useContext(CommandBarContext);
  if (!context) {
    throw new Error('useCommandBar must be used within a CommandBarProvider');
  }
  return context;
}

interface CommandBarProviderProps {
  children: ReactNode;
}

export function CommandBarProvider({ children }: CommandBarProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openCommandBar = () => setIsOpen(true);
  const closeCommandBar = () => setIsOpen(false);
  const toggleCommandBar = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleCommandBar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <CommandBarContext.Provider value={{ isOpen, openCommandBar, closeCommandBar, toggleCommandBar }}>
      {children}
    </CommandBarContext.Provider>
  );
}
