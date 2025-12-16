import { motion } from 'motion/react';
import { Database, Bot, Workflow, Sparkles } from 'lucide-react';
import { StepCard } from './StepCard';

const processSteps = [
  {
    id: 'inputs',
    stepNumber: 'Step 01',
    title: 'Inputs',
    icon: Database,
    description: 'Data, APIs, and contextual signals that feed the system.',
    gradientFrom: '#00334F',
    gradientTo: '#0A4A6A',
  },
  {
    id: 'agents',
    stepNumber: 'Step 02',
    title: 'Agents',
    icon: Bot,
    description: 'AI reasoning, decision-making, and multi-agent collaboration.',
    gradientFrom: '#FF6A3D',
    gradientTo: '#FF855F',
  },
  {
    id: 'workflows',
    stepNumber: 'Step 03',
    title: 'Workflows',
    icon: Workflow,
    description: 'Automation pipelines orchestrating agents, data, and logic.',
    gradientFrom: '#006A83',
    gradientTo: '#00A0B8',
  },
  {
    id: 'outputs',
    stepNumber: 'Step 04',
    title: 'Outputs',
    icon: Sparkles,
    description: 'Final results: actions, tasks, reports, predictions, insights.',
    gradientFrom: '#FF6A3D',
    gradientTo: '#F1451F',
  },
];

const Connector = () => (
  <div className="hidden lg:flex items-center justify-center w-12 xl:w-24 shrink-0 opacity-30 self-center pb-20">
    <svg width="100%" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M0 12H90" 
        stroke="#5A5F63" 
        strokeWidth="2" 
        strokeDasharray="4 4"
      />
      <path 
        d="M90 7L100 12L90 17" 
        stroke="#5A5F63" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export function ProcessDiagram() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#F5F5F5]">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-[#00334F] text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            How Sun AI Works
          </h2>
          <p className="text-lg text-slate-600">
            A seamless flow from raw data to intelligent action.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          {processSteps.map((step, index) => (
            <div key={step.id} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <StepCard
                  stepNumber={step.stepNumber}
                  title={step.title}
                  icon={step.icon}
                  description={step.description}
                  gradientFrom={step.gradientFrom}
                  gradientTo={step.gradientTo}
                />
              </motion.div>
              
              {/* Add Connector between cards, but not after the last one */}
              {index < processSteps.length - 1 && (
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                    className="hidden lg:block"
                >
                    <Connector />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
