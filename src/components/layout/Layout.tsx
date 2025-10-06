import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import CookieConsent from "@/components/legal/CookieConsent";

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
      <CookieConsent />
    </div>
  );
};

export default Layout;
