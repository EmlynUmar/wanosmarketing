import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import { 
  Calendar, 
  Menu, 
  X, 
  ArrowRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { agencySettings } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'What We Do', href: '#services' },
    { label: 'Proof & ROAS', href: '#proof' },
    { label: 'Book a Call', href: '#book' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#07080a]/90 border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="inline-flex">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#11141b]/80 p-1.5 rounded-full border border-white/[0.08] shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={agencySettings.bookingUrl || 'https://calendly.com/wanosmarketing01/work-with-wanos-to-scale-your-brand'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E55353] hover:bg-[#D94747] text-white text-xs font-semibold tracking-wide transition-all shadow-lg shadow-red-950/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book a call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#11141b] border border-white/[0.08] text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-[#07080a]/98 backdrop-blur-2xl px-5 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wide text-slate-300 hover:text-white hover:bg-white/[0.05]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <a
              href={agencySettings.bookingUrl || 'https://calendly.com/wanosmarketing01/work-with-wanos-to-scale-your-brand'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#E55353] hover:bg-[#D94747] text-white font-semibold text-xs tracking-wide shadow-lg shadow-red-950/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a call</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
