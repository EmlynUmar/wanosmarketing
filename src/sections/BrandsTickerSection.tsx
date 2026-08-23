import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles } from 'lucide-react';

export const BrandsTickerSection: React.FC = () => {
  const { brands } = useApp();

  return (
    <div className="py-9 border-y border-white/[0.07] bg-[#07080a] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          [ SELECTED CLIENTS & GROWTH PARTNERS ]
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-x-hidden relative [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <div className="flex gap-6 py-1.5 animate-marquee shrink-0 items-center">
          {brands.concat(brands).map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#10131a]/80 border border-white/[0.08] shrink-0 hover:border-white/20 transition-all shadow-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              <span className="font-semibold text-xs text-slate-200 tracking-wider font-syne uppercase">
                {brand.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-semibold border border-emerald-500/20">
                {brand.growthMetric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
