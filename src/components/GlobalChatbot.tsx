import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/design-system/Button';
import { Typography } from './ui/design-system/Typography';
import { getSmartResponse } from './chatbot/ChatbotLogic';

export function GlobalChatbot({ onNavigate }: { onNavigate?: (version: any) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Initialize from localStorage to prevent "pestering" on refresh
  const [hasInteracted, setHasInteracted] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('sun_ai_chat_interacted') === 'true';
      }
    } catch (e) {
      console.warn('LocalStorage access denied', e);
    }
    return false;
  });

  const [messages, setMessages] = useState<Array<{role: 'ai' | 'user', text: string, action?: 'wizard' | 'booking' | 'contact'}>>([
    { role: 'ai', text: "Hello. I'm the Sun AI architecture assistant. How can I help you scope your project today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-open logic (10 seconds) - Only runs if user hasn't interacted yet
  useEffect(() => {
    if (hasInteracted) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const markInteracted = () => {
    setHasInteracted(true);
    try {
      localStorage.setItem('sun_ai_chat_interacted', 'true');
    } catch (e) {
      // Ignore storage errors
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    markInteracted();
  };

  const handleClose = () => {
    setIsOpen(false);
    markInteracted();
  };

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    markInteracted();

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const response = getSmartResponse(text);
      setMessages(prev => [...prev, { role: 'ai', text: response.text, action: response.action }]);
    }, 1000);
  };

  const handleActionClick = (action: string) => {
    if (onNavigate) {
      onNavigate(action);
      setIsOpen(false); // Close chat when navigating
    }
  };

  const QuickAction = ({ label, query }: { label: string, query: string }) => (
    <button 
      onClick={() => handleSend(query)}
      className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap border border-slate-200"
    >
      {label}
    </button>
  );

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end pointer-events-none sm:z-[60] z-[45]">
      <div className="pointer-events-auto">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mb-4 w-[350px] bg-white rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-200 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-slate-900 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <Typography variant="body" className="text-white font-bold text-sm leading-none">Sun AI Assistant</Typography>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wider">Online</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleClose}
                  className="text-slate-400 hover:text-white transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="h-[350px] overflow-y-auto p-4 bg-slate-50 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div 
                      className={`
                        max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed
                        ${msg.role === 'user' 
                          ? 'bg-slate-900 text-white rounded-tr-sm' 
                          : 'bg-white border border-slate-200 text-slate-600 rounded-tl-sm shadow-sm'
                        }
                      `}
                    >
                      {msg.text}
                    </div>
                    {/* Render Action Button if present */}
                    {msg.role === 'ai' && msg.action && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2"
                      >
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          onClick={() => handleActionClick(msg.action!)}
                          rightIcon={<ChevronRight className="w-3 h-3" />}
                          className="bg-orange-50 text-orange-700 border-orange-100 hover:bg-orange-100 h-8 text-xs"
                        >
                          {msg.action === 'wizard' ? 'Start Project Brief' : msg.action === 'booking' ? 'Book a Call' : 'Contact Us'}
                        </Button>
                      </motion.div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions (only show if few messages) */}
              {messages.length < 4 && (
                <div className="px-4 pb-2 bg-slate-50 flex gap-2 overflow-x-auto scrollbar-hide">
                  <QuickAction label="How does this work?" query="Explain the process" />
                  <QuickAction label="Pricing?" query="What is the pricing?" />
                  <QuickAction label="Book a call" query="I want to book a strategy call" />
                </div>
              )}

              {/* Input Area */}
              <div className="p-3 bg-white border-t border-slate-100">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about AI..."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-4 pr-10 py-2.5 focus:outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-100 transition-all placeholder:text-slate-400"
                  />
                  <button 
                    onClick={() => handleSend()}
                    className="absolute right-2 p-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50"
                    disabled={!inputValue.trim()}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => isOpen ? handleClose() : handleOpen()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-colors relative
            ${isOpen ? 'bg-slate-800 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'}
          `}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageSquare className="w-6 h-6" />
          )}
          
          {/* Unread Indicator (only when closed and interacted is false) */}
          {!isOpen && !hasInteracted && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 border-2 border-white"></span>
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
}
