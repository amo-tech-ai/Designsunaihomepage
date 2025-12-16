import { Brain, Rocket, Workflow } from 'lucide-react';

export function FeatureGrid() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Apps That Think',
      description: 'We design AI products that understand context, reason through data, and act autonomously—powered by custom LLM workflows, RAG, embeddings, and multi-agent systems.',
    },
    {
      icon: Rocket,
      title: 'Launch Fast With Proven Systems',
      description: 'Go from concept to a working AI product in days using structured sprints, rapid prototyping, and real-world validation cycles.',
    },
    {
      icon: Workflow,
      title: 'Automate Everything Slowing You Down',
      description: 'Replace repetitive tasks with fully automated pipelines—saving hours per week and unlocking team productivity.',
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-10 border border-[rgba(0,0,0,0.08)] hover:shadow-xl transition-all"
                style={{ boxShadow: '0 12px 24px rgba(0,0,0,0.06)' }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00334F] to-[#00334F]/70 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-[28px] leading-[1.3] text-[#111111] mb-4" style={{ fontWeight: 500 }}>
                  {feature.title}
                </h3>
                
                <p className="text-[16px] leading-[1.7] text-[#6A6A6A]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
