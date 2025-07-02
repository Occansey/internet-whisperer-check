
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" role="contentinfo">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about.title')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.about.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.offices.title')}</h3>
            <address className="not-italic">
              <ul className="space-y-3 text-gray-400">
                <li className="flex flex-col">
                  <span className="font-medium text-white">{t('footer.offices.europe')}</span>
                  <span>Paris, 75116, 4 rue de Longchamp</span>
                  <span>Marseille, 13015, 211 Chem. de la Madrague-Ville</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-white">{t('footer.offices.northAmerica')}</span>
                  <span>Montréal, QC H2Y 1T9, 368 R. Notre Dame Ouest</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-white">{t('footer.offices.africa')}</span>
                  <span>Nairobi, 4th Floor, North Tower, Two Rivers Finance and Innovation Center</span>
                </li>
              </ul>
            </address>
          </div>
          
          <nav aria-label="Liens rapides">
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">{t('footer.quickLinks.home')}</Link></li>
              <li><Link to="/presentation" className="text-gray-400 hover:text-white transition-colors">{t('footer.quickLinks.about')}</Link></li>
              <li><Link to="/nos-filiales" className="text-gray-400 hover:text-white transition-colors">{t('footer.quickLinks.subsidiaries')}</Link></li>
              <li><Link to="/actualites/projets" className="text-gray-400 hover:text-white transition-colors">{t('footer.quickLinks.projects')}</Link></li>
              <li><Link to="/actualites/evenements" className="text-gray-400 hover:text-white transition-colors">{t('footer.quickLinks.events')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t('footer.quickLinks.contact')}</Link></li>
            </ul>
          </nav>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.followUs.title')}</h3>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/solio-group/?originalSubdomain=fr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label={t('footer.followUs.linkedin')}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Solio Group. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
