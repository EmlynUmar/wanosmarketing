import React from 'react';
import { useApp } from '../context/AppContext';
import { Star } from 'lucide-react';

// Dedicated brand logo vector renderers to guarantee zero latency and exact brand fidelity
const TESTIMONIAL_BRAND_LOGOS: Record<string, React.ReactNode> = {
  'bu.bully': (
    <svg viewBox="0 0 56 56" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Crisp white rounded background badge */}
      <rect width="56" height="56" rx="14" fill="#FFFFFF" />
      
      {/* Lowercase bubble 'b' with grey outline */}
      <g transform="translate(4, 27) scale(0.23)">
        <path
          d="M 8 0 H 42 V 46 C 50 34 66 28 86 28 C 118 28 142 50 142 80 C 142 110 118 132 86 132 C 66 132 50 126 42 114 V 132 H 8 Z"
          fill="#FFFFFF"
          stroke="#9E9EA0"
          strokeWidth="12"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <ellipse
          cx="78"
          cy="80"
          rx="22"
          ry="16"
          fill="#FFFFFF"
          stroke="#9E9EA0"
          strokeWidth="12"
        />
      </g>
      
      {/* Big Crimson Red 'U' */}
      <path
        d="M 25 12.5 H 35.5 V 32.5 C 35.5 36.5 37.5 38.5 41.5 38.5 C 45.5 38.5 47.5 36.5 47.5 32.5 V 12.5 H 58 V 32.5 C 58 42.5 51.5 48.5 41.5 48.5 C 31.5 48.5 25 42.5 25 32.5 Z"
        fill="#BA0005"
      />
    </svg>
  ),
  'La Raza': (
    <svg viewBox="0 0 320 280" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="test_raza_hatch" width="6" height="6" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" />
        </pattern>
      </defs>
      <g strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(90, 16)">
          <path d="M 38 12 L 52 4 L 44 26 L 30 20 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
          <path d="M 30 20 L 44 26 L 42 62 L 24 56 Z" fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
          <path d="M 44 26 L 54 32 L 52 68 L 42 62 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
          <path d="M 24 56 C 24 56 12 50 4 62 C -4 74 2 86 16 88 C 30 90 44 76 56 74 C 68 72 74 76 74 76 L 70 82 C 70 82 62 78 52 80 C 40 82 24 96 12 94 C -2 92 -10 76 -2 60 C 6 44 20 48 24 56 Z" 
                fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
          <path d="M 44 26 L 60 20 L 66 28 L 50 34 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" />
          
          <g transform="translate(68, 30)">
            <path d="M 18 6 L 30 0 L 36 12 L 24 18 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 8 22 L 18 16 L 24 24 L 14 30 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M 8 22 L 14 30 L 12 52 L 4 46 Z" fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 24 18 L 36 12 L 36 50 L 24 56 Z" fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 36 12 L 44 18 L 44 54 L 36 50 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 4 46 C 4 46 12 56 24 56 L 36 56 L 42 62 L 20 62 C 10 62 0 52 4 46 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 16 32 L 24 28 L 24 44 L 16 46 Z" fill="#090A0F" stroke="#FFFFFF" strokeWidth="1.8" />
          </g>
        </g>
        <g transform="translate(25, 126)">
          <g transform="translate(0, 0)">
            <path d="M 26 8 L 40 0 L 34 20 L 20 16 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 20 16 L 34 20 L 32 64 L 18 58 Z" fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 34 20 L 42 26 L 40 68 L 32 64 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 34 20 C 44 14 62 14 68 26 C 74 38 66 50 48 52 L 32 52 Z" fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 68 26 L 76 32 C 76 46 64 56 46 58 L 48 52 C 66 50 74 38 68 26 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 44 48 L 58 48 L 74 88 L 58 88 Z" fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 58 48 L 66 52 L 82 92 L 74 88 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 18 58 C 18 58 6 52 -4 64 C -14 78 -4 94 12 96 C 28 98 42 84 50 82 C 58 80 62 84 62 84 L 58 90 C 58 90 50 86 42 88 C 30 92 14 104 2 100 C -12 96 -20 80 -10 64 C -2 46 14 50 18 58 Z" 
                  fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
          </g>
          <g transform="translate(86, 20)">
            <path d="M 18 6 L 30 0 L 36 12 L 24 18 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 8 22 L 18 16 L 24 24 L 14 30 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M 8 22 L 14 30 L 12 52 L 4 46 Z" fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 24 18 L 36 12 L 36 50 L 24 56 Z" fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 36 12 L 44 18 L 44 54 L 36 50 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 4 46 C 4 46 12 56 24 56 L 36 56 L 42 62 L 20 62 C 10 62 0 52 4 46 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 16 32 L 24 28 L 24 44 L 16 46 Z" fill="#090A0F" stroke="#FFFFFF" strokeWidth="1.8" />
          </g>
          <g transform="translate(142, 20)">
            <path d="M 4 8 L 14 2 L 36 2 L 32 14 L 14 14 L 8 20 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 32 14 L 36 8 L 16 52 L 10 46 Z" fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 36 8 L 44 14 L 24 56 L 16 52 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 10 46 L 24 56 C 24 56 34 54 36 64 C 38 76 26 84 14 84 C 4 84 -2 76 4 70 C 8 66 16 68 16 72 C 16 76 10 78 8 76 C 6 74 8 72 10 72 C 14 72 24 74 24 68 C 24 62 16 60 8 58 L 2 50 Z" 
                  fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
          </g>
          <g transform="translate(196, 20)">
            <path d="M 18 6 L 30 0 L 36 12 L 24 18 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 8 22 L 18 16 L 24 24 L 14 30 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M 8 22 L 14 30 L 12 52 L 4 46 Z" fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 24 18 L 36 12 L 36 50 L 24 56 Z" fill="url(#test_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 36 12 L 44 18 L 44 54 L 36 50 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 4 46 C 4 46 12 56 24 56 L 36 56 L 42 62 L 20 62 C 10 62 0 52 4 46 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 16 32 L 24 28 L 24 44 L 16 46 Z" fill="#090A0F" stroke="#FFFFFF" strokeWidth="1.8" />
          </g>
        </g>
      </g>
    </svg>
  )
};

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = useApp();

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            What other brands say
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Direct feedback from brands scaling predictable returns with WanosMarketing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-7 sm:p-8 rounded-3xl bg-[#0e1017] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-6 shadow-xl relative group"
            >
              <div className="space-y-4">
                
                {/* Rating & Metric Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#161a24] border border-white/10 text-white text-xs font-semibold">
                    {t.metricBadge}
                  </span>
                </div>

                {/* Message */}
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                  "{t.message}"
                </p>
              </div>

              {/* Brand Logo and Name Only */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                <div className="flex items-center gap-3.5">
                  {TESTIMONIAL_BRAND_LOGOS[t.company] || TESTIMONIAL_BRAND_LOGOS[t.clientName] ? (
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-1 shrink-0 overflow-hidden">
                      {TESTIMONIAL_BRAND_LOGOS[t.company] || TESTIMONIAL_BRAND_LOGOS[t.clientName]}
                    </div>
                  ) : t.logoSvg ? (
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-1.5 shrink-0">
                      <img
                        src={t.logoSvg}
                        alt={t.company}
                        className="max-h-7 max-w-7 object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {t.company}
                  </h4>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


