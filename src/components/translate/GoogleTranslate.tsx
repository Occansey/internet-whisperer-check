
import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [isTranslateReady, setIsTranslateReady] = useState(false);

  useEffect(() => {
    // Check if Google Translate is ready
    const checkTranslateReady = () => {
      if (window.google && window.google.translate) {
        setIsTranslateReady(true);
      } else {
        setTimeout(checkTranslateReady, 100);
      }
    };
    checkTranslateReady();
  }, []);

  const translatePage = (langCode: string) => {
    if (!isTranslateReady) return;

    const selectedLang = languages.find(lang => lang.code === langCode) || languages[0];
    setCurrentLanguage(selectedLang);

    // Force translation by directly manipulating Google Translate
    if (window.google && window.google.translate) {
      const translateElement = window.google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'en,es,de,it,pt,ar,zh,ja,ko,ru',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');

      // Force translation to selected language
      setTimeout(() => {
        const iframe = document.querySelector('iframe.goog-te-menu-frame') as HTMLIFrameElement;
        if (iframe && iframe.contentDocument) {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          const langLink = iframeDoc?.querySelector(`a[data-value="${langCode}"]`);
          if (langLink) {
            (langLink as HTMLElement).click();
          }
        } else {
          // Alternative method: use the select dropdown if available
          const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
          if (selectElement) {
            selectElement.value = langCode;
            selectElement.dispatchEvent(new Event('change'));
          }
        }
      }, 500);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="hidden md:inline">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => translatePage(language.code)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GoogleTranslate;
