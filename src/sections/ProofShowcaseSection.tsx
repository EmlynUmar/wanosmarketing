import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  Maximize2, 
  ArrowRight,
  Calendar,
  Sparkles
} from 'lucide-react';

export const ProofShowcaseSection: React.FC = () => {
  const { caseStudies, setSelectedProofCaseStudy, setIsBookingModalOpen } = useApp();

  return (
    <section id="proof" className="py-20 sm:py-28 bg-[#07080a] relative">
      
      {/* Background subtle luxury glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-syne">
            Generating $92k in new revenue?{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-200 to-teal-200 block sm:inline">
              Just another day at the office.
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Live, unedited performance screenshots directly from partner client accounts.
          </p>
        </div>

        {/* Minimal Proof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {caseStudies.slice(0, 3).map((study) => (
            <div
              key={study.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProofCaseStudy(study)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProofCaseStudy(study);
                }
              }}
              className="bg-[#0e1117]/90 border border-white/[0.08] rounded-3xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xl hover:shadow-emerald-950/20 touch-manipulation select-none active:scale-[0.99]"
            >
              {/* Card Screenshot Preview */}
              <button
                type="button"
                aria-label={`View proof for ${study.clientName}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProofCaseStudy(study);
                }}
                className="relative h-48 sm:h-52 w-full bg-black overflow-hidden block text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                <img
                  src={study.screenshotUrl}
                  alt={`${study.clientName} Proof`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117] via-transparent to-black/30 pointer-events-none"></div>

                {/* ROAS Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-extrabold text-xs shadow-md pointer-events-none tracking-wide">
                  {study.roas.toFixed(2)}x ROAS
                </div>

                {/* Zoom Icon */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase border border-white/10">
                  <Maximize2 className="w-3 h-3 text-emerald-400" />
                  <span>Inspect</span>
                </div>
              </button>

              {/* Minimal Card Details */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors font-syne">
                    {study.clientName}
                  </h4>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{study.industry}</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2.5 px-3.5 rounded-2xl bg-[#131720] border border-white/[0.06]">
                  <div>
                    <span className="text-slate-400 text-[10px] block uppercase font-mono tracking-wider">Ad Spend</span>
                    <span className="font-bold text-white text-sm">
                      ${study.adSpend.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-[10px] block uppercase font-mono tracking-wider">Revenue</span>
                    <span className="font-bold text-emerald-400 text-sm font-syne">
                      ${study.revenueGenerated.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProofCaseStudy(study);
                  }}
                  className="w-full pt-1 flex items-center justify-between text-xs text-emerald-300 font-bold uppercase tracking-wider hover:text-emerald-200 transition-colors"
                >
                  <span>Inspect Live Audit Data</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Booking Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#11141b] hover:bg-[#161b24] border border-emerald-500/30 text-emerald-300 hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/20"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Ready for performance like this? Schedule a Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
