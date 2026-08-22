import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AgencySettings } from '../types';
import { 
  Settings, 
  Save, 
  RotateCcw, 
  Mail, 
  Calendar, 
  ShieldCheck,
  Building2,
  Code
} from 'lucide-react';

export const SettingsTab: React.FC = () => {
  const { agencySettings, saveAgencySettings, resetToDefaultData } = useApp();
  const [formData, setFormData] = useState<AgencySettings>({ ...agencySettings });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveAgencySettings(formData);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <Settings className="w-5 h-5 text-emerald-400" />
            <span>Agency & Platform Configuration</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage agency brand info, Calendly booking destination, contact channels, and tracking pixel IDs.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (confirm('Reset all website data, case studies, statistics, and settings back to original defaults?')) {
                resetToDefaultData();
              }
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Core Agency Info */}
        <div className="p-6 rounded-2xl bg-[#0f1622] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
            Agency Identity & Positioning
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Agency Name</label>
              <input
                type="text"
                required
                value={formData.agencyName}
                onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Primary Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="text-xs">
            <label className="block text-slate-400 mb-1 font-medium">Hero Headline</label>
            <input
              type="text"
              value={formData.heroHeadline}
              onChange={(e) => setFormData({ ...formData, heroHeadline: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div className="text-xs">
            <label className="block text-slate-400 mb-1 font-medium">Hero Sub-headline / Mission</label>
            <textarea
              rows={2}
              value={formData.heroSubheadline}
              onChange={(e) => setFormData({ ...formData, heroSubheadline: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Booking & Channels */}
        <div className="p-6 rounded-2xl bg-[#0f1622] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
            Conversion Channels & Calendly Integration
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Calendly Booking URL *</label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="url"
                  required
                  value={formData.bookingUrl}
                  onChange={(e) => setFormData({ ...formData, bookingUrl: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Contact Email *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Instagram URL</label>
              <input
                type="url"
                value={formData.instagramUrl}
                onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">LinkedIn URL</label>
              <input
                type="url"
                value={formData.linkedinUrl}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Analytics & Tracking */}
        <div className="p-6 rounded-2xl bg-[#0f1622] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
            Analytics & Conversion Tracking
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Meta Pixel ID (Server-Side / Client)</label>
              <input
                type="text"
                placeholder="e.g. 9381029810"
                value={formData.metaPixelId || ''}
                onChange={(e) => setFormData({ ...formData, metaPixelId: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Google Analytics 4 Measurement ID</label>
              <input
                type="text"
                placeholder="e.g. G-WANOS2026"
                value={formData.googleAnalyticsId || ''}
                onChange={(e) => setFormData({ ...formData, googleAnalyticsId: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/25"
          >
            <Save className="w-4 h-4" />
            <span>Save Agency Configuration</span>
          </button>
        </div>

      </form>

    </div>
  );
};
