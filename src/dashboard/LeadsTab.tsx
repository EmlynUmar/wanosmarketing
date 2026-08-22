import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LeadSubmission } from '../types';
import { 
  Calendar, 
  Mail, 
  Building, 
  ExternalLink, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Filter, 
  Download,
  PhoneCall,
  User
} from 'lucide-react';

export const LeadsTab: React.FC = () => {
  const { leads, updateLeadStatus, deleteLead, showToast } = useApp();
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<LeadSubmission | null>(null);

  const filteredLeads = filterStatus === 'all' 
    ? leads 
    : leads.filter(l => l.status === filterStatus);

  const exportCSV = () => {
    if (leads.length === 0) {
      showToast('No leads available to export', 'info');
      return;
    }

    const headers = ['Name', 'Email', 'Brand Name', 'Website', 'Monthly Revenue', 'Ad Budget', 'Goal', 'Status', 'Date Booked'];
    const rows = leads.map(l => [
      `"${l.name}"`,
      `"${l.email}"`,
      `"${l.brandName}"`,
      `"${l.websiteUrl || ''}"`,
      `"${l.monthlyRevenue}"`,
      `"${l.adSpendBudget}"`,
      `"${l.primaryGoal.replace(/"/g, '""')}"`,
      `"${l.status}"`,
      `"${l.preferredDate || l.createdAt}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `wanos_strategy_call_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Leads CSV exported successfully');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <span>Strategy Call Inbound CRM & Leads</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Review brand audit qualification requests, update consultation pipeline stages, and export lead data.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={exportCSV}
            className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-700 transition-all"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {['all', 'new', 'booked', 'qualified', 'won', 'archived'].map((st) => (
          <button
            key={st}
            onClick={() => setFilterStatus(st)}
            className={`px-3.5 py-1.5 rounded-xl capitalize font-semibold border transition-all ${
              filterStatus === st
                ? 'bg-emerald-500 text-black border-emerald-400 font-bold'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            {st} ({st === 'all' ? leads.length : leads.filter(l => l.status === st).length})
          </button>
        ))}
      </div>

      {/* Leads Table */}
      <div className="bg-[#0f1622] rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-4">Contact / Brand</th>
                <th className="p-4">Revenue & Budget</th>
                <th className="p-4">Services / Goal</th>
                <th className="p-4">Preferred Slot</th>
                <th className="p-4">Stage</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-400">
                    No leads matching current filter.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-white text-sm">{lead.name}</div>
                      <div className="text-emerald-400 text-xs flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        <a href={`mailto:${lead.email}`} className="hover:underline">{lead.email}</a>
                      </div>
                      <div className="text-slate-400 text-[11px] font-medium mt-0.5">
                        {lead.brandName}
                      </div>
                    </td>

                    <td className="p-4 space-y-0.5">
                      <div className="font-semibold text-slate-200">
                        {lead.monthlyRevenue}
                      </div>
                      <div className="text-[11px] text-emerald-400">
                        Ad Spend: {lead.adSpendBudget}
                      </div>
                    </td>

                    <td className="p-4 max-w-xs">
                      <div className="font-medium text-slate-300 line-clamp-2">
                        {lead.primaryGoal}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {lead.servicesInterested.slice(0, 2).map((s, idx) => (
                          <span key={idx} className="px-1.5 py-0.5 bg-slate-800 text-[10px] text-slate-400 rounded">
                            {s.split(' ')[0]}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="font-medium text-white">{lead.preferredDate || 'Earliest'}</div>
                      <div className="text-[11px] text-slate-400">{lead.preferredTime || '14:00 EST'}</div>
                    </td>

                    <td className="p-4">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value as any)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                          lead.status === 'won' || lead.status === 'qualified'
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : lead.status === 'booked'
                            ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="booked">Booked</option>
                        <option value="qualified">Qualified</option>
                        <option value="won">Won / Closed</option>
                        <option value="archived">Archived</option>
                      </select>
                    </td>

                    <td className="p-4 text-right">
                      <button
                        onClick={() => {
                          if (confirm(`Delete lead from ${lead.name}?`)) {
                            deleteLead(lead.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-slate-900 hover:bg-red-950/60 text-slate-400 hover:text-red-400 border border-slate-800 transition-colors"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
