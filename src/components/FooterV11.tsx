import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function FooterV11() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      {/* A. TOP STRATEGIC CTA STRIP */}
      <div className="bg-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Ready to Build a Real AI System?
            </h3>
            <p className="text-neutral-400 mb-8 text-base md:text-lg">
              From idea → proposal → production system in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/wizard"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Start Project
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* B. MAIN FOOTER (5 COLUMNS) */}
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
          {/* Desktop: 5 columns, Tablet: 2-3 columns, Mobile: 1 column */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* COLUMN 1 — COMPANY */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/about" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    About Sun AI
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/process" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/process/v12" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Process V12
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/projects" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/booking" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Book a Call
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/whatsapp" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Support
                  </Link>
                </li>
              </ul>
              <p className="text-xs text-neutral-500 mt-8 leading-relaxed italic">
                Systems-first AI agency.<br />Built to ship.
              </p>
            </div>

            {/* COLUMN 2 — SOLUTIONS */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                Solutions
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/services" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    All Solutions
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/ai-web-dev" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    AI Web Design
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/ai-development" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/ai-agents" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    AI Agents
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/ai-chatbots" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    AI Chatbots
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/ai-sales-marketing" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Sales CRM
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/ai-mvp" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    MVP Builder
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3 — INDUSTRIES */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                Industries
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/industries/saas" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    SaaS
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/industries/ecommerce" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/chatbot/real-estate" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/chatbot/b2b" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    B2B Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/chatbot/automotive" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Automotive
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/chatbot/tourism" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Tourism
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4 — START PROJECT (APP FLOW) */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                Project Flow
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/wizard" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block font-medium"
                  >
                    Start Brief Wizard
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/processing" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    AI Processing
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/proposal" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Proposal Ready
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/login" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Client Login
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/dashboard" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Client Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 5 — RESOURCES */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                Resources
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/process" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    AI Systems Guide
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/process#pricing" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Pricing & Timelines
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/whatsapp" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    AI FAQs
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/whatsapp" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    WhatsApp Automation
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/whatsapp" 
                    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
                  >
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* C. BOTTOM META BAR */}
      <div className="bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Left */}
            <p className="text-sm text-neutral-600 order-2 md:order-1">
              © 2025 Sun AI Agency — All rights reserved
            </p>

            {/* Center */}
            <div className="flex gap-6 text-sm order-3 md:order-2">
              <Link 
                to="/privacy" 
                className="text-neutral-600 hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-neutral-600 hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/whatsapp" 
                className="text-neutral-600 hover:text-orange-500 transition-colors"
              >
                Security
              </Link>
            </div>

            {/* Right - Social Icons */}
            <div className="flex gap-4 order-1 md:order-3">
              <a
                href="https://twitter.com/sunai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-neutral-500 hover:text-orange-500 hover:bg-orange-50 transition-all"
                aria-label="Follow on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/sunai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-neutral-500 hover:text-orange-500 hover:bg-orange-50 transition-all"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/sunai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-neutral-500 hover:text-orange-500 hover:bg-orange-50 transition-all"
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@sunai.com"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-neutral-500 hover:text-orange-500 hover:bg-orange-50 transition-all"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}