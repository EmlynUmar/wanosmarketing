import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react';

export const CtaSection: React.FC = () => {
  const { setIsBookingModalOpen } = useApp();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#090d14] via-[#0b1019] to-[#06090e] relative overflow-hidden">
      
      {/* Glow background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#121c2a] via-[#0e1622] to-[#090d14] border border-emerald-500/40 shadow-2xl text-center space-y-6 relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Limited Monthly Client Roster
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-display max-w-3xl mx-auto">
            Ready To Scale Your Brand With Predictable Paid Growth?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop guessing with your ad budget. Partner with an agency with verified 34.65x ROAS track record and dedicated full-funnel execution.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-base rounded-2xl transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/30"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Free Growth Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>• 30-Min Confidential Account Audit</span>
            <span>• 3 Actionable Creative Hook Angles</span>
            <span>• Direct Strategy With Agency Leadership</span>
          </div>

        </div>
      </div>
    </section>
  );
};
