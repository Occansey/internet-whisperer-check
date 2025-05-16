
import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Start transition when pathname changes
    setIsTransitioning(true);
    
    // Short timeout to ensure state updates before changing content
    const contentTimer = setTimeout(() => {
      setDisplayChildren(children);
      
      // Small delay before fading in to ensure content has updated
      const fadeInTimer = setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
      
      return () => clearTimeout(fadeInTimer);
    }, 300); // Duration of fade out
    
    return () => clearTimeout(contentTimer);
  }, [pathname, children]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-1">
        <div
          className={cn(
            "transition-opacity duration-300 ease-in-out",
            isTransitioning ? "opacity-0" : "opacity-100"
          )}
        >
          {displayChildren}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
