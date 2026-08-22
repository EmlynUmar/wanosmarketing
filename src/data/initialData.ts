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
    label: 'Revenue Generated',
    value: '10M+',
    prefix: '$',
    description: 'Trackable top-line gross revenue produced for client stores & brands',
    changePercent: '+142% YoY',
    icon: 'TrendingUp',
    highlight: true,
  },
  {
    id: 'stat-2',
    label: 'Ad Spend Managed',
    value: '2M+',
    prefix: '$',
    description: 'Disciplined capital allocated across Meta, TikTok & Google networks',
    changePercent: 'Optimal CPA',
    icon: 'DollarSign',
    highlight: false,
  },
  {
    id: 'stat-3',
    label: 'Brands Served',
    value: '500+',
    suffix: '',
    description: 'Direct-to-consumer and B2B growth leaders scaled globally',
    changePercent: 'Global Reach',
    icon: 'Building2',
    highlight: false,
  },
  {
    id: 'stat-4',
    label: 'Peak Campaign ROAS',
    value: '34.65x',
    suffix: '',
    description: 'Record verified Return On Ad Spend achieved on flagship Meta campaigns',
    changePercent: '34.65x Record',
    icon: 'Zap',
    highlight: true,
  },
  {
    id: 'stat-5',
    label: 'Avg. Retention Rate',
    value: '98.4%',
    suffix: '',
    description: 'Clients retained for recurring full-funnel scale and lifecycle automation',
    changePercent: '98.4% Retention',
    icon: 'Users',
    highlight: false,
  },
  {
    id: 'stat-6',
    label: 'Campaigns Executed',
    value: '1,450+',
    suffix: '',
    description: 'Multi-angle high-conversion ad angles tested with automated rule engines',
    changePercent: '100% Data-Driven',
    icon: 'Activity',
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
    screenshotUrl: '/assets/IMG_20260821_212107_940.jpg',
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
    title: 'Paid Advertising (Meta & TikTok)',
    shortDesc: 'Hyper-targeted performance ad campaigns engineered for immediate ROAS and high-velocity scaling.',
    fullDesc: 'We manage full-funnel media buying across Meta (Facebook, Instagram) and TikTok Ads. Using proprietary testing frameworks, algorithmic bid management, and high-converting UGC angles, we maximize purchase volume while protecting your target acquisition cost.',
    icon: 'Target',
    deliverables: [
      'Dedicated media buying specialists & daily account optimization',
      'High-velocity creative testing (Hooks, formats, angles)',
      'Algorithmic bid strategies & custom audience architecture',
      'Cross-platform scaling (Meta Ads, TikTok Spark Ads, Google)',
      'Real-time live performance reporting dashboard'
    ],
    metrics: 'Avg 4.8x - 34x ROAS on active ad spend',
    popular: true
  },
  {
    id: 'srv-2',
    title: 'Email & SMS Marketing Automation',
    shortDesc: 'Turn one-time purchasers into high-LTV repeat buyers with automated retention flows.',
    fullDesc: 'Acquiring customers is only half the battle. We build bespoke retention engines inside Klaviyo and SMS platforms that generate 30% to 45% of your total store revenue on autopilot.',
    icon: 'MailCheck',
    deliverables: [
      'Comprehensive welcome & VIP loyalty sequences',
      'Browse, cart, and checkout abandonment recovery',
      'Customer win-back & subscription renewal automations',
      'Weekly revenue-generating promotional campaigns',
      'Advanced behavioral segmentation & zero-party data capture'
    ],
    metrics: '35%+ of total store revenue generated automatically',
    popular: false
  },
  {
    id: 'srv-3',
    title: 'Website & Funnel Conversion Optimization',
    shortDesc: 'Transform more visitors into paying customers with scientifically tested landing pages.',
    fullDesc: 'Double your sales without increasing ad spend. We analyze heatmap data, user drop-offs, and checkout friction points to engineer frictionless high-converting landing pages and product pages.',
    icon: 'LayoutTemplate',
    deliverables: [
      'High-converting landing page design & development',
      'A/B split testing on hooks, pricing, and bundle offers',
      'Mobile-first responsive UX and instant checkout flow',
      'Page speed optimization for sub-second load times',
      'Heatmap & customer recording behavioral analysis'
    ],
    metrics: '+45% average lift in store conversion rate',
    popular: false
  },
  {
    id: 'srv-4',
    title: 'Creative Strategy & Hook Engineering',
    shortDesc: 'Scroll-stopping video and graphic assets tailored for high-converting algorithmic social feeds.',
    fullDesc: 'Creative is the new targeting. We write scripts, brief creators, and edit high-impact UGC and motion graphics designed to win in the first 3 seconds of customer attention.',
    icon: 'Sparkles',
    deliverables: [
      'Weekly creative briefs with data-backed hook angles',
      'Creator UGC sourcing and rights management',
      'High-energy video editing & motion graphic design',
      'Dynamic product image catalog enhancements',
      'Competitor ad intelligence & trend monitoring'
    ],
    metrics: '3x higher hook retention rate on social feeds',
    popular: false
  },
  {
    id: 'srv-5',
    title: 'Growth Automation & Tracking Systems',
    shortDesc: 'Rock-solid server-side tracking (CAPI) and automated sales intelligence pipelines.',
    fullDesc: 'Never fly blind. We configure Meta Conversions API (CAPI), Google Analytics 4, and custom attribution models so your ads algorithm gets 100% accurate data signals to optimize conversions.',
    icon: 'Cpu',
    deliverables: [
      'Server-side Meta Conversions API (CAPI) setup',
      'Google Tag Manager & GA4 custom event tracking',
      'Offline conversion tracking and CRM sync',
      'Automated slack alerts for ad anomalies & budget limits',
      'Executive KPI dashboards for leadership teams'
    ],
    metrics: '99.8% event match quality on Meta pixel signals',
    popular: false
  }
];

export const initialBrands: ClientBrand[] = [
  { id: 'b-1', name: 'Aura Luxe', industry: 'Luxury Apparel', growthMetric: '34.6x ROAS' },
  { id: 'b-2', name: 'GlowBotanica', industry: 'Clean Skincare', growthMetric: '+210% MoM' },
  { id: 'b-3', name: 'NutriCore', industry: 'Health Supplements', growthMetric: '$180K/mo' },
  { id: 'b-4', name: 'VoltEdge', industry: 'Consumer Tech', growthMetric: '1,420 Sales' },
  { id: 'b-5', name: 'HomeVibe', industry: 'Living & Decor', growthMetric: '28.9x ROAS' },
  { id: 'b-6', name: 'PeakFitness', industry: 'Athletic Wear', growthMetric: '4.2x Scale' },
  { id: 'b-7', name: 'UrbanZen', industry: 'Wellness Lifestyle', growthMetric: '+320% Revenue' },
  { id: 'b-8', name: 'VelvetCoffee', industry: 'DTC Beverage', growthMetric: '99% Retention' }
];

export const initialAgencySettings: AgencySettings = {
  agencyName: 'WanosMarketing',
  tagline: 'Scale Your Brand With Predictable Performance Advertising',
  bookingUrl: 'https://calendly.com/wanosmarketing/growth-strategy-call',
  email: 'contact@wanosmarketing.com',
  instagramUrl: 'https://instagram.com/wanosmarketing',
  linkedinUrl: 'https://linkedin.com/company/wanosmarketing',
  heroHeadline: 'We Engineer Paid Growth Systems That Scale Brands Beyond 8-Figures.',
  heroSubheadline: 'Performance Meta Ads, TikTok Acquisition, Email/SMS Retention, and Conversion-Optimized Funnels — Backed by Verified ROAS Proof & 100% Data-Driven Execution.',
  metaPixelId: 'PIXEL_9381029810',
  googleAnalyticsId: 'G-WANOS2026'
};

export const initialMediaAssets: MediaAsset[] = [
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
  },
  {
    id: 'm-5',
    title: 'Retargeting Performance - $52,100 Revenue at 28.94x ROAS',
    url: '/assets/IMG_20260821_212107_940.jpg',
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
    q: 'How does WanosMarketing achieve high ROAS consistently?',
    a: 'We combine rigorous creative hook testing, algorithmic bid management, conversion-rate optimized landing pages, and automated Klaviyo retention flows. Rather than relying on simple guesswork, we deploy data-driven scaling frameworks that continuously feed high-intent signals into ad algorithms.'
  },
  {
    q: 'What is the minimum ad spend required to work with WanosMarketing?',
    a: 'We typically partner with direct-to-consumer and growth brands spending a minimum of $3,000 - $5,000/month on paid advertising. This ensures we have sufficient data density to run statistically significant creative tests and rapidly scale winning ad variations.'
  },
  {
    q: 'How fast can we launch and start seeing results?',
    a: 'Our onboarding process takes 3-5 business days to complete account audits, tracking verification (CAPI), and initial creative production. New campaigns typically launch within 7 days of onboarding, with initial data signals and optimizations occurring within the first 48-72 hours.'
  },
  {
    q: 'Do you create the video and image ad creatives or do we provide them?',
    a: 'Both. We offer full-service Creative Strategy & Hook Engineering. We supply data-backed scripts, source UGC creators, edit high-converting motion graphics, and continuously iterate winning angles. If your team already has brand assets, we enhance and adapt them for algorithmic feeds.'
  },
  {
    q: 'How do you track and report campaign performance?',
    a: 'You get 24/7 access to a transparent live analytics dashboard that tracks gross revenue, net ROAS, cost per acquisition (CPA), and blended customer metrics. We also conduct weekly strategy syncs and provide daily Slack communication with your dedicated media buying team.'
  },
  {
    q: 'Is there a long-term contract lock-in?',
    a: 'We believe in earning our partnership every single month through measurable profit. We operate on flexible monthly retainers + performance incentives, giving you complete peace of mind.'
  }
];
