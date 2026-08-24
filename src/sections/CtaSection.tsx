import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const { agencySettings } = useApp();

  return (
    <section id="book" className="py-20 sm:py-28 bg-black relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6 sm:space-y-8">
        
        {/* Clean Headline without background card */}
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Your brand is ready.
          </h2>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Are you?
          </h3>
        </div>

        {/* Subtitle */}
        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Book a strategy session to audit your ad account and growth roadmap.
        </p>

        {/* Apply Now Button */}
        <div className="pt-2 flex justify-center">
          <a
            href={agencySettings.bookingUrl || 'https://calendly.com/wanosmarketing01/work-with-wanos-to-scale-your-brand'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#E55353] hover:bg-[#D94747] text-white font-semibold text-base tracking-wide rounded-full transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-950/40 group"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};


