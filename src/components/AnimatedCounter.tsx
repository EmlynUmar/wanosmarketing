import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Extract numeric part, decimal places, and extra suffix inside the value string
  const parsed = (() => {
    // Match e.g. "4.2", "10", "98.4", "500", "34.65"
    const match = value.match(/([\d,.]+)/);
    if (!match) return { num: 0, decimals: 0, internalSuffix: value };

    const rawNumStr = match[1].replace(/,/g, '');
    const num = parseFloat(rawNumStr);
    const decimalPart = rawNumStr.split('.')[1];
    const decimals = decimalPart ? decimalPart.length : 0;
    
    // Anything trailing like "M+", "x", "%", "+"
    const internalSuffix = value.replace(match[1], '').trim();

    return { num: isNaN(num) ? 0 : num, decimals, internalSuffix };
  })();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp: number | null = null;
    const target = parsed.num;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Quartic ease-out curve for a natural, snappy count-up
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = easeOut * target;

      if (parsed.decimals > 0) {
        setDisplayValue(current.toFixed(parsed.decimals));
      } else {
        setDisplayValue(Math.floor(current).toLocaleString());
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        if (parsed.decimals > 0) {
          setDisplayValue(target.toFixed(parsed.decimals));
        } else {
          setDisplayValue(target.toLocaleString());
        }
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [hasAnimated, parsed.num, parsed.decimals, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {displayValue}
      {parsed.internalSuffix}
      {suffix}
    </span>
  );
};
