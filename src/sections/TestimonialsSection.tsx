import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Quote, 
  Star, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowRight
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials, setIsBookingModalOpen } = useApp();

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#070b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase">
            <Quote className="w-4 h-4" />
            Verified Client Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            What E-Commerce Founders Say About Wanos
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hear directly from the brand leaders and CMOs scaling their customer acquisition systems with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0e141f]/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-6 shadow-xl relative group backdrop-blur-md"
            >
              <div className="space-y-4">
                
                {/* Rating & Metric Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    {t.metricBadge}
                  </span>
                </div>

                {/* Message */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{t.message}"
                </p>
              </div>

              {/* Author Strip */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.clientName}
                    className="w-11 h-11 rounded-full object-cover border border-emerald-500/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5 font-display">
                      <span>{t.clientName}</span>
                      {t.verified && (
                        <span title="Verified Client">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        </span>
                      )}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t.position}, <span className="text-slate-300 font-medium">{t.company}</span>
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  {t.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
