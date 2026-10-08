import React from 'react';
import officialLogoImg from '../assets/images/nextus_official_logo_1791457960963.jpg';

interface NextUsLogoProps {
  className?: string;
  variant?: 'nav' | 'hero' | 'footer' | 'card' | 'symbol';
  theme?: 'light' | 'dark';
}

export const NextUsLogo: React.FC<NextUsLogoProps> = ({
  className = '',
  variant = 'nav',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  // For Nav: clean, high-precision vector mark that fits cleanly into 36-40px height
  if (variant === 'nav') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <svg
          viewBox="0 0 460 140"
          className="h-9 sm:h-10 w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="NextUs Logo"
        >
          <defs>
            {/* Bronze ribbon gradient for N */}
            <linearGradient id="navRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2e2219" />
              <stop offset="45%" stopColor="#8d6e52" />
              <stop offset="70%" stopColor="#c5a88c" />
              <stop offset="100%" stopColor="#433224" />
            </linearGradient>

            {/* Bronze gradient for U */}
            <linearGradient id="navUGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2e2219" />
              <stop offset="50%" stopColor="#96785c" />
              <stop offset="100%" stopColor="#3d2c1f" />
            </linearGradient>

            {/* Subtle dark mode gradient if needed */}
            <linearGradient id="navDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2d2c1" />
              <stop offset="50%" stopColor="#c5a88c" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          {/* Stylized N with ribbon fold */}
          <g transform="translate(10, 8)">
            {/* Left upright / folded ribbon */}
            <path
              d="M 4 88 L 4 12 L 28 12 L 28 40 C 28 40, 36 28, 48 34 C 60 40, 58 58, 42 62 L 28 66 L 28 88 Z"
              fill={isDark ? 'url(#navDarkGrad)' : 'url(#navRibbonGrad)'}
            />
            {/* Main diagonal of N */}
            <path
              d="M 4 12 L 68 88 L 68 70 L 16 12 Z"
              fill={isDark ? '#f1f5f9' : '#1e1b18'}
            />
            <path
              d="M 52 88 L 68 88 L 68 12 L 52 12 Z"
              fill={isDark ? '#e2e8f0' : '#1e1b18'}
            />
            {/* Golden curl accent */}
            <path
              d="M 6 36 Q 26 26 40 46 Q 30 62 14 52 Z"
              fill={isDark ? 'url(#navDarkGrad)' : 'url(#navRibbonGrad)'}
              opacity="0.95"
            />
          </g>

          {/* 'ext' in sleek typography */}
          <text
            x="88"
            y="88"
            fontFamily="'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="78"
            fontWeight="700"
            letterSpacing="-0.03em"
            fill={isDark ? '#f8fafc' : '#171412'}
          >
            ext
          </text>

          {/* 'U' with gradient shading */}
          <text
            x="248"
            y="88"
            fontFamily="'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="78"
            fontWeight="700"
            letterSpacing="-0.02em"
            fill={isDark ? 'url(#navDarkGrad)' : 'url(#navUGrad)'}
          >
            U
          </text>

          {/* 's' */}
          <text
            x="320"
            y="88"
            fontFamily="'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="78"
            fontWeight="700"
            letterSpacing="-0.02em"
            fill={isDark ? '#f8fafc' : '#171412'}
          >
            s
          </text>

          {/* Slogan */}
          <text
            x="8"
            y="114"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="14.5"
            fontWeight="600"
            letterSpacing="0.26em"
            fill={isDark ? '#94a3b8' : '#292524'}
          >
            RIGHT TALENT. RIGHT POSITION.
          </text>

          {/* Subline: Branch notice */}
          <line
            x1="8"
            y1="131"
            x2="56"
            y2="131"
            stroke={isDark ? '#64748b' : '#a89482'}
            strokeWidth="1.2"
          />
          <text
            x="68"
            y="134"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10"
            fontWeight="500"
            letterSpacing="0.16em"
            fill={isDark ? '#cbd5e1' : '#6b5c50'}
          >
            A BRANCH OF SWAPNOW PRIVATE LIMITED
          </text>
          <line
            x1="388"
            y1="131"
            x2="436"
            y2="131"
            stroke={isDark ? '#64748b' : '#a89482'}
            strokeWidth="1.2"
          />
        </svg>
      </div>
    );
  }

  // Symbol only (for small avatars / icons)
  if (variant === 'symbol') {
    return (
      <div className={`w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center p-1.5 ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="symGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2e2219" />
              <stop offset="45%" stopColor="#8d6e52" />
              <stop offset="70%" stopColor="#c5a88c" />
              <stop offset="100%" stopColor="#433224" />
            </linearGradient>
          </defs>
          <path
            d="M 12 88 L 12 12 L 36 12 L 36 40 C 36 40, 44 28, 56 34 C 68 40, 66 58, 50 62 L 36 66 L 36 88 Z"
            fill="url(#symGrad)"
          />
          <path
            d="M 12 12 L 84 88 L 84 70 L 26 12 Z"
            fill="#1e1b18"
          />
          <path
            d="M 68 88 L 84 88 L 84 12 L 68 12 Z"
            fill="#1e1b18"
          />
          <path
            d="M 14 36 Q 34 26 50 46 Q 38 62 22 52 Z"
            fill="url(#symGrad)"
          />
        </svg>
      </div>
    );
  }

  // Full high-resolution official logo banner (Hero & About presentation card)
  return (
    <div className={`inline-block ${className}`}>
      <div className={`rounded-2xl p-4 sm:p-5 transition-all ${
        isDark 
          ? 'bg-slate-900 border border-slate-800' 
          : 'bg-white border border-slate-200/90 shadow-sm'
      }`}>
        {/* Render high resolution asset */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={officialLogoImg}
            alt="NextUs - Right Talent. Right Position. A Branch of SwapNow Private Limited"
            className="w-full h-auto max-h-[160px] object-contain mx-auto"
            onError={(e) => {
              // Fallback to vector SVG if raster image does not load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  );
};
