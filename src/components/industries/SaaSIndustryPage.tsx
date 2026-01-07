import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingDown, 
  Users, 
  AlertCircle, 
  DollarSign,
  Layers,
  Database,
  CheckCircle,
  Sparkles,
  BarChart3,
  Zap,
  MessageSquare,
  Bot,
  Target,
  Rocket,
  Layout
} from 'lucide-react';
import { FooterV11 } from '../FooterV11';

export function SaaSIndustryPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] font-sans antialiased">
      
      {/* SECTION 1 — HERO */}
      <section className="relative bg-white border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                Industry: SaaS
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-6 leading-tight">
                AI Services Built for Modern SaaS Companies
              </h1>
              
              <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                From onboarding to retention, we design AI systems that improve activation, reduce churn, and scale operations.
              </p>
              
              <p className="text-base text-neutral-500 mb-10">
                Purpose-built for subscription products, product-led growth, and support-heavy teams.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/wizard"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Start SaaS AI Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-700 font-medium rounded-lg border-2 border-neutral-200 hover:border-neutral-300 transition-all"
                >
                  Book SaaS Strategy Call
                </Link>
              </div>
            </div>
            
            {/* Right - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingDown className="w-5 h-5 text-green-600 rotate-180" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-neutral-900">Activation Rate</div>
                        <div className="text-xs text-neutral-500">+37% this quarter</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">68%</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-neutral-900">Support Tickets</div>
                        <div className="text-xs text-neutral-500">AI handling 64%</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">-52%</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-neutral-900">Churn Rate</div>
                        <div className="text-xs text-neutral-500">Below industry avg</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">2.8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SAAS PAIN POINTS */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              The Real Challenges SaaS Teams Face
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pain Point 1 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Low Trial-to-Paid Activation
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Users sign up but never reach their "aha moment." Poor onboarding and feature discovery hurt conversion.
              </p>
            </div>
            
            {/* Pain Point 2 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Overloaded Support Teams
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Repetitive questions and scaling support costs eat into margins as you grow.
              </p>
            </div>
            
            {/* Pain Point 3 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Users Not Discovering Features
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Your best features go unused. Customers churn without ever experiencing the full value.
              </p>
            </div>
            
            {/* Pain Point 4 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                High Churn After Month 1
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Customers leave before reaching value. Retention suffers without proactive engagement.
              </p>
            </div>
            
            {/* Pain Point 5 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Sales Teams Lacking Context
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Reps spend hours researching prospects. Lead scoring and prioritization are manual and inconsistent.
              </p>
            </div>
            
            {/* Pain Point 6 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Fragmented Tools and Data
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Customer data scattered across platforms. No single source of truth for decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SAAS AI SERVICES WE OFFER */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              AI Services for SaaS Growth & Operations
            </h2>
            <p className="text-lg text-neutral-600">
              Production-ready AI systems that solve real SaaS challenges
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Service 1 - AI Chatbots */}
            <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      AI Chatbots for SaaS
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    Context-aware chatbots trained on your product, docs, and user lifecycle.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    SaaS Outcomes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Faster onboarding</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Fewer support tickets</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Higher activation rates</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center lg:justify-end">
                  <Link
                    to="/solutions/chatbots"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    View Solution
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 - AI Agents */}
            <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Bot className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      AI Agents for SaaS Operations
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    Autonomous AI agents that monitor data, trigger actions, and support teams.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    SaaS Outcomes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Proactive issue detection</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Automated workflows</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Operational efficiency</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center lg:justify-end">
                  <Link
                    to="/solutions/ai-agents"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    View Solution
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 - AI Sales & CRM */}
            <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      AI Sales & CRM Systems
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    AI-powered lead scoring, deal insights, and customer intelligence.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    SaaS Outcomes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Better-qualified leads</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Shorter sales cycles</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Smarter expansion strategy</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center lg:justify-end">
                  <Link
                    to="/solutions/sales-crm"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    View Solution
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 4 - MVP & Feature Builder */}
            <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      MVP & Feature Builder for SaaS
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    Rapid design and build of SaaS MVPs or new AI-powered features.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    SaaS Outcomes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Faster validation</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Reduced dev risk</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Clear product direction</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center lg:justify-end">
                  <Link
                    to="/solutions/mvp-builder"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    View Solution
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 5 - AI Web & App Experience */}
            <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <Layout className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      AI Web & App Experience
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    Design and development of SaaS websites, dashboards, and portals with AI built-in.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    SaaS Outcomes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Higher conversion</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Better UX</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Scalable frontends</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center lg:justify-end">
                  <Link
                    to="/solutions/ai-web-design"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    View Solution
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              How We Build AI Systems for SaaS
            </h2>
            <p className="text-lg text-neutral-600">
              A clear, repeatable process from strategy to launch
            </p>
          </div>
          
          {/* Flow Diagram */}
          <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">SaaS Goals</h4>
                <p className="text-sm text-neutral-600">Understand metrics & objectives</p>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-neutral-300" />
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">AI Strategy</h4>
                <p className="text-sm text-neutral-600">Architecture & integration plan</p>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-neutral-300" />
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Layout className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">UX Design</h4>
                <p className="text-sm text-neutral-600">System flows & interfaces</p>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-neutral-300" />
              </div>
            </div>
            
            <div className="my-8 border-t border-neutral-200"></div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Build</h4>
                <p className="text-sm text-neutral-600">Develop & integrate AI</p>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-neutral-300" />
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Test</h4>
                <p className="text-sm text-neutral-600">QA & performance optimization</p>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-neutral-300" />
              </div>
              
              {/* Step 6 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Launch</h4>
                <p className="text-sm text-neutral-600">Deploy & scale systems</p>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-neutral-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — REAL SAAS USE CASES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              How SaaS Teams Use These Systems
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Product-Led SaaS
              </h3>
              <div className="space-y-4 text-sm text-neutral-700">
                <div>
                  <span className="font-semibold text-neutral-900">Problem:</span> Users struggle to reach activation without hand-holding
                </div>
                <div>
                  <span className="font-semibold text-neutral-900">AI Action:</span> Intelligent onboarding guides users to their "aha moment"
                </div>
                <div>
                  <span className="font-semibold text-blue-700">Result:</span> 3x faster time-to-value, higher trial conversion
                </div>
              </div>
            </div>
            
            {/* Use Case 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 rounded-2xl p-8">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                B2B SaaS
              </h3>
              <div className="space-y-4 text-sm text-neutral-700">
                <div>
                  <span className="font-semibold text-neutral-900">Problem:</span> Sales cycles drag with manual demos and research
                </div>
                <div>
                  <span className="font-semibold text-neutral-900">AI Action:</span> AI assists with demos, lead scoring, and expansion insights
                </div>
                <div>
                  <span className="font-semibold text-purple-700">Result:</span> Shorter sales cycles, higher deal values
                </div>
              </div>
            </div>
            
            {/* Use Case 3 */}
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-2xl p-8">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                High-Volume SaaS
              </h3>
              <div className="space-y-4 text-sm text-neutral-700">
                <div>
                  <span className="font-semibold text-neutral-900">Problem:</span> Support costs scale linearly with growth
                </div>
                <div>
                  <span className="font-semibold text-neutral-900">AI Action:</span> AI handles tier-1 support and automates operations
                </div>
                <div>
                  <span className="font-semibold text-green-700">Result:</span> 60% cost reduction, 24/7 coverage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PROOF & RESULTS */}
      <section className="py-20 md:py-28 bg-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Proven Results for SaaS Companies
            </h2>
            <p className="text-lg text-neutral-400">
              Real metrics from real implementations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Metric 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-orange-400 mb-3">60%</div>
              <div className="text-white font-medium mb-2">Fewer Support Tickets</div>
              <div className="text-sm text-neutral-400">AI handling common queries</div>
            </div>
            
            {/* Metric 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-green-400 mb-3">25%</div>
              <div className="text-white font-medium mb-2">Higher Activation</div>
              <div className="text-sm text-neutral-400">Trial to paid conversion</div>
            </div>
            
            {/* Metric 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-3">40%</div>
              <div className="text-white font-medium mb-2">Cost Reduction</div>
              <div className="text-sm text-neutral-400">Operational efficiency</div>
            </div>
            
            {/* Metric 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-3">24/7</div>
              <div className="text-white font-medium mb-2">AI Availability</div>
              <div className="text-sm text-neutral-400">Always-on support</div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              View SaaS Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PROCESS & TIMELINE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              From Brief to Production in Weeks
            </h2>
            <p className="text-lg text-neutral-600">
              No experiments. Production-ready systems only.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-1 bg-neutral-200 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
              {/* Week 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  1
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Discovery</h4>
                <p className="text-sm text-neutral-600">Goals & requirements mapping</p>
              </div>
              
              {/* Week 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">System Design</h4>
                <p className="text-sm text-neutral-600">AI architecture & UX flows</p>
              </div>
              
              {/* Week 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Build</h4>
                <p className="text-sm text-neutral-600">Core features & AI training</p>
              </div>
              
              {/* Week 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Integrations</h4>
                <p className="text-sm text-neutral-600">Connect your stack</p>
              </div>
              
              {/* Week 5 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">QA</h4>
                <p className="text-sm text-neutral-600">Testing & refinement</p>
              </div>
              
              {/* Week 6 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Launch</h4>
                <p className="text-sm text-neutral-600">Deploy & monitor</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              See Full Process Details
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
              Ready to Build AI Systems for Your SaaS?
            </h2>
            <p className="text-xl text-neutral-600 mb-10">
              Start with a clear AI brief. Get a scoped plan before any commitment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/wizard"
                className="inline-flex items-center justify-center px-10 py-5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all hover:shadow-xl hover:-translate-y-0.5 text-lg"
              >
                Start SaaS AI Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-neutral-700 font-semibold rounded-lg border-2 border-neutral-200 hover:border-neutral-300 transition-all text-lg"
              >
                Talk to a SaaS Expert
              </Link>
            </div>
            
            <p className="text-sm text-neutral-500 mt-8">
              No sales pitch. Just a real conversation about what AI can do for your SaaS.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterV11 />
    </main>
  );
}
