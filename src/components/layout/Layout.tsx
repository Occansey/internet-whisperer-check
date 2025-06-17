import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GoogleTranslate from "@/components/translate/GoogleTranslate";
import { useLocation } from "react-router-dom";

// Add global CSS styles for specific buttons, animations, and Google Translate customization
const globalStyles = `
  /* Style for the "Nos engagements RH" button on Culture page */
  .culture-page .engagements-button {
    color: #030F2B !important; /* solio-blue */
  }
  .culture-page .engagements-button:hover {
    color: white !important;
  }
  
  /* Style for the "Demander un audit" button on Activites page */
  .activites-page .audit-button {
    color: #030F2B !important; /* solio-blue */
  }
  .activites-page .audit-button:hover {
    color: white !important;
  }
  
  /* Page transitions */
  main {
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* Add more specific transitions for the Media page */
  .media-page main {
    animation-duration: 0.7s;
  }

  /* Google Translate Customization - Hide all Google elements */
  #google_translate_element {
    display: none !important;
  }
  
  .goog-te-banner-frame {
    display: none !important;
  }
  
  .goog-te-ftab {
    display: none !important;
  }
  
  /* Hide the Google Translate tooltip and feedback elements */
  #goog-gt-tt,
  .VIpgJd-suEOdc,
  .VIpgJd-yAWNEb-L7lbkb,
  .skiptranslate[id*="goog"],
  div[id*="goog-gt"],
  .VIpgJd-yAWNEb-hvhgNd,
  .VIpgJd-yAWNEb-hvhgNd-Ud7fr,
  .VIpgJd-yAWNEb-hvhgNd-IuizWc,
  .VIpgJd-yAWNEb-hvhgNd-k77Iif,
  .VIpgJd-yAWNEb-nVMfcd-fmcmS,
  .VIpgJd-yAWNEb-hvhgNd-axAV1,
  .VIpgJd-yAWNEb-hvhgNd-N7Eqid,
  .VIpgJd-yAWNEb-hvhgNd-B7I4Od,
  .VIpgJd-yAWNEb-hvhgNd-UTujCb,
  .VIpgJd-yAWNEb-hvhgNd-eO9mKe,
  .VIpgJd-yAWNEb-hvhgNd-xgov5,
  .VIpgJd-yAWNEb-hvhgNd-bgm6sf,
  .VIpgJd-yAWNEb-hvhgNd-THI6Vb,
  .VIpgJd-yAWNEb-hvhgNd-aXYTce,
  #goog-gt-votingHiddenPane,
  #goog-gt-votingForm,
  iframe[name="votingFrame"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
    z-index: -9999 !important;
  }
  
  /* Hide the entire Google Translate toolbar/banner */
  .VIpgJd-ZVi9od-l4eHX-hSRGPd,
  .VIpgJd-ZVi9od-ORHb-KE6vqe,
  .VIpgJd-ZVi9od-ORHb-bN97Pc,
  .VIpgJd-ZVi9od-LgbsSe,
  .VIpgJd-ZVi9od-xl07Ob-lTBxed,
  .VIpgJd-ZVi9od-TvD9Pc-hSRGPd,
  iframe[src*="translate.google.com"],
  iframe[src*="translate.googleapis.com"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
  }
  
  /* Hide any table elements that contain Google Translate content */
  tbody:has(.VIpgJd-ZVi9od-l4eHX-hSRGPd),
  table:has(.VIpgJd-ZVi9od-l4eHX-hSRGPd),
  tr:has(.VIpgJd-ZVi9od-l4eHX-hSRGPd),
  tbody:has([href*="translate.google.com"]),
  table:has([href*="translate.google.com"]),
  tr:has([href*="translate.google.com"]) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
  }
  
  /* Hide any element containing Google Translate content by content */
  [href*="translate.google.com"],
  [src*="translate.googleapis.com"],
  [src*="translate.google.com"],
  [action*="translate.googleapis.com"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
  }
  
  /* Ensure the body doesn't get pushed down */
  body {
    top: 0 !important;
    position: static !important;
  }
  
  /* Hide any element with Google branding images */
  img[src*="googlelogo"],
  img[src*="gstatic.com"],
  img[src*="translate.googleapis.com"],
  img[alt*="Google"],
  img[alt*="Traduction"] {
    display: none !important;
  }
  
  /* Additional selectors to catch any remaining Google Translate elements */
  [class*="goog-te"],
  [id*="goog-gt"],
  [class*="VIpgJd"],
  .skiptranslate:not(.notranslate) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
  }
  
  .goog-te-menu-value {
    padding: 3px !important;
  }
  
  .goog-te-gadget-simple {
    background-color: transparent !important;
    border-left: none !important;
    border-top: none !important;
    border-bottom: none !important;
    border-right: none !important;
    font-size: 10pt !important;
    line-height: 20px !important;
    display: inline-block !important;
    cursor: pointer !important;
    zoom: 1 !important;
  }
  
  .goog-te-gadget-simple .goog-te-menu-value {
    font-size: 12px !important;
    color: #666 !important;
    text-decoration: none !important;
  }
  
  .goog-te-gadget-simple .goog-te-menu-value:hover {
    text-decoration: none !important;
  }
  
  .goog-te-gadget-simple .goog-te-menu-value span {
    color: blue !important;
  }
  
  .goog-te-menu-frame {
    max-height: 400px !important;
    overflow-y: auto !important;
  }

  /* Force hide all Google Translate elements with !important and multiple selectors */
  div[style*="border-radius: 12px"][id*="goog"],
  div[class*="VIpgJd"][id*="goog"],
  div[data-id][lang][style*="visibility: hidden"],
  form[action*="translate.googleapis.com"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    position: fixed !important;
    top: -99999px !important;
    left: -99999px !important;
    z-index: -99999 !important;
    pointer-events: none !important;
  }
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Add class to body based on current page
  useEffect(() => {
    document.body.className = '';
    if (pathname === '/culture') {
      document.body.classList.add('culture-page');
    } else if (pathname === '/activites') {
      document.body.classList.add('activites-page');
    } else if (pathname === '/media') {
      document.body.classList.add('media-page');
    }
  }, [pathname]);

  // Add effect to force hide Google Translate elements on every render
  useEffect(() => {
    const hideGoogleTranslateElements = () => {
      // Hide any Google Translate elements that might appear
      const googleElements = document.querySelectorAll([
        '#goog-gt-tt',
        '[class*="VIpgJd"]',
        '[id*="goog-gt"]',
        'tbody:has([href*="translate.google.com"])',
        'table:has([href*="translate.google.com"])',
        'tr:has([href*="translate.google.com"])',
        '[href*="translate.google.com"]',
        '[src*="translate.googleapis.com"]',
        '[action*="translate.googleapis.com"]'
      ].join(','));

      googleElements.forEach((element) => {
        if (element) {
          (element as HTMLElement).style.display = 'none';
          (element as HTMLElement).style.visibility = 'hidden';
          (element as HTMLElement).style.opacity = '0';
          (element as HTMLElement).style.height = '0';
          (element as HTMLElement).style.width = '0';
          (element as HTMLElement).style.position = 'absolute';
          (element as HTMLElement).style.top = '-9999px';
          (element as HTMLElement).style.left = '-9999px';
          (element as HTMLElement).style.zIndex = '-9999';
        }
      });
    };

    // Run immediately
    hideGoogleTranslateElements();

    // Run on interval to catch dynamically added elements
    const interval = setInterval(hideGoogleTranslateElements, 500);

    // Use MutationObserver to catch new elements
    const observer = new MutationObserver(hideGoogleTranslateElements);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'id']
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <style>{globalStyles}</style>
      <GoogleTranslate />
      <Header />
      <main className="flex-1 page-transition">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
