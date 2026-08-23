import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import { 
  Calendar, 
  Menu, 
  X, 
  ArrowRight,
  LayoutDashboard
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { agencySettings, setIsBookingModalOpen, isAdmin, setIsAdmin } = useApp();
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

          {/* Right Action CTA & Admin Portal Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isAdmin
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 shadow-sm'
                  : 'bg-[#11141b]/90 text-slate-400 border-white/[0.08] hover:border-white/20 hover:text-white'
              }`}
              title="Toggle Custom Admin Dashboard & CMS"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isAdmin ? 'Exit Admin' : 'Admin'}</span>
            </button>

            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="relative group overflow-hidden rounded-full p-[1px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-amber-200/80 to-emerald-400 opacity-90 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#090b10] text-white text-xs font-bold uppercase tracking-wider transition-colors group-hover:bg-transparent group-hover:text-black">
                <Calendar className="w-3.5 h-3.5 text-emerald-400 group-hover:text-black" />
                <span>Book Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className="px-2.5 py-1.5 rounded-lg bg-[#11141b] border border-white/[0.08] text-xs text-slate-300 font-medium"
            >
              {isAdmin ? 'Site' : 'Admin'}
            </button>
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20"
            >
              <Calendar className="w-4 h-4" />
              Book Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
