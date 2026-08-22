import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Target, 
  MailCheck, 
  LayoutTemplate, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Calendar
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { services, setIsBookingModalOpen } = useApp();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-6 h-6 text-emerald-400" />;
      case 'MailCheck':
        return <MailCheck className="w-6 h-6 text-emerald-400" />;
      case 'LayoutTemplate':
        return <LayoutTemplate className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      default:
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#070b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase">
            <Target className="w-4 h-4" />
            Full-Funnel Customer Acquisition Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Engineered For Scale. Optimized For Net Profit.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't just "run ads". We architect the entire customer conversion journey from the first algorithmic impression to high-LTV repeat purchases.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between relative group backdrop-blur-md ${
                service.popular
                  ? 'bg-gradient-to-b from-[#131d2b] to-[#0d1420] border-emerald-500/40 shadow-xl shadow-emerald-950/30'
                  : 'bg-[#0f1520]/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-emerald-500 text-black font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div className="space-y-5">
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:scale-105 transition-all">
                  {getServiceIcon(service.icon)}
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Metric Badge */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-emerald-400 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                  <span>{service.metrics}</span>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                    What's Included:
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-black text-slate-300 text-xs font-bold border border-slate-700/80 hover:border-emerald-500 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Inquire for {service.title.split(' ')[0]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
