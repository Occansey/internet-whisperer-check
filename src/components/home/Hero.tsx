
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Function to load the YouTube API
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      } else {
        initializePlayer();
      }
    };

    // Function to initialize the player once API is ready
    const initializePlayer = () => {
      if (!iframeRef.current || !window.YT) return;
      
      playerRef.current = new window.YT.Player(iframeRef.current, {
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 1,
          playlist: "etY08YozPHQ",
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
        },
      });
    };

    // Set up the onYouTubeIframeAPIReady callback
    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };
    
    loadYouTubeAPI();

    return () => {
      // Clean up
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-screen">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="w-full h-full z-0">
          <iframe
            ref={iframeRef}
            id="youtube-video"
            src="https://www.youtube-nocookie.com/embed/etY08YozPHQ?enablejsapi=1&controls=0&rel=0&playsinline=1&cc_load_policy=0&mute=1&loop=1&playlist=etY08YozPHQ"
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full object-cover"
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
