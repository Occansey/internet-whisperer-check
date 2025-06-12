
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" role="contentinfo">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about-solio')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.about-description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.offices')}</h3>
            <address className="not-italic">
              <ul className="space-y-3 text-gray-400">
                <li className="flex flex-col">
                  <span className="font-medium text-white">France</span>
                  <span>Paris, 75116, 4 rue de Longchamp</span>
                  <span>Marseille, 13015, 211 Chem. de la Madrague-Ville</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-white">Canada</span>
                  <span>Montréal, QC H2Y 1T9, 368 R. Notre Dame O</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-white">Kenya</span>
                  <span>Nairobi, 9th Floor, North Tower, Two Rivers Finance and Innovation Center</span>
                </li>
              </ul>
            </address>
          </div>
          
          <nav aria-label="Liens rapides">
            <h3 className="text-lg font-semibold mb-4">{t('footer.quick-links')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/presentation" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/nos-filiales" className="text-gray-400 hover:text-white transition-colors">{t('nav.subsidiaries')}</Link></li>
              <li><Link to="/actualites/projets" className="text-gray-400 hover:text-white transition-colors">{t('nav.projects')}</Link></li>
              <li><Link to="/actualites/evenements" className="text-gray-400 hover:text-white transition-colors">{t('nav.events')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </nav>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.follow-us')}</h3>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/solio-group/?originalSubdomain=fr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Suivre Solio Group sur LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Solio Group. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
