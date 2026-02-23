import { useState } from 'react';
import { Link } from 'react-router';
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
    <main className="min-h-screen bg-[#FAF8F5] font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#1A3A32] text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 pt-[200px] pb-[128px]">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN — Content */}
            <div className="lg:col-span-2">
              <div className="uppercase text-[#A8C5B8] text-xs font-bold tracking-widest mb-6">
                SUNAI PROCESS
              </div>
              
              <h1 className="text-[64px] leading-[1.1] font-bold mb-6 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                8 Weeks.
                <br />
                <span className="text-[#A8C5B8]">Not 8 Months.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[rgba(250,248,245,0.8)] mb-10 leading-relaxed">
                We move fast without cutting corners—AI acceleration + expert delivery for measurable results.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link
                  to="/wizard"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FAF8F5] text-[#1A3A32] text-[14px] font-semibold rounded-lg hover:bg-white transition-all duration-200 hover:shadow-lg"
                >
                  Start Your AI Brief
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-4 text-[#FAF8F5] text-[14px] font-medium rounded-lg border border-[rgba(250,248,245,0.3)] hover:bg-[rgba(250,248,245,0.1)] transition-all duration-200"
                >
                  See Success Stories
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-[48px] font-bold mb-1" style={{ fontFamily: 'Georgia, serif' }}>20+</div>
                  <div className="text-xs uppercase tracking-wider text-[rgba(250,248,245,0.7)]">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-[48px] font-bold mb-1" style={{ fontFamily: 'Georgia, serif' }}>$2M+</div>
                  <div className="text-xs uppercase tracking-wider text-[rgba(250,248,245,0.7)]">Monthly GMV</div>
                </div>
                <div>
                  <div className="text-[48px] font-bold mb-1" style={{ fontFamily: 'Georgia, serif' }}>300%</div>
                  <div className="text-xs uppercase tracking-wider text-[rgba(250,248,245,0.7)]">Average ROI</div>
                </div>
              </div>
            </div>
            
            {/* RIGHT COLUMN — Circular Diagram */}
            <div className="lg:col-span-3 flex items-center justify-center">
              <div className="relative w-full max-w-[400px] aspect-square">
                
                {/* Center Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[280px] h-[280px] rounded-full border-2 border-[rgba(250,248,245,0.2)] flex flex-col items-center justify-center">
                    <div className="text-[48px] font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>8 Weeks</div>
                    <div className="text-xs uppercase tracking-widest text-[#A8C5B8] font-bold">Delivery Cycle</div>
                  </div>
                </div>
                
                {/* Outer Gray Circle */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="rgba(250, 248, 245, 0.2)"
                    strokeWidth="2"
                  />
                </svg>
                
                {/* Animated Teal Arc */}
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
                    stroke="#A8C5B8"
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
                      <div className={`w-12 h-12 rounded-full border-2 ${isActive ? 'border-[#A8C5B8] shadow-lg shadow-[#A8C5B8]/50' : 'border-white/20'} bg-[#0D1F1A] flex items-center justify-center transition-all duration-300`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-[#A8C5B8]' : 'text-white'} transition-colors duration-300`} />
                      </div>
                      <div className={`text-xs mt-2 text-center font-medium ${isActive ? 'text-[#A8C5B8]' : 'text-[rgba(250,248,245,0.7)]'} transition-colors duration-300`}>
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
      <section className="py-[96px] px-6 md:px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[48px] font-semibold text-[#1F2421] mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Complete Phase Breakdown
            </h2>
            <p className="text-lg text-[#6B7370] leading-relaxed">
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
                  className={`border ${isExpanded ? 'border-[#1A3A32] border-l-4' : 'border-[#E0E0DE]'} overflow-hidden transition-all duration-300`}
                >
                  {/* Collapsed Header */}
                  <button
                    onClick={() => setExpandedPhase(isExpanded ? null : phase.number)}
                    className="w-full p-8 flex items-center justify-between hover:bg-[#FAF8F5] transition-colors"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#1A3A32]" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[40px] font-bold text-[#1A3A32]/20" style={{ fontFamily: 'Georgia, serif' }}>{phase.number}</span>
                          <span className="text-[24px] font-semibold text-[#1F2421]" style={{ fontFamily: 'Georgia, serif' }}>{phase.name}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-[#6B7370]">
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
                        <Minus className="w-6 h-6 text-[#1A3A32]" />
                      ) : (
                        <Plus className="w-6 h-6 text-[#9B9F9D]" />
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
                      className="bg-[#FAF8F5] border-t border-[#E0E0DE] p-8"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div>
                          <div className="mb-6">
                            <h4 className="text-xs font-bold text-[#1F2421] uppercase tracking-widest mb-3">
                              Goal
                            </h4>
                            <p className="text-[#6B7370]">{phase.goal}</p>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="text-xs font-bold text-[#1F2421] uppercase tracking-widest mb-3">
                              Activities
                            </h4>
                            <ul className="space-y-2">
                              {phase.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[#6B7370] text-sm">
                                  <span className="w-1.5 h-1.5 bg-[#1A3A32] mt-2 flex-shrink-0"></span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-xs font-bold text-[#1F2421] uppercase tracking-widest mb-3">
                              Client Time Required
                            </h4>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E0E0DE] rounded-lg">
                              <Clock className="w-4 h-4 text-[#6B7370]" />
                              <span className="font-semibold text-[#1F2421]">{phase.clientTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right Column */}
                        <div>
                          <div className="mb-6">
                            <h4 className="text-xs font-bold text-[#1F2421] uppercase tracking-widest mb-3">
                              Deliverables
                            </h4>
                            <ul className="space-y-2">
                              {phase.deliverables.map((deliverable, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[#6B7370] text-sm">
                                  <CheckCircle className="w-5 h-5 text-[#1A3A32] flex-shrink-0" />
                                  <span>{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-xs font-bold text-[#1F2421] uppercase tracking-widest mb-3">
                              Success Criteria
                            </h4>
                            <ul className="space-y-2">
                              {phase.successCriteria.map((criteria, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[#6B7370] text-sm">
                                  <Shield className="w-5 h-5 text-[#1F2421] flex-shrink-0" />
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
      <section className="py-[96px] px-6 md:px-16 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[48px] font-semibold text-[#1F2421] mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Client Involvement Matrix
            </h2>
            <p className="text-lg text-[#6B7370]">
              Total: 30-40 hours over 8 weeks — Average 4-5 hours per week
            </p>
          </div>
          
          <div className="bg-white border border-[#E0E0DE] overflow-hidden rounded-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1A3A32] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Phase</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Time Required</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E0E0DE]">
                  <tr className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">1. Discovery</td>
                    <td className="px-6 py-4 text-[#6B7370]">8-10 hours</td>
                    <td className="px-6 py-4 text-[#6B7370] text-sm">Workshops, approvals, context</td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">2. Design</td>
                    <td className="px-6 py-4 text-[#6B7370]">4-6 hours</td>
                    <td className="px-6 py-4 text-[#6B7370] text-sm">Design reviews, feedback</td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">3. Frontend</td>
                    <td className="px-6 py-4 text-[#6B7370]">2-3 hours</td>
                    <td className="px-6 py-4 text-[#6B7370] text-sm">Device testing, check-ins</td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">4. Backend</td>
                    <td className="px-6 py-4 text-[#6B7370]">1-2 hours</td>
                    <td className="px-6 py-4 text-[#6B7370] text-sm">Data review, test data</td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">5. AI Integration</td>
                    <td className="px-6 py-4 text-[#6B7370]">4-6 hours</td>
                    <td className="px-6 py-4 text-[#6B7370] text-sm">AI testing, prompt refinement</td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">6. Polish</td>
                    <td className="px-6 py-4 text-[#6B7370]">6-8 hours</td>
                    <td className="px-6 py-4 text-[#6B7370] text-sm">UAT, beta testing, approvals</td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">7. Launch</td>
                    <td className="px-6 py-4 text-[#6B7370]">4-5 hours</td>
                    <td className="px-6 py-4 text-[#6B7370] text-sm">Training, launch prep</td>
                  </tr>
                </tbody>
                <tfoot className="bg-[#E8F5E9] border-t-2 border-[#1A3A32]">
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#1F2421]">Total</td>
                    <td className="px-6 py-4 font-bold text-[#1A3A32]">30-40 hours</td>
                    <td className="px-6 py-4 text-[#6B7370] text-sm">Avg 4-5 hours/week</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY COMPARISON */}
      <section className="py-[96px] px-6 md:px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[48px] font-semibold text-[#1F2421] mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Methodology Comparison
            </h2>
            <p className="text-lg text-[#6B7370]">
              See how our systematic process compares
            </p>
          </div>
          
          <div className="bg-white border border-[#E0E0DE] overflow-hidden rounded-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1A3A32] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Aspect</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest border-b-4 border-[#A8C5B8]">Our Process</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Traditional Agency</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Freelancer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E0E0DE]">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">Timeline</td>
                    <td className="px-6 py-4 bg-[#E8F5E9] font-semibold text-[#1A3A32]">8 weeks (fixed)</td>
                    <td className="px-6 py-4 text-[#6B7370]">12-16 weeks</td>
                    <td className="px-6 py-4 text-[#6B7370]">10-20 weeks (varies)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">Phases</td>
                    <td className="px-6 py-4 bg-[#E8F5E9] font-semibold text-[#1A3A32]">7 structured phases</td>
                    <td className="px-6 py-4 text-[#6B7370]">Ad-hoc milestones</td>
                    <td className="px-6 py-4 text-[#6B7370]">Undefined</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">Client Involvement</td>
                    <td className="px-6 py-4 bg-[#E8F5E9] font-semibold text-[#1A3A32]">4-5 hrs/week</td>
                    <td className="px-6 py-4 text-[#6B7370]">10+ hrs/week</td>
                    <td className="px-6 py-4 text-[#6B7370]">Inconsistent</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">Deliverables</td>
                    <td className="px-6 py-4 bg-[#E8F5E9] font-semibold text-[#1A3A32]">Weekly checkpoints</td>
                    <td className="px-6 py-4 text-[#6B7370]">Monthly reviews</td>
                    <td className="px-6 py-4 text-[#6B7370]">Sporadic updates</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">Communication</td>
                    <td className="px-6 py-4 bg-[#E8F5E9] font-semibold text-[#1A3A32]">Daily Slack updates</td>
                    <td className="px-6 py-4 text-[#6B7370]">Weekly meetings</td>
                    <td className="px-6 py-4 text-[#6B7370]">Email only</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1F2421]">Post-Launch</td>
                    <td className="px-6 py-4 bg-[#E8F5E9] font-semibold text-[#1A3A32]">30-day support included</td>
                    <td className="px-6 py-4 text-[#6B7370]">Extra cost</td>
                    <td className="px-6 py-4 text-[#6B7370]">Often unavailable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-[96px] px-6 md:px-16 bg-[#1A3A32]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-[48px] text-[#FAF8F5] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Ready to Build Your AI System?
          </h2>
          <p className="text-[18px] text-[rgba(250,248,245,0.8)] max-w-[700px] mx-auto mb-8">
            From idea → proposal → production system in weeks, not months.
            No long-term contracts, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/wizard"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FAF8F5] text-[#1A3A32] text-[14px] font-semibold rounded-lg hover:bg-white transition-all duration-200 hover:shadow-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-4 text-[#FAF8F5] text-[14px] font-medium rounded-lg border border-[rgba(250,248,245,0.3)] hover:bg-[rgba(250,248,245,0.1)] transition-all duration-200"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      <FooterV11 />
    </main>
  );
}
