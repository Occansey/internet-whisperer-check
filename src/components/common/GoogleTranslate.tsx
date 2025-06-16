
import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";

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
  const [isInitialized, setIsInitialized] = useState(false);
  const [debugMode] = useState(true); // Enable debug mode

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
            includedLanguages: 'en,fr,es,de,it,pt,ar',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true
          }, elementId);
          
          console.log(`✅ Google Translate initialized for ${elementId}`);
          setIsInitialized(true);
          
          // Debug: Monitor language changes
          setTimeout(() => {
            const combo = element.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (combo) {
              console.log('🎯 Found dropdown, adding change listener');
              combo.addEventListener('change', (e) => {
                const target = e.target as HTMLSelectElement;
                console.log('🌍 Language changed to:', target.value);
                console.log('🌍 Selected option:', target.options[target.selectedIndex]?.text);
                
                // Check if translation is happening
                setTimeout(() => {
                  const bodyClass = document.body.className;
                  console.log('📄 Body classes after change:', bodyClass);
                  
                  const translatedElements = document.querySelectorAll('.goog-trans-control-enabled');
                  console.log('🔍 Translated elements found:', translatedElements.length);
                }, 1000);
              });
              
              // Make dropdown more visible in debug mode
              if (debugMode) {
                combo.style.border = '3px solid red !important';
                combo.style.backgroundColor = 'yellow !important';
                combo.style.fontSize = '16px !important';
                combo.style.padding = '8px !important';
              }
            } else {
              console.log('❌ Dropdown not found in element');
            }
          }, 1500);
          
          // Add the notranslate class to prevent translation of UI elements
          setTimeout(() => {
            // Mark navigation and UI elements as notranslate
            const header = document.querySelector('header');
            if (header) header.classList.add('notranslate');
            
            const nav = document.querySelector('nav');
            if (nav) nav.classList.add('notranslate');
            
            // Ensure the translate widget itself isn't translated
            const widget = element.querySelector('.goog-te-combo');
            if (widget) {
              widget.parentElement?.classList.add('notranslate');
            }
          }, 1000);
          
        } catch (error) {
          console.error(`❌ Error initializing Google Translate for ${elementId}:`, error);
        }
      }
    } else {
      console.log('❌ Google Translate API not ready, retrying...');
      setTimeout(initializeTranslate, 500);
    }
  };

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
        setTimeout(initializeTranslate, 500);
        return;
      }

      console.log('📜 Loading Google Translate script');
      
      // Set up global callback
      window.googleTranslateElementInit = () => {
        console.log('📜 Google Translate script loaded');
        setTimeout(initializeTranslate, 100);
      };

      // Load script
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => console.error('❌ Failed to load Google Translate script');
      
      document.head.appendChild(script);
      scriptLoaded.current = true;
    };

    loadGoogleTranslateScript();
  }, [elementId]);

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
        <Globe className={`${isMobile ? 'h-4 w-4 mr-1' : 'h-4 w-4 mr-2'} text-gray-600 dark:text-gray-400`} />
        <div 
          id={elementId} 
          className="translate-widget notranslate"
          style={debugMode ? { border: '2px dashed blue', padding: '4px' } : {}}
        />
        {debugMode && (
          <div className="ml-2 text-xs text-red-500">
            {isInitialized ? '✅ Ready' : '⏳ Loading...'}
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleTranslate;
