
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import HeadlineSelector from '../components/HeadlineSelector';
import LogoPlaceholder from '../components/LogoPlaceholder';

const Index = () => {
  const [selectedHeadline, setSelectedHeadline] = useState<string>("default");

  const headlines = {
    default: {
      main: "Attention High-Income Professionals, Tired of Low Returns from Real Estate & FDs?",
      sub: "Invest in Fish Farming and Earn 36% Straight Profit Year-on-Year."
    },
    business: {
      main: "Business Owners, Is Your Idle Cash Just Sitting in the Bank?",
      sub: "Invest in Fish Farming to Earn Over 36% Annual Returns"
    },
    professional: {
      main: "Smart Professionals, Still Relying on Risky Stocks or Mutual Funds?",
      sub: "Earn Stable 36% YOY Profit from India's Largest Fish Farm Project."
    }
  };

  const handleApplyClick = () => {
    // Placeholder for Typeform link
    alert("Typeform would open here");
  };

  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      {/* Header with logo and phone */}
      <header className="w-full p-4 flex justify-between items-center sticky top-0 z-50 bg-navy">
        <LogoPlaceholder />
        
        <a 
          href="tel:+919429694121" 
          className="flex items-center gap-2 bg-gold text-navy px-4 py-2 rounded-lg font-bold hover:bg-gold/90 transition-all"
        >
          <Phone size={20} />
          +91 94296 94121
        </a>
      </header>

      {/* Main content section */}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center">
        {/* Admin controls - visible only during development */}
        <div className="w-full mb-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 mb-2">Preview Headline Variations:</p>
          <HeadlineSelector 
            selected={selectedHeadline}
            onChange={(variant) => setSelectedHeadline(variant)}
          />
        </div>

        {/* Landing page content */}
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Headline section */}
          <div className="mb-12 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {headlines[selectedHeadline as keyof typeof headlines].main}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gold">
              {headlines[selectedHeadline as keyof typeof headlines].sub}
            </h2>
            
            <p className="text-xl mt-6 max-w-3xl mx-auto">
              Be part of a ₹200 crore aquaculture revolution in North India. Land secured, systems proven. Payouts start in Year 2.
            </p>
          </div>

          {/* Embedded Google Slides */}
          <div className="w-full mb-12 aspect-video">
            <iframe 
              src="https://docs.google.com/presentation/d/e/2PACX-1vSUugZFObxWS-NLEiBY5Zj-wU4vMDeSKtNAOiFZpazSWYIM_Co8ZM0C_NuGmQ7LfvZ_a1X9fzSDZ2I1/pubembed?start=true&loop=false&delayms=3000" 
              frameBorder="0" 
              width="100%" 
              height="600px" 
              allowFullScreen
              title="BlueGold Investment Presentation"
              className="shadow-xl"
            ></iframe>
          </div>

          {/* CTA button */}
          <button 
            onClick={handleApplyClick}
            className="bg-gold text-navy text-xl md:text-2xl font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-gold/90 transition-all transform hover:scale-105 animate-pulse"
          >
            Apply to Invest Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
