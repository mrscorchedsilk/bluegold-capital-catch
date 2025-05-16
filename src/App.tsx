
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BusinessOwnersLanding from "./pages/BusinessOwnersLanding";
import VolatilityLanding from "./pages/VolatilityLanding";
import EmergingSectorLanding from "./pages/EmergingSectorLanding";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business-owners" element={<BusinessOwnersLanding />} />
          <Route path="/volatility" element={<VolatilityLanding />} />
          <Route path="/emerging-sector" element={<EmergingSectorLanding />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* CATCH-ALL ROUTE MUST BE LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
