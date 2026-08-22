import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles } from 'lucide-react';

export const BrandsTickerSection: React.FC = () => {
  const { brands } = useApp();

  return (
    <div className="py-10 border-y border-slate-800/80 bg-[#070b10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          Trusted By Rapidly Scaling DTC & Growth Brands
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-x-hidden relative [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex gap-8 py-2 animate-marquee shrink-0 items-center">
          {brands.concat(brands).map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 shrink-0 hover:border-emerald-500/40 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="font-bold text-sm text-slate-200 tracking-wide font-display">
                {brand.name}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                {brand.growthMetric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
