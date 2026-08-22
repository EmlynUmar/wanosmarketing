import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MediaAsset } from '../types';
import { 
  Image as ImageIcon, 
  Upload, 
  Trash2, 
  Copy, 
  Check, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export const MediaTab: React.FC = () => {
  const { mediaAssets, addMediaAsset, deleteMediaAsset, showToast } = useApp();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    showToast('Asset URL copied to clipboard');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddMedia = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl.trim()) return;
    addMediaAsset({
      id: 'm-' + Date.now(),
      title: newTitle || 'Campaign Proof Screenshot',
      url: newUrl.trim(),
      type: 'image/jpeg',
      category: 'proof',
      uploadDate: new Date().toISOString().split('T')[0]
    });
    setNewTitle('');
    setNewUrl('');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-emerald-400" />
            <span>Media & Ad Account Proof Assets</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Browse and manage campaign screenshots from Meta Ads Manager, TikTok Ads, and client proof folders.
          </p>
        </div>
      </div>

      {/* Add New Media Form */}
      <form onSubmit={handleAddMedia} className="p-5 rounded-2xl bg-[#0f1622] border border-slate-800 flex flex-col sm:flex-row items-end gap-3 text-xs">
        <div className="flex-1 w-full sm:w-auto">
          <label className="block text-slate-400 mb-1 font-medium">Asset Title / Description</label>
          <input
            type="text"
            placeholder="e.g. Meta Ads $35k scale proof"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div className="flex-1 w-full sm:w-auto">
          <label className="block text-slate-400 mb-1 font-medium">Image URL / Path</label>
          <input
            type="text"
            required
            placeholder="/assets/IMG_... or https://..."
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl flex items-center justify-center gap-1.5 shrink-0"
        >
          <Upload className="w-4 h-4" />
          <span>Add Media</span>
        </button>
      </form>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaAssets.map((asset) => (
          <div key={asset.id} className="p-4 rounded-2xl bg-[#0f1622] border border-slate-800 space-y-3 group hover:border-slate-700 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-44 bg-black rounded-xl overflow-hidden relative border border-slate-800">
                <img
                  src={asset.url}
                  alt={asset.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] text-emerald-400 font-semibold border border-white/10">
                  {asset.category.toUpperCase()}
                </div>
              </div>

              <h4 className="font-bold text-white text-xs font-display line-clamp-1">
                {asset.title}
              </h4>
              <p className="text-[11px] text-slate-400 font-mono truncate">
                {asset.url}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
              <span className="text-[10px] text-slate-500">{asset.uploadDate}</span>
              
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy(asset.url, asset.id)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1 text-[11px]"
                >
                  {copiedId === asset.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Path</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => deleteMediaAsset(asset.id)}
                  className="p-1 rounded-lg bg-slate-900 hover:bg-red-950 text-slate-400 hover:text-red-400 border border-slate-800"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
