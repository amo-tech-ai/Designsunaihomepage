import { Mail, Twitter, Linkedin, Github, Send } from 'lucide-react';

interface FooterV3Props {
  onNavigateToWizard?: () => void;
  onNavigateToDashboard?: () => void;
}

export function FooterV3({ onNavigateToWizard, onNavigateToDashboard }: FooterV3Props) {
  const footerColumns = [
    {
      title: 'Services',
      links: [
        { label: 'AI Applications', onClick: undefined },
        { label: 'Multi-Agent Systems', onClick: undefined },
        { label: 'Automation', onClick: undefined },
        { label: 'Consulting', onClick: undefined },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'FashionOS', onClick: undefined },
        { label: 'Sun Market', onClick: undefined },
        { label: 'AgentHub', onClick: undefined },
        { label: 'Custom Builds', onClick: undefined },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', onClick: undefined },
        { label: 'Documentation', onClick: undefined },
        { label: 'Case Studies', onClick: undefined },
        { label: 'Brief Generator', onClick: onNavigateToWizard },
        { label: 'Project Dashboard', onClick: onNavigateToDashboard },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', onClick: undefined },
        { label: 'Careers', onClick: undefined },
        { label: 'Contact', onClick: undefined },
        { label: 'Partners', onClick: undefined },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', onClick: undefined },
        { label: 'Terms', onClick: undefined },
        { label: 'Security', onClick: undefined },
        { label: 'Cookies', onClick: undefined },
      ],
    },
  ];

  return (
    <footer className="bg-[#F7F9FB] py-20 px-6 md:px-12 lg:px-24 border-t border-[#E9EAEE]">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-[#E9EAEE]">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#00334F] to-[#00334F]/80 flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            
            <h3 
              className="text-[24px] text-[#202020] mb-3"
              style={{ fontWeight: 600 }}
            >
              Stay Updated on AI Innovation
            </h3>
            
            <p className="text-[14px] text-[#555] mb-8">
              Get insights on AI product development, automation strategies, and industry trends.
            </p>
            
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white border border-[#E9EAEE] text-[#202020] placeholder-[#555]/50 focus:outline-none focus:border-[#00334F] transition-colors"
              />
              <button 
                className="px-6 py-4 bg-[#00334F] text-white rounded-full hover:bg-[#00334F]/90 transition-all flex items-center gap-2"
                style={{ fontWeight: 600, boxShadow: '0 4px 12px rgba(0, 51, 79, 0.2)' }}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h4 
                className="text-[#202020] text-[14px] mb-6 uppercase tracking-wider"
                style={{ fontWeight: 600 }}
              >
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#"
                      onClick={(e) => {
                        if (link.onClick) {
                          e.preventDefault();
                          link.onClick();
                        }
                      }}
                      className="text-[#555] text-[14px] hover:text-[#00334F] transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider with decorative element */}
        <div className="relative mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-[#E9EAEE] to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 bg-[#F7F9FB] px-4">
            <div className="w-1 h-1 rounded-full bg-[#00334F] opacity-30"></div>
            <div className="w-1 h-1 rounded-full bg-[#FF6A3D] opacity-50"></div>
            <div className="w-1 h-1 rounded-full bg-[#00334F] opacity-30"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00334F] to-[#00334F]/80 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
              </div>
              <div 
                className="text-[24px] text-[#202020]"
                style={{ fontWeight: 600 }}
              >
                Sun AI
              </div>
            </div>
            <p className="text-[#555] text-[13px]">
              © 2025 Sun AI. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="w-10 h-10 rounded-full bg-white border border-[#E9EAEE] flex items-center justify-center hover:border-[#00334F] hover:bg-[#00334F] group transition-all"
              >
                <Icon className="w-4 h-4 text-[#555] group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}