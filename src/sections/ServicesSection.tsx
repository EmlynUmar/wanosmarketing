import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { setIsBookingModalOpen } = useApp();

  const servicesList = [
    {
      title: 'Tiktok Ads',
      desc: "We leverage TikTok's algorithm with proven strategy and execution to drive consistent, scalable growth"
    },
    {
      title: 'Meta Ads',
      desc: 'We build targeted Meta campaigns using data and proven systems to reach the right audience and drive measurable growth'
    },
    {
      title: 'SMS / Email Marketing',
      desc: 'We turn email and SMS into predictable revenue channels through strategy, automation, and optimization'
    },
    {
      title: 'Website Development',
      desc: 'We build high-converting websites using proven systems, data, and UX strategy to turn traffic into revenue'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#07080a] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Ultra-Minimal Services Card */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0b0e14] border border-white/[0.08] shadow-2xl text-center space-y-10 sm:space-y-12">
          
          <div className="space-y-10 sm:space-y-12">
            {servicesList.map((service) => (
              <div key={service.title} className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-syne tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Pill Action Button */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-emerald-500/20 group"
            >
              <span>Book a 30-min call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

        {/* Minimal Transition Anchor directly following */}
        <div className="text-center mt-16 sm:mt-24 space-y-3 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-syne">
            Predictable, scalable growth
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            We build the strategy, frontend, and backend systems your brand needs to scale driving measurable growth, efficiency, and higher returns
          </p>
        </div>

      </div>
    </section>
  );
};

