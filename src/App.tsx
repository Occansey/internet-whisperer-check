
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Direction from "./pages/gouvernance/Direction";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

// Create placeholder pages for menu items to avoid 404s
const PlaceholderPage = ({ title }: { title: string }) => (
  <Index />
);

// Create actual pages for actualites
const ActualitesPage = () => (
  <Index />
);
const CommuniquesPage = () => (
  <Index />
);
const ProjetsPage = () => (
  <Index />
);
const EvenementsPage = () => (
  <Index />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gouvernance/direction" element={<Direction />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Placeholder routes to avoid 404s for menu items */}
          <Route path="/presentation" element={<PlaceholderPage title="Présentation du Groupe" />} />
          <Route path="/mission-vision" element={<PlaceholderPage title="Notre mission & vision" />} />
          <Route path="/culture" element={<PlaceholderPage title="Notre culture d'entreprise" />} />
          <Route path="/activites" element={<PlaceholderPage title="Nos domaines d'activité" />} />
          <Route path="/gouvernance/comite-executif" element={<PlaceholderPage title="Comité exécutif (COMEX)" />} />
          
          {/* Actualités routes */}
          <Route path="/actualites" element={<ActualitesPage />} />
          <Route path="/actualites/communiques" element={<CommuniquesPage />} />
          <Route path="/actualites/projets" element={<ProjetsPage />} />
          <Route path="/actualites/evenements" element={<EvenementsPage />} />
          
          <Route path="/carrieres/rejoignez-nous" element={<PlaceholderPage title="Rejoignez-nous" />} />
          <Route path="/carrieres/engagements" element={<PlaceholderPage title="Nos engagements RH" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
