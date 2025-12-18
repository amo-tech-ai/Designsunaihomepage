import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, ChevronRight, User, Bot } from 'lucide-react';
import { Button } from './ui/design-system/Button';
import { Card } from './ui/design-system/Card';

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: "Hi — I'm your Sun AI assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Show after 10 seconds or on hesitation logic
    const timer = setTimeout(() => {
      // Check if we are on booking page (simple heuristic via url or props)
      // For now, we'll just show it. In a real router, we'd check location.pathname
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    // User message
    const userText = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: "I can help with that. Would you like me to guide you through our AI Brief Wizard to get a custom proposal?" 
      }]);
    }, 1000);
  };

  const quickActions = [
    "Explain the process",
    "Suggest services",
    "Book a strategy call"
  ];

  return (
    <>
      {/* --- Trigger Button --- */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-colors ${
          isOpen ? 'bg-slate-900 text-white' : 'bg-[#FF6A3D] text-white hover:bg-[#E55A2F]'
        }`}
      >
        <AnimatePresence mode="wait">
           {isOpen ? (
             <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
               <X className="w-6 h-6" />
             </motion.div>
           ) : (
             <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
               <MessageSquare className="w-6 h-6 fill-current" />
             </motion.div>
           )}
        </AnimatePresence>
      </motion.button>

      {/* --- Chat Interface (Drawer) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] flex flex-col"
          >
            <Card variant="glass" className="w-full h-full flex flex-col overflow-hidden shadow-2xl border-slate-200/50 bg-white/95 backdrop-blur-xl">
              
              {/* Header */}
              <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-white/50">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00334F] to-[#005578] flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Sun AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-slate-500 font-medium">Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === 'assistant' ? 'bg-[#00334F] text-white' : 'bg-slate-200 text-slate-500'
                    }`}>
                      {msg.role === 'assistant' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] ${
                      msg.role === 'assistant' 
                        ? 'bg-white border border-slate-100 text-slate-700 rounded-tl-none shadow-sm' 
                        : 'bg-[#FF6A3D] text-white rounded-tr-none shadow-md'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {messages.length === 1 && (
                  <div className="mt-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Quick Actions</p>
                    <div className="space-y-2">
                      {quickActions.map((action, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setMessages(prev => [...prev, { role: 'user', text: action }]);
                            setTimeout(() => {
                              setMessages(prev => [...prev, { role: 'assistant', text: `Sure, I can help you with "${action}". Let me pull up some information.` }]);
                            }, 800);
                          }}
                          className="w-full text-left p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:shadow-sm hover:bg-orange-50/30 transition-all text-sm text-slate-700 flex items-center justify-between group"
                        >
                          {action}
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-orange-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-slate-100">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask anything..." 
                    className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all text-sm"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <button 
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-slate-900 text-white hover:bg-orange-500 disabled:opacity-50 disabled:bg-slate-300 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
