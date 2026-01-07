import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShoppingCart, 
  Users, 
  AlertCircle, 
  TrendingUp,
  Package,
  Search,
  CheckCircle,
  Sparkles,
  BarChart3,
  Zap,
  MessageSquare,
  Bot,
  Target,
  Rocket,
  Layout,
  CreditCard,
  Heart,
  RefreshCw
} from 'lucide-react';
import { FooterV11 } from '../FooterV11';

export function EcommerceIndustryPage() {
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
                Industry: E-commerce
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-6 leading-tight">
                AI Services Built for High-Performance E-commerce
              </h1>
              
              <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                Increase conversion, automate support, and grow lifetime value with AI-powered systems.
              </p>
              
              <p className="text-base text-neutral-500 mb-10">
                Designed for Shopify, WooCommerce, and custom storefronts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/wizard"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Start E-commerce AI Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-700 font-medium rounded-lg border-2 border-neutral-200 hover:border-neutral-300 transition-all"
                >
                  Book E-commerce Strategy Call
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
                        <ShoppingCart className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-neutral-900">Conversion Rate</div>
                        <div className="text-xs text-neutral-500">+42% with AI assist</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">4.8%</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-neutral-900">Average Order Value</div>
                        <div className="text-xs text-neutral-500">AI recommendations</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">$187</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-neutral-900">Support Response</div>
                        <div className="text-xs text-neutral-500">Instant AI answers</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — E-COMMERCE PAIN POINTS */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              The Real Challenges Online Stores Face
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pain Point 1 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                High Cart Abandonment
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Customers add to cart but never complete checkout. Average abandonment rate exceeds 70%.
              </p>
            </div>
            
            {/* Pain Point 2 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Low Repeat Purchases
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                First-time buyers don't return. Customer lifetime value stays low without retention strategy.
              </p>
            </div>
            
            {/* Pain Point 3 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Overloaded Support Inbox
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Repetitive questions about shipping, returns, and sizing drain support resources.
              </p>
            </div>
            
            {/* Pain Point 4 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Poor Product Discovery
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Customers can't find what they need. Navigation and search fall short of expectations.
              </p>
            </div>
            
            {/* Pain Point 5 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Generic Marketing Messages
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                One-size-fits-all campaigns miss the mark. Personalization is missing or ineffective.
              </p>
            </div>
            
            {/* Pain Point 6 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Manual Order & Ops Workflows
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Inventory, fulfillment, and customer updates require constant manual intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — E-COMMERCE AI SERVICES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              AI Services for E-commerce Growth & Operations
            </h2>
            <p className="text-lg text-neutral-600">
              Production-ready AI systems designed for online stores
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
                      AI Chatbots for E-commerce
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    AI assistants for product questions, order tracking, returns, and support.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    Outcomes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Higher conversion</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Faster customer service</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Fewer abandoned carts</span>
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

            {/* Service 2 - AI Personalization */}
            <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      AI Personalization & Recommendations
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    AI-driven product recommendations and personalized experiences.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    Outcomes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Higher AOV</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Better engagement</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Increased repeat purchases</span>
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

            {/* Service 3 - AI Sales & Customer Intelligence */}
            <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      AI Sales & Customer Intelligence
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    AI-powered customer segmentation, behavior analysis, and lifecycle insights.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    Outcomes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Smarter campaigns</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Higher LTV</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Better retention</span>
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

            {/* Service 4 - AI Web & Storefront Optimization */}
            <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <Layout className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      AI Web & Storefront Optimization
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    Conversion-focused design and performance optimization for storefronts.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    Outcomes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Faster pages</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Better UX</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Higher checkout completion</span>
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

            {/* Service 5 - AI Automation & MVP Builder */}
            <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      AI Automation & MVP Builder
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    Rapid development of AI-powered features, automations, and internal tools.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    Outcomes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Reduced manual work</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Faster experimentation</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Lower operational cost</span>
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
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              How AI Works Across the E-commerce Funnel
            </h2>
            <p className="text-lg text-neutral-600">
              End-to-end AI integration from discovery to retention
            </p>
          </div>
          
          {/* Flow Diagram */}
          <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Visitor</h4>
                <p className="text-sm text-neutral-600">Lands on store</p>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-neutral-300" />
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Discovery</h4>
                <p className="text-sm text-neutral-600">AI-powered search</p>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-neutral-300" />
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Recommendations</h4>
                <p className="text-sm text-neutral-600">Personalized picks</p>
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
                  <ShoppingCart className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Cart</h4>
                <p className="text-sm text-neutral-600">AI checkout assist</p>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-neutral-300" />
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Support</h4>
                <p className="text-sm text-neutral-600">Post-purchase AI</p>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-neutral-300" />
              </div>
              
              {/* Step 6 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4">
                  <RefreshCw className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Retention</h4>
                <p className="text-sm text-neutral-600">Lifecycle marketing</p>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-neutral-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — E-COMMERCE USE CASES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              How Online Stores Use AI Systems
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                DTC Brands
              </h3>
              <div className="space-y-4 text-sm text-neutral-700">
                <div>
                  <span className="font-semibold text-neutral-900">Challenge:</span> High CAC, low repeat purchase rate
                </div>
                <div>
                  <span className="font-semibold text-neutral-900">AI Solution:</span> Personalized recommendations and retention campaigns
                </div>
                <div>
                  <span className="font-semibold text-blue-700">Result:</span> 2.5x LTV, 35% repeat purchase rate
                </div>
              </div>
            </div>
            
            {/* Use Case 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 rounded-2xl p-8">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Fashion & Apparel
              </h3>
              <div className="space-y-4 text-sm text-neutral-700">
                <div>
                  <span className="font-semibold text-neutral-900">Challenge:</span> Size/fit questions and high return rates
                </div>
                <div>
                  <span className="font-semibold text-neutral-900">AI Solution:</span> AI sizing assistant and product Q&A bot
                </div>
                <div>
                  <span className="font-semibold text-purple-700">Result:</span> 42% fewer returns, 28% higher conversion
                </div>
              </div>
            </div>
            
            {/* Use Case 3 */}
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-2xl p-8">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                High-Volume Stores
              </h3>
              <div className="space-y-4 text-sm text-neutral-700">
                <div>
                  <span className="font-semibold text-neutral-900">Challenge:</span> Support team overwhelmed during peak times
                </div>
                <div>
                  <span className="font-semibold text-neutral-900">AI Solution:</span> 24/7 AI chatbot for order tracking and FAQs
                </div>
                <div>
                  <span className="font-semibold text-green-700">Result:</span> 70% ticket deflection, instant responses
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
              Proven Results for E-commerce Brands
            </h2>
            <p className="text-lg text-neutral-400">
              Real revenue impact from AI implementations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Metric 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-orange-400 mb-3">+42%</div>
              <div className="text-white font-medium mb-2">Conversion Rate</div>
              <div className="text-sm text-neutral-400">With AI assistance</div>
            </div>
            
            {/* Metric 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-green-400 mb-3">$187</div>
              <div className="text-white font-medium mb-2">Average Order Value</div>
              <div className="text-sm text-neutral-400">AI recommendations</div>
            </div>
            
            {/* Metric 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-3">70%</div>
              <div className="text-white font-medium mb-2">Ticket Deflection</div>
              <div className="text-sm text-neutral-400">Support automation</div>
            </div>
            
            {/* Metric 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-3">2.5x</div>
              <div className="text-white font-medium mb-2">Customer LTV</div>
              <div className="text-sm text-neutral-400">Retention & upsells</div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              View E-commerce Case Studies
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
              From Brief to Live Store in Weeks
            </h2>
            <p className="text-lg text-neutral-600">
              Fast, proven implementation process
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
                <h4 className="font-semibold text-neutral-900 mb-2">Store Audit</h4>
                <p className="text-sm text-neutral-600">Analytics & goals review</p>
              </div>
              
              {/* Week 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">AI Strategy</h4>
                <p className="text-sm text-neutral-600">Integration architecture</p>
              </div>
              
              {/* Week 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Build</h4>
                <p className="text-sm text-neutral-600">AI features & training</p>
              </div>
              
              {/* Week 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Integration</h4>
                <p className="text-sm text-neutral-600">Connect to your stack</p>
              </div>
              
              {/* Week 5 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Testing</h4>
                <p className="text-sm text-neutral-600">QA & optimization</p>
              </div>
              
              {/* Week 6 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Launch</h4>
                <p className="text-sm text-neutral-600">Go live & monitor</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              See Full Implementation Process
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
              Ready to Grow Your Store with AI?
            </h2>
            <p className="text-xl text-neutral-600 mb-10">
              Start with a clear AI brief. Get a detailed plan before any commitment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/wizard"
                className="inline-flex items-center justify-center px-10 py-5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all hover:shadow-xl hover:-translate-y-0.5 text-lg"
              >
                Start E-commerce AI Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-neutral-700 font-semibold rounded-lg border-2 border-neutral-200 hover:border-neutral-300 transition-all text-lg"
              >
                Book Strategy Call
              </Link>
            </div>
            
            <p className="text-sm text-neutral-500 mt-8">
              No pitch. Just real insights on AI for your e-commerce business.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterV11 />
    </main>
  );
}
