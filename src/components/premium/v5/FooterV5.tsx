import { Twitter, Linkedin, Github, Mail, Globe } from 'lucide-react';

interface FooterV5Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function FooterV5({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: FooterV5Props) {
  return (
    <footer className="bg-[#0D1117] text-white py-24 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-6 gap-12 lg:gap-16 mb-20">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FF6A3D] flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Sun AI</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              We design and build intelligent software systems that help enterprises innovate faster and operate smarter.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:bg-[#FF6A3D] hover:border-[#FF6A3D] transition-colors text-slate-400 hover:text-white">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-[#FF6A3D] transition-colors">AI Product Design</a></li>
              <li><button onClick={onNavigateToWhatsApp} className="hover:text-[#FF6A3D] transition-colors text-left">WhatsApp Automation</button></li>
              {["Custom Agents", "Automation Systems", "LLM Integration", "Enterprise Engineering"].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#FF6A3D] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Versions</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
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
            <h4 className="font-bold text-lg mb-6 text-white">Industries</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {["Fintech & Banking", "Healthcare", "E-Commerce", "Logistics", "Real Estate"].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#FF6A3D] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={onNavigateToAbout} className="hover:text-[#FF6A3D] transition-colors text-left">About Us</button></li>
              {["Case Studies", "Blog", "Documentation", "Community", "Careers"].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#FF6A3D] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <div>© 2024 Sun AI Agency. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
