
import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

interface GoogleTranslateProps {
  elementId: string;
  isMobile?: boolean;
}

const GoogleTranslate = ({ elementId, isMobile = false }: GoogleTranslateProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);
  const [isDebugging, setIsDebugging] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const languages = [
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
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  const forceLanguageChange = (langCode: string) => {
    console.log(`🔄 FORCING language change to: ${langCode}`);
    setCurrentLanguage(langCode);
    
    // Method 1: Try to find and trigger the Google Translate select directly
    const element = document.getElementById(elementId);
    if (element) {
      const selects = element.querySelectorAll('select');
      console.log(`🎯 Found ${selects.length} select elements`);
      
      selects.forEach((select, index) => {
        console.log(`🎯 Attempting to change select ${index} to ${langCode}`);
        const option = Array.from(select.options).find(opt => opt.value === langCode);
        if (option) {
          select.value = langCode;
          select.dispatchEvent(new Event('change', { bubbles: true }));
          console.log(`✅ Successfully triggered change on select ${index}`);
          return;
        }
      });
    }

    // Method 2: Try to find Google Translate elements anywhere on the page
    const allSelects = document.querySelectorAll('select');
    console.log(`🌍 Found ${allSelects.length} total select elements on page`);
    
    allSelects.forEach((select, index) => {
      if (select.className.includes('goog-te') || select.closest('.goog-te-gadget')) {
        console.log(`🎯 Found Google Translate select ${index}, attempting change to ${langCode}`);
        const option = Array.from(select.options).find(opt => opt.value === langCode);
        if (option) {
          select.value = langCode;
          select.dispatchEvent(new Event('change', { bubbles: true }));
          select.dispatchEvent(new Event('input', { bubbles: true }));
          console.log(`✅ Successfully triggered change on GT select ${index}`);
        }
      }
    });

    // Method 3: Force page reload with language parameter
    if (langCode !== 'auto') {
      console.log(`🔄 Setting language via URL fragment: #googtrans(fr|${langCode})`);
      window.location.hash = `googtrans(fr|${langCode})`;
      // Force a small reload to trigger the translation
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  const initializeTranslate = () => {
    console.log(`🔄 Initializing Google Translate for ${elementId}`);
    
    if (window.google?.translate?.TranslateElement) {
      const element = document.getElementById(elementId);
      if (element) {
        // Clear existing content
        element.innerHTML = '';
        
        try {
          new window.google.translate.TranslateElement({
            pageLanguage: 'fr',
            includedLanguages: 'en,fr,es,de,it,pt,ar,zh,ja,ko,ru',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true
          }, elementId);
          
          console.log(`✅ Google Translate initialized successfully for ${elementId}`);
          
          // Hide the default widget
          setTimeout(() => {
            const gtElement = document.getElementById(elementId);
            if (gtElement) {
              gtElement.style.display = 'none';
            }
          }, 1000);
          
        } catch (error) {
          console.error(`❌ Error initializing Google Translate for ${elementId}:`, error);
        }
      }
    } else {
      console.log('❌ Google Translate API not ready yet');
      setTimeout(initializeTranslate, 500);
    }
  };

  const handleLanguageSelect = (langCode: string) => {
    console.log('🌍 Language selected:', langCode);
    setIsDropdownOpen(false);
    forceLanguageChange(langCode);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      if (scriptLoaded.current) {
        initializeTranslate();
        return;
      }

      // Check if script already exists
      const existingScript = document.querySelector('script[src*="translate.google.com"]');
      if (existingScript) {
        console.log('📜 Google Translate script already exists');
        scriptLoaded.current = true;
        
        const checkAndInit = () => {
          if (window.google?.translate?.TranslateElement) {
            initializeTranslate();
          } else {
            setTimeout(checkAndInit, 200);
          }
        };
        checkAndInit();
        return;
      }

      console.log('📜 Loading Google Translate script');
      
      // Set up global callback
      window.googleTranslateElementInit = () => {
        console.log('📜 Google Translate script loaded, initializing...');
        initializeTranslate();
      };

      // Load script
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => console.error('❌ Failed to load Google Translate script');
      
      document.head.appendChild(script);
      scriptLoaded.current = true;
    };

    const timer = setTimeout(loadGoogleTranslateScript, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, [elementId]);

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative flex items-center" ref={containerRef}>
      {/* Clickable Globe Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Changer de langue"
      >
        <Globe className={`${isMobile ? 'h-4 w-4' : 'h-4 w-4'} text-gray-600 dark:text-gray-400`} />
        {!isMobile && (
          <>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {currentLang.flag}
            </span>
            <ChevronDown className={`h-3 w-3 text-gray-600 dark:text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </>
        )}
      </button>

      {/* Language Dropdown */}
      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 ${
                  currentLanguage === language.code 
                    ? 'bg-solio-blue/10 text-solio-blue dark:bg-solio-yellow/10 dark:text-solio-yellow' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                role="menuitem"
              >
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hidden Google Translate Widget */}
      <div 
        id={elementId} 
        className="translate-widget hidden"
        style={{ display: 'none' }}
      />

      {/* Debug info - only show if debugging is enabled */}
      {isDebugging && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-2 rounded text-xs max-w-xs z-50">
          <div><strong>DEBUG MODE</strong></div>
          <div>Current: {currentLang.name}</div>
          <div>Dropdown: {isDropdownOpen ? 'Open' : 'Closed'}</div>
          <button 
            onClick={() => setIsDebugging(false)}
            className="mt-1 bg-red-700 px-2 py-1 rounded text-xs"
          >
            Hide Debug
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleTranslate;
