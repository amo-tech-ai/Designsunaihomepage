import { Bot, Workflow, BarChart3, ShieldCheck } from 'lucide-react';

export function FeaturesV7() {
  const features = [
    {
      icon: Bot,
      title: "AI Agents",
      desc: "Deploy autonomous agents that handle complex tasks 24/7 without supervision."
    },
    {
      icon: Workflow,
      title: "Smart Workflows",
      desc: "Connect your favorite apps and let AI handle the data flow between them."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      desc: "Turn historical data into accurate forecasts for better decision making."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      desc: "Bank-grade encryption and compliance built into every tool you create."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            What we are building today
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
             Powerful tools designed to modernize your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF6A3D] mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
