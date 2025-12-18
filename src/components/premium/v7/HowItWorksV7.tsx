import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { FileText, Scan, FileCheck, Calendar, Rocket } from 'lucide-react';
import { Typography } from '../../ui/design-system/Typography';
import { Card } from '../../ui/design-system/Card';

const steps = [
  {
    id: "brief",
    icon: FileText,
    title: "Brief",
    description: "Tell us about your business goals and vision.",
    number: "01"
  },
  {
    id: "analysis",
    icon: Scan,
    title: "Analysis",
    description: "Our AI evaluates opportunities and requirements.",
    number: "02"
  },
  {
    id: "proposal",
    icon: FileCheck,
    title: "Proposal",
    description: "Receive a clear scope, timeline, and pricing.",
    number: "03"
  },
  {
    id: "booking",
    icon: Calendar,
    title: "Booking",
    description: "Schedule your strategy session to kick off.",
    number: "04"
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Launch",
    description: "We build, deploy, and optimize your system.",
    number: "05"
  }
];

export function HowItWorksV7() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform progress to line length (0 to 100%)
  const lineFill = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="bg-warm-white py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <Typography variant="caption" className="text-orange-500 font-bold mb-4">
            How It Works
          </Typography>
          <Typography variant="h2" className="text-slate-900 mb-6">
            From Idea to Revenue
          </Typography>
          <Typography variant="body" className="text-lg text-slate-500">
            Our intelligent process streamlines development, delivering production-ready AI systems in record time.
          </Typography>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          
          {/* Background Line (Gray) */}
          <div className="absolute top-12 left-0 w-full h-1 bg-slate-100 rounded-full" />
          
          {/* Active Line (Orange) - Animated */}
          <motion.div 
            className="absolute top-12 left-0 h-1 bg-orange-500 rounded-full origin-left z-0"
            style={{ width: lineFill }}
          />

          <div className="grid grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              // Stagger fade in based on scroll
              const fadeStart = 0.1 + (index * 0.15);
              const fadeEnd = fadeStart + 0.15;
              const opacity = useTransform(scrollYProgress, [fadeStart, fadeEnd], [0.3, 1]);
              const y = useTransform(scrollYProgress, [fadeStart, fadeEnd], [20, 0]);
              const scale = useTransform(scrollYProgress, [fadeStart, fadeEnd], [0.95, 1]);

              // Check if step is active for coloring
              const isPast = useTransform(scrollYProgress, [fadeEnd], [0]); // Determine if line passed

              return (
                <motion.div 
                  key={step.id}
                  style={{ opacity, y, scale }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon Circle */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center relative z-10 transition-colors duration-500 group-hover:border-orange-200 group-hover:shadow-orange-500/10">
                      <step.icon className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-colors duration-300" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-2">
                    <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden relative pl-8">
          
          {/* Vertical Line */}
          <div className="absolute top-0 left-4 w-1 h-full bg-slate-100 rounded-full" />
          
          {/* Active Vertical Line */}
          <motion.div 
            className="absolute top-0 left-4 w-1 bg-orange-500 rounded-full origin-top"
            style={{ height: lineFill }}
          />

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => {
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Dot on Line */}
                  <div className="absolute -left-[2.1rem] top-4 w-4 h-4 rounded-full bg-white border-2 border-orange-500 shadow-sm z-20" />

                  <Card variant="solid" className="flex-1 p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-heading text-lg font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <span className="text-xs font-bold text-slate-300">
                          {step.number}
                        </span>
                      </div>
                      <p className="font-body text-sm text-slate-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
