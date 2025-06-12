
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";

const processSteps = [
  {
    title: "Évaluation des besoins",
    description: "Analyse détaillée des besoins en mobilité électrique de votre organisation"
  },
  {
    title: "Conception technique",
    description: "Élaboration d'une solution sur mesure adaptée à vos contraintes"
  },
  {
    title: "Installation",
    description: "Mise en place des infrastructures de recharge et configuration des systèmes"
  },
  {
    title: "Maintenance",
    description: "Suivi et maintenance préventive et corrective des installations"
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
                <img src="/lovable-uploads/6ae660c2-d5e5-4f50-bad4-b52418a0d06b.png" alt="Growth Energy" className="h-40 mr-4" />
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
            <StatCard value={5} suffix="+" label="partenaires de développement" />
            <StatCard value={115} label="MWP déployés en Afrique" />
            <StatCard value={24} suffix="+" label="entreprises servies" />
            <StatCard value={20} suffix="+" label="clients satisfaits" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-solio-blue">Notre processus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-xl font-bold mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-solio-blue">Actualités</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" /> Mai 2025
                </div>
                <h3 className="text-xl font-bold mb-2">John Okoro invité à Energy Talks</h3>
                <p className="text-gray-600 mb-4">
                  Notre directeur John Okoro a été invité à partager sa vision de la mobilité électrique en Afrique lors de la conférence Energy Talks à Nairobi.
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link to="/actualites/evenements/3">
                    <ExternalLink className="w-4 h-4" /> En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" /> Nairobi, Kenya
                </div>
                <h3 className="text-xl font-bold mb-2">Ouverture du nouveau siège à Nairobi</h3>
                <p className="text-gray-600 mb-4">
                  GEM E-Mobility a inauguré son nouveau siège africain à Nairobi, renforçant sa présence sur le continent et sa capacité à déployer des solutions de mobilité électrique adaptées aux besoins locaux.
                </p>
                <div className="flex items-center text-green-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" /> Inauguration officielle en septembre 2024
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6 text-solio-blue">Projet phare : Fumba Town</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/edf32f55-1dff-4fb5-a043-9370022d89b9.png" 
                  alt="Fumba Town Project" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-700">
                  À Fumba Town, Zanzibar, nous prenons des mesures audacieuses pour créer une communauté 100% indépendante énergétiquement. Cette transformation est alimentée par une énergie propre et renouvelable, et nous sommes fiers d'ouvrir la voie grâce à notre collaboration avec CPS Africa, un leader du développement urbain durable. Ensemble, nous construisons un modèle de vie respectueux de l'environnement qui profitera non seulement à Fumba Town, mais aura également un impact durable sur l'ensemble de la communauté de Zanzibar.
                </p>
                <div className="mt-4">
                  <Button variant="solio" asChild>
                    <Link to="/actualites/projets/7">Découvrir le projet</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GrowthEnergyPage;
