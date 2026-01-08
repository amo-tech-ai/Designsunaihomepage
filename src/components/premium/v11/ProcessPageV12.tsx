import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Lightbulb,
  Palette,
  Code,
  Database,
  Sparkles,
  Bug,
  Rocket,
  Download,
  Target,
  Zap,
  Shield,
  Plus,
  Minus
} from 'lucide-react';
import { FooterV11 } from '../../FooterV11';

const phases = [
  {
    number: 1,
    name: 'Discovery & Strategy',
    duration: 'Week 1',
    icon: Lightbulb,
    goal: 'Deep understanding of requirements',
    activities: [
      'Kickoff meeting (2 hours)',
      'Requirements workshop',
      'Competitor analysis',
      'User persona development',
      'Technical feasibility assessment'
    ],
    deliverables: [
      'Project brief document',
      'User stories & acceptance criteria',
      'Technical architecture proposal',
      'Database schema draft',
      'Timeline & budget confirmation'
    ],
    clientTime: '8-10 hours',
    involvement: 'High',
    successCriteria: [
      'Requirements documented',
      'Architecture approved',
      'Timeline agreed upon'
    ]
  },
  {
    number: 2,
    name: 'Design & Planning',
    duration: 'Week 2',
    icon: Palette,
    goal: 'Visual design and UX',
    activities: [
      'Wireframing (key screens)',
      'UI design mockups',
      'Design system creation',
      'User flow mapping',
      'Component library planning'
    ],
    deliverables: [
      'Wireframes (10-15 screens)',
      'High-fidelity mockups (5-8 key screens)',
      'Design system (colors, typography, components)',
      'User flow diagrams',
      'Interactive prototype (Figma)'
    ],
    clientTime: '4-6 hours',
    involvement: 'Medium',
    successCriteria: [
      'Designs approved',
      'User flows validated',
      'Component library defined'
    ]
  },
  {
    number: 3,
    name: 'Frontend Foundation',
    duration: 'Week 3',
    icon: Code,
    goal: 'Build React app structure',
    activities: [
      'React/Next.js scaffolding',
      'Tailwind CSS setup',
      'Component development',
      'Responsive layout',
      'Navigation & routing'
    ],
    deliverables: [
      'Working frontend skeleton',
      'Design system implemented',
      'Authentication UI',
      'Responsive layouts',
      'Staging environment deployed'
    ],
    clientTime: '2-3 hours',
    involvement: 'Low',
    successCriteria: [
      'App accessible on staging',
      'Mobile responsive',
      'Navigation functional'
    ]
  },
  {
    number: 4,
    name: 'Backend & Database',
    duration: 'Week 4',
    icon: Database,
    goal: 'Build data layer & APIs',
    activities: [
      'Supabase setup',
      'Database schema implementation',
      'API endpoint development',
      'Authentication logic',
      'Data validation & security'
    ],
    deliverables: [
      'Database schema deployed',
      'REST/GraphQL APIs',
      'Authentication system',
      'Row-level security rules',
      'API documentation'
    ],
    clientTime: '1-2 hours',
    involvement: 'Low',
    successCriteria: [
      'Database live',
      'APIs functional',
      'Auth working'
    ]
  },
  {
    number: 5,
    name: 'AI Integration',
    duration: 'Week 5-6',
    icon: Sparkles,
    goal: 'Implement AI features',
    activities: [
      'GPT-4/Claude integration',
      'Prompt engineering',
      'Vector database setup (if needed)',
      'AI response optimization',
      'Error handling & fallbacks'
    ],
    deliverables: [
      'AI features functional',
      'Prompt library documented',
      'Response quality benchmarks',
      'Usage tracking implemented',
      'Cost optimization configured'
    ],
    clientTime: '4-6 hours',
    involvement: 'Medium',
    successCriteria: [
      'AI accuracy >85%',
      'Response time <3s',
      'Error handling robust'
    ]
  },
  {
    number: 6,
    name: 'Polish & Testing',
    duration: 'Week 7',
    icon: Bug,
    goal: 'Refine UX & fix bugs',
    activities: [
      'UI/UX refinement',
      'Bug fixing',
      'Performance optimization',
      'Loading states & animations',
      'Mobile testing'
    ],
    deliverables: [
      'All bugs resolved',
      'Performance optimized (Lighthouse >80)',
      'Mobile tested on 5+ devices',
      'Error pages designed',
      'UAT (User Acceptance Testing) complete'
    ],
    clientTime: '6-8 hours',
    involvement: 'High',
    successCriteria: [
      'Zero critical bugs',
      'Performance targets met',
      'Client approval received'
    ]
  },
  {
    number: 7,
    name: 'Launch & Handoff',
    duration: 'Week 8',
    icon: Rocket,
    goal: 'Production deployment',
    activities: [
      'Production deployment',
      'Domain & SSL setup',
      'Monitoring configuration (Sentry, PostHog)',
      'Documentation handoff',
      'Team training session'
    ],
    deliverables: [
      'Live production app',
      'Monitoring dashboards',
      'Technical documentation',
      'Admin training video',
      '30-day support plan'
    ],
    clientTime: '4-5 hours',
    involvement: 'Medium',
    successCriteria: [
      'App live and stable',
      'Team trained',
      'Monitoring active'
    ]
  }
];

const diagramIcons = [
  { Icon: Rocket, label: 'Launch', degree: 45 },
  { Icon: Code, label: 'Design', degree: 135 },
  { Icon: Database, label: 'Build', degree: 225 },
  { Icon: Shield, label: 'Test', degree: 315 }
];

export function ProcessPageV12() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [activeIconIndex, setActiveIconIndex] = useState<number>(0);

  // Simulate arc passing icons
  const handleArcProgress = (rotation: number) => {
    const normalizedRotation = rotation % 360;
    const newIndex = diagramIcons.findIndex((item, idx) => {
      const nextIdx = (idx + 1) % diagramIcons.length;
      const currentDegree = item.degree;
      const nextDegree = diagramIcons[nextIdx].degree;
      
      if (nextDegree < currentDegree) {
        return normalizedRotation >= currentDegree || normalizedRotation < nextDegree;
      }
      return normalizedRotation >= currentDegree && normalizedRotation < nextDegree;
    });
    
    if (newIndex !== -1 && newIndex !== activeIconIndex) {
      setActiveIconIndex(newIndex);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#1A1A1A] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-32">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN — Content */}
            <div className="lg:col-span-2">
              <div className="uppercase text-[#F59E0B] text-xs font-bold tracking-widest mb-6">
                AMO AI PROCESS
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                8 Weeks.
                <br />
                <span className="text-[#F59E0B]">Not 8 Months.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed font-serif" style={{ fontFamily: 'Lora, serif' }}>
                We move fast without cutting corners—AI acceleration + expert delivery for measurable results.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link
                  to="/wizard"
                  className="inline-flex items-center justify-center px-10 py-5 bg-[#F59E0B] text-[#1A1A1A] font-bold hover:bg-[#FCD34D] transition-all text-base"
                >
                  Start Your AI Brief
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-10 py-5 border border-white text-white font-bold hover:bg-white hover:text-[#1A1A1A] transition-all text-base"
                >
                  See Success Stories
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">20+</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">$2M+</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400">Monthly GMV</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">300%</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400">Average ROI</div>
                </div>
              </div>
            </div>
            
            {/* RIGHT COLUMN — Circular Diagram */}
            <div className="lg:col-span-3 flex items-center justify-center">
              <div className="relative w-full max-w-[400px] aspect-square">
                
                {/* Center Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[280px] h-[280px] rounded-full border-2 border-neutral-700 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold mb-2">8 Weeks</div>
                    <div className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold">Delivery Cycle</div>
                  </div>
                </div>
                
                {/* Outer Gray Circle */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="#404040"
                    strokeWidth="2"
                  />
                </svg>
                
                {/* Animated Orange Arc */}
                <motion.svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 400"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  onUpdate={(latest) => {
                    if (typeof latest.rotate === 'number') {
                      handleArcProgress(latest.rotate);
                    }
                  }}
                >
                  <path
                    d="M 200 20 A 180 180 0 0 1 327.28 72.72"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
                
                {/* Icons Around Circle */}
                {diagramIcons.map((item, index) => {
                  const Icon = item.Icon;
                  const radian = (item.degree - 90) * (Math.PI / 180);
                  const radius = 180;
                  const x = 200 + radius * Math.cos(radian);
                  const y = 200 + radius * Math.sin(radian);
                  const isActive = activeIconIndex === index;
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={isActive ? {
                        scale: [1, 1.15, 1],
                      } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <div className={`w-12 h-12 rounded-full border-2 ${isActive ? 'border-[#F59E0B] shadow-lg shadow-orange-500/50' : 'border-white/20'} bg-[#1A1A1A] flex items-center justify-center transition-all duration-300`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-[#F59E0B]' : 'text-white'} transition-colors duration-300`} />
                      </div>
                      <div className={`text-xs mt-2 text-center font-medium ${isActive ? 'text-[#F59E0B]' : 'text-neutral-400'} transition-colors duration-300`}>
                        {item.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-PHASE DETAIL CARDS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Complete Phase Breakdown
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Every phase documented with activities, deliverables, and success criteria
            </p>
          </div>
          
          <div className="space-y-4">
            {phases.map((phase) => {
              const isExpanded = expandedPhase === phase.number;
              const Icon = phase.icon;
              
              return (
                <div
                  key={phase.number}
                  className={`border ${isExpanded ? 'border-[#F59E0B] border-l-4' : 'border-[#EFE9E4]'} overflow-hidden transition-all duration-300`}
                >
                  {/* Collapsed Header */}
                  <button
                    onClick={() => setExpandedPhase(isExpanded ? null : phase.number)}
                    className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-[#FDFCFB] transition-colors"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-14 h-14 bg-[#FAF8F6] border border-[#EFE9E4] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-[#1A1A1A]" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-serif text-3xl font-bold text-[#F59E0B]">{phase.number}</span>
                          <span className="text-xl md:text-2xl font-semibold text-[#1A1A1A]">{phase.name}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-[#666666]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {phase.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {phase.involvement} involvement
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <Minus className="w-6 h-6 text-[#F59E0B]" />
                      ) : (
                        <Plus className="w-6 h-6 text-[#999999]" />
                      )}
                    </div>
                  </button>
                  
                  {/* Expanded Content */}
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="bg-[#FDFCFB] border-t border-[#EFE9E4] p-6 md:p-8"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div>
                          <div className="mb-6">
                            <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest mb-3">
                              Goal
                            </h4>
                            <p className="text-[#666666]">{phase.goal}</p>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest mb-3">
                              Activities
                            </h4>
                            <ul className="space-y-2">
                              {phase.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[#666666] text-sm">
                                  <span className="w-1.5 h-1.5 bg-[#F59E0B] mt-2 flex-shrink-0"></span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest mb-3">
                              Client Time Required
                            </h4>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#EFE9E4]">
                              <Clock className="w-4 h-4 text-[#666666]" />
                              <span className="font-semibold text-[#1A1A1A]">{phase.clientTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right Column */}
                        <div>
                          <div className="mb-6">
                            <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest mb-3">
                              Deliverables
                            </h4>
                            <ul className="space-y-2">
                              {phase.deliverables.map((deliverable, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[#666666] text-sm">
                                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                                  <span>{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest mb-3">
                              Success Criteria
                            </h4>
                            <ul className="space-y-2">
                              {phase.successCriteria.map((criteria, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[#666666] text-sm">
                                  <Shield className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" />
                                  <span>{criteria}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENT INVOLVEMENT MATRIX */}
      <section className="py-20 md:py-28 bg-[#FAF8F6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Client Involvement Matrix
            </h2>
            <p className="text-lg text-[#666666]">
              Total: 30-40 hours over 8 weeks — Average 4-5 hours per week
            </p>
          </div>
          
          <div className="bg-white border border-[#EFE9E4] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1A1A1A] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Phase</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Time Required</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE9E4]">
                  <tr className="hover:bg-[#FDFCFB] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">1. Discovery</td>
                    <td className="px-6 py-4 text-[#666666]">8-10 hours</td>
                    <td className="px-6 py-4 text-[#666666] text-sm">Workshops, approvals, context</td>
                  </tr>
                  <tr className="hover:bg-[#FDFCFB] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">2. Design</td>
                    <td className="px-6 py-4 text-[#666666]">4-6 hours</td>
                    <td className="px-6 py-4 text-[#666666] text-sm">Design reviews, feedback</td>
                  </tr>
                  <tr className="hover:bg-[#FDFCFB] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">3. Frontend</td>
                    <td className="px-6 py-4 text-[#666666]">2-3 hours</td>
                    <td className="px-6 py-4 text-[#666666] text-sm">Device testing, check-ins</td>
                  </tr>
                  <tr className="hover:bg-[#FDFCFB] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">4. Backend</td>
                    <td className="px-6 py-4 text-[#666666]">1-2 hours</td>
                    <td className="px-6 py-4 text-[#666666] text-sm">Data review, test data</td>
                  </tr>
                  <tr className="hover:bg-[#FDFCFB] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">5. AI Integration</td>
                    <td className="px-6 py-4 text-[#666666]">4-6 hours</td>
                    <td className="px-6 py-4 text-[#666666] text-sm">AI testing, prompt refinement</td>
                  </tr>
                  <tr className="hover:bg-[#FDFCFB] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">6. Polish</td>
                    <td className="px-6 py-4 text-[#666666]">6-8 hours</td>
                    <td className="px-6 py-4 text-[#666666] text-sm">UAT, beta testing, approvals</td>
                  </tr>
                  <tr className="hover:bg-[#FDFCFB] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">7. Launch</td>
                    <td className="px-6 py-4 text-[#666666]">4-5 hours</td>
                    <td className="px-6 py-4 text-[#666666] text-sm">Training, launch prep</td>
                  </tr>
                </tbody>
                <tfoot className="bg-[#FFF7ED] border-t-2 border-[#F59E0B]">
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#1A1A1A]">Total</td>
                    <td className="px-6 py-4 font-bold text-[#F59E0B]">30-40 hours</td>
                    <td className="px-6 py-4 text-[#666666] text-sm">Avg 4-5 hours/week</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY COMPARISON */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
              Methodology Comparison
            </h2>
            <p className="text-lg text-[#666666]">
              See how our systematic process compares
            </p>
          </div>
          
          <div className="bg-white border border-[#EFE9E4] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1A1A1A] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Aspect</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest border-b-4 border-[#F59E0B]">Our Process</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Traditional Agency</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Freelancer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE9E4]">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Timeline</td>
                    <td className="px-6 py-4 bg-[#FFF7ED] font-semibold text-[#F59E0B]">8 weeks (fixed)</td>
                    <td className="px-6 py-4 text-[#666666]">12-16 weeks</td>
                    <td className="px-6 py-4 text-[#666666]">10-20 weeks (varies)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Phases</td>
                    <td className="px-6 py-4 bg-[#FFF7ED] font-semibold text-[#F59E0B]">7 structured phases</td>
                    <td className="px-6 py-4 text-[#666666]">Ad-hoc milestones</td>
                    <td className="px-6 py-4 text-[#666666]">Undefined</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Client Involvement</td>
                    <td className="px-6 py-4 bg-[#FFF7ED] font-semibold text-[#F59E0B]">4-5 hrs/week</td>
                    <td className="px-6 py-4 text-[#666666]">10+ hrs/week</td>
                    <td className="px-6 py-4 text-[#666666]">Inconsistent</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Deliverables</td>
                    <td className="px-6 py-4 bg-[#FFF7ED] font-semibold text-[#F59E0B]">Weekly checkpoints</td>
                    <td className="px-6 py-4 text-[#666666]">Monthly reviews</td>
                    <td className="px-6 py-4 text-[#666666]">When done</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Testing</td>
                    <td className="px-6 py-4 bg-[#FFF7ED] font-semibold text-[#F59E0B]">Built-in UAT phase</td>
                    <td className="px-6 py-4 text-[#666666]">Separate QA contract</td>
                    <td className="px-6 py-4 text-[#666666]">Minimal</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Documentation</td>
                    <td className="px-6 py-4 bg-[#FFF7ED] font-semibold text-[#F59E0B]">Comprehensive</td>
                    <td className="px-6 py-4 text-[#666666]">Limited</td>
                    <td className="px-6 py-4 text-[#666666]">Rarely provided</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Post-Launch</td>
                    <td className="px-6 py-4 bg-[#FFF7ED] font-semibold text-[#F59E0B]">30-day support</td>
                    <td className="px-6 py-4 text-[#666666]">Extra cost</td>
                    <td className="px-6 py-4 text-[#666666]">Usually none</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Success Rate</td>
                    <td className="px-6 py-4 bg-[#FFF7ED] font-semibold text-[#F59E0B]">95% on-time</td>
                    <td className="px-6 py-4 text-[#666666]">60% on-time</td>
                    <td className="px-6 py-4 text-[#666666]">40% on-time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed font-serif" style={{ fontFamily: 'Lora, serif' }}>
              Book a call to discuss your project and get a detailed timeline
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#F59E0B] text-[#1A1A1A] font-bold hover:bg-[#FCD34D] transition-all text-lg"
              >
                Book Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/wizard"
                className="inline-flex items-center justify-center px-10 py-5 border border-white text-white font-bold hover:bg-white hover:text-[#1A1A1A] transition-all text-lg"
              >
                Start Project Brief
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterV11 />
    </main>
  );
}