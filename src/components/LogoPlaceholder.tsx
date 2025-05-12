
import React from 'react';

const LogoPlaceholder = () => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
          {/* Stylized fish with ripple/coin effect */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 18C28 20.5 24 25 14 25C6 25 4 18 4 18C4 18 6 11 14 11C24 11 28 15.5 28 18Z" stroke="#001F3F" strokeWidth="2" strokeLinecap="round" />
            <circle cx="9" cy="18" r="2" fill="#001F3F" />
            <path d="M18 13C18 13 21 15 21 18C21 21 18 23 18 23" stroke="#001F3F" strokeWidth="2" strokeLinecap="round" />
            <path d="M30 18C30 18 28 14 26 12" stroke="#001F3F" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M30 18C30 18 28 22 26 24" stroke="#001F3F" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute -top-1 -left-1 w-14 h-14 rounded-full border border-gold opacity-50 animate-pulse"></div>
      </div>
      <div className="ml-3">
        <span className="font-bold text-xl text-white tracking-tight">Blue<span className="text-gold">Gold</span></span>
        <span className="block text-xs text-white/70">Premium Aquaculture Investment</span>
      </div>
    </div>
  );
};

export default LogoPlaceholder;
