import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, 
  CheckCircle2, Globe, Sparkles, Video, ArrowRight
} from 'lucide-react';
import { Typography } from '../ui/design-system/Typography';
import { Button } from '../ui/design-system/Button';
import { Card } from '../ui/design-system/Card';
import { Badge } from '../ui/design-system/Badge';
import { cn } from '../ui/design-system/utils';

interface IntegratedSchedulerProps {
  leadName?: string;
  leadTimezone?: string; // e.g., "America/New_York"
  onBookingConfirmed?: (date: Date, time: string) => void;
  onClose?: () => void;
}

// Mock availability generator
const generateSlots = (date: Date) => {
  return [
    "09:30 AM", "11:00 AM", "02:00 PM", "04:30 PM"
  ];
};

export function IntegratedScheduler({ 
  leadName = "Client", 
  leadTimezone = "EST (New York)", 
  onBookingConfirmed,
  onClose
}: IntegratedSchedulerProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'select' | 'confirm' | 'success'>('select');
  
  // AI Recommendation Logic (Mock)
  const aiRecommendedSlot = { date: "Tomorrow", time: "02:00 PM", reason: "Best overlap with London time" };

  const handleConfirm = () => {
    setStep('success');
    if (onBookingConfirmed && selectedTime) {
      setTimeout(() => {
        onBookingConfirmed(selectedDate, selectedTime);
      }, 2000);
    }
  };

  const handleSmartSelect = () => {
    // Select the AI recommended slot
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow);
    setSelectedTime(aiRecommendedSlot.time);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-[600px]">
      
      {/* Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="bg-white border-slate-200 text-slate-500 gap-1.5 pl-1.5">
            <Video className="w-3 h-3 text-orange-500" />
            Strategy Session
          </Badge>
          {onClose && (
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
          )}
        </div>
        <Typography variant="h4" className="text-slate-900 mb-1">Schedule with Sun AI</Typography>
        <div className="flex items-center gap-2 text-xs text-slate-500">
           <Clock className="w-3 h-3" /> 45 min
           <span>•</span>
           <Globe className="w-3 h-3" /> {leadTimezone} detected
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 'select' && (
          <motion.div 
            key="select"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col p-6 overflow-y-auto"
          >
            {/* AI Suggestion */}
            <div 
              onClick={handleSmartSelect}
              className="mb-6 p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all group"
            >
               <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">AI Recommendation</div>
                    <div className="font-medium text-sm text-slate-200 leading-relaxed">
                      {aiRecommendedSlot.reason}. <br/>
                      <span className="text-white font-bold text-lg">Tomorrow at {aiRecommendedSlot.time}?</span>
                    </div>
                  </div>
                  <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-orange-400" />
                  </div>
               </div>
            </div>

            <Typography variant="body" className="text-slate-500 text-sm font-bold uppercase mb-4 tracking-wider">Select Date & Time</Typography>
            
            {/* Calendar Strip (Simplified) */}
            <div className="flex justify-between items-center mb-6">
               <button className="p-2 hover:bg-slate-100 rounded-full"><ChevronLeft className="w-4 h-4 text-slate-400" /></button>
               <span className="font-semibold text-slate-900">December 2025</span>
               <button className="p-2 hover:bg-slate-100 rounded-full"><ChevronRight className="w-4 h-4 text-slate-400" /></button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-6 text-center">
               {['S','M','T','W','T','F','S'].map((d, i) => (
                 <div key={i} className="text-xs text-slate-400 font-medium pb-2">{d}</div>
               ))}
               {Array.from({length: 31}).map((_, i) => (
                 <button 
                   key={i} 
                   onClick={() => setSelectedDate(new Date(2025, 11, i+1))}
                   className={cn(
                     "w-8 h-8 rounded-full text-sm flex items-center justify-center transition-colors",
                     (i+1) === selectedDate.getDate() 
                       ? "bg-slate-900 text-white shadow-md" 
                       : "text-slate-600 hover:bg-slate-100"
                   )}
                 >
                   {i + 1}
                 </button>
               ))}
            </div>

            {/* Time Slots */}
            <div className="space-y-3">
              <div className="text-xs font-medium text-slate-400">Available Times</div>
              <div className="grid grid-cols-2 gap-3">
                {generateSlots(selectedDate).map(time => (
                  <button
                    key={time}
                    onClick={() => { setSelectedTime(time); setStep('confirm'); }}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium border transition-all text-center",
                      selectedTime === time
                        ? "border-slate-900 bg-slate-900 text-white shadow-md"
                        : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === 'confirm' && (
          <motion.div 
            key="confirm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col p-8 justify-center"
          >
             <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto">
                   <CalendarIcon className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <Typography variant="h3" className="text-slate-900 mb-2">Confirm Booking</Typography>
                  <p className="text-slate-500">
                    Strategy Session with {leadName}<br/>
                    <strong className="text-slate-900">{selectedDate.toLocaleDateString()} at {selectedTime}</strong>
                  </p>
                </div>
                
                <div className="space-y-3 pt-4">
                  <Button variant="primary" size="lg" className="w-full justify-center" onClick={handleConfirm}>
                    Confirm Meeting
                  </Button>
                  <Button variant="ghost" className="w-full justify-center" onClick={() => setStep('select')}>
                    Back to Selection
                  </Button>
                </div>
             </div>
          </motion.div>
        )}

        {step === 'success' && (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col p-8 justify-center items-center text-center"
          >
             <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
             </div>
             <Typography variant="h3" className="text-slate-900 mb-2">You're Booked!</Typography>
             <p className="text-slate-500 mb-8 max-w-[260px]">
               A calendar invitation has been sent to <strong>{leadName}</strong>.
             </p>
             <Button variant="outline" onClick={onClose}>Close Window</Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Branding */}
      <div className="p-4 border-t border-slate-100 text-center">
         <div className="text-[10px] text-slate-300 font-medium uppercase tracking-widest flex items-center justify-center gap-1">
           Powered by Sun AI <Sparkles className="w-2 h-2" />
         </div>
      </div>
    </div>
  );
}
