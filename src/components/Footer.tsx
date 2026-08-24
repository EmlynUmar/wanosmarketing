import React from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { agencySettings } = useApp();

  return (
    <footer className="bg-black border-t border-white/[0.07] text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.07]">
          <div className="flex items-center gap-4">
            <Logo size="sm" showBadge={false} />
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-wider font-semibold">
            <a href="#services" className="text-zinc-400 hover:text-white transition-colors">Services</a>
            <a href="#proof" className="text-zinc-400 hover:text-white transition-colors">Results</a>
            <a href="#book" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} {agencySettings.agencyName}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
            <span>Built by</span>
            <a 
              href="https://leenco.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-300 hover:text-white font-medium transition-colors underline underline-offset-4 decoration-zinc-600 hover:decoration-white"
            >
              Leen-Co Tech
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
