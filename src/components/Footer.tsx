import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Footer() {
  const { user, logout } = useAuth();
  
  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';
  const isClient = user?.role === 'client';

  return (
    <footer className="bg-gradient-to-br from-[#0A1F2E] to-[#0F2A3D] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <h3 className="text-2xl font-semibold text-white">Sun AI</h3>
              <p className="text-sm text-slate-400 mt-1">Luxury AI CRM</p>
            </Link>
            
            <div className="flex gap-4 mt-6">
              <a
                href="https://twitter.com/sunai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-orange-500/10 hover:border-orange-500 hover:text-orange-500 transition-all hover:-translate-y-0.5"
                aria-label="Follow on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/sunai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-orange-500/10 hover:border-orange-500 hover:text-orange-500 transition-all hover:-translate-y-0.5"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/sunai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-orange-500/10 hover:border-orange-500 hover:text-orange-500 transition-all hover:-translate-y-0.5"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@sunai.com"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-orange-500/10 hover:border-orange-500 hover:text-orange-500 transition-all hover:-translate-y-0.5"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/ai-web-dev" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  AI Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-development" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  Custom AI Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-agents" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/services/ai-chatbots" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link to="/services/ai-mvp" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  MVP Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-sales-marketing" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  Sales & Marketing AI
                </Link>
              </li>
              <li>
                <Link to="/whatsapp" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  WhatsApp Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Solutions (Conditional) */}
          <div>
            {!isAuthenticated && (
              <>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">
                  Solutions
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/wizard" 
                      className="text-orange-500 font-medium hover:text-orange-400 hover:pl-1 transition-all text-[15px] block"
                    >
                      Start Your Project →
                    </Link>
                  </li>
                  <li>
                    <Link to="/proposal" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      View Proposal Demo
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      Client Login
                    </Link>
                  </li>
                  <li className="pt-2 mt-2 border-t border-white/10">
                    <Link to="/style-guide" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      Style Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/sitemap" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </>
            )}

            {isAuthenticated && isClient && (
              <>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">
                  Your Projects
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/dashboard" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/deck-editor" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      Presentation Builder
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/settings" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      Account Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block text-left"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </>
            )}

            {isAuthenticated && isAdmin && (
              <>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">
                  Admin Tools
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/app/leads" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      Lead CRM
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/intelligence/ingest" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      Intelligence OS
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/workflow" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      Workflows
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/ops" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      Agent Control
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/settings" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                      Settings
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>

          {/* Column 5: Resources */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/projects" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/docs/startup-ai" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/share/investor" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  Investor Deck
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-slate-300 hover:text-orange-500 hover:pl-1 transition-all text-[15px] block">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 Sun AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-slate-500 hover:text-orange-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
