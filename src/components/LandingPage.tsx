
import React, { useEffect, useRef, useState } from 'react';
import { Phone } from 'lucide-react';
import LogoPlaceholder from './LogoPlaceholder';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/components/ui/use-toast';

interface LandingPageProps {
  headline: {
    main: string;
    sub: string;
  };
}

const LandingPage: React.FC<LandingPageProps> = ({ headline }) => {
  const isMobile = useIsMobile();
  const typeformContainerRef = useRef<HTMLDivElement>(null);
  const [typeformLoaded, setTypeformLoaded] = useState(false);
  
  // Handle Typeform initialization and error handling
  useEffect(() => {
    // Create a function to check if Typeform is loaded
    const initializeTypeform = () => {
      if (window.typeformEmbed && typeformContainerRef.current) {
        try {
          // Clear any previous typeform elements
          typeformContainerRef.current.innerHTML = '';
          
          // Create the button element that will trigger the typeform
          const button = document.createElement('button');
          button.setAttribute('data-tf-popup', '01JVAXPNASNWA3XMH18Z5BEE1G');
          button.setAttribute('data-tf-opacity', '0');
          button.setAttribute('data-tf-size', '100');
          button.setAttribute('data-tf-iframe-props', 'title=Investor Interest Form');
          button.setAttribute('data-tf-transitive-search-params', 'true');
          button.setAttribute('data-tf-medium', 'snippet');
          button.className = 'typeform-button';
          button.style.display = 'none'; // Hide the actual button
          
          // Add to DOM
          typeformContainerRef.current.appendChild(button);
          
          // Let the rest of the app know typeform is ready
          setTypeformLoaded(true);
          console.log('Typeform button initialized successfully');
        } catch (error) {
          console.error('Error initializing Typeform:', error);
          toast({
            title: "Error loading form",
            description: "There was a problem loading the investor form. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        console.warn('Typeform embed script not loaded yet, retrying in 1 second...');
        // Retry after a short delay
        setTimeout(initializeTypeform, 1000);
      }
    };
    
    // Start the initialization process
    initializeTypeform();
    
    // Cleanup function
    return () => {
      if (typeformContainerRef.current) {
        typeformContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  const handleApplyClick = () => {
    try {
      if (typeformLoaded && typeformContainerRef.current) {
        // Get the hidden typeform button and click it
        const typeformButton = typeformContainerRef.current.querySelector('.typeform-button') as HTMLElement;
        
        if (typeformButton) {
          typeformButton.click();
          console.log('Typeform button clicked successfully');
          
          // For Facebook Pixel tracking
          if (window.fbq) {
            window.fbq('track', 'Lead');
            console.log('Facebook pixel Lead event tracked');
          }
        } else {
          throw new Error('Typeform button not found');
        }
      } else {
        throw new Error('Typeform not initialized');
      }
    } catch (error) {
      console.error('Error opening Typeform:', error);
      
      // Fallback to Google Form if Typeform fails
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSe8ug-QkAMtjCKPmzm3PBgICvRLMG1CJ-wF5ypOQq9q0bipPQ/viewform', '_blank');
      
      toast({
        title: "Form opened",
        description: "The investor brief request form has been opened in a new tab.",
        duration: 3000,
      });
      
      // For Facebook Pixel tracking
      if (window.fbq) {
        window.fbq('track', 'Lead');
      }
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
          <div ref={typeformContainerRef} className="hidden"></div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
