import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  TrendingUp, 
  Mail, 
  Calendar, 
  ShieldCheck, 
  ExternalLink, 
  ArrowUpRight 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { agencySettings, setIsBookingModalOpen, setIsAdmin } = useApp();

  return (
    <footer className="bg-[#06090e] border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1.5px]">
                <div className="w-full h-full bg-[#06090e] rounded-[10px] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white font-display">
                {agencySettings.agencyName}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {agencySettings.heroSubheadline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={agencySettings.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={agencySettings.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={`mailto:${agencySettings.email}`}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="Email Support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Growth Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Growth Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Paid Social (Meta & TikTok)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Email & SMS Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Landing Page Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Creative Strategy & Hooks</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Server-Side CAPI Tracking</a></li>
            </ul>
          </div>

          {/* Col 3: Case Studies & Proof */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Verified Results
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#proof" className="hover:text-white transition-colors">34.65x ROAS Apparel Scale</a></li>
              <li><a href="#proof" className="hover:text-white transition-colors">$98K Skincare Acquisition</a></li>
              <li><a href="#proof" className="hover:text-white transition-colors">$182K Subscription Model</a></li>
              <li><a href="#proof" className="hover:text-white transition-colors">TikTok Viral Ad Case Study</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">ROAS ROI Simulator</a></li>
            </ul>
          </div>

          {/* Col 4: Conversion & Booking */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get Started
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book a private 30-min strategy session to diagnose your acquisition bottlenecks.
            </p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Strategy Call</span>
            </button>
            <div className="pt-2">
              <button
                onClick={() => setIsAdmin(true)}
                className="text-[11px] text-slate-500 hover:text-slate-300 underline transition-colors"
              >
                Access Admin Dashboard
              </button>
            </div>
          </div>

        </div>

        {/* Bottom divider with Leen-Co Tech Developer credit as in README */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {agencySettings.agencyName}. All rights reserved. Proprietary software.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Developed by</span>
            <a 
              href="https://leenco.tech" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-emerald-400 font-semibold flex items-center gap-0.5 transition-colors"
            >
              Leen-Co Tech Ltd
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-500 text-[11px]">Making it Easy to do and Run Businesses Anywhere.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
