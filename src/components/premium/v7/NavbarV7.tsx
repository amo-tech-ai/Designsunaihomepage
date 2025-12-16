import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarV7Props {
  onNavigateToWhatsApp?: () => void;
  onNavigateToAbout?: () => void;
}

export function NavbarV7({ onNavigateToWhatsApp, onNavigateToAbout }: NavbarV7Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-[#FF6A3D] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl text-slate-900">Sun AI</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-[#FF6A3D] transition-colors">Product</a>
          <button onClick={onNavigateToWhatsApp} className="hover:text-[#FF6A3D] transition-colors">Solutions</button>
          <a href="#" className="hover:text-[#FF6A3D] transition-colors">Pricing</a>
          <button onClick={onNavigateToAbout} className="hover:text-[#FF6A3D] transition-colors">Company</button>
          <a href="#" className="hover:text-[#FF6A3D] transition-colors">Blog</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-bold text-slate-900 hover:text-[#FF6A3D]">Login</a>
          <button className="px-5 py-2.5 bg-[#FF6A3D] text-white text-sm font-bold rounded-lg hover:bg-[#E55A2F] transition-all shadow-lg shadow-orange-500/20">
            Book a Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-6 absolute w-full left-0 top-20 shadow-xl flex flex-col gap-4">
          <a href="#" className="text-slate-600 font-medium">Product</a>
          <button onClick={onNavigateToWhatsApp} className="text-left text-slate-600 font-medium">Solutions</button>
          <a href="#" className="text-slate-600 font-medium">Pricing</a>
          <button onClick={onNavigateToAbout} className="text-left text-slate-600 font-medium">Company</button>
          <hr className="border-slate-100" />
          <a href="#" className="text-slate-600 font-medium">Login</a>
          <button className="w-full py-3 bg-[#FF6A3D] text-white font-bold rounded-lg">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
}
