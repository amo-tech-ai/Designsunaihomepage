import { motion } from 'motion/react';
import { Building2, Target, Settings, Users, Database, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface MaturityStage {
  id: string;
  title: string;
  description: string;
  color: string;
  position: number; // 0-100 for timeline
}

interface MaturityCategory {
  icon: typeof Building2;
  title: string;
  subtitle: string;
  stages: {
    laggard: string[];
    scaling: string[];
    futureBuilt: string[];
  };
}

interface AIMaturitySectionProps {
  title?: string;
  subtitle?: string;
  stages?: MaturityStage[];
  categories?: MaturityCategory[];
  className?: string;
}

const defaultStages: MaturityStage[] = [
  {
    id: 'laggard',
    title: 'Foundation',
    description: 'Establish core AI capabilities and infrastructure',
    color: '#E8F5E9',
    position: 15
  },
  {
    id: 'scaling',
    title: 'Move up to scaling',
    description: 'Develop AI strategy, advance AI capabilities, and scale AI effectively',
    color: '#B8E6C0',
    position: 50
  },
  {
    id: 'futureBuilt',
    title: 'Move up to future-built',
    description: 'Take the forefront of AI innovation and cutting-edge AI capabilities, generating substantial value',
    color: '#34C759',
    position: 85
  }
];

const defaultCategories: MaturityCategory[] = [
  {
    icon: Building2,
    title: 'Pursue a multiyear',
    subtitle: 'strategic ambition',
    stages: {
      laggard: [
        'Define AI vision and identify initial use cases',
        'Establish baseline metrics and success criteria'
      ],
      scaling: [
        'Set up an AI program with an ambitious top-down value target',
        'Ensure leadership commitment to AI transformation and tactical usage'
      ],
      futureBuilt: [
        'Focus on achieving the concrete path to value that you defined',
        'Advance in forward-looking capabilities such as agentic AI'
      ]
    }
  },
  {
    icon: Target,
    title: 'Reshape and invent',
    subtitle: 'with impact',
    stages: {
      laggard: [
        'Identify quick-win opportunities for AI implementation',
        'Build cross-functional awareness and alignment'
      ],
      scaling: [
        'Prioritize high-ROI workflows in a rigorously tracked roadmap',
        'Select one or two business domains for end-to-end AI-first redesigns'
      ],
      futureBuilt: [
        'Scale AI workflows to unlock P&L impact across functions',
        'Invent new end-to-end AI-first workflows to shape the market'
      ]
    }
  },
  {
    icon: Settings,
    title: 'Implement an AI-first',
    subtitle: 'operating model',
    stages: {
      laggard: [
        'Assign AI champions within key business units',
        'Create basic governance and ethical AI guidelines'
      ],
      scaling: [
        'Establish an AI delivery office as accelerator tracking progress and value',
        'Set up joint business/IT teams for prioritized workflows with clear KPIs'
      ],
      futureBuilt: [
        'Scale the AI ecosystem with long-term partnerships so all participants have skin in the game',
        'Empower teams to own AI solutions with joint business/IT ownership'
      ]
    }
  },
  {
    icon: Users,
    title: 'Secure and enable',
    subtitle: 'necessary talent',
    stages: {
      laggard: [
        'Assess current AI skill gaps across the organization',
        'Launch foundational AI literacy programs'
      ],
      scaling: [
        'Support practical application of AI tools in day-to-day work',
        'Start an AI upskilling effort with protected time'
      ],
      futureBuilt: [
        'Ensure enterprise-wide access and adoption of AI tools and workflows',
        'Double down on workforce transformation to prepare for agentic AI'
      ]
    }
  },
  {
    icon: Database,
    title: 'Use fit-for-purpose',
    subtitle: 'technology and data',
    stages: {
      laggard: [
        'Audit data quality and accessibility for AI readiness',
        'Implement basic data governance frameworks'
      ],
      scaling: [
        'Define guardrails and set up for a scalable, modular AI architecture',
        'Leverage AI workflows to implement and enhance the AI architecture'
      ],
      futureBuilt: [
        'Drive enterprise-wide deployment of AI platforms at scale',
        'Refine data and architecture management to increase effectiveness'
      ]
    }
  }
];

function StageCard({ 
  category, 
  stageId, 
  isActive 
}: { 
  category: MaturityCategory; 
  stageId: 'laggard' | 'scaling' | 'futureBuilt';
  isActive: boolean;
}) {
  const Icon = category.icon;
  const bullets = category.stages[stageId];

  return (
    <motion.div
      className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#E5E7E6]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ 
        y: -2,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
      }}
    >
      {bullets.map((bullet, idx) => (
        <div key={idx} className="flex items-start gap-3 mb-3 last:mb-0">
          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#34C759] mt-2" />
          <p className="text-[14px] leading-[1.6] text-[#4A5250]">
            {bullet}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

function CategoryRow({ category, activeStage }: { category: MaturityCategory; activeStage: string }) {
  const Icon = category.icon;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 mb-8 last:mb-0">
      {/* Category Header */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#E8F5E9] flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#1A3A32]" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-[18px] leading-[1.3] font-normal text-[#1F2421] mb-1">
            {category.title}
          </h3>
          <p className="text-[15px] leading-[1.3] text-[#6B7370]">
            {category.subtitle}
          </p>
        </div>
      </div>

      {/* Stage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StageCard category={category} stageId="laggard" isActive={activeStage === 'laggard'} />
        <StageCard category={category} stageId="scaling" isActive={activeStage === 'scaling'} />
        <StageCard category={category} stageId="futureBuilt" isActive={activeStage === 'futureBuilt'} />
      </div>
    </div>
  );
}

function TimelineProgress({ stages, activeStage }: { stages: MaturityStage[]; activeStage: string }) {
  return (
    <div className="relative mt-16 mb-8">
      {/* Background line */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E5E7E6] via-[#B8E6C0] to-[#34C759] -translate-y-1/2" />

      {/* Stage markers */}
      <div className="relative flex justify-between items-center">
        {stages.map((stage, index) => {
          const isActive = activeStage === stage.id;
          const isPast = stages.findIndex(s => s.id === activeStage) > index;

          return (
            <motion.div
              key={stage.id}
              className="flex flex-col items-center"
              style={{ width: `${100 / stages.length}%` }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Marker dot */}
              <motion.div
                className="relative z-10 rounded-full border-4 bg-white"
                style={{
                  width: isActive ? 20 : 12,
                  height: isActive ? 20 : 12,
                  borderColor: isActive || isPast ? stage.color : '#E5E7E6'
                }}
                whileHover={{ scale: 1.3 }}
              />

              {/* Label */}
              <div className="mt-4 text-center max-w-[140px]">
                <p 
                  className="text-[13px] font-medium mb-1"
                  style={{ color: isActive ? '#1F2421' : '#6B7370' }}
                >
                  {stage.title}
                </p>
                <p className="text-[11px] leading-[1.4] text-[#9CA6A3]">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function AIMaturitySection({
  title = 'The Future-Built Playbook for Climbing the AI Maturity Curve',
  subtitle = 'A strategic framework for enterprise AI transformation',
  stages = defaultStages,
  categories = defaultCategories,
  className = ''
}: AIMaturitySectionProps) {
  const [activeStage, setActiveStage] = useState('scaling');

  return (
    <section className={`py-20 md:py-24 lg:py-28 px-6 md:px-12 lg:px-16 bg-[#FAF8F5] ${className}`}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#E8F5E9] rounded-full">
              <Sparkles className="w-4 h-4 text-[#34C759]" strokeWidth={2} />
              <span className="text-[12px] font-medium text-[#1A3A32] tracking-wide uppercase">
                Strategic Framework
              </span>
            </div>
          </div>
          <h2
            className="text-[36px] md:text-[42px] lg:text-[52px] leading-[1.15] font-normal text-[#1F2421] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {title}
          </h2>
          <p className="text-[17px] md:text-[18px] leading-[1.6] text-[#6B7370] max-w-[800px]">
            {subtitle}
          </p>
        </div>

        {/* Stage Headers */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 mb-12">
          <div /> {/* Spacer for alignment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stages.map((stage) => (
              <motion.div
                key={stage.id}
                className="relative rounded-xl p-6 cursor-pointer"
                style={{ backgroundColor: stage.color }}
                whileHover={{ y: -2 }}
                onClick={() => setActiveStage(stage.id)}
              >
                <h3 className="text-[18px] leading-[1.3] font-medium text-[#1A3A32] mb-2">
                  {stage.title}
                </h3>
                <p className="text-[14px] leading-[1.5] text-[#4A5250]">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categories and Cards */}
        <div className="space-y-8">
          {categories.map((category, index) => (
            <CategoryRow key={index} category={category} activeStage={activeStage} />
          ))}
        </div>

        {/* Timeline Progress */}
        <TimelineProgress stages={stages} activeStage={activeStage} />

        {/* Source Attribution */}
        <div className="mt-12 pt-8 border-t border-[#E5E7E6]">
          <p className="text-[13px] text-[#9CA6A3]">
            Source: Strategic AI framework analysis
          </p>
        </div>
      </div>
    </section>
  );
}
