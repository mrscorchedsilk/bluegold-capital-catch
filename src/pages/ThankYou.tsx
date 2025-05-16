
import React, { useEffect, useState } from 'react';
import { Sparkles, ThumbsUp, Rocket } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const ThankYou = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Show a welcome toast
    toast({
      title: "Thank you!",
      description: "We've received your information and will be in touch soon.",
    });

    // Set animation complete after intro animations
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-[#0a0e1c] text-white flex flex-col">
      {/* Header */}
      <header className="w-full p-4 flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold">BG</div>
            <span className="text-xl font-semibold">BlueGold</span>
          </div>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          {/* Animated elements */}
          <div className="relative mb-8">
            {/* Background circle */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gold/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            {/* Sparkles animation */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Sparkles className="text-gold w-16 h-16" />
            </motion.div>
            
            {/* Thumbs up icon */}
            <motion.div 
              className="relative bg-navy border-4 border-gold rounded-full p-8 inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <ThumbsUp className="text-gold w-20 h-20" />
            </motion.div>
          </div>

          {/* Thank you message */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Thank You!
          </motion.h1>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p className="text-xl md:text-2xl text-gold font-semibold">
              Your interest in BlueGold Fish Farming has been registered.
            </p>
            
            <p className="text-lg max-w-2xl mx-auto">
              Our team will review your information and contact you shortly to discuss how you can be part of India's largest fish farming revolution and earn 36% annual returns.
            </p>
            
            {/* Animation triggered after initial animations complete */}
            {animationComplete && (
              <motion.div 
                className="mt-12 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg font-medium">
                  While you wait, would you like to:
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button asChild className="bg-gold text-navy hover:bg-gold/90 flex items-center gap-2 text-lg py-6">
                    <Link to="/">
                      <Rocket className="w-5 h-5" />
                      Return Home
                    </Link>
                  </Button>
                  
                  <Button 
                    className="bg-navy border border-gold text-gold hover:bg-navy/50 flex items-center gap-2 text-lg py-6"
                    onClick={() => window.open("https://docs.google.com/presentation/d/e/2PACX-1vSUugZFObxWS-NLEiBY5Zj-wU4vMDeSKtNAOiFZpazSWYIM_Co8ZM0C_NuGmQ7LfvZ_a1X9fzSDZ2I1/pub", "_blank")}
                  >
                    <Sparkles className="w-5 h-5" />
                    View Full Presentation
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full p-4 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} BlueGold Fish Farming. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ThankYou;
