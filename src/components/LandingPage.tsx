
import React, { useEffect } from 'react';
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
  
  // Load the Typeform embed script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    script.onload = () => {
      console.log("Typeform script loaded successfully");
    };
    script.onerror = () => {
      console.error("Failed to load Typeform script");
      toast({
        title: "Error",
        description: "Failed to load the form. Please try again later.",
        variant: "destructive",
      });
    };
    
    document.body.appendChild(script);
    
    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

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

          {/* Typeform embed replacing the CTA button */}
          <div className="w-full mb-8 md:mb-12">
            <div 
              data-tf-live="01JVAXPNASNWA3XMH18Z5BEE1G" 
              className="shadow-lg rounded-lg overflow-hidden" 
              style={{ minHeight: isMobile ? '400px' : '600px' }}
              onClick={() => {
                // Track form interaction with Facebook Pixel
                if (window.fbq) {
                  window.fbq('track', 'Lead');
                }
              }}
            ></div>
            <p className="text-sm md:text-base text-white/80 max-w-lg mx-auto mt-4">
              Includes a 56-page breakdown of TAM, unit economics, expansion roadmap, and exit strategy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
