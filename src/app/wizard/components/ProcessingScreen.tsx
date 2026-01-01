'use client';

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function ProcessingScreen() {
  const [dots, setDots] = useState('');
  const [message, setMessage] = useState('Analyzing your requirements');

  useEffect(() => {
    // Animated dots
    const dotsInterval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    // Changing messages
    const messages = [
      'Analyzing your requirements',
      'Generating project phases',
      'Calculating timeline estimates',
      'Creating budget breakdown',
      'Finalizing your proposal',
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length;
      setMessage(messages[messageIndex]);
    }, 4000);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-[40px] p-12 max-w-md mx-4 text-center shadow-2xl">
        {/* Animated Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-ping" />
            <div className="relative bg-indigo-500 rounded-full p-6">
              <Sparkles className="w-12 h-12 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-['Playfair_Display'] text-3xl font-light text-black mb-4">
          Creating your proposal
        </h2>

        {/* Dynamic Message */}
        <p className="text-sm font-light text-zinc-600 mb-2">
          {message}{dots}
        </p>

        {/* Time Estimate */}
        <p className="text-xs italic text-zinc-400">
          This usually takes 15-30 seconds
        </p>

        {/* Progress Bar */}
        <div className="mt-8 w-full h-1 bg-zinc-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 rounded-full animate-progress"
            style={{
              animation: 'progress 20s linear forwards'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 20s linear forwards;
        }
      `}</style>
    </div>
  );
}
