
import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

// Add global CSS styles for specific buttons and animations
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

  /* Google Translate Widget Styling */
  .translate-widget, .translate-widget-mobile {
    font-size: 12px;
  }

  .translate-widget .goog-te-combo,
  .translate-widget-mobile .goog-te-combo {
    font-size: 12px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    padding: 2px 4px;
    background: white;
    color: #374151;
  }

  .dark .translate-widget .goog-te-combo,
  .dark .translate-widget-mobile .goog-te-combo {
    background: #374151;
    color: #f3f4f6;
    border-color: #4b5563;
  }

  .translate-widget .goog-te-gadget,
  .translate-widget-mobile .goog-te-gadget {
    font-family: inherit;
  }

  .translate-widget .goog-te-gadget .goog-te-combo,
  .translate-widget-mobile .goog-te-gadget .goog-te-combo {
    margin: 0;
  }

  /* Hide Google Translate banner */
  .goog-te-banner-frame {
    display: none !important;
  }

  body {
    top: 0 !important;
  }

  .skiptranslate {
    display: none;
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
      <Header />
      <main className="flex-1 page-transition">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
