
import React from 'react';
import { Phone } from 'lucide-react';
import LogoPlaceholder from './LogoPlaceholder';
import { Button } from './ui/button';

interface LandingPageProps {
  headline: {
    main: string;
    sub: string;
  };
}

const LandingPage: React.FC<LandingPageProps> = ({ headline }) => {
  const handleApplyClick = () => {
    // Placeholder for form link
    alert("Investment form would open here");
  };

  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      {/* Header with logo and phone */}
      <header className="w-full p-4 flex justify-between items-center sticky top-0 z-50 bg-navy">
        <LogoPlaceholder />
        
        <a 
          href="tel:+919429694121" 
          className="flex items-center gap-2 bg-gold text-navy px-4 py-2 rounded-lg font-medium hover:bg-gold/90 transition-all"
        >
          <Phone size={20} />
          +91 94296 94121
        </a>
      </header>

      {/* Main content section */}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center">
        {/* Landing page content */}
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Headline section */}
          <div className="mb-12 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {headline.main}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gold">
              {headline.sub}
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
          <div className="flex flex-col items-center gap-3">
            <Button 
              onClick={handleApplyClick}
              className="bg-gold text-navy text-xl md:text-2xl font-bold py-6 px-10 rounded-lg shadow-lg hover:bg-gold/90 transition-all transform hover:scale-105 animate-pulse h-auto"
            >
              <span className="flex items-center gap-2">
                📘 Express Interest + Get the Full Investor Brief
              </span>
            </Button>
            <p className="text-sm md:text-base text-white/80 max-w-lg">
              Includes a 56-page breakdown of TAM, unit economics, expansion roadmap, and exit strategy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
