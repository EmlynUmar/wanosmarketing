import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { MetaAdsCampaignTable } from '../components/MetaAdsCampaignTable';

export const ProofShowcaseSection: React.FC = () => {
  const { caseStudies, agencySettings } = useApp();

  return (
    <section id="proof" className="py-16 sm:py-24 bg-black relative text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Minimalist Stacked Vertical Proof Stream */}
        <div className="space-y-16 sm:space-y-24">
          {caseStudies.slice(0, 4).map((study) => (
            <div
              key={study.id}
              className="flex flex-col items-center group"
            >
              {/* Bold Title Directly Above Proof Card */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8 tracking-tight max-w-2xl px-2 leading-snug">
                {study.clientName}
              </h3>

              {/* Clean Proof Container with Meta Ads Dashboard Screenshot */}
              <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white text-zinc-900 shadow-2xl border border-white/10 transition-all duration-300 hover:border-white/20">
                {/* Meta Ads Dashboard Proof Screenshot */}
                <div className="w-full relative bg-white flex items-center justify-center overflow-x-auto">
                  <img
                    src={study.screenshotUrl}
                    alt={study.clientName}
                    className="w-full h-auto object-contain block select-none"
                    loading="eager"
                  />
                </div>

                {/* Performance Summary Bar */}
                <div className="bg-[#11141c] text-white px-5 sm:px-8 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                  <div className="flex items-center gap-6 sm:gap-10 flex-wrap">
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-medium text-zinc-400">Total Spend</span>
                      <span className="text-sm sm:text-base font-bold text-white">${study.adSpend.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-medium text-zinc-400">Total Revenue</span>
                      <span className="text-sm sm:text-base font-bold text-emerald-400">${study.revenueGenerated.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs uppercase font-medium text-zinc-400">Orders</span>
                      <span className="text-sm sm:text-base font-bold text-white">{study.purchases} Purchases</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold text-xs sm:text-sm">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{study.roas}x ROAS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA within Proof Section */}
        <div className="pt-16 sm:pt-20 text-center">
          <a
            href={agencySettings.bookingUrl || 'https://calendly.com/wanosmarketing01/work-with-wanos-to-scale-your-brand'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E55353] hover:bg-[#D94747] text-white font-medium text-sm sm:text-base tracking-wide rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-950/30"
          >
            <span>Get Similar Results</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
