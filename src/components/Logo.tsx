import React from 'react';
import { useApp } from '../context/AppContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showBadge?: boolean;
  className?: string;
  badgeText?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  showBadge = false,
  className = '',
  badgeText = ''
}) => {
  const { agencySettings } = useApp();

  const sizeMap = {
    sm: { img: 'w-8 h-8', text: 'text-base', sub: 'text-[9px]' },
    md: { img: 'w-10 h-10', text: 'text-lg', sub: 'text-[10px]' },
    lg: { img: 'w-12 h-12', text: 'text-xl', sub: 'text-xs' },
    xl: { img: 'w-16 h-16', text: 'text-2xl', sub: 'text-sm' },
  };

  const selectedSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Exact Circular Black Emblem with Bold White WM */}
      <div 
        className={`${selectedSize.img} relative rounded-full bg-black border border-white/10 shadow-lg shadow-black/40 shrink-0 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 select-none`}
      >
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Solid Black Circular Base */}
          <circle cx="100" cy="100" r="100" fill="#0c0d10" />
          
          {/* Bold White WM Typography matching the uploaded emblem */}
          <text
            x="50%"
            y="54%"
            dominantBaseline="central"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Helvetica Neue', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="78"
            letterSpacing="-0.04em"
          >
            WM
          </text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className={`font-bold tracking-tight text-white font-syne ${selectedSize.text}`}>
              {agencySettings.agencyName}
            </span>
            {showBadge && badgeText && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap tracking-wide">
                {badgeText}
              </span>
            )}
          </div>
          <span className={`${selectedSize.sub} text-slate-400 font-mono tracking-wider uppercase`}>
            Growth & Performance
          </span>
        </div>
      )}
    </div>
  );
};

