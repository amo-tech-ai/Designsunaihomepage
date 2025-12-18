import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Workflow, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Users, 
  ShieldCheck, 
  Lightbulb, 
  Search, 
  Database, 
  Code2, 
  TestTube2, 
  Rocket, 
  Target,
  MessageSquare,
  Globe,
  Layers
} from 'lucide-react';
import { FooterV7 } from '../premium/v7/FooterV7';
import { NavbarV7 } from '../premium/v7/NavbarV7';

interface AboutUsPageProps {
  onNavigateToWhatsApp?: () => void;
  onVersionChange?: (version: any) => void;
}

export function AboutUsPage({ onNavigateToWhatsApp, onVersionChange }: AboutUsPageProps) {
  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onVersionChange={onVersionChange} />
      <HeroSection />
      <MissionSection />
      <SolutionsSection />
      <ProcessSection />
      <BenefitsSection />
      <UseCasesSection />
      <WhyChooseSection />
      <FinalCTASection />
      <FooterV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onVersionChange={onVersionChange} />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Soft Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl lg:text-7xl font-bold text-[#00334F] mb-6 tracking-tight leading-[1.1]"
        >
          We Are an AI <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A3D] to-[#FF8C69]">Development Agency</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Empowering businesses with intelligent AI solutions that automate operations, improve decisions, and scale growth.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button className="px-8 py-4 bg-[#FF6A3D] text-white font-bold rounded-xl hover:bg-[#E55A2F] transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20">
            Get Started with AI
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 bg-white border border-slate-200 text-[#00334F] font-bold rounded-xl hover:bg-slate-50 transition-all">
            Our Services
          </button>
        </motion.div>

        {/* Abstract Visual */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="relative max-w-4xl mx-auto"
        >
          <div className="aspect-[21/9] bg-gradient-to-br from-[#00334F] to-[#004E75] rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10 grid grid-cols-3 gap-8 p-12 w-full max-w-3xl">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                   <div className="w-10 h-10 rounded-full bg-white/10 mb-4 flex items-center justify-center">
                     <div className="w-4 h-4 rounded-full bg-[#FF6A3D] animate-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
                   </div>
                   <div className="h-2 w-16 bg-white/20 rounded mb-2" />
                   <div className="h-2 w-full bg-white/10 rounded" />
                 </div>
               ))}
               {/* Connecting Lines */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" stroke="white" strokeWidth="1">
                  <path d="M150 120 C 300 120, 300 120, 450 120" fill="none" strokeDasharray="5 5" />
                  <path d="M450 120 C 600 120, 600 120, 750 120" fill="none" strokeDasharray="5 5" />
               </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  const values = [
    { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries with cutting-edge AI." },
    { icon: Search, title: "Transparency", desc: "No black boxes. Clear, explainable AI." },
    { icon: ShieldCheck, title: "Security", desc: "Enterprise-grade data protection." },
    { icon: Users, title: "Collaboration", desc: "We build with you, not just for you." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#FF6A3D] font-bold text-sm uppercase tracking-wider mb-4 block">Our Mission</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6">
              Practical AI for <br/> Real Business Impact.
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Sun AI builds practical, production-ready AI systems that solve real business problems. We focus on automation, intelligence, and long-term value — not hype.
            </p>
            <button className="text-[#00334F] font-bold border-b-2 border-[#FF6A3D] pb-1 hover:text-[#FF6A3D] transition-colors">
              Learn More About Us
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#FF6A3D] mb-4">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#00334F] mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  const solutions = [
    { icon: MessageSquare, title: "AI Chat Agents", desc: "Automate customer support and internal workflows with intelligent agents." },
    { icon: Workflow, title: "Custom Automation", desc: "Replace manual processes with AI-powered workflows." },
    { icon: BarChart3, title: "AI Analytics", desc: "Turn raw data into insights, forecasts, and decisions." },
    { icon: TrendingUp, title: "Predictive AI", desc: "Anticipate trends, outcomes, and business risks." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#00334F] mb-4">Our AI Solutions</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Scalable, secure, and smart solutions tailored to your needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#FF6A3D]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#00334F] mb-6 group-hover:bg-[#FF6A3D] group-hover:text-white transition-colors">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#00334F] mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-[#FF6A3D] hover:gap-2 transition-all">
                Explore <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#00334F] text-white font-bold rounded-xl hover:bg-[#004466] transition-colors">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { icon: Search, title: "Discovery", desc: "Consultation & Strategy" },
    { icon: Database, title: "Integration", desc: "Data Setup & Design" },
    { icon: Code2, title: "Development", desc: "Model Building" },
    { icon: TestTube2, title: "Testing", desc: "Optimization & QA" },
    { icon: Rocket, title: "Deployment", desc: "Launch & Monitoring" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#00334F] mb-4">AI Development Process</h2>
          <p className="text-slate-500">From concept to production in 5 structured steps.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[2.5rem] left-0 w-full h-[2px] bg-slate-100">
            <div className="absolute top-0 left-0 h-full bg-[#FF6A3D] w-1/2 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-[#00334F] mb-6 shadow-sm group-hover:border-[#FF6A3D] group-hover:text-[#FF6A3D] transition-all relative z-10">
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:bg-[#FF6A3D] group-hover:text-white group-hover:border-[#FF6A3D] transition-colors">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#00334F] mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
           <button className="px-8 py-3 border border-slate-200 text-[#00334F] font-bold rounded-xl hover:bg-slate-50 transition-colors">
             Start Your AI Journey
           </button>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    { icon: Zap, title: "Efficiency", desc: "Automate repetitive work and save hours daily." },
    { icon: Layers, title: "Scalability", desc: "AI systems that grow effortlessly with demand." },
    { icon: Users, title: "Personalization", desc: "Deliver smarter, tailored customer experiences." },
    { icon: Lightbulb, title: "Decision Support", desc: "Data-driven insights for better leadership." },
  ];

  return (
    <section className="py-24 bg-[#00334F] text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why AI Matters for Your Business</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Stay competitive in an evolving digital landscape.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FF6A3D]/20 flex items-center justify-center text-[#FF6A3D] mb-6">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const cases = [
    { title: "AI Customer Support", desc: "Reducing ticket volume by 60% with smart triage.", result: "+60% Efficiency" },
    { title: "E-commerce Personalization", desc: "Dynamic product recommendations for every user.", result: "+25% Sales" },
    { title: "Predictive Analytics", desc: "Forecasting inventory needs with 95% accuracy.", result: "95% Accuracy" },
    { title: "Workflow Automation", desc: "End-to-end invoice processing without humans.", result: "100% Automated" },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#00334F] mb-4">Real-World AI Use Cases</h2>
          <p className="text-slate-500">Tangible results we've delivered.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <h3 className="text-lg font-bold text-[#00334F] mb-3">{c.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{c.desc}</p>
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-blue-50 text-[#00334F] text-xs font-bold rounded-full mb-6">
                  {c.result}
                </div>
                <button className="text-[#FF6A3D] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
         <div className="bg-[#F8FAFC] rounded-[32px] p-8 lg:p-16 border border-slate-100">
           <div className="text-center mb-12">
             <h2 className="text-3xl lg:text-4xl font-bold text-[#00334F] mb-4">Why Choose Sun AI</h2>
             <p className="text-slate-500">We blend technical expertise with business acumen.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: "Proven Expertise", desc: "Years of experience deploying production AI systems." },
               { title: "Tailored Solutions", desc: "No cookie-cutter bots. We build for your specific needs." },
               { title: "Enterprise Security", desc: "Bank-grade encryption and data privacy compliance." },
               { title: "Ongoing Support", desc: "We don't just ship and leave. We optimize for the long haul." }
             ].map((item, i) => (
               <div key={i} className="text-center">
                 <div className="w-3 h-3 bg-[#FF6A3D] rounded-full mx-auto mb-4" />
                 <h3 className="font-bold text-[#00334F] mb-2">{item.title}</h3>
                 <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
               </div>
             ))}
           </div>
           
           <div className="text-center mt-12">
             <button className="px-8 py-3 bg-white border border-slate-200 text-[#00334F] font-bold rounded-xl hover:bg-slate-50 hover:border-[#00334F] transition-all">
               Get in Touch
             </button>
           </div>
         </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-32 bg-white text-center">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto bg-[#00334F] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-white"
        >
          {/* Background Patterns */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF6A3D] opacity-10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500 opacity-10 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              Ready to Build Your <br/> AI Solution?
            </h2>
            <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
              Let’s turn your ideas into AI systems that deliver real results.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-[#FF6A3D] text-white font-bold rounded-xl hover:bg-[#FF8C69] transition-all shadow-lg">
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
