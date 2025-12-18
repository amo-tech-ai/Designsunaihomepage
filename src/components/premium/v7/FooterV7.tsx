import { Twitter, Linkedin, Github, Mail, Facebook, Instagram } from 'lucide-react';

interface FooterV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function FooterV7({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: FooterV7Props) {
  
  const handleNav = (route: string) => {
    if (onVersionChange) onVersionChange(route);
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 gap-y-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => handleNav('v7')}>
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl text-slate-900">Sun AI</span>
            </div>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Premium AI Development Agency. We build intelligent software solutions for forward-thinking enterprises.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
             <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Solutions</h4>
             <ul className="space-y-3 text-sm text-slate-600">
                <li><button onClick={() => handleNav('services-v2')} className="hover:text-orange-500 transition-colors text-left">All Services</button></li>
                <li><button onClick={() => handleNav('ai-web-dev')} className="hover:text-orange-500 transition-colors text-left">AI Web Design</button></li>
                <li><button onClick={() => handleNav('ai-development')} className="hover:text-orange-500 transition-colors text-left">App Development</button></li>
                <li><button onClick={() => handleNav('ai-agents')} className="hover:text-orange-500 transition-colors text-left">AI Agents</button></li>
                <li><button onClick={() => handleNav('ai-chatbots')} className="hover:text-orange-500 transition-colors text-left">Chatbots</button></li>
                <li><button onClick={() => handleNav('ai-sales-marketing')} className="hover:text-orange-500 transition-colors text-left">Sales & CRM</button></li>
                <li><button onClick={() => handleNav('ai-mvp')} className="hover:text-orange-500 transition-colors text-left">MVP Builder</button></li>
             </ul>
          </div>

          {/* Industries */}
          <div>
             <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Industries</h4>
             <ul className="space-y-3 text-sm text-slate-600">
                <li><button onClick={() => handleNav('chatbot-saas')} className="hover:text-orange-500 transition-colors text-left">SaaS</button></li>
                <li><button onClick={() => handleNav('chatbot-ecommerce')} className="hover:text-orange-500 transition-colors text-left">E-commerce</button></li>
                <li><button onClick={() => handleNav('chatbot-healthcare')} className="hover:text-orange-500 transition-colors text-left">Healthcare</button></li>
                <li><button onClick={() => handleNav('chatbot-real-estate')} className="hover:text-orange-500 transition-colors text-left">Real Estate</button></li>
                <li><button onClick={() => handleNav('chatbot-b2b')} className="hover:text-orange-500 transition-colors text-left">B2B Services</button></li>
                <li><button onClick={() => handleNav('chatbot-automotive')} className="hover:text-orange-500 transition-colors text-left">Automotive</button></li>
             </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><button onClick={onNavigateToAbout} className="hover:text-orange-500 transition-colors text-left">About Us</button></li>
              <li><button onClick={() => handleNav('projects')} className="hover:text-orange-500 transition-colors text-left">Case Studies</button></li>
              <li><button onClick={() => handleNav('process')} className="hover:text-orange-500 transition-colors text-left">Our Process</button></li>
              <li><button onClick={() => handleNav('booking')} className="hover:text-orange-500 transition-colors text-left">Book a Call</button></li>
              <li><button onClick={() => handleNav('whatsapp')} className="hover:text-orange-500 transition-colors text-left">Contact Support</button></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
             <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Platform</h4>
             <ul className="space-y-3 text-sm text-slate-600">
                <li><button onClick={() => handleNav('login')} className="hover:text-orange-500 transition-colors text-left font-medium">Login</button></li>
                <li><button onClick={() => handleNav('dashboard')} className="hover:text-orange-500 transition-colors text-left">Client Dashboard</button></li>
                <li><button onClick={() => handleNav('leads')} className="hover:text-orange-500 transition-colors text-left">Admin CRM</button></li>
                <li><button onClick={() => handleNav('wizard')} className="hover:text-orange-500 transition-colors text-left">Start Brief</button></li>
                <li><button onClick={() => handleNav('style-guide')} className="hover:text-orange-500 transition-colors text-left">Style Guide</button></li>
                <li><button onClick={() => handleNav('sitemap')} className="hover:text-orange-500 transition-colors text-left">Sitemap</button></li>
             </ul>
          </div>

          {/* Legal / More */}
          <div>
             <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Legal</h4>
             <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Security</a></li>
                <li className="pt-4 opacity-50 text-xs font-mono">
                  v7.0.2 Stable
                </li>
             </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
           <div>© 2025 Sun AI Agency. All rights reserved.</div>
           <div className="flex gap-6">
             <button onClick={() => handleNav('v1')} className="hover:text-slate-900">V1</button>
             <button onClick={() => handleNav('v6')} className="hover:text-slate-900">V6</button>
             <button onClick={() => handleNav('sitemap')} className="hover:text-slate-900">System Status</button>
           </div>
        </div>
      </div>
    </footer>
  );
}
