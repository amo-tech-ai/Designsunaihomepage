import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../ui/design-system/Button';

interface NavbarV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
  onVersionChange?: (version: any) => void;
}

export function NavbarV7({ onNavigateToWhatsApp, onNavigateToAbout, onVersionChange }: NavbarV7Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNav = (route: string) => {
    if (onVersionChange) onVersionChange(route);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNav('v7')}>
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg shadow-slate-900/20">
            <span className="text-white font-heading font-bold text-xl">S</span>
          </div>
          <span className="font-heading font-bold text-xl text-slate-900 tracking-tight">Sun AI</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 font-body">
          
          <button onClick={() => handleNav('v7')} className="hover:text-slate-900 transition-colors">Home</button>

          {/* Services Dropdown */}
          <div className="relative group" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 hover:text-slate-900 transition-colors py-4">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className={`absolute top-full -left-4 w-56 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden transition-all duration-200 ${activeDropdown === 'services' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
              <div className="p-2 flex flex-col gap-1">
                <button onClick={() => handleNav('services-v2')} className="text-left px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-900 transition-colors">All Services</button>
                <button onClick={() => handleNav('ai-web-dev')} className="text-left px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-900 transition-colors">Web Development</button>
                <button onClick={() => handleNav('ai-agents')} className="text-left px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-900 transition-colors">AI Agents</button>
                <button onClick={() => handleNav('ai-chatbots')} className="text-left px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-slate-900 transition-colors">Chatbots</button>
              </div>
            </div>
          </div>
          
          <button onClick={onNavigateToAbout} className="hover:text-slate-900 transition-colors">About</button>

          <button onClick={() => handleNav('booking')} className="hover:text-slate-900 transition-colors">Contact</button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button onClick={() => handleNav('login')} className="text-sm font-bold text-slate-900 hover:text-orange-500 transition-colors px-4 py-2">
            Sign In
          </button>
          <Button variant="primary" size="sm" className="h-10 px-6 rounded-lg text-sm shadow-lg shadow-orange-500/20" onClick={() => handleNav('wizard')}>
            Create Project
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-20 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-2">
          <div className="p-6 flex flex-col gap-4">
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Menu</p>
              <button onClick={() => handleNav('v7')} className="text-left w-full text-slate-900 font-bold text-lg">Home</button>
              <button onClick={() => handleNav('services-v2')} className="text-left w-full text-slate-900 font-bold text-lg">Services</button>
              <button onClick={onNavigateToAbout} className="text-left w-full text-slate-900 font-bold text-lg">About</button>
              <button onClick={() => handleNav('booking')} className="text-left w-full text-slate-900 font-bold text-lg">Contact</button>
            </div>

            <hr className="border-slate-100" />

            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Account</p>
              <button onClick={() => handleNav('login')} className="text-left w-full text-slate-600 font-medium">Sign In</button>
              <button onClick={() => handleNav('dashboard')} className="text-left w-full text-slate-600 font-medium">Dashboard</button>
            </div>
            
            <div className="pt-4">
              <Button variant="primary" className="w-full h-12 text-lg shadow-lg shadow-orange-500/20" onClick={() => handleNav('wizard')}>
                Create Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
