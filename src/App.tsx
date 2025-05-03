
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Direction from "./pages/gouvernance/Direction";
import ComiteExecutif from "./pages/gouvernance/ComiteExecutif";
import Contact from "./pages/Contact";
import AskingPage from "./pages/filiales/AskingPage";
import GrowthEnergyPage from "./pages/filiales/GrowthEnergyPage";
import GemPage from "./pages/filiales/GemPage";
import MfgPage from "./pages/filiales/MfgPage";
import Presentation from "./pages/Presentation";
import MissionVision from "./pages/MissionVision";
import Culture from "./pages/Culture";
import Activites from "./pages/Activites";
import Communiques from "./pages/actualites/Communiques";
import Projets from "./pages/actualites/Projets";
import Evenements from "./pages/actualites/Evenements";
import RejoignezNous from "./pages/carrieres/RejoignezNous";
import EngagementsRH from "./pages/carrieres/EngagementsRH";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Accueil routes */}
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/activites" element={<Activites />} />
          
          {/* Gouvernance routes */}
          <Route path="/gouvernance/direction" element={<Direction />} />
          <Route path="/gouvernance/comite-executif" element={<ComiteExecutif />} />
          
          {/* Filiales routes */}
          <Route path="/filiales/asking" element={<AskingPage />} />
          <Route path="/filiales/growth-energy" element={<GrowthEnergyPage />} />
          <Route path="/filiales/gem-e-mobility" element={<GemPage />} />
          <Route path="/filiales/mfg-technologies" element={<MfgPage />} />
          
          {/* Actualités routes */}
          <Route path="/actualites" element={<Communiques />} />
          <Route path="/actualites/communiques" element={<Communiques />} />
          <Route path="/actualites/projets" element={<Projets />} />
          <Route path="/actualites/evenements" element={<Evenements />} />
          
          {/* Carrières routes */}
          <Route path="/carrieres/rejoignez-nous" element={<RejoignezNous />} />
          <Route path="/carrieres/engagements" element={<EngagementsRH />} />
          
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
