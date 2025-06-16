
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
        } catch (error) {
          console.error('Error initializing Google Translate:', error);
        }
      }
    } else {
      setTimeout(initializeTranslate, 500);
    }
  };

  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      if (scriptLoaded.current) {
        initializeTranslate();
        return;
      }

      const existingScript = document.querySelector('script[src*="translate.google.com"]');
      if (existingScript) {
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

      window.googleTranslateElementInit = () => {
        initializeTranslate();
      };

      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      
      document.head.appendChild(script);
      scriptLoaded.current = true;

      // Add essential CSS styles for Google Translate functionality
      const style = document.createElement('style');
      style.textContent = `
        /* Essential Google Translate Widget Styling */
        .translate-widget .goog-te-combo,
        .translate-widget-mobile .goog-te-combo {
          font-size: 12px !important;
          border: 1px solid #d1d5db !important;
          border-radius: 4px !important;
          padding: 4px 6px !important;
          background: white !important;
          color: #374151 !important;
          cursor: pointer !important;
          min-width: 80px !important;
          pointer-events: auto !important;
          position: relative !important;
          z-index: 999999 !important;
        }

        .dark .translate-widget .goog-te-combo,
        .dark .translate-widget-mobile .goog-te-combo {
          background: #374151 !important;
          color: #f3f4f6 !important;
          border-color: #4b5563 !important;
        }

        .translate-widget .goog-te-gadget,
        .translate-widget-mobile .goog-te-gadget {
          font-family: inherit !important;
          font-size: 12px !important;
        }

        .translate-widget .goog-te-gadget .goog-te-combo,
        .translate-widget-mobile .goog-te-gadget .goog-te-combo {
          margin: 0 !important;
        }

        .goog-te-gadget-simple {
          background: transparent !important;
          border: none !important;
          font-size: 12px !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value {
          color: inherit !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value span {
          color: inherit !important;
        }

        /* Hide Google Translate banner and branding */
        .goog-te-banner-frame {
          display: none !important;
        }

        .goog-te-gadget-icon {
          display: none !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value:before {
          content: none !important;
        }

        body {
          top: 0 !important;
        }

        .skiptranslate {
          display: none !important;
        }

        /* Ensure dropdown is clickable and visible */
        .goog-te-combo {
          position: relative !important;
          z-index: 1000 !important;
          pointer-events: auto !important;
        }

        .goog-te-combo option {
          background: white !important;
          color: #374151 !important;
          pointer-events: auto !important;
          cursor: pointer !important;
        }

        .dark .goog-te-combo option {
          background: #374151 !important;
          color: #f3f4f6 !important;
        }
      `;
      document.head.appendChild(style);
    };

    const timer = setTimeout(loadGoogleTranslateScript, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, [elementId]);

  return (
    <div className="relative flex items-center" ref={containerRef}>
      <div className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
        <Globe className={`${isMobile ? 'h-4 w-4' : 'h-4 w-4'} text-gray-600 dark:text-gray-400`} />
        <div 
          id={elementId} 
          className={`translate-widget${isMobile ? '-mobile' : ''}`}
        />
      </div>
    </div>
  );
};

export default GoogleTranslate;
