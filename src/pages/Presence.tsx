import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import WorldMap from '@/components/WorldMap';

const Presence = () => {
  return (
    <Layout>
      <Helmet>
        <title>Notre présence | Solio</title>
        <meta name="description" content="Découvrez la présence internationale de Solio Group à travers l'Afrique et l'Europe." />
        <meta name="keywords" content="Solio, Présence, Afrique, Europe, Bureaux, International" />
        <link rel="canonical" href="https://solio-group.com/presence" />
      </Helmet>

      <HeroBanner
        title="Notre présence"
        subtitle="Une implantation stratégique en Afrique et en Europe pour accompagner nos clients localement"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-solio-blue mb-12">Carte de notre présence</h2>
          <WorldMap />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-solio-blue via-white to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-solio-blue mb-12">Nos implantations régionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* France */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h3 className="font-bold text-solio-blue text-xl">France</h3>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-sm text-blue-800">Paris - Siège social</span>
                  </div>
                  <p className="text-gray-700 text-sm pl-6">10 Rue de Penthièvre, 75008 Paris, France</p>
                </div>
              </CardContent>
            </Card>

            {/* Côte d'Ivoire */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <h3 className="font-bold text-solio-blue text-xl">Côte d'Ivoire</h3>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-sm text-green-800">Abidjan - Bureau régional</span>
                  </div>
                  <p className="text-gray-700 text-sm pl-6">II Plateaux Vallon, Abidjan, Côte d'Ivoire</p>
                </div>
              </CardContent>
            </Card>

            {/* Sénégal */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <h3 className="font-bold text-solio-blue text-xl">Sénégal</h3>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-yellow-600" />
                    <span className="font-semibold text-sm text-yellow-800">Dakar - Bureau régional</span>
                  </div>
                  <p className="text-gray-700 text-sm pl-6">Plateau, Dakar, Sénégal</p>
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

            {/* Zanzibar */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-emerald-500 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                  <h3 className="font-bold text-solio-blue text-xl">Tanzanie</h3>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-sm text-emerald-800">Zanzibar - LifeExpress Office</span>
                  </div>
                  <p className="text-gray-700 text-sm pl-6">Fumba Town, Main Entrance, Urban West</p>
                  <p className="text-gray-700 text-sm pl-6">P.O. Box 3564, Zanzibar</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presence;
