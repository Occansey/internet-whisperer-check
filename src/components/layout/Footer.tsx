
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("bg-solio-blue text-white py-10", className)}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-oval font-semibold mb-4">Solio Group</h3>
            <p className="text-sm text-gray-300 mb-4">
              Un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-oval font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-solio-yellow">Accueil</Link></li>
              <li><Link to="/presentation" className="text-gray-300 hover:text-solio-yellow">Présentation du Groupe</Link></li>
              <li><Link to="/gouvernance/direction" className="text-gray-300 hover:text-solio-yellow">Direction</Link></li>
              <li><Link to="/actualites" className="text-gray-300 hover:text-solio-yellow">Actualités</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-solio-yellow">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-oval font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-300">
              <p className="font-semibold mb-2">France</p>
              <p>Paris, 4 Rue De Longchamp, 75016</p>
              <p>211 Chem. de la Madrague-Ville, 13015 Marseille</p>
              
              <p className="font-semibold mt-4 mb-2">Canada</p>
              <p>368 R. Notre Dame O, Montréal, QC H2Y 1T9</p>
              
              <p className="font-semibold mt-4 mb-2">Africa HQ</p>
              <p>GEFI Solutions SEZ Limited<br />9th Floor, North Tower, Two Rivers Finance and Innovation Center, Nairobi, Kenya</p>
              
              <p className="mt-2">Email : contact@solio-group.com</p>
            </address>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-solio-yellow">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-solio-yellow">Twitter/X</a>
              <a href="#" className="text-gray-300 hover:text-solio-yellow">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Solio Group. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
