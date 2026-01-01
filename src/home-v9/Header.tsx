'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/v9" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Sun AI</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              How It Works
            </a>
            <a
              href="#what-we-build"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Expertise
            </a>
            <a
              href="#tech-stack"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Technology
            </a>
            <a
              href="#metrics"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Results
            </a>
            <a
              href="#velocity"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Velocity
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/contact"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Talk to Expert
            </a>
            <button className="px-6 py-2.5 bg-[#0A1628] text-white text-sm rounded-lg hover:bg-[#0A1628]/90 transition-all duration-300 hover:shadow-lg">
              Start Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a
                href="#how-it-works"
                className="text-sm text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#what-we-build"
                className="text-sm text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Expertise
              </a>
              <a
                href="#tech-stack"
                className="text-sm text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Technology
              </a>
              <a
                href="#metrics"
                className="text-sm text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Results
              </a>
              <a
                href="#velocity"
                className="text-sm text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Velocity
              </a>
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                <a
                  href="/contact"
                  className="text-sm text-gray-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Talk to Expert
                </a>
                <button className="px-6 py-2.5 bg-[#0A1628] text-white text-sm rounded-lg">
                  Start Project
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
