import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Suggestion {
  id: string;
  title: string;
  benefit: string;
  category?: string; // Optional for compatibility if needed
}

interface AISuggestionsSidebarProps {
  onAddSuggestion: (suggestion: Suggestion) => void;
}

const SUGGESTIONS: Suggestion[] = [
  {
    id: 's1',
    title: 'Magic Link Login',
    benefit: 'Faster and more secure signup.',
    category: 'backend'
  },
  {
    id: 's2',
    title: 'AI Sentiment Alerts',
    benefit: 'Detect upset users automatically.',
    category: 'ai'
  },
  {
    id: 's3',
    title: 'Multi-language Support',
    benefit: 'Serve customers in their preferred language.',
    category: 'ai'
  },
  {
    id: 's4',
    title: 'Slack Notifications',
    benefit: 'Get instant alerts for key events.',
    category: 'integration'
  },
  {
    id: 's5',
    title: 'Knowledge Base Widget',
    benefit: 'Reduce support tickets by 30%.',
    category: 'ui-ux'
  }
];

export function AISuggestionsSidebar({ onAddSuggestion }: AISuggestionsSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={{ width: isOpen ? 320 : 52 }}
      className="relative flex-shrink-0 h-full bg-white border-l border-[#E9EAEE] shadow-sm z-30 transition-all duration-300 ease-in-out"
      style={{ 
        borderTopLeftRadius: '16px',
        borderBottomLeftRadius: '16px',
        // Ensuring it sits nicely if placed in a flex container
      }}
    >
      {/* Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8A4F] to-[#FF6F40] rounded-tl-2xl" />

      {/* Toggle Button (Absolute to be visible in both states) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -left-3 top-8 w-6 h-6 bg-white border border-[#E9EAEE] rounded-full shadow-sm flex items-center justify-center text-[#555] hover:text-[#FF6A3D] transition-colors z-40"
      >
        {isOpen ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>

      {/* Content Container */}
      <div className="h-full overflow-hidden relative">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* CLOSED STATE */
            <motion.div
              key="closed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col items-center pt-8 cursor-pointer hover:bg-[#F7F9FB] transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4F] flex items-center justify-center mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="writing-vertical-lr transform rotate-180 text-[13px] font-bold text-[#555] tracking-wide whitespace-nowrap uppercase">
                AI Suggestions
              </div>
            </motion.div>
          ) : (
            /* OPEN STATE */
            <motion.div
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="h-full flex flex-col"
            >
              {/* Header */}
              <div className="p-6 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4F] flex items-center justify-center shadow-sm">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#202020]">AI Suggestions</h3>
                </div>
                {/* Close button optional inside since we have the toggle, but good for UX */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-[#999] hover:bg-[#F7F9FB] hover:text-[#555] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Suggestions List */}
              <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4">
                {SUGGESTIONS.map((suggestion) => (
                  <div 
                    key={suggestion.id}
                    className="bg-[#F9FAFB] border border-[#E9EAEE] rounded-xl p-4 hover:shadow-md hover:border-[#FF6A3D]/30 transition-all group"
                  >
                    <div className="mb-2">
                      <h4 className="text-[14px] font-bold text-[#202020] mb-1 group-hover:text-[#FF6A3D] transition-colors">
                        {suggestion.title}
                      </h4>
                      <p className="text-[12px] text-[#555] leading-normal">
                        {suggestion.benefit}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddSuggestion(suggestion);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white border border-[#E9EAEE] text-[12px] font-semibold text-[#555] hover:bg-[#FF6A3D] hover:text-white hover:border-[#FF6A3D] transition-all shadow-sm"
                    >
                      <Plus className="w-3 h-3" />
                      Add to Requirements
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* CSS for vertical text since Tailwind vertical-writing-mode utilities might need custom class or plugin */}
      <style>{`
        .writing-vertical-lr {
          writing-mode: vertical-lr;
        }
      `}</style>
    </motion.div>
  );
}
