
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Solio Group</h3>
            <p className="text-sm text-gray-600 mb-4">
              Un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Accueil</Link></li>
              <li><Link to="/presentation" className="text-gray-600 hover:text-gray-900">Présentation du Groupe</Link></li>
              <li><Link to="/gouvernance/direction" className="text-gray-600 hover:text-gray-900">Direction</Link></li>
              <li><Link to="/actualites" className="text-gray-600 hover:text-gray-900">Actualités</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-600">
              <p>Solio Group</p>
              <p>Adresse du siège social</p>
              <p className="mt-2">Téléphone : +XXX XXX XXX</p>
              <p>Email : contact@soliogroup.com</p>
            </address>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Twitter/X</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Solio Group. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
