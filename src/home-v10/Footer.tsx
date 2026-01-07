import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FF6A3D] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>S</span>
              </div>
              <span className="text-xl text-[#0F172A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Sun AI
              </span>
            </div>
            <p className="text-sm text-[#0F172A]/60 mb-6">
              AI-powered business systems that help companies grow, automate, and operate smarter.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-[#FAF7F2] rounded-lg flex items-center justify-center hover:bg-[#FF6A3D] hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#FAF7F2] rounded-lg flex items-center justify-center hover:bg-[#FF6A3D] hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#FAF7F2] rounded-lg flex items-center justify-center hover:bg-[#FF6A3D] hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm mb-4 text-[#0F172A]">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm mb-4 text-[#0F172A]">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm mb-4 text-[#0F172A]">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#0F172A]/60 hover:text-[#0F172A] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#0F172A]/60">
            © 2025 Sun AI Agency. All rights reserved.
          </p>
          <p className="text-sm text-[#0F172A]/60">
            Built with AI, designed for humans.
          </p>
        </div>
      </div>
    </footer>
  );
}
