import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

interface FluidLanguageSelectorProps {
  elementId: string;
  isMobile?: boolean;
}

const FluidLanguageSelector = ({ elementId, isMobile = false }: FluidLanguageSelectorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [isDebugging, setIsDebugging] = useState(true);
  const [debugLogs, setDebugLogs] = useState<string[]>([]);

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

  const addDebugLog = (message: string) => {
    console.log(`🔵 FLUID DEBUG: ${message}`);
    setDebugLogs(prev => [...prev.slice(-10), `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const triggerGoogleTranslate = (langCode: string) => {
    addDebugLog(`Triggering fluid translation to: ${langCode}`);
    
    // Method 1: Find and trigger the hidden Google Translate widget
    const element = document.getElementById(elementId);
    if (element) {
      const selects = element.querySelectorAll('select');
      addDebugLog(`Found ${selects.length} select elements in ${elementId}`);
      
      selects.forEach((select, index) => {
        const targetOption = Array.from(select.options).find(option => 
          option.value === langCode || option.value.includes(langCode)
        );
        if (targetOption) {
          addDebugLog(`Found target option for ${langCode} in select ${index}, triggering change`);
          select.value = targetOption.value;
          
          // Trigger multiple events to ensure translation
          const events = ['change', 'input', 'click'];
          events.forEach(eventType => {
            const event = new Event(eventType, { bubbles: true });
            select.dispatchEvent(event);
          });
          
          // Also trigger with mouse events
          const mouseEvent = new MouseEvent('mousedown', { bubbles: true });
          select.dispatchEvent(mouseEvent);
          
          return;
        }
      });
    } else {
      addDebugLog(`Element ${elementId} not found`);
    }

    // Method 2: Look for any Google Translate selects on the page
    const allSelects = document.querySelectorAll('select');
    addDebugLog(`Found ${allSelects.length} total select elements on page`);
    
    allSelects.forEach((select, index) => {
      if (select.className.includes('goog-te') || select.closest('.goog-te-gadget')) {
        const targetOption = Array.from(select.options).find(option => 
          option.value === langCode || option.value.includes(langCode)
        );
        if (targetOption) {
          addDebugLog(`Found GT select ${index} with target option for ${langCode}`);
          select.value = targetOption.value;
          
          // Trigger change event
          select.dispatchEvent(new Event('change', { bubbles: true }));
          
          // Force focus and blur to trigger translation
          select.focus();
          select.blur();
        }
      }
    });

    // Method 3: Direct Google Translate API call if available
    if (window.google?.translate?.TranslateElement) {
      try {
        addDebugLog(`Using direct GT API for ${langCode}`);
        const translateElement = window.google.translate.TranslateElement.getInstance();
        if (translateElement) {
          translateElement.showBanner(false);
        }
      } catch (error) {
        addDebugLog(`Direct API method failed: ${error}`);
      }
    } else {
      addDebugLog('Google Translate API not available');
    }

    // Method 4: Force page language change via URL hash
    addDebugLog(`Setting URL hash for ${langCode}`);
    window.location.hash = `googtrans(fr|${langCode})`;
  };

  const initializeTranslate = () => {
    addDebugLog(`Initializing Fluid Translate for ${elementId}`);
    
    if (window.google?.translate?.TranslateElement) {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = '';
        
        try {
          new window.google.translate.TranslateElement({
            pageLanguage: 'fr',
            includedLanguages: 'en,fr,es,de,it,pt,ar,zh,ja,ko,ru',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true
          }, elementId);
          
          addDebugLog(`Fluid Google Translate initialized for ${elementId}`);
          
          // Hide the widget completely but keep it functional
          setTimeout(() => {
            const gtElement = document.getElementById(elementId);
            if (gtElement) {
              gtElement.style.position = 'absolute';
              gtElement.style.left = '-9999px';
              gtElement.style.visibility = 'hidden';
              gtElement.style.opacity = '0';
              gtElement.style.pointerEvents = 'none';
            }
          }, 1000);
          
        } catch (error) {
          addDebugLog(`Error initializing Fluid Translate: ${error}`);
        }
      }
    } else {
      addDebugLog('Google Translate API not ready, retrying...');
      setTimeout(initializeTranslate, 500);
    }
  };

  const handleLanguageSelect = (langCode: string) => {
    addDebugLog(`Fluid language selected: ${langCode}`);
    setCurrentLanguage(langCode);
    setIsDropdownOpen(false);
    
    // Trigger translation without page reload
    setTimeout(() => {
      triggerGoogleTranslate(langCode);
    }, 100);
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

      const existingScript = document.querySelector('script[src*="translate.google.com"]');
      if (existingScript) {
        addDebugLog('Using existing Google Translate script for fluid selector');
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

      addDebugLog('Loading Google Translate script for fluid selector');
      
      window.googleTranslateElementInit = () => {
        addDebugLog('Google Translate script loaded for fluid selector');
        initializeTranslate();
      };

      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => addDebugLog('Failed to load Google Translate script');
      
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
      {/* Fluid Globe Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Changer de langue (fluide)"
        title="Changement de langue fluide"
      >
        <Globe className={`${isMobile ? 'h-4 w-4' : 'h-4 w-4'} text-blue-600 dark:text-blue-400`} />
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
            <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 border-b dark:border-gray-700">
              Changement fluide (sans rechargement)
            </div>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 ${
                  currentLanguage === language.code 
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
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
        className="hidden-translate-widget"
        style={{ display: 'none' }}
      />

      {/* Debug info - only show if debugging is enabled */}
      {isDebugging && (
        <div className="fixed bottom-4 left-4 bg-blue-500 text-white p-2 rounded text-xs max-w-xs z-50">
          <div><strong>🔵 FLUID DEBUG MODE</strong></div>
          <div>Current: {currentLang.name}</div>
          <div>Dropdown: {isDropdownOpen ? 'Open' : 'Closed'}</div>
          <div>Element: {elementId}</div>
          <div className="mt-2 max-h-20 overflow-y-auto">
            {debugLogs.slice(-3).map((log, index) => (
              <div key={index} className="text-xs">{log}</div>
            ))}
          </div>
          <button 
            onClick={() => setIsDebugging(false)}
            className="mt-1 bg-blue-700 px-2 py-1 rounded text-xs"
          >
            Hide Debug
          </button>
        </div>
      )}
    </div>
  );
};

export default FluidLanguageSelector;
