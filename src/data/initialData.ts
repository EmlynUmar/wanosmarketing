import { 
  StatisticItem, 
  CaseStudy, 
  Testimonial, 
  Service, 
  ClientBrand, 
  AgencySettings,
  MediaAsset,
  LeadSubmission
} from '../types';

export const initialStatistics: StatisticItem[] = [
  {
    id: 'stat-1',
    label: 'Average Client ROAS',
    value: '4.2x',
    prefix: '',
    suffix: '',
    description: 'Blended return on ad spend across partner e-commerce accounts',
    changePercent: '4.2x Average',
    icon: 'Zap',
    highlight: true,
  },
  {
    id: 'stat-2',
    label: 'Revenue Generated',
    value: '10M+',
    prefix: '$',
    description: 'Trackable top-line gross revenue produced for client stores',
    changePercent: '+140% Scale',
    icon: 'TrendingUp',
    highlight: true,
  },
  {
    id: 'stat-3',
    label: 'Ad Spend Managed',
    value: '2M+',
    prefix: '$',
    description: 'Disciplined capital managed across Meta and TikTok ad networks',
    changePercent: 'Optimal CPA',
    icon: 'DollarSign',
    highlight: false,
  },
  {
    id: 'stat-4',
    label: 'Client Retention',
    value: '98.4%',
    suffix: '',
    description: 'Long-term brand partners scaled through recurring lifecycle retention',
    changePercent: 'Long-Term',
    icon: 'Users',
    highlight: false,
  }
];

export const initialCaseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    clientName: 'Aura Luxe Apparel',
    industry: 'E-Commerce Fashion & DTC',
    campaignTitle: 'Black Friday Scaling & High-Velocity Scaling Campaign',
    objective: 'Accelerate acquisition volume while slashing cost per purchase below $5.00 during peak season saturation.',
    challenge: 'Rising CPMs on Meta ads and high customer acquisition costs with fatigue on existing static creatives.',
    strategy: 'Implemented dynamic hook iterations, high-contrast video UGC ads, and instant-checkout landing page optimization.',
    adSpend: 1021.92,
    purchases: 341,
    costPerPurchase: 3.00,
    roas: 34.65,
    revenueGenerated: 35410.00,
    screenshotUrl: '/assets/IMG_20260821_212125_831.jpg',
    resultsSummary: 'Delivered an unprecedented 34.65x ROAS in just 14 days, generating $35,410 in revenue from only $1,021.92 ad spend with $3.00 average CPA.',
    tags: ['Meta Ads', 'Scale', 'UGC Creative', '34.65x ROAS'],
    featured: true,
    date: '2026-07-15'
  },
  {
    id: 'cs-2',
    clientName: 'GlowBotanica Skincare',
    industry: 'Beauty & Personal Care',
    campaignTitle: 'Omni-Channel Customer Acquisition & Bundle Funnel',
    objective: 'Scale cold traffic customer acquisition and lift Average Order Value with customized bundle upsells.',
    challenge: 'High customer churn and low initial basket size causing unprofitable first-touch advertising.',
    strategy: 'Engineered a 3-tier bundle offer with post-purchase 1-click upsells and SMS abandoned cart reactivation flow.',
    adSpend: 4280.00,
    purchases: 1890,
    costPerPurchase: 2.26,
    roas: 23.00,
    revenueGenerated: 98450.00,
    screenshotUrl: '/assets/IMG_20260821_212121_772.jpg',
    resultsSummary: 'Generated 1,890 orders at an ultra-low $2.26 CPA, yielding $98,450 gross revenue at a 23.00x blended ROAS.',
    tags: ['Meta Ads', 'TikTok Ads', 'Bundle Optimization', 'Email/SMS'],
    featured: true,
    date: '2026-06-28'
  },
  {
    id: 'cs-3',
    clientName: 'NutriCore Supplements',
    industry: 'Health & Wellness Subscriptions',
    campaignTitle: 'Subscription Conversion Architecture & Hook Testing',
    objective: 'Shift buyers into recurring subscription plans while scaling Meta Ads spend past $2,000/day profitably.',
    challenge: 'High friction subscription checkout and generic product benefit messaging.',
    strategy: 'Deployed medical doctor social proof angles, interactive supplement selector quiz, and automated Klaviyo churn recovery.',
    adSpend: 8140.00,
    purchases: 712,
    costPerPurchase: 11.43,
    roas: 22.39,
    revenueGenerated: 182300.00,
    screenshotUrl: '/assets/IMG_20260821_212118_213.jpg',
    resultsSummary: 'Generated $182,300 in contract subscription value at 22.39x ROAS with 68% of purchasers opting for recurring billing.',
    tags: ['Subscription Scaling', 'Quiz Funnels', 'Klaviyo Automation', 'Meta Ads'],
    featured: true,
    date: '2026-05-19'
  },
  {
    id: 'cs-4',
    clientName: 'VoltEdge Tech & Gadgets',
    industry: 'Consumer Electronics',
    campaignTitle: 'TikTok Spark Ads & Viral Creative Testing System',
    objective: 'Tap into Gen Z and Millennial audiences with native creator UGC and fast turnaround ad testing.',
    challenge: 'Traditional studio product photography was failing on short-form video platforms.',
    strategy: 'Curated 20+ viral hook variations, tested creator Spark Ads, and built a lightning-fast Shopify landing experience.',
    adSpend: 2950.00,
    purchases: 1420,
    costPerPurchase: 2.08,
    roas: 21.76,
    revenueGenerated: 64200.00,
    screenshotUrl: '/assets/IMG_20260821_212113_096.jpg',
    resultsSummary: 'Drove 1,420 unit sales with an explosive 21.76x ROAS, achieving $64,200 revenue in less than 3 weeks.',
    tags: ['TikTok Spark Ads', 'Creator UGC', 'Shopify Speed', 'Viral Hooks'],
    featured: false,
    date: '2026-04-10'
  },
  {
    id: 'cs-5',
    clientName: 'HomeVibe Living',
    industry: 'Home Decor & Furniture',
    campaignTitle: 'Retargeting Engine & VIP Retention Automation',
    objective: 'Re-engage 45,000+ dormant store visitors and maximize holiday lifetime customer value.',
    challenge: 'High initial drop-off rate on cart page and unsegmented email list.',
    strategy: 'Segmented customer purchase behavior, configured dynamic catalog ads (DPA), and implemented automated SMS blast triggers.',
    adSpend: 1800.00,
    purchases: 890,
    costPerPurchase: 2.02,
    roas: 28.94,
    revenueGenerated: 52100.00,
    screenshotUrl: '/assets/IMG_20260821_212125_831.jpg',
    resultsSummary: 'Unlocked $52,100 from previously dormant traffic with a 28.94x ROAS, adding $40k+ in net cash flow.',
    tags: ['Dynamic Retargeting', 'SMS Marketing', 'VIP Flows', 'Meta DPA'],
    featured: false,
    date: '2026-03-22'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Marcus Vance',
    company: 'Aura Luxe Apparel',
    position: 'Founder & CEO',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    message: 'WanosMarketing completely revolutionized our acquisition economics. We went from burning cash at 1.8x ROAS to consistently printing 30x+ returns during our peak drops. Their creative strategy and media buying discipline are unparalleled.',
    verified: true,
    metricBadge: '34.65x Peak ROAS',
    date: '2026-07-20'
  },
  {
    id: 't-2',
    clientName: 'Elena Rostova',
    company: 'GlowBotanica Skincare',
    position: 'Chief Marketing Officer',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    message: 'Before working with Wanos, our customer acquisition cost was threatening our margins. They overhauled our creative funnel, rebuilt our offer structure, and lowered our CPA to under $3. The best growth investment we made this year.',
    verified: true,
    metricBadge: '+$98K in 30 Days',
    date: '2026-07-02'
  },
  {
    id: 't-3',
    clientName: 'David H. Sterling',
    company: 'NutriCore Health',
    position: 'Co-Founder & VP Growth',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    message: 'The communication, transparent reporting, and relentless focus on net profit rather than just vanity metrics set WanosMarketing apart from every other agency we tested. They genuinely act as an internal growth department.',
    verified: true,
    metricBadge: '712 Subscribers Added',
    date: '2026-06-12'
  },
  {
    id: 't-4',
    clientName: 'Sophia Lin',
    company: 'VoltEdge Devices',
    position: 'Head of E-Commerce',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    message: 'Their TikTok ads system scaled our gadget store to 6-figures per month in record time. The creative testing framework they run found winning angles within 48 hours of onboarding.',
    verified: true,
    metricBadge: '21.76x TikTok ROAS',
    date: '2026-05-18'
  }
];

export const initialServices: Service[] = [
  {
    id: 'srv-1',
    title: 'Meta Ads',
    shortDesc: 'Full-funnel Facebook & Instagram acquisition.',
    fullDesc: 'Data-driven Meta media buying and high-velocity creative testing engineered for scale.',
    icon: 'Target',
    deliverables: [
      'Campaign architecture & algorithmic bidding',
      'High-velocity creative hook testing',
      'Lookalike and custom audience scaling',
      'Server-side Conversions API (CAPI)'
    ],
    metrics: '4.2x Avg ROAS',
    popular: true
  },
  {
    id: 'srv-2',
    title: 'TikTok Ads',
    shortDesc: 'Viral creator media & high-converting Spark Ads.',
    fullDesc: 'Trend-led creative testing turning short-form engagement into predictable purchase volume.',
    icon: 'Sparkles',
    deliverables: [
      'UGC creator sourcing & scripting',
      'TikTok Shop & Spark Ads deployment',
      'Broad algorithmic audience scaling',
      'Real-time CPA guardrails'
    ],
    metrics: '21.7x Peak ROAS',
    popular: true
  },
  {
    id: 'srv-3',
    title: 'Email & SMS',
    shortDesc: 'Automated retention flows & VIP customer lifecycles.',
    fullDesc: 'Automated Klaviyo & SMS sequences recovering carts and driving repeat purchase revenue.',
    icon: 'MailCheck',
    deliverables: [
      'Welcome & VIP loyalty sequences',
      'Cart & checkout recovery flows',
      'Customer win-back automations',
      'Behavioral list segmentation'
    ],
    metrics: '35%+ Lifecycle Revenue',
    popular: false
  },
  {
    id: 'srv-4',
    title: 'Website Development',
    shortDesc: 'Speed-optimized Shopify stores & custom landing pages.',
    fullDesc: 'High-converting digital storefronts designed for sub-second speeds and maximum checkout conversion.',
    icon: 'LayoutTemplate',
    deliverables: [
      'Custom Shopify & headless builds',
      'Rapid-deployment landing pages',
      'Mobile-first checkout optimization',
      'Sub-second page performance'
    ],
    metrics: '+45% Conversion Lift',
    popular: false
  }
];

export const initialBrands: ClientBrand[] = [
  { id: 'b-1', name: 'Aura Luxe', industry: 'Luxury Apparel', growthMetric: '34.6x ROAS' },
  { id: 'b-2', name: 'GlowBotanica', industry: 'Clean Skincare', growthMetric: '23.0x ROAS' },
  { id: 'b-3', name: 'NutriCore', industry: 'Health Supplements', growthMetric: '22.4x ROAS' },
  { id: 'b-4', name: 'VoltEdge', industry: 'Consumer Tech', growthMetric: '21.8x ROAS' },
  { id: 'b-5', name: 'HomeVibe', industry: 'Living & Decor', growthMetric: '28.9x ROAS' },
  { id: 'b-6', name: 'PeakFitness', industry: 'Athletic Wear', growthMetric: '4.2x Scale' },
  { id: 'b-7', name: 'UrbanZen', industry: 'Wellness Lifestyle', growthMetric: '+320% Revenue' },
  { id: 'b-8', name: 'VelvetCoffee', industry: 'DTC Beverage', growthMetric: '99% Retention' }
];

export const initialAgencySettings: AgencySettings = {
  agencyName: 'WanosMarketing',
  logoUrl: '/assets/wm-logo.svg',
  tagline: 'Scale Your E-Commerce Brand With 4.2x Average ROAS',
  bookingUrl: 'https://calendly.com/wanosmarketing/growth-strategy-call',
  email: 'contact@wanosmarketing.com',
  instagramUrl: 'https://instagram.com/wanosmarketing',
  linkedinUrl: 'https://linkedin.com/company/wanosmarketing',
  heroHeadline: 'We Scale E-Commerce Brands With Performance Ads.',
  heroSubheadline: 'Meta Ads, TikTok Ads, Email/SMS Marketing & Website Development. Delivering an average 4.2x ROAS across partner stores.',
  metaPixelId: 'PIXEL_9381029810',
  googleAnalyticsId: 'G-WANOS2026'
};

export const initialMediaAssets: MediaAsset[] = [
  {
    id: 'm-0',
    title: 'Wanos Marketing Official WM Brand Logo',
    url: '/assets/IMG_20260821_212107_940.jpg',
    type: 'image/jpeg',
    category: 'logo',
    uploadDate: '2026-08-21'
  },
  {
    id: 'm-1',
    title: 'Meta Ads Manager - $35,410 Revenue at 34.65x ROAS',
    url: '/assets/IMG_20260821_212125_831.jpg',
    type: 'image/jpeg',
    category: 'proof',
    uploadDate: '2026-08-21'
  },
  {
    id: 'm-2',
    title: 'Ad Account Overview - $98,450 Revenue at 23.00x ROAS',
    url: '/assets/IMG_20260821_212121_772.jpg',
    type: 'image/jpeg',
    category: 'proof',
    uploadDate: '2026-08-21'
  },
  {
    id: 'm-3',
    title: 'Subscription Scale - $182,300 Revenue at 22.39x ROAS',
    url: '/assets/IMG_20260821_212118_213.jpg',
    type: 'image/jpeg',
    category: 'proof',
    uploadDate: '2026-08-21'
  },
  {
    id: 'm-4',
    title: 'TikTok & DTC Ad Results - $64,200 Revenue at 21.76x ROAS',
    url: '/assets/IMG_20260821_212113_096.jpg',
    type: 'image/jpeg',
    category: 'proof',
    uploadDate: '2026-08-21'
  }
];

export const initialLeads: LeadSubmission[] = [
  {
    id: 'lead-1',
    name: 'Alexander Cross',
    email: 'alexander@aurora-footwear.com',
    brandName: 'Aurora Footwear Co.',
    websiteUrl: 'https://aurorafootwear.example.com',
    monthlyRevenue: '$50,000 - $100,000',
    adSpendBudget: '$5,000 - $15,000 / mo',
    primaryGoal: 'Scale Meta ads profitably and fix 4.5% abandoned cart rate.',
    servicesInterested: ['Paid Advertising (Meta & TikTok)', 'Website & Funnel Conversion Optimization'],
    status: 'booked',
    preferredDate: '2026-08-25',
    preferredTime: '14:00 EST',
    notes: 'Qualifies for high-tier scaling package. Solid product-market fit.',
    createdAt: '2026-08-21T14:32:00Z'
  },
  {
    id: 'lead-2',
    name: 'Sarah Jenkins',
    email: 'sarah@purebotanics.com',
    brandName: 'Pure Botanics Wellness',
    websiteUrl: 'https://purebotanics.example.com',
    monthlyRevenue: '$100,000 - $250,000',
    adSpendBudget: '$15,000 - $30,000 / mo',
    primaryGoal: 'Launch TikTok Spark Ads and install automated Klaviyo retention flows.',
    servicesInterested: ['Paid Advertising (Meta & TikTok)', 'Email & SMS Marketing Automation', 'Creative Strategy & Hook Engineering'],
    status: 'qualified',
    preferredDate: '2026-08-26',
    preferredTime: '11:30 EST',
    notes: 'Existing 6-figure store looking to migrate from generic agency.',
    createdAt: '2026-08-22T09:15:00Z'
  },
  {
    id: 'lead-3',
    name: 'Julian Montgomery',
    email: 'julian@kronoswatch.com',
    brandName: 'Kronos Timepieces',
    websiteUrl: 'https://kronostime.example.com',
    monthlyRevenue: '$25,000 - $50,000',
    adSpendBudget: '$3,000 - $5,000 / mo',
    primaryGoal: 'Needs high-converting landing pages for new luxury watch drop.',
    servicesInterested: ['Website & Funnel Conversion Optimization', 'Creative Strategy & Hook Engineering'],
    status: 'new',
    createdAt: '2026-08-22T12:04:00Z'
  }
];

export const faqsList = [
  {
    q: 'What is your average ROAS across accounts?',
    a: 'Our partner accounts achieve a 4.2x average blended ROAS, with peak campaigns scaling up to 34.6x during high-velocity drops.'
  },
  {
    q: 'What channels and services do you specialize in?',
    a: 'We specialize strictly in 4 core pillars: Meta Ads (FB & IG), TikTok Ads, Email/SMS Marketing (Klaviyo/SMS), and Website Development (Shopify & high-converting landing pages).'
  },
  {
    q: 'What is the required monthly ad spend to work together?',
    a: 'We typically partner with e-commerce brands investing $3,000 to $100,000+ per month in paid traffic to ensure fast creative testing and rapid scaling.'
  },
  {
    q: 'How fast can we launch campaigns?',
    a: 'Onboarding and tracking setup take 3–5 business days. Your first campaign iterations and creative angles launch within 7 days.'
  },
  {
    q: 'Are there any long-term contracts?',
    a: 'No lock-in contracts. We operate on a month-to-month basis backed by performance incentives.'
  }
];
