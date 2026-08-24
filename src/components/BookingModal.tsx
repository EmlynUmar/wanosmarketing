import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import { 
  X, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  Building,
  Mail,
  User,
  Sparkles
} from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { isBookingModalOpen, setIsBookingModalOpen, agencySettings, submitLead } = useApp();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isBookingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isBookingModalOpen]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandName: '',
    websiteUrl: '',
    adSpendBudget: '$5,000 - $15,000 / mo',
    primaryGoal: 'Scale paid ads with 4.2x+ ROAS'
  });

  if (!isBookingModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead({
      name: formData.name,
      email: formData.email,
      brandName: formData.brandName || 'Brand',
      websiteUrl: formData.websiteUrl,
      monthlyRevenue: 'Scaling Online',
      adSpendBudget: formData.adSpendBudget,
      primaryGoal: formData.primaryGoal,
      servicesInterested: ['Performance Advertising (Meta & TikTok)', 'Website & Retention'],
      preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      preferredTime: '14:00 EST'
    });
    setIsSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto overscroll-contain animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsBookingModalOpen(false);
          setIsSubmitted(false);
        }
      }}
    >
      <div className="relative w-full max-w-lg bg-[#0b0e14] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0e1219]/90">
          <div className="flex items-center gap-3">
            <Logo size="sm" showText={false} />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-syne">
                Initiate Strategy Consultation
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                1-on-1 performance audit & bespoke scaling roadmap
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setIsBookingModalOpen(false);
              setIsSubmitted(false);
            }}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/[0.08] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Cole"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#121620] border border-white/[0.08] text-white text-sm focus:border-emerald-500/80 focus:outline-none transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Work Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="alex@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#121620] border border-white/[0.08] text-white text-sm focus:border-emerald-500/80 focus:outline-none transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Brand / Company
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Maison Royale"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#121620] border border-white/[0.08] text-white text-sm focus:border-emerald-500/80 focus:outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Monthly Ad Budget
                  </label>
                  <select
                    value={formData.adSpendBudget}
                    onChange={(e) => setFormData({ ...formData, adSpendBudget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121620] border border-white/[0.08] text-white text-sm focus:border-emerald-500/80 focus:outline-none transition-all"
                  >
                    <option value="$3,000 - $5,000 / mo">$3,000 - $5,000 / mo</option>
                    <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / mo</option>
                    <option value="$15,000 - $50,000 / mo">$15,000 - $50,000 / mo</option>
                    <option value="$50,000+ / mo">$50,000+ / mo</option>
                  </select>
                </div>
              </div>

              {/* Calendly direct option */}
              <div className="p-3.5 bg-[#0e1219] rounded-2xl border border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  Prefer direct calendar booking?
                </span>
                <a
                  href={agencySettings.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-emerald-400 font-semibold hover:underline text-xs"
                >
                  <span>Open Calendly</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!formData.name.trim() || !formData.email.trim()}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#E55353] hover:bg-[#D94747] disabled:opacity-50 text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-all shadow-lg shadow-red-950/30 group"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>Book a call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-syne">
                Strategy Consultation Requested
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-emerald-400 font-semibold">{formData.name}</span>. Our growth directors will review your brand details and reach out via <span className="text-emerald-400 underline">{formData.email}</span>.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsBookingModalOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-[#141822] hover:bg-[#1a202d] text-white font-semibold text-xs uppercase tracking-wider rounded-full border border-white/[0.08] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
