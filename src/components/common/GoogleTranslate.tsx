
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
  const [widgetStructure, setWidgetStructure] = useState<string>('');

  const debugWidgetStructure = (element: HTMLElement) => {
    console.log('🔍 Full widget HTML structure:', element.innerHTML);
    
    // Look for all possible Google Translate elements
    const allSelects = element.querySelectorAll('select');
    const allSpans = element.querySelectorAll('span');
    const allDivs = element.querySelectorAll('div');
    
    console.log('🔍 Found selects:', allSelects.length, allSelects);
    console.log('🔍 Found spans:', allSpans.length, allSpans);
    console.log('🔍 Found divs:', allDivs.length, allDivs);
    
    // Check for any clickable elements
    const clickableElements = element.querySelectorAll('[onclick], [role="button"], [role="listbox"], .goog-te-menu-value');
    console.log('🔍 Found clickable elements:', clickableElements.length, clickableElements);
    
    setWidgetStructure(element.innerHTML);
    
    return { allSelects, allSpans, allDivs, clickableElements };
  };

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
            autoDisplay: false,
            multilanguagePage: true
          }, elementId);
          
          console.log(`✅ Google Translate initialized successfully for ${elementId}`);
          
          // Enhanced debugging after initialization
          setTimeout(() => {
            console.log('🔍 Starting enhanced widget debugging...');
            const { allSelects, clickableElements } = debugWidgetStructure(element);
            
            // Try to find the actual dropdown
            const widget = element.querySelector('.goog-te-combo') as HTMLSelectElement;
            const menuValue = element.querySelector('.goog-te-menu-value') as HTMLElement;
            const gadget = element.querySelector('.goog-te-gadget-simple') as HTMLElement;
            
            console.log('🎯 Traditional widget (.goog-te-combo):', widget);
            console.log('🎯 Menu value (.goog-te-menu-value):', menuValue);
            console.log('🎯 Gadget (.goog-te-gadget-simple):', gadget);
            
            // If we found a select element, make it work
            if (allSelects.length > 0) {
              console.log('✅ Found select element(s), setting up click handlers');
              allSelects.forEach((select, index) => {
                console.log(`🎯 Select ${index}:`, select);
                select.style.border = '2px solid red';
                select.style.background = 'yellow';
                select.style.pointerEvents = 'auto';
                select.style.cursor = 'pointer';
                select.style.zIndex = '999999';
                select.style.position = 'relative';
                
                select.addEventListener('change', (e) => {
                  console.log('🌍 Language changed via select!', e.target);
                  console.log('🌍 Selected value:', (e.target as HTMLSelectElement).value);
                });
                
                select.addEventListener('click', (e) => {
                  console.log('🖱️ Select clicked!', e.target);
                });
              });
            }
            
            // Also try with menu value approach
            if (menuValue) {
              console.log('✅ Found menu value, setting up click handler');
              menuValue.style.border = '2px solid blue';
              menuValue.style.background = 'lightblue';
              menuValue.style.cursor = 'pointer';
              
              menuValue.addEventListener('click', (e) => {
                console.log('🖱️ Menu value clicked!', e.target);
                // Try to trigger the dropdown
                const event = new MouseEvent('mousedown', { bubbles: true });
                menuValue.dispatchEvent(event);
              });
            }
            
            // Set up a mutation observer to catch dynamic changes
            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                  console.log('🔄 DOM mutation detected, re-scanning for widgets');
                  setTimeout(() => debugWidgetStructure(element), 100);
                }
              });
            });
            
            observer.observe(element, { childList: true, subtree: true });
            
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

  // Manual language selector as fallback
  const handleManualLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    console.log('🌍 Manual language change to:', lang);
    
    // Try to find and trigger the actual Google Translate dropdown
    const element = document.getElementById(elementId);
    if (element) {
      const select = element.querySelector('select') as HTMLSelectElement;
      if (select) {
        console.log('🎯 Found Google Translate select, setting value:', lang);
        select.value = lang;
        
        // Trigger change event
        const changeEvent = new Event('change', { bubbles: true });
        select.dispatchEvent(changeEvent);
        
        // Also try click
        select.click();
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
    
    const element = document.getElementById(elementId);
    if (element) {
      // Try multiple approaches to find and interact with the widget
      const select = element.querySelector('select') as HTMLSelectElement;
      const menuValue = element.querySelector('.goog-te-menu-value') as HTMLElement;
      const gadget = element.querySelector('.goog-te-gadget-simple') as HTMLElement;
      
      if (select) {
        console.log('🎯 Found select, attempting to focus and click');
        select.focus();
        select.click();
      } else if (menuValue) {
        console.log('🎯 Found menu value, attempting to click');
        menuValue.click();
      } else if (gadget) {
        console.log('🎯 Found gadget, attempting to click');
        gadget.click();
      } else {
        console.log('❌ No interactive elements found');
      }
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Debug info */}
      {isDebugging && (
        <div className="text-xs text-red-500 max-w-xs">
          <div>Attempts: {initAttempts}</div>
          <div>Element: {elementId}</div>
          {widgetStructure && (
            <details className="mt-1">
              <summary className="cursor-pointer">Widget HTML</summary>
              <div className="text-xs bg-gray-100 p-1 rounded mt-1 max-h-20 overflow-auto">
                {widgetStructure.substring(0, 200)}...
              </div>
            </details>
          )}
        </div>
      )}
      
      {/* Original Google Translate widget */}
      <div 
        ref={containerRef}
        className="flex items-center cursor-pointer"
        onClick={handleContainerClick}
        style={{ 
          minWidth: isMobile ? '60px' : '80px',
          border: isDebugging ? '2px dashed blue' : 'none',
          background: isDebugging ? 'rgba(0,0,255,0.1)' : 'transparent',
          padding: '4px'
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
            border: isDebugging ? '2px solid red' : 'none',
            minHeight: '20px',
            minWidth: '60px'
          }}
        />
      </div>
      
      {/* Enhanced fallback manual selector */}
      {isDebugging && (
        <div className="flex flex-col space-y-1">
          <select 
            onChange={handleManualLanguageChange}
            className="text-xs border rounded px-1 py-1"
            style={{ fontSize: '10px' }}
            title="Manual language selector (fallback)"
          >
            <option value="">Select Language</option>
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="it">Italiano</option>
            <option value="pt">Português</option>
            <option value="ar">العربية</option>
          </select>
          
          <button 
            onClick={() => setIsDebugging(!isDebugging)}
            className="text-xs bg-gray-200 px-1 rounded"
          >
            {isDebugging ? 'Hide Debug' : 'Show Debug'}
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleTranslate;
