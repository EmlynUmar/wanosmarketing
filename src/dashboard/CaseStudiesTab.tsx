import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CaseStudy } from '../types';
import { 
  FolderKanban, 
  Plus, 
  Trash2, 
  Edit3, 
  Eye, 
  Save, 
  X, 
  Sparkles, 
  Image as ImageIcon,
  DollarSign,
  TrendingUp,
  ShoppingCart
} from 'lucide-react';

export const CaseStudiesTab: React.FC = () => {
  const { caseStudies, saveCaseStudy, deleteCaseStudy, setSelectedProofCaseStudy, mediaAssets } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<CaseStudy>({
    id: '',
    clientName: '',
    industry: '',
    campaignTitle: '',
    objective: '',
    challenge: '',
    strategy: '',
    adSpend: 1500,
    purchases: 450,
    costPerPurchase: 3.33,
    roas: 24.5,
    revenueGenerated: 36750,
    screenshotUrl: '/assets/IMG_20260821_212125_831.jpg',
    resultsSummary: '',
    tags: ['Meta Ads', 'Scale'],
    featured: false,
    date: new Date().toISOString().split('T')[0]
  });

  const [tagInput, setTagInput] = useState('');

  const openNewForm = () => {
    setFormData({
      id: 'cs-' + Date.now(),
      clientName: '',
      industry: 'E-Commerce Fashion',
      campaignTitle: '',
      objective: '',
      challenge: '',
      strategy: '',
      adSpend: 1000,
      purchases: 300,
      costPerPurchase: 3.33,
      roas: 15.0,
      revenueGenerated: 15000,
      screenshotUrl: mediaAssets[0]?.url || '/assets/IMG_20260821_212125_831.jpg',
      resultsSummary: '',
      tags: ['Meta Ads', 'Scaling'],
      featured: false,
      date: new Date().toISOString().split('T')[0]
    });
    setIsEditing(true);
  };

  const openEditForm = (study: CaseStudy) => {
    setFormData({ ...study });
    setIsEditing(true);
  };

  const handleNumericChange = (field: 'adSpend' | 'purchases' | 'revenueGenerated', val: number) => {
    const nextSpend = field === 'adSpend' ? val : formData.adSpend;
    const nextPurchases = field === 'purchases' ? val : formData.purchases;
    const nextRevenue = field === 'revenueGenerated' ? val : formData.revenueGenerated;

    const calculatedRoas = nextSpend > 0 ? Number((nextRevenue / nextSpend).toFixed(2)) : 0;
    const calculatedCpa = nextPurchases > 0 ? Number((nextSpend / nextPurchases).toFixed(2)) : 0;

    setFormData(prev => ({
      ...prev,
      [field]: val,
      roas: calculatedRoas,
      costPerPurchase: calculatedCpa
    }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveCaseStudy(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-emerald-400" />
            <span>Case Study & Performance Proof Management</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Add, update, or remove real campaign results and link unedited ad account screenshots.
          </p>
        </div>

        <button
          onClick={openNewForm}
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold rounded-xl transition-all shadow-md shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>New Case Study</span>
        </button>
      </div>

      {/* Case Studies Table / List */}
      <div className="grid grid-cols-1 gap-4">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="p-5 rounded-2xl bg-[#0f1622] border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            {/* Left Preview */}
            <div className="flex items-center gap-4">
              <div 
                onClick={() => setSelectedProofCaseStudy(study)}
                className="w-20 h-16 bg-black rounded-xl overflow-hidden cursor-pointer shrink-0 border border-slate-700 relative group"
              >
                <img
                  src={study.screenshotUrl}
                  alt={study.clientName}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-emerald-400">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white text-base font-display">
                    {study.clientName}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                    {study.roas.toFixed(2)}x ROAS
                  </span>
                  {study.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  {study.industry} • {study.campaignTitle}
                </p>
              </div>
            </div>

            {/* Middle Stats */}
            <div className="flex items-center gap-6 text-xs text-slate-300">
              <div>
                <span className="text-slate-400 block text-[10px]">Spend</span>
                <span className="font-bold">${study.adSpend.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Purchases</span>
                <span className="font-bold">{study.purchases.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">CPA</span>
                <span className="font-bold text-emerald-400">${study.costPerPurchase.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Revenue</span>
                <span className="font-extrabold text-emerald-400 text-sm">${study.revenueGenerated.toLocaleString()}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
              <button
                onClick={() => setSelectedProofCaseStudy(study)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
                title="Preview Proof"
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                onClick={() => openEditForm(study)}
                className="p-2 text-emerald-400 hover:text-emerald-300 rounded-lg bg-slate-900 border border-slate-800"
                title="Edit Case Study"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  if (confirm(`Delete case study for ${study.clientName}?`)) {
                    deleteCaseStudy(study.id);
                  }
                }}
                className="p-2 text-red-400 hover:text-red-300 rounded-lg bg-slate-900 border border-slate-800"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Create Modal Form */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0e131d] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                {formData.id.startsWith('cs-') ? 'Edit Case Study' : 'Create Case Study'}
              </h3>
              <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Client / Brand Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Industry Vertical *</label>
                  <input
                    type="text"
                    required
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Campaign Headline / Title *</label>
                <input
                  type="text"
                  required
                  value={formData.campaignTitle}
                  onChange={(e) => setFormData({ ...formData, campaignTitle: e.target.value })}
                  placeholder="e.g. Scaling Black Friday Meta Ads with UGC Hooks"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              {/* Financial Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Ad Spend ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    min={1}
                    value={formData.adSpend}
                    onChange={(e) => handleNumericChange('adSpend', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Purchases / Conversions</label>
                  <input
                    type="number"
                    min={1}
                    value={formData.purchases}
                    onChange={(e) => handleNumericChange('purchases', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Revenue Generated ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    min={1}
                    value={formData.revenueGenerated}
                    onChange={(e) => handleNumericChange('revenueGenerated', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Calculated Outputs Preview */}
              <div className="flex items-center gap-4 text-slate-300 p-2 bg-emerald-950/30 border border-emerald-500/20 rounded-xl">
                <span>Calculated ROAS: <strong className="text-emerald-400">{formData.roas.toFixed(2)}x</strong></span>
                <span>Calculated CPA: <strong className="text-emerald-400">${formData.costPerPurchase.toFixed(2)}</strong></span>
              </div>

              {/* Screenshot Selector */}
              <div>
                <label className="block text-slate-400 mb-1 font-medium">Screenshot Proof Image URL</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={formData.screenshotUrl}
                    onChange={(e) => setFormData({ ...formData, screenshotUrl: e.target.value })}
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                {/* Available Assets Thumbnails */}
                <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
                  {mediaAssets.map((asset) => (
                    <button
                      type="button"
                      key={asset.id}
                      onClick={() => setFormData({ ...formData, screenshotUrl: asset.url })}
                      className={`w-14 h-10 rounded border overflow-hidden shrink-0 ${
                        formData.screenshotUrl === asset.url ? 'ring-2 ring-emerald-500 border-emerald-500' : 'border-slate-700 opacity-60'
                      }`}
                    >
                      <img src={asset.url} alt="asset" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Objective & Context</label>
                  <textarea
                    rows={2}
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Growth Strategy Used</label>
                  <textarea
                    rows={2}
                    value={formData.strategy}
                    onChange={(e) => setFormData({ ...formData, strategy: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Results Summary</label>
                <textarea
                  rows={2}
                  value={formData.resultsSummary}
                  onChange={(e) => setFormData({ ...formData, resultsSummary: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              {/* Tags & Featured */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Add tag (e.g. TikTok Ads)"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-white font-bold"
                  >
                    Add
                  </button>
                  <div className="flex gap-1 flex-wrap">
                    {formData.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded flex items-center gap-1">
                        {t}
                        <X className="w-3 h-3 cursor-pointer text-red-400" onClick={() => handleRemoveTag(t)} />
                      </span>
                    ))}
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded bg-slate-900 border-slate-700 text-emerald-500"
                  />
                  <span>Feature on Hero spotlight</span>
                </label>
              </div>

              {/* Modal Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Case Study</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
