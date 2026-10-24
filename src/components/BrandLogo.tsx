import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  size = 'md',
  theme = 'light' 
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const isLight = theme === 'light';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Modern 4-quadrant geometric structural roof mark */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Top-left apex wing */}
          <rect x="3" y="7" width="11" height="11" rx="5" fill="#3B82F6" />
          {/* Top-right ridge wing */}
          <rect x="18" y="7" width="11" height="11" rx="5" fill="#2563EB" />
          {/* Bottom-left structural anchor */}
          <rect x="3" y="18" width="11" height="11" rx="5" fill="#60A5FA" />
          {/* Bottom-right base node */}
          <rect x="18" y="18" width="11" height="11" rx="5" fill="#1D4ED8" />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold tracking-tight ${isLight ? 'text-neutral-900' : 'text-white'} ${textSizes[size]}`}>
          Solid State
        </span>
        <span className="text-[10px] font-semibold tracking-wider text-blue-600 uppercase mt-0.5">
          Roofing
        </span>
      </div>
    </div>
  );
};
