import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  ExternalLink, 
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

  if (!selectedProofCaseStudy) return null;

  const study = selectedProofCaseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0e131d] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-display">
                  {study.clientName}
                </h3>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {study.roas.toFixed(2)}x Verified ROAS
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {study.industry} • Live Meta Ads Manager Screenshot
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            >
              {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setSelectedProofCaseStudy(null)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="p-3 bg-[#090d14] rounded-lg border border-slate-800/80">
              <span className="text-xs text-slate-400 flex items-center gap-1 mb-1 font-medium">
                <DollarSign className="w-3.5 h-3.5 text-slate-400" /> Ad Spend
              </span>
              <span className="text-lg sm:text-xl font-bold text-white">
                ${study.adSpend.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>

            <div className="p-3 bg-[#090d14] rounded-lg border border-slate-800/80">
              <span className="text-xs text-slate-400 flex items-center gap-1 mb-1 font-medium">
                <ShoppingCart className="w-3.5 h-3.5 text-slate-400" /> Purchases
              </span>
              <span className="text-lg sm:text-xl font-bold text-white">
                {study.purchases.toLocaleString()}
              </span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">
                ${study.costPerPurchase.toFixed(2)} CPA
              </span>
            </div>

            <div className="p-3 bg-[#090d14] rounded-lg border border-slate-800/80">
              <span className="text-xs text-slate-400 flex items-center gap-1 mb-1 font-medium">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Revenue
              </span>
              <span className="text-lg sm:text-xl font-bold text-emerald-400 font-display">
                ${study.revenueGenerated.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>

            <div className="p-3 bg-gradient-to-br from-emerald-950/60 to-slate-900 rounded-lg border border-emerald-500/30">
              <span className="text-xs text-emerald-300 flex items-center gap-1 mb-1 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Verified ROAS
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-display">
                {study.roas.toFixed(2)}x
              </span>
            </div>
          </div>

          {/* Screenshot proof image with zoom capability */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Direct Unedited Campaign Audit Asset
              </span>
              <span>Click image to toggle zoom</span>
            </div>

            <div 
              onClick={() => setIsZoomed(!isZoomed)}
              className={`relative rounded-xl border border-slate-700/80 bg-black overflow-hidden cursor-zoom-in transition-all ${
                isZoomed ? 'max-h-none' : 'max-h-[450px]'
              }`}
            >
              <img
                src={study.screenshotUrl}
                alt={`${study.clientName} campaign proof`}
                className={`w-full object-contain mx-auto transition-transform duration-300 ${
                  isZoomed ? 'scale-110 sm:scale-125 my-8' : 'scale-100'
                }`}
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-lg text-xs text-slate-300 border border-white/10 pointer-events-none">
                Verified Screenshot Proof
              </div>
            </div>
          </div>

          {/* Campaign Details & Strategy Breakdown */}
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider text-slate-400">
                Campaign Challenge & Objective
              </h4>
              <p className="text-slate-300 leading-relaxed">
                {study.objective}
              </p>
              <p className="text-xs text-slate-400 pt-1 border-t border-slate-800">
                <span className="font-semibold text-slate-300">Challenge:</span> {study.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider text-emerald-400">
                Growth Execution Strategy
              </h4>
              <p className="text-slate-300 leading-relaxed">
                {study.strategy}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {study.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-slate-800 text-slate-300 text-[11px] rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-[#090d14] shrink-0">
          <div className="text-xs text-slate-400 hidden sm:block">
            Want these exact performance metrics engineered for your brand?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => setSelectedProofCaseStudy(null)}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                setSelectedProofCaseStudy(null);
                setIsBookingModalOpen(true);
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm rounded-xl transition-transform active:scale-95 shadow-lg shadow-emerald-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Call to Scale</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
