import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Sparkles, 
  CornerDownLeft, 
  Command, 
  User, 
  Building2, 
  ArrowRight,
  TrendingUp,
  Clock
} from 'lucide-react';
import { Typography } from '../../ui/design-system/Typography';
import { useCommandBar } from '../../../context/CommandBarContext';
import { useIntelligence } from '../../../context/IntelligenceContext';

// Mock Suggestions (Keep these for "Quick Actions")
const SUGGESTED_QUERIES = [
  "Leads with no activity in 30 days",
  "Q3 Opportunities closing this week",
  "Summarize my last call with Acme Corp"
];

const PREDICTIVE_RESULTS = [
  { id: 1, type: 'lead', title: 'Fintech CEOs in NY', subtitle: '32 leads matched', icon: User, score: 98 },
  { id: 2, type: 'company', title: 'Companies > $50M Revenue', subtitle: '15 accounts matched', icon: Building2, score: 92 },
  { id: 3, type: 'insight', title: 'Recent High-Intent Signals', subtitle: 'From last 7 days', icon: TrendingUp, score: 85 },
];

export function CommandBar({ onSearch }: { onSearch?: (query: string) => void }) {
  const { isOpen, closeCommandBar } = useCommandBar();
  const { runSearch, isThinking: isGlobalThinking } = useIntelligence();
  
  const [query, setQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [results, setResults] = useState<typeof PREDICTIVE_RESULTS>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      // Small delay to ensure render before focus
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Simulate AI Thinking for Autocomplete / Predictive results
  useEffect(() => {
    if (query.length > 3) {
      setIsThinking(true);
      const timer = setTimeout(() => {
        setIsThinking(false);
        setResults(PREDICTIVE_RESULTS);
      }, 600); // Fast thinking
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsThinking(false);
    }
  }, [query]);

  // Handle Enter to Navigate
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query.length > 0) {
      console.log("Navigating to results for:", query);
      
      // 1. Trigger Global Search in Context
      runSearch(query);
      
      // 2. Navigate (if onSearch provided)
      onSearch?.(query);
      
      // 3. Close Modal
      closeCommandBar();
    }
    if (e.key === 'Escape') {
      closeCommandBar();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={closeCommandBar}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 ring-1 ring-slate-900/5"
          >
            {/* Input Area */}
            <div className="relative flex items-center p-6 border-b border-slate-100 bg-white z-20">
              {isThinking ? (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mr-4"
                >
                  <Sparkles className="w-6 h-6 text-indigo-500" />
                </motion.div>
              ) : (
                <Search className="w-6 h-6 text-slate-400 mr-4" />
              )}
              
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything... (e.g. 'Show fintech CEOs in NY with budget > 50k')" 
                className="flex-1 text-xl font-medium text-slate-900 placeholder:text-slate-300 outline-none bg-transparent"
                autoComplete="off"
              />
              
              <div className="hidden md:flex items-center gap-2">
                <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border border-slate-200 bg-slate-50 px-2 font-mono text-[10px] font-medium text-slate-500">
                  <span className="text-xs">ESC</span>
                </kbd>
              </div>
            </div>

            {/* AI Context / Suggestions */}
            <div className="bg-slate-50/50 min-h-[120px] max-h-[60vh] overflow-y-auto">
              <AnimatePresence mode="wait">
                {!query && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6"
                  >
                    <Typography variant="label" className="text-slate-400 mb-4 block">Suggested Queries</Typography>
                    <div className="flex flex-col gap-2">
                      {SUGGESTED_QUERIES.map((suggestion, i) => (
                        <button 
                          key={i}
                          className="text-left px-4 py-3 rounded-xl hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-slate-200 transition-all text-slate-600 hover:text-indigo-600 flex items-center justify-between group"
                          onClick={() => {
                            setQuery(suggestion);
                            // Optional: auto-search on click
                            // runSearch(suggestion);
                            // onSearch?.(suggestion);
                            // closeCommandBar();
                          }}
                        >
                          <span className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-slate-300 group-hover:text-indigo-400" />
                            {suggestion}
                          </span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {query && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-2"
                  >
                     {results.length > 0 ? (
                       <div className="space-y-1">
                          {results.map((result) => (
                            <div 
                              key={result.id}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-indigo-50/50 cursor-pointer group transition-colors"
                              onClick={() => {
                                console.log("Navigating to result", result.id);
                                runSearch(result.title);
                                onSearch?.(result.title);
                                closeCommandBar();
                              }}
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                                  <result.icon className="w-5 h-5 text-indigo-500" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-slate-900">{result.title}</div>
                                  <div className="text-xs text-slate-500 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 text-amber-400" />
                                    {result.subtitle}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-medium text-slate-400">Run Query</span>
                                <CornerDownLeft className="w-4 h-4 text-slate-400" />
                              </div>
                            </div>
                          ))}
                       </div>
                     ) : (
                       !isThinking && (
                         <div className="p-8 text-center text-slate-400">
                           <p>No direct matches. AI will interpret this query semantically.</p>
                           <p className="text-xs mt-2 text-slate-300">Press Enter to run full search</p>
                         </div>
                       )
                     )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span>AI Semantic Search Active</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><Command className="w-3 h-3" /> K to open</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
