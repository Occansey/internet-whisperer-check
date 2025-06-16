
import { useEffect, useRef } from "react";
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

  const initializeTranslate = () => {
    console.log(`Initializing Google Translate for ${elementId}`);
    
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
            autoDisplay: false
          }, elementId);
          
          console.log(`Google Translate initialized successfully for ${elementId}`);
        } catch (error) {
          console.error(`Error initializing Google Translate for ${elementId}:`, error);
        }
      } else {
        console.error(`Element with id ${elementId} not found`);
      }
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
        console.log('Google Translate script already exists');
        scriptLoaded.current = true;
        
        // Wait for script to load if not ready
        const checkAndInit = () => {
          if (window.google?.translate?.TranslateElement) {
            initializeTranslate();
          } else {
            setTimeout(checkAndInit, 100);
          }
        };
        checkAndInit();
        return;
      }

      console.log('Loading Google Translate script');
      
      // Set up global callback
      window.googleTranslateElementInit = () => {
        console.log('Google Translate script loaded, initializing...');
        initializeTranslate();
      };

      // Load script
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => console.error('Failed to load Google Translate script');
      
      document.head.appendChild(script);
      scriptLoaded.current = true;
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadGoogleTranslateScript, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, [elementId]);

  return (
    <div 
      ref={containerRef}
      className="flex items-center"
      style={{ minWidth: isMobile ? '60px' : '80px' }}
    >
      <Globe className={`${isMobile ? 'h-4 w-4 mr-1' : 'h-4 w-4 mr-2'} text-gray-600 dark:text-gray-400`} />
      <div 
        id={elementId} 
        className="translate-widget"
        style={{ 
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 1000
        }}
      />
    </div>
  );
};

export default GoogleTranslate;
