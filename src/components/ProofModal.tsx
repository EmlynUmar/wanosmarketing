import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  ShieldCheck, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp, 
  Sparkles,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export const ProofModal: React.FC = () => {
  const { selectedProofCaseStudy, setSelectedProofCaseStudy, setIsBookingModalOpen } = useApp();
  const [isZoomed, setIsZoomed] = useState(false);

  // Lock body scroll when modal is active on mobile & desktop
  useEffect(() => {
    if (selectedProofCaseStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsZoomed(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProofCaseStudy]);

  if (!selectedProofCaseStudy) return null;

  const study = selectedProofCaseStudy;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto overscroll-contain animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setSelectedProofCaseStudy(null);
        }
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#0b0e14] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/[0.08] bg-[#0e1219]/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-[#141822] text-emerald-400 border border-white/[0.08]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-bold text-white font-syne">
                  {study.clientName}
                </h3>
                <span className="px-2.5 py-0.5 text-[10px] font-extrabold rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-black uppercase tracking-wider font-mono">
                  {study.roas.toFixed(2)}x ROAS
                </span>
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                {study.industry} • Live Verified Ads Manager Audit
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-colors touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
              title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4 text-emerald-400" />}
            </button>
            <button
              type="button"
              onClick={() => setSelectedProofCaseStudy(null)}
              className="p-2 text-slate-300 hover:text-white rounded-full bg-white/[0.05] hover:bg-white/[0.1] transition-colors touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Close proof dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6 flex-1">
          
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 bg-[#0e1219]/80 p-3 sm:p-4 rounded-2xl border border-white/[0.06]">
            <div className="p-3 bg-[#080a0e] rounded-xl border border-white/[0.05]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <DollarSign className="w-3 h-3 text-slate-400" /> Ad Spend
              </span>
              <span className="text-base sm:text-lg font-bold text-white font-syne">
                ${study.adSpend.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </span>
            </div>

            <div className="p-3 bg-[#080a0e] rounded-xl border border-white/[0.05]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <ShoppingCart className="w-3 h-3 text-slate-400" /> Conversions
              </span>
              <span className="text-base sm:text-lg font-bold text-white font-syne">
                {study.purchases.toLocaleString()}
              </span>
            </div>

            <div className="p-3 bg-[#080a0e] rounded-xl border border-white/[0.05]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <TrendingUp className="w-3 h-3 text-emerald-400" /> Revenue
              </span>
              <span className="text-base sm:text-lg font-bold text-emerald-400 font-syne">
                ${study.revenueGenerated.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </span>
            </div>

            <div className="p-3 bg-gradient-to-br from-emerald-950/60 to-[#0e141d] rounded-xl border border-emerald-500/30">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 flex items-center gap-1 mb-1 font-semibold">
                <Sparkles className="w-3 h-3 text-emerald-400" /> Verified ROAS
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-emerald-400 font-syne">
                {study.roas.toFixed(2)}x
              </span>
            </div>
          </div>

          {/* Screenshot proof image with zoom capability */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" /> Authenticated Dashboard Proof
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                {isZoomed ? 'Tap image to reset zoom' : 'Tap image to zoom in'}
              </span>
            </div>

            <div 
              role="button"
              tabIndex={0}
              onClick={() => setIsZoomed(!isZoomed)}
              className={`relative rounded-2xl border border-white/[0.08] bg-black overflow-x-auto overflow-y-hidden cursor-zoom-in transition-all touch-manipulation select-none ${
                isZoomed ? 'max-h-none' : 'max-h-[380px] sm:max-h-[440px]'
              }`}
            >
              <img
                src={study.screenshotUrl}
                alt={`${study.clientName} campaign proof`}
                className={`w-full object-contain mx-auto transition-transform duration-300 ${
                  isZoomed ? 'scale-125 sm:scale-135 my-8 origin-top' : 'scale-100'
                }`}
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/85 backdrop-blur-md rounded-full text-[10px] font-mono uppercase tracking-wider text-slate-300 border border-white/10 pointer-events-none">
                Live Screenshot
              </div>
            </div>
          </div>

          {/* Campaign Strategy Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#0e1219]/60 border border-white/[0.06] space-y-1.5">
              <h4 className="font-bold text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Campaign Objective
              </h4>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-normal">
                {study.objective}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0e1219]/60 border border-white/[0.06] space-y-1.5">
              <h4 className="font-bold text-[11px] font-mono uppercase tracking-wider text-emerald-300">
                Growth Execution Strategy
              </h4>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-normal">
                {study.strategy}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-4 border-t border-white/[0.08] bg-[#090b10] shrink-0">
          <div className="text-xs text-slate-400 font-mono hidden sm:block">
            [ READY TO ACHIEVE COMPARABLE SCALE? ]
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
            <button
              type="button"
              onClick={() => setSelectedProofCaseStudy(null)}
              className="px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedProofCaseStudy(null);
                setIsBookingModalOpen(true);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-full transition-transform active:scale-95 shadow-lg shadow-emerald-500/20 touch-manipulation"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Strategy Call</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
