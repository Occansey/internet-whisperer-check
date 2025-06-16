
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
      console.log('🔍 [DEBUG] Initializing Google Translate...');
      
      if (window.google && window.google.translate) {
        console.log('✅ [DEBUG] Google Translate API is available');
        console.log('🔍 [DEBUG] Google object:', window.google);
        console.log('🔍 [DEBUG] Translate object:', window.google.translate);
        
        try {
          // Initialize the translate element
          const translateElement = new window.google.translate.TranslateElement({
            pageLanguage: 'fr',
            includedLanguages: 'en,es,de,it,pt,ar,zh,ja,ko,ru',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          }, 'google_translate_element');
          
          console.log('✅ [DEBUG] Google Translate element created:', translateElement);
          setIsTranslateReady(true);
        } catch (error) {
          console.error('❌ [DEBUG] Error creating Google Translate element:', error);
        }
      } else {
        console.log('⏳ [DEBUG] Google Translate API not ready yet, retrying...');
        setTimeout(initializeGoogleTranslate, 100);
      }
    };

    initializeGoogleTranslate();
  }, []);

  const translatePage = (langCode: string) => {
    console.log('🌍 [DEBUG] Translation requested for language:', langCode);
    console.log('🔍 [DEBUG] Current translation ready state:', isTranslateReady);
    
    if (!isTranslateReady) {
      console.warn('⚠️ [DEBUG] Google Translate not ready yet');
      return;
    }

    const selectedLang = languages.find(lang => lang.code === langCode) || languages[0];
    console.log('🔍 [DEBUG] Selected language object:', selectedLang);
    setCurrentLanguage(selectedLang);

    // Debug: Check current page elements
    console.log('🔍 [DEBUG] Checking for Google Translate elements...');
    const googleTranslateElement = document.getElementById('google_translate_element');
    console.log('🔍 [DEBUG] Google translate element found:', googleTranslateElement);
    
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    console.log('🔍 [DEBUG] Select dropdown found:', selectElement);
    
    const iframes = document.querySelectorAll('iframe[class*="goog-te"]');
    console.log('🔍 [DEBUG] Google Translate iframes found:', iframes.length, iframes);

    // Method 1: Try using the select dropdown
    if (selectElement) {
      console.log('✅ [DEBUG] Found select element, attempting to change value...');
      console.log('🔍 [DEBUG] Current select value:', selectElement.value);
      console.log('🔍 [DEBUG] Available options:');
      
      Array.from(selectElement.options).forEach((option, index) => {
        console.log(`  ${index}: ${option.value} - ${option.text}`);
      });
      
      selectElement.value = langCode;
      console.log('🔍 [DEBUG] Set select value to:', langCode);
      console.log('🔍 [DEBUG] New select value:', selectElement.value);
      
      const changeEvent = new Event('change', { bubbles: true });
      selectElement.dispatchEvent(changeEvent);
      console.log('✅ [DEBUG] Dispatched change event on select');
      return;
    }

    // Method 2: Try clicking on iframe menu items
    setTimeout(() => {
      console.log('🔍 [DEBUG] Trying iframe method...');
      const iframe = document.querySelector('.goog-te-menu-frame:last-child') as HTMLIFrameElement;
      console.log('🔍 [DEBUG] Found iframe:', iframe);
      
      if (iframe && iframe.contentDocument) {
        console.log('✅ [DEBUG] Iframe content document accessible');
        const langLinks = iframe.contentDocument.querySelectorAll('a.goog-te-menu2-item');
        console.log('🔍 [DEBUG] Found language links:', langLinks.length);
        
        for (let i = 0; i < langLinks.length; i++) {
          const link = langLinks[i] as HTMLElement;
          console.log(`🔍 [DEBUG] Link ${i}: "${link.textContent}"`);
          
          if (link.textContent && link.textContent.includes(selectedLang.name)) {
            console.log('✅ [DEBUG] Found matching language link, clicking...');
            link.click();
            return;
          }
        }
        console.log('❌ [DEBUG] No matching language link found');
      } else {
        console.log('❌ [DEBUG] Iframe not accessible or no content document');
      }
    }, 500);

    // Method 3: Direct API call if available
    setTimeout(() => {
      console.log('🔍 [DEBUG] Trying direct API method...');
      if (window.google && window.google.translate && window.google.translate.TranslateService) {
        console.log('✅ [DEBUG] TranslateService available, calling translatePage...');
        const service = new window.google.translate.TranslateService();
        service.translatePage(langCode, 'fr');
        console.log('✅ [DEBUG] Called TranslateService.translatePage');
      } else {
        console.log('❌ [DEBUG] TranslateService not available');
        console.log('🔍 [DEBUG] Available methods on google.translate:', 
          window.google?.translate ? Object.keys(window.google.translate) : 'N/A');
      }
    }, 1000);

    // Method 4: Try to trigger translation via URL hash
    setTimeout(() => {
      console.log('🔍 [DEBUG] Trying URL hash method...');
      const currentHash = window.location.hash;
      console.log('🔍 [DEBUG] Current hash:', currentHash);
      
      // Clear existing translate hash
      if (currentHash.includes('#googtrans')) {
        window.location.hash = '';
      }
      
      const newHash = `#googtrans(fr|${langCode})`;
      console.log('🔍 [DEBUG] Setting new hash:', newHash);
      window.location.hash = newHash;
      
      // Force reload to trigger translation
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }, 1500);
  };

  return {
    currentLanguage,
    translatePage,
    isTranslateReady,
    languages
  };
};

// Component that renders the hidden Google Translate element
const GoogleTranslate: React.FC = () => {
  console.log('🔍 [DEBUG] GoogleTranslate component rendered');
  
  return (
    <div id="google_translate_element" style={{ display: 'none' }}></div>
  );
};

export default GoogleTranslate;
