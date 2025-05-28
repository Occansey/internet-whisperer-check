import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/theme-toggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    actualites: false,
    carrieres: false,
    gouvernance: false,
    filiales: false,
  });
  const location = useLocation();

  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const closeAllDropdowns = () => {
    setDropdowns({
      actualites: false,
      carrieres: false,
      gouvernance: false,
      filiales: false,
    });
    setIsOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center" onClick={closeAllDropdowns}>
            <img 
              src="/lovable-uploads/fcbc8227-957f-4d1e-8871-724c4dc371a6.png" 
              alt="Solio Group Logo" 
              className="header-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <div className="relative group">
              <Button variant="ghost" className="gap-1 py-1.5" onClick={() => toggleDropdown('actualites')}>
                Actualités
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.actualites ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.actualites && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-1" role="none">
                    <Link to="/actualites/communiques" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      Communiqués
                    </Link>
                    <Link to="/actualites/evenements" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      Événements
                    </Link>
                    <Link to="/actualites/projets" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      Projets
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <Button variant="ghost" className="gap-1 py-1.5" onClick={() => toggleDropdown('carrieres')}>
                Carrières
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.carrieres ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.carrieres && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-1" role="none">
                    <Link to="/carrieres/engagements-rh" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      Nos engagements RH
                    </Link>
                    <Link to="/carrieres/rejoignez-nous" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      Rejoignez-nous
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <Button variant="ghost" className="gap-1 py-1.5" onClick={() => toggleDropdown('gouvernance')}>
                Gouvernance
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.gouvernance ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.gouvernance && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-1" role="none">
                    <Link to="/gouvernance/direction" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      Direction
                    </Link>
                    <Link to="/gouvernance/comite-executif" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      Comité Exécutif
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <Button variant="ghost" className="gap-1 py-1.5" onClick={() => toggleDropdown('filiales')}>
                Filiales
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.filiales ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.filiales && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-1" role="none">
                    <Link to="/nos-filiales" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      Nos Filiales
                    </Link>
                    <Link to="/filiales/growth-energy" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      Growth Energy
                    </Link>
                    <Link to="/filiales/asking" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      Asking
                    </Link>
                    <Link to="/filiales/mfg-technologies" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      MFG Technologies
                    </Link>
                    <Link to="/filiales/gem-e-mobility" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" role="menuitem" onClick={closeAllDropdowns} tabIndex={-1}>
                      GEM E-Mobility
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link 
                to="/contact"
                className={`${
                  location.pathname === '/contact' 
                    ? 'text-solio-blue' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-solio-blue dark:hover:text-solio-yellow'
                } transition-colors`}
                onClick={closeAllDropdowns}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t dark:border-gray-700">
            <Link to="/presentation" className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Présentation</Link>
            <Link to="/mission-vision" className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Mission & Vision</Link>
            <Link to="/certifications" className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Certifications</Link>
            
            <div className="relative">
              <Button variant="ghost" className="w-full justify-start gap-1 py-1.5 px-4" onClick={() => toggleDropdown('actualites')}>
                Actualités
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.actualites ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.actualites && (
                <div className="ml-4">
                  <Link to="/actualites/communiques" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Communiqués</Link>
                  <Link to="/actualites/evenements" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Événements</Link>
                  <Link to="/actualites/projets" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Projets</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <Button variant="ghost" className="w-full justify-start gap-1 py-1.5 px-4" onClick={() => toggleDropdown('carrieres')}>
                Carrières
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.carrieres ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.carrieres && (
                <div className="ml-4">
                  <Link to="/carrieres/engagements-rh" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Nos engagements RH</Link>
                  <Link to="/carrieres/rejoignez-nous" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Rejoignez-nous</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <Button variant="ghost" className="w-full justify-start gap-1 py-1.5 px-4" onClick={() => toggleDropdown('gouvernance')}>
                Gouvernance
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.gouvernance ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.gouvernance && (
                <div className="ml-4">
                  <Link to="/gouvernance/direction" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Direction</Link>
                  <Link to="/gouvernance/comite-executif" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Comité Exécutif</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <Button variant="ghost" className="w-full justify-start gap-1 py-1.5 px-4" onClick={() => toggleDropdown('filiales')}>
                Filiales
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.filiales ? 'rotate-180' : ''}`} />
              </Button>
              {dropdowns.filiales && (
                <div className="ml-4">
                  <Link to="/nos-filiales" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Nos Filiales</Link>
                  <Link to="/filiales/growth-energy" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Growth Energy</Link>
                  <Link to="/filiales/asking" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Asking</Link>
                  <Link to="/filiales/mfg-technologies" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>MFG Technologies</Link>
                  <Link to="/filiales/gem-e-mobility" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>GEM E-Mobility</Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" onClick={closeAllDropdowns}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
