import { SolutionCard } from './SolutionCard';

interface Solution {
  title: string;
  description: string;
  variant?: 'dark' | 'mint' | 'light-mint';
}

interface SolutionsSectionProps {
  title?: string;
  subtitle?: string;
  solutions?: Solution[];
  className?: string;
}

const defaultSolutions: Solution[] = [
  {
    title: 'BCG X',
    description: 'BCG X is the tech build and design unit of BCG. We bring a uniquely holistic approach that combines product design, engineering, and strategy to unlock growth and drive competitive advantage.',
    variant: 'dark'
  },
  {
    title: "BCG's Center for Growth and Innovation Analytics",
    description: "BCG's Center for Growth and Innovation Analytics > Our center helps identify the most attractive areas for innovation investment with its proprietary advanced analytics tools and data sets.",
    variant: 'mint'
  },
  {
    title: 'B Capital',
    description: 'B Capital is a global multi-stage investment firm partnering with entrepreneurs to build iconic companies. Founded by BCG alumni, B Capital combines strategic insights with operational expertise.',
    variant: 'light-mint'
  }
];

export function SolutionsSection({ 
  title = 'Our Partnerships and Solutions',
  subtitle = "We bring best-in-class consulting expertise to bear on every engagement and complement it with critical capabilities from BCG's broader innovation ecosystem:",
  solutions = defaultSolutions,
  className = ''
}: SolutionsSectionProps) {
  return (
    <section className={`
      py-20 md:py-28 lg:py-32
      px-6 md:px-12 lg:px-16
      bg-white
      ${className}
    `}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-[900px]">
          <h2 className="
            text-3xl md:text-4xl lg:text-5xl
            tracking-tight
            mb-6
            text-neutral-900
          ">
            {title}
          </h2>
          
          <p className="
            text-base md:text-lg
            leading-relaxed
            text-neutral-600
            max-w-[700px]
          ">
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-6 md:gap-8
        ">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              variant={solution.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
