import { Brain, Zap, Database, Code } from 'lucide-react';

export function TechStack() {
  const techColumns = [
    {
      icon: Brain,
      title: 'AI Models & Agents',
      items: ['Claude', 'GPT-4', 'Gemini', 'Custom LLMs'],
    },
    {
      icon: Zap,
      title: 'Automation',
      items: ['n8n', 'Make', 'Zapier', 'Custom Workflows'],
    },
    {
      icon: Database,
      title: 'Databases & Infra',
      items: ['Supabase', 'Postgres', 'Vector DBs', 'Cloud'],
    },
    {
      icon: Code,
      title: 'Frontend & Platforms',
      items: ['Webflow', 'React', 'Next.js', 'Dashboards'],
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(135deg, #00334F 0%, #0E0E11 100%)'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-[48px] leading-[1.2] text-white text-center mb-20" style={{ fontWeight: 400 }}>
          We Build With the Best Tools
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techColumns.map((column, index) => {
            const Icon = column.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex w-16 h-16 rounded-2xl bg-white/10 items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-[20px] text-white mb-6" style={{ fontWeight: 500 }}>
                  {column.title}
                </h3>
                
                <ul className="space-y-3">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-[16px] text-white/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
