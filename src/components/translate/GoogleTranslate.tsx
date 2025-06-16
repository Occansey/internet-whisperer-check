
import React, { useEffect, useState } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

export const languages: Language[] = [
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

export const useGoogleTranslate = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [isTranslateReady, setIsTranslateReady] = useState(false);

  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        console.log('Google Translate is ready');
        
        // Initialize the translate element
        new window.google.translate.TranslateElement({
          pageLanguage: 'fr',
          includedLanguages: 'en,es,de,it,pt,ar,zh,ja,ko,ru',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
        
        setIsTranslateReady(true);
      } else {
        console.log('Waiting for Google Translate to load...');
        setTimeout(initializeGoogleTranslate, 100);
      }
    };

    initializeGoogleTranslate();
  }, []);

  const translatePage = (langCode: string) => {
    console.log('Attempting to translate to:', langCode);
    
    if (!isTranslateReady) {
      console.log('Google Translate not ready yet');
      return;
    }

    const selectedLang = languages.find(lang => lang.code === langCode) || languages[0];
    setCurrentLanguage(selectedLang);

    // Method 1: Try using the select dropdown
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      console.log('Found select element, changing value to:', langCode);
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      return;
    }

    // Method 2: Try clicking on iframe menu items
    setTimeout(() => {
      const iframe = document.querySelector('.goog-te-menu-frame:last-child') as HTMLIFrameElement;
      if (iframe && iframe.contentDocument) {
        console.log('Found iframe, looking for language link');
        const langLinks = iframe.contentDocument.querySelectorAll('a.goog-te-menu2-item');
        for (let i = 0; i < langLinks.length; i++) {
          const link = langLinks[i] as HTMLElement;
          if (link.textContent && link.textContent.includes(selectedLang.name)) {
            console.log('Clicking on language link:', link.textContent);
            link.click();
            return;
          }
        }
      }
    }, 500);

    // Method 3: Direct API call if available
    setTimeout(() => {
      if (window.google && window.google.translate && window.google.translate.TranslateService) {
        console.log('Using TranslateService API');
        const service = new window.google.translate.TranslateService();
        service.translatePage(langCode, 'fr');
      }
    }, 1000);
  };

  return {
    currentLanguage,
    translatePage,
    isTranslateReady,
    languages
  };
};

// Empty component for backward compatibility
const GoogleTranslate: React.FC = () => {
  return (
    <div id="google_translate_element" style={{ display: 'none' }}></div>
  );
};

export default GoogleTranslate;
