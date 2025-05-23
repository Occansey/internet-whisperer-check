
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Presence = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const locations = [
    {
      id: 'paris',
      name: 'Paris, France',
      description: 'Siège européen',
      position: { top: '25%', left: '48%' },
      color: 'bg-blue-500'
    },
    {
      id: 'marseille',
      name: 'Marseille, France',
      description: 'Bureau régional',
      position: { top: '32%', left: '47%' },
      color: 'bg-blue-400'
    },
    {
      id: 'canada',
      name: 'Toronto, Canada',
      description: 'Bureau Amérique du Nord',
      position: { top: '22%', left: '22%' },
      color: 'bg-red-500'
    },
    {
      id: 'zanzibar',
      name: 'Zanzibar, Tanzanie',
      description: 'Hub Afrique de l\'Est',
      position: { top: '55%', left: '55%' },
      color: 'bg-green-500'
    },
    {
      id: 'congo',
      name: 'Kinshasa, RDC',
      description: 'Bureau Afrique Centrale',
      position: { top: '52%', left: '48%' },
      color: 'bg-yellow-500'
    },
    {
      id: 'burundi',
      name: 'Bujumbura, Burundi',
      description: 'Bureau régional',
      position: { top: '52%', left: '52%' },
      color: 'bg-purple-500'
    },
    {
      id: 'nigeria',
      name: 'Lagos, Nigeria',
      description: 'Hub Afrique de l\'Ouest',
      position: { top: '42%', left: '43%' },
      color: 'bg-orange-500'
    },
    {
      id: 'tunisie',
      name: 'Tunis, Tunisie',
      description: 'Bureau Afrique du Nord',
      position: { top: '30%', left: '46%' },
      color: 'bg-cyan-500'
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Notre Présence Internationale | Solio Group</title>
        <meta name="description" content="Découvrez la présence internationale de Solio Group avec nos bureaux en Europe, Afrique et Amérique du Nord pour accompagner vos projets énergétiques et digitaux." />
        <meta name="keywords" content="présence internationale, bureaux Solio Group, Afrique, Europe, Canada, énergie solaire, transformation digitale" />
        <link rel="canonical" href="https://solio-group.com/presence" />
      </Helmet>

      <HeroBanner 
        title="Notre Présence Internationale"
        description="Un réseau mondial pour accompagner vos projets de transition énergétique et digitale"
        glowColor="indigo"
      />

      {/* Interactive World Map */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-solio-blue">Nos Implantations</h2>
            
            {/* Map Container */}
            <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-2xl overflow-hidden mb-12">
              {/* World Map Background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  {/* Simplified world map paths */}
                  <path
                    d="M200,200 Q250,180 300,200 L350,180 Q400,160 450,180 L500,200 Q550,180 600,200 L650,220 Q700,200 750,220 L800,200"
                    stroke="#1e40af"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* Dynamic Location Pins */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={location.position}
                  onMouseEnter={() => setActiveLocation(location.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  {/* Pin */}
                  <div className={`w-4 h-4 ${location.color} rounded-full shadow-lg animate-pulse group-hover:scale-150 transition-all duration-300`}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-2 h-2 ${location.color} rounded-full animate-ping`}></div>
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 min-w-48 transition-all duration-300 ${
                    activeLocation === location.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
                    <h3 className="font-bold text-solio-blue text-sm">{location.name}</h3>
                    <p className="text-gray-600 text-xs">{location.description}</p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>
              ))}

              {/* Connecting Lines Animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Animated connection lines */}
                <path
                  d="M 220,125 Q 400,100 580,275"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M 480,160 Q 520,200 550,275"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Location Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location) => (
                <Card 
                  key={location.id}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onMouseEnter={() => setActiveLocation(location.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 ${location.color} rounded-full group-hover:animate-pulse`}></div>
                      <MapPin className="w-4 h-4 text-gray-500" />
                    </div>
                    <h3 className="font-bold text-solio-blue mb-2">{location.name}</h3>
                    <p className="text-gray-600 text-sm">{location.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-solio-blue mb-2 group-hover:text-solio-yellow transition-colors">8</div>
              <p className="text-gray-600">Implantations mondiales</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-solio-blue mb-2 group-hover:text-solio-yellow transition-colors">3</div>
              <p className="text-gray-600">Continents</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-solio-blue mb-2 group-hover:text-solio-yellow transition-colors">24/7</div>
              <p className="text-gray-600">Support client</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presence;
