import { motion } from 'motion/react';
import { ArrowRight, Box, Code2, Rocket, Search } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Search,
    title: 'Define',
    description: 'Scope, requirements, data analysis',
  },
  {
    id: 2,
    icon: Box,
    title: 'Design',
    description: 'Systems architecture, flows',
  },
  {
    id: 3,
    icon: Code2,
    title: 'Build',
    description: 'Agents, workflows, integrations',
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Launch',
    description: 'Testing, tuning, deployment',
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#00334F] mb-6">
            How It Works
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A streamlined, AI-assisted workflow designed to move from concept to production with unprecedented speed and precision.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-slate-100 z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#FF6B2C] to-[#FF9E7D]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-lg flex items-center justify-center mb-8 relative z-10 group-hover:border-[#FF6B2C]/20 transition-all duration-500">
                    <div className="w-20 h-20 rounded-full bg-[#F8F9FA] flex items-center justify-center group-hover:bg-[#FFF5F0] transition-colors duration-500">
                      <Icon className="w-8 h-8 text-[#00334F] group-hover:text-[#FF6B2C] transition-colors duration-500" />
                    </div>
                    {/* Active Dot */}
                    <div className="absolute -top-2 w-4 h-4 rounded-full bg-[#FF6B2C] border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-sm" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#00334F] mb-3 group-hover:text-[#FF6B2C] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
