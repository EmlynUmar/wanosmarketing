import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Service } from '../types';
import { 
  Target, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  X, 
  CheckCircle2 
} from 'lucide-react';

export const ServicesTab: React.FC = () => {
  const { services, saveService, deleteService } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Service>({
    id: '',
    title: '',
    shortDesc: '',
    fullDesc: '',
    icon: 'Target',
    deliverables: [],
    metrics: '',
    popular: false
  });
  const [delivInput, setDelivInput] = useState('');

  const openNew = () => {
    setFormData({
      id: 'srv-' + Date.now(),
      title: '',
      shortDesc: '',
      fullDesc: '',
      icon: 'Target',
      deliverables: ['Custom Campaign Setup', 'Algorithmic Optimization'],
      metrics: 'Avg 4.5x ROAS',
      popular: false
    });
    setIsEditing(true);
  };

  const openEdit = (s: Service) => {
    setFormData({ ...s });
    setIsEditing(true);
  };

  const handleAddDeliverable = () => {
    if (delivInput.trim()) {
      setFormData({
        ...formData,
        deliverables: [...formData.deliverables, delivInput.trim()]
      });
      setDelivInput('');
    }
  };

  const handleRemoveDeliverable = (idx: number) => {
    setFormData({
      ...formData,
      deliverables: formData.deliverables.filter((_, i) => i !== idx)
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveService(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" />
            <span>Growth Services & Deliverables</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Customize service offerings, key deliverables, and target ROAS/efficiency metrics.
          </p>
        </div>

        <button
          onClick={openNew}
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold rounded-xl transition-all shadow-md shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Service</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service.id} className="p-5 rounded-2xl bg-[#0f1622] border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base font-display">{service.title}</h3>
                {service.popular && (
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{service.shortDesc}</p>
              
              <div className="text-xs font-semibold text-emerald-400">
                {service.metrics}
              </div>

              <div className="space-y-1 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Deliverables ({service.deliverables.length}):</span>
                {service.deliverables.slice(0, 3).map((d, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="line-clamp-1">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => openEdit(service)}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 hover:text-emerald-300"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => deleteService(service.id)}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-red-400 hover:text-red-300"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0e131d] border border-slate-700 rounded-2xl shadow-2xl p-6 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-base">Edit Service</h3>
              <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="block text-slate-400 mb-1">Service Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Short Description *</label>
                <textarea
                  rows={2}
                  required
                  value={formData.shortDesc}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Target Metrics / Benchmark</label>
                <input
                  type="text"
                  value={formData.metrics}
                  placeholder="Avg 4.8x - 34x ROAS on active ad spend"
                  onChange={(e) => setFormData({ ...formData, metrics: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400 font-bold"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Deliverables</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Add deliverable..."
                    value={delivInput}
                    onChange={(e) => setDelivInput(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                  <button type="button" onClick={handleAddDeliverable} className="px-3 py-1.5 bg-slate-800 text-white font-bold rounded-lg">
                    Add
                  </button>
                </div>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {formData.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-center justify-between p-1.5 bg-slate-900 rounded border border-slate-800">
                      <span>{d}</span>
                      <X className="w-3.5 h-3.5 cursor-pointer text-red-400" onClick={() => handleRemoveDeliverable(idx)} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  checked={formData.popular}
                  onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
                  className="rounded bg-slate-900 border-slate-700 text-emerald-500"
                />
                <label className="text-slate-300">Mark as Popular Growth Pillar</label>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 text-slate-400">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-emerald-500 text-black font-bold rounded-xl">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
