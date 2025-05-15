import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import LogoPlaceholder from './LogoPlaceholder';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/components/ui/use-toast';

// Define TypeScript interface for Typeform global object
declare global {
  interface Window {
    typeformEmbed?: any;
  }
}

interface LandingPageProps {
  headline: {
    main: string;
    sub: string;
  };
}

const LandingPage: React.FC<LandingPageProps> = ({ headline }) => {
  const isMobile = useIsMobile();
  const [typeformLoaded, setTypeformLoaded] = useState(false);
  
  useEffect(() => {
    // Check if Typeform script is loaded
    const checkTypeformLoaded = () => {
      if (window.typeformEmbed) {
        setTypeformLoaded(true);
        console.log('Typeform script loaded successfully');
      } else {
        console.log('Waiting for Typeform script to load...');
        setTimeout(checkTypeformLoaded, 500);
      }
    };
    
    checkTypeformLoaded();
    
    return () => {
      // Cleanup
    };
  }, []);
  
  const handleApplyClick = () => {
    try {
      if (typeformLoaded) {
        console.log('Opening Typeform');
        
        // Track with Facebook Pixel
        if (window.fbq) {
          window.fbq('track', 'Lead');
          console.log('Facebook lead event tracked');
        }
        
        // Directly redirect to the Typeform URL
        window.location.href = 'https://form.typeform.com/to/x6zCNbQl';
      } else {
        throw new Error('Typeform script not loaded');
      }
    } catch (error) {
      console.error('Error opening Typeform:', error);
      
      // Fallback to Google Form if Typeform fails
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSe8ug-QkAMtjCKPmzm3PBgICvRLMG1CJ-wF5ypOQq9q0bipPQ/viewform', '_blank');
      
      toast({
        title: "Using fallback form",
        description: "We're having trouble with our main form. Opening alternative form.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      {/* Header with logo and phone */}
      <header className="w-full p-4 flex justify-between items-center sticky top-0 z-50 bg-navy">
        <LogoPlaceholder />
        
        <a 
          href="tel:+919429694121" 
          className="flex items-center gap-2 bg-gold text-navy px-4 py-2 rounded-lg font-medium hover:bg-gold/90 transition-all"
          onClick={() => {
            // Log phone click for tracking
            console.log("Phone number clicked");
            // For Facebook Pixel tracking
            if (window.fbq) {
              window.fbq('track', 'Contact');
            }
          }}
        >
          <Phone size={isMobile ? 16 : 20} />
          {isMobile ? "Contact Us" : "+91 94296 94121"}
        </a>
      </header>

      {/* Main content section */}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center">
        {/* Landing page content */}
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Headline section */}
          <div className="mb-8 md:mb-12 space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {headline.main}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gold">
              {headline.sub}
            </h2>
            
            <p className="text-lg md:text-xl mt-4 md:mt-6 max-w-3xl mx-auto">
              Be part of a ₹200 crore aquaculture revolution in North India. Land secured, systems proven. Payouts start in Year 2.
            </p>
          </div>

          {/* Embedded Google Slides */}
          <div className="w-full mb-8 md:mb-12 aspect-video">
            <iframe 
              src="https://docs.google.com/presentation/d/e/2PACX-1vSUugZFObxWS-NLEiBY5Zj-wU4vMDeSKtNAOiFZpazSWYIM_Co8ZM0C_NuGmQ7LfvZ_a1X9fzSDZ2I1/pubembed?start=true&loop=false&delayms=3000" 
              frameBorder="0" 
              width="100%" 
              height={isMobile ? "300px" : "600px"} 
              allowFullScreen
              title="BlueGold Investment Presentation"
              className="shadow-xl"
            ></iframe>
          </div>

          {/* CTA button */}
          <div className="flex flex-col items-center gap-3">
            <Button 
              onClick={handleApplyClick}
              className={`bg-gold text-navy ${isMobile ? 'text-lg py-4 px-6' : 'text-xl md:text-2xl py-6 px-10'} font-bold rounded-lg shadow-lg hover:bg-gold/90 transition-all transform hover:scale-105 animate-pulse h-auto`}
            >
              <span className="flex items-center gap-2">
                📘 {isMobile ? "Get Investor Brief" : "Express Interest + Get the Full Investor Brief"}
              </span>
            </Button>
            <p className="text-sm md:text-base text-white/80 max-w-lg">
              Includes a 56-page breakdown of TAM, unit economics, expansion roadmap, and exit strategy.
            </p>
          </div>
          
          {/* Hidden container for Typeform */}
          <div id="typeform-container" className="hidden"></div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
