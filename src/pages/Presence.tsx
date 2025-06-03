import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";
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
      address: '68B Chime Avenue, New Haven, Enugu',
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
        <link rel="canonical" href="https://solio-group.com/presence" />
      </Helmet>

      <HeroBanner
        title="Notre Présence Mondiale"
        description="Un réseau international d'excellence pour vos projets de transition énergétique"
        glowColor="blue"
      />

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              Présence Mondiale
            </div>
            <h2 className="text-4xl font-bold text-solio-blue mb-4">Nos Bureaux Internationaux</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              Implantés sur 3 continents pour vous accompagner au plus près de vos besoins
            </p>
          </div>

          <div className="mb-12">
            <WorldMap locations={locations} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presence;
