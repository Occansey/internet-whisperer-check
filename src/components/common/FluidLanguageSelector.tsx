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
    addDebugLog(`Triggering advanced translation to: ${langCode}`);
    
    // Method 1: Search for any Google Translate elements using multiple selectors
    const gtSelectors = [
      'select[class*="goog-te"]',
      '.goog-te-combo',
      '.goog-te-gadget select',
      '#google_translate_element select',
      '#google_translate_element_mobile select',
      '#fluid_translate_element select',
      '#fluid_translate_element_mobile select'
    ];
    
    let foundSelect = false;
    
    gtSelectors.forEach(selector => {
      const selects = document.querySelectorAll(selector);
      addDebugLog(`Selector "${selector}" found ${selects.length} elements`);
      
      selects.forEach((select: Element, index) => {
        const selectElement = select as HTMLSelectElement;
        addDebugLog(`Checking select ${index} with ${selectElement.options.length} options`);
        
        // Log all available options for debugging
        Array.from(selectElement.options).forEach((option, optIndex) => {
          addDebugLog(`Option ${optIndex}: value="${option.value}", text="${option.text}"`);
        });
        
        const targetOption = Array.from(selectElement.options).find(option => 
          option.value === langCode || 
          option.value.includes(`|${langCode}`) ||
          option.value === `fr|${langCode}` ||
          option.text.toLowerCase().includes(languages.find(l => l.code === langCode)?.name.toLowerCase() || '')
        );
        
        if (targetOption) {
          addDebugLog(`Found matching option: ${targetOption.value} for ${langCode}`);
          selectElement.value = targetOption.value;
          
          // Trigger multiple events
          ['change', 'input', 'click', 'mousedown', 'focus', 'blur'].forEach(eventType => {
            const event = new Event(eventType, { bubbles: true, cancelable: true });
            selectElement.dispatchEvent(event);
          });
          
          foundSelect = true;
          addDebugLog(`Successfully triggered events on select for ${langCode}`);
        }
      });
    });

    // Method 2: Force show hidden elements temporarily
    if (!foundSelect) {
      addDebugLog('No selects found, attempting to reveal hidden elements');
      
      const hiddenElements = document.querySelectorAll('[style*="display: none"], [style*="visibility: hidden"], .hidden');
      hiddenElements.forEach((el: Element) => {
        const element = el as HTMLElement;
        const originalStyle = element.style.cssText;
        element.style.display = 'block';
        element.style.visibility = 'visible';
        element.style.opacity = '1';
        
        // Look for selects in the now-visible element
        const selects = element.querySelectorAll('select');
        addDebugLog(`Found ${selects.length} selects in previously hidden element`);
        
        selects.forEach((select: Element) => {
          const selectElement = select as HTMLSelectElement;
          const targetOption = Array.from(selectElement.options).find(option => 
            option.value.includes(langCode)
          );
          
          if (targetOption) {
            addDebugLog(`Found target in revealed element: ${targetOption.value}`);
            selectElement.value = targetOption.value;
            selectElement.dispatchEvent(new Event('change', { bubbles: true }));
            foundSelect = true;
          }
        });
        
        // Restore original style after a delay
        setTimeout(() => {
          element.style.cssText = originalStyle;
        }, 100);
      });
    }

    // Method 3: Use Google Translate API directly if available
    if (window.google?.translate?.TranslateElement) {
      try {
        addDebugLog(`Attempting direct Google Translate API call for ${langCode}`);
        
        // Try to get the translate element instance
        const translateFrame = document.querySelector('iframe.goog-te-menu-frame') as HTMLIFrameElement;
        if (translateFrame && translateFrame.contentDocument) {
          const frameSelects = translateFrame.contentDocument.querySelectorAll('select');
          addDebugLog(`Found ${frameSelects.length} selects in translate frame`);
          
          frameSelects.forEach((select: Element) => {
            const selectElement = select as HTMLSelectElement;
            const targetOption = Array.from(selectElement.options).find(option => 
              option.value.includes(langCode)
            );
            
            if (targetOption) {
              addDebugLog(`Found target in frame: ${targetOption.value}`);
              selectElement.value = targetOption.value;
              selectElement.dispatchEvent(new Event('change', { bubbles: true }));
              foundSelect = true;
            }
          });
        }
      } catch (error) {
        addDebugLog(`Direct API method failed: ${error}`);
      }
    }

    // Method 4: Cookie and URL hash approach
    addDebugLog(`Setting cookie and hash for ${langCode}`);
    
    // Set Google Translate cookie
    document.cookie = `googtrans=/fr/${langCode}; path=/; domain=${window.location.hostname}`;
    
    // Set URL hash
    window.location.hash = `googtrans(fr|${langCode})`;
    
    // Method 5: Force reload if nothing else worked
    if (!foundSelect) {
      addDebugLog('No translation triggered, attempting page refresh with language');
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      addDebugLog('Translation should be active now');
    }
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
          
          // Keep the widget visible for debugging
          setTimeout(() => {
            const gtElement = document.getElementById(elementId);
            if (gtElement) {
              // Make it visible but small for debugging
              gtElement.style.position = 'fixed';
              gtElement.style.bottom = '60px';
              gtElement.style.left = '10px';
              gtElement.style.background = 'yellow';
              gtElement.style.padding = '2px';
              gtElement.style.fontSize = '10px';
              gtElement.style.zIndex = '9999';
              gtElement.style.border = '1px solid red';
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
    
    // Trigger translation without delay
    triggerGoogleTranslate(langCode);
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

      {/* Visible Google Translate Widget for debugging */}
      <div 
        id={elementId} 
        className="debug-translate-widget"
      />

      {/* Debug info - enhanced debug panel */}
      {isDebugging && (
        <div className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-lg text-xs max-w-sm z-50 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <strong>🔵 FLUID DEBUG MODE</strong>
            <button 
              onClick={() => setIsDebugging(false)}
              className="bg-blue-800 px-2 py-1 rounded text-xs hover:bg-blue-700"
            >
              Hide
            </button>
          </div>
          <div>Current: {currentLang.name}</div>
          <div>Dropdown: {isDropdownOpen ? 'Open' : 'Closed'}</div>
          <div>Element: {elementId}</div>
          <div>GT Available: {window.google?.translate ? 'Yes' : 'No'}</div>
          <div>Total Selects: {document.querySelectorAll('select').length}</div>
          <div className="mt-2 max-h-32 overflow-y-auto border-t border-blue-500 pt-2">
            <div className="text-blue-200 font-semibold">Recent Logs:</div>
            {debugLogs.slice(-5).map((log, index) => (
              <div key={index} className="text-xs text-blue-100 mb-1">{log}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FluidLanguageSelector;
