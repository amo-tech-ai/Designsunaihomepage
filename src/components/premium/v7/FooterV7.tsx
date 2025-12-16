import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

interface FooterV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
}

export function FooterV7({ onNavigateToWhatsApp, onNavigateToAbout }: FooterV7Props) {
  return (
    <footer className="bg-white border-t border-slate-100 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
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
                <li><button onClick={onNavigateToWhatsApp} className="hover:text-[#FF6A3D] transition-colors text-left">WhatsApp Automation</button></li>
                <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">Enterprise</a></li>
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
