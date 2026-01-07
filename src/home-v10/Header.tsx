import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6A3D] rounded-lg flex items-center justify-center">
              <span className="text-white text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>S</span>
            </div>
            <span className="text-xl text-[#0F172A]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sun AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
              Process
            </a>
            <a href="#" className="text-sm text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
              Industries
            </a>
            <a href="#" className="text-sm text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
              Services
            </a>
            <a href="#" className="text-sm text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
              Portfolio
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
              Sign In
            </a>
            <button className="px-6 py-2.5 bg-[#FF6A3D] text-white text-sm rounded-lg hover:bg-[#FF5A2D] transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0F172A]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-black/5 mt-4">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-sm text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
                Process
              </a>
              <a href="#" className="text-sm text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
                Industries
              </a>
              <a href="#" className="text-sm text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
                Services
              </a>
              <a href="#" className="text-sm text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
                Portfolio
              </a>
              <a href="#" className="text-sm text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
                Sign In
              </a>
              <button className="px-6 py-2.5 bg-[#FF6A3D] text-white text-sm rounded-lg hover:bg-[#FF5A2D] transition-colors w-full">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
