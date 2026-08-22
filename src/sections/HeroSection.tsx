import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Calendar, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  DollarSign, 
  Zap, 
  Users, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { agencySettings, statistics, setIsBookingModalOpen, setSelectedProofCaseStudy, caseStudies } = useApp();

  const featuredStudy = caseStudies[0] || null;

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-inner shadow-emerald-500/10 backdrop-blur-md animate-fadeIn">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Performance Growth Engine • 34.65x Record ROAS</span>
          </div>
        </div>

        {/* Main Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-display">
            Turn Paid Traffic Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Predictable Revenue
            </span>{' '}
            & Scaled Profits.
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            We partner with ambitious DTC & high-growth brands to build scalable customer acquisition systems through <span className="text-white font-semibold">Meta & TikTok performance advertising</span>, <span className="text-white font-semibold">UGC creative engineering</span>, and <span className="text-white font-semibold">automated retention</span>.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-base rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-emerald-500/25 group"
            >
              <Calendar className="w-5 h-5" />
              <span>Book 1-on-1 Strategy Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#proof"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-base rounded-2xl border border-slate-700/80 transition-all backdrop-blur-md"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>View Verified ROAS Proof</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-2 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Long-Term Lock-in</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Unedited Ads Manager Proof</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dedicated Media Buying Specialists</span>
            </div>
          </div>
        </div>

        {/* Dynamic Growth Statistics Cards */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {statistics.slice(0, 4).map((stat) => (
            <div
              key={stat.id}
              className={`p-5 rounded-2xl border transition-all relative overflow-hidden backdrop-blur-md ${
                stat.highlight
                  ? 'bg-gradient-to-b from-emerald-950/40 via-slate-900/80 to-[#0e1622] border-emerald-500/40 shadow-lg shadow-emerald-950/30'
                  : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                {stat.changePercent && (
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                    {stat.changePercent}
                  </span>
                )}
              </div>

              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                <span className="text-emerald-400">{stat.prefix}</span>
                {stat.value}
                <span className="text-emerald-400">{stat.suffix}</span>
              </div>

              <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Proof Spotlight Strip */}
        {featuredStudy && (
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">
                    Featured Case Study: {featuredStudy.clientName}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                    {featuredStudy.roas.toFixed(2)}x ROAS
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  ${featuredStudy.adSpend.toLocaleString()} Ad Spend turned into ${featuredStudy.revenueGenerated.toLocaleString()} Revenue with $3.00 CPA
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedProofCaseStudy(featuredStudy)}
              className="w-full sm:w-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-bold rounded-xl border border-emerald-500/30 flex items-center justify-center gap-1.5 transition-colors shrink-0"
            >
              <span>Inspect Campaign Proof</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
