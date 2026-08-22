import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { StatisticItem } from '../types';
import { 
  TrendingUp, 
  Plus, 
  Save, 
  Trash2, 
  Sparkles, 
  Edit3, 
  CheckCircle2 
} from 'lucide-react';

export const StatsTab: React.FC = () => {
  const { statistics, saveStatistic, updateStatistics } = useApp();
  const [statsList, setStatsList] = useState<StatisticItem[]>(statistics);

  const handleChange = (id: string, field: keyof StatisticItem, value: any) => {
    const updated = statsList.map(s => s.id === id ? { ...s, [field]: value } : s);
    setStatsList(updated);
  };

  const handleSaveAll = () => {
    updateStatistics(statsList);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span>Dynamic Growth Statistics Management</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Update the headline metrics displayed on the marketing website in real-time.
          </p>
        </div>

        <button
          onClick={handleSaveAll}
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold rounded-xl transition-all shadow-md shrink-0"
        >
          <Save className="w-4 h-4" />
          <span>Save All Metrics</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {statsList.map((stat) => (
          <div key={stat.id} className="p-5 rounded-2xl bg-[#0f1622] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Metric Card
              </span>
              <label className="flex items-center gap-1.5 text-xs text-emerald-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={stat.highlight}
                  onChange={(e) => handleChange(stat.id, 'highlight', e.target.checked)}
                  className="rounded bg-slate-900 border-slate-700 text-emerald-500"
                />
                <span>Highlight Card</span>
              </label>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Metric Label</label>
              <input
                type="text"
                value={stat.label}
                onChange={(e) => handleChange(stat.id, 'label', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Prefix</label>
                <input
                  type="text"
                  placeholder="$"
                  value={stat.prefix || ''}
                  onChange={(e) => handleChange(stat.id, 'prefix', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Value *</label>
                <input
                  type="text"
                  value={stat.value}
                  onChange={(e) => handleChange(stat.id, 'value', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Suffix</label>
                <input
                  type="text"
                  placeholder="%"
                  value={stat.suffix || ''}
                  onChange={(e) => handleChange(stat.id, 'suffix', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Growth Badge</label>
              <input
                type="text"
                value={stat.changePercent || ''}
                placeholder="e.g. +142% YoY"
                onChange={(e) => handleChange(stat.id, 'changePercent', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Description</label>
              <textarea
                rows={2}
                value={stat.description}
                onChange={(e) => handleChange(stat.id, 'description', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs focus:border-emerald-500 focus:outline-none"
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
