
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
  tr:has(.VIpgJd-ZVi9od-l4eHX-hSRGPd) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
  }
  
  /* Ensure the body doesn't get pushed down */
  body {
    top: 0 !important;
    position: static !important;
  }
  
  /* Hide any element with Google branding images */
  img[src*="googlelogo"],
  img[src*="gstatic.com"],
  img[src*="translate.googleapis.com"] {
    display: none !important;
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
