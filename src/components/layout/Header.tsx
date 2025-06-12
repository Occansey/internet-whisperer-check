
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/ui/language-switcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navItems = [
    {
      label: t('nav.about'),
      items: [
        { label: t('nav.presentation'), href: "/presentation" },
        { label: t('nav.mission-vision'), href: "/mission-vision" },
        { label: t('nav.certifications'), href: "/certifications" },
        { label: t('nav.culture'), href: "/culture" },
        { label: t('nav.activities'), href: "/activites" },
        { label: t('nav.presence'), href: "/presence" },
      ]
    },
    {
      label: t('nav.subsidiaries'),
      items: [
        { label: "Growth Energy", href: "/filiales/growth-energy" },
        { label: "Asking", href: "/filiales/asking" },
        { label: "MFG Technologies", href: "/filiales/mfg-technologies" },
        { label: "GEM E-Mobility", href: "/filiales/gem-e-mobility" },
      ]
    },
    {
      label: t('nav.governance'),
      items: [
        { label: t('nav.direction'), href: "/gouvernance/direction" },
        { label: t('nav.executive-committee'), href: "/gouvernance/comite-executif" },
      ]
    },
    {
      label: t('nav.news'),
      items: [
        { label: t('nav.communiques'), href: "/actualites/communiques" },
        { label: t('nav.events'), href: "/actualites/evenements" },
        { label: t('nav.projects'), href: "/actualites/projets" },
      ]
    },
    {
      label: t('nav.careers'),
      items: [
        { label: t('nav.hr-commitments'), href: "/carrieres/engagements-rh" },
        { label: t('nav.join-us'), href: "/carrieres/rejoignez-nous" },
      ]
    }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/c28bf123-f6da-4e8d-8c27-a47aa3c51b53.png" alt="Solio Group" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className={`text-gray-700 hover:text-solio-blue font-medium transition-colors ${
                  item.items.some(subItem => isActive(subItem.href)) ? 'text-solio-blue' : ''
                }`}>
                  {item.label}
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          isActive(subItem.href) ? 'text-solio-blue bg-blue-50' : 'text-gray-700'
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/media" className={`text-gray-700 hover:text-solio-blue font-medium transition-colors ${
              isActive('/media') ? 'text-solio-blue' : ''
            }`}>
              {t('nav.media')}
            </Link>
            <Button asChild className="bg-solio-blue hover:bg-solio-blue/90">
              <Link to="/contact">{t('nav.contact')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t" role="navigation" aria-label="Mobile navigation">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <div className="font-medium text-gray-900 mb-2">{item.label}</div>
                  <div className="space-y-2 ml-4">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className={`block text-sm hover:text-solio-blue transition-colors ${
                          isActive(subItem.href) ? 'text-solio-blue' : 'text-gray-600'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t">
                <Link
                  to="/media"
                  className={`block text-sm mb-3 hover:text-solio-blue transition-colors ${
                    isActive('/media') ? 'text-solio-blue' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.media')}
                </Link>
                <Button asChild className="w-full bg-solio-blue hover:bg-solio-blue/90">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    {t('nav.contact')}
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
