import React from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from '../components/Logo';
import { OverviewTab } from './OverviewTab';
import { CaseStudiesTab } from './CaseStudiesTab';
import { StatsTab } from './StatsTab';
import { TestimonialsTab } from './TestimonialsTab';
import { ServicesTab } from './ServicesTab';
import { LeadsTab } from './LeadsTab';
import { MediaTab } from './MediaTab';
import { SettingsTab } from './SettingsTab';
import { 
  TrendingUp, 
  FolderKanban, 
  Quote, 
  Target, 
  Calendar, 
  Image as ImageIcon, 
  Settings, 
  LayoutDashboard, 
  Globe, 
  ShieldCheck, 
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const AdminLayout: React.FC = () => {
  const { 
    activeAdminTab, 
    setActiveAdminTab, 
    setIsAdmin, 
    agencySettings, 
    leads, 
    caseStudies,
    resetToDefaultData
  } = useApp();

  const navItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'casestudies', label: 'Case Studies & Proof', icon: <FolderKanban className="w-4 h-4" />, badge: caseStudies.length },
    { id: 'stats', label: 'Growth Statistics', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <Quote className="w-4 h-4" /> },
    { id: 'services', label: 'Services & Deliverables', icon: <Target className="w-4 h-4" /> },
    { id: 'leads', label: 'Strategy Calls CRM', icon: <Calendar className="w-4 h-4" />, badge: leads.filter(l => l.status === 'new' || l.status === 'booked').length },
    { id: 'media', label: 'Proof Media Assets', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'settings', label: 'Platform Settings', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#070b10] text-slate-100 flex flex-col font-sans">
      
      {/* Top Admin Bar */}
      <header className="sticky top-0 z-30 bg-[#090d14]/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size="sm" showBadge={true} badgeText="Admin Console" />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsAdmin(false)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-sm"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>View Public Website</span>
          </button>
        </div>
      </header>

      {/* Main Admin Body */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-6">
        
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 shrink-0 space-y-1 bg-[#0c121c] p-3 rounded-2xl border border-slate-800 self-start">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Management Modules
          </div>

          {navItems.map((item) => {
            const isActive = activeAdminTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveAdminTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={isActive ? 'text-emerald-400' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>

                {item.badge !== undefined && item.badge > 0 && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-4 mt-4 border-t border-slate-800/80 px-2 space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <span className="font-bold text-slate-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" /> Live Sync Active
              </span>
              <p className="text-[10px] leading-tight text-slate-400">
                Any changes made here immediately persist and update the live marketing website.
              </p>
            </div>
          </div>
        </aside>

        {/* Tab Content View */}
        <main className="flex-1 min-w-0">
          {activeAdminTab === 'overview' && <OverviewTab />}
          {activeAdminTab === 'casestudies' && <CaseStudiesTab />}
          {activeAdminTab === 'stats' && <StatsTab />}
          {activeAdminTab === 'testimonials' && <TestimonialsTab />}
          {activeAdminTab === 'services' && <ServicesTab />}
          {activeAdminTab === 'leads' && <LeadsTab />}
          {activeAdminTab === 'media' && <MediaTab />}
          {activeAdminTab === 'settings' && <SettingsTab />}
        </main>

      </div>

    </div>
  );
};
