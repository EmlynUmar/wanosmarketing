import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { faqsList } from '../data/initialData';
import { 
  HelpCircle, 
  ChevronDown, 
  Mail, 
  Calendar, 
  ArrowRight 
} from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { agencySettings, setIsBookingModalOpen } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#090d14] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Everything You Need To Know
          </h2>
          <p className="text-slate-400 text-base">
            Transparent answers on our onboarding, creative processes, pricing frameworks, and scale methodology.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqsList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#111824] border-emerald-500/40 shadow-lg'
                    : 'bg-[#0e141f]/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-white font-display">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-900 text-emerald-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-emerald-500/20 text-emerald-300' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white font-display">
              Have a specific question about your store niche?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Email our senior strategists directly at <span className="text-emerald-400">{agencySettings.email}</span>
            </p>
          </div>

          <a
            href={agencySettings.bookingUrl || 'https://calendly.com/wanosmarketing01/work-with-wanos-to-scale-your-brand'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs rounded-xl transition-all shrink-0 flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Strategy Call</span>
          </a>
        </div>

      </div>
    </section>
  );
};
