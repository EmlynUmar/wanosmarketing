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
  const { setIsBookingModalOpen } = useApp();

  const steps = [
    {
      step: '01',
      title: 'Deep Audit & Tracking Infrastructure',
      desc: 'We conduct a surgical audit of your historical ad accounts, set up Meta CAPI (Conversions API) server-side tracking, and pinpoint current CPA leakage.',
      icon: <Search className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '02',
      title: 'High-Velocity Creative Sprint',
      desc: 'Our creative team engineers 15+ data-backed hook variations, UGC scripts, and high-impact motion assets tailored for algorithmic feed retention.',
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '03',
      title: 'Algorithmic Bid Scaling',
      desc: 'We launch proprietary multi-angle testing campaigns, identifying winning angles within 48-72 hours and scaling profitable budget with strict CPA guardrails.',
      icon: <Rocket className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '04',
      title: 'Lifecycle & Retention Automation',
      desc: 'We turn one-off purchasers into high-LTV advocates by implementing Klaviyo retention flows, SMS cart recovery, and VIP customer referral triggers.',
      icon: <Repeat className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#090d14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase">
            Proven Growth Flywheel
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            How We Take Brands From Stalled To Scaling
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A battle-tested 4-step framework engineered to eliminate guesswork and generate consistent cash flow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0e141f] border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4 group relative"
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
                <h3 className="text-base font-bold text-white font-display">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Flywheel Strategy Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
