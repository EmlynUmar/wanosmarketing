import React from 'react';
import { useApp } from '../context/AppContext';

// Pre-defined SVG vectors for guaranteed immediate rendering without any image loading delay
const BRAND_VECTOR_LOGOS: Record<string, React.ReactNode> = {
  'b-1': (
    // bu.bully - Official 'b U' logo mark (Gray bubble 'b' + Solid Crimson Red 'U') matching user screenshot
    <svg viewBox="0 0 250 70" fill="none" className="h-10 sm:h-12 w-auto max-w-[170px] sm:max-w-[200px]" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(4, 7)">
        {/* Crisp white rounded background badge */}
        <rect x="0" y="0" width="56" height="56" rx="14" fill="#FFFFFF" />
        
        {/* Lowercase bubble 'b' with grey outline */}
        <g transform="translate(5, 27) scale(0.23)">
          <path
            d="M 8 0 H 42 V 46 C 50 34 66 28 86 28 C 118 28 142 50 142 80 C 142 110 118 132 86 132 C 66 132 50 126 42 114 V 132 H 8 Z"
            fill="#FFFFFF"
            stroke="#9E9EA0"
            strokeWidth="12"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <ellipse
            cx="78"
            cy="80"
            rx="22"
            ry="16"
            fill="#FFFFFF"
            stroke="#9E9EA0"
            strokeWidth="12"
          />
        </g>
        
        {/* Big Crimson Red 'U' */}
        <path
          d="M 25 13 H 35.5 V 32.5 C 35.5 36.5 37.5 38.5 41.5 38.5 C 45.5 38.5 47.5 36.5 47.5 32.5 V 13 H 58 V 32.5 C 58 42.5 51.5 48.5 41.5 48.5 C 31.5 48.5 25 42.5 25 32.5 Z"
          fill="#BA0005"
        />
      </g>
      <text x="74" y="45" fill="#FFFFFF" fontFamily="'Space Grotesk', 'Inter', 'Montserrat', -apple-system, sans-serif" fontWeight="900" fontSize="32" letterSpacing="-0.03em">
        bu<tspan fill="#BA0005">.</tspan>bully
      </text>
    </svg>
  ),
  'b-2': (
    // La Raza - Official Hand-Drawn Engraved Blackletter Logotype matching brand asset
    <svg viewBox="0 0 320 280" fill="none" className="h-12 sm:h-16 w-auto max-w-[140px] sm:max-w-[180px]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="ticker_raza_hatch" width="6" height="6" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" />
        </pattern>
      </defs>
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* "La" - Top Line */}
        <g transform="translate(90, 16)">
          {/* L Top Cap */}
          <path d="M 38 12 L 52 4 L 44 26 L 30 20 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
          {/* L Stem */}
          <path d="M 30 20 L 44 26 L 42 62 L 24 56 Z" fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
          <path d="M 44 26 L 54 32 L 52 68 L 42 62 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
          {/* L Flourish Swash */}
          <path d="M 24 56 C 24 56 12 50 4 62 C -4 74 2 86 16 88 C 30 90 44 76 56 74 C 68 72 74 76 74 76 L 70 82 C 70 82 62 78 52 80 C 40 82 24 96 12 94 C -2 92 -10 76 -2 60 C 6 44 20 48 24 56 Z" 
                fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
          <path d="M 44 26 L 60 20 L 66 28 L 50 34 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" />
          
          {/* 'a' of La */}
          <g transform="translate(68, 30)">
            <path d="M 18 6 L 30 0 L 36 12 L 24 18 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 8 22 L 18 16 L 24 24 L 14 30 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M 8 22 L 14 30 L 12 52 L 4 46 Z" fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 24 18 L 36 12 L 36 50 L 24 56 Z" fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 36 12 L 44 18 L 44 54 L 36 50 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 4 46 C 4 46 12 56 24 56 L 36 56 L 42 62 L 20 62 C 10 62 0 52 4 46 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 16 32 L 24 28 L 24 44 L 16 46 Z" fill="#090A0F" stroke="#FFFFFF" strokeWidth="1.8" />
          </g>
        </g>

        {/* "Raza" - Bottom Line */}
        <g transform="translate(25, 126)">
          {/* 'R' */}
          <g transform="translate(0, 0)">
            <path d="M 26 8 L 40 0 L 34 20 L 20 16 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 20 16 L 34 20 L 32 64 L 18 58 Z" fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 34 20 L 42 26 L 40 68 L 32 64 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 34 20 C 44 14 62 14 68 26 C 74 38 66 50 48 52 L 32 52 Z" fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 68 26 L 76 32 C 76 46 64 56 46 58 L 48 52 C 66 50 74 38 68 26 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 44 48 L 58 48 L 74 88 L 58 88 Z" fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 58 48 L 66 52 L 82 92 L 74 88 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 18 58 C 18 58 6 52 -4 64 C -14 78 -4 94 12 96 C 28 98 42 84 50 82 C 58 80 62 84 62 84 L 58 90 C 58 90 50 86 42 88 C 30 92 14 104 2 100 C -12 96 -20 80 -10 64 C -2 46 14 50 18 58 Z" 
                  fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
          </g>

          {/* First 'a' */}
          <g transform="translate(86, 20)">
            <path d="M 18 6 L 30 0 L 36 12 L 24 18 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 8 22 L 18 16 L 24 24 L 14 30 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M 8 22 L 14 30 L 12 52 L 4 46 Z" fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 24 18 L 36 12 L 36 50 L 24 56 Z" fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 36 12 L 44 18 L 44 54 L 36 50 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 4 46 C 4 46 12 56 24 56 L 36 56 L 42 62 L 20 62 C 10 62 0 52 4 46 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 16 32 L 24 28 L 24 44 L 16 46 Z" fill="#090A0F" stroke="#FFFFFF" strokeWidth="1.8" />
          </g>

          {/* 'z' */}
          <g transform="translate(142, 20)">
            <path d="M 4 8 L 14 2 L 36 2 L 32 14 L 14 14 L 8 20 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 32 14 L 36 8 L 16 52 L 10 46 Z" fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 36 8 L 44 14 L 24 56 L 16 52 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 10 46 L 24 56 C 24 56 34 54 36 64 C 38 76 26 84 14 84 C 4 84 -2 76 4 70 C 8 66 16 68 16 72 C 16 76 10 78 8 76 C 6 74 8 72 10 72 C 14 72 24 74 24 68 C 24 62 16 60 8 58 L 2 50 Z" 
                  fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
          </g>

          {/* Second 'a' */}
          <g transform="translate(196, 20)">
            <path d="M 18 6 L 30 0 L 36 12 L 24 18 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 8 22 L 18 16 L 24 24 L 14 30 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M 8 22 L 14 30 L 12 52 L 4 46 Z" fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 24 18 L 36 12 L 36 50 L 24 56 Z" fill="url(#ticker_raza_hatch)" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 36 12 L 44 18 L 44 54 L 36 50 Z" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 4 46 C 4 46 12 56 24 56 L 36 56 L 42 62 L 20 62 C 10 62 0 52 4 46 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M 16 32 L 24 28 L 24 44 L 16 46 Z" fill="#090A0F" stroke="#FFFFFF" strokeWidth="1.8" />
          </g>
        </g>
      </g>
    </svg>
  ),
  'b-3': (
    // Nocietty
    <svg viewBox="0 0 260 70" fill="none" className="h-9 sm:h-11 w-auto max-w-[160px] sm:max-w-[200px]" xmlns="http://www.w3.org/2000/svg">
      <text x="20" y="50" fill="#FFFFFF" fontFamily="'Arial Black', 'Impact', 'Inter', sans-serif" fontWeight="900" fontSize="38" letterSpacing="0.06em">
        NOCIETY
      </text>
      <rect x="18" y="32" width="224" height="4" fill="#FFFFFF" />
    </svg>
  ),
  'b-4': (
    // Mollynineteen
    <svg viewBox="0 0 320 60" fill="none" className="h-8 sm:h-10 w-auto max-w-[170px] sm:max-w-[210px]" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="44" fill="#FFFFFF" fontFamily="'Brush Script MT', 'Dancing Script', 'Snell Roundhand', 'Cormorant Garamond', cursive, serif" fontStyle="italic" fontWeight="600" fontSize="42" letterSpacing="0.02em">
        mollynineteen
      </text>
    </svg>
  ),
  'b-5': (
    // RZLNT
    <svg viewBox="0 0 280 120" fill="none" className="h-10 sm:h-14 w-auto max-w-[150px] sm:max-w-[190px]" xmlns="http://www.w3.org/2000/svg">
      <text x="24" y="22" fill="#FFFFFF" fontFamily="'Inter', 'Arial Black', sans-serif" fontWeight="800" fontSize="11" letterSpacing="0.12em">
        ASPIRE TO INSPIRE
      </text>
      <path d="M 24 34 L 210 34 L 210 105" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="square"/>
      <rect x="20" y="68" width="215" height="10" fill="#D32F2F"/>
      <g fill="#FFFFFF">
        <path d="M 24 45 H 50 C 60 45 68 50 68 59 C 68 66 62 72 53 74 L 70 108 H 53 L 39 77 H 36 V 108 H 24 V 45 Z M 36 56 V 67 H 47 C 52 67 56 64 56 61 C 56 58 52 56 47 56 H 36 Z"/>
        <path d="M 76 45 H 114 V 57 L 92 95 H 116 V 108 H 76 V 95 L 98 57 H 76 V 45 Z"/>
        <path d="M 124 45 H 137 V 95 H 157 V 108 H 124 V 45 Z"/>
        <path d="M 165 45 H 178 L 196 88 V 45 H 209 V 108 H 196 L 178 65 V 108 H 165 V 45 Z"/>
      </g>
      <g transform="translate(210, 18)">
        <polygon points="0,-9 2.5,-2.5 9,0 2.5,2.5 0,9 -2.5,2.5 -9,0 -2.5,-2.5" fill="#D32F2F"/>
      </g>
    </svg>
  ),
  'b-6': (
    // Aurora
    <svg viewBox="0 0 300 80" fill="none" className="h-9 sm:h-12 w-auto max-w-[150px] sm:max-w-[180px]" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontFamily="'Cinzel', 'Cinzel Decorative', 'Trajan Pro', 'Georgia', serif" fontWeight="900" fontSize="38" letterSpacing="0.22em">
        AURORA
      </text>
    </svg>
  ),
  'b-7': (
    // Peace & Heart - Official Heart with Peace Symbol Emblem matching IMG-20260823-WA0001.jpg
    <svg viewBox="0 0 300 270" fill="none" className="h-10 sm:h-14 w-auto max-w-[130px] sm:max-w-[160px]" xmlns="http://www.w3.org/2000/svg">
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* Heart Silhouette */}
        <path
          d="M 150 82 
             C 150 48, 122 18, 82 18 
             C 42 18, 12 48, 12 90 
             C 12 144, 76 194, 150 252 
             C 224 194, 288 144, 288 90 
             C 288 48, 258 18, 218 18 
             C 178 18, 150 48, 150 82 Z"
          fill="#FFFFFF"
        />
        {/* Peace Symbol inside the Heart */}
        <g transform="translate(150, 142)">
          <circle cx="0" cy="0" r="54" stroke="#000000" strokeWidth="12" fill="none" />
          <line x1="0" y1="-54" x2="0" y2="54" stroke="#000000" strokeWidth="12" />
          <line x1="0" y1="0" x2="-38" y2="38" stroke="#000000" strokeWidth="12" />
          <line x1="0" y1="0" x2="38" y2="38" stroke="#000000" strokeWidth="12" />
        </g>
      </g>
    </svg>
  ),
  'b-8': (
    // Sharp Gothic Streetwear Emblem matching IMG-20260823-WA0005.jpg
    <svg viewBox="0 0 1000 1000" fill="none" className="h-10 sm:h-14 w-auto max-w-[140px] sm:max-w-[170px]" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 40 310 
           C 60 405, 60 415, 40 505 
           C 160 500, 320 535, 450 575 
           L 530 635 
           L 640 610 
           C 510 580, 340 560, 190 565 
           C 210 660, 210 670, 190 760 
           C 370 770, 650 840, 965 965 
           C 930 830, 910 740, 910 680 
           L 780 690 
           C 765 520, 845 390, 940 290 
           C 820 400, 680 435, 520 425 
           C 470 425, 430 405, 385 390 
           C 520 300, 660 170, 790 35 
           C 530 180, 270 275, 40 310 Z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  'b-9': (
    // Crescent
    <svg viewBox="0 0 220 80" fill="none" className="h-9 sm:h-12 w-auto max-w-[140px] sm:max-w-[170px]" xmlns="http://www.w3.org/2000/svg">
      <path d="M 20 60 C 90 65, 170 45, 200 20 C 150 40, 80 48, 20 60 Z" fill="#FFFFFF"/>
      <path d="M 60 70 C 110 72, 170 58, 190 40 C 150 52, 100 58, 60 70 Z" fill="#FFFFFF" opacity="0.6"/>
    </svg>
  )
};

export const BrandsTickerSection: React.FC = () => {
  const { brands } = useApp();

  // Combine items to ensure infinite seamless scrolling loop
  const tickerItems = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="py-12 sm:py-16 border-y border-white/[0.08] bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-zinc-400">
          Trusted by fast-growing brands worldwide
        </span>
      </div>

      {/* Marquee with smooth infinite translation and edge masks */}
      <div className="flex overflow-hidden relative select-none [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex gap-12 sm:gap-20 py-2 animate-marquee shrink-0 items-center">
          {tickerItems.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 group px-2"
              title={brand.name}
            >
              {/* Prefer vector fallback if available or SVG img tag */}
              {BRAND_VECTOR_LOGOS[brand.id] ? (
                <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {BRAND_VECTOR_LOGOS[brand.id]}
                </div>
              ) : brand.logoSvg ? (
                <div className="h-10 sm:h-14 max-w-[150px] sm:max-w-[190px] flex items-center justify-center">
                  <img
                    src={brand.logoSvg}
                    alt={brand.name}
                    className="max-h-10 sm:max-h-14 w-auto object-contain brightness-100 transition-transform duration-300 group-hover:scale-110"
                    loading="eager"
                  />
                </div>
              ) : (
                <span className="font-bold text-lg sm:text-xl text-white tracking-widest uppercase">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
