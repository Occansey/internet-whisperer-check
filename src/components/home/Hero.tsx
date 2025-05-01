
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Overlay vidéo flottante */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Emplacement pour vidéo - à remplacer par votre vidéo réelle */}
        <div className="w-full h-full bg-blue-900 opacity-30 z-0"></div>
      </div>
      
      {/* Contenu */}
      <div className="container relative z-20 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transformons ensemble les défis énergétiques et numériques
          </h1>
          <p className="text-xl mb-8">
            Solutions durables pour un avenir plus sobre, plus digitalisé et plus résilient
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/presentation">Découvrir le groupe</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
