import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  TrendingUp, 
  ExternalLink,
  ShieldAlert,
  Building,
  Mail,
  User,
  DollarSign
} from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { isBookingModalOpen, setIsBookingModalOpen, agencySettings, submitLead, services } = useApp();
  
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [useCalendlyDirect, setUseCalendlyDirect] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandName: '',
    websiteUrl: '',
    monthlyRevenue: '$50,000 - $100,000',
    adSpendBudget: '$5,000 - $15,000 / mo',
    primaryGoal: 'Scale Meta Ads profitably and increase customer lifetime value.',
    servicesInterested: ['Paid Advertising (Meta & TikTok)'],
    preferredDate: '',
    preferredTime: '14:00 EST'
  });

  if (!isBookingModalOpen) return null;

  const handleServiceToggle = (title: string) => {
    setFormData(prev => {
      const exists = prev.servicesInterested.includes(title);
      return {
        ...prev,
        servicesInterested: exists 
          ? prev.servicesInterested.filter(s => s !== title)
          : [...prev.servicesInterested, title]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead({
      name: formData.name,
      email: formData.email,
      brandName: formData.brandName,
      websiteUrl: formData.websiteUrl,
      monthlyRevenue: formData.monthlyRevenue,
      adSpendBudget: formData.adSpendBudget,
      primaryGoal: formData.primaryGoal,
      servicesInterested: formData.servicesInterested,
      preferredDate: formData.preferredDate || new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      preferredTime: formData.preferredTime
    });
    setStep(4); // Success step
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0e131d] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Book 1-on-1 Growth Strategy Call
              </h3>
              <p className="text-xs text-slate-400">
                30-min tailored performance audit & revenue roadmap with Wanos leadership
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setIsBookingModalOpen(false);
              setStep(1);
            }}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="px-6 pt-4 pb-2 flex items-center justify-between border-b border-slate-800/60 bg-slate-950/40 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                step >= 1 ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-400'
              }`}>1</span>
              <span className={step === 1 ? 'text-white font-medium' : ''}>Brand Profile</span>
            </div>
            <div className="h-[1px] w-8 bg-slate-800"></div>
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                step >= 2 ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-400'
              }`}>2</span>
              <span className={step === 2 ? 'text-white font-medium' : ''}>Growth Focus</span>
            </div>
            <div className="h-[1px] w-8 bg-slate-800"></div>
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                step >= 3 ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-400'
              }`}>3</span>
              <span className={step === 3 ? 'text-white font-medium' : ''}>Time & Confirmation</span>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-sm font-semibold text-slate-200">
                Step 1: Tell us about your business & current scale
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Brand / Company Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aura Luxe Apparel"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Website / Store URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourbrand.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Current Monthly Revenue
                  </label>
                  <select
                    value={formData.monthlyRevenue}
                    onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="Under $25,000 / mo">Under $25,000 / mo</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000 / mo</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000 / mo</option>
                    <option value="$100,000 - $250,000">$100,000 - $250,000 / mo</option>
                    <option value="$250,000 - $1,000,000+">$250,000 - $1,000,000+ / mo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Monthly Paid Ad Budget
                  </label>
                  <select
                    value={formData.adSpendBudget}
                    onChange={(e) => setFormData({ ...formData, adSpendBudget: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="$3,000 - $5,000 / mo">$3,000 - $5,000 / mo</option>
                    <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / mo</option>
                    <option value="$15,000 - $50,000 / mo">$15,000 - $50,000 / mo</option>
                    <option value="$50,000+ / mo">$50,000+ / mo</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-950/30 border border-emerald-500/20 rounded-xl flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  <strong>Zero Obligation Guarantee:</strong> In this 30-minute call, we will break down your account bottleneck, identify 3 high-impact creative angles, and show you exactly how to achieve 4x-30x ROAS.
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  disabled={!formData.brandName.trim()}
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-sm rounded-xl transition-all shadow-md"
                >
                  <span>Next: Growth Goals</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-sm font-semibold text-slate-200">
                Step 2: What growth systems do you want implemented?
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-medium text-slate-400">
                  Select Areas of Focus (Pick all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((s) => {
                    const isSelected = formData.servicesInterested.includes(s.title);
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => handleServiceToggle(s.title)}
                        className={`p-3 text-left rounded-xl border transition-all text-xs flex items-center justify-between ${
                          isSelected
                            ? 'bg-emerald-500/15 border-emerald-500/50 text-white font-medium'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="line-clamp-1">{s.title}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  What is your primary revenue bottleneck or challenge?
                </label>
                <textarea
                  rows={3}
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  placeholder="e.g. Meta ads CPA is too high, need fresh UGC video hooks, cart abandonments are leaking revenue..."
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1.5 px-4 py-2 text-slate-400 hover:text-white text-sm"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm rounded-xl transition-all shadow-md"
                >
                  <span>Next: Choose Time Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
              <div className="text-sm font-semibold text-slate-200">
                Step 3: Contact info & preferred consultation slot
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Work Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="marcus@auraluxe.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Preferred Time Window (EST)
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="10:00 EST">10:00 AM EST (Morning)</option>
                    <option value="11:30 EST">11:30 AM EST (Late Morning)</option>
                    <option value="14:00 EST">02:00 PM EST (Afternoon)</option>
                    <option value="16:00 EST">04:00 PM EST (Late Afternoon)</option>
                    <option value="18:00 EST">06:00 PM EST (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Calendly direct link option */}
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Prefer direct calendar slot sync?
                </span>
                <a
                  href={agencySettings.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-emerald-400 font-semibold hover:underline"
                >
                  <span>Open Calendly Direct</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-1.5 px-4 py-2 text-slate-400 hover:text-white text-sm"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="submit"
                  disabled={!formData.name.trim() || !formData.email.trim()}
                  className="flex items-center gap-2 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/25"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>Confirm Strategy Call Request</span>
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Strategy Consultation Requested!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-emerald-400 font-semibold">{formData.name}</span>. A senior growth strategist at <span className="text-white font-semibold">WanosMarketing</span> will review <span className="text-white font-semibold">{formData.brandName}</span>'s profile and send your calendar confirmation link to <span className="text-emerald-400 underline">{formData.email}</span>.
              </p>

              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1">
                <div><strong>Brand:</strong> {formData.brandName}</div>
                <div><strong>Requested Window:</strong> {formData.preferredDate || 'Earliest available'} at {formData.preferredTime}</div>
                <div><strong>Services:</strong> {formData.servicesInterested.join(', ')}</div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setIsBookingModalOpen(false);
                    setStep(1);
                  }}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl transition-colors"
                >
                  Return to Growth Website
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
