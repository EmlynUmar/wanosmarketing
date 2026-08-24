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
    value: '1.2M+',
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
    clientName: 'Maintaining a good roas even at scale',
    industry: '',
    campaignTitle: 'Maintaining a good roas even at scale',
    objective: 'Scale account volume and budget past $200k+ while sustaining consistent, profitable ROAS and low CPA across all acquisition channels.',
    challenge: 'Preventing ROAS decay while scaling ad spend into high six figures.',
    strategy: 'Broad audience testing, creative fatigue rotation, and automated budget scaling rules.',
    adSpend: 202585.47,
    purchases: 6750,
    costPerPurchase: 30.01,
    roas: 2.69,
    revenueGenerated: 544480.68,
    screenshotUrl: '/assets/IMG-20260823-WA0017.svg',
    resultsSummary: 'Scaled ad spend to $202,585.47 generating $544,480.68 in revenue across 6,750 purchases at 2.69x ROAS while maintaining a $30.01 CPA.',
    tags: ['$544k+ Revenue', '2.69x ROAS', 'Scale Proof'],
    featured: true,
    date: '2026-08-20'
  },
  {
    id: 'cs-2',
    clientName: 'Generating $82k in new revenue? Just another day at the office',
    industry: '',
    campaignTitle: 'Generating $82k in new revenue? Just another day at the office',
    objective: 'Scale account volume aggressively while maintaining strong, profitable return on ad spend.',
    challenge: 'Preventing ROAS decay while scaling ad spend into high figures.',
    strategy: 'Broad audience testing, creative fatigue rotation, and automated budget scaling rules.',
    adSpend: 25235.50,
    purchases: 879,
    costPerPurchase: 28.71,
    roas: 3.27,
    revenueGenerated: 82515.93,
    screenshotUrl: '/assets/proof-82k-revenue.svg',
    resultsSummary: 'Scaled account spend to $25,235.50 generating $82,515.93 in revenue at 3.27x average ROAS across 879 purchases.',
    tags: ['Scale Campaign', '3.27x ROAS', 'Meta Ads'],
    featured: true,
    date: '2026-08-12'
  },
  {
    id: 'cs-3',
    clientName: 'Back to back high volume months',
    industry: '',
    campaignTitle: 'Back to back high volume months',
    objective: 'Drive consistent high order volume across multi-angle creatives.',
    challenge: 'Managing ad spend velocity and CPA stability.',
    strategy: 'Dynamic creative optimization and retargeting cascades.',
    adSpend: 15798.68,
    purchases: 559,
    costPerPurchase: 28.26,
    roas: 3.18,
    revenueGenerated: 50289.82,
    screenshotUrl: '/assets/proof-high-volume.svg',
    resultsSummary: 'Generated $50,289.82 from $15,798.68 ad spend with 559 total purchases at 3.18x ROAS.',
    tags: ['High Volume', '3.18x ROAS', 'Conversion'],
    featured: true,
    date: '2026-07-28'
  },
  {
    id: 'cs-4',
    clientName: '34x ROAS on a single drop',
    industry: '',
    campaignTitle: '34x ROAS on a single drop',
    objective: 'Generate maximum revenue from targeted launch windows.',
    challenge: 'Rapid audience conversion with minimal ad spend.',
    strategy: 'High-intent creative hooks and fast checkout flows.',
    adSpend: 1021.92,
    purchases: 341,
    costPerPurchase: 3.00,
    roas: 34.65,
    revenueGenerated: 35410.00,
    screenshotUrl: '/assets/proof-34x-roas.svg',
    resultsSummary: 'Achieved 34.65x average ROAS generating $35,410.00 in revenue from only $1,021.92 spend.',
    tags: ['34.65x ROAS', 'Viral Drop', 'High Velocity'],
    featured: true,
    date: '2026-07-15'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'bu.bully',
    company: 'bu.bully',
    position: '',
    avatarUrl: '',
    logoSvg: '/assets/brands/bulley-mark.svg',
    rating: 5,
    message: 'WanosMarketing completely revolutionized our acquisition economics. We went from burning cash at 1.8x ROAS to consistently printing 30x+ returns during our peak drops. Their creative strategy and media buying discipline are unparalleled.',
    verified: true,
    metricBadge: '34.65x Peak ROAS',
    date: '2026-07-20'
  },
  {
    id: 't-2',
    clientName: 'La Raza',
    company: 'La Raza',
    position: '',
    avatarUrl: '',
    logoSvg: '/assets/brands/laraza.svg',
    rating: 5,
    message: 'Working with Muhammad and his team has been a great experience. They’ve helped La Raza grow through paid ads while always keeping communication consistent and transparent. They’re constantly testing and adjusting to improve performance, and it feels like they genuinely care about the growth of the brand. Definitely a team I trust and enjoy working with.',
    verified: true,
    metricBadge: 'Consistent Growth',
    date: '2026-07-02'
  },
  {
    id: 't-3',
    clientName: 'Nocietty',
    company: 'Nocietty',
    position: '',
    avatarUrl: '',
    logoSvg: '/assets/brands/nociety.svg',
    rating: 5,
    message: 'The communication, transparent reporting, and relentless focus on net profit rather than vanity metrics set WanosMarketing apart from every other agency we tested. They genuinely act as an internal growth department.',
    verified: true,
    metricBadge: '22.39x Drop ROAS',
    date: '2026-06-12'
  },
  {
    id: 't-4',
    clientName: 'Mollynineteen',
    company: 'Mollynineteen',
    position: '',
    avatarUrl: '',
    logoSvg: '/assets/brands/mollynineteen.svg',
    rating: 5,
    message: 'Their TikTok ads and short-form creative testing framework scaled our store to 6-figures in record time. Winning angles were found within 48 hours of onboarding.',
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
    fullDesc: 'Automated Omnisend, SMS and email sequences recovering carts and driving repeat purchase revenue.',
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
  { id: 'b-1', name: 'bu.bully', logoSvg: '/assets/brands/bulley.svg', industry: '', growthMetric: '34.6x ROAS' },
  { id: 'b-2', name: 'Laraza.us', logoSvg: '/assets/brands/laraza.svg', industry: '', growthMetric: '23.0x ROAS' },
  { id: 'b-3', name: 'Nocietty', logoSvg: '/assets/brands/nociety.svg', industry: '', growthMetric: '22.4x ROAS' },
  { id: 'b-4', name: 'Mollynineteen', logoSvg: '/assets/brands/mollynineteen.svg', industry: '', growthMetric: '21.8x ROAS' },
  { id: 'b-5', name: 'RZLNT', logoSvg: '/assets/brands/rzlnt.svg', industry: '', growthMetric: '28.9x ROAS' },
  { id: 'b-6', name: 'Aurora', logoSvg: '/assets/brands/aurora.svg', industry: '', growthMetric: '4.2x Scale' },
  { id: 'b-7', name: 'Peace & Heart', logoSvg: '/assets/brands/peace-heart.svg', industry: '', growthMetric: '+320% Revenue' },
  { id: 'b-8', name: 'Compass', logoSvg: '/assets/brands/compass-star.svg', industry: '', growthMetric: '99% Retention' },
  { id: 'b-9', name: 'Crescent', logoSvg: '/assets/brands/swoosh-crescent.svg', industry: '', growthMetric: '30x Drop' }
];

export const initialAgencySettings: AgencySettings = {
  agencyName: 'WanosMarketing',
  logoUrl: '/assets/wm-logo.svg',
  tagline: 'Scale Your E-Commerce Brand With 4.2x Average ROAS',
  bookingUrl: 'https://calendly.com/wanosmarketing01/work-with-wanos-to-scale-your-brand',
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
