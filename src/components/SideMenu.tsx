import { Home, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface SideMenuProps {
  currentVersion: 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7' | 'wizard' | 'processing' | 'proposal' | 'dashboard' | 'leads' | 'whatsapp' | 'about' | 'style-guide' | 'sitemap' | 'booking';
  onVersionChange: (version: 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7' | 'wizard' | 'processing' | 'proposal' | 'dashboard' | 'leads' | 'whatsapp' | 'about' | 'style-guide' | 'sitemap' | 'booking') => void;
}

export function SideMenu({ currentVersion, onVersionChange }: SideMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-32 left-8 z-50 w-12 h-12 bg-[#00334F] text-white rounded-full shadow-lg hover:bg-[#00334F]/90 transition-all flex items-center justify-center"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8">
          {/* Header */}
          <div className="mb-12 pt-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#00334F] flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <h2
                className="text-[24px] text-[#202020]"
                style={{ fontWeight: 600 }}
              >
                Sun AI
              </h2>
            </div>
            <p className="text-[14px] text-[#555]">
              Choose a homepage version
            </p>
          </div>

          {/* Version Links */}
          <div className="space-y-3">
            <button
              onClick={() => {
                onVersionChange('v1');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'v1'
                  ? 'bg-[#00334F] text-white shadow-md'
                  : 'bg-[#F7F9FB] text-[#202020] hover:bg-[#E9EAEE]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-[16px] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Version 1
                  </div>
                  <div
                    className={`text-[13px] ${
                      currentVersion === 'v1'
                        ? 'text-white/80'
                        : 'text-[#555]'
                    }`}
                  >
                    Original Design
                  </div>
                </div>
                {currentVersion === 'v1' && (
                  <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
                )}
              </div>
            </button>

            <button
              onClick={() => {
                onVersionChange('v2');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'v2'
                  ? 'bg-[#00334F] text-white shadow-md'
                  : 'bg-[#F7F9FB] text-[#202020] hover:bg-[#E9EAEE]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-[16px] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Version 2
                  </div>
                  <div
                    className={`text-[13px] ${
                      currentVersion === 'v2'
                        ? 'text-white/80'
                        : 'text-[#555]'
                    }`}
                  >
                    Premium Editorial Style
                  </div>
                </div>
                {currentVersion === 'v2' && (
                  <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
                )}
              </div>
            </button>

            <button
              onClick={() => {
                onVersionChange('v3');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'v3'
                  ? 'bg-[#00334F] text-white shadow-md'
                  : 'bg-[#F7F9FB] text-[#202020] hover:bg-[#E9EAEE]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-[16px] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Version 3
                  </div>
                  <div
                    className={`text-[13px] ${
                      currentVersion === 'v3'
                        ? 'text-white/80'
                        : 'text-[#555]'
                    }`}
                  >
                    Data-Driven Motion Design
                  </div>
                </div>
                {currentVersion === 'v3' && (
                  <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
                )}
              </div>
            </button>

            <button
              onClick={() => {
                onVersionChange('v4');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'v4'
                  ? 'bg-[#00334F] text-white shadow-md'
                  : 'bg-[#F7F9FB] text-[#202020] hover:bg-[#E9EAEE]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-[16px] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Version 4
                  </div>
                  <div
                    className={`text-[13px] ${
                      currentVersion === 'v4'
                        ? 'text-white/80'
                        : 'text-[#555]'
                    }`}
                  >
                    Premium Illustrated Scroll UI
                  </div>
                </div>
                {currentVersion === 'v4' && (
                  <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
                )}
              </div>
            </button>

            <button
              onClick={() => {
                onVersionChange('v5');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'v5'
                  ? 'bg-[#00334F] text-white shadow-md'
                  : 'bg-[#F7F9FB] text-[#202020] hover:bg-[#E9EAEE]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-[16px] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Version 5
                  </div>
                  <div
                    className={`text-[13px] ${
                      currentVersion === 'v5'
                        ? 'text-white/80'
                        : 'text-[#555]'
                    }`}
                  >
                    Light & Dark Hybrid Premium
                  </div>
                </div>
                {currentVersion === 'v5' && (
                  <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
                )}
              </div>
            </button>

            <button
              onClick={() => {
                onVersionChange('v6');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'v6'
                  ? 'bg-[#00334F] text-white shadow-md'
                  : 'bg-[#F7F9FB] text-[#202020] hover:bg-[#E9EAEE]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-[16px] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Version 6
                  </div>
                  <div
                    className={`text-[13px] ${
                      currentVersion === 'v6'
                        ? 'text-white/80'
                        : 'text-[#555]'
                    }`}
                  >
                    Breef-Inspired Clean AI
                  </div>
                </div>
                {currentVersion === 'v6' && (
                  <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
                )}
              </div>
            </button>

            <button
              onClick={() => {
                onVersionChange('v7');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'v7'
                  ? 'bg-[#00334F] text-white shadow-md'
                  : 'bg-[#F7F9FB] text-[#202020] hover:bg-[#E9EAEE]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-[16px] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Version 7
                  </div>
                  <div
                    className={`text-[13px] ${
                      currentVersion === 'v7'
                        ? 'text-white/80'
                        : 'text-[#555]'
                    }`}
                  >
                    Clean Light AI Platform
                  </div>
                </div>
                {currentVersion === 'v7' && (
                  <div className="w-2 h-2 rounded-full bg-[#FF6A3D]"></div>
                )}
              </div>
            </button>

            {/* Brief Wizard Button */}
            <button
              onClick={() => {
                onVersionChange('wizard');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'wizard'
                  ? 'bg-gradient-to-r from-[#FF6B2C] to-[#FF8A4F] text-white shadow-md'
                  : 'bg-[#F7F9FB] text-[#202020] hover:bg-[#E9EAEE]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-[16px] mb-1 flex items-center gap-2"
                    style={{ fontWeight: 600 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Brief Wizard
                  </div>
                  <div
                    className={`text-[13px] ${
                      currentVersion === 'wizard'
                        ? 'text-white/80'
                        : 'text-[#555]'
                    }`}
                  >
                    5-Screen Interactive Brief
                  </div>
                </div>
                {currentVersion === 'wizard' && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
            </button>

            {/* Docs & System */}
             <div className="pt-4 pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Docs & System
            </div>

            <button
              onClick={() => {
                onVersionChange('sitemap');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'sitemap'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-100 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[15px] font-semibold mb-1">Architecture</div>
                  <div className={`text-[13px] ${currentVersion === 'sitemap' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Sitemap & Routing
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                onVersionChange('style-guide');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'style-guide'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-100 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[15px] font-semibold mb-1">Style Guide</div>
                  <div className={`text-[13px] ${currentVersion === 'style-guide' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Design Tokens & Components
                  </div>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => {
                onVersionChange('booking');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'booking'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-100 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[15px] font-semibold mb-1">Booking & Payment</div>
                  <div className={`text-[13px] ${currentVersion === 'booking' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Stripe Integration Mockup
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                onVersionChange('leads');
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                currentVersion === 'leads'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-100 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[15px] font-semibold mb-1">Internal CRM</div>
                  <div className={`text-[13px] ${currentVersion === 'leads' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Lead Dashboard Mockup
                  </div>
                </div>
              </div>
            </button>

          </div>

          {/* Info */}
          <div className="mt-12 pt-8 border-t border-[#E9EAEE]">
            <p className="text-[13px] text-[#555] leading-[1.6]">
              Toggle between different homepage designs or explore the interactive Brief Wizard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}