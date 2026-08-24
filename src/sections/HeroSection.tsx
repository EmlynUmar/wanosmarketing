import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, TrendingUp, DollarSign, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { agencySettings } = useApp();

  // Smooth number counting animation for immediate authority impact
  const [spendCount, setSpendCount] = useState<number>(0);
  const [roasCount, setRoasCount] = useState<number>(0);

  useEffect(() => {
    const duration = 1400; // ms
    const startTime = performance.now();

    const updateCounts = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setSpendCount(Number((easeOut * 1.2).toFixed(1)));
      setRoasCount(Number((easeOut * 4.2).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        setSpendCount(1.2);
        setRoasCount(4.2);
      }
    };

    const animId = requestAnimationFrame(updateCounts);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-20 bg-black text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Urgent Warning Toast / Pill with single blinking red beacon */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#11141c] border border-white/10 shadow-lg shadow-black/60 backdrop-blur-md">
            {/* Blinking red beacon */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 animate-beacon"></span>
            </span>
            
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-200 uppercase">
              Few slots available
            </span>
          </div>
        </div>

        {/* Main Headline - Clean Bold Typography */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
          Ready to take your brand to the next level?
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
          We don’t just run your ads. We build the system that scales your brand from offer strategy and high-converting websites to email, SMS, and customer value optimization.
        </p>

        {/* Single Prominent Coral/Red CTA Button: Get Started */}
        <div className="pt-2 flex justify-center">
          <a
            href={agencySettings.bookingUrl || 'https://calendly.com/wanosmarketing01/work-with-wanos-to-scale-your-brand'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#E55353] hover:bg-[#D94747] text-white font-medium text-sm sm:text-base tracking-wide rounded-full transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-950/30 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* High-Impact Authority Counter Component */}
        <div className="pt-6 sm:pt-8 flex justify-center">
          <div className="w-full max-w-xl grid grid-cols-2 gap-3 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-[#0D1017] border border-white/[0.08] shadow-2xl shadow-black/80 backdrop-blur-xl">
            
            {/* Stat 1: Cumulative Ad Spend Managed */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-black/40 border border-white/[0.04]">
              <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Ad Spend Managed
                </span>
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ${spendCount.toFixed(1)}M
                </span>
                <span className="text-emerald-400 text-lg sm:text-2xl font-bold">+</span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-zinc-500 font-medium mt-0.5">
                Cumulative capital deployed
              </span>
            </div>

            {/* Stat 2: Average ROAS Achieved */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-black/40 border border-white/[0.04]">
              <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Average ROAS
                </span>
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {roasCount.toFixed(1)}x
                </span>
                <span className="text-blue-400 text-sm sm:text-base font-bold ml-1">avg</span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-zinc-500 font-medium mt-0.5">
                Verified portfolio return
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


