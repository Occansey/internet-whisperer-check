
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/photo-1523712999610-f77fbcfc3843')" }}
    >
      <div className="text-center bg-black/40 p-12 rounded-lg backdrop-blur-sm max-w-md">
        <h1 className="text-8xl font-oval font-bold mb-4 text-solio-yellow">404</h1>
        <p className="text-2xl text-white mb-6">Oops! Page introuvable</p>
        <p className="text-white/80 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button asChild className="bg-solio-yellow text-solio-blue hover:bg-solio-yellow/90">
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
