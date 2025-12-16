import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Target, Workflow, Calendar, FileText, Check } from 'lucide-react';

interface AIProcessingScreenProps {
  onComplete?: () => void;
}

const steps = [
  {
    id: 1,
    icon: Globe,
    title: 'Analyzing Your Website & Social Links',
    description: 'Reviewing your URLs using AI-powered context analysis.',
    duration: 2000,
  },
  {
    id: 2,
    icon: Target,
    title: 'Understanding Your Project Goals',
    description: 'Interpreting your goals and desired outcomes.',
    duration: 2500,
  },
  {
    id: 3,
    icon: Workflow,
    title: 'Structuring Requirements',
    description: 'Organizing features, workflows, and integrations.',
    duration: 2500,
  },
  {
    id: 4,
    icon: Calendar,
    title: 'Estimating Timeline & Budget Fit',
    description: 'Calculating a realistic delivery plan.',
    duration: 2000,
  },
  {
    id: 5,
    icon: FileText,
    title: 'Generating Your Proposal',
    description: 'Creating a detailed scope, deliverables, and tech stack.',
    duration: 3000,
  },
];

export function AIProcessingScreen({ onComplete }: AIProcessingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    if (currentStep >= steps.length) {
      // All steps complete
      const timer = setTimeout(() => {
        onComplete?.();
      }, 1000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
    }, steps[currentStep].duration);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  const progress = ((currentStep) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F9FB] via-white to-[#F7F9FB] flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-[48px] md:text-[56px] leading-[1.1] text-[#202020] mb-4"
            style={{ fontWeight: 600 }}
          >
            Sun AI is generating your proposal…
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#555] leading-[1.7] max-w-2xl mx-auto">
            Please wait a few seconds while we analyze your company, project goals, and requirements.
          </p>
        </motion.div>

        {/* Animated AI Visual Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Outer Glow Ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.15, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF6A3D] to-[#00334F] blur-3xl"
            />

            {/* Middle Ring */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute inset-8 rounded-full bg-gradient-to-br from-[#00334F] to-[#FF6A3D] blur-2xl"
            />

            {/* Core Orb */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-12 rounded-full bg-gradient-to-br from-[#FF6A3D] via-[#FF8A4F] to-[#00334F] shadow-2xl"
            >
              {/* Inner Shimmer */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.3) 100%)',
                }}
              />
            </motion.div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-20, 20, -20],
                  x: [
                    Math.cos((i * Math.PI * 2) / 6) * 30,
                    Math.cos((i * Math.PI * 2) / 6) * 50,
                    Math.cos((i * Math.PI * 2) / 6) * 30,
                  ],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4F]"
                style={{
                  top: `${50 + Math.sin((i * Math.PI * 2) / 6) * 40}%`,
                  left: `${50 + Math.cos((i * Math.PI * 2) / 6) * 40}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isCompleted = completedSteps.includes(index);
              const isActive = currentStep === index;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div
                    className={`relative p-6 rounded-2xl transition-all duration-500 ${
                      isActive
                        ? 'bg-white shadow-lg border-2 border-[#FF6A3D]'
                        : isCompleted
                        ? 'bg-white shadow-md border border-[#E9EAEE]'
                        : 'bg-white/50 border border-[#E9EAEE] opacity-60'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          isCompleted
                            ? 'bg-gradient-to-br from-[#00334F] to-[#005578] text-white'
                            : isActive
                            ? 'bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4F] text-white'
                            : 'bg-[#F7F9FB] text-[#999]'
                        }`}
                      >
                        <AnimatePresence mode="wait">
                          {isCompleted ? (
                            <motion.div
                              key="check"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Check size={24} />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="icon"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                            >
                              <Icon size={24} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-[18px] mb-1 transition-colors duration-500 ${
                            isActive || isCompleted ? 'text-[#202020]' : 'text-[#999]'
                          }`}
                          style={{ fontWeight: 600 }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-[14px] leading-[1.6] transition-colors duration-500 ${
                            isActive || isCompleted ? 'text-[#555]' : 'text-[#999]'
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex-shrink-0"
                        >
                          <div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                                className="w-2 h-2 rounded-full bg-[#FF6A3D]"
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Active Glow */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6A3D]/10 via-transparent to-[#FF6A3D]/10 pointer-events-none"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="h-2 bg-[#E9EAEE] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-[#FF6A3D] via-[#FF8A4F] to-[#FF6A3D] rounded-full relative"
            >
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <p className="text-[14px] text-[#999] mb-4">
            Your proposal will open automatically when it&apos;s ready.
          </p>
          
          {currentStep >= steps.length && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={onComplete}
              className="px-6 py-3 bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white rounded-full hover:shadow-lg transition-all"
              style={{ fontWeight: 600 }}
            >
              Continue to Proposal
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
