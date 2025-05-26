
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-solio-blue to-blue-900 text-white overflow-hidden">
      {/* Floating elements for modern touch - yellow for homepage */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-solio-yellow/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400/30 rounded-full blur-lg animate-pulse"></div>
      
      {/* Content above video */}
      <div className="container relative z-20 py-20">
        <div className="max-w-4xl">
          {/* Modern badge - kept only on homepage */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-solio-yellow rounded-full mr-2 animate-pulse"></span>
            Innovation • Durabilité • Excellence
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-solio-yellow bg-clip-text text-transparent">
              Transformons ensemble
            </span>
            <br />
            <span className="text-white">
              les défis énergétiques
            </span>
            <br />
            <span className="text-solio-yellow">
              et numériques
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl leading-relaxed">
            Solutions durables pour un avenir plus sobre, plus digitalisé et plus résilient
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-solio-yellow to-yellow-400 text-solio-blue hover:from-yellow-400 hover:to-solio-yellow font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link to="/presentation" className="flex items-center gap-2">
                Découvrir le groupe
                <span className="text-lg">→</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-solio-blue text-white bg-solio-blue hover:bg-white hover:text-solio-blue backdrop-blur-sm font-semibold px-8 py-4 rounded-lg transition-all duration-300">
              <Link to="/contact" className="flex items-center gap-2">
                Nous contacter
                <span className="text-lg">✉</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="w-full h-96 md:h-[500px] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10"></div>
        
        <iframe
          src="https://www.youtube-nocookie.com/embed/qsLOG7ipHZg?autoplay=1&loop=1&playlist=qsLOG7ipHZg&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fgrowth-energy.fr"
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
          loading="eager"
          className="w-full h-full object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1)'
          }}
        ></iframe>
      </div>
      
      {/* Content below video */}
      <div className="container relative z-20 py-20">
        <div className="max-w-4xl">
          {/* Modern stats or features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-white/20">
            <Link to="/filiales/growth-energy" className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
              <div className="w-3 h-3 bg-solio-yellow rounded-full"></div>
              <span className="text-gray-300">Transition énergétique</span>
            </Link>
            <Link to="/filiales/asking" className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">Transformation digitale</span>
            </Link>
            <Link to="/filiales/gem-e-mobility" className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Impact durable</span>
            </Link>
            <Link to="/presence" className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span className="text-gray-300">Présence internationale</span>
            </Link>
          </div>
          
          {/* Discover button centered below features */}
          <div className="mt-8 flex justify-center md:justify-start">
            <Button asChild size="lg" variant="outline" className="border-2 border-solio-yellow text-solio-yellow bg-transparent hover:bg-solio-yellow hover:text-solio-blue backdrop-blur-sm font-semibold px-6 md:px-8 py-3 rounded-lg transition-all duration-300">
              <Link to="/actualites/projets" className="flex items-center gap-2">
                <span className="text-lg">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
