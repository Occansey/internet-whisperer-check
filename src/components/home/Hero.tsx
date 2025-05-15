
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-screen">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="w-full h-full z-0">
          <iframe
            ref={iframeRef}
            src="https://www.canva.com/design/DAGngVhDss0/f2sLq5z-8036fc9yBZ-TzA/watch?utm_content=DAGngVhDss0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h320df6d16c&autoplay=1&loop=1&muted=1"
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full object-cover"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-20 flex items-center justify-start h-full py-20 animate-slideUp">
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
