
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building, Globe } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Presence = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const locations = [
    {
      id: 'paris',
      name: 'Paris, France',
      address: '4 Rue De Longchamp, 75016, Paris',
      description: 'Siège européen',
      position: { top: '35%', left: '50%' },
      color: 'bg-blue-500'
    },
    {
      id: 'marseille',
      name: 'Marseille, France',
      address: '211 Chem. de la Madrague-Ville, 13015 Marseille',
      description: 'Bureau régional',
      position: { top: '38%', left: '50%' },
      color: 'bg-blue-400'
    },
    {
      id: 'montreal',
      name: 'Montréal, Canada',
      address: '368 R. Notre Dame O, Montréal, QC H2Y 1T9',
      description: 'Bureau Amérique du Nord',
      position: { top: '30%', left: '25%' },
      color: 'bg-red-500'
    },
    {
      id: 'nairobi',
      name: 'Nairobi, Kenya',
      address: 'GEFI Solutions SEZ Limited, 9th Floor, North Tower, Two Rivers Finance and Innovation Center',
      description: 'Africa HQ',
      position: { top: '55%', left: '55%' },
      color: 'bg-green-500'
    },
    {
      id: 'zanzibar',
      name: 'Zanzibar, Tanzania',
      address: 'Fumba Town, Main Entrance, Urban West P.O. Box 3564, Zanzibar',
      description: 'LifeExpress Office',
      position: { top: '58%', left: '56%' },
      color: 'bg-emerald-500'
    },
    {
      id: 'abuja',
      name: 'Abuja, Nigeria',
      address: '9, A-Avenue, Citec Estate, Mbora District, Abuja',
      description: 'Growth Energy Nigeria Limited',
      position: { top: '48%', left: '48%' },
      color: 'bg-orange-500'
    },
    {
      id: 'lagos',
      name: 'Lagos, Nigeria',
      address: '16, Idowu Martins, Victoria Island, Lagos',
      description: 'Growth Energy Nigeria Limited',
      position: { top: '50%', left: '47%' },
      color: 'bg-orange-400'
    },
    {
      id: 'enugu',
      name: 'Enugu, Nigeria',
      address: 'Manamuz; 68B Chime Avenue, New Haven, Enugu',
      description: 'Growth Energy Nigeria Limited',
      position: { top: '51%', left: '48%' },
      color: 'bg-orange-600'
    },
    {
      id: 'bujumbura',
      name: 'Bujumbura, Burundi',
      address: 'Rue Pierre Ngendandumwe, Bujumbura, Burundi',
      description: 'Bureau régional',
      position: { top: '58%', left: '52%' },
      color: 'bg-purple-500'
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
        title="Notre Présence Mondiale"
        description="Un réseau international d'excellence pour vos projets de transition énergétique"
        glowColor="blue"
      />

      {/* Modern World Map Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              Présence Mondiale
            </div>
            <h2 className="text-4xl font-bold text-solio-blue mb-4">Nos Bureaux Internationaux</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Implantés sur 3 continents pour vous accompagner au plus près de vos besoins
            </p>
          </div>
          
          {/* Interactive World Map */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {/* World Map SVG */}
              <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full">
                {/* Ocean gradient background */}
                <defs>
                  <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E0F2FE" />
                    <stop offset="100%" stopColor="#BFDBFE" />
                  </linearGradient>
                  <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F8FAFC" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>
                </defs>
                
                <rect width="1000" height="500" fill="url(#oceanGradient)" />
                
                {/* North America */}
                <path d="M 50 50 Q 100 40 150 60 L 200 70 Q 250 80 290 100 L 320 120 Q 350 140 340 180 L 330 220 Q 310 260 270 270 L 220 260 Q 170 250 130 230 L 90 200 Q 50 160 55 120 L 60 80 Z" 
                      fill="url(#landGradient)" stroke="#CBD5E1" strokeWidth="1"/>
                
                {/* South America */}
                <path d="M 180 260 Q 200 280 220 320 L 240 360 Q 250 400 230 440 L 210 460 Q 180 470 160 450 L 140 420 Q 130 380 140 340 L 160 300 Q 170 280 180 260 Z" 
                      fill="url(#landGradient)" stroke="#CBD5E1" strokeWidth="1"/>
                
                {/* Europe */}
                <path d="M 450 120 Q 490 100 530 110 L 570 120 Q 610 130 600 160 L 590 190 Q 570 210 530 205 L 490 200 Q 450 190 445 160 L 450 140 Z" 
                      fill="url(#landGradient)" stroke="#CBD5E1" strokeWidth="1"/>
                
                {/* Africa */}
                <path d="M 480 220 Q 520 200 560 210 L 600 220 Q 640 240 630 280 L 620 320 Q 610 360 590 400 L 570 440 Q 540 470 510 460 L 480 450 Q 450 430 460 390 L 470 350 Q 475 310 480 270 L 485 240 Z" 
                      fill="url(#landGradient)" stroke="#CBD5E1" strokeWidth="1"/>
                
                {/* Asia */}
                <path d="M 620 120 Q 690 100 760 120 L 820 140 Q 880 160 890 200 L 900 240 Q 890 280 860 300 L 820 320 Q 780 330 740 320 L 700 310 Q 660 300 640 270 L 630 240 Q 620 200 625 160 L 630 140 Z" 
                      fill="url(#landGradient)" stroke="#CBD5E1" strokeWidth="1"/>
                
                {/* Australia */}
                <path d="M 780 370 Q 820 360 860 370 L 900 380 Q 920 400 910 420 L 890 440 Q 860 450 830 445 L 800 440 Q 770 430 775 405 L 780 385 Z" 
                      fill="url(#landGradient)" stroke="#CBD5E1" strokeWidth="1"/>
                
                {/* Connection lines */}
                <g opacity="0.4">
                  <path d="M 200 150 Q 350 130 500 170" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="6,3">
                    <animate attributeName="stroke-dashoffset" values="0;-9" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 500 170 Q 550 200 580 250" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="6,3">
                    <animate attributeName="stroke-dashoffset" values="0;-9" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 580 250 Q 600 320 570 380" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="6,3">
                    <animate attributeName="stroke-dashoffset" values="0;-9" dur="2s" repeatCount="indefinite"/>
                  </path>
                </g>
              </svg>

              {/* Location Pins */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                  style={location.position}
                  onMouseEnter={() => setActiveLocation(location.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  {/* Pin with enhanced animation */}
                  <div className={`relative w-8 h-8 ${location.color} rounded-full shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-white`}>
                    <div className="absolute inset-0 rounded-full animate-ping opacity-30"></div>
                    <div className="relative w-full h-full rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Enhanced Tooltip */}
                  <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 min-w-80 max-w-96 transition-all duration-300 border border-gray-100 ${
                    activeLocation === location.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-4 h-4 ${location.color} rounded-full mt-1 flex-shrink-0`}></div>
                      <div className="flex-1">
                        <h3 className="font-bold text-solio-blue text-lg mb-2">{location.name}</h3>
                        <p className="text-blue-600 text-sm mb-3 font-medium">{location.description}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{location.address}</p>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Details Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-solio-blue">Nos Bureaux par Région</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* France */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h3 className="font-bold text-solio-blue text-xl">France</h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-sm text-blue-800">Paris - Siège européen</span>
                    </div>
                    <p className="text-gray-700 text-sm pl-6">4 Rue De Longchamp, 75016, Paris</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-sm text-blue-800">Marseille - Bureau régional</span>
                    </div>
                    <p className="text-gray-700 text-sm pl-6">211 Chem. de la Madrague-Ville, 13015 Marseille</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Canada */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <h3 className="font-bold text-solio-blue text-xl">Canada</h3>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-sm text-red-800">Montréal - Bureau Amérique du Nord</span>
                  </div>
                  <p className="text-gray-700 text-sm pl-6">368 R. Notre Dame O, Montréal, QC H2Y 1T9</p>
                </div>
              </CardContent>
            </Card>

            {/* Africa HQ */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <h3 className="font-bold text-solio-blue text-xl">Africa HQ</h3>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-sm text-green-800">Nairobi, Kenya</span>
                  </div>
                  <p className="text-gray-700 text-sm pl-6">GEFI Solutions SEZ Limited</p>
                  <p className="text-gray-700 text-sm pl-6">9th Floor, North Tower, Two Rivers Finance and Innovation Center</p>
                </div>
              </CardContent>
            </Card>

            {/* Nigeria */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <h3 className="font-bold text-solio-blue text-xl">Nigeria</h3>
                  <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">Growth Energy Nigeria Limited</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <span className="font-semibold text-sm text-orange-800">Abuja:</span>
                    <p className="text-gray-700 text-sm mt-1">9, A-Avenue, Citec Estate, Mbora District, Abuja</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <span className="font-semibold text-sm text-orange-800">Lagos:</span>
                    <p className="text-gray-700 text-sm mt-1">16, Idowu Martins, Victoria Island, Lagos</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <span className="font-semibold text-sm text-orange-800">Enugu:</span>
                    <p className="text-gray-700 text-sm mt-1">Manamuz; 68B Chime Avenue, New Haven, Enugu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Burundi */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <h3 className="font-bold text-solio-blue text-xl">Burundi</h3>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-purple-600" />
                    <span className="font-semibold text-sm text-purple-800">Bujumbura - Bureau régional</span>
                  </div>
                  <p className="text-gray-700 text-sm pl-6">Rue Pierre Ngendandumwe, Bujumbura, Burundi</p>
                </div>
              </CardContent>
            </Card>

            {/* Tanzania */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-emerald-500 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                  <h3 className="font-bold text-solio-blue text-xl">Tanzania</h3>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">LifeExpress Office</span>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-sm text-emerald-800">Zanzibar</span>
                  </div>
                  <p className="text-gray-700 text-sm pl-6">Fumba Town, Main Entrance, Urban West P.O. Box 3564, Zanzibar</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-solio-blue to-blue-800">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="group">
              <div className="text-5xl font-bold mb-3 group-hover:text-solio-yellow transition-colors">9</div>
              <p className="text-blue-100 text-lg">Bureaux dans le monde</p>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-3 group-hover:text-solio-yellow transition-colors">3</div>
              <p className="text-blue-100 text-lg">Continents</p>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-3 group-hover:text-solio-yellow transition-colors">6</div>
              <p className="text-blue-100 text-lg">Pays</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presence;
