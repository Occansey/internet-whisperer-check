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
  const [detectedElements, setDetectedElements] = useState<string[]>([]);

  const forceLanguageChange = (langCode: string) => {
    console.log(`🔄 FORCING language change to: ${langCode}`);
    
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

    // Method 3: Try to trigger via Google Translate API directly
    if (window.google?.translate?.TranslateElement) {
      console.log('🎯 Attempting direct Google Translate API call');
      try {
        // Try to access the translate service directly
        const translateService = window.google.translate;
        if (translateService && translateService.translate) {
          console.log('✅ Found Google Translate service, attempting direct translation');
        }
      } catch (error) {
        console.log('❌ Error with direct API:', error);
      }
    }

    // Method 4: Force page reload with language parameter
    if (langCode !== 'auto') {
      console.log(`🔄 Setting language via URL fragment: #googtrans(fr|${langCode})`);
      window.location.hash = `googtrans(fr|${langCode})`;
      // Force a small reload to trigger the translation
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  const debugWidgetStructure = (element: HTMLElement) => {
    console.log('🔍 ENHANCED DEBUG: Full widget HTML structure:', element.innerHTML);
    
    // Look for all possible Google Translate elements
    const allSelects = element.querySelectorAll('select');
    const allSpans = element.querySelectorAll('span');
    const allDivs = element.querySelectorAll('div');
    const googleElements = element.querySelectorAll('[class*="goog-te"]');
    
    console.log('🔍 Found selects:', allSelects.length, allSelects);
    console.log('🔍 Found spans:', allSpans.length, allSpans);
    console.log('🔍 Found divs:', allDivs.length, allDivs);
    console.log('🔍 Found Google Translate elements:', googleElements.length, googleElements);
    
    // Check for any clickable elements
    const clickableElements = element.querySelectorAll('[onclick], [role="button"], [role="listbox"], .goog-te-menu-value, .goog-te-combo');
    console.log('🔍 Found clickable elements:', clickableElements.length, clickableElements);
    
    // Create a detailed report
    const detectedElementsList: string[] = [];
    allSelects.forEach((select, i) => {
      detectedElementsList.push(`Select ${i}: ${select.className || 'no-class'} (${select.options.length} options)`);
    });
    googleElements.forEach((el, i) => {
      detectedElementsList.push(`Google Element ${i}: ${el.className} - ${el.tagName}`);
    });
    
    setDetectedElements(detectedElementsList);
    setWidgetStructure(element.innerHTML);
    
    return { allSelects, allSpans, allDivs, clickableElements, googleElements };
  };

  const initializeTranslate = () => {
    console.log(`🔄 ENHANCED INIT: Attempting to initialize Google Translate for ${elementId} (attempt ${initAttempts + 1})`);
    setInitAttempts(prev => prev + 1);
    
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
          
          // Enhanced debugging after initialization
          setTimeout(() => {
            console.log('🔍 Starting ENHANCED widget debugging...');
            const { allSelects, googleElements } = debugWidgetStructure(element);
            
            // Force visibility and interaction on ALL elements
            const allInteractiveElements = element.querySelectorAll('select, [role="button"], [role="listbox"], .goog-te-menu-value, .goog-te-combo');
            
            allInteractiveElements.forEach((el, index) => {
              const htmlEl = el as HTMLElement;
              console.log(`🎯 Making element ${index} interactive:`, el);
              
              // Force styles
              htmlEl.style.pointerEvents = 'auto';
              htmlEl.style.cursor = 'pointer';
              htmlEl.style.zIndex = '999999';
              htmlEl.style.position = 'relative';
              htmlEl.style.opacity = '1';
              htmlEl.style.visibility = 'visible';
              htmlEl.style.display = 'block';
              
              // Add debug border
              htmlEl.style.border = '3px solid lime';
              htmlEl.style.background = 'rgba(0, 255, 0, 0.2)';
              
              // Add multiple event listeners
              ['click', 'mousedown', 'change', 'input'].forEach(eventType => {
                htmlEl.addEventListener(eventType, (e) => {
                  console.log(`🖱️ ${eventType.toUpperCase()} on element ${index}:`, e.target);
                  if (eventType === 'change' && htmlEl.tagName === 'SELECT') {
                    console.log('🌍 Language changed via select!', (htmlEl as HTMLSelectElement).value);
                  }
                });
              });
            });
            
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
      if (initAttempts < 15) {
        setTimeout(initializeTranslate, 500);
      }
    }
  };

  // Enhanced manual language selector with forced changes
  const handleManualLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    console.log('🌍 MANUAL LANGUAGE CHANGE to:', lang);
    forceLanguageChange(lang);
  };

  // Click handler for the container
  const handleContainerClick = (event: React.MouseEvent) => {
    console.log('🖱️ ENHANCED Container clicked!', event);
    
    const element = document.getElementById(elementId);
    if (element) {
      // Try multiple approaches to find and interact with the widget
      const select = element.querySelector('select') as HTMLSelectElement;
      const menuValue = element.querySelector('.goog-te-menu-value') as HTMLElement;
      const gadget = element.querySelector('.goog-te-gadget-simple') as HTMLElement;
      const allClickable = element.querySelectorAll('[role="button"], [role="listbox"], select, .goog-te-combo');
      
      console.log(`🎯 Found ${allClickable.length} potentially clickable elements`);
      
      if (select) {
        console.log('🎯 Found select, attempting to focus and click');
        select.focus();
        select.click();
        // Also try to open it programmatically
        select.size = select.options.length;
        setTimeout(() => { select.size = 1; }, 2000);
      } else if (menuValue) {
        console.log('🎯 Found menu value, attempting to click');
        menuValue.click();
        menuValue.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
      } else if (gadget) {
        console.log('🎯 Found gadget, attempting to click');
        gadget.click();
      } else {
        console.log('🎯 Trying all clickable elements');
        allClickable.forEach((el, index) => {
          console.log(`Clicking element ${index}:`, el);
          (el as HTMLElement).click();
        });
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

  return (
    <div className="flex items-center space-x-2">
      {/* Enhanced Debug info */}
      {isDebugging && (
        <div className="text-xs text-red-500 max-w-xs border border-red-500 p-2 rounded">
          <div><strong>DEBUG MODE ACTIVE</strong></div>
          <div>Attempts: {initAttempts}</div>
          <div>Element: {elementId}</div>
          <div>Detected: {detectedElements.length} elements</div>
          
          {detectedElements.length > 0 && (
            <details className="mt-1">
              <summary className="cursor-pointer font-bold">Detected Elements</summary>
              <div className="text-xs bg-gray-100 p-1 rounded mt-1 max-h-32 overflow-auto">
                {detectedElements.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </details>
          )}
          
          {widgetStructure && (
            <details className="mt-1">
              <summary className="cursor-pointer font-bold">Widget HTML</summary>
              <div className="text-xs bg-gray-100 p-1 rounded mt-1 max-h-20 overflow-auto">
                {widgetStructure.substring(0, 300)}...
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
          border: isDebugging ? '3px solid red' : 'none',
          background: isDebugging ? 'rgba(255,0,0,0.2)' : 'transparent',
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
            border: isDebugging ? '3px solid blue' : 'none',
            minHeight: '30px',
            minWidth: '80px',
            background: isDebugging ? 'rgba(0,0,255,0.1)' : 'transparent'
          }}
        />
      </div>
      
      {/* ENHANCED fallback manual selector with FORCE functionality */}
      {isDebugging && (
        <div className="flex flex-col space-y-1 border border-green-500 p-2 rounded">
          <div className="text-xs font-bold text-green-600">FORCE LANGUAGE CHANGE</div>
          <select 
            onChange={handleManualLanguageChange}
            className="text-xs border rounded px-2 py-1 bg-green-50"
            title="Force language change (ENHANCED)"
          >
            <option value="">🌍 Force Change Language</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="en">🇺🇸 English</option>
            <option value="es">🇪🇸 Español</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="it">🇮🇹 Italiano</option>
            <option value="pt">🇵🇹 Português</option>
            <option value="ar">🇸🇦 العربية</option>
            <option value="zh">🇨🇳 中文</option>
            <option value="ja">🇯🇵 日本語</option>
            <option value="ko">🇰🇷 한국어</option>
            <option value="ru">🇷🇺 Русский</option>
          </select>
          
          <button 
            onClick={() => setIsDebugging(!isDebugging)}
            className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
          >
            {isDebugging ? 'Hide Debug' : 'Show Debug'}
          </button>
          
          <button 
            onClick={() => {
              console.log('🔄 Manual widget scan triggered');
              const element = document.getElementById(elementId);
              if (element) debugWidgetStructure(element);
            }}
            className="text-xs bg-blue-200 px-2 py-1 rounded hover:bg-blue-300"
          >
            Scan Widget
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleTranslate;
