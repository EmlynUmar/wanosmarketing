import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Sparkles, 
  Maximize2, 
  ArrowRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const ProofShowcaseSection: React.FC = () => {
  const { caseStudies, setSelectedProofCaseStudy, setIsBookingModalOpen } = useApp();

  return (
    <section id="proof" className="py-20 sm:py-28 bg-[#090d14] relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4" />
            Verified Ad Account Performance Proof
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Real Screenshots. Real Spend. Real ROAS.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't deal in vague marketing promises. Here is unedited, live proof from Meta Ads Manager, TikTok Ads, and Shopify stores we scaled.
          </p>
        </div>

        {/* Proof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-[#111722]/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-emerald-950/20"
            >
              
              {/* Card Screenshot Preview */}
              <div 
                onClick={() => setSelectedProofCaseStudy(study)}
                className="relative h-52 bg-black overflow-hidden cursor-pointer group-hover:opacity-95"
              >
                <img
                  src={study.screenshotUrl}
                  alt={`${study.clientName} Ad Account Proof`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-transparent to-black/40"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                  {study.industry}
                </div>

                {/* Zoom indicator */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-emerald-500/90 text-black shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-white drop-shadow-md">
                    {study.clientName}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-black font-extrabold text-xs shadow-md">
                    {study.roas.toFixed(2)}x ROAS
                  </span>
                </div>
              </div>

              {/* Card Content & Metrics */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                
                {/* Metric Strip */}
                <div className="grid grid-cols-3 gap-2 bg-[#090d14] p-3 rounded-xl border border-slate-800/80 text-center">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-medium block">Spend</span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      ${study.adSpend.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="border-x border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-medium block">Purchases</span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {study.purchases.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-400 uppercase font-medium block">Revenue</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400 font-display">
                      ${study.revenueGenerated.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>

                {/* Brief Summary */}
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {study.campaignTitle}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {study.resultsSummary}
                  </p>
                </div>

                {/* Tags & Action */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {study.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProofCaseStudy(study)}
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View Proof</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-emerald-300 hover:text-white text-sm font-bold transition-all shadow-lg shadow-emerald-950/40"
          >
            <Calendar className="w-4 h-4" />
            <span>Ready to see results like these in your ad account? Book a consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
