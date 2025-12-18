import React, { useState } from 'react';
import { Button } from '../ui/design-system/Button';
import { Typography } from '../ui/design-system/Typography';
import { Card } from '../ui/design-system/Card';
import { Badge } from '../ui/design-system/Badge';
import { Calendar, CreditCard, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck, Lock } from 'lucide-react';

import { FooterV7 } from '../premium/v7/FooterV7';
import { NavbarV7 } from '../premium/v7/NavbarV7';

export function BookingPage({ onNavigateToHome, onVersionChange, onConfirm }: { onNavigateToHome?: () => void, onVersionChange?: (version: any) => void, onConfirm?: () => void }) {
  const [selectedDate, setSelectedDate] = useState<number | null>(18);
  const [selectedTime, setSelectedTime] = useState<string | null>('10:00 AM');

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '04:00 PM'];

  return (
    <div className="min-h-screen bg-warm-white text-slate-900">
      <NavbarV7 onNavigateToAbout={() => onVersionChange?.('about')} onVersionChange={onVersionChange} />
      
      <div className="p-6 md:p-12 pt-28">
        <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <Button variant="ghost" onClick={onNavigateToHome} className="mb-4 pl-0 text-slate-500 hover:bg-transparent hover:text-orange-500">
              ← Back to Dashboard
            </Button>
            <Typography variant="h2" className="text-slate-900">Book Your Strategy Session</Typography>
            <Typography variant="body" className="text-slate-500 mt-2">
              Select a time to discuss your AI roadmap with our lead architect.
            </Typography>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-white">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              Available Now
            </Badge>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- Left: Calendar Selection (Cols 7) --- */}
          <section className="lg:col-span-7 space-y-8">
            <Card variant="solid" className="p-8 bg-white border-slate-200">
              
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-8">
                <Typography variant="h4">December 2025</Typography>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><ChevronLeft className="w-5 h-5 text-slate-500" /></button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><ChevronRight className="w-5 h-5 text-slate-500" /></button>
                </div>
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-2 mb-8 text-center">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                  <div key={d} className="text-xs font-bold text-slate-400 py-2">{d}</div>
                ))}
                
                {/* Empty slots for start of month */}
                <div /><div />

                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`
                      aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all
                      ${selectedDate === day 
                        ? 'bg-slate-900 text-white shadow-lg scale-110' 
                        : 'text-slate-700 hover:bg-slate-100'
                      }
                      ${[5, 12, 19, 26].includes(day) ? 'opacity-30 pointer-events-none line-through decoration-slate-300' : ''} 
                    `}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Time Slots */}
              <div className="pt-8 border-t border-slate-100">
                <Typography variant="body-sm" className="font-bold text-slate-500 mb-4 uppercase tracking-wider">Available Times</Typography>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        py-3 px-4 rounded-xl border-2 text-sm font-bold transition-all
                        ${selectedTime === time 
                          ? 'border-orange-500 bg-orange-50 text-orange-600' 
                          : 'border-slate-100 bg-white text-slate-600 hover:border-slate-300'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          {/* --- Right: Summary & Payment (Cols 5) --- */}
          <section className="lg:col-span-5 space-y-6">
            <Card variant="glass" className="p-8 space-y-8 border-orange-200 shadow-orange-500/5 bg-white/60 sticky top-28">
              
              <div>
                <Typography variant="caption" className="text-slate-400 mb-2">Booking Summary</Typography>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0">
                    <span className="font-bold text-lg">{selectedDate}</span>
                  </div>
                  <div>
                    <Typography variant="h4" className="text-slate-900">Dec {selectedDate}, 2025</Typography>
                    <Typography variant="body" className="text-slate-500 text-sm">at {selectedTime} (1 Hour)</Typography>
                  </div>
                </div>
                <div className="py-4 border-t border-b border-slate-200/60 flex justify-between items-center relative">
                  <div>
                    <span className="font-medium text-slate-700 block">Strategy Session</span>
                    <Badge variant="success" className="mt-1 text-[10px] py-0">Highly Recommended</Badge>
                  </div>
                  <span className="font-bold text-xl text-slate-900">$500.00</span>
                </div>
              </div>
              
              {/* Payment Mock */}
              <div className="space-y-4">
                <Typography variant="caption" className="text-slate-400">Payment Details</Typography>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Card Number" 
                    className="w-full p-4 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-300 outline-none focus:border-orange-500 transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-full p-4 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-300 outline-none focus:border-orange-500 transition-colors"
                    />
                     <input 
                      type="text" 
                      placeholder="CVC" 
                      className="w-full p-4 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-300 outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <Button variant="primary" className="w-full h-14 text-lg" onClick={onConfirm}>
                  Pay & Confirm
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-2">
                  <Lock className="w-3 h-3" />
                  <span>Payments secured by Stripe</span>
                </div>
              </div>
              
            </Card>

            {/* Guarantee Badge */}
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
               <ShieldCheck className="w-5 h-5 text-emerald-500" />
               <div className="text-xs text-slate-600">
                 <span className="font-bold block text-slate-900">100% Satisfaction Guarantee</span>
                 If you're not happy with the roadmap, we refund the session fee.
               </div>
            </div>

          </section>

        </div>
      </div>
      </div>
      
      <FooterV7 onNavigateToAbout={() => onVersionChange?.('about')} onVersionChange={onVersionChange} />
    </div>
  );
}
