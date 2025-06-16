
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  to: string;
  label: string;
}

interface HeaderDropdownProps {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  titleLink?: string;
}

const HeaderDropdown = ({ 
  title, 
  items, 
  isOpen, 
  onToggle, 
  onClose, 
  titleLink 
}: HeaderDropdownProps) => {
  const buttonContent = (
    <>
      {title}
      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </>
  );

  return (
    <div className="relative group">
      <Button variant="ghost" className="gap-1 py-1.5" onClick={onToggle}>
        {titleLink ? (
          <Link 
            to={titleLink}
            className="flex items-center gap-1"
            onClick={onClose}
          >
            {buttonContent}
          </Link>
        ) : (
          buttonContent
        )}
      </Button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            {items.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solio-blue dark:hover:text-solio-yellow transition-colors" 
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
