import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  BarChart3, 
  Clock, 
  Zap, 
  Shield, 
  Globe, 
  Play, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube,
  Cloud,
  Workflow,
  Sparkles,
  Database,
  Bot,
  Star,
  Quote
} from 'lucide-react';
import { NavbarV7 } from './NavbarV7';

// --- Shared Components (Styled according to Guide) ---

function Section({ className, children, id }: { className?: string, children: React.ReactNode, id?: string }) {
  return <section id={id} className={`py-24 ${className}`}>{children}</section>;
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto px-6 lg:px-12">{children}</div>;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#FF6A3D] text-xs font-bold uppercase tracking-wide mb-6">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A3D] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A3D]"></span>
      </span>
      {children}
    </div>
  );
}

function Button({ 
  variant = 'primary', 
  children, 
  className,
  href,
  onClick
}: { 
  variant?: 'primary' | 'secondary' | 'outline' | 'white', 
  children: React.ReactNode, 
  className?: string,
  href?: string,
  onClick?: () => void
}) {
  const baseStyle = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl cursor-pointer";
  const variants = {
    primary: "bg-[#FF6A3D] text-white hover:bg-[#E55A2F] shadow-lg shadow-orange-500/20 px-8 py-4",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-[#FF6A3D] hover:text-[#FF6A3D] px-8 py-4",
    outline: "bg-transparent border border-slate-200 text-slate-600 hover:border-[#FF6A3D] hover:text-[#FF6A3D] px-6 py-3",
    white: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-8 py-4"
  };

  if (href) {
    return <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</a>;
  }

  return <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
}

// --- Section 1: Hero ---

function ProjectsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FDFDFD]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-100/40 to-rose-50/40 rounded-full blur-3xl -z-10 opacity-60 animate-pulse duration-[10s]" />
      
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <Badge>Real AI Projects · Delivered in 8 Weeks</Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
            Real Results. <br/>
            <span className="text-[#FF6A3D]">Real Impact.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            Discover how we’ve transformed businesses with AI applications delivered in just 8 weeks. Real projects. Real results.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button variant="primary" href="/start">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" href="/projects#stories">
              See Success Stories
            </Button>
          </div>

          {/* Abstract AI Icons */}
          <div className="flex justify-center gap-6 opacity-60">
             {[Cloud, Workflow, Sparkles, Database, Bot].map((Icon, i) => (
               <div key={i} className="w-12 h-12 rounded-2xl bg-orange-50/50 flex items-center justify-center text-[#FF6A3D]">
                 <Icon className="w-6 h-6" strokeWidth={1.5} />
               </div>
             ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// --- Section 2: Featured Success Stories ---

function SuccessStories() {
  const projects = [
    {
      slug: 'startupai',
      title: 'StartupAI',
      category: 'SaaS · Founder Platform',
      challenge: 'Founders needed investor-ready assets fast without hiring analysts or designers.',
      image: "https://images.unsplash.com/photo-1534113540057-d091ef1f115f?auto=format&fit=crop&w=800&q=80",
      solution: ['AI pitch deck generation + rewrite', 'Market/competitor analysis', 'Workflow automation'],
      metrics: ['75% faster creation', '10× productivity', 'Minutes to draft'],
      miniVisual: (
        <div className="flex items-end gap-1 h-12 w-full mt-2">
          <div className="bg-slate-200 w-1/3 h-[30%] rounded-t-sm"></div>
          <div className="bg-slate-300 w-1/3 h-[60%] rounded-t-sm"></div>
          <div className="bg-[#FF6A3D] w-1/3 h-full rounded-t-sm"></div>
        </div>
      )
    },
    {
      slug: 'fashionos',
      title: 'FashionOS',
      category: 'E-commerce · Fashion Tech',
      challenge: 'Needed scalable marketplace with AI discovery + operations automation.',
      image: "https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?auto=format&fit=crop&w=800&q=80",
      solution: ['AI recommendations + search', 'Inventory insights', 'Secure payments'],
      metrics: ['+300% conversion', '+65K users', '97% satisfaction'],
      miniVisual: (
        <div className="w-full h-12 mt-2 flex items-center gap-2">
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
             <div className="h-full bg-[#FF6A3D] w-[85%]"></div>
          </div>
          <span className="text-xs font-bold text-[#FF6A3D]">85%</span>
        </div>
      )
    },
    {
      slug: 'i-love-medellin',
      title: 'I Love Medellín',
      category: 'Tourism · Local Platform',
      challenge: '1,000+ listings and multilingual content updates were slow and inconsistent.',
      image: "https://images.unsplash.com/photo-1759256243611-502772ac391b?auto=format&fit=crop&w=800&q=80",
      solution: ['AI translation + localization', 'Content automation', 'Smart booking UX'],
      metrics: ['+400% reach', '97.5% accuracy', '8 languages'],
      miniVisual: (
        <div className="flex flex-col gap-1 w-full mt-2">
          <div className="h-1.5 w-full bg-slate-100 rounded-full"><div className="h-full w-[90%] bg-[#FF6A3D] rounded-full"></div></div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full"><div className="h-full w-[70%] bg-slate-300 rounded-full"></div></div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full"><div className="h-full w-[50%] bg-slate-200 rounded-full"></div></div>
        </div>
      )
    }
  ];

  return (
    <Section id="stories" className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Featured Success Stories</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Real AI applications transforming businesses across industries.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full border border-slate-200">
                    {project.category.split('·')[0]}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">{project.category}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{project.challenge}</p>
                  <ul className="space-y-2 mb-6">
                    {project.solution.map((sol, j) => (
                      <li key={j} className="text-xs text-slate-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D]" />
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {project.metrics.map((metric, k) => (
                      <span key={k} className="bg-slate-50 border border-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md">
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="w-24">
                       {project.miniVisual}
                    </div>
                    <a href={`/projects/${project.slug}`} className="text-sm font-bold text-[#FF6A3D] flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Section 3: Timeline Calculator ---

function TimelineCalculator() {
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    industry: 'E-commerce',
    size: 'Medium',
    complexity: 50,
    integrations: false
  });

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Calculate Your Project Timeline</h2>
          <p className="text-slate-500">Get a customized project timeline based on your needs and industry.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden max-w-5xl mx-auto grid lg:grid-cols-2">
          
          {/* Inputs */}
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Industry</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-600 focus:outline-none focus:border-[#FF6A3D] focus:ring-1 focus:ring-[#FF6A3D]"
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                >
                  {['E-commerce', 'Healthcare', 'Finance', 'Tourism', 'SaaS', 'Real Estate'].map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">Project Size</label>
                <div className="flex gap-4">
                  {['Small', 'Medium', 'Large'].map(size => (
                    <button 
                      key={size}
                      onClick={() => setFormData({...formData, size})}
                      className={`flex-1 py-3 rounded-xl border font-medium text-sm transition-all ${
                        formData.size === size 
                        ? 'border-[#FF6A3D] bg-orange-50 text-[#FF6A3D]' 
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold text-slate-900">Complexity</label>
                  <span className="text-xs text-slate-500 font-medium">{formData.complexity}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={formData.complexity}
                  onChange={(e) => setFormData({...formData, complexity: Number(e.target.value)})}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#FF6A3D]"
                />
                <div className="flex justify-between mt-1 text-xs text-slate-400">
                  <span>Simple</span>
                  <span>Advanced</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">Needs Integrations?</label>
                <div className="flex flex-wrap gap-2">
                  {['Stripe', 'WhatsApp', 'CRM', 'Payments', 'AI Search'].map(tech => (
                    <button 
                      key={tech}
                      className="px-3 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-slate-600 hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleCalculate}
                disabled={isCalculating}
                className="w-full py-4 bg-[#FF6A3D] text-white font-bold rounded-xl hover:bg-[#E55A2F] transition-all shadow-lg shadow-orange-500/20 disabled:opacity-70 disabled:cursor-wait"
              >
                {isCalculating ? 'Calculating...' : 'Calculate Your Timeline'}
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="p-8 lg:p-12 bg-slate-50/50 flex flex-col justify-center relative">
            {!showResult && !isCalculating && (
              <div className="text-center text-slate-400">
                <Clock className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>Fill out the form to see your estimate</p>
              </div>
            )}

            {isCalculating && (
               <div className="text-center">
                 <div className="w-12 h-12 border-4 border-slate-200 border-t-[#FF6A3D] rounded-full animate-spin mx-auto mb-4"></div>
                 <p className="text-slate-500 font-medium">Analyzing requirements...</p>
               </div>
            )}

            {showResult && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-block px-3 py-1 bg-orange-50 text-[#FF6A3D] text-xs font-bold rounded-full mb-6">
                  Based on similar projects
                </div>

                <div className="mb-8">
                  <div className="text-slate-500 text-sm mb-1">Estimated Launch</div>
                  <div className="text-4xl font-bold text-slate-900">4-6 Weeks</div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-900 mb-2">
                      <span>Scope & Blueprint</span>
                      <span>Week 1</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF6A3D] w-[20%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-900 mb-2">
                      <span>Build Sprint</span>
                      <span>Week 2-5</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF6A3D] w-[60%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-900 mb-2">
                      <span>QA + Launch</span>
                      <span>Week 6-8</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF6A3D] w-[100%]"></div>
                    </div>
                  </div>
                </div>

                <Button variant="primary" className="w-full" href="/start">Start Your Project</Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 4: Comparison ---

function ComparisonSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why 8 Weeks Beats 6 Months</h2>
          <p className="text-slate-500">Our streamlined AI development process saves you time and money.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional */}
          <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="font-bold text-xl text-slate-900 mb-6">Traditional Agency</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Time to Market</span>
                  <span className="font-bold text-slate-700">24 Weeks</span>
                </div>
                <div className="h-3 w-full bg-slate-200 rounded-full">
                  <div className="h-full w-full bg-slate-400 rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Cost Efficiency</span>
                  <span className="font-bold text-slate-700">Low</span>
                </div>
                <div className="h-3 w-full bg-slate-200 rounded-full">
                  <div className="h-full w-[40%] bg-slate-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Sun AI */}
          <div className="p-8 rounded-2xl border-2 border-[#FF6A3D] bg-white shadow-xl relative">
            <div className="absolute -top-4 right-8 bg-[#FF6A3D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              Sun AI Advantage
            </div>
            
            <h3 className="font-bold text-xl text-slate-900 mb-6">Our 8-Week Delivery</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Time to Market</span>
                  <span className="font-bold text-[#FF6A3D]">8 Weeks</span>
                </div>
                <div className="h-3 w-full bg-orange-50 rounded-full">
                  <div className="h-full w-[33%] bg-[#FF6A3D] rounded-full shadow-[0_0_10px_rgba(255,106,61,0.5)]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Cost Efficiency</span>
                  <span className="font-bold text-[#FF6A3D]">High</span>
                </div>
                <div className="h-3 w-full bg-orange-50 rounded-full">
                  <div className="h-full w-[95%] bg-[#FF6A3D] rounded-full shadow-[0_0_10px_rgba(255,106,61,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
           <Button variant="outline" href="/process">Learn More About Our Process</Button>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 5: Track Record ---

function TrackRecord() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Proven Track Record</h2>
          <p className="text-slate-500">Our AI solutions deliver measurable results for companies of all sizes.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Projects Delivered', value: '20+' },
            { label: 'Average ROI', value: '3×' },
            { label: 'Customer Satisfaction', value: '98%' },
            { label: 'Support & Uptime', value: '24/7' },
          ].map((stat, i) => (
             <div key={i} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
               <div className="w-24 h-24 rounded-full border-4 border-orange-50 flex items-center justify-center mb-4 relative">
                 <div className="absolute inset-0 border-4 border-[#FF6A3D] rounded-full border-l-transparent border-r-transparent animate-spin-slow opacity-20"></div>
                 <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
               </div>
               <span className="text-sm font-bold text-slate-500">{stat.label}</span>
             </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder Logos */}
           {[1,2,3,4,5,6].map(i => (
             <div key={i} className="h-8 w-32 bg-slate-300/50 rounded flex items-center justify-center text-xs font-bold text-slate-400">CLIENT {i}</div>
           ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="secondary" href="/projects">See All Projects</Button>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 6: Testimonials (Custom for Projects Page) ---

function ProjectsTestimonials() {
  const reviews = [
    {
      text: "We went from idea to full MVP in just 7 weeks. The speed and quality were unmatched.",
      author: "David K.",
      company: "Founder, FinTech Co.",
      rating: 5
    },
    {
      text: "The ROI on our AI automation tool was evident within the first month. Incredible work.",
      author: "Sarah M.",
      company: "Ops Director, LogiChain",
      rating: 5
    },
    {
      text: "Sun AI didn't just build software; they consulted on our entire data strategy.",
      author: "James L.",
      company: "CTO, HealthPlus",
      rating: 5
    }
  ];

  return (
    <Section className="bg-white">
      <Container>
         <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-500">Hear from businesses who have benefited from our AI solutions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
              <Quote className="w-8 h-8 text-[#FF6A3D] opacity-20 absolute top-8 right-8" />
              <div className="flex gap-1 text-[#FF6A3D] mb-4">
                 {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 font-medium italic">"{r.text}"</p>
              <div>
                <div className="font-bold text-slate-900">{r.author}</div>
                <div className="text-xs text-slate-500">{r.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" href="/testimonials">Read More Testimonials</Button>
        </div>
      </Container>
    </Section>
  );
}

// --- Section 7: Final CTA ---

function ProjectsFinalCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-orange-50 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

       <Container>
         <div className="text-center relative z-10 max-w-3xl mx-auto">
           <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
             Ready to Launch Your <br/>
             <span className="text-[#FF6A3D]">AI Solution?</span>
           </h2>
           <p className="text-xl text-slate-500 mb-10">
             Transform your business in just 8 weeks. Let’s get started!
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="primary" href="/start">
               Start Your 8-Week Journey
             </Button>
             <Button variant="white" href="/contact">
               Contact Us
             </Button>
           </div>
         </div>
       </Container>
    </section>
  );
}

// --- Section 8: Projects Footer ---

interface ProjectsFooterProps {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

function ProjectsFooter({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: ProjectsFooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Navigation */}
          <div>
            <h4 className="font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onVersionChange?.('v7')} className="hover:text-[#FF6A3D] transition-colors text-left">Home</button></li>
              <li><button onClick={() => onVersionChange?.('whatsapp')} className="hover:text-[#FF6A3D] transition-colors text-left">Services</button></li>
              <li><button onClick={() => onVersionChange?.('projects')} className="text-[#FF6A3D] font-bold cursor-default text-left">Projects</button></li>
              <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Blog</a></li>
              <li><button onClick={onNavigateToAbout} className="hover:text-[#FF6A3D] transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          {/* Col 2: Social */}
          <div>
            <h4 className="font-bold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#FF6A3D] hover:text-white transition-all text-slate-400">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF6A3D]" />
                <a href="mailto:hello@sunai.agency" className="hover:text-white">hello@sunai.agency</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF6A3D]" />
                <a href="tel:+15550000000" className="hover:text-white">+1 (555) 000-0000</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF6A3D] shrink-0 mt-1" />
                <span>Medellín, CO</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-6">Get product updates</h4>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF6A3D]"
              />
              <button className="w-full py-3 bg-[#FF6A3D] text-white font-bold rounded-lg hover:bg-[#E55A2F] transition-all">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
           <div>© 2024 Sun AI Agency. All rights reserved.</div>
           <div className="flex gap-6 mt-4 md:mt-0">
             <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </Container>
    </footer>
  );
}

// --- Main Page Component ---

interface ProjectsPageV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function ProjectsPageV7({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: ProjectsPageV7Props) {
  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#FF6A3D] selection:text-white">
      <NavbarV7 onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} />
      <ProjectsHero />
      <SuccessStories />
      <TimelineCalculator />
      <ComparisonSection />
      <TrackRecord />
      <ProjectsTestimonials />
      <ProjectsFinalCTA />
      <ProjectsFooter onNavigateToWhatsApp={onNavigateToWhatsApp} onNavigateToAbout={onNavigateToAbout} onVersionChange={onVersionChange} />
    </main>
  );
}
