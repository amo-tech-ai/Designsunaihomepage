import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

interface FooterV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function FooterV7({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: FooterV7Props) {
  return (
    <footer className="bg-white border-t border-slate-100 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-6 gap-8 mb-16">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#FF6A3D] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl text-slate-900">Sun AI</span>
            </div>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Empowering businesses to build custom AI tools without writing code.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-[#FF6A3D] hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
             <h4 className="font-bold text-slate-900 mb-6">Product</h4>
             <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Features</a></li>
                <li><button onClick={() => onVersionChange?.('ai-web-dev')} className="hover:text-[#FF6A3D] transition-colors text-left">AI Web Design</button></li>
                <li><button onClick={() => onVersionChange?.('ai-development')} className="hover:text-[#FF6A3D] transition-colors text-left">AI App Development</button></li>
                <li><button onClick={() => onVersionChange?.('services-v2')} className="hover:text-[#FF6A3D] transition-colors text-left">Main Services V2</button></li>
                <li><button onClick={() => onVersionChange?.('ai-sales-marketing')} className="hover:text-[#FF6A3D] transition-colors text-left">AI Sales & CRM</button></li>
                <li><button onClick={() => onVersionChange?.('ai-agents')} className="hover:text-[#FF6A3D] transition-colors text-left">AI Agents & Automations</button></li>
                <li><button onClick={() => onVersionChange?.('ai-mvp')} className="hover:text-[#FF6A3D] transition-colors text-left">AI MVP Development</button></li>
                <li><button onClick={() => onVersionChange?.('ai-chatbots')} className="hover:text-[#FF6A3D] transition-colors text-left">AI Chatbots</button></li>
                <li><button onClick={onNavigateToWhatsApp} className="hover:text-[#FF6A3D] transition-colors text-left">WhatsApp Automation</button></li>
                <li><button onClick={() => onVersionChange?.('dashboard')} className="hover:text-[#FF6A3D] transition-colors text-left">Project Dashboard</button></li>
                <li><button onClick={() => onVersionChange?.('wizard')} className="hover:text-[#FF6A3D] transition-colors text-left">Brief Wizard</button></li>
                <li><button onClick={() => onVersionChange?.('process')} className="hover:text-[#FF6A3D] transition-colors text-left">Our Process</button></li>
                <li><button onClick={() => onVersionChange?.('projects')} className="hover:text-[#FF6A3D] transition-colors text-left">Success Stories</button></li>
                <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Enterprise</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-slate-900 mb-6">Industries</h4>
             <ul className="space-y-3 text-sm text-slate-500">
                <li><button onClick={() => onVersionChange?.('chatbot-saas')} className="hover:text-[#FF6A3D] transition-colors text-left">SaaS Chatbots</button></li>
                <li><button onClick={() => onVersionChange?.('chatbot-ecommerce')} className="hover:text-[#FF6A3D] transition-colors text-left">E-commerce Chatbots</button></li>
                <li><button onClick={() => onVersionChange?.('chatbot-healthcare')} className="hover:text-[#FF6A3D] transition-colors text-left">Healthcare Chatbots</button></li>
                <li><button onClick={() => onVersionChange?.('chatbot-real-estate')} className="hover:text-[#FF6A3D] transition-colors text-left">Real Estate Chatbots</button></li>
                <li><button onClick={() => onVersionChange?.('chatbot-b2b')} className="hover:text-[#FF6A3D] transition-colors text-left">B2B Chatbots</button></li>
                <li><button onClick={() => onVersionChange?.('chatbot-automotive')} className="hover:text-[#FF6A3D] transition-colors text-left">Automotive Chatbots</button></li>
                <li><button onClick={() => onVersionChange?.('chatbot-tourism')} className="hover:text-[#FF6A3D] transition-colors text-left">Tourism Chatbots</button></li>
             </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Versions</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              {[1, 2, 3, 4, 5, 6, 7].map((v) => (
                 <li key={v}>
                   <button onClick={() => onVersionChange?.(`v${v}`)} className="hover:text-[#FF6A3D] transition-colors text-left">
                     Version {v}
                   </button>
                 </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-slate-900 mb-6">Company</h4>
             <ul className="space-y-3 text-sm text-slate-500">
                <li><button onClick={onNavigateToAbout} className="hover:text-[#FF6A3D] transition-colors text-left">About Us</button></li>
                <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Contact</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
             <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Security</a></li>
             </ul>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
           <div>© 2024 Sun AI Agency. All rights reserved.</div>
           <div className="mt-4 md:mt-0">
             Designed with <span className="text-[#FF6A3D]">♥</span> in San Francisco
           </div>
        </div>
      </div>
    </footer>
  );
}
