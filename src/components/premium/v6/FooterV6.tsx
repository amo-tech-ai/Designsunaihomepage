import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export function FooterV6({ onNavigateToWhatsApp, onNavigateToAbout }: { onNavigateToWhatsApp?: () => void, onNavigateToAbout?: () => void }) {
  return (
    <footer className="bg-[#00334F] text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Sun AI</h3>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF6A3D] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
             <h4 className="font-bold mb-6">Company</h4>
             <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <button onClick={onNavigateToAbout} className="hover:text-white transition-colors text-left">
                    About
                  </button>
                </li>
                {["Careers", "Blog", "Contact"].map((link) => (
                  <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6">Services</h4>
             <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <button onClick={onNavigateToWhatsApp} className="hover:text-white transition-colors text-left">
                    WhatsApp Automation
                  </button>
                </li>
                {["AI Platforms", "Automation", "Consulting", "Enterprise"].map((link) => (
                  <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6">Resources</h4>
             <ul className="space-y-3 text-sm text-slate-300">
                {["Case Studies", "Documentation", "Community", "Help Center"].map((link) => (
                  <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
             </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
           <div>© 2024 Sun AI Agency. All rights reserved.</div>
           <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
