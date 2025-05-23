
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Presence = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const locations = [
    {
      id: 'paris',
      name: 'Paris, France',
      address: '4 Rue De Longchamp, 75016, Paris',
      description: 'Siège européen',
      position: { top: '25%', left: '48%' },
      color: 'bg-blue-500'
    },
    {
      id: 'marseille',
      name: 'Marseille, France',
      address: '211 Chem. de la Madrague-Ville, 13015 Marseille',
      description: 'Bureau régional',
      position: { top: '32%', left: '47%' },
      color: 'bg-blue-400'
    },
    {
      id: 'montreal',
      name: 'Montréal, Canada',
      address: '368 R. Notre Dame O, Montréal, QC H2Y 1T9',
      description: 'Bureau Amérique du Nord',
      position: { top: '22%', left: '22%' },
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
      position: { top: '42%', left: '43%' },
      color: 'bg-orange-500'
    },
    {
      id: 'lagos',
      name: 'Lagos, Nigeria',
      address: '16, Idowu Martins, Victoria Island, Lagos',
      description: 'Growth Energy Nigeria Limited',
      position: { top: '45%', left: '43%' },
      color: 'bg-orange-400'
    },
    {
      id: 'enugu',
      name: 'Enugu, Nigeria',
      address: 'Manamuz; 68B Chime Avenue, New Haven, Enugu',
      description: 'Growth Energy Nigeria Limited',
      position: { top: '46%', left: '44%' },
      color: 'bg-orange-600'
    },
    {
      id: 'bujumbura',
      name: 'Bujumbura, Burundi',
      address: 'Rue Pierre Ngendandumwe, Bujumbura, Burundi',
      description: 'Bureau régional',
      position: { top: '52%', left: '52%' },
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
        title="Notre Présence Internationale"
        description="Un réseau mondial pour accompagner vos projets de transition énergétique et digitale"
        glowColor="indigo"
      />

      {/* Interactive World Map */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-solio-blue">Nos Implantations Mondiales</h2>
            
            {/* World Map Container */}
            <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl shadow-2xl overflow-hidden mb-12 border">
              {/* Detailed World Map Background */}
              <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full">
                {/* Ocean background */}
                <rect width="1000" height="500" fill="#E0F2FE" />
                
                {/* North America */}
                <path d="M 80 80 Q 120 60 180 80 L 220 90 Q 280 100 320 120 L 350 140 Q 380 160 370 200 L 360 240 Q 340 280 300 290 L 250 280 Q 200 270 160 250 L 120 220 Q 80 180 85 140 L 90 100 Z" 
                      fill="#22C55E" stroke="#16A34A" strokeWidth="1" opacity="0.8"/>
                
                {/* South America */}
                <path d="M 200 280 Q 220 300 240 340 L 260 380 Q 270 420 250 460 L 230 480 Q 200 490 180 470 L 160 440 Q 150 400 160 360 L 180 320 Q 190 300 200 280 Z" 
                      fill="#22C55E" stroke="#16A34A" strokeWidth="1" opacity="0.8"/>
                
                {/* Europe */}
                <path d="M 420 100 Q 460 80 500 90 L 540 100 Q 580 110 570 140 L 560 170 Q 540 190 500 185 L 460 180 Q 420 170 415 140 L 420 120 Z" 
                      fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" opacity="0.8"/>
                
                {/* Africa */}
                <path d="M 440 200 Q 480 180 520 190 L 560 200 Q 600 220 590 260 L 580 300 Q 570 340 550 380 L 530 420 Q 500 450 470 440 L 440 430 Q 410 410 420 370 L 430 330 Q 435 290 440 250 L 445 220 Z" 
                      fill="#F59E0B" stroke="#D97706" strokeWidth="1" opacity="0.8"/>
                
                {/* Asia */}
                <path d="M 580 100 Q 650 80 720 100 L 780 120 Q 840 140 850 180 L 860 220 Q 850 260 820 280 L 780 300 Q 740 310 700 300 L 660 290 Q 620 280 600 250 L 590 220 Q 580 180 585 140 L 590 120 Z" 
                      fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1" opacity="0.8"/>
                
                {/* Australia */}
                <path d="M 740 350 Q 780 340 820 350 L 860 360 Q 880 380 870 400 L 850 420 Q 820 430 790 425 L 760 420 Q 730 410 735 385 L 740 365 Z" 
                      fill="#EC4899" stroke="#DB2777" strokeWidth="1" opacity="0.8"/>
                
                {/* Connection lines between offices */}
                <path d="M 220 150 Q 350 120 480 170" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="8,4">
                  <animate attributeName="stroke-dashoffset" values="0;-12" dur="3s" repeatCount="indefinite"/>
                </path>
                <path d="M 480 170 Q 520 200 530 250" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="8,4">
                  <animate attributeName="stroke-dashoffset" values="0;-12" dur="3s" repeatCount="indefinite"/>
                </path>
                <path d="M 530 250 Q 540 300 520 350" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="8,4">
                  <animate attributeName="stroke-dashoffset" values="0;-12" dur="3s" repeatCount="indefinite"/>
                </path>
                
                {/* Grid lines for reference */}
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#CBD5E1" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="1000" height="500" fill="url(#grid)" />
                
                {/* Continent labels */}
                <text x="200" y="180" fill="#1F2937" fontSize="14" fontWeight="bold" textAnchor="middle" opacity="0.7">Amérique du Nord</text>
                <text x="220" y="400" fill="#1F2937" fontSize="12" fontWeight="bold" textAnchor="middle" opacity="0.7">Amérique du Sud</text>
                <text x="500" y="150" fill="#1F2937" fontSize="14" fontWeight="bold" textAnchor="middle" opacity="0.7">Europe</text>
                <text x="520" y="320" fill="#1F2937" fontSize="14" fontWeight="bold" textAnchor="middle" opacity="0.7">Afrique</text>
                <text x="720" y="200" fill="#1F2937" fontSize="14" fontWeight="bold" textAnchor="middle" opacity="0.7">Asie</text>
                <text x="800" y="390" fill="#1F2937" fontSize="12" fontWeight="bold" textAnchor="middle" opacity="0.7">Océanie</text>
              </svg>

              {/* Dynamic Location Pins */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                  style={location.position}
                  onMouseEnter={() => setActiveLocation(location.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  {/* Pin with pulse animation */}
                  <div className={`relative w-6 h-6 ${location.color} rounded-full shadow-lg group-hover:scale-125 transition-all duration-300`}>
                    <div className="absolute inset-0 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-full h-full rounded-full flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Enhanced Tooltip */}
                  <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 min-w-72 max-w-80 transition-all duration-300 border border-gray-200 ${
                    activeLocation === location.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-3 h-3 ${location.color} rounded-full mt-1 flex-shrink-0`}></div>
                      <div className="flex-1">
                        <h3 className="font-bold text-solio-blue text-sm mb-1">{location.name}</h3>
                        <p className="text-gray-500 text-xs mb-2">{location.description}</p>
                        <p className="text-gray-700 text-xs leading-relaxed">{location.address}</p>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Regional Office Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* France */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <h3 className="font-bold text-solio-blue text-lg">France</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4 text-gray-500" />
                        <span className="font-semibold text-sm">Paris - Siège européen</span>
                      </div>
                      <p className="text-gray-600 text-sm pl-6">4 Rue De Longchamp, 75016, Paris</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4 text-gray-500" />
                        <span className="font-semibold text-sm">Marseille - Bureau régional</span>
                      </div>
                      <p className="text-gray-600 text-sm pl-6">211 Chem. de la Madrague-Ville, 13015 Marseille</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Canada */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h3 className="font-bold text-solio-blue text-lg">Canada</h3>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-gray-500" />
                      <span className="font-semibold text-sm">Montréal - Bureau Amérique du Nord</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-6">368 R. Notre Dame O, Montréal, QC H2Y 1T9</p>
                  </div>
                </CardContent>
              </Card>

              {/* Africa HQ */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h3 className="font-bold text-solio-blue text-lg">Africa HQ</h3>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-gray-500" />
                      <span className="font-semibold text-sm">Nairobi, Kenya</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-6">GEFI Solutions SEZ Limited</p>
                    <p className="text-gray-600 text-sm pl-6">9th Floor, North Tower, Two Rivers Finance and Innovation Center</p>
                  </div>
                </CardContent>
              </Card>

              {/* Nigeria */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h3 className="font-bold text-solio-blue text-lg">Nigeria</h3>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Growth Energy Nigeria Limited</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-sm">Abuja:</span>
                      <p className="text-gray-600 text-sm">9, A-Avenue, Citec Estate, Mbora District, Abuja</p>
                    </div>
                    <div>
                      <span className="font-semibold text-sm">Lagos:</span>
                      <p className="text-gray-600 text-sm">16, Idowu Martins, Victoria Island, Lagos</p>
                    </div>
                    <div>
                      <span className="font-semibold text-sm">Enugu:</span>
                      <p className="text-gray-600 text-sm">Manamuz; 68B Chime Avenue, New Haven, Enugu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Burundi */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <h3 className="font-bold text-solio-blue text-lg">Burundi</h3>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-gray-500" />
                      <span className="font-semibold text-sm">Bujumbura - Bureau régional</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-6">Rue Pierre Ngendandumwe, Bujumbura, Burundi</p>
                  </div>
                </CardContent>
              </Card>

              {/* Tanzania */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-emerald-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <h3 className="font-bold text-solio-blue text-lg">Tanzania</h3>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">LifeExpress Office</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-gray-500" />
                      <span className="font-semibold text-sm">Zanzibar</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-6">Fumba Town, Main Entrance, Urban West P.O. Box 3564, Zanzibar</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-solio-blue mb-2 group-hover:text-solio-yellow transition-colors">9</div>
              <p className="text-gray-600">Implantations mondiales</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-solio-blue mb-2 group-hover:text-solio-yellow transition-colors">3</div>
              <p className="text-gray-600">Continents</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presence;
