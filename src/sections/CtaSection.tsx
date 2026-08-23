import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  Check
} from 'lucide-react';

export const CtaSection: React.FC = () => {
  const { setIsBookingModalOpen } = useApp();

  return (
    <section id="book" className="py-16 sm:py-24 bg-gradient-to-b from-[#07080a] via-[#0a0c10] to-[#07080a] relative overflow-hidden">
      
      {/* Glow background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121620] via-[#0d1016] to-[#07090d] border border-white/[0.09] shadow-2xl text-center space-y-5 relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151a24] border border-white/[0.08] text-slate-300 text-[11px] font-mono tracking-widest uppercase">
            <Sparkles className="w-3 h-3 text-amber-300" />
            [ SCALE WITH US ]
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight font-syne max-w-xl mx-auto">
            Ready To Scale With{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-100 to-teal-200">
              Verified ROAS?
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed font-normal">
            Book a 1-on-1 strategy session to audit your ad account and growth roadmap.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20 group"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-5 text-[11px] sm:text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> 1-on-1 Audit</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Custom Strategy</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Zero Lock-in</span>
          </div>

        </div>
      </div>
    </section>
  );
};
