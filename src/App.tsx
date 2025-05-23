
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import MissionVision from './pages/MissionVision';
import Presentation from './pages/Presentation';
import Certifications from './pages/Certifications';
import Communiques from './pages/actualites/Communiques';
import Evenements from './pages/actualites/Evenements';
import Projets from './pages/actualites/Projets';
import EngagementsRH from './pages/carrieres/EngagementsRH';
import RejoignezNous from './pages/carrieres/RejoignezNous';
import Filiales from './pages/filiales/Filiales';
import NosFiliales from './pages/filiales/NosFiliales';
import Direction from './pages/gouvernance/Direction';
import ComiteExecutif from './pages/gouvernance/ComiteExecutif';
import Contact from './pages/Contact';
import GrowthEnergyPage from './pages/filiales/GrowthEnergyPage';
import AskingPage from './pages/filiales/AskingPage';
import MfgPage from './pages/filiales/MfgPage';
import GemPage from './pages/filiales/GemPage';
import Culture from './pages/Culture';
import Activites from './pages/Activites';
import CommuniqueDetail from './components/articles/ArticleDetail';
import EventDetail from './components/events/EventDetail';
import ProjectDetail from './components/projects/ProjectDetail';
import Media from './pages/Media';
import Presence from './pages/Presence';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/actualites/communiques" element={<Communiques />} />
        <Route path="/actualites/communiques/:id" element={<CommuniqueDetail />} />
        <Route path="/actualites/evenements" element={<Evenements />} />
        <Route path="/actualites/evenements/:id" element={<EventDetail />} />
        <Route path="/actualites/projets" element={<Projets />} />
        <Route path="/actualites/projets/:id" element={<ProjectDetail />} />
        <Route path="/carrieres/engagements-rh" element={<EngagementsRH />} />
        <Route path="/carrieres/rejoignez-nous" element={<RejoignezNous />} />
        <Route path="/filiales" element={<Filiales />} />
        <Route path="/nos-filiales" element={<NosFiliales />} />
        <Route path="/gouvernance/direction" element={<Direction />} />
        <Route path="/gouvernance/comite-executif" element={<ComiteExecutif />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/filiales/growth-energy" element={<GrowthEnergyPage />} />
        <Route path="/filiales/asking" element={<AskingPage />} />
        <Route path="/filiales/mfg-technologies" element={<MfgPage />} />
        <Route path="/filiales/gem-e-mobility" element={<GemPage />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/activites" element={<Activites />} />
        <Route path="/media" element={<Media />} />
        <Route path="/presence" element={<Presence />} />
        {/* 404 catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
