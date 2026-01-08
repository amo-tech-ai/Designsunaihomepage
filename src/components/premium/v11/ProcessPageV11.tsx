import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  FileText,
  Lightbulb,
  Palette,
  Code,
  Database,
  Sparkles,
  Bug,
  Rocket,
  Download,
  ChevronDown,
  Target,
  Zap,
  Shield
} from 'lucide-react';
import { FooterV11 } from '../../FooterV11';

const phases = [
  {
    number: 1,
    name: 'Discovery & Strategy',
    duration: 'Week 1',
    icon: Lightbulb,
    color: 'purple',
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
    color: 'blue',
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
    color: 'indigo',
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
    color: 'green',
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
    color: 'orange',
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
    color: 'yellow',
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
    color: 'red',
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

const colorMap: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', icon: 'bg-purple-100 text-purple-600' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: 'bg-blue-100 text-blue-600' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', icon: 'bg-indigo-100 text-indigo-600' },
  green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: 'bg-green-100 text-green-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', icon: 'bg-orange-100 text-orange-600' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', icon: 'bg-yellow-100 text-yellow-600' },
  red: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', icon: 'bg-red-100 text-red-600' }
};

export function ProcessPageV11() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FDFCFB] font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-green-600 text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              7-Phase Development Model:<br />From Idea to Launch
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed">
              Our battle-tested methodology ensures on-time delivery, zero surprises, and production-ready AI systems in 8-12 weeks.
            </p>
            
            {/* Value Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <Target className="w-5 h-5" />
                <span className="font-medium">Systematic Process — No guesswork</span>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Clear Milestones — Track progress weekly</span>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <Zap className="w-5 h-5" />
                <span className="font-medium">On-Time Delivery — 95% meet deadline</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-10 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button
                className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Process PDF
              </button>
            </div>
          </div>
          
          {/* Timeline Visualization */}
          <div className="mt-20 relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-white/20"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative">
              {phases.map((phase, index) => {
                const colors = colorMap[phase.color];
                const Icon = phase.icon;
                return (
                  <div key={phase.number} className="text-center">
                    <div className={`w-16 h-16 ${colors.icon} rounded-full flex items-center justify-center mx-auto mb-3 relative z-10 shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-semibold mb-1">{phase.number}</div>
                    <div className="text-xs text-purple-200">{phase.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7-PHASE DETAIL CARDS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Complete Phase Breakdown
            </h2>
            <p className="text-lg text-neutral-600">
              Every phase documented with activities, deliverables, and success criteria
            </p>
          </div>
          
          <div className="space-y-4">
            {phases.map((phase) => {
              const isExpanded = expandedPhase === phase.number;
              const colors = colorMap[phase.color];
              const Icon = phase.icon;
              
              return (
                <div
                  key={phase.number}
                  className={`border-2 ${isExpanded ? colors.border : 'border-neutral-200'} rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-xl' : 'hover:shadow-md'}`}
                >
                  {/* Collapsed Header */}
                  <button
                    onClick={() => setExpandedPhase(isExpanded ? null : phase.number)}
                    className="w-full p-6 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-3 mb-1">
                          <span className={`text-2xl font-bold ${colors.text}`}>{phase.number}</span>
                          <span className="text-xl font-semibold text-neutral-900">{phase.name}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-neutral-600">
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
                    <ChevronDown className={`w-6 h-6 text-neutral-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className={`${colors.bg} border-t ${colors.border} p-8 animate-fadeIn`}>
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div>
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                              Goal
                            </h4>
                            <p className="text-neutral-700">{phase.goal}</p>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                              Activities
                            </h4>
                            <ul className="space-y-2">
                              {phase.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-neutral-700 text-sm">
                                  <span className={`w-1.5 h-1.5 ${colors.text.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                              Client Time Required
                            </h4>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg">
                              <Clock className="w-4 h-4 text-neutral-600" />
                              <span className="font-semibold text-neutral-900">{phase.clientTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right Column */}
                        <div>
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                              Deliverables
                            </h4>
                            <ul className="space-y-2">
                              {phase.deliverables.map((deliverable, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-neutral-700 text-sm">
                                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                  <span>{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                              Success Criteria
                            </h4>
                            <ul className="space-y-2">
                              {phase.successCriteria.map((criteria, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-neutral-700 text-sm">
                                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                  <span>{criteria}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENT INVOLVEMENT MATRIX */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Client Involvement Matrix
            </h2>
            <p className="text-lg text-neutral-600">
              Total: 30-40 hours over 8 weeks — Average 4-5 hours per week
            </p>
          </div>
          
          <div className="bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Phase</th>
                    <th className="px-6 py-4 text-left font-semibold">Time Required</th>
                    <th className="px-6 py-4 text-left font-semibold">Activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-900">1. Discovery</td>
                    <td className="px-6 py-4 text-neutral-700">8-10 hours</td>
                    <td className="px-6 py-4 text-neutral-600 text-sm">Workshops, approvals, context</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-900">2. Design</td>
                    <td className="px-6 py-4 text-neutral-700">4-6 hours</td>
                    <td className="px-6 py-4 text-neutral-600 text-sm">Design reviews, feedback</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-900">3. Frontend</td>
                    <td className="px-6 py-4 text-neutral-700">2-3 hours</td>
                    <td className="px-6 py-4 text-neutral-600 text-sm">Device testing, check-ins</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-900">4. Backend</td>
                    <td className="px-6 py-4 text-neutral-700">1-2 hours</td>
                    <td className="px-6 py-4 text-neutral-600 text-sm">Data review, test data</td>
                  </tr>
                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-900">5. AI Integration</td>
                    <td className="px-6 py-4 text-neutral-700">4-6 hours</td>
                    <td className="px-6 py-4 text-neutral-600 text-sm">AI testing, prompt refinement</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-900">6. Polish</td>
                    <td className="px-6 py-4 text-neutral-700">6-8 hours</td>
                    <td className="px-6 py-4 text-neutral-600 text-sm">UAT, beta testing, approvals</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-900">7. Launch</td>
                    <td className="px-6 py-4 text-neutral-700">4-5 hours</td>
                    <td className="px-6 py-4 text-neutral-600 text-sm">Training, launch prep</td>
                  </tr>
                </tbody>
                <tfoot className="bg-purple-50 border-t-2 border-purple-200">
                  <tr>
                    <td className="px-6 py-4 font-bold text-purple-900">Total</td>
                    <td className="px-6 py-4 font-bold text-purple-900">30-40 hours</td>
                    <td className="px-6 py-4 text-purple-700 text-sm">Avg 4-5 hours/week</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY COMPARISON */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Methodology Comparison
            </h2>
            <p className="text-lg text-neutral-600">
              See how our systematic process compares
            </p>
          </div>
          
          <div className="bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-600 to-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-6 py-4 text-left font-semibold bg-orange-500/20">Our Process</th>
                    <th className="px-6 py-4 text-left font-semibold">Traditional Agency</th>
                    <th className="px-6 py-4 text-left font-semibold">Freelancer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Timeline</td>
                    <td className="px-6 py-4 bg-green-50 font-semibold text-green-700">8 weeks (fixed)</td>
                    <td className="px-6 py-4 text-neutral-600">12-16 weeks</td>
                    <td className="px-6 py-4 text-neutral-600">10-20 weeks (varies)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Phases</td>
                    <td className="px-6 py-4 bg-green-50 font-semibold text-green-700">7 structured phases</td>
                    <td className="px-6 py-4 text-neutral-600">Ad-hoc milestones</td>
                    <td className="px-6 py-4 text-neutral-600">Undefined</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Client Involvement</td>
                    <td className="px-6 py-4 bg-green-50 font-semibold text-green-700">4-5 hrs/week</td>
                    <td className="px-6 py-4 text-neutral-600">10+ hrs/week</td>
                    <td className="px-6 py-4 text-neutral-600">Inconsistent</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Deliverables</td>
                    <td className="px-6 py-4 bg-green-50 font-semibold text-green-700">Weekly checkpoints</td>
                    <td className="px-6 py-4 text-neutral-600">Monthly reviews</td>
                    <td className="px-6 py-4 text-neutral-600">When done</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Testing</td>
                    <td className="px-6 py-4 bg-green-50 font-semibold text-green-700">Built-in UAT phase</td>
                    <td className="px-6 py-4 text-neutral-600">Separate QA contract</td>
                    <td className="px-6 py-4 text-neutral-600">Minimal</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Documentation</td>
                    <td className="px-6 py-4 bg-green-50 font-semibold text-green-700">Comprehensive</td>
                    <td className="px-6 py-4 text-neutral-600">Limited</td>
                    <td className="px-6 py-4 text-neutral-600">Rarely provided</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Post-Launch</td>
                    <td className="px-6 py-4 bg-green-50 font-semibold text-green-700">30-day support</td>
                    <td className="px-6 py-4 text-neutral-600">Extra cost</td>
                    <td className="px-6 py-4 text-neutral-600">Usually none</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Success Rate</td>
                    <td className="px-6 py-4 bg-green-50 font-semibold text-green-700">95% on-time</td>
                    <td className="px-6 py-4 text-neutral-600">60% on-time</td>
                    <td className="px-6 py-4 text-neutral-600">40% on-time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-green-600 text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              Book a call to discuss your project and get a detailed timeline
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-10 py-5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all hover:shadow-xl hover:-translate-y-0.5 text-lg"
              >
                Book Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/wizard"
                className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all text-lg"
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
