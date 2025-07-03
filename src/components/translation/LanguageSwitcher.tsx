
import React from 'react';
import { Toggle } from '@/components/ui/toggle';
import { useTranslation } from '@/contexts/TranslationContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Toggle
      pressed={language === 'en'}
      onPressedChange={toggleLanguage}
      aria-label="Toggle language"
      className="flex items-center gap-2 px-3 py-2"
    >
      <span className="text-lg">{language === 'fr' ? '🇫🇷' : '🇺🇸'}</span>
      <span className="text-sm font-medium">
        {language === 'fr' ? 'FR' : 'EN'}
      </span>
    </Toggle>
  );
};
