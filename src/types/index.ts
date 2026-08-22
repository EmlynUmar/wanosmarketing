export interface StatisticItem {
  id: string;
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description: string;
  changePercent?: string;
  icon: string;
  highlight?: boolean;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  campaignTitle: string;
  objective: string;
  challenge: string;
  strategy: string;
  adSpend: number; // in USD
  purchases: number;
  costPerPurchase: number;
  roas: number; // e.g. 34.65
  revenueGenerated: number;
  screenshotUrl: string;
  resultsSummary: string;
  tags: string[];
  featured: boolean;
  date: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  position: string;
  avatarUrl: string;
  rating: number;
  message: string;
  verified: boolean;
  metricBadge: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
  metrics: string;
  popular?: boolean;
}

export interface ClientBrand {
  id: string;
  name: string;
  logoSvg?: string;
  industry: string;
  growthMetric: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  brandName: string;
  websiteUrl?: string;
  monthlyRevenue: string;
  adSpendBudget: string;
  primaryGoal: string;
  servicesInterested: string[];
  preferredDate?: string;
  preferredTime?: string;
  status: 'new' | 'contacted' | 'booked' | 'qualified' | 'won' | 'archived';
  notes?: string;
  createdAt: string;
}

export interface AgencySettings {
  agencyName: string;
  tagline: string;
  bookingUrl: string;
  email: string;
  instagramUrl: string;
  linkedinUrl: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaPixelId?: string;
  googleAnalyticsId?: string;
}

export interface MediaAsset {
  id: string;
  title: string;
  url: string;
  type: string;
  category: 'proof' | 'logo' | 'hero' | 'testimonial';
  dimensions?: string;
  uploadDate: string;
}
