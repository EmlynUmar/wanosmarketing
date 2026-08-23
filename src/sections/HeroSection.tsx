import React from 'react';
import { useApp } from '../context/AppContext';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  TrendingUp
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { statistics, setIsBookingModalOpen } = useApp();

  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
      
      {/* Refined Ambient Luxury Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[340px] bg-gradient-to-r from-emerald-500/10 via-amber-400/5 to-teal-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Classy Eyebrow Pill */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#11141b]/90 border border-white/[0.1] text-xs font-semibold text-slate-300 tracking-wider uppercase shadow-xl backdrop-blur-xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[11px] sm:text-xs tracking-wider text-slate-300">
              GROWTH & PERFORMANCE LAB • <span className="text-emerald-400 font-bold">4.2x AVERAGE ROAS</span>
            </span>
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] font-syne">
            We Scale Brands With{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-100 to-teal-200">
              Precision Performance.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
            Paid media, creative testing, and high-converting web infrastructure engineered for predictable ROAS.
          </p>

          {/* Luxury CTA Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-emerald-500/20 group"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#proof"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-[#11141b]/90 hover:bg-[#161a23] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full border border-white/[0.1] transition-all backdrop-blur-md"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Explore Proof</span>
            </a>
          </div>

          {/* Minimalist Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-[11px] sm:text-xs text-slate-400 pt-1 font-mono">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>4.2x Avg ROAS</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Creative Testing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Lock-in</span>
            </div>
          </div>
        </div>

        {/* Classy Animated Stat Modules */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto">
          {statistics.slice(0, 3).map((stat, index) => (
            <div
              key={stat.id}
              className={`p-5 rounded-2xl border text-center transition-all relative backdrop-blur-xl ${
                stat.highlight
                  ? 'bg-gradient-to-b from-[#141923] via-[#0d1017] to-[#0a0d13] border-emerald-500/30 shadow-xl shadow-emerald-950/20'
                  : 'bg-[#10131a]/80 border-white/[0.07]'
              }`}
            >
              <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-1">
                [ 0{index + 1} // METRIC ]
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-syne">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="text-white"
                />
              </div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
