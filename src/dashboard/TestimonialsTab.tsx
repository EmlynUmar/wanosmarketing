import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Testimonial } from '../types';
import { 
  Quote, 
  Plus, 
  Trash2, 
  Edit3, 
  Star, 
  Save, 
  X, 
  CheckCircle2 
} from 'lucide-react';

export const TestimonialsTab: React.FC = () => {
  const { testimonials, saveTestimonial, deleteTestimonial } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Testimonial>({
    id: '',
    clientName: '',
    company: '',
    position: '',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    rating: 5,
    message: '',
    verified: true,
    metricBadge: '30x+ ROAS',
    date: new Date().toISOString().split('T')[0]
  });

  const openNew = () => {
    setFormData({
      id: 't-' + Date.now(),
      clientName: '',
      company: '',
      position: 'Founder & CEO',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      rating: 5,
      message: '',
      verified: true,
      metricBadge: '+250% Growth',
      date: new Date().toISOString().split('T')[0]
    });
    setIsEditing(true);
  };

  const openEdit = (item: Testimonial) => {
    setFormData({ ...item });
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveTestimonial(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <Quote className="w-5 h-5 text-emerald-400" />
            <span>Client Testimonials & Executive Proof</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage endorsements, reviews, and client achievement metric badges.
          </p>
        </div>

        <button
          onClick={openNew}
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold rounded-xl transition-all shadow-md shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Testimonial</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((item) => (
          <div key={item.id} className="p-5 rounded-2xl bg-[#0f1622] border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">
                  {item.metricBadge}
                </span>
              </div>

              <p className="text-slate-300 text-xs italic leading-relaxed">
                "{item.message}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <div className="flex items-center gap-2.5">
                <img src={item.avatarUrl} alt={item.clientName} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1">
                    {item.clientName}
                    {item.verified && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                  </h4>
                  <p className="text-[11px] text-slate-400">{item.position}, {item.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => openEdit(item)}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => deleteTestimonial(item.id)}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0e131d] border border-slate-700 rounded-2xl shadow-2xl p-6 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-base">Edit Testimonial</h3>
              <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Company *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Role / Position</label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Metric Badge</label>
                  <input
                    type="text"
                    value={formData.metricBadge}
                    onChange={(e) => setFormData({ ...formData, metricBadge: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400 font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Avatar Image URL</label>
                <input
                  type="text"
                  value={formData.avatarUrl}
                  onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Review Message *</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
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
