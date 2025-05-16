
import React, { useEffect } from 'react';
import { Phone, ExternalLink } from 'lucide-react';
import LogoPlaceholder from './LogoPlaceholder';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

interface LandingPageProps {
  headline: {
    main: string;
    sub: string;
  };
}

const LandingPage: React.FC<LandingPageProps> = ({ headline }) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  // Initialize Typeform
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    // Set up Typeform callback for form submission
    window.addEventListener('message', (event) => {
      if (event.data.type === 'form-submit') {
        // Track with Facebook Pixel
        if (window.fbq) {
          window.fbq('track', 'Lead');
        }
        
        // Redirect to thank you page with submission state
        navigate('/thank-you', { state: { fromSubmission: true } });
      }
    });

    // Set up global error handler to redirect to index on errors
    const originalOnError = window.onerror;
    window.onerror = function(message, source, lineno, colno, error) {
      // Call original error handler if it exists
      if (originalOnError) {
        originalOnError.apply(this, arguments);
      }
      
      // Log the error
      console.error("Application error detected:", {message, source, lineno, colno, error});
      
      // Show error toast
      toast({
        title: "Something went wrong",
        description: "Redirecting you to the home page...",
        variant: "destructive"
      });
      
      // Redirect to index page after a short delay to show the toast
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
      return true; // Prevents the default error handler
    };
    
    return () => {
      // Clean up
      window.removeEventListener('message', () => {});
      document.body.removeChild(script);
      // Restore original error handler
      window.onerror = originalOnError;
    };
  }, [navigate]);

  // Function to handle the express interest button click
  const handleExpressInterestClick = () => {
    // Open Typeform in a new tab
    window.open('https://form.typeform.com/to/x6zCNbQl', '_blank');
    
    // Track with Facebook Pixel if available
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    
    // Show toast notification
    toast({
      title: "Opening investment form",
      description: "Thank you for your interest in BlueGold Fish Farming.",
    });
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
          
          {/* Express Interest Button - NEW */}
          <div className="mb-10 md:mb-12 w-full">
            <Button 
              className="animate-pulse bg-yellow-400 hover:bg-yellow-500 text-navy text-xl md:text-2xl font-bold py-6 px-8 rounded-lg shadow-lg w-full md:w-auto transition-all"
              onClick={handleExpressInterestClick}
            >
              Express Interest + Get Investor Brief <ExternalLink className="ml-1" size={24} />
            </Button>
            <p className="text-white/80 text-sm mt-3">
              Click above to access the complete investment package and secure your position
            </p>
          </div>

          {/* Embedded Typeform */}
          {/* <div className="w-full mb-8">
            <div 
              data-tf-live="01JVAXPNASNWA3XMH18Z5BEE1G"
              data-tf-medium="snippet"
              data-tf-hidden="utm_source=xxxxx,utm_medium=xxxxx,utm_campaign=xxxxx,utm_term=xxxxx,utm_content=xxxxx"
              className="w-full"
              style={{ height: isMobile ? "400px" : "500px" }}
            ></div>
            <p className="text-sm md:text-base text-white/80 mt-4 max-w-lg mx-auto">
              Fill out this form to receive a 56-page breakdown of TAM, unit economics, expansion roadmap, and exit strategy.
            </p>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
