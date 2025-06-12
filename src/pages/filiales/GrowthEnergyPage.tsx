
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";
import SubsidiaryNavigation from '@/components/ui/subsidiary-navigation';

const processSteps = [
  {
    title: "Évaluation des besoins",
    description: "Analyse détaillée des besoins énergétique de votre organisation"
  },
  {
    title: "Conception technique", 
    description: "Élaboration d'une solution sur mesure adaptée à vos contraintes"
  },
  {
    title: "Déploiement",
    description: "Réalisation clé en mains des centrales solaires et de batteries (BESS) y compris l'ingénierie, approvisionnement et installation avec leur systèmes de gestion de l'énergie et de suivi à distance."
  },
  {
    title: "Opération et maintenance",
    description: "Suivi et maintenance préventive et corrective des installations et gestion des actifs (Asset Management) afin d'assurer la bonne performance, les indicateurs d'ESG ainsi que le rendement financier de l'investissement."
  }
];

const GrowthEnergyPage = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/6ae660c2-d5e5-4f50-bad4-b52418a0d06b.png" 
                  alt="Growth Energy" 
                  className="h-40 mr-4"
                />
              </div>
              <p className="text-lg mb-6 text-gray-700">
                Growth Energy accélère la transition vers l'énergie solaire en Afrique de l'Est et de l'Ouest, au service des entreprises et des collectivités.
                Nous soutenons des projets commerciaux, industriels et immobiliers, concrétisant ainsi les ambitions énergétiques : nous concevons, finançons et fournissons des solutions fiables et durables à fort impact.
              </p>
              <Button asChild className="bg-solio-blue hover:bg-solio-blue/90">
                <Link to="https://growth-energy.fr/" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </Link>
              </Button>
            </div>
            
            <div className="flex-1">
              <div className="aspect-video rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/631ac8fc-0af4-4b0c-832f-4968e67b872c.png" 
                  alt="Growth Energy Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <StatCard value={5} suffix="+" label="partenaires stratégiques" />
            <StatCard value={3} suffix="+" label="pays d'intervention" />
            <StatCard value={10} suffix="+" label="projets livrés" />
            <StatCard value={15} suffix=" MW" label="installés" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre processus</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              De l'évaluation initiale à la maintenance, nous vous accompagnons à chaque étape de votre transition énergétique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-yellow-600">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos projets phares</h2>
            <p className="text-lg text-gray-600">Découvrez quelques-unes de nos réalisations marquantes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <img 
                  src="/lovable-uploads/970f02bd-513b-4f97-8bf1-5fe21b553b25.png" 
                  alt="Fumba Town Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">Zanzibar, Tanzanie</span>
                </div>
                <h3 className="font-semibold mb-2">Fumba Town</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Communauté 100% indépendante énergétiquement en collaboration avec CPS Africa
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Terminé</span>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video">
                <img 
                  src="/lovable-uploads/9944073d-a36f-4be9-8d3c-36f8ff0890bb.png" 
                  alt="Solar Installation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">Burundi</span>
                </div>
                <h3 className="font-semibold mb-2">Brarudi</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Centrale solaire de 2.8MW pour usine industrielle
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">En cours</span>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video">
                <img 
                  src="/lovable-uploads/8e08f694-ea04-4afc-a9ce-cf13d17b0b7d.png" 
                  alt="Charging Station" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">Burundi</span>
                </div>
                <h3 className="font-semibold mb-2">KIRA Station</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Première station de recharge électrique solaire en Afrique de l'Est
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Terminé</span>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir Growth Energy ?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Expertise locale</h3>
                    <p className="text-gray-600">Une connaissance approfondie des marchés africains et des défis énergétiques locaux</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Solutions sur mesure</h3>
                    <p className="text-gray-600">Conception et installation adaptées aux besoins spécifiques de chaque client</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Accompagnement complet</h3>
                    <p className="text-gray-600">Du financement à la maintenance, nous gérons tous les aspects de votre projet</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Impact durable</h3>
                    <p className="text-gray-600">Contribution significative à la transition énergétique et au développement durable</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/87471889-7d1b-4af3-a3f5-3d8b8bdf600c.png" 
                alt="Solar panels installation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SubsidiaryNavigation />
    </Layout>
  );
};

export default GrowthEnergyPage;
