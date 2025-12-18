import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, Send, X, Sparkles, User, Bot, 
  ThumbsUp, ThumbsDown, ArrowRight, ShieldAlert 
} from 'lucide-react';
import { Button } from '../ui/design-system/Button';
import { Typography } from '../ui/design-system/Typography';
import { Card } from '../ui/design-system/Card';
import { cn } from '../ui/design-system/utils';
import { Lead } from '../../context/LeadContext';

interface NegotiationAssistantProps {
  lead: Lead;
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
  intent?: 'discount' | 'timeline' | 'competitor' | 'scope';
}

const INITIAL_MESSAGE: Message = {
  id: 'init-1',
  sender: 'ai',
  text: "I'm your negotiation co-pilot. I have context on this deal (Value: High, Stage: Negotiation). What objection are you facing?",
  timestamp: new Date()
};

export function NegotiationAssistant({ lead, isOpen, onClose }: NegotiationAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const response = generateResponse(userMsg.text, lead);
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (input: string, lead: Lead): Message => {
    const lowerInput = input.toLowerCase();
    let text = "";
    let intent: Message['intent'];

    if (lowerInput.includes('discount') || lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('expensive')) {
      intent = 'discount';
      text = `For a deal valued at $${lead.budget.toLocaleString()}, avoid straight discounts. \n\n**Strategy:**\n1. Ask "What part of the proposal is exceeding the budget?"\n2. Offer to remove a specific module (e.g., "${lead.services[0] || 'Advanced Features'}") to lower the price.\n3. Trade: "I can do 5% off if we sign by Friday."`;
    } else if (lowerInput.includes('competitor') || lowerInput.includes('other agency') || lowerInput.includes('cheaper')) {
      intent = 'competitor';
      text = `Differentiation is key here. \n\n**Strategy:**\n1. Don't badmouth the competitor.\n2. Reiterate our "Calm Luxury" value—we sell peace of mind, not just code.\n3. Ask: "Are they including post-launch support and the security audit we promised?"`;
    } else if (lowerInput.includes('time') || lowerInput.includes('long') || lowerInput.includes('faster')) {
      intent = 'timeline';
      text = `They want speed? Use it as leverage. \n\n**Strategy:**\n"We can accelerate the timeline to ${lead.timeline || '6 weeks'}, but this requires a premium for dedicated resources. Are you open to adjusting the budget for speed?"`;
    } else {
      text = "I understand. To give the best advice, could you clarify if this is regarding pricing, timeline, or scope creep? \n\nIn the meantime, remember: Silence is a powerful tool. Don't rush to fill the gap after stating your terms.";
    }

    return {
      id: (Date.now() + 1).toString(),
      sender: 'ai',
      text,
      timestamp: new Date(),
      intent
    };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Click to close) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] z-40"
          />
          
          {/* Side Panel */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col border-l border-slate-200"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between shrink-0">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/50">
                   <Sparkles className="w-5 h-5" />
                 </div>
                 <div>
                   <h3 className="font-bold text-sm">Negotiation Co-Pilot</h3>
                   <div className="text-xs text-slate-400 flex items-center gap-1">
                     <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                     Online & Listening
                   </div>
                 </div>
               </div>
               <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                 <X className="w-5 h-5 text-white/70" />
               </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50" ref={scrollRef}>
               {messages.map((msg) => (
                 <motion.div 
                   key={msg.id}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className={cn(
                     "flex gap-3 max-w-[90%]", 
                     msg.sender === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                   )}
                 >
                   <div className={cn(
                     "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                     msg.sender === 'user' ? "bg-slate-200" : "bg-orange-100 text-orange-600"
                   )}>
                     {msg.sender === 'user' ? <User className="w-4 h-4 text-slate-500" /> : <Bot className="w-4 h-4" />}
                   </div>
                   
                   <div className={cn(
                     "p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
                     msg.sender === 'user' 
                       ? "bg-slate-900 text-white rounded-tr-none" 
                       : "bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm"
                   )}>
                     {msg.text}
                     
                     {/* Suggestion Chips (Only for AI messages with intent) */}
                     {msg.intent === 'discount' && (
                       <div className="mt-3 flex gap-2">
                         <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded border border-emerald-100 cursor-pointer hover:bg-emerald-100">
                           <ThumbsUp className="w-3 h-3" /> Stand Firm
                         </div>
                         <div className="flex items-center gap-1.5 px-2 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded border border-amber-100 cursor-pointer hover:bg-amber-100">
                           <ArrowRight className="w-3 h-3" /> Offer Trade
                         </div>
                       </div>
                     )}
                   </div>
                 </motion.div>
               ))}

               {isTyping && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                     <Bot className="w-4 h-4" />
                   </div>
                   <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center h-10">
                     <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                     <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                     <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                   </div>
                 </motion.div>
               )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-200 shrink-0">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                className="relative"
              >
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about pricing, competitors, or strategy..."
                  className="w-full pl-4 pr-12 py-3 bg-slate-100 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all outline-none"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-2 flex justify-center gap-4 text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                 <span>🔒 Private Session</span>
                 <span>⚡ Real-time Analysis</span>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
