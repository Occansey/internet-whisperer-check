import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import WorldMap from "@/components/maps/WorldMap";

const Presence = () => {
  const locations = [
    {
      id: 'paris',
      name: 'Paris, France',
      address: '4 Rue De Longchamp, 75016, Paris',
      description: 'Siège européen',
      color: 'bg-blue-500',
      coordinates: { lat: 48.8665, lng: 2.2931 }
    },
    {
      id: 'marseille',
      name: 'Marseille, France',
      address: '211 Chem. de la Madrague-Ville, 13015 Marseille',
      description: 'Bureau régional',
      color: 'bg-blue-400',
      coordinates: { lat: 43.3365, lng: 5.3453 }
    },
    {
      id: 'montreal',
      name: 'Montréal, Canada',
      address: '368 R. Notre Dame O, Montréal, QC H2Y 1T9',
      description: 'Bureau Amérique du Nord',
      color: 'bg-red-500',
      coordinates: { lat: 45.5039, lng: -73.5581 }
    },
    {
      id: 'nairobi',
      name: 'Nairobi, Kenya',
      address: 'GEFI Solutions SEZ Limited, 9th Floor, North Tower, Two Rivers Finance and Innovation Center',
      description: 'Africa HQ',
      color: 'bg-green-500',
      coordinates: { lat: -1.2106, lng: 36.7944 }
    },
    {
      id: 'zanzibar',
      name: 'Zanzibar, Tanzania',
      address: 'Fumba Town, Main Entrance, Urban West P.O. Box 3564, Zanzibar',
      description: 'LifeExpress Office',
      color: 'bg-emerald-500',
      coordinates: { lat: -6.3164, lng: 39.2849 }
    },
    {
      id: 'abuja',
      name: 'Abuja, Nigeria',
      address: '9, A-Avenue, Citec Estate, Mbora District, Abuja',
      description: 'Growth Energy Nigeria Limited',
      color: 'bg-orange-500',
      coordinates: { lat: 9.0723, lng: 7.4913 }
    },
    {
      id: 'lagos',
      name: 'Lagos, Nigeria',
      address: '16, Idowu Martins, Victoria Island, Lagos',
      description: 'Growth Energy Nigeria Limited',
      color: 'bg-orange-400',
      coordinates: { lat: 6.4328, lng: 3.4200 }
    },
    {
      id: 'enugu',
      name: 'Enugu, Nigeria',
      address: 'Manamuz; 68B Chime Avenue, New Haven, Enugu',
      description: 'Growth Energy Nigeria Limited',
      color: 'bg-orange-600',
      coordinates: { lat: 6.4602, lng: 7.5220 }
    },
    {
      id: 'bujumbura',
      name: 'Bujumbura, Burundi',
      address: 'Rue Pierre Ngendandumwe, Bujumbura, Burundi',
      description: 'Bureau régional',
      color: 'bg-purple-500',
      coordinates: { lat: -3.3907, lng: 29.3697 }
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

      {/* Interactive World Map Section */}
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
          
          {/* Professional World Map */}
          <div className="mb-12">
            <WorldMap locations={locations} />
          </div>

          {/* Location Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 ${location.color} rounded-full`}></div>
                  <div>
                    <h3 className="font-semibold text-sm text-solio-blue group-hover:text-blue-600 transition-colors">
                      {location.name.split(',')[0]}
                    </h3>
                    <p className="text-xs text-gray-500">{location.name.split(',')[1]}</p>
                  </div>
                </div>
              </div>
            ))}
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
