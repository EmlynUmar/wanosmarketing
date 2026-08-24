import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  StatisticItem,
  CaseStudy,
  Testimonial,
  Service,
  ClientBrand,
  LeadSubmission,
  AgencySettings,
  MediaAsset
} from '../types';
import {
  initialStatistics,
  initialCaseStudies,
  initialTestimonials,
  initialServices,
  initialBrands,
  initialAgencySettings,
  initialMediaAssets,
  initialLeads
} from '../data/initialData';

interface Toast {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

interface AppContextType {
  // Data state
  statistics: StatisticItem[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  services: Service[];
  brands: ClientBrand[];
  leads: LeadSubmission[];
  agencySettings: AgencySettings;
  mediaAssets: MediaAsset[];
  
  // Navigation & UI state
  isBookingModalOpen: boolean;
  setIsBookingModalOpen: (open: boolean) => void;
  selectedProofCaseStudy: CaseStudy | null;
  setSelectedProofCaseStudy: (study: CaseStudy | null) => void;
  
  // Toast notifications
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;

  // CRUD Actions
  updateStatistics: (stats: StatisticItem[]) => void;
  saveStatistic: (stat: StatisticItem) => void;
  
  saveCaseStudy: (study: CaseStudy) => void;
  deleteCaseStudy: (id: string) => void;

  saveTestimonial: (testimonial: Testimonial) => void;
  deleteTestimonial: (id: string) => void;

  saveService: (service: Service) => void;
  deleteService: (id: string) => void;

  saveBrand: (brand: ClientBrand) => void;
  deleteBrand: (id: string) => void;

  submitLead: (lead: Omit<LeadSubmission, 'id' | 'createdAt' | 'status'>) => void;
  updateLeadStatus: (id: string, status: LeadSubmission['status'], notes?: string) => void;
  deleteLead: (id: string) => void;

  saveAgencySettings: (settings: AgencySettings) => void;
  addMediaAsset: (asset: MediaAsset) => void;
  deleteMediaAsset: (id: string) => void;

  resetToDefaultData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DATA_VERSION = 'v18.0';

export const CALENDLY_BOOKING_URL = 'https://calendly.com/wanosmarketing01/work-with-wanos-to-scale-your-brand';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check version to invalidate stale cached data
  useEffect(() => {
    const currentVersion = localStorage.getItem('wanos_app_version');
    if (currentVersion !== DATA_VERSION) {
      localStorage.setItem('wanos_app_version', DATA_VERSION);
      localStorage.setItem('wanos_case_studies', JSON.stringify(initialCaseStudies));
      localStorage.setItem('wanos_testimonials', JSON.stringify(initialTestimonials));
      localStorage.setItem('wanos_statistics', JSON.stringify(initialStatistics));
      localStorage.setItem('wanos_services', JSON.stringify(initialServices));
      localStorage.setItem('wanos_brands', JSON.stringify(initialBrands));
      localStorage.setItem('wanos_settings', JSON.stringify(initialAgencySettings));
      setCaseStudies(initialCaseStudies);
      setTestimonials(initialTestimonials);
      setBrands(initialBrands);
      setServices(initialServices);
      setStatistics(initialStatistics);
      setAgencySettings(initialAgencySettings);
    }
  }, []);

  // Load from localStorage or defaults
  const [statistics, setStatistics] = useState<StatisticItem[]>(() => {
    const saved = localStorage.getItem('wanos_statistics');
    const version = localStorage.getItem('wanos_app_version');
    return saved && version === DATA_VERSION ? JSON.parse(saved) : initialStatistics;
  });

  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(() => {
    const saved = localStorage.getItem('wanos_case_studies');
    const version = localStorage.getItem('wanos_app_version');
    if (saved && version === DATA_VERSION) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.some((p: CaseStudy) => p.clientName.includes('Aura') || p.clientName.includes('GlowBotanica') || p.clientName.includes('NutriCore') || p.clientName.includes('VoltEdge'))) {
          return initialCaseStudies;
        }
        return parsed;
      } catch {
        return initialCaseStudies;
      }
    }
    return initialCaseStudies;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('wanos_testimonials');
    const version = localStorage.getItem('wanos_app_version');
    return saved && version === DATA_VERSION ? JSON.parse(saved) : initialTestimonials;
  });

  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('wanos_services');
    const version = localStorage.getItem('wanos_app_version');
    return saved && version === DATA_VERSION ? JSON.parse(saved) : initialServices;
  });

  const [brands, setBrands] = useState<ClientBrand[]>(() => {
    const saved = localStorage.getItem('wanos_brands');
    const version = localStorage.getItem('wanos_app_version');
    if (saved && version === DATA_VERSION) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.some((b: ClientBrand) => b.name.includes('Aura') || b.name.includes('GlowBotanica') || b.name.includes('NutriCore') || b.name.includes('VoltEdge'))) {
          return initialBrands;
        }
        return parsed;
      } catch {
        return initialBrands;
      }
    }
    return initialBrands;
  });

  const [leads, setLeads] = useState<LeadSubmission[]>(() => {
    const saved = localStorage.getItem('wanos_leads');
    return saved ? JSON.parse(saved) : initialLeads;
  });

  const [agencySettings, setAgencySettings] = useState<AgencySettings>(() => {
    const saved = localStorage.getItem('wanos_settings');
    return saved ? JSON.parse(saved) : initialAgencySettings;
  });

  const [mediaAssets, setMediaAssets] = useState<MediaAsset[]>(() => {
    const saved = localStorage.getItem('wanos_media');
    return saved ? JSON.parse(saved) : initialMediaAssets;
  });

  // UI state
  const [isBookingModalOpen, setIsBookingModalOpenState] = useState<boolean>(false);
  const [selectedProofCaseStudy, setSelectedProofCaseStudy] = useState<CaseStudy | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const handleSetIsBookingModalOpen = (open: boolean) => {
    if (open) {
      const url = agencySettings?.bookingUrl || CALENDLY_BOOKING_URL;
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsBookingModalOpenState(false);
      return;
    }
    setIsBookingModalOpenState(open);
  };

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('wanos_statistics', JSON.stringify(statistics));
  }, [statistics]);

  useEffect(() => {
    localStorage.setItem('wanos_case_studies', JSON.stringify(caseStudies));
  }, [caseStudies]);

  useEffect(() => {
    localStorage.setItem('wanos_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('wanos_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('wanos_brands', JSON.stringify(brands));
  }, [brands]);

  useEffect(() => {
    localStorage.setItem('wanos_leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem('wanos_settings', JSON.stringify(agencySettings));
  }, [agencySettings]);

  useEffect(() => {
    localStorage.setItem('wanos_media', JSON.stringify(mediaAssets));
  }, [mediaAssets]);

  // Toast Helpers
  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // CRUD Implementations
  const updateStatistics = (stats: StatisticItem[]) => {
    setStatistics(stats);
    showToast('Growth statistics updated successfully');
  };

  const saveStatistic = (stat: StatisticItem) => {
    setStatistics((prev) => {
      const idx = prev.findIndex((s) => s.id === stat.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = stat;
        return next;
      }
      return [...prev, stat];
    });
    showToast(`Updated "${stat.label}" metric`);
  };

  const saveCaseStudy = (study: CaseStudy) => {
    setCaseStudies((prev) => {
      const idx = prev.findIndex((c) => c.id === study.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = study;
        return next;
      }
      return [study, ...prev];
    });
    showToast(`Case study "${study.clientName}" saved`);
  };

  const deleteCaseStudy = (id: string) => {
    setCaseStudies((prev) => prev.filter((c) => c.id !== id));
    showToast('Case study removed', 'info');
  };

  const saveTestimonial = (testimonial: Testimonial) => {
    setTestimonials((prev) => {
      const idx = prev.findIndex((t) => t.id === testimonial.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = testimonial;
        return next;
      }
      return [testimonial, ...prev];
    });
    showToast('Testimonial saved');
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
    showToast('Testimonial deleted', 'info');
  };

  const saveService = (service: Service) => {
    setServices((prev) => {
      const idx = prev.findIndex((s) => s.id === service.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = service;
        return next;
      }
      return [...prev, service];
    });
    showToast(`Service "${service.title}" updated`);
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
    showToast('Service removed', 'info');
  };

  const saveBrand = (brand: ClientBrand) => {
    setBrands((prev) => {
      const idx = prev.findIndex((b) => b.id === brand.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = brand;
        return next;
      }
      return [...prev, brand];
    });
    showToast(`Brand "${brand.name}" saved`);
  };

  const deleteBrand = (id: string) => {
    setBrands((prev) => prev.filter((b) => b.id !== id));
    showToast('Brand removed', 'info');
  };

  const submitLead = (leadData: Omit<LeadSubmission, 'id' | 'createdAt' | 'status'>) => {
    const newLead: LeadSubmission = {
      ...leadData,
      id: 'lead-' + Date.now(),
      status: 'booked',
      createdAt: new Date().toISOString()
    };
    setLeads((prev) => [newLead, ...prev]);
    showToast('Strategy call requested! Our team will contact you shortly.', 'success');
  };

  const updateLeadStatus = (id: string, status: LeadSubmission['status'], notes?: string) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id
          ? { ...lead, status, ...(notes !== undefined ? { notes } : {}) }
          : lead
      )
    );
    showToast(`Lead status updated to ${status}`);
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
    showToast('Lead entry removed', 'info');
  };

  const saveAgencySettings = (settings: AgencySettings) => {
    setAgencySettings(settings);
    showToast('Agency settings saved successfully');
  };

  const addMediaAsset = (asset: MediaAsset) => {
    setMediaAssets((prev) => [asset, ...prev]);
    showToast('Media asset uploaded');
  };

  const deleteMediaAsset = (id: string) => {
    setMediaAssets((prev) => prev.filter((m) => m.id !== id));
    showToast('Media asset removed', 'info');
  };

  const resetToDefaultData = () => {
    setStatistics(initialStatistics);
    setCaseStudies(initialCaseStudies);
    setTestimonials(initialTestimonials);
    setServices(initialServices);
    setBrands(initialBrands);
    setLeads(initialLeads);
    setAgencySettings(initialAgencySettings);
    setMediaAssets(initialMediaAssets);
    localStorage.clear();
    showToast('Platform data reset to defaults', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        statistics,
        caseStudies,
        testimonials,
        services,
        brands,
        leads,
        agencySettings,
        mediaAssets,
        isBookingModalOpen,
        setIsBookingModalOpen: handleSetIsBookingModalOpen,
        selectedProofCaseStudy,
        setSelectedProofCaseStudy,
        toasts,
        showToast,
        removeToast,
        updateStatistics,
        saveStatistic,
        saveCaseStudy,
        deleteCaseStudy,
        saveTestimonial,
        deleteTestimonial,
        saveService,
        deleteService,
        saveBrand,
        deleteBrand,
        submitLead,
        updateLeadStatus,
        deleteLead,
        saveAgencySettings,
        addMediaAsset,
        deleteMediaAsset,
        resetToDefaultData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
