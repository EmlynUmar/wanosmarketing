import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  TrendingUp, 
  Calendar, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  LayoutDashboard
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { agencySettings, setIsBookingModalOpen, isAdmin, setIsAdmin } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Verified Proof', href: '#proof' },
    { label: 'Growth Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'ROAS Calculator', href: '#calculator' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#090d14]/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 p-[1.5px] shadow-lg shadow-emerald-950/40">
              <div className="w-full h-full bg-[#090d14] rounded-[10px] flex items-center justify-center transition-transform group-hover:scale-95">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-display">
                  {agencySettings.agencyName}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  34.6x Peak ROAS
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                Performance Growth Engine
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
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
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
              title="Toggle Custom Admin Dashboard & CMS"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isAdmin ? 'Exit Admin View' : 'Admin Portal'}</span>
            </button>

            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="relative group overflow-hidden rounded-xl p-[1px] font-semibold shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 group-hover:opacity-100 transition-opacity animate-pulse-slow"></span>
              <span className="relative flex items-center gap-2 px-4 py-2.5 rounded-[11px] bg-[#090d14] text-white text-sm transition-colors group-hover:bg-emerald-600 group-hover:text-black font-bold">
                <Calendar className="w-4 h-4 text-emerald-400 group-hover:text-black" />
                <span>Book Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300"
            >
              {isAdmin ? 'Site' : 'Admin'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-[#090d14]/95 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-black font-bold text-sm shadow-md"
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
