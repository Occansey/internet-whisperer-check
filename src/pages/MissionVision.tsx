
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, BarChart, Globe } from "lucide-react";

const MissionVision = () => {
  const objectives = [
    {
      title: "Accélérer la transition énergétique",
      description: "Favoriser la réduction des émissions de carbone en déployant des solutions énergétiques renouvelables et en accompagnant les entreprises dans leur transition.",
      icon: <Globe className="h-8 w-8 text-solio-blue" />,
      color: "bg-green-50"
    },
    {
      title: "Soutenir la transformation digitale",
      description: "Accompagner les organisations dans leur métamorphose numérique pour optimiser leurs opérations et créer de nouveaux modèles d'affaires.",
      icon: <BarChart className="h-8 w-8 text-solio-blue" />,
      color: "bg-blue-50"
    },
    {
      title: "Construire un écosystème durable",
      description: "Développer des partenariats stratégiques et des solutions intégrées qui génèrent de la valeur à long terme pour l'ensemble des parties prenantes.",
      icon: <Trophy className="h-8 w-8 text-solio-blue" />,
      color: "bg-yellow-50"
    }
  ];

  return (
    <Layout>
      <HeroBanner
        title="Notre Mission & Vision"
        description="Une vision claire guidée par des valeurs fortes pour répondre aux défis de la transition énergétique et digitale."
        glowColor="green"
      />

      <div className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-solio-blue">Notre Mission</h2>
              <p className="text-gray-700 mb-6">
                Accompagner les entreprises et les industries dans leurs projets de transition énergétique et de transformation digitale, en concevant et en déployant des solutions durables et adaptées à leurs besoins opérationnels.
              </p>
              <p className="text-gray-700">
                Nous mettons notre expertise au service de l'optimisation des processus, de la réduction de l'empreinte carbone et de l'amélioration de la performance globale de nos clients, tout en créant un impact positif sur les communautés que nous servons.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/0d9f69ea-71eb-4bc3-be79-adcca4923d6c.png" 
                alt="Notre mission" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/1f05b2ec-7797-4705-aaec-c37c54380da4.png" 
                alt="Notre vision" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold mb-4 text-solio-blue">Notre Vision</h2>
              <p className="text-gray-700 mb-6">
                Devenir un acteur de référence dans la mise en œuvre de solutions énergétiques et numériques durables, reconnues pour leur impact positif sur les entreprises, les communautés et l'environnement.
              </p>
              <p className="text-gray-700">
                Nous aspirons à créer un écosystème où l'innovation technologique devient un levier de croissance économique responsable et de développement social inclusif, en particulier dans les régions où l'accès à l'énergie propre et aux technologies numériques reste un défi.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-8 text-center text-solio-blue">Nos Objectifs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {objectives.map((objective, index) => (
                <Card key={index} className={`border-none shadow-md ${objective.color}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-sm mx-auto mb-4">
                      {objective.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">{objective.title}</h3>
                    <p className="text-gray-700 text-center">{objective.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-solio-blue">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2 text-solio-blue">Innovation</h3>
                <p className="text-gray-600">
                  Nous cultivons un état d'esprit tourné vers l'avenir, en cherchant constamment de nouvelles solutions aux défis existants.
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2 text-solio-blue">Excellence</h3>
                <p className="text-gray-600">
                  Nous nous efforçons d'atteindre les plus hauts standards de qualité dans tout ce que nous entreprenons.
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2 text-solio-blue">Durabilité</h3>
                <p className="text-gray-600">
                  Nous prenons des décisions qui bénéficient autant aux générations actuelles que futures.
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2 text-solio-blue">Intégrité</h3>
                <p className="text-gray-600">
                  Nous maintenons les plus hauts niveaux d'éthique et de transparence dans toutes nos relations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MissionVision;
