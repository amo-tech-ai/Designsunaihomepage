import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

interface FooterV2Props {
  onNavigateToWizard?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function FooterV2({ onNavigateToWizard, onNavigateToDashboard, onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: FooterV2Props) {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#', onClick: onNavigateToAbout },
        { label: 'Case Studies', href: '#', onClick: undefined },
        { label: 'Careers', href: '#', onClick: undefined },
        { label: 'Contact', href: '#', onClick: undefined },
      ],
    },
    {
      title: 'Versions',
      links: [
        { label: 'Version 1', href: '#', onClick: () => onVersionChange?.('v1') },
        { label: 'Version 2', href: '#', onClick: () => onVersionChange?.('v2') },
        { label: 'Version 3', href: '#', onClick: () => onVersionChange?.('v3') },
        { label: 'Version 4', href: '#', onClick: () => onVersionChange?.('v4') },
        { label: 'Version 5', href: '#', onClick: () => onVersionChange?.('v5') },
        { label: 'Version 6', href: '#', onClick: () => onVersionChange?.('v6') },
        { label: 'Version 7', href: '#', onClick: () => onVersionChange?.('v7') },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'AI Applications', href: '#', onClick: undefined },
        { label: 'WhatsApp Automation', href: '#', onClick: onNavigateToWhatsApp },
        { label: 'Custom Agents', href: '#', onClick: undefined },
        { label: 'Automation Systems', href: '#', onClick: undefined },
        { label: 'Consulting', href: '#', onClick: undefined },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#', onClick: undefined },
        { label: 'Documentation', href: '#', onClick: undefined },
        { label: 'Brief Generator', href: '#', onClick: onNavigateToWizard },
        { label: 'Project Dashboard', href: '#', onClick: onNavigateToDashboard },
        { label: 'Community', href: '#', onClick: undefined },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#', onClick: undefined },
        { label: 'Terms of Service', href: '#', onClick: undefined },
        { label: 'Cookie Policy', href: '#', onClick: undefined },
        { label: 'Security', href: '#', onClick: undefined },
      ],
    },
  ];

  return (
    <footer className="bg-[#F7F9FB] py-20 px-6 md:px-12 lg:px-24 border-t border-[#E9EAEE]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 
                className="text-[#202020] text-[16px] mb-6"
                style={{ fontWeight: 600 }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
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

        {/* Newsletter */}
        <div className="mb-16 pb-16 border-b border-[#E9EAEE]">
          <div className="max-w-xl mx-auto text-center">
            <h4 
              className="text-[#202020] text-[20px] mb-3"
              style={{ fontWeight: 600 }}
            >
              Stay Updated on AI Innovation
            </h4>
            <p className="text-[14px] text-[#555] mb-6">
              Get insights on AI product development, automation strategies, and industry trends.
            </p>
            <div className="flex gap-3">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white border border-[#E9EAEE] text-[#202020] placeholder-[#555]/50 focus:outline-none focus:border-[#00334F] transition-colors"
              />
              <button 
                className="px-6 py-3 bg-[#00334F] text-white rounded-full hover:bg-[#00334F]/90 transition-all flex items-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <Mail className="w-5 h-5" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-8">
            <div 
              className="text-[24px] text-[#202020]"
              style={{ fontWeight: 600 }}
            >
              Sun AI
            </div>
            <p className="text-[#555] text-[14px]">
              © 2025 Sun AI. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white border border-[#E9EAEE] flex items-center justify-center hover:border-[#00334F] hover:bg-[#00334F] hover:text-white transition-all group"
            >
              <Twitter className="w-4 h-4 text-[#555] group-hover:text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white border border-[#E9EAEE] flex items-center justify-center hover:border-[#00334F] hover:bg-[#00334F] hover:text-white transition-all group"
            >
              <Linkedin className="w-4 h-4 text-[#555] group-hover:text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white border border-[#E9EAEE] flex items-center justify-center hover:border-[#00334F] hover:bg-[#00334F] hover:text-white transition-all group"
            >
              <Github className="w-4 h-4 text-[#555] group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}