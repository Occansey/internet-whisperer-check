
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  to: string;
  label: string;
}

interface NavigationSection {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
  titleLink?: string;
}

interface MobileNavigationProps {
  sections: NavigationSection[];
  onClose: () => void;
}

const MobileNavigation = ({ sections, onClose }: MobileNavigationProps) => {
  return (
    <div className="lg:hidden py-4 border-t dark:border-gray-700">
      {sections.map((section) => (
        <div key={section.title} className="relative">
          <Button variant="ghost" className="w-full justify-start gap-1 py-1.5 px-4" onClick={section.onToggle}>
            {section.titleLink ? (
              <Link to={section.titleLink} className="flex-1 text-left" onClick={onClose}>
                {section.title}
              </Link>
            ) : (
              section.title
            )}
            <ChevronDown className={`h-4 w-4 transition-transform ${section.isOpen ? 'rotate-180' : ''}`} />
          </Button>
          {section.isOpen && (
            <div className="ml-4">
              {section.items.map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" 
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      
      <Link 
        to="/contact" 
        className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" 
        onClick={onClose}
      >
        Contact
      </Link>
    </div>
  );
};

export default MobileNavigation;
