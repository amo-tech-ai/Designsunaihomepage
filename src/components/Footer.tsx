import { Mail } from 'lucide-react';

interface FooterProps {
  onNavigateToWizard?: () => void;
  onNavigateToDashboard?: () => void;
}

export function Footer({ onNavigateToWizard, onNavigateToDashboard }: FooterProps) {
  const footerSections = [
    {
      title: 'Sun AI',
      links: [
        { label: 'hello@sunai.com', href: 'mailto:hello@sunai.com', onClick: undefined },
        { label: 'San Francisco, CA', href: '#', onClick: undefined },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'AI Applications', href: '#', onClick: undefined },
        { label: 'Automation Systems', href: '#', onClick: undefined },
        { label: 'Custom Agents', href: '#', onClick: undefined },
        { label: 'Consulting', href: '#', onClick: undefined },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', href: '#', onClick: undefined },
        { label: 'Blog', href: '#', onClick: undefined },
        { label: 'Documentation', href: '#', onClick: undefined },
        { label: 'AI Brief Generator', href: '#', onClick: onNavigateToWizard },
        { label: 'Project Dashboard', href: '#', onClick: onNavigateToDashboard },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#', onClick: undefined },
        { label: 'Terms of Service', href: '#', onClick: undefined },
        { label: 'Cookie Policy', href: '#', onClick: undefined },
      ],
    },
  ];

  return (
    <footer className="bg-[#00334F] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white text-[18px] mb-6" style={{ fontWeight: 500 }}>
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
                      className="text-white/70 text-[16px] hover:text-[#FF6B2C] transition-colors cursor-pointer"
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
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-md">
            <h4 className="text-white text-[18px] mb-4" style={{ fontWeight: 500 }}>
              Stay Updated
            </h4>
            <div className="flex gap-3">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FF6B2C] transition-colors"
              />
              <button className="px-6 py-3 bg-[#FF6B2C] text-white rounded-full hover:bg-[#ff5515] transition-all flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-[14px]">
            © 2025 Sun AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-[#FF6B2C] text-[14px] transition-colors">
              Twitter
            </a>
            <a href="#" className="text-white/50 hover:text-[#FF6B2C] text-[14px] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-white/50 hover:text-[#FF6B2C] text-[14px] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}