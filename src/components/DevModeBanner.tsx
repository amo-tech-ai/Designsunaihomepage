/**
 * Development Mode Banner
 * Shows when app is running with mock data (no backend configured)
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, X, ExternalLink } from 'lucide-react';
import { Button } from './ui/design-system/Button';

export function DevModeBanner() {
  const [isDismissed, setIsDismissed] = useState(false);
  
  // Only show in development mode when no Supabase URL is configured
  const isDevelopmentMode = import.meta.env?.DEV && !import.meta.env?.VITE_SUPABASE_URL;
  
  if (!isDevelopmentMode || isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 backdrop-blur-sm border-b border-amber-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Info className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-amber-100">
                🔧 Demo Mode Active
              </p>
              <p className="text-xs text-amber-200/80 mt-0.5">
                AI features showing mock data. Configure Supabase backend for real AI analysis powered by Gemini.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="/PRODUCTION-SETUP.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-200 hover:text-amber-100 underline flex items-center gap-1 transition-colors"
            >
              Setup Guide
              <ExternalLink className="w-3 h-3" />
            </a>
            
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 rounded hover:bg-amber-500/20 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-amber-200" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
