import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  FolderKanban, 
  Calendar, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Activity,
  Plus
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

export const OverviewTab: React.FC = () => {
  const { statistics, caseStudies, testimonials, leads, setActiveAdminTab, setIsBookingModalOpen } = useApp();

  // Mock historical monthly revenue scale chart data based on Wanos growth
  const chartData = [
    { month: 'Jan', revenue: 420000, spend: 68000, roas: 6.1 },
    { month: 'Feb', revenue: 580000, spend: 89000, roas: 6.5 },
    { month: 'Mar', revenue: 790000, spend: 110000, roas: 7.1 },
    { month: 'Apr', revenue: 940000, spend: 125000, roas: 7.5 },
    { month: 'May', revenue: 1250000, spend: 155000, roas: 8.0 },
    { month: 'Jun', revenue: 1680000, spend: 195000, roas: 8.6 },
    { month: 'Jul', revenue: 2150000, spend: 230000, roas: 9.3 },
    { month: 'Aug', revenue: 2650000, spend: 275000, roas: 9.6 },
  ];

  const totalGeneratedRevenue = caseStudies.reduce((acc, c) => acc + c.revenueGenerated, 0);
  const totalAdSpend = caseStudies.reduce((acc, c) => acc + c.adSpend, 0);
  const averageRoas = totalAdSpend > 0 ? (totalGeneratedRevenue / totalAdSpend).toFixed(2) : '0';

  const newLeadsCount = leads.filter(l => l.status === 'new' || l.status === 'booked').length;

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Welcome & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-2xl font-bold text-white font-display">
            WanosMarketing Admin Overview
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time management console for website metrics, verified case studies, and inbound strategy calls.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveAdminTab('casestudies')}
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold rounded-xl transition-all shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Case Study</span>
          </button>
          <button
            onClick={() => setActiveAdminTab('leads')}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-700 transition-all"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>View Leads ({leads.length})</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-2xl bg-[#0f1622] border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Total Managed Revenue
            </span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-display">
            ${(totalGeneratedRevenue).toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
          <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>From active verified case studies</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f1622] border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Blended Verified ROAS
            </span>
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-display">
            {averageRoas}x
          </div>
          <div className="text-xs text-slate-400 font-medium">
            34.65x Peak Record Campaign
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f1622] border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Strategy Call Bookings
            </span>
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-display">
            {leads.length}
          </div>
          <div className="text-xs text-blue-400 font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{newLeadsCount} active / pending follow-up</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f1622] border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Active Case Studies
            </span>
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <FolderKanban className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-display">
            {caseStudies.length}
          </div>
          <div className="text-xs text-slate-400 font-medium">
            {testimonials.length} Verified Testimonials
          </div>
        </div>

      </div>

      {/* Analytics Chart & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Revenue Scaling Trend */}
        <div className="lg:col-span-8 bg-[#0f1622] p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Client Portfolio Gross Revenue Trajectory
              </h3>
              <p className="text-xs text-slate-400">
                Monthly aggregate gross revenue generated across managed client ad accounts (USD)
              </p>
            </div>
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-lg">
              +530% 8-Month Scale
            </span>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} />
                <YAxis 
                  stroke="#64748b" 
                  fontSize={12} 
                  tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#090d14', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#10b981" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#revenueGrad)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Inbound Leads / Strategy Calls */}
        <div className="lg:col-span-4 bg-[#0f1622] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Recent Inbound Leads</span>
              </h3>
              <button 
                onClick={() => setActiveAdminTab('leads')}
                className="text-xs text-emerald-400 hover:underline"
              >
                View All
              </button>
            </div>

            <div className="space-y-3">
              {leads.slice(0, 3).map((lead) => (
                <div key={lead.id} className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{lead.name}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      lead.status === 'booked' 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : lead.status === 'qualified'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {lead.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-slate-400">
                    {lead.brandName} • {lead.monthlyRevenue}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-1">
                    Budget: <span className="text-slate-300">{lead.adSpendBudget}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setActiveAdminTab('leads')}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors"
          >
            Manage All {leads.length} Leads
          </button>
        </div>

      </div>

    </div>
  );
};
