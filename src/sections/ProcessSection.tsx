import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Sparkles, 
  Rocket, 
  Repeat, 
  ArrowRight,
  Calendar
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { agencySettings } = useApp();

  const steps = [
    {
      step: '01',
      title: 'Audit & Tracking Setup',
      desc: 'We analyze historical account data, set up Meta Conversions API (CAPI), and fix CPA leakage.',
      icon: <Search className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '02',
      title: 'Creative & Funnel Sprint',
      desc: 'We craft high-converting UGC hooks, ad angles, and frictionless instant-checkout landing pages.',
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '03',
      title: 'Scale & Retention Engine',
      desc: 'We scale winning ads aggressively to a 4.2x+ ROAS while installing automated email/SMS flows.',
      icon: <Rocket className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#090d14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase">
            Our 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            How We Scale Your Brand
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A simple, predictable framework built for speed and sustainable profit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0e141f] border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4 group relative"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-emerald-500/50 transition-colors">
                  {item.icon}
                </div>
                <span className="text-3xl font-black text-slate-800 group-hover:text-emerald-500/40 transition-colors font-display">
                  {item.step}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={agencySettings.bookingUrl || 'https://calendly.com/wanosmarketing01/work-with-wanos-to-scale-your-brand'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
