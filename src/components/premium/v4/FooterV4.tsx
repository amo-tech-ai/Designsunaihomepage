import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function FooterV4() {
  return (
    <footer className="bg-[#00334F] text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#FF6B2C]" />
              <span className="text-2xl font-bold tracking-tight">Sun AI</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Building the next generation of intelligent software systems for forward-thinking enterprises.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B2C] transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              {["AI Development", "Multi-Agent Systems", "Automation", "Consulting", "Enterprise Integration"].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#FF6B2C] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              {["About", "Case Studies", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#FF6B2C] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-slate-400 mb-4 text-sm">Join our newsletter for the latest AI insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B2C]"
              />
              <button className="bg-[#FF6B2C] px-4 py-3 rounded-lg font-bold hover:bg-[#FF855F] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <div>© 2024 Sun AI Agency. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
