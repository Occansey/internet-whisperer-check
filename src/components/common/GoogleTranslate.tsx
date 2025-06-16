
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
  const [isDebugging, setIsDebugging] = useState(true);
  const [initAttempts, setInitAttempts] = useState(0);

  const initializeTranslate = () => {
    console.log(`🔄 Attempting to initialize Google Translate for ${elementId} (attempt ${initAttempts + 1})`);
    setInitAttempts(prev => prev + 1);
    
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
          
          console.log(`✅ Google Translate initialized successfully for ${elementId}`);
          
          // Add click debugging after a delay
          setTimeout(() => {
            const widget = element.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (widget) {
              console.log(`🎯 Widget found:`, widget);
              console.log(`🎯 Widget styles:`, window.getComputedStyle(widget));
              console.log(`🎯 Widget pointer-events:`, window.getComputedStyle(widget).pointerEvents);
              console.log(`🎯 Widget z-index:`, window.getComputedStyle(widget).zIndex);
              
              // Force click handler
              widget.addEventListener('click', (e) => {
                console.log('🖱️ Direct click detected on widget!', e);
              });
              
              // Test if widget is actually clickable
              widget.style.border = '2px solid red';
              widget.style.background = 'yellow';
              widget.style.pointerEvents = 'auto';
              widget.style.cursor = 'pointer';
              widget.style.zIndex = '999999';
            } else {
              console.log('❌ Widget not found in DOM');
            }
          }, 1000);
          
        } catch (error) {
          console.error(`❌ Error initializing Google Translate for ${elementId}:`, error);
        }
      } else {
        console.error(`❌ Element with id ${elementId} not found`);
      }
    } else {
      console.log('❌ Google Translate API not ready yet');
      if (initAttempts < 10) {
        setTimeout(initializeTranslate, 500);
      }
    }
  };

  // Alternative approach: Manual language selector
  const handleManualLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    console.log('🌍 Manual language change to:', lang);
    
    // Try to trigger Google Translate programmatically
    if (window.google?.translate) {
      // This is a simplified approach - in production you'd need more complex logic
      console.log('Attempting to change language to:', lang);
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

  // Click handler for the container
  const handleContainerClick = (event: React.MouseEvent) => {
    console.log('🖱️ Container clicked!', event);
    
    // Try to find and click the actual Google Translate select
    const widget = document.querySelector(`#${elementId} .goog-te-combo`) as HTMLSelectElement;
    if (widget) {
      console.log('🎯 Found widget, attempting to focus and click');
      widget.focus();
      widget.click();
      
      // Also try to trigger change event
      const changeEvent = new Event('change', { bubbles: true });
      widget.dispatchEvent(changeEvent);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Debug info */}
      {isDebugging && (
        <div className="text-xs text-red-500">
          Debug: {initAttempts} attempts
        </div>
      )}
      
      {/* Original Google Translate widget */}
      <div 
        ref={containerRef}
        className="flex items-center cursor-pointer"
        onClick={handleContainerClick}
        style={{ 
          minWidth: isMobile ? '60px' : '80px',
          border: isDebugging ? '1px dashed blue' : 'none',
          background: isDebugging ? 'rgba(0,0,255,0.1)' : 'transparent'
        }}
      >
        <Globe className={`${isMobile ? 'h-4 w-4 mr-1' : 'h-4 w-4 mr-2'} text-gray-600 dark:text-gray-400`} />
        <div 
          id={elementId} 
          className="translate-widget"
          style={{ 
            cursor: 'pointer',
            pointerEvents: 'auto',
            zIndex: 10000,
            border: isDebugging ? '1px solid red' : 'none'
          }}
        />
      </div>
      
      {/* Fallback manual selector for debugging */}
      {isDebugging && (
        <select 
          onChange={handleManualLanguageChange}
          className="text-xs border rounded px-1 py-1"
          style={{ fontSize: '10px' }}
        >
          <option value="fr">FR</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="de">DE</option>
          <option value="it">IT</option>
          <option value="pt">PT</option>
          <option value="ar">AR</option>
        </select>
      )}
      
      {/* Toggle debug mode */}
      <button 
        onClick={() => setIsDebugging(!isDebugging)}
        className="text-xs bg-gray-200 px-1 rounded"
      >
        {isDebugging ? 'Hide Debug' : 'Debug'}
      </button>
    </div>
  );
};

export default GoogleTranslate;
