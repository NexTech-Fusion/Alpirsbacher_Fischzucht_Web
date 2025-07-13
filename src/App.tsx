
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Fischzucht from "./pages/Fischzucht";
import UeberUns from "./pages/UeberUns";
import Shop from "./pages/Shop";
import Impressum from "./pages/Impressum";
import AGB from "./pages/AGB";
import Widerrufsrecht from "./pages/Widerrufsrecht";
import Versand from "./pages/Versand";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fischzucht" element={<Fischzucht />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/widerrufsrecht" element={<Widerrufsrecht />} />
          <Route path="/versand" element={<Versand />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
