'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Sparkles, Loader2 } from 'lucide-react';

export default function ProcessingPage() {
  const navigate = useNavigate();
  const searchParams = useSearchParams();
  const jobId = searchParams.get('job');
  
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    { id: 1, label: 'Analyzing requirements', duration: 2000 },
    { id: 2, label: 'Designing architecture', duration: 3000 },
    { id: 3, label: 'Generating proposal', duration: 3000 },
    { id: 4, label: 'Finalizing blueprint', duration: 2000 }
  ];

  useEffect(() => {
    // Simulate AI processing
    let stepIndex = 0;
    let progressValue = 0;

    const stepInterval = setInterval(() => {
      if (stepIndex < steps.length) {
        setCurrentStep(stepIndex);
        stepIndex++;
      } else {
        clearInterval(stepInterval);
        // Redirect to proposal after completion
        setTimeout(() => {
          navigate('/proposal?id=mock-proposal-id');
        }, 1000);
      }
    }, 2500);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 
      flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-12"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles className="w-8 h-8 text-orange-500" />
            </motion.div>
            
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              Generating Your Blueprint
            </h1>
            <p className="text-lg text-slate-600">
              Our AI is architecting your custom proposal...
            </p>
          </div>

          {/* Progress Steps */}
          <div className="space-y-4 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  flex items-center gap-4 p-4 rounded-lg transition-all
                  ${index === currentStep 
                    ? 'bg-orange-50 border-2 border-orange-200' 
                    : index < currentStep 
                      ? 'bg-emerald-50 border-2 border-emerald-200'
                      : 'bg-slate-50 border-2 border-slate-200'
                  }
                `}
              >
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${index === currentStep 
                    ? 'bg-orange-500 text-white' 
                    : index < currentStep 
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-300 text-slate-600'
                  }
                `}>
                  {index < currentStep ? '✓' : step.id}
                </div>
                
                <div className="flex-1">
                  <p className={`
                    font-medium
                    ${index === currentStep 
                      ? 'text-orange-900' 
                      : index < currentStep 
                        ? 'text-emerald-900'
                        : 'text-slate-600'
                    }
                  `}>
                    {step.label}
                  </p>
                </div>

                {index === currentStep && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="w-5 h-5 text-orange-500" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Time Remaining */}
          <div className="text-center">
            <p className="text-sm text-slate-500">
              Estimated time: <span className="font-medium text-slate-700">
                {Math.max(0, Math.ceil((100 - progress) / 10))} seconds
              </span>
            </p>
          </div>
        </motion.div>

        {/* Job ID (for debugging) */}
        {jobId && (
          <p className="text-center text-xs text-slate-400 mt-4">
            Job ID: {jobId}
          </p>
        )}
      </div>
    </div>
  );
}