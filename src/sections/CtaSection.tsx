import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const { agencySettings } = useApp();

  return (
    <section id="book" className="py-20 sm:py-28 bg-black relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Ready to take your brand to the next level?
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          We don’t just run your ads. We build the system that scales your brand from offer strategy and high-converting websites to email, SMS, and customer value optimization.
        </p>

        <div className="pt-2 flex justify-center">
          <a
            href={agencySettings.bookingUrl || 'https://calendly.com/wanosmarketing01/work-with-wanos-to-scale-your-brand'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#E55353] hover:bg-[#D94747] text-white font-medium text-sm sm:text-base tracking-wide rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-red-950/30 group"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};


