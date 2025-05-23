
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

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
      style={{ backgroundImage: "url('/lovable-uploads/8e08f694-ea04-4afc-a9ce-cf13d17b0b7d.png')" }}
    >
      <div className="text-center bg-black/50 p-12 rounded-lg backdrop-blur-sm max-w-md">
        <h1 className="text-8xl font-bold mb-4 text-solio-yellow">404</h1>
        <p className="text-2xl text-white mb-6">Oops! Page introuvable</p>
        <p className="text-white/80 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="space-y-4">
          <p className="text-solio-yellow text-xl font-medium mb-4">LE FUTUR EST SOLAIRE<br/>LE FUTUR EST DIGITAL</p>
          <Button asChild className="bg-solio-yellow text-solio-blue hover:bg-solio-yellow/90">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
