import React from 'react';
import nextusLogoImg from '../assets/images/nextus_logo.png';
import nextusLogoDarkImg from '../assets/images/nextus_logo_dark.png';
import nextusSymbolImg from '../assets/images/nextus_symbol.png';

interface NextUsLogoProps {
  className?: string;
  variant?: 'nav' | 'hero' | 'footer' | 'card' | 'symbol';
  theme?: 'light' | 'dark';
  alt?: string;
}

export const NextUsLogo: React.FC<NextUsLogoProps> = ({
  className = '',
  variant = 'nav',
  theme = 'light',
  alt = 'NextUs - Right Talent. Right Position.',
}) => {
  const isDark = theme === 'dark';
  const logoSrc = isDark ? nextusLogoDarkImg : nextusLogoImg;

  // Small avatar / icon symbol
  if (variant === 'symbol') {
    return (
      <div className={`w-9 h-9 rounded-xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border shadow-xs flex items-center justify-center p-1.5 ${className}`}>
        <img
          src={nextusSymbolImg}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Navigation bar & Header presentation: clean, high-precision official brand image
  if (variant === 'nav') {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src={logoSrc}
          alt={alt}
          className="h-10 sm:h-11 w-auto max-w-[220px] sm:max-w-[260px] object-contain transition-all duration-200"
          loading="eager"
        />
      </div>
    );
  }

  // Footer representation
  if (variant === 'footer') {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src={nextusLogoDarkImg}
          alt={alt}
          className="h-12 w-auto max-w-[280px] object-contain"
          loading="lazy"
        />
      </div>
    );
  }

  // Card or Hero presentation: framed presentation card with high-resolution brand asset
  return (
    <div className={`inline-block ${className}`}>
      <div
        className={`rounded-2xl p-4 sm:p-5 transition-all ${
          isDark
            ? 'bg-slate-900 border border-slate-800'
            : 'bg-white border border-slate-200/90 shadow-sm'
        }`}
      >
        <div className="relative overflow-hidden rounded-xl flex items-center justify-center">
          <img
            src={logoSrc}
            alt={alt}
            className="w-full h-auto max-h-[140px] sm:max-h-[160px] object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
