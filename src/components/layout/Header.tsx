import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/theme-toggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    apropos: false,
    filiales: false,
    gouvernance: false,
    actualites: false,
    carrieres: false,
  });
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns(prev => ({
      apropos: false,
      filiales: false,
      gouvernance: false,
      actualites: false,
      carrieres: false,
      [dropdown]: !prev[dropdown]
    }));
  };

  const closeAllDropdowns = () => {
    setDropdowns({
      apropos: false,
      filiales: false,
      gouvernance: false,
      actualites: false,
      carrieres: false,
    });
    setIsOpen(false);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeAllDropdowns();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Google Translate initialization
  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (typeof window !== 'undefined' && window.google?.translate?.TranslateElement) {
        try {
          new window.google.translate.TranslateElement({
            pageLanguage: 'fr',
            includedLanguages: 'en,fr,es,de,it,pt,ar',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          }, 'google_translate_element');

          new window.google.translate.TranslateElement({
            pageLanguage: 'fr',
            includedLanguages: 'en,fr,es,de,it,pt,ar',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          }, 'google_translate_element_mobile');
        } catch (error) {
          console.log('Google Translate initialization error:', error);
        }
      } else {
        setTimeout(initializeGoogleTranslate, 500);
      }
    };
    const timer = setTimeout(initializeGoogleTranslate, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header ref={headerRef} className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-200">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center py-1">
          <Link to="/" className="flex items-center" onClick={closeAllDropdowns}>
            <img 
              src="/lovable-uploads/2f77179c-5f56-4952-8e92-625fc37a10e2.png" 
              alt="Solio Group Logo" 
              className="h-28 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {/* À propos dropdown */}
            <div className="relative">
              <Button variant="ghost" className="gap-1 py-1.5 flex items-center" onClick={() => toggleDropdown('apropos')}>
                À propos
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.apropos ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.apropos && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                  <Link to="/presentation" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Présentation
                  </Link>
                  <Link to="/mission-vision" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Mission & Vision
                  </Link>
                  <Link to="/certifications" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Certifications
                  </Link>
                  <Link to="/culture" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Culture
                  </Link>
                  <Link to="/activites" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Activités
                  </Link>
                </div>
              )}
            </div>

            {/* Filiales dropdown */}
            <div className="relative">
              <Button variant="ghost" className="gap-1 py-1.5 flex items-center" onClick={() => toggleDropdown('filiales')}>
                Filiales
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.filiales ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.filiales && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                  <Link to="/filiales/growth-energy" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Growth Energy
                  </Link>
                  <Link to="/filiales/asking" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Asking
                  </Link>
                  <Link to="/filiales/mfg-technologies" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    MFG Technologies
                  </Link>
                  <Link to="/filiales/gem-e-mobility" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    GEM E-Mobility
                  </Link>
                </div>
              )}
            </div>

            {/* Gouvernance dropdown */}
            <div className="relative">
              <Button variant="ghost" className="gap-1 py-1.5 flex items-center" onClick={() => toggleDropdown('gouvernance')}>
                Gouvernance
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.gouvernance ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.gouvernance && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                  <Link to="/gouvernance/direction" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Direction
                  </Link>
                  <Link to="/gouvernance/comite-executif" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Comité Exécutif
                  </Link>
                </div>
              )}
            </div>

            {/* Actualités dropdown */}
            <div className="relative">
              <Button variant="ghost" className="gap-1 py-1.5 flex items-center" onClick={() => toggleDropdown('actualites')}>
                Actualités
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.actualites ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.actualites && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                  <Link to="/actualites/communiques" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Communiqués
                  </Link>
                  <Link to="/actualites/newsletter" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Newsletter
                  </Link>
                </div>
              )}
            </div>

            {/* Carrières dropdown */}
            <div className="relative">
              <Button variant="ghost" className="gap-1 py-1.5 flex items-center" onClick={() => toggleDropdown('carrieres')}>
                Carrières
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.carrieres ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.carrieres && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                  <Link to="/carrieres/offres" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Offres d’emploi
                  </Link>
                  <Link to="/carrieres/candidature-spontanee" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
                    Candidature spontanée
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-sm text-solio-blue font-semibold hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>
              Contact
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Google Translate desktop */}
            <div id="google_translate_element" className="ml-4"></div>
          </nav>

          {/* Mobile Hamburger */}
          <Button variant="ghost" className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-2">
          <ul className="space-y-2 px-4">
            {/* Pour chaque menu, on fait un bouton qui ouvre le sous-menu */}
            <li>
              <button
                type="button"
                className="w-full flex justify-between items-center text-left text-gray-800 dark:text-gray-200 font-semibold"
                onClick={() => toggleDropdown('apropos')}
              >
                À propos
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.apropos ? 'rotate-180' : ''}`} />
              </button>
              {dropdowns.apropos && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li><Link to="/presentation" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Présentation</Link></li>
                  <li><Link to="/mission-vision" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Mission & Vision</Link></li>
                  <li><Link to="/certifications" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Certifications</Link></li>
                  <li><Link to="/culture" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Culture</Link></li>
                  <li><Link to="/activites" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Activités</Link></li>
                </ul>
              )}
            </li>

            <li>
              <button
                type="button"
                className="w-full flex justify-between items-center text-left text-gray-800 dark:text-gray-200 font-semibold"
                onClick={() => toggleDropdown('filiales')}
              >
                Filiales
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.filiales ? 'rotate-180' : ''}`} />
              </button>
              {dropdowns.filiales && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li><Link to="/filiales/growth-energy" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Growth Energy</Link></li>
                  <li><Link to="/filiales/asking" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Asking</Link></li>
                  <li><Link to="/filiales/mfg-technologies" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">MFG Technologies</Link></li>
                  <li><Link to="/filiales/gem-e-mobility" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">GEM E-Mobility</Link></li>
                </ul>
              )}
            </li>

            <li>
              <button
                type="button"
                className="w-full flex justify-between items-center text-left text-gray-800 dark:text-gray-200 font-semibold"
                onClick={() => toggleDropdown('gouvernance')}
              >
                Gouvernance
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.gouvernance ? 'rotate-180' : ''}`} />
              </button>
              {dropdowns.gouvernance && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li><Link to="/gouvernance/direction" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Direction</Link></li>
                  <li><Link to="/gouvernance/comite-executif" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Comité Exécutif</Link></li>
                </ul>
              )}
            </li>

            <li>
              <button
                type="button"
                className="w-full flex justify-between items-center text-left text-gray-800 dark:text-gray-200 font-semibold"
                onClick={() => toggleDropdown('actualites')}
              >
                Actualités
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.actualites ? 'rotate-180' : ''}`} />
              </button>
              {dropdowns.actualites && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li><Link to="/actualites/communiques" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Communiqués</Link></li>
                  <li><Link to="/actualites/newsletter" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Newsletter</Link></li>
                </ul>
              )}
            </li>

            <li>
              <button
                type="button"
                className="w-full flex justify-between items-center text-left text-gray-800 dark:text-gray-200 font-semibold"
                onClick={() => toggleDropdown('carrieres')}
              >
                Carrières
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.carrieres ? 'rotate-180' : ''}`} />
              </button>
              {dropdowns.carrieres && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li><Link to="/carrieres/offres" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Offres d’emploi</Link></li>
                  <li><Link to="/carrieres/candidature-spontanee" onClick={closeAllDropdowns} className="block text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow">Candidature spontanée</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" onClick={closeAllDropdowns} className="block text-solio-blue font-semibold hover:text-solio-yellow">
                Contact
              </Link>
            </li>

            <li>
              <ThemeToggle />
            </li>

            <li>
              <div id="google_translate_element_mobile" className="mt-2"></div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
