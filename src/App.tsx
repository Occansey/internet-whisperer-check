
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Presentation from "./pages/Presentation";
import MissionVision from "./pages/MissionVision";
import Certifications from "./pages/Certifications";
import Culture from "./pages/Culture";
import Activites from "./pages/Activites";
import Filiales from "./pages/filiales/Filiales";
import NosFiliales from "./pages/filiales/NosFiliales";
import GrowthEnergyPage from "./pages/filiales/GrowthEnergyPage";
import AskingPage from "./pages/filiales/AskingPage";
import MfgPage from "./pages/filiales/MfgPage";
import GemPage from "./pages/filiales/GemPage";
import Direction from "./pages/gouvernance/Direction";
import ComiteExecutif from "./pages/gouvernance/ComiteExecutif";
import Communiques from "./pages/actualites/Communiques";
import Evenements from "./pages/actualites/Evenements";
import Projets from "./pages/actualites/Projets";
import EngagementsRH from "./pages/carrieres/EngagementsRH";
import RejoignezNous from "./pages/carrieres/RejoignezNous";
import EventDetail from "./components/events/EventDetail";
import ProjectDetail from "./components/projects/ProjectDetail";
import ArticleDetail from "./components/articles/ArticleDetail";
import NotFound from "./pages/NotFound";
import Media from "./pages/Media";
import Presence from "./pages/Presence";
import AllSubmissions from "./pages/AllSubmissions";
import ZanzibarShowroom from "./pages/showrooms/ZanzibarShowroom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/presentation" element={<Presentation />} />
              <Route path="/mission-vision" element={<MissionVision />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/activites" element={<Activites />} />
              <Route path="/presence" element={<Presence />} />
              
              <Route path="/filiales" element={<Filiales />} />
              <Route path="/nos-filiales" element={<NosFiliales />} />
              <Route path="/filiales/growth-energy" element={<GrowthEnergyPage />} />
              <Route path="/filiales/asking" element={<AskingPage />} />
              <Route path="/filiales/mfg-technologies" element={<MfgPage />} />
              <Route path="/filiales/gem-e-mobility" element={<GemPage />} />
              
              <Route path="/showrooms/zanzibar" element={<ZanzibarShowroom />} />
              
              <Route path="/gouvernance/direction" element={<Direction />} />
              <Route path="/gouvernance/comite-executif" element={<ComiteExecutif />} />
              
              <Route path="/actualites/communiques" element={<Communiques />} />
              <Route path="/actualites/communiques/:id" element={<ArticleDetail />} />
              <Route path="/actualites/evenements" element={<Evenements />} />
              {/* Support both numeric IDs and slugs for events */}
              <Route path="/actualites/evenements/:id" element={<EventDetail />} />
              <Route path="/actualites/projets" element={<Projets />} />
              {/* Support both numeric IDs and slugs for projects */}
              <Route path="/actualites/projets/:id" element={<ProjectDetail />} />
              <Route path="/actualites/articles/:id" element={<ArticleDetail />} />
              
              <Route path="/carrieres/engagements-rh" element={<EngagementsRH />} />
              <Route path="/carrieres/rejoignez-nous" element={<RejoignezNous />} />
              
              <Route path="/media" element={<Media />} />
              <Route path="/all-submissions" element={<AllSubmissions />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
