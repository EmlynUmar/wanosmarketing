import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { agencySettings } = useApp();

  const servicesList = [
    {
      title: 'Tiktok Ads',
      desc: "We leverage TikTok's algorithm with proven strategy and execution to drive consistent, scalable growth",
      logo: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Official TikTok Icon with Authentic Multi-Color Offset Music Note */}
          <g transform="translate(1, 0)">
            {/* Cyan layer */}
            <path d="M21.2 7.1a5.8 5.8 0 0 1-3.6-2.1v-.1a6 6 0 0 1-.9-3.2h-3.6v15.2a3.2 3.2 0 0 1-3.2 3.2 3.2 3.2 0 0 1-3.2-3.2 3.2 3.2 0 0 1 3.2-3.2c.4 0 .8.1 1.2.2V9.8a7.2 7.2 0 0 0-1.2-.1c-4.1 0-7.4 3.3-7.4 7.4 0 4.1 3.3 7.4 7.4 7.4 4.1 0 7.4-3.3 7.4-7.4V9.4a9.4 9.4 0 0 0 4.1 1.6V7.2a6 6 0 0 1-.2-.1z" fill="#25F4EE" />
            {/* Red/Magenta layer */}
            <path d="M22.8 7.1a5.8 5.8 0 0 1-3.6-2.1v-.1a6 6 0 0 1-.9-3.2h-3.6v15.2a3.2 3.2 0 0 1-3.2 3.2 3.2 3.2 0 0 1-3.2-3.2 3.2 3.2 0 0 1 3.2-3.2c.4 0 .8.1 1.2.2V9.8a7.2 7.2 0 0 0-1.2-.1c-4.1 0-7.4 3.3-7.4 7.4 0 4.1 3.3 7.4 7.4 7.4 4.1 0 7.4-3.3 7.4-7.4V9.4a9.4 9.4 0 0 0 4.1 1.6V7.2a6 6 0 0 1-.2-.1z" fill="#FE2C55" />
            {/* White core note */}
            <path d="M22.0 7.1a5.8 5.8 0 0 1-3.6-2.1v-.1a6 6 0 0 1-.9-3.2h-3.6v15.2a3.2 3.2 0 0 1-3.2 3.2 3.2 3.2 0 0 1-3.2-3.2 3.2 3.2 0 0 1 3.2-3.2c.4 0 .8.1 1.2.2V9.8a7.2 7.2 0 0 0-1.2-.1c-4.1 0-7.4 3.3-7.4 7.4 0 4.1 3.3 7.4 7.4 7.4 4.1 0 7.4-3.3 7.4-7.4V9.4a9.4 9.4 0 0 0 4.1 1.6V7.2a6 6 0 0 1-.2-.1z" fill="#FFFFFF" />
          </g>
        </svg>
      )
    },
    {
      title: 'Meta Ads',
      desc: 'We build targeted Meta campaigns using data and proven systems to reach the right audience and drive measurable growth',
      logo: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 286 192" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Official Meta 3D Ribbon Loop */}
          <defs>
            <linearGradient id="meta_loop_grad1" x1="61" y1="117" x2="259" y2="127" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0064E1" offset="0"/>
              <stop stopColor="#0064E1" offset="0.4"/>
              <stop stopColor="#0073EE" offset="0.83"/>
              <stop stopColor="#0082FB" offset="1"/>
            </linearGradient>
            <linearGradient id="meta_loop_grad2" x1="45" y1="139" x2="45" y2="66" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0082FB" offset="0"/>
              <stop stopColor="#0064E0" offset="1"/>
            </linearGradient>
          </defs>
          <path fill="#0081FB" d="m31.06,125.96c0,10.98 2.41,19.41 5.56,24.51 4.13,6.68 10.29,9.51 16.57,9.51 8.1,0 15.51-2.01 29.79-21.76 11.44-15.83 24.92-38.05 33.99-51.98l15.36-23.6c10.67-16.39 23.02-34.61 37.18-46.96 11.56-10.08 24.03-15.68 36.58-15.68 21.07,0 41.14,12.21 56.5,35.11 16.81,25.08 24.97,56.67 24.97,89.27 0,19.38-3.82,33.62-10.32,44.87-6.28,10.88-18.52,21.75-39.11,21.75l0-31.02c17.63,0 22.03-16.2 22.03-34.74 0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16.05c-18.2,32.27-22.81,39.62-31.91,51.75-15.95,21.24-29.57,29.29-47.5,29.29-21.27,0-34.72-9.21-43.05-23.09-6.8-11.31-10.14-26.15-10.14-43.06z"/>
          <path fill="url(#meta_loop_grad1)" d="m24.49,37.3c14.24-21.95 34.79-37.3 58.36-37.3 13.65,0 27.22,4.04 41.39,15.61 15.5,12.65 32.02,33.48 52.63,67.81l7.39,12.32c17.84,29.72 27.99,45.01 33.93,52.22 7.64,9.26 12.99,12.02 19.94,12.02 17.63,0 22.03-16.2 22.03-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87-6.28,10.88-18.52,21.75-39.11,21.75-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71l-25.79-43.08c-12.94-21.62-24.81-37.74-31.68-45.04-7.39-7.85-16.89-17.33-32.05-17.33-12.27,0-22.69,8.61-31.41,21.78z"/>
          <path fill="url(#meta_loop_grad2)" d="m82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78-12.33,18.61-19.88,46.33-19.88,72.95 0,10.98 2.41,19.41 5.56,24.51l-26.48,17.44c-6.8-11.31-10.14-26.15-10.14-43.06 0-30.75 8.44-62.8 24.49-87.55 14.24-21.95 34.79-37.3 58.36-37.3z"/>
        </svg>
      )
    },
    {
      title: 'SMS / Email Marketing',
      desc: 'We turn email and SMS into predictable revenue channels through strategy, automation, and optimization',
      logo: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Omnisend Official Logo Icon: Black Squircle with White Lowercase 'i' */}
          <rect x="2" y="2" width="32" height="32" rx="9" fill="#000000" />
          
          {/* Omnisend White Circle Dot */}
          <circle cx="18" cy="10.5" r="2.2" fill="#FFFFFF" />
          
          {/* Omnisend White Characteristic Curved Stem */}
          <path
            d="M 18 15.2 C 14.8 15.2 12.8 17.2 12.8 20 C 12.8 21.1 13.5 21.9 14.4 21.9 C 15.3 21.9 15.9 21.1 16.1 20.2 C 16.4 18.9 17.1 18.1 18 18.1 L 18 28.5 C 18 29.3 18.7 30 19.5 30 C 20.3 30 21 29.3 21 28.5 L 21 18.1 C 21 16.5 19.7 15.2 18 15.2 Z"
            fill="#FFFFFF"
          />
        </svg>
      )
    },
    {
      title: 'Website Development',
      desc: 'We build high-converting websites using proven systems, data, and UX strategy to turn traffic into revenue',
      logo: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Authentic Shopify Green Bag & 'S' Monogram */}
          <defs>
            <linearGradient id="shopify_svc_grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#96BF48" />
              <stop offset="100%" stopColor="#5E8E3E" />
            </linearGradient>
          </defs>
          <path d="M28.8 11.5c-.1-.58-.57-.98-1.14-.98h-5.12c-.06-1.35-.55-4.72-3.03-6.48-1.8-1.27-3.66-1.21-4.35-.99-.69.24-1.72.98-2.35 3.09-.48 1.61-.22 3.24-.04 4.38H7.65c-.6 0-1.11.44-1.18 1.02L3.17 30.6c-.09.49.08 1 .42 1.36.36.35.85.55 1.36.55h26.2c.51 0 1-.2 1.36-.55.35-.36.51-.87.42-1.36L28.8 11.5z" fill="url(#shopify_svc_grad)" />
          <path d="M17.3 5.3c1.17.82 1.66 2.7 1.79 3.75h-4.39c.22-1.35.89-2.19 1.34-2.44.39-.21.81-.22 1.26.19z" fill="#38541B" opacity="0.85" />
          <path d="M20.5 18.2c-.45-.34-1.24-.68-2.14-.9-1.01-.22-1.46-.56-1.46-1.01 0-.45.45-.79 1.24-.79.9 0 1.69.34 2.25.79l1.24-1.46c-.9-.79-2.14-1.12-3.49-1.12-2.02 0-3.49 1.24-3.49 2.92 0 1.57 1.12 2.47 2.81 2.81 1.01.22 1.57.56 1.57 1.12 0 .56-.56.9-1.46.9-1.01 0-2.02-.45-2.7-1.12l-1.24 1.57c1.01 1.01 2.47 1.46 3.94 1.46 2.25 0 3.71-1.24 3.71-3.04 0-1.35-.79-2.25-2.37-2.47z" fill="#FFFFFF" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-black relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Ultra-Minimal Services Card */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0b0e14] border border-white/[0.08] shadow-2xl text-center space-y-10 sm:space-y-12">
          
          <div className="space-y-10 sm:space-y-12">
            {servicesList.map((service) => (
              <div key={service.title} className="space-y-3 max-w-lg mx-auto flex flex-col items-center">
                <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  {service.logo}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Pill Action Button */}
          <div className="pt-4 flex justify-center">
            <a
              href={agencySettings.bookingUrl || 'https://calendly.com/wanosmarketing01/work-with-wanos-to-scale-your-brand'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E55353] hover:bg-[#D94747] text-white font-medium text-xs sm:text-sm tracking-wide rounded-full transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-red-950/30 group"
            >
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

        {/* Minimal Transition Anchor directly following */}
        <div className="text-center mt-16 sm:mt-24 space-y-3 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Predictable, scalable growth
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            We build the strategy, frontend, and backend systems your brand needs to scale driving measurable growth, efficiency, and higher returns
          </p>
        </div>

      </div>
    </section>
  );
};

