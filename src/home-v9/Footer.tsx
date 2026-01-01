'use client';

import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FOOTER_SECTIONS = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Start Project Wizard', href: '/wizard/step1' },
      { label: 'CRM', href: '/crm' },
      { label: 'Projects', href: '/projects' },
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Dashboard V2', href: '/dashboard-v2' },
      { label: 'API', href: '/api' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Support', href: '/support' },
      { label: 'Partners', href: '/partners' },
    ],
  },
  {
    title: 'V3',
    links: [
      { label: 'Lead Capture Wizard', href: '/wizard' },
      { label: 'AI Proposal', href: '/proposal' },
      { label: 'Leads Dashboard', href: '/app/leads' },
      { label: 'WhatsApp Hub', href: '/whatsapp' },
    ],
  },
];

const LOCATIONS = [
  { city: 'London', country: 'UK' },
  { city: 'Paris', country: 'France' },
  { city: 'New York', country: 'USA' },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-bold">Sun AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Building production-ready AI systems that drive real revenue.
              Launch in 8 weeks, not 8 months.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <a
                href="mailto:hello@sunai.agency"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail size={16} />
                <span>hello@sunai.agency</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Locations */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            <MapPin size={14} />
            <span>Global Presence</span>
          </div>
          <div className="flex flex-wrap gap-6">
            {LOCATIONS.map((location) => (
              <div
                key={location.city}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <span className="font-semibold">{location.city}</span>
                <span className="text-gray-500">, {location.country}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sun AI Agency. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}