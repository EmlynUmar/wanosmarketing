import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  FolderKanban, 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  ExternalLink, 
  Sparkles,
  ArrowRight,
  Maximize2,
  Calendar
} from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const { caseStudies, setSelectedProofCaseStudy, setIsBookingModalOpen } = useApp();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = ['All', ...Array.from(new Set(caseStudies.map(c => c.industry.split(' ')[0])))];

  const filtered = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(c => c.industry.includes(selectedIndustry));

  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-[#090d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase">
              <FolderKanban className="w-4 h-4" />
              Comprehensive Campaign Breakdown
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Case Studies In Growth Engineering
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore how we solved critical customer acquisition bottlenecks across distinct e-commerce verticals.
            </p>
          </div>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  selectedIndustry === ind
                    ? 'bg-emerald-500 text-black border-emerald-400 shadow-md font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-6">
          {filtered.map((study) => (
            <div
              key={study.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0e141f] border border-slate-800 hover:border-emerald-500/40 transition-all shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group"
            >
              
              {/* Left Column: Image Proof Thumbnail */}
              <div 
                onClick={() => setSelectedProofCaseStudy(study)}
                className="lg:col-span-4 relative h-48 sm:h-56 bg-black rounded-xl overflow-hidden cursor-pointer group-hover:ring-2 group-hover:ring-emerald-500/40 transition-all"
              >
                <img
                  src={study.screenshotUrl}
                  alt={study.clientName}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-emerald-500 text-black text-xs font-bold flex items-center gap-1 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Proof</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-semibold text-emerald-400 block uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <span className="text-base font-bold text-white drop-shadow">
                    {study.clientName}
                  </span>
                </div>
              </div>

              {/* Middle Column: Campaign Narrative */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    {study.roas.toFixed(2)}x Verified ROAS
                  </span>
                  <span className="text-xs text-slate-400">
                    {study.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display group-hover:text-emerald-300 transition-colors">
                  {study.campaignTitle}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {study.objective}
                </p>

                <div className="p-3 bg-slate-900/70 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
                  <div>
                    <strong className="text-slate-200">Execution:</strong> {study.strategy}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Results & Action */}
              <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800/80">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Ad Spend</span>
                    <span className="font-bold text-white">${study.adSpend.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Total Purchases</span>
                    <span className="font-bold text-white">{study.purchases.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Avg CPA</span>
                    <span className="font-bold text-emerald-400">${study.costPerPurchase.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Gross Revenue</span>
                    <span className="font-extrabold text-emerald-400 text-sm font-display">${study.revenueGenerated.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProofCaseStudy(study)}
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 hover:text-black border border-emerald-500/30 text-emerald-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Inspect Audit Proof</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
