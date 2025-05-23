
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Presence = () => {
  const locations = [
    {
      id: 'paris',
      name: 'Paris, France',
      address: '4 Rue De Longchamp, 75016, Paris',
      description: 'Siège européen',
      color: 'bg-blue-500'
    },
    {
      id: 'marseille',
      name: 'Marseille, France',
      address: '211 Chem. de la Madrague-Ville, 13015 Marseille',
      description: 'Bureau régional',
      color: 'bg-blue-400'
    },
    {
      id: 'montreal',
      name: 'Montréal, Canada',
      address: '368 R. Notre Dame O, Montréal, QC H2Y 1T9',
      description: 'Bureau Amérique du Nord',
      color: 'bg-red-500'
    },
    {
      id: 'nairobi',
      name: 'Nairobi, Kenya',
      address: 'GEFI Solutions SEZ Limited, 9th Floor, North Tower, Two Rivers Finance and Innovation Center',
      description: 'Africa HQ',
      color: 'bg-green-500'
    },
    {
      id: 'zanzibar',
      name: 'Zanzibar, Tanzania',
      address: 'Fumba Town, Main Entrance, Urban West P.O. Box 3564, Zanzibar',
      description: 'LifeExpress Office',
      color: 'bg-emerald-500'
    },
    {
      id: 'abuja',
      name: 'Abuja, Nigeria',
      address: '9, A-Avenue, Citec Estate, Mbora District, Abuja',
      description: 'Growth Energy Nigeria Limited',
      color: 'bg-orange-500'
    },
    {
      id: 'lagos',
      name: 'Lagos, Nigeria',
      address: '16, Idowu Martins, Victoria Island, Lagos',
      description: 'Growth Energy Nigeria Limited',
      color: 'bg-orange-400'
    },
    {
      id: 'enugu',
      name: 'Enugu, Nigeria',
      address: 'Manamuz; 68B Chime Avenue, New Haven, Enugu',
      description: 'Growth Energy Nigeria Limited',
      color: 'bg-orange-600'
    },
    {
      id: 'bujumbura',
      name: 'Bujumbura, Burundi',
      address: 'Rue Pierre Ngendandumwe, Bujumbura, Burundi',
      description: 'Bureau régional',
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

      {/* Google Maps Section */}
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
          
          {/* Google Maps Embed */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d50901347.94553871!2d-25.665625531250004!3d20.130625331249998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x47e66fec70fb1d8d%3A0x40b82c3688c9460!2s4%20Rue%20de%20Longchamp%2C%2075016%20Paris%2C%20France!3m2!1d48.865033099999995!2d2.287583!4m5!1s0x12c9b8b5c7b7c7b7%3A0x408ab2ae4bb21f0!2s211%20Chem.%20de%20la%20Madrague-Ville%2C%2013015%20Marseille%2C%20France!3m2!1d43.3518!2d5.3656!4m5!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2s368%20Rue%20Notre-Dame%20O%2C%20Montr%C3%A9al%2C%20QC%20H2Y%201T9%2C%20Canada!3m2!1d45.5017!2d-73.5673!4m5!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!3m2!1d-1.2920659!2d36.8219462!4m5!1s0x184ddd5e8d5b5555%3A0x7c7c7c7c7c7c7c7c!2sZanzibar%2C%20Tanzania!3m2!1d-6.165!2d39.2026!4m5!1s0x103b8b2ae68280c1%3A0xdc7566e4f33956cd!2sAbuja%2C%20Nigeria!3m2!1d9.0579!2d7.4951!4m5!1s0x103b8b2ae68280c1%3A0xdc7566e4f33956cd!2sLagos%2C%20Nigeria!3m2!1d6.5244!2d3.3792!5e0!3m2!1sen!2sus!4v1693234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              ></iframe>
            </div>
          </div>

          {/* Location Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
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
