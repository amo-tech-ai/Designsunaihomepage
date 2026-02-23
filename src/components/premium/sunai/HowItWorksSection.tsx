import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  label?: string;
  title?: string;
  titleEmphasis?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  steps?: ProcessStep[];
  className?: string;
}

const defaultSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Onboarding',
    description: 'We align on your brand, design system goals, and tech stack to define the project scope and strategic approach.'
  },
  {
    number: 2,
    title: 'Team assignment',
    description: "You're matched with a consistent team, including a Design System Creative Lead, Designer, and Project Manager."
  },
  {
    number: 3,
    title: 'System audit or planning',
    description: 'We audit your existing system or plan a new one with design input from your team to define the foundational elements, components, and documentation needed.'
  },
  {
    number: 4,
    title: 'Architecture and component design',
    description: 'We create scalable styles and components to ensure consistency and ease of use for internal teams and external contributors.'
  },
  {
    number: 5,
    title: 'Collaboration and documentation',
    description: 'Through Supernova, we manage feedback, approvals, and delivery. All components are supported by comprehensive documentation and organized for seamless adoption.'
  },
  {
    number: 6,
    title: 'Integration and handoff',
    description: 'We prepare your system for smooth integration into Figma, Storybook, or custom tools, following best practices and your team\'s specific requirements.'
  },
  {
    number: 7,
    title: 'Ongoing support',
    description: 'We support continuous improvement with new components, system updates, and adaptations as your brand evolves.'
  }
];

export function HowItWorksSection({
  label = 'HOW WE WORK',
  title = 'A proven process for',
  titleEmphasis = 'speed, scale, and alignment',
  description = 'Our workflow is built for seamless collaboration between your team and ours, maintaining surprises and maximizing outcomes.',
  ctaText = 'Book a demo',
  ctaHref = '/booking',
  steps = defaultSteps,
  className = ''
}: HowItWorksSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className={`
        relative
        py-20 md:py-28 lg:py-32
        px-6 md:px-12 lg:px-16
        bg-gradient-to-br from-[#0F2729] via-[#1A3436] to-[#0D2224]
        overflow-hidden
        ${className}
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Column - Heading & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-24"
          >
            {/* Label */}
            <div className="mb-6">
              <span className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-emerald-300/80
                font-semibold
                border-b border-emerald-300/30
                pb-1
                inline-block
              ">
                {label}
              </span>
            </div>

            {/* Title */}
            <h2 className="
              text-4xl md:text-5xl lg:text-[56px]
              leading-[1.1]
              tracking-tight
              text-white
              mb-6
            ">
              {title}
              <br />
              <em className="font-light italic text-white/90">
                {titleEmphasis}
              </em>
            </h2>

            {/* Description */}
            <p className="
              text-base md:text-lg
              leading-relaxed
              text-white/70
              mb-8
              max-w-[480px]
            ">
              {description}
            </p>

            {/* CTA Button */}
            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="
                inline-flex items-center justify-center
                px-8 py-3.5
                bg-[#D4F14E]
                text-[#0F2729]
                rounded-full
                font-semibold
                text-sm
                tracking-wide
                transition-all duration-200
                hover:bg-[#E0F76E]
                hover:shadow-lg hover:shadow-emerald-500/20
              "
            >
              {ctaText}
            </motion.a>
          </motion.div>

          {/* Right Column - Process Steps */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="
              absolute left-[15px] top-[28px] bottom-[28px]
              w-[1px]
              bg-gradient-to-b from-emerald-500/40 via-emerald-400/20 to-transparent
            " />

            {/* Steps */}
            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative flex gap-6 group"
                >
                  {/* Number Circle */}
                  <div className="
                    flex-shrink-0
                    w-8 h-8
                    rounded-full
                    border border-emerald-400/40
                    bg-[#0F2729]
                    flex items-center justify-center
                    relative
                    z-10
                    transition-all duration-300
                    group-hover:border-emerald-400
                    group-hover:bg-emerald-500/10
                  ">
                    <span className="
                      text-xs
                      font-semibold
                      text-emerald-300
                      transition-colors duration-300
                      group-hover:text-emerald-200
                    ">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-0.5">
                    <h3 className="
                      text-lg md:text-xl
                      font-normal
                      text-white
                      mb-2
                      tracking-tight
                      transition-colors duration-300
                      group-hover:text-emerald-200
                    ">
                      {step.title}
                    </h3>
                    <p className="
                      text-sm md:text-base
                      leading-relaxed
                      text-white/60
                      transition-colors duration-300
                      group-hover:text-white/80
                    ">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}