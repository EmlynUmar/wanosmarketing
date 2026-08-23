import React from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { agencySettings, setIsAdmin } = useApp();

  return (
    <footer className="bg-[#07080a] border-t border-white/[0.07] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.07]">
          <div className="flex items-center gap-4">
            <Logo size="sm" showBadge={false} />
            <span className="hidden sm:inline text-xs text-slate-700">|</span>
            <span className="hidden sm:inline text-xs text-slate-400 font-mono tracking-wider uppercase">
              Brand & Performance Lab • 4.2x Verified ROAS
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-wider font-semibold">
            <a href="#services" className="text-slate-400 hover:text-white transition-colors">What We Do</a>
            <a href="#proof" className="text-slate-400 hover:text-white transition-colors">Proof Vault</a>
            <a href="#book" className="text-slate-400 hover:text-white transition-colors">Contact</a>
            <button
              onClick={() => setIsAdmin(true)}
              className="text-slate-500 hover:text-emerald-400 transition-colors uppercase tracking-wider"
            >
              Admin Portal
            </button>
          </div>
        </div>

        {/* Bottom divider with Leen-Co Tech Developer credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {agencySettings.agencyName}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Engineered by</span>
            <a 
              href="https://leenco.tech" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-emerald-300 font-semibold flex items-center gap-0.5 transition-colors underline-offset-4 hover:underline"
            >
              Leen-Co Tech Ltd
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
