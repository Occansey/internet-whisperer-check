
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MissionVision = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-solio-blue to-blue-900 text-white py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre mission & vision
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Bâtir un modèle d'entreprise durable et responsable, au service de la transition énergétique et de la transformation digitale en Afrique et au-delà.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-solio-blue">Notre mission</h2>
              <p className="text-gray-700 mb-4">
                Solio Group s'est donné pour mission de concevoir et mettre en œuvre des solutions durables, adaptées aux besoins opérationnels de nos clients, en alliant expertise technologique, engagement sociétal et performance économique.
              </p>
              <p className="text-gray-700 mb-4">
                Nous nous engageons à:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li className="mb-2">
                  Accélérer la transition énergétique vers des sources renouvelables, en particulier l'énergie solaire
                </li>
                <li className="mb-2">
                  Accompagner la transformation digitale des entreprises pour une meilleure efficacité opérationnelle
                </li>
                <li className="mb-2">
                  Créer de la valeur économique et sociale durable pour nos clients, partenaires et communautés
                </li>
                <li>
                  Former et développer les compétences locales pour assurer l'autonomie des projets
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/0d9f69ea-71eb-4bc3-be79-adcca4923d6c.png" 
                alt="Mission Solio Group" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/6b7f03ad-dec7-4283-911d-9bc3888a0af3.png" 
                alt="Vision Solio Group" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-solio-blue">Notre vision</h2>
              <p className="text-gray-700 mb-4">
                Chez Solio Group, nous croyons en un avenir où la transition énergétique et la transformation digitale vont de pair pour créer un monde plus durable et connecté.
              </p>
              <p className="text-gray-700 mb-4">
                Notre vision est de devenir le partenaire de référence pour:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li className="mb-2">
                  Le développement d'infrastructures énergétiques durables en Afrique, débloquant le potentiel économique du continent
                </li>
                <li className="mb-2">
                  La transformation digitale des entreprises, combinant l'intelligence des données avec l'expertise humaine
                </li>
                <li className="mb-2">
                  L'innovation frugale et efficace, adaptée aux contextes locaux tout en ayant un impact global
                </li>
                <li>
                  La formation de la prochaine génération de leaders et d'innovateurs en Afrique et ailleurs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-solio-blue">Nos valeurs fondamentales</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-yellow-50 border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="text-3xl mr-3">💡</span>
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Nous encourageons la créativité et l'expérimentation pour résoudre les défis complexes de manière efficace et durable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="text-3xl mr-3">🤝</span>
                  Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Nous croyons à la puissance du travail d'équipe et des partenariats pour créer un impact plus important et durable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="text-3xl mr-3">🌱</span>
                  Durabilité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Nous intégrons les considérations environnementales, sociales et économiques dans toutes nos décisions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="text-3xl mr-3">🎯</span>
                  Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Nous visons l'excellence dans tout ce que nous faisons, avec une approche rigoureuse et professionnelle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectifs 2030 Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">Nos objectifs à l'horizon 2030</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Solio Group s'est fixé des objectifs ambitieux pour contribuer à un avenir plus durable et connecté.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-xl">Transition énergétique</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-700">
                  <li className="mb-2">Déployer 100 MW de capacité solaire en Afrique</li>
                  <li className="mb-2">Fournir de l'énergie propre à 500 000 personnes</li>
                  <li>Réduire les émissions de CO2 de 200 000 tonnes</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="text-xl">Transformation digitale</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-700">
                  <li className="mb-2">Accompagner 500 entreprises dans leur digitalisation</li>
                  <li className="mb-2">Développer des solutions IA adaptées aux contextes africains</li>
                  <li>Former 5 000 jeunes africains aux métiers du numérique</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-xl">Impact social</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-700">
                  <li className="mb-2">Créer 1 000 emplois directs et indirects</li>
                  <li className="mb-2">Atteindre la parité hommes-femmes dans nos équipes</li>
                  <li>Allouer 5% de nos bénéfices à des programmes d'éducation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-solio-blue to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Partagez notre vision</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-100">
            Rejoignez-nous dans notre mission pour construire un avenir énergétique plus propre et une économie numérique plus inclusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-solio-yellow text-solio-blue hover:bg-yellow-400">
              <Link to="/filiales">Découvrir nos solutions</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Devenir partenaire</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MissionVision;
