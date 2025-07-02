
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { TranslationProvider } from "@/contexts/TranslationContext";
import Index from "./pages/Index";
import Presentation from "./pages/Presentation";
import Activites from "./pages/Activites";
import Presence from "./pages/Presence";
import Contact from "./pages/Contact";
import MissionVision from "./pages/MissionVision";
import Certifications from "./pages/Certifications";
import Culture from "./pages/Culture";
import NosFiliales from "./pages/filiales/NosFiliales";
import GrowthEnergyPage from "./pages/filiales/GrowthEnergyPage";
import AskingPage from "./pages/filiales/AskingPage";
import MfgPage from "./pages/filiales/MfgPage";
import GemPage from "./pages/filiales/GemPage";
import ComiteExecutif from "./pages/gouvernance/ComiteExecutif";
import Direction from "./pages/gouvernance/Direction";
import RejoignezNous from "./pages/carrieres/RejoignezNous";
import EngagementsRH from "./pages/carrieres/EngagementsRH";
import ActualitesLayout from "./pages/actualites/ActualitesLayout";
import Projets from "./pages/actualites/Projets";
import Evenements from "./pages/actualites/Evenements";
import Communiques from "./pages/actualites/Communiques";
import ProjectDetail from "./pages/actualites/ProjectDetail";
import EventDetail from "./pages/actualites/EventDetail";
import CommuniqueDetail from "./pages/actualites/CommuniqueDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TranslationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/presentation" element={<Presentation />} />
              <Route path="/nos-activites" element={<Activites />} />
              <Route path="/presence" element={<Presence />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mission-vision" element={<MissionVision />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/nos-filiales" element={<NosFiliales />} />
              <Route path="/filiales/growth-energy" element={<GrowthEnergyPage />} />
              <Route path="/filiales/asking" element={<AskingPage />} />
              <Route path="/filiales/mfg-technologies" element={<MfgPage />} />
              <Route path="/filiales/gem-e-mobility" element={<GemPage />} />
              <Route path="/gouvernance/comite-executif" element={<ComiteExecutif />} />
              <Route path="/gouvernance/direction" element={<Direction />} />
              <Route path="/carrieres/rejoignez-nous" element={<RejoignezNous />} />
              <Route path="/carrieres/engagements-rh" element={<EngagementsRH />} />
              <Route path="/actualites" element={<ActualitesLayout />}>
                <Route path="projets" element={<Projets />} />
                <Route path="evenements" element={<Evenements />} />
                <Route path="communiques" element={<Communiques />} />
                <Route path="projets/:id" element={<ProjectDetail />} />
                <Route path="evenements/:id" element={<EventDetail />} />
                <Route path="communiques/:id" element={<CommuniqueDetail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </TranslationProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
