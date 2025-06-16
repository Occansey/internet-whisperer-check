
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import GoogleTranslate from '@/components/common/GoogleTranslate';
import HeaderDropdown from './HeaderDropdown';
import MobileNavigation from './MobileNavigation';
import { navigationData } from '@/data/navigationData';

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

  // Prepare navigation sections for mobile
  const mobileNavigationSections = Object.entries(navigationData).map(([key, data]) => ({
    title: data.title,
    items: data.items,
    isOpen: dropdowns[key as keyof typeof dropdowns],
    onToggle: () => toggleDropdown(key as keyof typeof dropdowns),
    titleLink: 'titleLink' in data ? data.titleLink : undefined
  }));

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
            <HeaderDropdown
              title={navigationData.apropos.title}
              items={navigationData.apropos.items}
              isOpen={dropdowns.apropos}
              onToggle={() => toggleDropdown('apropos')}
              onClose={closeAllDropdowns}
            />

            <HeaderDropdown
              title={navigationData.filiales.title}
              items={navigationData.filiales.items}
              isOpen={dropdowns.filiales}
              onToggle={() => toggleDropdown('filiales')}
              onClose={closeAllDropdowns}
              titleLink={navigationData.filiales.titleLink}
            />

            <HeaderDropdown
              title={navigationData.gouvernance.title}
              items={navigationData.gouvernance.items}
              isOpen={dropdowns.gouvernance}
              onToggle={() => toggleDropdown('gouvernance')}
              onClose={closeAllDropdowns}
            />

            <HeaderDropdown
              title={navigationData.actualites.title}
              items={navigationData.actualites.items}
              isOpen={dropdowns.actualites}
              onToggle={() => toggleDropdown('actualites')}
              onClose={closeAllDropdowns}
            />

            <HeaderDropdown
              title={navigationData.carrieres.title}
              items={navigationData.carrieres.items}
              isOpen={dropdowns.carrieres}
              onToggle={() => toggleDropdown('carrieres')}
              onClose={closeAllDropdowns}
            />
            
            <div className="flex items-center space-x-4">
              <GoogleTranslate elementId="google_translate_element" />
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
            <GoogleTranslate elementId="google_translate_element_mobile" isMobile />
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
          <MobileNavigation 
            sections={mobileNavigationSections}
            onClose={closeAllDropdowns}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
