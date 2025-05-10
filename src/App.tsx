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
import Contact from './pages/Contact';
import GrowthEnergy from './pages/filiales/GrowthEnergy';
import Asking from './pages/filiales/Asking';
import MFGTechnologies from './pages/filiales/MFGTechnologies';
import GEMMobility from './pages/filiales/GEMMobility';
import CultureEntreprise from './pages/CultureEntreprise';
import DomainesActivite from './pages/DomainesActivite';
import CommuniqueDetail from './pages/actualites/CommuniqueDetail';
import EventDetail from './pages/actualites/EventDetail';
import ProjectDetail from './pages/actualites/ProjectDetail';

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/filiales/growth-energy" element={<GrowthEnergy />} />
        <Route path="/filiales/asking" element={<Asking />} />
        <Route path="/filiales/mfg-technologies" element={<MFGTechnologies />} />
        <Route path="/filiales/gem-e-mobility" element={<GEMMobility />} />
        <Route path="/culture-entreprise" element={<CultureEntreprise />} />
        <Route path="/domaines-activite" element={<DomainesActivite />} />
      </Routes>
    </Router>
  );
}

export default App;
