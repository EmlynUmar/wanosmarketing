import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const { setIsBookingModalOpen } = useApp();

  const [monthlyAdSpend, setMonthlyAdSpend] = useState<number>(5000);
  const [targetRoas, setTargetRoas] = useState<number>(4.2);
  const [currentAov, setCurrentAov] = useState<number>(75);
  const [storeConversionRate, setStoreConversionRate] = useState<number>(2.4);

  // Calculations
  const projectedRevenue = monthlyAdSpend * targetRoas;
  const projectedOrders = Math.round(projectedRevenue / currentAov);
  const estimatedNetGrossProfit = projectedRevenue - monthlyAdSpend - (projectedOrders * (currentAov * 0.35)); // assuming 35% COGS
  const estimatedCostPerAcquisition = monthlyAdSpend / (projectedOrders || 1);

  return (
    <div id="calculator" className="py-16 sm:py-24 bg-gradient-to-b from-[#090d14] via-[#0d131f] to-[#090d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase">
            <Calculator className="w-3.5 h-3.5" />
            ROAS Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Calculate Your Revenue at 4.2x ROAS
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how your monthly ad spend scales into top-line revenue based on our 4.2x average ROAS performance.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 bg-[#111722]/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                Input Your Current Metrics
              </h3>
              <span className="text-xs text-slate-400">Live Dynamic Modeling</span>
            </div>

            {/* Slider 1: Monthly Ad Spend */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium flex items-center gap-1.5">
                  Monthly Ad Spend Budget
                </label>
                <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-bold font-display">
                  ${monthlyAdSpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={monthlyAdSpend}
                onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>$1,000</span>
                <span>$25,000</span>
                <span>$50,000+</span>
              </div>
            </div>

            {/* Slider 2: Target Return on Ad Spend (ROAS) */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium">
                  Target Blended ROAS Multiple
                </label>
                <span className="px-3 py-1 bg-emerald-950/60 border border-emerald-500/30 rounded-lg text-emerald-300 font-extrabold font-display">
                  {targetRoas.toFixed(1)}x ROAS
                </span>
              </div>
              <input
                type="range"
                min={2.0}
                max={30.0}
                step={0.5}
                value={targetRoas}
                onChange={(e) => setTargetRoas(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>2.0x (Standard)</span>
                <span>8.0x (High Scale)</span>
                <span>30.0x (Wanos Peak)</span>
              </div>
            </div>

            {/* Controls: AOV and Conv Rate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Average Order Value (AOV)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
                  <input
                    type="number"
                    min={10}
                    max={2000}
                    value={currentAov}
                    onChange={(e) => setCurrentAov(Math.max(1, Number(e.target.value)))}
                    className="w-full pl-7 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Store Conversion Rate (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min={0.5}
                    max={15}
                    value={storeConversionRate}
                    onChange={(e) => setStoreConversionRate(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:border-emerald-500 focus:outline-none"
                  />
                  <span className="absolute right-3 top-2.5 text-slate-400 text-sm">%</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Based on verified WanosMarketing client data across 500+ growth campaigns.</span>
            </div>
          </div>

          {/* Projection Card Results */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#121c29] via-[#0e1622] to-[#090d14] p-6 sm:p-8 rounded-2xl border border-emerald-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            
            {/* Glow backdrop */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Projected Monthly Outcome
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                  {targetRoas}x Efficiency
                </span>
              </div>

              {/* Huge Revenue Number */}
              <div>
                <span className="text-xs text-slate-400 block mb-1">
                  Projected Monthly Gross Revenue
                </span>
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-emerald-300 font-display">
                  ${projectedRevenue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </div>
                <span className="text-xs text-emerald-400 font-semibold block mt-1">
                  +${(projectedRevenue - monthlyAdSpend).toLocaleString()} Revenue Added Over Ad Spend
                </span>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-0.5">Purchases / Orders</span>
                  <span className="text-xl font-bold text-white font-display">
                    {projectedOrders.toLocaleString()} orders
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    @ ~${estimatedCostPerAcquisition.toFixed(2)} CPA
                  </span>
                </div>

                <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-0.5">Estimated Est. Net Cash</span>
                  <span className="text-xl font-bold text-emerald-400 font-display">
                    ${Math.max(0, estimatedNetGrossProfit).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Post-Ad Spend & COGS
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Includes proprietary multi-angle hook testing framework</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Includes Klaviyo email & SMS 35%+ automated retention engine</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 relative z-10">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all transform hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-emerald-500/25"
              >
                <Calendar className="w-4 h-4" />
                <span>Unlock This Growth Model For Your Brand</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
