
import React from 'react';
import { Button } from './button';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase font-medium">
        {language === 'fr' ? 'EN' : 'FR'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
